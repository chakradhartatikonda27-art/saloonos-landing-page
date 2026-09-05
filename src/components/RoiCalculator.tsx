import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemo: (type?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [branches, setBranches] = useState(1);
  const [staffCount, setStaffCount] = useState(6);

  // ROI formulas
  const hoursSaved = staffCount * 14 * branches;
  const revenuePrevented = staffCount * 12500 * branches;
  const rebookingValue = staffCount * 18000 * branches;
  const netMonthlyGain = revenuePrevented + rebookingValue;

  return (
    <section className="py-20 md:py-28 bg-[#080C14] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTERACTIVE ROI ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Calculate Your Salon’s <br />
            <span className="text-gradient-emerald">Monthly Growth & Time Saved.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Adjust your staff size and branch count to estimate your monthly ROI with Salon OS.
          </p>
        </div>

        {/* Calculator Workspace */}
        <div className="mt-14 max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-10 border border-emerald-500/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Sliders (6 cols) */}
          <div className="md:col-span-6 space-y-6">
            
            {/* Slider 1: Branches */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                <span>Number of Branches:</span>
                <span className="text-indigo-400 font-mono text-base font-extrabold">{branches} {branches === 1 ? 'Branch' : 'Branches'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={branches}
                onChange={(e) => setBranches(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            {/* Slider 2: Staff */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                <span>Total Staff Members:</span>
                <span className="text-emerald-400 font-mono text-base font-extrabold">{staffCount} Stylists & Staff</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={staffCount}
                onChange={(e) => setStaffCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              *Calculated based on average reduction in double-bookings, 40% reduction in queue wait-time, and 28% increase in client rebookings across 500+ salons.
            </div>
          </div>

          {/* Right Calculated Gains (6 cols) */}
          <div className="md:col-span-6 glass-panel p-6 rounded-xl border border-emerald-500/40 bg-emerald-950/20 space-y-5">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">PROJECTED MONTHLY GAIN</div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span>Admin & Prep Hours Saved</span>
                </div>
                <span className="text-base font-extrabold font-mono text-white">{hoursSaved} hrs / mo</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>No-Show & Churn Prevented</span>
                </div>
                <span className="text-base font-extrabold font-mono text-emerald-400">₹{revenuePrevented.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>WhatsApp Rebook Revenue</span>
                </div>
                <span className="text-base font-extrabold font-mono text-purple-300">₹{rebookingValue.toLocaleString()}</span>
              </div>

              <div className="pt-2">
                <div className="text-xs text-slate-400">Total Est. Net Monthly Growth Value:</div>
                <div className="text-3xl font-extrabold font-heading text-emerald-400 mt-1">
                  ₹{netMonthlyGain.toLocaleString()} / mo
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenDemo(`ROI Calculated: ₹${netMonthlyGain.toLocaleString()}`)}
              className="w-full py-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Unlock This Growth & Start Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
