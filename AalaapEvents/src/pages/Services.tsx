import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart, Briefcase, Home, Gem, Sparkles,
  Camera, ArrowRight, ArrowUpRight, CheckCircle2
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
  { 
    icon: Heart, 
    name: 'Wedding Planning', 
    desc: 'Traditional rituals and grand wedding celebrations designed with complete floral art, custom mandap setups, and flawless ceremony execution.', 
    features: ['Mandap & Stage Decor', 'Traditional Ritual Setup', 'Vendor Sourcing & Alignment', 'Day-of Event Management', 'Bridal Entrance Styling'], 
    image: '/images/wedding_mandap.png' 
  },
  { 
    icon: Gem, 
    name: 'Naming Ceremonies', 
    desc: 'Joyful, auspicious cradle setups specifically customized with stunning themes, fresh flower backgrounds, and family celebrations.', 
    features: ['Traditional Cradle Setup', 'Thematic Balloon & Flower Decor', 'Naming Backdrops', 'Family Group Photography', 'Auspicious Ritual Styling'], 
    image: '/images/birthday_decor.png' 
  },
  { 
    icon: Briefcase, 
    name: 'Showroom & Corporate Promotions', 
    desc: 'Vibrant outdoor campaigns, retail activity, and store launch campaigns, as successfully completed for Samsung showroom grand openings.', 
    features: ['Grand Launch Stage Setup', 'Promotional Campaigns', 'Stage & Sound Activations', 'Host & Artist Bookings', 'Audio/Visual Coordination'], 
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    icon: Sparkles, 
    name: 'Engagement Decor', 
    desc: 'Elegant staging, Haldi ceremonies, ring exchanges, sangeets, and sangeet DJs in top Bengaluru venues and hotels like Nandana Palace.', 
    features: ['Floral Stage Backgrounds', 'Haldi Ceremony Decor', 'Sound Systems & DJ Services', 'Candid Photo Shoot', 'Pre-wedding Styling'], 
    image: '/images/reception_decor.png' 
  },
  { 
    icon: Home, 
    name: 'House Warming (Griha Pravesham)', 
    desc: 'Warm, traditional setups honoring family customs with fresh flower decorations, rangolis, and community sangeet coordination.', 
    features: ['Traditional Flower Art', 'Havan & Ritual Coordination', 'Vegetarian Catering Services', 'Guest Welcoming Setups', 'Family Photography'], 
    image: '/images/housewarming_decor.png' 
  },
  { 
    icon: Camera, 
    name: 'Photography & Videography', 
    desc: 'High-quality professional capture of traditional family rituals, candid emotional smiles, and grand showroom launch activities.', 
    features: ['Traditional Video Shoot', 'Candid Photo Sessions', 'Cinematic Highlights Film', 'Showroom Launch Reels', 'Prompt Album & Video Delivery'], 
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800' 
  },
];

const process = [
  { step: '01', title: 'Aalaap Intro', desc: 'Discussing your family traditions, retail campaign goals, or design dreams.' },
  { step: '02', title: 'Styling & Quote', desc: 'Creating thematic mockups, stage layout design, and transparent quotes.' },
  { step: '03', title: 'Coordination', desc: 'Sourcing fresh marigolds, erecting structures, and alignment of sound/lighting.' },
  { step: '04', title: 'Execution', desc: 'Early morning setup and seamless management of ceremonies or promotions.' },
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
              Celebrations & Promotions<br />
              <span className="gold-shimmer italic">Perfected</span>
            </h1>
            <p className="text-text-secondary text-lg mt-6 max-w-2xl">
              From auspicious family naming ceremonies and luxury wedding mandaps to highly coordinated showroom promotional activations, we offer end-to-end event management.
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
            Ready to <span className="gold-shimmer italic">Celebrate</span>?
          </h2>
          <p className="text-text-secondary text-lg mt-6">
            Contact Vinay Aalaap and the group to design your memorable cradle ceremony, wedding mandap, or launch activity.
          </p>
          <Link
            to="/contact"
            className="luxury-btn luxury-btn-primary mt-8"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
