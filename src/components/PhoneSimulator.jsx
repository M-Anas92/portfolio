import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function PhoneSimulator() {
  const [activeTab, setActiveTab] = useState('profile');
  const [currentTime, setCurrentTime] = useState('01:16');
  const [popFeedback, setPopFeedback] = useState(null);

  // Dynamic status bar clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const triggerPop = (label) => {
    setPopFeedback(label);
    setTimeout(() => setPopFeedback(null), 1200);
  };

  const tabMetadata = {
    profile: {
      dotColor: 'bg-[#4edea3]',
      status: 'LIVE',
      statusColor: 'text-[#4edea3]',
      icon: 'graphic_eq',
      iconColor: 'text-[#4d8eff]',
      text: 'Flutter Core',
    },
    fintech: {
      dotColor: 'bg-[#4d8eff]',
      status: 'PROPMAP',
      statusColor: 'text-[#adc6ff]',
      icon: 'cloud_sync',
      iconColor: 'text-[#4edea3]',
      text: 'Firestore Sync',
    },
    health: {
      dotColor: 'bg-[#d0bcff]',
      status: 'PORTFOLIO',
      statusColor: 'text-[#d0bcff]',
      icon: 'code',
      iconColor: 'text-[#4d8eff]',
      text: 'React & Vite',
    },
    social: {
      dotColor: 'bg-[#4edea3]',
      status: 'HEALTH',
      statusColor: 'text-[#4edea3]',
      icon: 'fitness_center',
      iconColor: 'text-[#4edea3]',
      text: '21.4 Normal',
    },
  };

  const meta = tabMetadata[activeTab] || tabMetadata.profile;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.03, y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[340px] sm:w-[380px] h-[740px] bg-[#0a0e16] rounded-[54px] p-3.5 shadow-2xl shadow-black/90 ring-1 ring-white/10 backdrop-blur-3xl group mx-auto select-none cursor-pointer"
    >
      {/* Ambient Backlight Halo behind Chassis */}
      <div className="absolute inset-0 rounded-[54px] bg-gradient-to-b from-[#4d8eff]/30 via-[#571bc1]/25 to-[#00a572]/25 blur-3xl -z-10 group-hover:opacity-100 group-hover:blur-3xl transition-all duration-500"></div>

      {/* Pop-up Visual Badge Alert overlay on screen hover */}
      <AnimatePresence>
        {popFeedback && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 px-4 py-1.5 rounded-full bg-[#4d8eff] text-white font-mono text-xs font-semibold shadow-xl border border-white/20 flex items-center gap-1.5 pointer-events-none"
          >
            <span className="material-symbols-outlined text-[16px]">touch_app</span>
            <span>{popFeedback}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Titanium Outer Bezel Specular Edge */}
      <div className="absolute inset-0 rounded-[54px] pointer-events-none shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.15),_inset_0_2px_4px_rgba(255,255,255,0.3)] z-40"></div>

      {/* Screen Viewport Container */}
      <div className="relative w-full h-full bg-[#0f131c] rounded-[44px] overflow-hidden flex flex-col justify-between">
        {/* Glass Specular Reflection Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] z-30"></div>

        {/* Top Status Bar & Dynamic Island */}
        <div className="relative z-40 pt-3 px-6 flex flex-col items-center">
          <div className="w-full flex items-center justify-between font-mono text-[10px] text-[#c2c6d6] font-semibold">
            <span>{currentTime}</span>

            {/* Dynamic Island Black Pill */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              onClick={() => triggerPop(`Dynamic Island: ${meta.status}`)}
              className="h-6 w-36 bg-black rounded-full px-2.5 flex items-center justify-between shadow-inner border border-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: -6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.9 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${meta.dotColor} animate-pulse`}></span>
                    <span className={`font-mono text-[8px] tracking-tighter font-bold ${meta.statusColor}`}>
                      {meta.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className={`material-symbols-outlined text-[10px] ${meta.iconColor}`}>
                      {meta.icon}
                    </span>
                    <span className={`font-mono text-[8px] truncate max-w-[62px] ${meta.iconColor}`}>
                      {meta.text}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="flex items-center gap-1 text-[#c2c6d6]">
              <span className="material-symbols-outlined text-[12px]">signal_cellular_alt</span>
              <span className="material-symbols-outlined text-[12px]">wifi</span>
              <span className="material-symbols-outlined text-[14px] text-[#4edea3]">battery_charging_full</span>
            </div>
          </div>
        </div>

        {/* Screen Content Body */}
        <div className="relative z-20 flex-1 px-4 pt-3 overflow-y-auto pb-3 custom-scrollbar flex flex-col">
          <AnimatePresence mode="wait">
            {/* VIEW 1: Profile */}
            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3"
              >
                {/* Profile Header Card with Pop Hover */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => triggerPop('Profile Card Clicked')}
                  className="flex items-center gap-3 bg-[#181c24] p-3 rounded-2xl border border-white/5 shadow-sm hover:border-[#4d8eff]/40 transition-all cursor-pointer"
                >
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-14 h-14 rounded-full object-cover shadow-md ring-2 ring-[#4d8eff]/40"
                  />
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-headline text-[14px] leading-tight font-bold text-[#dfe2ee] truncate">
                        {personalInfo.shortName}
                      </span>
                      <span className="material-symbols-outlined text-[#4d8eff] text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        verified
                      </span>
                    </div>
                    <span className="font-body text-[11px] text-[#c2c6d6] truncate">
                      {personalInfo.title}
                    </span>
                    <span className="font-mono text-[9px] text-[#4edea3] flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                      Available for Hire • Faisalabad
                    </span>
                  </div>
                </motion.div>

                {/* Bio pill */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-3 rounded-xl bg-[#1c2028] font-body text-[12px] text-[#dfe2ee] leading-relaxed border border-white/5"
                >
                  {personalInfo.bio}
                </motion.div>

                {/* Quick Metric Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-2.5 rounded-xl bg-[#181c24] flex flex-col border border-white/5 cursor-pointer"
                  >
                    <span className="font-headline text-[18px] font-bold text-[#dfe2ee]">
                      {personalInfo.experienceYears}
                    </span>
                    <span className="font-mono text-[9px] uppercase text-[#8c909f] mt-0.5">
                      Experience
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-2.5 rounded-xl bg-[#181c24] flex flex-col border border-white/5 cursor-pointer"
                  >
                    <span className="font-headline text-[18px] font-bold text-[#adc6ff]">
                      Flutter
                    </span>
                    <span className="font-mono text-[9px] uppercase text-[#8c909f] mt-0.5">
                      Cross-Platform Core
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-2.5 rounded-xl bg-[#181c24] flex flex-col border border-white/5 cursor-pointer"
                  >
                    <span className="font-headline text-[18px] font-bold text-[#d0bcff]">
                      React
                    </span>
                    <span className="font-mono text-[9px] uppercase text-[#8c909f] mt-0.5">
                      Vite + Web Stack
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-2.5 rounded-xl bg-[#181c24] flex flex-col border border-white/5 cursor-pointer"
                  >
                    <span className="font-headline text-[18px] font-bold text-[#4edea3]">
                      Firebase
                    </span>
                    <span className="font-mono text-[9px] uppercase text-[#8c909f] mt-0.5">
                      Backend System
                    </span>
                  </motion.div>
                </div>

                {/* Actions inside Phone */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActiveTab('fintech');
                      triggerPop('Switched to PropMap AI');
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-[#4d8eff] text-white font-body text-[12px] font-semibold flex items-center justify-between shadow-sm active:scale-95 transition-transform"
                  >
                    <span>Inspect PropMap AI App</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    href="#skills"
                    className="w-full py-2 px-3 rounded-xl bg-[#262a33] hover:bg-[#31353e] text-[#dfe2ee] font-body text-[12px] flex items-center justify-between border border-white/5"
                  >
                    <span>Review Skills & Stack</span>
                    <span className="material-symbols-outlined text-[14px]">terminal</span>
                  </motion.a>
                </div>
              </motion.div>
            )}

            {/* VIEW 2: PropMap AI App */}
            {activeTab === 'fintech' && (
              <motion.div
                key="fintech"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded-lg bg-[#4d8eff]/20 text-[#adc6ff] flex items-center justify-center font-headline text-[12px] font-bold">
                      P
                    </span>
                    <div>
                      <h4 className="font-headline text-[13px] font-bold text-[#dfe2ee] leading-none">
                        PropMap AI
                      </h4>
                      <span className="font-mono text-[9px] text-[#4edea3] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                        Firebase Sync Active
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#262a33] font-mono text-[9px] text-[#adc6ff]">
                    Faisalabad, PK
                  </span>
                </div>

                <div className="relative h-28 w-full rounded-2xl bg-[#181c24] overflow-hidden border border-white/10 shadow-md group">
                  <div className="absolute inset-0 bg-[radial-gradient(#31353e_1px,transparent_1px)] [background-size:12px_12px] opacity-70"></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    onClick={() => triggerPop('$120k Villa Pin Selected')}
                    className="absolute top-4 left-10 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#4d8eff] text-white font-mono text-[9px] font-bold shadow-lg cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[10px]">apartment</span>$120k
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    onClick={() => triggerPop('$250k Luxury Pin Selected')}
                    className="absolute top-7 right-8 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00a572] text-white font-mono text-[10px] font-bold shadow-lg ring-2 ring-[#4edea3]/40 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[11px]">villa</span>$250k
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  onClick={() => triggerPop('Skyline Lux Details')}
                  className="bg-[#181c24] rounded-2xl overflow-hidden border border-white/10 shadow-md p-3 cursor-pointer"
                >
                  <span className="font-headline text-[13px] font-bold text-white block">Skyline Lux Residence</span>
                  <span className="font-mono text-[9px] text-white/80">Canal Road, Faisalabad</span>
                  <span className="font-mono text-[13px] text-[#4edea3] font-bold block mt-1">$185,000</span>
                </motion.div>
              </motion.div>
            )}

            {/* VIEW 3: Portfolio Dev Hub */}
            {activeTab === 'health' && (
              <motion.div
                key="health"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  onClick={() => triggerPop('M. Anas Azeem Profile')}
                  className="p-3 rounded-2xl bg-[#181c24] border border-white/10 flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#4d8eff] to-[#571bc1] flex items-center justify-center text-white font-headline font-bold text-[13px]">
                      MA
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline text-[13px] font-bold text-[#dfe2ee]">M. Anas Azeem</span>
                      <span className="font-mono text-[9px] text-[#4edea3]">anasazeem.dev</span>
                    </div>
                  </div>
                </motion.div>

                <div className="p-2 rounded-xl bg-[#0a0e16] border border-white/10 font-mono text-[10px] flex items-center gap-1.5 text-[#c2c6d6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                  <span className="text-[#d0bcff] font-bold">8f29c1</span>
                  <span className="truncate text-[#dfe2ee]">feat: cross-platform responsive layout</span>
                </div>
              </motion.div>
            )}

            {/* VIEW 4: BMI App */}
            {activeTab === 'social' && (
              <motion.div
                key="social"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  onClick={() => triggerPop('BMI 21.4 Normal Range')}
                  className="w-full rounded-2xl bg-[#181c24] p-4 flex flex-col items-center border border-white/10 shadow-md cursor-pointer"
                >
                  <span className="font-mono text-[10px] text-[#8c909f] uppercase tracking-wider">Your Body Mass Index</span>
                  <div className="font-headline text-[34px] text-[#4edea3] font-bold leading-none mt-1">21.4</div>
                  <div className="inline-flex items-center gap-1 mt-1 px-2.5 py-0.5 rounded-full bg-[#4edea3]/15 text-[#4edea3] font-mono text-[10px] font-bold">
                    Normal Weight Range
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Segmented Dock Controls with Pop Animation on Hover & Tap */}
        <div className="relative z-40 p-2.5 bg-[#0a0e16] shadow-lg border-t border-white/5">
          <div className="flex items-center justify-around bg-[#181c24] p-1 rounded-full border border-white/5">
            {[
              { id: 'profile', label: 'Profile' },
              { id: 'fintech', label: 'PropMap' },
              { id: 'health', label: 'Portfolio' },
              { id: 'social', label: 'BMI App' },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setActiveTab(tab.id);
                  triggerPop(`Dock: ${tab.label}`);
                }}
                className={`px-2.5 py-1 rounded-full font-mono text-[10px] transition-all ${
                  activeTab === tab.id
                    ? 'text-[#adc6ff] bg-[#262a33] font-semibold ring-1 ring-[#4d8eff]/40 shadow-sm'
                    : 'text-[#c2c6d6] hover:text-white'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* iOS Home Bar */}
          <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mt-2"></div>
        </div>
      </div>
    </motion.div>
  );
}
