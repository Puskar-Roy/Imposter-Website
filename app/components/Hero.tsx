import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import siteConfig from '../config';
import { ContainerScroll } from './container-scroll-animation';

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      <div className="hero-glow" />

      <div className="animate-fade-up">
        <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold mb-6 tracking-wider uppercase">
          Beating a Broken System
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 teal-gradient-text tracking-tighter uppercase italic -skew-x-6">
          The Invisible AI Assistant
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed font-mono italic">
          An undetectable multi-LLM companion. Designed for your most critical live calls and assessments.
        </p>

        <p className="text-sm md:text-base text-zinc-500 max-w-3xl mx-auto mb-4 leading-relaxed">
          Focus your performance with a discreet, always-on-top AI layer that sits on your desktop. Invisible to meeting platforms and screen-sharing, <strong className="text-zinc-300">Imposter </strong> connects you to the world&apos;s most powerful models. Zero trace. 100% stealth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
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
    </section>
  );
};

export default Hero;
