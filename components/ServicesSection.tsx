'use client';

import { Megaphone, Share2, PenTool, Sparkles, Check } from 'lucide-react';
import { ProfileData } from '@/data/ravi_data';

export default function ServicesSection({ services }: { services: ProfileData['services'] }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone':
        return <Megaphone className="w-7 h-7 text-gold-400" />;
      case 'Share2':
        return <Share2 className="w-7 h-7 text-purple-400" />;
      case 'PenTool':
        return <PenTool className="w-7 h-7 text-pink-400" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-cyan-400" />;
      default:
        return <Sparkles className="w-7 h-7 text-gold-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-card/40 relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-semibold text-gold-400">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>CORE SERVICES & SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What <span className="text-gradient-gold">RM Media</span> Offers
          </h2>
          <p className="text-slate-300 text-base">
            From targeted video ads to creative Punjabi lyrics writing, explore our end-to-end media services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card p-8 rounded-3xl border border-brand-border/80 flex flex-col justify-between glass-card-hover group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-brand-dark border border-brand-border">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 py-1 rounded-full bg-brand-dark/60 border border-brand-border">
                    RM MEDIA
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-400 mt-1">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="border-t border-brand-border/60 pt-4 space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-wider"
                >
                  <span>Inquire for {service.title.split(' ')[0]}</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
