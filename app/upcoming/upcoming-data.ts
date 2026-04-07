export interface UpcomingFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  marketingPoints: { t: string; d: string }[];
  workflow?: { step: string; label: string; desc: string }[];
  disguiseDetails?: { title: string; items: string[] };
}

export const upcomingData: UpcomingFeature[] = [
  {
    id: "boss-key",
    title: "The Chameleon Switch",
    tagline: "Your Instant Identity-Swap for Panic Situations.",
    description: "Sometimes the unexpected happens. When you need to hide your competitive edge instantly, 'The Chameleon Switch' transforms Imposter into a boring, standard utility—starting with Notepad, but designed to become any simple app on your system.",
    marketingPoints: [
      { t: "The Magic Key (Ctrl+Shift+H)", d: "The ultimate panic button. One tap works globally to make the AI vanish, replaced by a perfect application disguise." },
      { t: "Dynamic UI Camouflage", d: "Instantly swaps your screen to a standard utility—like Notepad—complete with 'fake' notes and functional menu bars." },
      { t: "The 'No Cheating' Illusion", d: "Interactive typing allows you to write 'real' code if asked to share your screen. To an interviewer, you're just using a simple tool." },
      { t: "Pale Grey Suggestions", d: "Hide AI's last suggestion in extremely pale grey text at the bottom—visible only to you if you look closely." },
    ],
    disguiseDetails: {
      title: "Supported Disguise Examples:",
      items: [
        "Standard Windows Notepad (Default)",
        "Scientific Calculator UI",
        "System Calendar & Tasks",
        "Generic Text Editor (Code-safe)"
      ]
    }
  },
  {
    id: "double-display",
    title: "The Double-Display Flow",
    tagline: "The Master Move for the Ultimate Competitive Edge.",
    description: "Capture audio on your phone, process it on your desktop, and read the answers in code. The perfect bridge between your devices.",
    workflow: [
      { step: "01", label: "The Mobile 'Ear'", desc: "Your phone rests casually on your desk, capturing every word of the interview with high-fidelity system audio or microphone input." },
      { step: "02", label: "The Real-Time Bridge", desc: "Encrypted WebSocket synchronization streams audio segments instantly to your desktop 'Brain' with zero latency." },
      { step: "03", label: "The Desktop 'Brain'", desc: "Your desktop processes the audio through Gemini or local models, generating answers in real-time." },
      { step: "04", label: "The Stealth Display", desc: "Answers appear instantly inside your Disguised Notepad UI or as discreet notifications on your mobile screen." },
    ],
    marketingPoints: [
      { t: "Zero-Latency Sync", d: "Hard-wired real-time protocol ensures you see suggested answers as the interviewer is still speaking." },
      { t: "Remote Extraction", d: "Record audio in a separate room or from a different device to keep your main machine completely 'clean'." },
      { t: "Glanceable Answers", d: "Choose where you want to see the suggestion: on your PC monitor or a quick look at your phone screen." },
    ]
  },
  {
    id: "model-compare",
    title: "Multi-Model Compare",
    tagline: "The Fact-Checking Power of Parallel Intelligence.",
    description: "Sometimes one AI isn't enough. Our upcoming Split-View lets you verify answers by querying local and cloud models simultaneously.",
    marketingPoints: [
      { t: "Parallel Inference", d: "Send the same prompt to Ollama, Gemini, and OpenRouter at the same time and see results side-by-side." },
      { t: "Truth Verification", d: "Instantly spot hallucinations by comparing different model outputs in real-time." },
      { t: "Low-Latency Local Backup", d: "Always have a local Llama model running alongside cloud models for guaranteed availability." },
    ]
  }
];
