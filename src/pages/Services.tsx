import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart, Briefcase, Cake, Baby, Home, Gem, Sparkles,
  Palette, Camera, Music, UtensilsCrossed, MapPinned,
  ArrowRight, CheckCircle2, Calendar, Users
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const services = [
  { icon: Heart, name: 'Wedding Experiences', desc: 'From intimate ceremonies to grand celebrations, we craft weddings that reflect your unique love story. Our team handles everything from venue selection to the last dance.', features: ['Venue Selection & Booking', 'Theme & Decor Design', 'Vendor Coordination', 'Day-of Management', 'Guest Management'] },
  { icon: Briefcase, name: 'Corporate Events', desc: 'Professional gatherings that leave lasting impressions. From product launches to annual galas, we deliver corporate events that align with your brand.', features: ['Conference Planning', 'Product Launches', 'Team Building Events', 'Award Ceremonies', 'Brand Activations'] },
  { icon: Cake, name: 'Birthday Celebrations', desc: 'Milestone moments deserve extraordinary celebrations. We create themed birthday parties that delight guests of all ages.', features: ['Theme Design', 'Entertainment Booking', 'Custom Cakes', 'Party Favors', 'Photography'] },
  { icon: Baby, name: 'Baby Showers', desc: 'Welcome new beginnings with beautiful celebrations. We design intimate and joyful baby showers with attention to every detail.', features: ['Theme & Decor', 'Games & Activities', 'Catering', 'Photography', 'Return Gifts'] },
  { icon: Home, name: 'House Warming', desc: 'Celebrate your new home with style. We create warm and memorable house warming ceremonies that honor traditions while feeling fresh and modern.', features: ['Traditional Decor', 'Modern Styling', 'Catering', 'Photography', 'Guest Coordination'] },
  { icon: Gem, name: 'Engagements', desc: 'The start of forever deserves a perfect beginning. We design engagement ceremonies that are romantic, elegant, and unforgettable.', features: ['Gem Ceremony Setup', 'Decor Design', 'Photography', 'Entertainment', 'Catering'] },
  { icon: Sparkles, name: 'Receptions', desc: 'Grand celebrations of togetherness. We create stunning reception events that bring families and friends together in style.', features: ['Venue Transformation', 'Stage Design', 'Entertainment', 'Multi-cuisine Catering', 'Photography & Video'] },
  { icon: Palette, name: 'Decor & Design', desc: 'Transform any space into a visual masterpiece. Our design team creates stunning environments that set the perfect mood for your celebration.', features: ['Floral Design', 'Lighting Design', 'Stage Design', 'Table Styling', 'Thematic Decor'] },
  { icon: Camera, name: 'Photography & Videography', desc: 'Capture every precious moment with our network of talented photographers and videographers who tell your story beautifully.', features: ['Candid Photography', 'Cinematic Films', 'Drone Coverage', 'Photo Booths', 'Same-Day Edits'] },
  { icon: Music, name: 'Entertainment', desc: 'From live bands to DJs, from dancers to performers — we curate entertainment that keeps your guests engaged and dancing.', features: ['DJ Services', 'Live Bands', 'Dance Performances', 'MC/Emcee', 'Sound & Lighting'] },
  { icon: UtensilsCrossed, name: 'Catering', desc: 'Culinary experiences that delight the palate. We partner with the finest caterers to create menus that impress every guest.', features: ['Multi-cuisine Menus', 'Live Counters', 'Custom Cakes', 'Bar Services', 'Dietary Accommodations'] },
  { icon: MapPinned, name: 'Venue Booking', desc: 'Find the perfect location for your event. We have partnerships with premium venues across multiple cities.', features: ['Venue Scouting', 'Negotiation', 'Site Visits', 'Contract Review', 'Layout Planning'] },
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
      <section className="pt-28 lg:pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Our Services</span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mt-4 leading-tight">
              Everything You Need<br />
              <span className="italic text-gold">Under One Roof</span>
            </h1>
            <p className="text-warm-gray text-lg mt-6 max-w-2xl">
              From concept to celebration, we offer comprehensive event planning services that cover every aspect of your special occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => {
              const bgColors = [
                'bg-accent-sage',
                'bg-accent-lavender',
                'bg-accent-rose',
                'bg-accent-clay'
              ];
              const bgClass = i === 0 ? 'bg-charcoal text-white border-charcoal' : `${bgColors[i % bgColors.length]} text-charcoal border-charcoal`;
              return (
                <motion.div
                  key={service.name}
                  variants={fadeInUp}
                  className={`bento-card group border-[3px] ${bgClass} ${i === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <service.icon className={`w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className={`font-display font-black ${i === 0 ? 'text-3xl' : 'text-2xl'}`}>
                    {service.name}
                  </h3>
                  <p className={`mt-3 ${i === 0 ? 'text-white/70 text-lg' : 'text-charcoal/70'}`}>
                    {service.desc}
                  </p>
                  <ul className={`mt-6 space-y-2 ${i === 0 ? 'grid md:grid-cols-2 gap-x-8' : ''}`}>
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 text-gold`} />
                        <span className={i === 0 ? 'text-white/70 font-semibold' : 'text-charcoal/80 font-semibold'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">How It Works</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">
              Our <span className="italic text-gold">Process</span>
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
              <motion.div key={p.step} variants={fadeInUp} className="bento-card bg-white text-center">
                <span className="font-display text-5xl font-bold text-gold/20">{p.step}</span>
                <h3 className="font-display text-xl font-semibold mt-4">{p.title}</h3>
                <p className="text-warm-gray text-sm mt-2">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl lg:text-6xl font-bold">
            Ready to <span className="italic text-gold">Start</span>?
          </h2>
          <p className="text-warm-gray text-lg mt-6">
            Let's discuss your event and create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-charcoal text-white border-[3px] border-charcoal px-8 py-4 rounded-full font-bold shadow-[4px_4px_0px_0px_#8B48ED] hover:bg-gold hover:text-charcoal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
