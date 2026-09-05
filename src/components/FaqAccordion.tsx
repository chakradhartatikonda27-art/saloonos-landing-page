import React, { useState } from 'react';
import { FAQS } from '../data/marketingData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-[#070A11] theme-light:bg-slate-50 relative transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 theme-light:bg-indigo-50 border border-indigo-500/30 text-indigo-300 theme-light:text-indigo-700 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400 theme-light:text-indigo-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white theme-light:text-slate-900 tracking-tight">
            Got Questions? <br />
            <span className="text-gradient-purple">We’ve Got Answers.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 theme-light:text-slate-600">
            Everything you need to know about Salon OS setup, billing, queue, and security.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-xl border border-slate-800 theme-light:border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-500/20 theme-light:bg-indigo-100 text-indigo-300 theme-light:text-indigo-700 rounded uppercase">
                      {faq.category}
                    </span>
                    <span className="font-bold text-white theme-light:text-slate-900 text-sm sm:text-base font-heading">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 theme-light:text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-indigo-400 theme-light:text-indigo-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-3 text-xs sm:text-sm text-slate-300 theme-light:text-slate-700 leading-relaxed border-t border-slate-800/80 theme-light:border-slate-200 bg-slate-900/40 theme-light:bg-slate-50 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
