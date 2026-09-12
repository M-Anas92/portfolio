import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Header({ onCopyEmail, onDownloadCV, isDarkMode, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero', onClick: scrollToHome },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f131c]/85 backdrop-blur-2xl border-b border-white/5 shadow-md transition-colors duration-300">
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Left Top Corner: Avatar & Name */}
        <div
          onClick={scrollToHome}
          className="flex items-center gap-3 shrink-0 cursor-pointer group hover:opacity-95 transition-all"
          title="Click to return to Home"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#4d8eff]/40 group-hover:ring-[#4d8eff] shadow-md bg-[#262a33] group-hover:scale-105 transition-all">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-headline font-semibold text-[15px] sm:text-base text-[#dfe2ee] group-hover:text-[#adc6ff] transition-colors tracking-tight">
                {personalInfo.name}
              </span>
              <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full bg-[#31353e] text-[#d0bcff] font-mono text-[10px] uppercase tracking-wider font-semibold border border-transparent">
                App Developer
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
              </span>
              <span className="font-mono text-[10px] text-[#4edea3] font-semibold tracking-wide uppercase truncate max-w-[200px] sm:max-w-none">
                {personalInfo.status} • {personalInfo.location}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden xl:flex items-center gap-1 p-1 rounded-xl bg-[#0a0e16]/60 border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={link.onClick}
              className="px-4 py-1.5 rounded-lg font-body text-xs text-[#c2c6d6] hover:text-[#dfe2ee] hover:bg-[#262a33]/60 transition-all font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Theme Switcher, CTA Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Dark / Light Mode Switcher Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-[#262a33] text-[#dfe2ee] hover:bg-[#31353e] hover:text-[#4d8eff] transition-all border border-white/10 flex items-center justify-center shadow-sm active:scale-90"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme mode"
          >
            <motion.span
              key={isDarkMode ? 'dark' : 'light'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="material-symbols-outlined text-[20px] text-[#4d8eff]"
            >
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </motion.span>
          </button>

          <button
            onClick={onCopyEmail}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#262a33] hover:bg-[#31353e] text-[#dfe2ee] font-body text-xs transition-all shadow-sm border border-white/5 hover:scale-105 active:scale-95 font-medium"
          >
            <span className="material-symbols-outlined text-[16px] text-[#4d8eff]">mail</span>
            <span>Email Me</span>
          </button>

          <button
            onClick={onDownloadCV}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-white font-body text-xs font-bold shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Download CV</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#262a33] text-[#dfe2ee] hover:bg-[#31353e] transition-all border border-transparent"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#181c24] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.onClick) link.onClick(e);
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 text-sm font-body text-[#c2c6d6] hover:text-[#4d8eff] transition-colors border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </a>
              ))}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                <button
                  onClick={onToggleTheme}
                  className="w-full py-2.5 rounded-lg bg-[#262a33] text-[#dfe2ee] font-body text-xs flex items-center justify-center gap-2 border border-white/10 font-medium"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#4d8eff]">
                    {isDarkMode ? 'light_mode' : 'dark_mode'}
                  </span>
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>

                <button
                  onClick={() => {
                    onDownloadCV();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-white font-body text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
