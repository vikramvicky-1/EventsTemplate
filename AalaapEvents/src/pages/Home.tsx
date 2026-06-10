import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Star, MapPin, Users, Calendar,
  Heart, Briefcase, Home as HomeIcon, Gem,
  Camera, Music, Sparkles,
  Phone, MessageCircle, ChevronDown, ChevronUp,
  Award, Shield, Palette, Wallet, Globe, Eye,
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
  const items = [
    'Naming Ceremonies',
    'Marriage Events',
    'Showroom Opening Promotions',
    'Wedding Planning',
    'Stage Decoration',
    'Professional Photography',
    'Bengaluru & Madanayakanahalli',
    '6+ Years Experience'
  ];
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
            alt="Luxury wedding celebration"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C081A]/90 via-[#0C081A]/70 to-transparent z-10" />
      </div>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 lg:pt-32 pb-16">
        <div className="max-w-3xl">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-[0.25em] uppercase mb-8">
              <span className="w-8 h-px bg-gold" />
              Aalaap Entertainers
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            Orchestrating<br />
            <span className="gold-shimmer italic">Extraordinary</span><br />
            <span className="text-white">Celebrations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-text-secondary text-lg lg:text-xl max-w-lg leading-relaxed mt-8"
          >
            From traditional naming ceremonies to grand showroom promotions and luxury weddings, we handle everything with care and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-10"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 gap-y-6 gap-x-8 sm:flex sm:flex-wrap sm:gap-10 mt-16 pt-8 border-t border-white/10"
          >
            <div>
              <p className="font-display text-3xl font-bold gold-gradient">1000+</p>
              <p className="text-text-muted text-xs mt-1 tracking-wider uppercase">Events</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold gold-gradient">6+</p>
              <p className="text-text-muted text-xs mt-1 tracking-wider uppercase">Years</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold gold-gradient">244</p>
              <p className="text-text-muted text-xs mt-1 tracking-wider uppercase">Google Reviews</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold gold-gradient">4.4★</p>
              <p className="text-text-muted text-xs mt-1 tracking-wider uppercase">Rating</p>
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
                Where Melody<br />
                <span className="gold-shimmer italic">Meets Celebration</span>
              </h2>
            </div>
            <p className="text-text-secondary text-base leading-relaxed mt-8">
              Aalaap (melody) represents the perfect start to a beautiful composition. We bring that same harmony, rhythm, and spectacular execution to every celebration. Based in Madanayakanahalli, Dasanapura, Bengaluru, Aalaap Entertainers specializes in creating heartwarming family memories and high-impact corporate launch promotions.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-7 grid grid-cols-2 gap-6">
            {[
              { icon: Award, value: '6+', label: 'Years of Experience', color: 'from-gold/10 to-transparent' },
              { icon: Calendar, value: '1000+', label: 'Celebrations Conducted', color: 'from-gold/5 to-transparent' },
              { icon: MapPin, value: 'Bengaluru', label: 'Plus Kolar & Kuppam', color: 'from-gold/10 to-transparent' },
              { icon: Users, value: '15+', label: 'Expert Team Members', color: 'from-gold/5 to-transparent' },
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
    { icon: Heart, name: 'Wedding Planning', desc: 'Traditional mandap decorators, stage designs, flower arrangements, and complete marriage management.', image: '/images/wedding_mandap.png' },
    { icon: Gem, name: 'Naming Ceremony', desc: 'Cradle decorations, floral themes, naming backdrops, and auspicious setups tailored for families.', image: '/images/haldi_ceremony.png' },
    { icon: Briefcase, name: 'Showroom & Corporate Promotions', desc: 'Expert retail launch activity and promotional campaigns, as done for Samsung showroom launches.', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800' },
    { icon: Sparkles, name: 'Engagement Decor', desc: 'Splendid ring ceremony settings and stage setups, from premium hotels to halls like Nandana Palace.', image: '/images/reception_decor.png' },
    { icon: HomeIcon, name: 'House Warming', desc: 'Auspicious Griha Pravesha traditional flower arrangements and styling.', image: '/images/housewarming_decor.png' },
    { icon: Camera, name: 'Photography & Videos', desc: 'Capturing candid celebration smiles, traditional ceremonies, and grand promotional activity shoots.', image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800' },
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
            <span className="gold-shimmer italic">Elevate</span> Every Event
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={scaleIn}
              className="service-image-card group cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full object-cover h-64"
                loading="lazy"
              />
              <div className="card-content absolute bottom-0 left-0 right-0 p-5">
                <service.icon className="w-6 h-6 text-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display font-semibold text-white text-lg">
                  {service.name}
                </h3>
                <p className="text-white/50 mt-1 text-sm group-hover:text-white/70 transition-colors duration-300">
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
    { title: 'Traditional Wedding Stage', guests: '600+', location: 'Dasarahalli Post, Bengaluru', services: ['Floral Mandap', 'Lighting', 'Photography'], image: '/images/wedding_mandap.png' },
    { title: 'Samsung Showroom Launch', guests: 'Retail Activity', location: 'Madanayakanahalli, Bengaluru', services: ['Promotional Campaigns', 'AV Setup', 'Catering'], image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800' },
    { title: 'Cradle Naming Ceremony', guests: '200+', location: 'Kolar', services: ['Traditional Decor', 'Themes', 'Candid Capture'], image: '/images/birthday_decor.png' },
    { title: 'Cousin Engagement Setup', guests: '400+', location: 'Nandana Palace, Bengaluru', services: ['Stage Decoration', 'Videography', 'Event Planning'], image: '/images/reception_decor.png' },
    { title: 'Griha Pravesham Haldi', guests: '100+', location: 'Kuppam', services: ['Traditional Decor', 'Catering'], image: '/images/haldi_ceremony.png' },
    { title: 'Apartment Sangeet Night', guests: '350+', location: 'Lake Tower Apartments, Bengaluru', services: ['Sound Setup', 'Sangeet Stage', 'Lighting'], image: '/images/housewarming_decor.png' },
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
            Featured <span className="gold-shimmer italic">Celebrations</span>
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

// Why Aalaap Entertainers
function WhyAalaap() {
  const features = [
    { icon: CheckCircle2, title: 'End-to-End Planning', desc: 'From traditional rituals to contemporary entertainment, we organize every detail flawlessly.' },
    { icon: Award, title: 'Custom Backdrop Decor', desc: 'Unique, beautiful theme designs for naming ceremonies and weddings.' },
    { icon: Users, title: 'Humble & Dedicated Team', desc: 'Vinay Aalaap and group provide high-touch care and responsive coordination.' },
    { icon: Palette, title: 'Corporate Promo Experts', desc: 'Smooth setup and launch execution for showroom openings and brands.' },
    { icon: Wallet, title: 'Optimized Budgets', desc: 'Splendid decorations and planning mapped perfectly to your expectations.' },
    { icon: Globe, title: 'Outstation Support', desc: 'We deliver weddings and events across Bengaluru, Kolar, Kuppam, and beyond.' },
    { icon: Eye, title: 'Transparent Process', desc: 'No hidden costs, honest vendor dealings, and transparent stage styling.' },
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
            Why <span className="gold-shimmer italic">Aalaap Entertainers</span>
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
    { num: '01', title: 'Aalaap (Melody Intro)', desc: 'We consult, listen to your family traditions or retail launch plans, and map out concepts.', icon: Eye },
    { num: '02', title: 'Design & Style', desc: 'Creative mood boards, cradle styling options, custom wedding mandaps, or promo banners.', icon: Palette },
    { num: '03', title: 'Vendor Alignment', desc: 'Coordinating florists, catering, stage carpenters, sangeet DJs, and sound systems.', icon: Users },
    { num: '04', title: 'Seamless Execution', desc: 'Vinay Aalaap and the crew handle setup early in the morning so everything is ready for your guests.', icon: Shield },
    { num: '05', title: 'Celebration!', desc: 'You enjoy the rituals or showroom promotions while we run things smoothly behind the scenes.', icon: Sparkles },
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
          {/* connector line */}
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

              <div className="flex-1 hidden lg:block" />
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
      {/* radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.03),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold/70 text-xs font-medium tracking-[0.25em] uppercase">Trusted By Bengaluru Families</span>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <AnimatedStat end={1000} suffix="+" decimals={0} label="Events Executed" />
          <AnimatedStat end={6} suffix="+" decimals={0} label="Years Active" />
          <AnimatedStat end={4.4} suffix="" decimals={1} label="Client Rating" />
          <AnimatedStat end={244} suffix="+" decimals={0} label="Google Reviews" />
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

  // Real Google Maps reviews
  const testimonials = [
    { name: 'renjith v', event: 'Local Guide', text: 'Dear Aalap Entertainment Team, I am writing to express my heartfelt appreciation for the outstanding job done by Vinay Aalaap sir and the group. Happy with your services, you people rock!', rating: 5 },
    { name: 'Abi. krishnan', event: 'Corporate Promotion', text: 'Samsung showroom opening was done by alaap entertainers they made the promotion activity easy for us. They made our work easy!', rating: 5 },
    { name: 'Cousin Engagement', event: 'Nandana Palace Reception', text: 'They organised the engagement ceremony of my cousin in Nandana Palace. Splendid flower decorations and lighting!', rating: 5 },
    { name: 'Apartment Committee', event: 'Lake Tower Apartments', text: 'We are always happy to be part of the community decorations and celebrations. The humbleness and care Vinay and team gave to us was amazing.', rating: 5 },
    { name: 'Naveen Kumar', event: 'Naming Ceremony', text: 'Excellent cradle decoration. They did it within the timeline and at a very reasonable price. Strongly recommended event planner in Bengaluru.', rating: 5 },
    { name: 'Samsung Showroom Team', event: 'Retail Promotion Activity', text: 'Alaap Entertainers made the promotion activity extremely interactive. They handled the stage setups, audio, and promotions very well.', rating: 5 },
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
            Google Reviews
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4 text-text-primary">
            Client <span className="gold-shimmer italic">Testimonials</span>
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-text-secondary text-sm">4.4 rating from 244 Reviews on Google Maps</span>
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
                <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">"{t.text}"</p>
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
    { name: 'Weddings', image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600', count: '400+' },
    { name: 'Naming Ceremony', image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600', count: '250+' },
    { name: 'Showroom Promotions', image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600', count: '100+' },
    { name: 'Engagements', image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=600', count: '150+' },
    { name: 'House Warmings', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600', count: '80+' },
    { name: 'Stage Decoration', image: 'https://images.pexels.com/photos/1128905/pexels-photo-1128905.jpeg?auto=compress&cs=tinysrgb&w=600', count: '300+' },
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
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
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
    { q: 'Where are you based and what areas do you cover?', a: 'We are based at No 350, Dr shivakumar Swamy ji Road, Madhanayakanahalli (Dasarahalli Post, Bengaluru). We manage events throughout Bengaluru and regularly travel to Kolar, Kuppam, and other nearby districts.' },
    { q: 'What kind of promotional events do you coordinate?', a: 'We execute complete showroom launch activations, outdoor marketing events, and retail promotions. We have a proven track record, including campaigns like the Samsung showroom opening promotion.' },
    { q: 'How do you handle traditional setups like naming ceremonies or house warmings?', a: 'We provide traditional cradle decoration, flower garlands, backdrop styling, and stage props. We coordinate custom color themes and setup requirements with the family beforehand.' },
    { q: 'How far in advance should we book Vinay Aalaap and team?', a: 'For wedding planning and large corporate activations, we recommend booking 2-4 months in advance. For naming ceremonies and family events, 3-4 weeks is usually enough. Reach out to check our immediate availability.' },
    { q: 'Do you offer custom budget solutions?', a: 'Yes! We customize the floral arrangements, lighting setups, sound systems, and photography details based on your specific requirements. We give clear, upfront pricing with zero hidden charges.' },
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
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.04),transparent_70%)]" />
      
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
          Ready to plan your wedding, baby shower, naming ceremony, or showroom promotion? Contact Vinay Aalaap and the group today.
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
            href="https://wa.me/919964562562"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-btn luxury-btn-primary bg-[#25D366] border-[#25D366] hover:bg-[#20BD5A]"
            style={{ background: 'linear-gradient(135deg, #25D366, #20BD5A)', borderColor: '#25D366' }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="tel:+919964562562"
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
      <WhyAalaap />
      <EventJourney />
      <StatsSection />
      <Testimonials />
      <EventCategories />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
