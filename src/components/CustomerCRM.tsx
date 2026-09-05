import React from 'react';
import { HeartHandshake, Sparkles, Calendar, Award, Scissors, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface CustomerCRMProps {
  onOpenDemo: (type?: string) => void;
}

export const CustomerCRM: React.FC<CustomerCRMProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/60 theme-light:bg-pink-50 border border-pink-500/30 text-pink-400 theme-light:text-pink-700 text-xs font-semibold">
            <span>CLIENT MEMORY BANK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white theme-light:text-slate-900 tracking-tight">
            Every Client Has a Story. <br />
            <span className="text-pink-500">Salon OS Remembers It.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 theme-light:text-slate-600">
            Stop treating every visit like the first visit. Give your team instant access to past formulas, skin consultation notes, and spending habits.
          </p>
        </div>

        {/* Customer Profile UI Card */}
        <div className="mt-14 max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-8 border border-pink-500/30 shadow-2xl relative space-y-6">
          
          {/* Top Profile Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 theme-light:border-slate-200 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-600 to-purple-600 p-[2px] shadow-lg shadow-pink-600/30">
                <div className="w-full h-full bg-[#0B0F19] theme-light:bg-white rounded-[14px] flex items-center justify-center font-bold text-xl text-pink-500">
                  AR
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-white theme-light:text-slate-900 font-heading">Ananya Roy</h3>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold bg-purple-500/20 text-purple-500 border border-purple-500/30 rounded-full">
                    VIP GOLD MEMBER
                  </span>
                </div>
                <div className="text-xs text-slate-400 theme-light:text-slate-500 mt-1">Client ID: #CL-8842 • Member since Jan 2024</div>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-xs text-slate-400 theme-light:text-slate-600">Lifetime Spend</div>
              <div className="text-2xl font-bold font-mono text-emerald-500">₹48,500</div>
              <div className="text-[11px] text-purple-500 font-semibold mt-0.5">14 Completed Visits</div>
            </div>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-xl bg-slate-900/90 theme-light:bg-slate-50 border border-slate-800 theme-light:border-slate-200 space-y-2">
              <div className="text-[11px] text-slate-400 theme-light:text-slate-600 font-semibold uppercase flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-indigo-500" /> Favorite Services
              </div>
              <div className="text-xs font-bold text-white theme-light:text-slate-900">Keratin Hair Spa & Bridal Facial</div>
              <div className="text-[11px] text-slate-400 theme-light:text-slate-600">Prefers low heat & extra scalp massage</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 theme-light:bg-slate-50 border border-slate-800 theme-light:border-slate-200 space-y-2">
              <div className="text-[11px] text-slate-400 theme-light:text-slate-600 font-semibold uppercase flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-purple-500" /> Preferred Artist
              </div>
              <div className="text-xs font-bold text-white theme-light:text-slate-900">Rahul Sharma (Master Artist)</div>
              <div className="text-[11px] text-emerald-500 font-semibold">92% artist match score</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 theme-light:bg-slate-50 border border-slate-800 theme-light:border-slate-200 space-y-2">
              <div className="text-[11px] text-slate-400 theme-light:text-slate-600 font-semibold uppercase flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" /> Loyalty Wallet
              </div>
              <div className="text-xs font-bold text-white theme-light:text-slate-900">450 Reward Points (₹450 value)</div>
              <div className="text-[11px] text-amber-600 font-semibold">Auto-applies at next checkout</div>
            </div>

          </div>

          {/* Special Formula Notes */}
          <div className="p-4 rounded-xl bg-purple-950/20 theme-light:bg-purple-50 border border-purple-800/40 theme-light:border-purple-200 text-xs space-y-1">
            <span className="font-bold text-purple-500 uppercase tracking-wider text-[10px]">ARTIST FORMULA & SKIN NOTE:</span>
            <p className="text-slate-200 theme-light:text-slate-800 leading-relaxed font-mono">
              "L’Oréal Majirel 6.1 (30g) + 20 Vol Developer (45ml). Scalp sensitivity noted near temples. Always use barrier cream."
            </p>
          </div>

          {/* Bottom Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 theme-light:border-slate-200">
            <div className="flex items-center gap-2 text-xs text-slate-300 theme-light:text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Complete service notes synced to mobile workstation</span>
            </div>

            <button
              onClick={() => onOpenDemo('Customer CRM')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-pink-600 hover:bg-pink-500 rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span>Explore Customer CRM 360°</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
