import React from 'react';
import { ArrowRight, Play, CheckCircle2, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onOpenDemo: (type?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      
      {/* Glow Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 shadow-lg shadow-indigo-950/50 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>The End-to-End Salon Operating System</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-slate-400 font-normal">Global Platform</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
          Run Your Entire Salon <br className="hidden sm:inline" />
          <span className="text-gradient-purple">From One Place.</span>
        </h1>

        {/* Supporting Microcopy */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Salon OS connects <span className="text-white font-medium">bookings, live queues, staff, services, billing, payments, customer CRM, inventory, marketing</span> and <span className="text-white font-medium">AI business intelligence</span> into one powerful platform.
        </p>

        {/* Primary Call-to-Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenDemo('Start Free')}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          >
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#workflow"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
          >
            <Play className="w-4 h-4 text-indigo-400 fill-indigo-400 group-hover:scale-110 transition-transform" />
            <span>See How It Works</span>
          </a>
        </div>

        {/* Trust Badges below CTA */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>No complicated setup</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Built for modern salons</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Setup in 15 minutes</span>
          </div>
        </div>

        {/* Product Visual Showcase */}
        <HeroVisual />

      </div>
    </section>
  );
};
