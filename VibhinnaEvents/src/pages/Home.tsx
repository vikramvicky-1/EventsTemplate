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

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
  const items = ['1200+ Events', '6+ Years', '5.0★ Google Rated', 'RR Nagar, Bengaluru', 'Weddings', 'First Birthday Parties', 'Theme Decorations', 'Photography', 'Catering'];
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
        <div className="max-w-3xl">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-[0.25em] uppercase mb-8">
              <span className="w-8 h-px bg-gold" />
              Premium Event Organiser
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-white">Crafting</span><br />
            <span className="gold-shimmer italic">Extraordinary</span><br />
            <span className="text-white">Celebrations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/80 text-lg lg:text-xl max-w-lg leading-relaxed mt-8"
          >
            From intimate gatherings to grand celebrations, we design and execute events that leave lasting impressions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link to="/contact" className="luxury-btn luxury-btn-primary group">
              Plan Your Event
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
            </Link>
            <Link to="/gallery" className="luxury-btn luxury-btn-white text-white border-white/20 hover:bg-white/10">
              View Our Work
            </Link>
          </motion.div>

          {/* Mini Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 gap-y-6 gap-x-8 sm:flex sm:flex-wrap sm:gap-10 mt-16 pt-8 border-t border-white/10 text-white"
          >
            <div>
              <p className="font-display text-3xl font-bold gold-gradient">1200+</p>
              <p className="text-white/60 text-xs mt-1 tracking-wider uppercase">Events</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold gold-gradient">6+</p>
              <p className="text-white/60 text-xs mt-1 tracking-wider uppercase">Years</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold gold-gradient">148+</p>
              <p className="text-white/60 text-xs mt-1 tracking-wider uppercase">Reviews</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold gold-gradient">5.0★</p>
              <p className="text-white/60 text-xs mt-1 tracking-wider uppercase">Rating</p>
            </div>
          </motion.div>
        </div>
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
              Born from a passion for celebration, Vibhinna Events transforms ordinary moments into extraordinary memories. Every event is a masterpiece of creativity, precision, and heart.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-7 grid grid-cols-2 gap-6">
            {[
              { icon: Award, value: '6+', label: 'Years of Experience', color: 'from-gold/10 to-transparent' },
              { icon: Calendar, value: '1200+', label: 'Events Delivered', color: 'from-gold/5 to-transparent' },
              { icon: MapPin, value: '10+', label: 'Cities Covered', color: 'from-gold/10 to-transparent' },
              { icon: Users, value: '20+', label: 'Dedicated Team Members', color: 'from-gold/5 to-transparent' },
            ].map((stat) => (
              <div key={stat.label} className={`luxury-card bg-bg-secondary relative overflow-hidden flex flex-col justify-between`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} pointer-events-none`} />
                <stat.icon className="w-7 h-7 text-gold relative z-10" />
                <div className="relative z-10 mt-6">
                  <p className="font-display text-3xl sm:text-4xl font-bold gold-gradient">{stat.value}</p>
                  <p className="text-text-secondary text-xs sm:text-sm mt-1 font-medium">{stat.label}</p>
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
    { icon: Palette, name: 'Decor & Design', desc: 'Stunning visual transformations', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800' },
    { icon: Camera, name: 'Photography', desc: 'Capturing every precious candid moment', image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800' },
    { icon: Music, name: 'Entertainment', desc: 'DJ, live music & sangeet performances', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800' },
    { icon: UtensilsCrossed, name: 'Catering', desc: 'Delicious culinary experiences to savor', image: '/images/catering_decor.png' },
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
    { title: 'Traditional Wedding', guests: '500+', location: 'Udaipur', services: ['Decor', 'Catering', 'Photography'], image: '/images/wedding_mandap.png' },
    { title: 'Tech Summit', guests: '2000+', location: 'Bengaluru', services: ['AV Setup', 'Catering', 'Management'], image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800' },
    { title: 'Butterfly Theme Birthday', guests: '150+', location: 'Bengaluru', services: ['Theme Decor', 'Photo Gallery', 'Custom Cake'], image: '/images/birthday_decor.png' },
    { title: 'Grand Reception', guests: '800+', location: 'Mysuru', services: ['Full Planning', 'Decor', 'Catering'], image: '/images/reception_decor.png' },
    { title: 'Haldi Ceremony', guests: '80+', location: 'Bengaluru', services: ['Decor', 'Photography', 'Catering'], image: '/images/haldi_ceremony.png' },
    { title: 'House Warming', guests: '200+', location: 'Chennai', services: ['Decor', 'Catering', 'Photography'], image: '/images/housewarming_decor.png' },
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

// Why Vibhinna Events
function WhyVibhinnaEvents() {
  const features = [
    { icon: CheckCircle2, title: 'End-to-End Planning', desc: 'From concept to cleanup, we handle everything so you can enjoy every moment.' },
    { icon: Award, title: 'Premium Vendors', desc: 'Access to our curated network of the finest vendors and suppliers.' },
    { icon: Users, title: 'Dedicated Team', desc: 'A personal event manager assigned to your celebration from start to finish.' },
    { icon: Palette, title: 'Creative Concepts', desc: 'Unique themes and designs that reflect your personality and vision.' },
    { icon: Wallet, title: 'Flexible Budget', desc: 'Stunning events at every budget point without compromising on quality.' },
    { icon: Globe, title: 'Outstation Events', desc: 'Seamless execution across cities with our nationwide network.' },
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
            Why <span className="gold-shimmer italic">Vibhinna Events</span>
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
      <p className="text-text-secondary mt-4 text-xs tracking-[0.2em] uppercase font-semibold">{label}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="py-28 px-6 lg:px-12 bg-bg-secondary relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,147,104,0.04),transparent_70%)]" />
      
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
          <AnimatedStat end={1200} suffix="+" decimals={0} label="Events Delivered" />
          <AnimatedStat end={6} suffix="+" decimals={0} label="Years Experience" />
          <AnimatedStat end={5.0} suffix="" decimals={1} label="Client Rating" />
          <AnimatedStat end={148} suffix="+" decimals={0} label="Google Reviews" />
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
    { name: 'Rishabh Jain', event: '1st Birthday Party', text: "We are absolutely blown away by the incredible job Vibhinna Events did for our daughter's first birthday party! To say they were amazing is an understatement. From our very first chat, they were professional, creative, and understood exactly what we wanted. The butterfly theme decoration was stunning.", rating: 5 },
    { name: 'Prabhanjan R.S.', event: 'Butterfly Birthday Theme', text: 'We partnered with Vibhinna Events for our child’s first birthday, and they exceeded our expectations in every way. We chose a butterfly theme backdrop and cake, and the décor along with Baby’s photo gallery was absolutely stunning — every detail was perfect.', rating: 5 },
    { name: 'Mandeep Dhama', event: 'Event Celebration', text: 'Indeed it was best. Everything was on point aesthetically and professionally. Would definitely refer if someone is looking for the same requirement. Value for money and exceptional commitment.', rating: 5 },
    { name: 'Kavya & Sagar Appreciators', event: 'Family Function', text: 'We appreciate the commitment Kavya & Sagar gave for the work quality. The setup, organization, and overall arrangements were absolutely wonderful. They gave us wonderful memories.', rating: 5 },
    { name: 'Sagar K.', event: 'Wedding Decoration', text: 'Excellent event management team. The decoration was extremely elegant and done exactly as discussed. Highly recommend their services for traditional and modern decors.', rating: 5 },
    { name: 'Neha Sharma', event: 'Baby Shower', text: 'The baby shower decoration and arrangement were absolutely beautiful. Everyone loved the theme and setup. Thank you Vibhinna Events for making it so special!', rating: 5 },
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
            <span className="text-text-secondary text-sm">5.0 average from 148 Google Reviews</span>
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
    { name: 'Birthday Party', image: '/images/birthday_decor.png', count: '450+' },
    { name: 'Wedding', image: '/images/wedding_mandap.png', count: '300+' },
    { name: 'Reception', image: '/images/reception_decor.png', count: '180+' },
    { name: 'Engagement', image: '/images/haldi_ceremony.png', count: '100+' },
    { name: 'House Warming', image: '/images/housewarming_decor.png', count: '60+' },
    { name: 'Baby Shower', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600', count: '80+' },
    { name: 'Decor & Design', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600', count: '220+' },
    { name: 'Corporate Event', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600', count: '90+' },
    { name: 'Private Celebrations', image: 'https://images.unsplash.com/photo-1291510/pexels-photo-2291510.jpeg?auto=compress&cs=tinysrgb&w=600', count: '80+' },
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
                loading="lazy"
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
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 2-4 months in advance for birthday decors and weddings. For smaller celebrations, 2-4 weeks is usually sufficient. However, we always try to accommodate last-minute requests when possible.' },
    { q: 'What is your pricing structure?', a: 'Our pricing is customized based on your event requirements, scale, and preferences. We offer transparent quotes with no hidden costs. Book a consultation to receive a detailed proposal tailored to your needs.' },
    { q: 'Do you work with external vendors?', a: 'Yes! While we have a curated network of premium vendors, we\'re happy to collaborate with your preferred vendors. We ensure seamless coordination regardless of the vendor source.' },
    { q: 'What is the typical planning timeline?', a: 'Weddings typically require 3-5 months of planning. Corporate events 1-2 months. Birthday celebrations and smaller events 2-4 weeks. We create detailed timelines during our initial consultation.' },
    { q: 'How do I start the booking process?', a: 'Simply reach out through our contact form, WhatsApp, or give us a call. We\'ll schedule a free consultation to understand your vision and provide a customized proposal within 48 hours.' },
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,147,104,0.06),transparent_70%)]" />
      
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
            href="https://wa.me/917676789839"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-btn luxury-btn-primary bg-[#25D366] border-[#25D366] hover:bg-[#20BD5A] text-white"
            style={{ background: 'linear-gradient(135deg, #25D366, #20BD5A)', borderColor: '#25D366' }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="tel:+917676789839"
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
      <WhyVibhinnaEvents />
      <EventJourney />
      <StatsSection />
      <Testimonials />
      <EventCategories />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
