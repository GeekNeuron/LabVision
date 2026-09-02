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
    }
};
