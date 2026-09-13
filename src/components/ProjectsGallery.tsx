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
    <section id="projects" className="py-24 bg-[#090c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            <LayoutGrid className="w-3.5 h-3.5 text-amber-400" />
            <span>PORTFOLIO & WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] mb-4 tracking-tight">
            Our Recent Projects & Craftsmanship
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Explore our curated gallery of custom gates, structural steel, glass railings, interiors, and architectural installations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 font-bold'
                  : 'bg-white/[0.03] text-slate-300 border border-white/[0.08] hover:text-white hover:border-amber-500/40 hover:bg-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white/[0.02] border border-white/[0.08] rounded-3xl group cursor-pointer hover:border-amber-500/40 hover:bg-white/[0.03] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between p-6 sm:p-7 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk'] group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openProjectWhatsApp(project.title, project.category);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer"
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
        <div className="fixed inset-0 z-50 bg-[#090c10]/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#0f141c] border border-white/10 rounded-3xl max-w-xl w-full overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative flex flex-col p-6 sm:p-8">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-10 p-2 bg-white/[0.05] border border-white/10 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> {selectedProject.location}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {selectedProject.description}
              </p>

              <div className="pt-6 border-t border-white/[0.08] flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-3 border border-white/10 bg-white/[0.04] rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    openProjectWhatsApp(selectedProject.title, selectedProject.category);
                    setSelectedProject(null);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-amber-500/25 flex items-center gap-2 cursor-pointer transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
