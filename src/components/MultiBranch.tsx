import React from 'react';
import { Network, Building2, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface MultiBranchProps {
  onOpenDemo: (type?: string) => void;
}

export const MultiBranch: React.FC<MultiBranchProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <span>MULTI-LOCATION ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            One Business. <br />
            <span className="text-gradient-purple">Every Branch.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Manage single salon locations or multi-city salon chains from one centralized Head Office command view.
          </p>
        </div>

        {/* Multi-Branch Diagram */}
        <div className="mt-14 max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-8 border border-indigo-500/30 space-y-8">
          
          {/* Head Office Node */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900 border border-indigo-500/50 text-center space-y-2 max-w-md mx-auto shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase">
              CENTRAL HQ COMMAND
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Head Office Dashboard</h3>
            <p className="text-xs text-slate-300">Consolidated Financials • Unified Customer CRM • Inventory Sync</p>
          </div>

          {/* Connected Branches Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-indigo-400">
                <span>BRANCH 01</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="font-bold text-white text-sm">Downtown Flagship</div>
              <div className="text-[11px] font-mono text-emerald-400 font-bold">₹3.4L Rev / mo</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-indigo-400">
                <span>BRANCH 02</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="font-bold text-white text-sm">Westside Mall</div>
              <div className="text-[11px] font-mono text-emerald-400 font-bold">₹2.8L Rev / mo</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-indigo-400">
                <span>BRANCH 03</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="font-bold text-white text-sm">Airport Lounge</div>
              <div className="text-[11px] font-mono text-emerald-400 font-bold">₹2.1L Rev / mo</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-indigo-400">
                <span>BRANCH 04</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="font-bold text-white text-sm">Suburban Studio</div>
              <div className="text-[11px] font-mono text-emerald-400 font-bold">₹1.9L Rev / mo</div>
            </div>

          </div>

          <div className="pt-4 border-t border-slate-800 text-center">
            <button
              onClick={() => onOpenDemo('Multi-Branch Scale')}
              className="px-6 py-3.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Scale Your Multi-Branch Chain</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
