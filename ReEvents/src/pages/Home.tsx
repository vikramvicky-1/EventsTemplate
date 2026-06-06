import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Star, MapPin, Users, Calendar,
  Heart, Briefcase, Cake, Baby, Home as HomeIcon, Gem,
  Camera, Music, UtensilsCrossed, MapPinned, Sparkles,
  Phone, MessageCircle, ChevronDown, ChevronUp, Play,
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
  visible: { transition: { staggerChildren: 0.1 } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// Trust Marquee
function TrustMarquee() {
  const items = ['3000+ Events', '6+ Years', 'Weddings', 'Corporate', 'Decor', 'Photography', 'Catering', 'DJ', 'Venue Booking'];
  const doubled = [...items, ...items];
  
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-8">
            <span className="font-display text-xl lg:text-2xl font-medium text-charcoal/80">{item}</span>
            <Sparkles className="w-4 h-4 text-gold/70" />
          </span>
        ))}
      </div>
    </section>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 lg:pt-32 pb-16 px-6 lg:px-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />
      
      <motion.div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 text-gold text-sm font-medium tracking-widest uppercase mb-6">
                <Sparkles className="w-4 h-4" />
                Premium Event Organiser
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
            >
              Crafting<br />
              <span className="italic text-gold">Extraordinary</span><br />
              Celebrations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-warm-gray text-lg lg:text-xl max-w-lg leading-relaxed"
            >
              From intimate gatherings to grand celebrations, we design and execute events that leave lasting impressions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group flex items-center gap-2 bg-charcoal text-white border-[3px] border-charcoal px-8 py-4 rounded-full font-bold shadow-[4px_4px_0px_0px_#8B48ED] hover:bg-gold hover:text-charcoal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150"
              >
                Plan Your Event
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/gallery"
                className="group flex items-center gap-2 bg-white text-charcoal border-[3px] border-charcoal px-8 py-4 rounded-full font-bold shadow-[4px_4px_0px_0px_#12131A] hover:bg-accent-sage hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Bento Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <motion.div variants={scaleIn} className="bento-card col-span-2 bg-charcoal text-white border-[3px] border-charcoal">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gold text-xs font-bold tracking-widest uppercase">Events Delivered</span>
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <p className="font-display text-5xl font-black">3000+</p>
              <p className="text-white/70 text-sm mt-2">Successfully executed celebrations</p>
            </motion.div>

            <motion.div variants={scaleIn} className="bento-card bg-accent-sage text-charcoal border-[3px] border-charcoal">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-gold" />
                <span className="text-xs text-charcoal/70 font-bold tracking-wider uppercase">Rating</span>
              </div>
              <p className="font-display text-3xl font-black">4.8</p>
              <div className="flex gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="bento-card bg-accent-lavender text-charcoal border-[3px] border-charcoal">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-xs text-charcoal/70 font-bold tracking-wider uppercase">Years</span>
              </div>
              <p className="font-display text-3xl font-black">6+</p>
              <p className="text-charcoal/70 text-xs mt-1">Years of excellence</p>
            </motion.div>

            <motion.div variants={scaleIn} className="bento-card col-span-2 bg-accent-rose text-charcoal border-[3px] border-charcoal overflow-hidden relative">
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-charcoal/70 font-bold tracking-wider uppercase">Based in</span>
                  <p className="font-display text-xl font-bold mt-1">Banashankari</p>
                </div>
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <p className="relative z-10 text-charcoal/70 text-sm mt-2">Bengaluru, Karnataka India</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Brand Story Section
function BrandStory() {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-12 gap-6"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-5 bento-card bg-charcoal text-white border-[3px] border-charcoal flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="text-gold text-xs font-bold tracking-widest uppercase">Our Story</span>
              <h2 className="font-display text-4xl lg:text-5xl font-black mt-4 leading-tight">
                Where Dreams<br />
                <span className="italic text-gold">Meet Reality</span>
              </h2>
            </div>
            <p className="text-white/70 text-lg leading-relaxed mt-8">
              Born from a passion for celebration, Royal Era Events transforms ordinary moments into extraordinary memories. Every event is a masterpiece of creativity, precision, and heart.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-7 grid grid-cols-2 gap-6">
            <div className="bento-card bg-accent-sage text-charcoal border-[3px] border-charcoal flex flex-col justify-between">
              <Award className="w-8 h-8 text-gold" />
              <div>
                <p className="font-display text-3xl sm:text-4xl font-black">6+</p>
                <p className="text-charcoal/70 text-xs sm:text-sm mt-1 font-semibold">Years of Experience</p>
              </div>
            </div>
            <div className="bento-card bg-accent-lavender text-charcoal border-[3px] border-charcoal flex flex-col justify-between">
              <Calendar className="w-8 h-8 text-gold" />
              <div>
                <p className="font-display text-3xl sm:text-4xl font-black">3000+</p>
                <p className="text-charcoal/70 text-xs sm:text-sm mt-1 font-semibold">Events Delivered</p>
              </div>
            </div>
            <div className="bento-card bg-accent-rose text-charcoal border-[3px] border-charcoal flex flex-col justify-between">
              <MapPin className="w-8 h-8 text-gold" />
              <div>
                <p className="font-display text-3xl sm:text-4xl font-black">12+</p>
                <p className="text-charcoal/70 text-xs sm:text-sm mt-1 font-semibold">Cities Covered</p>
              </div>
            </div>
            <div className="bento-card bg-accent-clay text-charcoal border-[3px] border-charcoal flex flex-col justify-between">
              <Users className="w-8 h-8 text-gold" />
              <div>
                <p className="font-display text-3xl sm:text-4xl font-black">25+</p>
                <p className="text-charcoal/70 text-xs sm:text-sm mt-1 font-semibold">Dedicated Team Members</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    { icon: Heart, name: 'Wedding Experiences', desc: 'Dream weddings crafted with love' },
    { icon: Briefcase, name: 'Corporate Events', desc: 'Professional gatherings that impress' },
    { icon: Cake, name: 'Birthday Celebrations', desc: 'Milestone moments made magical' },
    { icon: Baby, name: 'Baby Showers', desc: 'Welcoming new beginnings beautifully' },
    { icon: HomeIcon, name: 'House Warming', desc: 'New home celebrations with style' },
    { icon: Gem, name: 'Engagements', desc: 'The start of forever, perfected' },
    { icon: Sparkles, name: 'Receptions', desc: 'Grand celebrations of togetherness' },
    { icon: Palette, name: 'Decor & Design', desc: 'Stunning visual transformations' },
    { icon: Camera, name: 'Photography', desc: 'Capturing every precious moment' },
    { icon: Music, name: 'Entertainment', desc: 'DJ, live music & performances' },
    { icon: UtensilsCrossed, name: 'Catering', desc: 'Culinary experiences to savor' },
    { icon: MapPinned, name: 'Venue Booking', desc: 'Perfect locations for every event' },
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">What We Do</span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4">
            Services That<br />
            <span className="italic text-gold">Elevate</span> Every Moment
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              variants={scaleIn}
              className={`bento-card group cursor-pointer ${i === 0 ? 'sm:col-span-2 bg-charcoal text-white' : 'bg-white text-charcoal'}`}
            >
              <service.icon className={`w-8 h-8 mb-4 ${i === 0 ? 'text-gold' : 'text-gold'} group-hover:scale-110 transition-transform duration-300`} />
              <h3 className={`font-display text-xl font-semibold ${i === 0 ? 'text-white' : ''}`}>
                {service.name}
              </h3>
              <p className={`text-sm mt-2 ${i === 0 ? 'text-white/60' : 'text-warm-gray'}`}>
                {service.desc}
              </p>
              <ArrowUpRight className={`w-5 h-5 mt-4 ${i === 0 ? 'text-gold' : 'text-gold'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
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
    { title: 'Royal Wedding', guests: '500+', location: 'Udaipur', services: ['Decor', 'Catering', 'Photography'], image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Tech Summit', guests: '2000+', location: 'Bengaluru', services: ['AV Setup', 'Catering', 'Management'], image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Dream Birthday', guests: '150+', location: 'Bengaluru', services: ['Decor', 'Entertainment', 'Cake'], image: 'https://images.pexels.com/photos/1128905/pexels-photo-1128905.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Grand Reception', guests: '800+', location: 'Mysuru', services: ['Full Planning', 'Decor', 'Catering'], image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Baby Shower', guests: '80+', location: 'Bengaluru', services: ['Decor', 'Photography', 'Catering'], image: 'https://images.pexels.com/photos/1194021/pexels-photo-1194021.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'House Warming', guests: '200+', location: 'Chennai', services: ['Decor', 'Catering', 'Photography'], image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  return (
    <section className="py-24">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Portfolio</span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4">
            Featured <span className="italic text-gold">Events</span>
          </h2>
        </motion.div>
      </div>

      <div className="overflow-x-auto pb-8 px-6 lg:px-12">
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
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-semibold text-white">{event.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-white/80 text-sm">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" />{event.guests}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {event.services.map((s) => (
                  <span key={s} className="text-xs bg-ivory text-warm-gray px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Royal Era Events
function WhyReEvents() {
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
    <section className="py-24 px-6 lg:px-12 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Why Choose Us</span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4">
            Why <span className="italic text-gold">Royal Era Events</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((f, i) => {
            const bgColors = [
              'bg-accent-sage',
              'bg-accent-lavender',
              'bg-accent-rose',
              'bg-accent-clay',
              'bg-accent-sage',
              'bg-accent-lavender',
              'bg-accent-rose'
            ];
            const bgClass = bgColors[i % bgColors.length];
            return (
              <motion.div
                key={f.title}
                variants={scaleIn}
                className={`bento-card ${bgClass} text-charcoal border-[3px] border-charcoal group ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <f.icon className={`w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300 ${i === 0 ? 'w-12 h-12' : ''}`} />
                <h3 className={`font-display font-black ${i === 0 ? 'text-3xl' : 'text-xl'}`}>
                  {f.title}
                </h3>
                <p className={`text-charcoal/70 mt-2 ${i === 0 ? 'text-lg mt-4' : 'text-sm'}`}>
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Event Journey (Scrollytelling)
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
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Our Process</span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4">
            Your Event <span className="italic text-gold">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border" />
          
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
                <div className="bento-card bg-white text-charcoal inline-block">
                  <span className="text-gold font-display text-5xl font-bold opacity-30">{step.num}</span>
                  <h3 className="font-display text-2xl font-semibold mt-2">{step.title}</h3>
                  <p className="text-warm-gray mt-2 max-w-sm">{step.desc}</p>
                </div>
              </div>

              <div className="relative z-10 w-16 h-16 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                <step.icon className="w-6 h-6 text-gold" />
              </div>

              <div className="flex-1 lg:hidden">
                <div className="bento-card bg-white text-charcoal">
                  <span className="text-gold font-display text-3xl font-bold opacity-30">{step.num}</span>
                  <h3 className="font-display text-xl font-semibold mt-2">{step.title}</h3>
                  <p className="text-warm-gray mt-2 text-sm">{step.desc}</p>
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
      <p className="font-display text-5xl lg:text-7xl font-bold text-gold counter-value">{value}</p>
      <p className="text-white/50 mt-4 text-sm tracking-wider uppercase font-medium">{label}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="py-28 px-6 lg:px-12 bg-charcoal relative overflow-hidden">
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] via-transparent to-gold/[0.02]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold/70 text-sm font-medium tracking-widest uppercase">By The Numbers</span>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <AnimatedStat end={3000} suffix="+" decimals={0} label="Events Delivered" />
          <AnimatedStat end={6} suffix="+" decimals={0} label="Years Experience" />
          <AnimatedStat end={4.8} suffix="" decimals={1} label="Client Rating" />
          <AnimatedStat end={114} suffix="K" decimals={0} label="Instagram Followers" />
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
    { name: 'Priya & Rahul', event: 'Wedding', text: 'Royal Era Events made our dream wedding a reality. Every detail was perfect, from the floral arrangements to the catering. Our guests are still talking about it!', rating: 5 },
    { name: 'Ananya Sharma', event: 'Birthday', text: 'The team went above and beyond for my daughter\'s first birthday. The theme, the decor, the cake — everything was magical.', rating: 5 },
    { name: 'TechVista Corp', event: 'Corporate', text: 'Professional, creative, and incredibly organized. Our annual gala was the best one yet thanks to Royal Era Events\' meticulous planning.', rating: 5 },
    { name: 'Meera & Karthik', event: 'Reception', text: 'We trusted Royal Era Events with our reception and they exceeded every expectation. The venue transformation was breathtaking.', rating: 5 },
    { name: 'Sneha Patel', event: 'Baby Shower', text: 'The most beautiful baby shower I could have imagined. The pastel theme, the games, the food — absolutely perfect.', rating: 5 },
    { name: 'Rajesh Kumar', event: 'House Warming', text: 'Royal Era Events turned our house warming into a memorable celebration. The decor was elegant and the coordination was flawless.', rating: 5 },
  ];

  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4">
            What Our <span className="italic text-gold">Clients</span> Say
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-warm-gray">4.8 average from 179 Google Reviews</span>
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
              className="bento-card bg-white text-charcoal group w-[85vw] md:w-auto flex-shrink-0 md:flex-shrink snap-center flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-gold/30 mb-4" />
                <p className="text-charcoal/80 leading-relaxed mb-6 text-sm sm:text-base font-semibold">{t.text}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-warm-gray text-xs font-semibold">{t.event}</p>
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
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-6 bg-gold' : 'w-1.5 bg-gold/30'
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
    { name: 'Wedding', image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600', count: '350+' },
    { name: 'Reception', image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=600', count: '200+' },
    { name: 'Engagement', image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600', count: '120+' },
    { name: 'Corporate', image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600', count: '180+' },
    { name: 'Birthday', image: 'https://images.pexels.com/photos/1128905/pexels-photo-1128905.jpeg?auto=compress&cs=tinysrgb&w=600', count: '250+' },
    { name: 'Baby Shower', image: 'https://images.pexels.com/photos/1194021/pexels-photo-1194021.jpeg?auto=compress&cs=tinysrgb&w=600', count: '80+' },
    { name: 'House Warming', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600', count: '60+' },
    { name: 'Anniversary', image: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?auto=compress&cs=tinysrgb&w=600', count: '90+' },
    { name: 'Private Parties', image: 'https://images.pexels.com/photos/2291510/pexels-photo-2291510.jpeg?auto=compress&cs=tinysrgb&w=600', count: '100+' },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Celebrations</span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4">
            Event <span className="italic text-gold">Categories</span>
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
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[3/4]'
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className={`font-display font-semibold text-white ${i === 0 ? 'text-3xl' : 'text-lg'}`}>
                  {cat.name}
                </h3>
                <p className="text-white/70 text-sm">{cat.count} events</p>
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
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 3-6 months in advance for weddings and large events. For smaller celebrations, 4-6 weeks is usually sufficient. However, we always try to accommodate last-minute requests when possible.' },
    { q: 'What is your pricing structure?', a: 'Our pricing is customized based on your event requirements, scale, and preferences. We offer transparent quotes with no hidden costs. Book a consultation to receive a detailed proposal tailored to your needs.' },
    { q: 'Do you work with external vendors?', a: 'Yes! While we have a curated network of premium vendors, we\'re happy to collaborate with your preferred vendors. We ensure seamless coordination regardless of the vendor source.' },
    { q: 'What is the typical planning timeline?', a: 'Weddings typically require 4-6 months of planning. Corporate events 2-3 months. Birthday celebrations and smaller events 4-8 weeks. We create detailed timelines during our initial consultation.' },
    { q: 'How do I start the booking process?', a: 'Simply reach out through our contact form, WhatsApp, or give us a call. We\'ll schedule a free consultation to understand your vision and provide a customized proposal within 48 hours.' },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-ivory">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">FAQ</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">
            Common <span className="italic text-gold">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-lg pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-warm-gray flex-shrink-0" />
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
                    <p className="px-6 pb-6 text-warm-gray leading-relaxed">{faq.a}</p>
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
    <section className="py-24 px-6 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
          Let's Create Something<br />
          <span className="italic text-gold">Extraordinary</span>
        </h2>
        <p className="text-warm-gray text-lg mt-6 max-w-xl mx-auto">
          Ready to bring your vision to life? Let's start planning your unforgettable celebration.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-charcoal text-white border-[3px] border-charcoal px-8 py-4 rounded-full font-bold shadow-[4px_4px_0px_0px_#8B48ED] hover:bg-gold hover:text-charcoal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150"
          >
            <Calendar className="w-5 h-5" />
            Book Consultation
          </Link>
          <a
            href="https://wa.me/917676789839"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white border-[3px] border-charcoal px-8 py-4 rounded-full font-bold shadow-[4px_4px_0px_0px_#12131A] hover:bg-green-500 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="tel:+917676789839"
            className="flex items-center gap-2 bg-white text-charcoal border-[3px] border-charcoal px-8 py-4 rounded-full font-bold shadow-[4px_4px_0px_0px_#12131A] hover:bg-accent-sage hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}

// AnimatePresence import for FAQ
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustMarquee />
      <BrandStory />
      <Services />
      <FeaturedEvents />
      <WhyReEvents />
      <EventJourney />
      <StatsSection />
      <Testimonials />
      <EventCategories />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
