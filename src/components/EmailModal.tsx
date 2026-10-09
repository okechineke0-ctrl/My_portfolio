import React, { useEffect, useState } from 'react';
import { X, Send, Mail, MessageSquare, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
  initialBody?: string;
}

export const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  initialSubject = '',
  initialBody = ''
}) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [body, setBody] = useState(initialBody);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setSubject(initialSubject);
    setBody(initialBody);
  }, [initialSubject, initialBody, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleCopy = () => {
    const fullMessage = `To: ${PERSONAL_INFO.email}\nSubject: ${subject || '(No Subject)'}\n\n${body}`;
    navigator.clipboard.writeText(fullMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getGmailUrl = () => {
    const encodedSubject = encodeURIComponent(subject || 'Hello');
    const encodedBody = encodeURIComponent(body);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${encodedSubject}&body=${encodedBody}`;
  };

  const getMailtoUrl = () => {
    const encodedSubject = encodeURIComponent(subject || 'Hello');
    const encodedBody = encodeURIComponent(body);
    return `mailto:${PERSONAL_INFO.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 border-b border-slate-800 px-6 py-4 sm:py-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Send Email
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              to {PERSONAL_INFO.email}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Email Input */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
              Your Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>

          {/* Subject Input */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g., Project Inquiry - Web Development"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>

          {/* Message Body */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
              Message
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your message here..."
              rows={6}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <a
              href={getGmailUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Send via Gmail</span>
            </a>
          </div>

          {/* Alternative Options */}
          <div className="pt-2 border-t border-slate-800/50 space-y-3">
            <p className="text-xs text-slate-400">Alternative sending options:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={getMailtoUrl()}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-lg transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Default Mail App</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-900 border-t border-slate-800 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-all active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
