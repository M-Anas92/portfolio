import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose, onInquire }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#181c24] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto max-h-[90vh] overflow-y-auto custom-scrollbar"
        >
          {/* Close Icon */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#262a33] text-[#c2c6d6] hover:text-white hover:bg-[#31353e] flex items-center justify-center transition-all border border-white/10"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Header Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#4d8eff]/20 text-[#adc6ff] font-mono text-xs font-semibold">
              {project.category}
            </span>
            <span className="text-[#8c909f] font-mono text-xs">•</span>
            <span className="font-mono text-xs text-[#4edea3]">{project.framework}</span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#dfe2ee] mb-2 leading-tight">
            {project.title}
          </h3>

          <span className="font-mono text-xs text-[#8c909f] block mb-4">
            Timeline: {project.timeline}
          </span>

          {/* Image Banner */}
          <div className="h-52 w-full bg-[#262a33] rounded-2xl overflow-hidden mb-6 relative border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181c24] via-transparent to-transparent"></div>
          </div>

          {/* Description */}
          <p className="font-body text-sm sm:text-base text-[#c2c6d6] leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          {/* Architecture Deliverables */}
          <div className="p-4 rounded-xl bg-[#1c2028] border border-white/5 mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8c909f] block mb-3">
              Key Architecture Deliverables
            </span>
            <ul className="space-y-2 font-body text-xs sm:text-sm text-[#c2c6d6]">
              {project.architectureDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#4d8eff] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3 mb-6">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#262a33] text-center border border-white/5">
                  <span className="font-display text-lg sm:text-xl font-bold text-[#adc6ff] block">
                    {m.value}
                  </span>
                  <span className="font-mono text-[10px] text-[#8c909f] uppercase block mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8c909f] block mb-2">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#262a33] font-mono text-xs text-[#d0bcff] border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#262a33] text-[#dfe2ee] font-body text-xs font-semibold hover:bg-[#31353e] transition-all"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-white font-body text-xs font-semibold hover:shadow-lg hover:shadow-[#4d8eff]/30 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>Inquire / Contact</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
