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
    <section id="why-us" className="py-24 bg-[#141414] border-t border-[#2A2A2A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>UNWAVERING RELIABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] mb-4">
            Why Clients Choose New Bharat Mechanical Works
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            We stand behind our work with uncompromising standards, deep industry experience, and customer-first dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-8 hover:border-[#C5A059] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-lg flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#F5F5F0] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-bold text-[#E4E4E7] font-['Space_Grotesk'] group-hover:text-[#C5A059]/40 transition-colors">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F5F0] mb-3 font-['Space_Grotesk'] group-hover:text-[#C5A059] transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#2A2A2A] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5F5F0]">Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

