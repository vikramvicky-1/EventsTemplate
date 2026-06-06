import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowUpRight, Star } from 'lucide-react';
import Logo from './Logo';

const services = [
  'Birthday Parties',
  'Wedding Planning',
  'Decor & Design',
  'Photography',
  'Corporate Events',
  'Theme Backdrops',
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
    <footer className="relative bg-bg-primary overflow-hidden border-t border-border">
      {/* Gold line separator at top */}
      <div className="gold-line w-full" />
      
      <div className="relative pt-20 pb-12 px-6 lg:px-12">
        {/* Large branding watermark */}
        <p className="font-display text-[18vw] md:text-[12rem] lg:text-[16rem] font-bold text-text-primary/[0.012] absolute top-8 left-4 lg:left-8 select-none pointer-events-none leading-none whitespace-nowrap">
          VIBHINNA
        </p>

        {/* Top section: CTA + Instagram Highlight */}
        <div className="relative z-10 max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Brand CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <Logo variant="light" size="lg" />
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-semibold mb-6 leading-tight text-text-primary">
                Let's Create Something<br />
                <span className="gold-shimmer italic">Extraordinary</span>
              </h3>
              <p className="text-text-secondary text-base mb-8 leading-relaxed max-w-md">
                Transform your vision into an unforgettable celebration with Vibhinna Events' premium event planning.
              </p>
              <Link
                to="/contact"
                className="luxury-btn luxury-btn-primary"
              >
                Book Consultation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right: Instagram Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="luxury-card bg-bg-secondary border-gold/20 p-6 lg:p-8">
                {/* Instagram Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] p-[2px]">
                    <div className="w-full h-full rounded-full bg-bg-secondary flex items-center justify-center">
                      <Instagram className="w-7 h-7 text-text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-text-primary">vibhinna_events</p>
                    <p className="text-text-muted text-sm">Event planner</p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-border">
                  <div className="text-center">
                    <p className="font-display text-lg font-bold text-text-primary">148+</p>
                    <p className="text-text-muted text-xs">reviews</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold gold-shimmer">5.0 ★</p>
                    <p className="text-gold text-xs font-semibold">Google Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-lg font-bold text-text-primary">2020</p>
                    <p className="text-text-muted text-xs">since</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-2 mb-6">
                  <p className="text-text-primary font-semibold text-sm">We Bring Your Dreams into Reality!</p>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Creative decoration & birthday party experts</li>
                    <li>• Trusted by hundreds of happy clients</li>
                    <li>• Traditional Decors to Modern Concepts</li>
                    <li>• High Quality at Value for Money</li>
                  </ul>
                  <p className="text-text-secondary text-sm flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> Rajarajeshwari Nagar, Bangalore
                  </p>
                </div>

                {/* Follow Button */}
                <a
                  href="https://www.instagram.com/vibhinna_events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center luxury-btn luxury-btn-primary py-3 text-sm text-white"
                >
                  <Instagram className="w-4 h-4" />
                  Follow on Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Grid */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-display text-sm font-semibold mb-6 text-gold tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-text-secondary hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-6 text-gold tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-6 text-gold tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-text-secondary text-sm leading-relaxed">
                  Block 3, 277A, Dr H. Srinivasaiah Rd,<br />
                  Remco Bhel Layout, Stage 3,<br />
                  Rajarajeshwari Nagar, Bengaluru,<br />
                  Karnataka 560098
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+917676789839" className="text-text-secondary hover:text-gold transition-colors duration-300 text-sm">
                  +91 76767 89839
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:hello@vibhinnaevents.com" className="text-text-secondary hover:text-gold transition-colors duration-300 text-sm">
                  hello@vibhinnaevents.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-6 text-gold tracking-wider uppercase">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.instagram.com/vibhinna_events/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Follow us for event inspiration, behind-the-scenes, and stunning celebrations.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 max-w-7xl mx-auto border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2026 Vibhinna Events. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted hover:text-gold transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted hover:text-gold transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
