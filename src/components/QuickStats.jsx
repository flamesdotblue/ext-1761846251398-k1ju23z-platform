import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Award, BarChart3 } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, accentFrom, accentTo }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="relative rounded-xl p-4 bg-white/5 border border-white/10 overflow-hidden"
  >
    <div className={`absolute inset-0 opacity-30 pointer-events-none bg-gradient-to-tr ${accentFrom} ${accentTo} blur-xl`} />
    <div className="relative z-10 flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-white/10 border border-white/10">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs text-white/60">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  </motion.div>
);

export default function QuickStats() {
  return (
    <section id="rewards" className="mt-6 mb-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <StatCard
          icon={IndianRupee}
          label="Total Earnings"
          value="₹12,450"
          accentFrom="from-[#00f2fe]/20"
          accentTo="to-[#4facfe]/10"
        />
        <StatCard
          icon={Award}
          label="Tournaments Won"
          value="27"
          accentFrom="from-[#667eea]/20"
          accentTo="to-[#764ba2]/10"
        />
        <StatCard
          icon={BarChart3}
          label="ELO Rank"
          value="Diamond • 2104"
          accentFrom="from-[#00ff88]/20"
          accentTo="to-[#00c2a8]/10"
        />
      </div>
    </section>
  );
}
