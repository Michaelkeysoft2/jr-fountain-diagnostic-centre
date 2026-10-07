import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesDirectory from './components/ServicesDirectory';
import RequestForm from './components/RequestForm';
import WhyChooseUs from './components/WhyChooseUs';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar selectedTestsCount={selectedTests.length} />
      
      <main className="flex-1">
        <Hero />
        <About />
        <ServicesDirectory 
          selectedTests={selectedTests} 
          onToggleTest={handleToggleTest} 
        />
        <RequestForm 
          selectedTests={selectedTests} 
          onToggleTest={handleToggleTest}
          onClearTests={handleClearTests}
        />
        <WhyChooseUs />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
