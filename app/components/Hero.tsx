import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import siteConfig from '../config';

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      <div className="hero-glow" />

      <div className="animate-fade-up">
        <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold mb-6 tracking-wider uppercase">
          Invisible AI Desktop Assistant
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 teal-gradient-text tracking-tighter uppercase italic -skew-x-6">
          Beating a Broken System
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed font-mono">
          A seamless, unobtrusive AI interface for your desktop environment.
        </p>

        <p className="text-sm md:text-base text-zinc-500 max-w-3xl mx-auto mb-4 leading-relaxed">
          Invisible to Zoom. Invisible to Teams. Invisible to OBS.
          A frameless, always-on-top AI overlay with <strong className="text-zinc-300">live voice transcription</strong>,{' '}
          <strong className="text-zinc-300">screen OCR</strong>, and <strong className="text-zinc-300">multi-provider LLM chat</strong> — running locally on your machine.
          Zero cloud storage. Zero trace. 100% stealth.
        </p>

        <p className="text-xs text-zinc-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Works offline with <strong className="text-zinc-400">Ollama</strong>. Add your own API keys for{' '}
          <strong className="text-zinc-400">OpenRouter</strong> and <strong className="text-zinc-400">AssemblyAI</strong> — stored locally, never on our servers.
          More providers coming soon: {siteConfig.futureProviders.join(', ')}.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 text-[11px] font-bold uppercase tracking-wider">Content Protection DRM</span>
          <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 text-[11px] font-bold uppercase tracking-wider">Tesseract OCR</span>
          <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 text-[11px] font-bold uppercase tracking-wider">AssemblyAI Realtime</span>
          <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 text-[11px] font-bold uppercase tracking-wider">Ollama + OpenRouter</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-wider">Open Source</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Link href="/download" className="btn-premium flex items-center gap-3 group px-8 py-4 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>
            Download for Windows
          </Link>
          <a href={siteConfig.github} target="_blank" className="px-8 py-4 text-lg font-bold text-white/80 hover:text-white transition-all flex items-center gap-2">
            View on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          </a>
        </div>
      </div>

      {/* Mockup Window */}
      <div className="relative w-full max-w-4xl mx-auto animate-floating mt-8">
        <div className="relative group">
          {/* Glow behind mockup */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-emerald-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

          <div className="relative glass-card overflow-hidden shadow-2xl border-white/10">


            <div className="md:hidden">
              <Image
                src="/images/imposter-mobile.png"
                alt="Imposter Mobile View Mockup"
                width={800}
                height={1200}
                style={{ height: 'auto' }}
                className="w-full rounded-xl"
                priority
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/mockup.png"
                alt="Imposter Desktop Mockup"
                width={800}
                height={380}
                style={{ height: 'auto' }}
                className="w-full object-cover rounded-b-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
