import React from 'react';
import { Award, CheckCircle2, Shield, Wrench } from 'lucide-react';
import { openQuoteWhatsApp } from '../utils/whatsapp';

export const About: React.FC = () => {
  const highlights = [
    "Over four decades of hands-on fabrication mastery",
    "Seamless evolution from metal workshop to general contractor",
    "In-house fabrication, welding, and installation experts",
    "Direct personal attention and transparent pricing"
  ];

  return (
    <section id="about" className="py-24 bg-[#090c10] relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Visual Callout & Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl border border-white/[0.1] bg-[#0f141c] overflow-hidden shadow-2xl transition-all duration-300 group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="New Bharat Mechanical Works Workshop"
                className="w-full h-[480px] object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/40 to-transparent" />
            </div>

            {/* Floating Experience Badge Card */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-[#0f141c]/90 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-6 max-w-[280px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-white font-['Space_Grotesk'] leading-none">
                    43+
                  </span>
                  <span className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest mt-1">
                    Years Experience
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Decades of proven craftsmanship and trust.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-amber-400 text-[10px] font-bold tracking-[0.25em] uppercase">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>ESTABLISHED TRADITION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] leading-[1.15] tracking-tight">
              43+ Years of Craftsmanship & Trust
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              New Bharat Mechanical Works began as a specialized metal fabrication workshop focused on building quality gates, grills, doors, and custom steel work.
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Over the decades, through consistent quality and client trust, the business expanded its capabilities to become a general contractor offering a comprehensive range of solutions across steel, aluminium, glass, wood, UPVC, interiors, roofing, and custom project requirements.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 hover:border-amber-500/30 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={openQuoteWhatsApp}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-slate-950" />
                <span>Discuss Your Project With Us</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
