'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, Youtube, Facebook, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-border py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-gold-500 to-amber-400 p-[2px] transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center font-extrabold text-gold-400 text-lg">
              RM
            </div>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block">
              RAVI MEHMI
            </span>
            <span className="text-xs font-semibold text-purple-400 tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-gold-400 inline" /> RM MEDIA
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="text-slate-300 hover:text-gold-400 transition-colors">
            About Ravi
          </Link>
          <Link href="#services" className="text-slate-300 hover:text-gold-400 transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="text-slate-300 hover:text-gold-400 transition-colors">
            Portfolio
          </Link>
          <Link href="#net-info" className="text-slate-300 hover:text-gold-400 transition-colors">
            Internet Data Hub
          </Link>
          <Link href="#contact" className="text-slate-300 hover:text-gold-400 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Social Icons & Action */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-brand-border pr-4">
            <a
              href="https://www.youtube.com/c/RaviMehmi"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-purple-500 hover:text-red-500 transition-all"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/ravi.mehmi.8070/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-purple-500 hover:text-blue-500 transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ravimehmi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-purple-500 hover:text-cyan-400 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <Link
            href="#contact"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-amber-500 text-white font-semibold text-sm hover:opacity-90 shadow-lg shadow-purple-900/30 transition-all"
          >
            Get Promotion
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-brand-card border border-brand-border text-slate-300"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark/95 border-b border-brand-border px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-gold-400 font-medium py-1"
          >
            About Ravi
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-gold-400 font-medium py-1"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-gold-400 font-medium py-1"
          >
            Portfolio
          </Link>
          <Link
            href="#net-info"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-gold-400 font-medium py-1"
          >
            Internet Data Hub
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-gold-400 font-medium py-1"
          >
            Contact
          </Link>
          <div className="pt-2 flex items-center justify-between border-t border-brand-border">
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/c/RaviMehmi"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-brand-card text-slate-300"
              >
                <Youtube className="w-5 h-5 text-red-500" />
              </a>
              <a
                href="https://www.facebook.com/ravi.mehmi.8070/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-brand-card text-slate-300"
              >
                <Facebook className="w-5 h-5 text-blue-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/ravimehmi/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-brand-card text-slate-300"
              >
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </a>
            </div>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-lg bg-purple-600 text-white text-xs font-bold"
            >
              Get Promotion
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
