document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const header = document.getElementById('main-header');
    const processBtn = document.getElementById('process-btn');
    const labInput = document.getElementById('lab-input');
    const resultsOutput = document.getElementById('results-output');
    const langFaBtn = document.getElementById('lang-fa');
    const langEnBtn = document.getElementById('lang-en');
    const body = document.body;

    // --- State ---
    let currentTheme = 'light';
    let currentLang = 'en';

    // --- Translations Database (UPGRADED) ---
    const translations = {
        fa: {
            headerTitle: "LabVision",
            inputHeader: "اطلاعات برگه آزمایش",
            selectGender: "جنسیت:",
            genderMale: "مرد",
            genderFemale: "زن",
            inputHint: "هر آیتم را در یک خط جدید وارد کنید. مثال: Glucose: 95",
            processButton: "تحلیل نتایج",
            resultsHeader: "تفسیر نتایج",
            resultsPlaceholder: "نتایج تحلیل آزمایش شما در اینجا نمایش داده می‌شود.",
            statusLow: "پایین", statusNormal: "نرمال", statusHigh: "بالا",
            yourValue: "مقدار شما", normalRange: "محدوده نرمال", explanation: "توضیحات"
        },
        en: {
            headerTitle: "LabVision",
            inputHeader: "Lab Report Data",
            selectGender: "Gender:",
            genderMale: "Male",
            genderFemale: "Female",
            inputHint: "Enter each item on a new line. e.g., Glucose: 95",
            processButton: "Analyze Results",
            resultsHeader: "Results Interpretation",
            resultsPlaceholder: "Your lab analysis results will be displayed here.",
            statusLow: "Low", statusNormal: "Normal", statusHigh: "High",
            yourValue: "Your Value", normalRange: "Normal Range", explanation: "Explanation"
        }
    };

    // --- Lab Data "Database" is now in database.js ---
    // The 'labData' object is loaded globally from the separate file.

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
        
        labInput.placeholder = lang === 'fa' ? "Hb: 14.5\nPlatelet: 250\nTSH: 2.1" : "Hb: 14.5\nPlatelet: 250\nTSH: 2.1";

        if (labInput.value.trim() !== '') {
            interpretResults();
        }
    };

    // NEW (UPGRADED): Smarter function to find test key using aliases
    const findTestKey = (name) => {
        const lowerCaseName = name.toLowerCase().trim();
        for (const key in labData) {
            if (key === lowerCaseName) return key;
            if (labData[key].aliases && labData[key].aliases.includes(lowerCaseName)) {
                return key;
            }
        }
        return null;
    };

    const interpretResults = () => {
        const input = labInput.value.trim();
        if (!input) {
            resultsOutput.innerHTML = `<p class="placeholder" data-lang-key="resultsPlaceholder">${translations[currentLang].resultsPlaceholder}</p>`;
            return;
        }

        // NEW: Get the selected gender from the UI
        const selectedGender = document.querySelector('input[name="gender"]:checked').value;

        resultsOutput.innerHTML = ''; // Clear previous results
        const lines = input.split('\n');

        lines.forEach(line => {
            const parts = line.split(/[:\s]+/);
            if (parts.length < 2) return;

            const testNameInput = parts[0];
            const value = parseFloat(parts[parts.length > 2 ? parts[1] + '.' + parts[2] : parts[1]]);

            if (isNaN(value)) return;

            // USE THE UPGRADED FUNCTION
            const testKey = findTestKey(testNameInput);
            
            if (testKey) {
                const data = labData[testKey];

                // UPGRADE: Select the correct range based on gender
                let range;
                if (selectedGender === 'female' && data.female_range) {
                    range = data.female_range;
                } else {
                    // Default to male_range if female_range isn't available or male is selected
                    range = data.male_range;
                }
                
                let status = 'normal';
                let statusKey = 'statusNormal';
                if (value < range[0]) {
                    status = 'low';
                    statusKey = 'statusLow';
                } else if (value > range[1]) {
                    status = 'high';
                    statusKey = 'statusHigh';
                }

                const resultCard = `
                    <div class="result-item ${status}">
                        <h3>${data[currentLang+'_name']} - <span class="${status}">${translations[currentLang][statusKey]}</span></h3>
                        <p><strong>${translations[currentLang].yourValue}:</strong> ${value} ${data.unit}</p>
                        <p><strong>${translations[currentLang].normalRange}:</strong> ${range[0]} - ${range[1]} ${data.unit}</p>
                        <p><strong>${translations[currentLang].explanation}:</strong> ${data.explanation[currentLang]}</p>
                    </div>
                `;
                resultsOutput.innerHTML += resultCard;
            }
        });

        if (resultsOutput.innerHTML === '') {
            resultsOutput.innerHTML = `<p class="placeholder">هیچ تست معتبری برای تحلیل یافت نشد. لطفاً ورودی خود را چک کنید.</p>`;
        }
    };

    // --- Event Listeners ---
    header.addEventListener('click', toggleTheme);
    processBtn.addEventListener('click', interpretResults);
    langFaBtn.addEventListener('click', () => switchLanguage('fa'));
    langEnBtn.addEventListener('click', () => switchLanguage('en'));
    
    // Set initial language
    switchLanguage('fa');
});
