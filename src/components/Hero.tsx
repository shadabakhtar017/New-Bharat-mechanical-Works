import React from 'react';
import { ArrowRight, Award, Wrench, ShieldCheck, Building } from 'lucide-react';
import { openQuoteWhatsApp } from '../utils/whatsapp';

interface HeroProps {
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#090c10]">
      {/* Ambient Architectural Lighting Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-[400px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Background Image with Dark Architectural Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80"
          alt="Metal Fabrication Workshop"
          className="w-full h-full object-cover object-center scale-105 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090c10]/70 via-[#090c10]/90 to-[#090c10]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#090c10]/60 to-[#090c10]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl relative">
          <div className="absolute top-0 right-0 hidden lg:block opacity-[0.07] pointer-events-none select-none">
            <div className="text-[200px] font-bold leading-none italic text-transparent font-['Space_Grotesk']" style={{ WebkitTextStroke: '2px #f59e0b' }}>
              43+
            </div>
          </div>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-amber-300 text-[11px] font-bold tracking-[0.25em] uppercase mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>ESTABLISHED 1982 — 43+ YEARS OF EXCELLENCE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-['Space_Grotesk']">
            Precision Metal Fabrication &<br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(245,158,11,0.3)]">
              Contracting in Purulia
            </span>
          </h1>

          {/* Supporting Line */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10 font-normal">
            New Bharat Mechanical Works delivers 43+ years of excellence in precision metal fabrication, mechanical contracting, and general contracting services across Purulia, West Bengal.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button
              onClick={openQuoteWhatsApp}
              className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <span>Get a Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={onExploreServices}
              className="border border-white/15 bg-white/[0.04] backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider hover:bg-white/[0.08] hover:border-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer text-center"
            >
              Explore Our Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/[0.08]">
            <div className="relative group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all" />
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] group-hover:text-amber-300 transition-colors">43+</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-1 font-medium">Years Experience</div>
            </div>

            <div className="relative group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all" />
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] group-hover:text-amber-300 transition-colors">1000+</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-1 font-medium">Projects Delivered</div>
            </div>

            <div className="relative group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all" />
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] group-hover:text-amber-300 transition-colors">11+</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-1 font-medium">Service Categories</div>
            </div>

            <div className="relative group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all" />
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] group-hover:text-amber-300 transition-colors">100%</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-1 font-medium">Custom Fabrication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
