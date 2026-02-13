
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ICONS } from '../constants';
import { getElenaResponse } from '../services/elenaService';

interface ElenaChatProps {
  initialContext?: {
    currentView: string;
  };
}

const ElenaChat: React.FC<ElenaChatProps> = ({ initialContext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'elena'; content: string }[]>([
    { role: 'elena', content: "I am Elena Rao. I assist in translating the complexities of compliance into stable operational logic. How can we ensure your cooperation systems are resilient today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentView = initialContext?.currentView || 'dashboard';

  const probes = useMemo(() => {
    const defaultProbes = [
      "Why was AuditFlow built this way?",
      "What is lifecycle accountability?",
      "How do we maintain trust during stress?"
    ];

    const viewProbes: Record<string, string[]> = {
      dashboard: [
        "Summarize our current compliance health.",
        "Why is calibration risk high in Cleanroom Beta?",
        "Explain the readiness score logic."
      ],
      workflows: [
        "Explain the delay on RUN-9924.",
        "Are active runs following the latest SOPs?",
        "What are the risks of pausing production runs?"
      ],
      evidence: [
        "How do these logs protect us during litigation?",
        "Verify the integrity of recent records.",
        "Explain the logic of our SOP versioning."
      ],
      audit: [
        "How do I defend this pack to a regulator?",
        "What's missing for a perfect circularity audit?",
        "Explain the chain of custody logic."
      ],
      alerts: [
        "What's the long-term impact of missing sign-offs?",
        "Draft a mitigation plan for the calibration gap.",
        "Why does the system flag these specific gaps?"
      ],
      about: [
        "Tell me more about your mediator background.",
        "What is the 'Global Cooperation Systems Institute'?",
        "How do you define fairness in resource access?"
      ]
    };

    return viewProbes[currentView] || defaultProbes;
  }, [currentView]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (customText?: string) => {
    const messageToSend = customText || input;
    if (!messageToSend.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
    setIsLoading(true);

    try {
      const response = await getElenaResponse(messageToSend, { ...initialContext, view: currentView });
      setMessages(prev => [...prev, { role: 'elena', content: response }]);
    } catch (error: any) {
      const errorMessage = error.message || 'Google API key is required to use this feature. Please set GEMINI_API_KEY in your .env.local file.';
      setMessages(prev => [...prev, { 
        role: 'elena', 
        content: `I apologize, but I cannot process your request at this moment. ${errorMessage}` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-[420px] h-[620px] bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.2)] border border-slate-200 flex flex-col overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="relative p-6 text-white overflow-hidden shrink-0">
            <div className="stripe-gradient absolute inset-0 opacity-100"></div>
            <div className="bg-[#1a1f36]/85 backdrop-blur-md absolute inset-0"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border-2 border-white/40 overflow-hidden bg-white/10">
                  <ICONS.Elena className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-bold text-[16px]">Ambassador Elena Rao</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Founder & Cooperation Intel</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#fcfdfe] scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'elena' && (
                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-1 mr-2 border border-slate-100 shadow-sm">
                    <ICONS.Elena className="w-full h-full" />
                  </div>
                )}
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed shadow-sm transition-all ${
                  m.role === 'user' 
                    ? 'bg-[#635bff] text-white shadow-[#635bff]/20' 
                    : 'bg-white border border-slate-200 text-[#1a1f36] font-medium'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-1 mr-2 border border-slate-100 shadow-sm">
                  <ICONS.Elena className="w-full h-full opacity-50" />
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            
            {/* Starter Probes */}
            {!isLoading && messages.length < 3 && (
              <div className="pt-4 space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Suggested Probes</p>
                <div className="flex flex-col gap-2">
                  {probes.map((probe, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(probe)}
                      className="text-left px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[12.5px] font-semibold text-[#4f566b] hover:border-[#635bff] hover:text-[#635bff] hover:bg-slate-50 transition-all duration-200 shadow-sm"
                    >
                      {probe}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-100 bg-white shrink-0">
            <div className="flex items-center gap-2 bg-[#f6f9fc] border border-slate-200 rounded-2xl px-4 py-3 focus-within:ring-4 focus-within:ring-[#635bff]/10 focus-within:border-[#635bff]/20 transition-all">
              <input 
                type="text" 
                placeholder="Discuss systems cooperation..." 
                className="flex-1 bg-transparent text-[14px] font-medium outline-none text-[#1a1f36] placeholder:text-slate-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="text-[#635bff] disabled:text-slate-300 transition-all p-1 hover:scale-110 active:scale-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
              </button>
            </div>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Founder Reasoning System Enabled</p>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_15px_35px_rgba(99,91,255,0.35)] transition-all hover:scale-105 active:scale-95 group relative overflow-hidden ${
          isOpen ? 'bg-[#1a1f36]' : 'stripe-gradient'
        }`}
      >
        {!isOpen && <div className="absolute inset-0 bg-black/5 rounded-full group-hover:bg-transparent transition-colors"></div>}
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <div className="relative w-full h-full">
            <ICONS.Elena className="w-full h-full scale-[1.3] -translate-y-1" />
            <span className="absolute bottom-3 right-3 w-4 h-4 bg-rose-500 rounded-full border-2 border-white animate-bounce shadow-sm"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ElenaChat;
