import React from 'react';
import { Home, Gamepad2, Plus, Trophy, User } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 md:hidden">
      <div className="mx-auto max-w-xl">
        <div className="relative m-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_-6px_40px_rgba(118,75,162,0.25)]">
          <div className="grid grid-cols-5 items-center text-white/80">
            <a href="#home" className="flex flex-col items-center py-3 text-xs hover:text-white">
              <Home className="h-6 w-6" />
              <span className="mt-1">Home</span>
            </a>
            <a href="#tournaments" className="flex flex-col items-center py-3 text-xs hover:text-white">
              <Gamepad2 className="h-6 w-6" />
              <span className="mt-1">Play</span>
            </a>
            <div className="flex items-center justify-center">
              <a
                href="#create"
                className="-mt-6 inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-[#f857a6] to-[#ff5858] shadow-[0_0_30px_rgba(248,87,166,0.6)] border-2 border-white/20"
                aria-label="Create"
              >
                <Plus className="h-7 w-7" />
              </a>
            </div>
            <a href="#leaderboard" className="flex flex-col items-center py-3 text-xs hover:text-white">
              <Trophy className="h-6 w-6" />
              <span className="mt-1">Ranks</span>
            </a>
            <a href="#profile" className="flex flex-col items-center py-3 text-xs hover:text-white">
              <User className="h-6 w-6" />
              <span className="mt-1">Profile</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
