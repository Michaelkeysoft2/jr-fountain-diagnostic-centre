import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  CheckCircle2, 
  Users, 
  Microscope 
} from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-teal-700 tracking-wider uppercase bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            About Our Diagnostic Centre
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Committed to Accurate Diagnostic Excellence &amp; Compassionate Care
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            At <strong>J-R Fountain Diagnostic Centre</strong>, we believe every medical diagnosis is a beacon of hope and guidance for healing. Located conveniently in Ekotedo, Ibadan, our facility bridges clinical precision with genuine patient empathy.
          </p>
        </div>

        {/* Biblical Quote Card */}
        <div className="mt-10 max-w-4xl mx-auto bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 text-center">
            <span className="text-teal-300 text-xs uppercase tracking-widest font-semibold block mb-2">
              Our Guiding Biblical Inscription
            </span>
            <blockquote className="text-lg sm:text-2xl font-serif italic text-teal-50">
              "{CLINICAL_INFORMATION.motto}"
            </blockquote>
            <cite className="block mt-3 text-sm font-bold text-teal-300 not-italic">
              — {CLINICAL_INFORMATION.scriptureRef}
            </cite>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 sm:p-8 relative hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-800 mb-5">
              <Target className="w-6 h-6 text-teal-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
              To provide clinicians, hospitals, and patients with the most reliable, reproducible, and rapid diagnostic laboratory investigations and cardiac evaluations, utilizing modern clinical technology with strict quality control and compassionate customer support.
            </p>
            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Zero compromise on calibration and sample integrity</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Prompt diagnostic turnarounds for emergency care</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Seamless reporting to consulting physicians</span>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 sm:p-8 relative hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800 mb-5">
              <Eye className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
              To be the most trusted clinical and cardiovascular diagnostic hub across Ibadan and southwestern Nigeria, setting the highest standard for diagnostic fidelity, medical ethics, patient satisfaction, and doctor-preferred lab investigations.
            </p>
            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Affordable, accessible diagnostic tests for everyone</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Continuous technological adoption in cardiac and molecular tests</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>A warm, dignified, and patient-first clinical environment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-14 pt-10 border-t border-slate-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Our Core Values</h3>
            <p className="text-slate-500 text-sm mt-1">The foundational principles that guide every specimen we process.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Clinical Integrity',
                desc: 'Uncompromising adherence to scientifically validated protocols, internal standards, and clinical accuracy.',
                icon: ShieldCheck,
                color: 'text-teal-700 bg-teal-50',
              },
              {
                title: 'Patient Empathy',
                desc: 'Treating every person with gentleness, dignity, and prompt attention throughout their diagnostic journey.',
                icon: Heart,
                color: 'text-rose-700 bg-rose-50',
              },
              {
                title: 'Technological Excellence',
                desc: 'Leveraging automated chemistry analyzers, digital ECG, and modern diagnostic equipment.',
                icon: Microscope,
                color: 'text-indigo-700 bg-indigo-50',
              },
              {
                title: 'Medical Confidentiality',
                desc: 'Strict non-disclosure and encrypted preservation of your personal and clinical health records.',
                icon: Award,
                color: 'text-emerald-700 bg-emerald-50',
              },
            ].map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-teal-300 transition-colors">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${val.color} mb-3`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{val.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
