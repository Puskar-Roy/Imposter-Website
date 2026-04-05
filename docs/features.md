# Imposter — Complete Feature Inventory

> **Version:** 1.0.0 · **Platform:** Windows Desktop (Electron) · **License:** MIT  
> **Author:** Puskar Roy · **Repository:** [github.com/Puskar-Roy/Imposter](https://github.com/Puskar-Roy/Imposter)

---

## 🧬 Product Identity

| Field | Value |
|---|---|
| **App Name** | Imposter |
| **Tagline** | *Beating a Broken System* |
| **Subtitle** | *The AI Phantom That Doesn't Exist—Until You Need It.* |
| **App ID** | `com.imposter.app` |
| **Framework** | Electron 30+ |
| **Design System** | Glassmorphism Dark UI (Inter / Outfit / Fira Code) |

---

## 👻 Core Philosophy — "Stealth Mode Architecture"

Imposter is built on a unique **Stealth Architecture** — an invisible, frameless, always-on-top AI assistant that blends into any desktop. It remains hidden, non-intrusive, and computationally isolated until you trigger the **Systematic Override**.

---

## 🎯 Feature Map (Complete)

### 1. Stealth Window System

| Feature | Details |
|---|---|
| **Frameless Ghost Window** | No title bars, no borders, no system chrome. Feels like part of your wallpaper. |
| **Dynamic Transparency** | 90% opacity glassmorphism layer (`setOpacity(0.9)`) that blends with any background. |
| **Always On Top** | Window stays above all other apps using `screen-saver` level z-ordering. |
| **Skip Taskbar** | App is invisible in the Windows taskbar — no trace in Alt+Tab. |
| **Content Shield (Screen Protection)** | `setContentProtection(true)` — App content is **invisible** in screenshots, screen recordings, and screen-sharing sessions (Zoom, Teams, Discord, etc.). |
| **Non-Resizable (Stealth)** | Window cannot be accidentally resized in stealth mode. |
| **No Shadow** | Shadow is disabled for a truly invisible floating panel. |
| **Single Instance Lock** | Prevents multiple copies of the app from running simultaneously. |

---

### 2. Dual Application Modes

| Mode | Behavior |
|---|---|
| **🕵️ Stealth Mode** (Default) | Hidden from taskbar · Always on top · Not resizable · Content protection ON |
| **🪟 Normal Mode** | Visible in taskbar · Standard window controls (Minimize / Close) · Resizable · Content protection OFF |

Switching between modes is instant via **Settings → App Settings → Visibility & Tracking**.

---

### 3. AI Chat Engine

| Feature | Details |
|---|---|
| **Multi-Turn Conversation** | Full conversation history is maintained in-memory and sent with every query for context-aware responses. |
| **System Prompt Injection** | A custom "Systematic Override" prompt is prepended to every LLM query. |
| **Persona Engine** | 12 pre-built interview personas automatically adjust the AI's tone and focus area. |
| **Resume Context Injection** | Paste your resume/experience — the AI cites your *real* background in answers. |
| **Job Description Targeting** | Paste a JD — the AI prioritizes technologies and skills from that specific role. |
| **Markdown Rendering** | Full GitHub-Flavored Markdown (GFM) rendering with line breaks. |
| **Syntax-Highlighted Code Blocks** | Powered by `highlight.js` — code blocks include language labels and one-click copy buttons. |
| **Copy Code Button** | Each code block has a `Copy code` button that copies raw code to clipboard. |
| **Deep Copy (Full Response)** | Copy the entire raw AI response to clipboard via `Ctrl+Shift+C`. |
| **Loading State** | Animated "Thinking..." indicator with pulsing dots while waiting for AI. |
| **Error Handling** | Graceful error display with troubleshooting hints (check Ollama, check internet). |
| **New Chat** | One-click conversation reset — clears history and restores the welcome screen. |
| **Time-Based Greeting** | Personalized welcome message: "Good morning/afternoon/evening, {Name}". |
| **Reasoning Trace** | For models that support it (via OpenRouter), a collapsible "Logic Trace" section shows the AI's internal reasoning. |

---

### 4. Multi-Provider AI Backend

| Provider | Protocol | Details |
|---|---|---|
| **Ollama (Local)** | HTTP REST (`/api/chat`) | Connects to local Ollama instance at `http://127.0.0.1:11434`. Zero-latency, 100% private. |
| **OpenRouter (Cloud)** | HTTPS REST (`/api/v1/chat/completions`) | Supports any OpenRouter model (e.g. `qwen/qwen3.6-plus:free`). API key stored locally. |

**Model Detection:**
- Ollama models are auto-scanned on boot via `/api/tags` endpoint.
- Custom models (Ollama or OpenRouter) can be added manually and persisted in `localStorage`.

---

### 5. Model Management System

| Feature | Details |
|---|---|
| **Auto-Scan Local Models** | On startup, scans the local Ollama instance and populates the model dropdown. |
| **Add Custom Models** | Add any model from Ollama (custom URL) or OpenRouter. |
| **Model Fields** | Provider · Display Label · Model ID · API Key (OpenRouter only) · Base URL (Ollama only) |
| **Remove Models** | One-click delete for any custom model. |
| **Persistent Storage** | All custom models saved in `localStorage` under key `imposter_models`. |
| **Status Indicator** | Visual dot indicator — 🟢 Green = Models loaded / Ready · 🔴 Red = No models found. |

---

### 6. Voice Transcription & Dynamic Island

| Feature | Details |
|---|---|
| **Real-Time Voice Transcription** | Captures system audio (desktop loopback) and transcribes in real-time using AssemblyAI Streaming V3 (`u3-rt-pro` model). |
| **Audio Pipeline** | `getDisplayMedia` → `AudioWorklet` (PCM Processor) → Base64 encode → WebSocket to AssemblyAI. |
| **PCM Worklet** | Custom `AudioWorkletProcessor` with 1600-sample buffer (100ms at 16kHz) for meeting AssemblyAI's minimum duration requirement. |
| **Dynamic Island Window** | A floating, draggable, pill-shaped overlay that shows live transcription and AI responses — inspired by Apple's Dynamic Island. |
| **Island: Mic Mode** | Pulsing green mic icon + live transcription text (partial = faded, final = bold green). |
| **Island: AI Mode** | Pulsing blue brain icon + AI response text (bold blue). |
| **F10 → Voice-to-AI Pipeline** | Press `F10` to grab the last finalized transcript, auto-fill the prompt, and trigger an AI search. Response is relayed back to the Island window. |
| **Connection Test** | Settings panel includes a "Test Connection" button to validate your AssemblyAI API key before use. |
| **API Key Storage** | AssemblyAI key stored locally in config. Also supports `.env` fallback (`ASSEMBLY_AI_API_KEY` or `ASSEMBLY_API`). |

---

### 7. Screen Snip + OCR

| Feature | Details |
|---|---|
| **Full-Screen Snipping Tool** | Press `Ctrl+Shift+S` to enter snip mode — a full-screen transparent overlay appears. |
| **Click-and-Drag Selection** | Draw a rectangle over any area of the screen to capture it. |
| **OCR (Optical Character Recognition)** | The snipped region is processed by **Tesseract.js** to extract text. |
| **Auto-Fill Prompt** | Extracted OCR text is automatically appended to the AI prompt input. |
| **Cancel Snip** | Press `Escape` to cancel the snip and dismiss the overlay. |
| **Content Protected Snip Window** | The snip overlay itself is also content-protected. |

---

### 8. Onboarding Flow

| Step | Details |
|---|---|
| **First-Run Detection** | If no config is found in `localStorage`, the onboarding overlay appears. |
| **Fields** | **Display Name** (e.g. "Adams") · **Systematic Override** (e.g. "Be concise and professional.") |
| **Initialize Button** | Saves config to `localStorage` and dismisses overlay. Defaults to Stealth Mode. |
| **Skip on Return** | Returning users bypass onboarding — their config is loaded automatically. |

---

## ⚙️ Settings Panel (All Tabs & Fields)

The settings panel is a split-pane modal with a sidebar navigation and 6 configurable tabs.

---

### Tab 1: 👤 Profile

| Field | Type | Description |
|---|---|---|
| **Display Name** | Text Input | Used for the home screen greeting (e.g. "Good morning, Adams"). |

---

### Tab 2: 🧠 AI Engine

| Field | Type | Description |
|---|---|---|
| **Systematic Override** | Textarea | Global instructions injected into every AI query as the system prompt. |
| **Interview Persona** | Dropdown (12 options) | Adjusts the AI's tone and focus area automatically. |
| **Resume / Experience** | Textarea | Paste your resume, projects, or career highlights. AI references your real experience. |
| **Target Job Description** | Textarea | Paste the JD you're targeting. AI prioritizes JD-relevant technologies and skills. |

**Persona Options (12 total):**

| Category | Personas |
|---|---|
| **Engineering** | Software Engineer (General) · Frontend Engineer · Backend Engineer · Full Stack Engineer · Mobile App Developer · DevOps / Cloud Engineer · ML / AI Engineer · QA / Test Engineer |
| **Leadership & Strategy** | System Architect · Engineering Manager · Data / Business Analyst · Product Manager |
| **Other** | None (Raw Prompt Only) |

---

### Tab 3: 📦 Models

| Field | Type | Description |
|---|---|---|
| **Existing Models List** | Dynamic List | Shows all custom models with provider and model ID. Each has a "Remove" button. |
| **Provider** | Dropdown | `Ollama (Custom URL)` or `OpenRouter`. |
| **Display Label** | Text Input | Name shown in the model selection dropdown (e.g. "My Qwen Assistant"). |
| **Model ID** | Text Input | Exact model identifier from the provider (e.g. `qwen/qwen3.6-plus:free` or `llama3`). |
| **API Key** | Password Input | Private OpenRouter token. Only shown when provider = OpenRouter. Stored locally. |
| **Base URL** | Text Input | Local address for Ollama instance. Only shown when provider = Ollama. Default: `http://127.0.0.1:11434`. |

---

### Tab 4: 🖥️ App Settings

| Field | Type | Description |
|---|---|---|
| **Visibility & Tracking** | Dropdown | `Stealth Mode (Hidden / Always On Top)` or `Normal Mode (Standard Window)`. |

---

### Tab 5: 🎙️ Voice & AI

| Field | Type | Description |
|---|---|---|
| **AssemblyAI API Key** | Password Input | Your private API key for real-time transcription. Stored locally. |
| **Test Connection** | Button | Validates the API key by opening a test WebSocket to AssemblyAI. Shows ✅ or ❌ result. |

**Inline Controls Reference:**
- `Ctrl+Shift+B` — Toggle Recording Window
- `F10` — Fetch Last Transcription & Ask AI

---

### Tab 6: 📋 Shortcuts

Full reference list of all global keyboard shortcuts (read-only display).

---

### Tab 7: ℹ️ About

| Field | Value |
|---|---|
| **Author** | Puskar-Roy |
| **Source Code** | [github.com/Puskar-Roy/Imposter](https://github.com/Puskar-Roy/Imposter) |
| **Disclaimer** | ⚠️ Educational Research Only — developed strictly for educational and conceptual research. |

---

## ⌨️ Complete Keyboard Shortcuts Reference

### 🔑 Global Shortcuts (Work from anywhere on the system)

| Shortcut | Action | Category |
|---|---|---|
| `Ctrl + Shift + I` | **Focus Input** — Jump cursor to the AI prompt input box | Navigation |
| `Ctrl + Shift + Enter` | **Stealth Search** — Trigger the AI query from anywhere | AI |
| `Ctrl + Shift + C` | **Deep Copy** — Copy the entire raw AI response to clipboard | Clipboard |
| `Ctrl + Shift + Q` | **Emergency Exit** — Quit the app instantly | System |
| `Ctrl + Shift + D` | **Debug Override** — Toggle Electron Developer Tools | Debug |
| `Ctrl + Shift + S` | **Screen Snip** — Launch the OCR snipping tool | OCR |
| `Ctrl + Shift + B` | **Toggle Voice Recording** — Start/stop system audio transcription + Dynamic Island | Voice |
| `F10` | **AI Voice Query** — Grab last transcript and ask AI (response shown in Island) | Voice + AI |
| `Ctrl + Up` | **Move Window Up** — Nudge the app window up by 10px | Window |
| `Ctrl + Down` | **Move Window Down** — Nudge the app window down by 10px | Window |
| `Ctrl + Left` | **Move Window Left** — Nudge the app window left by 10px | Window |
| `Ctrl + Right` | **Move Window Right** — Nudge the app window right by 10px | Window |
| `Ctrl + =` | **Zoom In / Resize Larger** — Increase window size by 50px in both dimensions | Window |
| `Ctrl + -` | **Zoom Out / Resize Smaller** — Decrease window size by 50px in both dimensions | Window |

### 🖥️ In-App Shortcuts

| Shortcut | Action | Context |
|---|---|---|
| `Enter` | Send prompt (same as clicking the Send button) | Prompt Input |
| `Shift + Enter` | New line in prompt (does not send) | Prompt Input |
| `Escape` | Close any open overlay (Settings / Onboarding) | Settings Modal |
| `Escape` | Cancel active snip | Snipping Tool |

---

## 🏗️ Technical Architecture

### Process Model

| Process | Role |
|---|---|
| **Main Process** (`src/main/`) | Window management, IPC handlers, global shortcuts, content protection, proxy config, transcription backend |
| **Renderer Process** (`src/renderer/`) | UI rendering, chat logic, API calls, markdown parsing, audio capture, settings management |
| **Preload Bridge** (`preload.js`) | Secure IPC bridge via `contextBridge.exposeInMainWorld()` — strict `contextIsolation: true` |

### Module Architecture

```
src/
├── main/
│   ├── index.js              # App entry — lifecycle, proxy, display media handler
│   ├── window-manager.js     # Creates Main, Island, and Snipper windows
│   ├── shortcuts.js          # Registers all global keyboard shortcuts
│   ├── ipc-handlers.js       # IPC message routing (OCR, Ollama, transcription, app mode)
│   ├── transcription.js      # AssemblyAI WebSocket client (backend)
│   ├── preload.js            # Main window IPC bridge
│   └── preload_snipper.js    # Snipper window IPC bridge
│
├── renderer/
│   ├── index.html            # Main app UI
│   ├── island.html           # Dynamic Island floating overlay
│   ├── snipper.html          # Full-screen snip overlay
│   ├── js/
│   │   ├── app.js            # Core app logic, event wiring, search pipeline
│   │   ├── api.js            # Ollama + OpenRouter API clients
│   │   ├── config.js         # Config persistence, system prompt builder, model storage
│   │   ├── ui.js             # UI helpers (greeting, loading, errors, reasoning trace)
│   │   ├── markdown.js       # Markdown parser + syntax-highlighted code renderer
│   │   ├── assembly-service.js  # Audio capture + AssemblyAI transcription (renderer-side)
│   │   ├── pcm-worklet.js    # AudioWorklet PCM processor (16kHz, 100ms buffer)
│   │   └── snipper.js        # Snip tool (click-drag selection + OCR trigger)
│   └── css/
│       ├── base.css           # Design tokens, scrollbar styles
│       ├── layout.css         # App container, header, chat stage layout
│       ├── snipper.css        # Snip overlay + selection box styles
│       └── components/
│           ├── chat.css       # Chat bubbles, code blocks, loading animation
│           ├── input.css      # Prompt input, send button, shortcut hints
│           ├── modal.css      # Settings panel (sidebar + tabs + fields)
│           ├── models.css     # Model list + add model form
│           └── onboarding.css # First-run onboarding card
```

### Window Inventory

| Window | Size | Properties |
|---|---|---|
| **Main Window** | 900 × 500 | Transparent, Frameless, Always-on-top, Skip taskbar, Content protected, 90% opacity |
| **Dynamic Island** | 600 × 80 | Transparent, Frameless, Always-on-top, Skip taskbar, Content protected, Draggable, Pill-shaped |
| **Snipper Overlay** | Full-screen | Transparent, Frameless, Always-on-top, Skip taskbar, Content protected |

---

## 🔐 Security & Privacy

| Feature | Details |
|---|---|
| **100% Local Data** | All user config (name, system prompt, resume, JD, API keys) stored in browser `localStorage`. Nothing leaves the machine. |
| **Content Security Policy** | Strict CSP headers — whitelists only `self`, specific CDNs, `127.0.0.1:11434` (Ollama), `openrouter.ai`, and `assemblyai.com`. |
| **Context Isolation** | `contextIsolation: true`, `nodeIntegration: false` — renderer has zero access to Node.js APIs. |
| **Secure IPC Bridge** | All main ↔ renderer communication goes through a curated `contextBridge` API. |
| **No GPU Cache** | `--disable-gpu-cache` flag prevents GPU data persistence. |
| **Proxy Bypass** | Explicit proxy bypass for `127.0.0.1` and `localhost` to ensure local connections work. |
| **Single Instance Lock** | Prevents duplicate app processes from running. |
| **Content Protection** | OS-level screen capture protection on all windows. |

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `electron` | ^30.0.0 | Desktop app framework |
| `electron-builder` | ^26.8.1 | Windows installer (.exe) builder |
| `dotenv` | ^17.4.0 | Environment variable loader |
| `highlight.js` | ^11.9.0 | Syntax highlighting for code blocks |
| `marked` | ^12.0.0 | Markdown → HTML parser (GFM) |
| `tesseract.js` | ^7.0.0 | OCR engine (English) |
| `ws` | ^8.20.0 | WebSocket client for AssemblyAI |

**Bundled Assets:**
- `eng.traineddata` — Pre-trained Tesseract English language model (~5 MB)

---

## 🖼️ Design System

| Token | Value |
|---|---|
| **Background** | `#212121` |
| **Surface** | `#2f2f2f` |
| **Accent (Primary)** | `#10a37f` (Emerald Green) |
| **Accent (Hover)** | `#1abc9c` (Bright Teal) |
| **Text Primary** | `#ececec` |
| **Text Secondary** | `#9b9b9b` |
| **Border** | `#424242` |
| **Code Background** | `#0d1117` (GitHub Dark) |
| **Error** | `#ff4a4a` / `#ff6b6b` |
| **Fonts** | Inter (UI) · Outfit (Display) · Fira Code (Monospace) |
| **Scrollbar** | Custom thin dark scrollbar (8px) |

---

## 🚀 Build & Distribution

| Command | Action |
|---|---|
| `npm start` | Launch in development mode |
| `npm run dist` | Build Windows installer (.exe) via `electron-builder` |

**Build Targets:**
- `nsis` — Full installer with installation directory selection + desktop shortcut
- `portable` — Standalone portable `.exe` (no install needed)

**Build Output:** `/dist` folder

---

## 📋 IPC Channel Map (Complete)

All inter-process communication channels between Main ↔ Renderer:

### Invoke Channels (Request → Response)

| Channel | Direction | Purpose |
|---|---|---|
| `get-desktop-source-id` | Renderer → Main | Get primary screen source ID for audio capture |
| `test-assembly-key` | Renderer → Main | Test AssemblyAI WebSocket connection |
| `start-transcription` | Renderer → Main | Start AssemblyAI WebSocket session |
| `ollama-call` | Renderer → Main | Proxy HTTP request to Ollama / OpenRouter (bypasses CORS) |

### Send Channels (Fire-and-Forget)

| Channel | Direction | Purpose |
|---|---|---|
| `stop-transcription` | Renderer → Main | Close AssemblyAI WebSocket |
| `send-audio-chunk` | Renderer → Main | Forward audio data to transcription backend |
| `snip-crop` | Renderer → Main | Send snipped region for OCR processing |
| `cancel-snip` | Renderer → Main | Dismiss snip overlay |
| `set-app-mode` | Renderer → Main | Switch between Stealth / Normal mode |
| `minimize-app` | Renderer → Main | Minimize the main window |
| `close-app` | Renderer → Main | Quit the application |
| `restart-app` | Renderer → Main | Relaunch the application |
| `open-island-window` | Renderer → Main | Create and show the Dynamic Island |
| `close-island-window` | Renderer → Main | Destroy the Dynamic Island |
| `send-ai-to-island` | Renderer → Main | Relay AI response text to the Island window |

### Event Channels (Main → Renderer)

| Channel | Direction | Purpose |
|---|---|---|
| `focus-input` | Main → Renderer | Focus the prompt input box |
| `trigger-search` | Main → Renderer | Trigger AI search |
| `trigger-ai-search` | Main → Renderer | F10 voice-to-AI pipeline |
| `toggle-auto-reply` | Main → Renderer | Toggle voice recording + Island |
| `scroll` | Main → Renderer | Smooth scroll the chat |
| `copy-main` | Main → Renderer | Copy raw AI response to clipboard |
| `ocr-result` | Main → Renderer | Return OCR-extracted text from snip |
| `transcription-data` | Main → Renderer/Island | Real-time transcription data from AssemblyAI |
| `transcription-status` | Main → Renderer | Transcription connection status updates |
| `ai-response` | Main → Island | AI response text to display in Island |
| `load-image` | Main → Snipper | Send screenshot data to snip overlay |

---

## 📊 Feature Count Summary

| Category | Count |
|---|---|
| **Major Features** | 7 (Stealth Window, Dual Modes, AI Chat, Multi-Provider, Voice Transcription, Screen Snip + OCR, Model Management) |
| **Global Keyboard Shortcuts** | 14 |
| **In-App Keyboard Shortcuts** | 4 |
| **Settings Tabs** | 7 (Profile, AI Engine, Models, App Settings, Voice & AI, Shortcuts, About) |
| **Settings Fields** | 11 configurable fields |
| **AI Personas** | 12 pre-built + 1 raw mode |
| **AI Providers** | 2 (Ollama Local, OpenRouter Cloud) |
| **Window Types** | 3 (Main, Dynamic Island, Snipper) |
| **IPC Channels** | 23 total |
| **Dependencies** | 7 (5 runtime + 2 dev) |

---
\

> ⚠️ **Disclaimer:** This software is provided strictly for **educational, research, and personal productivity purposes**. Use responsibly.
