'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  CheckCircle2, 
  Building2, 
  Microscope,
  Stethoscope 
} from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-teal-700 tracking-wider uppercase bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
            About Our Diagnostic Centre
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Setting the Benchmark for Diagnostic Precision &amp; Ethical Clinical Care
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            At <strong>J-R Fountain Diagnostic Centre</strong>, we believe every medical report is a sacred roadmap for physician intervention and patient restoration. Located opposite Lekan Salami Stadium in Ekotedo, Ibadan, our centre unites hospital-grade automation with unmatched clinical empathy.
          </p>
        </div>

        {/* Biblical Motto Card */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-teal-950 via-teal-900 to-slate-900 text-white rounded-3xl p-7 sm:p-10 shadow-xl relative overflow-hidden border border-teal-800/40">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 text-center">
            <span className="text-teal-300 text-xs uppercase tracking-widest font-semibold block mb-2">
              Our Foundational Scripture
            </span>
            <blockquote className="text-xl sm:text-3xl font-serif italic text-teal-50">
              "{CLINICAL_INFORMATION.motto}"
            </blockquote>
            <cite className="block mt-3 text-sm font-bold text-amber-300 not-italic">
              — {CLINICAL_INFORMATION.scriptureRef}
            </cite>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-800 mb-5">
                <Target className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                To provide clinicians, hospitals, and patients across Oyo State with the most accurate, reproducible, and rapid diagnostic laboratory results, digital X-rays, and sonograms—utilizing automated clinical technology, zero-tolerance quality assurance, and compassionate patient handling.
              </p>
            </div>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700 border-t border-slate-200 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Zero compromise on internal quality controls and calibration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Urgent STAT turnaround for emergency hospital referrals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Seamless real-time reporting to consulting physicians</span>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-800 mb-5">
                <Eye className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                To be the foremost cardiovascular, imaging, and laboratory diagnostic center in southwestern Nigeria—recognized as the preferred referral destination for leading physicians, multi-specialty hospitals, and health-conscious families.
              </p>
            </div>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700 border-t border-slate-200 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Equitable access to modern diagnostic imaging and pathology</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Continuous technological adoption in cardiac and molecular tests</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>A warm, dignified, and patient-first clinical environment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
