import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Target, Users, Award, Sparkles, Globe } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const team = [
  { name: 'Vinay Aalaap', role: 'Founder & Chief Event Architect', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Ranjith V. Kumar', role: 'Operations & Styling Lead', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Megha Vinay', role: 'Creative Director', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const values = [
  { icon: Heart, title: 'Love & Celebration', desc: 'Every family event or grand showroom launch is treated with deep love and care.' },
  { icon: Target, title: 'Precision Setup', desc: 'Sourcing fresh flowers and managing lighting checks early in the morning.' },
  { icon: Sparkles, title: 'Melodious Creativity', desc: 'Bringing harmonious colors, custom cradle designs, and modern corporate stages.' },
  { icon: Users, title: 'Humble Service', desc: 'Aalaap is recognized for its humbleness and dedication to customer happiness.' },
];

const achievements = [
  { value: '1000+', label: 'Events Executed' },
  { value: '6+', label: 'Years Active' },
  { value: '244+', label: 'Google Reviews' },
  { value: '4.4★', label: 'Overall Rating' },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-16 px-6 lg:px-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase flex items-center gap-3">
              <span className="w-8 h-px bg-gold" />
              Our Story
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mt-4 leading-tight text-text-primary">
              Harmonizing Your<br />
              <span className="gold-shimmer italic">Special Moments</span>
            </h1>
            <p className="text-text-secondary text-lg mt-6 max-w-2xl">
              Aalaap Entertainers was established on a simple premise: celebrations are the melody of life. Under the leadership of Vinay Aalaap, we combine traditional values with modern aesthetics to craft events that remain etched in memory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 lg:px-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-12 gap-6"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-7 luxury-card bg-bg-secondary min-h-[400px] flex flex-col justify-between">
              <div>
                <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">Since 2020</span>
                <h2 className="font-display text-4xl font-bold mt-4 text-text-primary">
                  A Humble Start<br />to Premium Execution
                </h2>
              </div>
              <p className="text-text-secondary text-base leading-relaxed mt-4">
                What began as a local decoration unit in Madanayakanahalli (Dasanapura Post) has grown into a highly trusted event planning company across Bengaluru. Today, we handle a diverse range of events — from auspicious naming ceremonies and elegant engagement decors at Nandana Palace to high-touch promotional activities like Samsung showroom launches.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-5 grid grid-rows-2 gap-6">
              <div className="luxury-card flex flex-col justify-between">
                <Globe className="w-7 h-7 text-gold" />
                <div>
                  <p className="font-display text-4xl font-bold gold-gradient">3+ Districts</p>
                  <p className="text-text-muted text-sm mt-1">Bengaluru, Kolar, and Kuppam</p>
                </div>
              </div>
              <div className="luxury-card flex flex-col justify-between">
                <Award className="w-7 h-7 text-gold" />
                <div>
                  <p className="font-display text-4xl font-bold gold-gradient">15+</p>
                  <p className="text-text-muted text-sm mt-1">Dedicated Team Members</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-12 bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase">Our Values</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 text-text-primary">
              What <span className="gold-shimmer italic">Drives</span> Us
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeInUp} className="luxury-card text-center group">
                <v.icon className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-xl font-bold text-text-primary">{v.title}</h3>
                <p className="text-text-secondary text-sm mt-3">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
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
              The Team
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 text-text-primary">
              Meet the <span className="gold-shimmer italic">Creators</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeInUp} className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 border border-border group-hover:border-gold/30 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary">{member.name}</h3>
                <p className="text-text-muted text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-6 lg:px-12 bg-bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.03),transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((a) => (
              <motion.div key={a.label} variants={fadeInUp} className="text-center">
                <p className="font-display text-5xl lg:text-6xl font-bold gold-shimmer">{a.value}</p>
                <p className="text-text-muted mt-3 text-xs tracking-[0.2em] uppercase">{a.label}</p>
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
            Let's Plan Your <span className="gold-shimmer italic">Celebration</span>
          </h2>
          <p className="text-text-secondary text-lg mt-6">
            Every beautiful event begins with a friendly discussion. Call Vinay Aalaap to get started.
          </p>
          <Link
            to="/contact"
            className="luxury-btn luxury-btn-primary mt-8"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
