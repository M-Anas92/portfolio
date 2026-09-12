import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Toast({ show, message }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#262a33] text-[#dfe2ee] px-5 py-3 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl"
        >
          <span className="material-symbols-outlined text-[#4edea3] text-[22px]">
            check_circle
          </span>
          <span className="font-body text-xs sm:text-sm font-medium">
            {message || 'Email address copied to clipboard'}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
