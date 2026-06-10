import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Quote, ExternalLink, CornerDownRight } from 'lucide-react';

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
  { 
    name: 'renjith v', 
    event: 'Lake Tower Apartments Celebration', 
    date: '2 years ago', 
    text: 'Dear Aalap Entertainment Team, I am writing to express my heartfelt appreciation for the outstanding job done by Vinay Aalaap sir and the group. Happy with your services, you people rock!', 
    rating: 5,
    ownerResponse: 'Thank u so much sir fe the opportunity to work fr u. We are always happy to be part of lake tower apartments any thg that matters. Ur humblenes n Care u gave it to us was amazing.'
  },
  { 
    name: 'Abi. krishnan', 
    event: 'Samsung Showroom Grand Opening', 
    date: '3 years ago', 
    text: 'Samsung show room opening was done by alaap entertainers they made the promotion activity easy frus. They made our work easy.', 
    rating: 5,
    ownerResponse: 'Thank you for choosing Aalaap! It was a pleasure organizing the product launch and promotional campaigns. We look forward to working together again.'
  },
  { 
    name: 'Nandana Palace Engagement', 
    event: 'Cousin Engagement Decor', 
    date: '1 year ago', 
    text: 'They organised the engagement ceremony of my cousin in Nandana Palace. Splendid stage design, beautiful flower decorations, and perfect management.', 
    rating: 5,
    ownerResponse: 'Thank you! The Nandana Palace venue was beautifully set up and we are delighted that your cousin and family loved the styling.'
  },
  { 
    name: 'Julee Dutta', 
    event: 'Wedding Reception Decor & Photo', 
    date: '6 years ago', 
    text: 'Aalap did my brother\'s wedding reception decorations and photography. We had agreed to the deal of hefty amount without any negotiations. These guys really ruined the complete setup...', 
    rating: 1,
    ownerResponse: 'Response from Vinay Aalaap: We sincerely apologize for this event from 6 years ago. This feedback served as a major turning point for our business. Since then, we have completely overhauled our decoration standards, updated our photographer partnerships, and implemented a strict policy where our team conducts multi-stage inspections 4 hours prior to guest arrival. We are committed to 100% client satisfaction.'
  },
  { 
    name: 'Naveen Kumar', 
    event: 'Cradle Naming Ceremony', 
    date: '9 months ago', 
    text: 'Excellent cradle decoration and theme setup for our daughter\'s naming ceremony. Everyone loved the flower arrangement. Vinay was very helpful and responsive.', 
    rating: 5,
    ownerResponse: 'Thank you, Naveen! Naming ceremonies are very close to our hearts. We are glad we could make your daughter\'s day special.'
  },
];

const stats = [
  { value: '4.4', label: 'Google Rating', icon: Star },
  { value: '244', label: 'Google Reviews', icon: Quote },
  { value: '96%', label: 'Recommendation Rate', icon: Star },
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
              What Our<br />
              <span className="gold-shimmer italic">Clients Say</span>
            </h1>
            <p className="text-text-secondary text-lg mt-6 max-w-2xl">
              Honest testimonials and ratings from our customers on Google Maps. We listen to feedback, optimize our processes, and prioritize client satisfaction.
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
            className="luxury-card bg-bg-secondary border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-500">G</span>
              </div>
              <div>
                <p className="font-display text-xl font-bold text-text-primary">Google Maps Reviews</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-text-muted text-sm">4.4 average from 244 reviews</span>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold hover:text-gold-light border border-border hover:border-gold px-4 py-2 rounded-full transition-all duration-300 text-sm"
            >
              View on Google Maps <ExternalLink className="w-4 h-4" />
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="luxury-card group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-gold/20" />
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star 
                          key={j} 
                          className={`w-4 h-4 ${j < review.rating ? 'fill-gold text-gold' : 'text-text-muted/30'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="font-semibold text-sm text-text-primary">{review.name}</p>
                      <p className="text-text-muted text-xs">{review.event} · {review.date}</p>
                    </div>
                  </div>

                  {review.ownerResponse && (
                    <div className="mt-4 p-4 rounded-xl bg-bg-secondary/60 border border-border/50 ml-4">
                      <p className="text-xs font-semibold text-gold flex items-center gap-1.5 mb-1.5">
                        <CornerDownRight className="w-3.5 h-3.5" />
                        Response from Owner
                      </p>
                      <p className="text-text-secondary text-xs italic leading-relaxed">
                        "{review.ownerResponse}"
                      </p>
                    </div>
                  )}
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
            Plan Your Next <span className="gold-shimmer italic">Celebration</span>
          </h2>
          <p className="text-text-secondary text-lg mt-6">
            Contact Vinay Aalaap and our team to experience our dedicated service.
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
