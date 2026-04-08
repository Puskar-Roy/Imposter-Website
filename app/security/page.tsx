"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldAlert, AlertTriangle, Download, ArrowLeft, CheckCircle2, Lock, Eye } from 'lucide-react';
import { FaWindows } from 'react-icons/fa';
import siteConfig from '../config';

const WindowsDialogMockup = ({ step }: { step: 1 | 2 }) => {
  return (
    <div className="relative w-full max-w-[340px] mx-auto aspect-[4/3] bg-[#0078d7] text-white p-6 rounded-lg shadow-2xl overflow-hidden font-sans select-none border border-white/20">
      <div className="text-xl font-light mb-4 leading-tight text-white/90">Windows protected your PC</div>
      
      <div className="text-[11px] leading-snug opacity-90 mb-6 text-white/80">
        Microsoft Defender SmartScreen prevented an unrecognized app from starting. Running this app might put your PC at risk.
        {step === 1 && (
          <div className="mt-2 text-white font-bold underline cursor-default decoration-yellow-400 decoration-2 underline-offset-4 flex items-center gap-1 group">
            More info
            <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] text-black animate-pulse">!</div>
          </div>
        )}
      </div>

      {step === 2 && (
        <div className="space-y-1 mb-8">
           <div className="grid grid-cols-[60px_1fr] text-[11px] items-baseline">
              <span className="opacity-70">App:</span>
              <span className="font-semibold tracking-wide">Imposter.Setup.{siteConfig.version}.exe</span>
           </div>
           <div className="grid grid-cols-[60px_1fr] text-[11px] items-baseline">
              <span className="opacity-70">Publisher:</span>
              <span className="font-semibold tracking-wide italic text-yellow-300">Unknown publisher</span>
           </div>
        </div>
      )}

      <div className="absolute bottom-4 right-4 flex gap-2">
        {step === 2 && (
          <div className="px-5 py-1.5 bg-white text-black text-[11px] font-medium border border-transparent shadow-sm flex items-center gap-1 relative overflow-hidden group">
            Run anyway
            <div className="absolute inset-0 border-2 border-yellow-400 animate-pulse pointer-events-none" />
          </div>
        )}
        <div className={`px-5 py-1.5 ${step === 2 ? 'bg-transparent border border-white/40' : 'bg-white text-black'} text-[11px] font-medium`}>
          Don&apos;t run
        </div>
      </div>

      <div className="absolute top-2 right-2 opacity-40">
        <XIcon />
      </div>
    </div>
  );
};

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

export default function SecurityPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <Link 
          href="/download" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group font-bold uppercase tracking-widest text-[10px]"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Downloads
        </Link>

        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
            <ShieldAlert size={14} className="animate-pulse" />
            Security & Transparency
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white italic uppercase -skew-x-6 tracking-tighter leading-none">
            Trusted. <span className="text-primary italic">Transparent.</span> <br /> 
            Open Source.
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-zinc-400 font-medium leading-relaxed">
            Independent software often faces hurdles from big tech licensing. We choose transparency over certificates. 
            Here is everything you need to know about why Imposter is 100% safe.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={siteConfig.downloadUrl}
              className="btn-premium px-10 py-4 text-base font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,166,126,0.2)] hover:scale-105 transition-transform"
            >
              <Download size={20} />
              I Trust - Download Now
            </a>
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em]">
              Or scoll to learn why it&apos;s safe
            </p>
          </div>
        </div>

        {/* Main Trust Sections */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-24">
          {/* Left: The Why */}
          <div className="space-y-8">
            <div className="glass-card p-10 sm:p-14 border-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-primary">
                <ShieldAlert size={120} />
              </div>
              <h2 className="text-3xl font-black text-white italic uppercase mb-8 tracking-tight">The "Publisher" Warning</h2>
              <div className="space-y-6">
                <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                  Microsoft charges developers <strong className="text-white underline decoration-primary/50 underline-offset-4">$450+ per year</strong> to maintain a "Trusted Publisher" certificate. 
                </p>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-4">
                  <h3 className="text-primary font-black uppercase tracking-widest text-xs">Our Stance:</h3>
                  <p className="text-base text-zinc-300 italic font-medium">
                    "As a 100% free, community-driven project, we prioritize building features and protecting user privacy over paying corporate licensing fees. 
                    This notice is a standard badge of honor for independent, open-source software."
                  </p>
                </div>
                <p className="text-sm text-zinc-400">
                  By clicking through the warning, you are supporting independent software and the open-source movement. 
                  <span className="text-white font-bold ml-1">It does not mean the app is unsafe.</span>
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-8 border-white/5 hover:border-primary/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Eye size={24} />
                </div>
                <h3 className="text-white font-black uppercase italic mb-3 tracking-tight">Public Audit</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Our entire code is public on GitHub. Malicious code cannot hide in an ecosystem where hundreds of developers audit every commit.
                </p>
              </div>
              <div className="glass-card p-8 border-white/5 hover:border-primary/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Lock size={24} />
                </div>
                <h3 className="text-white font-black uppercase italic mb-3 tracking-tight">Zero-Log Privacy</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Everything stays local. Imposter never connects to our own servers—we have zero interest in your data, API keys, or history.
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Guide */}
          <div className="glass-card p-10 sm:p-14 border-white/10 bg-white/[0.01]">
            <div className="text-center mb-12">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">Visual Guide</span>
              <h2 className="text-2xl font-black text-white italic uppercase tracking-tight italic">How to Install on Windows</h2>
            </div>

            <div className="space-y-20">
              {/* Step 1 */}
              <div className="space-y-6 relative">
                <div className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] font-black text-zinc-500 border border-white/5">01</span>
                    <span className="text-[11px] font-black text-white uppercase tracking-widest">Click &quot;More info&quot;</span>
                  </div>
                  <div className="h-[1px] flex-1 mx-6 bg-gradient-to-r from-white/5 to-transparent" />
                </div>
                <WindowsDialogMockup step={1} />
              </div>

              {/* Step 2 */}
              <div className="space-y-6 relative">
                <div className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] font-black text-zinc-500 border border-white/5">02</span>
                    <span className="text-[11px] font-black text-white uppercase tracking-widest">Click &quot;Run anyway&quot;</span>
                  </div>
                  <div className="h-[1px] flex-1 mx-6 bg-gradient-to-r from-white/5 to-transparent" />
                </div>
                <WindowsDialogMockup step={2} />
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-[11px] text-zinc-600 italic">
                Verified Safe by the Imposter Community • v{siteConfig.version} Stable Release
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Area */}
        <div className="relative p-1 px-1 rounded-[40px] bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 group">
          <div className="bg-zinc-950 rounded-[39px] p-10 sm:p-16 text-center relative overflow-hidden backdrop-blur-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h2 className="text-4xl sm:text-5xl font-black text-white italic uppercase tracking-tighter mb-8 relative z-10 transition-transform group-hover:scale-[1.02] duration-500">
              Ready to <span className="text-primary italic">Stealth?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a 
                href={siteConfig.downloadUrl}
                className="btn-premium px-14 py-6 text-lg sm:text-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 w-full sm:w-auto shadow-[0_0_50px_rgba(0,166,126,0.3)] hover:shadow-[0_0_80px_rgba(0,166,126,0.5)] transition-all"
              >
                <Download size={24} />
                I Trust - Download Now
              </a>
              <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest hidden sm:block">OR</p>
              <Link 
                href="/download"
                className="px-10 py-6 text-sm font-black text-zinc-500 hover:text-white uppercase tracking-widest border border-white/5 hover:border-white/20 rounded-full transition-all w-full sm:w-auto"
              >
                Learn More First
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 size={16} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest">No Trojans</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 size={16} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest">No Keyloggers</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 size={16} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest">Private Keys</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
