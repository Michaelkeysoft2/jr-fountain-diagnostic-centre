'use client';

import React, { useState } from 'react';
import { 
  Waves, 
  Baby, 
  HeartPulse, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Eye, 
  CheckCircle2, 
  Activity, 
  AlertCircle,
  FileCheck2,
  ChevronRight
} from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function UltrasoundEntailsSection() {
  const [activeCategory, setActiveCategory] = useState('obstetric');

  const ultrasoundCategories = [
    {
      id: 'obstetric',
      name: 'Obstetric & 3D/4D Fetal Scans',
      icon: Baby,
      tagline: 'Comprehensive Pregnancy & Fetal Well-being',
      description: 'From early viability dating to advanced 2nd-trimester structural anomaly scans and heartwarming 3D/4D live video rendering of your baby.',
      scans: [
        {
          name: 'Early Pregnancy Viability & Dating Scan (6–11 Weeks)',
          details: 'Confirms intrauterine pregnancy, gestational age, cardiac pulsation, and rules out ectopic gestation.',
        },
        {
          name: 'Detailed Fetal Anomaly Scan (18–22 Weeks)',
          details: 'Meticulous anatomical survey: brain ventricles, 4-chamber heart, spine, kidneys, stomach bubble, facial cleft, limbs, and placental site.',
        },
        {
          name: 'Live 3D / 4D HD-Live Fetal Imaging',
          details: 'Photorealistic surface rendering capturing baby’s smiles, yawns, fingers, and facial movements with keepsake digital photos.',
        },
        {
          name: 'Fetal Biophysical Profile & Umbilical Doppler',
          details: 'Monitors placental resistance, amniotic fluid index (AFI), fetal breathing, and gross body movements for high-risk pregnancies.',
        },
      ],
      prep: 'Drink 4–5 glasses of water 1 hour prior for early pregnancy scans to ensure an acoustically acoustic full bladder window.',
    },
    {
      id: 'abdominopelvic',
      name: 'Abdominal & Pelvic Ultrasound',
      icon: Waves,
      tagline: 'Multi-Organ Internal Assessment',
      description: 'High-definition soundwave penetration evaluating the vital visceral organs of the upper abdomen and pelvis.',
      scans: [
        {
          name: 'Upper Abdominal Sonogram',
          details: 'Evaluates liver parenchymal texture, gallbladder calculi/cholecystitis, common bile duct dilation, pancreas, spleen, and both kidneys.',
        },
        {
          name: 'Pelvic & Urological Sonogram',
          details: 'Measures urinary bladder wall thickness, post-void residual urine, transabdominal prostate volume in men, and uterus/ovaries in women.',
        },
        {
          name: 'Renal & Ureteric Focused Scan',
          details: 'Screens for hydronephrosis, renal calculi, cysts, medical renal disease, and perinephric fluid.',
        },
      ],
      prep: 'Upper Abdomen requires 6–8 hours fasting (water permitted) to keep the gallbladder distended. Pelvic scan requires a full bladder.',
    },
    {
      id: 'transvaginal',
      name: 'Transvaginal Scan (TVS)',
      icon: Eye,
      tagline: 'Endocavitary Gynecological Precision',
      description: 'Specialized high-frequency probe positioned close to pelvic organs for unmatched resolution of reproductive anatomy.',
      scans: [
        {
          name: 'Uterine Fibroid & Adenomyosis Mapping',
          details: 'Pinpoints exact intramural, submucosal, or subserosal fibroid locations and measures uterine dimensions for fertility planning.',
        },
        {
          name: 'Ovarian Morphology & Folliculometry',
          details: 'Characterizes complex ovarian cysts, polycystic ovary syndrome (PCOS) follicle counts, and serial ovulation tracking for assisted conception.',
        },
        {
          name: 'Early Ectopic Pregnancy Rule-out',
          details: 'Identifies adnexal gestational masses weeks before transabdominal ultrasound can detect them.',
        },
      ],
      prep: 'Requires an empty bladder immediately before the scan. Conducted with maximum gentleness and privacy by female sonographers or chaperoned consultants.',
    },
    {
      id: 'vascular',
      name: 'Vascular Doppler & Small Parts',
      icon: Activity,
      tagline: 'Hemodynamic Blood Flow & Superficial Glands',
      description: 'Color and Power Doppler imaging of circulating blood velocities, carotid vessels, thyroid, breast, and scrotal tissues.',
      scans: [
        {
          name: 'Carotid & Vertebral Doppler',
          details: 'Measures carotid intima-media thickness (CIMT) and detects atherosclerotic plaques to evaluate stroke and TIA risk.',
        },
        {
          name: 'Lower Limb Venous Doppler (DVT Screen)',
          details: 'Evaluates femoral and popliteal vein compressibility and flow to rule out Deep Vein Thrombosis and venous insufficiency.',
        },
        {
          name: 'Thyroid & Neck Ultrasound (TI-RADS)',
          details: 'Differentiates benign colloid nodules from suspicious microcalcifications and characterizes goiters.',
        },
        {
          name: 'Breast Ultrasound (BI-RADS Classification)',
          details: 'Differentiates solid fibroadenomas from fluid-filled cysts in dense breast tissue; ideal for young women and targeted lump evaluations.',
        },
        {
          name: 'Scrotal & Testicular Color Doppler',
          details: 'Emergency diagnosis of testicular torsion vs. epididymo-orchitis, varicocele grading, and hydrocele evaluation.',
        },
      ],
      prep: 'No fasting or special preparation required. Wear comfortable, accessible clothing.',
    },
    {
      id: 'echo',
      name: 'Echocardiography (ECHO)',
      icon: HeartPulse,
      tagline: 'Transthoracic Cardiac Ultrasound',
      description: 'Real-time structural and hemodynamic evaluation of cardiac muscle, chambers, and valves.',
      scans: [
        {
          name: 'Transthoracic Echocardiogram (TTE)',
          details: 'Accurate quantification of Left Ventricular Ejection Fraction (LVEF%), regional wall motion abnormalities, and cardiomyopathy.',
        },
        {
          name: 'Color Doppler Valvular Assessment',
          details: 'Identifies aortic/mitral valve stenosis, regurgitation gradients, and pulmonary hypertension.',
        },
        {
          name: 'Pericardial Effusion & Tamponade Check',
          details: 'Rapid assessment of fluid collections surrounding the pericardial sac.',
        },
      ],
      prep: 'No preparation needed. Completely painless acoustic probe placed over the left chest.',
    },
  ];

  const currentCategory = ultrasoundCategories.find((c) => c.id === activeCategory);

  return (
    <section id="ultrasound-entails" className="py-20 sm:py-28 bg-teal-950/20 bg-gradient-to-b from-white via-teal-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs sm:text-sm font-bold text-teal-800 tracking-wider uppercase bg-teal-100 px-3.5 py-1.5 rounded-full border border-teal-200 inline-flex items-center gap-1.5">
            <Waves className="w-4 h-4 text-teal-700" />
            <span>Acoustic Wave Sonography</span>
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Diagnostic Ultrasound &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600">
              What It Entails
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Medical ultrasound is completely radiation-free, safe, and dynamic. At <strong>J-R Fountain Diagnostic Centre</strong>, we employ cutting-edge multifrequency transducers and high-definition Color Doppler to deliver crystal-clear anatomical resolution and hemodynamic insights.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="mt-10 flex items-center gap-2.5 overflow-x-auto pb-2 custom-scrollbar">
          {ultrasoundCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20 scale-102'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-2xs'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Showcase Card */}
        {currentCategory && (
          <div className="mt-8 bg-white border border-teal-100 rounded-3xl p-6 sm:p-10 shadow-xl shadow-teal-900/5 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-1">
                  {currentCategory.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentCategory.name}
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                  {currentCategory.description}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 shrink-0 self-start md:self-auto">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Radiation-Free</span>
              </span>
            </div>

            {/* List of Investigations in this Category */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {currentCategory.scans.map((scan, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-teal-50/30 hover:border-teal-200 transition-colors"
                >
                  <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{scan.name}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed pl-6">
                    {scan.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Preparation Guideline Box */}
            <div className="mt-8 p-4 sm:p-5 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Preparation Guideline for this Scan:
                </h5>
                <p className="text-xs sm:text-sm text-amber-800 mt-0.5 leading-relaxed">
                  {currentCategory.prep}
                </p>
              </div>
            </div>

            {/* Bottom Booking Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Printed photo report + digital clips + signed consultant sonologist report.
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${encodeURIComponent(`Hello J-R Fountain Diagnostic, I want to book an appointment for: ${currentCategory.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href="#request-form"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <span>Lab/Scan Request Form</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
