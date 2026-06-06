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

const reviews = [
  {
    name: 'Priya & Rahul',
    event: 'Wedding',
    date: 'December 2024',
    text: 'Festa made our dream wedding a reality. Every single detail was perfect — from the breathtaking floral arrangements to the seamless coordination on the day. Our guests are still talking about how beautiful everything was. The team went above and beyond our expectations.',
    rating: 5,
  },
  {
    name: 'Ananya Sharma',
    event: 'Birthday',
    date: 'November 2024',
    text: "The team went above and beyond for my daughter's first birthday. The pastel theme was executed flawlessly, the games kept everyone entertained, and the cake was a work of art. Couldn't have asked for a better celebration.",
    rating: 5,
  },
  {
    name: 'TechVista Corporation',
    event: 'Corporate Gala',
    date: 'October 2024',
    text: 'Professional, creative, and incredibly organized. Our annual gala was the best one yet thanks to Festa. They handled 500+ guests seamlessly and the AV setup was flawless. Already booked them for next year.',
    rating: 5,
  },
  {
    name: 'Meera & Karthik',
    event: 'Reception',
    date: 'September 2024',
    text: 'We trusted Festa with our reception and they exceeded every expectation. The venue transformation was absolutely breathtaking. The lighting, the stage design, the food — everything was world-class.',
    rating: 5,
  },
  {
    name: 'Sneha Patel',
    event: 'Baby Shower',
    date: 'August 2024',
    text: 'The most beautiful baby shower I could have imagined. The pastel theme, the personalized games, the food — absolutely perfect. Festa understood exactly what I wanted and delivered beyond my dreams.',
    rating: 5,
  },
  {
    name: 'Rajesh & Family',
    event: 'House Warming',
    date: 'July 2024',
    text: "Festa turned our house warming into a truly memorable celebration. The decor was elegant and sophisticated, the coordination was flawless, and they managed everything so we could enjoy every moment with our guests.",
    rating: 5,
  },
  {
    name: 'Deepa Krishnan',
    event: 'Engagement',
    date: 'June 2024',
    text: 'Our engagement ceremony was everything we dreamed of and more. The ring ceremony setup was gorgeous, the photography captured every emotion perfectly. Thank you Festa for making our special day so magical!',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    event: 'Corporate Event',
    date: 'May 2024',
    text: 'We hired Festa for our product launch and they delivered beyond expectations. The venue, the branding, the guest experience — everything was top-notch. Highly recommend for corporate events.',
    rating: 5,
  },
  {
    name: 'Lakshmi & Arun',
    event: 'Anniversary',
    date: 'April 2024',
    text: 'Our 25th anniversary celebration was absolutely perfect. Festa created such a warm and elegant atmosphere. The photo wall of our journey together brought tears to everyone\'s eyes. Truly unforgettable.',
    rating: 5,
  },
];

const stats = [
  { value: '4.9', label: 'Google Rating', icon: Star },
  { value: '330+', label: 'Reviews', icon: Quote },
  { value: '100%', label: 'Recommendation Rate', icon: Star },
];

export default function Reviews() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Reviews</span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mt-4 leading-tight">
              Loved by<br />
              <span className="italic text-gold">Our Clients</span>
            </h1>
            <p className="text-warm-gray text-lg mt-6 max-w-2xl">
              Don't just take our word for it. Here's what our clients have to say about their Festa experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, i) => {
              const bgColors = ['bg-accent-sage', 'bg-accent-lavender', 'bg-accent-rose'];
              const bgClass = bgColors[i % bgColors.length];
              return (
                <motion.div key={stat.label} variants={fadeInUp} className={`bento-card ${bgClass} text-charcoal border-[3px] border-charcoal text-center`}>
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="font-display text-4xl font-black">{stat.value}</p>
                  <p className="text-charcoal/70 text-sm mt-2">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Badge */}
      <section className="py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bento-card bg-charcoal text-white border-[3px] border-charcoal shadow-[4px_4px_0px_0px_#8B48ED] flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-500">G</span>
              </div>
              <div>
                <p className="font-display text-xl font-bold">Google Reviews</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-white/70 text-sm">4.9 out of 5</span>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-gold hover:text-white border-[2px] border-transparent hover:border-gold hover:bg-gold/15 px-4 py-2 rounded-full transition-all duration-150"
            >
              View on Google <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, i) => {
              const bgColors = [
                'bg-accent-sage',
                'bg-accent-lavender',
                'bg-accent-rose',
                'bg-accent-clay'
              ];
              const bgClass = bgColors[i % bgColors.length];
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`bento-card ${bgClass} text-charcoal border-[3px] border-charcoal ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />
                  <p className={`text-charcoal/80 leading-relaxed ${i === 0 ? 'text-lg font-medium' : 'text-sm font-medium'}`}>
                    {review.text}
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t-2 border-charcoal/10">
                    <div>
                      <p className="font-bold text-sm">{review.name}</p>
                      <p className="text-charcoal/60 text-xs font-semibold">{review.event} · {review.date}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-ivory">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl lg:text-6xl font-bold">
            Be Our Next <span className="italic text-gold">Happy Client</span>
          </h2>
          <p className="text-warm-gray text-lg mt-6">
            Join hundreds of satisfied clients who trusted Festa with their most important celebrations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-charcoal text-white border-[3px] border-charcoal px-8 py-4 rounded-full font-bold shadow-[4px_4px_0px_0px_#8B48ED] hover:bg-gold hover:text-charcoal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150"
          >
            Start Planning <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
