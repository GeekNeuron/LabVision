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
            colTest: "آزمایش", colResult: "نتیجه", colRange: "محدوده مرجع", colStatus: "وضعیت",
            notesHeader: "یادداشت‌های بالینی",
            reportDateLabel: "تاریخ گزارش",
            referenceGenderLabel: "جنسیت مرجع",
            summaryText: (total, abnormal) => abnormal === 0
                ? `از مجموع ${total} آیتم بررسی‌شده، همه در محدوده نرمال قرار دارند.`
                : `از مجموع ${total} آیتم بررسی‌شده، ${abnormal} مورد نیاز به توجه دارد (به یادداشت‌ها مراجعه کنید).`,
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
            colTest: "Test", colResult: "Result", colRange: "Reference Range", colStatus: "Status",
            notesHeader: "Clinical Notes",
            reportDateLabel: "Report Date",
            referenceGenderLabel: "Reference Gender",
            summaryText: (total, abnormal) => abnormal === 0
                ? `Of ${total} item(s) reviewed, all are within the normal range.`
                : `Of ${total} item(s) reviewed, ${abnormal} need attention (see notes below).`,
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
        // Rows for the compact table, and separate notes for anything that needs
        // explanation (abnormal, unrecognized, or unparsed items — normal results
        // don't need a note, exactly like a real printed lab report).
        const rows = [];
        const notes = [];

        parsedItems.forEach(item => {
            // --- Test not found in database ---
            if (!item.key) {
                rows.push({ name: item.rawName, result: item.rawValue || '—', range: '—', statusKey: 'unknown', statusLabel: '?' });
                notes.push({ name: item.rawName, text: t.unrecognized, statusKey: 'unknown' });
                return;
            }

            const data = labData[item.key];

            // --- Qualitative test (positive/negative style) ---
            if (data.type === 'qualitative') {
                const matched = matchQualitativeValue(item.rawValue);
                if (!matched) {
                    rows.push({ name: data.name[currentLang], result: item.rawValue || '—', range: '—', statusKey: 'unknown', statusLabel: '?' });
                    notes.push({ name: data.name[currentLang], text: t.unparsedQualitative, statusKey: 'unknown' });
                    return;
                }
                const valueEntry = data[matched];
                const statusClass = valueEntry.resultStatus; // 'normal' | 'low' | 'high'
                if (statusClass !== 'normal') abnormalCount++;

                rows.push({
                    name: data.name[currentLang],
                    result: valueEntry.label[currentLang],
                    range: data.negative.label[currentLang], // the expected/reference result
                    statusKey: statusClass,
                    statusLabel: statusClass === 'normal' ? t.statusNormal : (statusClass === 'low' ? t.statusLow : t.statusHigh)
                });
                if (statusClass !== 'normal') {
                    notes.push({ name: data.name[currentLang], text: valueEntry.interpretation[currentLang], statusKey: statusClass });
                }
                return;
            }

            // --- Quantitative test (numeric range) ---
            const numberMatch = item.rawValue.match(/-?\d+(\.\d+)?/);
            if (!numberMatch) {
                rows.push({ name: data.name[currentLang], result: item.rawValue || '—', range: '—', statusKey: 'unknown', statusLabel: '?' });
                notes.push({ name: data.name[currentLang], text: t.unparsedQuantitative, statusKey: 'unknown' });
                return;
            }
            const value = parseFloat(numberMatch[0]);
            const range = data.range[selectedGender] || data.range.all;
            let statusClass;
            if (value < range.min) statusClass = 'low';
            else if (value > range.max) statusClass = 'high';
            else statusClass = 'normal';
            if (statusClass !== 'normal') abnormalCount++;

            const unit = data.unit ? ` ${data.unit}` : '';
            rows.push({
                name: data.name[currentLang],
                result: `${value}${unit}`,
                range: `${range.min} - ${range.max}${unit}`,
                statusKey: statusClass,
                statusLabel: statusClass === 'normal' ? t.statusNormal : (statusClass === 'low' ? t.statusLow : t.statusHigh)
            });
            if (statusClass !== 'normal') {
                notes.push({ name: data.name[currentLang], text: data.interpretation[statusClass][currentLang], statusKey: statusClass });
            }
        });

        const reportWrapper = document.createElement('div');
        reportWrapper.className = 'lab-report';

        // --- Report meta line (date + reference gender) — makes the printed
        // page read like an actual lab report header. ---
        const genderLabel = selectedGender === 'male' ? t.genderMale : t.genderFemale;
        const dateStr = new Date().toLocaleDateString(currentLang === 'fa' ? 'fa-IR' : 'en-US');
        const metaLine = document.createElement('p');
        metaLine.className = 'lab-report-meta';
        metaLine.textContent = `${t.reportDateLabel}: ${dateStr}   •   ${t.referenceGenderLabel}: ${genderLabel}`;
        reportWrapper.appendChild(metaLine);

        // --- Compact results table ---
        const tableWrap = document.createElement('div');
        tableWrap.className = 'lab-report-table-wrap';
        const table = document.createElement('table');
        table.className = 'lab-report-table';

        const thead = document.createElement('thead');
        const headRow = document.createElement('tr');
        [t.colTest, t.colResult, t.colRange, t.colStatus].forEach(label => {
            const th = document.createElement('th');
            th.textContent = label;
            headRow.appendChild(th);
        });
        thead.appendChild(headRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        rows.forEach(row => {
            const tr = document.createElement('tr');
            tr.className = `row-${row.statusKey}`;

            const tdName = document.createElement('td');
            tdName.textContent = row.name;
            tdName.className = 'col-name';

            const tdResult = document.createElement('td');
            tdResult.textContent = row.result;

            const tdRange = document.createElement('td');
            tdRange.textContent = row.range;
            tdRange.className = 'col-range';

            const tdStatus = document.createElement('td');
            const badge = document.createElement('span');
            badge.className = `status-badge ${row.statusKey}`;
            badge.textContent = row.statusLabel;
            tdStatus.appendChild(badge);

            tr.appendChild(tdName);
            tr.appendChild(tdResult);
            tr.appendChild(tdRange);
            tr.appendChild(tdStatus);
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        tableWrap.appendChild(table);
        reportWrapper.appendChild(tableWrap);

        // --- Notes section — only for abnormal / unrecognized / unparsed items ---
        if (notes.length > 0) {
            const notesSection = document.createElement('div');
            notesSection.className = 'lab-report-notes';
            const notesHeading = document.createElement('h4');
            notesHeading.textContent = t.notesHeader;
            notesSection.appendChild(notesHeading);
            notes.forEach(note => {
                const p = document.createElement('p');
                p.className = `note-line note-${note.statusKey}`;
                const strong = document.createElement('strong');
                strong.textContent = note.name + ': ';
                p.appendChild(strong);
                p.appendChild(document.createTextNode(note.text));
                notesSection.appendChild(p);
            });
            reportWrapper.appendChild(notesSection);
        }

        // --- Summary + disclaimer ---
        const summaryElement = document.createElement('p');
        summaryElement.className = 'results-meta';
        summaryElement.style.fontStyle = 'italic';
        summaryElement.textContent = t.summaryText(parsedItems.length, abnormalCount);
        reportWrapper.appendChild(summaryElement);

        const disclaimerElement = document.createElement('p');
        disclaimerElement.className = 'results-meta';
        disclaimerElement.style.opacity = '0.75';
        disclaimerElement.textContent = t.disclaimer;
        reportWrapper.appendChild(disclaimerElement);

        resultsOutput.appendChild(reportWrapper);
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
