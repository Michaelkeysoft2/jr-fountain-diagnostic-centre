'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Send, 
  MessageCircle, 
  CheckSquare, 
  Square, 
  X, 
  Printer, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  HeartPulse, 
  AlertCircle,
  Clock,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import { CLINICAL_INFORMATION, TEST_CATEGORIES, DIAGNOSTIC_TESTS } from '../data/testsData';

export default function RequestForm({ selectedTests, onToggleTest, onClearTests }) {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    gender: 'Male',
    dateOfBirth: '',
    phone: '',
    email: '',
    address: '',
    hospitalNumber: '',
    referringPhysician: '',
    wardClinic: '',
    preferredDate: '',
    collectionType: 'walk-in', // 'walk-in' or 'home-collection'
    clinicalNotes: '',
    otherTests: '',
  });

  const [activeTab, setActiveTab] = useState('cardiac');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionSuccessMsg, setSubmissionSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    if (!formData.lastName || !formData.firstName || !formData.phone) {
      alert("Please fill in the patient's full name and phone number.");
      return;
    }

    const testList = selectedTests.map((t) => `• ${t.name}`).join('\n');
    const extraTests = formData.otherTests ? `\n• Other Tests: ${formData.otherTests}` : '';

    const message = 
`*LAB TEST REQUISITION - J-R FOUNTAIN DIAGNOSTIC CENTRE*
---------------------------------------
*Patient:* ${formData.lastName.toUpperCase()}, ${formData.firstName}
*Gender:* ${formData.gender}
*DOB/Age:* ${formData.dateOfBirth || 'N/A'}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Address:* ${formData.address || 'N/A'}
*Hospital/ID No:* ${formData.hospitalNumber || 'N/A'}

*Referring Doctor/Hospital:* ${formData.referringPhysician || 'Self-Referred'}
*Clinic/Ward:* ${formData.wardClinic || 'Outpatient'}
*Collection Mode:* ${formData.collectionType === 'home-collection' ? 'Home Phlebotomy Service' : 'Walk-in to Centre'}
*Preferred Date:* ${formData.preferredDate || 'Earliest Available'}

*REQUESTED INVESTIGATIONS:*
${testList || 'None selected from list'}
${extraTests}

*CLINICAL NOTES / MEDICATIONS:*
${formData.clinicalNotes || 'None specified'}
---------------------------------------
_Sent via J-R Fountain Diagnostic Web Portal_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${encoded}`, '_blank');
    setIsSubmitted(true);
    setSubmissionSuccessMsg("Your lab request is prepared and opening in WhatsApp! Our reception desk will confirm your appointment immediately.");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (!formData.lastName || !formData.firstName || !formData.phone) {
      alert("Please provide the patient's full name and contact phone number.");
      return;
    }

    const testList = selectedTests.map((t) => `- ${t.name}`).join('\n');
    const extraTests = formData.otherTests ? `\n- Other Tests: ${formData.otherTests}` : '';

    const subject = encodeURIComponent(`Lab Requisition: ${formData.lastName} ${formData.firstName} - J-R Fountain`);
    const body = encodeURIComponent(
`PATIENT LAB REQUISITION DETAILS:
Patient: ${formData.lastName}, ${formData.firstName}
Gender: ${formData.gender}
DOB/Age: ${formData.dateOfBirth}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}
Hospital ID: ${formData.hospitalNumber}
Referring Doctor: ${formData.referringPhysician}
Ward/Clinic: ${formData.wardClinic}
Collection Mode: ${formData.collectionType}
Preferred Date: ${formData.preferredDate}

SELECTED TESTS:
${testList}
${extraTests}

CLINICAL NOTES / MEDICATIONS:
${formData.clinicalNotes}
`
    );

    window.location.href = `mailto:${CLINICAL_INFORMATION.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setSubmissionSuccessMsg("Requisition details loaded into your email client. Send it to submit your clinical request.");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="request-form" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-teal-700 tracking-wider uppercase bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
            Digital Requisition Portal
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Laboratory Investigation Request Form
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Modeled after our official diagnostic requisition sheet. Complete the clinical details below and transmit directly to our reception and laboratory desk via WhatsApp or Email.
          </p>
        </div>

        {/* Paper Form Simulation Card */}
        <div className="mt-12 bg-white rounded-2xl border-2 border-slate-200 shadow-xl overflow-hidden print:border-none print:shadow-none">
          {/* Header of Simulated Sheet */}
          <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white p-6 sm:p-8 border-b-4 border-amber-400">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-8 h-8 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    {CLINICAL_INFORMATION.centreName}
                  </h3>
                  <p className="text-xs text-teal-200 mt-1 max-w-xl">
                    {CLINICAL_INFORMATION.address}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-semibold text-amber-300">
                    <span>Hotline: {CLINICAL_INFORMATION.phoneDisplay}</span>
                    <span>Email: {CLINICAL_INFORMATION.email}</span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <div className="text-xs italic text-teal-200 font-serif">
                  "{CLINICAL_INFORMATION.motto}"
                </div>
                <div className="text-xs font-bold text-amber-300 mt-0.5">
                  — {CLINICAL_INFORMATION.scriptureRef}
                </div>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <form onSubmit={handleWhatsAppSubmit} className="p-6 sm:p-10 space-y-8">
            {/* 1. Patient Demographics */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-5">
                <User className="w-5 h-5 text-teal-700" />
                <h4 className="font-bold text-slate-900 text-base uppercase tracking-wider">
                  1. Patient Demographics
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Last Name (Surname) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="e.g. Adeyemi"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. Babatunde"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Gender <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none bg-white"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Date of Birth / Age
                  </label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    placeholder="e.g. 14/05/1982 or 42 yrs"
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0801 234 5678"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="patient@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Hospital / Patient No (If Any)
                  </label>
                  <input
                    type="text"
                    name="hospitalNumber"
                    value={formData.hospitalNumber}
                    onChange={handleChange}
                    placeholder="e.g. FDC-2026-089"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Residential Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Area in Ibadan"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 2. Clinical Referral & Collection Details */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-5">
                <Stethoscope className="w-5 h-5 text-teal-700" />
                <h4 className="font-bold text-slate-900 text-base uppercase tracking-wider">
                  2. Clinical Referral &amp; Appointment Preference
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Referring Physician / Doctor
                  </label>
                  <input
                    type="text"
                    name="referringPhysician"
                    value={formData.referringPhysician}
                    onChange={handleChange}
                    placeholder="Dr. Name / Self"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Ward / Clinic / Hospital Name
                  </label>
                  <input
                    type="text"
                    name="wardClinic"
                    value={formData.wardClinic}
                    onChange={handleChange}
                    placeholder="e.g. UCH, General Hospital, Clinic"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Specimen Collection Mode
                  </label>
                  <select
                    name="collectionType"
                    value={formData.collectionType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none bg-white"
                  >
                    <option value="walk-in">Walk-in to Centre (Ekotedo, Ibadan)</option>
                    <option value="home-collection">Request Home / Mobile Phlebotomy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date &amp; Time
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 3. Diagnostic Tests Requisition Checklist */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-5">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-teal-700" />
                  <h4 className="font-bold text-slate-900 text-base uppercase tracking-wider">
                    3. Select Requisitioned Tests ({selectedTests.length} selected)
                  </h4>
                </div>
                {selectedTests.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearTests}
                    className="text-xs font-semibold text-rose-600 hover:text-rose-800"
                  >
                    Clear All Selected Tests
                  </button>
                )}
              </div>

              {/* Selected Chips */}
              {selectedTests.length > 0 ? (
                <div className="mb-6 p-4 rounded-xl bg-teal-50/70 border border-teal-200">
                  <div className="text-xs font-bold text-teal-900 mb-2">
                    Tests Marked for Investigation:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTests.map((test) => (
                      <span
                        key={test.id}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-teal-900 border border-teal-300 shadow-2xs"
                      >
                        <span>{test.name}</span>
                        <button
                          type="button"
                          onClick={() => onToggleTest(test)}
                          className="hover:text-rose-600 focus:outline-none"
                          aria-label={`Remove ${test.name}`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mb-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>
                    Select investigations from the category checklist below or browse the directory above. You can also specify other tests in the text box below.
                  </span>
                </div>
              )}

              {/* Fast Category Switcher */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 custom-scrollbar">
                {TEST_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold whitespace-nowrap transition-colors ${
                      activeTab === cat.id
                        ? 'bg-teal-700 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Checkbox Grid for Active Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 p-4 rounded-xl bg-slate-50 border border-slate-200 max-h-72 overflow-y-auto custom-scrollbar">
                {DIAGNOSTIC_TESTS.filter((t) => t.category === activeTab).map((test) => {
                  const isChecked = selectedTests.some((t) => t.id === test.id);
                  return (
                    <label
                      key={test.id}
                      onClick={() => onToggleTest(test)}
                      className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors text-xs font-medium select-none ${
                        isChecked
                          ? 'bg-teal-100/70 text-teal-950 font-bold'
                          : 'hover:bg-white text-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}} // handled by label onClick
                        className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 cursor-pointer"
                      />
                      <span className="leading-tight">{test.name}</span>
                    </label>
                  );
                })}
              </div>

              {/* Other Tests Specify Field */}
              <div className="mt-4">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Other Tests / Please Specify (As written on Physician's slip)
                </label>
                <input
                  type="text"
                  name="otherTests"
                  value={formData.otherTests}
                  onChange={handleChange}
                  placeholder="e.g. Serum Magnesium, Ferritin, Thyroid Antibodies, etc."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                />
              </div>
            </div>

            {/* 4. Clinical Notes / Medical History */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-4">
                <FileText className="w-5 h-5 text-teal-700" />
                <h4 className="font-bold text-slate-900 text-base uppercase tracking-wider">
                  4. Relevant Clinical Data (Including Medication &amp; Symptoms)
                </h4>
              </div>

              <textarea
                name="clinicalNotes"
                rows={3}
                value={formData.clinicalNotes}
                onChange={handleChange}
                placeholder="Detail patient symptoms (e.g., chest pain, shortness of breath, diabetes checkup) or medications (e.g., antihypertensives, insulin, anticoagulants)..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
              />
            </div>

            {/* Submission Feedback Message */}
            {isSubmitted && submissionSuccessMsg && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Requisition Prepared Successfully</p>
                  <p className="mt-0.5 text-xs text-emerald-700">{submissionSuccessMsg}</p>
                </div>
              </div>
            )}

            {/* Form Action Buttons */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Instant dispatch to WhatsApp desk (0701 787 4107)</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Slip</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                  <span>Send via Email</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Submit &amp; Open WhatsApp</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
