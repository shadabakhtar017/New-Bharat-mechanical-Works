import React from 'react';
import { openGeneralWhatsApp } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={openGeneralWhatsApp}
        style={{ width: '153.68px', fontSize: '15px', lineHeight: '18px', paddingTop: '17px', marginLeft: '31px', marginRight: '-11px', marginTop: '115px', marginBottom: '91px' }}
        className="group flex items-center justify-center gap-2.5 bg-[#25D366] text-[#F5F5F0] py-3.5 rounded-full shadow-2xl hover:bg-[#22bf5b] transition-all transform hover:scale-105 active:scale-95 cursor-pointer font-bold shrink-0 overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative flex items-center justify-center w-5 h-5 shrink-0">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.945 1.594 5.491l-.999 3.647 3.894-.957z"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#0F0F0F] rounded-full animate-ping" />
        </div>
        <span className="truncate font-['Space_Grotesk']">
          WhatsApp
        </span>
      </button>
    </div>
  );
};


