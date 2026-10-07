import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CLINICAL_INFORMATION } from '../data/testsData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = encodeURIComponent(
      "Hello J-R Fountain Diagnostic Centre! I would like to make an inquiry or book a diagnostic test."
    );
    window.open(`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-none">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="pointer-events-auto hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3 rounded-xl shadow-lg border border-slate-200 animate-bounce">
          <span className="font-semibold">Need fast help? Chat on WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <button
        onClick={handleClick}
        className="pointer-events-auto relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300"
        title="Chat on WhatsApp"
        aria-label="Chat with J-R Fountain Diagnostic Centre on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white animate-ping" />
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
