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
  Award,
  Sparkles
} from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function Hero() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello J-R Fountain Diagnostic Centre! I would like to book an appointment or get details on your diagnostic tests."
    );
    window.open(`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute -top-12 -left-12 w-96 h-96 rounded-full bg-teal-200/50 blur-3xl" />
        <div className="absolute top-1/4 -right-12 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Biblical Motto Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs sm:text-sm font-semibold shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>"For with thee is the fountain of life: in thy light shall we see light" &bull; Psalm 36:9</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Precision Medical Diagnostics &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600">
                Cardiac Studies
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <strong className="text-slate-900">J-R Fountain Diagnostic Centre</strong>, Ibadan. We deliver accurate, rapid, and compassionate diagnostic testing—from standard clinical chemistry and haematology to sophisticated 24-hour cardiac monitoring and tumour markers.
            </p>

            {/* Key Service Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {[
                'Cardiac Studies (ECG & ABPM)',
                'Kidney & Liver Function',
                'Tumour Markers (PSA, CEA)',
                'Hormonal Profiles',
                'Microbiology & Histopathology',
              ].map((item, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200/90 rounded-md text-xs font-semibold text-slate-700 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <a
                href="#request-form"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md shadow-teal-700/25 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Fill Lab Request Form</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-sm transition-all hover:border-slate-400"
              >
                <FileText className="w-5 h-5 text-teal-700" />
                <span>Browse All 50+ Tests</span>
              </a>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Desk</span>
              </button>
            </div>

            {/* Quick Contact & Physical Address Snippet */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-600 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
                <span>No 72, Adekunle Fajuyi Rd (Remilekun House), Opp Lekan Salami Stadium, Ekotedo, Ibadan</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card / Feature Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glass Card */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-100 relative z-10">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-800">
                      <HeartPulse className="w-6 h-6 text-teal-700 animate-pulse" />
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-900 text-base">J-R Fountain Diagnostic</h2>
                      <p className="text-xs text-slate-500">Official Clinical Requisition</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Open Today
                  </span>
                </div>

                <div className="py-5 space-y-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Fast Turnaround Reports
                    </div>
                    <div className="text-sm font-bold text-slate-800 flex items-center justify-between">
                      <span>Emergency Cardiac &amp; Renal Panels</span>
                      <span className="text-teal-700 font-extrabold text-xs bg-teal-50 px-2 py-0.5 rounded">STAT / 1-3 hrs</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="p-3 rounded-lg bg-teal-50/60 border border-teal-100">
                      <Clock className="w-4 h-4 text-teal-700 mb-1" />
                      <div className="text-xs font-bold text-slate-900">Same-Day Results</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Automated SMS &amp; WhatsApp PDF</div>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100">
                      <ShieldCheck className="w-4 h-4 text-blue-700 mb-1" />
                      <div className="text-xs font-bold text-slate-900">100% Confidential</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Secure, encrypted patient records</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0 text-teal-800 font-bold text-[10px]">1</div>
                      <span>Routine &amp; Specialized Laboratory Tests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0 text-teal-800 font-bold text-[10px]">2</div>
                      <span>24-Hour Ambulatory Blood Pressure &amp; Holter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0 text-teal-800 font-bold text-[10px]">3</div>
                      <span>Direct Referring Physician Reports</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Hotline:</span>
                  <a href="tel:+2347017874107" className="font-bold text-teal-800 hover:underline">
                    0701 787 4107
                  </a>
                </div>
              </div>

              {/* Decorative Accent Glow */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-tr from-teal-600 to-cyan-500 -z-10 opacity-20 blur-lg" />
            </div>
          </div>
        </div>

        {/* 4 Pillars Bottom Grid */}
        <div className="mt-14 pt-10 border-t border-slate-200/70 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-teal-800">50+</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">Diagnostic Tests</div>
            <p className="text-xs text-slate-500 mt-0.5">Covering all medical disciplines</p>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-teal-800">24/7</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">Holter &amp; ABPM Tech</div>
            <p className="text-xs text-slate-500 mt-0.5">Continuous clinical monitoring</p>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-teal-800">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">Quality Assurance</div>
            <p className="text-xs text-slate-500 mt-0.5">Calibrated analyzers &amp; QC controls</p>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-teal-800">Fast</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">Digital Delivery</div>
            <p className="text-xs text-slate-500 mt-0.5">Direct to patient &amp; doctor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
