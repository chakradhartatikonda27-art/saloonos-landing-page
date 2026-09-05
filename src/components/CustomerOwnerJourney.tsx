import React from 'react';
import { User, Building2, ArrowRight, CheckCircle2, Sparkles, Clock, TrendingUp } from 'lucide-react';

interface CustomerOwnerJourneyProps {
  onOpenDemo: (type?: string) => void;
}

export const CustomerOwnerJourney: React.FC<CustomerOwnerJourneyProps> = ({ onOpenDemo }) => {
  const customerSteps = [
    'Finds Salon online',
    'Browses Services & Prices',
    'Books 24/7 Self-Booking',
    'Receives Queue Token #A27',
    'Tracks Wait on WhatsApp',
    'Enjoys Service with Notes',
    'Pays via UPI/Card in 8s',
    'Gets WhatsApp PDF Invoice',
    'Earns Loyalty Rewards',
    'Auto-Rebooks in 30 Days'
  ];

  const ownerSteps = [
    'Owner wakes up anywhere',
    'Opens Salon OS mobile app',
    'Sees Live Revenue & Profit',
    'Monitors 4 Branch Chairs',
    'AI flags Hair Color drop',
    'Taps 1-Click AI Campaign',
    'WhatsApp offer sent to 146',
    '28 Clients Rebook same day',
    'Revenue increases +18%',
    'Enjoys automated growth!'
  ];

  return (
    <section className="py-20 md:py-28 bg-[#070A11] theme-light:bg-slate-50 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 theme-light:bg-purple-50 border border-purple-500/30 text-purple-300 theme-light:text-purple-700 text-xs font-semibold">
            <span>DUAL DAY-IN-THE-LIFE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white theme-light:text-slate-900 tracking-tight">
            Spend Less Time Managing. <br />
            <span className="text-gradient-purple">More Time Growing.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 theme-light:text-slate-600">
            Compare the seamless journey for your salon guests alongside the effortless daily routine for salon owners.
          </p>
        </div>

        {/* Dual Journey Columns */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Customer Journey */}
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-indigo-500/30 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 theme-light:border-slate-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 theme-light:text-indigo-600 flex items-center justify-center font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white theme-light:text-slate-900 font-heading">The Customer Experience</h3>
                <div className="text-xs text-indigo-300 theme-light:text-indigo-700 font-semibold">Frictionless visit from booking to rebooking</div>
              </div>
            </div>

            <div className="space-y-2.5">
              {customerSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/80 theme-light:bg-slate-100 border border-slate-800 theme-light:border-slate-200 text-xs text-slate-200 theme-light:text-slate-800 font-medium">
                  <span className="w-5 h-5 rounded-full bg-indigo-500/20 theme-light:bg-indigo-200 text-indigo-400 theme-light:text-indigo-800 font-bold text-[10px] flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Owner Journey */}
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-purple-500/30 theme-light:border-purple-200 space-y-6 bg-purple-950/10 theme-light:bg-purple-50/50">
            <div className="flex items-center gap-3 border-b border-slate-800 theme-light:border-slate-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-300 theme-light:text-purple-600 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white theme-light:text-slate-900 font-heading">The Salon Owner Experience</h3>
                <div className="text-xs text-purple-300 theme-light:text-purple-700 font-semibold">Total operational control without stress</div>
              </div>
            </div>

            <div className="space-y-2.5">
              {ownerSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/80 theme-light:bg-slate-100 border border-slate-800 theme-light:border-slate-200 text-xs text-slate-200 theme-light:text-slate-800 font-medium">
                  <span className="w-5 h-5 rounded-full bg-purple-500/20 theme-light:bg-purple-200 text-purple-300 theme-light:text-purple-800 font-bold text-[10px] flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenDemo('Spend Less Time Managing')}
            className="px-8 py-4 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-xl shadow-indigo-600/30 transition-all inline-flex items-center gap-2"
          >
            <span>Start Running Your Salon Smarter</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
