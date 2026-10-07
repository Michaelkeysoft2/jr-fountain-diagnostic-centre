'use client';

import React, { useState } from 'react';
import { 
  FlaskConical, 
  Dna, 
  ShieldCheck, 
  Clock, 
  Microscope, 
  CheckCircle2, 
  AlertCircle,
  FileCheck2,
  ChevronRight,
  Layers,
  ThermometerSnowflake,
  Send
} from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function LabEntailsSection() {
  const [activeTab, setActiveTab] = useState('workflow');

  const departments = [
    {
      title: 'Clinical Chemistry & Enzymology',
      description: 'Quantification of metabolic biomarkers: Kidney function (Creatinine, Urea, Electrolytes), Liver enzymes (ALT, AST, ALP, Bilirubin), Fasting Lipids, and Cardiac markers (hs-Troponin, CK-MB).',
      tests: ['Renal Panel (E&U + Cr)', 'Liver Function (LFT)', 'Lipid Profile', 'Cardiac Troponin I', 'HbA1c & Fasting Glucose'],
    },
    {
      title: 'Haematology & Haemostasis',
      description: 'Comprehensive evaluation of blood cells, clotting cascades, and hemoglobinopathies using 5-part automated hematology analyzers and coagulation timers.',
      tests: ['Complete Blood Count (CBC/FBC)', 'ESR (Westergren)', 'Coagulation (PT/INR, APTT)', 'D-Dimer Assay', 'Hb Electrophoresis Genotype'],
    },
    {
      title: 'Microbiology & Infectious Diseases',
      description: 'Identification of bacterial and fungal pathogens through automated culture incubation and Kirby-Bauer / MIC antibiotic sensitivity profiles.',
      tests: ['Urine & Blood M/C/S', 'Wound & Swab Cultures', 'Stool Parasitology', 'H. Pylori Antigen', 'Widal Agglutination'],
    },
    {
      title: 'Immunology, Endocrinology & Tumour Markers',
      description: 'High-sensitivity chemiluminescent immunoassays (CLIA) for hormonal profiling, fertility workups, thyroid evaluation, and oncological tumour screening.',
      tests: ['Hormonal Profile (FSH, LH, PRL, Prog)', 'Thyroid Panel (TSH, FT3, FT4)', 'PSA (Total & Free)', 'CEA, CA-125, AFP', 'Hepatitis B & C / HIV Serology'],
    },
    {
      title: 'Histopathology & Cytopathology',
      description: 'Microscopic tissue diagnosis by Consultant Pathologists on surgical biopsies, excision specimens, fine needle aspirates (FNAC), and cervical Pap smears.',
      tests: ['Surgical Biopsy Reporting', 'Cervical Pap Smear Cytology', 'FNAC Evaluation', 'Bone Marrow Aspirate Review'],
    },
  ];

  const workflowSteps = [
    {
      phase: '1. Pre-Analytical Phase',
      title: 'Aseptic Sample Collection & Preservation',
      points: [
        'Gentle, sterile phlebotomy by certified medical phlebotomists using BD Vacutainer® vacuum systems.',
        'Strict barcode labeling tied to unique patient hospital identifiers to prevent specimen mix-ups.',
        'Pre-test compliance checks (verification of required 8–12h fasting, medication history, and timing).',
        'Continuous cold-chain sample preservation and temperature-monitored centrifuging.',
      ],
      icon: ThermometerSnowflake,
      tag: 'Integrity First',
    },
    {
      phase: '2. Analytical Phase',
      title: 'Automated Processing & Rigorous Calibration',
      points: [
        'Processing via fully automated clinical chemistry and hematology platforms with zero manual pipetting errors.',
        'Daily multi-level Internal Quality Control (IQC) running standard reference sera before clinical specimens.',
        'Immediate duplicate re-testing of any borderline or anomalous pathological result.',
        'Bi-weekly calibration protocols traceable to international reference materials.',
      ],
      icon: Microscope,
      tag: 'Zero Compromise',
    },
    {
      phase: '3. Post-Analytical Phase',
      title: 'Pathologist Verification & Rapid Turnaround',
      points: [
        'Dual-signoff by registered Medical Laboratory Scientists and review by Consultant Pathologists.',
        'STAT Critical Alerts: Panic/Life-threatening values (e.g. severe hypokalemia, acute Troponin spike) are phoned immediately to the attending physician within 15 minutes.',
        'Automated encrypted PDF result dispatch to patient & doctor via WhatsApp and Email.',
        'Certified physical tamper-proof hardcopy results archived for future clinical comparison.',
      ],
      icon: FileCheck2,
      tag: 'Instant Delivery',
    },
  ];

  return (
    <section id="laboratory-entails" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <span className="text-xs sm:text-sm font-bold text-teal-700 tracking-wider uppercase bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-flex items-center gap-1.5">
            <FlaskConical className="w-4 h-4 text-teal-600" />
            <span>Core Diagnostic Modality</span>
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Clinical Laboratory Testing &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-cyan-600">
              What It Entails
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In modern medicine, over 70% of clinical decisions depend directly on laboratory investigations. At <strong>J-R Fountain Diagnostic Centre</strong>, we go far beyond running routine tests—we maintain a comprehensive clinical laboratory ecosystem engineered for surgical precision, zero error, and rapid doctor communication.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="mt-10 flex items-center gap-3 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'workflow'
                ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>The 3 Clinical Phases (What It Entails)</span>
          </button>

          <button
            onClick={() => setActiveTab('departments')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'departments'
                ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Laboratory Disciplines &amp; Menus</span>
          </button>
        </div>

        {/* Tab 1: Workflow Phases */}
        {activeTab === 'workflow' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 relative hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black tracking-wider uppercase text-teal-700 bg-teal-100/70 px-2.5 py-1 rounded-md">
                        {step.phase}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 uppercase">
                        {step.tag}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 mb-4 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {step.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200/80 text-xs font-semibold text-slate-500">
                    Strict adherence to ISO 15189 laboratory quality principles.
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Laboratory Departments */}
        {activeTab === 'departments' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {dept.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {dept.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Investigations:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dept.tests.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#request-form"
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                  >
                    <span>Request these tests</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Daily Processing
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lab Stat Bottom Callout */}
        <div className="mt-12 bg-gradient-to-r from-teal-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Emergency Critical Value Reporting Policy</h4>
            <p className="text-xs sm:text-sm text-teal-200 max-w-2xl">
              Any life-critical laboratory finding (e.g., severe electrolyte imbalance, impending diabetic ketoacidosis, acute troponin elevation) triggers an immediate telephone alert to the patient’s physician within 15 minutes.
            </p>
          </div>
          <a
            href={`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${encodeURIComponent("Hello J-R Fountain Lab, I want to inquire about urgent stat laboratory testing.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            Inquire on STAT Tests
          </a>
        </div>
      </div>
    </section>
  );
}
