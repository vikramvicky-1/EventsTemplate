import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart, Briefcase, Cake, Baby, Home, Gem, Sparkles,
  Palette, Camera, Music, UtensilsCrossed, MapPinned,
  ArrowRight, CheckCircle2
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const services = [
  { icon: Heart, name: 'Wedding Experiences', desc: 'From intimate ceremonies to grand celebrations, we craft weddings that reflect your unique love story. Our team handles everything from venue selection to the last dance.', features: ['Venue Selection & Booking', 'Theme & Decor Design', 'Vendor Coordination', 'Day-of Management', 'Guest Management'], image: '/images/wedding_mandap.png' },
  { icon: Cake, name: 'Birthday Celebrations', desc: 'Milestone moments deserve extraordinary celebrations. We create themed birthday parties that delight guests of all ages.', features: ['Theme Design', 'Entertainment Booking', 'Custom Cakes', 'Party Favors', 'Photography'], image: '/images/birthday_decor.png' },
  { icon: Sparkles, name: 'Receptions', desc: 'Grand celebrations of togetherness. We create stunning reception events that bring families and friends together in style.', features: ['Venue Transformation', 'Stage Design', 'Entertainment', 'Multi-cuisine Catering', 'Photography & Video'], image: '/images/reception_decor.png' },
  { icon: Home, name: 'House Warming', desc: 'Celebrate your new home with style. We create warm and memorable house warming ceremonies that honor traditions while feeling fresh and modern.', features: ['Traditional Decor', 'Modern Styling', 'Catering', 'Photography', 'Guest Coordination'], image: '/images/housewarming_decor.png' },
  { icon: Gem, name: 'Engagements', desc: 'The start of forever deserves a perfect beginning. We design engagement ceremonies that are romantic, elegant, and unforgettable, including traditional Haldi decorations.', features: ['Ceremony Setup', 'Decor Design', 'Photography', 'Entertainment', 'Catering'], image: '/images/haldi_ceremony.png' },
  { icon: Baby, name: 'Baby Showers', desc: 'Welcome new beginnings with beautiful celebrations. We design intimate and joyful baby showers with attention to every detail.', features: ['Theme & Decor', 'Games & Activities', 'Catering', 'Photography', 'Return Gifts'], image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  { icon: Palette, name: 'Decor & Design', desc: 'Transform any space into a visual masterpiece. Our design team creates stunning environments that set the perfect mood for your celebration.', features: ['Floral Design', 'Lighting Design', 'Stage Design', 'Table Styling', 'Thematic Decor'], image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800' },
  { icon: Camera, name: 'Photography & Videography', desc: 'Capture every precious moment with our network of talented photographers and videographers who tell your story beautifully.', features: ['Candid Photography', 'Cinematic Films', 'Drone Coverage', 'Photo Booths', 'Same-Day Edits'], image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800' },
  { icon: Music, name: 'Entertainment', desc: 'From live bands to DJs, from dancers to performers — we curate entertainment that keeps your guests engaged and dancing.', features: ['DJ Services', 'Live Bands', 'Dance Performances', 'MC/Emcee', 'Sound & Lighting'], image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800' },
  { icon: UtensilsCrossed, name: 'Catering', desc: 'Culinary experiences that delight the palate. We partner with the finest caterers to create menus that impress every guest.', features: ['Multi-cuisine Menus', 'Live Counters', 'Custom Cakes', 'Bar Services', 'Dietary Accommodations'], image: '/images/catering_decor.png' },
  { icon: MapPinned, name: 'Venue Booking', desc: 'Find the perfect location for your event. We have partnerships with premium venues across multiple cities.', features: ['Venue Scouting', 'Negotiation', 'Site Visits', 'Contract Review', 'Layout Planning'], image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' },
  { icon: Briefcase, name: 'Corporate Events', desc: 'Professional gatherings that leave lasting impressions. From product launches to annual galas, we deliver corporate events that align with your brand.', features: ['Conference Planning', 'Product Launches', 'Team Building Events', 'Award Ceremonies', 'Brand Activations'], image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800' },
];

const process = [
  { step: '01', title: 'Consultation', desc: 'Free initial meeting to understand your vision' },
  { step: '02', title: 'Proposal', desc: 'Detailed plan with timeline and budget' },
  { step: '03', title: 'Planning', desc: 'Vendor booking and design development' },
  { step: '04', title: 'Execution', desc: 'Flawless event day management' },
];

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-16 px-6 lg:px-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase flex items-center gap-3">
              <span className="w-8 h-px bg-gold" />
              Our Services
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mt-4 leading-tight text-text-primary">
              Everything You Need<br />
              <span className="gold-shimmer italic">Under One Roof</span>
            </h1>
            <p className="text-text-secondary text-lg mt-6 max-w-2xl">
              From concept to celebration, we offer comprehensive event planning services that cover every aspect of your special occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-16 px-6 lg:px-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                variants={scaleIn}
                className={`service-image-card group ${i === 0 ? 'lg:col-span-2' : ''}`}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className={`w-full object-cover ${i === 0 ? 'h-full min-h-[450px]' : 'h-80'}`}
                  loading="lazy"
                />
                <div className={`card-content absolute inset-0 flex flex-col justify-end ${i === 0 ? 'p-8' : 'p-6'}`}>
                  <service.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className={`font-display font-bold text-white ${i === 0 ? 'text-3xl' : 'text-xl'}`}>
                    {service.name}
                  </h3>
                  <p className={`text-white/60 mt-2 ${i === 0 ? 'text-base' : 'text-sm'}`}>
                    {service.desc}
                  </p>
                  <ul className={`mt-4 space-y-1.5 ${i === 0 ? 'grid md:grid-cols-2 gap-x-6 gap-y-1.5 space-y-0' : ''}`}>
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-gold" />
                        <span className="text-white/50 group-hover:text-white/70 transition-colors duration-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-12 bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase">How It Works</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 text-text-primary">
              Our <span className="gold-shimmer italic">Process</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {process.map((p) => (
              <motion.div key={p.step} variants={fadeInUp} className="luxury-card text-center">
                <span className="font-display text-5xl font-bold gold-gradient opacity-30">{p.step}</span>
                <h3 className="font-display text-xl font-semibold mt-4 text-text-primary">{p.title}</h3>
                <p className="text-text-secondary text-sm mt-2">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-bg-primary">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-text-primary">
            Ready to <span className="gold-shimmer italic">Start</span>?
          </h2>
          <p className="text-text-secondary text-lg mt-6">
            Let's discuss your event and create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="luxury-btn luxury-btn-primary mt-8"
          >
            Get Started <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
