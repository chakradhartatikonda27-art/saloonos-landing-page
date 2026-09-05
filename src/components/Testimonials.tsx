import React from 'react';
import { TESTIMONIALS } from '../data/marketingData';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#090D16] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <span>VERIFIED SALON PROOF</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Trusted by Salon Leaders <br />
            <span className="text-gradient-purple">Across the Globe.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            See how salon owners across India, USA, UK, and Europe run smarter, serve faster, and grow bigger with Salon OS.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-indigo-500/40" />

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm font-heading">{item.author}</div>
                  <div className="text-xs text-indigo-300">{item.role}</div>
                  <div className="text-[11px] text-slate-400">{item.salonName}</div>
                </div>

                <div className="text-right">
                  <span className="text-2xl">{item.countryFlag}</span>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">{item.country}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
