import React from 'react';
import { Building2, TrendingUp, DollarSign, Users, Award, BarChart2, ArrowRight } from 'lucide-react';

interface OwnerCommandCenterProps {
  onOpenDemo: (type?: string) => void;
}

export const OwnerCommandCenter: React.FC<OwnerCommandCenterProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 md:py-28 bg-[#070A11] theme-light:bg-slate-50 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 theme-light:bg-purple-50 border border-purple-500/30 text-purple-300 theme-light:text-purple-700 text-xs font-semibold">
            <span>EXECUTIVE DECISION ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white theme-light:text-slate-900 tracking-tight">
            Your Salon. <br />
            <span className="text-gradient-purple">At a Glance.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 theme-light:text-slate-600">
            Get instant financial clarity without spending every hour on the salon floor.
          </p>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          
          <div className="glass-card p-5 rounded-xl border border-slate-800 theme-light:border-slate-200 space-y-1">
            <div className="text-[11px] text-slate-400 theme-light:text-slate-500 font-semibold uppercase">Today's Revenue</div>
            <div className="text-2xl font-bold font-heading text-white theme-light:text-slate-900">₹84,250</div>
            <div className="text-[10px] text-emerald-400 theme-light:text-emerald-700 font-bold">+18.4% vs yesterday</div>
          </div>

          <div className="glass-card p-5 rounded-xl border border-slate-800 theme-light:border-slate-200 space-y-1">
            <div className="text-[11px] text-slate-400 theme-light:text-slate-500 font-semibold uppercase">Monthly Revenue</div>
            <div className="text-2xl font-bold font-heading text-white theme-light:text-slate-900">₹8,40,000</div>
            <div className="text-[10px] text-emerald-400 theme-light:text-emerald-700 font-bold">On track for target</div>
          </div>

          <div className="glass-card p-5 rounded-xl border border-slate-800 theme-light:border-slate-200 space-y-1">
            <div className="text-[11px] text-slate-400 theme-light:text-slate-500 font-semibold uppercase">Guests Served</div>
            <div className="text-2xl font-bold font-heading text-white theme-light:text-slate-900">128</div>
            <div className="text-[10px] text-indigo-300 theme-light:text-indigo-700 font-bold">Avg 18 min wait</div>
          </div>

          <div className="glass-card p-5 rounded-xl border border-slate-800 theme-light:border-slate-200 space-y-1">
            <div className="text-[11px] text-slate-400 theme-light:text-slate-500 font-semibold uppercase">Average Bill</div>
            <div className="text-2xl font-bold font-heading text-white theme-light:text-slate-900">₹1,245</div>
            <div className="text-[10px] text-purple-300 theme-light:text-purple-700 font-bold">+12% upsell rate</div>
          </div>

          <div className="glass-card p-5 rounded-xl border border-purple-500/40 theme-light:border-purple-200 bg-purple-950/20 theme-light:bg-purple-50/50 col-span-2 md:col-span-1 space-y-1">
            <div className="text-[11px] text-purple-300 theme-light:text-purple-800 font-semibold uppercase">Est. Net Profit</div>
            <div className="text-2xl font-bold font-heading text-purple-300 theme-light:text-purple-900">₹2,10,000</div>
            <div className="text-[10px] text-emerald-400 theme-light:text-emerald-700 font-bold">28.4% Net Margin</div>
          </div>

        </div>

        {/* Multi-Metric Breakdown Bars */}
        <div className="mt-8 max-w-5xl mx-auto glass-panel p-6 rounded-2xl border border-slate-800 theme-light:border-slate-200 space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300 theme-light:text-slate-700">
            <span>Branch Performance Rollup</span>
            <span className="text-indigo-400 theme-light:text-indigo-700 font-bold">All 4 Locations Active</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between text-slate-400 theme-light:text-slate-600 mb-1">
                <span>Branch 1 (Indiranagar Main)</span>
                <span className="font-bold text-white theme-light:text-slate-900">₹3,40,000 (40.4% total)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 theme-light:bg-slate-200 overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '40%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-400 theme-light:text-slate-600 mb-1">
                <span>Branch 2 (Koramangala Studio)</span>
                <span className="font-bold text-white theme-light:text-slate-900">₹2,20,000 (26.1% total)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 theme-light:bg-slate-200 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '26%' }} />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-center">
            <button
              onClick={() => onOpenDemo('Owner Command Center')}
              className="px-6 py-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Explore Owner Command Center</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
