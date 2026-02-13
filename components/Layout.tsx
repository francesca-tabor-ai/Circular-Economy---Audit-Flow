
import React, { useEffect, useRef } from 'react';
import { ICONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when activeTab changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);
  const navItems = [
    { id: 'dashboard', label: 'Overview', icon: ICONS.Dashboard },
    { id: 'workflows', label: 'Active Runs', icon: ICONS.Workflow },
    { id: 'evidence', label: 'Evidence Log', icon: ICONS.Evidence },
    { id: 'audit', label: 'Audit Packs', icon: ICONS.Audit },
    { id: 'alerts', label: 'Gap Alerts', icon: ICONS.Alert },
    { id: 'about', label: 'About', icon: ICONS.Info },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0 z-20">
        <div className="h-16 flex items-center gap-3 px-6 border-b border-gray-100">
          <div className="w-7 h-7 gradient-primary rounded-lg flex items-center justify-center text-white">
            <ICONS.ShieldCheck />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0a0a0a]">AuditFlow</span>
        </div>
        
        <nav className="flex-1 py-8 px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ease-out transform ${
                activeTab === item.id 
                  ? 'bg-gray-50 text-gray-900 scale-[1.02] shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-[1.01] active:scale-[0.99]'
              }`}
            >
              <span className={`transition-all duration-200 ${activeTab === item.id ? 'text-gray-900 scale-110' : 'text-gray-400'}`}>
                <item.icon />
              </span>
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-gray-900 transition-smooth rounded-lg hover:bg-gray-50">
            <ICONS.Settings />
            <span className="font-medium text-sm">Settings</span>
          </button>
          <div className="mt-4 px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider mb-2">Compliance Status</div>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-medium text-gray-900">Circular Economy Compliant</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-white">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Home</span>
            <span className="text-gray-300">/</span>
            <span className="font-medium text-gray-900 capitalize">{activeTab.replace('-', ' ')}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-semibold text-gray-900">M. Harrison</p>
              <p className="text-[11px] text-gray-500 font-normal">Quality Director</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/seed/user/64/64" alt="avatar" />
            </div>
          </div>
        </header>

        {/* Scrollable Body - Generous white space */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-12 max-w-7xl mx-auto w-full scroll-smooth"
        >
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
