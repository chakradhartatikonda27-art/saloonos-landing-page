import React from 'react';
import { REGIONAL_WORKFLOWS } from '../data/marketingData';
import { ArrowLeft, CheckCircle2, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

interface RegionalLandingPageProps {
  regionId: string;
  onBack: () => void;
  onOpenDemo: (type?: string) => void;
}

export const RegionalLandingPage: React.FC<RegionalLandingPageProps> = ({ regionId, onBack, onOpenDemo }) => {
  const region = REGIONAL_WORKFLOWS.find(r => r.id === regionId) || REGIONAL_WORKFLOWS[0];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fadeIn">
      
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Global Overview</span>
      </button>

      {/* Localized Banner Header */}
      <div className="glass-card rounded-2xl p-8 md:p-12 border border-indigo-500/40 relative overflow-hidden space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{region.flag}</span>
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
              LOCALIZED SALON SOFTWARE • {region.country.toUpperCase()}
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mt-1">
              Salon Software Built for {region.country}
            </h1>
          </div>
        </div>

        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          {region.headline}. Salon OS connects your local salon operations, payment modes, and tax rules into one simple operating system.
        </p>

        {/* Feature Pill Tags */}
        <div className="flex flex-wrap gap-3 pt-2">
          {region.features.map((f, i) => (
            <span key={i} className="px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {f}
            </span>
          ))}
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => onOpenDemo(`Localized Demo: ${region.country}`)}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <span>Start Free Trial in {region.country}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Regional Workflow Specs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-lg font-bold text-white font-heading">Localized Business Workflows</h3>
          <div className="space-y-3 text-xs text-slate-300">
            {region.highlights.map((h, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-lg font-bold text-white font-heading">Tax & Compliance Integration</h3>
          <p className="text-xs text-slate-300 leading-relaxed font-mono p-4 rounded-xl bg-slate-900 border border-slate-800">
            {region.taxComplianceNote}
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Built as a flexible SaaS product for independent salons and multi-branch chains.</span>
          </div>
        </div>
      </div>

    </div>
  );
};
