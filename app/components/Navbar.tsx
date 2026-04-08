'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import siteConfig from '../config';
import { FaGithub } from 'react-icons/fa';
import { Menu, X, ChevronRight } from 'lucide-react';

const GitHubStarButton = ({ className = "" }: { className?: string }) => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/Puskar-Roy/Imposter')
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => setStars(null));
  }, []);

  return (
    <Link
      href={siteConfig.github}
      target="_blank"
      className={`btn-premium text-sm py-2 px-3 sm:px-4 shadow-[0_0_15px_rgba(0,166,126,0.2)] inline-flex items-center gap-2 group ${className}`}
    >
      <FaGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
      <span className="font-semibold hidden sm:inline">Star on GitHub</span>
      {stars !== null && (
        <span className="ml-1 sm:pl-2 sm:border-l border-white/20 text-white/90 tabular-nums">
          {stars}
        </span>
      )}
    </Link>
  );
};


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 mt-4">
      <div className="flex items-center justify-between px-5 py-3 backdrop-blur-md border border-white/5 bg-black/40 max-w-7xl mx-auto rounded-full transition-all">
        <Link href="/" className="flex items-center gap-1 group">
          <Image
            src="/images/logo.png"
            alt="Imposter Logo"
            width={48}
            height={48}
            style={{ height: 'auto' }}
            className="rounded-lg group-hover:scale-110 transition-transform"
            priority
          />
          <span className="font-bold text-xl tracking-tight hidden sm:block">Imposter</span>
        </Link>


        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="/model-providers" className="hover:text-primary transition-colors">Model Providers</Link>
          <Link href="/architecture" className="hover:text-primary transition-colors">Architecture</Link>
          <Link href="/upcoming" className="hover:text-primary transition-colors">Upcoming</Link>
        </div>

        <div className="flex items-center gap-3">
          <GitHubStarButton />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl bg-black/90 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col gap-4 text-sm font-medium text-zinc-400 animate-fade-up">
          <Link href="/features" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors py-2 flex items-center justify-between">
            Features <ChevronRight size={14} className="opacity-50" />
          </Link>
          <Link href="/model-providers" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors py-2 flex items-center justify-between">
            Model Providers <ChevronRight size={14} className="opacity-50" />
          </Link>
          <Link href="/architecture" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors py-2 flex items-center justify-between">
            Architecture <ChevronRight size={14} className="opacity-50" />
          </Link>
          <Link href="/upcoming" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors py-2 flex items-center justify-between">
            Upcoming Features <ChevronRight size={14} className="opacity-50" />
          </Link>
          <div className="pt-2 border-t border-white/5">
            <GitHubStarButton className="w-full justify-center" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


