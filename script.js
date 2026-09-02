document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const header = document.getElementById('main-header');
    const processBtn = document.getElementById('process-btn');
    const printBtn = document.getElementById('print-btn');
    const labInput = document.getElementById('lab-input');
    const resultsOutput = document.getElementById('results-output');
    const langFaBtn = document.getElementById('lang-fa');
    const langEnBtn = document.getElementById('lang-en');
    const body = document.body;

    // --- State ---
    let currentTheme = 'light';
    let currentLang = 'en';

    // --- Translations Database ---
    const translations = {
        fa: {
            headerTitle: "LabVision",
            inputHeader: "اطلاعات برگه آزمایش",
            selectGender: "جنسیت:",
            genderMale: "مرد",
            genderFemale: "زن",
            inputHint: "هر آیتم را در یک خط جدید وارد کنید. مثال: Glucose: 95",
            processButton: "تحلیل نتایج",
            printButton: "چاپ / خروجی PDF",
            resultsHeader: "تفسیر نتایج",
            resultsPlaceholder: "نتایج تحلیل آزمایش شما در اینجا نمایش داده می‌شود.",
            statusLow: "پایین", statusNormal: "نرمال", statusHigh: "بالا",
            yourValue: "مقدار شما", normalRange: "محدوده نرمال", explanation: "توضیحات",
            emptyInputError: "لطفاً حداقل یک آیتم آزمایش وارد کنید.",
            noValidItems: "هیچ آیتم قابل تشخیصی در ورودی پیدا نشد. لطفاً از قالب «نام آزمایش: مقدار» استفاده کنید.",
            unrecognized: "این آزمایش در دیتابیس محلی شناخته نشد. نام آزمایش را بررسی کنید یا با پزشک خود مشورت نمایید.",
            summaryText: (total, abnormal) => abnormal === 0
                ? `از مجموع ${total} آیتم بررسی‌شده، همه در محدوده نرمال قرار دارند.`
                : `از مجموع ${total} آیتم بررسی‌شده، ${abnormal} مورد خارج از محدوده نرمال است.`,
            disclaimer: "این تحلیل صرفاً جنبه اطلاعاتی دارد و جایگزین نظر پزشک متخصص نیست."
        },
        en: {
            headerTitle: "LabVision",
            inputHeader: "Lab Report Data",
            selectGender: "Gender:",
            genderMale: "Male",
            genderFemale: "Female",
            inputHint: "Enter each item on a new line. e.g., Glucose: 95",
            processButton: "Analyze Results",
            printButton: "Print / Export PDF",
            resultsHeader: "Results Interpretation",
            resultsPlaceholder: "Your lab analysis results will be displayed here.",
            statusLow: "Low", statusNormal: "Normal", statusHigh: "High",
            yourValue: "Your Value", normalRange: "Normal Range", explanation: "Explanation",
            emptyInputError: "Please enter at least one lab item.",
            noValidItems: "No recognizable items found. Please use the format \"Test Name: Value\".",
            unrecognized: "This test was not found in the local database. Please check the name or consult your doctor.",
            summaryText: (total, abnormal) => abnormal === 0
                ? `Of ${total} item(s) reviewed, all are within the normal range.`
                : `Of ${total} item(s) reviewed, ${abnormal} are outside the normal range.`,
            disclaimer: "This analysis is for informational purposes only and is not a substitute for professional medical advice."
        }
    };

    // --- Lab Data "Database" is loaded globally from database.js (100% offline, no network calls) ---

    // --- Functions ---
    const toggleTheme = () => {
        body.classList.toggle('dark-theme');
        currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    };

    const switchLanguage = (lang) => {
        if (lang === currentLang) return;

        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

        langFaBtn.classList.toggle('active', lang === 'fa');
        langEnBtn.classList.toggle('active', lang === 'en');

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        labInput.placeholder = "Hb: 14.5\nPlatelet: 250\nTSH: 2.1";

        if (labInput.value.trim() !== '') {
            interpretResults();
        }
    };

    // Find a test's key in labData by exact key or by alias (case-insensitive)
    const findTestKey = (name) => {
        const lowerCaseName = name.toLowerCase().trim();
        if (!lowerCaseName) return null;
        for (const key in labData) {
            if (key.toLowerCase() === lowerCaseName) return key;
            const entry = labData[key];
            if (entry.aliases && entry.aliases.some(a => a.toLowerCase() === lowerCaseName)) {
                return key;
            }
        }
        return null;
    };

    // Parse a single input line into { rawName, value } or null if no number found
    const parseLine = (line) => {
        // Split on first ':' or first '-' (whichever comes first) to separate name from value
        let separatorIndex = line.indexOf(':');
        if (separatorIndex === -1) separatorIndex = line.indexOf('-');
        let namePart, valuePart;
        if (separatorIndex !== -1) {
            namePart = line.slice(0, separatorIndex);
            valuePart = line.slice(separatorIndex + 1);
        } else {
            namePart = line;
            valuePart = line;
        }
        const numberMatch = valuePart.match(/-?\d+(\.\d+)?/);
        if (!numberMatch) return null;
        return {
            rawName: namePart.trim(),
            value: parseFloat(numberMatch[0])
        };
    };

    // Fully local, offline interpretation engine — no network requests of any kind.
    const interpretResults = () => {
        const input = labInput.value.trim();
        const t = translations[currentLang];

        if (!input) {
            resultsOutput.innerHTML = `<p class="placeholder" data-lang-key="resultsPlaceholder">${t.resultsPlaceholder}</p>`;
            return;
        }

        const selectedGender = document.querySelector('input[name="gender"]:checked').value; // 'male' | 'female'

        const lines = input.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        const parsedItems = [];

        lines.forEach(line => {
            const parsed = parseLine(line);
            if (!parsed) return;
            const key = findTestKey(parsed.rawName);
            parsedItems.push({
                rawName: parsed.rawName,
                value: parsed.value,
                key: key
            });
        });

        if (parsedItems.length === 0) {
            resultsOutput.innerHTML = `<p class="placeholder" style="color:#dc3545;">${t.noValidItems}</p>`;
            return;
        }

        resultsOutput.innerHTML = '';

        let abnormalCount = 0;
        const cardsFragment = document.createDocumentFragment();

        parsedItems.forEach(item => {
            const card = document.createElement('div');

            if (!item.key) {
                card.className = 'result-item';
                const h3 = document.createElement('h3');
                h3.textContent = item.rawName;
                const p1 = document.createElement('p');
                const strong1 = document.createElement('strong');
                strong1.textContent = t.yourValue + ': ';
                p1.appendChild(strong1);
                p1.appendChild(document.createTextNode(String(item.value)));
                const p2 = document.createElement('p');
                p2.textContent = t.unrecognized;
                card.appendChild(h3);
                card.appendChild(p1);
                card.appendChild(p2);
                cardsFragment.appendChild(card);
                return;
            }

            const data = labData[item.key];
            const range = data.range[selectedGender] || data.range.all;
            let status, statusClass;
            if (item.value < range.min) {
                status = t.statusLow; statusClass = 'low';
            } else if (item.value > range.max) {
                status = t.statusHigh; statusClass = 'high';
            } else {
                status = t.statusNormal; statusClass = 'normal';
            }
            if (statusClass !== 'normal') abnormalCount++;

            const interpretationKey = statusClass; // 'low' | 'normal' | 'high'
            const explanationText = data.interpretation[interpretationKey][currentLang];
            const unit = data.unit ? ` ${data.unit}` : '';

            card.className = `result-item ${statusClass}`;

            const h3 = document.createElement('h3');
            h3.textContent = `${data.name[currentLang]} — `;
            const statusSpan = document.createElement('span');
            statusSpan.className = statusClass;
            statusSpan.textContent = status;
            h3.appendChild(statusSpan);

            const pValue = document.createElement('p');
            const strongValue = document.createElement('strong');
            strongValue.textContent = t.yourValue + ': ';
            pValue.appendChild(strongValue);
            pValue.appendChild(document.createTextNode(`${item.value}${unit}`));

            const pRange = document.createElement('p');
            const strongRange = document.createElement('strong');
            strongRange.textContent = t.normalRange + ': ';
            pRange.appendChild(strongRange);
            pRange.appendChild(document.createTextNode(`${range.min} - ${range.max}${unit}`));

            const pExplain = document.createElement('p');
            const strongExplain = document.createElement('strong');
            strongExplain.textContent = t.explanation + ': ';
            pExplain.appendChild(strongExplain);
            pExplain.appendChild(document.createTextNode(explanationText));

            card.appendChild(h3);
            card.appendChild(pValue);
            card.appendChild(pRange);
            card.appendChild(pExplain);
            cardsFragment.appendChild(card);
        });

        // Summary line
        const summaryElement = document.createElement('p');
        summaryElement.style.textAlign = 'center';
        summaryElement.style.fontStyle = 'italic';
        summaryElement.style.marginBottom = '1rem';
        summaryElement.textContent = t.summaryText(parsedItems.length, abnormalCount);
        resultsOutput.appendChild(summaryElement);

        resultsOutput.appendChild(cardsFragment);

        // Disclaimer
        const disclaimerElement = document.createElement('p');
        disclaimerElement.style.textAlign = 'center';
        disclaimerElement.style.fontSize = '0.8rem';
        disclaimerElement.style.opacity = '0.7';
        disclaimerElement.style.marginTop = '1.5rem';
        disclaimerElement.textContent = t.disclaimer;
        resultsOutput.appendChild(disclaimerElement);
    };

    // Uses the browser's built-in print dialog. On virtually every OS this dialog
    // offers a "Save as PDF" destination, so this gives PDF export with zero
    // external libraries and zero network requests.
    const printReport = () => {
        window.print();
    };

    // --- Event Listeners ---
    header.addEventListener('click', toggleTheme);
    processBtn.addEventListener('click', interpretResults);
    printBtn.addEventListener('click', printReport);
    langFaBtn.addEventListener('click', () => switchLanguage('fa'));
    langEnBtn.addEventListener('click', () => switchLanguage('en'));

    // Set initial language
    switchLanguage('fa');
});
