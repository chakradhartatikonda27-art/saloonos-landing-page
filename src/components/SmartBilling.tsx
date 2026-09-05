import React, { useState } from 'react';
import { Receipt, CheckCircle, CreditCard, MessageSquare, ArrowRight, DollarSign, Percent, ShieldCheck } from 'lucide-react';

interface SmartBillingProps {
  onOpenDemo: (type?: string) => void;
}

export const SmartBilling: React.FC<SmartBillingProps> = ({ onOpenDemo }) => {
  const [selectedPayment, setSelectedPayment] = useState<'upi' | 'card' | 'split'>('upi');

  return (
    <section className="py-20 md:py-28 bg-[#080C14] theme-light:bg-slate-50 border-t border-slate-800 theme-light:border-slate-200 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 theme-light:bg-indigo-50 border border-indigo-500/30 text-indigo-300 theme-light:text-indigo-700 text-xs font-semibold">
            <span>HIGH-VELOCITY FRONT DESK POS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white theme-light:text-slate-900 tracking-tight">
            From Service Completion <br />
            <span className="text-gradient-purple">To Payment in Seconds.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 theme-light:text-slate-600">
            Fast checkout. Accurate tax compliance. Instant digital WhatsApp invoices. Happier customers.
          </p>
        </div>

        {/* Visual Pipeline Bar */}
        <div className="mt-12 overflow-x-auto pb-4">
          <div className="flex items-center justify-between min-w-[800px] glass-panel p-4 rounded-2xl border border-slate-800 theme-light:border-slate-200 text-xs">
            <div className="flex items-center gap-2 text-indigo-300 theme-light:text-indigo-700 font-bold">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">1</span>
              <span>Service Completed</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 theme-light:text-slate-400" />
            <div className="flex items-center gap-2 text-indigo-300 theme-light:text-indigo-700 font-bold">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">2</span>
              <span>Bill Auto-Generated</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 theme-light:text-slate-400" />
            <div className="flex items-center gap-2 text-indigo-300 theme-light:text-indigo-700 font-bold">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">3</span>
              <span>GST/VAT Computed</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 theme-light:text-slate-400" />
            <div className="flex items-center gap-2 text-indigo-300 theme-light:text-indigo-700 font-bold">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">4</span>
              <span>Payment Collected</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 theme-light:text-slate-400" />
            <div className="flex items-center gap-2 text-emerald-400 theme-light:text-emerald-700 font-bold">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">5</span>
              <span>WhatsApp Invoice</span>
            </div>
          </div>
        </div>

        {/* Interactive POS Checkout Visual */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Checkout Card (6 cols) */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 md:p-8 border border-indigo-500/30 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 theme-light:border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <Receipt className="w-6 h-6 text-indigo-400 theme-light:text-indigo-600" />
                <div>
                  <h4 className="text-base font-bold text-white theme-light:text-slate-900 font-heading">POS Bill #INV-9824</h4>
                  <div className="text-xs text-slate-400 theme-light:text-slate-500">Guest: Ananya Roy • Phone: +91 98765****</div>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-bold text-emerald-300 theme-light:text-emerald-800 bg-emerald-950 theme-light:bg-emerald-100 border border-emerald-800 theme-light:border-emerald-300 rounded-full">
                READY FOR PAY
              </span>
            </div>

            {/* Line Items */}
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 theme-light:bg-slate-100 flex justify-between items-center text-slate-200 theme-light:text-slate-800 border border-slate-800 theme-light:border-slate-200">
                <span>Hair Cut & Keratin Spa (Stylist: Rahul)</span>
                <span className="font-mono font-bold text-white theme-light:text-slate-900">₹4,200.00</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 theme-light:bg-slate-100 flex justify-between items-center text-slate-200 theme-light:text-slate-800 border border-slate-800 theme-light:border-slate-200">
                <span>Moroccanoil Treatment 100ml (Retail)</span>
                <span className="font-mono font-bold text-white theme-light:text-slate-900">₹1,800.00</span>
              </div>
              <div className="p-3 rounded-lg bg-indigo-950/40 theme-light:bg-purple-50 border border-indigo-800/40 theme-light:border-purple-200 flex justify-between items-center text-indigo-300 theme-light:text-purple-800">
                <span>Loyalty Points Discount (400 pts)</span>
                <span className="font-mono font-bold text-indigo-300 theme-light:text-purple-800">-₹400.00</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 theme-light:bg-slate-100 flex justify-between items-center text-slate-400 theme-light:text-slate-600 border border-slate-800/50 theme-light:border-slate-200">
                <span>GST Tax (18% Computed)</span>
                <span className="font-mono text-slate-300 theme-light:text-slate-800">+₹1,008.00</span>
              </div>

              <div className="pt-3 border-t border-slate-800 theme-light:border-slate-200 flex justify-between items-center text-lg font-bold text-white theme-light:text-slate-900">
                <span>Total Payable</span>
                <span className="text-emerald-400 theme-light:text-emerald-600 font-mono">₹6,608.00</span>
              </div>
            </div>
          </div>

          {/* Right Payment Options & WhatsApp Delivery (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 theme-light:border-slate-200 space-y-5">
              <h4 className="text-sm font-bold text-white theme-light:text-slate-900 uppercase tracking-wider">Accepted Payment Modes</h4>

              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedPayment('upi')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                    selectedPayment === 'upi'
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                      : 'bg-slate-900 theme-light:bg-slate-100 border-slate-800 theme-light:border-slate-300 text-slate-400 theme-light:text-slate-700 hover:text-white theme-light:hover:text-slate-900'
                  }`}
                >
                  UPI QR / GPay
                </button>
                <button
                  onClick={() => setSelectedPayment('card')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                    selectedPayment === 'card'
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                      : 'bg-slate-900 theme-light:bg-slate-100 border-slate-800 theme-light:border-slate-300 text-slate-400 theme-light:text-slate-700 hover:text-white theme-light:hover:text-slate-900'
                  }`}
                >
                  Credit / Debit
                </button>
                <button
                  onClick={() => setSelectedPayment('split')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                    selectedPayment === 'split'
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                      : 'bg-slate-900 theme-light:bg-slate-100 border-slate-800 theme-light:border-slate-300 text-slate-400 theme-light:text-slate-700 hover:text-white theme-light:hover:text-slate-900'
                  }`}
                >
                  Split / Wallet
                </button>
              </div>

              {/* Dynamic Payment Detail Preview */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
                {selectedPayment === 'upi' && (
                  <div className="flex items-center justify-between text-emerald-400 font-medium">
                    <span>UPI Dynamic QR Code generated instantly on screen</span>
                    <CheckCircle className="w-4 h-4" />
                  </div>
                )}
                {selectedPayment === 'card' && (
                  <div className="flex items-center justify-between text-indigo-300 font-medium">
                    <span>Card Terminal integration active (Tap / Dip / Swipe)</span>
                    <CheckCircle className="w-4 h-4" />
                  </div>
                )}
                {selectedPayment === 'split' && (
                  <div className="flex items-center justify-between text-purple-300 font-medium">
                    <span>Split Mode: Cash ₹2,000 + Wallet Credit ₹4,608</span>
                    <CheckCircle className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* WhatsApp Invoice Box */}
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-center gap-3 text-xs text-emerald-200">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  Digital tax receipt with PDF link sent automatically to guest's WhatsApp upon payment completion.
                </span>
              </div>

              <button
                onClick={() => onOpenDemo('Fast POS Billing')}
                className="w-full py-3.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Experience Fast POS Billing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
