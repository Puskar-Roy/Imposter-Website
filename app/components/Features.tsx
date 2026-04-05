import React from 'react';
import Link from 'next/link';

const features = [
  {
    title: "Stealth Window",
    line: "Invisible to screenshots, screen recordings, and screen-sharing. Hardware-level DRM protection.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
    )
  },
  {
    title: "AI Chat",
    line: "Context-aware conversations powered by 12 interview personas, resume injection, and job targeting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
    )
  },
  {
    title: "Voice Transcription",
    line: "Real-time system audio capture streamed to AssemblyAI. Live results displayed in a floating Dynamic Island.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
    )
  },
  {
    title: "Screen OCR",
    line: "Snip any region of your screen. Tesseract.js extracts text locally and feeds it straight to the AI prompt.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h.01" /><path d="M17 7h.01" /><path d="M7 17h.01" /><path d="M17 17h.01" /></svg>
    )
  },
  {
    title: "Multi-Provider",
    line: "Run models locally with Ollama or connect to any cloud LLM through OpenRouter. Your keys, your data.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
    )
  },
  {
    title: "100% Local",
    line: "Zero cloud storage. Zero telemetry. API keys, prompts, and conversations never leave your machine.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
    )
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-32 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-10 md:mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
          Everything you need.
          <br />
          <span className="text-zinc-500">Nothing they can see.</span>
        </h2>
        <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
          An invisible productivity layer that sits on top of your desktop.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
        {features.map((feature, i) => (
          <div key={i} className="bg-black p-10 flex flex-col gap-5 hover:bg-zinc-950 transition-colors">
            <div className="text-primary">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">{feature.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{feature.line}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link href="/features" className="text-sm text-zinc-500 hover:text-primary transition-colors flex items-center gap-2 group">
          See all features
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
        </Link>
      </div>
    </section>
  );
};

export default Features;
