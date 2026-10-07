# J-R Fountain Diagnostic Centre — Official Website & Requisition Portal

Responsive, modern healthcare web platform for **J-R Fountain Diagnostic Centre**, Ibadan, Nigeria. Developed with React, Tailwind CSS, Lucide Icons, and Vite.

> *"For with thee is the fountain of life: in thy light shall we see light"* — **Psalm 36:9**

---

## 🏥 About the Project

This platform is tailored to the diagnostic centre's clinical operations, based on the **MichaelKeysoft Website Development Proposal** and the official **Laboratory Request / Requisition Form**.

### Key Features
1. **Interactive Diagnostic Test Directory (50+ Tests)**
   - Complete categorization matching the laboratory request slip:
     - **Cardiac Studies** (12-Lead ECG, 24h Holter, 24h ABPM, Echocardiography, Chest X-Ray)
     - **Kidney Function (Renal Panel)** (E&U, Creatinine, Electrolytes, Creatinine Clearance, Urinalysis, 24h Urinary Protein)
     - **Liver Function (Hepatic Panel)** (Full LFT, ALT, AST, GGT, Total & Conjugated Bilirubin, Albumin)
     - **Tumour Markers** (PSA, AFP, CEA, CA-125, Free β-hCG)
     - **Bone Function** (Calcium, Inorganic Phosphate, Uric Acid)
     - **Haematology** (Full Blood Count, ESR, Blood Grouping, Genotype)
     - **Clotting Profile** (PT, INR, PTTK / APTT, Thrombin Time, D-Dimer)
     - **Cardiac Markers** (High-Sensitivity Troponin I & T, CK-MB, LDH, Amylase)
     - **Lipid Profile** (Full Fasting Lipid, Cholesterol, Triglycerides, HDL, LDL)
     - **Diabetes Studies** (FBS, 2HPP, Random Blood Glucose, OGTT 2PT/3PT, HbA1c, Microalbumin)
     - **Thyroid Studies** (TSH, Free T3, Free T4)
     - **Reproductive Endocrine / Hormonal Profile** (LH, FSH, Prolactin, Progesterone, Testosterone, Estradiol, Cortisol, β-hCG)
     - **Pulmonary Function** (Arterial Blood Gases, Spirometry)
     - **Microbiology, Histopathology & Serology** (Urine M/C/S, Stool M/C/S, HVS, Blood Culture, Widal, Hepatitis B/C, HIV, Biopsy)
   - Real-time search filter and fasting prep badges.
   - Multi-select capability feeding directly into the digital requisition sheet.

2. **Digital Lab Request & Booking Form**
   - Exact online replica of the physical paper request slip.
   - Captures Patient Demographics (Name, Age/DOB, Hospital Number, Address, Contact).
   - Clinical Referral details (Referring Physician, Clinic/Ward, Walk-in vs. Home Phlebotomy).
   - Test checklists with 1-click dispatch to **WhatsApp (`0701 787 4107`)** and **Email (`fountainheartibadan@gmail.com`)**.
   - Printable requisition slip (`Ctrl + P` / Print button).

3. **Core Information & Guidance**
   - **About Us**: Profile, Mission, Vision, and Core Values.
   - **Why Choose Us**: Quality Standards, Qualified Scientists, Modern Equipment, and Strict Medical Confidentiality.
   - **Patient FAQs**: Fasting preparation, sample collection tips, result collection, and 24h monitor procedures.
   - **Contact & Map**: Direct hotline `0701 787 4107`, WhatsApp click-to-chat, and facility directions (Opp. Lekan Salami Stadium, Ekotedo, Ibadan).

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans
- **Deployment**: Vercel ready (`vercel.json`)

---

## 🚀 Connecting to GitHub & Deploying to Vercel

### Step 1: Create a New Repository on GitHub
1. Go to [GitHub](https://github.com/new).
2. Name the repository: `jr-fountain-diagnostic-centre` (or your preferred name).
3. Leave it empty (do **not** initialize with README or license since this project already has them).

### Step 2: Push Your Local Repository to GitHub
Open your terminal in `C:\Workspace\jr-fountain-diagnostic-centre` and run:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/jr-fountain-diagnostic-centre.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** &rarr; **"Project"**.
3. Import the `jr-fountain-diagnostic-centre` repository from your GitHub.
4. Keep the default settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your website will be live with free SSL in less than 60 seconds!

---

## 💻 Local Development

```bash
# Navigate to folder
cd C:\Workspace\jr-fountain-diagnostic-centre

# Install dependencies (already completed)
npm install

# Start local development server
npm run dev

# Create production build
npm run build
```

---

## 📍 Facility Details
- **Name**: J-R FOUNTAIN DIAGNOSTIC CENTRE
- **Address**: No 72, Adekunle Fajuyi Road, (Remilekun House), Opp. Lekan Salami Stadium Shopping Complex, Ekotedo / Mokola, Ibadan, Oyo State, Nigeria
- **Hotlines**: 0701 787 4107
- **WhatsApp**: +234 701 787 4107
- **Email**: fountainheartibadan@gmail.com
- **Developed by**: MichaelKeysoft ([www.michaelkeysoft.com](https://www.michaelkeysoft.com))
