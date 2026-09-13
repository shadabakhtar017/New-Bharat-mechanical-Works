import React from 'react';
import { MessageSquare, Search, Wrench, CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Discuss",
      description: "Tell us about your requirement, project scope, and design preferences.",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Understand",
      description: "We analyze your space, structural specifications, and functional needs.",
      icon: Search
    },
    {
      step: "03",
      title: "Build",
      description: "Our skilled fabrication and installation team crafts your solution with precision.",
      icon: Wrench
    },
    {
      step: "04",
      title: "Deliver",
      description: "We complete the delivery and installation with strict attention to finish and quality.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-24 bg-[#0c1017] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-amber-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] mb-4 tracking-tight">
            Simple, Transparent 4-Step Process
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            We make project execution seamless from initial conversation to final installation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-7 relative group hover:border-amber-500/40 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-amber-500/50 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-white/15 font-['Space_Grotesk'] group-hover:text-amber-400/40 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk'] group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <span>Step {item.step} of 04</span>
                  <div className="w-8 h-1 rounded-full bg-white/10 group-hover:bg-amber-500 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
