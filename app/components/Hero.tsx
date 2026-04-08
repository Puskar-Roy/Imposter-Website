import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import siteConfig from '../config';
import { ContainerScroll } from './container-scroll-animation';
import { FaWindows, FaApple, FaLinux, FaGithub } from 'react-icons/fa';

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

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-10">
          <Link href="/download" className="btn-premium flex items-center gap-3 group px-8 py-4 text-lg shadow-[0_0_20px_rgba(0,166,126,0.2)]">
            <FaWindows className="text-xl group-hover:scale-110 transition-transform" />
            <span>Windows</span>
          </Link>
          <Link href="/download" className="px-8 py-4 text-lg font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full transition-all flex items-center gap-3 group shadow-xl">
            <FaApple className="text-xl group-hover:scale-110 transition-transform" />
            <span>macOS</span>
          </Link>
          <Link href="/download" className="px-8 py-4 text-lg font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full transition-all flex items-center gap-3 group shadow-xl">
            <FaLinux className="text-xl group-hover:scale-110 transition-transform" />
            <span>Linux</span>
          </Link>
          <a href={siteConfig.github} target="_blank" className="px-6 py-4 text-base font-bold text-zinc-400 hover:text-white transition-all flex items-center gap-2 group">
            <FaGithub className="text-lg" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

