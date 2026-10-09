import React, { useState } from 'react';
import { PERSONAL_INFO, KPI_METRICS } from '../data/portfolioData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  MessageSquare,
  ShieldCheck,
  Calendar
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenEstimator: () => void;
  onOpenEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenEstimator, onOpenEmail }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  const candidateImages = [
    '/profile.png',
    '/profile.jpg',
    '/profile.jpeg',
    '/profile.webp',
    '/profile-picture.png',
    '/profile-picture.jpg',
    '/file_00000000945081f6b741582314a697ec.png'
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const [allImagesFailed, setAllImagesFailed] = useState(false);

  const handleImageError = () => {
    if (imageIndex < candidateImages.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setAllImagesFailed(true);
    }
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl opacity-50" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl opacity-40" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Desktop Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Clean unboxed editorial kicker (No pills) */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-slate-400">
              <span className="text-indigo-400">Software Engineer</span>
              <span aria-hidden="true">·</span>
              <span>Full-Stack Web & Mobile</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">In Tech Since 2023</span>
              <span aria-hidden="true">·</span>
              <span className="text-indigo-400 font-semibold">CEO @ Ocean Technologies</span>
            </div>

            {/* Oversized Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Okechineke Success <span className="text-indigo-400">Chiemerie</span>
            </h1>

            {/* Executive Bio & Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Computer Science student at <strong className="text-white font-semibold">ESUT Agbani</strong> (enrolled in <strong className="text-white font-semibold">2024</strong>) and CEO of <strong className="text-white font-semibold">Ocean Technologies Awgu</strong>, with my professional tech journey beginning in <strong className="text-indigo-400 font-semibold">2023</strong>. I architect and build robust, scalable applications using <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Express</span>, <span className="text-white font-medium">Node.js</span>, <span className="text-white font-medium">React Native</span>, and dependable database architectures.
            </p>

            {/* Key context bullets (Clean unboxed rows) */}
            <div className="space-y-2.5 text-sm text-slate-300 pt-1">
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  CEO at <a href="https://ocean-f4gj.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-indigo-400 underline underline-offset-2 inline-flex items-center gap-1">Ocean Technologies, Awgu</a> & previously at <strong className="text-slate-100 font-medium">CIITA Awgu</strong> (2023 — 2024)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  B.Sc Computer Science at <strong className="text-slate-100 font-medium">ESUT Agbani, Enugu State</strong> (Admitted 2024)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  Tech Journey: Active Software Engineering & Web Architecture <strong className="text-white font-medium">Since 2023</strong>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300/90">
                  Live Portals: <a href="https://dgc-portal.onrender.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white font-medium">Dominion Star College Portal</a> & <a href="https://ocean-f4gj.onrender.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white font-medium">Ocean Tech</a>
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-xl transition-all shadow-md shadow-indigo-600/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>08146578477</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 rounded-xl transition-all"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Executive CV</span>
              </button>

              <button
                onClick={onOpenEstimator}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-indigo-300 hover:text-indigo-200 bg-indigo-950/40 hover:bg-indigo-900/40 border border-indigo-800/50 rounded-xl transition-all"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Estimate Project</span>
              </button>
            </div>

            {/* Quick Copy Contact Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Enugu State, Nigeria</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="hover:text-slate-200 transition-colors flex items-center gap-1.5 text-slate-300"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500" />
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Executive Portrait Card (Permanent Photo - No Upload Icon) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-5 md:p-6 shadow-2xl shadow-black/40 backdrop-blur-sm relative group">
              
              {/* Permanent Photo Frame */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 mb-5 shadow-inner flex items-center justify-center">
                {!allImagesFailed ? (
                  <img
                    src={candidateImages[imageIndex]}
                    alt="Okechineke Success Chiemerie - CEO Ocean Technologies"
                    className="w-full h-full object-cover object-top"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-full relative flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
                    {/* Executive portrait presentation matching user's tailored navy suit & tie */}
                    <div className="relative w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-cyan-500 shadow-xl shadow-indigo-950/50 mb-3">
                      <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center overflow-hidden border-2 border-slate-800">
                        <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-3xl font-bold font-mono text-indigo-400 mt-2">
                          OS
                        </div>
                        <div className="w-32 h-14 bg-indigo-900/90 rounded-t-3xl mt-2 flex flex-col items-center pt-1">
                          <div className="w-5 h-8 bg-white/90 transform rotate-45 rounded-sm -mt-2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold text-slate-100 text-base">Okechineke Success C.</div>
                    <div className="text-xs text-indigo-400 font-medium mt-0.5">CEO · Ocean Technologies Awgu</div>
                    <div className="text-[11px] text-slate-400 mt-1">Full Stack Web & Mobile App Developer</div>
                  </div>
                )}

                {/* Status indicator tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800/80 text-xs">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Available for Projects
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">Enugu, NG</span>
                </div>
              </div>

              {/* Leadership & Credentials Summary */}
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs text-slate-400">
                  <span>Current Office</span>
                  <a 
                    href="https://ocean-f4gj.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-indigo-400 font-medium underline underline-offset-2 flex items-center gap-1"
                  >
                    <span>Ocean Technologies Awgu</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs text-slate-400">
                  <span>Tech Journey Began</span>
                  <span className="text-white font-medium font-mono">2023 (Active Engineering)</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs text-slate-400">
                  <span>Academic Enrollment</span>
                  <span className="text-white font-medium">ESUT Agbani (2024 — Present)</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs text-slate-400">
                  <span>Prior Institute</span>
                  <span className="text-white font-medium">CIITA Awgu (2023 — 2024)</span>
                </div>

                {/* Direct quick action buttons */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Call 08146578477</span>
                  </a>
                  <button
                    type="button"
                    onClick={onOpenEmail}
                    className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Row Below Split: 4-Column KPI Strip with Tabular Numerals */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {KPI_METRICS.map((kpi, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-4 sm:p-5 hover:border-slate-700/80 transition-colors"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-mono tabular-nums tracking-tight">
                  {kpi.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {kpi.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {kpi.note}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

