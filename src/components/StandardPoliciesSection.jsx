'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  AlertTriangle, 
  UserCheck, 
  CreditCard, 
  Scale, 
  CheckCircle2, 
  ChevronRight, 
  Building2,
  FileBadge,
  Sparkles
} from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export const POLICIES_DATA = [
  {
    id: 'confidentiality',
    icon: Lock,
    title: 'Patient Privacy & Medical Data Confidentiality',
    tag: 'NDPR & HIPAA Aligned',
    summary: 'Strict non-disclosure protocols and end-to-end encryption governing patient biological records, test results, and clinical correspondence.',
    details: [
      {
        heading: 'Protected Health Information (PHI)',
        text: 'All patient records, requisition slips, biological test data, radiograms, and sonograms are classified as strictly confidential medical records. Access is restricted exclusively to authorized clinical scientists, attending radiologists/pathologists, and the patient.',
      },
      {
        heading: 'Encrypted Digital Result Transmission',
        text: 'All PDF reports transmitted via WhatsApp or Email are protected by encrypted digital signatures. Results are sent strictly to the contact number or email authorized by the patient on the physical or digital requisition form.',
      },
      {
        heading: 'Third-Party Disclosure Restrictions',
        text: 'Results will never be released to family members, employers, or third parties without explicit written consent from the patient, except where compelled by statutory public health reporting laws (e.g., notifiable infectious diseases).',
      },
      {
        heading: 'Record Retention Schedules',
        text: 'Digital diagnostic records and laboratory reports are securely archived for a minimum of 7 years. Histopathology tissue blocks and glass biopsy slides are retained for 10 years in temperature-controlled archives.',
      },
    ],
  },
  {
    id: 'quality',
    icon: FileBadge,
    title: 'Laboratory Quality Assurance & Sample Integrity Policy',
    tag: 'ISO 15189 Principles',
    summary: 'Zero-compromise pre-analytical, analytical, and post-analytical calibration standards ensuring absolute clinical reproducibility.',
    details: [
      {
        heading: 'Internal Quality Control (IQC)',
        text: 'Every diagnostic run is preceded by multi-level control sera to verify analyzer accuracy, slope, and standard deviation. No patient specimen is processed if daily control values fall outside acceptable Westgard rules.',
      },
      {
        heading: 'Sample Rejection Criteria',
        text: 'To guarantee diagnostic fidelity, samples exhibiting severe hemolysis (ruptured RBCs in potassium/enzyme assays), lipemia, clotted EDTA whole blood, insufficient volume (QNS - Quantity Not Sufficient), or mismatched tube labeling are systematically rejected.',
      },
      {
        heading: 'Complimentary Recollection Guarantee',
        text: 'Whenever a specimen is rejected due to pre-analytical factors, the patient is notified immediately and offered a complimentary redraw at zero additional cost.',
      },
      {
        heading: 'Emergency Critical / Panic Value Alerts',
        text: 'Pathological results that represent imminent life threat (e.g., severe hypokalemia, critical troponin elevation, severe thrombocytopenia) trigger a mandatory telephone call to the referring physician or patient within 15 minutes of verification.',
      },
    ],
  },
  {
    id: 'radiation',
    icon: AlertTriangle,
    title: 'Radiation Protection & Radiographic Safety Policy',
    tag: 'ALARA & NNRA Standards',
    summary: 'Comprehensive radiation dosage minimization protocols and pregnancy safety measures for digital X-Ray imaging.',
    details: [
      {
        heading: 'The ALARA Principle',
        text: 'All radiographic procedures are conducted under the principle of "As Low As Reasonably Achievable." We utilize high-frequency digital flat-panel generators that minimize exposure while optimizing spatial resolution.',
      },
      {
        heading: 'Mandatory Pregnancy Screening (The 10-Day Rule)',
        text: 'Female patients of childbearing age (12–50 years) undergo mandatory pregnancy screening before pelvic, abdominal, or lumbar spine X-rays. Procedures involving ionizing radiation are deferred or substituted with Ultrasound where gestation is suspected or confirmed.',
      },
      {
        heading: 'Physical Lead Shielding',
        text: 'Every patient is provided with lead aprons (0.5mm lead equivalent), thyroid shields, and gonadal guards for anatomical areas outside the direct field of examination.',
      },
      {
        heading: 'Pediatric Dose Modulation',
        text: 'Infants and pediatric patients receive specialized micro-dose protocols adjusted strictly according to weight and body surface area.',
      },
    ],
  },
  {
    id: 'consent',
    icon: UserCheck,
    title: 'Informed Consent & Clinical Chaperone Policy',
    tag: 'Patient Dignity First',
    summary: 'Guidelines ensuring voluntary consent, informed procedural explanations, and professional chaperones for intimate examinations.',
    details: [
      {
        heading: 'Informed Consent',
        text: 'Before invasive phlebotomy, fine-needle aspiration (FNAC), transvaginal ultrasound, or treadmill exercise ECG, patients receive a clear explanation of the procedure, clinical indications, and potential discomforts.',
      },
      {
        heading: 'Mandatory Clinical Chaperone',
        text: 'For intimate examinations—including transvaginal scans (TVS), breast sonography, and pelvic exams—a qualified female healthcare professional is present as a chaperone to guarantee patient security, privacy, and clinical ethics.',
      },
      {
        heading: 'Right to Decline or Pause',
        text: 'Patients possess the unequivocal right to ask questions, request an explanation of the process, or request a pause at any point during examination.',
      },
    ],
  },
  {
    id: 'billing',
    icon: CreditCard,
    title: 'Transparent Pricing, Payment & Refund Policy',
    tag: 'Ethical Billing',
    summary: 'Clear fee disclosures, acceptable payment methods, corporate retainership terms, and cancellation guidelines.',
    details: [
      {
        heading: 'Upfront Price Transparency',
        text: 'Patients are informed of investigation fees prior to sample collection or imaging. No hidden costs or unannounced consumables surcharges are levied.',
      },
      {
        heading: 'Payment Methods',
        text: 'We accept POS card payments, verified instant bank transfers, corporate HMO authorizations, and institutional credit accounts for verified hospital partners.',
      },
      {
        heading: 'Cancellation & Refund Terms',
        text: 'If a patient cancels an appointment prior to specimen collection or radiogram capture, a 100% full refund is issued immediately. Once biological processing, reagents, or imaging exposure have commenced, fees are non-refundable.',
      },
      {
        heading: 'Hospital & Institutional Credit Accounts',
        text: 'Accredited referring hospitals and HMO retainerships operate on flexible 14-day or 30-day consolidated monthly statement cycles backed by formal Service Level Agreements (SLAs).',
      },
    ],
  },
  {
    id: 'rights',
    icon: Scale,
    title: 'Patient Rights & Clinical Grievance Redressal',
    tag: 'Patients Charter',
    summary: 'The fundamental rights of every individual visiting our facility and the mechanism for swift conflict resolution.',
    details: [
      {
        heading: 'Dignity & Non-Discrimination',
        text: 'Every patient is received with unconditional medical dignity, courtesy, and respect, without discrimination based on ethnicity, gender, faith, socioeconomic status, or medical condition.',
      },
      {
        heading: 'Right to Diagnostic Explanation',
        text: 'Patients have the right to request a plain-language explanation of reference intervals, preparation requirements, and report terminology from our duty laboratory scientists.',
      },
      {
        heading: 'Formal Grievance Procedure',
        text: 'Any concern regarding specimen handling, waiting time, staff conduct, or result clarity may be escalated directly to the Centre Quality Manager via email (fountainheartibadan@gmail.com) or WhatsApp (0701 787 4107). All logged complaints receive formal investigation within 24 hours.',
      },
    ],
  },
];

export default function StandardPoliciesSection() {
  const [activePolicyId, setActivePolicyId] = useState('confidentiality');

  const selectedPolicy = POLICIES_DATA.find((p) => p.id === activePolicyId) || POLICIES_DATA[0];

  return (
    <section id="policies" className="py-20 sm:py-28 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs sm:text-sm font-bold text-teal-700 tracking-wider uppercase bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Governance &amp; Standard Operating Procedures</span>
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Standard Clinical Policies &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600">
              Regulatory Compliance
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            At <strong>J-R Fountain Diagnostic Centre</strong>, our operations are anchored in rigorous medical ethics, patient dignity, and international diagnostic standards. Explore our formal institutional policies below.
          </p>
        </div>

        {/* Layout: Left Sidebar + Right Policy Reader */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Policy Selector Navigation */}
          <div className="lg:col-span-4 space-y-2.5">
            {POLICIES_DATA.map((policy) => {
              const Icon = policy.icon;
              const isActive = activePolicyId === policy.id;
              return (
                <button
                  key={policy.id}
                  onClick={() => setActivePolicyId(policy.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all border flex items-start gap-3.5 ${
                    isActive
                      ? 'bg-teal-700 text-white border-teal-700 shadow-md shadow-teal-700/20'
                      : 'bg-slate-50 text-slate-800 border-slate-200/90 hover:bg-white hover:border-teal-300'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                    isActive ? 'bg-teal-800 text-teal-200' : 'bg-white text-teal-700 border border-slate-200'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isActive ? 'bg-teal-800 text-teal-200' : 'bg-slate-200/80 text-slate-600'
                      }`}>
                        {policy.tag}
                      </span>
                    </div>
                    <h3 className={`mt-1 font-bold text-sm leading-snug ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}>
                      {policy.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Policy Content Card */}
          <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-1">
                  Official Policy Document &bull; {selectedPolicy.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {selectedPolicy.title}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-800 shrink-0">
                <selectedPolicy.icon className="w-6 h-6 text-teal-700" />
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {selectedPolicy.summary}
            </p>

            {/* Detailed Clauses */}
            <div className="mt-8 space-y-6">
              {selectedPolicy.details.map((clause, cIdx) => (
                <div key={cIdx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{clause.heading}</span>
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {clause.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Compliance Bottom Note */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <span>Reviewed annually by the J-R Fountain Clinical Governance Board.</span>
              <a
                href="#contact"
                className="font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
              >
                <span>Contact Quality Officer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
