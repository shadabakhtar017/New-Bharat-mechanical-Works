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
    <section id="about" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Visual Callout & Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#2A2A2A] bg-[#141414] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="New Bharat Mechanical Works Workshop"
                className="w-full h-[460px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent opacity-90" />
            </div>

            {/* Floating Experience Badge Card */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 max-w-[260px] shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center text-[#F5F5F0]">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <span className="block text-3xl font-bold text-[#F5F5F0] font-['Space_Grotesk']">
                    43+
                  </span>
                  <span className="block text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">
                    Years Experience
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#A0A0A0]">
                Decades of proven craftsmanship and trust.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#C5A059]/40 bg-[#C5A059]/10 rounded-lg text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase">
              <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>ESTABLISHED TRADITION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] leading-tight">
              43+ Years of Craftsmanship & Trust
            </h2>

            <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
              New Bharat Mechanical Works began as a specialized metal fabrication workshop focused on building quality gates, grills, doors, and custom steel work.
            </p>

            <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
              Over the decades, through consistent quality and client trust, the business expanded its capabilities to become a general contractor offering a comprehensive range of solutions across steel, aluminium, glass, wood, UPVC, interiors, roofing, and custom project requirements.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#F5F5F0]">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={openQuoteWhatsApp}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#F5F5F0] rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[#b08c4b] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
              >
                <Wrench className="w-4 h-4" />
                <span>Discuss Your Project With Us</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

