
import React, { useState, useEffect } from 'react';
import { ICONS } from '../constants';
import { EvidenceRecord } from '../types';
import { analyzeAuditLogs } from '../services/geminiService';

const MOCK_LOGS: EvidenceRecord[] = [
  { id: 'EV-10292', timestamp: '2024-05-20T10:14:22Z', actor: { id: 'OP-44', name: 'S. Knight', role: 'Operator' }, action: 'Critical Component Marriage', assetId: 'ASSY-001', batchId: 'B-991', procedureId: 'SOP-MFG-04', procedureVersion: '2.4', hash: '8f2e...9a12' },
  { id: 'EV-10291', timestamp: '2024-05-20T10:11:05Z', actor: { id: 'SYS', name: 'Auto-Capture', role: 'System' }, action: 'Torque Verification Success', assetId: 'TOOL-12', batchId: 'B-991', procedureId: 'SOP-MFG-04', procedureVersion: '2.4', hash: '44a1...c091' },
  { id: 'EV-10290', timestamp: '2024-05-20T09:58:33Z', actor: { id: 'OP-12', name: 'J. Doe', role: 'Supervisor' }, action: 'Batch Release Sign-off', assetId: 'BATCH-42', batchId: 'B-420', procedureId: 'SOP-QA-01', procedureVersion: '1.0', hash: 'eeb9...77f1' },
  { id: 'EV-10289', timestamp: '2024-05-20T09:45:12Z', actor: { id: 'OP-44', name: 'S. Knight', role: 'Operator' }, action: 'Sterile Seal Verification', assetId: 'ASSY-001', batchId: 'B-991', procedureId: 'SOP-MFG-04', procedureVersion: '2.4', hash: '12d3...442b' },
];

const EvidenceLog: React.FC = () => {
  const [summary, setSummary] = useState<string>('');
  const [loadingSummary, setLoadingSummary] = useState(false);

  useEffect(() => {
    const fetchSummary = async () => {
      setLoadingSummary(true);
      const result = await analyzeAuditLogs(MOCK_LOGS);
      setSummary(result);
      setLoadingSummary(false);
    };
    fetchSummary();
  }, []);

  return (
    <div className="space-y-8">
      {/* AI Summary Banner with Stripe Signature Gradient */}
      <div className="relative rounded-2xl overflow-hidden p-[1px] shadow-lg">
        <div className="stripe-gradient absolute inset-0 opacity-100"></div>
        <div className="bg-[#1a1f36] relative rounded-[15px] p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/10 rounded-lg text-white backdrop-blur-md">
              <ICONS.ShieldCheck />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/70">Compliance Intelligence</h3>
              <p className="text-xs text-white/50 font-medium">Auto-generated audit verification summary</p>
            </div>
          </div>
          {loadingSummary ? (
            <div className="space-y-3">
              <div className="h-4 bg-white/5 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-white/5 rounded w-2/3 animate-pulse"></div>
            </div>
          ) : (
            <p className="text-white/90 text-sm leading-relaxed max-w-4xl font-medium">
              {summary}
            </p>
          )}
        </div>
      </div>

      {/* Main Evidence Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/30 flex items-center justify-between">
            <h3 className="font-bold text-[#1a1f36] text-sm">Immutable Audit Log</h3>
            <button className="text-xs font-bold text-[#635bff] hover:underline">Export CSV</button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em]">Trace ID</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em]">Recorded</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em]">Action Type</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em]">Scope</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em]">Actor</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em] text-right">Verification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {MOCK_LOGS.map((log) => (
              <tr key={log.id} className="hover:bg-[#f6f9fc] transition-colors group">
                <td className="px-6 py-4">
                  <span className="mono text-[11px] font-bold text-[#1a1f36] bg-slate-100 px-2 py-1 rounded">{log.id}</span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-[12px] font-semibold text-[#1a1f36]">{new Date(log.timestamp).toLocaleDateString()}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-[13px] font-bold text-[#1a1f36]">{log.action}</p>
                  <p className="text-[10px] text-slate-400 font-semibold tracking-wide">{log.procedureId} • v{log.procedureVersion}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-[12px] text-[#4f566b] font-bold">{log.batchId}</p>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">{log.assetId}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img src={`https://picsum.photos/seed/${log.actor.id}/48/48`} className="w-5 h-5 rounded-full border border-slate-200" alt="actor" />
                    <div>
                      <p className="text-[11px] font-bold text-[#1a1f36]">{log.actor.name}</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">{log.actor.role}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="mono text-[10px] font-semibold text-slate-400 px-2 py-1 bg-slate-50 border border-slate-100 rounded select-none cursor-default hover:text-[#635bff] transition-colors">
                    {log.hash.slice(0, 10)}...
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100">
            <button className="text-[11px] font-bold text-[#4f566b] uppercase tracking-widest hover:text-[#1a1f36]">Load Older Records</button>
        </div>
      </div>
    </div>
  );
};

export default EvidenceLog;
