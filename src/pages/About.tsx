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
  { name: 'Arjun Mehta', role: 'Founder & Creative Director', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Priya Sharma', role: 'Head of Design', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Rahul Nair', role: 'Operations Lead', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Ananya Reddy', role: 'Client Relations', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const values = [
  { icon: Heart, title: 'Passion', desc: 'Every event is fueled by our genuine love for creating memorable experiences.' },
  { icon: Target, title: 'Precision', desc: 'Meticulous attention to detail ensures nothing is left to chance.' },
  { icon: Sparkles, title: 'Creativity', desc: 'We push boundaries to deliver unique, innovative event concepts.' },
  { icon: Users, title: 'Collaboration', desc: 'We work closely with you, ensuring your vision is at the heart of everything.' },
];

const achievements = [
  { value: '1050+', label: 'Events Delivered' },
  { value: '5+', label: 'Years' },
  { value: '12+', label: 'Cities' },
  { value: '4.9★', label: 'Rating' },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Our Story</span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mt-4 leading-tight">
              The Art of<br />
              <span className="italic text-gold">Celebration</span>
            </h1>
            <p className="text-warm-gray text-lg mt-6 max-w-2xl">
              Festa was born from a simple belief: every celebration deserves to be extraordinary. We blend creativity, precision, and passion to craft events that become cherished memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Bento */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-12 gap-6"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-7 bento-card bg-charcoal text-white border-[3px] border-charcoal min-h-[400px] flex flex-col justify-between">
              <div>
                <span className="text-gold text-xs font-bold tracking-widest uppercase">Since 2019</span>
                <h2 className="font-display text-4xl font-black mt-4">
                  From a Dream<br />to a Movement
                </h2>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">
                What started as a passion project in Bengaluru has grown into one of South India's most sought-after event organisers. We've had the privilege of designing over 1050 celebrations, each one unique, each one unforgettable.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-5 grid grid-rows-2 gap-6">
              <div className="bento-card bg-accent-sage text-charcoal border-[3px] border-charcoal flex flex-col justify-between">
                <Globe className="w-8 h-8 text-gold" />
                <div>
                  <p className="font-display text-4xl font-black">12+</p>
                  <p className="text-charcoal/70 text-sm mt-1">Cities across India</p>
                </div>
              </div>
              <div className="bento-card bg-accent-rose text-charcoal border-[3px] border-charcoal flex flex-col justify-between">
                <Award className="w-8 h-8 text-gold" />
                <div>
                  <p className="font-display text-4xl font-black">25+</p>
                  <p className="text-charcoal/70 text-sm mt-1">Team Members</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-6 lg:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Our Values</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">
              What <span className="italic text-gold">Drives</span> Us
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v, i) => {
              const bgColors = [
                'bg-accent-sage',
                'bg-accent-lavender',
                'bg-accent-rose',
                'bg-accent-clay'
              ];
              const bgClass = bgColors[i % bgColors.length];
              return (
                <motion.div key={v.title} variants={fadeInUp} className={`bento-card ${bgClass} text-charcoal border-[3px] border-charcoal text-center`}>
                  <v.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-xl font-black">{v.title}</h3>
                  <p className="text-charcoal/70 text-sm font-medium mt-3">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">The Team</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">
              Meet the <span className="italic text-gold">Creators</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeInUp} className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 border-[3px] border-charcoal shadow-[4px_4px_0px_0px_#12131A] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[6px_6px_0px_0px_#12131A] transition-all duration-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-lg font-bold">{member.name}</h3>
                <p className="text-charcoal/70 text-sm font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((a) => (
              <motion.div key={a.label} variants={fadeInUp} className="text-center">
                <p className="font-display text-5xl lg:text-6xl font-bold text-gold">{a.value}</p>
                <p className="text-white/60 mt-3 text-sm tracking-wider uppercase">{a.label}</p>
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
            Let's Write Your <span className="italic text-gold">Story</span>
          </h2>
          <p className="text-warm-gray text-lg mt-6">
            Every great celebration starts with a conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-charcoal text-white border-[3px] border-charcoal px-8 py-4 rounded-full font-bold shadow-[4px_4px_0px_0px_#8B48ED] hover:bg-gold hover:text-charcoal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
