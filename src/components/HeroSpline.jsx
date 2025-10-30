import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section className="relative w-full">
      <div className="relative h-[360px] sm:h-[420px] md:h-[520px] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 backdrop-blur-sm text-xs md:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
              <span className="text-white/80">Daily esports tournaments in India</span>
            </div>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#00ff88] bg-clip-text text-transparent">GrindArena</span>
              <span className="block text-white/90 mt-1 text-lg sm:text-xl md:text-2xl">Play. Win. Withdraw. Repeat.</span>
            </h1>
            <p className="mt-3 max-w-xl text-white/70 text-sm md:text-base">
              Join skill-tiered tournaments for BGMI, Free Fire, and Valorant. UPI withdrawals, anti-cheat AI, and instant payouts.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#tournaments"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#00c2a8] text-black font-semibold shadow-[0_0_24px_rgba(0,255,136,0.4)] hover:shadow-[0_0_40px_rgba(0,255,136,0.55)] transition"
              >
                <Rocket className="h-4 w-4" />
                Play Now
              </a>
              <a
                href="#rewards"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-white/10 hover:bg-white/15 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Gradient overlay for readability - must not block Spline interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent" />
      </div>
    </section>
  );
}
