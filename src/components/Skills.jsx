import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const devSkills = [
    { name: 'Flutter', color: 'bg-blue-600' },
    { name: 'Dart', color: 'bg-blue-600' },
    { name: 'Android Studio', color: 'bg-blue-600' },
    { name: 'Firebase', color: 'bg-emerald-600' },
    { name: 'HTML5', color: 'bg-indigo-600' },
    { name: 'CSS3', color: 'bg-indigo-600' },
    { name: 'JavaScript (JS)', color: 'bg-indigo-600' },
    { name: 'REACT', color: 'bg-blue-600' },
    { name: 'Node.js', color: 'bg-emerald-600' },
    { name: 'REST APIs', color: 'bg-slate-500' },
  ];

  const designSkills = [
    { name: 'UI/UX Design', color: 'bg-indigo-600' },
    { name: 'Figma', color: 'bg-indigo-600' },
    { name: 'Adobe XD', color: 'bg-blue-600' },
    { name: 'Photoshop', color: 'bg-blue-600' },
    { name: 'Illustrator', color: 'bg-emerald-600' },
  ];

  return (
    <section className="relative w-full py-20 bg-[#0a0e16] border-y border-white/5 transition-colors duration-300" id="skills">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#4d8eff] font-bold">
            Core Competencies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#dfe2ee] font-bold tracking-tight mt-1">
            Skills Matrix
          </h2>
          <p className="font-body text-sm text-[#c2c6d6] mt-2 max-w-xl">
            Development stack and design capabilities directly mapped from Muhammad Anas Azeem's resume.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Dev Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#181c24] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-headline text-xl font-bold text-[#adc6ff]">
                  Development Skills
                </span>
                <span className="px-3 py-0.5 rounded-full bg-[#262a33] text-[#adc6ff] font-mono text-[10px] uppercase font-bold border border-transparent">
                  Dev
                </span>
              </div>
              <p className="font-body text-sm text-[#c2c6d6] leading-relaxed">
                Cross-platform mobile application engineering, responsive full-stack web practice, and cloud database integrations.
              </p>

              <div className="grid grid-cols-2 gap-2.5 mt-2">
                {devSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-xl bg-[#1c2028] border border-white/5 flex items-center gap-2"
                  >
                    <span className={`w-2 h-2 rounded-full ${skill.color}`}></span>
                    <span className="font-body text-xs font-semibold text-[#dfe2ee]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Design Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#181c24] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-headline text-xl font-bold text-[#d0bcff]">
                  Design Skills
                </span>
                <span className="px-3 py-0.5 rounded-full bg-[#262a33] text-[#d0bcff] font-mono text-[10px] uppercase font-bold border border-transparent">
                  5+ Years
                </span>
              </div>
              <p className="font-body text-sm text-[#c2c6d6] leading-relaxed">
                Over five years of professional design experience translating brand concepts into polished user interfaces and prototype systems.
              </p>

              <div className="grid grid-cols-2 gap-2.5 mt-2">
                {designSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-xl bg-[#1c2028] border border-white/5 flex items-center gap-2"
                  >
                    <span className={`w-2 h-2 rounded-full ${skill.color}`}></span>
                    <span className="font-body text-xs font-semibold text-[#dfe2ee]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

