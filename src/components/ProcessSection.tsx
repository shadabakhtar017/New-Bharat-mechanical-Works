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
    <section className="py-24 bg-[#141414] border-t border-[#2A2A2A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] mb-4">
            Simple, Transparent 4-Step Process
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            We make project execution seamless from initial conversation to final installation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-6 relative group hover:border-[#C5A059] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-lg flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#F5F5F0] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold text-[#C5A059]/50 font-['Space_Grotesk']">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F5F0] mb-2 font-['Space_Grotesk']">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2A2A2A] flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0]">
                  <span>Step {item.step} of 04</span>
                  <div className="w-6 h-1 bg-[#C5A059]/30 group-hover:bg-[#C5A059] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

