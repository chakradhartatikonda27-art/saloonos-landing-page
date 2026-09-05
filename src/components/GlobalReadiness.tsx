import React from 'react';
import { REGIONAL_WORKFLOWS } from '../data/marketingData';
import { Globe, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface GlobalReadinessProps {
  activeRegion: string;
  onRegionChange: (region: string) => void;
  onOpenDemo: (type?: string) => void;
}

export const GlobalReadiness: React.FC<GlobalReadinessProps> = ({ activeRegion, onRegionChange, onOpenDemo }) => {
  const currentRegion = REGIONAL_WORKFLOWS.find(r => r.id === activeRegion) || REGIONAL_WORKFLOWS[0];

  return (
    <section id="global-readiness" className="py-20 md:py-28 bg-[#070A11] theme-light:bg-slate-50 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 theme-light:bg-indigo-50 border border-indigo-500/30 text-indigo-300 theme-light:text-indigo-700 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5 text-indigo-400 theme-light:text-indigo-600" />
            <span>GLOBAL SAAS ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white theme-light:text-slate-900 tracking-tight">
            Built for Salons <br />
            <span className="text-gradient-purple">Everywhere.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 theme-light:text-slate-600">
            Salon OS adapts natively to regional operational models, payment methods, tax structures, and customer communication channels.
          </p>
        </div>

        {/* Region Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {REGIONAL_WORKFLOWS.map((reg) => (
            <button
              key={reg.id}
              onClick={() => onRegionChange(reg.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                activeRegion === reg.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                  : 'bg-slate-900 theme-light:bg-slate-100 border border-slate-800 theme-light:border-slate-300 text-slate-400 theme-light:text-slate-700 hover:text-white theme-light:hover:text-slate-900'
              }`}
            >
              <span className="text-base">{reg.flag}</span>
              <span>{reg.country}</span>
            </button>
          ))}
        </div>

        {/* Selected Region Showcase Card */}
        <div className="mt-10 max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-8 border border-indigo-500/30 theme-light:border-indigo-200 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 theme-light:border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentRegion.flag}</span>
              <div>
                <h3 className="text-2xl font-bold text-white theme-light:text-slate-900 font-heading">{currentRegion.country} Market Readiness</h3>
                <p className="text-xs text-indigo-300 theme-light:text-indigo-700 font-semibold mt-0.5">{currentRegion.headline}</p>
              </div>
            </div>
            <span className="px-3 py-1 text-[11px] font-bold bg-indigo-500/20 theme-light:bg-indigo-100 text-indigo-300 theme-light:text-indigo-800 rounded-full border border-indigo-500/30 theme-light:border-indigo-300">
              LOCALIZED WORKFLOWS
            </span>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentRegion.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 theme-light:text-slate-800 bg-slate-900/80 theme-light:bg-slate-100 p-3 rounded-xl border border-slate-800 theme-light:border-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 theme-light:text-emerald-600 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Tax Compliance Note */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 theme-light:bg-indigo-50/70 border border-slate-800 theme-light:border-indigo-200 text-xs text-slate-400 theme-light:text-indigo-900 flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-indigo-400 theme-light:text-indigo-600 shrink-0" />
            <span>{currentRegion.taxComplianceNote}</span>
          </div>

          <div className="pt-2 flex justify-between items-center">
            <div className="text-xs text-slate-400 theme-light:text-slate-500">Available across all 190+ countries</div>
            <button
              onClick={() => onOpenDemo(`Global Market: ${currentRegion.country}`)}
              className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span>Explore {currentRegion.country} Features</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
