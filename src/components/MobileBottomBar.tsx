import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { openGeneralWhatsApp } from '../utils/whatsapp';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090c10]/95 backdrop-blur-xl border-t border-white/[0.08] p-3 flex items-center gap-3 shadow-[0_-10px_25px_rgba(0,0,0,0.6)]">
      <a
        href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-all"
      >
        <Phone className="w-4 h-4 text-amber-400" />
        <span>Call Now</span>
      </a>

      <button
        onClick={openGeneralWhatsApp}
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </button>
    </div>
  );
};
