import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Phone, MessageSquare, FileText, ArrowUpRight, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenEstimator: () => void;
  onOpenEmail: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenResume, 
  onOpenEstimator, 
  onOpenEmail 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#' || href === '#about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/30'
          : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-800/50'
      }`}
    >
      {/* 3-Zone Contract Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        
        {/* Zone 1: Wordmark */}
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-indigo-500/20">
            OS
          </span>
          <span className="truncate max-w-[200px] sm:max-w-none">Okechineke Success C.</span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-indigo-500 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onOpenEstimator}
            className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-indigo-500 whitespace-nowrap shrink-0 text-slate-300 cursor-pointer"
          >
            Project Estimator
          </button>
          <button
            type="button"
            onClick={onOpenResume}
            className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-indigo-500 whitespace-nowrap shrink-0 flex items-center gap-1.5 text-slate-300 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            Resume
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenEmail}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>Email</span>
          </button>
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-lg transition-all whitespace-nowrap shadow-sm shadow-indigo-600/30"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile controls & Menu Hamburger trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpenEmail}
            className="p-2 text-slate-300 hover:text-white rounded-xl bg-slate-900 border border-slate-800 cursor-pointer"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
          </button>

          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="p-2 text-slate-300 hover:text-white rounded-xl bg-slate-900 border border-slate-800"
            aria-label="Call phone number"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-200 hover:text-white rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-indigo-400" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900 rounded-xl transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-600 text-xs">→</span>
              </a>
            ))}
            
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900 rounded-xl transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>Project Scope Estimator</span>
              <span className="text-indigo-400 text-xs">Calculate</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 hover:bg-slate-900 rounded-xl transition-colors cursor-pointer flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Executive Resume / CV</span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmail();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-100 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Email Success (okechineke0@gmail.com)</span>
            </button>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct (+234 814 657 8477)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
