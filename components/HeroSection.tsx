'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Youtube, Play, ShieldCheck, MapPin } from 'lucide-react';
import { ProfileData } from '@/data/ravi_data';

export default function HeroSection({ profile }: { profile: ProfileData }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-pattern">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300 shadow-lg shadow-purple-900/20">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>RM MEDIA DIGITAL PROMOTION & CREATIVE HUB</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Elevate Your Reach with <br />
            <span className="text-gradient-gold">RAVI MEHMI</span> &{' '}
            <span className="text-gradient-purple">RM MEDIA</span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            Online Social Media Promoter ✍️ Punjabi Lyricist & Poet 🎬 Actor & Model ▶️ YouTube Ads Specialist
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
            <span>Based in Ludhiana, Punjab | Former Hawk Records Model & Producer</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-brand-dark font-bold text-base hover:brightness-110 shadow-xl shadow-gold-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Book Promotion / Lyric Work</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="https://www.youtube.com/c/RaviMehmi"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-white font-semibold text-base hover:border-purple-500 hover:bg-brand-card/80 transition-all flex items-center justify-center gap-2"
            >
              <Youtube className="w-5 h-5 text-red-500" />
              <span>Visit @RaviMehmi YouTube</span>
            </a>
          </div>

          {/* Features Pills */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-card/60 border border-brand-border">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Targeted YouTube Ads</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-card/60 border border-brand-border">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Punjabi Songs & Shayari</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-card/60 border border-brand-border">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Social Media Page Boosting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
