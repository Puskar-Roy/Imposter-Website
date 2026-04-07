import React from 'react';
import siteConfig from '../config';

const providers = [
  {
    name: "Ollama",
    desc: "Run models locally. Zero internet required.",
    status: "active",
    url: siteConfig.ollamaUrl,
    badge: "Local",
    isNew: false,
  },
  {
    name: "OpenRouter",
    desc: "Hundreds of cloud models. Free tier available.",
    status: "active",
    url: siteConfig.openRouterUrl,
    badge: "Cloud",
    isNew: false,
  },
  {
    name: "Google Gemini",
    desc: "High-performance models via Google AI Studio.",
    status: "active",
    url: "https://aistudio.google.com/app/apikey",
    badge: "Direct",
    isNew: true,
  },
  ...siteConfig.futureProviders.map((name) => ({
    name,
    desc: "Just add your API key in Settings.",
    status: "soon" as const,
    url: "#",
    badge: "Coming Soon",
    isNew: false,
  })),
];

const Providers = () => {
  return (
    <section className="py-12 md:py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center mb-10 md:mb-16 text-center animate-fade-up">
        <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold mb-6 tracking-wider uppercase italic text-shadow-glow">
          Multi-Provider
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter italic uppercase -skew-x-6">
          Your Models, Your Rules
        </h2>
        <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
          Bring your own API keys. Use local models or cloud providers — all stored securely on your machine.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {providers.map((provider, i) => (
          <a
            key={i}
            href={provider.url}
            target={provider.url !== "#" ? "_blank" : undefined}
            className={`glass-card p-6 flex flex-col gap-3 transition-all group ${
              provider.status === "active"
                ? "border-white/10 hover:border-primary/40"
                : "border-white/5 opacity-60 hover:opacity-80"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">{provider.name}</h3>
                {provider.isNew && (
                  <span className="px-1.5 py-0.5 rounded bg-primary text-[8px] font-black text-black uppercase tracking-tighter leading-none animate-bounce">
                    New
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  provider.status === "active"
                    ? "bg-primary/10 border border-primary/20 text-primary"
                    : "bg-zinc-900 border border-white/5 text-zinc-500"
                }`}
              >
                {provider.badge}
              </span>
            </div>
            <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{provider.desc}</p>
            {provider.status === "active" && (
              <div className="flex items-center gap-1.5 mt-auto">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] text-zinc-600">Available Now</span>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Providers;
