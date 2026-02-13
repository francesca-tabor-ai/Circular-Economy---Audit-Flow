
import React, { useState } from 'react';
import { ICONS } from '../constants';

const AuditPacks: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-12 h-12 bg-[#635bff]/10 text-[#635bff] rounded-xl flex items-center justify-center">
            <ICONS.Audit />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a1f36]">Compile Audit Pack</h2>
            <p className="text-[14px] text-[#4f566b] font-medium">Bundle operational evidence into a regulatory-standard inspection document.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
          <div className="space-y-2.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">Product Line</label>
            <select className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm font-semibold text-[#1a1f36] outline-none focus:ring-2 focus:ring-[#635bff]/10 focus:border-[#635bff]/30 transition-all">
              <option>Catheter Assembly - Gen 4</option>
              <option>Insulin Pump - Unit B</option>
              <option>Pacemaker Electronics</option>
            </select>
          </div>
          <div className="space-y-2.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">Batch Range</label>
            <input 
              type="text" 
              placeholder="e.g. BATCH-2024-001..." 
              className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm font-semibold text-[#1a1f36] outline-none focus:ring-2 focus:ring-[#635bff]/10 focus:border-[#635bff]/30 transition-all placeholder:text-slate-300"
            />
          </div>
          <div className="space-y-2.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">Target Period</label>
            <div className="flex items-center gap-3">
              <input type="date" className="flex-1 bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-bold text-[#1a1f36]" />
              <span className="text-slate-300 font-bold text-xs">—</span>
              <input type="date" className="flex-1 bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-bold text-[#1a1f36]" />
            </div>
          </div>
          <div className="space-y-2.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">Inspection Frameworks</label>
            <div className="flex flex-wrap gap-2 pt-1">
              {['Circular Economy Standards', 'Waste Management Compliance', 'Resource Recovery Frameworks'].map(f => (
                <label key={f} className="flex items-center gap-2.5 bg-[#f8fafc] border border-slate-200 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-100 transition-colors group">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-[#635bff] focus:ring-[#635bff]" />
                  <span className="text-[11px] font-bold text-[#4f566b] group-hover:text-[#1a1f36]">{f}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1 bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-4">
            <div className="text-[#635bff] mt-1 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <p className="text-[12px] text-[#4f566b] leading-relaxed font-medium">
              Generating a pack verifies the <span className="text-[#1a1f36] font-bold">cryptographic chain of custody</span> for every action performed within the selected scope.
            </p>
          </div>
          <button 
            disabled={isGenerating}
            onClick={handleGenerate}
            className={`min-w-[220px] px-8 py-3.5 rounded-lg font-bold text-white transition-all shadow-lg flex items-center justify-center gap-3 stripe-button-shadow ${
              isGenerating ? 'bg-[#635bff]/70 cursor-not-allowed translate-y-0' : 'bg-[#635bff] hover:bg-[#5a52e6]'
            }`}
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-[2.5px] border-white/30 border-t-white rounded-full animate-spin"></div>
                Compiling Bundle...
              </>
            ) : (
              <>
                Generate Bundle
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </>
            )}
          </button>
        </div>
      </div>

      {showResult && (
        <div className="bg-[#f8fafc] border border-slate-200 p-8 rounded-2xl animate-in fade-in slide-in-from-bottom-6 duration-500">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-emerald-500 text-white rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-[#1a1f36]">Verification Complete</h3>
              <p className="text-xs text-[#4f566b] font-medium">Evidence pack generated and hashed at 2024-05-20 14:30:11 UTC</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Full Traceability Matrix.pdf', size: '12.4 MB' },
              { name: 'Operator_Training_Bundle.zip', size: '84.1 MB' },
              { name: 'Audit_Proof_Hashed.json', size: '1.2 KB' },
            ].map((file, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between group hover:border-[#635bff]/30 transition-all shadow-sm">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="text-slate-400 group-hover:text-[#635bff] transition-colors">
                    <ICONS.Evidence />
                  </div>
                  <div className="truncate">
                    <p className="text-[12px] font-bold text-[#1a1f36] truncate">{file.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{file.size}</p>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-[#635bff] p-2 hover:bg-slate-50 rounded-lg transition-all shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditPacks;
