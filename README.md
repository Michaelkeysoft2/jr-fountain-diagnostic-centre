# J-R Fountain Diagnostic Centre — Next.js Healthcare & Diagnostic Platform

Modern, full-featured web platform and digital requisition system for **J-R FOUNTAIN DIAGNOSTIC CENTRE**, Ibadan, Nigeria. Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **Lucide React**, and **Turbopack**.

> *"For with thee is the fountain of life: in thy light shall we see light"* — **Psalm 36:9**

---

## 🏥 Clinical Scope & Modalities Implemented

The platform is designed to international clinical standards, fulfilling both the **MichaelKeysoft Website Development Proposal**, the **Official Laboratory Requisition Form**, and the comprehensive service capabilities of a standard diagnostic centre:

### 1. 🧪 Laboratory Medicine & What It Entails
- **Clinical Disciplines**:
  - **Clinical Chemistry & Enzymology**: Renal Panel (E&U + Creatinine, eGFR), Liver Function (LFTs), Fasting Lipids, Cardiac Enzymes (hs-Troponin I/T, CK-MB).
  - **Haematology & Haemostasis**: 5-part automated Complete Blood Count (CBC), ESR (Westergren), Coagulation profile (PT/INR, APTT), D-Dimer, Hb Genotype electrophoresis.
  - **Microbiology & Parasitology**: Automated blood, urine, and swab cultures with Minimum Inhibitory Concentration (MIC) antibiotic sensitivity reporting; H. Pylori; Widal.
  - **Immunology, Endocrinology & Tumour Markers**: Chemiluminescent immunoassays (CLIA) for thyroid panels (TSH, FT3, FT4), reproductive hormone profiles (LH, FSH, Prolactin, Testosterone, Estradiol), and tumour markers (PSA, CEA, CA-125, AFP, Free β-hCG).
  - **Histopathology & Cytopathology**: Surgical biopsy reporting, FNAC, and cervical Pap smears by Consultant Pathologists.
- **The 3-Phase Clinical Workflow**:
  - **Pre-Analytical Phase**: Standardized phlebotomy protocols, BD Vacutainer® vacuum systems, barcode tracking, fasting verification, and monitored cold chain.
  - **Analytical Phase**: Multi-level daily Internal Quality Control (IQC), international reference calibrations, and automated duplicate verification of anomalous results.
  - **Post-Analytical Phase**: Dual sign-off by Medical Laboratory Scientists & Consultant Pathologists, **STAT Critical Value phone alerts within 15 minutes** for life-threatening values, and encrypted PDF digital delivery.

### 2. 🩻 Digital X-Ray Radiography & What It Entails
- **Clinical Imaging Menu**:
  - **Digital Chest Radiography (CXR)**: PA, AP, Lateral, and Apical Lordotic views for cardiomegaly, pneumonia, pulmonary TB, occupational medical fitness, and pre-op clearance.
  - **Musculoskeletal & Skeletal X-Rays**: Cervical, thoracic, and lumbosacral spine, pelvis, extremities, fractures, joint dislocations, and osteoarthritis.
  - **Abdominal & Pelvic (KUB) X-Rays**: Screening for radiopaque renal/bladder calculi, bowel obstruction, and visceral perforation.
  - **Paranasal Sinuses (PNS) & Skull**: Water's view, Caldwell view for sinusitis and trauma.
- **Safety & Workflow Standards**:
  - **Ultra-Low Radiation**: High-frequency flat-panel Digital Radiography (DR) reduces patient exposure by up to 60% compared to legacy film systems.
  - **ALARA Protocol**: Lead shielding, thyroid collars, gonad guards, and pregnancy screening.
  - **Consultant Radiologist Dual-Read**: Formal interpretation within 1–2 hours.
  - **Multi-Format Output**: High-resolution medical film print, DICOM files, and secure WhatsApp/Email PDF delivery.

### 3. 🌊 Diagnostic Ultrasound / Sonography & What It Entails
- **Clinical Modalities**:
  - **Obstetric & Maternity Ultrasound**: Early pregnancy viability (6–11 weeks), 1st-trimester dating, 2nd-trimester Detailed Fetal Anomaly Scans (18–22 weeks), Fetal Biophysical Profile, and photorealistic **Live 3D/4D HD-Live Fetal Imaging**.
  - **Abdominopelvic Sonography**: Liver, gallbladder, pancreas, spleen, kidneys, urinary bladder, prostate volume (in men), uterus, and ovaries.
  - **Transvaginal Ultrasound (TVS)**: Endocavitary high-resolution scan for uterine fibroid mapping, adenomyosis, ovarian morphology/PCOS, ectopic pregnancy, and folliculometry.
  - **Vascular Doppler & Small Parts**: Carotid Doppler (stroke risk/atherosclerosis), Lower Limb Venous Doppler (DVT screening), Thyroid (TI-RADS), and Breast (BI-RADS).
  - **Echocardiography (ECHO)**: Transthoracic evaluation of Left Ventricular Ejection Fraction (LVEF%), wall motion, and valvular regurgitation.
- **What It Entails**:
  - 100% radiation-free acoustic wave imaging safe for pregnant mothers and children.
  - Clear patient preparation guidelines (full bladder vs. fasting protocols).
  - Glossy photo printouts, digital video clips, and consultant sonologist reports.

### 4. 🏥 Hospital & Physician Referral Opportunities & What It Entails
- **Strategic Partnership Ecosystem for Hospitals, HMOs & Clinics in Ibadan**:
  - **STAT Priority Queue**: Inpatient and emergency samples bypass routine queues; panic values phoned directly to doctors within 60–90 minutes.
  - **Direct Doctor Results Dispatch**: Verified PDF reports delivered to the referring physician's phone or email before the patient leaves the centre.
  - **Direct Doctor Liaison Hotline**: Direct telephone access to the Lab Director, Consultant Pathologist, and Consultant Radiologist for case reviews.
  - **Free Branded Requisition Booklets**: Customized requisition pads and vacutainer sample collection supplies provided to partner clinics free of charge.
  - **Hospital Courier & Sample Pickup**: Dispatch riders available across Ibadan to collect ward samples and biopsy specimens.
  - **Institutional Retainership Accounts**: Flexible monthly consolidated billing accounts for partner hospitals and HMOs.
  - **Doctor Referral Registration Portal**: Online onboarding form built directly into the website.

### 5. 📋 Digital Laboratory Requisition Portal
- Interactive digital twin of the physical paper request slip.
- Pre-filled patient demographics, clinical notes, and multi-select test checklist.
- One-click submission to **WhatsApp (`0701 787 4107`)** and **Email (`fountainheartibadan@gmail.com`)**.
- Browser-based printing (`Ctrl + P`) for physical slip generation.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 + PostCSS
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans
- **Bundler & Compiler**: Turbopack
- **Hosting Target**: Vercel (Native zero-config deployment)

---

## 🚀 Pushing to GitHub & Deploying to Vercel

### Step 1: Create an Empty Repository on GitHub
1. Visit [github.com/new](https://github.com/new).
2. Enter the repository name: `jr-fountain-diagnostic-centre` (or preferred name).
3. Do **not** check "Add a README", ".gitignore", or "License".
4. Click **Create repository**.

### Step 2: Push Your Local Code to GitHub
Open PowerShell in `C:\Workspace\jr-fountain-diagnostic-centre` and run:

```powershell
cd C:\Workspace\jr-fountain-diagnostic-centre
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/jr-fountain-diagnostic-centre.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel (1-Click Deployment)
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** &rarr; **Project**.
3. Select your `jr-fountain-diagnostic-centre` repository from GitHub.
4. Vercel automatically detects **Next.js**:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
5. Click **Deploy**. Your live production website with free SSL will be deployed in under 60 seconds!

---

## 💻 Local Development

```powershell
# Open terminal in project directory
cd C:\Workspace\jr-fountain-diagnostic-centre

# Start local Next.js development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm run start
```

---

## 📍 Facility Information
- **Centre Name**: J-R FOUNTAIN DIAGNOSTIC CENTRE
- **Address**: No 72, Adekunle Fajuyi Road, (Remilekun House), Opp. Lekan Salami Stadium Shopping Complex, Ekotedo / Mokola, Ibadan, Oyo State, Nigeria
- **Hotlines**: 0701 787 4107
- **WhatsApp**: +234 701 787 4107
- **Email**: fountainheartibadan@gmail.com
- **Developed by**: MichaelKeysoft ([www.michaelkeysoft.com](https://www.michaelkeysoft.com))
