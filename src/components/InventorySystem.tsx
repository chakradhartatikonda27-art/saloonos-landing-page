import React from 'react';
import { Package, AlertTriangle, ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';

interface InventorySystemProps {
  onOpenDemo: (type?: string) => void;
}

export const InventorySystem: React.FC<InventorySystemProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 md:py-28 bg-[#080C14] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <span>BACKBAR & RETAIL INVENTORY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Know What You Have. <br />
            <span className="text-amber-400">Know What You Need.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Salon OS connects backbar product usage directly to customer billing, auto-deducting stock and generating reorder warnings.
          </p>
        </div>

        {/* Inventory Flow Pipeline */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          
          <div className="glass-card p-5 rounded-xl border border-slate-800 text-xs space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">STEP 1</span>
            <div className="font-bold text-white text-sm">Product Stock Initialized</div>
            <p className="text-slate-400">L’Oréal Color Shampoo (10 Units in Stock)</p>
          </div>

          <div className="glass-card p-5 rounded-xl border border-indigo-500/40 text-xs space-y-2 bg-indigo-950/20">
            <span className="text-[10px] font-bold text-indigo-400 uppercase">STEP 2</span>
            <div className="font-bold text-white text-sm">Service Billed at POS</div>
            <p className="text-slate-300">Stylist completes 1x Keratin Hair Treatment</p>
          </div>

          <div className="glass-card p-5 rounded-xl border border-purple-500/40 text-xs space-y-2">
            <span className="text-[10px] font-bold text-purple-400 uppercase">STEP 3</span>
            <div className="font-bold text-white text-sm">Auto Stock Reduction</div>
            <p className="text-slate-300">System deducts 45ml backbar formula automatically</p>
          </div>

          <div className="glass-card p-5 rounded-xl border border-amber-500/40 text-xs space-y-2 bg-amber-950/20">
            <span className="text-[10px] font-bold text-amber-400 uppercase">STEP 4</span>
            <div className="font-bold text-white text-sm">Low-Stock Purchase Order</div>
            <p className="text-amber-200">Stock drops to 2 units → Reorder PO sent to vendor</p>
          </div>

        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenDemo('Inventory Management')}
            className="px-6 py-3.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
          >
            <span>Automate Salon Inventory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
