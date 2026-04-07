import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Model Providers Guide - Imposter AI',
  description: 'Learn how to add and configure AI models from Ollama, OpenRouter, and Google Gemini in Imposter.',
};

const ModelProvidersPage = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30 font-sans">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-16">
        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-32 h-fit">
          <div className="border-l border-white/10 pl-6 space-y-2 text-sm text-zinc-500">
            <p className="text-zinc-200 font-black mb-5 uppercase tracking-widest text-[10px]">Guide</p>
            <a href="#overview" className="block hover:text-primary transition-colors py-1 font-medium text-zinc-300">Overview</a>
            <a href="#ollama" className="block hover:text-primary transition-colors py-1">Ollama (Local)</a>
            <a href="#openrouter" className="block hover:text-primary transition-colors py-1">OpenRouter (Cloud)</a>
            <a href="#gemini" className="block hover:text-primary transition-colors py-1">Google Gemini (Direct)</a>
            <a href="#troubleshooting" className="block hover:text-primary transition-colors py-1 font-medium text-zinc-300">Troubleshooting</a>
          </div>
        </aside>

        {/* Content */}
        <article className="max-w-none">
          {/* Header */}
          <section id="overview" className="mb-20">
            <h1 className="text-4xl md:text-6xl font-black mb-4 teal-gradient-text tracking-tighter uppercase italic -skew-x-6">
              Model Providers
            </h1>
            <p className="text-lg text-zinc-400 mb-6 max-w-3xl leading-relaxed">
              Imposter is designed to be <strong className="text-white">provider-agnostic</strong>. Whether you want the total privacy of local models or the raw power of cloud-scale LLMs, connecting them is a simple, one-time process.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">BYOK Architecture</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-bold">Zero Data Logging</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-bold">Local-First Storage</span>
            </div>
            <div className="h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
          </section>

          {/* Ollama Section */}
          <section id="ollama" className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">01</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Ollama (Local AI)</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
                <p>
                  Running models locally is the ultimate way to use Imposter. Your data never leaves your RAM, and the response time is near-instant (depending on your hardware).
                </p>
                <div className="glass-card p-6 bg-white/[0.02]">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full" />
                    How to Setup
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-primary font-black">1.</span>
                      <span>Install Ollama from <a href="https://ollama.com" target="_blank" className="text-primary hover:underline">ollama.com</a>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-black">2.</span>
                      <span>Run <code className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-zinc-200">ollama pull llama3</code> in your terminal.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-black">3.</span>
                      <span>Imposter will <strong className="text-white">auto-detect</strong> all installed models on startup.</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 border border-white/5 bg-zinc-900/50 rounded-xl">
                  <p className="text-xs italic">
                    <strong className="text-zinc-200">Pro Tip:</strong> If you want to add a model manually (e.g., using a custom base URL), use the Model Management panel in Settings.
                  </p>
                </div>
              </div>

              {/* Ollama Mock */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-zinc-900 p-3 border-b border-white/5 flex items-center justify-between">
                    <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Add New Intelligence</div>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                      <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    </div>
                  </div>
                  <div className="p-4 md:p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">Provider</label>
                        <div className="text-sm font-bold text-white">Ollama (Local)</div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">Friendly Name</label>
                        <div className="p-3 bg-zinc-900 border border-white/5 rounded-lg text-zinc-500 text-xs">e.g. My Personal Llama</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">Model Identifier</label>
                        <div className="p-3 bg-zinc-900 border border-white/5 rounded-lg text-zinc-300 text-xs font-mono whitespace-nowrap overflow-hidden text-ellipsis">llama3</div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">Base URL</label>
                        <div className="p-3 bg-zinc-900 border border-white/5 rounded-lg text-zinc-300 text-xs font-mono whitespace-nowrap overflow-hidden text-ellipsis">http://127.0.0.1:11434</div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="w-full h-14 bg-primary rounded-xl flex items-center justify-center text-sm font-bold uppercase tracking-tight hover:scale-[1.02] transition-transform cursor-default">
                        Add to Fleet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OpenRouter Section */}
          <section id="openrouter" className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">02</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">OpenRouter (Cloud Hub)</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
              {/* Sidebar/Content on left, Mock on right (swap for OpenRouter) */}
              <div className="order-2 xl:order-1 relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-zinc-900 p-3 border-b border-white/5 flex items-center justify-between">
                    <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Add New Intelligence</div>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                      <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    </div>
                  </div>
                  <div className="p-4 md:p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">Provider</label>
                        <div className="text-sm font-bold text-white">OpenRouter (Cloud)</div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">Friendly Name</label>
                        <div className="p-3 bg-zinc-900 border border-white/5 rounded-lg text-white text-xs font-medium">Qwen3.6 Plus</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">Model Identifier</label>
                        <div className="p-3 bg-zinc-900 border border-primary/20 rounded-lg text-zinc-300 text-xs font-mono whitespace-nowrap overflow-hidden text-ellipsis">qwen/qwen3.6-plus:free</div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">API Key</label>
                        <div className="p-3 bg-zinc-900 border border-white/5 rounded-lg text-white text-xs font-mono tracking-[0.3em]">•••••••••••••</div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="w-full h-14 bg-primary rounded-xl flex items-center justify-center text-sm font-bold uppercase tracking-tight hover:scale-[1.02] transition-transform cursor-default shadow-[0_0_20px_rgba(0,166,126,0.2)]">
                        Add to Fleet
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 xl:order-2 space-y-6 text-zinc-400 text-sm leading-relaxed">
                <p>
                  OpenRouter is the standard for accessing hundreds of cloud models through a single API key. It&apos;s perfect if you don&apos;t want to manage local hardware.
                </p>
                <div className="glass-card p-6 border-white/10 bg-white/[0.02]">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                    How to Setup
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-blue-500 font-black">1.</span>
                      <span>Go to <a href="https://openrouter.ai" target="_blank" className="text-primary hover:underline">openrouter.ai</a> and create an account.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 font-black">2.</span>
                      <span>Generate an API Key in your dashboard.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 font-black">3.</span>
                      <span>Search for a <strong className="text-white">&quot;Free&quot;</strong> model and copy its <strong className="text-white">Model ID</strong>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 font-black">4.</span>
                      <span>Paste the ID and Key into Imposter &mdash; everything is saved locally.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Google Gemini Section */}
          <section id="gemini" className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">03</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Google Gemini (Direct)</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
                <p>
                  Direct integration with Google Gemini via Google AI Studio. This provides the most stable and feature-rich experience for Gemini models without intermediaries.
                </p>
                <div className="glass-card p-6 border-primary/20 bg-primary/5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full animate-pulse" />
                    Verification Flow
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-primary font-black">1.</span>
                      <span>Get your API Key from <a href="https://aistudio.google.com/app/apikey" target="_blank" className="text-primary hover:underline">Google AI Studio</a>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-black">2.</span>
                      <span>Paste the key and click <strong className="text-white">&quot;Verify Models&quot;</strong>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-black">3.</span>
                      <span>Imposter will ping Google's API, verify your key status, and <strong className="text-white">automatically list</strong> every model available for that key.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-black">4.</span>
                      <span>Select your preferred model (e.g., Gemini 2.5 Flash) and save.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Gemini Mock */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 to-blue-500/40 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-zinc-900 p-3 border-b border-white/5 flex items-center justify-between">
                    <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Add New Intelligence</div>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                      <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    </div>
                  </div>
                  <div className="p-4 md:p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">Provider</label>
                        <div className="text-sm font-bold text-white">Google Gemini (Direct)</div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">Friendly Name</label>
                        <div className="p-3 bg-zinc-900 border border-white/5 rounded-lg text-zinc-500 text-xs font-medium">e.g. My Personal Llama</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">Gemini Model</label>
                        <div className="bg-zinc-900 border border-primary/40 rounded-lg overflow-hidden">
                          <div className="px-3 py-2 bg-primary/20 text-white text-xs font-bold border-b border-primary/20">Gemini 2.5 Flash</div>
                          <div className="px-3 py-2 text-zinc-500 text-xs hover:bg-white/5 transition-colors">Gemini 2.5 Flash</div>
                          <div className="px-3 py-2 text-zinc-500 text-xs hover:bg-white/5 transition-colors">Gemma 3 1B</div>
                          <div className="px-3 py-2 text-zinc-500 text-xs hover:bg-white/5 transition-colors">Gemma 3 4B</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600">Google AI Studio Key</label>
                            <span className="text-[9px] text-primary font-bold animate-pulse">Verifying 11/34...</span>
                          </div>
                          <div className="p-3 bg-zinc-900 border border-white/10 rounded-lg text-white text-xs font-mono tracking-widest">•••••••••••••</div>
                        </div>
                        <div className="w-full py-2 bg-zinc-800 border border-white/10 rounded-lg text-[10px] font-bold text-zinc-400 text-center uppercase tracking-widest hover:bg-zinc-700 transition-colors">
                          Verify Models
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="w-full h-14 bg-primary rounded-xl flex items-center justify-center text-sm font-bold uppercase tracking-tight hover:scale-[1.02] transition-all cursor-default">
                        Add to Fleet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting Section */}
          <section id="troubleshooting" className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">?</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Common Issues</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: "Ollama models not showing up?", a: "Ensure the Ollama application is running in your system tray. Click 'Refresh Models' in Imposter Settings." },
                { q: "Gemini verification failed?", a: "Double check your API key for extra spaces. Ensure your region is supported by Google AI Studio." },
                { q: "OpenRouter model returns 404?", a: "Ensure the Model ID is exactly as shown on OpenRouter (e.g. 'anthropic/claude-3-haiku')." },
                { q: "CORS or Network errors?", a: "Imposter handles CORS automatically via the Main process. Check your firewall settings if issues persist." },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/5 bg-zinc-900/50 hover:border-primary/20 transition-all">
                  <div className="text-white font-bold text-sm mb-2 italic tracking-tight">{item.q}</div>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

        </article>
      </div>


    </main>
  );
};

export default ModelProvidersPage;
