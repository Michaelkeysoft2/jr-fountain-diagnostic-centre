'use client';

import React from 'react';
import { 
  HeartPulse, 
  CalendarCheck, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileText, 
  MapPin, 
  Sparkles,
  FlaskConical,
  Scan,
  Waves,
  Building2,
  ChevronRight
} from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function Hero() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello J-R Fountain Diagnostic Centre! I would like to inquire or book an appointment for diagnostic investigations."
    );
    window.open(`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-12 lg:pb-24">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute -top-12 -left-12 w-96 h-96 rounded-full bg-teal-200/50 blur-3xl" />
        <div className="absolute top-1/4 -right-12 w-96 h-96 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scripture Motto Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/90 border border-teal-200 text-teal-900 text-xs sm:text-sm font-semibold shadow-2xs">
            <Sparkles className="w-4 h-4 text-teal-700" />
            <span>"For with thee is the fountain of life: in thy light shall we see light" &bull; Psalm 36:9</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call-to-actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Modern Medical Diagnostics,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600">
                X-Ray, Ultrasound &amp; Lab Medicine
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <strong className="text-slate-900">J-R Fountain Diagnostic Centre</strong>, Ibadan. We deliver hospital-grade clinical precision across automated laboratory chemistry, digital low-dose radiography, 3D/4D ultrasound scans, 24-hour ambulatory cardiac monitoring, and direct physician referral partnerships.
            </p>

            {/* 4 Interactive Modality Quick-Badges */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto lg:mx-0">
              <a 
                href="#laboratory-entails"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-teal-400 hover:bg-teal-50/40 transition-all text-xs font-bold text-slate-800 shadow-2xs group"
              >
                <FlaskConical className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <span>Clinical Lab</span>
              </a>

              <a 
                href="#xray-entails"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/40 transition-all text-xs font-bold text-slate-800 shadow-2xs group"
              >
                <Scan className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span>Digital X-Ray</span>
              </a>

              <a 
                href="#ultrasound-entails"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-teal-400 hover:bg-teal-50/40 transition-all text-xs font-bold text-slate-800 shadow-2xs group"
              >
                <Waves className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <span>3D/4D Scan</span>
              </a>

              <a 
                href="#referral-portal"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/40 transition-all text-xs font-bold text-slate-800 shadow-2xs group"
              >
                <Building2 className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                <span>Hospital Link</span>
              </a>
            </div>

            {/* Main Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <a
                href="#request-form"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md shadow-teal-700/25 transition-all hover:scale-102"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Lab &amp; Scan Request Form</span>
              </a>

              <a
                href="#referral-portal"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-2xs transition-all hover:border-teal-400"
              >
                <Building2 className="w-5 h-5 text-teal-700" />
                <span>Doctor &amp; Hospital Referrals</span>
              </a>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-2xs transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Desk</span>
              </button>
            </div>

            {/* Address */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center gap-2 text-xs text-slate-600 justify-center lg:justify-start">
              <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
              <span>No 72, Adekunle Fajuyi Rd (Remilekun House), Opp Lekan Salami Stadium, Ekotedo, Ibadan</span>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative z-10">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-800">
                      <HeartPulse className="w-7 h-7 text-teal-700 animate-pulse" />
                    </div>
                    <div>
                      <h2 className="font-extrabold text-slate-900 text-base">J-R Fountain Diagnostic</h2>
                      <p className="text-xs text-slate-500">Tertiary Diagnostic Suite &bull; Ibadan</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Facility Open
                  </span>
                </div>

                <div className="py-5 space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Fast Turnaround</div>
                      <div className="text-sm font-bold text-slate-800">Stat Cardiac &amp; Renal Panels</div>
                    </div>
                    <span className="text-xs font-extrabold text-teal-700 bg-teal-100/70 px-2.5 py-1 rounded-md">
                      45–90 Mins
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-100">
                      <Clock className="w-4 h-4 text-teal-700 mb-1" />
                      <div className="text-xs font-bold text-slate-900">Same-Day Results</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Direct WhatsApp PDF delivery</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-cyan-50/60 border border-cyan-100">
                      <ShieldCheck className="w-4 h-4 text-cyan-700 mb-1" />
                      <div className="text-xs font-bold text-slate-900">Hospital Preferred</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Direct physician correlation</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Automated Clinical Pathology &amp; Hormonal Immunoassays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Low-Dose Digital Flat-Panel Chest &amp; Skeletal X-Ray</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>High-Resolution 3D/4D Obstetric &amp; Abdominal Sonograms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>24-Hour Ambulatory Blood Pressure &amp; Holter ECG</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Liaison &amp; Bookings:</span>
                  <a href="tel:+2347017874107" className="font-extrabold text-teal-800 hover:underline">
                    0701 787 4107
                  </a>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-tr from-teal-600 to-cyan-500 -z-10 opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
