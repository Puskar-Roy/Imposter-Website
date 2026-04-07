import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { featuresData } from './features-data';

export const metadata = {
  title: 'Features - Imposter AI',
  description: 'Complete feature inventory of Imposter — the invisible AI assistant with stealth windows, live transcription, screen OCR, and multi-provider LLM orchestration.',
};

const FeaturesPage = () => {
  const ghUrl = "https://github.com/Puskar-Roy/Imposter";
  const { sidebarLinks, header, sections, shortcuts, security, byTheNumbers } = featuresData;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-16">

        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-32 h-fit">
          <div className="border-l border-white/10 pl-6 space-y-2 text-sm text-zinc-500">
            <p className="text-zinc-200 font-black mb-5 uppercase tracking-widest text-[10px]">Features</p>
            {sidebarLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="block hover:text-primary transition-colors py-1">
                {link.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Content */}
        <article className="max-w-none">

          {/* Header */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-6xl font-black mb-4 teal-gradient-text tracking-tighter uppercase italic -skew-x-6">
              {header.title}
            </h1>
            <p className="text-lg text-zinc-400 mb-6 max-w-3xl leading-relaxed">
              {header.description.replace(/phantom/, 'assistant')}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {header.stats.map((stat, i) => (
                <span key={i} className={`px-3 py-1 rounded-full border text-xs font-bold ${i === 0 ? "bg-primary/10 border-primary/20 text-primary" : "bg-zinc-800 border-white/5 text-zinc-400"}`}>
                  {stat.n} {stat.l}
                </span>
              ))}
            </div>
            <div className="h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
          </section>

          {/* Feature Sections */}
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">{section.index}</span>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">{section.title}</h2>
              </div>
              <p className="text-zinc-400 mb-8 text-sm max-w-3xl leading-relaxed">
                {section.description}
              </p>

              <div className={
                section.gridType === 'dual' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 
                section.gridType === 'grid-3' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 
                'grid grid-cols-1 sm:grid-cols-2 gap-4'
              }>
                {section.items.map((item, i) => (
                  <div key={i} className={`p-5 rounded-xl transition-all ${
                    item.accent ? 'border border-primary/20 bg-primary/5' : 
                    'border border-white/5 bg-zinc-900/50 hover:border-primary/20'
                  } ${section.gridType === 'default' && item.accent ? 'sm:col-span-2' : ''}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`font-bold text-sm ${item.accent ? 'text-primary' : 'text-white'}`}>{item.t}</div>
                      {item.isNew && (
                        <span className="px-1.5 py-0.5 rounded bg-primary text-[8px] font-black text-black uppercase tracking-tighter leading-none animate-pulse">
                          New
                        </span>
                      )}
                    </div>
                    <p className={`text-xs ${item.accent ? 'text-zinc-400' : 'text-zinc-500'} leading-relaxed`}>{item.d}</p>
                  </div>
                ))}
              </div>
              {section.footerNote && (
                <p className="text-zinc-600 text-xs mt-4 italic">{section.footerNote}</p>
              )}
            </section>
          ))}

          {/* Keyboard Shortcuts */}
          <section id="shortcuts" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">09</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Keyboard Shortcuts</h2>
            </div>
            <p className="text-zinc-400 mb-6 text-sm">Every action at your fingertips. Global shortcuts work from anywhere on the system.</p>
            
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Global Shortcuts</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-400 uppercase text-[11px] tracking-wider">
                    <th className="pb-3 pr-6">Shortcut</th>
                    <th className="pb-3 pr-6">Action</th>
                    <th className="pb-3">Category</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-500 text-xs text-shadow-glow">
                  {shortcuts.global.map((s, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 pr-6"><kbd className="px-2 py-0.5 bg-zinc-800 rounded border border-white/10 font-mono text-primary/80">{s.key}</kbd></td>
                      <td className="py-3 pr-6 text-zinc-400">{s.action}</td>
                      <td className="py-3 text-zinc-600 uppercase text-[10px] tracking-wider font-bold">{s.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">In-App Shortcuts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {shortcuts.inApp.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg border border-white/5">
                  <kbd className="px-2 py-0.5 bg-zinc-800 rounded border border-white/10 font-mono text-primary/80 text-xs shrink-0">{s.key}</kbd>
                  <span className="text-zinc-500 text-xs">{s.action}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Security & Privacy */}
          <section id="security" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">10</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Security & Privacy</h2>
            </div>
            <p className="text-zinc-400 mb-8 text-sm max-w-3xl">Privacy isn&apos;t a feature — it&apos;s the foundation.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {security.map((item, i) => (
                <div key={i} className={`p-5 rounded-xl ${item.accent ? 'border border-primary/20 bg-primary/5' : 'border border-white/5 bg-zinc-900/50'}`}>
                  <div className={`font-bold text-sm mb-2 ${item.accent ? 'text-primary' : 'text-zinc-300'}`}>{item.t}</div>
                  <p className="text-zinc-500 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Grid */}
          <section id="stats" className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">#</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">By The Numbers</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {byTheNumbers.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-primary/20 transition-all">
                  <div className="text-primary font-black text-3xl mb-1">{stat.n}</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">{stat.l}</div>
                </div>
              ))}
            </div>
          </section>

        </article>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900/50 py-12 border-t border-white/5 text-center px-6">
        <p className="text-zinc-500 mb-6 text-sm italic uppercase tracking-widest font-black text-shadow-glow">Ready to Disappear?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://github.com/Puskar-Roy/Imposter/releases" target="_blank" className="btn-premium px-8 py-3 italic uppercase font-black tracking-tighter">Download</Link>
          <Link href={ghUrl} target="_blank" className="px-8 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all italic uppercase font-black tracking-tighter text-sm">View Source</Link>
        </div>
      </footer>
    </main>
  );
};

export default FeaturesPage;
