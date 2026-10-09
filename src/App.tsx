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
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [estimatorOpen, setEstimatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-600 selection:text-white">
      {/* 3-Zone Navigation */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)}
        onOpenEstimator={() => setEstimatorOpen(true)}
      />

      {/* Hero Section with Split View, Executive Portrait & KPI Strip */}
      <main>
        <Hero 
          onOpenResume={() => setResumeOpen(true)}
          onOpenEstimator={() => setEstimatorOpen(true)}
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
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setResumeOpen(true)}
        onOpenEstimator={() => setEstimatorOpen(true)}
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
    </div>
  );
}
