import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Target, Users, Award, Sparkles, Star, Globe } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const team = [
  { name: 'Kavya', role: 'Founder & Creative Director', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Sagar', role: 'Founder & Operations Lead', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const values = [
  { icon: Heart, title: 'Passion', desc: 'Every event is fueled by our genuine love for creating memorable experiences.' },
  { icon: Target, title: 'Precision', desc: 'Meticulous attention to detail ensures nothing is left to chance.' },
  { icon: Sparkles, title: 'Creativity', desc: 'We push boundaries to deliver unique, innovative event concepts.' },
  { icon: Users, title: 'Collaboration', desc: 'We work closely with you, ensuring your vision is at the heart of everything.' },
];

const achievements = [
  { value: '1200+', label: 'Events Delivered' },
  { value: '6+', label: 'Years' },
  { value: '148+', label: 'Google Reviews' },
  { value: '5.0★', label: 'Rating' },
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
              The Art of<br />
              <span className="gold-shimmer italic">Celebration</span>
            </h1>
            <p className="text-text-secondary text-lg mt-6 max-w-2xl">
              Vibhinna Events was born from a simple belief: every celebration deserves to be extraordinary. We blend creativity, precision, and passion to craft events that become cherished memories.
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
                  From a Dream<br />to a Movement
                </h2>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed">
                What started as a passion project in RR Nagar, Bengaluru has grown into one of the city's most trusted event organisers. We've had the privilege of designing over 1200 celebrations, each one unique, each one unforgettable.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-5 grid grid-rows-2 gap-6">
              <div className="luxury-card flex flex-col justify-between">
                <Globe className="w-7 h-7 text-gold" />
                <div>
                  <p className="font-display text-4xl font-bold gold-gradient">10+</p>
                  <p className="text-text-secondary text-sm mt-1 font-medium">Cities across India</p>
                </div>
              </div>
              <div className="luxury-card flex flex-col justify-between">
                <Award className="w-7 h-7 text-gold" />
                <div>
                  <p className="font-display text-4xl font-bold gold-gradient">20+</p>
                  <p className="text-text-secondary text-sm mt-1 font-medium">Team Members</p>
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl"
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
                <p className="text-text-secondary text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-6 lg:px-12 bg-bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,147,104,0.04),transparent_70%)]" />
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
                <p className="text-text-secondary mt-3 text-xs tracking-[0.2em] uppercase font-semibold">{a.label}</p>
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
            Let's Write Your <span className="gold-shimmer italic">Story</span>
          </h2>
          <p className="text-text-secondary text-lg mt-6">
            Every great celebration starts with a conversation.
          </p>
          <Link
            to="/contact"
            className="luxury-btn luxury-btn-primary mt-8"
          >
            Get in Touch <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
