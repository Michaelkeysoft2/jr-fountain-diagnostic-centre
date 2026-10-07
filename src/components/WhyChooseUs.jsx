import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Cpu, 
  Lock, 
  Clock, 
  CheckCircle2, 
  FileSpreadsheet, 
  Sparkles 
} from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Rigorous Quality Standards',
      desc: 'Our laboratory adheres to stringent internal and external quality control protocols, continuous calibration checks, and standardized reference ranges for utmost reliability.',
      badge: 'Certified Quality',
    },
    {
      icon: UserCheck,
      title: 'Qualified Professionals',
      desc: 'Run by experienced Medical Laboratory Scientists, Consultant Pathologists, and registered clinical staff dedicated to precision and ethical diagnostic service.',
      badge: 'Expert Team',
    },
    {
      icon: Cpu,
      title: 'Modern Diagnostic Equipment',
      desc: 'State-of-the-art automated clinical chemistry analyzers, 12-lead ECG, 24-hour ambulatory blood pressure monitors, and spectrophotometric diagnostic platforms.',
      badge: 'Advanced Tech',
    },
    {
      icon: Lock,
      title: 'Total Medical Confidentiality',
      desc: 'Your medical health records, test results, and personal information are treated with the highest ethical confidentiality and delivered directly through secure channels.',
      badge: '100% Privacy',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Highlights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-teal-400 tracking-wider uppercase bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-800">
            Our Standard of Care
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Why Patients &amp; Doctors Choose J-R Fountain
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Diagnostic accuracy is the foundation of appropriate medical treatment. We provide diagnostic results that clinical consultants, referring physicians, and patients can rely on without hesitation.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-7 hover:border-teal-500/50 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-700/60 text-teal-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Workflow / Turnaround Assurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-950/90 to-slate-800/90 border border-teal-800/60 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-300 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Emergency Stat Testing &amp; Routine Swift Turnaround</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Critical results like Troponin, Electrolytes, and Blood Counts are flagged immediately for emergency medical attention.
              </p>
            </div>
          </div>

          <a
            href="#request-form"
            className="shrink-0 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            Book Your Test Now
          </a>
        </div>
      </div>
    </section>
  );
}
