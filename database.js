// File: database.js
// LabVision Offline Lab Reference Database
// All ranges are general reference ranges for adults and can vary slightly between labs.
// This data is for educational purposes only and is NOT a substitute for professional medical advice.

const labData = {

    // ============ CBC (Complete Blood Count) ============
    hemoglobin: {
        name: { fa: "هموگلوبین (Hb)", en: "Hemoglobin (Hb)" },
        aliases: ["hb", "hgb", "hemoglobin", "haemoglobin", "هموگلوبین"],
        unit: "g/dL",
        range: { male: { min: 13.5, max: 17.5 }, female: { min: 12.0, max: 15.5 } },
        interpretation: {
            low: { fa: "کمبود هموگلوبین می‌تواند نشانه کم‌خونی (آنمی) باشد که علل مختلفی از جمله کمبود آهن، ویتامین B12 یا خونریزی دارد.", en: "Low hemoglobin may indicate anemia, which can result from iron deficiency, vitamin B12 deficiency, or blood loss." },
            normal: { fa: "مقدار هموگلوبین در محدوده طبیعی است و نشان‌دهنده ظرفیت مناسب خون برای حمل اکسیژن است.", en: "Hemoglobin is within the normal range, indicating adequate oxygen-carrying capacity of the blood." },
            high: { fa: "افزایش هموگلوبین می‌تواند به دلیل کم‌آبی بدن، بیماری‌های ریوی یا قلبی، یا زندگی در ارتفاعات بالا باشد.", en: "High hemoglobin can be due to dehydration, lung or heart conditions, or living at high altitude." }
        }
    },
    hematocrit: {
        name: { fa: "هماتوکریت (Hct)", en: "Hematocrit (Hct)" },
        aliases: ["hct", "hematocrit", "haematocrit", "هماتوکریت"],
        unit: "%",
        range: { male: { min: 38.8, max: 50.0 }, female: { min: 34.9, max: 44.5 } },
        interpretation: {
            low: { fa: "هماتوکریت پایین معمولاً همراه با کم‌خونی یا از دست دادن خون دیده می‌شود.", en: "Low hematocrit is usually associated with anemia or blood loss." },
            normal: { fa: "درصد حجم گلبول‌های قرمز نسبت به کل خون طبیعی است.", en: "The proportion of red blood cells in your blood is normal." },
            high: { fa: "هماتوکریت بالا می‌تواند ناشی از کم‌آبی بدن یا افزایش تولید گلبول قرمز باشد.", en: "High hematocrit can result from dehydration or increased red blood cell production." }
        }
    },
    rbc: {
        name: { fa: "گلبول قرمز (RBC)", en: "Red Blood Cell Count (RBC)" },
        aliases: ["rbc", "red blood cell", "red blood cells", "گلبول قرمز"],
        unit: "million/µL",
        range: { male: { min: 4.7, max: 6.1 }, female: { min: 4.2, max: 5.4 } },
        interpretation: {
            low: { fa: "تعداد کم گلبول قرمز می‌تواند نشانه کم‌خونی، خونریزی یا مشکلات مغز استخوان باشد.", en: "A low red blood cell count may indicate anemia, blood loss, or bone marrow problems." },
            normal: { fa: "تعداد گلبول‌های قرمز خون طبیعی است.", en: "Your red blood cell count is normal." },
            high: { fa: "افزایش گلبول قرمز می‌تواند ناشی از کم‌آبی، بیماری‌های ریوی یا قلبی، یا پلی‌سیتمی باشد.", en: "High red blood cell count can be due to dehydration, heart/lung disease, or polycythemia." }
        }
    },
    wbc: {
        name: { fa: "گلبول سفید (WBC)", en: "White Blood Cell Count (WBC)" },
        aliases: ["wbc", "white blood cell", "white blood cells", "گلبول سفید"],
        unit: "x10³/µL",
        range: { all: { min: 4.5, max: 11.0 } },
        interpretation: {
            low: { fa: "کاهش گلبول سفید (لکوپنی) می‌تواند خطر عفونت را افزایش دهد و علل مختلفی از عفونت ویروسی تا مشکلات مغز استخوان دارد.", en: "Low white blood cell count (leukopenia) can increase infection risk and has causes ranging from viral infections to bone marrow issues." },
            normal: { fa: "تعداد گلبول‌های سفید خون طبیعی است و سیستم ایمنی عملکرد مناسبی دارد.", en: "White blood cell count is normal, suggesting a properly functioning immune response." },
            high: { fa: "افزایش گلبول سفید (لکوسیتوز) معمولاً نشانه عفونت، التهاب یا استرس فیزیکی است.", en: "High white blood cell count (leukocytosis) usually points to infection, inflammation, or physical stress." }
        }
    },
    platelet: {
        name: { fa: "پلاکت (Platelet)", en: "Platelet Count" },
        aliases: ["plt", "platelet", "platelets", "پلاکت"],
        unit: "x10³/µL",
        range: { all: { min: 150, max: 450 } },
        interpretation: {
            low: { fa: "کاهش پلاکت (ترومبوسیتوپنی) می‌تواند خطر خونریزی را افزایش دهد.", en: "Low platelets (thrombocytopenia) can increase the risk of bleeding." },
            normal: { fa: "تعداد پلاکت‌ها طبیعی است و عملکرد انعقادی خون مناسب است.", en: "Platelet count is normal, supporting proper blood clotting." },
            high: { fa: "افزایش پلاکت (ترومبوسیتوز) می‌تواند خطر لخته شدن خون را بالا ببرد و نیاز به بررسی بیشتر دارد.", en: "High platelet count (thrombocytosis) can raise clotting risk and may need further evaluation." }
        }
    },
    mcv: {
        name: { fa: "MCV", en: "MCV" },
        aliases: ["mcv"],
        unit: "fL",
        range: { all: { min: 80, max: 100 } },
        interpretation: {
            low: { fa: "MCV پایین نشان‌دهنده گلبول‌های قرمز کوچک‌تر از حد طبیعی است، معمولاً در کم‌خونی فقر آهن دیده می‌شود.", en: "Low MCV indicates smaller than normal red blood cells, often seen in iron-deficiency anemia." },
            normal: { fa: "اندازه گلبول‌های قرمز طبیعی است.", en: "Red blood cell size is normal." },
            high: { fa: "MCV بالا نشان‌دهنده گلبول‌های قرمز بزرگ‌تر است، که می‌تواند با کمبود ویتامین B12 یا فولات مرتبط باشد.", en: "High MCV indicates larger than normal red blood cells, which can relate to vitamin B12 or folate deficiency." }
        }
    },
    mch: {
        name: { fa: "MCH", en: "MCH" },
        aliases: ["mch"],
        unit: "pg",
        range: { all: { min: 27, max: 33 } },
        interpretation: {
            low: { fa: "میزان هموگلوبین در هر گلبول قرمز کمتر از حد طبیعی است.", en: "The amount of hemoglobin per red blood cell is lower than normal." },
            normal: { fa: "میانگین هموگلوبین در هر گلبول قرمز طبیعی است.", en: "Average hemoglobin per red blood cell is normal." },
            high: { fa: "میزان هموگلوبین در هر گلبول قرمز بیشتر از حد طبیعی است.", en: "The amount of hemoglobin per red blood cell is higher than normal." }
        }
    },
    mchc: {
        name: { fa: "MCHC", en: "MCHC" },
        aliases: ["mchc"],
        unit: "g/dL",
        range: { all: { min: 32, max: 36 } },
        interpretation: {
            low: { fa: "غلظت هموگلوبین در گلبول قرمز کمتر از حد طبیعی است.", en: "Hemoglobin concentration within red cells is lower than normal." },
            normal: { fa: "غلظت هموگلوبین در گلبول‌های قرمز طبیعی است.", en: "Hemoglobin concentration within red cells is normal." },
            high: { fa: "غلظت هموگلوبین در گلبول قرمز بیشتر از حد طبیعی است.", en: "Hemoglobin concentration within red cells is higher than normal." }
        }
    },
    rdw: {
        name: { fa: "RDW", en: "RDW" },
        aliases: ["rdw"],
        unit: "%",
        range: { all: { min: 11.5, max: 14.5 } },
        interpretation: {
            low: { fa: "پراکندگی اندازه گلبول‌های قرمز کمتر از حد معمول است؛ معمولاً اهمیت بالینی کمی دارد.", en: "Variation in red cell size is below typical range; usually of limited clinical significance." },
            normal: { fa: "یکنواختی اندازه گلبول‌های قرمز طبیعی است.", en: "Red blood cell size variation is normal." },
            high: { fa: "پراکندگی زیاد اندازه گلبول قرمز می‌تواند نشانه کم‌خونی مختلط یا کمبود آهن باشد.", en: "High variation in red cell size can indicate mixed anemia or iron deficiency." }
        }
    },
    neutrophils: {
        name: { fa: "نوتروفیل", en: "Neutrophils" },
        aliases: ["neut", "neutrophil", "neutrophils", "نوتروفیل"],
        unit: "%",
        range: { all: { min: 40, max: 70 } },
        interpretation: {
            low: { fa: "کاهش نوتروفیل می‌تواند خطر عفونت باکتریایی را افزایش دهد.", en: "Low neutrophils can increase susceptibility to bacterial infection." },
            normal: { fa: "درصد نوتروفیل‌ها طبیعی است.", en: "Neutrophil percentage is normal." },
            high: { fa: "افزایش نوتروفیل معمولاً نشانه عفونت باکتریایی یا التهاب حاد است.", en: "Elevated neutrophils usually suggest bacterial infection or acute inflammation." }
        }
    },
    lymphocytes: {
        name: { fa: "لنفوسیت", en: "Lymphocytes" },
        aliases: ["lymph", "lymphocyte", "lymphocytes", "لنفوسیت"],
        unit: "%",
        range: { all: { min: 20, max: 40 } },
        interpretation: {
            low: { fa: "کاهش لنفوسیت می‌تواند ناشی از عفونت، استرس یا ضعف سیستم ایمنی باشد.", en: "Low lymphocytes can result from infection, stress, or a weakened immune system." },
            normal: { fa: "درصد لنفوسیت‌ها طبیعی است.", en: "Lymphocyte percentage is normal." },
            high: { fa: "افزایش لنفوسیت معمولاً با عفونت‌های ویروسی همراه است.", en: "Elevated lymphocytes are commonly associated with viral infections." }
        }
    },
    monocytes: {
        name: { fa: "مونوسیت", en: "Monocytes" },
        aliases: ["mono", "monocyte", "monocytes", "مونوسیت"],
        unit: "%",
        range: { all: { min: 2, max: 8 } },
        interpretation: {
            low: { fa: "کاهش مونوسیت معمولاً اهمیت بالینی محدودی دارد.", en: "Low monocytes usually have limited clinical significance." },
            normal: { fa: "درصد مونوسیت‌ها طبیعی است.", en: "Monocyte percentage is normal." },
            high: { fa: "افزایش مونوسیت می‌تواند با عفونت‌های مزمن یا التهاب مرتبط باشد.", en: "Elevated monocytes can be linked to chronic infections or inflammation." }
        }
    },
    eosinophils: {
        name: { fa: "ائوزینوفیل", en: "Eosinophils" },
        aliases: ["eos", "eosinophil", "eosinophils", "ائوزینوفیل"],
        unit: "%",
        range: { all: { min: 1, max: 4 } },
        interpretation: {
            low: { fa: "کاهش ائوزینوفیل معمولاً اهمیت بالینی محدودی دارد.", en: "Low eosinophils usually have limited clinical significance." },
            normal: { fa: "درصد ائوزینوفیل‌ها طبیعی است.", en: "Eosinophil percentage is normal." },
            high: { fa: "افزایش ائوزینوفیل می‌تواند نشانه آلرژی، آسم یا عفونت انگلی باشد.", en: "Elevated eosinophils can indicate allergy, asthma, or parasitic infection." }
        }
    },
    basophils: {
        name: { fa: "بازوفیل", en: "Basophils" },
        aliases: ["baso", "basophil", "basophils", "بازوفیل"],
        unit: "%",
        range: { all: { min: 0, max: 1 } },
        interpretation: {
            low: { fa: "کاهش بازوفیل معمولاً اهمیت بالینی محدودی دارد.", en: "Low basophils usually have limited clinical significance." },
            normal: { fa: "درصد بازوفیل‌ها طبیعی است.", en: "Basophil percentage is normal." },
            high: { fa: "افزایش بازوفیل می‌تواند با آلرژی یا برخی اختلالات مغز استخوان مرتبط باشد.", en: "Elevated basophils can be linked to allergies or certain bone marrow disorders." }
        }
    },
    esr: {
        name: { fa: "سرعت رسوب گلبول قرمز (ESR)", en: "Erythrocyte Sedimentation Rate (ESR)" },
        aliases: ["esr", "sed rate", "sedimentation rate", "esr test"],
        unit: "mm/hr",
        range: { male: { min: 0, max: 15 }, female: { min: 0, max: 20 } },
        interpretation: {
            low: { fa: "ESR پایین معمولاً طبیعی و بدون اهمیت بالینی است.", en: "Low ESR is usually normal and not clinically significant." },
            normal: { fa: "سرعت رسوب گلبول قرمز طبیعی است.", en: "Erythrocyte sedimentation rate is normal." },
            high: { fa: "افزایش ESR نشانه غیر اختصاصی التهاب در بدن است و نیاز به بررسی علت دارد.", en: "Elevated ESR is a non-specific marker of inflammation and may need further investigation." }
        }
    },

    // ============ Biochemistry / Metabolic ============
    glucose: {
        name: { fa: "قند خون ناشتا (Glucose)", en: "Fasting Glucose" },
        aliases: ["fbs", "glucose", "blood sugar", "fasting glucose", "fasting blood sugar", "قند خون", "gluc"],
        unit: "mg/dL",
        range: { all: { min: 70, max: 100 } },
        interpretation: {
            low: { fa: "قند خون پایین (هیپوگلیسمی) می‌تواند باعث ضعف، لرزش و سرگیجه شود.", en: "Low blood sugar (hypoglycemia) can cause weakness, shakiness, and dizziness." },
            normal: { fa: "قند خون ناشتا در محدوده طبیعی است.", en: "Fasting blood glucose is within the normal range." },
            high: { fa: "قند خون بالا می‌تواند نشانه پیش‌دیابت یا دیابت باشد و نیاز به پیگیری دارد.", en: "High blood glucose can indicate prediabetes or diabetes and warrants follow-up." }
        }
    },
    hba1c: {
        name: { fa: "هموگلوبین A1C", en: "Hemoglobin A1C" },
        aliases: ["a1c", "hba1c", "hemoglobin a1c", "glycated hemoglobin"],
        unit: "%",
        range: { all: { min: 4.0, max: 5.6 } },
        interpretation: {
            low: { fa: "A1C پایین معمولاً نگران‌کننده نیست.", en: "Low A1C is usually not a concern." },
            normal: { fa: "میانگین قند خون سه ماه اخیر طبیعی است.", en: "Average blood glucose over the past ~3 months is normal." },
            high: { fa: "A1C بالا نشانه کنترل ضعیف قند خون است و می‌تواند نشانه پیش‌دیابت یا دیابت باشد.", en: "High A1C indicates poor blood sugar control and can suggest prediabetes or diabetes." }
        }
    },
    urea: {
        name: { fa: "اوره خون (BUN)", en: "Blood Urea Nitrogen (BUN)" },
        aliases: ["bun", "urea", "blood urea nitrogen", "اوره"],
        unit: "mg/dL",
        range: { all: { min: 7, max: 20 } },
        interpretation: {
            low: { fa: "اوره پایین می‌تواند ناشی از رژیم کم‌پروتئین یا بیماری کبدی باشد.", en: "Low urea can result from a low-protein diet or liver disease." },
            normal: { fa: "سطح اوره خون طبیعی است.", en: "Blood urea nitrogen is within normal limits." },
            high: { fa: "اوره بالا می‌تواند نشانه کاهش عملکرد کلیه، کم‌آبی بدن یا رژیم پرپروتئین باشد.", en: "High urea can indicate reduced kidney function, dehydration, or a high-protein diet." }
        }
    },
    creatinine: {
        name: { fa: "کراتینین", en: "Creatinine" },
        aliases: ["cr", "creatinine", "کراتینین"],
        unit: "mg/dL",
        range: { male: { min: 0.7, max: 1.3 }, female: { min: 0.6, max: 1.1 } },
        interpretation: {
            low: { fa: "کراتینین پایین معمولاً نگران‌کننده نیست و می‌تواند با توده عضلانی کم مرتبط باشد.", en: "Low creatinine is usually not concerning and can relate to lower muscle mass." },
            normal: { fa: "کراتینین طبیعی است، نشان‌دهنده عملکرد مناسب کلیه.", en: "Creatinine is normal, indicating proper kidney function." },
            high: { fa: "کراتینین بالا می‌تواند نشانه کاهش عملکرد کلیه باشد.", en: "High creatinine can indicate reduced kidney function." }
        }
    },
    uric_acid: {
        name: { fa: "اسید اوریک", en: "Uric Acid" },
        aliases: ["uric acid", "ua", "اسید اوریک"],
        unit: "mg/dL",
        range: { male: { min: 3.4, max: 7.0 }, female: { min: 2.4, max: 6.0 } },
        interpretation: {
            low: { fa: "اسید اوریک پایین معمولاً اهمیت بالینی کمی دارد.", en: "Low uric acid usually has limited clinical significance." },
            normal: { fa: "سطح اسید اوریک طبیعی است.", en: "Uric acid level is normal." },
            high: { fa: "اسید اوریک بالا می‌تواند خطر نقرس و سنگ کلیه را افزایش دهد.", en: "High uric acid can increase the risk of gout and kidney stones." }
        }
    },
    cholesterol: {
        name: { fa: "کلسترول تام", en: "Total Cholesterol" },
        aliases: ["cholesterol", "chol", "total cholesterol", "کلسترول"],
        unit: "mg/dL",
        range: { all: { min: 100, max: 200 } },
        interpretation: {
            low: { fa: "کلسترول پایین معمولاً مطلوب است اما در موارد شدید نیاز به بررسی دارد.", en: "Low cholesterol is generally favorable, though very low levels warrant review." },
            normal: { fa: "کلسترول تام در محدوده مطلوب است.", en: "Total cholesterol is within the desirable range." },
            high: { fa: "کلسترول بالا می‌تواند خطر بیماری‌های قلبی-عروقی را افزایش دهد.", en: "High cholesterol can increase the risk of cardiovascular disease." }
        }
    },
    ldl: {
        name: { fa: "کلسترول بد (LDL)", en: "LDL Cholesterol" },
        aliases: ["ldl", "ldl cholesterol", "کلسترول بد"],
        unit: "mg/dL",
        range: { all: { min: 0, max: 100 } },
        interpretation: {
            low: { fa: "LDL پایین از نظر قلبی-عروقی مطلوب است.", en: "Low LDL is favorable for cardiovascular health." },
            normal: { fa: "LDL در محدوده مطلوب قرار دارد.", en: "LDL is within the optimal range." },
            high: { fa: "LDL بالا («کلسترول بد») خطر رسوب چربی در عروق و بیماری قلبی را افزایش می‌دهد.", en: "High LDL (\"bad cholesterol\") increases the risk of arterial plaque buildup and heart disease." }
        }
    },
    hdl: {
        name: { fa: "کلسترول خوب (HDL)", en: "HDL Cholesterol" },
        aliases: ["hdl", "hdl cholesterol", "کلسترول خوب"],
        unit: "mg/dL",
        range: { male: { min: 40, max: 100 }, female: { min: 50, max: 100 } },
        interpretation: {
            low: { fa: "HDL پایین («کلسترول خوب») می‌تواند خطر بیماری قلبی را افزایش دهد.", en: "Low HDL (\"good cholesterol\") can increase heart disease risk." },
            normal: { fa: "HDL در محدوده طبیعی و محافظتی برای قلب است.", en: "HDL is within the normal, heart-protective range." },
            high: { fa: "HDL بالا معمولاً مطلوب و محافظتی است.", en: "High HDL is generally favorable and protective." }
        }
    },
    triglyceride: {
        name: { fa: "تری‌گلیسیرید", en: "Triglycerides" },
        aliases: ["tg", "triglyceride", "triglycerides", "تری گلیسیرید"],
        unit: "mg/dL",
        range: { all: { min: 0, max: 150 } },
        interpretation: {
            low: { fa: "تری‌گلیسیرید پایین معمولاً نگران‌کننده نیست.", en: "Low triglycerides are usually not a concern." },
            normal: { fa: "سطح تری‌گلیسیرید طبیعی است.", en: "Triglyceride level is normal." },
            high: { fa: "تری‌گلیسیرید بالا می‌تواند خطر بیماری قلبی و پانکراتیت را افزایش دهد.", en: "High triglycerides can increase the risk of heart disease and pancreatitis." }
        }
    },
    ast: {
        name: { fa: "آنزیم کبدی AST (SGOT)", en: "AST (SGOT)" },
        aliases: ["ast", "sgot", "aspartate aminotransferase"],
        unit: "U/L",
        range: { all: { min: 5, max: 40 } },
        interpretation: {
            low: { fa: "AST پایین معمولاً اهمیت بالینی ندارد.", en: "Low AST is usually not clinically significant." },
            normal: { fa: "سطح آنزیم کبدی AST طبیعی است.", en: "Liver enzyme AST is within normal range." },
            high: { fa: "افزایش AST می‌تواند نشانه آسیب یا التهاب کبدی باشد.", en: "Elevated AST can indicate liver damage or inflammation." }
        }
    },
    alt: {
        name: { fa: "آنزیم کبدی ALT (SGPT)", en: "ALT (SGPT)" },
        aliases: ["alt", "sgpt", "alanine aminotransferase"],
        unit: "U/L",
        range: { all: { min: 7, max: 56 } },
        interpretation: {
            low: { fa: "ALT پایین معمولاً اهمیت بالینی ندارد.", en: "Low ALT is usually not clinically significant." },
            normal: { fa: "سطح آنزیم کبدی ALT طبیعی است.", en: "Liver enzyme ALT is within normal range." },
            high: { fa: "افزایش ALT معمولاً نشانه اختصاصی‌تری از آسیب سلول‌های کبدی است.", en: "Elevated ALT is a fairly specific marker of liver cell injury." }
        }
    },
    alp: {
        name: { fa: "آلکالین فسفاتاز (ALP)", en: "Alkaline Phosphatase (ALP)" },
        aliases: ["alp", "alkaline phosphatase"],
        unit: "U/L",
        range: { all: { min: 44, max: 147 } },
        interpretation: {
            low: { fa: "ALP پایین معمولاً اهمیت بالینی محدودی دارد.", en: "Low ALP usually has limited clinical significance." },
            normal: { fa: "سطح ALP طبیعی است.", en: "ALP level is normal." },
            high: { fa: "افزایش ALP می‌تواند با بیماری‌های کبدی، صفراوی یا استخوانی مرتبط باشد.", en: "Elevated ALP can be related to liver, biliary, or bone conditions." }
        }
    },
    bilirubin_total: {
        name: { fa: "بیلی‌روبین تام", en: "Total Bilirubin" },
        aliases: ["bilirubin", "t.bil", "total bilirubin", "بیلی روبین"],
        unit: "mg/dL",
        range: { all: { min: 0.1, max: 1.2 } },
        interpretation: {
            low: { fa: "بیلی‌روبین پایین معمولاً نگران‌کننده نیست.", en: "Low bilirubin is usually not a concern." },
            normal: { fa: "سطح بیلی‌روبین تام طبیعی است.", en: "Total bilirubin is within normal range." },
            high: { fa: "افزایش بیلی‌روبین می‌تواند نشانه مشکلات کبدی، صفراوی یا تخریب گلبول قرمز باشد.", en: "Elevated bilirubin can indicate liver, biliary, or red-blood-cell breakdown issues." }
        }
    },
    bilirubin_direct: {
        name: { fa: "بیلی‌روبین مستقیم", en: "Direct Bilirubin" },
        aliases: ["d.bil", "direct bilirubin", "بیلی روبین مستقیم"],
        unit: "mg/dL",
        range: { all: { min: 0, max: 0.3 } },
        interpretation: {
            low: { fa: "بیلی‌روبین مستقیم پایین معمولاً نگران‌کننده نیست.", en: "Low direct bilirubin is usually not a concern." },
            normal: { fa: "سطح بیلی‌روبین مستقیم طبیعی است.", en: "Direct bilirubin is within normal range." },
            high: { fa: "افزایش بیلی‌روبین مستقیم بیشتر با مشکلات صفراوی یا کبدی مرتبط است.", en: "Elevated direct bilirubin is more often linked to biliary or liver obstruction." }
        }
    },
    total_protein: {
        name: { fa: "پروتئین تام", en: "Total Protein" },
        aliases: ["protein", "total protein", "پروتئین تام"],
        unit: "g/dL",
        range: { all: { min: 6.0, max: 8.3 } },
        interpretation: {
            low: { fa: "پروتئین تام پایین می‌تواند نشانه سوءتغذیه، بیماری کبدی یا کلیوی باشد.", en: "Low total protein can indicate malnutrition, liver disease, or kidney disease." },
            normal: { fa: "سطح پروتئین تام طبیعی است.", en: "Total protein is within normal range." },
            high: { fa: "پروتئین تام بالا می‌تواند نشانه کم‌آبی بدن یا برخی اختلالات ایمنی باشد.", en: "High total protein can indicate dehydration or certain immune disorders." }
        }
    },
    albumin: {
        name: { fa: "آلبومین", en: "Albumin" },
        aliases: ["alb", "albumin", "آلبومین"],
        unit: "g/dL",
        range: { all: { min: 3.4, max: 5.4 } },
        interpretation: {
            low: { fa: "آلبومین پایین می‌تواند نشانه سوءتغذیه، بیماری کبدی یا کلیوی باشد.", en: "Low albumin can indicate malnutrition, liver disease, or kidney disease." },
            normal: { fa: "سطح آلبومین طبیعی است.", en: "Albumin level is normal." },
            high: { fa: "آلبومین بالا معمولاً ناشی از کم‌آبی بدن است.", en: "High albumin is usually due to dehydration." }
        }
    },
    sodium: {
        name: { fa: "سدیم (Na)", en: "Sodium (Na)" },
        aliases: ["na", "sodium", "سدیم"],
        unit: "mEq/L",
        range: { all: { min: 135, max: 145 } },
        interpretation: {
            low: { fa: "سدیم پایین (هیپوناترمی) می‌تواند باعث خستگی، سردرد و در موارد شدید تشنج شود.", en: "Low sodium (hyponatremia) can cause fatigue, headache, and in severe cases seizures." },
            normal: { fa: "سطح سدیم خون طبیعی است.", en: "Blood sodium level is normal." },
            high: { fa: "سدیم بالا (هیپرناترمی) معمولاً با کم‌آبی بدن مرتبط است.", en: "High sodium (hypernatremia) is usually related to dehydration." }
        }
    },
    potassium: {
        name: { fa: "پتاسیم (K)", en: "Potassium (K)" },
        aliases: ["k", "potassium", "پتاسیم"],
        unit: "mEq/L",
        range: { all: { min: 3.5, max: 5.1 } },
        interpretation: {
            low: { fa: "پتاسیم پایین می‌تواند باعث ضعف عضلانی و ریتم نامنظم قلب شود.", en: "Low potassium can cause muscle weakness and irregular heart rhythm." },
            normal: { fa: "سطح پتاسیم خون طبیعی است.", en: "Blood potassium level is normal." },
            high: { fa: "پتاسیم بالا می‌تواند خطرناک باشد و بر ریتم قلب اثر بگذارد؛ نیاز به پیگیری دارد.", en: "High potassium can be dangerous and affect heart rhythm; needs follow-up." }
        }
    },
    calcium: {
        name: { fa: "کلسیم", en: "Calcium" },
        aliases: ["ca", "calcium", "کلسیم"],
        unit: "mg/dL",
        range: { all: { min: 8.5, max: 10.2 } },
        interpretation: {
            low: { fa: "کلسیم پایین می‌تواند باعث گرفتگی عضلانی یا مورمور شدن شود.", en: "Low calcium can cause muscle cramps or tingling." },
            normal: { fa: "سطح کلسیم خون طبیعی است.", en: "Blood calcium level is normal." },
            high: { fa: "کلسیم بالا می‌تواند نشانه مشکلات پاراتیروئید یا سایر بیماری‌ها باشد.", en: "High calcium can indicate parathyroid problems or other conditions." }
        }
    },
    phosphorus: {
        name: { fa: "فسفر", en: "Phosphorus" },
        aliases: ["phos", "phosphorus", "phosphate", "فسفر"],
        unit: "mg/dL",
        range: { all: { min: 2.5, max: 4.5 } },
        interpretation: {
            low: { fa: "فسفر پایین می‌تواند باعث ضعف عضلانی شود.", en: "Low phosphorus can cause muscle weakness." },
            normal: { fa: "سطح فسفر خون طبیعی است.", en: "Blood phosphorus level is normal." },
            high: { fa: "فسفر بالا می‌تواند با مشکلات کلیوی مرتبط باشد.", en: "High phosphorus can be related to kidney problems." }
        }
    },
    magnesium: {
        name: { fa: "منیزیم", en: "Magnesium" },
        aliases: ["mg", "magnesium", "منیزیم"],
        unit: "mg/dL",
        range: { all: { min: 1.7, max: 2.2 } },
        interpretation: {
            low: { fa: "منیزیم پایین می‌تواند باعث گرفتگی عضلانی و ریتم نامنظم قلب شود.", en: "Low magnesium can cause muscle cramps and irregular heart rhythm." },
            normal: { fa: "سطح منیزیم خون طبیعی است.", en: "Blood magnesium level is normal." },
            high: { fa: "منیزیم بالا معمولاً با نارسایی کلیوی مرتبط است.", en: "High magnesium is usually related to kidney failure." }
        }
    },
    iron: {
        name: { fa: "آهن سرم", en: "Serum Iron" },
        aliases: ["fe", "iron", "serum iron", "آهن"],
        unit: "µg/dL",
        range: { male: { min: 65, max: 175 }, female: { min: 50, max: 170 } },
        interpretation: {
            low: { fa: "آهن پایین می‌تواند نشانه کم‌خونی فقر آهن باشد.", en: "Low iron can indicate iron-deficiency anemia." },
            normal: { fa: "سطح آهن سرم طبیعی است.", en: "Serum iron is within normal range." },
            high: { fa: "آهن بالا می‌تواند نشانه هموکروماتوز یا مصرف بیش از حد مکمل آهن باشد.", en: "High iron can indicate hemochromatosis or excessive iron supplementation." }
        }
    },
    ferritin: {
        name: { fa: "فریتین", en: "Ferritin" },
        aliases: ["ferritin", "فریتین"],
        unit: "ng/mL",
        range: { male: { min: 24, max: 336 }, female: { min: 11, max: 307 } },
        interpretation: {
            low: { fa: "فریتین پایین قوی‌ترین نشانه کمبود ذخایر آهن بدن است.", en: "Low ferritin is the strongest indicator of depleted iron stores in the body." },
            normal: { fa: "ذخایر آهن بدن (فریتین) طبیعی است.", en: "Body iron stores (ferritin) are normal." },
            high: { fa: "فریتین بالا می‌تواند نشانه التهاب، بیماری کبدی یا اضافه بار آهن باشد.", en: "High ferritin can indicate inflammation, liver disease, or iron overload." }
        }
    },
    tibc: {
        name: { fa: "TIBC", en: "TIBC" },
        aliases: ["tibc", "total iron binding capacity"],
        unit: "µg/dL",
        range: { all: { min: 250, max: 450 } },
        interpretation: {
            low: { fa: "TIBC پایین می‌تواند با التهاب مزمن یا اضافه‌بار آهن مرتبط باشد.", en: "Low TIBC can be related to chronic inflammation or iron overload." },
            normal: { fa: "ظرفیت اتصال آهن به ترانسفرین طبیعی است.", en: "Total iron-binding capacity is normal." },
            high: { fa: "TIBC بالا معمولاً نشانه کمبود آهن است.", en: "High TIBC usually indicates iron deficiency." }
        }
    },
    vitamin_d: {
        name: { fa: "ویتامین D", en: "Vitamin D" },
        aliases: ["vit d", "vitamin d", "25-oh vitamin d", "ویتامین د", "ویتامین d"],
        unit: "ng/mL",
        range: { all: { min: 30, max: 100 } },
        interpretation: {
            low: { fa: "کمبود ویتامین D می‌تواند بر سلامت استخوان و ایمنی بدن اثر بگذارد.", en: "Vitamin D deficiency can affect bone health and immune function." },
            normal: { fa: "سطح ویتامین D کافی است.", en: "Vitamin D level is sufficient." },
            high: { fa: "ویتامین D بالا معمولاً ناشی از مصرف بیش از حد مکمل است.", en: "High vitamin D is usually due to excessive supplementation." }
        }
    },
    vitamin_b12: {
        name: { fa: "ویتامین B12", en: "Vitamin B12" },
        aliases: ["b12", "vitamin b12", "vit b12", "ویتامین ب12", "ویتامین b12"],
        unit: "pg/mL",
        range: { all: { min: 200, max: 900 } },
        interpretation: {
            low: { fa: "کمبود ویتامین B12 می‌تواند باعث کم‌خونی و مشکلات عصبی شود.", en: "Vitamin B12 deficiency can cause anemia and neurological problems." },
            normal: { fa: "سطح ویتامین B12 کافی است.", en: "Vitamin B12 level is sufficient." },
            high: { fa: "ویتامین B12 بالا معمولاً ناشی از مصرف مکمل است و به ندرت نگران‌کننده است.", en: "High vitamin B12 is usually from supplementation and is rarely concerning." }
        }
    },
    folate: {
        name: { fa: "فولات (اسید فولیک)", en: "Folate" },
        aliases: ["folate", "folic acid", "فولات"],
        unit: "ng/mL",
        range: { all: { min: 2.7, max: 17.0 } },
        interpretation: {
            low: { fa: "کمبود فولات می‌تواند باعث کم‌خونی مگالوبلاستیک شود.", en: "Folate deficiency can cause megaloblastic anemia." },
            normal: { fa: "سطح فولات کافی است.", en: "Folate level is sufficient." },
            high: { fa: "فولات بالا معمولاً ناشی از مصرف مکمل است.", en: "High folate is usually from supplementation." }
        }
    },

    // ============ Thyroid ============
    tsh: {
        name: { fa: "TSH", en: "TSH" },
        aliases: ["tsh", "thyroid stimulating hormone"],
        unit: "mIU/L",
        range: { all: { min: 0.4, max: 4.0 } },
        interpretation: {
            low: { fa: "TSH پایین می‌تواند نشانه پرکاری تیروئید باشد.", en: "Low TSH can indicate an overactive thyroid (hyperthyroidism)." },
            normal: { fa: "عملکرد تیروئید از نظر TSH طبیعی است.", en: "Thyroid function (TSH) is normal." },
            high: { fa: "TSH بالا می‌تواند نشانه کم‌کاری تیروئید باشد.", en: "High TSH can indicate an underactive thyroid (hypothyroidism)." }
        }
    },
    t3: {
        name: { fa: "T3", en: "T3" },
        aliases: ["t3", "triiodothyronine"],
        unit: "ng/dL",
        range: { all: { min: 80, max: 200 } },
        interpretation: {
            low: { fa: "T3 پایین می‌تواند نشانه کم‌کاری تیروئید باشد.", en: "Low T3 can indicate hypothyroidism." },
            normal: { fa: "سطح T3 طبیعی است.", en: "T3 level is normal." },
            high: { fa: "T3 بالا می‌تواند نشانه پرکاری تیروئید باشد.", en: "High T3 can indicate hyperthyroidism." }
        }
    },
    t4: {
        name: { fa: "T4", en: "T4" },
        aliases: ["t4", "thyroxine"],
        unit: "µg/dL",
        range: { all: { min: 5.0, max: 12.0 } },
        interpretation: {
            low: { fa: "T4 پایین می‌تواند نشانه کم‌کاری تیروئید باشد.", en: "Low T4 can indicate hypothyroidism." },
            normal: { fa: "سطح T4 طبیعی است.", en: "T4 level is normal." },
            high: { fa: "T4 بالا می‌تواند نشانه پرکاری تیروئید باشد.", en: "High T4 can indicate hyperthyroidism." }
        }
    },
    free_t4: {
        name: { fa: "T4 آزاد (FT4)", en: "Free T4 (FT4)" },
        aliases: ["ft4", "free t4"],
        unit: "ng/dL",
        range: { all: { min: 0.8, max: 1.8 } },
        interpretation: {
            low: { fa: "FT4 پایین می‌تواند نشانه کم‌کاری تیروئید باشد.", en: "Low FT4 can indicate hypothyroidism." },
            normal: { fa: "سطح T4 آزاد طبیعی است.", en: "Free T4 level is normal." },
            high: { fa: "FT4 بالا می‌تواند نشانه پرکاری تیروئید باشد.", en: "High FT4 can indicate hyperthyroidism." }
        }
    },
    free_t3: {
        name: { fa: "T3 آزاد (FT3)", en: "Free T3 (FT3)" },
        aliases: ["ft3", "free t3"],
        unit: "pg/mL",
        range: { all: { min: 2.3, max: 4.2 } },
        interpretation: {
            low: { fa: "FT3 پایین می‌تواند نشانه کم‌کاری تیروئید باشد.", en: "Low FT3 can indicate hypothyroidism." },
            normal: { fa: "سطح T3 آزاد طبیعی است.", en: "Free T3 level is normal." },
            high: { fa: "FT3 بالا می‌تواند نشانه پرکاری تیروئید باشد.", en: "High FT3 can indicate hyperthyroidism." }
        }
    },

    // ============ Coagulation ============
    pt: {
        name: { fa: "زمان پروترومبین (PT)", en: "Prothrombin Time (PT)" },
        aliases: ["pt", "prothrombin time"],
        unit: "sec",
        range: { all: { min: 11, max: 13.5 } },
        interpretation: {
            low: { fa: "PT کوتاه‌تر از حد معمول به ندرت نگران‌کننده است.", en: "A PT shorter than usual is rarely concerning." },
            normal: { fa: "زمان انعقاد خون (PT) طبیعی است.", en: "Blood clotting time (PT) is normal." },
            high: { fa: "PT طولانی‌تر از حد طبیعی می‌تواند نشانه مشکلات انعقادی یا مصرف داروی رقیق‌کننده خون باشد.", en: "A PT longer than normal can indicate clotting problems or blood-thinner use." }
        }
    },
    inr: {
        name: { fa: "INR", en: "INR" },
        aliases: ["inr"],
        unit: "",
        range: { all: { min: 0.8, max: 1.1 } },
        interpretation: {
            low: { fa: "INR پایین‌تر از حد معمول به ندرت نگران‌کننده است.", en: "An INR lower than usual is rarely concerning." },
            normal: { fa: "INR طبیعی است.", en: "INR is normal." },
            high: { fa: "INR بالا نشان‌دهنده افزایش زمان لخته شدن خون است و در افراد تحت درمان با وارفارین باید پیگیری شود.", en: "A high INR indicates increased clotting time and should be monitored in patients on warfarin." }
        }
    },
    ptt: {
        name: { fa: "PTT", en: "PTT" },
        aliases: ["ptt", "aptt", "partial thromboplastin time"],
        unit: "sec",
        range: { all: { min: 25, max: 35 } },
        interpretation: {
            low: { fa: "PTT کوتاه‌تر از حد معمول به ندرت نگران‌کننده است.", en: "A PTT shorter than usual is rarely concerning." },
            normal: { fa: "PTT طبیعی است.", en: "PTT is normal." },
            high: { fa: "PTT طولانی می‌تواند نشانه اختلال انعقادی یا مصرف داروی ضد انعقاد باشد.", en: "A prolonged PTT can indicate a clotting disorder or anticoagulant use." }
        }
    },

    // ============ Extended Metabolic / Glucose ============
    gtt_1hr: {
        name: { fa: "تست تحمل گلوکز - ساعت اول", en: "Glucose Tolerance Test - 1hr" },
        aliases: ["gtt 1hr", "gtt1", "1hr glucose", "تست تحمل گلوکز ساعت اول"],
        unit: "mg/dL",
        range: { all: { min: 0, max: 180 } },
        interpretation: {
            low: { fa: "مقدار پایین در این مرحله معمولاً نگران‌کننده نیست.", en: "A low value at this stage is usually not concerning." },
            normal: { fa: "پاسخ قند خون یک ساعت پس از مصرف گلوکز طبیعی است.", en: "Blood sugar response one hour after glucose intake is normal." },
            high: { fa: "افزایش قند خون در این مرحله می‌تواند نشانه اختلال تحمل گلوکز یا دیابت بارداری باشد.", en: "Elevated glucose at this stage can indicate impaired glucose tolerance or gestational diabetes." }
        }
    },
    gtt_2hr: {
        name: { fa: "تست تحمل گلوکز - ساعت دوم (OGTT)", en: "Glucose Tolerance Test - 2hr (OGTT)" },
        aliases: ["gtt 2hr", "gtt2", "2hr glucose", "ogtt", "تست تحمل گلوکز ساعت دوم"],
        unit: "mg/dL",
        range: { all: { min: 0, max: 140 } },
        interpretation: {
            low: { fa: "مقدار پایین در این مرحله معمولاً نگران‌کننده نیست.", en: "A low value at this stage is usually not concerning." },
            normal: { fa: "قند خون دو ساعت پس از مصرف گلوکز طبیعی است.", en: "Blood sugar two hours after glucose intake is normal." },
            high: { fa: "قند خون بالا در ساعت دوم نشانه پیش‌دیابت (۱۴۰-۱۹۹) یا دیابت (≥۲۰۰) است.", en: "High 2-hour glucose suggests prediabetes (140-199) or diabetes (≥200)." }
        }
    },
    insulin_fasting: {
        name: { fa: "انسولین ناشتا", en: "Fasting Insulin" },
        aliases: ["insulin", "fasting insulin", "انسولین"],
        unit: "µIU/mL",
        range: { all: { min: 2.6, max: 24.9 } },
        interpretation: {
            low: { fa: "انسولین پایین می‌تواند در دیابت نوع ۱ یا نارسایی پانکراس دیده شود.", en: "Low insulin can be seen in type 1 diabetes or pancreatic insufficiency." },
            normal: { fa: "سطح انسولین ناشتا طبیعی است.", en: "Fasting insulin level is normal." },
            high: { fa: "انسولین بالا می‌تواند نشانه مقاومت به انسولین یا پیش‌دیابت باشد.", en: "High insulin can indicate insulin resistance or prediabetes." }
        }
    },
    c_peptide: {
        name: { fa: "سی‌پپتید (C-Peptide)", en: "C-Peptide" },
        aliases: ["c-peptide", "c peptide", "سی پپتید"],
        unit: "ng/mL",
        range: { all: { min: 0.8, max: 3.9 } },
        interpretation: {
            low: { fa: "سی‌پپتید پایین نشانه تولید کم انسولین توسط پانکراس است.", en: "Low C-peptide indicates low insulin production by the pancreas." },
            normal: { fa: "تولید انسولین داخلی طبیعی است.", en: "Endogenous insulin production is normal." },
            high: { fa: "سی‌پپتید بالا می‌تواند با مقاومت به انسولین یا تومورهای انسولین‌ساز مرتبط باشد.", en: "High C-peptide can be related to insulin resistance or insulin-secreting tumors." }
        }
    },

    // ============ Extended Liver ============
    ggt: {
        name: { fa: "گاما گلوتامیل ترانسفراز (GGT)", en: "Gamma-Glutamyl Transferase (GGT)" },
        aliases: ["ggt", "gamma gt"],
        unit: "U/L",
        range: { male: { min: 8, max: 61 }, female: { min: 5, max: 36 } },
        interpretation: {
            low: { fa: "GGT پایین معمولاً نگران‌کننده نیست.", en: "Low GGT is usually not a concern." },
            normal: { fa: "سطح GGT طبیعی است.", en: "GGT level is normal." },
            high: { fa: "افزایش GGT می‌تواند نشانه آسیب کبدی، مصرف الکل یا انسداد صفراوی باشد.", en: "Elevated GGT can indicate liver damage, alcohol use, or biliary obstruction." }
        }
    },
    bilirubin_indirect: {
        name: { fa: "بیلی‌روبین غیرمستقیم", en: "Indirect Bilirubin" },
        aliases: ["i.bil", "indirect bilirubin", "بیلی روبین غیر مستقیم"],
        unit: "mg/dL",
        range: { all: { min: 0.2, max: 0.8 } },
        interpretation: {
            low: { fa: "بیلی‌روبین غیرمستقیم پایین معمولاً نگران‌کننده نیست.", en: "Low indirect bilirubin is usually not a concern." },
            normal: { fa: "سطح بیلی‌روبین غیرمستقیم طبیعی است.", en: "Indirect bilirubin is within normal range." },
            high: { fa: "افزایش بیلی‌روبین غیرمستقیم بیشتر با تخریب گلبول قرمز (همولیز) مرتبط است.", en: "Elevated indirect bilirubin is more often linked to red blood cell breakdown (hemolysis)." }
        }
    },
    globulin: {
        name: { fa: "گلوبولین", en: "Globulin" },
        aliases: ["globulin", "گلوبولین"],
        unit: "g/dL",
        range: { all: { min: 2.0, max: 3.5 } },
        interpretation: {
            low: { fa: "گلوبولین پایین می‌تواند با نقص ایمنی یا بیماری کبدی مرتبط باشد.", en: "Low globulin can be related to immune deficiency or liver disease." },
            normal: { fa: "سطح گلوبولین طبیعی است.", en: "Globulin level is normal." },
            high: { fa: "گلوبولین بالا می‌تواند نشانه عفونت مزمن، التهاب یا اختلالات ایمنی باشد.", en: "High globulin can indicate chronic infection, inflammation, or immune disorders." }
        }
    },
    ldh: {
        name: { fa: "لاکتات دهیدروژناز (LDH)", en: "Lactate Dehydrogenase (LDH)" },
        aliases: ["ldh", "lactate dehydrogenase"],
        unit: "U/L",
        range: { all: { min: 140, max: 280 } },
        interpretation: {
            low: { fa: "LDH پایین معمولاً اهمیت بالینی ندارد.", en: "Low LDH is usually not clinically significant." },
            normal: { fa: "سطح LDH طبیعی است.", en: "LDH level is normal." },
            high: { fa: "افزایش LDH یک نشانه غیراختصاصی از آسیب بافتی است (کبد، قلب، عضله، گلبول قرمز).", en: "Elevated LDH is a non-specific marker of tissue damage (liver, heart, muscle, red blood cells)." }
        }
    },

    // ============ Extended Electrolytes ============
    chloride: {
        name: { fa: "کلر (Cl)", en: "Chloride (Cl)" },
        aliases: ["cl", "chloride", "کلر"],
        unit: "mEq/L",
        range: { all: { min: 96, max: 106 } },
        interpretation: {
            low: { fa: "کلر پایین می‌تواند با استفراغ، اسهال یا مشکلات کلیوی مرتبط باشد.", en: "Low chloride can be related to vomiting, diarrhea, or kidney problems." },
            normal: { fa: "سطح کلر خون طبیعی است.", en: "Blood chloride level is normal." },
            high: { fa: "کلر بالا می‌تواند با کم‌آبی بدن یا اسیدوز مرتبط باشد.", en: "High chloride can be related to dehydration or acidosis." }
        }
    },
    co2: {
        name: { fa: "دی‌اکسید کربن / بی‌کربنات (CO2)", en: "Carbon Dioxide / Bicarbonate (CO2)" },
        aliases: ["co2", "bicarbonate", "hco3", "بی کربنات"],
        unit: "mEq/L",
        range: { all: { min: 23, max: 29 } },
        interpretation: {
            low: { fa: "بی‌کربنات پایین می‌تواند نشانه اسیدوز متابولیک باشد.", en: "Low bicarbonate can indicate metabolic acidosis." },
            normal: { fa: "سطح بی‌کربنات خون طبیعی است.", en: "Blood bicarbonate level is normal." },
            high: { fa: "بی‌کربنات بالا می‌تواند نشانه آلکالوز متابولیک باشد.", en: "High bicarbonate can indicate metabolic alkalosis." }
        }
    },
    anion_gap: {
        name: { fa: "آنیون گپ (Anion Gap)", en: "Anion Gap" },
        aliases: ["anion gap", "ag", "آنیون گپ"],
        unit: "mEq/L",
        range: { all: { min: 8, max: 16 } },
        interpretation: {
            low: { fa: "آنیون گپ پایین نادر است و می‌تواند با کاهش آلبومین مرتبط باشد.", en: "A low anion gap is rare and can be related to low albumin." },
            normal: { fa: "آنیون گپ طبیعی است.", en: "Anion gap is normal." },
            high: { fa: "افزایش آنیون گپ می‌تواند نشانه اسیدوز متابولیک (مثل کتواسیدوز دیابتی یا مسمومیت) باشد.", en: "An elevated anion gap can indicate metabolic acidosis (e.g., diabetic ketoacidosis or toxin ingestion)." }
        }
    },

    // ============ Endocrine / Hormones ============
    acth: {
        name: { fa: "هورمون ACTH", en: "ACTH" },
        aliases: ["acth", "adrenocorticotropic hormone"],
        unit: "pg/mL",
        range: { all: { min: 10, max: 60 } },
        interpretation: {
            low: { fa: "ACTH پایین می‌تواند نشانه مشکلات غده هیپوفیز باشد.", en: "Low ACTH can indicate pituitary gland issues." },
            normal: { fa: "سطح ACTH طبیعی است.", en: "ACTH level is normal." },
            high: { fa: "ACTH بالا می‌تواند با بیماری آدیسون یا تومورهای هیپوفیز مرتبط باشد.", en: "High ACTH can be related to Addison's disease or pituitary tumors." }
        }
    },
    aldosterone: {
        name: { fa: "آلدوسترون", en: "Aldosterone" },
        aliases: ["aldosterone", "آلدوسترون"],
        unit: "ng/dL",
        range: { all: { min: 1, max: 16 } },
        interpretation: {
            low: { fa: "آلدوسترون پایین می‌تواند با نارسایی آدرنال مرتبط باشد.", en: "Low aldosterone can be related to adrenal insufficiency." },
            normal: { fa: "سطح آلدوسترون طبیعی است.", en: "Aldosterone level is normal." },
            high: { fa: "آلدوسترون بالا می‌تواند نشانه هیپرآلدوسترونیسم و فشار خون بالای ثانویه باشد.", en: "High aldosterone can indicate hyperaldosteronism and secondary hypertension." }
        }
    },
    renin: {
        name: { fa: "رنین", en: "Renin" },
        aliases: ["renin", "رنین"],
        unit: "ng/mL/hr",
        range: { all: { min: 0.6, max: 4.3 } },
        interpretation: {
            low: { fa: "رنین پایین می‌تواند با هیپرآلدوسترونیسم اولیه مرتبط باشد.", en: "Low renin can be related to primary hyperaldosteronism." },
            normal: { fa: "سطح رنین طبیعی است.", en: "Renin level is normal." },
            high: { fa: "رنین بالا می‌تواند با فشار خون ناشی از عروق کلیوی مرتبط باشد.", en: "High renin can be related to renovascular hypertension." }
        }
    },
    cortisol: {
        name: { fa: "کورتیزول", en: "Cortisol" },
        aliases: ["cortisol", "کورتیزول"],
        unit: "µg/dL",
        range: { all: { min: 6, max: 23 } },
        interpretation: {
            low: { fa: "کورتیزول پایین می‌تواند نشانه نارسایی آدرنال (بیماری آدیسون) باشد.", en: "Low cortisol can indicate adrenal insufficiency (Addison's disease)." },
            normal: { fa: "سطح کورتیزول صبحگاهی طبیعی است.", en: "Morning cortisol level is normal." },
            high: { fa: "کورتیزول بالا می‌تواند نشانه سندرم کوشینگ یا استرس شدید باشد.", en: "High cortisol can indicate Cushing's syndrome or severe stress." }
        }
    },
    prolactin: {
        name: { fa: "پرولاکتین", en: "Prolactin" },
        aliases: ["prolactin", "prl", "پرولاکتین"],
        unit: "ng/mL",
        range: { male: { min: 4, max: 15.2 }, female: { min: 4.8, max: 23.3 } },
        interpretation: {
            low: { fa: "پرولاکتین پایین معمولاً اهمیت بالینی کمی دارد.", en: "Low prolactin usually has limited clinical significance." },
            normal: { fa: "سطح پرولاکتین طبیعی است.", en: "Prolactin level is normal." },
            high: { fa: "پرولاکتین بالا می‌تواند نشانه تومور هیپوفیز (پرولاکتینوما)، بارداری یا مصرف برخی داروها باشد.", en: "High prolactin can indicate a pituitary tumor (prolactinoma), pregnancy, or certain medications." }
        }
    },
    fsh: {
        name: { fa: "هورمون FSH", en: "FSH" },
        aliases: ["fsh", "follicle stimulating hormone"],
        unit: "mIU/mL",
        range: { male: { min: 1.5, max: 12.4 }, female: { min: 3.5, max: 12.5 } },
        interpretation: {
            low: { fa: "FSH پایین می‌تواند با اختلال هیپوفیز یا هیپوتالاموس مرتبط باشد.", en: "Low FSH can be related to pituitary or hypothalamic dysfunction." },
            normal: { fa: "سطح FSH طبیعی است (بازه ذکرشده برای فاز فولیکولار/مردان بزرگسال است؛ در یائسگی و اواسط سیکل به‌طور طبیعی بالاتر است).", en: "FSH level is normal (this range is for the follicular phase/adult men; it is naturally higher at menopause and mid-cycle)." },
            high: { fa: "FSH بالا می‌تواند نشانه یائسگی، نارسایی تخمدان یا مشکلات بیضه باشد.", en: "High FSH can indicate menopause, ovarian failure, or testicular problems." }
        }
    },
    lh: {
        name: { fa: "هورمون LH", en: "LH" },
        aliases: ["lh", "luteinizing hormone"],
        unit: "mIU/mL",
        range: { male: { min: 1.7, max: 8.6 }, female: { min: 2.4, max: 12.6 } },
        interpretation: {
            low: { fa: "LH پایین می‌تواند با اختلال هیپوفیز یا هیپوتالاموس مرتبط باشد.", en: "Low LH can be related to pituitary or hypothalamic dysfunction." },
            normal: { fa: "سطح LH طبیعی است (بازه ذکرشده برای فاز فولیکولار/مردان بزرگسال است؛ نزدیک تخمک‌گذاری به‌طور طبیعی جهش می‌کند).", en: "LH level is normal (this range is for the follicular phase/adult men; it naturally surges around ovulation)." },
            high: { fa: "LH بالا می‌تواند نشانه یائسگی، سندرم تخمدان پلی‌کیستیک یا نارسایی تخمدان/بیضه باشد.", en: "High LH can indicate menopause, polycystic ovary syndrome, or ovarian/testicular failure." }
        }
    },
    estradiol: {
        name: { fa: "استرادیول (E2)", en: "Estradiol (E2)" },
        aliases: ["estradiol", "e2", "استرادیول", "استروژن"],
        unit: "pg/mL",
        range: { female: { min: 15, max: 350 }, male: { min: 10, max: 40 } },
        interpretation: {
            low: { fa: "استرادیول پایین می‌تواند با یائسگی یا نارسایی تخمدان مرتبط باشد.", en: "Low estradiol can be related to menopause or ovarian failure." },
            normal: { fa: "سطح استرادیول طبیعی است (این هورمون در طول سیکل قاعدگی به‌طور طبیعی نوسان زیادی دارد).", en: "Estradiol level is normal (this hormone naturally fluctuates widely across the menstrual cycle)." },
            high: { fa: "استرادیول بالا می‌تواند با کیست تخمدان، بارداری یا برخی تومورها مرتبط باشد.", en: "High estradiol can be related to ovarian cysts, pregnancy, or certain tumors." }
        }
    },
    progesterone: {
        name: { fa: "پروژسترون", en: "Progesterone" },
        aliases: ["progesterone", "پروژسترون"],
        unit: "ng/mL",
        range: { female: { min: 0.1, max: 25 }, male: { min: 0.1, max: 1.0 } },
        interpretation: {
            low: { fa: "پروژسترون پایین می‌تواند با عدم تخمک‌گذاری یا خطر سقط زودرس مرتبط باشد.", en: "Low progesterone can be related to anovulation or early miscarriage risk." },
            normal: { fa: "سطح پروژسترون طبیعی است (بسته به فاز سیکل یا سه‌ماهه بارداری متفاوت است).", en: "Progesterone level is normal (this varies widely by cycle phase or pregnancy trimester)." },
            high: { fa: "پروژسترون بالا معمولاً مربوط به فاز لوتئال طبیعی یا بارداری است.", en: "High progesterone is usually related to the normal luteal phase or pregnancy." }
        }
    },
    testosterone_total: {
        name: { fa: "تستوسترون تام", en: "Total Testosterone" },
        aliases: ["testosterone", "تستوسترون"],
        unit: "ng/dL",
        range: { male: { min: 264, max: 916 }, female: { min: 15, max: 70 } },
        interpretation: {
            low: { fa: "تستوسترون پایین می‌تواند با هیپوگنادیسم مرتبط باشد.", en: "Low testosterone can be related to hypogonadism." },
            normal: { fa: "سطح تستوسترون تام طبیعی است.", en: "Total testosterone level is normal." },
            high: { fa: "تستوسترون بالا می‌تواند با سندرم تخمدان پلی‌کیستیک (در زنان) یا تومورهای آدرنال/بیضه مرتبط باشد.", en: "High testosterone can be related to polycystic ovary syndrome (in women) or adrenal/testicular tumors." }
        }
    },
    dhea_s: {
        name: { fa: "DHEA-S", en: "DHEA-S" },
        aliases: ["dhea-s", "dheas", "dhea sulfate"],
        unit: "µg/dL",
        range: { male: { min: 80, max: 560 }, female: { min: 35, max: 430 } },
        interpretation: {
            low: { fa: "DHEA-S پایین می‌تواند با نارسایی آدرنال مرتبط باشد.", en: "Low DHEA-S can be related to adrenal insufficiency." },
            normal: { fa: "سطح DHEA-S طبیعی است.", en: "DHEA-S level is normal." },
            high: { fa: "DHEA-S بالا می‌تواند نشانه اختلال آدرنال یا سندرم تخمدان پلی‌کیستیک باشد.", en: "High DHEA-S can indicate adrenal disorder or polycystic ovary syndrome." }
        }
    },
    gastrin: {
        name: { fa: "گاسترین", en: "Gastrin" },
        aliases: ["gastrin", "گاسترین"],
        unit: "pg/mL",
        range: { all: { min: 0, max: 100 } },
        interpretation: {
            low: { fa: "گاسترین پایین معمولاً اهمیت بالینی کمی دارد.", en: "Low gastrin usually has limited clinical significance." },
            normal: { fa: "سطح گاسترین طبیعی است.", en: "Gastrin level is normal." },
            high: { fa: "گاسترین بالا می‌تواند با سندرم زولینگر-الیسون یا گاستریت آتروفیک مرتبط باشد.", en: "High gastrin can be related to Zollinger-Ellison syndrome or atrophic gastritis." }
        }
    },

    // ============ Pancreatic / GI Enzymes ============
    amylase: {
        name: { fa: "آمیلاز", en: "Amylase" },
        aliases: ["amylase", "آمیلاز"],
        unit: "U/L",
        range: { all: { min: 23, max: 140 } },
        interpretation: {
            low: { fa: "آمیلاز پایین می‌تواند با آسیب مزمن پانکراس مرتبط باشد.", en: "Low amylase can be related to chronic pancreatic damage." },
            normal: { fa: "سطح آمیلاز طبیعی است.", en: "Amylase level is normal." },
            high: { fa: "آمیلاز بالا معمولاً نشانه پانکراتیت حاد است.", en: "High amylase usually indicates acute pancreatitis." }
        }
    },
    lipase: {
        name: { fa: "لیپاز", en: "Lipase" },
        aliases: ["lipase", "لیپاز"],
        unit: "U/L",
        range: { all: { min: 10, max: 140 } },
        interpretation: {
            low: { fa: "لیپاز پایین معمولاً اهمیت بالینی کمی دارد.", en: "Low lipase usually has limited clinical significance." },
            normal: { fa: "سطح لیپاز طبیعی است.", en: "Lipase level is normal." },
            high: { fa: "لیپاز بالا نشانه اختصاصی‌تری نسبت به آمیلاز برای پانکراتیت حاد است.", en: "High lipase is a more specific marker than amylase for acute pancreatitis." }
        }
    },
    fecal_elastase: {
        name: { fa: "الاستاز مدفوع", en: "Fecal Elastase" },
        aliases: ["fecal elastase", "الاستاز مدفوع"],
        unit: "µg/g",
        range: { all: { min: 200, max: 500 } },
        interpretation: {
            low: { fa: "الاستاز مدفوع پایین نشانه نارسایی برون‌ریز پانکراس است.", en: "Low fecal elastase indicates exocrine pancreatic insufficiency." },
            normal: { fa: "عملکرد برون‌ریز پانکراس طبیعی است.", en: "Exocrine pancreatic function is normal." },
            high: { fa: "مقدار بالا معمولاً یافته طبیعی است و نگران‌کننده نیست.", en: "A high value is usually a normal finding and not concerning." }
        }
    },

    // ============ Kidney / Urine (Quantitative) ============
    microalbumin: {
        name: { fa: "میکروآلبومین ادرار", en: "Urine Microalbumin" },
        aliases: ["microalbumin", "urine microalbumin", "میکروآلبومین"],
        unit: "mg/24hr",
        range: { all: { min: 0, max: 30 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "دفع آلبومین از کلیه طبیعی است.", en: "Urinary albumin excretion is normal." },
            high: { fa: "افزایش میکروآلبومین می‌تواند نشانه اولیه آسیب کلیوی، به‌ویژه در دیابت، باشد.", en: "Elevated microalbumin can be an early sign of kidney damage, especially in diabetes." }
        }
    },
    creatinine_clearance: {
        name: { fa: "کلیرانس کراتینین", en: "Creatinine Clearance" },
        aliases: ["creatinine clearance", "ccr", "کلیرانس کراتینین"],
        unit: "mL/min",
        range: { male: { min: 97, max: 137 }, female: { min: 88, max: 128 } },
        interpretation: {
            low: { fa: "کلیرانس کراتینین پایین نشانه کاهش عملکرد فیلتراسیون کلیه است.", en: "Low creatinine clearance indicates reduced kidney filtration function." },
            normal: { fa: "عملکرد فیلتراسیون کلیه طبیعی است.", en: "Kidney filtration function is normal." },
            high: { fa: "کلیرانس بالا معمولاً نگران‌کننده نیست.", en: "A high clearance is usually not concerning." }
        }
    },
    osmolality_blood: {
        name: { fa: "اسمولاریته خون", en: "Blood Osmolality" },
        aliases: ["osmolality", "blood osmolality", "اسمولاریته خون"],
        unit: "mOsm/kg",
        range: { all: { min: 275, max: 295 } },
        interpretation: {
            low: { fa: "اسمولاریته پایین خون می‌تواند نشانه اضافه‌بار مایعات یا هیپوناترمی باشد.", en: "Low blood osmolality can indicate fluid overload or hyponatremia." },
            normal: { fa: "اسمولاریته خون طبیعی است.", en: "Blood osmolality is normal." },
            high: { fa: "اسمولاریته بالا می‌تواند نشانه کم‌آبی بدن باشد.", en: "High osmolality can indicate dehydration." }
        }
    },
    osmolality_urine: {
        name: { fa: "اسمولاریته ادرار", en: "Urine Osmolality" },
        aliases: ["urine osmolality", "اسمولاریته ادرار"],
        unit: "mOsm/kg",
        range: { all: { min: 300, max: 900 } },
        interpretation: {
            low: { fa: "اسمولاریته پایین ادرار می‌تواند نشانه دیابت بی‌مزه یا مصرف زیاد مایعات باشد.", en: "Low urine osmolality can indicate diabetes insipidus or excessive fluid intake." },
            normal: { fa: "توانایی تغلیظ ادرار توسط کلیه طبیعی است.", en: "The kidney's urine-concentrating ability is normal." },
            high: { fa: "اسمولاریته بالا می‌تواند نشانه کم‌آبی بدن باشد.", en: "High osmolality can indicate dehydration." }
        }
    },
    urine_oxalate: {
        name: { fa: "اگزالات ادرار", en: "Urine Oxalate" },
        aliases: ["urine oxalate", "اگزالات ادرار"],
        unit: "mg/24hr",
        range: { all: { min: 10, max: 40 } },
        interpretation: {
            low: { fa: "مقدار پایین معمولاً نگران‌کننده نیست.", en: "A low value is usually not concerning." },
            normal: { fa: "دفع اگزالات ادرار طبیعی است.", en: "Urinary oxalate excretion is normal." },
            high: { fa: "افزایش اگزالات ادرار خطر سنگ کلیه اگزالات کلسیم را بالا می‌برد.", en: "Elevated urine oxalate increases the risk of calcium oxalate kidney stones." }
        }
    },
    urine_citrate: {
        name: { fa: "سیترات ادرار", en: "Urine Citrate" },
        aliases: ["urine citrate", "سیترات ادرار"],
        unit: "mg/24hr",
        range: { all: { min: 320, max: 1240 } },
        interpretation: {
            low: { fa: "سیترات پایین ادرار خطر تشکیل سنگ کلیه را افزایش می‌دهد.", en: "Low urine citrate increases the risk of kidney stone formation." },
            normal: { fa: "سیترات ادرار طبیعی است (سیترات به‌طور طبیعی مانع تشکیل سنگ کلیه می‌شود).", en: "Urine citrate is normal (citrate naturally inhibits kidney stone formation)." },
            high: { fa: "سیترات بالا معمولاً نگران‌کننده نیست.", en: "High citrate is usually not concerning." }
        }
    },

    // ============ Inflammatory Markers ============
    crp: {
        name: { fa: "پروتئین واکنشی C (CRP)", en: "C-Reactive Protein (CRP)" },
        aliases: ["crp", "c-reactive protein", "سی آر پی"],
        unit: "mg/L",
        range: { all: { min: 0, max: 10 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "نشانه‌ای از التهاب فعال در بدن دیده نمی‌شود.", en: "No sign of active inflammation is present." },
            high: { fa: "افزایش CRP نشانه غیراختصاصی التهاب یا عفونت است و نیاز به بررسی علت دارد.", en: "Elevated CRP is a non-specific marker of inflammation or infection and warrants further evaluation." }
        }
    },
    procalcitonin: {
        name: { fa: "پروکلسی‌تونین (PCT)", en: "Procalcitonin (PCT)" },
        aliases: ["procalcitonin", "pct", "پروکلسی تونین"],
        unit: "ng/mL",
        range: { all: { min: 0, max: 0.1 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است و احتمال عفونت باکتریایی شدید کم است.", en: "A low value is normal and severe bacterial infection is unlikely." },
            normal: { fa: "پروکلسی‌تونین در محدوده طبیعی است.", en: "Procalcitonin is within the normal range." },
            high: { fa: "افزایش پروکلسی‌تونین نشانه احتمال عفونت باکتریایی سیستمیک (سپسیس) است.", en: "Elevated procalcitonin suggests possible systemic bacterial infection (sepsis)." }
        }
    },
    rf: {
        name: { fa: "فاکتور روماتوئید (RF)", en: "Rheumatoid Factor (RF)" },
        aliases: ["rf", "rheumatoid factor", "فاکتور روماتوئید"],
        unit: "IU/mL",
        range: { all: { min: 0, max: 14 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "RF در محدوده طبیعی است.", en: "RF is within the normal range." },
            high: { fa: "افزایش RF می‌تواند نشانه آرتریت روماتوئید یا سایر بیماری‌های خودایمنی باشد (در برخی افراد سالم هم دیده می‌شود).", en: "Elevated RF can indicate rheumatoid arthritis or other autoimmune diseases (also seen in some healthy individuals)." }
        }
    },
    anti_ccp: {
        name: { fa: "آنتی-CCP", en: "Anti-CCP" },
        aliases: ["anti-ccp", "anti ccp", "آنتی سی سی پی"],
        unit: "U/mL",
        range: { all: { min: 0, max: 20 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "آنتی-CCP در محدوده طبیعی است.", en: "Anti-CCP is within the normal range." },
            high: { fa: "افزایش آنتی-CCP نشانه اختصاصی‌تری نسبت به RF برای آرتریت روماتوئید است.", en: "Elevated anti-CCP is a more specific marker than RF for rheumatoid arthritis." }
        }
    },
    anti_dsdna: {
        name: { fa: "آنتی-dsDNA", en: "Anti-dsDNA" },
        aliases: ["anti-dsdna", "anti dsdna", "آنتی دی اس دی ان ای"],
        unit: "IU/mL",
        range: { all: { min: 0, max: 30 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "آنتی-dsDNA در محدوده طبیعی است.", en: "Anti-dsDNA is within the normal range." },
            high: { fa: "افزایش آنتی-dsDNA به‌طور اختصاصی با لوپوس اریتماتوز سیستمیک (SLE) مرتبط است.", en: "Elevated anti-dsDNA is specifically associated with systemic lupus erythematosus (SLE)." }
        }
    },
    c3: {
        name: { fa: "کمپلمان C3", en: "Complement C3" },
        aliases: ["c3", "complement c3"],
        unit: "mg/dL",
        range: { all: { min: 90, max: 180 } },
        interpretation: {
            low: { fa: "کاهش C3 می‌تواند در بیماری‌های خودایمنی فعال مانند لوپوس دیده شود.", en: "Low C3 can be seen in active autoimmune diseases such as lupus." },
            normal: { fa: "سطح کمپلمان C3 طبیعی است.", en: "Complement C3 level is normal." },
            high: { fa: "افزایش C3 معمولاً یک واکنش التهابی غیراختصاصی است.", en: "High C3 is usually a non-specific inflammatory response." }
        }
    },
    c4: {
        name: { fa: "کمپلمان C4", en: "Complement C4" },
        aliases: ["c4", "complement c4"],
        unit: "mg/dL",
        range: { all: { min: 10, max: 40 } },
        interpretation: {
            low: { fa: "کاهش C4 می‌تواند در بیماری‌های خودایمنی فعال یا آنژیوادم ارثی دیده شود.", en: "Low C4 can be seen in active autoimmune diseases or hereditary angioedema." },
            normal: { fa: "سطح کمپلمان C4 طبیعی است.", en: "Complement C4 level is normal." },
            high: { fa: "افزایش C4 معمولاً یک واکنش التهابی غیراختصاصی است.", en: "High C4 is usually a non-specific inflammatory response." }
        }
    },

    // ============ Allergy / Immunology ============
    ige_total: {
        name: { fa: "IgE تام", en: "Total IgE" },
        aliases: ["ige", "total ige", "آی جی ای"],
        unit: "IU/mL",
        range: { all: { min: 0, max: 100 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "IgE تام در محدوده طبیعی است.", en: "Total IgE is within the normal range." },
            high: { fa: "افزایش IgE تام می‌تواند نشانه آلرژی، آسم یا عفونت انگلی باشد.", en: "Elevated total IgE can indicate allergy, asthma, or parasitic infection." }
        }
    },
    sweat_chloride: {
        name: { fa: "کلراید عرق (تست فیبروز کیستیک)", en: "Sweat Chloride (Cystic Fibrosis Test)" },
        aliases: ["sweat chloride", "sweat test", "تست عرق"],
        unit: "mmol/L",
        range: { all: { min: 0, max: 29 } },
        interpretation: {
            low: { fa: "مقدار طبیعی است و احتمال فیبروز کیستیک کم است.", en: "The value is normal and cystic fibrosis is unlikely." },
            normal: { fa: "کلراید عرق طبیعی است.", en: "Sweat chloride is normal." },
            high: { fa: "افزایش کلراید عرق (به‌ویژه بالای ۶۰) نشانه احتمالی فیبروز کیستیک است.", en: "Elevated sweat chloride (especially above 60) is suggestive of cystic fibrosis." }
        }
    },
    alpha_1_antitrypsin: {
        name: { fa: "آلفا-۱ آنتی‌تریپسین", en: "Alpha-1 Antitrypsin" },
        aliases: ["alpha-1 antitrypsin", "a1at", "آلفا یک آنتی تریپسین"],
        unit: "mg/dL",
        range: { all: { min: 100, max: 200 } },
        interpretation: {
            low: { fa: "کمبود آلفا-۱ آنتی‌تریپسین می‌تواند خطر بیماری ریوی و کبدی را افزایش دهد.", en: "Alpha-1 antitrypsin deficiency can increase the risk of lung and liver disease." },
            normal: { fa: "سطح آلفا-۱ آنتی‌تریپسین طبیعی است.", en: "Alpha-1 antitrypsin level is normal." },
            high: { fa: "افزایش آن معمولاً یک واکنش التهابی غیراختصاصی است.", en: "An elevated level is usually a non-specific inflammatory response." }
        }
    },
    anticardiolipin: {
        name: { fa: "آنتی‌کاردیولیپین", en: "Anticardiolipin Antibody" },
        aliases: ["anticardiolipin", "آنتی کاردیولیپین"],
        unit: "GPL-U/mL",
        range: { all: { min: 0, max: 15 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "آنتی‌کاردیولیپین در محدوده طبیعی است.", en: "Anticardiolipin is within the normal range." },
            high: { fa: "افزایش آن می‌تواند با سندرم آنتی‌فسفولیپید و خطر لخته شدن خون مرتبط باشد.", en: "An elevated level can be related to antiphospholipid syndrome and increased clotting risk." }
        }
    },
    beta_2_microglobulin: {
        name: { fa: "بتا-۲ میکروگلوبولین", en: "Beta-2 Microglobulin" },
        aliases: ["beta-2 microglobulin", "b2m", "بتا دو میکروگلوبولین"],
        unit: "mg/L",
        range: { all: { min: 0.8, max: 2.2 } },
        interpretation: {
            low: { fa: "مقدار پایین معمولاً اهمیت بالینی ندارد.", en: "A low value is usually not clinically significant." },
            normal: { fa: "سطح بتا-۲ میکروگلوبولین طبیعی است.", en: "Beta-2 microglobulin level is normal." },
            high: { fa: "افزایش آن می‌تواند با نارسایی کلیه، التهاب مزمن یا برخی سرطان‌های خونی مرتبط باشد.", en: "An elevated level can be related to kidney failure, chronic inflammation, or certain blood cancers." }
        }
    },
    igg: {
        name: { fa: "ایمونوگلوبولین G (IgG)", en: "Immunoglobulin G (IgG)" },
        aliases: ["igg", "immunoglobulin g"],
        unit: "mg/dL",
        range: { all: { min: 700, max: 1600 } },
        interpretation: {
            low: { fa: "IgG پایین می‌تواند نشانه نقص ایمنی باشد.", en: "Low IgG can indicate an immune deficiency." },
            normal: { fa: "سطح IgG طبیعی است.", en: "IgG level is normal." },
            high: { fa: "IgG بالا می‌تواند با عفونت مزمن یا اختلالات پلاسماسل مرتبط باشد.", en: "High IgG can be related to chronic infection or plasma cell disorders." }
        }
    },
    iga: {
        name: { fa: "ایمونوگلوبولین A (IgA)", en: "Immunoglobulin A (IgA)" },
        aliases: ["iga", "immunoglobulin a"],
        unit: "mg/dL",
        range: { all: { min: 70, max: 400 } },
        interpretation: {
            low: { fa: "کمبود IgA یکی از شایع‌ترین نقص‌های ایمنی است و معمولاً خفیف است.", en: "IgA deficiency is one of the most common immune deficiencies and is usually mild." },
            normal: { fa: "سطح IgA طبیعی است.", en: "IgA level is normal." },
            high: { fa: "IgA بالا می‌تواند با بیماری‌های کبدی مزمن یا التهاب مخاطی مرتبط باشد.", en: "High IgA can be related to chronic liver disease or mucosal inflammation." }
        }
    },
    igm: {
        name: { fa: "ایمونوگلوبولین M (IgM)", en: "Immunoglobulin M (IgM)" },
        aliases: ["igm", "immunoglobulin m"],
        unit: "mg/dL",
        range: { all: { min: 40, max: 230 } },
        interpretation: {
            low: { fa: "IgM پایین می‌تواند نشانه نقص ایمنی باشد.", en: "Low IgM can indicate an immune deficiency." },
            normal: { fa: "سطح IgM طبیعی است.", en: "IgM level is normal." },
            high: { fa: "IgM بالا معمولاً نشانه عفونت اخیر یا حاد است.", en: "High IgM usually indicates a recent or acute infection." }
        }
    },

    // ============ Tumor Markers ============
    afp: {
        name: { fa: "آلفا-فتوپروتئین (AFP)", en: "Alpha-Fetoprotein (AFP)" },
        aliases: ["afp", "alpha-fetoprotein", "آلفا فتوپروتئین"],
        unit: "ng/mL",
        range: { all: { min: 0, max: 10 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "AFP در محدوده طبیعی است.", en: "AFP is within the normal range." },
            high: { fa: "افزایش AFP می‌تواند با سرطان کبد، تومورهای سلول زایا یا بارداری مرتبط باشد و نیاز به پیگیری دارد.", en: "Elevated AFP can be related to liver cancer, germ cell tumors, or pregnancy, and needs follow-up." }
        }
    },
    cea: {
        name: { fa: "آنتی‌ژن کارسینوآمبریونیک (CEA)", en: "Carcinoembryonic Antigen (CEA)" },
        aliases: ["cea", "carcinoembryonic antigen"],
        unit: "ng/mL",
        range: { all: { min: 0, max: 3 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "CEA در محدوده طبیعی است.", en: "CEA is within the normal range." },
            high: { fa: "افزایش CEA می‌تواند با سرطان روده بزرگ و برخی سرطان‌های دیگر مرتبط باشد؛ در سیگاری‌ها هم می‌تواند کمی بالا باشد.", en: "Elevated CEA can be related to colorectal cancer and other cancers; it can also be mildly elevated in smokers." }
        }
    },
    ca125: {
        name: { fa: "CA-125", en: "CA-125" },
        aliases: ["ca-125", "ca125"],
        unit: "U/mL",
        range: { all: { min: 0, max: 35 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "CA-125 در محدوده طبیعی است.", en: "CA-125 is within the normal range." },
            high: { fa: "افزایش CA-125 می‌تواند با سرطان تخمدان، اما همچنین با شرایط خوش‌خیم مثل اندومتریوز مرتبط باشد.", en: "Elevated CA-125 can be related to ovarian cancer, but also to benign conditions like endometriosis." }
        }
    },
    ca199: {
        name: { fa: "CA-19-9", en: "CA-19-9" },
        aliases: ["ca-19-9", "ca199"],
        unit: "U/mL",
        range: { all: { min: 0, max: 37 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "CA-19-9 در محدوده طبیعی است.", en: "CA-19-9 is within the normal range." },
            high: { fa: "افزایش CA-19-9 می‌تواند با سرطان پانکراس یا مجاری صفراوی مرتبط باشد.", en: "Elevated CA-19-9 can be related to pancreatic or bile duct cancer." }
        }
    },
    ca153: {
        name: { fa: "CA-15-3", en: "CA-15-3" },
        aliases: ["ca-15-3", "ca153"],
        unit: "U/mL",
        range: { all: { min: 0, max: 30 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "CA-15-3 در محدوده طبیعی است.", en: "CA-15-3 is within the normal range." },
            high: { fa: "افزایش CA-15-3 بیشتر در پیگیری سرطان پستان کاربرد دارد.", en: "Elevated CA-15-3 is mostly used in breast cancer monitoring." }
        }
    },
    psa: {
        name: { fa: "آنتی‌ژن اختصاصی پروستات (PSA)", en: "Prostate-Specific Antigen (PSA)" },
        aliases: ["psa", "prostate specific antigen"],
        unit: "ng/mL",
        range: { all: { min: 0, max: 4 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "PSA در محدوده طبیعی است.", en: "PSA is within the normal range." },
            high: { fa: "افزایش PSA می‌تواند نشانه بزرگی خوش‌خیم پروستات، پروستاتیت یا سرطان پروستات باشد.", en: "Elevated PSA can indicate benign prostatic enlargement, prostatitis, or prostate cancer." }
        }
    },
    beta_hcg: {
        name: { fa: "بتا-hCG", en: "Beta-hCG" },
        aliases: ["beta-hcg", "bhcg", "hcg", "بتا اچ سی جی"],
        unit: "mIU/mL",
        range: { all: { min: 0, max: 5 } },
        interpretation: {
            low: { fa: "مقدار زیر ۵ معمولاً به‌معنای عدم بارداری است.", en: "A value below 5 usually means not pregnant." },
            normal: { fa: "بتا-hCG در محدوده غیربارداری طبیعی است.", en: "Beta-hCG is within the normal non-pregnant range." },
            high: { fa: "افزایش بتا-hCG معمولاً نشانه بارداری است؛ در موارد نادر می‌تواند با برخی تومورها مرتبط باشد.", en: "Elevated beta-hCG usually indicates pregnancy; in rare cases it can be related to certain tumors." }
        }
    },

    // ============ Cardiac Markers ============
    troponin: {
        name: { fa: "تروپونین", en: "Troponin" },
        aliases: ["troponin", "تروپونین"],
        unit: "ng/mL",
        range: { all: { min: 0, max: 0.04 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "تروپونین در محدوده طبیعی است.", en: "Troponin is within the normal range." },
            high: { fa: "افزایش تروپونین نشانه احتمالی آسیب عضله قلب (مانند سکته قلبی) است و نیاز به بررسی فوری دارد.", en: "Elevated troponin suggests possible heart muscle injury (such as a heart attack) and needs urgent evaluation." }
        }
    },
    ck: {
        name: { fa: "کراتین کیناز (CK/CPK)", en: "Creatine Kinase (CK/CPK)" },
        aliases: ["ck", "cpk", "creatine kinase", "کراتین کیناز"],
        unit: "U/L",
        range: { male: { min: 39, max: 308 }, female: { min: 26, max: 192 } },
        interpretation: {
            low: { fa: "CK پایین معمولاً اهمیت بالینی ندارد.", en: "Low CK is usually not clinically significant." },
            normal: { fa: "سطح CK طبیعی است.", en: "CK level is normal." },
            high: { fa: "افزایش CK می‌تواند نشانه آسیب عضلانی، ورزش سنگین یا آسیب قلبی باشد.", en: "Elevated CK can indicate muscle injury, strenuous exercise, or heart damage." }
        }
    },
    ck_mb: {
        name: { fa: "CK-MB", en: "CK-MB" },
        aliases: ["ck-mb", "ckmb"],
        unit: "ng/mL",
        range: { all: { min: 0, max: 5 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "CK-MB در محدوده طبیعی است.", en: "CK-MB is within the normal range." },
            high: { fa: "افزایش CK-MB نشانه اختصاصی‌تری برای آسیب عضله قلب نسبت به CK کل است.", en: "Elevated CK-MB is a more heart-specific marker than total CK." }
        }
    },
    myoglobin: {
        name: { fa: "میوگلوبین", en: "Myoglobin" },
        aliases: ["myoglobin", "میوگلوبین"],
        unit: "ng/mL",
        range: { all: { min: 25, max: 72 } },
        interpretation: {
            low: { fa: "مقدار پایین معمولاً اهمیت بالینی ندارد.", en: "A low value is usually not clinically significant." },
            normal: { fa: "سطح میوگلوبین طبیعی است.", en: "Myoglobin level is normal." },
            high: { fa: "افزایش میوگلوبین می‌تواند نشانه آسیب عضلانی یا قلبی زودهنگام باشد (اختصاصیت پایینی دارد).", en: "Elevated myoglobin can indicate early muscle or heart injury (has low specificity)." }
        }
    },
    bnp: {
        name: { fa: "BNP / NT-proBNP", en: "BNP / NT-proBNP" },
        aliases: ["bnp", "nt-probnp", "ntprobnp"],
        unit: "pg/mL",
        range: { all: { min: 0, max: 100 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است و نارسایی قلبی بعید است.", en: "A low value is normal and heart failure is unlikely." },
            normal: { fa: "BNP در محدوده طبیعی است.", en: "BNP is within the normal range." },
            high: { fa: "افزایش BNP نشانه احتمالی نارسایی قلبی است و شدت آن معمولاً با میزان افزایش متناسب است.", en: "Elevated BNP suggests possible heart failure, with severity usually proportional to the level." }
        }
    },
    homocysteine: {
        name: { fa: "هموسیستئین", en: "Homocysteine" },
        aliases: ["homocysteine", "هموسیستئین"],
        unit: "µmol/L",
        range: { all: { min: 5, max: 15 } },
        interpretation: {
            low: { fa: "مقدار پایین معمولاً نگران‌کننده نیست.", en: "A low value is usually not concerning." },
            normal: { fa: "سطح هموسیستئین طبیعی است.", en: "Homocysteine level is normal." },
            high: { fa: "افزایش هموسیستئین می‌تواند با کمبود ویتامین B12/فولات و افزایش خطر قلبی-عروقی مرتبط باشد.", en: "Elevated homocysteine can be related to vitamin B12/folate deficiency and increased cardiovascular risk." }
        }
    },
    apo_a: {
        name: { fa: "آپولیپوپروتئین A (Apo-A)", en: "Apolipoprotein A (Apo-A)" },
        aliases: ["apo-a", "apoa", "apolipoprotein a"],
        unit: "mg/dL",
        range: { all: { min: 110, max: 205 } },
        interpretation: {
            low: { fa: "Apo-A پایین می‌تواند با افزایش خطر قلبی-عروقی مرتبط باشد.", en: "Low Apo-A can be related to increased cardiovascular risk." },
            normal: { fa: "سطح Apo-A طبیعی است.", en: "Apo-A level is normal." },
            high: { fa: "Apo-A بالا معمولاً از نظر قلبی-عروقی مطلوب است.", en: "High Apo-A is generally favorable for cardiovascular health." }
        }
    },
    apo_b: {
        name: { fa: "آپولیپوپروتئین B (Apo-B)", en: "Apolipoprotein B (Apo-B)" },
        aliases: ["apo-b", "apob", "apolipoprotein b"],
        unit: "mg/dL",
        range: { all: { min: 55, max: 100 } },
        interpretation: {
            low: { fa: "Apo-B پایین از نظر قلبی-عروقی مطلوب است.", en: "Low Apo-B is favorable for cardiovascular health." },
            normal: { fa: "سطح Apo-B طبیعی است.", en: "Apo-B level is normal." },
            high: { fa: "Apo-B بالا می‌تواند خطر بیماری قلبی-عروقی را افزایش دهد.", en: "High Apo-B can increase cardiovascular disease risk." }
        }
    },

    // ============ Coagulation (Extended) ============
    fibrinogen: {
        name: { fa: "فیبرینوژن", en: "Fibrinogen" },
        aliases: ["fibrinogen", "فیبرینوژن"],
        unit: "mg/dL",
        range: { all: { min: 200, max: 400 } },
        interpretation: {
            low: { fa: "فیبرینوژن پایین می‌تواند خطر خونریزی را افزایش دهد.", en: "Low fibrinogen can increase bleeding risk." },
            normal: { fa: "سطح فیبرینوژن طبیعی است.", en: "Fibrinogen level is normal." },
            high: { fa: "فیبرینوژن بالا یک واکنش فاز حاد التهابی است و می‌تواند خطر لخته را افزایش دهد.", en: "High fibrinogen is an acute-phase inflammatory response and can increase clotting risk." }
        }
    },
    d_dimer: {
        name: { fa: "D-Dimer", en: "D-Dimer" },
        aliases: ["d-dimer", "ddimer", "دی دایمر"],
        unit: "µg/mL FEU",
        range: { all: { min: 0, max: 0.5 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است و احتمال لخته فعال کم است.", en: "A low value is normal and an active clot is unlikely." },
            normal: { fa: "D-Dimer در محدوده طبیعی است.", en: "D-Dimer is within the normal range." },
            high: { fa: "افزایش D-Dimer می‌تواند نشانه لخته خون (DVT/آمبولی ریه) باشد، هرچند اختصاصیت پایینی دارد.", en: "Elevated D-Dimer can indicate a blood clot (DVT/pulmonary embolism), though it has low specificity." }
        }
    },
    antithrombin_3: {
        name: { fa: "آنتی‌ترومبین III", en: "Antithrombin III" },
        aliases: ["antithrombin iii", "antithrombin 3", "at3", "آنتی ترومبین"],
        unit: "%",
        range: { all: { min: 80, max: 130 } },
        interpretation: {
            low: { fa: "آنتی‌ترومبین III پایین می‌تواند خطر لخته شدن خون را افزایش دهد.", en: "Low antithrombin III can increase clotting risk." },
            normal: { fa: "سطح آنتی‌ترومبین III طبیعی است.", en: "Antithrombin III level is normal." },
            high: { fa: "افزایش آن معمولاً اهمیت بالینی ندارد.", en: "An elevated level is usually not clinically significant." }
        }
    },
    protein_c: {
        name: { fa: "پروتئین C", en: "Protein C" },
        aliases: ["protein c", "پروتئین سی"],
        unit: "%",
        range: { all: { min: 70, max: 140 } },
        interpretation: {
            low: { fa: "پروتئین C پایین خطر لخته شدن خون را افزایش می‌دهد.", en: "Low protein C increases clotting risk." },
            normal: { fa: "سطح پروتئین C طبیعی است.", en: "Protein C level is normal." },
            high: { fa: "افزایش آن معمولاً اهمیت بالینی ندارد.", en: "An elevated level is usually not clinically significant." }
        }
    },
    protein_s: {
        name: { fa: "پروتئین S", en: "Protein S" },
        aliases: ["protein s", "پروتئین اس"],
        unit: "%",
        range: { all: { min: 65, max: 140 } },
        interpretation: {
            low: { fa: "پروتئین S پایین خطر لخته شدن خون را افزایش می‌دهد.", en: "Low protein S increases clotting risk." },
            normal: { fa: "سطح پروتئین S طبیعی است.", en: "Protein S level is normal." },
            high: { fa: "افزایش آن معمولاً اهمیت بالینی ندارد.", en: "An elevated level is usually not clinically significant." }
        }
    },

    // ============ Other Hematology ============
    g6pd: {
        name: { fa: "آنزیم G6PD", en: "G6PD Enzyme" },
        aliases: ["g6pd", "g6pd enzyme"],
        unit: "U/g Hb",
        range: { all: { min: 4.6, max: 13.5 } },
        interpretation: {
            low: { fa: "کمبود G6PD می‌تواند باعث همولیز گلبول قرمز پس از مصرف برخی داروها یا غذاها (مثل باقلا) شود.", en: "G6PD deficiency can cause red blood cell hemolysis after certain medications or foods (such as fava beans)." },
            normal: { fa: "سطح آنزیم G6PD طبیعی است.", en: "G6PD enzyme level is normal." },
            high: { fa: "افزایش آن معمولاً اهمیت بالینی ندارد.", en: "An elevated level is usually not clinically significant." }
        }
    },

    // ============ Toxicology ============
    lactic_acid: {
        name: { fa: "اسید لاکتیک", en: "Lactic Acid" },
        aliases: ["lactic acid", "lactate", "اسید لاکتیک"],
        unit: "mmol/L",
        range: { all: { min: 0.5, max: 2.2 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "سطح اسید لاکتیک طبیعی است.", en: "Lactic acid level is normal." },
            high: { fa: "افزایش اسید لاکتیک می‌تواند نشانه کمبود اکسیژن‌رسانی به بافت‌ها (شوک، سپسیس) باشد.", en: "Elevated lactic acid can indicate inadequate tissue oxygenation (shock, sepsis)." }
        }
    },
    ammonia: {
        name: { fa: "آمونیاک", en: "Ammonia" },
        aliases: ["ammonia", "nh3", "آمونیاک"],
        unit: "µmol/L",
        range: { all: { min: 15, max: 45 } },
        interpretation: {
            low: { fa: "مقدار پایین معمولاً نگران‌کننده نیست.", en: "A low value is usually not concerning." },
            normal: { fa: "سطح آمونیاک خون طبیعی است.", en: "Blood ammonia level is normal." },
            high: { fa: "افزایش آمونیاک می‌تواند نشانه نارسایی کبدی و خطر انسفالوپاتی کبدی باشد.", en: "Elevated ammonia can indicate liver failure and risk of hepatic encephalopathy." }
        }
    },
    blood_alcohol: {
        name: { fa: "الکل خون", en: "Blood Alcohol" },
        aliases: ["blood alcohol", "الکل خون", "bac"],
        unit: "mg/dL",
        range: { all: { min: 0, max: 0 } },
        interpretation: {
            low: { fa: "الکلی در خون شناسایی نشد.", en: "No alcohol detected in the blood." },
            normal: { fa: "الکلی در خون شناسایی نشد.", en: "No alcohol detected in the blood." },
            high: { fa: "وجود الکل در خون تایید شد؛ سطوح بالا (معمولاً بالای ۸۰) از نظر قانونی و بالینی قابل توجه است.", en: "Alcohol was detected in the blood; higher levels (typically above 80) are legally and clinically significant." }
        }
    },
    cotinine: {
        name: { fa: "کوتینین (نیکوتین)", en: "Cotinine (Nicotine)" },
        aliases: ["cotinine", "کوتینین"],
        unit: "ng/mL",
        range: { all: { min: 0, max: 10 } },
        interpretation: {
            low: { fa: "مقدار پایین نشانه عدم مواجهه اخیر با نیکوتین است.", en: "A low value indicates no recent nicotine exposure." },
            normal: { fa: "کوتینین در محدوده غیرسیگاری‌ها است.", en: "Cotinine is within the non-smoker range." },
            high: { fa: "افزایش کوتینین نشانه مصرف اخیر دخانیات یا مواجهه با دود دست دوم است.", en: "Elevated cotinine indicates recent tobacco use or secondhand smoke exposure." }
        }
    },
    lead: {
        name: { fa: "سرب خون", en: "Blood Lead" },
        aliases: ["lead", "سرب"],
        unit: "µg/dL",
        range: { all: { min: 0, max: 5 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "سطح سرب خون طبیعی است.", en: "Blood lead level is normal." },
            high: { fa: "افزایش سرب خون می‌تواند نشانه مسمومیت با سرب باشد و در کودکان به‌ویژه خطرناک است.", en: "Elevated blood lead can indicate lead poisoning and is especially dangerous in children." }
        }
    },
    mercury: {
        name: { fa: "جیوه خون", en: "Blood Mercury" },
        aliases: ["mercury", "جیوه"],
        unit: "µg/L",
        range: { all: { min: 0, max: 10 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "سطح جیوه خون طبیعی است.", en: "Blood mercury level is normal." },
            high: { fa: "افزایش جیوه خون می‌تواند نشانه مسمومیت با جیوه باشد (مثلاً مصرف زیاد ماهی آلوده).", en: "Elevated blood mercury can indicate mercury poisoning (e.g., from high consumption of contaminated fish)." }
        }
    },
    arsenic: {
        name: { fa: "آرسنیک خون", en: "Blood Arsenic" },
        aliases: ["arsenic", "آرسنیک"],
        unit: "µg/L",
        range: { all: { min: 0, max: 35 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "سطح آرسنیک خون طبیعی است.", en: "Blood arsenic level is normal." },
            high: { fa: "افزایش آرسنیک خون می‌تواند نشانه مسمومیت با آرسنیک باشد.", en: "Elevated blood arsenic can indicate arsenic poisoning." }
        }
    },

    // ============ Semi-quantitative panel components ============
    semen_volume: {
        name: { fa: "حجم مایع منی", en: "Semen Volume" },
        aliases: ["semen volume", "حجم منی"],
        unit: "mL",
        range: { all: { min: 1.5, max: 6.0 } },
        interpretation: {
            low: { fa: "حجم کم مایع منی می‌تواند بر باروری اثر بگذارد.", en: "Low semen volume can affect fertility." },
            normal: { fa: "حجم مایع منی طبیعی است.", en: "Semen volume is normal." },
            high: { fa: "حجم بالا معمولاً نگران‌کننده نیست.", en: "A high volume is usually not concerning." }
        }
    },
    sperm_concentration: {
        name: { fa: "غلظت اسپرم", en: "Sperm Concentration" },
        aliases: ["sperm concentration", "sperm count", "غلظت اسپرم", "تعداد اسپرم"],
        unit: "million/mL",
        range: { all: { min: 15, max: 200 } },
        interpretation: {
            low: { fa: "غلظت پایین اسپرم (الیگواسپرمی) می‌تواند بر باروری اثر بگذارد.", en: "Low sperm concentration (oligospermia) can affect fertility." },
            normal: { fa: "غلظت اسپرم طبیعی است.", en: "Sperm concentration is normal." },
            high: { fa: "غلظت بالا معمولاً نگران‌کننده نیست.", en: "A high concentration is usually not concerning." }
        }
    },
    sperm_motility: {
        name: { fa: "تحرک اسپرم", en: "Sperm Motility" },
        aliases: ["sperm motility", "تحرک اسپرم"],
        unit: "%",
        range: { all: { min: 40, max: 100 } },
        interpretation: {
            low: { fa: "کاهش تحرک اسپرم (آستنواسپرمی) می‌تواند بر باروری اثر بگذارد.", en: "Reduced sperm motility (asthenospermia) can affect fertility." },
            normal: { fa: "تحرک اسپرم طبیعی است.", en: "Sperm motility is normal." },
            high: { fa: "تحرک بالا معمولاً نگران‌کننده نیست.", en: "High motility is usually not concerning." }
        }
    },
    sperm_morphology: {
        name: { fa: "مورفولوژی اسپرم (طبیعی %)", en: "Sperm Morphology (Normal %)" },
        aliases: ["sperm morphology", "مورفولوژی اسپرم"],
        unit: "%",
        range: { all: { min: 4, max: 100 } },
        interpretation: {
            low: { fa: "درصد پایین اسپرم با شکل طبیعی (تراتواسپرمی) می‌تواند بر باروری اثر بگذارد.", en: "A low percentage of normally-shaped sperm (teratospermia) can affect fertility." },
            normal: { fa: "مورفولوژی اسپرم طبیعی است.", en: "Sperm morphology is normal." },
            high: { fa: "مقدار بالا مطلوب است.", en: "A high value is favorable." }
        }
    },
    csf_protein: {
        name: { fa: "پروتئین مایع مغزی‌نخاعی (CSF)", en: "CSF Protein" },
        aliases: ["csf protein", "پروتئین مایع نخاعی"],
        unit: "mg/dL",
        range: { all: { min: 15, max: 45 } },
        interpretation: {
            low: { fa: "مقدار پایین معمولاً نگران‌کننده نیست.", en: "A low value is usually not concerning." },
            normal: { fa: "پروتئین CSF طبیعی است.", en: "CSF protein is normal." },
            high: { fa: "افزایش پروتئین CSF می‌تواند نشانه عفونت، التهاب یا سایر بیماری‌های سیستم عصبی مرکزی باشد.", en: "Elevated CSF protein can indicate infection, inflammation, or other central nervous system diseases." }
        }
    },
    csf_glucose: {
        name: { fa: "گلوکز مایع مغزی‌نخاعی (CSF)", en: "CSF Glucose" },
        aliases: ["csf glucose", "قند مایع نخاعی"],
        unit: "mg/dL",
        range: { all: { min: 40, max: 70 } },
        interpretation: {
            low: { fa: "کاهش گلوکز CSF می‌تواند نشانه عفونت باکتریایی یا قارچی سیستم عصبی مرکزی باشد.", en: "Low CSF glucose can indicate bacterial or fungal infection of the central nervous system." },
            normal: { fa: "گلوکز CSF طبیعی است.", en: "CSF glucose is normal." },
            high: { fa: "افزایش گلوکز CSF معمولاً منعکس‌کننده قند خون بالا است.", en: "Elevated CSF glucose usually reflects high blood glucose." }
        }
    },
    csf_wbc: {
        name: { fa: "گلبول سفید مایع مغزی‌نخاعی (CSF)", en: "CSF White Blood Cells" },
        aliases: ["csf wbc", "گلبول سفید مایع نخاعی"],
        unit: "cells/µL",
        range: { all: { min: 0, max: 5 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "تعداد گلبول سفید CSF طبیعی است.", en: "CSF white blood cell count is normal." },
            high: { fa: "افزایش گلبول سفید CSF نشانه احتمالی عفونت یا التهاب سیستم عصبی مرکزی (مننژیت) است.", en: "Elevated CSF white blood cells suggest possible central nervous system infection or inflammation (meningitis)." }
        }
    },
    hba2_percent: {
        name: { fa: "هموگلوبین A2 (الکتروفورز)", en: "Hemoglobin A2 (Electrophoresis)" },
        aliases: ["hba2", "hemoglobin a2"],
        unit: "%",
        range: { all: { min: 2.0, max: 3.5 } },
        interpretation: {
            low: { fa: "کاهش HbA2 نادر است و معمولاً اهمیت بالینی کمی دارد.", en: "Low HbA2 is rare and usually has limited clinical significance." },
            normal: { fa: "درصد HbA2 طبیعی است.", en: "HbA2 percentage is normal." },
            high: { fa: "افزایش HbA2 نشانه مشخصه‌ی بتا-تالاسمی مینور است.", en: "Elevated HbA2 is a characteristic finding of beta-thalassemia minor." }
        }
    },
    hbf_percent: {
        name: { fa: "هموگلوبین جنینی F (الکتروفورز)", en: "Fetal Hemoglobin F (Electrophoresis)" },
        aliases: ["hbf", "hemoglobin f", "fetal hemoglobin"],
        unit: "%",
        range: { all: { min: 0, max: 2 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "درصد هموگلوبین F طبیعی است.", en: "Hemoglobin F percentage is normal." },
            high: { fa: "افزایش HbF می‌تواند در تالاسمی، بیماری سلول داسی‌شکل یا سایر هموگلوبینوپاتی‌ها دیده شود.", en: "Elevated HbF can be seen in thalassemia, sickle cell disease, or other hemoglobinopathies." }
        }
    },

    // ============================================================
    // QUALITATIVE TESTS (positive/negative, reactive/non-reactive, etc.)
    // These have no numeric range. `type: 'qualitative'` tells the
    // interpretation engine in script.js to match text values instead
    // of numbers. `resultStatus` maps to a CSS class: normal | low | high
    // (used here loosely as normal=favorable, high=unfavorable/positive)
    // ============================================================

    hbsag: {
        type: "qualitative",
        name: { fa: "آنتی‌ژن سطحی هپاتیت B (HBsAg)", en: "Hepatitis B Surface Antigen (HBsAg)" },
        aliases: ["hbsag", "hepatitis b surface antigen"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت فعال هپاتیت B یافت نشد.", en: "No sign of active hepatitis B infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت هپاتیت B (حاد یا مزمن) است و نیاز به بررسی تخصصی دارد.", en: "Indicates hepatitis B infection (acute or chronic) and requires specialist follow-up." } }
    },
    anti_hbs: {
        type: "qualitative",
        name: { fa: "آنتی‌بادی سطحی هپاتیت B (Anti-HBs)", en: "Hepatitis B Surface Antibody (Anti-HBs)" },
        aliases: ["anti-hbs", "anti hbs"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "low", interpretation: { fa: "ایمنی در برابر هپاتیت B وجود ندارد؛ واکسیناسیون توصیه می‌شود.", en: "No immunity against hepatitis B; vaccination is recommended." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "normal", interpretation: { fa: "نشانه ایمنی در برابر هپاتیت B (به‌دلیل واکسیناسیون یا عفونت گذشته) است.", en: "Indicates immunity to hepatitis B (from vaccination or past infection)." } }
    },
    anti_hbc: {
        type: "qualitative",
        name: { fa: "آنتی‌بادی مرکزی هپاتیت B (Anti-HBc)", en: "Hepatitis B Core Antibody (Anti-HBc)" },
        aliases: ["anti-hbc", "anti hbc"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از مواجهه با هپاتیت B یافت نشد.", en: "No evidence of hepatitis B exposure found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه مواجهه فعلی یا گذشته با ویروس هپاتیت B است.", en: "Indicates current or past exposure to hepatitis B virus." } }
    },
    anti_hcv: {
        type: "qualitative",
        name: { fa: "آنتی‌بادی هپاتیت C (Anti-HCV)", en: "Hepatitis C Antibody (Anti-HCV)" },
        aliases: ["anti-hcv", "anti hcv", "hcv"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت هپاتیت C یافت نشد.", en: "No sign of hepatitis C infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه مواجهه با هپاتیت C است؛ برای تایید عفونت فعال به آزمایش تکمیلی (PCR) نیاز است.", en: "Indicates exposure to hepatitis C; confirmatory testing (PCR) is needed to verify active infection." } }
    },
    hav_igm: {
        type: "qualitative",
        name: { fa: "آنتی‌بادی IgM هپاتیت A", en: "Hepatitis A IgM Antibody" },
        aliases: ["hav igm", "hepatitis a igm", "hav"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت حاد هپاتیت A یافت نشد.", en: "No sign of acute hepatitis A infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت حاد یا اخیر هپاتیت A است.", en: "Indicates acute or recent hepatitis A infection." } }
    },
    hiv_ag_ab: {
        type: "qualitative",
        name: { fa: "آنتی‌ژن/آنتی‌بادی HIV", en: "HIV Ag/Ab" },
        aliases: ["hiv", "hiv ag/ab", "hiv ag ab"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت HIV یافت نشد.", en: "No sign of HIV infection found." } },
        positive: { label: { fa: "مثبت / واکنش‌دهنده", en: "Positive / Reactive" }, resultStatus: "high", interpretation: { fa: "نتیجه واکنش‌دهنده نیاز به آزمایش تاییدی فوری و مشاوره تخصصی دارد.", en: "A reactive result requires immediate confirmatory testing and specialist counseling." } }
    },
    vdrl_rpr: {
        type: "qualitative",
        name: { fa: "سیفلیس (VDRL/RPR)", en: "Syphilis (VDRL/RPR)" },
        aliases: ["vdrl", "rpr", "syphilis", "سیفلیس"],
        negative: { label: { fa: "منفی", en: "Non-Reactive" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از سیفلیس یافت نشد.", en: "No sign of syphilis found." } },
        positive: { label: { fa: "واکنش‌دهنده", en: "Reactive" }, resultStatus: "high", interpretation: { fa: "نتیجه واکنش‌دهنده نیاز به آزمایش تاییدی (FTA-ABS) دارد؛ ممکن است مثبت کاذب هم باشد.", en: "A reactive result requires confirmatory testing (FTA-ABS); false positives are possible." } }
    },
    fta_abs: {
        type: "qualitative",
        name: { fa: "تست تاییدی سیفلیس (FTA-ABS)", en: "Syphilis Confirmatory Test (FTA-ABS)" },
        aliases: ["fta-abs", "fta abs"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت سیفلیس یافت نشد.", en: "No sign of syphilis infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "تایید عفونت سیفلیس (فعلی یا گذشته)؛ نیاز به درمان تخصصی دارد.", en: "Confirms syphilis infection (current or past); needs specialist treatment." } }
    },
    brucella_wright: {
        type: "qualitative",
        name: { fa: "تب مالت (رایت)", en: "Brucellosis (Wright Test)" },
        aliases: ["brucella", "wright test", "رایت", "تب مالت"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از تب مالت یافت نشد.", en: "No sign of brucellosis found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه احتمالی عفونت تب مالت (بروسلوز) است.", en: "Suggests possible brucellosis infection." } }
    },
    widal: {
        type: "qualitative",
        name: { fa: "حصبه (تست ویدال)", en: "Typhoid (Widal Test)" },
        aliases: ["widal", "typhoid", "ویدال", "حصبه"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از تب حصبه یافت نشد.", en: "No sign of typhoid fever found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه احتمالی عفونت حصبه است؛ این تست اختصاصیت محدودی دارد.", en: "Suggests possible typhoid infection; this test has limited specificity." } }
    },
    ppd_tb: {
        type: "qualitative",
        name: { fa: "تست پوستی سل (PPD)", en: "TB Skin Test (PPD)" },
        aliases: ["ppd", "tb skin test", "پی پی دی"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از مواجهه با سل یافت نشد.", en: "No sign of TB exposure found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه مواجهه با باکتری سل است (لزوماً بیماری فعال نیست) و نیاز به بررسی بیشتر دارد.", en: "Indicates exposure to TB bacteria (not necessarily active disease) and needs further evaluation." } }
    },
    quantiferon: {
        type: "qualitative",
        name: { fa: "کوانتی‌فرون (سل)", en: "QuantiFERON (TB)" },
        aliases: ["quantiferon", "کوانتی فرون"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت سل یافت نشد.", en: "No sign of TB infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه مواجهه با باکتری سل است و نیاز به بررسی بیشتر دارد.", en: "Indicates exposure to TB bacteria and needs further evaluation." } }
    },
    malaria_smear: {
        type: "qualitative",
        name: { fa: "اسمیر خون مالاریا", en: "Malaria Blood Smear" },
        aliases: ["malaria", "malaria smear", "مالاریا"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "انگل مالاریا در نمونه خون مشاهده نشد.", en: "No malaria parasite seen in the blood sample." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "انگل مالاریا مشاهده شد و نیاز به درمان فوری دارد.", en: "Malaria parasite detected; requires urgent treatment." } }
    },
    dengue: {
        type: "qualitative",
        name: { fa: "تب دنگی", en: "Dengue Fever" },
        aliases: ["dengue", "دنگی"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت دنگی یافت نشد.", en: "No sign of dengue infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه احتمالی عفونت دنگی است.", en: "Suggests possible dengue infection." } }
    },
    toxoplasma_igm: {
        type: "qualitative",
        name: { fa: "توکسوپلاسموز IgM", en: "Toxoplasma IgM" },
        aliases: ["toxoplasma igm", "toxo igm"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت اخیر توکسوپلاسما یافت نشد.", en: "No sign of recent toxoplasma infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت اخیر توکسوپلاسما است؛ در بارداری اهمیت ویژه دارد.", en: "Indicates recent toxoplasma infection; especially significant during pregnancy." } }
    },
    toxoplasma_igg: {
        type: "qualitative",
        name: { fa: "توکسوپلاسموز IgG", en: "Toxoplasma IgG" },
        aliases: ["toxoplasma igg", "toxo igg"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "low", interpretation: { fa: "ایمنی قبلی در برابر توکسوپلاسما وجود ندارد؛ رعایت نکات پیشگیری توصیه می‌شود.", en: "No prior immunity to toxoplasma; preventive precautions are recommended." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "normal", interpretation: { fa: "نشانه عفونت گذشته و ایمنی نسبت به توکسوپلاسما است.", en: "Indicates past infection and immunity to toxoplasma." } }
    },
    rubella_igm: {
        type: "qualitative",
        name: { fa: "سرخجه IgM", en: "Rubella IgM" },
        aliases: ["rubella igm", "سرخجه igm"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت اخیر سرخجه یافت نشد.", en: "No sign of recent rubella infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت اخیر سرخجه است؛ در بارداری اهمیت ویژه دارد.", en: "Indicates recent rubella infection; especially significant during pregnancy." } }
    },
    rubella_igg: {
        type: "qualitative",
        name: { fa: "سرخجه IgG", en: "Rubella IgG" },
        aliases: ["rubella igg", "سرخجه igg"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "low", interpretation: { fa: "ایمنی در برابر سرخجه وجود ندارد؛ واکسیناسیون قبل از بارداری توصیه می‌شود.", en: "No immunity to rubella; vaccination before pregnancy is recommended." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "normal", interpretation: { fa: "نشانه ایمنی در برابر سرخجه است.", en: "Indicates immunity to rubella." } }
    },
    measles: {
        type: "qualitative",
        name: { fa: "سرخک", en: "Measles" },
        aliases: ["measles", "سرخک"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "low", interpretation: { fa: "ایمنی در برابر سرخک وجود ندارد.", en: "No immunity to measles." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "normal", interpretation: { fa: "نشانه عفونت اخیر یا ایمنی نسبت به سرخک است (بسته به نوع آنتی‌بادی).", en: "Indicates recent infection or immunity to measles (depending on antibody type)." } }
    },
    mumps: {
        type: "qualitative",
        name: { fa: "اوریون", en: "Mumps" },
        aliases: ["mumps", "اوریون"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "low", interpretation: { fa: "ایمنی در برابر اوریون وجود ندارد.", en: "No immunity to mumps." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "normal", interpretation: { fa: "نشانه عفونت اخیر یا ایمنی نسبت به اوریون است (بسته به نوع آنتی‌بادی).", en: "Indicates recent infection or immunity to mumps (depending on antibody type)." } }
    },
    vzv: {
        type: "qualitative",
        name: { fa: "آبله مرغان (VZV)", en: "Chickenpox (VZV)" },
        aliases: ["vzv", "chickenpox", "آبله مرغان"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "low", interpretation: { fa: "ایمنی در برابر آبله مرغان وجود ندارد.", en: "No immunity to chickenpox." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "normal", interpretation: { fa: "نشانه عفونت گذشته یا ایمنی نسبت به آبله مرغان است.", en: "Indicates past infection or immunity to chickenpox." } }
    },
    hsv: {
        type: "qualitative",
        name: { fa: "هرپس سیمپلکس (HSV)", en: "Herpes Simplex (HSV)" },
        aliases: ["hsv", "herpes", "هرپس"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت هرپس یافت نشد.", en: "No sign of herpes infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه مواجهه یا عفونت با ویروس هرپس سیمپلکس است.", en: "Indicates exposure to or infection with herpes simplex virus." } }
    },
    cmv: {
        type: "qualitative",
        name: { fa: "سیتومگالوویروس (CMV)", en: "Cytomegalovirus (CMV)" },
        aliases: ["cmv", "cytomegalovirus"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت CMV یافت نشد.", en: "No sign of CMV infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه مواجهه یا عفونت با سیتومگالوویروس است؛ در بارداری اهمیت ویژه دارد.", en: "Indicates exposure to or infection with cytomegalovirus; especially significant during pregnancy." } }
    },
    ebv: {
        type: "qualitative",
        name: { fa: "اپشتین بار ویروس (EBV)", en: "Epstein-Barr Virus (EBV)" },
        aliases: ["ebv", "epstein-barr", "اپشتین بار"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت EBV (مونونوکلئوز) یافت نشد.", en: "No sign of EBV (mononucleosis) infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه مواجهه یا عفونت با ویروس اپشتین‌بار است.", en: "Indicates exposure to or infection with Epstein-Barr virus." } }
    },
    parvovirus_b19: {
        type: "qualitative",
        name: { fa: "پاروویروس B19", en: "Parvovirus B19" },
        aliases: ["parvovirus b19", "parvovirus", "پاروویروس"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت پاروویروس B19 یافت نشد.", en: "No sign of parvovirus B19 infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه مواجهه یا عفونت با پاروویروس B19 است؛ در بارداری اهمیت ویژه دارد.", en: "Indicates exposure to or infection with parvovirus B19; especially significant during pregnancy." } }
    },
    covid_pcr: {
        type: "qualitative",
        name: { fa: "کرونا - PCR", en: "COVID-19 PCR" },
        aliases: ["covid pcr", "covid-19 pcr", "کرونا پی سی آر"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت فعال کووید-۱۹ یافت نشد.", en: "No sign of active COVID-19 infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت فعال کووید-۱۹ است.", en: "Indicates active COVID-19 infection." } }
    },
    covid_antigen: {
        type: "qualitative",
        name: { fa: "کرونا - آنتی‌ژن", en: "COVID-19 Antigen" },
        aliases: ["covid antigen", "covid-19 antigen", "کرونا آنتی ژن"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت فعال کووید-۱۹ یافت نشد.", en: "No sign of active COVID-19 infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه احتمالی عفونت فعال کووید-۱۹ است.", en: "Suggests possible active COVID-19 infection." } }
    },
    covid_antibody: {
        type: "qualitative",
        name: { fa: "کرونا - آنتی‌بادی", en: "COVID-19 Antibody" },
        aliases: ["covid antibody", "covid-19 antibody", "کرونا آنتی بادی"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "low", interpretation: { fa: "نشانه‌ای از عفونت یا واکسیناسیون گذشته کووید-۱۹ یافت نشد.", en: "No sign of past COVID-19 infection or vaccination response found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "normal", interpretation: { fa: "نشانه عفونت گذشته یا پاسخ ایمنی به واکسیناسیون کووید-۱۹ است.", en: "Indicates past infection or immune response from COVID-19 vaccination." } }
    },
    influenza: {
        type: "qualitative",
        name: { fa: "آنفولانزا", en: "Influenza" },
        aliases: ["influenza", "flu", "آنفولانزا"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت آنفولانزا یافت نشد.", en: "No sign of influenza infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت آنفولانزا است.", en: "Indicates influenza infection." } }
    },
    rsv: {
        type: "qualitative",
        name: { fa: "ویروس RSV", en: "RSV" },
        aliases: ["rsv"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت RSV یافت نشد.", en: "No sign of RSV infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت RSV است؛ در نوزادان و سالمندان اهمیت بیشتری دارد.", en: "Indicates RSV infection; more significant in infants and the elderly." } }
    },
    mycoplasma: {
        type: "qualitative",
        name: { fa: "مایکوپلاسما", en: "Mycoplasma" },
        aliases: ["mycoplasma", "مایکوپلاسما"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت مایکوپلاسما یافت نشد.", en: "No sign of mycoplasma infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت مایکوپلاسما است (اغلب مرتبط با عفونت تنفسی یا دستگاه تناسلی).", en: "Indicates mycoplasma infection (often related to respiratory or genital infection)." } }
    },
    chlamydia: {
        type: "qualitative",
        name: { fa: "کلامیدیا", en: "Chlamydia" },
        aliases: ["chlamydia", "کلامیدیا"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت کلامیدیا یافت نشد.", en: "No sign of chlamydia infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت کلامیدیا است و نیاز به درمان و بررسی شریک جنسی دارد.", en: "Indicates chlamydia infection and requires treatment and partner evaluation." } }
    },
    gonorrhea: {
        type: "qualitative",
        name: { fa: "سوزاک (گنوره)", en: "Gonorrhea" },
        aliases: ["gonorrhea", "gonorrhoea", "سوزاک", "گنوره"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت سوزاک یافت نشد.", en: "No sign of gonorrhea infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت سوزاک است و نیاز به درمان و بررسی شریک جنسی دارد.", en: "Indicates gonorrhea infection and requires treatment and partner evaluation." } }
    },
    trichomonas: {
        type: "qualitative",
        name: { fa: "تریکوموناس", en: "Trichomonas" },
        aliases: ["trichomonas", "تریکوموناس"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت تریکوموناس یافت نشد.", en: "No sign of trichomonas infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت انگلی تریکوموناس است.", en: "Indicates trichomonas parasitic infection." } }
    },
    strep_rapid: {
        type: "qualitative",
        name: { fa: "تست سریع استرپتوکوک گلو", en: "Rapid Strep Test" },
        aliases: ["strep rapid", "rapid strep", "استرپ"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت استرپتوکوک گلو یافت نشد.", en: "No sign of streptococcal throat infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت باکتریایی استرپتوکوک گلو است و معمولاً نیاز به آنتی‌بیوتیک دارد.", en: "Indicates streptococcal throat infection and usually requires antibiotics." } }
    },
    diphtheria_pertussis: {
        type: "qualitative",
        name: { fa: "دیفتری و سیاه‌سرفه", en: "Diphtheria & Pertussis" },
        aliases: ["diphtheria", "pertussis", "دیفتری", "سیاه سرفه"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت دیفتری یا سیاه‌سرفه یافت نشد.", en: "No sign of diphtheria or pertussis infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت دیفتری یا سیاه‌سرفه است و نیاز به درمان فوری دارد.", en: "Indicates diphtheria or pertussis infection and requires urgent treatment." } }
    },
    coombs_direct: {
        type: "qualitative",
        name: { fa: "کومبس مستقیم", en: "Direct Coombs Test" },
        aliases: ["coombs direct", "direct coombs", "کومبس مستقیم"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از تخریب ایمنی گلبول قرمز یافت نشد.", en: "No sign of immune-mediated red blood cell destruction found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه احتمالی کم‌خونی همولیتیک ایمنی یا واکنش انتقال خون است.", en: "Suggests possible immune hemolytic anemia or transfusion reaction." } }
    },
    coombs_indirect: {
        type: "qualitative",
        name: { fa: "کومبس غیرمستقیم", en: "Indirect Coombs Test" },
        aliases: ["coombs indirect", "indirect coombs", "کومبس غیر مستقیم"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "آنتی‌بادی علیه گلبول قرمز در پلاسما یافت نشد.", en: "No antibodies against red blood cells found in plasma." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه وجود آنتی‌بادی علیه گلبول قرمز است؛ در بارداری و انتقال خون اهمیت دارد.", en: "Indicates the presence of antibodies against red blood cells; important in pregnancy and blood transfusion." } }
    },
    bence_jones: {
        type: "qualitative",
        name: { fa: "پروتئین بنس جونز (ادرار)", en: "Bence Jones Protein (Urine)" },
        aliases: ["bence jones", "بنس جونز"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از پروتئین بنس جونز یافت نشد.", en: "No Bence Jones protein found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه احتمالی مولتیپل میلوما یا سایر اختلالات پلاسماسل است و نیاز به بررسی تخصصی دارد.", en: "Suggests possible multiple myeloma or other plasma cell disorders and requires specialist evaluation." } }
    },
    h_pylori_stool_ag: {
        type: "qualitative",
        name: { fa: "هلیکوباکتر پیلوری - آنتی‌ژن مدفوع", en: "H. Pylori Stool Antigen" },
        aliases: ["h pylori stool", "h. pylori stool antigen", "هلیکوباکتر مدفوع"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت فعال هلیکوباکتر پیلوری یافت نشد.", en: "No sign of active H. pylori infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت فعال هلیکوباکتر پیلوری است.", en: "Indicates active H. pylori infection." } }
    },
    h_pylori_urea_breath: {
        type: "qualitative",
        name: { fa: "هلیکوباکتر پیلوری - تست تنفسی اوره", en: "H. Pylori Urea Breath Test" },
        aliases: ["h pylori breath", "urea breath test", "تست تنفسی اوره"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت فعال هلیکوباکتر پیلوری یافت نشد.", en: "No sign of active H. pylori infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت فعال هلیکوباکتر پیلوری است.", en: "Indicates active H. pylori infection." } }
    },
    h_pylori_igg: {
        type: "qualitative",
        name: { fa: "هلیکوباکتر پیلوری - آنتی‌بادی خون", en: "H. Pylori IgG Antibody" },
        aliases: ["h pylori igg", "h. pylori antibody", "هلیکوباکتر آنتی بادی"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از مواجهه با هلیکوباکتر پیلوری یافت نشد.", en: "No sign of H. pylori exposure found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه مواجهه با هلیکوباکتر پیلوری است (ممکن است عفونت گذشته یا فعال باشد؛ برای تمایز از تست آنتی‌ژن/تنفسی استفاده کنید).", en: "Indicates H. pylori exposure (could be past or active infection; use antigen/breath test to distinguish)." } }
    },
    lactose_breath_test: {
        type: "qualitative",
        name: { fa: "تست تنفسی لاکتوز", en: "Lactose Breath Test" },
        aliases: ["lactose breath test", "تست تنفسی لاکتوز"],
        negative: { label: { fa: "طبیعی", en: "Normal" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عدم تحمل لاکتوز یافت نشد.", en: "No sign of lactose intolerance found." } },
        positive: { label: { fa: "غیرطبیعی", en: "Abnormal" }, resultStatus: "high", interpretation: { fa: "نشانه عدم تحمل لاکتوز است.", en: "Indicates lactose intolerance." } }
    },
    urine_culture: {
        type: "qualitative",
        name: { fa: "کشت ادرار", en: "Urine Culture" },
        aliases: ["urine culture", "کشت ادرار"],
        negative: { label: { fa: "بدون رشد باکتری", en: "No Growth" }, resultStatus: "normal", interpretation: { fa: "باکتری قابل توجهی در کشت ادرار رشد نکرد.", en: "No significant bacterial growth in urine culture." } },
        positive: { label: { fa: "رشد باکتری", en: "Positive Growth" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت باکتریایی ادراری است؛ نتیجه آنتی‌بیوگرام برای انتخاب آنتی‌بیوتیک مناسب لازم است.", en: "Indicates a urinary bacterial infection; antibiogram results are needed to select the appropriate antibiotic." } }
    },
    blood_culture: {
        type: "qualitative",
        name: { fa: "کشت خون", en: "Blood Culture" },
        aliases: ["blood culture", "کشت خون"],
        negative: { label: { fa: "بدون رشد باکتری", en: "No Growth" }, resultStatus: "normal", interpretation: { fa: "باکتری یا قارچی در کشت خون رشد نکرد.", en: "No bacterial or fungal growth in blood culture." } },
        positive: { label: { fa: "رشد باکتری/قارچ", en: "Positive Growth" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت خونی (باکتریمی/سپسیس) است و نیاز به درمان فوری دارد.", en: "Indicates bloodstream infection (bacteremia/sepsis) and requires urgent treatment." } }
    },
    stool_culture: {
        type: "qualitative",
        name: { fa: "کشت مدفوع", en: "Stool Culture" },
        aliases: ["stool culture", "کشت مدفوع"],
        negative: { label: { fa: "بدون رشد پاتوژن", en: "No Growth" }, resultStatus: "normal", interpretation: { fa: "باکتری بیماری‌زای روده‌ای در کشت مدفوع رشد نکرد.", en: "No pathogenic intestinal bacteria grew in stool culture." } },
        positive: { label: { fa: "رشد پاتوژن", en: "Positive Growth" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت باکتریایی گوارشی است.", en: "Indicates a bacterial gastrointestinal infection." } }
    },
    rotavirus_adenovirus_stool: {
        type: "qualitative",
        name: { fa: "روتاویروس و آدنوویروس مدفوع", en: "Stool Rotavirus/Adenovirus" },
        aliases: ["rotavirus", "adenovirus stool", "روتاویروس", "آدنوویروس مدفوع"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت ویروسی روتا/آدنو در مدفوع یافت نشد.", en: "No sign of rotavirus/adenovirus infection found in stool." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت ویروسی گوارشی (روتاویروس یا آدنوویروس) است، شایع در اسهال کودکان.", en: "Indicates a viral gastrointestinal infection (rotavirus or adenovirus), common in childhood diarrhea." } }
    },
    fobt: {
        type: "qualitative",
        name: { fa: "خون مخفی در مدفوع (FOBT)", en: "Fecal Occult Blood Test (FOBT)" },
        aliases: ["fobt", "fecal occult blood", "خون مخفی مدفوع"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "خون مخفی در مدفوع یافت نشد.", en: "No occult blood found in stool." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه خونریزی گوارشی است و نیاز به بررسی بیشتر (مانند کولونوسکوپی) دارد.", en: "Indicates gastrointestinal bleeding and requires further evaluation (such as colonoscopy)." } }
    },
    pap_smear: {
        type: "qualitative",
        name: { fa: "پاپ اسمیر", en: "Pap Smear" },
        aliases: ["pap smear", "پاپ اسمیر"],
        negative: { label: { fa: "طبیعی", en: "Normal" }, resultStatus: "normal", interpretation: { fa: "سلول‌های غیرطبیعی یا پیش‌سرطانی مشاهده نشد.", en: "No abnormal or precancerous cells observed." } },
        positive: { label: { fa: "غیرطبیعی", en: "Abnormal" }, resultStatus: "high", interpretation: { fa: "سلول‌های غیرطبیعی مشاهده شد و نیاز به پیگیری تخصصی (مانند کولپوسکوپی) دارد.", en: "Abnormal cells observed and requires specialist follow-up (such as colposcopy)." } }
    },
    hpv: {
        type: "qualitative",
        name: { fa: "ویروس پاپیلومای انسانی (HPV)", en: "Human Papillomavirus (HPV)" },
        aliases: ["hpv", "human papillomavirus"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از عفونت HPV یافت نشد.", en: "No sign of HPV infection found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت HPV است؛ برخی انواع پرخطر با پیگیری منظم پاپ‌اسمیر نیاز دارند.", en: "Indicates HPV infection; some high-risk types require regular Pap smear follow-up." } }
    },
    karyotype: {
        type: "qualitative",
        name: { fa: "کاریوتایپ (ژنتیک)", en: "Karyotype (Genetics)" },
        aliases: ["karyotype", "کاریوتایپ"],
        negative: { label: { fa: "طبیعی", en: "Normal" }, resultStatus: "normal", interpretation: { fa: "الگوی کروموزومی طبیعی است.", en: "Chromosome pattern is normal." } },
        positive: { label: { fa: "غیرطبیعی", en: "Abnormal" }, resultStatus: "high", interpretation: { fa: "ناهنجاری کروموزومی مشاهده شد و نیاز به مشاوره ژنتیک دارد.", en: "A chromosomal abnormality was observed and requires genetic counseling." } }
    },
    nipt: {
        type: "qualitative",
        name: { fa: "غربالگری NIPT جنین", en: "NIPT Fetal Screening" },
        aliases: ["nipt"],
        negative: { label: { fa: "کم‌خطر", en: "Low Risk" }, resultStatus: "normal", interpretation: { fa: "خطر پایین برای ناهنجاری‌های کروموزومی رایج جنین.", en: "Low risk for common fetal chromosomal abnormalities." } },
        positive: { label: { fa: "پرخطر", en: "High Risk" }, resultStatus: "high", interpretation: { fa: "خطر بالای ناهنجاری کروموزومی؛ نیاز به آزمایش‌های تاییدی تشخیصی (مثل آمنیوسنتز) و مشاوره ژنتیک دارد.", en: "High risk of chromosomal abnormality; requires confirmatory diagnostic testing (such as amniocentesis) and genetic counseling." } }
    },
    brca: {
        type: "qualitative",
        name: { fa: "جهش ژن BRCA", en: "BRCA Gene Mutation" },
        aliases: ["brca", "brca1", "brca2"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "جهش شناخته‌شده BRCA یافت نشد.", en: "No known BRCA mutation found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "جهش BRCA شناسایی شد؛ خطر سرطان پستان/تخمدان افزایش می‌یابد و نیاز به مشاوره ژنتیک دارد.", en: "A BRCA mutation was identified; breast/ovarian cancer risk is increased and genetic counseling is needed." } }
    },
    hla_typing: {
        type: "qualitative",
        name: { fa: "تایپینگ HLA", en: "HLA Typing" },
        aliases: ["hla typing", "hla", "تایپینگ اچ ال ای"],
        negative: { label: { fa: "عدم تطابق", en: "Mismatch" }, resultStatus: "low", interpretation: { fa: "عدم تطابق کامل HLA؛ برای پیوند عضو/مغز استخوان اهمیت دارد.", en: "Incomplete HLA match; important for organ/bone marrow transplant compatibility." } },
        positive: { label: { fa: "تطابق", en: "Match" }, resultStatus: "normal", interpretation: { fa: "تطابق HLA مناسب برای پیوند شناسایی شد.", en: "A suitable HLA match for transplant was identified." } }
    },
    newborn_screening: {
        type: "qualitative",
        name: { fa: "غربالگری متابولیک نوزادان (PKU و...)", en: "Newborn Metabolic Screening (PKU, etc.)" },
        aliases: ["newborn screening", "pku", "غربالگری نوزادان"],
        negative: { label: { fa: "طبیعی", en: "Normal" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از اختلالات متابولیک غربالگری‌شده یافت نشد.", en: "No sign of the screened metabolic disorders found." } },
        positive: { label: { fa: "غیرطبیعی", en: "Abnormal" }, resultStatus: "high", interpretation: { fa: "نتیجه غیرطبیعی است و نیاز به آزمایش تاییدی فوری دارد (تشخیص و درمان زودهنگام حیاتی است).", en: "The result is abnormal and requires immediate confirmatory testing (early diagnosis and treatment is critical)." } }
    },

    // --- Drug / Substance Screening ---
    drug_morphine: {
        type: "qualitative",
        name: { fa: "مورفین (تست مواد مخدر)", en: "Morphine (Drug Screen)" },
        aliases: ["morphine", "مورفین"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "مورفین/مواد افیونی در نمونه شناسایی نشد.", en: "Morphine/opiates not detected in the sample." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "مورفین/مواد افیونی در نمونه شناسایی شد.", en: "Morphine/opiates detected in the sample." } }
    },
    drug_methadone: {
        type: "qualitative",
        name: { fa: "متادون (تست مواد مخدر)", en: "Methadone (Drug Screen)" },
        aliases: ["methadone", "متادون"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "متادون در نمونه شناسایی نشد.", en: "Methadone not detected in the sample." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "متادون در نمونه شناسایی شد.", en: "Methadone detected in the sample." } }
    },
    drug_cocaine: {
        type: "qualitative",
        name: { fa: "کوکائین (تست مواد مخدر)", en: "Cocaine (Drug Screen)" },
        aliases: ["cocaine", "کوکائین"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "کوکائین در نمونه شناسایی نشد.", en: "Cocaine not detected in the sample." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "کوکائین در نمونه شناسایی شد.", en: "Cocaine detected in the sample." } }
    },
    drug_amphetamine: {
        type: "qualitative",
        name: { fa: "آمفتامین (تست مواد مخدر)", en: "Amphetamine (Drug Screen)" },
        aliases: ["amphetamine", "آمفتامین"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "آمفتامین در نمونه شناسایی نشد.", en: "Amphetamine not detected in the sample." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "آمفتامین در نمونه شناسایی شد.", en: "Amphetamine detected in the sample." } }
    },
    drug_benzodiazepine: {
        type: "qualitative",
        name: { fa: "بنزودیازپین (تست مواد مخدر)", en: "Benzodiazepine (Drug Screen)" },
        aliases: ["benzodiazepine", "benzo", "بنزودیازپین"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "بنزودیازپین در نمونه شناسایی نشد.", en: "Benzodiazepine not detected in the sample." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "بنزودیازپین در نمونه شناسایی شد.", en: "Benzodiazepine detected in the sample." } }
    },
    drug_thc: {
        type: "qualitative",
        name: { fa: "THC / حشیش (تست مواد مخدر)", en: "THC / Cannabis (Drug Screen)" },
        aliases: ["thc", "cannabis", "marijuana", "حشیش"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "THC (ماده فعال حشیش) در نمونه شناسایی نشد.", en: "THC (active cannabis compound) not detected in the sample." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "THC در نمونه شناسایی شد.", en: "THC detected in the sample." } }
    },

    // --- Additional culture/sensitivity tests ---
    pseudomonas_culture: {
        type: "qualitative",
        name: { fa: "کشت اختصاصی سودوموناس", en: "Pseudomonas Culture" },
        aliases: ["pseudomonas", "سودوموناس"],
        negative: { label: { fa: "بدون رشد", en: "No Growth" }, resultStatus: "normal", interpretation: { fa: "باکتری سودوموناس در کشت رشد نکرد.", en: "No Pseudomonas growth in culture." } },
        positive: { label: { fa: "رشد مثبت", en: "Positive Growth" }, resultStatus: "high", interpretation: { fa: "نشانه عفونت با باکتری سودوموناس است؛ نیاز به آنتی‌بیوگرام برای انتخاب آنتی‌بیوتیک دارد.", en: "Indicates Pseudomonas infection; requires antibiogram to select the appropriate antibiotic." } }
    },
    antifungal_susceptibility: {
        type: "qualitative",
        name: { fa: "تست حساسیت ضدقارچی", en: "Antifungal Susceptibility Test" },
        aliases: ["antifungal susceptibility", "حساسیت ضد قارچی"],
        negative: { label: { fa: "حساس", en: "Susceptible" }, resultStatus: "normal", interpretation: { fa: "قارچ شناسایی‌شده به داروی ضدقارچی مورد آزمایش حساس است.", en: "The identified fungus is susceptible to the tested antifungal drug." } },
        positive: { label: { fa: "مقاوم", en: "Resistant" }, resultStatus: "high", interpretation: { fa: "قارچ شناسایی‌شده به داروی ضدقارچی مورد آزمایش مقاوم است؛ نیاز به تغییر درمان دارد.", en: "The identified fungus is resistant to the tested antifungal drug; treatment needs to be adjusted." } }
    },

    // ============================================================
    // BATCH: Previously-missed items + deep-search additions
    // ============================================================

    // --- Missed from original autoimmune list ---
    ana: {
        type: "qualitative",
        name: { fa: "آنتی‌بادی ضد هسته (ANA)", en: "Antinuclear Antibody (ANA)" },
        aliases: ["ana", "antinuclear antibody", "آنتی بادی ضد هسته"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از بیماری خودایمنی سیستمیک یافت نشد.", en: "No sign of systemic autoimmune disease found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "می‌تواند نشانه بیماری خودایمنی (مانند لوپوس) باشد، اما در برخی افراد سالم هم دیده می‌شود؛ نیاز به بررسی تخصصی همراه با علائم بالینی دارد.", en: "Can indicate autoimmune disease (such as lupus), but is also seen in some healthy individuals; needs specialist evaluation alongside clinical symptoms." } }
    },
    lupus_anticoagulant: {
        type: "qualitative",
        name: { fa: "آنتی‌کواگولان لوپوس", en: "Lupus Anticoagulant" },
        aliases: ["lupus anticoagulant", "la", "آنتی کواگولان لوپوس"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "نشانه‌ای از آنتی‌کواگولان لوپوس یافت نشد.", en: "No sign of lupus anticoagulant found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه احتمالی سندرم آنتی‌فسفولیپید و افزایش خطر لخته شدن خون است.", en: "Suggests possible antiphospholipid syndrome and increased clotting risk." } }
    },
    anti_beta2_glycoprotein: {
        name: { fa: "آنتی-بتا۲-گلیکوپروتئین I", en: "Anti-Beta2-Glycoprotein I" },
        aliases: ["anti-beta2-glycoprotein", "anti beta2 glycoprotein", "آنتی بتا۲ گلیکوپروتئین"],
        unit: "U/mL",
        range: { all: { min: 0, max: 20 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "آنتی-بتا۲-گلیکوپروتئین I در محدوده طبیعی است.", en: "Anti-beta2-glycoprotein I is within the normal range." },
            high: { fa: "افزایش آن می‌تواند با سندرم آنتی‌فسفولیپید و خطر لخته شدن خون مرتبط باشد.", en: "An elevated level can be related to antiphospholipid syndrome and increased clotting risk." }
        }
    },
    cryoglobulin: {
        type: "qualitative",
        name: { fa: "کرایوگلوبولین", en: "Cryoglobulin" },
        aliases: ["cryoglobulin", "کرایوگلوبولین"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "کرایوگلوبولین در نمونه شناسایی نشد.", en: "Cryoglobulin not detected in the sample." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "نشانه احتمالی کرایوگلوبولینمی است که می‌تواند با هپاتیت C، بیماری‌های خودایمنی یا اختلالات پلاسماسل مرتبط باشد.", en: "Suggests possible cryoglobulinemia, which can be related to hepatitis C, autoimmune diseases, or plasma cell disorders." }}
    },

    // --- Reproductive / additional endocrine hormones ---
    amh: {
        name: { fa: "هورمون ضد مولرین (AMH)", en: "Anti-Müllerian Hormone (AMH)" },
        aliases: ["amh", "anti-mullerian hormone", "آ ام اچ"],
        unit: "ng/mL",
        range: { all: { min: 1.0, max: 4.0 } },
        interpretation: {
            low: { fa: "AMH پایین نشانه کاهش ذخیره تخمدانی است (این مقدار طبیعتاً با افزایش سن کاهش می‌یابد).", en: "Low AMH indicates reduced ovarian reserve (this value naturally declines with age)." },
            normal: { fa: "ذخیره تخمدانی طبق AMH طبیعی است.", en: "Ovarian reserve based on AMH is normal." },
            high: { fa: "AMH بالا می‌تواند با سندرم تخمدان پلی‌کیستیک مرتبط باشد.", en: "High AMH can be related to polycystic ovary syndrome." }
        }
    },
    shbg: {
        name: { fa: "گلوبولین متصل‌شونده به هورمون جنسی (SHBG)", en: "Sex Hormone-Binding Globulin (SHBG)" },
        aliases: ["shbg", "sex hormone binding globulin", "اس اچ بی جی"],
        unit: "nmol/L",
        range: { male: { min: 10, max: 57 }, female: { min: 18, max: 114 } },
        interpretation: {
            low: { fa: "SHBG پایین می‌تواند با چاقی، مقاومت به انسولین یا کم‌کاری تیروئید مرتبط باشد و تستوسترون آزاد را بالا نشان می‌دهد.", en: "Low SHBG can be related to obesity, insulin resistance, or hypothyroidism, and raises apparent free testosterone." },
            normal: { fa: "سطح SHBG طبیعی است.", en: "SHBG level is normal." },
            high: { fa: "SHBG بالا می‌تواند با پرکاری تیروئید یا بارداری مرتبط باشد.", en: "High SHBG can be related to hyperthyroidism or pregnancy." }
        }
    },
    free_testosterone: {
        name: { fa: "تستوسترون آزاد", en: "Free Testosterone" },
        aliases: ["free testosterone", "تستوسترون آزاد"],
        unit: "pg/mL",
        range: { male: { min: 9.0, max: 30.0 }, female: { min: 0.3, max: 1.9 } },
        interpretation: {
            low: { fa: "تستوسترون آزاد پایین می‌تواند با هیپوگنادیسم مرتبط باشد، حتی اگر تستوسترون تام طبیعی باشد.", en: "Low free testosterone can be related to hypogonadism, even when total testosterone is normal." },
            normal: { fa: "سطح تستوسترون آزاد طبیعی است.", en: "Free testosterone level is normal." },
            high: { fa: "تستوسترون آزاد بالا می‌تواند با سندرم تخمدان پلی‌کیستیک (در زنان) یا تومورها مرتبط باشد.", en: "High free testosterone can be related to polycystic ovary syndrome (in women) or tumors." }
        }
    },
    dht: {
        name: { fa: "دی‌هیدروتستوسترون (DHT)", en: "Dihydrotestosterone (DHT)" },
        aliases: ["dht", "dihydrotestosterone"],
        unit: "ng/dL",
        range: { male: { min: 30, max: 85 }, female: { min: 4, max: 22 } },
        interpretation: {
            low: { fa: "DHT پایین می‌تواند با کمبود آنزیم ۵-آلفا-ردوکتاز مرتبط باشد.", en: "Low DHT can be related to 5-alpha-reductase enzyme deficiency." },
            normal: { fa: "سطح DHT طبیعی است.", en: "DHT level is normal." },
            high: { fa: "DHT بالا می‌تواند با ریزش مو با الگوی مردانه یا آکنه شدید مرتبط باشد.", en: "High DHT can be related to male-pattern hair loss or severe acne." }
        }
    },
    igf1: {
        name: { fa: "فاکتور رشد شبه‌انسولین (IGF-1)", en: "Insulin-like Growth Factor 1 (IGF-1)" },
        aliases: ["igf-1", "igf1", "insulin-like growth factor"],
        unit: "ng/mL",
        range: { all: { min: 100, max: 250 } },
        interpretation: {
            low: { fa: "IGF-1 پایین می‌تواند نشانه کمبود هورمون رشد باشد.", en: "Low IGF-1 can indicate growth hormone deficiency." },
            normal: { fa: "سطح IGF-1 طبیعی است (این بازه به‌شدت به سن وابسته است).", en: "IGF-1 level is normal (this range is strongly age-dependent)." },
            high: { fa: "IGF-1 بالا می‌تواند نشانه آکرومگالی یا افزایش هورمون رشد باشد.", en: "High IGF-1 can indicate acromegaly or excess growth hormone." }
        }
    },
    progesterone_17oh: {
        name: { fa: "۱۷-هیدروکسی‌پروژسترون", en: "17-Hydroxyprogesterone" },
        aliases: ["17-oh progesterone", "17-hydroxyprogesterone", "17ohp", "17 او اچ پروژسترون"],
        unit: "ng/mL",
        range: { all: { min: 0.2, max: 1.0 } },
        interpretation: {
            low: { fa: "مقدار پایین معمولاً نگران‌کننده نیست.", en: "A low value is usually not concerning." },
            normal: { fa: "سطح ۱۷-هیدروکسی‌پروژسترون طبیعی است.", en: "17-hydroxyprogesterone level is normal." },
            high: { fa: "افزایش آن می‌تواند نشانه هیپرپلازی مادرزادی آدرنال باشد.", en: "An elevated level can indicate congenital adrenal hyperplasia." }
        }
    },
    calcitonin: {
        name: { fa: "کلسی‌تونین", en: "Calcitonin" },
        aliases: ["calcitonin", "کلسی تونین"],
        unit: "pg/mL",
        range: { male: { min: 0, max: 8.4 }, female: { min: 0, max: 5.0 } },
        interpretation: {
            low: { fa: "مقدار پایین طبیعی است.", en: "A low value is normal." },
            normal: { fa: "سطح کلسی‌تونین طبیعی است.", en: "Calcitonin level is normal." },
            high: { fa: "افزایش کلسی‌تونین می‌تواند نشانه کارسینوم مدولاری تیروئید باشد.", en: "Elevated calcitonin can indicate medullary thyroid carcinoma." }
        }
    },
    inhibin_b: {
        name: { fa: "اینهیبین B", en: "Inhibin B" },
        aliases: ["inhibin b", "اینهیبین بی"],
        unit: "pg/mL",
        range: { male: { min: 25, max: 325 }, female: { min: 7, max: 150 } },
        interpretation: {
            low: { fa: "اینهیبین B پایین می‌تواند با کاهش ذخیره تخمدانی یا نارسایی بیضه مرتبط باشد.", en: "Low inhibin B can be related to reduced ovarian reserve or testicular failure." },
            normal: { fa: "سطح اینهیبین B طبیعی است.", en: "Inhibin B level is normal." },
            high: { fa: "افزایش آن نادر است و می‌تواند با برخی تومورهای تخمدان مرتبط باشد.", en: "An elevated level is rare and can be related to certain ovarian tumors." }
        }
    },

    // --- Vitamins & minerals (extended) ---
    vitamin_b1: {
        name: { fa: "ویتامین B1 (تیامین)", en: "Vitamin B1 (Thiamine)" },
        aliases: ["vitamin b1", "thiamine", "ویتامین ب1", "تیامین"],
        unit: "nmol/L",
        range: { all: { min: 66.5, max: 200 } },
        interpretation: {
            low: { fa: "کمبود ویتامین B1 می‌تواند باعث ضعف عصبی-عضلانی و در موارد شدید بری‌بری یا سندرم ورنیکه شود.", en: "Vitamin B1 deficiency can cause neuromuscular weakness and, in severe cases, beriberi or Wernicke's syndrome." },
            normal: { fa: "سطح ویتامین B1 کافی است.", en: "Vitamin B1 level is sufficient." },
            high: { fa: "افزایش آن معمولاً ناشی از مصرف مکمل است و نگران‌کننده نیست.", en: "An elevated level is usually from supplementation and is not concerning." }
        }
    },
    vitamin_b6: {
        name: { fa: "ویتامین B6", en: "Vitamin B6" },
        aliases: ["vitamin b6", "ویتامین ب6"],
        unit: "ng/mL",
        range: { all: { min: 5, max: 50 } },
        interpretation: {
            low: { fa: "کمبود ویتامین B6 می‌تواند باعث کم‌خونی و مشکلات عصبی شود.", en: "Vitamin B6 deficiency can cause anemia and neurological problems." },
            normal: { fa: "سطح ویتامین B6 کافی است.", en: "Vitamin B6 level is sufficient." },
            high: { fa: "مصرف بیش از حد ویتامین B6 در طولانی‌مدت می‌تواند باعث آسیب عصبی شود.", en: "Excessive long-term vitamin B6 intake can cause nerve damage." }
        }
    },
    vitamin_a: {
        name: { fa: "ویتامین A", en: "Vitamin A" },
        aliases: ["vitamin a", "ویتامین آ"],
        unit: "µg/dL",
        range: { all: { min: 20, max: 60 } },
        interpretation: {
            low: { fa: "کمبود ویتامین A می‌تواند باعث مشکلات بینایی (به‌ویژه شب‌کوری) شود.", en: "Vitamin A deficiency can cause vision problems (especially night blindness)." },
            normal: { fa: "سطح ویتامین A کافی است.", en: "Vitamin A level is sufficient." },
            high: { fa: "ویتامین A بالا (هیپرویتامینوز A) می‌تواند سمی باشد و باعث آسیب کبدی شود.", en: "High vitamin A (hypervitaminosis A) can be toxic and cause liver damage." }
        }
    },
    vitamin_e: {
        name: { fa: "ویتامین E", en: "Vitamin E" },
        aliases: ["vitamin e", "ویتامین ای"],
        unit: "mg/L",
        range: { all: { min: 5.5, max: 17 } },
        interpretation: {
            low: { fa: "کمبود ویتامین E می‌تواند باعث مشکلات عصبی-عضلانی شود.", en: "Vitamin E deficiency can cause neuromuscular problems." },
            normal: { fa: "سطح ویتامین E کافی است.", en: "Vitamin E level is sufficient." },
            high: { fa: "مصرف بیش از حد ویتامین E می‌تواند خطر خونریزی را افزایش دهد.", en: "Excessive vitamin E intake can increase bleeding risk." }
        }
    },
    vitamin_k: {
        name: { fa: "ویتامین K", en: "Vitamin K" },
        aliases: ["vitamin k", "ویتامین کا"],
        unit: "ng/mL",
        range: { all: { min: 0.2, max: 3.2 } },
        interpretation: {
            low: { fa: "کمبود ویتامین K می‌تواند خطر خونریزی را افزایش دهد (به‌دلیل نقش آن در انعقاد خون).", en: "Vitamin K deficiency can increase bleeding risk (due to its role in blood clotting)." },
            normal: { fa: "سطح ویتامین K کافی است.", en: "Vitamin K level is sufficient." },
            high: { fa: "افزایش آن معمولاً اهمیت بالینی ندارد.", en: "An elevated level is usually not clinically significant." }
        }
    },
    zinc: {
        name: { fa: "روی (Zinc)", en: "Zinc" },
        aliases: ["zinc", "روی"],
        unit: "µg/dL",
        range: { all: { min: 60, max: 130 } },
        interpretation: {
            low: { fa: "کمبود روی می‌تواند باعث ضعف سیستم ایمنی، ریزش مو و کندی بهبود زخم شود.", en: "Zinc deficiency can cause weakened immunity, hair loss, and slow wound healing." },
            normal: { fa: "سطح روی خون طبیعی است.", en: "Blood zinc level is normal." },
            high: { fa: "روی بالا معمولاً ناشی از مصرف بیش از حد مکمل است.", en: "High zinc is usually due to excessive supplementation." }
        }
    },
    copper: {
        name: { fa: "مس (Copper)", en: "Copper" },
        aliases: ["copper", "مس"],
        unit: "µg/dL",
        range: { male: { min: 70, max: 140 }, female: { min: 80, max: 155 } },
        interpretation: {
            low: { fa: "کمبود مس می‌تواند باعث کم‌خونی و مشکلات عصبی شود.", en: "Copper deficiency can cause anemia and neurological problems." },
            normal: { fa: "سطح مس خون طبیعی است.", en: "Blood copper level is normal." },
            high: { fa: "مس بالا می‌تواند نشانه بیماری ویلسون یا التهاب باشد.", en: "High copper can indicate Wilson's disease or inflammation." }
        }
    },
    selenium: {
        name: { fa: "سلنیوم", en: "Selenium" },
        aliases: ["selenium", "سلنیوم"],
        unit: "µg/L",
        range: { all: { min: 70, max: 150 } },
        interpretation: {
            low: { fa: "کمبود سلنیوم می‌تواند بر عملکرد تیروئید و سیستم ایمنی اثر بگذارد.", en: "Selenium deficiency can affect thyroid function and immune health." },
            normal: { fa: "سطح سلنیوم طبیعی است.", en: "Selenium level is normal." },
            high: { fa: "سلنیوم بالا می‌تواند سمی باشد (سلنیوزیس).", en: "High selenium can be toxic (selenosis)." }
        }
    },
    manganese: {
        name: { fa: "منگنز", en: "Manganese" },
        aliases: ["manganese", "منگنز"],
        unit: "µg/L",
        range: { all: { min: 0.4, max: 1.4 } },
        interpretation: {
            low: { fa: "کمبود منگنز نادر است.", en: "Manganese deficiency is rare." },
            normal: { fa: "سطح منگنز طبیعی است.", en: "Manganese level is normal." },
            high: { fa: "منگنز بالا می‌تواند سمی باشد و بر سیستم عصبی اثر بگذارد.", en: "High manganese can be toxic and affect the nervous system." }
        }
    },
    chromium: {
        name: { fa: "کروم", en: "Chromium" },
        aliases: ["chromium", "کروم"],
        unit: "µg/L",
        range: { all: { min: 0.1, max: 2.1 } },
        interpretation: {
            low: { fa: "کمبود کروم می‌تواند بر متابولیسم قند اثر بگذارد.", en: "Chromium deficiency can affect glucose metabolism." },
            normal: { fa: "سطح کروم طبیعی است.", en: "Chromium level is normal." },
            high: { fa: "افزایش آن نادر و معمولاً ناشی از مواجهه شغلی است.", en: "An elevated level is rare and usually due to occupational exposure." }
        }
    },

    // --- Other hematology / miscellaneous ---
    reticulocyte: {
        name: { fa: "رتیکولوسیت", en: "Reticulocyte Count" },
        aliases: ["reticulocyte", "reticulocyte count", "رتیکولوسیت"],
        unit: "%",
        range: { all: { min: 0.5, max: 2.5 } },
        interpretation: {
            low: { fa: "رتیکولوسیت پایین می‌تواند نشانه تولید ناکافی گلبول قرمز در مغز استخوان باشد.", en: "Low reticulocyte count can indicate inadequate red blood cell production by the bone marrow." },
            normal: { fa: "تولید گلبول قرمز جدید طبیعی است.", en: "New red blood cell production is normal." },
            high: { fa: "افزایش رتیکولوسیت نشانه پاسخ فعال مغز استخوان است، مثلاً پس از خونریزی یا در همولیز.", en: "Elevated reticulocyte count indicates an active bone marrow response, such as after bleeding or in hemolysis." }
        }
    },
    haptoglobin: {
        name: { fa: "هاپتوگلوبین", en: "Haptoglobin" },
        aliases: ["haptoglobin", "هاپتوگلوبین"],
        unit: "mg/dL",
        range: { all: { min: 30, max: 200 } },
        interpretation: {
            low: { fa: "کاهش هاپتوگلوبین نشانه تخریب گلبول قرمز (همولیز) است.", en: "Low haptoglobin indicates red blood cell destruction (hemolysis)." },
            normal: { fa: "سطح هاپتوگلوبین طبیعی است.", en: "Haptoglobin level is normal." },
            high: { fa: "افزایش هاپتوگلوبین یک واکنش فاز حاد التهابی غیراختصاصی است.", en: "Elevated haptoglobin is a non-specific acute-phase inflammatory response." }
        }
    },
    ceruloplasmin: {
        name: { fa: "سرولوپلاسمین", en: "Ceruloplasmin" },
        aliases: ["ceruloplasmin", "سرولوپلاسمین"],
        unit: "mg/dL",
        range: { all: { min: 20, max: 60 } },
        interpretation: {
            low: { fa: "کاهش سرولوپلاسمین نشانه مشخصه‌ی بیماری ویلسون است.", en: "Low ceruloplasmin is a characteristic finding of Wilson's disease." },
            normal: { fa: "سطح سرولوپلاسمین طبیعی است.", en: "Ceruloplasmin level is normal." },
            high: { fa: "افزایش آن یک واکنش فاز حاد التهابی غیراختصاصی است.", en: "An elevated level is a non-specific acute-phase inflammatory response." }
        }
    },
    lipoprotein_a: {
        name: { fa: "لیپوپروتئین (a)", en: "Lipoprotein (a)" },
        aliases: ["lipoprotein(a)", "lipoprotein a", "lp(a)", "لیپوپروتئین a"],
        unit: "mg/dL",
        range: { all: { min: 0, max: 30 } },
        interpretation: {
            low: { fa: "مقدار پایین از نظر قلبی-عروقی مطلوب است.", en: "A low value is favorable for cardiovascular health." },
            normal: { fa: "لیپوپروتئین (a) در محدوده طبیعی است.", en: "Lipoprotein (a) is within the normal range." },
            high: { fa: "افزایش لیپوپروتئین (a) یک عامل خطر ژنتیکی و مستقل برای بیماری قلبی-عروقی است.", en: "Elevated lipoprotein (a) is an independent, genetically-determined risk factor for cardiovascular disease." }
        }
    },
    hscrp: {
        name: { fa: "CRP با حساسیت بالا (hs-CRP)", en: "High-Sensitivity CRP (hs-CRP)" },
        aliases: ["hs-crp", "hscrp", "high sensitivity crp", "سی آر پی حساس"],
        unit: "mg/L",
        range: { all: { min: 0, max: 1 } },
        interpretation: {
            low: { fa: "مقدار زیر ۱ نشانه خطر قلبی-عروقی پایین است.", en: "A value below 1 indicates low cardiovascular risk." },
            normal: { fa: "hs-CRP در محدوده کم‌خطر قلبی-عروقی است.", en: "hs-CRP is within the low cardiovascular-risk range." },
            high: { fa: "افزایش hs-CRP (به‌ویژه بالای ۳) با افزایش خطر قلبی-عروقی مرتبط است؛ بین ۱ تا ۳ خطر متوسط در نظر گرفته می‌شود.", en: "Elevated hs-CRP (especially above 3) is associated with increased cardiovascular risk; 1-3 is considered average risk." }
        }
    },
    urine_metanephrines: {
        name: { fa: "متانفرین‌های ادرار", en: "Urine Metanephrines" },
        aliases: ["urine metanephrines", "metanephrines", "متانفرین ادرار"],
        unit: "µg/24hr",
        range: { all: { min: 25, max: 312 } },
        interpretation: {
            low: { fa: "مقدار پایین معمولاً نگران‌کننده نیست.", en: "A low value is usually not concerning." },
            normal: { fa: "متانفرین‌های ادرار طبیعی است.", en: "Urine metanephrines are normal." },
            high: { fa: "افزایش متانفرین‌های ادرار می‌تواند نشانه فئوکروموسیتوم (تومور آدرنال) باشد.", en: "Elevated urine metanephrines can indicate pheochromocytoma (an adrenal tumor)." }
        }
    },
    urine_vma: {
        name: { fa: "VMA ادرار (اسید وانیلیل ماندلیک)", en: "Urine VMA (Vanillylmandelic Acid)" },
        aliases: ["vma", "vanillylmandelic acid", "وی ام ای ادرار"],
        unit: "mg/24hr",
        range: { all: { min: 2, max: 7 } },
        interpretation: {
            low: { fa: "مقدار پایین معمولاً نگران‌کننده نیست.", en: "A low value is usually not concerning." },
            normal: { fa: "VMA ادرار طبیعی است.", en: "Urine VMA is normal." },
            high: { fa: "افزایش VMA می‌تواند نشانه فئوکروموسیتوم یا نوروبلاستوما باشد.", en: "Elevated VMA can indicate pheochromocytoma or neuroblastoma." }
        }
    },
    pepsinogen_1: {
        name: { fa: "پپسینوژن I", en: "Pepsinogen I" },
        aliases: ["pepsinogen i", "pepsinogen 1", "پپسینوژن یک"],
        unit: "ng/mL",
        range: { all: { min: 28, max: 100 } },
        interpretation: {
            low: { fa: "پپسینوژن I پایین می‌تواند نشانه گاستریت آتروفیک باشد.", en: "Low pepsinogen I can indicate atrophic gastritis." },
            normal: { fa: "سطح پپسینوژن I طبیعی است.", en: "Pepsinogen I level is normal." },
            high: { fa: "افزایش آن می‌تواند با ترشح اسید معده بالا مرتبط باشد.", en: "An elevated level can be related to high stomach acid secretion." }
        }
    },
    pepsinogen_2: {
        name: { fa: "پپسینوژن II", en: "Pepsinogen II" },
        aliases: ["pepsinogen ii", "pepsinogen 2", "پپسینوژن دو"],
        unit: "ng/mL",
        range: { all: { min: 3, max: 15 } },
        interpretation: {
            low: { fa: "مقدار پایین معمولاً نگران‌کننده نیست.", en: "A low value is usually not concerning." },
            normal: { fa: "سطح پپسینوژن II طبیعی است.", en: "Pepsinogen II level is normal." },
            high: { fa: "افزایش پپسینوژن II (و کاهش نسبت I به II) می‌تواند با گاستریت مرتبط با هلیکوباکتر پیلوری مرتبط باشد.", en: "Elevated pepsinogen II (and a lower Pepsinogen I:II ratio) can be related to H. pylori-associated gastritis." }
        }
    },
    osmotic_fragility: {
        type: "qualitative",
        name: { fa: "تست شکنندگی اسمزی گلبول قرمز", en: "Osmotic Fragility Test" },
        aliases: ["osmotic fragility", "شکنندگی اسمزی"],
        negative: { label: { fa: "طبیعی", en: "Normal" }, resultStatus: "normal", interpretation: { fa: "شکنندگی گلبول‌های قرمز طبیعی است.", en: "Red blood cell fragility is normal." } },
        positive: { label: { fa: "غیرطبیعی", en: "Abnormal" }, resultStatus: "high", interpretation: { fa: "شکنندگی افزایش‌یافته می‌تواند نشانه اسفروسیتوز ارثی باشد؛ شکنندگی کاهش‌یافته می‌تواند در تالاسمی دیده شود.", en: "Increased fragility can indicate hereditary spherocytosis; decreased fragility can be seen in thalassemia." } }
    },

    // --- Final batch: genetic + extended coagulation ---
    mthfr: {
        type: "qualitative",
        name: { fa: "جهش ژن MTHFR", en: "MTHFR Gene Mutation" },
        aliases: ["mthfr", "ام تی اچ اف آر"],
        negative: { label: { fa: "منفی", en: "Negative" }, resultStatus: "normal", interpretation: { fa: "جهش شناخته‌شده MTHFR یافت نشد.", en: "No known MTHFR mutation found." } },
        positive: { label: { fa: "مثبت", en: "Positive" }, resultStatus: "high", interpretation: { fa: "جهش ژن MTHFR شناسایی شد؛ می‌تواند بر متابولیسم فولات اثر بگذارد و در برخی موارد با افزایش هموسیستئین مرتبط باشد. اهمیت بالینی آن در بیشتر افراد محدود است و نیاز به مشاوره پزشک دارد.", en: "An MTHFR gene mutation was identified; it can affect folate metabolism and in some cases relate to elevated homocysteine. Clinical significance is limited for most people and warrants physician discussion." } }
    },
    von_willebrand_activity: {
        name: { fa: "فعالیت فاکتور فون‌ویلبراند", en: "Von Willebrand Factor Activity" },
        aliases: ["von willebrand activity", "vwf activity", "فعالیت فون ویلبراند"],
        unit: "%",
        range: { all: { min: 50, max: 200 } },
        interpretation: {
            low: { fa: "کاهش فعالیت فاکتور فون‌ویلبراند نشانه بیماری فون‌ویلبراند است که خطر خونریزی را افزایش می‌دهد.", en: "Reduced von Willebrand factor activity indicates von Willebrand disease, which increases bleeding risk." },
            normal: { fa: "فعالیت فاکتور فون‌ویلبراند طبیعی است.", en: "Von Willebrand factor activity is normal." },
            high: { fa: "افزایش آن یک واکنش فاز حاد التهابی است و معمولاً نگران‌کننده نیست.", en: "An elevated level is an acute-phase inflammatory response and is usually not concerning." }
        }
    },
    von_willebrand_antigen: {
        name: { fa: "آنتی‌ژن فاکتور فون‌ویلبراند", en: "Von Willebrand Factor Antigen" },
        aliases: ["von willebrand antigen", "vwf antigen", "آنتی ژن فون ویلبراند"],
        unit: "%",
        range: { all: { min: 50, max: 200 } },
        interpretation: {
            low: { fa: "کاهش آنتی‌ژن فاکتور فون‌ویلبراند نشانه بیماری فون‌ویلبراند است.", en: "Reduced von Willebrand factor antigen indicates von Willebrand disease." },
            normal: { fa: "آنتی‌ژن فاکتور فون‌ویلبراند طبیعی است.", en: "Von Willebrand factor antigen is normal." },
            high: { fa: "افزایش آن یک واکنش فاز حاد التهابی است و معمولاً نگران‌کننده نیست.", en: "An elevated level is an acute-phase inflammatory response and is usually not concerning." }
        }
    },
    factor_8: {
        name: { fa: "فاکتور انعقادی VIII", en: "Coagulation Factor VIII" },
        aliases: ["factor viii", "factor 8", "فاکتور هشت"],
        unit: "%",
        range: { all: { min: 50, max: 150 } },
        interpretation: {
            low: { fa: "کاهش فاکتور VIII نشانه هموفیلی A است که خطر خونریزی را افزایش می‌دهد.", en: "Reduced Factor VIII indicates hemophilia A, which increases bleeding risk." },
            normal: { fa: "سطح فاکتور VIII طبیعی است.", en: "Factor VIII level is normal." },
            high: { fa: "افزایش آن یک واکنش فاز حاد التهابی است و می‌تواند خطر لخته را کمی بالا ببرد.", en: "An elevated level is an acute-phase inflammatory response and can slightly increase clotting risk." }
        }
    },
    factor_9: {
        name: { fa: "فاکتور انعقادی IX", en: "Coagulation Factor IX" },
        aliases: ["factor ix", "factor 9", "فاکتور نه"],
        unit: "%",
        range: { all: { min: 50, max: 150 } },
        interpretation: {
            low: { fa: "کاهش فاکتور IX نشانه هموفیلی B است که خطر خونریزی را افزایش می‌دهد.", en: "Reduced Factor IX indicates hemophilia B, which increases bleeding risk." },
            normal: { fa: "سطح فاکتور IX طبیعی است.", en: "Factor IX level is normal." },
            high: { fa: "افزایش آن معمولاً اهمیت بالینی ندارد.", en: "An elevated level is usually not clinically significant." }
        }
    },
    thrombin_time: {
        name: { fa: "زمان ترومبین (TT)", en: "Thrombin Time (TT)" },
        aliases: ["thrombin time", "tt", "زمان ترومبین"],
        unit: "sec",
        range: { all: { min: 14, max: 21 } },
        interpretation: {
            low: { fa: "زمان ترومبین کوتاه‌تر از حد معمول به ندرت نگران‌کننده است.", en: "A shorter-than-usual thrombin time is rarely concerning." },
            normal: { fa: "زمان ترومبین طبیعی است.", en: "Thrombin time is normal." },
            high: { fa: "طولانی‌شدن زمان ترومبین می‌تواند نشانه کمبود یا اختلال فیبرینوژن یا مصرف هپارین باشد.", en: "A prolonged thrombin time can indicate fibrinogen deficiency/dysfunction or heparin use." }
        }
    }
};
