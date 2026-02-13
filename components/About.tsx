
import React from 'react';
import { ICONS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-16 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#635bff] text-[11px] font-bold uppercase tracking-widest border border-slate-200 shadow-sm">
          <ICONS.ShieldCheck />
          Our Mission
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1f36] leading-tight tracking-tight">
          We exist to remove compliance drag from regulated operations.
        </h1>
        <p className="text-xl text-[#4f566b] leading-relaxed font-medium">
          AuditFlow was built on a simple belief: Compliance should happen automatically when work happens — not as a second job after it.
        </p>
      </section>

      {/* Main Narrative */}
      <section className="space-y-12">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-[#4f566b] leading-relaxed">
            In regulated manufacturing environments, teams don’t struggle because they don’t care about quality. They struggle because compliance evidence is still built manually — across spreadsheets, documents, emails, and disconnected systems. That creates stress, audit risk, and hidden operational cost.
          </p>
          <div className="h-px bg-slate-100 my-10"></div>
          <h2 className="text-2xl font-bold text-[#1a1f36] mb-6">What We Do</h2>
          <p className="text-lg text-[#4f566b] leading-relaxed mb-6">
            AuditFlow turns normal operational activity into audit-ready evidence automatically. Instead of teams chasing signatures, rebuilding audit packs, or staying late before audits, AuditFlow captures compliance evidence in real time.
          </p>
          <ul className="space-y-4 text-[#1a1f36] font-semibold mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[#635bff] mt-1 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
              Real-time evidence capture from workflow execution
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#635bff] mt-1 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
              Complete, structured, and provable audit trails by default
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#635bff] mt-1 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
              Elimination of manual reconciliation across systems
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Who We Build For</h3>
            <p className="text-[14px] text-[#4f566b] leading-relaxed">
              We focus on <span className="text-[#1a1f36] font-bold">medical device manufacturers</span> operating under ISO 13485, FDA QMS, or EU MDR who need to scale without scaling compliance headcount.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Our Success Metric</h3>
            <p className="text-[14px] text-[#4f566b] leading-relaxed">
              Audits prepared in <span className="text-[#635bff] font-bold">hours instead of weeks</span>. Less production disruption and 100% confidence across QA and Ops leadership.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#1a1f36]">Our Philosophy</h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              { title: "Byproduct of Good Ops", desc: "Compliance should be a side effect of good operations, not a parallel manual process." },
              { title: "Generated, Not Written", desc: "Evidence should be generated automatically by the systems doing the work, not written by people later." },
              { title: "Continuous Readiness", desc: "Audit readiness should be continuous and invisible, not a quarterly panic or a stay-late project." }
            ].map((p, i) => (
              <div key={i} className="flex gap-6 items-start p-6 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100">
                <div className="text-2xl font-black text-slate-200 group-hover:text-[#635bff]/20 transition-colors">0{i+1}</div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#1a1f36]">{p.title}</h4>
                  <p className="text-sm text-[#4f566b] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Footer with Stripe Gradient */}
      <section className="relative rounded-3xl overflow-hidden p-[1px] shadow-2xl">
        <div className="stripe-gradient absolute inset-0"></div>
        <div className="bg-[#1a1f36] relative rounded-[23px] p-10 text-white space-y-6">
          <h2 className="text-2xl font-bold">The future of regulated industry</h2>
          <p className="text-white/70 leading-relaxed font-medium">
            We believe the future is operational systems that are compliance-aware by design. Audits that verify systems, not paperwork. AuditFlow is building that future.
          </p>
          <div className="pt-4">
             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Primary Focus</div>
             <p className="text-lg font-bold text-white">Operational Audit Automation</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
