'use client';

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Activity, 
  MessageCircle, 
  CalendarCheck,
  ChevronRight,
  Stethoscope
} from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function Navbar({ selectedTestsCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Lab Testing', href: '#laboratory-entails' },
    { name: 'Digital X-Ray', href: '#xray-entails' },
    { name: 'Ultrasound/Scans', href: '#ultrasound-entails' },
    { name: 'Hospital Referrals', href: '#referral-portal' },
    { name: 'Test Directory', href: '#services' },
    { name: 'Request Form', href: '#request-form' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent("Hello J-R Fountain Diagnostic Centre, I would like to make an inquiry regarding diagnostic investigations.");
    window.open(`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs sm:text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-teal-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>Opp. Lekan Salami Stadium, Ekotedo, Ibadan</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>Mon - Fri: 7:30AM - 6:00PM | Sat: 8:00AM - 4:00PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${CLINICAL_INFORMATION.phoneInternational}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-bold text-white">{CLINICAL_INFORMATION.phoneDisplay}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <button 
              onClick={handleWhatsAppClick}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Reception</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2.5 shadow-md' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6 text-teal-300" />
            </div>
            <div>
              <span className="block font-black text-slate-900 tracking-tight text-lg sm:text-xl leading-none">
                J-R FOUNTAIN
              </span>
              <span className="block text-[10.5px] font-extrabold text-teal-700 uppercase tracking-widest mt-0.5">
                Diagnostic Centre
              </span>
              <span className="hidden sm:block text-[9.5px] italic text-slate-500 font-medium">
                "In thy light shall we see light" &bull; Ps 36:9
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-700 hover:text-teal-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#referral-portal"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-900 font-bold text-xs border border-teal-200 transition-colors"
            >
              <Stethoscope className="w-3.5 h-3.5 text-teal-700" />
              <span>Doctor Referrals</span>
            </a>

            <a
              href="#request-form"
              className="relative inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-lg font-bold text-xs shadow-md shadow-teal-700/20 transition-all hover:scale-102"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book / Request Test</span>
              {selectedTestsCount > 0 && (
                <span className="bg-amber-400 text-slate-900 font-black rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {selectedTestsCount}
                </span>
              )}
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="#request-form"
              className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book</span>
              {selectedTestsCount > 0 && (
                <span className="bg-amber-400 text-slate-900 font-black rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
                  {selectedTestsCount}
                </span>
              )}
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="xl:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl transition-all">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#referral-portal"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-teal-50 border border-teal-200 text-teal-900 font-bold py-2.5 px-4 rounded-xl text-sm"
              >
                <Stethoscope className="w-4 h-4 text-teal-700" />
                <span>Doctor &amp; Hospital Partnership Portal</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (0701 787 4107)</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
