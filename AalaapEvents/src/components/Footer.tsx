import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowUpRight, Star } from 'lucide-react';
import Logo from './Logo';

const services = [
  'Wedding Planning',
  'Naming Ceremonies',
  'Marriage Events',
  'Corporate Promotions',
  'Family Event Planning',
  'Stage Decoration',
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
        <p className="font-display text-[18vw] md:text-[12rem] lg:text-[16rem] font-bold text-white/[0.015] absolute top-8 left-4 lg:left-8 select-none pointer-events-none leading-none whitespace-nowrap">
          AALAAP
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
                Transform your vision into an unforgettable celebration with Aalaap Entertainers' premium event planning and coordination.
              </p>
              <Link
                to="/contact"
                className="luxury-btn luxury-btn-primary"
              >
                Book Consultation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right: Reviews & Info Card (Replacing old Insta card) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="luxury-card bg-bg-secondary border-gold/20 p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark p-[2px]">
                    <div className="w-full h-full rounded-full bg-bg-secondary flex items-center justify-center">
                      <Star className="w-7 h-7 text-gold fill-gold" />
                    </div>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-text-primary">Aalaap Entertainers</p>
                    <p className="text-text-muted text-sm">Event Management Company</p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-border">
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-text-primary">4.4★</p>
                    <p className="text-text-muted text-xs">average rating</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold gold-shimmer">244</p>
                    <p className="text-gold text-xs font-semibold">Google reviews</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-text-primary">100%</p>
                    <p className="text-text-muted text-xs">dedication</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-2 mb-6">
                  <p className="text-text-primary font-semibold text-sm">Professional Planners & Creators</p>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Traditional Marriage Decorators</li>
                    <li>• Joyful Naming Ceremonies</li>
                    <li>• Corporate Showroom Launch Specialists</li>
                    <li>• Custom Stages & Artistic Lighting</li>
                  </ul>
                  <p className="text-text-secondary text-sm flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> Madanayakanahalli, Bengaluru
                  </p>
                </div>

                {/* Action button */}
                <a
                  href="tel:+919964562562"
                  className="block w-full text-center luxury-btn luxury-btn-primary py-3 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Vinay Aalaap
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
                    className="text-text-muted hover:text-gold transition-colors duration-300 text-sm"
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
                    className="text-text-muted hover:text-gold transition-colors duration-300 text-sm"
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
                <span className="text-text-muted text-sm">
                  No 350, Dr shivakumar Swamy ji Road,<br />
                  Madhanayakanahalli, Madavara, Dasaranapura Post,<br />
                  Madanayakanahalli, Karnataka 562162
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+919964562562" className="text-text-muted hover:text-gold transition-colors duration-300 text-sm">
                  +91 99645 62562
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:info@aalaapentertainers.com" className="text-text-muted hover:text-gold transition-colors duration-300 text-sm">
                  info@aalaapentertainers.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-6 text-gold tracking-wider uppercase">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.instagram.com/aalaap_entertainers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-gold hover:text-bg-primary hover:border-gold transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-gold hover:text-bg-primary hover:border-gold transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-gold hover:text-bg-primary hover:border-gold transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Connect with us for wedding inspirations, naming ceremonies, and corporate showroom launching events.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 max-w-7xl mx-auto border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2026 Aalaap Entertainers. All rights reserved.
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
