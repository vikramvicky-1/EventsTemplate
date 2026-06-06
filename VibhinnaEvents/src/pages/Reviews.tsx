import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Quote, ExternalLink } from 'lucide-react';

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

const reviews = [
  { name: 'Rishabh Jain', event: '1st Birthday Party', date: '6 months ago', text: "We are absolutely blown away by the incredible job Vibhinna Events did for our daughter's first birthday party! To say they were amazing is an understatement. From our very first chat, they were professional, creative, and understood exactly what we wanted. The butterfly theme decoration was stunning.", rating: 5 },
  { name: 'Prabhanjan R.S.', event: 'Child\'s Birthday Party', date: '6 months ago', text: "We partnered with Vibhinna Events for our child’s first birthday, and they exceeded our expectations in every way. We chose a butterfly theme backdrop and cake, and the décor along with Baby’s photo gallery was absolutely stunning — every detail was beautiful.", rating: 5 },
  { name: 'Mandeep Dhama', event: 'Event Celebration', date: '5 months ago', text: "Indeed it was best. Everything was on point aesthetically and professionally. Would definitely refer if someone is looking for the same requirement.", rating: 5 },
  { name: 'Kavya & Sagar Appreciators', event: 'Family Function', date: '6 months ago', text: "We appreciate the commitment Kavya & Sagar gave for the work quality. The setup, organization, and overall arrangements were absolutely wonderful. Value for money.", rating: 5 },
  { name: 'Sagar K.', event: 'Wedding Decoration', date: '4 months ago', text: 'Excellent event management team. The decoration was extremely elegant and done exactly as discussed. Highly recommend their services for traditional and modern decors.', rating: 5 },
  { name: 'Neha Sharma', event: 'Baby Shower', date: '3 months ago', text: 'The baby shower decoration and arrangement were absolutely beautiful. Everyone loved the theme and setup. Thank you Vibhinna Events for making it so special!', rating: 5 },
];

const stats = [
  { value: '5.0', label: 'Google Rating', icon: Star },
  { value: '148', label: 'Google Reviews', icon: Quote },
  { value: '100%', label: 'Recommendation Rate', icon: Star },
];

export default function Reviews() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-16 px-6 lg:px-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase flex items-center gap-3">
              <span className="w-8 h-px bg-gold" />
              Reviews
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mt-4 leading-tight text-text-primary">
              Loved by<br />
              <span className="gold-shimmer italic">Our Clients</span>
            </h1>
            <p className="text-text-secondary text-lg mt-6 max-w-2xl">
              Don't just take our word for it. Here's what our clients have to say about their Vibhinna Events experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 lg:px-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="luxury-card text-center group">
                <stat.icon className="w-7 h-7 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-display text-4xl font-bold gold-shimmer">{stat.value}</p>
                <p className="text-text-secondary text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Badge */}
      <section className="py-8 px-6 lg:px-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="luxury-card bg-bg-secondary flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-border">
                <span className="text-2xl font-bold text-blue-500">G</span>
              </div>
              <div>
                <p className="font-display text-xl font-bold text-text-primary">Google Reviews</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-text-secondary text-sm">5.0 out of 5</span>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold hover:text-gold-light border border-border hover:border-gold px-4 py-2 rounded-full transition-all duration-300 text-sm"
            >
              View on Google <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-6 lg:px-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className={`luxury-card group ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <Quote className="w-8 h-8 text-gold/20 mb-4" />
                <p className={`text-text-secondary leading-relaxed ${i === 0 ? 'text-base' : 'text-sm'}`}>
                  {review.text}
                </p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-sm text-text-primary">{review.name}</p>
                    <p className="text-text-muted text-xs">{review.event} · {review.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-bg-secondary">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-text-primary">
            Be Our Next <span className="gold-shimmer italic">Happy Client</span>
          </h2>
          <p className="text-text-secondary text-lg mt-6">
            Join hundreds of satisfied clients who trusted Vibhinna Events with their most important celebrations.
          </p>
          <Link
            to="/contact"
            className="luxury-btn luxury-btn-primary mt-8"
          >
            Start Planning <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
