import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface BeforeAfterProps {
  onOpenDemo: (type?: string) => void;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ onOpenDemo }) => {
  const comparisons = [
    { area: 'Bookings & Appointments', before: 'Fragmented WhatsApp messages, paper notebooks & phone call double bookings.', after: '24/7 online self-booking calendar with automated deposit protection & WhatsApp sync.' },
    { area: 'Queue & Walk-ins', before: 'Frustrated customers waiting in overcrowded chairs with zero wait-time visibility.', after: 'Smart digital queue token system computing real-time estimated wait times.' },
    { area: 'POS & Billing', before: 'Handwritten billing slips, manual tax calculations, and slow card machine checkouts.', after: 'Fast 8-second POS checkout generating tax-ready GST/VAT digital WhatsApp invoices.' },
    { area: 'Customer CRM', before: 'Treating every client like a first-time visitor with zero memory of past formulas or notes.', after: 'Complete 360° customer profile capturing past preferences, formulas, loyalty & LTV.' },
    { area: 'Staff Management', before: 'Unclear shift rosters, manual commission calculations, and arguments over tip splits.', after: 'Automated roster scheduling, floor availability tracking, and 1-click commission reports.' },
    { area: 'Client Retention', before: 'No system to track churn risk; inactive clients simply disappear forever.', after: 'Automated retention engine triggering personalized WhatsApp win-back campaigns.' },
    { area: 'Owner Visibility', before: 'Revenue and profits spread across scattered spreadsheets and memory.', after: 'Centralized Owner Command Center with live multi-branch revenue & AI business insights.' }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#080C14] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            <span>TRANSFORMATION METRICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Replace the Chaos <br />
            <span className="text-gradient-purple">With One System.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            See how Salon OS transforms daily friction into smooth, predictable business growth.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-14 max-w-5xl mx-auto glass-card rounded-2xl p-6 md:p-8 border border-slate-800 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-bold uppercase tracking-wider pb-3 border-b border-slate-800 text-slate-400">
            <div className="md:col-span-3">Salon Operation</div>
            <div className="md:col-span-4 text-rose-400">Before Salon OS (Chaos)</div>
            <div className="md:col-span-5 text-emerald-400">With Salon OS (Unified)</div>
          </div>

          <div className="space-y-3">
            {comparisons.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs items-center">
                <div className="md:col-span-3 font-bold text-white font-heading">{row.area}</div>
                <div className="md:col-span-4 text-slate-400 flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.before}</span>
                </div>
                <div className="md:col-span-5 text-slate-200 font-medium flex items-start gap-2 bg-indigo-950/30 p-2.5 rounded-lg border border-indigo-800/40">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{row.after}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 text-center">
            <button
              onClick={() => onOpenDemo('Replace Chaos')}
              className="px-6 py-3.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Transform Your Salon Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
