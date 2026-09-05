import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/marketingData';
import { Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <span>TRANSPARENT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Simple Plans. <br />
            <span className="text-gradient-purple">Built to Grow With Your Salon.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            No hidden setup fees. No long-term lock-in. Cancel anytime.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-xs font-bold ${!annualBilling ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="w-14 h-7 rounded-full bg-slate-900 border border-slate-700 p-1 flex items-center transition-colors relative cursor-pointer"
            >
              <div className={`w-5 h-5 rounded-full bg-indigo-500 transition-transform ${annualBilling ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${annualBilling ? 'text-white' : 'text-slate-400'}`}>
                Annual Billing
              </span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                SAVE 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const price = annualBilling ? plan.annualMonthlyPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`glass-card rounded-2xl p-6 relative flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'border-2 border-indigo-500 shadow-2xl shadow-indigo-600/30 bg-gradient-to-b from-indigo-950/40 via-slate-900 to-slate-900 scale-105'
                    : 'border border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold text-[10px] tracking-wider uppercase rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white font-heading">{plan.name}</h3>
                  <p className="mt-2 text-xs text-slate-400 min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-slate-400 font-medium">₹</span>
                      <span className="text-4xl font-extrabold font-heading text-white">{price.toLocaleString()}</span>
                      <span className="text-xs text-slate-400">/ month</span>
                    </div>
                    <div className="text-[10px] text-indigo-400 font-mono mt-1">
                      {annualBilling ? 'Billed annually' : 'Billed monthly'}
                    </div>
                  </div>

                  {/* Limits */}
                  <div className="mt-4 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                    <div className="font-bold text-white">{plan.branches}</div>
                    <div className="text-slate-400 text-[11px]">{plan.staffLimit}</div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-2.5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Plan Features:</div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA */}
                <div className="mt-8 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onOpenDemo(`Pricing Plan: ${plan.name}`)}
                    className={`w-full py-3 text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:brightness-110 shadow-indigo-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-indigo-400" />
          <span>All plans include 14-day free trial. No credit card required to start.</span>
        </div>

      </div>
    </section>
  );
};
