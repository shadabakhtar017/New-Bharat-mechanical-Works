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
    <footer className="bg-[#0F0F0F] border-t border-[#2A2A2A] pt-16 pb-12 text-[#A0A0A0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#C5A059] flex items-center justify-center font-bold text-xl text-[#C5A059]">
                NB
              </div>
              <div>
                <span className="block font-bold text-lg text-[#F5F5F0] font-['Space_Grotesk'] leading-tight uppercase">
                  New Bharat
                </span>
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                  Mechanical Works
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              43+ Years of Craftsmanship & Trust. From metal fabrication to complete general contracting solutions.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="w-10 h-10 bg-[#141414] border border-[#2A2A2A] flex items-center justify-center text-[#F5F5F0] hover:bg-[#C5A059] hover:text-[#F5F5F0] transition-colors"
                aria-label="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={openGeneralWhatsApp}
                className="w-10 h-10 bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-black transition-colors cursor-pointer"
                aria-label="WhatsApp Us"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-[#F5F5F0] uppercase tracking-widest font-['Space_Grotesk'] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              {['Home', 'About', 'Services', 'Our Work', 'Why Us', 'Journey', 'Contact'].map((item) => {
                const id = item.toLowerCase().replace(/\s+/g, '-');
                return (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate(id === 'our-work' ? 'projects' : id === 'why-us' ? 'why-us' : id)}
                      className="hover:text-[#F5F5F0] transition-colors cursor-pointer text-left"
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
            <h4 className="text-xs font-bold text-[#F5F5F0] uppercase tracking-widest font-['Space_Grotesk'] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
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
                    className="hover:text-[#F5F5F0] transition-colors cursor-pointer text-left"
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details in Footer & Admin Link */}
          <div>
            <h4 className="text-xs font-bold text-[#F5F5F0] uppercase tracking-widest font-['Space_Grotesk'] mb-4">
              Workshop & Office
            </h4>
            <ul className="space-y-3 text-xs text-[#A0A0A0] mb-6">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5F0] transition-colors underline decoration-[#C5A059]/50"
                >
                  {BUSINESS_CONFIG.address}, {BUSINESS_CONFIG.city}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="hover:text-[#F5F5F0]">
                  {BUSINESS_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-[#F5F5F0]">
                  {BUSINESS_CONFIG.email}
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#2A2A2A]">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059] hover:text-[#F5F5F0] transition-colors cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin Login / Portal</span>
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-[#A0A0A0]">
          <p>© {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All Rights Reserved. • Established 1983</p>
          <p className="mt-2 sm:mt-0">Metal Fabrication & General Contracting Excellence</p>
        </div>
      </div>
    </footer>
  );
};
