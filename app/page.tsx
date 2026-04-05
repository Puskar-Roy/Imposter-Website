import React from 'react';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Providers from './components/Providers';
import Architecture from './components/Architecture';
import DownloadCTA from './components/DownloadCTA';

export const metadata: Metadata = {
  metadataBase: new URL('https://imposter.im'),
  title: 'Imposter - Beating a Broken System',
  description: "The AI Phantom That Doesn't Exist—Until You Need It. Stealth AI Assistant with live transcription and OCR.",
  openGraph: {
    title: "Imposter - Beating a Broken System",
    description: "Stealth AI Assistant with live transcription and OCR.",
    url: "https://github.com/Puskar-Roy/Imposter",
    siteName: "Imposter AI",
    images: [
      {
        url: "/images/imposter.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imposter - Beating a Broken System",
    description: "The AI Phantom That Doesn't Exist—Until You Need It.",
    images: ["/images/imposter.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Features />
      <Providers />
      <Architecture />
      <DownloadCTA />
    </main>
  );
}
