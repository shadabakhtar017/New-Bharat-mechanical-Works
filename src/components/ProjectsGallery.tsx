import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectItem } from '../data/projects';
import { LayoutGrid, Eye, MessageSquare, X, MapPin } from 'lucide-react';
import { openProjectWhatsApp } from '../utils/whatsapp';

export const ProjectsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Gates", "Steel Work", "Glass", "Aluminium", "Interior", "Shutters", "Doors"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase() || p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            <LayoutGrid className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>PORTFOLIO & WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] font-['Space_Grotesk'] mb-4 tracking-tight">
            Our Recent Projects & Craftsmanship
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            Explore our curated gallery of custom gates, structural steel, glass railings, interiors, and architectural installations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#C5A059] text-[#F5F5F0]'
                  : 'bg-[#141414] text-[#A0A0A0] border border-[#2A2A2A] hover:text-[#F5F5F0] hover:border-[#C5A059]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg group cursor-pointer hover:border-[#C5A059] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#C5A059]/15 border border-[#C5A059]/30 rounded-lg text-[#C5A059] text-[10px] font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#A0A0A0] uppercase tracking-widest">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#F5F5F0] mb-3 font-['Space_Grotesk'] group-hover:text-[#C5A059] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#A0A0A0] line-clamp-3 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openProjectWhatsApp(project.title, project.category);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-lg text-[#C5A059] hover:bg-[#C5A059] hover:text-[#F5F5F0] text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Enquire Similar Project</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#0F0F0F]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg max-w-xl w-full overflow-hidden shadow-2xl relative flex flex-col p-6 sm:p-8">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg text-[#F5F5F0] hover:bg-[#E4E4E7] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#C5A059]/15 border border-[#C5A059]/30 rounded-lg text-[#C5A059] text-[10px] font-bold uppercase tracking-widest">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-[#A0A0A0] flex items-center gap-1 uppercase tracking-widest">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> {selectedProject.location}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#F5F5F0] font-['Space_Grotesk']">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="pt-6 border-t border-[#2A2A2A] flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 border border-[#2A2A2A] rounded-lg text-xs font-bold uppercase tracking-wider text-[#F5F5F0] hover:bg-[#E4E4E7] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    openProjectWhatsApp(selectedProject.title, selectedProject.category);
                    setSelectedProject(null);
                  }}
                  className="px-6 py-3 bg-[#C5A059] text-[#F5F5F0] rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#b08c4b] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Enquire on WhatsApp
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

