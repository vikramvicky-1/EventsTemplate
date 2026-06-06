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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF8F5] overflow-hidden"
        >
          {/* Expanding staggered circles matching Vibhinna Events gold palette */}
          {/* Circle 1: Dark Bronze-Gold */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.05
            }}
            className="absolute w-12 h-12 bg-[#9C764E] rounded-full pointer-events-none"
          />

          {/* Circle 2: Muted Bronze-Gold */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.13
            }}
            className="absolute w-12 h-12 bg-[#A8855F] rounded-full pointer-events-none"
          />

          {/* Circle 3: Bright Brand Gold */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.21
            }}
            className="absolute w-12 h-12 bg-[#B89368] rounded-full pointer-events-none"
          />

          {/* Circle 4: Luxury Cream (final background reveal) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.29
            }}
            className="absolute w-12 h-12 bg-[#FAF8F5] rounded-full pointer-events-none"
          />

          {/* Decorative background grid over the layout */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute inset-0 grid grid-cols-6 pointer-events-none"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-[#B89368]/30 h-full" />
            ))}
          </motion.div>

          {/* Main Logo Content Container */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative overflow-hidden rounded-3xl p-4">
              {/* Logo entrance animation: scale up, fade in, and camera blur resolve */}
              <motion.img
                src="/VibhinnaEvents.jpg"
                alt="Vibhinna Events Logo"
                initial={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ 
                  delay: 0.55, 
                  duration: 1.2, 
                  ease: [0.25, 1, 0.5, 1] 
                }}
                className="w-[50vw] h-[50vw] sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain rounded-2xl border border-gold/20"
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
                className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] pointer-events-none"
              />
            </div>

            {/* Brand Name */}
            <motion.h2
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.85, duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
              className="font-display font-bold text-2xl sm:text-3xl tracking-[0.05em] gold-shimmer-slow text-center mt-2"
            >
              Vibhinna Events
            </motion.h2>

            {/* Tagline entry with widening tracking */}
            <motion.div
              initial={{ opacity: 0, y: 10, letterSpacing: '0.15em' }}
              animate={{ opacity: 0.6, y: 0, letterSpacing: '0.3em' }}
              transition={{ delay: 1.15, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="font-body text-[0.65rem] sm:text-xs uppercase text-gold/80 mt-3 font-bold text-center"
            >
              Premium Event Organiser
            </motion.div>

            {/* Linear Gold Progress Bar */}
            <div className="w-24 sm:w-32 h-[2px] bg-gold/15 rounded-full mt-6 overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{
                  delay: 0.55,
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: 0
                }}
                className="absolute inset-y-0 w-1/2 bg-[#B89368] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
