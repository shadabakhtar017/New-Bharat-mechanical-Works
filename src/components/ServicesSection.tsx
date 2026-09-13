import React, { useState } from 'react';
import { SERVICES_DATA, ServiceCategory } from '../data/services';
import { Shield, Wrench, Lock, Maximize2, Layout, Home, Sparkles, Sun, Key, CloudRain, Droplet, Check, ChevronDown, MessageSquare } from 'lucide-react';
import { openServiceWhatsApp } from '../utils/whatsapp';

export const ServicesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return Shield;
      case 'Wrench': return Wrench;
      case 'Lock': return Lock;
      case 'Maximize2': return Maximize2;
      case 'Layout': return Layout;
      case 'Home': return Home;
      case 'Sparkles': return Sparkles;
      case 'Sun': return Sun;
      case 'Key': return Key;
      case 'CloudRain': return CloudRain;
      case 'Droplet': return Droplet;
      default: return Wrench;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            <Wrench className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>COMPREHENSIVE EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] mb-4 tracking-tight">
            Everything You Need. Under One Roof.
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            From custom metal fabrication to complete interior and architectural solutions, our team handles a wide range of residential and commercial requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: ServiceCategory) => {
            const IconComponent = getIcon(service.iconName);
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`bg-[#141414] border rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between group ${
                  isExpanded ? 'border-[#C5A059] bg-[#F4F4F5]' : 'border-[#2A2A2A] hover:border-[#C5A059]'
                }`}
              >
                <div>
                  {/* Service Image Banner */}
                  <div className="relative h-48 overflow-hidden rounded-t-lg border-b border-[#2A2A2A]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 px-3 py-1 bg-[#0F0F0F]/90 border border-[#2A2A2A] rounded-lg text-[#C5A059] text-[10px] font-bold uppercase tracking-widest">
                      {service.badge}
                    </div>

                    <div className="absolute bottom-3 left-4 w-10 h-10 bg-[#C5A059] text-[#F5F5F0] rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#F5F5F0] mb-2 font-['Space_Grotesk'] group-hover:text-[#C5A059] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6">
                      {service.microcopy}
                    </p>

                    {/* Services Included Preview / Expand */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[10px] font-bold text-[#F5F5F0] uppercase tracking-widest mb-2">
                        Included Solutions:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.items.slice(0, isExpanded ? service.items.length : 4).map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg text-[11px] text-[#A0A0A0]"
                          >
                            <Check className="w-3 h-3 text-[#C5A059]" />
                            {item}
                          </span>
                        ))}
                        {service.items.length > 4 && !isExpanded && (
                          <button
                            onClick={() => toggleExpand(service.id)}
                            className="text-[11px] text-[#C5A059] font-bold uppercase tracking-wider hover:underline px-2 py-1 cursor-pointer inline-flex items-center gap-1 rounded-lg"
                          >
                            +{service.items.length - 4} more <ChevronDown className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 border-t border-[#2A2A2A] mt-auto">
                  <div className="flex items-center justify-between gap-3 pt-4">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0] hover:text-[#F5F5F0] transition-colors cursor-pointer"
                    >
                      {isExpanded ? "Show Less" : "View All Items"}
                    </button>

                    <button
                      onClick={() => openServiceWhatsApp(service.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-lg text-[#C5A059] hover:bg-[#C5A059] hover:text-[#F5F5F0] text-[10px] font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp Us</span>
                    </button>
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

