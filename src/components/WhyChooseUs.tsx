import React from 'react';
import { Award, Layers, Wrench, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      number: "01",
      title: "43+ Years of Experience",
      description: "Decades of hands-on fabrication and project execution experience, bringing proven expertise to every challenge.",
      icon: Award
    },
    {
      number: "02",
      title: "Wide Range of Services",
      description: "Multiple solutions under one trusted business — from metal and steel to glass, wood, UPVC, and interior works.",
      icon: Layers
    },
    {
      number: "03",
      title: "Custom Work",
      description: "Every solution is tailor-built around the specific architectural requirements and dimensions of your space.",
      icon: Wrench
    },
    {
      number: "04",
      title: "Skilled Craftsmanship",
      description: "Strong focus on practical workmanship, structural durability, and high-end aesthetic finishing.",
      icon: ShieldCheck
    },
    {
      number: "05",
      title: "One-Stop Project Support",
      description: "From initial fabrication to final interior and related installation works, we manage the complete lifecycle.",
      icon: CheckCircle
    },
    {
      number: "06",
      title: "Personal Attention",
      description: "A direct and practical approach to understanding project needs with transparent communication at every step.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0c1017] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-amber-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>UNWAVERING RELIABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] mb-4 tracking-tight">
            Why Clients Choose New Bharat Mechanical Works
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            We stand behind our work with uncompromising standards, deep industry experience, and customer-first dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="relative bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:bg-white/[0.04] group flex flex-col justify-between backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-amber-500/50 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-extrabold text-white/10 font-['Space_Grotesk'] group-hover:text-amber-400/30 transition-colors">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk'] group-hover:text-amber-300 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
