import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import siteConfig from '../config';

const DownloadCTA = () => {
  return (
    <section className="py-12 md:py-24 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      <div className="p-4 bg-primary/10 text-primary rounded-full mb-8 md:mb-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Get Started in Under 60 Seconds</h2>
      <p className="text-zinc-400 mb-3 max-w-xl text-sm sm:text-base">
        One lightweight installer. No sign-up. No cloud dependency. Just download, launch, and go stealth.
      </p>
      <p className="text-zinc-600 mb-8 md:mb-10 max-w-md text-xs">
        Works offline with Ollama. Add your own API keys for OpenRouter and AssemblyAI when you need cloud capabilities.
      </p>

      {siteConfig.released ? (
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/download" className="btn-premium px-8 sm:px-12 py-4 text-base sm:text-xl flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>
            Download for Windows
          </Link>
          <a href={siteConfig.github} target="_blank" className="px-8 sm:px-12 py-4 text-base sm:text-xl border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            View Source
          </a>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 w-full max-w-lg">
          <div className="glass-card p-6 w-full text-center border-primary/20 bg-primary/5">
            <div className="text-primary font-black text-lg uppercase tracking-tight italic mb-2">Releasing Soon</div>
            <p className="text-zinc-400 text-sm mb-4">
              Imposter v{siteConfig.version} is in final testing. Star the repo to get notified.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={siteConfig.github} target="_blank" className="btn-premium px-6 py-2.5 text-sm flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                Star on GitHub
              </a>
              <Link href="/download" className="px-6 py-2.5 text-sm border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                View Setup Guide
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* <div className="mt-16 w-full px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 px-5 py-3 backdrop-blur-md border border-white/5 bg-black/40 max-w-7xl mx-auto rounded-full text-zinc-600 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Image 
              src={siteConfig.logo} 
              alt="Imposter Logo" 
              width={36} 
              height={36} 
              style={{ height: 'auto' }}
              className="rounded-lg" 
            />
            <span>© 2026 Imposter AI. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href={siteConfig.github} className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default DownloadCTA;
