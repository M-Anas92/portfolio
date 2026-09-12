import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, primaryStack } from '../data/portfolioData';
import PhoneSimulator from './PhoneSimulator';

export default function Hero({ onCopyEmail }) {
  return (
    <section className="relative w-full overflow-hidden pb-16 pt-8 min-h-screen flex items-center">
      {/* Ambient Energy Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-[#4d8eff]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-[480px] h-[480px] bg-[#571bc1]/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-[#00a572]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        {/* Overline Signal Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181c24] border border-white/5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
            </span>
            <span className="font-mono text-[11px] text-[#4edea3] uppercase tracking-wider font-semibold">
              Production Telemetry: Active
            </span>
            <span className="text-[#424754] font-mono text-[11px]">•</span>
            <span className="font-mono text-[11px] text-[#c2c6d6]">
              Flutter 3.x / Cross-Platform Engine
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#8c909f] font-mono text-xs">
            <span className="material-symbols-outlined text-[16px] text-[#4d8eff]">speed</span>
            <span>Target: 120Hz ProMotion Sustained</span>
          </div>
        </motion.div>

        {/* Hero 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Flanking Module */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-5 order-2 lg:order-1"
          >
            {/* Primary Mission Card */}
            <div className="bg-[#181c24]/90 backdrop-blur-xl p-6 sm:p-7 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden group hover:border-[#4d8eff]/30 transition-all duration-300">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#4d8eff]/10 rounded-full blur-2xl group-hover:bg-[#4d8eff]/20 transition-all"></div>
              
              <span className="font-mono text-xs uppercase tracking-widest text-[#adc6ff] font-semibold block mb-2">
                {personalInfo.title}
              </span>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-[#dfe2ee] font-bold tracking-tight mb-3 leading-tight">
                Crafting cross-platform{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#adc6ff] via-[#d0bcff] to-[#4edea3]">
                  Flutter & Web
                </span>{' '}
                experiences.
              </h1>

              <p className="font-body text-sm sm:text-base text-[#c2c6d6] leading-relaxed mb-4">
                {personalInfo.bio}
              </p>

              {/* Direct Contact Snippets */}
              <div className="flex flex-col gap-1.5 text-xs font-mono text-[#c2c6d6] pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4d8eff] text-[16px]">call</span>
                  <span>{personalInfo.phones.join(' / ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4edea3] text-[16px]">mail</span>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#d0bcff] text-[16px]">location_on</span>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Primary Stack & Tooling Pills */}
            <div className="bg-[#181c24]/80 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-md">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8c909f] mb-3 block">
                Primary Stack & Tooling
              </span>
              <div className="flex flex-wrap gap-2">
                {primaryStack.map((item) => (
                  <span
                    key={item.name}
                    className="px-3 py-1 rounded-lg bg-[#262a33] font-mono text-xs text-[#dfe2ee] border border-white/5 hover:border-[#4d8eff]/30 transition-all hover:scale-105"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-white font-body text-sm font-semibold hover:shadow-lg hover:shadow-[#4d8eff]/30 active:scale-95 transition-all"
              >
                <span>Explore Projects</span>
                <span className="material-symbols-outlined text-[18px]">south</span>
              </a>

              <button
                onClick={onCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#262a33] hover:bg-[#31353e] text-[#dfe2ee] font-body text-sm transition-all border border-white/10 active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px] text-[#4d8eff]">content_copy</span>
                <span>Copy Email</span>
              </button>
            </div>
          </motion.div>

          {/* Center Stage: Phone Simulator */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 py-4">
            <PhoneSimulator />
          </div>

          {/* Right Flanking Module */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-5 order-3"
          >
            {/* Live Focus Widget */}
            <div className="bg-[#181c24]/90 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4d8eff] text-[20px]">terminal</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#dfe2ee] font-semibold">
                    Current Focus
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#00a572]/20 text-[#4edea3] font-mono text-[10px] font-semibold">
                  Active 2026
                </span>
              </div>
              <p className="font-body text-sm text-[#c2c6d6] mb-4 leading-relaxed">
                Building cross-platform Flutter mobile applications and modern full-stack web solutions (React, Node.js) with Firebase architecture.
              </p>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#1c2028] font-mono text-xs border border-white/5">
                <span className="text-[#c2c6d6]">Design Mastery</span>
                <span className="text-[#4edea3] font-semibold">{personalInfo.designExperience}</span>
              </div>
            </div>

            {/* SLA Engineering Matrix */}
            <div className="bg-[#181c24]/80 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/10 shadow-md flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8c909f]">
                Mobile Engineering Matrix
              </span>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs font-body mb-1">
                    <span className="text-[#dfe2ee]">Cross-Platform Support</span>
                    <span className="font-mono text-[#4edea3] font-semibold">Android, iOS, Web, macOS</span>
                  </div>
                  <div className="w-full bg-[#31353e] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#4edea3] h-full w-[95%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-body mb-1">
                    <span className="text-[#dfe2ee]">State & Provider Logic</span>
                    <span className="font-mono text-[#adc6ff] font-semibold">Modular Services</span>
                  </div>
                  <div className="w-full bg-[#31353e] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#4d8eff] h-full w-[92%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-body mb-1">
                    <span className="text-[#dfe2ee]">Firebase Integration</span>
                    <span className="font-mono text-[#d0bcff] font-semibold">Auth, DB & Storage</span>
                  </div>
                  <div className="w-full bg-[#31353e] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#571bc1] h-full w-[98%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Freelance Seal */}
            <div className="p-5 rounded-2xl bg-[#262a33]/80 backdrop-blur-xl border border-white/10 shadow-sm flex items-center gap-4">
              <span className="material-symbols-outlined text-[#d0bcff] text-[32px] shrink-0">
                verified
              </span>
              <div className="flex flex-col">
                <span className="font-headline text-base font-semibold text-[#dfe2ee]">
                  Self-Employed Developer
                </span>
                <span className="font-body text-xs text-[#c2c6d6] leading-relaxed">
                  Serving small business & international clients with clean code and high UX fidelity.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
