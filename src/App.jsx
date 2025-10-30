import React from 'react';
import HeroSpline from './components/HeroSpline';
import QuickStats from './components/QuickStats';
import TournamentGrid from './components/TournamentGrid';
import MobileNav from './components/MobileNav';
import { Bell, Search } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f1a] text-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-[0_0_24px_rgba(102,126,234,0.6)] flex items-center justify-center font-bold">GA</div>
          <div className="flex-1 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="Search tournaments, games, players"
              />
            </div>
            <button className="relative p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] rounded-full bg-rose-500 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-24">{/* padding for mobile nav */}
        <HeroSpline />
        <section className="max-w-6xl mx-auto px-4">
          <QuickStats />
          <TournamentGrid />
        </section>
      </main>

      {/* Mobile Bottom Nav */}
      <MobileNav />

      {/* Background gradient accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#00f2fe]/20 to-[#4facfe]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#f857a6]/20 to-[#ff5858]/10 blur-3xl" />
      </div>
    </div>
  );
}
