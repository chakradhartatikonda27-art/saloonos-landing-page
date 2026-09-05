import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GlobalTrustStrip } from './components/GlobalTrustStrip';
import { ProblemSection } from './components/ProblemSection';
import { ProductFlow } from './components/ProductFlow';
import { OnePlatformGrid } from './components/OnePlatformGrid';
import { RoleExperience } from './components/RoleExperience';
import { QueueDifferentiator } from './components/QueueDifferentiator';
import { SmartBilling } from './components/SmartBilling';
import { CustomerCRM } from './components/CustomerCRM';
import { MarketingRetention } from './components/MarketingRetention';
import { StaffManagement } from './components/StaffManagement';
import { InventorySystem } from './components/InventorySystem';
import { OwnerCommandCenter } from './components/OwnerCommandCenter';
import { AiAssistant } from './components/AiAssistant';
import { MultiBranch } from './components/MultiBranch';
import { PermissionsMatrix } from './components/PermissionsMatrix';
import { GlobalReadiness } from './components/GlobalReadiness';
import { BeforeAfter } from './components/BeforeAfter';
import { CustomerOwnerJourney } from './components/CustomerOwnerJourney';
import { RoiCalculator } from './components/RoiCalculator';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { TrustSecurity } from './components/TrustSecurity';
import { FaqAccordion } from './components/FaqAccordion';
import { RegionalLandingPage } from './components/RegionalLandingPage';
import { LeadModal } from './components/LeadModal';
import { Footer } from './components/Footer';
import { ArrowRight, Sparkles } from 'lucide-react';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeRegion, setActiveRegion] = useState('india');
  const [viewingRegionalPage, setViewingRegionalPage] = useState<string | null>(null);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadModalType, setLeadModalType] = useState<string>('Start Free');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('theme-light');
      document.body.classList.add('theme-light');
    } else {
      document.documentElement.classList.remove('theme-light');
      document.body.classList.remove('theme-light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenDemo = (type?: string) => {
    if (type) setLeadModalType(type);
    setLeadModalOpen(true);
  };

  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white ${
      isLight ? 'bg-slate-50 text-slate-900 theme-light' : 'bg-[#070A11] text-slate-100'
    }`}>
      
      {/* Sticky Header */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        activeRegion={activeRegion}
        onRegionChange={(reg) => {
          setActiveRegion(reg);
          setViewingRegionalPage(null);
        }}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content View Switcher */}
      {viewingRegionalPage ? (
        <RegionalLandingPage
          regionId={viewingRegionalPage}
          onBack={() => setViewingRegionalPage(null)}
          onOpenDemo={handleOpenDemo}
        />
      ) : (
        <main className="relative overflow-hidden">
          
          {/* 1. Hero Section */}
          <Hero onOpenDemo={handleOpenDemo} />

          {/* 2. Global Trust Strip */}
          <GlobalTrustStrip
            activeRegion={activeRegion}
            onRegionChange={(reg) => {
              setActiveRegion(reg);
              setViewingRegionalPage(reg);
            }}
          />

          {/* 3. Problem Section */}
          <ProblemSection />

          {/* 4. Product Workflow (9 Stages) */}
          <ProductFlow />

          {/* 5. One Platform Grid (13 Modules) */}
          <OnePlatformGrid />

          {/* 6. Role-Based Experience (5 Roles) */}
          <RoleExperience onOpenDemo={handleOpenDemo} />

          {/* 7. Live Queue Differentiator */}
          <QueueDifferentiator onOpenDemo={handleOpenDemo} />

          {/* 8. Smart Billing & POS */}
          <SmartBilling onOpenDemo={handleOpenDemo} />

          {/* 9. Customer CRM */}
          <CustomerCRM onOpenDemo={handleOpenDemo} />

          {/* 10. Marketing & Retention */}
          <MarketingRetention onOpenDemo={handleOpenDemo} />

          {/* 11. Staff Management */}
          <StaffManagement onOpenDemo={handleOpenDemo} />

          {/* 12. Inventory System */}
          <InventorySystem onOpenDemo={handleOpenDemo} />

          {/* 13. Owner Command Center */}
          <OwnerCommandCenter onOpenDemo={handleOpenDemo} />

          {/* 14. AI Business Assistant */}
          <AiAssistant onOpenDemo={handleOpenDemo} />

          {/* 15. Multi-Branch Operations */}
          <MultiBranch onOpenDemo={handleOpenDemo} />

          {/* 16. Permissions Matrix */}
          <PermissionsMatrix onOpenDemo={handleOpenDemo} />

          {/* 17. Global Readiness */}
          <GlobalReadiness
            activeRegion={activeRegion}
            onRegionChange={setActiveRegion}
            onOpenDemo={handleOpenDemo}
          />

          {/* 18. Before / After Comparison */}
          <BeforeAfter onOpenDemo={handleOpenDemo} />

          {/* 19. Customer & Owner Journeys */}
          <CustomerOwnerJourney onOpenDemo={handleOpenDemo} />

          {/* 20. Interactive ROI Calculator */}
          <RoiCalculator onOpenDemo={handleOpenDemo} />

          {/* 21. Pricing Section */}
          <PricingSection onOpenDemo={handleOpenDemo} />

          {/* 22. Social Proof Testimonials */}
          <Testimonials />

          {/* 23. Trust & Security Pillars */}
          <TrustSecurity />

          {/* 24. FAQ Accordion */}
          <FaqAccordion />

          {/* 25. Final High-Impact Call to Action Banner */}
          <section className={`py-24 relative overflow-hidden transition-colors ${
            isLight 
              ? 'bg-gradient-to-b from-slate-100 via-indigo-50/60 to-white' 
              : 'bg-gradient-to-b from-[#080C14] via-indigo-950/40 to-[#070A11]'
          }`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-xs font-semibold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                <span>TRANSFORM YOUR SALON & SPA TODAY</span>
              </div>

              <h2 className={`text-4xl sm:text-6xl font-heading font-extrabold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Your Business Is Growing. <br />
                <span className="text-gradient-purple">Your Software Should Too.</span>
              </h2>

              <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                Bring bookings, customers, staff, billing, queue, operations, and growth into one powerful platform. Set up your salon in minutes.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => handleOpenDemo('Final CTA - Start Free')}
                  className="w-full sm:w-auto px-9 py-4 text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 rounded-xl shadow-xl shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleOpenDemo('Final CTA - Book Demo')}
                  className={`w-full sm:w-auto px-9 py-4 text-base font-semibold border rounded-xl shadow-lg transition-all ${
                    isLight 
                      ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300' 
                      : 'bg-slate-900 border-slate-700 text-slate-200 hover:text-white'
                  }`}
                >
                  Book a Live Demo
                </button>
              </div>

              <div className={`text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                SALON OS • The Operating System for Salons, Spas, Parlours & Makeup Artists
              </div>
            </div>
          </section>

        </main>
      )}

      {/* Global Footer */}
      <Footer onSelectRegionalPage={(regionId) => setViewingRegionalPage(regionId)} />

      {/* Lead Capture Demo Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialType={leadModalType}
        defaultRegion={activeRegion}
      />

    </div>
  );
}

export default App;
