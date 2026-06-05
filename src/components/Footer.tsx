import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const services = [
  'Wedding Planning',
  'Corporate Events',
  'Birthday Celebrations',
  'Decor & Design',
  'Photography',
  'Catering',
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-white overflow-hidden">
      {/* Architectural transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cream to-transparent z-10" />
      
      <div className="relative pt-40 pb-12 px-6 lg:px-12">
        {/* Large branding */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-display text-[18vw] md:text-[12rem] lg:text-[18rem] font-bold text-white/[0.03] absolute top-16 left-4 lg:left-8 select-none pointer-events-none leading-none whitespace-nowrap">
            FESTA
          </p>
          <div className="relative z-10 max-w-2xl">
            <div className="mb-8">
              <Logo variant="light" size="lg" />
            </div>
            <h3 className="font-display text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Let's Create Something<br />
              <span className="italic text-gold">Extraordinary</span>
            </h3>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              Transform your vision into an unforgettable celebration with Festa's premium event planning.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-charcoal border-[3px] border-charcoal px-8 py-4 rounded-full font-bold shadow-[4px_4px_0px_0px_#FFF] hover:bg-gold-light hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#FFF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#FFF] transition-all duration-150"
            >
              Book Consultation
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold/80">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/50 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold/80">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold/80">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-white/50 text-sm">
                  Bengaluru, Karnataka<br />India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white/50 hover:text-gold transition-colors duration-300 text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:hello@festa.studio" className="text-white/50 hover:text-gold transition-colors duration-300 text-sm">
                  hello@festa.studio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold/80">Follow Us</h4>
            <div className="flex gap-3 mb-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/[0.06] flex items-center justify-center hover:bg-gold hover:text-charcoal hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#FFF] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#FFF] transition-all duration-150"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/[0.06] flex items-center justify-center hover:bg-gold hover:text-charcoal hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#FFF] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#FFF] transition-all duration-150"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/[0.06] flex items-center justify-center hover:bg-gold hover:text-charcoal hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#FFF] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#FFF] transition-all duration-150"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="text-white/35 text-sm leading-relaxed">
              Follow us for event inspiration, behind-the-scenes, and stunning celebrations.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © 2024 Festa. All rights reserved. Crafted with passion.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-gold transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 hover:text-gold transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <p className="font-display text-[22vw] md:text-[15rem] lg:text-[20rem] font-bold text-white/[0.015] leading-none text-center select-none whitespace-nowrap">
          FESTA
        </p>
      </div>
    </footer>
  );
}
