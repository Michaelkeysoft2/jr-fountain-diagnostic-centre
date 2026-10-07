'use client';

import React from 'react';
import { 
  Scan, 
  ShieldAlert, 
  Zap, 
  Clock, 
  FileCheck, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Bone, 
  Activity,
  Layers
} from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function XrayEntailsSection() {
  const xrayExaminations = [
    {
      title: 'Digital Chest Radiography (CXR)',
      views: 'PA, AP, Lateral, & Apical Lordotic Views',
      indications: 'Cardiomegaly evaluation, lung infections, pulmonary tuberculosis (TB), pneumonia, occupational medical fitness, pre-surgery & visa medical examinations.',
      speed: 'Instant Capture • Report in 1–2 hours',
    },
    {
      title: 'Musculoskeletal & Skeletal X-Rays',
      views: 'Spine (Cervical, Thoracic, Lumbar), Pelvis, Hip, Extremities',
      indications: 'Acute fractures, joint dislocations, degenerative disc disease, spondylosis, osteoarthritis, trauma evaluation, and bone mineralization.',
      speed: 'Instant Capture • High-resolution bony trabeculae',
    },
    {
      title: 'Abdominal & Pelvic (KUB) X-Rays',
      views: 'Kidneys, Ureters & Bladder (KUB), Erect & Supine Abdomen',
      indications: 'Radiopaque renal & bladder stones (calculi), acute intestinal obstruction, air-fluid levels, and suspected visceral perforation.',
      speed: 'Same-day urgent radiologist sign-off',
    },
    {
      title: 'Paranasal Sinuses (PNS) & Skull X-Rays',
      views: "Water's View, Caldwell View, Lateral Skull",
      indications: 'Chronic sinusitis, fluid levels in maxillary sinuses, nasal bone fractures, and head trauma evaluation.',
      speed: 'Instant capture • Clear sinus air space review',
    },
  ];

  const safetyAndWorkflow = [
    {
      icon: Zap,
      title: 'Ultra-Low Radiation Exposure',
      description: 'Our high-frequency Digital Radiography (DR) flat-panel detector reduces radiation doses by up to 60% compared to legacy film X-rays while producing superior diagnostic contrast.',
    },
    {
      icon: ShieldAlert,
      title: 'ALARA Radiation Safety Protocols',
      description: 'Strict adherence to "As Low As Reasonably Achievable" (ALARA) standards. We provide lead aprons, thyroid collars, and gonad shielding, with careful screening for pregnancy.',
    },
    {
      icon: Eye,
      title: 'Consultant Radiologist Dual-Read',
      description: 'Every single X-ray image is interpreted and officially reported by certified Consultant Radiologists, ensuring subtle fractures or apical lung lesions are never overlooked.',
    },
    {
      icon: FileCheck,
      title: 'Instant Digital DICOM & Film Output',
      description: 'Receive your high-resolution digital image on high-grade medical film or sent immediately via encrypted WhatsApp/Email link and DICOM file for your surgeon or physician.',
    },
  ];

  return (
    <section id="xray-entails" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs sm:text-sm font-bold text-cyan-400 tracking-wider uppercase bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-800 inline-flex items-center gap-1.5">
            <Scan className="w-4 h-4 text-cyan-400" />
            <span>Diagnostic Imaging Modality</span>
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Digital X-Ray Radiography &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              What It Entails
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Digital Radiography is essential for chest diagnostics, skeletal trauma, and internal organ evaluation. We utilize modern flat-panel digital technology to provide crystal-clear bone and soft-tissue imaging with minimal radiation dosage.
          </p>
        </div>

        {/* 4 Pillars of X-Ray Safety & What It Entails */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyAndWorkflow.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-7 hover:border-cyan-500/60 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* X-Ray Examination Catalog Grid */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Full Radiographic Menu</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Available for walk-in patients and hospital referrals with zero wait time.</p>
            </div>
            <span className="text-xs font-bold text-cyan-300 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800 shrink-0">
              High-Frequency Flat-Panel System
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {xrayExaminations.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 border border-slate-700/90 rounded-2xl p-6 sm:p-7 hover:bg-slate-800/80 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h4>
                  <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950/90 px-2.5 py-1 rounded-md shrink-0">
                    {item.speed}
                  </span>
                </div>

                <div className="mt-3">
                  <span className="text-xs font-semibold text-teal-300">Standard Views:</span>{' '}
                  <span className="text-xs text-slate-300">{item.views}</span>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Clinical Purpose:</strong> {item.indications}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* X-Ray Patient Guidance Notice */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-slate-800/90 border border-cyan-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0">
              <Bone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Preparation for Your X-Ray Examination</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Wear loose clothing without metal buttons or zippers. Jewelry, necklaces, and body piercings around the scanned area must be removed prior to exposure.
              </p>
            </div>
          </div>
          <a
            href="#request-form"
            className="shrink-0 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
          >
            Book an X-Ray
          </a>
        </div>
      </div>
    </section>
  );
}
