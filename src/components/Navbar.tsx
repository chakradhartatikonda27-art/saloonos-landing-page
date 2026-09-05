import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ChevronDown, Globe, Shield, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: (type?: string) => void;
  activeRegion: string;
  onRegionChange: (region: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, activeRegion, onRegionChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const regions = [
    { code: 'global', name: 'Global (Worldwide)', flag: '🌎' },
    { code: 'india', name: 'India (GST & UPI)', flag: '🇮🇳' },
    { code: 'usa', name: 'United States', flag: '🇺🇸' },
    { code: 'uk', name: 'UK & Europe (VAT)', flag: '🇬🇧' },
    { code: 'africa', name: 'Africa (Mobile-First)', flag: '🌍' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#070A11]/90 backdrop-blur-md py-3 border-b border-slate-800/80 shadow-2xl shadow-black/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-[#0B0F17] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  SALON<span className="text-gradient-purple">OS</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full uppercase">
                  GLOBAL
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider font-medium uppercase -mt-0.5">
                The Salon Operating System
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#workflow" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Workflow
            </a>
            <a href="#modules" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Modules
            </a>
            <a href="#roles" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Role Experiences
            </a>
            <a href="#ai-assistant" className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              AI Assistant
            </a>
            <a href="#global-readiness" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Global
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Pricing
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Region Selector */}
            <div className="relative">
              <button 
                onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>{regions.find(r => r.code === activeRegion)?.flag}</span>
                <span className="capitalize">{activeRegion}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {regionDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 glass-panel rounded-xl py-2 shadow-2xl z-50">
                  <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Select Your Market
                  </div>
                  {regions.map((reg) => (
                    <button
                      key={reg.code}
                      onClick={() => {
                        onRegionChange(reg.code);
                        setRegionDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-xs font-medium transition-colors ${
                        activeRegion === reg.code
                          ? 'bg-indigo-600/20 text-indigo-300 font-semibold'
                          : 'text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <span className="text-base">{reg.flag}</span>
                      <span>{reg.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Link */}
            <a
              href="https://new-saloon-os.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors"
            >
              Sign In
            </a>

            {/* Primary CTA */}
            <button
              onClick={() => onOpenDemo('Start Free')}
              className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white transition-all duration-200 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 rounded-lg shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Free</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => onOpenDemo('Start Free')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-indigo-600 rounded-lg shadow-md"
            >
              Start Free
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a 
              href="#workflow" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 py-1 hover:text-indigo-400"
            >
              Product Workflow
            </a>
            <a 
              href="#modules" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 py-1 hover:text-indigo-400"
            >
              13 Core Modules
            </a>
            <a 
              href="#roles" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 py-1 hover:text-indigo-400"
            >
              5 Role Experiences
            </a>
            <a 
              href="#ai-assistant" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 py-1 hover:text-indigo-400 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              AI Business Assistant
            </a>
            <a 
              href="#global-readiness" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 py-1 hover:text-indigo-400"
            >
              Global Markets
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 py-1 hover:text-indigo-400"
            >
              Pricing Plans
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Select Region:</span>
              <div className="flex gap-2">
                {regions.map(r => (
                  <button
                    key={r.code}
                    onClick={() => {
                      onRegionChange(r.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2 py-1 rounded text-xs ${activeRegion === r.code ? 'bg-indigo-600 text-white' : 'bg-slate-800'}`}
                  >
                    {r.flag}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="https://new-saloon-os.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center py-2 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
            >
              Sign In to App
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
