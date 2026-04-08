"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaWindows, FaApple, FaLinux, FaGithub } from 'react-icons/fa';
import siteConfig from '../config';

const DownloadContent = () => {
  const searchParams = useSearchParams();
  const [os, setOs] = useState<'windows' | 'mac' | 'linux' | 'unknown'>('unknown');
  const isReleased = siteConfig.released;

  useEffect(() => {
    // 1. Check query parameter first
    const osParam = searchParams.get('os');
    if (osParam === 'windows' || osParam === 'mac' || osParam === 'linux') {
      setOs(osParam as any);
      return;
    }

    // 2. Fallback to User Agent detection
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('win') !== -1) setOs('windows');
    else if (userAgent.indexOf('mac') !== -1) setOs('mac');
    else if (userAgent.indexOf('linux') !== -1) setOs('linux');
    else if (userAgent.indexOf('x11') !== -1) setOs('linux');
  }, [searchParams]);

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
    <section className="mb-20 flex flex-col items-center">
      {isReleased && os === 'windows' ? (
        <>
          <a
            href={info.url}
            className="btn-premium px-10 py-5 text-xl flex items-center gap-3 mb-4 group"
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
      
      {(os === 'mac' || os === 'linux') && (
         <div className="mt-8 p-4 border border-white/5 bg-zinc-900/30 rounded-xl max-w-lg text-center animate-fade-up">
            <p className="text-zinc-500 text-xs leading-relaxed italic">
              Looking for a specific version or platform? 
              <a href={siteConfig.githubTags} target="_blank" className="text-primary hover:underline ml-1 font-bold">
                Download directly from GitHub Tags.
              </a>
            </p>
         </div>
      )}
    </section>
  );
};

const DownloadClient = () => {
  return (
    <Suspense fallback={<div className="h-40 flex items-center justify-center text-zinc-500">Detecting platform...</div>}>
      <DownloadContent />
    </Suspense>
  );
};

export default DownloadClient;
