import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { architectureData } from './architecture-data';

export const metadata = {
  title: 'Architecture - Imposter AI',
  description: 'Comprehensive architectural breakdown and developer guide for the Imposter stealth AI assistant. Electron multi-process model, IPC design, and feature deep-dives.',
};

const ArchitecturePage = () => {
  const ghUrl = "https://github.com/Puskar-Roy/Imposter";
  const { sidebarLinks, hero, whyElectron, processModels, ipcPatterns, featureDeepDives, windowLifecycle, securityModel, challenges } = architectureData;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-16">

        {/* ─── SIDEBAR ─── */}
        <aside className="hidden lg:block sticky top-32 h-fit">
          <div className="border-l border-white/10 pl-6 space-y-2 text-sm text-zinc-500">
            <p className="text-zinc-200 font-black mb-5 uppercase tracking-widest text-[10px]">On This Page</p>
            {sidebarLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`block hover:text-primary transition-colors py-1 ${
                  link.isSectionHeader ? "font-medium text-zinc-300" : link.isSublink ? "pl-3 text-xs" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </aside>

        {/* ─── CONTENT ─── */}
        <article className="max-w-none">

          {/* ════════════════ HEADER ════════════════ */}
          <section id="overview" className="mb-20">
            <h1 className="text-4xl md:text-6xl font-black mb-4 teal-gradient-text tracking-tighter uppercase italic -skew-x-6">
              {hero.title}
            </h1>
            <p className="text-lg text-zinc-400 mb-6 max-w-3xl leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {hero.tags.map((tag, idx) => (
                <span key={idx} className={`px-3 py-1 rounded-full border text-xs font-bold ${idx === 0 ? "bg-primary/10 border-primary/20 text-primary" : "bg-zinc-800 border-white/5 text-zinc-400"}`}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
          </section>

          {/* ════════════════ WHY ELECTRON ════════════════ */}
          <section id="why-electron" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight italic">Why Electron?</h2>
            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 md:p-8 text-zinc-400 text-sm leading-relaxed space-y-4">
              {whyElectron.content.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/two worlds/, '<strong class="text-white">two worlds</strong>').replace(/complete OS control/, '<em> complete OS control</em>') }} />
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {whyElectron.stats.map((stat, i) => (
                  <div key={i} className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="text-primary font-black text-xl mb-1">{stat.value}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════ PROCESS MODEL ════════════════ */}
          <section id="process-model" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight italic">
              1. The Multi-Process Model
            </h2>
            <p className="text-zinc-500 mb-10 text-sm max-w-3xl">
              Electron uses a multi-process architecture modeled after Chromium. Each process is isolated — a crash in
              one renderer doesn&apos;t take down the main process or other windows. Understanding this separation is key.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processModels.map((model) => (
                <div key={model.id} id={model.id} className="glass-card p-6 border border-white/5 bg-white/5 hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-black group-hover:bg-primary/20 transition-all">{model.iconText}</div>
                    <h3 className="font-black uppercase tracking-tight italic text-white">{model.title}</h3>
                  </div>
                  <p className="text-[11px] text-zinc-600 uppercase tracking-widest font-bold mb-3 italic font-mono">{model.subtitle}</p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    {model.items.map((item, i) => {
                      const [label, ...descArr] = item.split(" — ");
                      const desc = descArr.join(" — ");
                      return (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary font-bold shrink-0">&rsaquo;</span>
                          <span>
                            <strong className="text-zinc-200">{label.replace(/\*\*/g, '')}</strong>
                            {desc && ` — ${desc}`}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════ ARCHITECTURE DIAGRAM ════════════════ */}
          <section id="diagram" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight italic">Architecture Diagram</h2>
            <div className="glass-card p-1 bg-gradient-to-br from-primary/10 to-transparent">
              <div className="bg-black/90 p-4 sm:p-8 rounded-2xl border border-white/5 flex justify-center">
                <Image src="/images/architecture-color.png" alt="Architecture Diagram" width={720} height={540} className="rounded-xl w-full max-w-4xl" priority />
              </div>
            </div>
          </section>

          {/* ════════════════ IPC PATTERNS ════════════════ */}
          <section id="ipc-patterns" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight italic">IPC Communication Patterns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ipcPatterns.map((pattern, i) => (
                <div key={i} className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                  <div className="text-primary font-mono font-black text-[11px] mb-3 uppercase tracking-wider flex items-center gap-2">
                    <span className={`w-2 h-2 ${pattern.color} rounded-full`} />
                    {pattern.title}
                  </div>
                  <p className="text-zinc-500 text-sm mb-3">Mechanism: <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">{pattern.mechanism}</code></p>
                  <p className="text-zinc-600 text-xs italic">Used for: {pattern.examples}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════ FEATURE DEEP-DIVES ════════════════ */}
          <section id="features" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-10 uppercase tracking-tight italic">2. Feature Deep-Dives</h2>
            {featureDeepDives.map((dive) => (
              <div key={dive.id} id={dive.id} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">{dive.index}</span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight italic">{dive.title}</h3>
                </div>
                <p className="text-zinc-400 mb-6 text-sm border-l-2 border-primary/30 pl-4 italic">{dive.goal}</p>
                <div className={`space-y-5 ${dive.type === 'grid' ? "bg-zinc-900/50 rounded-xl p-6 border border-white/5" : ""}`}>
                  {dive.steps.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className={`shrink-0 w-8 h-8 rounded border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs ${dive.type === 'grid' ? "bg-zinc-800" : "bg-zinc-900"}`}>{i+1}</div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                        <p className="text-zinc-500 text-sm">{step.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {dive.tip && (
                  <div className="mt-6 p-4 border border-primary/20 bg-primary/5 rounded-lg text-sm text-zinc-400">
                    <strong className="text-primary">Dev Tip:</strong> {dive.tip}
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* ════════════════ WINDOW LIFECYCLE ════════════════ */}
          <section id="window-lifecycle" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight italic">3. Window Lifecycle Management</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-400 uppercase text-[11px] tracking-wider">
                    <th className="pb-3 pr-6">Window</th>
                    <th className="pb-3 pr-6">Created</th>
                    <th className="pb-3 pr-6">Lifetime</th>
                    <th className="pb-3 pr-6 text-center">DRM</th>
                    <th className="pb-3 text-right">Z-Order</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-500 font-mono text-xs">
                  {windowLifecycle.map((win, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-3 pr-6 text-white font-bold font-sans text-sm">{win.name}</td>
                      <td className="py-3 pr-6">{win.created}</td>
                      <td className="py-3 pr-6">{win.lifetime}</td>
                      <td className={`py-3 pr-6 text-center ${win.protection ? 'text-primary' : 'text-zinc-600'}`}>{win.protection ? 'YES' : 'NO'}</td>
                      <td className="py-3 text-primary text-right">{win.alwaysOnTop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════ SECURITY MODEL ════════════════ */}
          <section id="security" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight italic">4. Security Model</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityModel.map((item, i) => (
                <div key={i} className={`p-5 rounded-xl border ${item.isHighlight ? "border-primary/20 bg-primary/5" : "border-zinc-800 bg-zinc-900/50"}`}>
                  <div className={`font-bold mb-2 italic uppercase tracking-tighter ${item.isHighlight ? "text-primary" : "text-zinc-300"}`}>{item.title}</div>
                  <p className="text-xs text-zinc-500">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════ PROBLEMS & SOLUTIONS ════════════════ */}
          <section id="problems" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight italic">5. Challenges & Solutions</h2>
            <div className="space-y-4">
              {challenges.map((item, i) => (
                <details key={i} className="group glass-card overflow-hidden border border-white/5">
                  <summary className="p-6 cursor-pointer font-bold flex justify-between items-center hover:bg-white/5 transition-all text-sm">
                    <span>{item.question}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform shrink-0 ml-4">&#9660;</span>
                  </summary>
                  <div className="p-6 pt-4 text-zinc-400 text-sm border-t border-white/5 bg-black/40">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ════════════════ CONTRIBUTING ════════════════ */}
          <section id="contributing" className="mb-12">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight italic">6. Contributing</h2>
            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 md:p-8 text-sm text-zinc-400 space-y-4">
              <p>Imposter is open source. Here&apos;s how to get started:</p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-zinc-300 border border-white/5 overflow-x-auto">
                <div className="text-zinc-600 mb-1"># Clone and install</div>
                <div>git clone {ghUrl}.git</div>
                <div>npm install && npm run dev</div>
              </div>
            </div>
          </section>

        </article>
      </div>


    </main>
  );
};

export default ArchitecturePage;
