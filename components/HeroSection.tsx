'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Youtube, MapPin, ChevronLeft, ChevronRight, Phone, MessageSquare, Maximize2, X } from 'lucide-react';
import { ProfileData } from '@/data/ravi_data';

export default function HeroSection({ profile }: { profile: ProfileData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % profile.bannerImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [profile.bannerImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % profile.bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + profile.bannerImages.length) % profile.bannerImages.length);
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-hero-pattern">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Heading, Taglines, CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300 shadow-lg shadow-purple-900/20">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>RM MEDIA DIGITAL PROMOTION & CREATIVE HUB</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Elevate Your Reach with <br />
              <span className="text-gradient-gold">RAVI MEHMI</span> &{' '}
              <span className="text-gradient-purple">RM MEDIA</span>
            </h1>

            {/* Subtitle / Tagline */}
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              Online Social Media Promoter ✍️ Punjabi Lyricist & Poet 🎬 Actor & Model ▶️ YouTube Ads Specialist
            </p>

            <div className="p-4 rounded-xl bg-brand-card/70 border border-brand-border space-y-2">
              <p className="text-sm font-semibold text-gold-400 flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp / Call: {profile.phone}</span>
              </p>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Based in Ludhiana, Punjab | Former Hawk Records Model & Producer</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={profile.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm hover:brightness-110 shadow-lg shadow-emerald-900/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp 95692-99997</span>
              </a>

              <Link
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-brand-dark font-bold text-sm hover:brightness-110 shadow-lg shadow-gold-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Book Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={profile.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-slate-400 hover:text-red-500 flex items-center gap-1.5 transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                <span>@RaviMehmi (1.05K+)</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Poster Slider */}
          <div className="lg:col-span-6">
            <div className="relative glass-card p-3 rounded-3xl border border-brand-border/80 shadow-2xl purple-glow overflow-hidden group">
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black">
                {profile.bannerImages.map((banner, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={banner.src}
                      alt={banner.alt}
                      className="w-full h-full object-contain bg-slate-950"
                    />

                    {/* Banner Overlay Caption */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] font-extrabold text-gold-400 uppercase tracking-widest block">
                          RM Media Official Offer
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold truncate">
                          {banner.title}
                        </h4>
                      </div>
                      <button
                        onClick={() => setLightboxImage(banner.src)}
                        className="p-2 rounded-lg bg-black/60 hover:bg-gold-500 hover:text-brand-dark text-slate-200 transition-colors"
                        title="View Fullsize"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Slider Arrow Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-brand-dark/80 border border-brand-border text-white hover:bg-gold-500 hover:text-brand-dark hover:border-gold-500 transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-brand-dark/80 border border-brand-border text-white hover:bg-gold-500 hover:text-brand-dark hover:border-gold-500 transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slider Dots */}
              <div className="flex items-center justify-center gap-2 pt-4 pb-1">
                {profile.bannerImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-8 bg-gold-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-3xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-800 text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage}
              alt="RM Media Banner Full View"
              className="max-w-full max-h-full object-contain rounded-xl border border-brand-border"
            />
          </div>
        </div>
      )}
    </section>
  );
}
