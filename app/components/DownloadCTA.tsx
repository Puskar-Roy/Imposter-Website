import React from 'react';

const DownloadCTA = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      <div className="p-4 bg-primary/10 text-primary rounded-full mb-10 w-20 h-20 flex items-center justify-center animate-pulse">
        {/* Windows Logo SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Ready to disappear?</h2>
      <p className="text-zinc-400 mb-10 max-w-xl text-sm sm:text-base">
        Download Imposter for Windows. One installer. No account required.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a href="https://github.com/Puskar-Roy/Imposter/releases" className="btn-premium px-8 sm:px-12 py-4 text-base sm:text-xl flex items-center justify-center gap-3">
          {/* Windows icon inline */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
          </svg>
          Download for Windows
        </a>
        <a href="https://github.com/Puskar-Roy/Imposter" target="_blank" className="px-8 sm:px-12 py-4 text-base sm:text-xl border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
          View Source
        </a>
      </div>

      <div className="mt-16 pt-16 border-t border-white/5 w-full flex flex-col sm:flex-row justify-between items-center gap-8 text-zinc-600 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center font-bold text-black text-xs">I</div>
           <span>© 2026 Imposter AI. All rights reserved.</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="https://github.com/Puskar-Roy/Imposter" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
