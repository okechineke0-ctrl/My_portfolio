import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenEstimator: () => void;
  onOpenEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onOpenEstimator,
  onOpenEmail
}) => {
  return (
    <section id="about" className="relative min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-32 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-40 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-950/50 border border-indigo-800/60 rounded-full w-fit">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs sm:text-sm font-semibold text-indigo-300">
                Full Stack Engineer & Technical Leader
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white [text-wrap:balance] leading-tight">
                Architecting Digital Excellence
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 [text-wrap:balance] leading-relaxed">
                Full-stack web & mobile engineer. I craft scalable products that drive real business impact. CEO of <span className="text-indigo-400 font-semibold">Ocean Technologies</span>.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-400">5+</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Years of Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">20+</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Projects Delivered</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">100%</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
              <button
                onClick={onOpenEmail}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-lg transition-all shadow-lg shadow-indigo-600/30 min-h-[44px]"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-indigo-400 bg-indigo-950/50 hover:bg-indigo-950 border border-indigo-800 rounded-lg transition-all active:scale-95 min-h-[44px]"
              >
                <span>Project Estimator</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all active:scale-95 min-h-[44px]"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social & Contact Info */}
            <div className="pt-6 sm:pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {PERSONAL_INFO.formattedPhone}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Gradient Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-transparent rounded-3xl blur-3xl" />
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-indigo-600/50 shadow-2xl shadow-indigo-600/20 bg-gradient-to-br from-slate-900 to-slate-950">
                <img
                  src="/file_00000000945081f6b741582314a697ec.png"
                  alt="Okechineke Success - Full Stack Engineer"
                  className="w-full h-auto object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-950/90 backdrop-blur-md border border-emerald-800/40 rounded-full">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-emerald-300">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
