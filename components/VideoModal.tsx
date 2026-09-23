'use client';

import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  embedId?: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, embedId, title }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-brand-card border border-brand-border rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-brand-border bg-brand-dark">
          <h3 className="text-sm sm:text-base font-bold text-white truncate pr-4">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-brand-card hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative aspect-video w-full bg-black">
          {embedId ? (
            <iframe
              src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400 text-sm">
              Video preview loading from official channel...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
