document.addEventListener('DOMContentLoaded', () => {

    const themeToggleBtn = document.getElementById('theme-toggle');
    const infoBtn = document.getElementById('info-btn');
    const infoDialog = document.getElementById('info-dialog');
    const infoCloseBtn = document.getElementById('info-close-btn');
    const infoTestCount = document.getElementById('info-test-count');
    const infoTestList = document.getElementById('info-test-list');
    const optionalDetailsBtn = document.getElementById('optional-details-btn');
    const optionalDetailsDialog = document.getElementById('optional-details-dialog');
    const optionalDetailsCloseBtn = document.getElementById('optional-details-close-btn');
    const processBtn = document.getElementById('process-btn');
    const printBtn = document.getElementById('print-btn');
    const labInput = document.getElementById('lab-input');
    const patientNameInput = document.getElementById('patient-name');
    const patientAgeInput = document.getElementById('patient-age');
    const pregnancySelector = document.getElementById('pregnancy-selector');
    const isPregnantCheckbox = document.getElementById('is-pregnant');
    const trimesterWrapper = document.getElementById('trimester-wrapper');
    const trimesterSelect = document.getElementById('trimester-select');
    const trimesterTrigger = trimesterSelect.querySelector('.custom-select-trigger');
    const trimesterValueEl = trimesterSelect.querySelector('.custom-select-value');
    const trimesterList = trimesterSelect.querySelector('.custom-select-list');
    const trimesterOptions = trimesterSelect.querySelectorAll('.custom-select-list li');
    let trimesterValue = '1';
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    const doctorNameInput = document.getElementById('doctor-name');
    const labNameInput = document.getElementById('lab-name');
    const sampleDateInput = document.getElementById('sample-date');
    const resultsOutput = document.getElementById('results-output');
    const resultsSection = document.getElementById('results-section');
    const langFaBtn = document.getElementById('lang-fa');
    const langEnBtn = document.getElementById('lang-en');
    const body = document.body;

    let currentTheme = 'light';
    let currentLang = 'en';

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
            optionalDetailsSummary: "مشخصات برگه (اختیاری)",
            patientNameLabel: "نام بیمار", patientNamePlaceholder: "مثلاً: علی رضایی",
            patientAgeLabel: "سن بیمار", patientAgeHint: "برای دقت بیشتر برخی تست‌ها مثل IGF-1 و رنج‌های کودکان",
            isPregnant: "باردار", trimesterLabel: "سه‌ماهه:", trimester1: "اول", trimester2: "دوم", trimester3: "سوم",
            pregnancyNote: "برخی رنج‌های نرمال (تیروئید، هموگلوبین) در بارداری متفاوت است.",
            doctorNameLabel: "پزشک معالج", doctorNamePlaceholder: "مثلاً: دکتر محمدی",
            labNameLabel: "نام آزمایشگاه", labNamePlaceholder: "مثلاً: آزمایشگاه پاستور",
            sampleDateLabel: "تاریخ نمونه‌گیری",
            infoTitle: "درباره LabVision",
            infoSourcesTitle: "منابع مورد استفاده",
            infoMayoNote: "برای تست‌هایی با تفکیک جنسیتی رایج در عمل بالینی",
            infoDaneshbodNote: "برای تکمیل فهرست آزمایش‌های رایج در عمل بالینی ایران",
            infoGeneralKnowledge: "دانش پزشکی عمومی و استاندارد، برای تفسیرهای بالینی و توضیحات",
            infoDisclaimer: "این رنج‌ها می‌توانند بین آزمایشگاه‌ها و روش‌های سنجش مختلف کمی متفاوت باشند. همیشه رنج مرجع چاپ‌شده روی برگه آزمایش خودتان را نیز در نظر بگیرید.",
            infoCountText: (total, quant, qual) => `این نسخه از LabVision ${total} آزمایش را پشتیبانی می‌کند (${quant} آزمایش کمّی + ${qual} آزمایش کیفی):`,
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
            optionalDetailsSummary: "Report Details (optional)",
            patientNameLabel: "Patient Name", patientNamePlaceholder: "e.g., John Smith",
            patientAgeLabel: "Patient Age", patientAgeHint: "Improves accuracy for tests like IGF-1 and pediatric ranges",
            isPregnant: "Pregnant", trimesterLabel: "Trimester:", trimester1: "1st", trimester2: "2nd", trimester3: "3rd",
            pregnancyNote: "Some normal ranges (thyroid, hemoglobin) differ during pregnancy.",
            doctorNameLabel: "Referring Doctor", doctorNamePlaceholder: "e.g., Dr. Smith",
            labNameLabel: "Laboratory Name", labNamePlaceholder: "e.g., Central Lab",
            sampleDateLabel: "Sample Date",
            infoTitle: "About LabVision",
            infoSourcesTitle: "Sources Used",
            infoMayoNote: "for tests with gender-specific ranges common in clinical practice",
            infoDaneshbodNote: "to round out coverage of tests commonly ordered in Iranian clinical practice",
            infoGeneralKnowledge: "General standard medical knowledge, for clinical interpretations and explanations",
            infoDisclaimer: "These ranges can vary somewhat between laboratories and assay methods. Always also consider the reference range printed on your own lab report.",
            infoCountText: (total, quant, qual) => `This version of LabVision supports ${total} tests (${quant} quantitative + ${qual} qualitative):`,
            summaryText: (total, abnormal) => abnormal === 0
                ? `Of ${total} item(s) reviewed, all are within the normal range.`
                : `Of ${total} item(s) reviewed, ${abnormal} need attention (see notes below).`,
            disclaimer: "This analysis is for informational purposes only and is not a substitute for professional medical advice."
        }
    };

    const toggleTheme = () => {
        body.classList.toggle('dark-theme');
        currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    };

    const switchLanguage = (lang) => {
        if (lang === currentLang) return;

        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = 'rtl';
        body.classList.toggle('lang-en', lang === 'en');

        langFaBtn.classList.toggle('active', lang === 'fa');
        langEnBtn.classList.toggle('active', lang === 'en');

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => {
            const key = el.getAttribute('data-lang-key-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        labInput.placeholder = "Hb: 14.5\nPlatelet: 250\nTSH: 2.1";

        if (labInput.value.trim() !== '') {
            interpretResults();
        }
    };

    const QUALITATIVE_KEYWORDS = {
        negative: ["not detected", "non-reactive", "nonreactive", "no growth", "low risk", "بدون رشد", "دیده نشد", "رشد نکرد", "کم خطر", "کم‌خطر", "عدم تطابق", "negative", "neg", "normal", "susceptible", "mismatch", "منفی", "ندارد", "طبیعی", "حساس"],
        positive: ["high risk", "واکنش‌دهنده", "واکنش دهنده", "پر خطر", "پرخطر", "positive", "pos", "detected", "reactive", "present", "abnormal", "resistant", "match", "growth", "مثبت", "دارد", "رشد کرد", "غیرطبیعی", "مقاوم", "تطابق", "رشد"]
    };

    const tokenizeText = (s) => s.toLowerCase().replace(/[\/,،.!?;:()]/g, ' ').split(/\s+/).filter(Boolean);

    const phraseTokensMatch = (tokens, phrase) => {
        const phraseTokens = phrase.toLowerCase().split(/\s+/).filter(Boolean);
        for (let i = 0; i <= tokens.length - phraseTokens.length; i++) {
            let matchesHere = true;
            for (let j = 0; j < phraseTokens.length; j++) {
                if (tokens[i + j] !== phraseTokens[j]) { matchesHere = false; break; }
            }
            if (matchesHere) return true;
        }
        return false;
    };

    const matchQualitativeValue = (rawValue) => {
        const tokens = tokenizeText(rawValue);
        if (tokens.length === 0) return null;
        const sortedNegative = [...QUALITATIVE_KEYWORDS.negative].sort((a, b) => b.split(/\s+/).length - a.split(/\s+/).length);
        const sortedPositive = [...QUALITATIVE_KEYWORDS.positive].sort((a, b) => b.split(/\s+/).length - a.split(/\s+/).length);
        for (const kw of sortedNegative) {
            if (phraseTokensMatch(tokens, kw)) return 'negative';
        }
        for (const kw of sortedPositive) {
            if (phraseTokensMatch(tokens, kw)) return 'positive';
        }
        return null;
    };

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

    const parseLine = (line) => {
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

    const interpretResults = () => {
        const input = labInput.value.trim();
        const t = translations[currentLang];

        if (!input) {
            resultsOutput.innerHTML = `<p class="placeholder" data-lang-key="resultsPlaceholder">${t.resultsPlaceholder}</p>`;
            return;
        }

        const selectedGender = document.querySelector('input[name="gender"]:checked').value;

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
        const rows = [];
        const notes = [];

        const displayName = (item, data) => {
            const canonical = data.name[currentLang];
            const rawLower = item.rawName.trim().toLowerCase();
            const canonicalLower = canonical.trim().toLowerCase();
            if (canonicalLower.includes(rawLower)) return canonical;
            const otherLang = currentLang === 'fa' ? 'en' : 'fa';
            const otherCanonical = data.name[otherLang];
            if (otherCanonical && otherCanonical.trim().toLowerCase().includes(rawLower)) return canonical;
            return `${canonical} (${item.rawName})`;
        };

        parsedItems.forEach(item => {
            if (!item.key) {
                rows.push({ name: item.rawName, result: item.rawValue || '—', range: '—', statusKey: 'unknown', statusLabel: '?' });
                notes.push({ name: item.rawName, text: t.unrecognized, statusKey: 'unknown' });
                return;
            }

            const data = labData[item.key];

            if (data.type === 'qualitative') {
                const matched = matchQualitativeValue(item.rawValue);
                if (!matched) {
                    rows.push({ name: displayName(item, data), result: item.rawValue || '—', range: '—', statusKey: 'unknown', statusLabel: '?' });
                    notes.push({ name: displayName(item, data), text: t.unparsedQualitative, statusKey: 'unknown' });
                    return;
                }
                const valueEntry = data[matched];
                const statusClass = valueEntry.resultStatus;
                if (statusClass !== 'normal') abnormalCount++;

                rows.push({
                    name: displayName(item, data),
                    result: valueEntry.label[currentLang],
                    range: data.negative.label[currentLang],
                    statusKey: statusClass,
                    statusLabel: statusClass === 'normal' ? t.statusNormal : (statusClass === 'low' ? t.statusLow : t.statusHigh)
                });
                if (statusClass !== 'normal') {
                    notes.push({ name: displayName(item, data), text: valueEntry.interpretation[currentLang], statusKey: statusClass });
                }
                return;
            }

            const numberMatch = item.rawValue.match(/-?\d+(\.\d+)?/);
            if (!numberMatch) {
                rows.push({ name: displayName(item, data), result: item.rawValue || '—', range: '—', statusKey: 'unknown', statusLabel: '?' });
                notes.push({ name: displayName(item, data), text: t.unparsedQuantitative, statusKey: 'unknown' });
                return;
            }
            const value = parseFloat(numberMatch[0]);
            let range = data.range[selectedGender] || data.range.all;
            const enteredAge = parseInt(patientAgeInput.value, 10);
            if (data.ageRanges && !isNaN(enteredAge)) {
                const band = data.ageRanges.find(b => enteredAge >= b.minAge && enteredAge <= b.maxAge);
                if (band) range = band.range;
            }
            if (selectedGender === 'female' && isPregnantCheckbox.checked && data.pregnancyRanges) {
                const trimester = trimesterValue;
                const pregRange = data.pregnancyRanges['trimester' + trimester];
                if (pregRange) range = pregRange;
            }
            let statusClass;
            if (value < range.min) statusClass = 'low';
            else if (value > range.max) statusClass = 'high';
            else statusClass = 'normal';
            if (statusClass !== 'normal') abnormalCount++;

            const unit = data.unit ? ` ${data.unit}` : '';
            rows.push({
                name: displayName(item, data),
                result: `${value}${unit}`,
                range: `${range.min} - ${range.max}${unit}`,
                statusKey: statusClass,
                statusLabel: statusClass === 'normal' ? t.statusNormal : (statusClass === 'low' ? t.statusLow : t.statusHigh)
            });
            if (statusClass !== 'normal') {
                notes.push({ name: displayName(item, data), text: data.interpretation[statusClass][currentLang], statusKey: statusClass });
            }
        });

        const reportWrapper = document.createElement('div');
        reportWrapper.className = 'lab-report';

        let genderLabel = selectedGender === 'male' ? t.genderMale : t.genderFemale;
        if (selectedGender === 'female' && isPregnantCheckbox.checked) {
            const trimesterNames = { '1': t.trimester1, '2': t.trimester2, '3': t.trimester3 };
            genderLabel += ` (${t.isPregnant} — ${t.trimesterLabel} ${trimesterNames[trimesterValue]})`;
        }
        const dateStr = new Date().toLocaleDateString(currentLang === 'fa' ? 'fa-IR' : 'en-US');

        const sampleDateRaw = sampleDateInput.value;
        const sampleDateDisplay = sampleDateRaw
            ? new Date(sampleDateRaw + 'T00:00:00').toLocaleDateString(currentLang === 'fa' ? 'fa-IR' : 'en-US')
            : '';

        const headerFields = [
            [t.patientNameLabel, patientNameInput.value.trim()],
            [t.patientAgeLabel, patientAgeInput.value.trim()],
            [t.doctorNameLabel, doctorNameInput.value.trim()],
            [t.labNameLabel, labNameInput.value.trim()],
            [t.sampleDateLabel, sampleDateDisplay],
            [t.referenceGenderLabel, genderLabel],
            [t.reportDateLabel, dateStr]
        ].filter(([, value]) => value);

        const headerBlock = document.createElement('div');
        headerBlock.className = 'lab-report-header';
        headerFields.forEach(([label, value]) => {
            const row = document.createElement('div');
            row.className = 'field-row';
            const fLabel = document.createElement('span');
            fLabel.className = 'f-label';
            fLabel.textContent = label + ':';
            const fValue = document.createElement('span');
            fValue.className = 'f-value';
            fValue.textContent = value;
            row.appendChild(fLabel);
            row.appendChild(fValue);
            headerBlock.appendChild(row);
        });
        reportWrapper.appendChild(headerBlock);

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
            tdResult.className = 'ltr-value';

            const tdRange = document.createElement('td');
            tdRange.textContent = row.range;
            tdRange.className = 'col-range ltr-value';

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

        if (window.innerWidth <= 720) {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const printReport = () => {
        window.print();
    };

    const openInfoDialog = () => {
        const t = translations[currentLang];
        const keys = Object.keys(labData);
        const quantCount = keys.filter(k => labData[k].type !== 'qualitative').length;
        const qualCount = keys.length - quantCount;

        infoTestCount.textContent = t.infoCountText(keys.length, quantCount, qualCount);

        infoTestList.innerHTML = '';
        const sortedNames = keys
            .map(k => labData[k].name[currentLang])
            .sort((a, b) => a.localeCompare(b, currentLang === 'fa' ? 'fa' : 'en'));
        sortedNames.forEach(name => {
            const span = document.createElement('span');
            span.textContent = name;
            infoTestList.appendChild(span);
        });

        infoDialog.showModal();
    };

    function updatePregnancyUI() {
        const gender = document.querySelector('input[name="gender"]:checked').value;
        if (gender === 'female') {
            pregnancySelector.hidden = false;
        } else {
            pregnancySelector.hidden = true;
            isPregnantCheckbox.checked = false;
            trimesterWrapper.hidden = true;
        }
    }
    genderRadios.forEach(r => r.addEventListener('change', updatePregnancyUI));
    isPregnantCheckbox.addEventListener('change', () => {
        trimesterWrapper.hidden = !isPregnantCheckbox.checked;
    });
    updatePregnancyUI();

    trimesterTrigger.addEventListener('click', () => {
        const isOpen = !trimesterList.hidden;
        trimesterList.hidden = isOpen;
        trimesterTrigger.setAttribute('aria-expanded', String(!isOpen));
    });
    trimesterOptions.forEach(li => {
        li.addEventListener('click', () => {
            trimesterValue = li.dataset.value;
            const key = li.getAttribute('data-lang-key');
            trimesterValueEl.textContent = li.textContent;
            trimesterValueEl.setAttribute('data-lang-key', key);
            trimesterOptions.forEach(opt => {
                opt.classList.toggle('selected', opt === li);
                opt.setAttribute('aria-selected', String(opt === li));
            });
            trimesterList.hidden = true;
            trimesterTrigger.setAttribute('aria-expanded', 'false');
        });
    });
    document.addEventListener('click', (e) => {
        if (!trimesterSelect.contains(e.target)) {
            trimesterList.hidden = true;
            trimesterTrigger.setAttribute('aria-expanded', 'false');
        }
    });

    themeToggleBtn.addEventListener('click', toggleTheme);
    processBtn.addEventListener('click', interpretResults);
    printBtn.addEventListener('click', printReport);
    langFaBtn.addEventListener('click', () => switchLanguage('fa'));
    langEnBtn.addEventListener('click', () => switchLanguage('en'));
    infoBtn.addEventListener('click', openInfoDialog);
    infoCloseBtn.addEventListener('click', () => infoDialog.close());
    infoDialog.addEventListener('click', (e) => {
        if (e.target === infoDialog) infoDialog.close();
    });
    optionalDetailsBtn.addEventListener('click', () => optionalDetailsDialog.showModal());
    optionalDetailsCloseBtn.addEventListener('click', () => optionalDetailsDialog.close());
    optionalDetailsDialog.addEventListener('click', (e) => {
        if (e.target === optionalDetailsDialog) optionalDetailsDialog.close();
    });

    const DESIGN_HEIGHT = 900;
    const DESIGN_WIDTH = 1180;
    const MIN_SCALE = 0.55;
    function updateDesktopScale() {
        if (window.innerWidth <= 720) {
            document.body.style.zoom = '';
            return;
        }
        const heightScale = window.innerHeight / DESIGN_HEIGHT;
        const widthScale = window.innerWidth / DESIGN_WIDTH;
        const scale = Math.min(1, Math.max(MIN_SCALE, Math.min(heightScale, widthScale)));
        document.body.style.zoom = scale;
    }
    window.addEventListener('resize', updateDesktopScale);
    updateDesktopScale();

    switchLanguage('fa');
});
