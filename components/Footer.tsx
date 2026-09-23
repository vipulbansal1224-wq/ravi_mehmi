'use client';

import Link from 'next/link';
import { Youtube, Facebook, Linkedin, Sparkles, Heart } from 'lucide-react';
import { ProfileData } from '@/data/ravi_data';

export default function Footer({ profile }: { profile: ProfileData }) {
  return (
    <footer className="bg-brand-dark border-t border-brand-border py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-amber-400 p-[2px]">
                <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center font-extrabold text-gold-400 text-sm">
                  RM
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                RAVI MEHMI / RM MEDIA
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {profile.bio}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-slate-300 hover:text-red-500 hover:border-red-500/40 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={profile.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-slate-300 hover:text-blue-500 hover:border-blue-500/40 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="#about" className="hover:text-gold-400 transition-colors">
                  About Ravi Mehmi
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gold-400 transition-colors">
                  RM Media Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-gold-400 transition-colors">
                  Work & Showcase
                </Link>
              </li>
              <li>
                <Link href="#net-info" className="hover:text-gold-400 transition-colors">
                  Internet Footprint
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gold-400 transition-colors">
                  Book Promotion
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles Summary */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Verified Profiles
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <strong className="text-slate-200">YouTube:</strong> {profile.socialLinks.youtubeHandle} (1.05K+)
              </li>
              <li>
                <strong className="text-slate-200">Facebook:</strong> {profile.socialLinks.facebookHandle}
              </li>
              <li>
                <strong className="text-slate-200">LinkedIn:</strong> Hawk Records Experience
              </li>
              <li>
                <strong className="text-slate-200">City:</strong> Ludhiana, Punjab
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Ravi Mehmi (RM Media). All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for Punjabi Music & Digital Media</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
