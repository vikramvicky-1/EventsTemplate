import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-nav-scrolled' : 'glass-nav'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-24">
            {/* Logo */}
            <Logo size="lg" />

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-1.5 text-[0.9rem] font-bold transition-all duration-150 border-[2px] rounded-full ${
                    location.pathname === link.path
                      ? 'text-charcoal bg-accent-sage border-charcoal shadow-[2px_2px_0px_0px_#12131A]'
                      : 'text-charcoal/80 border-transparent hover:text-charcoal hover:bg-charcoal/5 hover:border-charcoal hover:shadow-[2px_2px_0px_0px_#12131A] active:translate-x-[1px] active:translate-y-[1px]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Call Us CTA */}
              <a
                href="tel:+917676789839"
                className="inline-flex items-center justify-center border-[2px] border-charcoal bg-white text-charcoal px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-[0.875rem] font-bold shadow-[2px_2px_0px_0px_#12131A] hover:bg-gold hover:text-charcoal hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#12131A] transition-all duration-150"
              >
                Call Us
              </a>

              {/* Plan Your Event CTA */}
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center justify-center border-[2px] border-charcoal bg-charcoal text-cream px-5 py-2.5 rounded-full text-[0.875rem] font-bold shadow-[2px_2px_0px_0px_#12131A] hover:bg-gold hover:text-charcoal hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#12131A] transition-all duration-150"
              >
                Plan Your Event
              </Link>

              {/* Hamburger Menu Trigger */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-charcoal bg-cream text-charcoal shadow-[2px_2px_0px_0px_#12131A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-100"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-sm lg:hidden flex flex-col justify-between pt-24 pb-12 px-8"
          >
            <div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      to={link.path}
                      className={`block text-3xl font-display font-bold py-3 border-b-2 border-charcoal/10 transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'text-gold pl-2 border-charcoal'
                          : 'text-charcoal hover:pl-2'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-10"
              >
                <Link
                  to="/contact"
                  className="block w-full text-center bg-charcoal text-cream border-[3px] border-charcoal px-6 py-4 rounded-full text-lg font-bold shadow-[4px_4px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150"
                >
                  Plan Your Event
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
