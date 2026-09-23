import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ravi Mehmi | RM Media - Digital Promoter, Punjabi Lyricist & Actor',
  description: 'Official website of Ravi Mehmi (RM Media). YouTube Ads Manager, Punjabi Song Writer, Actor & Model, Social Media Promoter based in Ludhiana, Punjab.',
  keywords: ['Ravi Mehmi', 'RM Media', 'YouTube Ads', 'Punjabi Lyricist', 'Social Media Promotion', 'Ludhiana Punjab', 'Hawk Records', 'Actor Model'],
  authors: [{ name: 'Ravi Mehmi' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="dark scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-brand-dark text-slate-100">
        {children}
      </body>
    </html>
  );
}
