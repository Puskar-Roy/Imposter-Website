import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import siteConfig from '../config';

export const metadata = {
  title: 'Download & Setup - Imposter AI',
  description: 'Download Imposter for Windows and set up Ollama, OpenRouter, and AssemblyAI for the ultimate stealth AI assistant.',
};

const DownloadPage = () => {
  const isReleased = siteConfig.released;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">


        <section className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold mb-6 tracking-wider uppercase italic">
            Windows Desktop App
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 teal-gradient-text tracking-tighter italic uppercase -skew-x-6">
            Download & Setup
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base leading-relaxed">
            Get Imposter running on your machine in under 60 seconds. One installer, no sign-up, completely local.
          </p>
        </section>


        <section className="mb-20 flex flex-col items-center">
          {isReleased ? (
            <a
              href={siteConfig.downloadUrl}
              className="btn-premium px-10 py-5 text-xl flex items-center gap-3 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>
              Download Imposter v{siteConfig.version}
            </a>
          ) : (
            <div className="glass-card p-8 text-center max-w-lg w-full">
              <div className="p-4 bg-primary/10 text-primary rounded-full mb-6 w-16 h-16 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-3 italic uppercase tracking-tight">Releasing Soon</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Imposter v{siteConfig.version} is in final testing. Star the repo to get notified when it drops.
              </p>
              <a
                href={siteConfig.github}
                target="_blank"
                className="btn-premium px-8 py-3 text-sm inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                Star on GitHub
              </a>
            </div>
          )}
          <p className="text-zinc-600 text-xs mt-4">Windows 10+ required. ~80MB installer.</p>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />


        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">Step 1</span>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Install & Launch</h2>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <ol className="space-y-4 text-sm text-zinc-400">
              <li className="flex gap-3">
                <span className="text-primary font-bold shrink-0">1.</span>
                <span>Download the installer and run it. Follow the on-screen prompts — default settings work fine.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold shrink-0">2.</span>
                <span>Imposter launches in <strong className="text-white">Stealth Mode</strong> by default — invisible in taskbar, always on top, content-protected.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold shrink-0">3.</span>
                <span>Complete the quick onboarding: enter your display name and an optional system prompt override.</span>
              </li>
            </ol>
          </div>
        </section>


        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">Step 2</span>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Connect an AI Provider</h2>
          </div>
          <p className="text-zinc-400 text-sm mb-8 max-w-3xl">
            Imposter supports multiple AI providers. You can use it fully offline with Ollama, or connect to cloud models via OpenRouter.
            All API keys are stored <strong className="text-white">locally on your machine</strong> — never sent to Imposter servers.
          </p>

          {/* Ollama */}
          <div className="glass-card p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <h3 className="text-lg font-bold text-white">Option A: Ollama (Local / Offline)</h3>
            </div>
            <div className="space-y-3 text-sm text-zinc-400 mb-6">
              <p>Ollama runs AI models locally on your machine. <strong className="text-white">Zero internet required.</strong></p>
              <ol className="space-y-2 pl-4">
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">1.</span> Install Ollama from <a href={siteConfig.ollamaUrl} target="_blank" className="text-primary hover:underline">{siteConfig.ollamaUrl}</a></li>
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">2.</span> Pull a model: <code className="text-primary/80 bg-primary/10 px-1.5 py-0.5 rounded text-xs">ollama pull llama3</code></li>
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">3.</span> <strong className="text-white">That&apos;s it.</strong> Imposter auto-detects all local Ollama models on startup.</li>
              </ol>
            </div>
          </div>

          {/* OpenRouter */}
          <div className="glass-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <h3 className="text-lg font-bold text-white">Option B: OpenRouter (Cloud)</h3>
            </div>
            <div className="space-y-3 text-sm text-zinc-400 mb-6">
              <p>OpenRouter gives you access to hundreds of models (including free-tier options). Your API key stays local.</p>
              <ol className="space-y-2 pl-4">
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">1.</span> Create an account at <a href={siteConfig.openRouterUrl} target="_blank" className="text-primary hover:underline">{siteConfig.openRouterUrl}</a></li>
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">2.</span> Generate an API key at <a href={siteConfig.openRouterKeysUrl} target="_blank" className="text-primary hover:underline">{siteConfig.openRouterKeysUrl}</a></li>
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">3.</span> In Imposter, go to <strong className="text-white">Settings &rarr; Models &rarr; Add New Model</strong></li>
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">4.</span> Select <strong className="text-white">OpenRouter</strong> as provider, paste your key, and enter the model ID</li>
              </ol>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <Image
                src={siteConfig.screenshots.modelSetup}
                alt="Imposter Settings - Add Model with OpenRouter"
                width={800}
                height={500}
                className="w-full"
              />
            </div>
            <p className="text-zinc-600 text-xs mt-3 italic">Settings &rarr; Models — Add any OpenRouter or Ollama model</p>
          </div>
        </section>


        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">Step 3</span>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Enable Live Voice Transcription</h2>
            <span className="text-xs text-zinc-600 font-medium">(Optional)</span>
          </div>
          <p className="text-zinc-400 text-sm mb-8 max-w-3xl">
            Real-time voice transcription is powered by <strong className="text-white">AssemblyAI</strong>. This feature captures system audio
            (what your speakers/headphones output) and transcribes it live in the Dynamic Island overlay.
          </p>

          <div className="glass-card p-6 sm:p-8">
            <div className="space-y-3 text-sm text-zinc-400 mb-6">
              <ol className="space-y-2 pl-4">
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">1.</span> Create a free account at <a href={siteConfig.assemblyAiUrl} target="_blank" className="text-primary hover:underline">{siteConfig.assemblyAiUrl}</a></li>
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">2.</span> Get your API key from <a href={siteConfig.assemblyAiDashboardUrl} target="_blank" className="text-primary hover:underline">your dashboard</a></li>
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">3.</span> In Imposter, go to <strong className="text-white">Settings &rarr; Voice & AI</strong></li>
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">4.</span> Paste your API key and click <strong className="text-white">Test Connection</strong> to verify</li>
                <li className="flex gap-3"><span className="text-primary font-bold shrink-0">5.</span> Press <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded border border-white/10 font-mono text-primary/80 text-xs">Ctrl+Shift+B</kbd> to start recording</li>
              </ol>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <Image
                src={siteConfig.screenshots.voiceSetup}
                alt="Imposter Settings - Voice & AI Transcription setup"
                width={800}
                height={500}
                className="w-full"
              />
            </div>
            <p className="text-zinc-600 text-xs mt-3 italic">Settings &rarr; Voice & AI — Configure AssemblyAI for live transcription</p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />


        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">Roadmap</span>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Coming Soon</h2>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <p className="text-zinc-400 text-sm mb-6">
              More providers are on the way. Just add your API key in Settings — Imposter handles the rest.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {siteConfig.futureProviders.map((provider, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                  <div className="text-white font-bold text-sm mb-1">{provider}</div>
                  <div className="text-[10px] text-zinc-600 uppercase tracking-wider font-bold">Coming Soon</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <div className="flex justify-center">
          <Link href="/" className="text-sm text-zinc-500 hover:text-primary transition-colors flex items-center gap-2 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1"><path d="m15 18-6-6 6-6" /></svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DownloadPage;
