import { motion, useScroll, useTransform, Variants, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Star, MapPin, Users, Calendar,
  Heart, Briefcase, Cake, Baby, Home as HomeIcon, Gem,
  Camera, Music, UtensilsCrossed, MapPinned, Sparkles,
  Phone, MessageCircle, ChevronDown, ChevronUp,
  Award, Clock, Shield, Palette, Wallet, Globe, Eye,
  CheckCircle2, Quote
} from 'lucide-react';
import { useCountUp } from '../lib/useCountUp';
import { usePreloader } from '../context/PreloaderContext';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const revealUp: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// Trust Marquee
function TrustMarquee() {
  const items = ['1000+ Events', 'Open 24 Hours', 'Weddings', 'Corporate', 'Decor', 'Photography', 'Catering', 'DJ', 'Balloon Decorations'];
  const doubled = [...items, ...items];
  
  return (
    <section className="py-8 border-y border-border overflow-hidden bg-bg-secondary">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-8">
            <span className="font-display text-lg lg:text-xl font-medium text-text-secondary">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
          </span>
        ))}
      </div>
    </section>
  );
}

// Hero Section with Slideshow Background
function Hero() {
  const { isComplete } = usePreloader();
  const heroImages = [
    '/images/wedding_mandap.png',
    '/images/birthday_decor.png',
    '/images/haldi_ceremony.png',
    '/images/housewarming_decor.png',
    '/images/reception_decor.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // changes image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Luxury event celebration"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Dark overlay (no white bottom gradient) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45 z-10" />
      </div>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 lg:pt-32 pb-16">
        <motion.div
          initial="hidden"
          animate={isComplete ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.15
              }
            }
          }}
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-[0.25em] uppercase mb-8">
              <span className="w-8 h-px bg-gold" />
              Premium Event Planner
            </span>
          </motion.div>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight">
            <div className="overflow-hidden py-1">
              <motion.span className="block text-white" variants={revealUp}>
                Crafting
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span className="block gold-shimmer italic" variants={revealUp}>
                Extraordinary
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span className="block text-white" variants={revealUp}>
                Celebrations
              </motion.span>
            </div>
          </h1>

          <motion.p
            variants={fadeInUp}
            className="text-white/70 text-lg lg:text-xl max-w-lg leading-relaxed mt-4"
          >
            From intimate gatherings to grand celebrations, we design and execute events that leave lasting impressions. Trusted by 1000+ happy clients.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mt-6"
          >
            <Link to="/contact" className="luxury-btn luxury-btn-primary group">
              Plan Your Event
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/gallery" className="luxury-btn luxury-btn-white">
              View Our Work
            </Link>
          </motion.div>

          {/* Mini Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:gap-10 mt-6 pt-4 border-t border-white/10"
          >
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold gold-gradient">1000+</p>
              <p className="text-white/50 text-[10px] sm:text-xs mt-1 tracking-wider uppercase">Events</p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold gold-gradient">24/7</p>
              <p className="text-white/50 text-[10px] sm:text-xs mt-1 tracking-wider uppercase">Available</p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold gold-gradient">1034</p>
              <p className="text-white/50 text-[10px] sm:text-xs mt-1 tracking-wider uppercase">Reviews</p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold gold-gradient">4.9★</p>
              <p className="text-white/50 text-[10px] sm:text-xs mt-1 tracking-wider uppercase">Rating</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Brand Story Section
function BrandStory() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-12 gap-6"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-5 luxury-card bg-bg-secondary flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">Our Story</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 leading-tight text-text-primary">
                Where Dreams<br />
                <span className="gold-shimmer italic">Meet Reality</span>
              </h2>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed mt-8">
              Born from a passion for celebration, Butterflies Event Management transforms ordinary moments into extraordinary memories. Every event is a masterpiece of creativity, precision, and heart.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-7 grid grid-cols-2 gap-6">
            {[
              { icon: Award, value: '5+', label: 'Years of Experience', color: 'from-gold/10 to-transparent' },
              { icon: Calendar, value: '1000+', label: 'Events Delivered', color: 'from-gold/5 to-transparent' },
              { icon: MapPin, value: '10+', label: 'Cities Covered', color: 'from-gold/10 to-transparent' },
              { icon: Users, value: '20+', label: 'Dedicated Team Members', color: 'from-gold/5 to-transparent' },
            ].map((stat) => (
              <div key={stat.label} className={`luxury-card bg-bg-secondary relative overflow-hidden flex flex-col justify-between`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} pointer-events-none`} />
                <stat.icon className="w-7 h-7 text-gold relative z-10" />
                <div className="relative z-10 mt-6">
                  <p className="font-display text-3xl sm:text-4xl font-bold gold-gradient">{stat.value}</p>
                  <p className="text-text-muted text-xs sm:text-sm mt-1 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Services Section — with images
function Services() {
  const services = [
    { icon: Cake, name: 'Birthday Celebrations', desc: 'Milestone moments made magical with custom backdrop themes', image: '/images/birthday_decor.png' },
    { icon: Heart, name: 'Wedding Experiences', desc: 'Dream weddings crafted with love and traditional decor', image: '/images/wedding_mandap.png' },
    { icon: Sparkles, name: 'Receptions', desc: 'Grand celebrations of togetherness and stage design', image: '/images/reception_decor.png' },
    { icon: HomeIcon, name: 'House Warming', desc: 'Traditional Griha Pravesham ceremonies and styling', image: '/images/housewarming_decor.png' },
    { icon: Gem, name: 'Engagements', desc: 'Vibrant ring ceremonies and Haldi setups', image: '/images/haldi_ceremony.png' },
    { icon: Baby, name: 'Baby Showers', desc: 'Welcoming new beginnings beautifully', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
    { icon: Palette, name: 'Balloon Decorations', desc: 'Stunning balloon art and themed arrangements', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800' },
    { icon: Camera, name: 'Photography', desc: 'Capturing every precious candid moment', image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800' },
    { icon: Music, name: 'Entertainment', desc: 'DJ, live music, dancers & caricature artists', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800' },
    { icon: UtensilsCrossed, name: 'Catering', desc: 'Delicious Veg & Non-Veg culinary experiences', image: '/images/catering_decor.png' },
    { icon: MapPinned, name: 'Venue Booking', desc: 'Perfect premium locations for every event', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' },
    { icon: Briefcase, name: 'Corporate Events', desc: 'Professional gatherings that impress', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase flex items-center gap-3">
            <span className="w-8 h-px bg-gold" />
            What We Do
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4 text-text-primary">
            Services That<br />
            <span className="gold-shimmer italic">Elevate</span> Every Moment
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              variants={scaleIn}
              className={`service-image-card group cursor-pointer ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
            >
              <img
                src={service.image}
                alt={service.name}
                className={`w-full object-cover ${i === 0 ? 'h-full min-h-[400px]' : 'h-64'}`}
                loading="lazy"
              />
              <div className={`card-content absolute bottom-0 left-0 right-0 p-5 ${i === 0 ? 'p-8' : ''}`}>
                <service.icon className={`w-6 h-6 text-gold mb-3 group-hover:scale-110 transition-transform duration-300 ${i === 0 ? 'w-8 h-8 mb-4' : ''}`} />
                <h3 className={`font-display font-semibold text-white ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
                  {service.name}
                </h3>
                <p className={`text-white/50 mt-1 ${i === 0 ? 'text-base' : 'text-sm'} group-hover:text-white/70 transition-colors duration-300`}>
                  {service.desc}
                </p>
                <div className="mt-3 flex items-center gap-2 text-gold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Featured Events
function FeaturedEvents() {
  const events = [
    { title: 'Traditional Wedding', guests: '500+', location: 'Bengaluru', services: ['Decor', 'Catering', 'Photography'], image: '/images/wedding_mandap.png' },
    { title: 'Avengers Theme Birthday', guests: '100+', location: 'Bengaluru', services: ['Balloon Decor', 'Theme Setup', 'Photography'], image: '/images/birthday_decor.png' },
    { title: 'Double Birthday Party', guests: '150+', location: 'Bengaluru', services: ['Dual Theme Decor', 'Catering', 'Live Counters'], image: '/images/housewarming_decor.png' },
    { title: 'Grand Reception', guests: '800+', location: 'Bengaluru', services: ['Full Planning', 'Decor', 'Catering'], image: '/images/reception_decor.png' },
    { title: 'Haldi Ceremony', guests: '80+', location: 'Bengaluru', services: ['Decor', 'Photography', 'Catering'], image: '/images/haldi_ceremony.png' },
    { title: 'Kids Birthday Party', guests: '50+', location: 'Bengaluru', services: ['Decor', 'Caricature', 'Entertainment'], image: '/images/catering_decor.png' },
  ];

  return (
    <section className="py-24 bg-bg-primary">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase flex items-center gap-3">
            <span className="w-8 h-px bg-gold" />
            Portfolio
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4 text-text-primary">
            Featured <span className="gold-shimmer italic">Events</span>
          </h2>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="overflow-x-auto pb-8 px-6 lg:px-12 scrollbar-none">
          <div className="flex gap-6 min-w-max">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="w-[350px] flex-shrink-0 group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] border border-border group-hover:border-gold/30 transition-all duration-500">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl font-semibold text-white">{event.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-white/70 text-sm">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{event.guests}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {event.services.map((s) => (
                    <span key={s} className="text-xs bg-bg-card text-text-secondary px-3 py-1 rounded-full border border-border">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Butterflies Events
function WhyButterfliesEvents() {
  const features = [
    { icon: CheckCircle2, title: 'End-to-End Planning', desc: 'From concept to cleanup, we handle everything so you can enjoy every moment.' },
    { icon: Award, title: 'Premium Vendors', desc: 'Access to our curated network of the finest vendors and suppliers.' },
    { icon: Users, title: 'Dedicated Team', desc: 'A personal event manager assigned to your celebration from start to finish.' },
    { icon: Palette, title: 'Creative Concepts', desc: 'Unique themes and designs that reflect your personality and vision.' },
    { icon: Wallet, title: 'Affordable Pricing', desc: 'Excellent service and decor at every budget point without compromising on quality.' },
    { icon: Globe, title: 'Outstation Events', desc: 'Seamless execution across cities with our wide network.' },
    { icon: Eye, title: 'Transparent Process', desc: 'Clear communication, detailed timelines, and no hidden costs.' },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase">Why Choose Us</span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4 text-text-primary">
            Why <span className="gold-shimmer italic">Butterflies Events</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={scaleIn}
              className={`luxury-card group ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <f.icon className={`text-gold mb-4 group-hover:scale-110 transition-transform duration-300 ${i === 0 ? 'w-10 h-10' : 'w-7 h-7'}`} />
              <h3 className={`font-display font-bold text-text-primary ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
                {f.title}
              </h3>
              <p className={`text-text-secondary mt-2 ${i === 0 ? 'text-base mt-4' : 'text-sm'}`}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Event Journey
function EventJourney() {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'We listen to your vision, understand your preferences, and explore possibilities together.', icon: Eye },
    { num: '02', title: 'Planning', desc: 'Detailed timelines, vendor selection, budget allocation, and logistics mapping.', icon: Calendar },
    { num: '03', title: 'Design', desc: 'Creative concepts, mood boards, and visual designs that bring your vision to life.', icon: Palette },
    { num: '04', title: 'Coordination', desc: 'Vendor management, confirmations, rehearsals, and final preparations.', icon: Users },
    { num: '05', title: 'Execution', desc: 'Flawless day-of management with our experienced team handling every detail.', icon: Shield },
    { num: '06', title: 'Celebration', desc: 'You enjoy every moment while we ensure everything runs seamlessly.', icon: Sparkles },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase flex items-center gap-3">
            <span className="w-8 h-px bg-gold" />
            Our Process
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4 text-text-primary">
            Your Event <span className="gold-shimmer italic">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Gold connector line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative flex items-center gap-8 mb-16 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} hidden lg:block`}>
                <div className="luxury-card inline-block">
                  <span className="text-gold font-display text-5xl font-bold opacity-30">{step.num}</span>
                  <h3 className="font-display text-2xl font-semibold text-text-primary mt-2">{step.title}</h3>
                  <p className="text-text-secondary mt-2 max-w-sm">{step.desc}</p>
                </div>
              </div>

              <div className="relative z-10 w-14 h-14 rounded-full bg-bg-card border border-gold/30 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-5 h-5 text-gold" />
              </div>

              <div className="flex-1 lg:hidden">
                <div className="luxury-card">
                  <span className="text-gold font-display text-3xl font-bold opacity-30">{step.num}</span>
                  <h3 className="font-display text-xl font-semibold text-text-primary mt-2">{step.title}</h3>
                  <p className="text-text-secondary mt-2 text-sm">{step.desc}</p>
                </div>
              </div>

              <div className={`flex-1 hidden lg:block`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function AnimatedStat({ end, suffix, decimals, label }: { end: number; suffix: string; decimals: number; label: string }) {
  const { ref, value } = useCountUp({ end, suffix, decimals, duration: 2200 });
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl lg:text-7xl font-bold gold-shimmer counter-value">{value}</p>
      <p className="text-text-muted mt-4 text-xs tracking-[0.2em] uppercase font-medium">{label}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="py-28 px-6 lg:px-12 bg-bg-secondary relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold/70 text-xs font-medium tracking-[0.25em] uppercase">By The Numbers</span>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <AnimatedStat end={1000} suffix="+" decimals={0} label="Events Delivered" />
          <AnimatedStat end={5} suffix="+" decimals={0} label="Years Experience" />
          <AnimatedStat end={4.9} suffix="" decimals={1} label="Google Rating" />
          <AnimatedStat end={1034} suffix="" decimals={0} label="Google Reviews" />
        </div>
      </div>
    </section>
  );
}

// Testimonials
function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const clientWidth = e.currentTarget.clientWidth;
    if (clientWidth > 0) {
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const testimonials = [
    { name: 'Sainath Yeshagol', event: 'Birthday Party', text: 'We were surprised and stunned on the amazing way Butterflies managed the double birthday party we hired them for. We did not have to any follow up once everything was planned. Each and every service we had opted was followed up perfectly.', rating: 5 },
    { name: 'Anisha Sunny', event: 'Kids Birthday', text: "We had hired them for my kid's birthday party with an Avengers theme, and they did a fantastic job! The balloon decorations looked amazing and perfectly matched the theme — the kids absolutely loved it.", rating: 5 },
    { name: 'Saumya Kapoor', event: 'Birthday Party', text: "I had an amazing experience with Butterflies event planners for my son's 9th birthday. The decoration was really good and was exactly the way we wanted. My son was super excited seeing it.", rating: 5 },
    { name: 'Happy Client', event: 'Wedding', text: 'Amazing team, quality of both Veg and Non Veg food was delicious. The decoration was stunning and the entire coordination was flawless.', rating: 5 },
    { name: 'Satisfied Customer', event: 'Corporate Event', text: 'Excellent service, excellent decor, affordable pricing. They handled everything professionally and our guests were thoroughly impressed.', rating: 5 },
    { name: 'Event Guest', event: 'Party', text: 'The dancers did great and many people enjoyed it. The overall event management was top-notch and everything went smoothly.', rating: 5 },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase flex items-center gap-3">
            <span className="w-8 h-px bg-gold" />
            Testimonials
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4 text-text-primary">
            What Our <span className="gold-shimmer italic">Clients</span> Say
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-text-secondary text-sm">4.9 average from 1,034 Google Reviews</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          onScroll={handleScroll}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-6 pb-6 md:pb-0 md:grid-cols-2 lg:grid-cols-3 scrollbar-none"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="luxury-card w-[85vw] md:w-auto flex-shrink-0 md:flex-shrink snap-center flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-gold/20 mb-4" />
                <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">{t.text}</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div>
                  <p className="font-semibold text-sm text-text-primary">{t.name}</p>
                  <p className="text-text-muted text-xs">{t.event}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile slide indicators */}
        <div className="flex justify-center gap-1.5 mt-6 md:hidden">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-6 bg-gold' : 'w-1.5 bg-gold/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Event Categories
function EventCategories() {
  const categories = [
    { name: 'Wedding', image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600', count: '200+' },
    { name: 'Reception', image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=600', count: '150+' },
    { name: 'Engagement', image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600', count: '100+' },
    { name: 'Corporate', image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600', count: '120+' },
    { name: 'Birthday', image: 'https://images.pexels.com/photos/1128905/pexels-photo-1128905.jpeg?auto=compress&cs=tinysrgb&w=600', count: '300+' },
    { name: 'Baby Shower', image: 'https://images.pexels.com/photos/1194021/pexels-photo-1194021.jpeg?auto=compress&cs=tinysrgb&w=600', count: '60+' },
    { name: 'House Warming', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600', count: '50+' },
    { name: 'Anniversary', image: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?auto=compress&cs=tinysrgb&w=600', count: '70+' },
    { name: 'Private Parties', image: 'https://images.pexels.com/photos/2291510/pexels-photo-2291510.jpeg?auto=compress&cs=tinysrgb&w=600', count: '80+' },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase">Celebrations</span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4 text-text-primary">
            Event <span className="gold-shimmer italic">Categories</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              variants={scaleIn}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-border hover:border-gold/30 transition-all duration-500 ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[3/4]'
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className={`font-display font-semibold text-white ${i === 0 ? 'text-3xl' : 'text-lg'}`}>
                  {cat.name}
                </h3>
                <p className="text-white/50 text-sm">{cat.count} events</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 2-4 weeks in advance for birthday celebrations and smaller events. For weddings and large events, 3-6 months is ideal. However, we are available 24 hours and always try to accommodate last-minute requests when possible.' },
    { q: 'What is your pricing structure?', a: 'Our pricing is customized based on your event requirements, scale, and preferences. We offer transparent quotes with no hidden costs and affordable pricing for all budgets. Book a consultation to receive a detailed proposal tailored to your needs.' },
    { q: 'What services do you offer?', a: 'We offer end-to-end event management including decoration, balloon decorations, catering (both Veg & Non-Veg), photography, live counters, entertainment, caricature artists, dancers, DJ, and more. We are your one-stop shop for all event needs.' },
    { q: 'Do you handle both Veg and Non-Veg catering?', a: 'Yes! We provide both Veg and Non-Veg catering options with delicious food quality. We also offer live food counters, custom menus, and dietary accommodations based on your preferences.' },
    { q: 'How do I start the booking process?', a: 'Simply reach out through our contact form, WhatsApp at +91 91767 07070, or give us a call. We are open 24 hours! We\'ll schedule a free consultation to understand your vision and provide a customized proposal.' },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-bg-primary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase">FAQ</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 text-text-primary">
            Common <span className="gold-shimmer italic">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="luxury-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-0 text-left cursor-pointer"
              >
                <span className="font-medium text-base pr-4 text-text-primary">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-text-secondary leading-relaxed text-sm">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-bg-secondary relative overflow-hidden">
      {/* Radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_70%)]" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-text-primary">
          Let's Create Something<br />
          <span className="gold-shimmer italic">Extraordinary</span>
        </h2>
        <p className="text-text-secondary text-lg mt-6 max-w-xl mx-auto">
          Ready to bring your vision to life? Let's start planning your unforgettable celebration.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            to="/contact"
            className="luxury-btn luxury-btn-primary"
          >
            <Calendar className="w-5 h-5" />
            Book Consultation
          </Link>
          <a
            href="https://wa.me/919176707070"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-btn luxury-btn-primary bg-[#25D366] border-[#25D366] hover:bg-[#20BD5A]"
            style={{ background: 'linear-gradient(135deg, #25D366, #20BD5A)', borderColor: '#25D366' }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="tel:+919176707070"
            className="luxury-btn luxury-btn-secondary"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustMarquee />
      <BrandStory />
      <Services />
      <FeaturedEvents />
      <WhyButterfliesEvents />
      <EventJourney />
      <StatsSection />
      <Testimonials />
      <EventCategories />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
