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
    line: "Context-aware conversations powered by 12 high-stakes personas, document injection, and contextual targeting.",
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
  {
    title: "Chameleon Switch",
    line: "The perfect 'Panic Button' (Ctrl+Shift+H). Instantly transform your assistant into a boring utility—like Notepad or a Calculator.",
    isUpcoming: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /><path d="M9 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" /><path d="M15 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" /><path d="M8 15h8" /></svg>
    )
  },
  {
    title: "Double-Display",
    line: "Real-time Mobile Sync. Stream audio from your phone and see suggested answers on your disguised Desktop.",
    isUpcoming: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
    )
  },
  {
    title: "Model Compare",
    line: "Split-view orchestration. Send prompts to local and cloud models simultaneously to verify accuracy.",
    isUpcoming: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 11h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z" /><path d="M9 17H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /></svg>
    )
  },
];

const Features = () => {
  return (
    <section id="features" className="py-0 md:py-3 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-10 md:mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter italic uppercase -skew-x-6">
          Everything you need.
          <br />
          <span className="text-zinc-500">Nothing they can see.</span>
        </h2>
        <p className="text-zinc-500 max-w-xl text-lg leading-relaxed italic border-l-2 border-primary/20 pl-6">
          An invisible edge for your most critical live conversations and assessments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-primary/5">
        {features.map((feature, i) => (
          <div key={i} className="bg-black p-10 flex flex-col gap-5 hover:bg-zinc-950 transition-all group relative">
            <div className="text-primary group-hover:scale-110 transition-transform origin-left">
              {feature.icon}
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white tracking-tight">{feature.title}</h3>
              {feature.isUpcoming && (
                <span className="px-1.5 py-0.5 rounded bg-primary text-[8px] font-black text-black uppercase tracking-tighter leading-none">
                  Upcoming
                </span>
              )}
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">{feature.line}</p>
            {feature.isUpcoming && (
              <Link href="/upcoming" className="absolute inset-0 z-10" />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link href="/features" className="text-sm text-zinc-500 hover:text-primary transition-colors flex items-center gap-2 group italic font-bold uppercase tracking-widest">
          See all features
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
        </Link>
      </div>
    </section>
  );
};

export default Features;
