import React from 'react';
import { JOURNEY_MILESTONES } from '../data/journey';
import { Clock, CheckCircle } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-[#0c1017] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-amber-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>OUR EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] mb-4 tracking-tight">
            43 Years of Continuous Growth
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            From a dedicated metal workshop to a multi-service general contracting leader. Here is how we evolved to serve our clients better.
          </p>
        </div>

        {/* Timeline Grid / Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {JOURNEY_MILESTONES.map((milestone, idx) => (
            <div
              key={idx}
              className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent group-hover:via-amber-400 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold font-['Space_Grotesk'] border border-amber-500/30 rounded-full">
                    {milestone.period}
                  </span>
                  <CheckCircle className="w-4 h-4 text-amber-500/60 group-hover:text-amber-400 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk'] group-hover:text-amber-300 transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {milestone.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  {milestone.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
