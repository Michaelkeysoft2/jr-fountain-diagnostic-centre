'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LabEntailsSection from '../components/LabEntailsSection';
import XrayEntailsSection from '../components/XrayEntailsSection';
import UltrasoundEntailsSection from '../components/UltrasoundEntailsSection';
import ReferralHospitalSection from '../components/ReferralHospitalSection';
import About from '../components/About';
import ServicesDirectory from '../components/ServicesDirectory';
import RequestForm from '../components/RequestForm';
import WhyChooseUs from '../components/WhyChooseUs';
import StandardPoliciesSection from '../components/StandardPoliciesSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  const [selectedTests, setSelectedTests] = useState([]);

  const handleToggleTest = (test) => {
    setSelectedTests((prev) => {
      const exists = prev.some((t) => t.id === test.id);
      if (exists) {
        return prev.filter((t) => t.id !== test.id);
      } else {
        return [...prev, test];
      }
    });
  };

  const handleClearTests = () => {
    setSelectedTests([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      <Navbar selectedTestsCount={selectedTests.length} />

      <main className="flex-1">
        {/* 1. High-Impact Healthcare Hero */}
        <Hero />

        {/* 2. Laboratory Testing & What It Entails */}
        <LabEntailsSection />

        {/* 3. Digital X-Ray Radiography & What It Entails */}
        <XrayEntailsSection />

        {/* 4. Diagnostic Ultrasound & What It Entails (3D/4D, Abdominal, TVS, Doppler, ECHO) */}
        <UltrasoundEntailsSection />

        {/* 5. Hospital & Physician Referral Opportunities & What It Entails */}
        <ReferralHospitalSection />

        {/* 6. About the Diagnostic Centre & Biblical Foundation */}
        <About />

        {/* 7. Comprehensive 50+ Diagnostic Test Directory & Live Search */}
        <ServicesDirectory 
          selectedTests={selectedTests} 
          onToggleTest={handleToggleTest} 
        />

        {/* 8. Digital Requisition Portal (Exact Paper Slip Replica) */}
        <RequestForm 
          selectedTests={selectedTests} 
          onToggleTest={handleToggleTest}
          onClearTests={handleClearTests}
        />

        {/* 9. Why Patients & Referring Doctors Choose J-R Fountain */}
        <WhyChooseUs />

        {/* 10. Standard Clinical Policies & Regulatory Compliance */}
        <StandardPoliciesSection />

        {/* 11. Patient Preparation FAQs */}
        <FaqSection />

        {/* 12. Facility Location, Embedded Map & Contact Form */}
        <ContactSection />
      </main>

      {/* 13. Footer with Scripture Strip, Policy Links & Attribution */}
      <Footer />

      {/* 14. Persistent 1-Click WhatsApp Floating Hub */}
      <FloatingWhatsApp />
    </div>
  );
}
