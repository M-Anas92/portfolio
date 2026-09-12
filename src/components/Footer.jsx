import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#0a0e16] border-t border-white/5 pt-16 pb-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Col 1: Bio */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#4d8eff]/40 shadow-md bg-[#262a33]">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-headline text-lg font-bold text-[#dfe2ee]">
                {personalInfo.name}
              </span>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#c2c6d6] leading-relaxed max-w-sm">
              App Developer and freelance UI/UX designer crafting responsive cross-platform Flutter applications and modern web systems.
            </p>

            <div className="flex items-center gap-3 mt-2 font-mono text-xs text-[#c2c6d6]">
              <div className="flex items-center gap-1.5 bg-[#181c24] px-3 py-1 rounded-lg border border-white/5">
                <span className="material-symbols-outlined text-[14px] text-[#4edea3]">location_on</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#181c24] px-3 py-1 rounded-lg border border-white/5">
                <span className="material-symbols-outlined text-[14px] text-[#4d8eff]">verified</span>
                <span>Open for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Col 2: Direct Channels */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8c909f]">
              Direct Channels
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-xs text-[#adc6ff] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              {personalInfo.email}
            </a>
            <span className="font-body text-xs text-[#c2c6d6] mt-1">
              Phone: {personalInfo.phones.join(' / ')}
            </span>
          </div>

          {/* Col 3: Social Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8c909f]">
              Social & Profiles
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-[#181c24] flex items-center justify-center text-[#c2c6d6] hover:text-white hover:bg-[#262a33] transition-all border border-white/5"
              >
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-[#181c24] flex items-center justify-center text-[#c2c6d6] hover:text-white hover:bg-[#262a33] transition-all border border-white/5"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Direct Email"
                className="w-10 h-10 rounded-xl bg-[#181c24] flex items-center justify-center text-[#c2c6d6] hover:text-white hover:bg-[#262a33] transition-all border border-white/5"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-[#8c909f]">
          <p>© 2026 {personalInfo.name}. App Developer & UI/UX Designer.</p>
          <div className="font-mono text-xs text-[#c2c6d6]">
            Faisalabad, Pakistan
          </div>
        </div>
      </div>
    </footer>
  );
}
