import React from 'react';
import Navbar from '../components/Navbar';
import { upcomingData } from './upcoming-data';
import Link from 'next/link';

export const metadata = {
  title: 'Upcoming - Imposter AI',
  description: 'Future roadmap for the ultimate stealth toolkit — Boss Key, UI Camouflage, and Real-time Mobile Sync.',
};

const UpcomingPage = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-black mb-8 tracking-widest uppercase italic animate-pulse">
            Upcoming Features
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 teal-gradient-text tracking-tighter uppercase italic -skew-x-6">
            The Master Move
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed italic border-l-2 border-primary/20 pl-6">
            We&apos;re not just hiding the window. We&apos;re <span className="text-white">changing the reality </span> of what&apos;s on your screen.
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-32">
          {upcomingData.map((feature, index) => (
            <section key={feature.id} id={feature.id} className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Text Content */}
                <div className="space-y-8 animate-fade-up">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-black text-white/10 italic -skew-x-12">0{index + 1}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                    {feature.title}
                  </h2>
                  <p className="text-primary font-bold tracking-wide uppercase text-sm">
                    {feature.tagline}
                  </p>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    {feature.marketingPoints.map((point, i) => (
                      <div key={i} className="p-5 border border-white/5 bg-zinc-900/50 rounded-2xl hover:border-primary/20 transition-all group">
                        <div className="text-white font-bold mb-2 group-hover:text-primary transition-colors">{point.t}</div>
                        <p className="text-zinc-500 text-sm leading-relaxed">{point.d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Representation (Styled UI Boxes) */}
                <div className="lg:sticky lg:top-40">
                  {feature.id === 'boss-key' && (
                    <div className="glass-card overflow-hidden border-primary/20 shadow-2xl shadow-primary/5">
                      <div className="bg-zinc-100 p-4 border-b border-zinc-300 flex items-center justify-between">
                        <div className="flex gap-4 text-[10px] text-zinc-500 font-sans uppercase font-bold tracking-tighter">
                          <span>File</span>
                          <span>Edit</span>
                          <span>Format</span>
                          <span>View</span>
                          <span>Help</span>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 bg-zinc-300 rounded-sm" />
                          <div className="w-3 h-3 bg-zinc-300 rounded-sm" />
                          <div className="w-3 h-3 bg-zinc-300 rounded-sm" />
                        </div>
                      </div>
                      <div className="bg-white h-[400px] p-8 font-mono text-zinc-400 flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="animate-pulse"># Project Requirements - Meeting Agenda</div>
                          <div className="animate-pulse delay-75">1. Finalize the backend architecture for the dashboard...</div>
                          <div className="animate-pulse delay-150">2. Review the API documentation for the new endpoint...</div>
                        </div>
                        <div className="text-[10px] text-zinc-100 select-none cursor-default">
                          [Subtle Suggestion: Use a modular pattern for the React components to ensure scalability...]
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                    </div>
                  )}

                  {feature.id === 'double-display' && (
                    <div className="space-y-4">
                      {feature.workflow?.map((step) => (
                        <div key={step.step} className="flex gap-6 p-6 rounded-2xl border border-white/5 bg-zinc-900/10 hover:bg-zinc-900/30 transition-all group">
                          <div className="text-2xl font-black text-primary/40 group-hover:text-primary transition-colors italic">{step.step}</div>
                          <div>
                            <div className="text-white font-bold mb-1 uppercase tracking-tight">{step.label}</div>
                            <p className="text-zinc-500 text-sm">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {feature.id === 'model-compare' && (
                    <div className="space-y-6 animate-fade-up">
                      <div className="glass-card overflow-hidden border-primary/20 shadow-2xl relative group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <img 
                          src="/images/model-compare-real.png" 
                          alt="Imposter Multi-Model Compare Real UI" 
                          className="w-full h-auto rounded-xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-primary italic">
                          Real UI Preview
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 text-center">
                           <div className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter mb-1">Local Analysis</div>
                           <div className="text-xs font-bold text-white italic">Ollama Llama-3</div>
                        </div>
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-center">
                           <div className="text-[10px] font-black text-primary uppercase tracking-tighter mb-1">Reasoning Core</div>
                           <div className="text-xs font-bold text-white italic">Gemini 1.5 Pro</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </section>
          ))}
        </div>


      </div>
    </main>
  );
};

export default UpcomingPage;
