import React, { useState } from 'react';
import { 
  Users, Calendar, Clock, DollarSign, Sparkles, Scissors, CheckCircle, 
  TrendingUp, CreditCard, ChevronRight, MessageSquare, AlertCircle, Play
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'queue' | 'pos' | 'ai'>('dashboard');

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 mb-8 perspective-1000">
      {/* Decorative Glow Orbs */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-indigo-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-8 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Main Browser Frame */}
      <div className="glass-panel rounded-2xl border border-slate-700/60 shadow-2xl shadow-indigo-950/80 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
        
        {/* Browser Top Bar */}
        <div className="px-4 py-3 bg-[#0B0F19]/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              app.salonos.com/owner/live-dashboard
            </span>
          </div>

          {/* Frame View Switcher Tabs */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Owner View
            </button>
            <button
              onClick={() => setActiveTab('queue')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'queue'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Live Queue
            </button>
            <button
              onClick={() => setActiveTab('pos')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'pos'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              POS Billing
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1 ${
                activeTab === 'ai'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              AI Assistant
            </button>
          </div>
        </div>

        {/* Dashboard Body Preview */}
        <div className="p-5 md:p-8 bg-[#090D16] min-h-[420px]">
          
          {/* TAB 1: OWNER DASHBOARD VIEW */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Header metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>Today's Revenue</span>
                    <span className="text-emerald-400 font-bold text-[11px]">+18.4%</span>
                  </div>
                  <div className="text-2xl font-bold font-heading text-white mt-1">₹84,250</div>
                  <div className="text-[11px] text-slate-400 mt-1">42 Bills Processed</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>Live Queue</span>
                    <span className="text-indigo-400 font-bold text-[11px]">3 Waiting</span>
                  </div>
                  <div className="text-2xl font-bold font-heading text-white mt-1">Token #A27</div>
                  <div className="text-[11px] text-emerald-400 mt-1">Avg 14 min wait</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>Staff On Floor</span>
                    <span className="text-purple-400 font-bold text-[11px]">88% Active</span>
                  </div>
                  <div className="text-2xl font-bold font-heading text-white mt-1">5 / 6 Chairs</div>
                  <div className="text-[11px] text-slate-400 mt-1">1 Break • 5 Busy</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>Est. Net Profit</span>
                    <span className="text-purple-400 font-bold text-[11px]">Margin 28%</span>
                  </div>
                  <div className="text-2xl font-bold font-heading text-white mt-1">₹3,42,000</div>
                  <div className="text-[11px] text-slate-400 mt-1">Monthly Forecast</div>
                </div>
              </div>

              {/* Middle split: Appointments & Active Floor Status */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Schedule preview */}
                <div className="md:col-span-2 p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      Live Appointments & Floor Roster
                    </h4>
                    <span className="text-xs text-indigo-400 font-medium cursor-pointer">View Calendar →</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-600/30 text-indigo-300 font-bold text-xs flex items-center justify-center border border-indigo-500/30">
                          AR
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Ananya Roy</div>
                          <div className="text-[11px] text-slate-400">Hair Coloring & Hair Spa • Stylist: Rahul</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-2.5 py-1 text-[10px] font-bold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                          IN SERVICE (35 min)
                        </span>
                        <div className="text-[11px] text-slate-400 mt-1 font-mono">₹4,500</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-purple-600/30 text-purple-300 font-bold text-xs flex items-center justify-center border border-purple-500/30">
                          PS
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Priya Sharma</div>
                          <div className="text-[11px] text-slate-400">Keratin Treatment • Stylist: Vikram</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-2.5 py-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                          TOKEN #A27 (WAITING)
                        </span>
                        <div className="text-[11px] text-slate-400 mt-1 font-mono">₹6,200</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Assistant Insight widget */}
                <div className="p-5 rounded-xl bg-gradient-to-b from-purple-950/40 via-slate-900 to-slate-900 border border-purple-800/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-purple-500/20 text-purple-300 rounded-full uppercase flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-purple-400" /> AI Opportunity Alert
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">10m ago</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    "Hair Spa bookings dropped 14% this week. Launching an automated WhatsApp campaign to 124 inactive customers could recover ₹68,000 in appointments."
                  </p>
                  <button 
                    onClick={() => setActiveTab('ai')}
                    className="w-full py-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-md transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Run AI Campaign</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: LIVE QUEUE VIEW */}
          {activeTab === 'queue' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="flex items-center justify-between p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40">
                <div>
                  <div className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Algorithmic Wait-Time Engine</div>
                  <div className="text-lg font-bold text-white mt-0.5">Live Queue Floor Console</div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  3 Guests Waiting • Avg Wait: 14 mins
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-300 rounded">TOKEN #A26</span>
                    <span className="text-xs text-slate-400">Entered 10m ago</span>
                  </div>
                  <div className="text-sm font-semibold text-white">Rohit Malhotra</div>
                  <div className="text-xs text-slate-400">Beard Trim & Hair Cut</div>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Est. Wait:</span>
                    <span className="text-emerald-400 font-bold">2 mins</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-indigo-600/60 shadow-lg shadow-indigo-500/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-500/20 text-indigo-300 rounded">TOKEN #A27</span>
                    <span className="text-xs text-indigo-400 font-bold">NEXT IN LINE</span>
                  </div>
                  <div className="text-sm font-semibold text-white">Priya Sharma</div>
                  <div className="text-xs text-slate-400">Keratin Spa & Blow Dry</div>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Est. Wait:</span>
                    <span className="text-indigo-300 font-bold">14 mins</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-slate-800 text-slate-400 rounded">TOKEN #A28</span>
                    <span className="text-xs text-slate-400">Entered 2m ago</span>
                  </div>
                  <div className="text-sm font-semibold text-white">Kavita Reddy</div>
                  <div className="text-xs text-slate-400">Manicure & Gel Nails</div>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Est. Wait:</span>
                    <span className="text-slate-300 font-bold">26 mins</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: POS BILLING VIEW */}
          {activeTab === 'pos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Guest Checkout</div>
                    <div className="text-sm font-bold text-white">Priya Sharma (Token #A27)</div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 rounded-full">
                    Tax-Ready GST Bill
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>1x Premium Keratin Treatment</span>
                    <span className="font-mono">₹4,500.00</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>1x L’Oréal Color Protect Shampoo (Retail)</span>
                    <span className="font-mono">₹1,200.00</span>
                  </div>
                  <div className="flex justify-between text-indigo-400">
                    <span>VIP Member Discount (10%)</span>
                    <span className="font-mono">-₹570.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>GST (18% Tax)</span>
                    <span className="font-mono">+₹923.40</span>
                  </div>
                  <div className="pt-3 border-t border-slate-800 flex justify-between text-base font-bold text-white">
                    <span>Total Bill</span>
                    <span className="text-emerald-400 font-mono">₹6,053.40</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Payment Method & Delivery
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="p-3 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 border border-indigo-500">
                      <CreditCard className="w-4 h-4" /> UPI QR Code
                    </button>
                    <button className="p-3 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700">
                      Credit / Debit Card
                    </button>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-emerald-200">
                      Digital GST Invoice automatically sent to guest WhatsApp (+91 98765****)
                    </span>
                  </div>
                </div>

                <button className="w-full py-3 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Complete Payment & Issue WhatsApp Bill
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: CONVERSATIONAL AI VIEW */}
          {activeTab === 'ai' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/30 flex items-center justify-center text-purple-300">
                  <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider">Salon OS Business Intelligence AI</div>
                  <div className="text-sm font-bold text-white">Ask anything about your salon performance</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-800 text-slate-300 font-bold text-xs flex items-center justify-center">
                    YOU
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 text-xs text-slate-200 font-medium">
                    "Why is revenue down 8% in Branch #2 this month?"
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-purple-600/40 text-purple-300 font-bold text-xs flex items-center justify-center border border-purple-500/40">
                    AI
                  </div>
                  <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/50 text-xs text-slate-100 space-y-2">
                    <p className="leading-relaxed">
                      Revenue is down ₹38,400 primarily due to a 22% drop in weekday Hair Color appointments and 146 repeat clients who passed their typical 60-day rebooking window.
                    </p>
                    <div className="pt-2 border-t border-purple-900/60 flex items-center justify-between">
                      <span className="text-[11px] text-purple-300 font-medium">Recommended Action: Send 20% OFF WhatsApp Comeback offer</span>
                      <button className="px-3 py-1.5 text-[11px] font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors">
                        Launch Campaign Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Floating Accent Card Overlay */}
        <div className="hidden lg:flex absolute -right-6 bottom-12 glass-panel p-3.5 rounded-xl border border-indigo-500/40 shadow-2xl shadow-indigo-600/30 items-center gap-3 animate-float pointer-events-none">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Live Salon Growth</div>
            <div className="text-xs font-bold text-white">+31% Repeat Bookings</div>
          </div>
        </div>

      </div>
    </div>
  );
};
