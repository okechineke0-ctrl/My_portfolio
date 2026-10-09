import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Server, 
  Database, 
  Smartphone, 
  Cpu, 
  ArrowUpRight 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-1">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
              {project.organization && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-indigo-400">{project.organization}</span>
                </>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-3 gap-3 my-6">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-3.5 text-center">
              <div className="text-lg sm:text-xl font-bold text-white font-mono tabular-nums">
                {metric.value}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Content Body */}
        <div className="space-y-6">
          {/* Detailed Overview */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              System Overview & Problem Solved
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Core Features */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
              Key Architectural Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/40">
              <h3 className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-1 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Backend & Engineering Architecture Notes
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Technology Stack (Clean unboxed tags) */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-slate-300">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-medium text-slate-200">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-slate-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-6 mt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Engineer: <span className="text-white font-medium">Okechineke Success Chiemerie</span> ({project.role})
          </div>

          <div className="flex items-center gap-2.5">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-sm shadow-blue-500/30"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors"
            >
              <span>Discuss Similar Build</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
