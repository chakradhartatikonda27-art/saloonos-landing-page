import React, { useState } from 'react';
import { AI_PRESET_PROMPTS } from '../data/marketingData';
import { Bot, Sparkles, Send, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

interface AiAssistantProps {
  onOpenDemo: (type?: string) => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ onOpenDemo }) => {
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const currentPreset = AI_PRESET_PROMPTS[activePromptIndex];

  const handleSelectPrompt = (idx: number) => {
    setIsTyping(true);
    setActivePromptIndex(idx);
    setTimeout(() => {
      setIsTyping(false);
    }, 400);
  };

  return (
    <section id="ai-assistant" className="py-20 md:py-28 bg-[#090D16] theme-light:bg-slate-50 border-y border-slate-800 theme-light:border-slate-200 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 theme-light:bg-purple-50 border border-purple-500/30 text-purple-300 theme-light:text-purple-700 text-xs font-semibold shadow-lg shadow-purple-950/50">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 theme-light:text-purple-600 animate-pulse" />
            <span>BUILT-IN BUSINESS INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white theme-light:text-slate-900 tracking-tight">
            Ask Your Salon. <br />
            <span className="text-gradient-purple">Get Instant Answers.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 theme-light:text-slate-600">
            Salon OS AI analyzes raw operational data, identifies revenue leakage, and executes corrective campaigns with one click.
          </p>
        </div>

        {/* Conversational AI Visual Workspace */}
        <div className="mt-14 max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-8 border border-purple-500/40 theme-light:border-purple-200 relative shadow-2xl space-y-6">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 theme-light:border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600/30 theme-light:bg-purple-100 border border-purple-500/40 theme-light:border-purple-300 flex items-center justify-center text-purple-300 theme-light:text-purple-700">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white theme-light:text-slate-900 font-heading">Salon OS AI Business Co-Pilot</h3>
                <div className="text-xs text-slate-400 theme-light:text-slate-500">Connected to Live Financials, Queue, CRM & Inventory</div>
              </div>
            </div>
            <span className="px-3 py-1 text-[11px] font-bold text-purple-300 theme-light:text-purple-800 bg-purple-950 theme-light:bg-purple-100 border border-purple-800 theme-light:border-purple-300 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400 theme-light:bg-purple-600 animate-ping" />
              BI ENGINE READY
            </span>
          </div>

          {/* Quick Preset Prompt Pills */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-400 theme-light:text-slate-500 uppercase tracking-wider">Try Asking:</div>
            <div className="flex flex-wrap gap-2">
              {AI_PRESET_PROMPTS.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPrompt(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activePromptIndex === idx
                      ? 'bg-purple-600 text-white font-bold shadow-md'
                      : 'bg-slate-900 theme-light:bg-slate-100 border border-slate-800 theme-light:border-slate-300 text-slate-300 theme-light:text-slate-700 hover:border-slate-700 theme-light:hover:border-slate-400'
                  }`}
                >
                  "{p.prompt}"
                </button>
              ))}
            </div>
          </div>

          {/* Conversational Dialogue Thread */}
          <div className="p-5 rounded-xl bg-slate-900/90 theme-light:bg-slate-100 border border-slate-800 theme-light:border-slate-200 space-y-5 min-h-[200px]">
            
            {/* User Question */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 theme-light:bg-slate-300 text-slate-200 theme-light:text-slate-800 font-bold text-xs flex items-center justify-center shrink-0">
                YOU
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800 theme-light:bg-white border border-transparent theme-light:border-slate-300 text-xs text-white theme-light:text-slate-900 font-semibold shadow-sm">
                "{currentPreset.prompt}"
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-lg shadow-purple-600/30">
                AI
              </div>
              <div className="p-4 rounded-xl bg-purple-950/40 theme-light:bg-purple-50 border border-purple-800/50 theme-light:border-purple-200 text-xs text-slate-200 theme-light:text-slate-900 space-y-3 w-full">
                {isTyping ? (
                  <div className="flex items-center gap-2 text-slate-400 theme-light:text-slate-600 font-mono italic">
                    <RefreshCw className="w-4 h-4 animate-spin text-purple-400 theme-light:text-purple-600" />
                    Analyzing salon metrics across branches...
                  </div>
                ) : (
                  <>
                    <p className="leading-relaxed text-slate-100 theme-light:text-slate-900 font-medium">
                      {currentPreset.answer}
                    </p>

                    <div className="pt-3 border-t border-purple-900/60 theme-light:border-purple-200 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[11px] text-purple-300 theme-light:text-purple-800 font-bold">
                        Recommended Action Identified
                      </span>
                      <button
                        onClick={() => onOpenDemo(`AI Action: ${currentPreset.actionLabel}`)}
                        className="px-4 py-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-md transition-all flex items-center gap-1.5"
                      >
                        <span>{currentPreset.actionLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>

          {/* Fake Input Row */}
          <div className="flex items-center gap-2 pt-2">
            <input
              type="text"
              readOnly
              value={currentPreset.prompt}
              className="flex-1 px-4 py-3 rounded-xl bg-slate-900 theme-light:bg-slate-100 border border-slate-800 theme-light:border-slate-300 text-xs text-slate-300 theme-light:text-slate-800 focus:outline-none"
            />
            <button
              onClick={() => onOpenDemo('Ask AI Custom Query')}
              className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
            >
              <span>Ask AI</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
