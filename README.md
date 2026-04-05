# Imposter: Discrete AI Assistant

<div align="center">
  <img src="public/images/logo.png" width="48" alt="Imposter Logo">
  <h3>A seamless, unobtrusive AI interface for your desktop environment.</h3>
</div>

---

## Project Overview

Imposter is a background-first AI assistant application designed for maximum discretion. Built on a specialized architecture, it remains hidden, non-intrusive, and computationally isolated from primary workflows until explicitly triggered. This repository contains the source code for the official landing page and distribution hub.

---

## Technical Architecture

The application leverages a high-performance Electron-based shell communicating directly with local Ollama instances or premium cloud endpoints. To ensure absolute privacy, all application data—including system prompts, configuration variables, and custom personas—is stored locally on the user's device.

### System Capabilities

| Category | Highlights |
|---|---|
| **Interface** | Frameless, Transparent, Always-on-top, OS-level Content Protection |
| **Intelligent Engine** | Multi-turn memory, Custom Instruction Context, Markdown rendering |
| **Multi-Provider** | Local models via Ollama, Cloud models via OpenRouter |
| **Audio Processing** | Live system audio capture, AssemblyAI transcription, Dynamic Island overlay |
| **Screen Capture & OCR** | Full-screen coordinate crop, Local Tesseract.js text extraction |

---

## Global Shortcuts

Control the application via system-level shortcuts:

| Shortcut | System Action |
| :--- | :--- |
| `Ctrl + Shift + I` | Focus Input |
| `Ctrl + Shift + Enter` | Execute Query |
| `Ctrl + Shift + Up/Down` | Vertical Scroll |
| `Ctrl + Shift + C` | Deep Copy AI Response |
| `Ctrl + Shift + Q` | Terminate Application |
| `Ctrl + Shift + D` | Toggle Developer Tools |

---

## Getting Started

### Local Development

1. **Install Dependencies**:
   ```bash
   pnpm install
   ```
2. **Launch the Environment**:
   ```bash
   pnpm dev
   ```
3. **Build for Production**:
   ```bash
   pnpm build
   ```

---

## Metadata and Maintenance

Developed by Puskar Roy. All application assets, prompts, and local history are stored securely on the host machine.

© 2026 Imposter AI. All rights reserved.
