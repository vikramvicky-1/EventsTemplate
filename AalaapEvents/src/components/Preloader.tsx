import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2.6 seconds allows the cinematic slow entrance and shimmer sequence to complete
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0C081A] overflow-hidden"
        >
          {/* Expanding staggered circles matching Aalaap's vibrant palette */}
          {/* Circle 1: Sunset Orange */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.05
            }}
            className="absolute w-12 h-12 bg-[#FF8A00] rounded-full pointer-events-none"
          />

          {/* Circle 2: Amber */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.11
            }}
            className="absolute w-12 h-12 bg-[#FFA500] rounded-full pointer-events-none"
          />

          {/* Circle 3: Marigold Yellow */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.17
            }}
            className="absolute w-12 h-12 bg-[#FFB800] rounded-full pointer-events-none"
          />

          {/* Circle 4: Light Gold */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.23
            }}
            className="absolute w-12 h-12 bg-[#FFD043] rounded-full pointer-events-none"
          />

          {/* Circle 5: Indigo Violet (final background reveal) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.29
            }}
            className="absolute w-12 h-12 bg-[#0C081A] rounded-full pointer-events-none"
          />

          {/* Decorative background grid over the layout */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute inset-0 grid grid-cols-6 pointer-events-none"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-[#FFB800]/30 h-full" />
            ))}
          </motion.div>

          {/* Main Logo Content Container */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative overflow-hidden flex items-center justify-center">
              {/* Logo entrance animation: scale up, fade in, and camera blur resolve */}
              <motion.img
                src="/AalaapLoader.png"
                alt="Aalaap Entertainers Loader"
                initial={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ 
                  delay: 0.55, 
                  duration: 1.2, 
                  ease: [0.25, 1, 0.5, 1] 
                }}
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain filter drop-shadow-[0_0_12px_rgba(255,184,0,0.4)]"
              />

              {/* Diagonal glossy shimmer sweep */}
              <motion.div
                initial={{ left: '-150%' }}
                animate={{ left: '150%' }}
                transition={{ 
                  delay: 1.4, 
                  duration: 1.1, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] pointer-events-none"
              />
            </div>

            {/* Linear Gold Progress Bar */}
            <div className="w-24 sm:w-32 h-[2px] bg-gold/10 rounded-full mt-6 overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{
                  delay: 0.55,
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: 0
                }}
                className="absolute inset-y-0 w-1/2 bg-[#FFB800] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
