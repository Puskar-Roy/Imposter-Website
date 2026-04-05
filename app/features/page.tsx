import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Features - Imposter AI',
  description: 'Complete feature inventory of Imposter — the invisible AI assistant with stealth windows, live transcription, screen OCR, and multi-provider LLM orchestration.',
};

const FeaturesPage = () => {
  const ghUrl = "https://github.com/Puskar-Roy/Imposter";

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-16">

        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-32 h-fit">
          <div className="border-l border-white/10 pl-6 space-y-2 text-sm text-zinc-500">
            <p className="text-zinc-200 font-black mb-5 uppercase tracking-widest text-[10px]">Features</p>
            <a href="#stealth" className="block hover:text-primary transition-colors py-1">Stealth Window</a>
            <a href="#dual-modes" className="block hover:text-primary transition-colors py-1">Dual Modes</a>
            <a href="#ai-chat" className="block hover:text-primary transition-colors py-1">AI Chat Engine</a>
            <a href="#providers" className="block hover:text-primary transition-colors py-1">Multi-Provider AI</a>
            <a href="#models" className="block hover:text-primary transition-colors py-1">Model Management</a>
            <a href="#voice" className="block hover:text-primary transition-colors py-1">Voice & Dynamic Island</a>
            <a href="#ocr" className="block hover:text-primary transition-colors py-1">Screen Snip + OCR</a>
            <a href="#settings" className="block hover:text-primary transition-colors py-1">Settings & Config</a>
            <a href="#shortcuts" className="block hover:text-primary transition-colors py-1">Keyboard Shortcuts</a>
            <a href="#security" className="block hover:text-primary transition-colors py-1">Security & Privacy</a>
            <a href="#stats" className="block hover:text-primary transition-colors py-1">By The Numbers</a>
          </div>
        </aside>

        {/* Content */}
        <article className="max-w-none">

          {/* Header */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-6xl font-black mb-4 teal-gradient-text tracking-tighter uppercase italic -skew-x-6">
              Feature Inventory
            </h1>
            <p className="text-lg text-zinc-400 mb-6 max-w-3xl leading-relaxed">
              Every capability packed into the phantom. From hardware-level screen protection to real-time voice transcription,
              Imposter is engineered for <strong className="text-white">absolute discretion</strong> and <strong className="text-white">maximum productivity</strong>.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">7 Major Features</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-bold">14 Global Shortcuts</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-bold">12 AI Personas</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-bold">23 IPC Channels</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-bold">2 AI Providers</span>
            </div>
            <div className="h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
          </section>

          {/* ═══ 1. STEALTH WINDOW ═══ */}
          <section id="stealth" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">01</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Stealth Window System</h2>
            </div>
            <p className="text-zinc-400 mb-8 text-sm max-w-3xl leading-relaxed">
              The core innovation. A window that&apos;s physically present on your screen but <em>invisible</em> to every recording tool on the planet.
              Not a software hack — this uses OS-level DRM hardware flags.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl hover:border-primary/20 transition-all">
                <div className="text-white font-bold text-sm mb-2">Frameless Ghost Window</div>
                <p className="text-zinc-500 text-xs">No title bars, no borders, no system chrome. The window feels like part of your wallpaper.</p>
              </div>
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl hover:border-primary/20 transition-all">
                <div className="text-white font-bold text-sm mb-2">Dynamic Transparency</div>
                <p className="text-zinc-500 text-xs">90% opacity glassmorphism layer that blends with any background using hardware-accelerated compositing.</p>
              </div>
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl hover:border-primary/20 transition-all">
                <div className="text-white font-bold text-sm mb-2">Always On Top</div>
                <p className="text-zinc-500 text-xs">Pinned at <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[10px]">screen-saver</code> z-level — above fullscreen apps, system dialogs, and everything else.</p>
              </div>
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl hover:border-primary/20 transition-all">
                <div className="text-white font-bold text-sm mb-2">Skip Taskbar</div>
                <p className="text-zinc-500 text-xs">Invisible in the Windows taskbar and Alt+Tab menu. Zero trace in system navigation.</p>
              </div>
              <div className="p-5 border border-primary/20 bg-primary/5 rounded-xl col-span-1 sm:col-span-2">
                <div className="text-primary font-bold text-sm mb-2">Content Shield (Screen Protection)</div>
                <p className="text-zinc-400 text-xs">
                  <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[10px]">setContentProtection(true)</code> — App content is <strong className="text-white">invisible</strong> in screenshots, 
                  screen recordings, and screen-sharing sessions (Zoom, Teams, Discord, OBS). Uses Windows DXGI hardware-level DRM — not a software trick.
                </p>
              </div>
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl hover:border-primary/20 transition-all">
                <div className="text-white font-bold text-sm mb-2">Non-Resizable (Stealth)</div>
                <p className="text-zinc-500 text-xs">Window cannot be accidentally resized in stealth mode. No shadow for a truly invisible floating panel.</p>
              </div>
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl hover:border-primary/20 transition-all">
                <div className="text-white font-bold text-sm mb-2">Single Instance Lock</div>
                <p className="text-zinc-500 text-xs">Prevents multiple copies of the app from running simultaneously. Only one phantom at a time.</p>
              </div>
            </div>
          </section>

          {/* ═══ 2. DUAL MODES ═══ */}
          <section id="dual-modes" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">02</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Dual Application Modes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 border border-primary/20 bg-primary/5">
                <div className="text-primary font-black uppercase tracking-tight text-lg mb-3">Stealth Mode</div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-bold mb-4">Default &bull; Maximum Discretion</p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex gap-2"><span className="text-primary">&rsaquo;</span> Hidden from taskbar</li>
                  <li className="flex gap-2"><span className="text-primary">&rsaquo;</span> Always on top (screen-saver level)</li>
                  <li className="flex gap-2"><span className="text-primary">&rsaquo;</span> Not resizable</li>
                  <li className="flex gap-2"><span className="text-primary">&rsaquo;</span> Content protection ON</li>
                </ul>
              </div>
              <div className="glass-card p-6 border border-white/5 bg-white/5">
                <div className="text-white font-black uppercase tracking-tight text-lg mb-3">Normal Mode</div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-bold mb-4">Configuration &bull; Standard Window</p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex gap-2"><span className="text-zinc-600">&rsaquo;</span> Visible in taskbar</li>
                  <li className="flex gap-2"><span className="text-zinc-600">&rsaquo;</span> Standard controls (Minimize/Close)</li>
                  <li className="flex gap-2"><span className="text-zinc-600">&rsaquo;</span> Resizable</li>
                  <li className="flex gap-2"><span className="text-zinc-600">&rsaquo;</span> Content protection OFF</li>
                </ul>
              </div>
            </div>
            <p className="text-zinc-600 text-xs mt-4 italic">Switch instantly via Settings &rarr; App Settings &rarr; Visibility & Tracking.</p>
          </section>

          {/* ═══ 3. AI CHAT ENGINE ═══ */}
          <section id="ai-chat" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">03</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">AI Chat Engine</h2>
            </div>
            <p className="text-zinc-400 mb-8 text-sm max-w-3xl leading-relaxed">
              Not just a chatbot. A context-aware AI engine that knows your background, targets your job descriptions,
              and adapts its tone with 12 pre-built interview personas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { t: "Multi-Turn Conversation", d: "Full conversation history maintained in-memory and sent with every query for context-aware responses." },
                { t: "System Prompt Injection", d: "A custom 'Systematic Override' prompt is prepended to every LLM query automatically." },
                { t: "Persona Engine (12 Types)", d: "Software Engineer, Frontend, Backend, Full Stack, Mobile, DevOps, ML/AI, QA, System Architect, Engineering Manager, Analyst, PM." },
                { t: "Resume Context Injection", d: "Paste your resume — the AI cites your real background, projects, and experience in answers." },
                { t: "Job Description Targeting", d: "Paste a JD — the AI prioritizes that role's specific technologies and skills." },
                { t: "Full Markdown Rendering", d: "GitHub-Flavored Markdown with syntax-highlighted code blocks, language labels, and one-click copy buttons." },
                { t: "Deep Copy (Ctrl+Shift+C)", d: "Copy the entire raw AI response to clipboard instantly with one shortcut." },
                { t: "Reasoning Trace", d: "For models that support it, a collapsible 'Logic Trace' shows the AI's internal chain-of-thought." },
                { t: "Time-Based Greeting", d: "Personalized welcome: 'Good morning/afternoon/evening, {Name}' based on your local clock." },
              ].map((item, i) => (
                <div key={i} className="p-4 border border-white/5 bg-zinc-900/50 rounded-xl hover:border-primary/20 transition-all">
                  <div className="text-white font-bold text-sm mb-2">{item.t}</div>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 4. MULTI-PROVIDER ═══ */}
          <section id="providers" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">04</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Multi-Provider AI Backend</h2>
            </div>
            <p className="text-zinc-400 mb-8 text-sm max-w-3xl leading-relaxed">
              Run AI completely locally with zero internet, or tap into the most powerful cloud models available.
              Your choice. Your keys. Your data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 border border-primary/20 bg-primary/5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="text-white font-black uppercase text-lg">Ollama (Local)</div>
                </div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-bold mb-3 font-mono">HTTP REST &bull; /api/chat &bull; 127.0.0.1:11434</p>
                <p className="text-zinc-400 text-sm">Zero-latency, 100% private inference. No API key needed. Models auto-detected on boot. Run Llama, Qwen, Mistral, or any model Ollama supports.</p>
              </div>
              <div className="glass-card p-6 border border-white/5 bg-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <div className="text-white font-black uppercase text-lg">OpenRouter (Cloud)</div>
                </div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-bold mb-3 font-mono">HTTPS REST &bull; /api/v1/chat/completions</p>
                <p className="text-zinc-400 text-sm">Access any model in the OpenRouter ecosystem. API key stored locally, never sent to Imposter servers. Supports free-tier models for zero-cost usage.</p>
              </div>
            </div>
          </section>

          {/* ═══ 5. MODEL MANAGEMENT ═══ */}
          <section id="models" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">05</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Model Management System</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { t: "Auto-Scan Local Models", d: "On startup, scans local Ollama instance via /api/tags and populates the model dropdown automatically." },
                { t: "Add Custom Models", d: "Add any model from Ollama (custom URL) or OpenRouter with display label, model ID, API key, and base URL." },
                { t: "Remove Models", d: "One-click delete for any custom model. Changes persist in localStorage under imposter_models." },
                { t: "Status Indicator", d: "Visual dot indicator — green = Models loaded / Ready, red = No models found or Ollama not running." },
                { t: "Persistent Storage", d: "All custom models saved in localStorage. Survives app restarts. No cloud sync needed." },
                { t: "Provider Agnostic", d: "Same UI, same workflow — whether you're running a 7B local model or GPT-4 through OpenRouter." },
              ].map((item, i) => (
                <div key={i} className="p-4 border border-white/5 bg-zinc-900/50 rounded-xl hover:border-primary/20 transition-all">
                  <div className="text-white font-bold text-sm mb-2">{item.t}</div>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 6. VOICE & DYNAMIC ISLAND ═══ */}
          <section id="voice" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">06</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Voice Transcription & Dynamic Island</h2>
            </div>
            <p className="text-zinc-400 mb-8 text-sm max-w-3xl leading-relaxed">
              Capture every word spoken on your system in real-time. The Dynamic Island — inspired by Apple&apos;s design — floats
              as a draggable pill overlay showing live transcription and AI responses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-primary/20 bg-primary/5 rounded-xl sm:col-span-2">
                <div className="text-primary font-bold text-sm mb-2">Real-Time System Audio Transcription</div>
                <p className="text-zinc-400 text-xs">
                  Captures desktop audio (what your speakers output) via <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[10px]">getDisplayMedia</code>,
                  processes through a custom AudioWorklet (100ms PCM buffer at 16kHz), and streams to AssemblyAI V3 via WebSocket.
                </p>
              </div>
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                <div className="text-white font-bold text-sm mb-2">Dynamic Island: Mic Mode</div>
                <p className="text-zinc-500 text-xs">Pulsing green mic icon + live transcription text. Partial results appear faded, final results in bold green.</p>
              </div>
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                <div className="text-white font-bold text-sm mb-2">Dynamic Island: AI Mode</div>
                <p className="text-zinc-500 text-xs">Pulsing blue brain icon + AI response text in bold blue. Shows when AI processes a voice query.</p>
              </div>
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                <div className="text-white font-bold text-sm mb-2">F10: Voice-to-AI Pipeline</div>
                <p className="text-zinc-500 text-xs">One keystroke: grab last finalized transcript, auto-fill prompt, trigger AI query, display response in Island. End-to-end voice-to-answer.</p>
              </div>
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                <div className="text-white font-bold text-sm mb-2">Connection Test</div>
                <p className="text-zinc-500 text-xs">Settings panel includes a &quot;Test Connection&quot; button to validate your AssemblyAI API key before use.</p>
              </div>
            </div>
          </section>

          {/* ═══ 7. SCREEN SNIP + OCR ═══ */}
          <section id="ocr" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">07</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Screen Snip + OCR</h2>
            </div>
            <p className="text-zinc-400 mb-8 text-sm max-w-3xl leading-relaxed">
              See text on screen you can&apos;t copy? Snip it. Imposter extracts text from any window using local OCR — no data leaves your machine.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { t: "Full-Screen Snipping Tool", d: "Press Ctrl+Shift+S — a transparent fullscreen overlay appears over your entire desktop." },
                { t: "Click-and-Drag Selection", d: "Draw a rectangle over any area to capture it. Precise pixel-level selection." },
                { t: "Local OCR (Tesseract.js)", d: "Captured region processed by Tesseract.js locally. English language model bundled (~5MB)." },
                { t: "Auto-Fill Prompt", d: "Extracted text automatically appended to the AI prompt input. Ready to query with one Enter." },
                { t: "Cancel with Escape", d: "Press Escape to cancel the snip and dismiss the overlay instantly." },
                { t: "Content Protected", d: "The snip overlay itself is also content-protected. Even the snipping tool is invisible to recordings." },
              ].map((item, i) => (
                <div key={i} className="p-4 border border-white/5 bg-zinc-900/50 rounded-xl hover:border-primary/20 transition-all">
                  <div className="text-white font-bold text-sm mb-2">{item.t}</div>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 8. SETTINGS ═══ */}
          <section id="settings" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">08</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Settings & Configuration</h2>
            </div>
            <p className="text-zinc-400 mb-8 text-sm max-w-3xl">
              A split-pane settings modal with sidebar navigation and 7 configurable tabs. Every setting persists locally.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { t: "Profile", d: "Display name for personalized greetings." },
                { t: "AI Engine", d: "System prompt, persona selection (12 types), resume context, and job description targeting." },
                { t: "Models", d: "Add/remove custom models, configure providers, set API keys and base URLs." },
                { t: "App Settings", d: "Toggle between Stealth Mode and Normal Mode." },
                { t: "Voice & AI", d: "AssemblyAI API key configuration with live connection test." },
                { t: "Shortcuts", d: "Full read-only reference of all 14 global + 4 in-app keyboard shortcuts." },
              ].map((item, i) => (
                <div key={i} className="p-4 border border-white/5 bg-zinc-900/50 rounded-xl">
                  <div className="text-white font-bold text-sm mb-1">{item.t}</div>
                  <p className="text-zinc-500 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 9. SHORTCUTS ═══ */}
          <section id="shortcuts" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">09</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Keyboard Shortcuts</h2>
            </div>
            <p className="text-zinc-400 mb-6 text-sm">Every action at your fingertips. Global shortcuts work from anywhere on the system — even when Imposter isn&apos;t focused.</p>
            
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
                <tbody className="text-zinc-500 text-xs">
                  {[
                    ["Ctrl+Shift+I", "Focus Input — Jump to AI prompt", "Navigation"],
                    ["Ctrl+Shift+Enter", "Stealth Search — Trigger AI query from anywhere", "AI"],
                    ["Ctrl+Shift+C", "Deep Copy — Copy raw AI response to clipboard", "Clipboard"],
                    ["Ctrl+Shift+Q", "Emergency Exit — Quit instantly", "System"],
                    ["Ctrl+Shift+D", "Debug Override — Toggle DevTools", "Debug"],
                    ["Ctrl+Shift+S", "Screen Snip — Launch OCR tool", "OCR"],
                    ["Ctrl+Shift+B", "Toggle Voice Recording + Dynamic Island", "Voice"],
                    ["F10", "Voice-to-AI — Grab transcript and ask AI", "Voice + AI"],
                    ["Ctrl+Arrow Keys", "Move Window — Nudge by 10px", "Window"],
                    ["Ctrl+= / Ctrl+-", "Resize — Grow/shrink by 50px", "Window"],
                  ].map(([shortcut, action, category], i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-3 pr-6"><kbd className="px-2 py-0.5 bg-zinc-800 rounded border border-white/10 font-mono text-primary/80">{shortcut}</kbd></td>
                      <td className="py-3 pr-6 text-zinc-400">{action}</td>
                      <td className="py-3 text-zinc-600 uppercase text-[10px] tracking-wider font-bold">{category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">In-App Shortcuts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["Enter", "Send prompt"],
                ["Shift+Enter", "New line in prompt (does not send)"],
                ["Escape", "Close settings/onboarding overlays"],
                ["Escape (in Snip)", "Cancel active snip"],
              ].map(([key, desc], i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg border border-white/5">
                  <kbd className="px-2 py-0.5 bg-zinc-800 rounded border border-white/10 font-mono text-primary/80 text-xs shrink-0">{key}</kbd>
                  <span className="text-zinc-500 text-xs">{desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 10. SECURITY ═══ */}
          <section id="security" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">10</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Security & Privacy</h2>
            </div>
            <p className="text-zinc-400 mb-8 text-sm max-w-3xl">
              Privacy isn&apos;t a feature — it&apos;s the foundation. Every design choice ensures your data stays on your machine.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: "100% Local Data", d: "All config (name, system prompt, resume, JD, API keys) stored in browser localStorage. Nothing leaves the machine.", accent: true },
                { t: "Context Isolation", d: "contextIsolation: true, nodeIntegration: false — renderer has zero access to Node.js APIs.", accent: true },
                { t: "Content Security Policy", d: "Strict CSP headers whitelist only self, specific CDNs, local Ollama, openrouter.ai, and assemblyai.com.", accent: false },
                { t: "Secure IPC Bridge", d: "All Main ↔ Renderer communication goes through curated contextBridge API with hard-coded channels.", accent: false },
                { t: "No GPU Cache", d: "--disable-gpu-cache flag prevents GPU data persistence between sessions.", accent: false },
                { t: "Single Instance Lock", d: "Prevents duplicate app processes. Only one phantom runs at a time.", accent: false },
              ].map((item, i) => (
                <div key={i} className={`p-5 rounded-xl ${item.accent ? 'border border-primary/20 bg-primary/5' : 'border border-white/5 bg-zinc-900/50'}`}>
                  <div className={`font-bold text-sm mb-2 ${item.accent ? 'text-primary' : 'text-zinc-300'}`}>{item.t}</div>
                  <p className="text-zinc-500 text-xs">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ STATS ═══ */}
          <section id="stats" className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">#</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">By The Numbers</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { n: "7", l: "Major Features" },
                { n: "14", l: "Global Shortcuts" },
                { n: "12", l: "AI Personas" },
                { n: "23", l: "IPC Channels" },
                { n: "2", l: "AI Providers" },
                { n: "3", l: "Window Types" },
                { n: "7", l: "Settings Tabs" },
                { n: "11", l: "Config Fields" },
                { n: "7", l: "Dependencies" },
                { n: "0", l: "Cloud Storage" },
              ].map((stat, i) => (
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
      <div className="bg-zinc-900/50 py-12 border-t border-white/5 text-center px-6">
        <p className="text-zinc-500 mb-6 text-sm italic uppercase tracking-widest font-black">Ready to Disappear?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"https://github.com/Puskar-Roy/Imposter/releases"} className="btn-premium px-8 py-3 italic uppercase font-black tracking-tighter">
            Download for Windows
          </Link>
          <Link href={ghUrl} className="px-8 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all italic uppercase font-black tracking-tighter text-sm flex items-center justify-center">
            View Source
          </Link>
        </div>
      </div>
    </main>
  );
};

export default FeaturesPage;
