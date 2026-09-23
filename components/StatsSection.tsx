'use client';

import { Youtube, Video, TrendingUp, Users } from 'lucide-react';
import { ProfileData } from '@/data/ravi_data';

export default function StatsSection({ stats }: { stats: ProfileData['stats'] }) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Youtube':
        return <Youtube className="w-6 h-6 text-red-500" />;
      case 'Video':
        return <Video className="w-6 h-6 text-purple-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-gold-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-400" />;
      default:
        return <TrendingUp className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section className="py-12 bg-brand-dark/80 border-y border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-brand-border/80 flex flex-col items-center text-center glass-card-hover"
            >
              <div className="p-3 rounded-xl bg-brand-dark border border-brand-border mb-4">
                {getIcon(item.icon)}
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {item.value}
              </span>
              <span className="text-sm font-semibold text-slate-200 mt-1">
                {item.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
