'use client';

import { useState, useEffect } from 'react';
import { Globe, CheckCircle, ExternalLink, RefreshCw, Sparkles, Search, Database } from 'lucide-react';

interface RecordItem {
  platform: string;
  handle: string;
  details: string;
  verified: boolean;
  link: string;
}

export default function NetInfoSection() {
  const [netData, setNetData] = useState<{
    records: RecordItem[];
    summary: {
      location: string;
      education: string;
      labels: string[];
      specialization: string[];
    };
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const fetchNetData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/net-info');
      const data = await res.json();
      setNetData(data);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNetData();
  }, []);

  return (
    <section id="net-info" className="py-24 bg-brand-card/30 relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span>INTERNET DATA INTEGRATION HUB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Live <span className="text-gradient-gold">Internet Footprint</span> & Verification
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              इंटरनेट और आधिकारिक सोशल मीडिया हैंडल्स पर उपलब्ध रवि मेहमी (RM Media) का लाइव डेटा।
            </p>
          </div>

          <button
            onClick={fetchNetData}
            disabled={loading}
            className="px-4 py-2.5 rounded-xl bg-brand-card border border-brand-border text-xs font-semibold text-slate-300 hover:text-white hover:border-emerald-500 transition-all flex items-center gap-2 shrink-0"
          >
            <RefreshCw className={`w-4 h-4 text-emerald-400 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'Refreshing...' : `Refresh Net Data (${lastUpdated || 'Live'})`}</span>
          </button>
        </div>

        {/* Summary Pill Bar */}
        {netData && (
          <div className="glass-card p-6 rounded-2xl border border-brand-border/80 mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <span className="text-xs text-slate-400 font-semibold block uppercase">Location Base</span>
              <span className="text-sm font-bold text-white mt-1 block">{netData.summary.location}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold block uppercase">Education Record</span>
              <span className="text-sm font-bold text-white mt-1 block">{netData.summary.education}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold block uppercase">Associated Labels</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {netData.summary.labels.map((lbl, idx) => (
                  <span key={idx} className="text-xs font-bold px-2 py-0.5 rounded bg-purple-900/50 text-purple-300">
                    {lbl}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold block uppercase">Key Services</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {netData.summary.specialization.slice(0, 2).map((sp, idx) => (
                  <span key={idx} className="text-xs font-bold px-2 py-0.5 rounded bg-gold-500/10 text-gold-400">
                    {sp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Verified Net Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {netData?.records.map((rec, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-brand-border/80 flex flex-col justify-between glass-card-hover"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {rec.platform}
                    </span>
                  </div>
                  {rec.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <CheckCircle className="w-3 h-3" /> Verified Profile
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-base font-bold text-gold-400">{rec.handle}</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{rec.details}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-border/60 mt-4">
                <a
                  href={rec.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-brand-dark border border-brand-border text-slate-200 hover:text-white hover:border-gold-500 transition-all text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <span>Open Official Link</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
