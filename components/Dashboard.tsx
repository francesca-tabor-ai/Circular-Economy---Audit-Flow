
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
    <div className="space-y-12">
      {/* Stat Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Evidence Captured', value: '14,291', trend: '+12%', icon: ICONS.Evidence },
          { label: 'Active Runs', value: '18', trend: 'Normal', icon: ICONS.Workflow },
          { label: 'Gap Alerts', value: '3', trend: '-20%', icon: ICONS.Alert },
          { label: 'Readiness Score', value: '98.4%', trend: 'Optimized', icon: ICONS.ShieldCheck },
        ].map((stat, i) => (
          <div 
            key={i} 
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm card-hover animate-in"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-2 rounded-lg bg-gray-50 text-gray-700 transition-transform hover:scale-110">
                <stat.icon />
              </div>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{stat.trend}</span>
            </div>
            <p className="text-4xl font-bold text-[#0a0a0a] tracking-tight mb-2 mono">{stat.value}</p>
            <p className="text-sm font-normal text-gray-600 leading-relaxed">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Stats Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm card-hover animate-in fade-in">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">Evidence Capture History</h3>
              <p className="text-sm text-gray-600 font-normal">Real-time throughput across all production sites.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500">View:</span>
              <select className="text-xs font-medium border-gray-200 rounded-lg py-2 px-3 bg-gray-50 outline-none focus:ring-2 focus:ring-gray-200 transition-smooth">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorEv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: '#1a1a1a', fontWeight: 500 }}
                />
                <Area type="monotone" dataKey="evidence" stroke="#60a5fa" fillOpacity={1} fill="url(#colorEv)" strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col card-hover animate-in fade-in">
          <h3 className="font-bold text-[#0a0a0a] mb-8 text-base flex items-center justify-between">
            Compliance Gaps
            <span className="text-[10px] px-2.5 py-1 bg-rose-50 text-rose-600 rounded-lg font-semibold uppercase tracking-wider transition-transform hover:scale-105">Action</span>
          </h3>
          <div className="space-y-4 flex-1">
            {[
              { site: 'Assembly Line A', risk: 'Medium', gap: 'Missing Operator Training (Exp. 2d)' },
              { site: 'Cleanroom Beta', risk: 'High', gap: 'Calibration Overdue: Sensor X-42' },
              { site: 'Sterilization Unit', risk: 'Low', gap: 'Signature Pending: Batch #8812' },
            ].map((hotspot, i) => (
              <div 
                key={i} 
                className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 cursor-pointer animate-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-900">{hotspot.site}</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded-lg font-semibold uppercase tracking-wider ${
                    hotspot.risk === 'High' ? 'bg-rose-100 text-rose-700' : 
                    hotspot.risk === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {hotspot.risk}
                  </span>
                </div>
                <p className="text-[12px] text-gray-600 leading-relaxed font-normal">{hotspot.gap}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-xs font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 border border-gray-200 hover:border-gray-300 hover:shadow-sm active:scale-[0.98]">
            Audit All Gap Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
