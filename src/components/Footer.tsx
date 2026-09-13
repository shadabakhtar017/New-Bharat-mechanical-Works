import React from 'react';
import { Wrench, Phone, MessageSquare, Mail, MapPin, Shield } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { openGeneralWhatsApp } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmin }) => {
  return (
    <footer className="bg-[#07090d] border-t border-white/[0.08] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/40 flex items-center justify-center font-bold text-lg text-amber-400">
                NB
              </div>
              <div>
                <span className="block font-bold text-lg text-white font-['Space_Grotesk'] leading-tight uppercase">
                  New Bharat
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.25em] text-amber-400 uppercase mt-0.5">
                  Mechanical Works
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              43+ Years of Craftsmanship & Trust. From metal fabrication to complete general contracting solutions.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-200 hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-200"
                aria-label="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={openGeneralWhatsApp}
                className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-200 cursor-pointer"
                aria-label="WhatsApp Us"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-['Space_Grotesk'] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider">
              {['Home', 'About', 'Services', 'Our Work', 'Why Us', 'Journey', 'Contact'].map((item) => {
                const id = item.toLowerCase().replace(/\s+/g, '-');
                return (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate(id === 'our-work' ? 'projects' : id === 'why-us' ? 'why-us' : id)}
                      className="text-slate-400 hover:text-amber-300 transition-colors cursor-pointer text-left"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-['Space_Grotesk'] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                'Metal Fabrication',
                'Steel Works',
                'Rolling Shutters',
                'Aluminium Works',
                'Glass Works',
                'Wood & Interior Works',
                'UPVC & Roof Solutions'
              ].map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-slate-400 hover:text-amber-300 transition-colors cursor-pointer text-left"
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details in Footer & Admin Link */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-['Space_Grotesk'] mb-4">
              Workshop & Office
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 mb-6">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors underline decoration-amber-500/40"
                >
                  {BUSINESS_CONFIG.address}, {BUSINESS_CONFIG.city}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.email}
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/[0.08]">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin Login / Portal</span>
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-[11px] uppercase tracking-wider text-slate-400">
          <p>© {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All Rights Reserved. • Established 1983</p>
          <p className="mt-2 sm:mt-0 font-medium">Metal Fabrication & General Contracting Excellence</p>
        </div>
      </div>
    </footer>
  );
};
