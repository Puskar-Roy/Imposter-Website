/**
 * Imposter — Site Configuration
 *
 * Centralized config for all static values.
 * Toggle `released` to control download availability site-wide.
 */

const siteConfig = {
  appName: "Imposter",
  tagline: "Beating a Broken System",
  subtitle: "A seamless, unobtrusive AI interface for your desktop environment.",
  version: "1.0.0-beta",

  // Set to true when the release is live to enable direct downloads.
  released: false,

  github: "https://github.com/Puskar-Roy/Imposter",
  githubReleases: "https://github.com/Puskar-Roy/Imposter/releases",
  downloadUrl: "https://github.com/Puskar-Roy/Imposter/releases/latest/download/Imposter-Setup.exe",

  ollamaUrl: "https://ollama.com",
  openRouterUrl: "https://openrouter.ai",
  openRouterKeysUrl: "https://openrouter.ai/keys",
  assemblyAiUrl: "https://www.assemblyai.com",
  assemblyAiDashboardUrl: "https://www.assemblyai.com/app/account",

  futureProviders: ["OpenAI", "Grok (xAI)", "Claude (Anthropic)", "Mistral AI", "DeepSeek"],

  logo: "/images/logo.png",
  mockup: "/images/mockup.png",
  architectureDiagram: "/images/architecture-diagram.png",

  screenshots: {
    modelSetup: "/images/setup-models.png",
    voiceSetup: "/images/setup-voice.png",
  },
} as const;

export default siteConfig;
