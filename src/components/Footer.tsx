import React from 'react';
import { Sparkles, Globe } from 'lucide-react';

interface FooterProps {
  onSelectRegionalPage: (regionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectRegionalPage }) => {
  return (
    <footer className="bg-[#05080E] border-t border-slate-800 text-slate-400 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Brand Info (2 cols) */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#0B0F17] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                SALON<span className="text-gradient-purple">OS</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The end-to-end Operating System for modern salons, spas, barbershops, and multi-branch chains globally.
            </p>

            <div className="text-[11px] text-slate-500 font-mono">
              Global Presence: India · USA · UK · Europe · Africa · Worldwide
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Product</div>
            <ul className="space-y-2">
              <li><a href="#workflow" className="hover:text-white transition-colors">Product Workflow</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">13 Core Modules</a></li>
              <li><a href="#roles" className="hover:text-white transition-colors">Role Experiences</a></li>
              <li><a href="#ai-assistant" className="hover:text-white transition-colors">AI Business Co-Pilot</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Solutions</div>
            <ul className="space-y-2">
              <li><a href="#roles" className="hover:text-white transition-colors">Independent Salons</a></li>
              <li><a href="#roles" className="hover:text-white transition-colors">Multi-Branch Salons</a></li>
              <li><a href="#roles" className="hover:text-white transition-colors">Salon Chains & Franchises</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Spas & Wellness Studios</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Barbershops & Men’s Grooming</a></li>
            </ul>
          </div>

          {/* Column 3: Regional Pages */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Global Markets</div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onSelectRegionalPage('india')} className="hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                  <span>🇮🇳</span> Salon Software India
                </button>
              </li>
              <li>
                <button onClick={() => onSelectRegionalPage('usa')} className="hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                  <span>🇺🇸</span> Salon Software USA
                </button>
              </li>
              <li>
                <button onClick={() => onSelectRegionalPage('uk')} className="hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                  <span>🇬🇧</span> Salon Software UK & EU
                </button>
              </li>
              <li>
                <button onClick={() => onSelectRegionalPage('africa')} className="hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                  <span>🌍</span> Salon Software Africa
                </button>
              </li>
              <li>
                <button onClick={() => onSelectRegionalPage('global')} className="hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                  <span>🌎</span> Global Salon Software
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Salon OS Inc. All rights reserved. The Operating System for Your Salon.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Security</a>
            <a href="#" className="hover:text-slate-300">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
