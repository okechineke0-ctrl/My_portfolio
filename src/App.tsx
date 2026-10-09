import React, { useState } from 'react';
import { Project } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { ContactSection } from './components/ContactSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ResumeModal } from './components/ResumeModal';
import { EmailModal } from './components/EmailModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailSubject, setEmailSubject] = useState<string | undefined>(undefined);
  const [emailBody, setEmailBody] = useState<string | undefined>(undefined);

  const handleOpenEmail = (subject?: string, body?: string) => {
    setEmailSubject(subject);
    setEmailBody(body);
    setEmailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-600 selection:text-white">
      {/* 3-Zone Navigation with Responsive Menu & Smooth Scroll */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)}
        onOpenEstimator={() => setEstimatorOpen(true)}
        onOpenEmail={() => handleOpenEmail()}
      />

      {/* Hero Section with Split View, Executive Portrait & KPI Strip */}
      <main>
        <Hero 
          onOpenResume={() => setResumeOpen(true)}
          onOpenEstimator={() => setEstimatorOpen(true)}
          onOpenEmail={() => handleOpenEmail()}
        />

        {/* Featured Projects Bento Showcase */}
        <Projects 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Experience & Leadership Timeline */}
        <Experience />

        {/* Technical Mastery & Code Architecture Showcase */}
        <TechStack />

        {/* Direct Client Access & Contact Section */}
        <ContactSection 
          onOpenEmail={(subject, body) => handleOpenEmail(subject, body)}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setResumeOpen(true)}
        onOpenEstimator={() => setEstimatorOpen(true)}
        onOpenEmail={() => handleOpenEmail()}
      />

      {/* Interactive Project Architecture Deep-Dive Modal */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Project Scope & Timeline Estimator */}
      <ProjectEstimator 
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
      />

      {/* Executive Printable Resume / Curriculum Vitae Modal */}
      <ResumeModal 
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* 100% Responsive Email Modal (Gmail Web / Mail Client / WhatsApp / Copy) */}
      <EmailModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        initialSubject={emailSubject}
        initialBody={emailBody}
      />
    </div>
  );
}
