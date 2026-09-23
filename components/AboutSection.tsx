'use client';

import { Award, GraduationCap, Building2, Music, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '@/data/ravi_data';

export default function AboutSection({ profile }: { profile: ProfileData }) {
  return (
    <section id="about" className="py-24 relative bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Card Highlight */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-brand-border/80 relative overflow-hidden purple-glow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl" />
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-gold-400 p-[2px] mb-6">
                <div className="w-full h-full bg-brand-dark rounded-[14px] flex items-center justify-center font-bold text-2xl text-gold-400">
                  RM
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Ravi Mehmi (रवि मेहमी)
              </h3>
              <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider mb-4">
                Founder, RM Media & Artist
              </p>

              <div className="space-y-4 text-sm text-slate-300 border-t border-brand-border/60 pt-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Education</span>
                    <span className="text-slate-400">{profile.education}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Industry Experience</span>
                    <span className="text-slate-400">{profile.experience}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Base Location</span>
                    <span className="text-slate-400">{profile.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>ABOUT RAVI MEHMI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Bridging <span className="text-gradient-gold">Punjabi Artistry</span> &{' '}
              <span className="text-gradient-purple">Digital Marketing Excellence</span>
            </h2>

            <p className="text-slate-300 leading-relaxed text-base">
              Green Land Business School से शिक्षित और Hawk Records जैसे प्रतिष्ठित डिजिटल मीडिया लेबल्स के साथ काम कर चुके रवि मेहमी (Ravi Mehmi) कला और डिजिटल मार्केटिंग का एक अनूठा संगम हैं। 
            </p>

            <p className="text-slate-400 leading-relaxed text-sm">
              एक तरफ जहां वे एक पंजाबी गीतकार (Lyricist), शायर (Poet), एक्टर और मॉडल के रूप में संगीत जगत से जुड़े हैं, वहीं अपनी डिजिटल एजेंसी <strong className="text-white">RM Media</strong> के ज़रिये वे नए पंजाबी सिंगर्स, आर्टिस्ट्स और क्रिएटर्स को Google/YouTube Ads और आर्गेनिक सोशल मीडिया बूस्टिंग के ज़रिये सही ऑडियंस तक पहुँचाते हैं।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-card/50 border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Dual Expertise</h4>
                  <p className="text-xs text-slate-400 mt-1">Creative content writing along with high-converting ad management.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-card/50 border border-brand-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Local to Global Reach</h4>
                  <p className="text-xs text-slate-400 mt-1">Rooted in Ludhiana, Punjab connecting with global Punjabi audience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
