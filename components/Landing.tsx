
import React from 'react';
import { ICONS } from '../constants';

interface LandingProps {
  onNavigateToDashboard: () => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigateToDashboard }) => {
  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      onNavigateToDashboard();
    }, 100);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Dashboard Link */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center text-white">
                <ICONS.ShieldCheck />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0a0a0a]">AuditFlow</span>
            </div>
            <button
              onClick={handleNavigate}
              className="px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-100"
            >
              Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://t4.ftcdn.net/jpg/09/34/67/23/360_F_934672330_c7bw2AIagnUBUc2JUNlFAdFCGdDjIKga.jpg)'
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/60" />
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-12 py-24 lg:py-40">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Compliance Evidence — Generated Automatically From Real Work
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
              AuditFlow turns operational activity into audit-ready proof in real time — so regulated teams pass audits without building compliance paperwork manually.
            </p>
            <p className="text-sm text-white/80 mb-12 font-normal">
              Built by Ambassador Elena Rao, systems cooperation architect and governance infrastructure specialist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 text-base">
                See How It Works
              </button>
              <button className="px-8 py-4 bg-transparent text-white font-medium rounded-xl border-2 border-white/80 hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-100 text-base">
                Talk to Elena (AI Founder Assistant)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Framing Strip */}
      <section className="bg-gray-50 border-y border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <p className="text-center text-sm text-gray-600 font-normal">
            Used by teams operating under:{' '}
            <span className="font-semibold text-gray-900">ISO 13485 • FDA QMS • MDR • UKCA • GMP Frameworks</span>
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#0a0a0a] mb-8 leading-tight">
              Compliance Was Never Meant To Be Paperwork
            </h2>
            <p className="text-xl text-gray-600 mb-16 leading-relaxed font-normal">
              Most regulated teams don't fail audits because they lack quality.
              They fail because evidence is fragmented, manual, and reconstructed after the work is done.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                'Last-minute audit panic',
                'Missing traceability events',
                'High compliance staffing overhead',
                'Production disruption during inspections',
                'Hidden operational risk',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                  <p className="text-gray-700 font-normal leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#0a0a0a] mb-8 leading-tight">
              AuditFlow Makes Compliance a Side Effect of Doing Work
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-normal">
              Instead of teams building audit evidence manually, AuditFlow:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 text-3xl font-bold text-gray-900">
              <span>Captures</span>
              <span className="text-gray-400">→</span>
              <span>Structures</span>
              <span className="text-gray-400">→</span>
              <span>Proves</span>
            </div>
            <p className="text-xl font-semibold text-[#0a0a0a] mb-4">
              compliance automatically.
            </p>
            <p className="text-lg text-gray-600 font-normal leading-relaxed">
              When work happens, evidence happens.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0a0a0a] mb-20 text-center leading-tight">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: '1',
                title: 'Evidence Captured Automatically',
                description: 'Every action is logged with:',
                items: [
                  'Who performed it',
                  'When it happened',
                  'Which procedure was used',
                  'Which asset, batch, or device was involved',
                ],
                note: 'No duplicate documentation.',
              },
              {
                number: '2',
                title: 'Only Approved Processes Can Run',
                description: 'Teams execute work using validated SOP versions — automatically linked to evidence trails.',
                note: 'No "wrong procedure" audit findings.',
              },
              {
                number: '3',
                title: 'Audit Packs Generated Instantly',
                description: 'Select a batch, product line, or timeframe — export complete traceability instantly.',
                note: 'Weeks of prep → Hours.',
              },
              {
                number: '4',
                title: 'Compliance Risks Flagged Early',
                description: 'AuditFlow detects:',
                items: [
                  'Missing sign-offs',
                  'Expired training',
                  'Calibration gaps',
                  'Evidence discontinuity',
                ],
                note: 'Before auditors do.',
              },
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 gradient-primary text-white rounded-xl flex items-center justify-center text-2xl font-bold shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4 leading-tight">{step.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed font-normal">{step.description}</p>
                    {step.items && (
                      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 leading-relaxed">
                        {step.items.map((item, j) => (
                          <li key={j} className="font-normal">{item}</li>
                        ))}
                      </ul>
                    )}
                    <p className="font-semibold text-gray-900">{step.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Philosophy Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#0a0a0a] mb-12 text-center leading-tight">
              Designed For Long-Term System Stability — Not Short-Term Compliance Theatre
            </h2>
            <div className="bg-white rounded-2xl p-10 lg:p-14 border border-gray-200 shadow-sm">
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-3 font-normal">From Elena Rao, Founder</p>
                <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden mb-6">
                  <ICONS.Elena className="w-full h-full" />
                </div>
              </div>
              <blockquote className="text-xl lg:text-2xl text-[#0a0a0a] font-medium mb-8 leading-relaxed">
                "Cooperation only lasts when responsibility lasts as long as value lasts.
                In regulated manufacturing, trust is built through traceability — not documents created after the fact."
              </blockquote>
              <div className="border-t border-gray-200 pt-8">
                <p className="text-lg text-gray-600 mb-4 font-normal leading-relaxed">
                  AuditFlow was built on a simple premise:
                </p>
                <p className="text-xl font-semibold text-[#0a0a0a] leading-relaxed">
                  Compliance should be generated by systems.
                  <br />
                  Not reconstructed by people under pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ICP-Specific ROI Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#0a0a0a] mb-16 text-center leading-tight">What Customers Typically See</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              {[
                '40–70% reduction in manual compliance documentation time',
                '30–50% faster audit preparation',
                'Fewer audit findings linked to traceability gaps',
                'Reduced reliance on external compliance consultants',
                'Less production disruption during inspections',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                  <p className="text-gray-900 font-normal leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-6">Why This Is Different</h3>
              <p className="text-lg text-gray-600 mb-6 font-normal leading-relaxed">
                Most tools manage documents.
                <br />
                Some tools manage workflows.
              </p>
              <p className="text-2xl font-bold text-gray-900">
                AuditFlow manages operational proof of compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elena AI Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-8 text-center">
              Meet Elena — Your On-Demand Founder-Level Compliance Guide
            </h2>
            <div className="bg-white rounded-xl p-8 lg:p-12 border border-slate-200 shadow-lg">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden shrink-0">
                  <ICONS.Elena className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-[#4f566b] mb-6">
                    Inside the platform, you can ask:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Why did the system flag this batch?',
                      'How do I explain this to an auditor?',
                      'What is the regulatory risk if we proceed?',
                      'Why was this system designed this way?',
                    ].map((question, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#635bff] mt-1">•</span>
                        <span className="text-[#1a1f36] font-medium">{question}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-[#4f566b]">
                    Elena provides calm, legally literate, systems-level explanations — grounded in real regulatory logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-12 text-center">Who This Is For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Medical device manufacturers',
                'Regulated production teams',
                'Quality and regulatory leaders',
                'Operations leaders responsible for audit outcomes',
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-lg text-center">
                  <p className="text-lg font-semibold text-[#1a1f36]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security + Credibility Strip */}
      <section className="bg-slate-50 border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <ICONS.ShieldCheck />
              <span className="font-semibold">Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <ICONS.Evidence />
              <span className="font-semibold">Full audit traceability architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <ICONS.ShieldCheck />
              <span className="font-semibold">Designed for regulated operational environments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#0a0a0a] mb-8 leading-tight">
              Remove Compliance Drag From Your Operations
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-normal">
              If your team is still building audit evidence manually, you are paying twice:
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
              <p className="text-lg font-semibold text-gray-900">Once in labour.</p>
              <p className="text-lg font-semibold text-gray-900">Once in risk.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-100 text-base">
                Book a Platform Walkthrough
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:scale-105 active:scale-100 text-base">
                Ask Elena a Question
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6 font-normal leading-relaxed text-gray-300">
              AuditFlow is built on the belief that:
            </p>
            <p className="text-xl font-semibold mb-3 text-white">
              Stable systems create stable cooperation.
            </p>
            <p className="text-xl font-semibold mb-12 text-white">
              Stable cooperation creates long-term industrial resilience.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 font-normal">
                — Ambassador Elena Rao
              </p>
              <p className="text-gray-400 font-normal">
                Founder, AuditFlow
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
