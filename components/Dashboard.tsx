
import React from 'react';
import { ICONS } from '../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', evidence: 450, alerts: 2 },
  { name: 'Tue', evidence: 520, alerts: 0 },
  { name: 'Wed', evidence: 480, alerts: 5 },
  { name: 'Thu', evidence: 610, alerts: 1 },
  { name: 'Fri', evidence: 590, alerts: 1 },
  { name: 'Sat', evidence: 200, alerts: 0 },
  { name: 'Sun', evidence: 150, alerts: 0 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Stat Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Evidence Captured', value: '14,291', trend: '+12%', color: 'text-[#635bff]', icon: ICONS.Evidence },
          { label: 'Active Runs', value: '18', trend: 'Normal', color: 'text-emerald-600', icon: ICONS.Workflow },
          { label: 'Gap Alerts', value: '3', trend: '-20%', color: 'text-amber-600', icon: ICONS.Alert },
          { label: 'Readiness Score', value: '98.4%', trend: 'Optimized', color: 'text-indigo-600', icon: ICONS.ShieldCheck },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-1.5 rounded-md bg-slate-50 ${stat.color}`}>
                <stat.icon />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.trend}</span>
            </div>
            <p className="text-3xl font-bold text-[#1a1f36] tracking-tight">{stat.value}</p>
            <p className="text-[13px] font-medium text-[#4f566b] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Stats Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-[#1a1f36]">Evidence Capture History</h3>
              <p className="text-sm text-slate-500">Real-time throughput across all production sites.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">View:</span>
              <select className="text-xs font-bold border-slate-200 rounded-md py-1.5 px-3 bg-slate-50 outline-none focus:ring-2 focus:ring-[#635bff]/20">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorEv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#635bff" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#635bff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: '#635bff', fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="evidence" stroke="#635bff" fillOpacity={1} fill="url(#colorEv)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.04)] flex flex-col">
          <h3 className="font-bold text-[#1a1f36] mb-6 text-sm flex items-center justify-between">
            Compliance Gaps
            <span className="text-[10px] px-2 py-0.5 bg-rose-50 text-rose-600 rounded-md font-bold uppercase tracking-wider">Action</span>
          </h3>
          <div className="space-y-3 flex-1">
            {[
              { site: 'Assembly Line A', risk: 'Medium', gap: 'Missing Operator Training (Exp. 2d)' },
              { site: 'Cleanroom Beta', risk: 'High', gap: 'Calibration Overdue: Sensor X-42' },
              { site: 'Sterilization Unit', risk: 'Low', gap: 'Signature Pending: Batch #8812' },
            ].map((hotspot, i) => (
              <div key={i} className="p-4 bg-[#f8fafc] rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#1a1f36]">{hotspot.site}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-widest ${
                    hotspot.risk === 'High' ? 'bg-rose-100 text-rose-700' : 
                    hotspot.risk === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {hotspot.risk}
                  </span>
                </div>
                <p className="text-[12px] text-[#4f566b] leading-relaxed font-medium">{hotspot.gap}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2.5 text-xs font-bold text-[#635bff] hover:bg-[#635bff]/5 rounded-lg transition-all border border-[#635bff]/20">
            Audit All Gap Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
