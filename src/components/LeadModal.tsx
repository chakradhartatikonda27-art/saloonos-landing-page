import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { LeadFormData } from '../types';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  defaultRegion?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, initialType, defaultRegion = 'india' }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    salonName: '',
    email: '',
    phone: '',
    country: defaultRegion === 'india' ? 'India' : defaultRegion === 'usa' ? 'USA' : defaultRegion === 'uk' ? 'UK' : 'Global',
    branches: '1 Branch',
    staffCount: '5-10 Staff'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // confetti fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="glass-panel w-full max-w-lg rounded-2xl p-6 sm:p-8 border border-indigo-500/40 relative shadow-2xl space-y-6 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                {initialType || 'START FREE 14-DAY TRIAL'}
              </div>

              <h3 className="text-2xl font-bold text-white font-heading">
                Experience Salon OS Live
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Bring bookings, queue, billing, staff & AI insights into your salon in minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Salon Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Luxe Beauty Studio"
                    value={formData.salonName}
                    onChange={(e) => setFormData({ ...formData, salonName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="owner@luxesalon.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Country</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="India">🇮🇳 India</option>
                    <option value="USA">🇺🇸 USA</option>
                    <option value="UK">🇬🇧 UK & Europe</option>
                    <option value="Africa">🌍 Africa</option>
                    <option value="Global">🌎 Global</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Branches</label>
                  <select
                    value={formData.branches}
                    onChange={(e) => setFormData({ ...formData, branches: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="1 Branch">1 Branch</option>
                    <option value="2-3 Branches">2-3 Branches</option>
                    <option value="4-10 Branches">4-10 Branches</option>
                    <option value="10+ Chains">10+ Chains</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Staff Count</label>
                  <select
                    value={formData.staffCount}
                    onChange={(e) => setFormData({ ...formData, staffCount: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="1-3 Staff">1-3 Staff</option>
                    <option value="5-10 Staff">5-10 Staff</option>
                    <option value="11-25 Staff">11-25 Staff</option>
                    <option value="25+ Staff">25+ Staff</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 rounded-xl shadow-xl shadow-indigo-600/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <span>Book My Live Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero credit card required. Free 14-day access guaranteed.</span>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-white font-heading">
              Demo Scheduled Successfully!
            </h3>

            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>! Our Salon OS Specialist will reach out to you at <span className="text-indigo-300">{formData.email}</span> within 15 minutes to configure your workspace.
            </p>

            <div className="pt-4">
              <a
                href="https://new-saloon-os.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-500"
              >
                <span>Access Live Salon OS App</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
