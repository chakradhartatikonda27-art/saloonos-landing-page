import React from 'react';
import { ShieldCheck, Cloud, Lock, Layers, BarChart3 } from 'lucide-react';

export const TrustSecurity: React.FC = () => {
  const pillars = [
    { icon: Lock, title: 'Enterprise Security', desc: 'Granular authentication, tenant data isolation, and encrypted cloud storage.' },
    { icon: Cloud, title: 'Cloud-Based Access', desc: 'Access your salon from anywhere on desktop, tablet, or mobile with zero installation.' },
    { icon: Layers, title: 'Role-Based Access', desc: 'Specify exact permissions for Owners, Managers, Receptionists, and Stylists.' },
    { icon: BarChart3, title: 'Scalable Growth', desc: 'Start with one chair and scale effortlessly to 50+ multi-city salon locations.' }
  ];

  return (
    <section className="py-16 bg-[#080C14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white font-heading">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
