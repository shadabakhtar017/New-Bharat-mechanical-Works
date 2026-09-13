import React from 'react';
import { JOURNEY_MILESTONES } from '../data/journey';
import { Clock, CheckCircle } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-[#141414] border-t border-[#2A2A2A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>OUR EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] mb-4">
            43 Years of Continuous Growth
          </h2>
          <p className="text-[#A0A0A0] text-base sm:text-lg">
            From a dedicated metal workshop to a multi-service general contracting leader. Here is how we evolved to serve our clients better.
          </p>
        </div>

        {/* Timeline Grid / Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {JOURNEY_MILESTONES.map((milestone, idx) => (
            <div
              key={idx}
              className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg p-6 flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#0F0F0F]/15 text-[#C5A059] text-xs font-bold font-['Space_Grotesk'] border border-[#C5A059]/30 rounded-lg">
                    {milestone.period}
                  </span>
                  <CheckCircle className="w-4 h-4 text-[#C5A059]/60 group-hover:text-[#C5A059] transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-[#F5F5F0] mb-2 font-['Space_Grotesk'] group-hover:text-[#C5A059] transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6">
                  {milestone.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A2A2A]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5F5F0] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
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

