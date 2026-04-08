"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaWindows, FaApple, FaLinux, FaGithub } from 'react-icons/fa';
import { ShieldAlert, Download, X, AlertTriangle, CheckCircle2 } from 'lucide-react';
import siteConfig from '../config';

const WindowsDialogMockup = ({ step }: { step: 1 | 2 }) => {
  return (
    <div className="relative w-full max-w-[320px] mx-auto aspect-[4/3] bg-[#0078d7] text-white p-5 rounded-lg shadow-2xl overflow-hidden font-sans select-none border border-white/20">
      <div className="text-xl font-light mb-4 leading-tight">Windows protected your PC</div>
      
      <div className="text-[11px] leading-snug opacity-90 mb-6">
        Microsoft Defender SmartScreen prevented an unrecognized app from starting. Running this app might put your PC at risk.
        {step === 1 && (
          <div className="mt-2 text-white font-bold underline cursor-default decoration-yellow-400 decoration-2 underline-offset-4 flex items-center gap-1 group">
            More info
            <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] text-black animate-pulse">!</div>
          </div>
        )}
      </div>

      {step === 2 && (
        <div className="space-y-1 mb-6">
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
        <X size={14} />
      </div>
    </div>
  );
};

const SecurityModal = ({ onConfirm, onClose }: { onConfirm: () => void, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative glass-card max-w-6xl w-full max-h-[85vh] border-primary/20 bg-zinc-950 shadow-[0_0_100px_rgba(0,166,126,0.2)] flex flex-col animate-fade-up overflow-hidden">
        
        {/* Header (Fixed) */}
        <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-xl text-primary border border-primary/20">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-white italic uppercase tracking-tight">Trust & Security</h2>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Verified Open Source</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors p-2">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Center Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-14 custom-scrollbar">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Trust Details */}
            <div className="space-y-10">
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-primary">
                  <AlertTriangle size={64} />
                </div>
                <h3 className="text-white font-black mb-3 uppercase tracking-tight italic text-lg">Why the warning?</h3>
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-medium">
                  Microsoft requires developer fees of <strong className="text-white underline decoration-primary/50 underline-offset-4">$450+ per year</strong> to be recognized as a &quot;Known Publisher&quot;. 
                  As a 100% free, community-funded project, we prioritize development over licensing fees. 
                  <span className="text-primary font-bold block mt-3">This notice is normal for independent software that values transparency over corporate certification.</span>
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 hover:bg-white/[0.04] transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <CheckCircle2 size={18} />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase italic tracking-tight">Public Audit</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Our entire code is public on GitHub. Malicious code cannot hide in an open audit.</p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 hover:bg-white/[0.04] transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <CheckCircle2 size={18} />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase italic tracking-tight">Privacy First</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">No Cloud. No Logs. Your data and API keys stay local on your machine.</p>
                </div>
              </div>
            </div>

            {/* Right: Visual Guide */}
            <div className="bg-white/[0.01] rounded-2xl p-8 border border-white/5">
              <div className="text-center mb-8">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2 block">How to Install</span>
                <h3 className="text-lg font-bold text-white italic uppercase tracking-tight">Visual Installation Guide</h3>
              </div>
              <div className="space-y-12">
                <div className="space-y-3 text-center">
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Step 1: Click &quot;More info&quot;</p>
                  <WindowsDialogMockup step={1} />
                </div>
                <div className="space-y-3 text-center">
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Step 2: Click &quot;Run anyway&quot;</p>
                  <WindowsDialogMockup step={2} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer (Fixed) */}
        <div className="p-6 md:p-8 bg-zinc-950 border-t border-white/5 shrink-0">
          <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto w-full">
            <button 
              onClick={onConfirm}
              className="btn-premium flex-[2] py-4 md:py-5 text-sm md:text-base font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,166,126,0.3)] hover:scale-[1.02] transition-transform"
            >
              <CheckCircle2 size={20} />
              I Understand
            </button>
            <button 
              onClick={onClose}
              className="px-8 py-4 md:py-5 rounded-full border border-white/10 text-zinc-500 hover:text-white hover:bg-white/5 transition-all text-sm font-black uppercase tracking-widest flex-1"
            >
              Cancel
            </button>
          </div>
          <p className="text-center text-[10px] text-zinc-600 mt-4 italic font-medium">By clicking I Understand, you acknowledge this is a community-driven, non-certified open source project.</p>
        </div>
      </div>
    </div>
  );
};

const DownloadContent = () => {
  const searchParams = useSearchParams();
  const [os, setOs] = useState<'windows' | 'mac' | 'linux' | 'unknown'>('unknown');
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [hasAcceptedSecurity, setHasAcceptedSecurity] = useState(false);
  const isReleased = siteConfig.released;

  useEffect(() => {
    // 1. Check query parameter first
    const osParam = searchParams.get('os');
    if (osParam === 'windows' || osParam === 'mac' || osParam === 'linux') {
      const selectedOs = osParam as any;
      setOs(selectedOs);
      
      // Auto-trigger modal for Windows
      if (selectedOs === 'windows' && !hasAcceptedSecurity) {
        setShowSecurityModal(true);
      }
      return;
    }

    // 2. Fallback to User Agent detection
    const userAgent = window.navigator.userAgent.toLowerCase();
    let detectedOs: 'windows' | 'mac' | 'linux' | 'unknown' = 'unknown';
    
    if (userAgent.indexOf('win') !== -1) detectedOs = 'windows';
    else if (userAgent.indexOf('mac') !== -1) detectedOs = 'mac';
    else if (userAgent.indexOf('linux') !== -1) detectedOs = 'linux';
    else if (userAgent.indexOf('x11') !== -1) detectedOs = 'linux';
    
    setOs(detectedOs);
    if (detectedOs === 'windows' && !hasAcceptedSecurity) {
      setShowSecurityModal(true);
    }
  }, [searchParams, hasAcceptedSecurity]);

  const handleDownloadClick = (e: React.MouseEvent) => {
    if (os === 'windows' && !hasAcceptedSecurity) {
      e.preventDefault();
      setShowSecurityModal(true);
    }
  };

  const confirmDownload = () => {
    setHasAcceptedSecurity(true);
    setShowSecurityModal(false);
  };

  const getOsDownloadInfo = () => {
    switch (os) {
      case 'windows':
        return {
          name: 'Windows',
          icon: <FaWindows />,
          url: siteConfig.downloadUrl,
          details: 'Windows 10+ required. ~80MB installer.'
        };
      case 'mac':
        return {
          name: 'macOS',
          icon: <FaApple />,
          url: siteConfig.githubReleases,
          details: 'Coming Soon for macOS. Check GitHub for development builds.'
        };
      case 'linux':
        return {
          name: 'Linux',
          icon: <FaLinux />,
          url: siteConfig.githubReleases,
          details: 'Coming Soon for Linux. Check GitHub for development builds.'
        };
      default:
        return {
          name: 'Windows',
          icon: <FaWindows />,
          url: siteConfig.downloadUrl,
          details: 'Windows 10+ required. ~80MB installer.'
        };
    }
  };

  const info = getOsDownloadInfo();

  return (
    <>
      <section className="mb-20 flex flex-col items-center">
        {isReleased && os === 'windows' ? (
          <>
            <a
              href={info.url}
              onClick={handleDownloadClick}
              className="btn-premium px-10 py-5 text-xl flex items-center gap-3 mb-4 group shadow-[0_0_50px_rgba(0,166,126,0.3)] hover:scale-105 transition-all text-white no-underline"
            >
              {info.icon}
              Download Imposter for {info.name} v{siteConfig.version}
            </a>
            <p className="text-zinc-600 text-xs mt-4">{info.details}</p>
          </>
        ) : (
          <div className="glass-card p-8 text-center max-w-lg w-full">
            <div className="p-4 bg-primary/10 text-primary rounded-full mb-6 w-16 h-16 flex items-center justify-center mx-auto">
              {info.icon}
            </div>
            <h3 className="text-2xl font-black mb-3 italic uppercase tracking-tight">
              {os === 'windows' ? 'Releasing Soon' : `Not Available for ${info.name}`}
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              {os === 'windows' 
                ? `Imposter v${siteConfig.version} is in final testing. Star the repo to get notified.`
                : `We are currently focusing on the Windows release. Check out our GitHub for other platforms.`}
            </p>
            
            <div className="flex flex-col gap-3">
               <a
                href={siteConfig.github}
                target="_blank"
                className="btn-premium px-8 py-3 text-sm inline-flex items-center justify-center gap-2 group"
              >
                <FaGithub size={18} className="group-hover:scale-110 transition-transform" />
                Star on GitHub
              </a>
              
              <a
                href={siteConfig.githubTags}
                target="_blank"
                className="px-8 py-3 text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                <FaGithub size={18} />
                View All Builds (GitHub Tags)
              </a>
            </div>
          </div>
        )}
      </section>

      {showSecurityModal && (
        <SecurityModal 
          onConfirm={confirmDownload}
          onClose={() => setShowSecurityModal(false)}
        />
      )}
    </>
  );
};

const DownloadClient = () => {
  return (
    <Suspense fallback={<div className="h-40 flex items-center justify-center text-zinc-500 font-mono text-xs uppercase tracking-widest">Detecting Environment...</div>}>
      <DownloadContent />
    </Suspense>
  );
};

export default DownloadClient;
