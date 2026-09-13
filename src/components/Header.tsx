import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, User } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { openGeneralWhatsApp } from '../utils/whatsapp';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenAuth: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
          ? 'bg-[#141414]/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-lg'
          : 'bg-[#141414] border-b border-[#2A2A2A]'
      } h-20 flex items-center px-6 sm:px-10`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Brand Logo / Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-10 h-10 border-2 border-[#C5A059] flex items-center justify-center font-bold text-xl text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#F5F5F0] transition-colors">
            NB
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none tracking-tight uppercase text-[#F5F5F0]">
              New Bharat
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
              Mechanical Works
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-[#A0A0A0]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-[#F5F5F0] transition-colors cursor-pointer py-1"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenAuth}
            className="text-xs font-bold uppercase tracking-tighter border border-[#C5A059]/50 px-4 py-2 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#F5F5F0] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <User className="w-3.5 h-3.5" />
            <span>Sign In / Sign Up</span>
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="text-xs font-bold uppercase tracking-tighter border border-[#2A2A2A] px-4 py-2 text-[#F5F5F0] hover:bg-[#E4E4E7] transition-colors"
          >
            Call Now
          </a>

          <button
            onClick={openGeneralWhatsApp}
            className="text-xs font-bold uppercase tracking-tighter bg-[#C5A059] text-[#F5F5F0] px-4 py-2 flex items-center gap-2 hover:bg-[#b08c4b] transition-colors cursor-pointer"
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
            className="p-2.5 border border-[#C5A059]/50 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#F5F5F0] transition-colors rounded"
            aria-label="Sign In / Sign Up"
          >
            <User className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 border border-[#2A2A2A] text-[#F5F5F0] hover:bg-[#E4E4E7] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#141414] border-b border-[#2A2A2A] shadow-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest text-[#A0A0A0] hover:text-[#F5F5F0] hover:bg-[#E4E4E7] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#2A2A2A] flex flex-col gap-3">
            <button
              onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-2 px-5 py-3 border border-[#C5A059] text-xs font-bold uppercase tracking-wider text-[#C5A059] hover:bg-[#C5A059] hover:text-[#F5F5F0] transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Sign In / Sign Up</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-5 py-3 border border-[#2A2A2A] text-xs font-bold uppercase tracking-wider text-[#F5F5F0] bg-[#F4F4F5]"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call Now ({BUSINESS_CONFIG.phone})</span>
            </a>

            <button
              onClick={openGeneralWhatsApp}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-[#C5A059] text-xs font-bold uppercase tracking-wider text-[#F5F5F0]"
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

