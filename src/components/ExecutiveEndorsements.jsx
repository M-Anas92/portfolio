import React from 'react';
import { motion } from 'framer-motion';
import { endorsements } from '../data/portfolioData';

export default function ExecutiveEndorsements() {
  return (
    <section className="relative w-full py-20 bg-[#0f131c]/60 border-t border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#4d8eff] font-semibold">
            Reputation & Network
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#dfe2ee] font-bold tracking-tight mt-1">
            Executive Endorsements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {endorsements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#181c24] p-6 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#4d8eff]/30 transition-all"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1 text-[#4d8eff]">
                  {[...Array(item.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body text-sm text-[#dfe2ee] italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-headline text-sm font-bold text-[#dfe2ee]">
                    {item.name}
                  </span>
                  <span className="font-body text-xs text-[#c2c6d6]">
                    {item.role} • {item.company}
                  </span>
                </div>
                <span className="material-symbols-outlined text-[#8c909f] text-[24px]">
                  format_quote
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
