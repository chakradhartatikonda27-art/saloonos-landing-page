import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ChevronDown, Globe, Sun, Moon, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: (type?: string) => void;
  activeRegion: string;
  onRegionChange: (region: string) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenDemo, activeRegion, onRegionChange, theme, onToggleTheme 
}) => {
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

  const isLight = theme === 'light';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isLight 
          ? 'bg-white/90 backdrop-blur-md py-3 border-b border-slate-200/80 shadow-lg shadow-slate-200/50' 
          : 'bg-[#070A11]/90 backdrop-blur-md py-3 border-b border-slate-800/80 shadow-2xl shadow-black/50'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className={`w-full h-full rounded-[11px] flex items-center justify-center ${isLight ? 'bg-white' : 'bg-[#0B0F17]'}`}>
                <Sparkles className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className={`font-heading font-extrabold text-xl tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  SALON<span className="text-gradient-purple">OS</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 rounded-full uppercase">
                  GLOBAL
                </span>
              </div>
              <span className={`text-[10px] tracking-wider font-medium uppercase -mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                The Salon & Spa Operating System
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7">
            <a href="#workflow" className={`text-sm font-medium transition-colors ${isLight ? 'text-slate-700 hover:text-indigo-600' : 'text-slate-300 hover:text-white'}`}>
              Workflow
            </a>
            <a href="#modules" className={`text-sm font-medium transition-colors ${isLight ? 'text-slate-700 hover:text-indigo-600' : 'text-slate-300 hover:text-white'}`}>
              Modules
            </a>
            <a href="#roles" className={`text-sm font-medium transition-colors ${isLight ? 'text-slate-700 hover:text-indigo-600' : 'text-slate-300 hover:text-white'}`}>
              Role Experiences
            </a>
            <a href="#ai-assistant" className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${isLight ? 'text-slate-700 hover:text-purple-600' : 'text-slate-300 hover:text-white'}`}>
              <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
              AI Assistant
            </a>
            <a href="#global-readiness" className={`text-sm font-medium transition-colors ${isLight ? 'text-slate-700 hover:text-indigo-600' : 'text-slate-300 hover:text-white'}`}>
              Global
            </a>
            <a href="#pricing" className={`text-sm font-medium transition-colors ${isLight ? 'text-slate-700 hover:text-indigo-600' : 'text-slate-300 hover:text-white'}`}>
              Pricing
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Light / Dark Theme Switcher Button */}
            <button
              onClick={onToggleTheme}
              title={isLight ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                isLight
                  ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {isLight ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light</span>
                </>
              )}
            </button>

            {/* Region Selector */}
            <div className="relative">
              <button 
                onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  isLight
                    ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-indigo-500" />
                <span>{regions.find(r => r.code === activeRegion)?.flag}</span>
                <span className="capitalize">{activeRegion}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {regionDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-56 rounded-xl py-2 shadow-2xl z-50 border ${
                  isLight ? 'bg-white border-slate-200 text-slate-800' : 'glass-panel border-slate-800 text-slate-200'
                }`}>
                  <div className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${isLight ? 'text-slate-400' : 'text-slate-400'}`}>
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
                          ? 'bg-indigo-600/20 text-indigo-600 font-semibold'
                          : isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-800/60'
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
              className={`text-xs font-semibold px-3 py-2 transition-colors ${isLight ? 'text-slate-700 hover:text-indigo-600' : 'text-slate-300 hover:text-white'}`}
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

          {/* Mobile Hamburger Toggle & Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border text-xs ${isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-900 border-slate-800'}`}
            >
              {isLight ? <Moon className="w-4 h-4 text-indigo-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
            <button
              onClick={() => onOpenDemo('Start Free')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-indigo-600 rounded-lg shadow-md"
            >
              Start Free
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${isLight ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-slate-900 border-slate-800 text-slate-300'}`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-4 pb-6 mt-3 space-y-4 ${
          isLight ? 'bg-white border-slate-200' : 'glass-panel border-slate-800'
        }`}>
          <nav className="flex flex-col space-y-3">
            <a 
              href="#workflow" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-1 ${isLight ? 'text-slate-800' : 'text-slate-200'}`}
            >
              Product Workflow
            </a>
            <a 
              href="#modules" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-1 ${isLight ? 'text-slate-800' : 'text-slate-200'}`}
            >
              13 Core Modules
            </a>
            <a 
              href="#roles" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-1 ${isLight ? 'text-slate-800' : 'text-slate-200'}`}
            >
              5 Role Experiences
            </a>
            <a 
              href="#ai-assistant" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-1 flex items-center gap-2 ${isLight ? 'text-slate-800' : 'text-slate-200'}`}
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
              AI Business Assistant
            </a>
            <a 
              href="#global-readiness" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-1 ${isLight ? 'text-slate-800' : 'text-slate-200'}`}
            >
              Global Markets
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-1 ${isLight ? 'text-slate-800' : 'text-slate-200'}`}
            >
              Pricing Plans
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3">
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
                    className={`px-2 py-1 rounded text-xs ${activeRegion === r.code ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'}`}
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
              className="block w-full text-center py-2 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-lg"
            >
              Sign In to App
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
