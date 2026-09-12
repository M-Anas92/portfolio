import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="relative w-full py-20 bg-[#0f131c]" id="experience">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#4d8eff] font-semibold">
            Work History
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#dfe2ee] font-bold tracking-tight mt-1">
            Professional Experience
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#181c24] border border-white/10 shadow-lg hover:border-[#4d8eff]/30 transition-all hover:bg-[#1c2028]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#dfe2ee] font-semibold">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="font-body text-sm text-[#4d8eff] font-medium">
                      {exp.company}
                    </span>
                    <span className="text-[#8c909f]">•</span>
                    <span className="font-body text-xs text-[#c2c6d6]">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <span className="px-4 py-1.5 rounded-full bg-[#262a33] font-mono text-xs text-[#4edea3] font-semibold self-start md:self-auto border border-white/5">
                  {exp.period}
                </span>
              </div>

              <p className="font-body text-sm text-[#c2c6d6] mb-4 italic leading-relaxed">
                "{exp.summary}"
              </p>

              <ul className="font-body text-xs sm:text-sm text-[#c2c6d6] space-y-2 mb-6 list-disc pl-5">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="leading-relaxed">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#262a33] font-mono text-xs text-[#d0bcff] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
