import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import siteConfig from '../config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/5 bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <Image
              src="/images/logo.png"
              alt="Imposter Logo"
              width={40}
              height={40}
              className="rounded-lg group-hover:scale-110 transition-transform brightness-90 grayscale group-hover:grayscale-0 group-hover:brightness-110"
            />
            <span className="font-black text-xl tracking-tighter uppercase italic -skew-x-6">Imposter</span>
          </Link>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1">
            Beating a broken system. The invisible edge for high-stakes conversations and assessments.
          </p>
          <div className="flex gap-4 pt-2">
             <Link href={siteConfig.github} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
             </Link>
             <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
             </Link>
          </div>
        </div>

        {/* Links: Platform */}
        <div>
          <h4 className="text-white font-black uppercase italic tracking-tighter mb-6 text-xs grayscale-[0.5]">Platform</h4>
          <ul className="space-y-4 text-sm text-zinc-500 font-bold uppercase tracking-widest text-[10px]">
            <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link href="/model-providers" className="hover:text-primary transition-colors">Model Providers</Link></li>
            <li><Link href="/architecture" className="hover:text-primary transition-colors">Architecture</Link></li>
            <li><Link href="/upcoming" className="hover:text-primary transition-colors">Upcoming</Link></li>
          </ul>
        </div>

        {/* Links: Resource */}
        <div>
          <h4 className="text-white font-black uppercase italic tracking-tighter mb-6 text-xs grayscale-[0.5]">Support</h4>
          <ul className="space-y-4 text-sm text-zinc-500 font-bold uppercase tracking-widest text-[10px]">
            <li><Link href={siteConfig.github} target="_blank" className="hover:text-primary transition-colors">Documentation</Link></li>
            <li><Link href={siteConfig.github} target="_blank" className="hover:text-primary transition-colors">Community</Link></li>
            <li><Link href="/download" className="hover:text-primary transition-colors">Early Access</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-[0.2em] italic text-zinc-600">
        <p>© {currentYear} IMPOSTER. ALL RIGHTS RESERVED.</p>
        <p className="teal-gradient-text opacity-50">Stay Invisible. Stay Ahead.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-zinc-400 transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-zinc-400 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
