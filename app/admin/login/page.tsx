"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Lock, User, ArrowRight, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push('/admin');
      } else {
        const data = await res.json();
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10 animate-fade-in">
        <div className="glass-card p-10 border-white/5 bg-zinc-950/50 backdrop-blur-2xl shadow-2xl rounded-[2rem]">
          <div className="text-center mb-10">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 border border-primary/20">
              <Shield size={32} />
            </div>
            <h1 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-2">
              Admin Portal
            </h1>
            <p className="text-zinc-500 text-sm font-medium tracking-wide">
              Secure access to Imposter Analytics
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2">
                Username
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-primary transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2">
                Password
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-primary transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold text-center animate-shake">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-premium w-full py-4 text-sm font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(0,166,126,0.2)]"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Enter Dashboard
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-[10px] text-zinc-600 italic font-medium uppercase tracking-widest">
            Authorized Personnel Only
          </p>
        </div>
      </div>
    </div>
  );
}
