document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const themeToggleBtn = document.getElementById('theme-toggle');
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
            unparsedQualitative: "نتیجه این آزمایش کیفی است (مثبت/منفی). مقدار وارد‌شده قابل تشخیص نبود.",
            unparsedQuantitative: "این آزمایش عددی است اما مقدار عددی معتبری در ورودی یافت نشد.",
            resultLabel: "نتیجه",
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
            unparsedQualitative: "This is a qualitative test (positive/negative). The entered value could not be recognized.",
            unparsedQuantitative: "This is a numeric test, but no valid number was found in the input.",
            resultLabel: "Result",
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

    // Keyword sets used to interpret qualitative (positive/negative) test results,
    // in both Persian and English, entered by the user as free text.
    const QUALITATIVE_KEYWORDS = {
        negative: ["negative", "neg", "not detected", "non-reactive", "nonreactive", "no growth", "normal", "susceptible", "low risk", "mismatch", "منفی", "ندارد", "دیده نشد", "رشد نکرد", "طبیعی", "حساس", "کم خطر", "کم‌خطر", "عدم تطابق"],
        positive: ["positive", "pos", "detected", "reactive", "present", "abnormal", "resistant", "high risk", "match", "growth", "مثبت", "دارد", "رشد کرد", "غیرطبیعی", "مقاوم", "پرخطر", "پر خطر", "تطابق", "واکنش‌دهنده", "واکنش دهنده"]
    };

    // Match free-text qualitative input against known keyword sets.
    // Longer/more specific keywords are checked first to avoid partial mismatches.
    const matchQualitativeValue = (rawValue) => {
        const text = rawValue.toLowerCase().trim();
        if (!text) return null;
        const sortedNegative = [...QUALITATIVE_KEYWORDS.negative].sort((a, b) => b.length - a.length);
        const sortedPositive = [...QUALITATIVE_KEYWORDS.positive].sort((a, b) => b.length - a.length);
        for (const kw of sortedNegative) {
            if (text.includes(kw.toLowerCase())) return 'negative';
        }
        for (const kw of sortedPositive) {
            if (text.includes(kw.toLowerCase())) return 'positive';
        }
        return null;
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

    // Parse a single input line into { rawName, rawValue }.
    // rawValue is kept as raw text — numeric tests extract a number from it later,
    // qualitative tests match keywords against it directly.
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
            valuePart = '';
        }
        return {
            rawName: namePart.trim(),
            rawValue: valuePart.trim()
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
            if (!parsed.rawName) return;
            const key = findTestKey(parsed.rawName);
            parsedItems.push({
                rawName: parsed.rawName,
                rawValue: parsed.rawValue,
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

        // A thin divider line between a card's title/status row and its detail rows.
        const makeDivider = () => {
            const div = document.createElement('div');
            div.className = 'divider';
            return div;
        };

        // Helper to build a simple 2-line "note" card (used for unrecognized/unparsed items)
        const buildNoteCard = (title, valueText, noteText) => {
            const card = document.createElement('div');
            card.className = 'result-item';
            const h3 = document.createElement('h3');
            h3.textContent = title;
            const p1 = document.createElement('p');
            const strong1 = document.createElement('strong');
            strong1.textContent = t.yourValue + ': ';
            p1.appendChild(strong1);
            p1.appendChild(document.createTextNode(valueText || '—'));
            const p2 = document.createElement('p');
            p2.textContent = noteText;
            card.appendChild(h3);
            card.appendChild(makeDivider());
            card.appendChild(p1);
            card.appendChild(p2);
            return card;
        };

        parsedItems.forEach(item => {
            // --- Test not found in database ---
            if (!item.key) {
                cardsFragment.appendChild(buildNoteCard(item.rawName, item.rawValue, t.unrecognized));
                return;
            }

            const data = labData[item.key];

            // --- Qualitative test (positive/negative style) ---
            if (data.type === 'qualitative') {
                const matched = matchQualitativeValue(item.rawValue);
                if (!matched) {
                    cardsFragment.appendChild(buildNoteCard(data.name[currentLang], item.rawValue, t.unparsedQualitative));
                    return;
                }

                const valueEntry = data[matched]; // data.negative or data.positive
                const statusClass = valueEntry.resultStatus; // 'normal' | 'low' | 'high'
                if (statusClass !== 'normal') abnormalCount++;

                const card = document.createElement('div');
                card.className = `result-item ${statusClass}`;

                const h3 = document.createElement('h3');
                h3.textContent = `${data.name[currentLang]} — `;
                const statusSpan = document.createElement('span');
                statusSpan.className = statusClass;
                statusSpan.textContent = valueEntry.label[currentLang];
                h3.appendChild(statusSpan);

                const pValue = document.createElement('p');
                const strongValue = document.createElement('strong');
                strongValue.textContent = t.resultLabel + ': ';
                pValue.appendChild(strongValue);
                pValue.appendChild(document.createTextNode(valueEntry.label[currentLang]));

                const pExplain = document.createElement('p');
                const strongExplain = document.createElement('strong');
                strongExplain.textContent = t.explanation + ': ';
                pExplain.appendChild(strongExplain);
                pExplain.appendChild(document.createTextNode(valueEntry.interpretation[currentLang]));

                card.appendChild(h3);
                card.appendChild(makeDivider());
                card.appendChild(pValue);
                card.appendChild(pExplain);
                cardsFragment.appendChild(card);
                return;
            }

            // --- Quantitative test (numeric range) ---
            const numberMatch = item.rawValue.match(/-?\d+(\.\d+)?/);
            if (!numberMatch) {
                cardsFragment.appendChild(buildNoteCard(data.name[currentLang], item.rawValue, t.unparsedQuantitative));
                return;
            }
            const value = parseFloat(numberMatch[0]);

            const range = data.range[selectedGender] || data.range.all;
            let status, statusClass;
            if (value < range.min) {
                status = t.statusLow; statusClass = 'low';
            } else if (value > range.max) {
                status = t.statusHigh; statusClass = 'high';
            } else {
                status = t.statusNormal; statusClass = 'normal';
            }
            if (statusClass !== 'normal') abnormalCount++;

            const interpretationKey = statusClass; // 'low' | 'normal' | 'high'
            const explanationText = data.interpretation[interpretationKey][currentLang];
            const unit = data.unit ? ` ${data.unit}` : '';

            const card = document.createElement('div');
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
            pValue.appendChild(document.createTextNode(`${value}${unit}`));

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
            card.appendChild(makeDivider());
            card.appendChild(pValue);
            card.appendChild(pRange);
            card.appendChild(pExplain);
            cardsFragment.appendChild(card);
        });

        // Summary line
        const summaryElement = document.createElement('p');
        summaryElement.className = 'results-meta';
        summaryElement.style.fontStyle = 'italic';
        summaryElement.textContent = t.summaryText(parsedItems.length, abnormalCount);
        resultsOutput.appendChild(summaryElement);

        resultsOutput.appendChild(cardsFragment);

        // Disclaimer
        const disclaimerElement = document.createElement('p');
        disclaimerElement.className = 'results-meta';
        disclaimerElement.style.opacity = '0.75';
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
    themeToggleBtn.addEventListener('click', toggleTheme);
    processBtn.addEventListener('click', interpretResults);
    printBtn.addEventListener('click', printReport);
    langFaBtn.addEventListener('click', () => switchLanguage('fa'));
    langEnBtn.addEventListener('click', () => switchLanguage('en'));

    // Set initial language
    switchLanguage('fa');
});
