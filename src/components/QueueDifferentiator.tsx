import React, { useState } from 'react';
import { Clock, Users, Scissors, CheckCircle, Smartphone, ArrowRight, ShieldCheck } from 'lucide-react';

interface QueueDifferentiatorProps {
  onOpenDemo: (type?: string) => void;
}

export const QueueDifferentiator: React.FC<QueueDifferentiatorProps> = ({ onOpenDemo }) => {
  const [tokenNumber, setTokenNumber] = useState(27);
  const [aheadCount, setAheadCount] = useState(2);
  const [estimatedWait, setEstimatedWait] = useState(18);

  const simulateNextInQueue = () => {
    if (aheadCount > 0) {
      setAheadCount(prev => prev - 1);
      setEstimatedWait(prev => Math.max(2, prev - 8));
    } else {
      setAheadCount(2);
      setEstimatedWait(18);
      setTokenNumber(prev => prev + 1);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#070A11] theme-light:bg-slate-50 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 theme-light:bg-emerald-50 border border-emerald-500/30 text-emerald-400 theme-light:text-emerald-700 text-xs font-semibold">
            <span>PATENT-PENDING QUEUE DIFFERENTIATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white theme-light:text-slate-900 tracking-tight">
            No More Guessing <br />
            <span className="text-gradient-emerald">How Long Clients Will Wait.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 theme-light:text-slate-600">
            Salon OS calculates accurate waiting times using real-time queue position, service duration, station availability, and current progress.
          </p>
        </div>

        {/* Interactive Dual View Showcase */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Customer WhatsApp Token View (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-emerald-500/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 theme-light:border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-bold text-white theme-light:text-slate-900 uppercase tracking-wider">Client Mobile Token View</span>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-500 rounded">
                Live WhatsApp Sync
              </span>
            </div>

            {/* Token Badge */}
            <div className="p-6 rounded-xl bg-gradient-to-b from-slate-900 to-[#0B0F19] theme-light:from-white theme-light:to-slate-50 border border-emerald-500/40 text-center space-y-3 shadow-xl">
              <div className="text-xs font-semibold text-slate-400 theme-light:text-slate-600 uppercase tracking-widest">DIGITAL QUEUE PASS</div>
              <div className="text-4xl font-extrabold font-heading text-emerald-500 tracking-tight">
                TOKEN #A{tokenNumber}
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 theme-light:bg-emerald-50 text-emerald-400 theme-light:text-emerald-700 text-xs font-semibold border border-emerald-800 theme-light:border-emerald-200">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                <span>{aheadCount === 0 ? 'YOU ARE NEXT IN CHAIR/ROOM!' : `${aheadCount} Guests Ahead of You`}</span>
              </div>
              <div className="pt-2">
                <div className="text-xs text-slate-400 theme-light:text-slate-600">Estimated Chair Arrival</div>
                <div className="text-2xl font-bold font-mono text-white theme-light:text-slate-900 mt-0.5">{estimatedWait} mins</div>
              </div>
            </div>

            {/* Interactive Simulation Button */}
            <button
              onClick={simulateNextInQueue}
              className="w-full py-2.5 text-xs font-bold text-slate-200 theme-light:text-slate-800 bg-slate-800 theme-light:bg-white hover:bg-slate-700 theme-light:hover:bg-slate-100 rounded-xl border border-slate-700 theme-light:border-slate-300 transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Scissors className="w-3.5 h-3.5 text-indigo-500" />
              <span>Simulate Service Complete & Advance Queue</span>
            </button>
          </div>

          {/* Right: Manager Queue Console (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 md:p-8 border border-slate-800 theme-light:border-slate-200 space-y-6">
            <div>
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">MANAGER & RECEPTION FLOOR DASHBOARD</span>
              <h3 className="text-2xl font-bold text-white theme-light:text-slate-900 font-heading mt-1">Real-Time Chair & Room Dispatcher</h3>
              <p className="text-xs text-slate-300 theme-light:text-slate-600 mt-2 leading-relaxed">
                Floor leads view active chair & spa room progress, available specialists, and predicted queue delay flags, balancing walk-ins with appointments.
              </p>
            </div>

            {/* Live Staff Chairs */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900 theme-light:bg-slate-50 border border-slate-800 theme-light:border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                  <div>
                    <span className="font-bold text-white theme-light:text-slate-900">Station 1: Hair Coloring / Spa</span>
                    <div className="text-[11px] text-slate-400 theme-light:text-slate-600">Artist: Rahul Sharma • Client: Ananya R.</div>
                  </div>
                </div>
                <div className="text-right font-mono">
                  <span className="text-amber-500 font-bold">35 / 60 min</span>
                  <div className="text-[10px] text-slate-400 theme-light:text-slate-500">25 min remaining</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 theme-light:bg-slate-50 border border-slate-800 theme-light:border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <div>
                    <span className="font-bold text-white theme-light:text-slate-900">Station 2: Bridal Makeup / Styling</span>
                    <div className="text-[11px] text-slate-400 theme-light:text-slate-600">Artist: Vikram Singh • Ready for Token #A{tokenNumber}</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-500 rounded">
                    STATION AVAILABLE
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 theme-light:border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-300 theme-light:text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Zero client waiting friction</span>
              </div>

              <button
                onClick={() => onOpenDemo('Make Waiting Transparent')}
                className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2"
              >
                <span>Make Waiting Transparent</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
