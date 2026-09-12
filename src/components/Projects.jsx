import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleInquireRedirect = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-20 bg-[#0f131c]" id="projects">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#adc6ff] font-semibold">
              Featured Development
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#dfe2ee] font-bold tracking-tight mt-1">
              Production & Personal Projects
            </h2>
          </motion.div>

          <p className="font-body text-sm text-[#c2c6d6] max-w-md">
            Featured cross-platform applications and web platforms directly from Muhammad Anas Azeem's engineering portfolio. Click any project card to open full architecture details.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
              className="bg-[#181c24] rounded-2xl overflow-hidden border border-white/10 shadow-xl flex flex-col justify-between group hover:border-[#4d8eff]/40 transition-all cursor-pointer"
            >
              <div>
                {/* Banner Visual */}
                <div className="h-48 w-full bg-[#262a33] relative p-5 flex flex-col justify-between overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181c24] via-black/40 to-transparent"></div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#0a0e16]/80 backdrop-blur-md font-mono text-xs text-[#adc6ff] font-semibold">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-xs text-[#4edea3] bg-[#0a0e16]/80 px-2 py-0.5 rounded">
                      <span className="material-symbols-outlined text-[14px]">code</span>
                      {project.framework}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="font-mono text-[10px] text-[#8c909f] uppercase tracking-wider block">
                      Timeline
                    </span>
                    <div className="font-display text-xl text-white font-bold">
                      {project.timeline}
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl text-[#dfe2ee] font-semibold group-hover:text-[#adc6ff] transition-colors">
                      {project.title}
                    </h3>
                    <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-semibold ${project.statusColor}`}>
                      {project.statusBadge}
                    </span>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[#c2c6d6] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Architecture Key Points */}
                  <div className="mt-2 p-3 rounded-xl bg-[#1c2028] flex flex-col gap-1.5 border border-white/5">
                    <span className="font-mono text-[10px] uppercase text-[#8c909f]">
                      Deliverable Highlights
                    </span>
                    <ul className="font-body text-xs text-[#c2c6d6] space-y-1">
                      {project.architectureDeliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[14px] text-[#4d8eff]">check</span>
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-[#262a33] text-[#d0bcff] font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4 pt-4">
                <span className="font-mono text-xs text-[#4d8eff] group-hover:text-[#adc6ff] flex items-center gap-1 font-semibold">
                  <span>Inspect Details & Pop-up</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
                <span className="font-mono text-[10px] text-[#8c909f] uppercase">
                  Modular Architecture
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquire={handleInquireRedirect}
        />
      )}
    </section>
  );
}
