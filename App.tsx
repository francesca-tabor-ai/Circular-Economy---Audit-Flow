
import React, { useState, Suspense, lazy } from 'react';
import Layout from './components/Layout';
import Landing from './components/Landing';
import ElenaChat from './components/ElenaChat';

// Lazy load components for better performance
const Dashboard = lazy(() => import('./components/Dashboard'));
const Workflows = lazy(() => import('./components/Workflows'));
const EvidenceLog = lazy(() => import('./components/EvidenceLog'));
const AuditPacks = lazy(() => import('./components/AuditPacks'));
const About = lazy(() => import('./components/About'));

// Loading component for lazy loaded routes
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
      <p className="text-sm text-gray-500 font-medium">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <Dashboard />
          </Suspense>
        );
      case 'workflows':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <Workflows />
          </Suspense>
        );
      case 'evidence':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <EvidenceLog />
          </Suspense>
        );
      case 'audit':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <AuditPacks />
          </Suspense>
        );
      case 'about':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        );
      case 'alerts':
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4 transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Gap Alerts Center</h3>
            <p className="text-gray-600 max-w-sm">No critical non-conformities detected in the last 24 hours. Calibration systems and training logs are within compliance bounds.</p>
          </div>
        );
      default:
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <Dashboard />
          </Suspense>
        );
    }
  };

  if (showLanding) {
    return <Landing onNavigateToDashboard={() => setShowLanding(false)} />;
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
      <ElenaChat initialContext={{ currentView: activeTab }} />
    </Layout>
  );
};

export default App;
