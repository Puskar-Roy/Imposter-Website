import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Architecture = () => {
  return (
    <section id="architecture" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center mb-16 text-center animate-fade-up">
        <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold mb-6 tracking-wider uppercase italic">
          For Developers
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter italic uppercase -skew-x-6">
          Multi-Process Architecture
        </h2>
        <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
          Built on Electron, Imposter leverages a secure, multi-process environment
          to handle OS-level integrations while maintaining a high-performance UI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="glass-card p-6 border border-white/5 bg-white/5 hover:bg-white/10 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 text-primary font-bold text-xl mb-4">1</div>
          <h4 className="font-bold mb-2 italic uppercase text-lg">Main Process</h4>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Runs in Node.js with full OS access. Manages windows, global shortcuts,
            screen capture, WebSocket connections, and all external API calls (CORS-free).
          </p>
        </div>
        <div className="glass-card p-6 border border-white/5 bg-white/5 hover:bg-white/10 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 text-primary font-bold text-xl mb-4">2</div>
          <h4 className="font-bold mb-2 italic uppercase text-lg">Renderer Processes</h4>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Isolated Chromium instances for Chat UI, Dynamic Island overlay,
            and Snipper tool. Each runs standard HTML/CSS/JS in a sandboxed environment.
          </p>
        </div>
        <div className="glass-card p-6 border border-white/5 bg-white/5 hover:bg-white/10 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 text-primary font-bold text-xl mb-4">3</div>
          <h4 className="font-bold mb-2 italic uppercase text-lg">Stealth Bridge</h4>
          <p className="text-sm text-zinc-500 leading-relaxed">
            The preload.js script exposes a secure window.electronAPI object using
            Context Isolation and IPC to safely bridge UI and OS-level primitives.
          </p>
        </div>
      </div>

      <div className="glass-card p-1 bg-gradient-to-br from-white/10 to-transparent">
        <div className="bg-black/80 p-4 sm:p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-8">
          <Image
            src="/images/architecture-diagram.png"
            alt="Imposter Architecture Diagram showing Main Process, Renderer Processes, Preload Bridge, and External Services"
            width={820}
            height={740}
            className="rounded-xl w-full max-w-10xl"
            priority
          />
          <Link
            href="/architecture"
            className="btn-premium px-8 py-3 italic uppercase font-black tracking-tighter text-sm"
          >
            Read Full Architecture Docs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
