import React, { useState } from 'react';
import { ChevronDown, HelpCircle, AlertCircle, FileCheck, PhoneCall } from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Which diagnostic tests require fasting and how should I prepare?',
      a: 'Tests requiring strict fasting include Fasting Blood Sugar (FBS: 8-10 hours), Fasting Lipid Profile (10-12 hours), and certain Liver & Bone panels. During fasting, you may drink plain water, but avoid all food, coffee, tea, juices, and smoking. Always take essential prescription medications unless your doctor explicitly advises otherwise.',
    },
    {
      q: 'How do I receive my laboratory test and cardiac reports?',
      a: 'We provide rapid digital delivery! Once your tests are verified by our scientists and consultants, you will receive your password-protected PDF result directly via WhatsApp and official Email. You can also pick up certified physical hardcopies at our reception desk in Ekotedo, Ibadan.',
    },
    {
      q: 'Do I need a doctor\'s referral note before coming to J-R Fountain Diagnostic Centre?',
      a: 'While many patients arrive with hospital or clinic requisition slips (which our laboratory directly honors), you are also warmly welcome for routine wellness screenings, executive health checkups, or self-requested monitoring tests without an advance referral.',
    },
    {
      q: 'How does 24-Hour Ambulatory Blood Pressure Monitoring (ABPM) & Holter ECG work?',
      a: 'A lightweight, comfortable digital recording device with a cuff or chest electrodes is fitted to you at our centre. You go about your normal daily work, activities, and sleep. After 24 hours, you return the device to our centre, where our specialists decode and analyze your circadian rhythm, nocturnal dips, and cardiac events.',
    },
    {
      q: 'Do you offer home sample collection or mobile phlebotomy in Ibadan?',
      a: 'Yes! For elderly patients, bedridden individuals, or busy executives across Ibadan, our trained phlebotomists can visit your home or office to collect blood, urine, or other samples under sterile clinical protocols. Simply check "Home Phlebotomy" on our digital request form or contact our hotline.',
    },
    {
      q: 'Where exactly is J-R Fountain Diagnostic Centre located in Ibadan?',
      a: 'We are situated at No 72, Adekunle Fajuyi Road, (Remilekun House), directly opposite the Lekan Salami Stadium Shopping Complex, Ekotedo / Mokola, Ibadan. Our facility is easily accessible from Dugbe, Mokola, Bodija, and Eleyele.',
    },
  ];

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs sm:text-sm font-bold text-teal-700 tracking-wider uppercase bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
            Patient Guidance &amp; Information
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Everything you need to know about sample preparations, testing procedures, and turnaround times.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Assistance Helpbox */}
        <div className="mt-10 p-5 rounded-xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <HelpCircle className="w-6 h-6 text-teal-700 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">Have a question not answered here?</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Our clinical laboratory scientists and receptionists are ready to assist you right now.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${encodeURIComponent("Hello J-R Fountain Diagnostic, I have an inquiry regarding test preparation.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            Chat with Laboratory Desk
          </a>
        </div>
      </div>
    </section>
  );
}
