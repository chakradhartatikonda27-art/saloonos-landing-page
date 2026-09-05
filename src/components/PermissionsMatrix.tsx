import React from 'react';
import { Shield, Check, X, Lock, Key, ArrowRight } from 'lucide-react';

interface PermissionsMatrixProps {
  onOpenDemo: (type?: string) => void;
}

export const PermissionsMatrix: React.FC<PermissionsMatrixProps> = ({ onOpenDemo }) => {
  const permissionsData = [
    { action: 'View Revenue & Net Profit', owner: true, manager: false, receptionist: false, stylist: false },
    { action: 'Create POS Bills & Collect Pay', owner: true, manager: true, receptionist: true, stylist: false },
    { action: 'Approve Custom Discounts', owner: true, manager: true, receptionist: false, stylist: false },
    { action: 'Override Queue Delay Tokens', owner: true, manager: true, receptionist: false, stylist: false },
    { action: 'Access Customer Phone & Notes', owner: true, manager: true, receptionist: true, stylist: true },
    { action: 'Edit Product Stock & Pricing', owner: true, manager: true, receptionist: false, stylist: false },
    { action: 'Issue Bill Refund / Cancel', owner: true, manager: true, receptionist: false, stylist: false },
    { action: 'Export Financial Reports', owner: true, manager: false, receptionist: false, stylist: false }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#080C14] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <span>DYNAMIC ACCESS CONTROL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            You Decide Who <br />
            <span className="text-gradient-purple">Can Do What.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Configure granular access rights for every employee. Protect sensitive financials while empowering your team.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="mt-14 max-w-4xl mx-auto glass-card rounded-2xl p-6 overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
                <th className="pb-4">Action / Right</th>
                <th className="pb-4 text-center text-indigo-400">Owner</th>
                <th className="pb-4 text-center text-purple-400">Manager</th>
                <th className="pb-4 text-center text-emerald-400">Receptionist</th>
                <th className="pb-4 text-center text-amber-400">Stylist</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {permissionsData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3.5 font-medium text-slate-200">{row.action}</td>
                  <td className="py-3.5 text-center">
                    {row.owner ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-slate-600 mx-auto" />}
                  </td>
                  <td className="py-3.5 text-center">
                    {row.manager ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-slate-600 mx-auto" />}
                  </td>
                  <td className="py-3.5 text-center">
                    {row.receptionist ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-slate-600 mx-auto" />}
                  </td>
                  <td className="py-3.5 text-center">
                    {row.stylist ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-slate-600 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
            Your salon. Your rules. Your permissions.
          </span>
          <button
            onClick={() => onOpenDemo('Role Permissions')}
            className="px-6 py-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
          >
            <span>Configure Security Permissions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
