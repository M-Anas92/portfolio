import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate cursor on devices with fine pointer (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer') ||
        target.closest('[role="button"]');

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Center Glow Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#4d8eff] rounded-full pointer-events-none z-[9999] shadow-[0_0_12px_#4d8eff]"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isHovered ? 1.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1200, damping: 50, mass: 0.1 }}
      />

      {/* Trailing Luminous Halo Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#4d8eff]/60 bg-[#4d8eff]/10 backdrop-blur-[1px] pointer-events-none z-[9998]"
        animate={{
          x: mousePos.x - 18,
          y: mousePos.y - 18,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? '#4edea3' : 'rgba(77, 142, 255, 0.6)',
          backgroundColor: isHovered ? 'rgba(78, 222, 163, 0.15)' : 'rgba(77, 142, 255, 0.08)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.3 }}
      />
    </>
  );
}
