# Imposter Developer & Architecture Guide

Welcome to the internal documentation for **Imposter**, a ghost-like desktop assistance tool built with Electron.

This document breaks down the core architecture, explaining the flow between the Operating System, the Native Node.js backends, the Chromium user interfaces, and the external AI clusters.

## 1. High-Level System Architecture

Imposter relies heavily on Electron's multi-process architecture. To keep the UI secure (Context Isolation) while still maintaining deep OS access (Global Shortcuts, Screen Snip, raw PCM Audio), we use strict Inter-Process Communication (IPC).

### Beautiful System Flow
![Architecture Color Diagram](../public/architecture-color.png)
*(This diagram illustrates the high-level boundaries between the OS, Main Node Process, Preload Bridge, and the three distinct UI Renderers).*

---

## 2. Process Breakdown

### The Main Process (`src/main/`)
The Main Process executes entirely in Node.js and acts as the "Brain" of the operation.
*   **Window Manager:** Spawns `index.html` (Main Chat), `snipper.html` (Screen Crop), and `island.html` (Dynamic Island Overlay). It forces them to be transparent, frameless, and completely hidden from Discord/Teams/OBS screen sharing pipelines.
*   **Shortcut Orchestrator:** Listens globally to keystrokes.
*   **WebSockets & API Hub:** Instead of dealing with CORS inside Chromium, all outgoing AI traffic (Ollama REST, OpenRouter REST, and AssemblyAI WebSockets) is piped through here using native `net.fetch()` and Node WebSockets.

### The Renderer Processes (`src/renderer/`)
These behave exactly like normal browser tabs but are individually tailored.
*   **Chat UI:** Displays conversations, renders Markdown, sets configurations.
*   **Dynamic Island:** A floating widget explicitly built to render rapid WebSocket transcription texts in real-time.
*   **Snipper UI:** A fullscreen invisible canvas that captures mouse drag coordinates to crop screenshots.

### The Bridge (`preload.js`)
To prevent severe security vulnerabilities, `contextIsolation` is enabled. The Renderers cannot use `require('fs')` or other node modules. They communicate upward to the Main Process exclusively via `window.electronAPI.channelName()`.

---

## 3. Comprehensive Data Flow Diagram

For developers wanting to see exactly what IPC channels talk to which modules, trace this Mermaid diagram.

![Architecture Diagram (Mermaid Render)](../public/architecture-diagram.png)

### The Voice Pipeline (How it works under the hood)
1. User clicks the "Voice" trigger. 
2. The UI uses `navigator.mediaDevices.getDisplayMedia` to grab system/mic audio.
3. We pass that stream into an `AudioWorklet` (which runs in an isolated JS thread) to accurately construct raw PCM buffer arrays.
4. The Worklet rapidly fires generic base64 chunks through the Preload Bridge to the Main Process.
5. The Main Process pumps these chunks up via a continuous `wss://` stream to AssemblyAI.
6. The JSON responses are caught by the Main Process and rebroadcast downwards to *both* the Main Window and the Dynamic Island window simultaneously.

### The "Snipper" Pipeline (How OCR works)
1. User hits `Ctrl+Shift+S`.
2. The Main Process takes a full-screen screenshot via `desktopCapturer`.
3. It spawns the fullscreen Snipper renderer and paints the screenshot onto the HTML `<canvas>`.
4. The user drags a box. The `(x, y, width, height)` coordinates drop back to the Main process.
5. The Main process crops the original screenshot using Electron's `nativeImage` library.
6. Local Node.js Tesseract OCR runs over the pixel data. 
7. The extracted text string traverses back up to the Chat UI textarea.

---

## 4. Development Hurdles & Crash Prevention

When modifying the pipeline, keep these critical protections in mind:

*   **Aborting Rogue AI Requests:** Premium AI endpoints (like OpenRouter's massive reasoning models) can hang for 120 seconds. We implemented aggressive `AbortControllers` and `setTimeout(120s)` inside the Main Process's `ollama-call` to prevent the UI from deadlocking permanently.
*   **Preventing WS Thread Locks:** If a user toggles the mic repeatedly, the WebSocket pipeline could fragment. Check `isConnecting` state guards in `transcription.js` which throttle new WSS attempts and tear down `AudioWorklets` rigorously. 
*   **Renderer Process Deaths ("White Screens"):** Deep inside `window-manager.js`, the main process listens for `win.webContents.on('render-process-gone')`. If the Chromium thread crashes (due to excessive memory/WebGL overload), the Main process kills the dead husk and instantly respawns a fresh UI to maintain the "invisible" illusion.
