import React from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">
            Professional Track Record & Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Leadership, Engineering Experience & Academic Rigor
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Active software engineering in Eastern Nigeria since 2023: leading Ocean Technologies Awgu, developing institutional portals and mentoring at CIITA, and studying Computer Science at ESUT Agbani (enrolled in 2024).
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 md:before:left-6 before:w-0.5 before:bg-slate-800">
          {EXPERIENCES.map((exp) => (
            <div 
              key={exp.id}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline marker */}
              <div className="absolute left-1.5 md:left-4 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform"></div>

              {/* Card Container */}
              <div className="bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 rounded-3xl p-6 sm:p-8 transition-all shadow-xl shadow-black/20">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-1">
                      <span className="text-indigo-400 font-semibold">{exp.type} Role</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 mt-0.5 flex items-center gap-2">
                      {exp.type === 'Academic' ? (
                        <GraduationCap className="w-4 h-4 text-indigo-400" />
                      ) : (
                        <Building2 className="w-4 h-4 text-indigo-400" />
                      )}
                      <span>{exp.company}</span>
                      {exp.id === 'ocean-technologies' && (
                        <a
                          href="https://ocean-f4gj.onrender.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-normal text-indigo-400 hover:text-indigo-300 underline underline-offset-2 ml-1"
                        >
                          Visit Live Agency Site ↗
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950/80 px-3.5 py-1.5 rounded-xl border border-slate-800 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed my-4">
                  {exp.description}
                </p>

                {/* Achievement Highlights */}
                <div className="space-y-2.5 my-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Key Deliverables & Responsibilities
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.highlights.map((highlight, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Competencies (Clean inline metadata, zero pills) */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Competencies:</span>
                  {exp.skills.map((skill, idx) => (
                    <React.Fragment key={skill}>
                      <span className="text-slate-300">{skill}</span>
                      {idx < exp.skills.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
