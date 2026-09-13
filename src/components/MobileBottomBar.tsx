import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { openGeneralWhatsApp } from '../utils/whatsapp';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0f1115]/95 backdrop-blur-md border-t border-[#232833] p-3 flex items-center gap-3">
      <a
        href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1a202c] border border-[#333b4d] text-[#F5F5F0] text-xs font-bold shadow-sm"
      >
        <Phone className="w-4 h-4 text-[#c59b27]" />
        <span>Call Now</span>
      </a>

      <button
        onClick={openGeneralWhatsApp}
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-black text-xs font-bold shadow-sm active:scale-95 transition-transform cursor-pointer"
      >
        <MessageSquare className="w-4 h-4 fill-black" />
        <span>WhatsApp</span>
      </button>
    </div>
  );
};
