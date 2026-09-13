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
    <section className="bg-[#0b0f17] border-y border-white/[0.06] py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 flex items-start gap-4 hover:border-amber-500/40 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group backdrop-blur-sm overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shrink-0 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-0.5 group-hover:text-amber-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium tracking-wide mt-0.5">
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
