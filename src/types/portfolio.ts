export type ProjectCategory = 'all' | 'web' | 'mobile' | 'backend';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  role: string;
  organization?: string;
  year: string;
  description: string;
  longDescription: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  architectureNotes?: string;
  mockupType: 'web-dashboard' | 'mobile-app' | 'api-terminal' | 'portal';
  accentColor: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  type: 'Executive' | 'Professional' | 'Academic';
  description: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    icon: string;
  }[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  projectDescription: string;
}
