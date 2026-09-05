import React from 'react';
import { UserCheck, Scissors, Clock, DollarSign, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';

interface StaffManagementProps {
  onOpenDemo: (type?: string) => void;
}

export const StaffManagement: React.FC<StaffManagementProps> = ({ onOpenDemo }) => {
  const staffMembers = [
    { name: 'Rahul Sharma', role: 'Senior Master Stylist', status: 'In Service (Chair 1)', sales: '₹42,500', commission: '₹4,250', retention: '94%' },
    { name: 'Vikram Singh', role: 'Hair Specialist', status: 'Available (Chair 2)', sales: '₹34,200', commission: '₹3,420', retention: '88%' },
    { name: 'Pooja Verma', role: 'Senior Beautician', status: 'In Service (Room 3)', sales: '₹28,900', commission: '₹2,890', retention: '91%' },
    { name: 'Neha Gupta', role: 'Nail Artist', status: 'Break (15 min remaining)', sales: '₹18,400', commission: '₹1,840', retention: '86%' }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#070A11] theme-light:bg-slate-50 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 theme-light:bg-indigo-50 border border-indigo-500/30 text-indigo-300 theme-light:text-indigo-700 text-xs font-semibold">
            <span>STAFF & COMMISSION ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white theme-light:text-slate-900 tracking-tight">
            Your Team Is Your Business. <br />
            <span className="text-gradient-purple">Know Who’s Driving Revenue.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 theme-light:text-slate-600">
            Know who's working, who's busy, who's available, and who's earning commissions in real-time.
          </p>
        </div>

        {/* Staff Console Grid */}
        <div className="mt-14 max-w-5xl mx-auto glass-card rounded-2xl p-6 md:p-8 border border-slate-800 theme-light:border-slate-200 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 theme-light:border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <UserCheck className="w-6 h-6 text-indigo-400 theme-light:text-indigo-600" />
              <div>
                <h3 className="text-lg font-bold text-white theme-light:text-slate-900 font-heading">Live Staff Floor Roster & Payouts</h3>
                <div className="text-xs text-slate-400 theme-light:text-slate-500">Shift Roster: 6 Active Stylists • Today's Total Sales: ₹1,24,000</div>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-bold text-emerald-300 theme-light:text-emerald-800 bg-emerald-950 theme-light:bg-emerald-100 border border-emerald-800 theme-light:border-emerald-300 rounded-full">
              AUTO COMMISSION ACTIVE
            </span>
          </div>

          {/* Roster List */}
          <div className="space-y-3">
            {staffMembers.map((staff, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/20 text-indigo-300 font-bold flex items-center justify-center border border-indigo-500/30">
                    {staff.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{staff.name}</div>
                    <div className="text-[11px] text-slate-400">{staff.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-left sm:text-right">
                  <div>
                    <div className="text-[10px] text-slate-400">Status</div>
                    <div className={`font-semibold ${staff.status.includes('Available') ? 'text-emerald-400' : 'text-indigo-300'}`}>
                      {staff.status}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-400">Sales Today</div>
                    <div className="font-bold font-mono text-white">{staff.sales}</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-400">Commission Earned</div>
                    <div className="font-bold font-mono text-emerald-400">{staff.commission}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Automated 1-click commission split & tip calculations</span>
            </div>

            <button
              onClick={() => onOpenDemo('Manage Salon Staff')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span>Manage Your Staff & Roster</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
