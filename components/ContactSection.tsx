'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Sparkles, PhoneCall, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'YouTube & Google Ads Management',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-semibold text-gold-400">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>START YOUR PROMOTION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Work Together <br />
              with <span className="text-gradient-gold">RM Media</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              क्या आप अपने पंजाबी गानों, यूट्यूब वीडियो या सोशल मीडिया पेज की रीच बढ़ाना चाहते हैं? या आपको पंजाबी गीतकार (Song Writer) की सेवा चाहिए? नीचे दिए गए फॉर्म से सीधे संपर्क करें।
            </p>

            <div className="space-y-4 pt-4">
              <div className="glass-card p-4 rounded-xl border border-brand-border flex items-center gap-4">
                <div className="p-3 rounded-lg bg-brand-dark text-gold-400 border border-brand-border">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Location</span>
                  <span className="text-sm font-bold text-white">Ludhiana, Punjab, India</span>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-brand-border flex items-center gap-4">
                <div className="p-3 rounded-lg bg-brand-dark text-purple-400 border border-brand-border">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Social Handles</span>
                  <span className="text-sm font-bold text-white">YouTube @RaviMehmi | Facebook @ravi.mehmi.8070</span>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-brand-border flex items-center gap-4">
                <div className="p-3 rounded-lg bg-brand-dark text-emerald-400 border border-brand-border">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Agency</span>
                  <span className="text-sm font-bold text-white">RM Media Digital Promotion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-brand-border/80 purple-glow relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    धन्यवाद! आपकी इंक्वायरी रवि मेहमी (RM Media) टीम को प्राप्त हो गई है। जल्द ही आपसे संपर्क किया जाएगा।
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-xs font-bold text-gold-400 hover:text-white transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Inquiry / Booking Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gurpreet Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-purple-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-purple-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-purple-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Required Service *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-purple-500 transition-all"
                      >
                        <option value="YouTube & Google Ads Management">YouTube & Google Ads Management</option>
                        <option value="Social Media Promotion & Reels Boosting">Social Media Promotion & Reels Boosting</option>
                        <option value="Punjabi Song Lyrics & Shayari">Punjabi Song Lyrics & Shayari</option>
                        <option value="Digital PR & Artist Branding">Digital PR & Artist Branding</option>
                        <option value="Model & Video Project Consultation">Model & Video Project Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Project Details / Song Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="अपनी वीडियो का यूट्यूब लिंक या अपने प्रोजेक्ट की जानकारी यहाँ लिखें..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-purple-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-amber-500 to-gold-400 text-brand-dark font-extrabold text-base hover:opacity-95 shadow-xl shadow-purple-900/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
