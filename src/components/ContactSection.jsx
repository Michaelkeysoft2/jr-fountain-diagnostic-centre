'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Navigation,
  ExternalLink
} from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function ContactSection() {
  const [inquiry, setInquiry] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
`*WEBSITE ENQUIRY - J-R FOUNTAIN DIAGNOSTIC CENTRE*
Name: ${inquiry.name}
Phone: ${inquiry.phone}
Email: ${inquiry.email || 'N/A'}
Subject: ${inquiry.subject || 'General Enquiry'}
Message: ${inquiry.message}`
    );
    window.open(`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-teal-700 tracking-wider uppercase bg-teal-100/70 px-3.5 py-1.5 rounded-full border border-teal-200">
            Get in Touch
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact J-R Fountain Diagnostic Centre
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Have questions about a test, need directions to our centre in Ekotedo, Ibadan, or want to discuss clinical partnership? We are here to help.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Official Clinical Details</h3>

              <div className="space-y-4">
                {/* Physical Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Facility Address</span>
                    <p className="text-sm font-medium text-slate-800 mt-0.5 leading-relaxed">
                      {CLINICAL_INFORMATION.address}
                    </p>
                    <a
                      href={CLINICAL_INFORMATION.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-800 mt-1"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Hotline</span>
                    <a
                      href={`tel:${CLINICAL_INFORMATION.phoneInternational}`}
                      className="text-sm font-bold text-slate-900 hover:text-teal-700 mt-0.5 block"
                    >
                      {CLINICAL_INFORMATION.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Lab Reception</span>
                    <a
                      href={`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${encodeURIComponent("Hello J-R Fountain Diagnostic Centre, I need assistance.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-700 hover:text-emerald-800 mt-0.5 block"
                    >
                      Chat on WhatsApp (+234 701 787 4107)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Official Email</span>
                    <a
                      href={`mailto:${CLINICAL_INFORMATION.email}`}
                      className="text-sm font-medium text-slate-800 hover:text-teal-700 mt-0.5 block break-all"
                    >
                      {CLINICAL_INFORMATION.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Opening Hours</span>
                    <div className="text-xs text-slate-700 space-y-1 mt-1">
                      <p><strong className="text-slate-900">Mon – Fri:</strong> 7:30 AM – 6:00 PM</p>
                      <p><strong className="text-slate-900">Saturday:</strong> 8:00 AM – 4:00 PM</p>
                      <p><strong className="text-slate-900">Sunday:</strong> Emergency / On-call</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Map Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between pb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-teal-700" />
                  <span>Facility Location Map</span>
                </span>
                <span className="text-[11px] text-teal-700 font-semibold">Ibadan, Oyo State</span>
              </div>
              <div className="w-full h-48 rounded-xl bg-slate-100 overflow-hidden relative border border-slate-200">
                <iframe
                  title="J-R Fountain Diagnostic Centre Map"
                  src="https://maps.google.com/maps?q=72%20Adekunle%20Fajuyi%20Road,%20Ibadan,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-2 text-center">
                Opposite Lekan Salami Stadium Shopping Complex, Ekotedo, Ibadan.
              </p>
            </div>
          </div>

          {/* Right General Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Send an Enquiry / Message</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Have specific questions regarding testing fees, corporate wellness, or hospital partnerships? Drop us a message.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiry.name}
                    onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiry.phone}
                    onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                    placeholder="080... or 070..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={inquiry.email}
                    onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Subject / Department
                  </label>
                  <select
                    value={inquiry.subject}
                    onChange={(e) => setInquiry({ ...inquiry, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none bg-white"
                  >
                    <option value="Diagnostic Test Inquiries">Diagnostic Test Inquiries</option>
                    <option value="Cardiac Studies & ECG Appointment">Cardiac Studies &amp; ECG Appointment</option>
                    <option value="Home Phlebotomy Service">Home Phlebotomy Service</option>
                    <option value="Doctor / Hospital Referral Workup">Doctor / Hospital Referral Workup</option>
                    <option value="Corporate / Pre-employment Screening">Corporate / Pre-employment Screening</option>
                    <option value="Other Enquiries">Other Enquiries</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Message / Clinical Query <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiry.message}
                  onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                  placeholder="How can our clinical diagnostic team assist you today?"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                />
              </div>

              {submitted && (
                <div className="p-3.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your message has been opened in WhatsApp for instant response!</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-all hover:shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Send Enquiry to Lab Desk</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
