"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Download, 
  Monitor, 
  Apple, 
  Terminal, 
  RefreshCw, 
  LogOut, 
  Activity,
  ArrowUpRight
} from 'lucide-react';

interface Stats {
  total: number;
  windows: number;
  mac: number;
  linux: number;
  lastUpdated: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  const fetchStats = async () => {
    setRefreshing(true);
    try {
      const res = await fetch('/api/admin/stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      } else if (res.status === 401) {
        router.push('/admin/login');
      }
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Activity className="text-primary animate-pulse" size={48} />
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Initializing Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      {/* Header */}
      <nav className="border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Download size={20} />
            </div>
            <div>
              <h1 className="text-lg font-black uppercase italic tracking-tighter">Imposter Admin</h1>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Analytics Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={fetchStats}
              disabled={refreshing}
              className={`p-2 rounded-lg border border-white/5 hover:bg-white/5 transition-all ${refreshing ? 'animate-spin' : ''}`}
            >
              <RefreshCw size={18} className="text-zinc-400" />
            </button>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg border border-red-500/20 bg-red-500/5 text-red-500 hover:bg-red-500/10 transition-all text-xs font-black uppercase tracking-widest flex items-center gap-2"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-2">Systems Overview</h2>
          <p className="text-zinc-500 font-medium">Real-time tracking of Imposter installation metrics across all platforms.</p>
        </div>

        {/* Aggregate Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-8 border-primary/10 bg-primary/[0.02] rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-primary group-hover:scale-110 transition-transform duration-500">
              <Download size={120} />
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">Total Installations</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-6xl font-black italic tracking-tighter">{stats?.total || 0}</h3>
                <span className="text-zinc-600 font-bold mb-2">Lifetime</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 glass-card p-8 border-white/5 bg-white/[0.01] rounded-[2rem] flex flex-col justify-center">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-1">Status</p>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Live Monitoring Active
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-1">Last Sync</p>
                <p className="text-xs font-mono text-zinc-400">
                  {stats ? new Date(stats.lastUpdated).toLocaleString() : 'Never'}
                </p>
              </div>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary animate-progress-buffer w-full opacity-20" />
            </div>
          </div>
        </div>

        {/* Platform Breakdown */}
        <h3 className="text-xl font-black italic uppercase tracking-tight mb-6">Platform Distribution</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <PlatformCard 
            label="Windows" 
            count={stats?.windows || 0} 
            total={stats?.total || 1} 
            icon={<Monitor size={24} />} 
            color="bg-blue-500"
          />
          <PlatformCard 
            label="macOS" 
            count={stats?.mac || 0} 
            total={stats?.total || 1} 
            icon={<Apple size={24} />} 
            color="bg-white"
          />
          <PlatformCard 
            label="Linux" 
            count={stats?.linux || 0} 
            total={stats?.total || 1} 
            icon={<Terminal size={24} />} 
            color="bg-orange-500"
          />
        </div>
      </main>
    </div>
  );
}

function PlatformCard({ label, count, total, icon, color }: { label: string, count: number, total: number, icon: React.ReactNode, color: string }) {
  const percentage = Math.round((count / (total || 1)) * 100);
  
  return (
    <div className="glass-card p-6 border-white/5 bg-white/[0.02] rounded-2xl hover:bg-white/[0.04] transition-all group">
      <div className="flex items-center justify-between mb-8">
        <div className={`p-3 rounded-xl ${color}/10 border border-${color}/20 text-white group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <div className="flex items-center gap-1 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
          {percentage}% Share
          <ArrowUpRight size={12} />
        </div>
      </div>
      
      <div>
        <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{label}</h4>
        <p className="text-3xl font-black italic tracking-tighter mb-4">{count.toLocaleString()}</p>
        
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className={`h-full ${color} transition-all duration-1000 ease-out`} 
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
