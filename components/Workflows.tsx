
import React from 'react';
import { ICONS } from '../constants';

const Workflows: React.FC = () => {
  const activeRuns = [
    { id: 'RUN-9921', name: 'Catheter Extrusion', batch: 'B22-X4', step: 'Sterile Rinse', progress: 75, status: 'On Track', operator: 'Sarah K.' },
    { id: 'RUN-9924', name: 'PCB Solder Mask', batch: 'P44-Z0', step: 'AOI Inspection', progress: 40, status: 'Warning', operator: 'John D.' },
    { id: 'RUN-9925', name: 'Packaging & Labeling', batch: 'B22-X5', step: 'UDI Verification', progress: 15, status: 'On Track', operator: 'Alex M.' },
    { id: 'RUN-9928', name: 'Raw Material Prep', batch: 'B22-X6', step: 'Incoming QC', progress: 90, status: 'Paused', operator: 'Elena R.' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-md text-sm font-semibold text-[#4f566b] hover:bg-slate-50 transition-all shadow-sm">
            All Sites
          </button>
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-md text-sm font-semibold text-[#4f566b] hover:bg-slate-50 transition-all shadow-sm">
            Filter Status
          </button>
        </div>
        <button className="bg-[#635bff] text-white px-5 py-2.5 rounded-md text-[13px] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.1)] flex items-center gap-2 hover:bg-[#5a52e6] transition-all stripe-button-shadow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
          New Production Run
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {activeRuns.map((run) => (
          <div key={run.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
            <div className="p-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="mono text-[10px] font-bold text-[#635bff] bg-[#635bff]/10 px-2 py-0.5 rounded uppercase tracking-wider">{run.id}</span>
                  <h4 className="font-bold text-[#1a1f36] text-lg leading-tight">{run.name}</h4>
                </div>
                <p className="text-xs font-semibold text-[#4f566b]">Batch: <span className="text-[#1a1f36]">{run.batch}</span></p>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${
                run.status === 'On Track' ? 'bg-emerald-50 text-emerald-600' :
                run.status === 'Warning' ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-500'
              }`}>
                {run.status}
              </span>
            </div>
            
            <div className="px-6 pb-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-400">Phase: <span className="text-[#1a1f36] font-bold">{run.step}</span></span>
                <span className="text-[#635bff] font-bold">{run.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${
                    run.status === 'Warning' ? 'bg-rose-500' : 'bg-[#635bff]'
                  }`}
                  style={{ width: `${run.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center grayscale">
                    <img src={`https://picsum.photos/seed/${run.operator}/48/48`} alt="op" />
                  </div>
                  <span className="text-[12px] font-bold text-[#4f566b]">{run.operator}</span>
                </div>
                <button className="text-[11px] font-bold text-[#635bff] uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                  Full Trace History <ICONS.Evidence />
                </button>
              </div>
            </div>

            <div className="bg-slate-50/50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
                  <div className="w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
                  <div className="w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
                  <div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white shadow-sm"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">3/4 SOP Gates Passed</span>
              </div>
              <div className="text-emerald-500">
                <ICONS.ShieldCheck />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflows;
