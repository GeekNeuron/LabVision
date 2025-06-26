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

    // --- Translations Database ---
    const translations = {
        fa: {
            headerTitle: "LabVision",
            inputHeader: "اطلاعات برگه آزمایش خود را وارد کنید",
            inputHint: "هر آیتم را در یک خط جدید وارد کنید. مثال: Glucose: 95",
            processButton: "تحلیل نتایج",
            resultsHeader: "تفسیر نتایج",
            resultsPlaceholder: "نتایج تحلیل آزمایش شما در اینجا نمایش داده می‌شود.",
            statusLow: "پایین",
            statusNormal: "نرمال",
            statusHigh: "بالا",
            yourValue: "مقدار شما",
            normalRange: "محدوده نرمال",
            explanation: "توضیحات"
        },
        en: {
            headerTitle: "LabVision",
            inputHeader: "Enter Your Lab Report Data",
            inputHint: "Enter each item on a new line. e.g., Glucose: 95",
            processButton: "Analyze Results",
            resultsHeader: "Results Interpretation",
            resultsPlaceholder: "Your lab analysis results will be displayed here.",
            statusLow: "Low",
            statusNormal: "Normal",
            statusHigh: "High",
            yourValue: "Your Value",
            normalRange: "Normal Range",
            explanation: "Explanation"
        }
    };

    // --- Lab Data "Database" ---
    // You can easily add more tests here
    const labData = {
        hemoglobin: {
            fa_name: "هموگلوبین",
            en_name: "Hemoglobin (Hb)",
            unit: "g/dL",
            male_range: [13.5, 17.5],
            female_range: [12.0, 15.5],
            explanation: {
                fa: "پروتئینی در گلبول‌های قرمز خون که اکسیژن را حمل می‌کند. میزان پایین آن می‌تواند نشانه کم‌خونی باشد.",
                en: "A protein in red blood cells that carries oxygen. Low levels can indicate anemia."
            }
        },
        glucose: {
            fa_name: "گلوکز (قند خون)",
            en_name: "Glucose",
            unit: "mg/dL",
            male_range: [70, 100],
            female_range: [70, 100],
            explanation: {
                fa: "میزان قند در خون. مقادیر بالا می‌تواند نشانه دیابت یا پیش-دیابت باشد.",
                en: "The amount of sugar in your blood. High levels can be a sign of diabetes or pre-diabetes."
            }
        },
        wbc: {
            fa_name: "گلبول‌های سفید خون",
            en_name: "White Blood Cell (WBC) Count",
            unit: "cells/mcL",
            male_range: [4500, 11000],
            female_range: [4500, 11000],
            explanation: {
                fa: "سلول‌های سیستم ایمنی بدن که با عفونت‌ها مبارزه می‌کنند. مقادیر بالا می‌تواند نشانه عفونت و مقادیر پایین نشانه ضعف سیستم ایمنی باشد.",
                en: "Immunity cells that fight infection. High levels can indicate an infection, while low levels can signal an immune system weakness."
            }
        },
        cholesterol: {
            fa_name: "کلسترول کل",
            en_name: "Total Cholesterol",
            unit: "mg/dL",
            male_range: [0, 200], // Desirable is < 200
            female_range: [0, 200],
            explanation: {
                fa: "چربی موجود در خون. سطح بالای آن خطر بیماری‌های قلبی را افزایش می‌دهد.",
                en: "A type of fat in your blood. High levels increase the risk of heart disease."
            }
        }
    };

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
        
        // Update placeholder texts for RTL/LTR
        labInput.placeholder = lang === 'fa' ? "Hb: 14.5\nWBC: 7500\nCholesterol: 190" : "Hb: 14.5\nWBC: 7500\nCholesterol: 190";

        // Re-process results to show them in the new language
        if (labInput.value.trim() !== '') {
            interpretResults();
        }
    };

    const interpretResults = () => {
        const input = labInput.value.trim();
        if (!input) {
            resultsOutput.innerHTML = `<p class="placeholder" data-lang-key="resultsPlaceholder">${translations[currentLang].resultsPlaceholder}</p>`;
            return;
        }

        resultsOutput.innerHTML = ''; // Clear previous results
        const lines = input.split('\n');

        lines.forEach(line => {
            const parts = line.split(/[:\s]+/); // Split by colon or space
            if (parts.length < 2) return;

            const testName = parts[0].toLowerCase().trim();
            const value = parseFloat(parts[1]);

            if (isNaN(value)) return;

            let testKey = Object.keys(labData).find(key => testName.includes(key));
            if (!testKey) { // Try to find by abbreviations
                if(testName === 'hb') testKey = 'hemoglobin';
            }
            
            if (testKey) {
                const data = labData[testKey];
                const range = data.male_range; // Simplified: Using male range for all. Could be extended.
                
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
             resultsOutput.innerHTML = `<p class="placeholder" data-lang-key="resultsPlaceholder">${translations[currentLang].resultsPlaceholder}</p>`;
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
