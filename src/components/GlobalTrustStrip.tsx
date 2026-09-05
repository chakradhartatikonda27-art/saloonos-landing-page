import React from 'react';
import { Globe2, ShieldCheck, Zap, Layers } from 'lucide-react';

interface GlobalTrustStripProps {
  activeRegion: string;
  onRegionChange: (region: string) => void;
}

export const GlobalTrustStrip: React.FC<GlobalTrustStripProps> = ({ activeRegion, onRegionChange }) => {
  const regions = [
    { code: 'india', label: 'India', flag: '🇮🇳', subtitle: 'GST & UPI Ready' },
    { code: 'usa', label: 'USA', flag: '🇺🇸', subtitle: 'Tips & Multi-Tax' },
    { code: 'uk', label: 'UK & Europe', flag: '🇬🇧 🇪🇺', subtitle: 'VAT & GDPR' },
    { code: 'africa', label: 'Africa', flag: '🌍', subtitle: 'Mobile Money' },
    { code: 'global', label: 'Global', flag: '🌎', subtitle: '120+ Currencies' }
  ];

  return (
    <section className="relative py-8 bg-[#090D16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Header Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Global SaaS Readiness</div>
              <h3 className="text-base font-bold text-white font-heading">Built for salons. Ready for the world.</h3>
            </div>
          </div>

          {/* Region Tabs Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {regions.map((reg) => (
              <button
                key={reg.code}
                onClick={() => onRegionChange(reg.code)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all ${
                  activeRegion === reg.code
                    ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <span className="text-base">{reg.flag}</span>
                <div className="text-left">
                  <div className="leading-none">{reg.label}</div>
                  <div className="text-[9px] text-slate-400 font-normal mt-0.5">{reg.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
