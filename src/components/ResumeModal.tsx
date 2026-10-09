import React, { useEffect } from 'react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm print:p-0 print:bg-white"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-100 max-h-[95vh] overflow-y-auto print:max-h-none print:overflow-visible print:border-none print:shadow-none print:bg-white print:text-black print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Controls Bar (Hidden in Print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800 print:hidden">
          <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">
            Executive Curriculum Vitae
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="space-y-6 print:space-y-4">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-white print:text-black tracking-tight">
              {PERSONAL_INFO.fullName}
            </h1>
            <div className="text-indigo-400 print:text-indigo-700 font-semibold text-sm mt-0.5">
              Full Stack Web & Mobile App Developer · CEO @ Ocean Technologies Awgu
            </div>

            {/* Contact Row */}
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-300 print:text-slate-700 mt-3">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600" />
                {PERSONAL_INFO.formattedPhone} ({PERSONAL_INFO.phone})
              </span>
              <span aria-hidden="true" className="text-slate-600 print:text-slate-400">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600" />
                {PERSONAL_INFO.email}
              </span>
              <span aria-hidden="true" className="text-slate-600 print:text-slate-400">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-indigo-400 print:text-indigo-700 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              Software Engineer and Website Developer with professional experience building scalable web and mobile software solutions since 2023. Proficient in React, Node.js, Express, React Native, and resilient database architectures (PostgreSQL, MongoDB, MySQL). Proven leadership track record as CEO of Ocean Technologies Awgu and former developer/trainer at Catholic Institute of Information and Technology (CIITA), Awgu. Computer Science undergraduate scholar at Enugu State University of Science and Technology (ESUT), Agbani (enrolled in 2024).
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-indigo-400 print:text-indigo-700 font-bold mb-2">
              Education
            </h2>
            <div className="bg-slate-950/60 print:bg-slate-50 border border-slate-800/80 print:border-slate-200 rounded-2xl p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white print:text-black">
                    Bachelor of Science (B.Sc) in Computer Science
                  </div>
                  <div className="text-xs text-indigo-400 print:text-indigo-700 font-medium">
                    {PERSONAL_INFO.university}
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-400 print:text-slate-600 mt-1 sm:mt-0">
                  2024 — Present (Undergraduate Scholar)
                </div>
              </div>
              <div className="text-xs text-slate-400 print:text-slate-600 mt-2">
                Enrolled in 2024. Core Focus: Data Structures & Algorithms, Object-Oriented Software Engineering, Database Systems, Computer Networks, and Distributed Computing.
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-indigo-400 print:text-indigo-700 font-bold mb-3">
              Work & Leadership Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div 
                  key={exp.id}
                  className="bg-slate-950/60 print:bg-slate-50 border border-slate-800/80 print:border-slate-200 rounded-2xl p-4 sm:p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800 print:border-slate-200">
                    <div>
                      <div className="text-sm font-bold text-white print:text-black">
                        {exp.role}
                      </div>
                      <div className="text-xs text-indigo-400 print:text-indigo-700 font-medium">
                        {exp.company} — {exp.location}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-slate-600 mt-1 sm:mt-0">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 print:text-slate-700 my-2 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-300 print:text-slate-700">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-400 print:text-indigo-600 shrink-0 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-indigo-400 print:text-indigo-700 font-bold mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                <span className="font-bold text-white print:text-black block mb-1">Frontend Development:</span>
                <span className="text-slate-300 print:text-slate-700">
                  React, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3, Vite, Next.js, Responsive UX
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                <span className="font-bold text-white print:text-black block mb-1">Backend & APIs:</span>
                <span className="text-slate-300 print:text-slate-700">
                  Node.js, Express.js, RESTful API Design, JWT & Bcrypt Authentication, WebSockets (Socket.IO), Middleware
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                <span className="font-bold text-white print:text-black block mb-1">Mobile Development:</span>
                <span className="text-slate-300 print:text-slate-700">
                  React Native, Expo, React Navigation, Offline SQLite, Native Biometrics, Push Notifications
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                <span className="font-bold text-white print:text-black block mb-1">Databases & Infrastructure:</span>
                <span className="text-slate-300 print:text-slate-700">
                  MongoDB, PostgreSQL, MySQL, Redis, Firebase Firestore, Git/GitHub, Linux Shell
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="mt-8 pt-5 border-t border-slate-800 print:hidden flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Available for Full-Time Roles & High-Impact Contracts
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-xl transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
