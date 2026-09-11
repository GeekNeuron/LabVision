# LabVision 🩺

**تفسیرگر آفلاین آزمایش‌های پزشکی** — یک ابزار سبک، دوزبانه (فارسی/انگلیسی) و ۱۰۰٪ آفلاین برای درک نتایج آزمایش خون، ادرار و مایعات بدن، بدون نیاز به اینترنت، حساب کاربری، یا ارسال داده به هیچ سروری.

> ⚠️ این ابزار جایگزین نظر پزشک نیست. خروجی آن صرفاً جنبه اطلاعاتی و آموزشی دارد.

---

## ✨ ویژگی‌ها

- کاملاً آفلاین — هیچ درخواست شبکه‌ای، هیچ API، هیچ سرویس ابری. همه‌چیز در مرورگر خودتان اجرا می‌شود.
- ۲۸۸ آزمایش پزشکی در دیتابیس محلی، در ۲۰ دسته‌بندی بالینی (فهرست کامل پایین همین صفحه).
- دو نوع تفسیر:
  - کمّی (عددی) — مثل `Hb: 13.5` → مقایسه با محدوده نرمال (بر اساس جنسیت، سن، و در صورت بارداری، سه‌ماهه).
  - کیفی (مثبت/منفی) — مثل `HBsAg: Negative` → تشخیص کلیدواژه فارسی/انگلیسی.
- رنج‌های سنی برای اطفال (هموگلوبین، هماتوکریت، WBC) و رنج‌های اختصاصی سه‌ماهه بارداری (TSH، T4 آزاد، هموگلوبین، هماتوکریت).
- دوزبانه کامل — رابط کاربری، نام آزمایش‌ها و توضیحات، هم فارسی هم انگلیسی.
- تم روشن/تاریک.
- چاپ / خروجی PDF — خروجی به‌صورت جدول فشرده، شبیه برگه آزمایش واقعی.
- بدون هیچ وابستگی خارجی (بدون npm build, بدون framework) — فقط HTML/CSS/JS خالص.

---

## 🚀 اجرا

هیچ نصب یا build لازم نیست. کافیست:

1. این ریپازیتوری را دانلود/کلون کنید.
2. فایل `index.html` را در هر مرورگری باز کنید.

(پیشنهاد می‌شود برای بهترین تجربه فونت، فایل [`fonts/README.txt`](./fonts/README.txt) را هم بخوانید.)

---

## 📝 نحوه استفاده

هر آزمایش را در یک خط جدید، با فرمت `نام آزمایش: مقدار` وارد کنید:

```
Hb: 13.5
Platelet: 250
TSH: 2.1
Glucose: 95
HBsAg: Negative
LDL: 145
```

- نام آزمایش می‌تواند فارسی یا انگلیسی، کامل یا مخفف باشد (مثلاً `Hb`، `Hemoglobin`، یا `هموگلوبین` همگی شناسایی می‌شوند).
- جداکننده نام و مقدار می‌تواند `:` یا `-` باشد.
- جنسیت را از بالای فرم انتخاب کنید — چون رنج نرمال بسیاری از آزمایش‌ها بین مرد/زن فرق دارد.
- برای بچه‌ها، سن بیمار را وارد کنید تا از رنج‌های اختصاصی سنی استفاده شود (در حال حاضر برای هموگلوبین، هماتوکریت، WBC و IGF-1 فعال است).
- در صورت بارداری، گزینه «باردار» و سه‌ماهه را انتخاب کنید تا رنج‌های اختصاصی بارداری اعمال شود.
- روی «تحلیل نتایج» بزنید تا جدول نتیجه ساخته شود. برای موارد غیرطبیعی یا شناسایی‌نشده، توضیح در بخش «یادداشت‌های بالینی» زیر جدول می‌آید.

---

## 🧪 آزمایش‌های پشتیبانی‌شده (۲۸۸ مورد)

<details>
<summary><strong>شمارش کامل خون (CBC) و هماتولوژی</strong> / Complete Blood Count (CBC) & Hematology — 24 مورد</summary>

هموگلوبین (Hb) (Hemoglobin (Hb))، هماتوکریت (Hct) (Hematocrit (Hct))، گلبول قرمز (RBC) (Red Blood Cell Count (RBC))، گلبول سفید (WBC) (White Blood Cell Count (WBC))، پلاکت (Platelet) (Platelet Count)، MCV (MCV)، MCH (MCH)، MCHC (MCHC)، RDW (RDW)، نوتروفیل (Neutrophils)، لنفوسیت (Lymphocytes)، مونوسیت (Monocytes)، ائوزینوفیل (Eosinophils)، بازوفیل (Basophils)، سرعت رسوب گلبول قرمز (ESR) (Erythrocyte Sedimentation Rate (ESR))، رتیکولوسیت (Reticulocyte Count)، حجم متوسط پلاکت (MPV) (Mean Platelet Volume (MPV))، هاپتوگلوبین (Haptoglobin)، آنزیم G6PD (G6PD Enzyme)، هموگلوبین A2 (الکتروفورز) (Hemoglobin A2 (Electrophoresis))، هموگلوبین جنینی F (الکتروفورز) (Fetal Hemoglobin F (Electrophoresis))، تست شکنندگی اسمزی گلبول قرمز (Osmotic Fragility Test)، تست حلالیت داسی‌شکل (غربالگری سلول داسی) (Sickle Solubility Test (Sickle Cell Screening))، گلبول سفید مایع مغزی‌نخاعی (CSF) (CSF White Blood Cells)

</details>

<details>
<summary><strong>قند خون و دیابت</strong> / Glucose & Diabetes — 8 مورد</summary>

قند خون ناشتا (Glucose) (Fasting Glucose)، هموگلوبین A1C (Hemoglobin A1C)، قند خون تصادفی / غیرناشتا (BS) (Random / Casual Blood Sugar (BS))، تست تحمل گلوکز - ساعت اول (Glucose Tolerance Test - 1hr)، تست تحمل گلوکز - ساعت دوم (OGTT) (Glucose Tolerance Test - 2hr (OGTT))، انسولین ناشتا (Fasting Insulin)، سی‌پپتید (C-Peptide) (C-Peptide)، بتا-هیدروکسی‌بوتیرات (کتون خون) (Beta-Hydroxybutyrate (Blood Ketone))

</details>

<details>
<summary><strong>پنل کبدی</strong> / Liver Panel — 16 مورد</summary>

آنزیم کبدی AST (SGOT) (AST (SGOT))، آنزیم کبدی ALT (SGPT) (ALT (SGPT))، آلکالین فسفاتاز (ALP) (Alkaline Phosphatase (ALP))، بیلی‌روبین تام (Total Bilirubin)، بیلی‌روبین مستقیم (Direct Bilirubin)، بیلی‌روبین غیرمستقیم (Indirect Bilirubin)، گاما گلوتامیل ترانسفراز (GGT) (Gamma-Glutamyl Transferase (GGT))، لاکتات دهیدروژناز (LDH) (Lactate Dehydrogenase (LDH))، گلوبولین (Globulin)، پروتئین تام (Total Protein)، آلبومین (Albumin)، آنتی‌بادی ضد میتوکندری (AMA) (Anti-Mitochondrial Antibody (AMA))، آنتی‌بادی ضد عضله صاف (ASMA) (Anti-Smooth Muscle Antibody (ASMA))، آنتی‌بادی ضد کبد/کلیه میکروزومی نوع ۱ (Anti-LKM-1) (Anti-Liver/Kidney Microsomal Antibody Type 1 (Anti-LKM-1))، آلفا-۱ آنتی‌تریپسین (Alpha-1 Antitrypsin)، سرولوپلاسمین (Ceruloplasmin)

</details>

<details>
<summary><strong>الکترولیت‌ها و عملکرد کلیه</strong> / Electrolytes & Kidney Function — 22 مورد</summary>

سدیم (Na) (Sodium (Na))، پتاسیم (K) (Potassium (K))، کلر (Cl) (Chloride (Cl))، دی‌اکسید کربن / بی‌کربنات (CO2) (Carbon Dioxide / Bicarbonate (CO2))، آنیون گپ (Anion Gap) (Anion Gap)، اوره خون (BUN) (Blood Urea Nitrogen (BUN))، کراتینین (Creatinine)، نرخ فیلتراسیون گلومرولی تخمینی (eGFR) (Estimated Glomerular Filtration Rate (eGFR))، کلیرانس کراتینین (Creatinine Clearance)، کلسیم (Calcium)، کلسیم یونیزه (Ionized Calcium)، فسفر (Phosphorus)، منیزیم (Magnesium)، اسمولاریته خون (Blood Osmolality)، اسمولاریته ادرار (Urine Osmolality)، میکروآلبومین ادرار (Urine Microalbumin)، پروتئین ادرار ۲۴ساعته (24-Hour Urine Protein)، کلسیم ادرار ۲۴ساعته (24-Hour Urine Calcium)، پتاسیم ادرار ۲۴ساعته (24-Hour Urine Potassium)، اگزالات ادرار (Urine Oxalate)، سیترات ادرار (Urine Citrate)، اسید اوریک (Uric Acid)

</details>

<details>
<summary><strong>پروفایل لیپید</strong> / Lipid Profile — 7 مورد</summary>

کلسترول تام (Total Cholesterol)، کلسترول بد (LDL) (LDL Cholesterol)، کلسترول خوب (HDL) (HDL Cholesterol)، تری‌گلیسیرید (Triglycerides)، آپولیپوپروتئین A (Apo-A) (Apolipoprotein A (Apo-A))، آپولیپوپروتئین B (Apo-B) (Apolipoprotein B (Apo-B))، لیپوپروتئین (a) (Lipoprotein (a))

</details>

<details>
<summary><strong>آهن، ویتامین‌ها و مواد معدنی</strong> / Iron, Vitamins & Minerals — 20 مورد</summary>

آهن سرم (Serum Iron)، فریتین (Ferritin)، TIBC (TIBC)، ترانسفرین (Transferrin)، ویتامین D (Vitamin D)، ویتامین B12 (Vitamin B12)، فولات (اسید فولیک) (Folate)، ویتامین B1 (تیامین) (Vitamin B1 (Thiamine))، ویتامین B6 (Vitamin B6)، ویتامین A (Vitamin A)، ویتامین E (Vitamin E)، ویتامین K (Vitamin K)، ویتامین C (Vitamin C)، روی (Zinc) (Zinc)، مس (Copper) (Copper)، سلنیوم (Selenium)، منگنز (Manganese)، کروم (Chromium)، هموسیستئین (Homocysteine)، اسید متیل‌مالونیک (MMA) (Methylmalonic Acid (MMA))

</details>

<details>
<summary><strong>تیروئید</strong> / Thyroid — 9 مورد</summary>

TSH (TSH)، T3 (T3)، T4 (T4)، T4 آزاد (FT4) (Free T4 (FT4))، T3 آزاد (FT3) (Free T3 (FT3))، آنتی‌بادی ضد پراکسیداز تیروئید (Anti-TPO) (Anti-Thyroid Peroxidase (Anti-TPO))، آنتی‌بادی ضد تیروگلوبولین (Anti-Tg) (Anti-Thyroglobulin Antibody (Anti-Tg))، تیروگلوبولین (Thyroglobulin)، آنتی‌بادی گیرنده TSH (TRAb) (TSH Receptor Antibody (TRAb))

</details>

<details>
<summary><strong>انعقاد خون</strong> / Coagulation — 17 مورد</summary>

زمان پروترومبین (PT) (Prothrombin Time (PT))، INR (INR)، PTT (PTT)، فیبرینوژن (Fibrinogen)، D-Dimer (D-Dimer)، آنتی‌ترومبین III (Antithrombin III)، پروتئین C (Protein C)، پروتئین S (Protein S)، فعالیت فاکتور فون‌ویلبراند (Von Willebrand Factor Activity)، آنتی‌ژن فاکتور فون‌ویلبراند (Von Willebrand Factor Antigen)، فاکتور انعقادی VIII (Coagulation Factor VIII)، فاکتور انعقادی IX (Coagulation Factor IX)، زمان ترومبین (TT) (Thrombin Time (TT))، آنتی‌کواگولان لوپوس (Lupus Anticoagulant)، فعالیت آنتی-فاکتور Xa (پایش هپارین) (Anti-Factor Xa Activity (Heparin Monitoring))، آنتی-بتا۲-گلیکوپروتئین I (Anti-Beta2-Glycoprotein I)، آنتی‌کاردیولیپین (Anticardiolipin Antibody)

</details>

<details>
<summary><strong>هورمون‌ها و غدد درون‌ریز</strong> / Hormones & Endocrine — 24 مورد</summary>

هورمون ACTH (ACTH)، آلدوسترون (حالت نشسته/خوابیده) (Aldosterone (Seated/Supine))، رنین (حالت خوابیده، رژیم سدیم عادی) (Renin (Supine, Normal-Sodium Diet))، کورتیزول (نمونه صبحگاهی، ساعت ۸ صبح) (Cortisol (Morning Sample, 8 AM))، پرولاکتین (Prolactin)، هورمون FSH (FSH)، هورمون LH (LH)، استرادیول (E2) (Estradiol (E2))، پروژسترون (Progesterone)، تستوسترون تام (Total Testosterone)، DHEA-S (DHEA-S)، هورمون ضد مولرین (AMH) (Anti-Müllerian Hormone (AMH))، گلوبولین متصل‌شونده به هورمون جنسی (SHBG) (Sex Hormone-Binding Globulin (SHBG))، تستوسترون آزاد (Free Testosterone)، دی‌هیدروتستوسترون (DHT) (Dihydrotestosterone (DHT))، فاکتور رشد شبه‌انسولین (IGF-1) (Insulin-like Growth Factor 1 (IGF-1))، ۱۷-هیدروکسی‌پروژسترون (17-Hydroxyprogesterone)، کلسی‌تونین (Calcitonin)، اینهیبین B (Inhibin B)، آندروستن‌دیون (Androstenedione)، هورمون رشد (ناشتا/استراحت) (Growth Hormone (Fasting/At Rest))، اریتروپویتین (EPO) (Erythropoietin (EPO))، هورمون پاراتیروئید (PTH) (Parathyroid Hormone (PTH))

</details>

<details>
<summary><strong>گوارش و پانکراس</strong> / Gastrointestinal & Pancreatic — 14 مورد</summary>

گاسترین (Gastrin)، آمیلاز (Amylase)، لیپاز (Lipase)، الاستاز مدفوع (Fecal Elastase)، هلیکوباکتر پیلوری - آنتی‌ژن مدفوع (H. Pylori Stool Antigen)، هلیکوباکتر پیلوری - تست تنفسی اوره (H. Pylori Urea Breath Test)، هلیکوباکتر پیلوری - آنتی‌بادی خون (H. Pylori IgG Antibody)، تست تنفسی لاکتوز (Lactose Breath Test)، آنتی‌بادی ضد ترانس‌گلوتامیناز بافتی IgA (سلیاک) (Anti-Tissue Transglutaminase IgA (tTG-IgA, Celiac))، آنتی‌بادی پپتید دیامیده گلیادین (DGP، سلیاک) (Deamidated Gliadin Peptide Antibody (DGP, Celiac))، کالپروتکتین مدفوع (Fecal Calprotectin)، پپسینوژن I (Pepsinogen I)، پپسینوژن II (Pepsinogen II)، خون مخفی در مدفوع (FOBT) (Fecal Occult Blood Test (FOBT))

</details>

<details>
<summary><strong>التهاب و ایمونولوژی</strong> / Inflammation & Immunology — 27 مورد</summary>

پروتئین واکنشی C (CRP) (C-Reactive Protein (CRP))، CRP با حساسیت بالا (hs-CRP) (High-Sensitivity CRP (hs-CRP))، پروکلسی‌تونین (PCT) (Procalcitonin (PCT))، فاکتور روماتوئید (RF) (Rheumatoid Factor (RF))، آنتی-CCP (Anti-CCP)، آنتی-dsDNA (Anti-dsDNA)، کمپلمان C3 (Complement C3)، کمپلمان C4 (Complement C4)، IgE تام (Total IgE)، ایمونوگلوبولین G (IgG) (Immunoglobulin G (IgG))، ایمونوگلوبولین A (IgA) (Immunoglobulin A (IgA))، ایمونوگلوبولین M (IgM) (Immunoglobulin M (IgM))، کلراید عرق (تست فیبروز کیستیک) (Sweat Chloride (Cystic Fibrosis Test))، بتا-۲ میکروگلوبولین (Beta-2 Microglobulin)، آنتی‌بادی ضد هسته (ANA) (Antinuclear Antibody (ANA))، کرایوگلوبولین (Cryoglobulin)، آنتی-Ro / SSA (Anti-Ro / SSA)، آنتی-La / SSB (Anti-La / SSB)، آنتی-Smith (Anti-Sm) (Anti-Smith (Anti-Sm))، آنتی-Scl-70 (Anti-Scl-70)، آنتی-سانترومر (Anti-Centromere Antibody)، تیتر آنتی‌استرپتولیزین O (ASO) (Antistreptolysin O Titer (ASO))، آنتی‌بادی ضد سیتوپلاسم نوتروفیل (ANCA) (Anti-Neutrophil Cytoplasmic Antibody (ANCA))، آنتی‌بادی ضد GAD (Anti-GAD) (Anti-GAD Antibody)، آنتی‌بادی ساکارومایسس سرویزیه (ASCA) (Saccharomyces Cerevisiae Antibody (ASCA))، HLA-B27 (HLA-B27)، تایپینگ HLA (HLA Typing)

</details>

<details>
<summary><strong>نشانگرهای توموری</strong> / Tumor Markers — 9 مورد</summary>

آلفا-فتوپروتئین (AFP) (Alpha-Fetoprotein (AFP))، آنتی‌ژن کارسینوآمبریونیک (CEA) (Carcinoembryonic Antigen (CEA))، CA-125 (CA-125)، CA-19-9 (CA-19-9)، CA-15-3 (CA-15-3)، آنتی‌ژن اختصاصی پروستات (PSA) (Prostate-Specific Antigen (PSA))، بتا-hCG (Beta-hCG)، پروتئین اپیدیدیم انسانی ۴ (HE4) (Human Epididymis Protein 4 (HE4))، انولاز اختصاصی نورون (NSE) (Neuron-Specific Enolase (NSE))

</details>

<details>
<summary><strong>قلب و عروق</strong> / Cardiac — 6 مورد</summary>

تروپونین (Troponin)، تروپونین T (Troponin T)، کراتین کیناز (CK/CPK) (Creatine Kinase (CK/CPK))، CK-MB (CK-MB)، میوگلوبین (Myoglobin)، BNP / NT-proBNP (BNP / NT-proBNP)

</details>

<details>
<summary><strong>سموم و گازهای خون شریانی</strong> / Toxicology & Arterial Blood Gas — 13 مورد</summary>

اسید لاکتیک (Lactic Acid)، آمونیاک (Ammonia)، الکل خون (Blood Alcohol)، کوتینین (نیکوتین) (Cotinine (Nicotine))، سرب خون (Blood Lead)، جیوه خون (Blood Mercury)، آرسنیک خون (Blood Arsenic)، pH خون شریانی (ABG) (Arterial Blood pH (ABG))، فشار اکسیژن خون شریانی (PaO2) (Arterial Oxygen Pressure (PaO2))، فشار دی‌اکسیدکربن خون شریانی (PaCO2) (Arterial CO2 Pressure (PaCO2))، اشباع اکسیژن خون شریانی (SaO2) (Arterial Oxygen Saturation (SaO2))، کربوکسی‌هموگلوبین (مسمومیت با CO) (Carboxyhemoglobin (CO Poisoning))، سطح دیگوکسین خون (Digoxin Level)

</details>

<details>
<summary><strong>باروری و اسپرم</strong> / Fertility & Semen Analysis — 4 مورد</summary>

حجم مایع منی (Semen Volume)، غلظت اسپرم (Sperm Concentration)، تحرک اسپرم (Sperm Motility)، مورفولوژی اسپرم (طبیعی %) (Sperm Morphology (Normal %))

</details>

<details>
<summary><strong>مایع مغزی‌نخاعی (CSF)</strong> / Cerebrospinal Fluid (CSF) — 2 مورد</summary>

پروتئین مایع مغزی‌نخاعی (CSF) (CSF Protein)، گلوکز مایع مغزی‌نخاعی (CSF) (CSF Glucose)

</details>

<details>
<summary><strong>سرولوژی و بیماری‌های عفونی</strong> / Serology & Infectious Disease — 48 مورد</summary>

آنتی‌ژن سطحی هپاتیت B (HBsAg) (Hepatitis B Surface Antigen (HBsAg))، آنتی‌بادی سطحی هپاتیت B (Anti-HBs) (Hepatitis B Surface Antibody (Anti-HBs))، آنتی‌بادی مرکزی هپاتیت B (Anti-HBc) (Hepatitis B Core Antibody (Anti-HBc))، آنتی‌بادی هپاتیت C (Anti-HCV) (Hepatitis C Antibody (Anti-HCV))، آنتی‌بادی IgM هپاتیت A (Hepatitis A IgM Antibody)، آنتی‌ژن/آنتی‌بادی HIV (HIV Ag/Ab)، سیفلیس (VDRL/RPR) (Syphilis (VDRL/RPR))، تست تاییدی سیفلیس (FTA-ABS) (Syphilis Confirmatory Test (FTA-ABS))، تب مالت (رایت) (Brucellosis (Wright Test))، حصبه (تست ویدال) (Typhoid (Widal Test))، تست پوستی سل (PPD) (TB Skin Test (PPD))، کوانتی‌فرون (سل) (QuantiFERON (TB))، اسمیر خون مالاریا (Malaria Blood Smear)، تب دنگی (Dengue Fever)، توکسوپلاسموز IgM (Toxoplasma IgM)، توکسوپلاسموز IgG (Toxoplasma IgG)، سرخجه IgM (Rubella IgM)، سرخجه IgG (Rubella IgG)، سرخک (Measles)، اوریون (Mumps)، آبله مرغان (VZV) (Chickenpox (VZV))، هرپس سیمپلکس (HSV) (Herpes Simplex (HSV))، سیتومگالوویروس (CMV) (Cytomegalovirus (CMV))، اپشتین بار ویروس (EBV) (Epstein-Barr Virus (EBV))، پاروویروس B19 (Parvovirus B19)، کرونا - PCR (COVID-19 PCR)، کرونا - آنتی‌ژن (COVID-19 Antigen)، کرونا - آنتی‌بادی (COVID-19 Antibody)، آنفولانزا (Influenza)، ویروس RSV (RSV)، مایکوپلاسما (Mycoplasma)، کلامیدیا (Chlamydia)، سوزاک (گنوره) (Gonorrhea)، تریکوموناس (Trichomonas)، تست سریع استرپتوکوک گلو (Rapid Strep Test)، دیفتری و سیاه‌سرفه (Diphtheria & Pertussis)، کومبس مستقیم (Direct Coombs Test)، کومبس غیرمستقیم (Indirect Coombs Test)، پروتئین بنس جونز (ادرار) (Bence Jones Protein (Urine))، کشت ادرار (Urine Culture)، کشت خون (Blood Culture)، کشت مدفوع (Stool Culture)، روتاویروس و آدنوویروس مدفوع (Stool Rotavirus/Adenovirus)، کشت اختصاصی سودوموناس (Pseudomonas Culture)، تست حساسیت ضدقارچی (Antifungal Susceptibility Test)، ویروس پاپیلومای انسانی (HPV) (Human Papillomavirus (HPV))، پاپ اسمیر (Pap Smear)، شمارش CD4 (CD4 Count)

</details>

<details>
<summary><strong>ژنتیک و غربالگری</strong> / Genetics & Screening — 5 مورد</summary>

کاریوتایپ (ژنتیک) (Karyotype (Genetics))، غربالگری NIPT جنین (NIPT Fetal Screening)، جهش ژن BRCA (BRCA Gene Mutation)، غربالگری متابولیک نوزادان (PKU و...) (Newborn Metabolic Screening (PKU, etc.))، جهش ژن MTHFR (MTHFR Gene Mutation)

</details>

<details>
<summary><strong>غربالگری مواد مخدر</strong> / Drug Screening — 6 مورد</summary>

مورفین (تست مواد مخدر) (Morphine (Drug Screen))، متادون (تست مواد مخدر) (Methadone (Drug Screen))، کوکائین (تست مواد مخدر) (Cocaine (Drug Screen))، آمفتامین (تست مواد مخدر) (Amphetamine (Drug Screen))، بنزودیازپین (تست مواد مخدر) (Benzodiazepine (Drug Screen))، THC / حشیش (تست مواد مخدر) (THC / Cannabis (Drug Screen))

</details>

<details>
<summary><strong>سایر</strong> / Other — 8 مورد</summary>

متانفرین ادرار (۲۴ساعته) (Urine Metanephrine (24-hr))، نورمتانفرین ادرار (۲۴ساعته) (Urine Normetanephrine (24-hr))، VMA ادرار (اسید وانیلیل ماندلیک) (Urine VMA (Vanillylmandelic Acid))، تریپتاز (Tryptase)، استئوکلسین (Osteocalcin)، پره‌آلبومین (ترانستیرتین) (Prealbumin (Transthyretin))، درصد اشباع ترانسفرین (Transferrin Saturation)، آنزیم مبدل آنژیوتانسین (ACE) (Angiotensin-Converting Enzyme (ACE))

</details>


---

## 🔒 حریم خصوصی

هیچ داده‌ای از این ابزار خارج نمی‌شود. تمام پردازش‌ها به‌صورت کامل در مرورگر شما و روی دستگاه خودتان انجام می‌شود.

## 📄 مجوز

این پروژه تحت مجوز [MIT](./LICENSE) منتشر شده است.

## ⚕️ سلب مسئولیت

LabVision یک ابزار آموزشی/اطلاعاتی است و توسط هیچ نهاد پزشکی تأیید نشده. محدوده‌های نرمال ارائه‌شده، بازه‌های عمومی است و ممکن است بین آزمایشگاه‌ها، دستگاه‌ها و روش‌های سنجش مختلف کمی متفاوت باشد — این تفاوت طبیعی و شناخته‌شده است، نه نشانه اشتباه. برخی رنج‌ها (مثل CK، LDH، یا اسید اوریک) حتی بین منابع پزشکی معتبر هم دقیقاً یکسان نیستند؛ در این موارد رنجی انتخاب شده که با بیشترین اجماع منابع همخوانی داشته باشد، نه لزوماً تنها عدد «درست». برای هرگونه تصمیم پزشکی، حتماً با پزشک یا متخصص آزمایشگاه مشورت کنید و رنج مرجع چاپ‌شده روی برگه آزمایش خودتان را نیز در نظر بگیرید.

## 🧾 تاریخچه تطبیق دیتابیس

- **v24:** تطبیق اولیه با ۵ منبع بین‌المللی (شامل PSAP/ACCP) + کاتالوگ آزمایشگاهی ایرانی Daneshbod — ۲۸۸ تست.
- **v25:** ممیزی مستقل کامل هر ۲۸۸ تست در برابر منابع زنده (Mayo Clinic Laboratories، LabCorp/Quest، Cleveland Clinic، MedlinePlus، WHO 6th Edition، NBME/ABIM/ACP/ACCP) + یک دور تطبیق با آزمایشگاه‌های ایرانی واقعی. نتیجه: ۳۱ اصلاح مستند در رنج‌های نرمال.
- **v26:** رنج‌های سنی اطفال (هموگلوبین، هماتوکریت، WBC) و رنج‌های اختصاصی سه‌ماهه بارداری (TSH، T4 آزاد، هموگلوبین، هماتوکریت) اضافه شد؛ رفع اشکال نمایش نام تست‌های هم‌معنی (مثل TC/WBC)؛ بازطراحی کامل چیدمان صفحه برای جا شدن کامل در صفحه‌نمایش بدون اسکرول کلی صفحه.
- **v27:** رفع اشکالات نسخه قبل: تکرار نام تست در جدول نتایج (مثل «هموگلوبین (Hb) (Hb)») برطرف شد؛ نمایش گزینه «باردار» اکنون واقعاً فقط با انتخاب جنسیت زن ظاهر می‌شود؛ اندازه رابط کاربری در حالت دسکتاپ حدود ۴۰٪ کوچک‌تر شد؛ فیلد سن و گزینه بارداری هم‌تراز با انتخاب جنسیت قرار گرفتند (به‌جای پنهان بودن در «مشخصات اختیاری»)؛ جهت کلی رابط کاربری اکنون همیشه روی LTR قفل است و فقط متن حالت فارسی به‌صورت RTL نمایش داده می‌شود.
- **v28:** جنسیت، سن، و بارداری دوباره داخل «مشخصات برگه (اختیاری)» جمع شدند (این‌بار همه در یک آکاردئون واحد، نه پخش‌شده)؛ رفع اشکال هم‌پوشانی محتوای «مشخصات اختیاری» با بخش زیرینش هنگام باز شدن؛ طراحی مدرن‌تر برای چک‌باکس «باردار» و نوار اسکرول هر دو پنل و ناحیه ورودی متن.
