import React from 'react';
import { motion } from 'framer-motion';
import { Clock, IndianRupee, Users, Shield, ChevronRight } from 'lucide-react';

const tournaments = [
  {
    id: 'bgmi-001',
    game: 'BGMI',
    name: 'BGMI Daily Solo - Bronze Tier',
    entry: 20,
    prize: 1500,
    startIn: '15m',
    participants: 72,
    max: 100,
    mode: 'Solo',
    tier: 'Bronze',
  },
  {
    id: 'ff-034',
    game: 'Free Fire',
    name: 'Free Fire Rush Duo - Silver',
    entry: 30,
    prize: 2500,
    startIn: '28m',
    participants: 44,
    max: 100,
    mode: 'Duo',
    tier: 'Silver',
  },
  {
    id: 'val-009',
    game: 'Valorant',
    name: 'Valorant 5v5 Cup - Gold',
    entry: 50,
    prize: 5000,
    startIn: '50m',
    participants: 16,
    max: 32,
    mode: 'Squad',
    tier: 'Gold',
  },
];

function JoinBadge({ entry }) {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/15">
      <IndianRupee className="h-3 w-3" /> {entry}
    </span>
  );
}

function TierBadge({ tier }) {
  const map = {
    Bronze: 'from-amber-400/30 to-amber-500/10',
    Silver: 'from-slate-300/30 to-slate-100/10',
    Gold: 'from-yellow-300/30 to-yellow-200/10',
    Diamond: 'from-cyan-300/30 to-cyan-200/10',
  };
  return (
    <span className={`text-[11px] px-2 py-1 rounded-full border border-white/15 bg-gradient-to-r ${map[tier] || 'from-white/10 to-white/5'}`}>{tier}</span>
  );
}

const TournamentCard = ({ t }) => (
  <motion.a
    href={`#/tournament/${t.id}`}
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className="group relative rounded-2xl p-4 bg-white/5 border border-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(102,126,234,0.25)] transition overflow-hidden"
  >
    <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-[#667eea]/20 via-[#764ba2]/10 to-transparent" />
    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <div className="font-semibold tracking-wide">{t.game}</div>
        <div className="flex items-center gap-2">
          <TierBadge tier={t.tier} />
          <JoinBadge entry={t.entry} />
        </div>
      </div>
      <h3 className="mt-1 text-base sm:text-lg font-bold text-white/90">{t.name}</h3>
      <div className="mt-2 flex items-center gap-3 text-white/70 text-xs">
        <div className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> Starts in {t.startIn}</div>
        <div className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> {t.participants}/{t.max}</div>
        <div className="inline-flex items-center gap-1"><Shield className="h-4 w-4" /> {t.mode}</div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-white/80">Prize Pool</div>
        <div className="text-lg font-bold">₹{t.prize.toLocaleString()}</div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#00c2a8] text-black font-semibold shadow-[0_0_18px_rgba(0,255,136,0.4)] group-hover:shadow-[0_0_30px_rgba(0,255,136,0.55)] transition">
          Join
        </button>
        <div className="text-xs text-white/60 inline-flex items-center gap-1">
          Details <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  </motion.a>
);

export default function TournamentGrid() {
  return (
    <section id="tournaments" className="mt-6 mb-24">
      {/* Filters */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {['All', 'BGMI', 'Free Fire', 'Valorant', 'Solo', 'Duo', 'Squad', '₹10-20', '₹30-50'].map((f, idx) => (
          <button
            key={f}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs border transition ${
              idx === 0
                ? 'bg-white/15 border-white/20'
                : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tournaments.map((t) => (
          <TournamentCard key={t.id} t={t} />
        ))}
      </div>

      {/* Recommended banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-6 rounded-2xl p-4 border border-white/10 bg-gradient-to-r from-[#f857a6]/10 via-transparent to-[#4facfe]/10"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm text-white/80">Recommended for you</p>
            <p className="text-base font-semibold">Skill-matched tournaments based on your recent wins</p>
          </div>
          <a href="#personalized" className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition">
            Explore Picks
          </a>
        </div>
      </motion.div>
    </section>
  );
}
