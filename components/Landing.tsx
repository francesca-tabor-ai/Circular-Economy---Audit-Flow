
import React from 'react';
import { ICONS } from '../constants';

interface LandingProps {
  onNavigateToDashboard: () => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigateToDashboard }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Dashboard Link */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#635bff] rounded flex items-center justify-center text-white">
                <ICONS.ShieldCheck />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#1a1f36]">AuditFlow</span>
            </div>
            <button
              onClick={onNavigateToDashboard}
              className="px-6 py-2.5 bg-[#635bff] text-white font-semibold rounded-lg hover:bg-[#5851e6] transition-colors shadow-sm"
            >
              Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1f36] mb-6 leading-tight">
              Compliance Evidence — Generated Automatically From Real Work
            </h1>
            <p className="text-xl lg:text-2xl text-[#4f566b] mb-8 leading-relaxed">
              AuditFlow turns operational activity into audit-ready proof in real time — so regulated teams pass audits without building compliance paperwork manually.
            </p>
            <p className="text-sm text-slate-500 mb-10">
              Built by Ambassador Elena Rao, systems cooperation architect and governance infrastructure specialist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#635bff] text-white font-semibold rounded-lg hover:bg-[#5851e6] transition-colors shadow-lg text-lg">
                See How It Works
              </button>
              <button className="px-8 py-4 bg-white text-[#635bff] font-semibold rounded-lg border-2 border-[#635bff] hover:bg-slate-50 transition-colors text-lg">
                Talk to Elena (AI Founder Assistant)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Framing Strip */}
      <section className="bg-slate-50 border-y border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-slate-600 font-medium">
            Used by teams operating under:{' '}
            <span className="font-semibold text-[#1a1f36]">ISO 13485 • FDA QMS • MDR • UKCA • GMP Frameworks</span>
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-6">
              Compliance Was Never Meant To Be Paperwork
            </h2>
            <p className="text-xl text-[#4f566b] mb-12">
              Most regulated teams don't fail audits because they lack quality.
              They fail because evidence is fragmented, manual, and reconstructed after the work is done.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                'Last-minute audit panic',
                'Missing traceability events',
                'High compliance staffing overhead',
                'Production disruption during inspections',
                'Hidden operational risk',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                  <p className="text-[#4f566b] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-6">
              AuditFlow Makes Compliance a Side Effect of Doing Work
            </h2>
            <p className="text-xl text-[#4f566b] mb-8">
              Instead of teams building audit evidence manually, AuditFlow:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 text-2xl font-bold text-[#635bff]">
              <span>Captures</span>
              <span className="text-slate-400">→</span>
              <span>Structures</span>
              <span className="text-slate-400">→</span>
              <span>Proves</span>
            </div>
            <p className="text-xl font-semibold text-[#1a1f36]">
              compliance automatically.
            </p>
            <p className="text-lg text-[#4f566b] mt-4">
              When work happens, evidence happens.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12">
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
              <div key={i} className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#635bff] text-white rounded-lg flex items-center justify-center text-2xl font-bold shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1a1f36] mb-4">{step.title}</h3>
                    <p className="text-[#4f566b] mb-4">{step.description}</p>
                    {step.items && (
                      <ul className="list-disc list-inside space-y-2 mb-4 text-[#4f566b]">
                        {step.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <p className="font-semibold text-[#635bff]">{step.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Philosophy Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-8 text-center">
              Designed For Long-Term System Stability — Not Short-Term Compliance Theatre
            </h2>
            <div className="bg-white rounded-xl p-8 lg:p-12 border border-slate-200 shadow-lg">
              <div className="mb-6">
                <p className="text-sm text-slate-500 mb-2">From Elena Rao, Founder</p>
                <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden mb-4">
                  <ICONS.Elena className="w-full h-full" />
                </div>
              </div>
              <blockquote className="text-xl lg:text-2xl text-[#1a1f36] font-medium mb-6 leading-relaxed">
                "Cooperation only lasts when responsibility lasts as long as value lasts.
                In regulated manufacturing, trust is built through traceability — not documents created after the fact."
              </blockquote>
              <div className="border-t border-slate-200 pt-6">
                <p className="text-lg text-[#4f566b] mb-4">
                  AuditFlow was built on a simple premise:
                </p>
                <p className="text-xl font-semibold text-[#1a1f36]">
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-12 text-center">What Customers Typically See</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                '40–70% reduction in manual compliance documentation time',
                '30–50% faster audit preparation',
                'Fewer audit findings linked to traceability gaps',
                'Reduced reliance on external compliance consultants',
                'Less production disruption during inspections',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                  <p className="text-[#1a1f36] font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-[#1a1f36] mb-4">Why This Is Different</h3>
              <p className="text-lg text-[#4f566b] mb-4">
                Most tools manage documents.
                <br />
                Some tools manage workflows.
              </p>
              <p className="text-2xl font-bold text-[#635bff]">
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
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-6">
              Remove Compliance Drag From Your Operations
            </h2>
            <p className="text-xl text-[#4f566b] mb-12">
              If your team is still building audit evidence manually, you are paying twice:
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
              <p className="text-lg font-semibold text-[#1a1f36]">Once in labour.</p>
              <p className="text-lg font-semibold text-[#1a1f36]">Once in risk.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#635bff] text-white font-semibold rounded-lg hover:bg-[#5851e6] transition-colors shadow-lg text-lg">
                Book a Platform Walkthrough
              </button>
              <button className="px-8 py-4 bg-white text-[#635bff] font-semibold rounded-lg border-2 border-[#635bff] hover:bg-slate-50 transition-colors text-lg">
                Ask Elena a Question
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f36] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-4">
              AuditFlow is built on the belief that:
            </p>
            <p className="text-xl font-semibold mb-2">
              Stable systems create stable cooperation.
            </p>
            <p className="text-xl font-semibold mb-8">
              Stable cooperation creates long-term industrial resilience.
            </p>
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400">
                — Ambassador Elena Rao
              </p>
              <p className="text-slate-400">
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
