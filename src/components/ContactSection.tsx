import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Clock,
  ExternalLink,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface ContactSectionProps {
  onOpenEmail: (subject?: string, body?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEmail }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectScope: 'Full-Stack Web Application',
    message: ''
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const getFormMessageBody = () => {
    return `Client Name: ${formData.name || 'Not provided'}\nClient Email: ${formData.email || 'Not provided'}\nClient Phone: ${formData.phone || 'Not provided'}\nRequested Scope: ${formData.projectScope}\n\nMessage:\n${formData.message}`;
  };

  const getGmailUrl = () => {
    const subject = encodeURIComponent(`Project Collaboration - ${formData.name || 'New Client'}`);
    const body = encodeURIComponent(getFormMessageBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Collaboration - ${formData.name || 'New Client'}`);
    const body = encodeURIComponent(getFormMessageBody());
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Okechineke Success, I am submitting a project inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.projectScope}\n\n${formData.message}`
    );
    return `https://wa.me/2348146578477?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Copy the prepared message to clipboard so nothing is ever lost
    navigator.clipboard.writeText(`To: ${PERSONAL_INFO.email}\n\n${getFormMessageBody()}`);
    
    // Set form as submitted to display the interactive dispatch controls
    setFormSubmitted(true);

    // Try opening Gmail web in a new tab safely
    try {
      window.open(getGmailUrl(), '_blank');
    } catch (err) {
      // Fallback
    }
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectScope: 'Full-Stack Web Application',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16">
          <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Access & Client Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance] mb-4">
            Let's Collaborate on Your Next High-Impact Digital Product
          </h2>
          <p className="text-sm sm:text-base text-slate-400 [text-wrap:balance]">
            Currently seeking new opportunities to architect innovative web and mobile solutions. Whether you need a full-stack platform, React Native mobile app, or backend engineering, connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/60 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400">Direct Phone Line</div>
                    <div className="text-base font-bold text-white font-mono mt-0.5 truncate">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="flex-1 sm:flex-none p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer active:scale-95"
                    title="Copy phone number"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                    ) : (
                      <Copy className="w-4 h-4 mx-auto" />
                    )}
                  </button>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex-1 sm:flex-none px-3 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer active:scale-95 text-center min-h-[44px] sm:min-h-auto flex items-center justify-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400">WhatsApp Direct</div>
                    <div className="text-base font-bold text-white font-mono mt-0.5 truncate">
                      {PERSONAL_INFO.formattedPhone}
                    </div>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors cursor-pointer active:scale-95 min-h-[44px] sm:min-h-auto"
                >
                  <span>Chat Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/60 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400">Email Address</div>
                    <div className="text-xs sm:text-base font-bold text-white mt-0.5 truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="flex-1 sm:flex-none p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer active:scale-95"
                    title="Copy email address"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                    ) : (
                      <Copy className="w-4 h-4 mx-auto" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenEmail()}
                    className="flex-1 sm:flex-none px-3 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer active:scale-95 text-center min-h-[44px] sm:min-h-auto flex items-center justify-center"
                  >
                    Send Email
                  </button>
                </div>
              </div>
            </div>

            {/* Location & Organization Badge */}
            <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-950/90 border border-slate-800/90 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Base: <strong className="text-white">Enugu State, Nigeria</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Office: <strong className="text-white">Ocean Technologies, Awgu</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-emerald-400">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Response Time: <strong className="text-emerald-300">&lt; 2 Hours</strong></span>
              </div>
            </div>

          </div>

          {/* Right Column: Send Message / Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-2">
                Send a Direct Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the details below to dispatch your requirements straight to Okechineke Success.
              </p>

              {formSubmitted ? (
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white">Inquiry Ready to Dispatch!</h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-1">
                      Your message has been copied to your clipboard. Choose your preferred send channel.
                    </p>
                  </div>

                  {/* Multi-Channel Delivery Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-2 max-w-md mx-auto">
                    <a
                      href={getGmailUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-md shadow-indigo-600/20 active:scale-95 min-h-[44px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Gmail</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-md shadow-emerald-600/20 active:scale-95 min-h-[44px]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={getMailtoUrl()}
                      className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all active:scale-95 min-h-[44px]"
                    >
                      <Mail className="w-4 h-4 text-indigo-400" />
                      <span>Mail App</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopy(getFormMessageBody(), 'message_copy')}
                      className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all active:scale-95 min-h-[44px]"
                    >
                      {copiedField === 'message_copy' ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Text</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer active:scale-95"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kenneth Okafor"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. kenneth@company.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 08012345678"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Service Scope *
                      </label>
                      <select
                        value={formData.projectScope}
                        onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer"
                      >
                        <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                        <option value="Cross-Platform Mobile App">Cross-Platform Mobile App</option>
                        <option value="Backend Architecture & API">Backend Architecture & API</option>
                        <option value="Academic Portal">Academic Portal</option>
                        <option value="Full-Time Engineering Role">Full-Time Role</option>
                        <option value="Technical Consultation">Technical Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Requirements / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you want to build, target timeline, or collaboration ideas..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="text-[11px] sm:text-xs text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Direct confidential delivery</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-lg transition-all shadow-lg shadow-indigo-600/30 min-h-[44px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Message</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
