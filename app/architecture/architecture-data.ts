import React from 'react';

export interface ArchitectureData {
  sidebarLinks: {
    id: string;
    label: string;
    isSublink?: boolean;
    isSectionHeader?: boolean;
  }[];
  hero: {
    title: string;
    description: string;
    tags: string[];
  };
  whyElectron: {
    content: string[];
    stats: {
      value: string;
      label: string;
    }[];
  };
  processModels: {
    id: string;
    title: string;
    subtitle: string;
    iconText: string;
    description: string;
    items: string[];
  }[];
  ipcPatterns: {
    title: string;
    mechanism: string;
    description: string;
    examples: string;
    color: string;
  }[];
  featureDeepDives: {
    id: string;
    index: string;
    title: string;
    goal: string;
    steps: {
      title: string;
      content: string | React.ReactNode;
    }[];
    tip?: string;
    type?: 'list' | 'grid';
  }[];
  windowLifecycle: {
    name: string;
    created: string;
    lifetime: string;
    protection: boolean;
    alwaysOnTop: string;
  }[];
  securityModel: {
    title: string;
    description: string;
    isHighlight?: boolean;
  }[];
  challenges: {
    question: string;
    answer: React.ReactNode;
  }[];
}

export const architectureData: ArchitectureData = {
  sidebarLinks: [
    { id: 'overview', label: 'Overview', isSectionHeader: true },
    { id: 'why-electron', label: 'Why Electron?' },
    { id: 'process-model', label: 'Process Model', isSectionHeader: true },
    { id: 'main-process', label: 'Main Process', isSublink: true },
    { id: 'renderer-process', label: 'Renderer Process', isSublink: true },
    { id: 'bridge', label: 'The Bridge', isSublink: true },
    { id: 'diagram', label: 'Architecture Diagram', isSectionHeader: true },
    { id: 'ipc-patterns', label: 'IPC Patterns', isSectionHeader: true },
    { id: 'features', label: 'Feature Deep-Dives', isSectionHeader: true },
    { id: 'stealth', label: 'Stealth Mode', isSublink: true },
    { id: 'ocr', label: 'Screen Snip & OCR', isSublink: true },
    { id: 'voice', label: 'Voice Transcription', isSublink: true },
    { id: 'ai-orchestration', label: 'AI Orchestration', isSublink: true },
    { id: 'window-lifecycle', label: 'Window Lifecycle', isSectionHeader: true },
    { id: 'security', label: 'Security Model', isSectionHeader: true },
    { id: 'problems', label: 'Problems & Solutions', isSectionHeader: true },
    { id: 'contributing', label: 'Contributing', isSectionHeader: true },
  ],
  hero: {
    title: "Architecture Guide",
    description: "A comprehensive, developer-friendly breakdown of the Imposter desktop application. This document explains how every core feature operates under the hood, the major technical challenges faced during development, and solutions that may help you build similar systems.",
    tags: ["Electron 33+", "Node.js 20+", "Chromium Renderer", "Context Isolation", "AssemblyAI V3", "Tesseract.js"]
  },
  whyElectron: {
    content: [
      "A regular web app can't do what Imposter does. Browsers sandbox JavaScript — they block access to OS-level APIs, enforce CORS on every HTTP request, and have no mechanism for content protection or global keyboard shortcuts.",
      "Electron gives us two worlds: a full Node.js runtime (Main Process) for OS-level operations, and a Chromium browser (Renderer Process) for a rich UI. The cost is the ~150MB binary size, but the benefit is complete OS control with a web-tech UI — exactly what a stealth overlay application needs."
    ],
    stats: [
      { value: "0ms", label: "CORS Overhead" },
      { value: "3", label: "Renderer Windows" },
      { value: "100%", label: "Local Data Storage" }
    ]
  },
  processModels: [
    {
      id: "main-process",
      title: "Main Process",
      subtitle: "src/main/ • Node.js Runtime",
      iconText: "M",
      description: "Electron uses a multi-process architecture modeled after Chromium. Each process is isolated.",
      items: [
        "**Window Management** — Creating and destroying the transparent glass windows (Main Chat, Snipper overlay, Dynamic Island). Each is a separate BrowserWindow instance.",
        "**Global Shortcuts** — Registering system-wide keyboard shortcuts via globalShortcut.register(). These fire even when Imposter is not focused.",
        "**Network I/O** — All external HTTP and WebSocket traffic (Ollama, OpenRouter, AssemblyAI) flows through Main to bypass browser CORS.",
        "**OCR Engine** — Runs tesseract.js in-process for pixel-to-text extraction.",
        "**Lifecycle** — App bootstrap, graceful shutdown, and crash recovery."
      ]
    },
    {
      id: "renderer-process",
      title: "Renderer Process",
      subtitle: "src/renderer/ • Chromium Sandbox",
      iconText: "R",
      description: "Handles the UI and user interactions within sandboxed environments.",
      items: [
        "**Chat Interface** — Main window. Markdown rendering (GFM), syntax-highlighted code blocks, conversation history, settings panel.",
        "**Dynamic Island** — A tiny pill-shaped overlay window for real-time transcription text. Separate renderer, separate lifecycle.",
        "**Snipper Window** — Temporary fullscreen transparent overlay for region selection. Spawned on-demand, destroyed after crop.",
        "**Audio Worklets** — Custom AudioWorkletProcessor for slicing raw PCM audio into 100ms buffered chunks.",
        "**Local Storage** — Personas, resume, job description, and API keys are stored client-side."
      ]
    },
    {
      id: "bridge",
      title: "The Bridge",
      subtitle: "preload.js • Context Isolation",
      iconText: "B",
      description: "The secure gateway between Main and Renderer processes.",
      items: [
        "The Renderer cannot import Node modules directly — contextIsolation: true enforces this boundary.",
        "preload.js uses contextBridge.exposeInMainWorld() to inject a safe window.electronAPI object.",
        "Each method maps to a specific ipcRenderer.invoke() or ipcRenderer.on() channel.",
        "Channels are hard-coded — the UI cannot call arbitrary IPC channels. This prevents prototype pollution attacks."
      ]
    }
  ],
  ipcPatterns: [
    {
      title: "Request → Response",
      mechanism: "ipcRenderer.invoke(channel, data)",
      description: "Renderer awaits a promise from Main. Used for queries needing immediate results.",
      examples: "AI chat queries, OCR results, model list fetching.",
      color: "bg-primary"
    },
    {
      title: "Fire & Forget",
      mechanism: "ipcRenderer.send(channel, data)",
      description: "Unidirectional messaging where no response is expected. High-frequency streaming.",
      examples: "Audio chunk streaming, window state changes.",
      color: "bg-yellow-500"
    },
    {
      title: "Main → Renderer Push",
      mechanism: "win.webContents.send(channel, data)",
      description: "Main Process pushes events directly into the UI. Essential for live updates.",
      examples: "Live transcription text, screenshot delivery, settings sync.",
      color: "bg-blue-500"
    }
  ],
  featureDeepDives: [
    {
      id: "stealth",
      index: "A",
      title: "The Stealth Mode UI System",
      goal: "Create a UI that floats above everything, doesn't show up in screen sharing, and hides from the taskbar.",
      steps: [
        {
          title: "Window Creation",
          content: "The Main Process creates a BrowserWindow with transparent: true, frame: false, and skipTaskbar: true. This makes the window completely invisible in system UI — no title bar, no taskbar entry."
        },
        {
          title: "Z-Order Pinning",
          content: "win.setAlwaysOnTop(true, 'screen-saver') pins the window at the screen-saver z-level — above almost every other OS element, including fullscreen applications."
        },
        {
          title: "Content Protection (DRM)",
          content: "win.setContentProtection(true) leverages OS-level DRM to prevent screen recording tools (OBS, Teams, Zoom) from seeing the window. It renders as a black rectangle to capture APIs."
        },
        {
          title: "Glassmorphism Layer",
          content: "With opacity: 0.9 and CSS backdrop-filter: blur(), the window blends into whatever is behind it as a floating glass panel."
        }
      ]
    },
    {
      id: "ocr",
      index: "B",
      title: "Screen Snipping & OCR Pipeline",
      goal: "Let the user draw a box on the screen, capture the text inside it, and insert it into the prompt.",
      type: "grid",
      steps: [
        {
          title: "Global Shortcut Trigger",
          content: "User presses Ctrl+Shift+S. The Main Process intercepts via globalShortcut.register()."
        },
        {
          title: "Desktop Capture",
          content: "Main Process uses desktopCapturer.getSources() to take a full-screen screenshot as a NativeImage buffer."
        },
        {
          title: "Region Selection",
          content: "The user draws a rectangle on the frozen screenshot overlay. The Snipper captures coordinates (x, y, w, h)."
        },
        {
          title: "Crop & OCR",
          content: "Main Process crops the original screenshot then feeds the pixel buffer to tesseract.js which runs entirely locally."
        },
        {
          title: "Text Delivery",
          content: "Extracted text is sent via IPC to the Chat Renderer and auto-appended to the prompt textarea."
        }
      ]
    },
    {
      id: "voice",
      index: "C",
      title: "Real-Time Voice Transcription",
      goal: "Capture system audio, stream it to AssemblyAI for live transcription, and display rolling text in the Dynamic Island overlay.",
      steps: [
        {
          title: "Audio Capture",
          content: "Renderer uses navigator.mediaDevices.getDisplayMedia({ audio: true }) to capture speaker output directly."
        },
        {
          title: "AudioWorklet Processing",
          content: "Raw audio is piped into a custom AudioWorkletProcessor that buffers 100ms of 16kHz mono PCM samples."
        },
        {
          title: "IPC Relay",
          content: "The Worklet posts base64-encoded audio chunks to the Renderer, which relays them to Main Process via ipcRenderer.send('audio-chunk')."
        },
        {
          title: "WebSocket to AssemblyAI",
          content: "Main Process manages a persistent WSS connection to AssemblyAI's Streaming API. Audio chunks are funneled into the socket."
        },
        {
          title: "Dual-Window Broadcast",
          content: "Finalized transcription JSON is broadcast to both the Chat Window and the Dynamic Island Window via webContents.send()."
        }
      ],
      tip: "Press F10 to grab the last finalized transcript and send it directly to the AI chat engine as a prompt — voice-to-AI in one keystroke."
    },
    {
      id: "ai-orchestration",
      index: "D",
      title: "Multi-Provider AI Orchestration",
      goal: "Query local models (Ollama) or cloud models (OpenRouter) seamlessly, enriched with contextual data.",
      type: "grid",
      steps: [
        {
          title: "Context Assembly",
          content: "Renderer pulls Persona, System Prompt, Resume, and Job Description from LocalStorage and merges them into a hidden system message."
        },
        {
          title: "Provider Selection",
          content: "The UI determines whether to hit Ollama (fully local) or OpenRouter (cloud) based on user settings."
        },
        {
          title: "CORS-Free Fetch",
          content: "Main Process uses native net.fetch() to perform Node.js network calls that bypass all browser CORS policies."
        },
        {
          title: "Response Delivery",
          content: "The AI response (Markdown) is pushed back to the Renderer and rendered with GFM support and syntax highlighting."
        }
      ]
    }
  ],
  windowLifecycle: [
    { name: "Chat (Main)", created: "App boot", lifetime: "Persistent", protection: true, alwaysOnTop: "screen-saver level" },
    { name: "Dynamic Island", created: "App boot", lifetime: "Persistent", protection: true, alwaysOnTop: "screen-saver level" },
    { name: "Snipper", created: "On shortcut", lifetime: "Ephemeral", protection: false, alwaysOnTop: "Fullscreen" }
  ],
  securityModel: [
    { title: "Context Isolation", description: "Renderers cannot access Node.js. All OS interactions go through hard-coded IPC channels in preload.js.", isHighlight: true },
    { title: "Zero Cloud Storage", description: "Personas, resumes, API keys, and history are stored in browser LocalStorage. No telemetry or analytics.", isHighlight: true },
    { title: "Network Minimalism", description: "Only user-configured LLM and optional transcription connections exist. No phantom outbound traffic." },
    { title: "Volatile Runtime", description: "No disk-level session persistence beyond explicit data. memory state is destroyed on app close." }
  ],
  challenges: [
    {
      question: "Silent crashes on API failures or network timeouts",
      answer: "Deep, process-level crash guards: uncaughtException and unhandledRejection handlers. Every IPC call is wrapped in try/catch with a 120s AbortController."
    },
    {
      question: "WebSocket connections to AssemblyAI randomly dropping or hanging",
      answer: "Aggressive isConnecting state flag and 15s connection timeout. Teardown logic individually cleans up AudioContext, tracks, and sockets."
    },
    {
      question: "CORS errors when calling OpenRouter/Ollama from the UI",
      answer: "All API traffic is proxied through the Main Process using net.fetch(). The Renderer never makes direct HTTP calls to external services."
    },
    {
      question: "White screen on high load (Render Process Gone)",
      answer: "Listener on render-process-gone instantly destroys the corrupted Chromium process and spawns a fresh replacement window."
    },
    {
      question: "AssemblyAI Error 3007: Input Duration Violation",
      answer: "Custom AudioWorkletProcessor accumulates samples in a ring buffer and only flushes when 100ms of audio is available."
    }
  ]
};
