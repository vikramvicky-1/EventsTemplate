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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal overflow-hidden"
        >
          {/* Stage 1: Expanding staggered circles matching the logo color palette */}
          {/* Circle 1: Brand Purple */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.05
            }}
            className="absolute w-12 h-12 bg-[#8B48ED] rounded-full pointer-events-none"
          />

          {/* Circle 2: Fuchsia/Pink */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.13
            }}
            className="absolute w-12 h-12 bg-[#D946EF] rounded-full pointer-events-none"
          />

          {/* Circle 3: Coral/Rose */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.21
            }}
            className="absolute w-12 h-12 bg-[#F43F5E] rounded-full pointer-events-none"
          />

          {/* Circle 4: Cream (final background reveal) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 80 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.29
            }}
            className="absolute w-12 h-12 bg-cream rounded-full pointer-events-none"
          />

          {/* Decorative background grid over the cream layout */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute inset-0 grid grid-cols-6 pointer-events-none"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-charcoal h-full" />
            ))}
          </motion.div>

          {/* Stage 2: Main Logo Content Container */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative overflow-hidden rounded-3xl p-4">
              {/* Logo entrance animation: scale up, fade in, and camera blur resolve */}
              <motion.img
                src="/images/festalogo-removebg-preview.png"
                alt="Festa Logo"
                initial={{ opacity: 0, scale: 0.8, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ 
                  delay: 0.55, 
                  duration: 1.2, 
                  ease: [0.25, 1, 0.5, 1] 
                }}
                className="w-[80vw] h-[80vw] sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
              />

              {/* Stage 3: Diagonal glossy shimmer light sweep */}
              <motion.div
                initial={{ left: '-150%' }}
                animate={{ left: '150%' }}
                transition={{ 
                  delay: 1.4, 
                  duration: 1.1, 
                  ease: "easeInOut" 
                }}
                className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none"
              />
            </div>

            {/* Tagline entry with widening tracking */}
            <motion.div
              initial={{ opacity: 0, y: 10, letterSpacing: '0.15em' }}
              animate={{ opacity: 0.6, y: 0, letterSpacing: '0.25em' }}
              transition={{ delay: 1.15, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="font-body text-[0.65rem] sm:text-xs uppercase text-charcoal/80 mt-4 font-bold text-center"
            >
              Exquisite Celebrations
            </motion.div>

            {/* Linear Brand Purple Progress Bar */}
            <div className="w-24 sm:w-32 h-[2px] bg-charcoal/10 rounded-full mt-6 overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{
                  delay: 0.55,
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: 0
                }}
                className="absolute inset-y-0 w-1/2 bg-[#8B48ED] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
