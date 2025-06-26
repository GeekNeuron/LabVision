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

    // File: script.js (Only the interpretResults function is shown, the rest remains the same)

const interpretResults = async () => { // Make the function async
    const input = labInput.value.trim();
    if (!input) {
        resultsOutput.innerHTML = `<p class="placeholder" data-lang-key="resultsPlaceholder">${translations[currentLang].resultsPlaceholder}</p>`;
        return;
    }

    const selectedGender = document.querySelector('input[name="gender"]:checked').value;

    // Show a loading state
    resultsOutput.innerHTML = `<p class="placeholder">${currentLang === 'fa' ? 'در حال تحلیل با هوش مصنوعی...' : 'Analyzing with AI...'}</p>`;
    processBtn.disabled = true;

    try {
        const response = await fetch('/api/interpret', { // Calling our own backend
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                labText: input,
                gender: selectedGender,
                lang: currentLang
            }),
        });

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error || 'An unknown error occurred.');
        }

        const data = await response.json();

        // Clear previous results and build new ones from AI response
        resultsOutput.innerHTML = '';
        
        // Add disclaimer and summary
        const summaryElement = document.createElement('p');
        summaryElement.style.textAlign = 'center';
        summaryElement.style.fontStyle = 'italic';
        summaryElement.style.marginBottom = '1.5rem';
        summaryElement.innerText = data.summary;
        resultsOutput.appendChild(summaryElement);

        // Add detailed cards
        data.details.forEach(item => {
            let statusClass = 'normal';
            if (item.status.toLowerCase() === 'high') statusClass = 'high';
            if (item.status.toLowerCase() === 'low') statusClass = 'low';

            const resultCard = `
                <div class="result-item ${statusClass}">
                    <h3>${item.testName} - <span class="${statusClass}">${item.status}</span></h3>
                    <p><strong>${translations[currentLang].yourValue}:</strong> ${item.value}</p>
                    <p><strong>${translations[currentLang].explanation}:</strong> ${item.interpretation}</p>
                </div>
            `;
            resultsOutput.innerHTML += resultCard;
        });

    } catch (error) {
        console.error('Frontend Error:', error);
        resultsOutput.innerHTML = `<p class="placeholder" style="color: #dc3545;">${currentLang === 'fa' ? 'خطا در ارتباط با سرور تحلیلگر:' : 'Error connecting to the analysis server:'} ${error.message}</p>`;
    } finally {
        processBtn.disabled = false; // Re-enable the button
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
