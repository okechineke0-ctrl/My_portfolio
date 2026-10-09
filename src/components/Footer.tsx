import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Phone, Mail, MessageSquare, ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenEstimator: () => void;
  onOpenEmail: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenEstimator, onOpenEmail }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <div className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white font-mono text-xs">
                OS
              </span>
              <span>Okechineke Success Chiemerie</span>
            </div>
            <p className="text-slate-400 mt-1 max-w-md">
              Full Stack Web & Mobile App Developer · CEO @ Ocean Technologies Awgu · Computer Science Undergraduate @ ESUT Agbani, Enugu State, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-slate-300 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#tech-stack" className="hover:text-white transition-colors">Tech Stack</a>
            <button onClick={onOpenEstimator} className="hover:text-white transition-colors text-slate-300">
              Estimator
            </button>
            <button onClick={onOpenResume} className="hover:text-white transition-colors text-slate-300">
              Resume / CV
            </button>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Bottom Metadata & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Okechineke Success Chiemerie. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Ocean Technologies Awgu</span>
            <span aria-hidden="true">·</span>
            <span>Enugu State, Nigeria</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              type="button"
              onClick={onOpenEmail}
              className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>{PERSONAL_INFO.email}</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
