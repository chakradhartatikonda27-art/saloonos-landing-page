import React, { useState } from 'react';
import { PLATFORM_MODULES } from '../data/marketingData';
import { PlatformModule } from '../types';
import { 
  Calendar, Users, HeartHandshake, Receipt, CreditCard, UserCheck, Package, 
  Crown, Sparkles, Megaphone, MessageSquare, BarChart3, Bot, Check, ArrowRight, X
} from 'lucide-react';

export const OnePlatformGrid: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<PlatformModule | null>(null);

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar': return Calendar;
      case 'Users': return Users;
      case 'HeartHandshake': return HeartHandshake;
      case 'Receipt': return Receipt;
      case 'CreditCard': return CreditCard;
      case 'UserCheck': return UserCheck;
      case 'Package': return Package;
      case 'Crown': return Crown;
      case 'Sparkles': return Sparkles;
      case 'Megaphone': return Megaphone;
      case 'MessageSquare': return MessageSquare;
      case 'BarChart3': return BarChart3;
      case 'Bot': return Bot;
      default: return Calendar;
    }
  };

  return (
    <section id="modules" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <span>COMPLETE PRODUCT ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Everything Your Salon Needs. <br />
            <span className="text-gradient-purple">One Platform.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Replace 8 different subscriptions with one unified operating system. Click any module to explore detailed capabilities.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PLATFORM_MODULES.map((mod) => {
            const IconComponent = getModuleIcon(mod.icon);
            return (
              <div
                key={mod.id}
                onClick={() => setSelectedModule(mod)}
                className="glass-card glass-card-hover rounded-2xl p-6 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {mod.sampleMetric && (
                      <span className="px-2 py-1 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                        {mod.sampleMetric.value}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-indigo-300 transition-colors">
                    {mod.title}
                  </h3>
                  
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {mod.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Module Feature Detail Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel w-full max-w-2xl rounded-2xl p-6 md:p-8 border border-indigo-500/40 relative shadow-2xl space-y-6">
            
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
                {React.createElement(getModuleIcon(selectedModule.icon), { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">SALON OS MODULE</span>
                <h3 className="text-2xl font-bold text-white font-heading">{selectedModule.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedModule.fullDesc}
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedModule.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <div className="text-xs text-slate-400">
                {selectedModule.sampleMetric && (
                  <span>Impact: <strong className="text-emerald-400">{selectedModule.sampleMetric.label} {selectedModule.sampleMetric.value}</strong></span>
                )}
              </div>
              <button
                onClick={() => setSelectedModule(null)}
                className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 shadow-md"
              >
                Done Exploring
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
