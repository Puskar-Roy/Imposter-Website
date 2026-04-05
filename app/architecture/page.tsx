import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Architecture - Imposter AI',
  description: 'Comprehensive architectural breakdown and developer guide for the Imposter stealth AI assistant. Electron multi-process model, IPC design, and feature deep-dives.',
};

const ArchitecturePage = () => {
  const ghUrl = "https://github.com/Puskar-Roy/Imposter";

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-16">

        {/* ─── SIDEBAR ─── */}
        <aside className="hidden lg:block sticky top-32 h-fit">
          <div className="border-l border-white/10 pl-6 space-y-2 text-sm text-zinc-500">
            <p className="text-zinc-200 font-black mb-5 uppercase tracking-widest text-[10px]">On This Page</p>
            <a href="#overview" className="block hover:text-primary transition-colors py-1">Overview</a>
            <a href="#why-electron" className="block hover:text-primary transition-colors py-1">Why Electron?</a>
            <a href="#process-model" className="block hover:text-primary transition-colors py-1 font-medium text-zinc-300">Process Model</a>
            <a href="#main-process" className="block hover:text-primary transition-colors py-1 pl-3 text-xs">Main Process</a>
            <a href="#renderer-process" className="block hover:text-primary transition-colors py-1 pl-3 text-xs">Renderer Process</a>
            <a href="#bridge" className="block hover:text-primary transition-colors py-1 pl-3 text-xs">The Bridge</a>
            <a href="#diagram" className="block hover:text-primary transition-colors py-1 font-medium text-zinc-300">Architecture Diagram</a>
            <a href="#ipc-patterns" className="block hover:text-primary transition-colors py-1 font-medium text-zinc-300">IPC Patterns</a>
            <a href="#features" className="block hover:text-primary transition-colors py-1 font-medium text-zinc-300">Feature Deep-Dives</a>
            <a href="#stealth" className="block hover:text-primary transition-colors py-1 pl-3 text-xs">Stealth Mode</a>
            <a href="#ocr" className="block hover:text-primary transition-colors py-1 pl-3 text-xs">Screen Snip & OCR</a>
            <a href="#voice" className="block hover:text-primary transition-colors py-1 pl-3 text-xs">Voice Transcription</a>
            <a href="#ai-orchestration" className="block hover:text-primary transition-colors py-1 pl-3 text-xs">AI Orchestration</a>
            <a href="#window-lifecycle" className="block hover:text-primary transition-colors py-1 font-medium text-zinc-300">Window Lifecycle</a>
            <a href="#security" className="block hover:text-primary transition-colors py-1 font-medium text-zinc-300">Security Model</a>
            <a href="#problems" className="block hover:text-primary transition-colors py-1 font-medium text-zinc-300">Problems & Solutions</a>
            <a href="#contributing" className="block hover:text-primary transition-colors py-1 font-medium text-zinc-300">Contributing</a>
          </div>
        </aside>

        {/* ─── CONTENT ─── */}
        <article className="max-w-none">

          {/* ════════════════ HEADER ════════════════ */}
          <section id="overview" className="mb-20">
            <h1 className="text-4xl md:text-6xl font-black mb-4 teal-gradient-text tracking-tighter uppercase italic -skew-x-6">
              Architecture Guide
            </h1>
            <p className="text-lg text-zinc-400 mb-6 max-w-3xl leading-relaxed">
              A comprehensive, developer-friendly breakdown of the Imposter desktop application.
              This document explains how every core feature operates under the hood, the major
              technical challenges faced during development, and solutions that may help you build similar systems.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">Electron 33+</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-bold">Node.js 20+</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-bold">Chromium Renderer</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-bold">Context Isolation</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-bold">AssemblyAI V3</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-bold">Tesseract.js</span>
            </div>
            <div className="h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
          </section>

          {/* ════════════════ WHY ELECTRON ════════════════ */}
          <section id="why-electron" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight italic">Why Electron?</h2>
            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 md:p-8 text-zinc-400 text-sm leading-relaxed space-y-4">
              <p>
                A regular web app can&apos;t do what Imposter does. Browsers sandbox JavaScript — they block access to OS-level APIs,
                enforce CORS on every HTTP request, and have no mechanism for content protection or global keyboard shortcuts.
              </p>
              <p>
                Electron gives us <strong className="text-white">two worlds</strong>: a full Node.js runtime (Main Process) for OS-level operations,
                and a Chromium browser (Renderer Process) for a rich UI. The cost is the ~150MB binary size, but the benefit is
                <em> complete OS control</em> with a web-tech UI — exactly what a stealth overlay application needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="text-primary font-black text-xl mb-1">0ms</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">CORS Overhead</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="text-primary font-black text-xl mb-1">3</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Renderer Windows</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="text-primary font-black text-xl mb-1">100%</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Local Data Storage</div>
                </div>
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
              one renderer doesn&apos;t take down the main process or other windows. Understanding this separation is key
              to understanding every feature in Imposter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Main Process */}
              <div id="main-process" className="glass-card p-6 border border-white/5 bg-white/5 hover:border-primary/30 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-black group-hover:bg-primary/20 transition-all">M</div>
                  <h3 className="font-black uppercase tracking-tight italic text-white">Main Process</h3>
                </div>
                <p className="text-[11px] text-zinc-600 uppercase tracking-widest font-bold mb-3 italic font-mono">src/main/ &bull; Node.js Runtime</p>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span><strong className="text-zinc-200">Window Management</strong> &mdash; Creating and destroying the transparent glass windows (Main Chat, Snipper overlay, Dynamic Island). Each is a separate <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">BrowserWindow</code> instance.</span></li>
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span><strong className="text-zinc-200">Global Shortcuts</strong> &mdash; Registering system-wide keyboard shortcuts via <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">globalShortcut.register()</code>. These fire even when Imposter is not focused.</span></li>
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span><strong className="text-zinc-200">Network I/O</strong> &mdash; All external HTTP and WebSocket traffic (Ollama, OpenRouter, AssemblyAI) flows through Main to bypass browser CORS.</span></li>
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span><strong className="text-zinc-200">OCR Engine</strong> &mdash; Runs <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">tesseract.js</code> in-process for pixel-to-text extraction.</span></li>
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span><strong className="text-zinc-200">Lifecycle</strong> &mdash; App bootstrap, graceful shutdown, and crash recovery.</span></li>
                </ul>
              </div>

              {/* Renderer Process */}
              <div id="renderer-process" className="glass-card p-6 border border-white/5 bg-white/5 hover:border-primary/30 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-black group-hover:bg-primary/20 transition-all">R</div>
                  <h3 className="font-black uppercase tracking-tight italic text-white">Renderer Process</h3>
                </div>
                <p className="text-[11px] text-zinc-600 uppercase tracking-widest font-bold mb-3 italic font-mono">src/renderer/ &bull; Chromium Sandbox</p>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span><strong className="text-zinc-200">Chat Interface</strong> &mdash; Main window. Markdown rendering (GFM), syntax-highlighted code blocks, conversation history, settings panel.</span></li>
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span><strong className="text-zinc-200">Dynamic Island</strong> &mdash; A tiny pill-shaped overlay window for real-time transcription text. Separate renderer, separate lifecycle.</span></li>
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span><strong className="text-zinc-200">Snipper Window</strong> &mdash; Temporary fullscreen transparent overlay for region selection. Spawned on-demand, destroyed after crop.</span></li>
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span><strong className="text-zinc-200">Audio Worklets</strong> &mdash; Custom <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">AudioWorkletProcessor</code> for slicing raw PCM audio into 100ms buffered chunks.</span></li>
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span><strong className="text-zinc-200">Local Storage</strong> &mdash; Personas, resume, job description, and API keys are stored client-side. Never sent to any server.</span></li>
                </ul>
              </div>

              {/* Bridge */}
              <div id="bridge" className="glass-card p-6 border border-white/5 bg-white/5 hover:border-primary/30 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-black group-hover:bg-primary/20 transition-all">B</div>
                  <h3 className="font-black uppercase tracking-tight italic text-white">The Bridge</h3>
                </div>
                <p className="text-[11px] text-zinc-600 uppercase tracking-widest font-bold mb-3 italic font-mono">preload.js &bull; Context Isolation</p>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span>The Renderer <em>cannot</em> import Node modules directly — <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">contextIsolation: true</code> enforces this boundary.</span></li>
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span><code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">preload.js</code> uses <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">contextBridge.exposeInMainWorld()</code> to inject a safe <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">window.electronAPI</code> object.</span></li>
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span>Each method maps to a specific <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">ipcRenderer.invoke()</code> or <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">ipcRenderer.on()</code> channel.</span></li>
                  <li className="flex gap-2"><span className="text-primary font-bold shrink-0">&rsaquo;</span> <span>Channels are <strong className="text-zinc-200">hard-coded</strong> — the UI cannot call arbitrary IPC channels. This prevents prototype pollution attacks.</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* ════════════════ ARCHITECTURE DIAGRAM ════════════════ */}
          <section id="diagram" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight italic">
              Architecture Diagram
            </h2>
            <div className="glass-card p-1 bg-gradient-to-br from-primary/10 to-transparent">
              <div className="bg-black/90 p-4 sm:p-8 rounded-2xl border border-white/5 flex justify-center">
                <Image
                  src="/images/architecture-color.png"
                  alt="Imposter Architecture Diagram - OS layer, Main Process modules, Preload Bridge, Renderer windows, and External services"
                  width={720}
                  height={540}
                  className="rounded-xl w-full max-w-4xl"
                  priority
                />
              </div>
            </div>
            <p className="text-zinc-600 text-xs mt-4 italic text-center max-w-2xl mx-auto">
              Data flows downward from OS-level triggers through the Main Process, across the Preload bridge into Renderer UIs.
              External services (AssemblyAI, Ollama, OpenRouter) are accessed only from Main Process via native Node.js networking.
            </p>
          </section>

          {/* ════════════════ IPC PATTERNS ════════════════ */}
          <section id="ipc-patterns" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight italic">
              IPC Communication Patterns
            </h2>
            <p className="text-zinc-400 mb-8 text-sm max-w-3xl leading-relaxed">
              All cross-process communication in Imposter uses Electron&apos;s IPC module. There are three distinct patterns
              depending on the direction and nature of the message:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                <div className="text-primary font-mono font-black text-[11px] mb-3 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Request &rarr; Response
                </div>
                <p className="text-zinc-500 text-sm mb-3">Renderer calls <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">ipcRenderer.invoke(channel, data)</code> and awaits a promise from Main.</p>
                <p className="text-zinc-600 text-xs italic">Used for: AI chat queries, OCR results, model list fetching.</p>
              </div>
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                <div className="text-primary font-mono font-black text-[11px] mb-3 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                  Fire &amp; Forget
                </div>
                <p className="text-zinc-500 text-sm mb-3">Renderer calls <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">ipcRenderer.send(channel, data)</code> with no response expected.</p>
                <p className="text-zinc-600 text-xs italic">Used for: Audio chunk streaming, window state changes, stopping transcription.</p>
              </div>
              <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                <div className="text-primary font-mono font-black text-[11px] mb-3 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Main &rarr; Renderer Push
                </div>
                <p className="text-zinc-500 text-sm mb-3">Main Process calls <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">win.webContents.send(channel, data)</code> to push data into the UI.</p>
                <p className="text-zinc-600 text-xs italic">Used for: Live transcription text, screenshot delivery, settings sync.</p>
              </div>
            </div>
          </section>

          {/* ════════════════ FEATURE DEEP-DIVES ════════════════ */}
          <section id="features" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight italic">
              2. Feature Deep-Dives
            </h2>
            <p className="text-zinc-500 mb-10 text-sm">Step-by-step breakdowns of how each major subsystem works internally.</p>

            {/* A. Stealth Mode */}
            <div id="stealth" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">A</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight italic">
                  The Stealth Mode UI System
                </h3>
              </div>
              <p className="text-zinc-400 mb-6 text-sm border-l-2 border-primary/30 pl-4 italic">
                Goal: Create a UI that floats above everything, doesn&apos;t show up in screen sharing, and hides from the taskbar.
              </p>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">1</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Window Creation</h4>
                    <p className="text-zinc-500 text-sm">The Main Process creates a <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">BrowserWindow</code> with <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">transparent: true</code>, <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">frame: false</code>, and <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">skipTaskbar: true</code>. This makes the window completely invisible in system UI — no title bar, no taskbar entry.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">2</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Z-Order Pinning</h4>
                    <p className="text-zinc-500 text-sm"><code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">win.setAlwaysOnTop(true, &apos;screen-saver&apos;)</code> pins the window at the <strong className="text-zinc-300">screen-saver</strong> z-level — above almost every other OS element, including fullscreen applications and system dialogs.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">3</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Content Protection (DRM)</h4>
                    <p className="text-zinc-500 text-sm"><code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">win.setContentProtection(true)</code> leverages OS-level DRM to prevent screen recording tools (OBS, Teams, Zoom, Discord) from seeing the window. The window renders as a <strong className="text-zinc-300">black rectangle</strong> or is completely invisible to screen capture APIs. This is a Windows DXGI hardware flag, not a software trick.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">4</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Glassmorphism Layer</h4>
                    <p className="text-zinc-500 text-sm">With <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">opacity: 0.9</code> and CSS <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">backdrop-filter: blur()</code>, the window blends into whatever is behind it. Combined with transparency, the app feels like a floating glass panel rather than a separate application.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* B. Screen Snipping & OCR */}
            <div id="ocr" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">B</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight italic">
                  Screen Snipping & OCR Pipeline
                </h3>
              </div>
              <p className="text-zinc-400 mb-6 text-sm border-l-2 border-primary/30 pl-4 italic">
                Goal: Let the user draw a box on the screen, capture the text inside it, and insert it into the prompt.
              </p>
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-white/5 space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">1</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Global Shortcut Trigger</h4>
                    <p className="text-zinc-500 text-sm">User presses <kbd className="px-2 py-0.5 bg-zinc-800 rounded text-[11px] border border-white/10 font-mono">Ctrl+Shift+S</kbd>. The Main Process intercepts via <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">globalShortcut.register()</code>.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">2</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Desktop Capture</h4>
                    <p className="text-zinc-500 text-sm">Main Process uses <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">desktopCapturer.getSources()</code> to take a full-screen screenshot as a NativeImage buffer. This is immediately passed via IPC to a new temporary fullscreen Snipper Window.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">3</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Region Selection</h4>
                    <p className="text-zinc-500 text-sm">The user draws a rectangle on the frozen screenshot overlay. The Snipper captures coordinates <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">(x, y, width, height)</code> and sends them back to Main via IPC. Pressing <kbd className="px-2 py-0.5 bg-zinc-800 rounded text-[11px] border border-white/10 font-mono">Esc</kbd> cancels the operation.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">4</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Crop & OCR</h4>
                    <p className="text-zinc-500 text-sm">Main Process crops the original screenshot using <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">nativeImage.crop()</code>, then feeds the pixel buffer to <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">tesseract.js</code> which runs entirely locally — no data leaves the machine.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">5</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Text Delivery</h4>
                    <p className="text-zinc-500 text-sm">Extracted text is sent via IPC to the Chat Renderer and auto-appended to the prompt textarea. The Snipper Window is destroyed. Total round-trip: ~2 seconds for most text.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* C. Voice Transcription */}
            <div id="voice" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">C</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight italic">
                  Real-Time Voice Transcription
                </h3>
              </div>
              <p className="text-zinc-400 mb-6 text-sm border-l-2 border-primary/30 pl-4 italic">
                Goal: Capture system audio, stream it to AssemblyAI for live transcription, and display rolling text in the Dynamic Island overlay.
              </p>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">1</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Audio Capture</h4>
                    <p className="text-zinc-500 text-sm">User clicks &quot;Live.&quot; The Renderer uses <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">navigator.mediaDevices.getDisplayMedia(&#123; audio: true &#125;)</code> to capture system audio. This is the only API that captures what the <em>speakers</em> output, not the microphone.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">2</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">AudioWorklet Processing</h4>
                    <p className="text-zinc-500 text-sm">Raw audio is piped through an <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">AudioContext</code> into a custom <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">AudioWorkletProcessor</code> that buffers 100ms of 16kHz mono PCM samples. This buffer size is critical — AssemblyAI rejects chunks shorter than ~100ms (Error 3007: Input Duration Violation).</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">3</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">IPC Relay</h4>
                    <p className="text-zinc-500 text-sm">The Worklet posts base64-encoded audio chunks to the Renderer, which immediately relays them to Main Process via <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">ipcRenderer.send(&apos;audio-chunk&apos;, data)</code>. Fire-and-forget pattern — no await, no backpressure.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">4</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">WebSocket to AssemblyAI</h4>
                    <p className="text-zinc-500 text-sm">Main Process manages a persistent WSS connection to AssemblyAI&apos;s Streaming Transcription V3 endpoint. Audio chunks are funneled into the socket. A 15-second connection timeout and <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">isConnecting</code> flag guard against hung connections.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-primary font-mono font-bold text-xs">5</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Dual-Window Broadcast</h4>
                    <p className="text-zinc-500 text-sm">AssemblyAI replies with partial and final transcription JSON. Main Process broadcasts the text to <em>both</em> the Chat Window and the Dynamic Island Window simultaneously using <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">webContents.send()</code>.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 border border-primary/20 bg-primary/5 rounded-lg text-sm text-zinc-400">
                <strong className="text-primary">Dev Tip:</strong> Press <kbd className="px-2 py-0.5 bg-zinc-800 rounded text-[11px] border border-white/10 font-mono">F10</kbd> to grab the last finalized transcript and send it directly to the AI chat engine as a prompt — voice-to-AI in one keystroke.
              </div>
            </div>

            {/* D. AI Orchestration */}
            <div id="ai-orchestration" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary font-mono font-black text-sm uppercase bg-primary/10 px-3 py-1 rounded">D</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight italic">
                  Multi-Provider AI Orchestration
                </h3>
              </div>
              <p className="text-zinc-400 mb-6 text-sm border-l-2 border-primary/30 pl-4 italic">
                Goal: Query local models (Ollama) or cloud models (OpenRouter) seamlessly, enriched with contextual data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                  <div className="text-primary font-mono font-bold text-[11px] mb-3 uppercase tracking-wider">1. Context Assembly</div>
                  <p className="text-zinc-500 text-sm">The Renderer pulls from LocalStorage: active Persona (12 built-in interview types), System Prompt, user Resume, and target Job Description. These are merged into a hidden system message prepended to every request.</p>
                </div>
                <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                  <div className="text-primary font-mono font-bold text-[11px] mb-3 uppercase tracking-wider">2. Provider Selection</div>
                  <p className="text-zinc-500 text-sm">The UI determines which backend to hit based on user settings — Ollama for fully local, CORS-free inference, or OpenRouter for cloud-hosted models. Both are called the same way through IPC.</p>
                </div>
                <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                  <div className="text-primary font-mono font-bold text-[11px] mb-3 uppercase tracking-wider">3. CORS-Free Fetch</div>
                  <p className="text-zinc-500 text-sm">The payload is passed to Main Process which uses native <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">net.fetch()</code> — a Node.js network call that bypasses all browser CORS policies. A 120-second AbortController timeout protects against hanging requests.</p>
                </div>
                <div className="p-5 border border-white/5 bg-zinc-900/50 rounded-xl">
                  <div className="text-primary font-mono font-bold text-[11px] mb-3 uppercase tracking-wider">4. Response Delivery</div>
                  <p className="text-zinc-500 text-sm">The AI response (Markdown string) is pushed back to the Renderer. The UI renders it with syntax highlighting, one-click copy for code blocks, and full GFM support including tables and task lists.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════ WINDOW LIFECYCLE ════════════════ */}
          <section id="window-lifecycle" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight italic">
              3. Window Lifecycle Management
            </h2>
            <p className="text-zinc-400 mb-8 text-sm max-w-3xl leading-relaxed">
              Imposter manages three distinct window types, each with different creation timing, persistence, and destruction behavior:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-400 uppercase text-[11px] tracking-wider">
                    <th className="pb-3 pr-6">Window</th>
                    <th className="pb-3 pr-6">Created</th>
                    <th className="pb-3 pr-6">Lifetime</th>
                    <th className="pb-3 pr-6">Content Protection</th>
                    <th className="pb-3">Always On Top</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-500 font-mono text-xs">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-6 text-white font-bold font-sans text-sm">Chat (Main)</td>
                    <td className="py-3 pr-6">App boot</td>
                    <td className="py-3 pr-6">Persistent</td>
                    <td className="py-3 pr-6 text-primary">Yes (Stealth)</td>
                    <td className="py-3 text-primary">screen-saver level</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-6 text-white font-bold font-sans text-sm">Dynamic Island</td>
                    <td className="py-3 pr-6">App boot</td>
                    <td className="py-3 pr-6">Persistent</td>
                    <td className="py-3 pr-6 text-primary">Yes</td>
                    <td className="py-3 text-primary">screen-saver level</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 text-white font-bold font-sans text-sm">Snipper</td>
                    <td className="py-3 pr-6">On shortcut</td>
                    <td className="py-3 pr-6">Ephemeral</td>
                    <td className="py-3 pr-6 text-zinc-600">No</td>
                    <td className="py-3 text-primary">Fullscreen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════ SECURITY MODEL ════════════════ */}
          <section id="security" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight italic">
              4. Security Model
            </h2>
            <p className="text-zinc-400 mb-8 text-sm max-w-3xl leading-relaxed">
              Privacy isn&apos;t a feature — it&apos;s the architectural foundation. Every design choice is made to ensure data stays local.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-primary/20 bg-primary/5 rounded-xl">
                <div className="font-bold text-primary mb-2 italic uppercase tracking-tighter">Context Isolation</div>
                <p className="text-xs text-zinc-500">Renderers cannot access Node.js. All OS interactions go through hard-coded IPC channels in preload.js. No dynamic channel creation is possible.</p>
              </div>
              <div className="p-5 border border-primary/20 bg-primary/5 rounded-xl">
                <div className="font-bold text-primary mb-2 italic uppercase tracking-tighter">Zero Cloud Storage</div>
                <p className="text-xs text-zinc-500">Personas, resumes, API keys, and conversation history are stored in browser LocalStorage. No telemetry, no analytics, no server-side persistence.</p>
              </div>
              <div className="p-5 border border-zinc-800 bg-zinc-900/50 rounded-xl">
                <div className="font-bold text-zinc-300 mb-2 italic uppercase tracking-tighter">Network Minimalism</div>
                <p className="text-xs text-zinc-500">Only two outbound connections exist: LLM API calls (user-configured) and AssemblyAI WebSocket (optional). Both require user-provided API keys.</p>
              </div>
              <div className="p-5 border border-zinc-800 bg-zinc-900/50 rounded-xl">
                <div className="font-bold text-zinc-300 mb-2 italic uppercase tracking-tighter">Volatile Runtime</div>
                <p className="text-xs text-zinc-500">No GPU cache, no disk-level session persistence. When the app closes, in-memory state is destroyed. Only explicit LocalStorage data survives restarts.</p>
              </div>
            </div>
          </section>

          {/* ════════════════ PROBLEMS & SOLUTIONS ════════════════ */}
          <section id="problems" className="mb-20">
            <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight italic">
              5. Development Challenges & Solutions
            </h2>
            <p className="text-zinc-500 mb-8 text-sm max-w-3xl">
              Building a robust desktop overlay app is fundamentally different from web development. Here are the real problems encountered and how they were solved:
            </p>

            <div className="space-y-4">
              <details className="group glass-card overflow-hidden border border-white/5">
                <summary className="p-6 cursor-pointer font-bold flex justify-between items-center hover:bg-white/5 transition-all text-sm">
                  <span>Silent crashes on API failures or network timeouts</span>
                  <span className="text-primary group-open:rotate-180 transition-transform shrink-0 ml-4">&#9660;</span>
                </summary>
                <div className="p-6 pt-4 text-zinc-400 text-sm border-t border-white/5 bg-black/40 space-y-2">
                  <p>Deep, process-level crash guards: <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">process.on(&apos;uncaughtException&apos;)</code> and <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">process.on(&apos;unhandledRejection&apos;)</code>.</p>
                  <p>Every IPC handler and Window creation call is wrapped in try/catch. A 120-second <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">AbortController</code> prevents AI requests from hanging indefinitely.</p>
                </div>
              </details>

              <details className="group glass-card overflow-hidden border border-white/5">
                <summary className="p-6 cursor-pointer font-bold flex justify-between items-center hover:bg-white/5 transition-all text-sm">
                  <span>WebSocket connections to AssemblyAI randomly dropping or hanging</span>
                  <span className="text-primary group-open:rotate-180 transition-transform shrink-0 ml-4">&#9660;</span>
                </summary>
                <div className="p-6 pt-4 text-zinc-400 text-sm border-t border-white/5 bg-black/40 space-y-2">
                  <p>An aggressive <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">isConnecting</code> state flag prevents duplicate connections. A 15-second connection timeout fires if the handshake stalls.</p>
                  <p>Teardown logic individually cleans up AudioContext, WorkletNode, MediaStream tracks, and WebSocket — preventing cascading resource leaks where one dangling handle blocks garbage collection.</p>
                </div>
              </details>

              <details className="group glass-card overflow-hidden border border-white/5">
                <summary className="p-6 cursor-pointer font-bold flex justify-between items-center hover:bg-white/5 transition-all text-sm">
                  <span>CORS errors when calling OpenRouter/Ollama from the UI</span>
                  <span className="text-primary group-open:rotate-180 transition-transform shrink-0 ml-4">&#9660;</span>
                </summary>
                <div className="p-6 pt-4 text-zinc-400 text-sm border-t border-white/5 bg-black/40 space-y-2">
                  <p>Browsers enforce CORS; Node.js doesn&apos;t. Solution: all API traffic is proxied through the Main Process using <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">net.fetch()</code>. The Renderer never makes direct HTTP calls to external services.</p>
                  <p>This also provides better error handling — Main Process can catch 4xx/5xx responses and transform them into user-friendly error messages before sending to the UI.</p>
                </div>
              </details>

              <details className="group glass-card overflow-hidden border border-white/5">
                <summary className="p-6 cursor-pointer font-bold flex justify-between items-center hover:bg-white/5 transition-all text-sm">
                  <span>White screen on high load (Render Process Gone)</span>
                  <span className="text-primary group-open:rotate-180 transition-transform shrink-0 ml-4">&#9660;</span>
                </summary>
                <div className="p-6 pt-4 text-zinc-400 text-sm border-t border-white/5 bg-black/40 space-y-2">
                  <p>Listener on <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">win.webContents.on(&apos;render-process-gone&apos;)</code> instantly destroys the corrupted Chromium process and spawns a fresh replacement window.</p>
                  <p>The Main Process is unaffected — it continues managing shortcuts, transcription, and other windows. Only the crashed renderer is recycled.</p>
                </div>
              </details>

              <details className="group glass-card overflow-hidden border border-white/5">
                <summary className="p-6 cursor-pointer font-bold flex justify-between items-center hover:bg-white/5 transition-all text-sm">
                  <span>AssemblyAI Error 3007: Input Duration Violation</span>
                  <span className="text-primary group-open:rotate-180 transition-transform shrink-0 ml-4">&#9660;</span>
                </summary>
                <div className="p-6 pt-4 text-zinc-400 text-sm border-t border-white/5 bg-black/40 space-y-2">
                  <p>The default <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">ScriptProcessorNode</code> sent audio frames too small for AssemblyAI&apos;s minimum duration requirement.</p>
                  <p>Replaced with a custom <code className="text-primary/80 bg-primary/10 px-1 py-0.5 rounded text-[11px]">AudioWorkletProcessor</code> that accumulates samples in an internal ring buffer and only flushes when 100ms of audio is available. This eliminated all duration violations.</p>
                </div>
              </details>
            </div>
          </section>

          {/* ════════════════ CONTRIBUTING ════════════════ */}
          <section id="contributing" className="mb-12">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight italic">
              6. Contributing & Local Development
            </h2>
            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 md:p-8 text-sm text-zinc-400 space-y-4">
              <p>Imposter is open source and welcomes contributions. Here&apos;s how to get started:</p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-zinc-300 border border-white/5 overflow-x-auto">
                <div className="text-zinc-600 mb-1"># Clone and install</div>
                <div>git clone {ghUrl}.git</div>
                <div>cd Imposter</div>
                <div>npm install</div>
                <div className="mt-3 text-zinc-600"># Start in development mode</div>
                <div>npm run dev</div>
                <div className="mt-3 text-zinc-600"># Build for production (Windows)</div>
                <div>npm run build</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-zinc-800/50 border border-white/5">
                  <div className="text-white font-bold text-xs mb-1 uppercase">Key files to explore</div>
                  <ul className="text-xs text-zinc-500 space-y-1">
                    <li><code className="text-primary/80">src/main/main.js</code> — App entry point</li>
                    <li><code className="text-primary/80">src/main/preload.js</code> — IPC bridge</li>
                    <li><code className="text-primary/80">src/renderer/app.js</code> — Chat UI logic</li>
                    <li><code className="text-primary/80">src/renderer/pcm-processor.js</code> — Audio worklet</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-zinc-800/50 border border-white/5">
                  <div className="text-white font-bold text-xs mb-1 uppercase">Environment variables</div>
                  <ul className="text-xs text-zinc-500 space-y-1">
                    <li><code className="text-primary/80">ASSEMBLYAI_API_KEY</code> — For transcription</li>
                    <li><code className="text-primary/80">OPENROUTER_API_KEY</code> — For cloud AI</li>
                    <li>Ollama runs locally — no key needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </article>
      </div>

      {/* ─── Footer ─── */}
      <div className="bg-zinc-900/50 py-12 border-t border-white/5 text-center px-6">
        <p className="text-zinc-500 mb-6 text-sm italic uppercase tracking-widest font-black">Open Source</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={ghUrl} className="btn-premium px-8 py-3 italic uppercase font-black tracking-tighter">
            View Repository
          </Link>
          <Link href="/" className="px-8 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all italic uppercase font-black tracking-tighter text-sm flex items-center justify-center">
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ArchitecturePage;
