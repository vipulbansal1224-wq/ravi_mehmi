'use client';

import { useState } from 'react';
import { Play, Sparkles, Youtube, ExternalLink } from 'lucide-react';
import { ProfileData } from '@/data/ravi_data';
import VideoModal from './VideoModal';

export default function PortfolioSection({ portfolio }: { portfolio: ProfileData['portfolio'] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideo, setActiveVideo] = useState<{ embedId?: string; title: string } | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? portfolio
    : portfolio.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>PORTFOLIO & CREATIVE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work & <span className="text-gradient-gold">Media Highlights</span>
          </h2>
          <p className="text-slate-300 text-base">
            Explore YouTube ads campaigns, lyric writing projects, and Hawk Records media collaborations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'youtube-ads', label: 'YouTube Ads' },
            { id: 'lyricist-poetry', label: 'Lyricist & Poetry' },
            { id: 'social-media', label: 'Social Media' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-amber-500 text-white shadow-lg shadow-purple-900/30'
                  : 'bg-brand-card border border-brand-border text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl border border-brand-border/80 overflow-hidden flex flex-col justify-between glass-card-hover group"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                  
                  {item.embedId && (
                    <button
                      onClick={() => setActiveVideo({ embedId: item.embedId, title: item.title })}
                      className="absolute inset-0 flex items-center justify-center group/btn"
                    >
                      <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover/btn:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                    </button>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-bold text-gold-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-gold-500/10 border border-gold-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-brand-border/40 mt-4 flex items-center justify-between">
                <a
                  href="https://www.youtube.com/c/RaviMehmi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>View Channel</span>
                </a>
                <a
                  href="https://www.youtube.com/c/RaviMehmi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-gold-400"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        embedId={activeVideo?.embedId}
        title={activeVideo?.title || ''}
      />
    </section>
  );
}
