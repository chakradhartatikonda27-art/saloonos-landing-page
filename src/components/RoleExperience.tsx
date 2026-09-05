import React, { useState } from 'react';
import { ROLES_DATA } from '../data/marketingData';
import { RoleType } from '../types';
import { 
  User, LayoutGrid, Sliders, Scissors, Building2, CheckCircle2, ArrowRight, Sparkles
} from 'lucide-react';

interface RoleExperienceProps {
  onOpenDemo: (type?: string) => void;
}

export const RoleExperience: React.FC<RoleExperienceProps> = ({ onOpenDemo }) => {
  const [activeRole, setActiveRole] = useState<RoleType>('owner');

  const getRoleIcon = (roleId: RoleType) => {
    switch (roleId) {
      case 'customer': return User;
      case 'receptionist': return LayoutGrid;
      case 'manager': return Sliders;
      case 'stylist': return Scissors;
      case 'owner': return Building2;
    }
  };

  const currentRole = ROLES_DATA.find(r => r.id === activeRole) || ROLES_DATA[4];
  const IconComponent = getRoleIcon(currentRole.id);

  return (
    <section id="roles" className="py-20 md:py-28 bg-[#090D16] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <span>TAILORED OPERATIONAL VIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            One Salon. <br />
            <span className="text-gradient-purple">Five Powerful Experiences.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Salon OS provides customized, role-tailored interfaces so every team member stays focused, productive, and satisfied.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {ROLES_DATA.map((role) => {
            const TabIcon = getRoleIcon(role.id);
            const isActive = activeRole === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-600/30 scale-105 border border-indigo-400'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{role.title.replace(' Experience', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Active Role Showcase Card */}
        <div className="mt-10 max-w-5xl mx-auto glass-card rounded-2xl p-6 md:p-10 border border-indigo-500/40 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                {currentRole.badge}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">{currentRole.title}</h3>
                <p className="text-sm font-medium text-indigo-300 mt-1">{currentRole.subtitle}</p>
              </div>

              {/* Quote Block */}
              <div className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-indigo-500 italic text-xs text-slate-300">
                "{currentRole.quote}"
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {currentRole.description}
              </p>

              {/* Capabilities Checklist */}
              <div className="space-y-2.5 pt-2">
                {currentRole.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Role CTA & Metric */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">{currentRole.metricLabel}</div>
                  <div className="text-lg font-bold text-emerald-400 font-heading">{currentRole.metricValue}</div>
                </div>

                <button
                  onClick={() => onOpenDemo(currentRole.ctaText)}
                  className="px-5 py-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>{currentRole.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive Mock Console (6 cols) */}
            <div className="lg:col-span-6">
              <div className="glass-panel rounded-xl border border-slate-700/80 overflow-hidden shadow-2xl bg-[#0B0F19]">
                
                {/* Mock Header */}
                <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{currentRole.mockUi.title}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{currentRole.mockUi.status}</div>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                </div>

                {/* Mock Body Items */}
                <div className="p-5 space-y-3">
                  {currentRole.mockUi.items.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">{item.label}</span>
                      <span className={`font-bold font-mono ${
                        item.color === 'emerald' ? 'text-emerald-400' :
                        item.color === 'indigo' ? 'text-indigo-300' :
                        item.color === 'purple' ? 'text-purple-300' :
                        item.color === 'amber' ? 'text-amber-300' : 'text-white'
                      }`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mock Action Buttons */}
                <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex items-center gap-2">
                  {currentRole.mockUi.actions.map((act, i) => (
                    <button key={i} className="flex-1 py-2 text-[11px] font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors">
                      {act}
                    </button>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
