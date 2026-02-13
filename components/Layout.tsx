
import React from 'react';
import { ICONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Overview', icon: ICONS.Dashboard },
    { id: 'workflows', label: 'Active Runs', icon: ICONS.Workflow },
    { id: 'evidence', label: 'Evidence Log', icon: ICONS.Evidence },
    { id: 'audit', label: 'Audit Packs', icon: ICONS.Audit },
    { id: 'alerts', label: 'Gap Alerts', icon: ICONS.Alert },
    { id: 'about', label: 'About', icon: ICONS.Info },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f9fc]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 z-20">
        <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-100">
          <div className="w-7 h-7 bg-[#635bff] rounded flex items-center justify-center text-white">
            <ICONS.ShieldCheck />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1a1f36]">AuditFlow</span>
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-slate-50 text-[#635bff] shadow-sm' 
                  : 'text-[#4f566b] hover:text-[#1a1f36] hover:bg-slate-50'
              }`}
            >
              <span className={`${activeTab === item.id ? 'text-[#635bff]' : 'text-slate-400'}`}>
                <item.icon />
              </span>
              <span className="font-semibold text-[13.5px]">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#4f566b] hover:text-[#1a1f36] transition-colors rounded-md">
            <ICONS.Settings />
            <span className="font-medium text-xs">Settings</span>
          </button>
          <div className="mt-4 px-3 py-3 bg-white border border-slate-200 rounded-lg shadow-sm">
            <div className="text-[9px] text-slate-400 uppercase font-bold tracking-[0.1em] mb-2">Compliance Status</div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              <span className="text-[11px] font-semibold text-[#1a1f36]">ISO-13485 Compliant</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-400">Home</span>
            <span className="text-slate-300">/</span>
            <span className="font-semibold text-slate-900 capitalize">{activeTab.replace('-', ' ')}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-bold text-[#1a1f36]">M. Harrison</p>
              <p className="text-[10px] text-slate-500 font-medium">Quality Director</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/seed/user/64/64" alt="avatar" />
            </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
