import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, User } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { openGeneralWhatsApp } from '../utils/whatsapp';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenAuth: () => void;
  currentUser?: any;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenAuth, currentUser }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Our Work", id: "projects" },
    { name: "Why Us", id: "why-us" },
    { name: "Journey", id: "journey" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090c10]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#090c10]/70 backdrop-blur-md border-b border-white/[0.05]'
      } h-20 flex items-center px-4 sm:px-8`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Brand Logo / Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/40 flex items-center justify-center font-bold text-lg text-amber-400 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
            NB
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none tracking-tight uppercase text-white group-hover:text-amber-300 transition-colors">
              New Bharat
            </h1>
            <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400/90 font-semibold mt-1">
              Mechanical Works
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-400">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="relative py-1 hover:text-white transition-colors cursor-pointer group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 rounded-full transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenAuth}
            className="text-xs font-semibold uppercase tracking-wider border border-amber-500/40 bg-amber-500/5 px-4 py-2.5 rounded-xl text-amber-400 hover:bg-amber-500/15 hover:border-amber-400 transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
          >
            <User className="w-3.5 h-3.5" />
            <span>{currentUser ? 'My Account' : 'Sign In / Sign Up'}</span>
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="text-xs font-semibold uppercase tracking-wider border border-white/10 bg-white/[0.03] px-4 py-2.5 rounded-xl text-slate-200 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
          >
            Call Now
          </a>

          <button
            onClick={openGeneralWhatsApp}
            className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.945 1.594 5.491l-.999 3.647 3.894-.957z"/>
            </svg>
            WhatsApp
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenAuth}
            className="p-2.5 border border-amber-500/40 bg-amber-500/5 text-amber-400 hover:bg-amber-500/15 transition-colors rounded-xl relative"
            aria-label="Sign In / Sign Up"
          >
            <User className="w-5 h-5" />
            {currentUser && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 border border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08] transition-colors rounded-xl"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0c1017]/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.8)] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <button
              onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-amber-500/40 bg-amber-500/10 text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-amber-500/20 transition-all"
            >
              <User className="w-4 h-4" />
              <span>{currentUser ? `My Account (${currentUser.email?.split('@')[0]})` : 'Sign In / Sign Up'}</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-bold uppercase tracking-wider text-slate-200 hover:bg-white/[0.06] transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now ({BUSINESS_CONFIG.phone})</span>
            </a>

            <button
              onClick={openGeneralWhatsApp}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-500/20 active:scale-98 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
