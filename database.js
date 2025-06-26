const labData = {
    // --- Basic Tests ---
    hemoglobin: {
        aliases: ["hb", "hgb", "هموگلوبین"],
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
        aliases: ["glu", "qand", "قند", "گلوکز"],
        fa_name: "گلوکز (قند خون)",
        en_name: "Glucose",
        unit: "mg/dL",
        male_range: [70, 100], // Fasting glucose
        female_range: [70, 100],
        explanation: {
            fa: "میزان قند در خون (ناشتا). مقادیر بالا می‌تواند نشانه دیابت یا پیش-دیابت باشد.",
            en: "The amount of sugar in your blood (fasting). High levels can be a sign of diabetes or pre-diabetes."
        }
    },
    wbc: {
        aliases: ["white blood cell", "گلبول سفید"],
        fa_name: "گلبول‌های سفید خون",
        en_name: "White Blood Cell (WBC) Count",
        unit: "cells/mcL",
        male_range: [4500, 11000],
        female_range: [4500, 11000],
        explanation: {
            fa: "سلول‌های سیستم ایمنی که با عفونت‌ها مبارزه می‌کنند. مقادیر بالا نشانه عفونت و مقادیر پایین نشانه ضعف سیستم ایمنی است.",
            en: "Immunity cells that fight infection. High levels can indicate an infection, while low levels can signal an immune system weakness."
        }
    },
    cholesterol: {
        aliases: ["chol", "کلسترول"],
        fa_name: "کلسترول کل",
        en_name: "Total Cholesterol",
        unit: "mg/dL",
        male_range: [0, 200], // Desirable is < 200
        female_range: [0, 200],
        explanation: {
            fa: "چربی موجود در خون. سطح بالای آن خطر بیماری‌های قلبی را افزایش می‌دهد.",
            en: "A type of fat in your blood. High levels increase the risk of heart disease."
        }
    },
    platelet: {
        aliases: ["plt", "platelets", "پلاکت"],
        fa_name: "شمارش پلاکت",
        en_name: "Platelet Count (PLT)",
        unit: "x10³/mcL",
        male_range: [150, 450],
        female_range: [150, 450],
        explanation: {
            fa: "سلول‌های کوچکی که به لخته شدن خون کمک می‌کنند. تعداد کم می‌تواند خطر خونریزی را افزایش دهد و تعداد زیاد می‌تواند باعث لخته‌های خونی شود.",
            en: "Tiny cells that help your blood clot. Low counts increase bleeding risk, high counts can cause blood clots."
        }
    },
    rbc: {
        aliases: ["red blood cell", "گلبول قرمز"],
        fa_name: "گلبول‌های قرمز خون",
        en_name: "Red Blood Cell (RBC) Count",
        unit: "million cells/mcL",
        male_range: [4.5, 5.9],
        female_range: [4.0, 5.2],
        explanation: {
            fa: "سلول‌هایی که اکسیژن را از ریه‌ها به بقیه بدن منتقل می‌کنند. شمارش RBC در تشخیص کم‌خونی و سایر بیماری‌ها استفاده می‌شود.",
            en: "Cells that transport oxygen from the lungs to the rest of the body. Used to diagnose anemia and other conditions."
        }
    },
    creatinine: {
        aliases: ["creat", "کراتینین"],
        fa_name: "کراتینین",
        en_name: "Creatinine",
        unit: "mg/dL",
        male_range: [0.7, 1.3],
        female_range: [0.6, 1.1],
        explanation: {
            fa: "محصول زائد عضلات که از طریق کلیه‌ها دفع می‌شود. میزان آن عملکرد کلیه را نشان می‌دهد.",
            en: "A waste product from muscles, filtered by the kidneys. Its level is a key indicator of kidney function."
        }
    },
    sodium: {
        aliases: ["na", "سدیم"],
        fa_name: "سدیم",
        en_name: "Sodium (Na)",
        unit: "mEq/L",
        male_range: [135, 145],
        female_range: [135, 145],
        explanation: {
            fa: "یک الکترولیت حیاتی که به تعادل مایعات بدن و عملکرد اعصاب و عضلات کمک می‌کند.",
            en: "A crucial electrolyte that helps balance fluids in the body and ensures proper nerve and muscle function."
        }
    },
    potassium: {
        aliases: ["k", "پتاسیم"],
        fa_name: "پتاسیم",
        en_name: "Potassium (K)",
        unit: "mEq/L",
        male_range: [3.5, 5.2],
        female_range: [3.5, 5.2],
        explanation: {
            fa: "الکترولیتی که برای عملکرد سلولی، به ویژه سلول‌های عصبی و عضلانی قلب، حیاتی است.",
            en: "An electrolyte vital for cell function, especially for the nerve and muscle cells of the heart."
        }
    },
    alt: {
        aliases: ["alanine transaminase"],
        fa_name: "آنزیم ALT",
        en_name: "Alanine Aminotransferase (ALT)",
        unit: "U/L",
        male_range: [10, 40],
        female_range: [7, 35],
        explanation: {
            fa: "آنزیمی که بیشتر در کبد یافت می‌شود. سطح بالای آن معمولاً نشانه آسیب یا التهاب کبدی است.",
            en: "An enzyme found mostly in the liver. High levels are a common sign of liver damage or inflammation."
        }
    },
    tsh: {
        aliases: ["thyroid stimulating hormone", "تیروئید"],
        fa_name: "هورمون TSH",
        en_name: "Thyroid-Stimulating Hormone (TSH)",
        unit: "µIU/mL",
        male_range: [0.4, 4.0],
        female_range: [0.4, 4.0],
        explanation: {
            fa: "هورمونی که عملکرد تیروئید را کنترل می‌کند. برای غربالگری مشکلات تیروئیدی مانند کم‌کاری یا پرکاری تیروئید استفاده می‌شود.",
            en: "A hormone that controls thyroid function. Used to screen for thyroid problems like hypothyroidism or hyperthyroidism."
        }
    },
};
