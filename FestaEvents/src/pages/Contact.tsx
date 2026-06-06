import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import {
  Phone, Mail, MapPin, MessageCircle, ArrowRight,
  Clock, Send, CheckCircle2
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Get in Touch</span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mt-4 leading-tight">
              Let's Plan Your<br />
              <span className="italic text-gold">Celebration</span>
            </h1>
            <p className="text-warm-gray text-lg mt-6 max-w-2xl">
              Ready to bring your vision to life? Fill out the form below or reach us directly. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-7"
            >
              {submitted ? (
                <div className="bento-card bg-white text-charcoal text-center py-16">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="font-display text-3xl font-bold mb-4">Thank You!</h3>
                  <p className="text-warm-gray text-lg">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bento-card bg-white text-charcoal border-[3px] border-charcoal space-y-6">
                  <h3 className="font-display text-2xl font-black mb-2 text-charcoal">Tell Us About Your Event</h3>
                  <p className="text-charcoal/70 text-sm mb-6 font-semibold">Fill in the details and we'll create a customized proposal for you.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-charcoal mb-2 block">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-brutal bg-cream focus:bg-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-charcoal mb-2 block">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-brutal bg-cream focus:bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-charcoal mb-2 block">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-brutal bg-cream focus:bg-white"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-charcoal mb-2 block">Event Type *</label>
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="input-brutal bg-cream focus:bg-white"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="reception">Reception</option>
                        <option value="engagement">Engagement</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday</option>
                        <option value="baby-shower">Baby Shower</option>
                        <option value="house-warming">House Warming</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-charcoal mb-2 block">Event Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="input-brutal bg-cream focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-charcoal mb-2 block">Expected Guests</label>
                      <input
                        type="number"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="input-brutal bg-cream focus:bg-white"
                        placeholder="Approximate number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-charcoal mb-2 block">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="input-brutal bg-cream focus:bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5l">Under ₹5 Lakhs</option>
                      <option value="5-10l">₹5 - 10 Lakhs</option>
                      <option value="10-25l">₹10 - 25 Lakhs</option>
                      <option value="25-50l">₹25 - 50 Lakhs</option>
                      <option value="50l+">₹50 Lakhs+</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-charcoal mb-2 block">Tell Us More</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-brutal bg-cream focus:bg-white resize-none"
                      placeholder="Share your vision, preferences, or any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-charcoal text-white border-[3px] border-charcoal px-8 py-4 rounded-full font-bold shadow-[4px_4px_0px_0px_#8B48ED] hover:bg-gold hover:text-charcoal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-5 space-y-6"
            >
              <motion.div variants={fadeInUp} className="bento-card bg-charcoal text-white border-[3px] border-charcoal">
                <h3 className="font-display text-xl font-bold mb-6 text-white">Reach Us Directly</h3>
                <div className="space-y-5">
                  <a href="tel:+919876543210" className="flex items-center gap-4 hover:text-gold transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold">Call Us</p>
                      <p className="font-bold">+91 98765 43210</p>
                    </div>
                  </a>
                  <a href="mailto:hello@festa.studio" className="flex items-center gap-4 hover:text-gold transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold">Email</p>
                      <p className="font-bold">hello@festa.studio</p>
                    </div>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-gold transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold">WhatsApp</p>
                      <p className="font-bold">Chat with us</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold">Office</p>
                      <p className="font-bold">Bengaluru, Karnataka</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bento-card bg-accent-sage text-charcoal border-[3px] border-charcoal">
                <Clock className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Response Time</h3>
                <p className="text-charcoal/70 font-semibold text-sm">We typically respond within 2-4 hours during business hours (Mon-Sat, 10am-7pm IST).</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bento-card bg-accent-rose text-charcoal border-[3px] border-charcoal">
                <h3 className="font-display text-xl font-bold mb-4">Quick Connect</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white border-[3px] border-charcoal px-6 py-3 rounded-full font-bold shadow-[4px_4px_0px_0px_#12131A] hover:bg-green-500 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150 w-full"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 bg-white text-charcoal border-[3px] border-charcoal px-6 py-3 rounded-full font-bold shadow-[4px_4px_0px_0px_#12131A] hover:bg-accent-sage hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#12131A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#12131A] transition-all duration-150 w-full"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card bg-white text-charcoal border-[3px] border-charcoal overflow-hidden p-0"
          >
            <div className="aspect-[21/9] bg-ivory flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
              <div className="text-center relative z-10">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                <p className="font-display text-2xl font-semibold">Bengaluru, Karnataka</p>
                <p className="text-warm-gray mt-2">Serving across India & Destination Events Worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
