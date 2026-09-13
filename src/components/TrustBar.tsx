import React from 'react';
import { ShieldCheck, Layers, Wrench, Building2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const stats = [
    {
      number: "43+",
      label: "Years of Experience",
      sub: "Established in 1983",
      icon: ShieldCheck
    },
    {
      number: "11+",
      label: "Service Categories",
      sub: "Under One Roof",
      icon: Layers
    },
    {
      number: "Custom",
      label: "Project Solutions",
      sub: "Tailored to Your Space",
      icon: Wrench
    },
    {
      number: "Residential + Commercial",
      label: "Project Support",
      sub: "Trusted Contractor",
      icon: Building2
    }
  ];

  return (
    <section className="bg-[#141414] border-y border-[#2A2A2A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 flex items-start gap-4 hover:border-[#C5A059] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-10 h-10 border border-[#333] flex items-center justify-center text-[#C5A059] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F5F5F0]">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-[#A0A0A0] uppercase tracking-widest mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

