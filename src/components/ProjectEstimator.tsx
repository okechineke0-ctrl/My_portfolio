import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  X, 
  Sparkles, 
  MessageSquare, 
  Mail, 
  Copy, 
  Check, 
  Calculator, 
  Clock, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface ProjectEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState<'web' | 'mobile' | 'fullstack' | 'api'>('fullstack');
  const [timeline, setTimeline] = useState<'rush' | 'standard' | 'flexible'>('standard');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'User Authentication (JWT/OAuth)',
    'Database Architecture & Indexing',
    'Responsive Admin Dashboard'
  ]);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const featureOptions = [
    'User Authentication (JWT/OAuth)',
    'Database Architecture & Indexing',
    'Responsive Admin Dashboard',
    'Payment Gateway Integration (Paystack/Flutterwave)',
    'Real-time WebSockets / Push Notifications',
    'Offline Sync & SQLite Storage (Mobile)',
    'RESTful API & Automated Documentation',
    'Third-Party API Integrations'
  ];

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  // Rough estimation calculation for guidance
  const calculateEstimatedDuration = () => {
    let baseWeeks = projectType === 'web' ? 2 : projectType === 'mobile' ? 3 : projectType === 'fullstack' ? 4 : 2;
    const featureWeeks = Math.floor(selectedFeatures.length * 0.4);
    let total = baseWeeks + featureWeeks;
    if (timeline === 'rush') total = Math.max(2, Math.round(total * 0.7));
    return `${total} - ${total + 2} Weeks`;
  };

  const generateBriefText = () => {
    return `PROJECT BRIEF FOR OKECHINEKE SUCCESS CHIEMERIE
--------------------------------------------------
Client / Inquirer: ${clientName || 'Prospective Client'}
Contact Email: ${clientEmail || 'Not specified'}
Service Requested: ${
      projectType === 'fullstack' ? 'Full-Stack Web & Backend System' :
      projectType === 'mobile' ? 'Cross-Platform React Native Mobile App' :
      projectType === 'web' ? 'Modern React Web Application' : 'Express/Node.js API Architecture'
    }
Delivery Pace: ${timeline.toUpperCase()} (${calculateEstimatedDuration()})

Selected Features:
${selectedFeatures.map((f) => `- ${f}`).join('\n')}

Notes / Specific Requirements:
${projectNotes || 'None provided yet'}
--------------------------------------------------
Generated via okechineke.dev Portfolio Estimator`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateBriefText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(generateBriefText());
    window.open(`https://wa.me/2348146578477?text=${text}`, '_blank');
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Project Collaboration Inquiry - ${clientName || 'New Project'}`);
    const body = encodeURIComponent(generateBriefText());
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-1">
              <Calculator className="w-4 h-4" />
              <span>Interactive Scope & Timeline Estimator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Plan Your Digital Product Build
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Tailored software engineering for businesses, institutions, and startups with CEO Okechineke Success C.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Service Type */}
        <div className="mt-6 space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
              1. Primary Product Scope
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'fullstack', label: 'Full-Stack System', desc: 'React + Node + DB' },
                { id: 'mobile', label: 'Mobile App', desc: 'React Native iOS/Android' },
                { id: 'web', label: 'Web Platform', desc: 'React & Tailwind' },
                { id: 'api', label: 'Backend & APIs', desc: 'Express / DB Architecture' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id as any)}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    projectType === item.id
                      ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-sm'
                      : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">{item.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Desired Features */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
              2. Core Functional Requirements
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {featureOptions.map((feat) => {
                const isSelected = selectedFeatures.includes(feat);
                return (
                  <button
                    key={feat}
                    type="button"
                    onClick={() => toggleFeature(feat)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl text-left text-xs transition-all border ${
                      isSelected
                        ? 'bg-indigo-950/40 border-indigo-500/70 text-slate-100'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                      isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-700'
                    }`}>
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                    <span>{feat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Timeline & Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                3. Delivery Timeline Target
              </label>
              <div className="flex gap-2">
                {[
                  { id: 'rush', label: 'Fast Track (2-3 wks)' },
                  { id: 'standard', label: 'Standard Pace' },
                  { id: 'flexible', label: 'Flexible' }
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTimeline(t.id as any)}
                    className={`flex-1 py-2 px-2 rounded-xl text-center text-xs font-medium border ${
                      timeline === t.id
                        ? 'bg-indigo-600 border-indigo-600 text-white'
                        : 'bg-slate-950/80 border-slate-800 text-slate-400'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-slate-400">Estimated Project Window</div>
                <div className="text-lg font-bold font-mono text-white tabular-nums mt-0.5">
                  {calculateEstimatedDuration()}
                </div>
              </div>
              <Clock className="w-6 h-6 text-indigo-400" />
            </div>
          </div>

          {/* Step 4: Client Details & Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Your Name / Organization</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Chukwuemeka / Tech Startup"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Your Email or WhatsApp</label>
              <input
                type="text"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="e.g. client@example.com or 080..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Project Summary / Specific Notes</label>
            <textarea
              rows={2}
              value={projectNotes}
              onChange={(e) => setProjectNotes(e.target.value)}
              placeholder="Tell Success briefly what you are looking to build..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Brief Copied!' : 'Copy Project Brief'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleEmailSend}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>Email Brief</span>
            </button>

            <button
              onClick={handleWhatsAppSend}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/30"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Send via WhatsApp (+234 814 657 8477)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
