import React, { useState } from 'react';
import { 
  WORKFLOW_STAGES 
} from '../data/marketingData';
import { 
  Search, CalendarCheck, MapPin, Clock, Scissors, Receipt, CreditCard, RotateCw, TrendingUp, ChevronRight
} from 'lucide-react';

export const ProductFlow: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Search': return Search;
      case 'CalendarCheck': return CalendarCheck;
      case 'MapPin': return MapPin;
      case 'Clock': return Clock;
      case 'Scissors': return Scissors;
      case 'Receipt': return Receipt;
      case 'CreditCard': return CreditCard;
      case 'RotateCw': return RotateCw;
      default: return TrendingUp;
    }
  };

  const current = WORKFLOW_STAGES[activeStage];
  const IconComp = getIcon(current.icon);

  return (
    <section id="workflow" className="py-20 md:py-28 bg-[#080C14] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <span>END-TO-END SALON LIFECYCLE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            From First Booking to Final Payment. <br />
            <span className="text-gradient-purple">One Continuous Workflow.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            See how Salon OS seamlessly connects every step of the customer journey with your floor operations and business intelligence.
          </p>
        </div>

        {/* Horizontal Workflow Stepper */}
        <div className="mt-14 overflow-x-auto pb-6 scrollbar-thin">
          <div className="flex items-center justify-between min-w-[900px] relative px-4">
            
            {/* Background Connecting Line */}
            <div className="absolute left-8 right-8 top-6 h-0.5 bg-slate-800 -z-0" />
            <div 
              className="absolute left-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 -z-0"
              style={{ width: `${(activeStage / (WORKFLOW_STAGES.length - 1)) * 90}%` }}
            />

            {WORKFLOW_STAGES.map((stage, idx) => {
              const StageIcon = getIcon(stage.icon);
              const isActive = activeStage === idx;
              const isPassed = activeStage > idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className="flex flex-col items-center group relative z-10 focus:outline-none"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-600/40 scale-110 border-2 border-white'
                      : isPassed
                      ? 'bg-indigo-950 border border-indigo-500/50 text-indigo-300'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}>
                    <StageIcon className="w-5 h-5" />
                  </div>

                  <span className={`mt-3 text-xs font-bold font-heading tracking-wider uppercase transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {stage.title}
                  </span>
                  
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {stage.step}
                  </span>
                </button>
              );
            })}

          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="mt-8 max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-8 border border-indigo-500/30 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                <IconComp className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold bg-indigo-500/20 text-indigo-300 rounded uppercase">
                    STAGE {current.step} OF 09
                  </span>
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                    {current.title} PROCESS
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white font-heading mt-1">{current.title} Phase</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
                  {current.desc}
                </p>
              </div>
            </div>

            {/* Nav Next/Prev Controls */}
            <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
              <button
                disabled={activeStage === 0}
                onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800"
              >
                ← Previous
              </button>
              <button
                disabled={activeStage === WORKFLOW_STAGES.length - 1}
                onClick={() => setActiveStage(prev => Math.min(WORKFLOW_STAGES.length - 1, prev + 1))}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
              >
                Next Stage →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
