import React from 'react';
import { 
  MessageSquareX, Clock, Receipt, Users, UserX, EyeOff, CheckCircle2, Sparkles
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: MessageSquareX,
      title: 'Too Many Missed Appointments',
      problem: 'Bookings scattered across phone calls, WhatsApp messages, and paper diaries lead to double bookings and no-shows.',
      solution: '24/7 online self-booking calendar with automated WhatsApp deposit protection and confirmation sync.'
    },
    {
      icon: Clock,
      title: 'Customers Waiting Too Long',
      problem: 'No real-time queue visibility. Walk-in guests get frustrated waiting with zero transparency into wait times.',
      solution: 'Live digital token system computing exact waiting times based on floor chair progress and artist availability.'
    },
    {
      icon: Receipt,
      title: 'Billing Takes Too Long',
      problem: 'Manual tax calculations, hand-written slips, and disconnected card machines delay checkout during peak hours.',
      solution: 'Fast POS billing generating tax-ready GST/VAT invoices delivered directly to WhatsApp in under 8 seconds.'
    },
    {
      icon: Users,
      title: 'Staff Management is Messy',
      problem: 'Zero clear visibility into daily rosters, breaks, service timers, or complex commission calculations.',
      solution: 'Automated staff scheduling, floor availability tracking, and 1-click commission split reports.'
    },
    {
      icon: UserX,
      title: 'Customers Disappear Forever',
      problem: 'Once a client leaves, there is no system to track their rebooking cycle or reach out when they become inactive.',
      solution: 'Automated retention campaigns triggering personalized WhatsApp offers to win back churn-risk clients.'
    },
    {
      icon: EyeOff,
      title: 'Owners Lack Financial Visibility',
      problem: 'Revenue, expenses, backbar inventory, and net profits are spread across scattered spreadsheets and memory.',
      solution: 'Owner Command Center providing live multi-branch revenue, net profit margins, and AI business insights.'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 theme-light:bg-rose-50 border border-rose-500/30 text-rose-400 theme-light:text-rose-600 text-xs font-semibold">
            <span>THE OLD OPERATING CHAOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white theme-light:text-slate-900 tracking-tight">
            Your Business Shouldn’t Run on <br className="hidden sm:inline" />
            <span className="text-rose-500">WhatsApp, Spreadsheets & Memory.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 theme-light:text-slate-600">
            Running a modern salon, parlour, spa, or makeup studio with disconnected tools creates operational friction, lost revenue, and exhausted owners.
          </p>
        </div>

        {/* Problem-Solution Comparison Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Problem Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-950/60 theme-light:bg-rose-100 border border-rose-500/30 text-rose-500 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 text-[10px] font-bold text-rose-500 bg-rose-500/10 border border-rose-500/20 rounded-full">
                      CHAOS
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white theme-light:text-slate-900 font-heading">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-400 theme-light:text-slate-600 leading-relaxed font-normal">
                    {item.problem}
                  </p>
                </div>

                {/* Bottom Solution Transition */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 theme-light:border-slate-200 bg-indigo-950/20 theme-light:bg-indigo-50/60 -mx-6 -mb-6 p-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 theme-light:text-indigo-700 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>SALON OS SOLUTION</span>
                  </div>
                  <p className="text-xs text-slate-200 theme-light:text-slate-800 font-medium">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Bridge Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 theme-light:from-indigo-50 theme-light:via-white theme-light:to-purple-50 border border-indigo-500/40 theme-light:border-indigo-200 shadow-xl">
            <Sparkles className="w-5 h-5 text-indigo-500 animate-pulse" />
            <span className="text-base font-bold text-white theme-light:text-slate-900">
              Salon OS brings bookings, queue, staff, billing, & marketing into one unified platform.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
