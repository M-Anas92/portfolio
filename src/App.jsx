import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ExecutiveEndorsements from './components/ExecutiveEndorsements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import CustomCursor from './components/CustomCursor';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved !== null ? saved === 'dark' : true;
  });
  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Synchronize Dark / Light Mode with HTML element and localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light', 'light-mode');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light', 'light-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const nextMode = !prev;
      setToastMessage(nextMode ? 'Switched to Obsidian Dark Mode' : 'Switched to Clean Light Mode');
      setToastShow(true);
      setTimeout(() => setToastShow(false), 2500);
      return nextMode;
    });
  };

  // Top Scroll Progress Line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setToastMessage('Email address copied to clipboard');
      setToastShow(true);
      setTimeout(() => setToastShow(false), 3000);
    }).catch(() => {
      setToastMessage('graphics121234@gmail.com');
      setToastShow(true);
      setTimeout(() => setToastShow(false), 3000);
    });
  };

  const handleDownloadCV = () => {
    setToastMessage('Opening Muhammad Anas Azeem Resume PDF...');
    setToastShow(true);
    setTimeout(() => setToastShow(false), 3000);

    const link = document.createElement('a');
    link.href = '/Muhammad_Anas_Azeem_CV.pdf';
    link.download = 'Muhammad_Anas_Azeem_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#0f131c] text-[#dfe2ee] min-h-screen relative overflow-x-hidden transition-colors duration-300">
      {/* Custom Premium Glow Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4d8eff] via-[#571bc1] to-[#4edea3] z-[100] origin-left shadow-[0_0_12px_#4d8eff]"
        style={{ scaleX }}
      />

      {/* Background Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#4d8eff]/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#571bc1]/15 rounded-full blur-[160px]"></div>
        <div className="absolute -bottom-20 left-1/3 w-[700px] h-[700px] bg-[#00a572]/10 rounded-full blur-[180px]"></div>
      </div>

      <Header
        onCopyEmail={handleCopyEmail}
        onDownloadCV={handleDownloadCV}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      <main className="relative z-10 w-full pt-20" id="hero">
        {/* Scroll Reveal Container for Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <Hero onCopyEmail={handleCopyEmail} />
        </motion.div>

        {/* Scroll Reveal Container for Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.div>

        {/* Scroll Reveal Container for Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <Skills />
        </motion.div>

        {/* Scroll Reveal Container for Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <Experience />
        </motion.div>

        {/* Scroll Reveal Container for Executive Endorsements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <ExecutiveEndorsements />
        </motion.div>

        {/* Scroll Reveal Container for Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <Contact onCopyEmail={handleCopyEmail} />
        </motion.div>
      </main>

      <Footer />

      <Toast show={toastShow} message={toastMessage} />
    </div>
  );
}
