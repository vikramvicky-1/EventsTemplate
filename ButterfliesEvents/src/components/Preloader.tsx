import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePreloader } from '../context/PreloaderContext';

export default function Preloader() {
  const { isComplete, complete } = usePreloader();
  const [isVisible, setIsVisible] = useState(!isComplete);

  useEffect(() => {
    if (isComplete) return;
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, [isComplete]);

  if (isComplete) return null;

  return (
    <AnimatePresence onExitComplete={complete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: 'inset(0% 0% 100% 0%)',
            transition: { 
              duration: 0.85, 
              ease: [0.85, 0, 0.15, 1] 
            } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAFAF8] overflow-hidden"
        >
          {/* Expanding staggered circles — logo colors */}
          {/* Circle 1: Green from butterfly wing */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.05
            }}
            className="absolute w-12 h-12 bg-[#3A7D3E] rounded-full pointer-events-none"
          />

          {/* Circle 2: Purple from butterfly wing */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.13
            }}
            className="absolute w-12 h-12 bg-[#7B3F8B] rounded-full pointer-events-none"
          />

          {/* Circle 3: Orange from butterfly wing */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.21
            }}
            className="absolute w-12 h-12 bg-[#E8712B] rounded-full pointer-events-none"
          />

          {/* Circle 4: Light background reveal */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.29
            }}
            className="absolute w-12 h-12 bg-[#FAFAF8] rounded-full pointer-events-none"
          />

          {/* Subtle decorative grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute inset-0 grid grid-cols-6 pointer-events-none"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-[#1A1A1A]/10 h-full" />
            ))}
          </motion.div>

          {/* Main Logo Content */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative overflow-hidden rounded-3xl p-4">
              <motion.img
                src="/butterflies-logo.png"
                alt="Butterflies Event Management Logo"
                initial={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ 
                  delay: 0.55, 
                  duration: 1.2, 
                  ease: [0.25, 1, 0.5, 1] 
                }}
                className="w-[50vw] h-[50vw] sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
              />

              {/* Shimmer sweep */}
              <motion.div
                initial={{ left: '-150%' }}
                animate={{ left: '150%' }}
                transition={{ 
                  delay: 1.4, 
                  duration: 1.1, 
                  ease: "easeInOut" 
                }}
                className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-black/5 to-transparent skew-x-[-25deg] pointer-events-none"
              />
            </div>

            {/* Brand Name */}
            <motion.h2
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.85, duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
              className="font-display font-normal text-2xl sm:text-3xl tracking-[0.02em] text-[#1A1A1A] text-center mt-2"
            >
              Butterflies Events
            </motion.h2>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10, letterSpacing: '0.15em' }}
              animate={{ opacity: 0.5, y: 0, letterSpacing: '0.3em' }}
              transition={{ delay: 1.15, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="font-body text-[0.65rem] sm:text-xs uppercase text-[#E8712B] mt-3 font-semibold text-center"
            >
              Premium Event Planner
            </motion.div>

            {/* Accent Progress Bar */}
            <div className="w-24 sm:w-32 h-[2px] bg-[#1A1A1A]/5 rounded-full mt-6 overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{
                  delay: 0.55,
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: 0
                }}
                className="absolute inset-y-0 w-1/2 bg-[#E8712B] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
