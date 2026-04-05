# Imposter: Discrete AI Assistant

<div align="center">
  <img src="public/logo.png" width="128" alt="Imposter Logo">
  <h3>A seamless, unobtrusive AI interface for your desktop environment.</h3>
  <br>
  <img src="public/imposter.png" alt="Imposter Application Banner" width="100%">
</div>

---

## The "Stealth Mode" Architecture

**Imposter** is a background-first AI assistant application designed for maximum discretion. Built on a specialized architecture, it remains hidden, non-intrusive, and computationally isolated from your primary workflows until explicitly triggered.

![Imposter Architecture](public/architecture-diagram.png)

### Key Capabilities (Overview)

| Category | Highlights |
|---|---|
| **Interface** | Frameless • Transparent • Always-on-top • OS-level Content Protection (Hidden from screen-shares) |
| **Intelligent Engine** | Multi-turn memory • Custom Instruction Context • Markdown rendering + Syntax Highlighting |
| **Multi-Provider** | Zero-latency local models via **Ollama** • Cloud models via **OpenRouter** |
| **Audio Processing** | Live system audio capture • AssemblyAI transcription • Floating "Dynamic Island" overlay |
| **Screen Capture & OCR** | Full-screen coordinate crop • Local Tesseract.js text extraction • Auto-fills the search prompt |

> **Comprehensive Documentation**  
> For a full breakdown of the persona engine, configuration panels, and all system options, please review the **[Complete Feature Map & Inventory](docs/features.md)**.

---

## How it Works

Imposter operates as a high-performance **Electron-based shell** communicating directly with your local **Ollama** instance or premium cloud endpoints. To ensure absolute privacy, all application data—including system prompts, configuration variables, and custom personas—is stored **100% locally** on your device.

For a technical deep dive into the IPC communication, Context Isolation, PCM Audio Streaming pipelines, and DRM-level stealth mechanics, please reference the **[Official Architecture & Developer Guide](docs/architecture-guide.md)**.

---

## Educational Notice

> [!WARNING]
> This application is provided strictly for **educational, developmental, and personal productivity purposes**. The author assumes no responsibility for any misuse or compliance violations associated with the deployment of this software.

---

## Global Shortcuts

Control the application seamlessly via hardcoded system-level shortcuts:

| Shortcut | System Action |
| :--- | :--- |
| `Ctrl + Shift + I` | **Focus Input**: Shift system focus directly to the prompt input. |
| `Ctrl + Shift + Enter` | **Execute Query**: Trigger the AI process from any context. |
| `Ctrl + Shift + Up/Down` | **Vertical Scroll**: Navigate AI responses without external pointer input. |
| `Ctrl + Shift + C` | **Deep Copy**: Copy the entire raw AI response directly to the system clipboard. |
| `Ctrl + Shift + Q` | **Terminate**: Force close the application instantly. |
| `Ctrl + Shift + D` | **Debug**: Toggle Developer Tools for system and rendering analysis. |

---

## Installation & Setup

### Prerequisites
*   **[Ollama](https://ollama.com/)**: Must be deployed and running locally on port `11434`.
*   **Node.js**: The latest LTS version is recommended.

### Local Development
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Puskar-Roy/imposter.git
    cd imposter
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Launch the Environment**:
    ```bash
    npm start
    ```

### Production Build (.exe)
To compile a standalone Windows executable for deployment:
```bash
npm run dist
```
Compiled binaries are output to the `/dist` directory.

---

## Architecture & Maintenance
Developed by **[Puskar Roy](https://github.com/Puskar-Roy)**.
