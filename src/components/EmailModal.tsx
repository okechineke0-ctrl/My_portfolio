import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  X, 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
  initialBody?: string;
  senderName?: string;
  senderEmail?: string;
}

export const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  initialSubject,
  initialBody,
  senderName,
  senderEmail
}) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState(initialSubject || 'Project Inquiry & Collaboration');
  const [body, setBody] = useState(
    initialBody || 'Hello Okechineke Success,\n\nI would like to discuss a software development project with you.\n\nBest regards,'
  );

  useEffect(() => {
    if (initialSubject) setSubject(initialSubject);
    if (initialBody) setBody(initialBody);
  }, [initialSubject, initialBody]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const targetEmail = PERSONAL_INFO.email; // okechineke0@gmail.com
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(
    senderName 
      ? `From: ${senderName} (${senderEmail || 'No email provided'})\n\n${body}` 
      : body
  );

  // Web Gmail Compose URL (100% reliable across all browsers & iframes)
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodedSubject}&body=${encodedBody}`;
  
  // Standard mailto URL
  const mailtoUrl = `mailto:${targetEmail}?subject=${encodedSubject}&body=${encodedBody}`;

  // WhatsApp fallback with pre-filled message
  const whatsappUrl = `https://wa.me/2348146578477?text=${encodeURIComponent(
    `Hello Success, reaching out via email form regarding: ${subject}\n\n${body}`
  )}`;

  const handleCopyEmailAndMessage = () => {
    const textToCopy = `To: ${targetEmail}\nSubject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-7 text-slate-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-1">
              <Mail className="w-4 h-4" />
              <span>Direct Email Dispatch</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Email Okechineke Success
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Recipient: <strong className="text-indigo-300 font-mono">{targetEmail}</strong>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Preview / Customizer */}
        <div className="my-5 space-y-3.5">
          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">
              Subject Line
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">
              Message Content
            </label>
            <textarea
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 resize-none font-sans"
            />
          </div>
        </div>

        {/* 100% Working Delivery Channels */}
        <div className="space-y-2.5 pt-2 border-t border-slate-800">
          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
            Choose Delivery Method
          </div>

          {/* Option 1: Open in Gmail Web */}
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold flex items-center gap-1.5">
                  <span>Open in Gmail (Web)</span>
                  <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white font-normal">Recommended</span>
                </div>
                <div className="text-[10px] text-indigo-100">Opens compose window directly in Gmail</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-indigo-200 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Option 2: Default System Mail Client */}
          <a
            href={mailtoUrl}
            onClick={onClose}
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-indigo-400">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold">Open Default Mail App</div>
                <div className="text-[10px] text-slate-400">Apple Mail, Outlook, or Thunderbird</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </a>

          {/* Option 3: WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/60 text-emerald-200 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-900/80 flex items-center justify-center text-emerald-300">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-emerald-100">Send via WhatsApp Instead</div>
                <div className="text-[10px] text-emerald-300/80">Direct instant chat to +234 814 657 8477</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Copy to Clipboard Bar */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handleCopyEmailAndMessage}
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied Email & Message!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Message & Email Address</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};
