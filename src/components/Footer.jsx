import React from 'react';
import { Activity, Phone, Mail, MapPin, HeartPulse, ArrowUp } from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      {/* Scripture Motto Strip */}
      <div className="bg-teal-900/60 border-b border-teal-800/40 py-4 px-4 text-center">
        <p className="text-teal-200 italic font-serif text-sm sm:text-base">
          "{CLINICAL_INFORMATION.motto}" &bull; <strong className="not-italic text-amber-300 font-sans font-bold">{CLINICAL_INFORMATION.scriptureRef}</strong>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: About & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block font-black text-white text-base tracking-tight">
                  {CLINICAL_INFORMATION.centreName}
                </span>
                <span className="block text-[11px] font-bold text-teal-400 uppercase tracking-wider">
                  Diagnostic &amp; Cardiovascular Lab
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing dependable clinical chemistry, haematology, microbiology, tumour markers, and 24-hour cardiac investigations in Ibadan, Nigeria.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300">Ekotedo, Ibadan, Oyo State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINICAL_INFORMATION.phoneInternational}`} className="text-white hover:text-teal-400 font-bold">
                  {CLINICAL_INFORMATION.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300 break-all">{CLINICAL_INFORMATION.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-teal-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-300 transition-colors">About the Centre</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Services Directory</a></li>
              <li><a href="#request-form" className="hover:text-teal-300 transition-colors">Lab Request Form</a></li>
              <li><a href="#why-us" className="hover:text-teal-300 transition-colors">Why Choose Us</a></li>
              <li><a href="#faqs" className="hover:text-teal-300 transition-colors">Patient FAQs</a></li>
              <li><a href="#contact" className="hover:text-teal-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Key Investigations */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Test Specialties
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Cardiac Studies &amp; ECG</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Renal / Kidney Panel</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Liver Function Tests</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Tumour &amp; Cancer Markers</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Hormonal Profile</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Haematology &amp; Genotype</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Microbiology &amp; Biopsy</a></li>
            </ul>
          </div>

          {/* Col 4: Operational Hours */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Hours of Service
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-300 font-semibold block">Mon – Fri:</span>
                <span className="text-slate-400">7:30 AM – 6:00 PM</span>
              </div>
              <div>
                <span className="text-slate-300 font-semibold block">Saturday:</span>
                <span className="text-slate-400">8:00 AM – 4:00 PM</span>
              </div>
              <div>
                <span className="text-slate-300 font-semibold block">Sunday:</span>
                <span className="text-slate-400">Emergency &amp; On-call</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-bold"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Attribution */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {CLINICAL_INFORMATION.centreName}. All rights reserved.
          </p>

          <p className="text-center md:text-right">
            Designed &amp; Developed by{' '}
            <a 
              href={CLINICAL_INFORMATION.developer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 font-semibold transition-colors"
            >
              {CLINICAL_INFORMATION.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
