import React from 'react';
import Link from 'next/link';
import { 
  EyeOff, 
  MessageSquare, 
  Mic, 
  Maximize, 
  Layers, 
  Lock, 
  Zap, 
  Smartphone, 
  Split,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    title: "Stealth Window",
    line: "Invisible to screenshots, screen recordings, and screen-sharing. Hardware-level DRM protection.",
    icon: <EyeOff size={28} strokeWidth={1.5} />
  },
  {
    title: "AI Chat",
    line: "Context-aware conversations powered by 12 high-stakes personas, document injection, and contextual targeting.",
    icon: <MessageSquare size={28} strokeWidth={1.5} />
  },
  {
    title: "Voice Transcription",
    line: "Real-time system audio capture streamed to AssemblyAI. Live results displayed in a floating Dynamic Island.",
    icon: <Mic size={28} strokeWidth={1.5} />
  },
  {
    title: "Screen OCR",
    line: "Snip any region of your screen. Tesseract.js extracts text locally and feeds it straight to the AI prompt.",
    icon: <Maximize size={28} strokeWidth={1.5} />
  },
  {
    title: "Multi-Provider",
    line: "Run models locally with Ollama or connect to any cloud LLM through OpenRouter. Your keys, your data.",
    icon: <Layers size={28} strokeWidth={1.5} />
  },
  {
    title: "100% Local",
    line: "Zero cloud storage. Zero telemetry. API keys, prompts, and conversations never leave your machine.",
    icon: <Lock size={28} strokeWidth={1.5} />
  },
  {
    title: "Chameleon Switch",
    line: "The perfect 'Panic Button' (Ctrl+Shift+H). Instantly transform your assistant into a boring utility—like Notepad or a Calculator.",
    isUpcoming: true,
    icon: <Zap size={28} strokeWidth={1.5} />
  },
  {
    title: "Double-Display",
    line: "Real-time Mobile Sync. Stream audio from your phone and see suggested answers on your disguised Desktop.",
    isUpcoming: true,
    icon: <Smartphone size={28} strokeWidth={1.5} />
  },
  {
    title: "Model Compare",
    line: "Split-view orchestration. Send prompts to local and cloud models simultaneously to verify accuracy.",
    isUpcoming: true,
    icon: <Split size={28} strokeWidth={1.5} />
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
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default Features;

