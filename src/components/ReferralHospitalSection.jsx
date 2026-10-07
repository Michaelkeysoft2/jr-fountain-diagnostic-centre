'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Stethoscope, 
  Send, 
  Clock, 
  ShieldCheck, 
  FileSpreadsheet, 
  Truck, 
  PhoneCall, 
  CheckCircle2, 
  CheckSquare, 
  Award,
  Users2,
  Sparkles
} from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function ReferralHospitalSection() {
  const [partnerForm, setPartnerForm] = useState({
    hospitalName: '',
    directorName: '',
    cadre: 'Medical Director',
    phone: '',
    email: '',
    location: '',
    specialty: 'General Hospital / Multi-Specialty',
    servicesNeeded: [],
    requestRequisitionPads: true,
    requestSampleCourier: true,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service) => {
    setPartnerForm((prev) => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists 
          ? prev.servicesNeeded.filter((s) => s !== service)
          : [...prev.servicesNeeded, service],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!partnerForm.hospitalName || !partnerForm.directorName || !partnerForm.phone) {
      alert("Please enter the hospital/clinic name, contact doctor, and telephone number.");
      return;
    }

    const message = 
`*HOSPITAL & PHYSICIAN REFERRAL PARTNERSHIP REGISTRATION*
---------------------------------------
*Hospital/Clinic Name:* ${partnerForm.hospitalName}
*Lead Doctor / Director:* ${partnerForm.directorName} (${partnerForm.cadre})
*Phone / WhatsApp:* ${partnerForm.phone}
*Email:* ${partnerForm.email || 'N/A'}
*Location/Address in Ibadan:* ${partnerForm.location}
*Facility Specialty:* ${partnerForm.specialty}

*Services of Interest:*
${partnerForm.servicesNeeded.map((s) => `• ${s}`).join('\n') || 'All Diagnostic Specialties'}

*Supplies Requested:*
• Branded Requisition Booklets: ${partnerForm.requestRequisitionPads ? 'YES' : 'NO'}
• Hospital Courier Sample Pick-up: ${partnerForm.requestSampleCourier ? 'YES' : 'NO'}

*Additional Notes:*
${partnerForm.notes || 'None'}
---------------------------------------
_Sent via J-R Fountain Diagnostic Referral Portal_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  const referralPillars = [
    {
      icon: Clock,
      title: 'Priority STAT Emergency Queue',
      desc: 'Referred patient specimens and emergency imaging bypass routine queues. Results are prioritized, with abnormal critical findings phoned directly to you within 60–90 minutes.',
      tag: 'Rapid Response',
    },
    {
      icon: Send,
      title: 'Direct Doctor WhatsApp & Email Delivery',
      desc: 'Verified PDF results are transmitted immediately to your official consultation phone or email, enabling swift clinical decision-making before the patient even leaves our centre.',
      tag: 'Zero Delay',
    },
    {
      icon: PhoneCall,
      title: 'Dedicated Doctor Liaison & Second Opinions',
      desc: 'Direct telephone line to our Lab Director, Consultant Pathologists, and Consultant Radiologists for case reviews, unusual smear correlations, and clinical second opinions.',
      tag: 'Peer Support',
    },
    {
      icon: FileSpreadsheet,
      title: 'Free Requisition Pads & Phlebotomy Kits',
      desc: 'We equip your consulting rooms with complimentary branded clinical requisition booklets, sterile vacutainer tubes, EDTA bottles, and specimen transport supplies.',
      tag: 'Supplies Included',
    },
    {
      icon: Truck,
      title: 'Hospital Courier & Sample Pickup',
      desc: 'Our trained phlebotomy riders pick up blood, urine, or surgical biopsy specimens directly from your wards and outpatient clinics across Ibadan on a pre-set or on-call schedule.',
      tag: 'Courier Service',
    },
    {
      icon: Award,
      title: 'Institutional Billing & Retainership Accounts',
      desc: 'Flexible monthly or bi-weekly consolidated billing arrangements designed for private hospitals, HMO networks, maternity homes, and corporate clinics.',
      tag: 'Flexible Accounts',
    },
  ];

  return (
    <section id="referral-portal" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-teal-400 tracking-wider uppercase bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-800 inline-flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-teal-400" />
            <span>Doctor &amp; Hospital Partnership Ecosystem</span>
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Hospital Referral Opportunities &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400">
              What It Entails
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Partnering with <strong>J-R Fountain Diagnostic Centre</strong> allows private hospitals, clinics, HMOs, and healthcare practitioners across Ibadan to extend tertiary-level laboratory and imaging diagnostics to their patients without heavy capital equipment overheads.
          </p>
        </div>

        {/* 6 Key Benefits of What Referral Entails */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {referralPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-7 hover:border-teal-400/50 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-700/60 text-teal-300">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Physician / Hospital Registration Form Section */}
        <div className="mt-16 bg-slate-800/90 border border-teal-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-1">
              Physician Onboarding Portal
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Register Your Hospital or Practice for Referral Benefits
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Fill out the details below to receive official requisition pads, establish priority result delivery to your phone, and schedule sample pickups.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Hospital / Clinic Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={partnerForm.hospitalName}
                  onChange={(e) => setPartnerForm({ ...partnerForm, hospitalName: e.target.value })}
                  placeholder="e.g. St. Luke Specialist Hospital"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-600 bg-slate-900 text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Lead Doctor / Medical Director <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={partnerForm.directorName}
                  onChange={(e) => setPartnerForm({ ...partnerForm, directorName: e.target.value })}
                  placeholder="Dr. [Full Name]"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-600 bg-slate-900 text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Direct Phone / WhatsApp <span className="text-rose-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={partnerForm.phone}
                  onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                  placeholder="080... or 070..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-600 bg-slate-900 text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Hospital Official Email
                </label>
                <input
                  type="email"
                  value={partnerForm.email}
                  onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                  placeholder="doctor@hospital.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-600 bg-slate-900 text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Facility Address / Area in Ibadan
                </label>
                <input
                  type="text"
                  value={partnerForm.location}
                  onChange={(e) => setPartnerForm({ ...partnerForm, location: e.target.value })}
                  placeholder="e.g. Ring Road, Bodija, Mokola..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-600 bg-slate-900 text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Facility Classification
                </label>
                <select
                  value={partnerForm.specialty}
                  onChange={(e) => setPartnerForm({ ...partnerForm, specialty: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-600 bg-slate-900 text-white text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  <option value="General Hospital / Multi-Specialty">General Hospital / Multi-Specialty</option>
                  <option value="Maternity & Fertility Clinic">Maternity &amp; Fertility Clinic</option>
                  <option value="Cardiology & Internal Medicine">Cardiology &amp; Internal Medicine</option>
                  <option value="Surgical / Orthopedic Centre">Surgical / Orthopedic Centre</option>
                  <option value="General Outpatient Medical Practice">General Outpatient Medical Practice</option>
                  <option value="HMO / Corporate Healthcare Partner">HMO / Corporate Healthcare Partner</option>
                </select>
              </div>
            </div>

            {/* Services of interest checkmarks */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Diagnostic Services You Intend to Refer (Select all applicable):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {[
                  '24h Cardiac Studies (ECG/Holter/ABPM)',
                  'Automated Clinical Laboratory',
                  'Digital X-Ray Radiography',
                  '3D/4D Obstetric Scans',
                  'Biopsy & Histopathology',
                  'Vascular Doppler / ECHO',
                ].map((srv, idx) => {
                  const isChecked = partnerForm.servicesNeeded.includes(srv);
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => toggleService(srv)}
                      className={`p-2.5 rounded-lg text-xs font-semibold text-left transition-colors flex items-center gap-2 ${
                        isChecked
                          ? 'bg-teal-500 text-slate-950 font-bold'
                          : 'bg-slate-900/80 border border-slate-700 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span className="leading-tight">{srv}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="flex flex-wrap gap-6 text-xs text-slate-300 pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={partnerForm.requestRequisitionPads}
                  onChange={(e) => setPartnerForm({ ...partnerForm, requestRequisitionPads: e.target.checked })}
                  className="rounded text-teal-500 focus:ring-teal-400"
                />
                <span>Supply free branded requisition pad booklets to our consulting rooms</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={partnerForm.requestSampleCourier}
                  onChange={(e) => setPartnerForm({ ...partnerForm, requestSampleCourier: e.target.checked })}
                  className="rounded text-teal-500 focus:ring-teal-400"
                />
                <span>Include our clinic on the daily courier sample pickup route</span>
              </label>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-teal-900/80 border border-teal-500 text-teal-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Hospital partnership details launched in WhatsApp! Our Medical Director / Liaison Desk will reach out to supply your materials immediately.</span>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Direct Liaison Hotline: <strong className="text-teal-400">0701 787 4107</strong> &bull; Ekotedo, Ibadan.
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/25 transition-all hover:scale-102"
              >
                <Stethoscope className="w-5 h-5" />
                <span>Submit Doctor Referral Registration</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
