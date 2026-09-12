import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onCopyEmail }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    category: 'flutter',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setTimeout(() => setSubmittedSuccess(false), 4000);
      setFormState({ name: '', email: '', category: 'flutter', message: '' });
    }, 1200);
  };

  return (
    <section className="relative w-full py-20 bg-[#0f131c]" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#181c24] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Background Lighting Orbs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#4d8eff]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#571bc1]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#4d8eff] font-semibold">
                  Get In Touch
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#dfe2ee] font-bold tracking-tight mt-1 mb-3">
                  Contact {personalInfo.name}
                </h2>
                <p className="font-body text-sm sm:text-base text-[#c2c6d6] leading-relaxed">
                  Seeking an App Developer role to build hands-on experience in mobile application development. Available for Flutter cross-platform projects, UI/UX design, and full-stack web solutions.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="flex flex-col gap-3">
                <div className="p-4 rounded-2xl bg-[#1c2028] flex items-center gap-4 border border-white/5">
                  <span className="material-symbols-outlined text-[#4d8eff] text-[28px] shrink-0">
                    mail
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] text-[#8c909f] uppercase">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono text-sm text-[#dfe2ee] hover:text-[#4d8eff] transition-colors truncate"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#1c2028] flex items-center gap-4 border border-white/5">
                  <span className="material-symbols-outlined text-[#4edea3] text-[28px] shrink-0">
                    call
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#8c909f] uppercase">
                      Direct Phone Numbers
                    </span>
                    <span className="font-body text-sm text-[#dfe2ee]">
                      {personalInfo.phones.join(' / ')}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#1c2028] flex items-center gap-4 border border-white/5">
                  <span className="material-symbols-outlined text-[#d0bcff] text-[28px] shrink-0">
                    location_on
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#8c909f] uppercase">
                      Location & LinkedIn
                    </span>
                    <span className="font-body text-sm text-[#dfe2ee]">
                      {personalInfo.location} •{' '}
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4d8eff] hover:underline font-semibold"
                      >
                        LinkedIn Profile
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={onCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#262a33] hover:bg-[#31353e] text-[#dfe2ee] font-body text-xs font-semibold transition-all border border-white/10 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#4d8eff]">content_copy</span>
                  <span>Copy Direct Email</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-white font-body text-xs font-semibold hover:shadow-lg hover:shadow-[#4d8eff]/30 active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6 bg-[#1c2028] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-inner">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-xs uppercase text-[#8c909f]">
                    Your Name & Company
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#181c24] text-[#dfe2ee] font-body text-sm placeholder:text-[#8c909f] focus:outline-none focus:ring-1 focus:ring-[#4d8eff] border border-white/5"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-xs uppercase text-[#8c909f]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#181c24] text-[#dfe2ee] font-body text-sm placeholder:text-[#8c909f] focus:outline-none focus:ring-1 focus:ring-[#4d8eff] border border-white/5"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-xs uppercase text-[#8c909f]">
                    Project Classification
                  </label>
                  <select
                    value={formState.category}
                    onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#181c24] text-[#dfe2ee] font-body text-sm focus:outline-none focus:ring-1 focus:ring-[#4d8eff] border border-white/5"
                  >
                    <option value="flutter">Cross-Platform Flutter Mobile App</option>
                    <option value="fullstack">Web Application (React / Node.js)</option>
                    <option value="uiux">UI/UX Design (Figma, Prototyping)</option>
                    <option value="firebase">Firebase Backend & Architecture</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-xs uppercase text-[#8c909f]">
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Brief description of your requirements, timeline, and target platforms..."
                    className="w-full px-4 py-3 rounded-xl bg-[#181c24] text-[#dfe2ee] font-body text-sm placeholder:text-[#8c909f] focus:outline-none focus:ring-1 focus:ring-[#4d8eff] border border-white/5"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 rounded-xl font-body text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    submittedSuccess
                      ? 'bg-[#00a572] text-white shadow-lg'
                      : 'bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-white hover:shadow-lg hover:shadow-[#4d8eff]/30 active:scale-[0.99]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] animate-spin">
                        progress_activity
                      </span>
                      <span>Securing Transmission...</span>
                    </>
                  ) : submittedSuccess ? (
                    <>
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      <span>Signal Received & Encrypted</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
