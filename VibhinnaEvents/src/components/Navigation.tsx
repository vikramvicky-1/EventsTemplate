import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Instagram, MapPin } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

// Animated hamburger lines
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-5 h-4 flex flex-col justify-between items-center relative">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 7.5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
        transition={{ duration: 0.3 }}
        className="block h-[1.5px] bg-current origin-center rounded-full"
        style={{ width: 20 }}
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.15 }}
        className="block w-5 h-[1.5px] bg-current origin-center rounded-full"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -7.5, width: 20 } : { rotate: 0, y: 0, width: 14 }}
        transition={{ duration: 0.3 }}
        className="block h-[1.5px] bg-current origin-center rounded-full self-end"
        style={{ width: isOpen ? 20 : 14 }}
      />
    </div>
  );
}

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

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-[0.8rem] font-medium tracking-wide uppercase transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-gold font-semibold'
                      : 'text-text-secondary hover:text-gold'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-px bg-gold"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Call — visible on all screens (circular icon button on mobile, text on tablet+) */}
              <a
                href="tel:+917676789839"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-text-secondary hover:text-gold border border-border hover:border-gold rounded-full w-9 h-9 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 transition-all duration-300"
                aria-label="Call Us"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Call Us</span>
              </a>

              {/* Plan Your Event — desktop only */}
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold bg-gold text-white hover:bg-gold-light rounded-full px-4 py-2 transition-all duration-300"
              >
                Plan Your Event
              </Link>

              {/* Hamburger — shown below lg */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300 cursor-pointer ${
                  isMobileOpen
                    ? 'border-gold text-gold'
                    : 'border-border text-text-secondary hover:text-gold hover:border-gold'
                }`}
                aria-label="Toggle menu"
              >
                <HamburgerIcon isOpen={isMobileOpen} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ========== MOBILE MENU ========== */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[340px] bg-bg-primary border-l border-border lg:hidden flex flex-col"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-5 h-14 sm:h-16 border-b border-border flex-shrink-0">
                <span className="text-xs text-text-muted tracking-[0.15em] uppercase font-medium">Menu</span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-text-secondary hover:text-gold hover:border-gold transition-all duration-300 cursor-pointer"
                  aria-label="Close menu"
                >
                  <HamburgerIcon isOpen={true} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto px-5 pt-4 pb-4">
                <div className="space-y-0.5">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between py-3 px-3 rounded-lg text-[0.95rem] font-display font-semibold transition-all duration-200 ${
                          location.pathname === link.path
                            ? 'text-gold bg-gold/[0.04]'
                            : 'text-text-primary hover:text-gold hover:bg-gold/[0.03]'
                        }`}
                      >
                        {link.name}
                        {location.pathname === link.path && (
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Separator */}
                <div className="gold-line my-5" />

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                  className="space-y-2.5"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center w-full bg-gold text-white font-semibold text-sm py-3 rounded-full hover:bg-gold-light transition-all duration-300"
                  >
                    Plan Your Event
                  </Link>
                  <a
                    href="tel:+917676789839"
                    className="flex items-center justify-center gap-2 w-full border border-border text-text-secondary font-medium text-sm py-3 rounded-full hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/917676789839"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full font-semibold text-sm text-white py-3 rounded-full transition-all duration-300 hover:opacity-90"
                    style={{ background: '#25D366' }}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp Us
                  </a>
                </motion.div>
              </nav>

              {/* Bottom: Instagram + Location */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="px-5 py-4 border-t border-border flex-shrink-0"
              >
                <a
                  href="https://www.instagram.com/vibhinna_events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 mb-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] p-[1.5px] flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center">
                      <Instagram className="w-3.5 h-3.5 text-text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-primary group-hover:text-gold transition-colors">@vibhinna_events</p>
                    <p className="text-[0.65rem] text-gold font-medium">Event Organiser</p>
                  </div>
                </a>
                <div className="flex items-center gap-1.5 text-text-muted text-[0.65rem]">
                  <MapPin className="w-3 h-3 text-gold flex-shrink-0" />
                  RR Nagar, Bengaluru
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
