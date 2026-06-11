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
  { name: 'Sainath Yeshagol', event: 'Birthday Party', date: 'March 2026', text: 'We were surprised and stunned on the amazing way Butterflies managed the double birthday party we hired them for. We did not have to any follow up once everything was planned. Each and every service we had opted was followed up before the event. Decoration, catering, live counters, photography — everything was perfect!', rating: 5 },
  { name: 'Anisha Sunny', event: 'Kids Birthday', date: 'February 2026', text: "We had hired them for my kid's birthday party with an Avengers theme, and they did a fantastic job! The balloon decorations looked amazing and perfectly matched the theme — the kids absolutely loved it. What I really appreciated was the attention to detail and how smoothly everything was handled.", rating: 5 },
  { name: 'Saumya Kapoor', event: 'Birthday Party', date: 'January 2026', text: "I had an amazing experience with Butterflies event planners for my son's 9th birthday. The decoration was really good and was exactly the way we wanted. My son was super excited seeing it. They helped us set a kids friendly menu which everyone enjoyed.", rating: 5 },
  { name: 'Happy Client', event: 'Wedding Catering', date: 'December 2025', text: 'Amazing team, quality of both Veg and Non Veg food was delicious. The live counters were a highlight of the event and guests couldn\'t stop complimenting the food. Will definitely recommend Butterflies for any event.', rating: 5 },
  { name: 'Satisfied Customer', event: 'Corporate Event', date: 'November 2025', text: 'Excellent service, excellent decor, affordable pricing. The team was very professional and handled our corporate event with great care. Everything was well-organized and executed flawlessly.', rating: 5 },
  { name: 'Event Guest', event: 'Reception', date: 'October 2025', text: 'The dancers did great and many people enjoyed it. The overall event management was outstanding — from the stage setup to the lighting, everything was top class. Butterflies truly knows how to create memorable events.', rating: 5 },
  { name: 'Birthday Mom', event: 'Kids Party', date: 'September 2025', text: 'Butterflies organized an incredible themed birthday party for my daughter. The caricature artist was a huge hit with the kids! The balloon decorations were stunning and the photography captured every precious moment.', rating: 5 },
  { name: 'Wedding Couple', event: 'Wedding', date: 'August 2025', text: 'From the mandap decoration to the catering, everything was handled beautifully by Butterflies. They coordinated with all vendors seamlessly and we could truly enjoy our special day without any stress.', rating: 5 },
  { name: 'Corporate Client', event: 'Annual Gala', date: 'July 2025', text: 'Butterflies delivered an exceptional corporate gala for our company. The event planning was meticulous, the decor was elegant, and the execution was flawless. Our employees and clients were thoroughly impressed.', rating: 5 },
];

const stats = [
  { value: '4.9', label: 'Google Rating', icon: Star },
  { value: '1,034', label: 'Google Reviews', icon: Quote },
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
              Don't just take our word for it. Here's what our clients have to say about their Butterflies Event Management experience.
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
                <p className="text-text-muted text-sm mt-2">{stat.label}</p>
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
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
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
                  <span className="text-text-muted text-sm">4.9 out of 5</span>
                </div>
              </div>
            </div>
            <a
              href="#"
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
            Join over 1,000 satisfied clients who trusted Butterflies Event Management with their most important celebrations.
          </p>
          <Link
            to="/contact"
            className="luxury-btn luxury-btn-primary mt-8"
          >
            Start Planning <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
