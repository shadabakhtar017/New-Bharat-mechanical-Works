import React from 'react';
import { ArrowRight, Award, Wrench, ShieldCheck, Building } from 'lucide-react';
import { openQuoteWhatsApp } from '../utils/whatsapp';

interface HeroProps {
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0F0F0F]">
      {/* Background Image with Dark Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80"
          alt="Metal Fabrication Workshop"
          className="w-full h-full object-cover object-center scale-105 opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/95 to-[#0F0F0F]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl relative">
          <div className="absolute top-0 right-0 hidden lg:block opacity-10 pointer-events-none">
            <div className="text-[180px] font-bold leading-none select-none italic text-transparent font-['Space_Grotesk']" style={{ WebkitTextStroke: '2px #C5A059' }}>
              43+
            </div>
          </div>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C5A059]/40 bg-[#C5A059]/10 rounded-lg text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            <Award className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>ESTABLISHED 1982 — 43+ YEARS OF EXCELLENCE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F5F5F0] tracking-tight leading-[1.05] mb-6 font-['Space_Grotesk']">
            Built on Craftsmanship.<br />
            <span className="text-[#C5A059]">Trusted for Generations.</span>
          </h1>

          {/* Supporting Line */}
          <p className="text-base sm:text-lg text-[#A0A0A0] max-w-2xl leading-relaxed mb-10">
            From precision metal fabrication to complete contracting solutions—New Bharat Mechanical Works delivers quality workmanship built on more than four decades of experience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <button
              onClick={openQuoteWhatsApp}
              className="bg-[#C5A059] text-[#F5F5F0] px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[#b08c4b] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer text-center"
            >
              Get a Quote on WhatsApp →
            </button>

            <button
              onClick={onExploreServices}
              className="border border-[#2A2A2A] bg-[#141414] text-[#F5F5F0] px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[#181818] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer text-center"
            >
              Explore Our Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#2A2A2A]">
            <div className="border border-[#2A2A2A] bg-[#141414] rounded-lg p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
              <div className="text-3xl font-bold text-[#C5A059] font-['Space_Grotesk']">43+</div>
              <div className="text-[10px] uppercase tracking-widest text-[#A0A0A0] mt-1">Years Experience</div>
            </div>

            <div className="border border-[#2A2A2A] bg-[#141414] rounded-lg p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
              <div className="text-3xl font-bold text-[#C5A059] font-['Space_Grotesk']">1000+</div>
              <div className="text-[10px] uppercase tracking-widest text-[#A0A0A0] mt-1">Projects Delivered</div>
            </div>

            <div className="border border-[#2A2A2A] bg-[#141414] rounded-lg p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
              <div className="text-3xl font-bold text-[#C5A059] font-['Space_Grotesk']">11+</div>
              <div className="text-[10px] uppercase tracking-widest text-[#A0A0A0] mt-1">Service Categories</div>
            </div>

            <div className="border border-[#2A2A2A] bg-[#141414] rounded-lg p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
              <div className="text-3xl font-bold text-[#C5A059] font-['Space_Grotesk']">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-[#A0A0A0] mt-1">Custom Fabrication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

