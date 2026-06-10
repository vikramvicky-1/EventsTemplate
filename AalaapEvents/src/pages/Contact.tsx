import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import {
  Phone, Mail, MapPin, MessageCircle,
  Clock, Send, CheckCircle2, Instagram
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
      <section className="pt-28 lg:pt-32 pb-16 px-6 lg:px-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase flex items-center gap-3">
              <span className="w-8 h-px bg-gold" />
              Get in Touch
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mt-4 leading-tight text-text-primary">
              Let's Co-create Your<br />
              <span className="gold-shimmer italic">Celebration Melody</span>
            </h1>
            <p className="text-text-secondary text-lg mt-6 max-w-2xl">
              Ready to plan your cradle ceremony, dream wedding, or launch activity? Fill out the form or reach Vinay Aalaap directly. We get back to you within 2-4 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 px-6 lg:px-12 bg-bg-primary">
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
                <div className="luxury-card text-center py-16">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="font-display text-3xl font-bold mb-4 text-text-primary">Thank You!</h3>
                  <p className="text-text-secondary text-lg">
                    Vinay Aalaap and team have received your request. We will contact you shortly to plan the setup.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="luxury-card space-y-6">
                  <h3 className="font-display text-2xl font-bold mb-2 text-text-primary">Inquire About Your Event</h3>
                  <p className="text-text-muted text-sm mb-6">Provide your specifications and receive a customized quote within 24 hours.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-text-secondary mb-2 block tracking-wide uppercase">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="luxury-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-text-secondary mb-2 block tracking-wide uppercase">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="luxury-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-text-secondary mb-2 block tracking-wide uppercase">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="luxury-input"
                        placeholder="+91 99645 62562"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-text-secondary mb-2 block tracking-wide uppercase">Event Type *</label>
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="luxury-input"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding / Marriage</option>
                        <option value="naming-ceremony">Naming Ceremony</option>
                        <option value="engagement">Engagement Stage Decor</option>
                        <option value="showroom-promo">Showroom Promotion / Corporate</option>
                        <option value="house-warming">House Warming (Griha Pravesham)</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other Celebration</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-text-secondary mb-2 block tracking-wide uppercase">Event Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="luxury-input"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-text-secondary mb-2 block tracking-wide uppercase">Expected Guests</label>
                      <input
                        type="number"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="luxury-input"
                        placeholder="Approximate guests"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-text-secondary mb-2 block tracking-wide uppercase">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="luxury-input"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1l">Under ₹1 Lakh</option>
                      <option value="1-3l">₹1 - 3 Lakhs</option>
                      <option value="3-5l">₹3 - 5 Lakhs</option>
                      <option value="5-10l">₹5 - 10 Lakhs</option>
                      <option value="10l+">₹10 Lakhs+</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-text-secondary mb-2 block tracking-wide uppercase">Tell Us More</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="luxury-input resize-none"
                      placeholder="Share your cradle theme, floral choice, or Samsung showroom launch guidelines..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full luxury-btn luxury-btn-primary py-4 text-base cursor-pointer"
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
              <motion.div variants={fadeInUp} className="luxury-card bg-bg-secondary">
                <h3 className="font-display text-xl font-bold mb-6 text-text-primary">Contact Details</h3>
                <div className="space-y-5">
                  <a href="tel:+919964562562" className="flex items-center gap-4 text-text-secondary hover:text-gold transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-border flex items-center justify-center group-hover:border-gold/30 transition-colors">
                      <Phone className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-medium">Call Vinay Aalaap</p>
                      <p className="font-semibold text-text-primary text-sm">+91 99645 62562</p>
                    </div>
                  </a>
                  <a href="mailto:info@aalaapentertainers.com" className="flex items-center gap-4 text-text-secondary hover:text-gold transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-border flex items-center justify-center group-hover:border-gold/30 transition-colors">
                      <Mail className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-medium">Email</p>
                      <p className="font-semibold text-text-primary text-sm">info@aalaapentertainers.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/919964562562" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text-secondary hover:text-gold transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-border flex items-center justify-center group-hover:border-gold/30 transition-colors">
                      <MessageCircle className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-medium">WhatsApp</p>
                      <p className="font-semibold text-text-primary text-sm">Chat on WhatsApp</p>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/aalaap_entertainers/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text-secondary hover:text-gold transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-border flex items-center justify-center group-hover:border-gold/30 transition-colors">
                      <Instagram className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-medium">Instagram</p>
                      <p className="font-semibold text-text-primary text-sm">@aalaap_entertainers</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-border flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-medium">Office Location</p>
                      <p className="font-semibold text-text-primary text-sm leading-relaxed">
                        No 350, Dr shivakumar Swamy ji Road, Madhanayakanahalli, post post-code, Madanayakanahalli, Karnataka 562162
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="luxury-card">
                <Clock className="w-7 h-7 text-gold mb-4" />
                <h3 className="font-display text-lg font-bold mb-2 text-text-primary">Office Hours</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Monday - Saturday: 10:00 AM - 8:00 PM IST<br />
                  Sundays: By Appointment (Setup Days)
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="luxury-card">
                <h3 className="font-display text-lg font-bold mb-4 text-text-primary">Quick Connect</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919964562562"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #25D366, #20BD5A)' }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+919964562562"
                    className="luxury-btn luxury-btn-secondary w-full py-3 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-6 lg:px-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="luxury-card overflow-hidden p-0"
          >
            <div className="aspect-[21/9] bg-bg-secondary flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.03),transparent_70%)]" />
              <div className="text-center relative z-10 px-6">
                <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="font-display text-2xl font-semibold text-text-primary">Madanayakanahalli, Karnataka</p>
                <p className="text-text-muted mt-2 text-sm max-w-lg mx-auto leading-relaxed">
                  No 350, Dr shivakumar Swamy ji Road, Madhanayakanahalli, post post post-code, Madanavara, Dasaranapura post
                </p>
                <p className="text-gold text-xs font-semibold mt-3 tracking-wider uppercase font-body">Plus Code: 3F77+9J Madanayakanahalli, Karnataka</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
