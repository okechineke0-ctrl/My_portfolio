import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Code2, 
  Smartphone, 
  Server, 
  Layout, 
  Terminal, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Full-Stack Web' },
    { id: 'mobile', label: 'Mobile Apps (React Native)' },
    { id: 'backend', label: 'Backend APIs & Systems' }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">
              Featured Engineering Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Scalable Systems & High-Impact Digital Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Production web applications, cross-platform mobile apps, and robust Node.js backend services developed as CEO of Ocean Technologies Awgu, at CIITA, and in ESUT CS.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 rounded-3xl p-6 transition-all duration-200 flex flex-col justify-between shadow-lg shadow-black/20 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Clean unboxed metadata kicker */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-400 font-medium">{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-400">
                      {project.organization || 'Software Engineering'}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Visual Mockup Preview Container */}
                  <div className="my-5 rounded-2xl bg-slate-950 border border-slate-800/70 p-4 overflow-hidden relative">
                    {project.mockupType === 'web-dashboard' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                            ocean-tech-cluster.prod
                          </span>
                          <span className="text-emerald-400 font-semibold">99.9% Online</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/60 text-center">
                            <div className="text-xs font-mono font-bold text-white tabular-nums">125ms</div>
                            <div className="text-[10px] text-slate-400">Latency</div>
                          </div>
                          <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/60 text-center">
                            <div className="text-xs font-mono font-bold text-indigo-400 tabular-nums">120+</div>
                            <div className="text-[10px] text-slate-400">Active Inquiries</div>
                          </div>
                          <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/60 text-center">
                            <div className="text-xs font-mono font-bold text-emerald-400 tabular-nums">Zero Error</div>
                            <div className="text-[10px] text-slate-400">Deploy Health</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'mobile-app' && (
                      <div className="flex items-center justify-between gap-4">
                        <div className="w-16 h-28 bg-slate-900 border-2 border-slate-700 rounded-2xl p-1.5 flex flex-col justify-between shrink-0 shadow-md">
                          <div className="w-4 h-1 bg-slate-700 rounded-full mx-auto"></div>
                          <div className="bg-indigo-950/80 rounded-lg p-1 text-center">
                            <Smartphone className="w-4 h-4 text-indigo-400 mx-auto" />
                            <div className="text-[7px] text-indigo-300 font-mono mt-0.5">QuickPay</div>
                          </div>
                          <div className="w-6 h-0.5 bg-slate-700 rounded-full mx-auto"></div>
                        </div>
                        <div className="flex-1 space-y-1.5 text-xs text-slate-300">
                          <div className="font-semibold text-white text-xs">React Native Cross-Platform</div>
                          <div className="text-[11px] text-slate-400">Native biometrics · Offline SQLite caching · 60 FPS fluidity</div>
                          <div className="text-[11px] text-indigo-400 font-mono">iOS & Android Compatible</div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'portal' && (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-1.5">
                          <span className="font-semibold text-slate-200">
                            {project.id === 'dgc-portal-live' ? 'Dominion Star Global College (DGC)' : 'CIITA Awgu Academic Portal'}
                          </span>
                          <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            {project.id === 'dgc-portal-live' ? 'Live on Render' : '500+ Students'}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300">
                          {project.id === 'dgc-portal-live' ? (
                            <>
                              <span className="bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 text-[10px]">Terminal Broadsheets</span>
                              <span className="bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 text-[10px]">Report Cards</span>
                              <span className="bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 text-[10px]">Fees Clearance</span>
                              <span className="bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 text-[10px]">JSS 1 - SSS 3</span>
                            </>
                          ) : (
                            <>
                              <span className="bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 text-[10px]">Enrollment Engine</span>
                              <span className="bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 text-[10px]">Gradebook Compute</span>
                              <span className="bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 text-[10px]">Certificates</span>
                            </>
                          )}
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'api-terminal' && (
                      <div className="font-mono text-[11px] space-y-1 text-slate-300">
                        <div className="text-slate-500"># Node.js + Express Routing Engine</div>
                        <div className="text-emerald-400">POST /api/v1/dispatch/order [200 OK - 78ms]</div>
                        <div className="text-indigo-300">WS //socket-cluster: 1,500 active rider rooms</div>
                      </div>
                    )}
                  </div>

                  {/* Quantitative Metric Badges */}
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-300 mb-4">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="flex items-baseline gap-1.5">
                        <span className="font-bold text-white tabular-nums">{m.value}</span>
                        <span className="text-[11px] text-slate-400 font-sans">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with clean technologies metadata */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs gap-2">
                  <div className="flex flex-wrap items-center gap-1.5 text-slate-400 line-clamp-1 max-w-[65%]">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {i < Math.min(project.technologies.length, 3) - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/60 px-2 py-1 rounded-lg transition-colors"
                        title="Open live production portal"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <span className="text-indigo-400 font-medium group-hover:underline underline-offset-2">
                      Inspect
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
