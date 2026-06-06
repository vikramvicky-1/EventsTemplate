import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Filter } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } }
};

const categories = ['All', 'Weddings', 'Corporate', 'Birthday', 'Reception', 'Baby Shower', 'Decor'];

const galleryItems = [
  { src: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Weddings', title: 'Royal Garden Wedding' },
  { src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Corporate', title: 'Tech Conference' },
  { src: 'https://images.pexels.com/photos/1128905/pexels-photo-1128905.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Birthday', title: 'Golden Birthday Bash' },
  { src: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Reception', title: 'Grand Reception Hall' },
  { src: 'https://images.pexels.com/photos/1194021/pexels-photo-1194021.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Baby Shower', title: 'Pastel Dream Shower' },
  { src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Weddings', title: 'Beach Engagement' },
  { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Decor', title: 'Floral Paradise' },
  { src: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Weddings', title: 'Anniversary Dinner' },
  { src: 'https://images.pexels.com/photos/2291510/pexels-photo-2291510.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Birthday', title: 'Rooftop Party' },
  { src: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Decor', title: 'Elegant Table Setting' },
  { src: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Weddings', title: 'Sunset Ceremony' },
  { src: 'https://images.pexels.com/photos/2789579/pexels-photo-2789579.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Corporate', title: 'Awards Night' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <main>
      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Our Work</span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mt-4 leading-tight">
              Gallery of<br />
              <span className="italic text-gold">Celebrations</span>
            </h1>
            <p className="text-warm-gray text-lg mt-6 max-w-2xl">
              Browse through our portfolio of stunning events. Each celebration is a unique masterpiece crafted with love and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-4">
            <Filter className="w-4 h-4 text-warm-gray flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold border-[2px] transition-all duration-150 shadow-[2px_2px_0px_0px_#12131A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[0px_0px_0px_0px_#12131A] ${
                  activeFilter === cat
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-cream text-charcoal border-charcoal hover:bg-accent-sage'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                variants={fadeInUp}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(i)}
              >
                <div className="relative overflow-hidden rounded-2xl border-[3px] border-charcoal shadow-[4px_4px_0px_0px_#12131A] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[6px_6px_0px_0px_#12131A] transition-all duration-200">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ aspectRatio: i % 3 === 0 ? '4/5' : i % 3 === 1 ? '1/1' : '3/4' }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-display text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.title}
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-xs text-gold tracking-wider uppercase">{item.category}</span>
                  <p className="font-medium text-sm mt-1">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl w-full"
          >
            <img
              src={filtered[selectedImage]?.src}
              alt={filtered[selectedImage]?.title}
              className="w-full rounded-2xl border-[4px] border-charcoal shadow-[8px_8px_0px_0px_#12131A]"
            />
            <p className="text-white text-center mt-4 font-display text-xl">
              {filtered[selectedImage]?.title}
            </p>
          </motion.div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-ivory">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Want Your Event <span className="italic text-gold">Here</span>?
          </h2>
          <p className="text-warm-gray text-lg mt-6">
            Let's create a celebration that's uniquely yours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-charcoal text-white border-[3px] border-charcoal px-8 py-4 rounded-full font-bold shadow-[4px_4px_0px_0px_#8B48ED] hover:bg-gold hover:text-charcoal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150"
          >
            Plan Your Event <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
