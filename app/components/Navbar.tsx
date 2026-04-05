'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
            className="rounded-lg group-hover:scale-110 transition-transform"
          />
          <span className="font-bold text-xl tracking-tight hidden sm:block">Imposter</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="/architecture" className="hover:text-primary transition-colors">Architecture</Link>
          <Link href="https://github.com/Puskar-Roy/Imposter" target="_blank" className="hover:text-primary transition-colors">GitHub</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/Puskar-Roy/Imposter/releases"
            className="btn-premium text-sm py-2 px-4 shadow-[0_0_15px_rgba(0,166,126,0.2)] hidden sm:inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>
            Download
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl bg-black/90 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col gap-4 text-sm font-medium text-zinc-400 animate-fade-up">
          <Link href="/features" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors py-2">Features</Link>
          <Link href="/architecture" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors py-2">Architecture</Link>
          <Link href="https://github.com/Puskar-Roy/Imposter" target="_blank" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors py-2">GitHub</Link>
          <Link
            href="https://github.com/Puskar-Roy/Imposter/releases"
            onClick={() => setMenuOpen(false)}
            className="btn-premium text-sm py-3 px-6 text-center mt-2"
          >
            Download for Windows
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
