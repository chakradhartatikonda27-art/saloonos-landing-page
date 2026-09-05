import React from 'react';
import { Megaphone, MessageSquare, RotateCw, TrendingUp, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface MarketingRetentionProps {
  onOpenDemo: (type?: string) => void;
}

export const MarketingRetention: React.FC<MarketingRetentionProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 md:py-28 bg-[#090D16] theme-light:bg-slate-50 border-y border-slate-800 theme-light:border-slate-200 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 theme-light:bg-emerald-50 border border-emerald-500/30 text-emerald-300 theme-light:text-emerald-700 text-xs font-semibold">
            <span>AUTOMATED REBOOKING ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white theme-light:text-slate-900 tracking-tight">
            Turn One Visit <br />
            <span className="text-gradient-emerald">Into Many.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 theme-light:text-slate-600">
            Salon OS monitors customer visit frequencies automatically. When a client becomes inactive, personalized WhatsApp campaigns trigger instantly to bring them back.
          </p>
        </div>

        {/* Campaign Lifecycle Diagram */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1: Inactive Trigger */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800 theme-light:border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 theme-light:bg-amber-100 text-amber-400 theme-light:text-amber-800 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-white theme-light:text-slate-900 font-heading">Client Passes Rebook Window</h3>
            <p className="text-xs text-slate-400 theme-light:text-slate-600 leading-relaxed">
              System identifies that Ananya hasn't booked her regular 30-day Hair Spa in 45 days.
            </p>
            <div className="p-2.5 rounded-lg bg-amber-950/40 theme-light:bg-amber-50 border border-amber-800/40 theme-light:border-amber-200 text-[11px] text-amber-300 theme-light:text-amber-900 font-mono font-bold">
              STATUS: Inactive (Risk of Churn)
            </div>
          </div>

          {/* Step 2: WhatsApp Automation */}
          <div className="glass-card p-6 rounded-2xl border border-purple-500/40 space-y-3 bg-purple-950/20">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 text-purple-300 flex items-center justify-center font-bold text-sm border border-purple-500/40">
              02
            </div>
            <h3 className="text-base font-bold text-white font-heading">Personalized WhatsApp Offer</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Automated message triggers with a 1-click booking button and personalized 20% discount.
            </p>
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-200 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-emerald-400">
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Message
              </div>
              <p className="text-[11px] italic">
                "We miss you, Ananya! Enjoy 20% OFF your next Hair Spa with Rahul this weekend."
              </p>
            </div>
          </div>

          {/* Step 3: Rebooked Revenue */}
          <div className="glass-card p-6 rounded-2xl border border-emerald-500/40 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-white font-heading">Client Rebooks & Revenue Returns</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ananya taps the booking button, selects Saturday at 3:00 PM, and returns to your salon.
            </p>
            <div className="p-2.5 rounded-lg bg-emerald-950 border border-emerald-800 text-[11px] text-emerald-400 font-bold font-mono">
              REVENUE RECOVERED: +₹2,400
            </div>
          </div>

        </div>

        {/* WhatsApp Template Cards */}
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
            <span className="text-[10px] font-bold text-indigo-400 uppercase">CAMPAIGN 1</span>
            <div className="font-bold text-white">"We Miss You"</div>
            <div className="text-slate-400 text-[11px]">Triggers after 45 days inactivity</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
            <span className="text-[10px] font-bold text-purple-400 uppercase">CAMPAIGN 2</span>
            <div className="font-bold text-white">"Hair Spa 20% OFF"</div>
            <div className="text-slate-400 text-[11px]">Targeted service upsell</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
            <span className="text-[10px] font-bold text-amber-400 uppercase">CAMPAIGN 3</span>
            <div className="font-bold text-white">"Membership Expiring"</div>
            <div className="text-slate-400 text-[11px]">Auto-renewal reminder</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
            <span className="text-[10px] font-bold text-emerald-400 uppercase">CAMPAIGN 4</span>
            <div className="font-bold text-white">"Birthday Special"</div>
            <div className="text-slate-400 text-[11px]">Automated celebratory gift</div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenDemo('Automate Client Retention')}
            className="px-6 py-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
          >
            <span>Automate Your Client Retention</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
