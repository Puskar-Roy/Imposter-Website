export interface FeatureStat {
  n: string;
  l: string;
}

export interface FeatureCard {
  t: string;
  d: string;
  accent?: boolean;
  isNew?: boolean;
}

export interface FeatureSection {
  id: string;
  index: string;
  title: string;
  description: string;
  gridType: 'default' | 'dual' | 'grid-3';
  items: FeatureCard[];
  footerNote?: string;
}

export interface Shortcut {
  key: string;
  action: string;
  category?: string;
}

export interface FeaturesData {
  sidebarLinks: { id: string; label: string }[];
  header: {
    title: string;
    description: string;
    stats: FeatureStat[];
  };
  sections: FeatureSection[];
  shortcuts: {
    global: Shortcut[];
    inApp: Shortcut[];
  };
  security: FeatureCard[];
  byTheNumbers: FeatureStat[];
}

export const featuresData: FeaturesData = {
  sidebarLinks: [
    { id: 'stealth', label: 'Stealth Window' },
    { id: 'dual-modes', label: 'Dual Modes' },
    { id: 'ai-chat', label: 'AI Chat Engine' },
    { id: 'providers', label: 'Multi-Provider AI' },
    { id: 'models', label: 'Model Management' },
    { id: 'voice', label: 'Voice & Dynamic Island' },
    { id: 'ocr', label: 'Screen Snip + OCR' },
    { id: 'settings', label: 'Settings & Config' },
    { id: 'shortcuts', label: 'Keyboard Shortcuts' },
    { id: 'security', label: 'Security & Privacy' },
    { id: 'stats', label: 'By The Numbers' },
  ],
  header: {
    title: "Feature Inventory",
    description: "Every capability packed into the assistant. From hardware-level screen protection to real-time voice transcription, Imposter is engineered for absolute discretion and maximum productivity.",
    stats: [
      { n: "7", l: "Major Features" },
      { n: "14", l: "Global Shortcuts" },
      { n: "12", l: "AI Personas" },
      { n: "23", l: "IPC Channels" },
      { n: "8", l: "AI Providers" },
    ]
  },
  sections: [
    {
      id: "stealth",
      index: "01",
      title: "Stealth Window System",
      description: "The core innovation. A window that's physically present on your screen but invisible to every recording tool on the planet. Not a software hack — this uses OS-level DRM hardware flags.",
      gridType: "default",
      items: [
        { t: "Frameless Ghost Window", d: "No title bars, no borders, no system chrome. The window feels like part of your wallpaper." },
        { t: "Dynamic Transparency", d: "90% opacity glassmorphism layer that blends with any background using hardware-accelerated compositing." },
        { t: "Always On Top", d: "Pinned at screen-saver z-level — above fullscreen apps, system dialogs, and everything else." },
        { t: "Skip Taskbar", d: "Invisible in the Windows taskbar and Alt+Tab menu. Zero trace in system navigation." },
        { t: "Content Shield (Screen Protection)", d: "App content is invisible in screenshots, recordings, and screen-sharing (Zoom, Teams, OBS). Uses Windows DXGI hardware-level DRM.", accent: true },
        { t: "Non-Resizable (Stealth)", d: "Window cannot be accidentally resized in stealth mode. No shadow for a truly invisible floating panel." },
        { t: "Single Instance Lock", d: "Prevents multiple copies of the app from running simultaneously." },
      ]
    },
    {
      id: "dual-modes",
      index: "02",
      title: "Dual Application Modes",
      description: "Switch instantly between a discreet assistant and a powerful configuration environment.",
      gridType: "dual",
      items: [
        { t: "Stealth Mode", d: "Default • Maximum Discretion. Hidden from taskbar, always on top, non-resizable, content protection ON.", accent: true },
        { t: "Normal Mode", d: "Configuration • Standard Window. Visible in taskbar, standard controls, resizable, content protection OFF." }
      ],
      footerNote: "Switch instantly via Settings → App Settings → Visibility & Tracking."
    },
    {
      id: "ai-chat",
      index: "03",
      title: "AI Chat Engine",
      description: "Not just a chatbot. A context-aware AI engine that knows your background, targets your job descriptions, and adapts its tone with 12 pre-built interview personas.",
      gridType: "grid-3",
      items: [
        { t: "Multi-Turn Conversation", d: "Full conversation history maintained in-memory and sent with every query for context-aware responses." },
        { t: "System Prompt Injection", d: "A custom 'Systematic Override' prompt is prepended to every LLM query automatically." },
        { t: "Persona Engine (12 Types)", d: "Software Engineer, Frontend, Backend, Full Stack, Mobile, DevOps, ML/AI, QA, System Architect, Engineering Manager, Analyst, PM." },
        { t: "Resume Context Injection", d: "Paste your resume — the AI cites your real background, projects, and experience in answers." },
        { t: "Job Description Targeting", d: "Paste a JD — the AI prioritizes that role's specific technologies and skills." },
        { t: "Full Markdown Rendering", d: "GitHub-Flavored Markdown with syntax-highlighted code blocks, language labels, and one-click copy buttons." },
        { t: "Deep Copy (Ctrl+Shift+C)", d: "Copy the entire raw AI response to clipboard instantly with one shortcut." },
        { t: "Reasoning Trace", d: "For models that support it, a collapsible 'Logic Trace' shows the AI's internal chain-of-thought." },
        { t: "Time-Based Greeting", d: "Personalized welcome: 'Good morning/afternoon/evening, {Name}' based on your local clock." },
      ]
    },
    {
      id: "providers",
      index: "04",
      title: "Multi-Provider AI Backend",
      description: "Run AI completely locally with zero internet, or tap into the most powerful cloud models available. Your choice. Your keys. Your data.",
      gridType: "dual",
      items: [
        { t: "Ollama (Local)", d: "Zero-latency, 100% private inference. No API key needed. Models auto-detected on boot. Run Llama, Qwen, Mistral locally." },
        { t: "Google Gemini (Direct)", d: "High-performance multimodal models via Google AI Studio. Direct integration with automatic model verification.", accent: true, isNew: true },
        { t: "OpenRouter (Cloud)", d: "Access any model in the OpenRouter ecosystem. API key stored locally. Supports free-tier models for zero-cost usage." },
        { t: "Upcoming: Claude, Mistral, DeepSeek", d: "Coming Soon: Native support for Anthropic Claude, Mistral AI, and DeepSeek via direct API connections.", accent: false }
      ]
    },
    {
      id: "models",
      index: "05",
      title: "Model Management System",
      description: "A unified interface for managing multiple AI backends and custom models.",
      gridType: "grid-3",
      items: [
        { t: "Auto-Scan Local Models", d: "On startup, scans local Ollama instance via /api/tags and populates the model dropdown automatically." },
        { t: "Add Custom Models", d: "Add any model from Ollama or OpenRouter with display label, model ID, API key, and base URL." },
        { t: "Remove Models", d: "One-click delete for any custom model. Changes persist in localStorage." },
        { t: "Status Indicator", d: "Visual dot indicator — green = Models loaded / Ready, red = No models found or Ollama not running." },
        { t: "Persistent Storage", d: "All custom models saved in localStorage. Survives app restarts. No cloud sync needed." },
        { t: "Provider Agnostic", d: "Same UI, same workflow — whether you're running a 7B local model or GPT-4 through OpenRouter." },
      ]
    },
    {
      id: "voice",
      index: "06",
      title: "Voice Transcription & Dynamic Island",
      description: "Capture every word spoken on your system in real-time. The Dynamic Island floats as a draggable pill overlay.",
      gridType: "default",
      items: [
        { t: "Real-Time System Audio Transcription", d: "Captures speaker output via getDisplayMedia, processes through custom AudioWorklet, and streams to AssemblyAI V3.", accent: true },
        { t: "Dynamic Island: Mic Mode", d: "Pulsing green mic icon + live transcription text. Partial results appear faded, final results in bold green." },
        { t: "Dynamic Island: AI Mode", d: "Pulsing blue brain icon + AI response text in bold blue. Shows when AI processes a voice query." },
        { t: "F10: Voice-to-AI Pipeline", d: "One keystroke: grab last finalized transcript, auto-fill prompt, trigger AI query, display response in Island." },
        { t: "Connection Test", d: "Settings panel includes a 'Test Connection' button to validate your AssemblyAI API key before use." },
      ]
    },
    {
      id: "ocr",
      index: "07",
      title: "Screen Snip + OCR",
      description: "See text on screen you can't copy? Snip it. Imposter extracts text from any window using local OCR.",
      gridType: "grid-3",
      items: [
        { t: "Full-Screen Snipping Tool", d: "Press Ctrl+Shift+S — a transparent fullscreen overlay appears over your entire desktop." },
        { t: "Click-and-Drag Selection", d: "Draw a rectangle over any area to capture it. Precise pixel-level selection." },
        { t: "Local OCR (Tesseract.js)", d: "Captured region processed by Tesseract.js locally. English language model bundled." },
        { t: "Auto-Fill Prompt", d: "Extracted text automatically appended to the AI prompt input. Ready to query with one Enter." },
        { t: "Cancel with Escape", d: "Press Escape to cancel the snip and dismiss the overlay instantly." },
        { t: "Content Protected", d: "The snip overlay itself is also content-protected. Even the snipping tool is invisible to recordings." },
      ]
    },
    {
      id: "settings",
      index: "08",
      title: "Settings & Configuration",
      description: "A split-pane settings modal with sidebar navigation and 7 configurable tabs. Every setting persists locally.",
      gridType: "grid-3",
      items: [
        { t: "Profile", d: "Display name for personalized greetings." },
        { t: "AI Engine", d: "System prompt, persona selection, resume context, and job description targeting." },
        { t: "Models", d: "Add/remove custom models, configure providers, set API keys and base URLs." },
        { t: "App Settings", d: "Toggle between Stealth Mode and Normal Mode." },
        { t: "Voice & AI", d: "AssemblyAI API key configuration with live connection test." },
        { t: "Shortcuts", d: "Full read-only reference of all 14 global + 4 in-app keyboard shortcuts." },
      ]
    }
  ],
  shortcuts: {
    global: [
      { key: "Ctrl+Shift+I", action: "Focus Input — Jump to AI prompt", category: "Navigation" },
      { key: "Ctrl+Shift+Enter", action: "Stealth Search — Trigger AI query from anywhere", category: "AI" },
      { key: "Ctrl+Shift+C", action: "Deep Copy — Copy raw AI response to clipboard", category: "Clipboard" },
      { key: "Ctrl+Shift+Q", action: "Emergency Exit — Quit instantly", category: "System" },
      { key: "Ctrl+Shift+D", action: "Debug Override — Toggle DevTools", category: "Debug" },
      { key: "Ctrl+Shift+S", action: "Screen Snip — Launch OCR tool", category: "OCR" },
      { key: "Ctrl+Shift+B", action: "Toggle Voice Recording + Dynamic Island", category: "Voice" },
      { key: "F10", action: "Voice-to-AI — Grab transcript and ask AI", category: "Voice + AI" },
      { key: "Ctrl+Arrow Keys", action: "Move Window — Nudge by 10px", category: "Window" },
      { key: "Ctrl+= / Ctrl+-", action: "Resize — Grow/shrink by 50px", category: "Window" },
    ],
    inApp: [
      { key: "Enter", action: "Send prompt" },
      { key: "Shift+Enter", action: "New line in prompt (does not send)" },
      { key: "Escape", action: "Close settings/onboarding overlays" },
      { key: "Escape (in Snip)", action: "Cancel active snip" },
    ]
  },
  security: [
    { t: "100% Local Data", d: "All config (name, system prompt, resume, JD, API keys) stored locally. Nothing leaves the machine.", accent: true },
    { t: "Context Isolation", d: "contextIsolation: true, nodeIntegration: false — renderer has zero access to Node.js APIs.", accent: true },
    { t: "Content Security Policy", d: "Strict CSP headers whitelist only safe origins, local Ollama, and trusted providers.", accent: false },
    { t: "Secure IPC Bridge", d: "All Main ↔ Renderer communication goes through curated contextBridge API with hard-coded channels.", accent: false },
    { t: "No GPU Cache", d: "--disable-gpu-cache flag prevents GPU data persistence between sessions.", accent: false },
    { t: "Single Instance Lock", d: "Prevents duplicate app processes. Only one assistant runs at a time.", accent: false },
  ],
  byTheNumbers: [
    { n: "7", l: "Major Features" },
    { n: "14", l: "Global Shortcuts" },
    { n: "12", l: "AI Personas" },
    { n: "23", l: "IPC Channels" },
    { n: "8", l: "AI Providers" },
    { n: "3", l: "Window Types" },
    { n: "7", l: "Settings Tabs" },
    { n: "11", l: "Config Fields" },
    { n: "7", l: "Dependencies" },
    { n: "0", l: "Cloud Storage" },
  ]
};
