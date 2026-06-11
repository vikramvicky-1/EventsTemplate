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
    <footer className="relative bg-deep text-deep-text overflow-hidden border-t border-deep-border">
      {/* Gold line separator at top */}
      <div className="gold-line w-full" />
      
      <div className="relative pt-20 pb-12 px-6 lg:px-12">
        {/* Large branding watermark */}
        <p className="font-display text-[18vw] md:text-[12rem] lg:text-[16rem] font-bold text-white/[0.015] absolute top-8 left-4 lg:left-8 select-none pointer-events-none leading-none whitespace-nowrap">
          BUTTERFLIES
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
              <h3 className="font-display text-3xl lg:text-4xl font-semibold mb-6 leading-tight text-deep-text">
                Let's Create Something<br />
                <span className="gold-shimmer italic">Extraordinary</span>
              </h3>
              <p className="text-deep-text-secondary text-base mb-8 leading-relaxed max-w-md">
                Transform your vision into an unforgettable celebration with Butterflies Event Management's premium event planning.
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
              <div className="luxury-card bg-[#FAFAF8] border-border/40 p-6 lg:p-8 shadow-sm">
                {/* Instagram Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#FAFAF8] flex items-center justify-center">
                      <Instagram className="w-7 h-7 text-text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-text-primary">eventsbybutterflies</p>
                    <p className="text-text-muted text-sm">Event Planner</p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-border">
                  <div className="text-center">
                    <p className="font-display text-lg font-bold text-text-primary">571</p>
                    <p className="text-text-muted text-xs">posts</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold gold-shimmer">9,737</p>
                    <p className="text-gold text-xs font-semibold">followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-lg font-bold text-text-primary">152</p>
                    <p className="text-text-muted text-xs">following</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-2 mb-6">
                  <p className="text-text-primary font-semibold text-sm">We Bring Your Dreams into Reality!</p>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Trusted by 1000+ Clients</li>
                    <li>• 4.9★ Google Rating (1,034 Reviews)</li>
                    <li>• Birthdays to Weddings!</li>
                    <li>• Decoration, Catering, Photography & more</li>
                  </ul>
                  <p className="text-text-secondary text-sm flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> JP Nagar, Bangalore
                  </p>
                </div>

                {/* Follow Button */}
                <a
                  href="https://www.instagram.com/eventsbybutterflies/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center luxury-btn luxury-btn-primary py-3 text-sm"
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
                    className="text-deep-text-secondary hover:text-gold transition-colors duration-300 text-sm"
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
                    className="text-deep-text-secondary hover:text-gold transition-colors duration-300 text-sm"
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
                <span className="text-deep-text-secondary text-sm">
                  1st floor, Sai Sumukha Classic,<br />
                  108, RBI Layout Main Rd,<br />
                  JP Nagar 7th Phase, Bengaluru 560078
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+919176707070" className="text-deep-text-secondary hover:text-gold transition-colors duration-300 text-sm">
                  +91 91767 07070
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:hello@butterfliesevents.com" className="text-deep-text-secondary hover:text-gold transition-colors duration-300 text-sm">
                  hello@butterfliesevents.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-6 text-gold tracking-wider uppercase">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.instagram.com/eventsbybutterflies/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-deep-border flex items-center justify-center text-deep-text-secondary hover:bg-gold hover:text-deep hover:border-gold transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-deep-border flex items-center justify-center text-deep-text-secondary hover:bg-gold hover:text-deep hover:border-gold transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-deep-border flex items-center justify-center text-deep-text-secondary hover:bg-gold hover:text-deep hover:border-gold transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="text-deep-text-secondary text-sm leading-relaxed">
              Follow us for event inspiration, behind-the-scenes, and stunning celebrations.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 max-w-7xl mx-auto border-t border-deep-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-deep-text-muted text-sm">
            © 2026 Butterflies Event Management. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-deep-text-secondary hover:text-gold transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-deep-text-secondary hover:text-gold transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
