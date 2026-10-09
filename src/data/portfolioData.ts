import { Project, ExperienceItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: 'Okechineke Success Chiemerie',
  firstName: 'Success',
  title: 'Full Stack Web & Mobile App Developer',
  headline: 'CEO @ Ocean Technologies Awgu · ESUT Computer Science (2024) · In Tech Since 2023',
  techStartedYear: '2023',
  schoolStartedYear: '2024',
  yearsExperience: 'Since 2023',
  phone: '08146578477',
  formattedPhone: '+234 814 657 8477',
  email: 'okechineke0@gmail.com',
  location: 'Enugu State, Nigeria',
  university: 'Enugu State University of Science and Technology (ESUT), Agbani',
  degree: 'B.Sc Computer Science (Started 2024)',
  company: 'Ocean Technologies, Awgu',
  companyRole: 'Founder & Chief Executive Officer (CEO)',
  companyUrl: 'https://ocean-f4gj.onrender.com/',
  companyEmail: 'oceantechnologies62@gmail.com',
  bio: 'Software engineer and full-stack web and mobile developer who embarked on his professional tech journey in 2023. Currently studying Computer Science at ESUT Agbani (admitted in 2024) and serving as CEO of Ocean Technologies Awgu. Specializing in high-performance web systems with React, Node.js, Express, and cross-platform mobile apps with React Native, backed by robust database architectures.',
  seekingStatus: 'Open for full-time engineering roles, high-impact contract projects, and strategic enterprise partnerships.',
  whatsappUrl: 'https://wa.me/2348146578477?text=Hello%20Okechineke%20Success,%20I%20am%20reaching%20out%20regarding%20a%20project%20collaboration.',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    oceanTech: 'https://ocean-f4gj.onrender.com/'
  }
};

export const KPI_METRICS = [
  { value: 'Since 2023', label: 'Tech Journey', note: 'Active full-stack engineering' },
  { value: '18+', label: 'Digital Products', note: 'Web & mobile applications' },
  { value: '2+', label: 'Leadership Roles', note: 'Ocean Technologies & CIITA' },
  { value: '99.9%', label: 'Architecture Uptime', note: 'Resilient Node & Express backends' }
];

export const PROJECTS: Project[] = [
  {
    id: 'dgc-portal-live',
    title: 'Dominion Star Global College Portal (DGC)',
    tagline: 'Comprehensive Academic Management Dashboard, Terminal Results & Student Portal',
    category: 'web',
    categoryLabel: 'Live Production Web Portal',
    role: 'Lead Full-Stack Web Developer',
    organization: 'Dominion Star Global College (Awgu, Enugu)',
    year: '2024 - Present',
    description: 'Official live academic management dashboard and student portal for Dominion Star Global College in Awgu, Enugu State.',
    longDescription: 'Engineered and deployed for Dominion Star Global College in Awgu, Enugu State, this live production portal delivers automated terminal result broadsheets, continuous assessment and examination breakdowns, daily roll call attendance analytics, bursary fees clearance verification, and class arm governance across JSS 1 through SSS 3. Hosted live on Render cloud infrastructure.',
    technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Render Cloud', 'Plus Jakarta Sans', 'REST APIs', 'PDF Broadsheets'],
    metrics: [
      { label: 'System Status', value: 'Live on Render' },
      { label: 'Terminal Broadsheets', value: '100% Automated' },
      { label: 'Classes Covered', value: 'JSS 1 – SSS 3' }
    ],
    features: [
      'Official terminal report card generator and digital academic broadsheet computation',
      'Continuous assessment, practical coursework, and examination score breakdown',
      'Bursary clearance verification and terminal school fees tracking',
      'Daily student roll call attendance rate computation and punctuality analytics',
      'Class arm directories with assigned class masters, subject teachers, and student capacities'
    ],
    architectureNotes: 'Production React application consuming Express and Node.js REST services with high-availability cloud deployment on Render. Features optimized bundle splitting, responsive data tables, and client-side print stylesheets.',
    mockupType: 'portal',
    accentColor: '#2563eb',
    liveUrl: 'https://dgc-portal.onrender.com/',
    githubUrl: '#'
  },
  {
    id: 'ocean-technologies-platform',
    title: 'Ocean Technologies Digital Suite',
    tagline: 'Enterprise Client Onboarding & Automated Web Solutions Engine',
    category: 'web',
    categoryLabel: 'Full-Stack Web & Agency SaaS',
    role: 'Founder, CEO & Lead Architect',
    organization: 'Ocean Technologies Awgu',
    year: '2023 - Present',
    description: 'An all-in-one business management, service provisioning, and client dispatch portal built for Ocean Technologies Awgu to manage commercial web projects.',
    longDescription: 'Ocean Technologies Suite is the operational backbone for our software enterprise in Awgu, Enugu State. The platform handles end-to-end client communications, project requirement gathering, milestone-based invoice generation, automated DNS and hosting status checks, and client feedback cycles. Built on a resilient Node.js and Express backend with a fast React frontend.',
    technologies: ['React 19', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL', 'JWT Authentication', 'REST APIs'],
    metrics: [
      { label: 'Client Inquiries Handled', value: '120+' },
      { label: 'Avg API Response', value: '125ms' },
      { label: 'System Availability', value: '99.9%' }
    ],
    features: [
      'Interactive client project brief builder with automated estimation calculations',
      'Secure role-based dashboard for administrators, project engineers, and clients',
      'Encrypted payment milestone records and invoice generator',
      'Automated email dispatch for status transitions and milestone releases'
    ],
    architectureNotes: 'Layered MVC pattern with strict service-repository decoupling. Uses Express middleware pipelines for input sanitization, JWT authorization, and structured JSON logging.',
    mockupType: 'web-dashboard',
    accentColor: '#3b82f6',
    liveUrl: 'https://ocean-f4gj.onrender.com/',
    githubUrl: '#'
  },
  {
    id: 'ciita-academic-portal',
    title: 'CIITA Academic & Training Portal',
    tagline: 'Centralized Course Registration, Student Records & Assessment Hub',
    category: 'web',
    categoryLabel: 'Institutional Web Platform',
    role: 'Full-Stack Developer & Technical Lead',
    organization: 'Catholic Institute of Information and Technology (CIITA), Awgu',
    year: '2022 - 2024',
    description: 'A comprehensive campus management portal for CIITA Awgu, serving students, instructors, and administrative staff.',
    longDescription: 'During my tenure at the Catholic Institute of Information and Technology (CIITA) Awgu, I spearheaded the modernization of the academic administration process. The previous paper-based system was replaced with a secure web platform enabling real-time course registration, timetable distribution, automated grade computation, and digital certificate validation for IT diploma graduates.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'Bcrypt.js'],
    metrics: [
      { label: 'Students Enrolled', value: '500+' },
      { label: 'Manual Paperwork Cut', value: '85%' },
      { label: 'Processing Speedup', value: '10x' }
    ],
    features: [
      'Student self-service dashboard for enrolling in computer science & IT tracks',
      'Instructor gradebook with automated GPA and performance aggregate calculations',
      'Cryptographically signed certificate validation viewer for prospective employers',
      'Administrative audit logs ensuring data integrity and preventing unauthorized grade modifications'
    ],
    architectureNotes: 'Built using Express REST endpoints consuming indexed MongoDB collections with schema validation via Mongoose. Session states validated through stateless JWT tokens with refresh cycles.',
    mockupType: 'portal',
    accentColor: '#10b981',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'agrotrust-pay-mobile',
    title: 'QuickPay Mobile Commerce & Logistics',
    tagline: 'Cross-Platform React Native Fintech & Merchant Mobile App',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    role: 'Lead Mobile Developer',
    year: '2024',
    description: 'A high-performance iOS and Android mobile app providing seamless merchant payments, invoice management, and instant digital receipts for regional vendors.',
    longDescription: 'Engineered with React Native to bridge digital transactions for micro-merchants and shoppers across Eastern Nigeria. Features offline-first balance caching, biometric authentication (fingerprint / FaceID), instant payment confirmation notifications, and a responsive merchant point-of-sale catalog.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Redux Toolkit', 'Node.js', 'Express', 'SQLite'],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Offline Sync Speed', value: '<2s' },
      { label: 'App Bundle Size', value: '14.2MB' }
    ],
    features: [
      'Biometric authentication support via Native device keychains',
      'Local SQLite storage permitting offline product catalogue browsing and draft sales',
      'Dynamic QR code generation for quick merchant-to-buyer transactions',
      'Optimized React Native vector icons and native gesture handlers for smooth tactile response'
    ],
    architectureNotes: 'State managed via Redux Toolkit with RTK Query for automated query caching and background polling. Native bridge optimization minimizing thread blocking.',
    mockupType: 'mobile-app',
    accentColor: '#8b5cf6',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'enugu-logistics-dispatch-api',
    title: 'Awgu & Enugu Dispatch Engine',
    tagline: 'Real-Time Delivery Order Dispatch & Rider Routing API',
    category: 'backend',
    categoryLabel: 'Backend API & WebSockets',
    role: 'Backend Architect',
    year: '2023 - 2024',
    description: 'A robust, scalable backend architecture powering delivery dispatchers, parcel tracking, and live driver coordinate updates across towns in Enugu State.',
    longDescription: 'Built with Node.js and Express to handle concurrent real-time order requests from delivery dispatchers and courier riders. Implements spatial distance calculations for closest driver assignment, webhook callbacks for delivery confirmations, and rate-limited endpoints.',
    technologies: ['Node.js', 'Express', 'Socket.IO', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: [
      { label: 'Concurrent WebSockets', value: '1,500+' },
      { label: 'Dispatch Latency', value: '<80ms' },
      { label: 'Database Queries/sec', value: '2,200' }
    ],
    features: [
      'Socket.IO room-based event broadcasting for live rider location updates',
      'Redis cache caching active delivery trips and driver availability flags',
      'PostgreSQL database with indexed geospatial coordinates and foreign-key constraints',
      'Comprehensive error handling middleware and automated crash recovery'
    ],
    architectureNotes: 'Distributed architectural design separating stateless Express worker instances from Redis pub/sub brokers and pooled relational PostgreSQL connections.',
    mockupType: 'api-terminal',
    accentColor: '#f59e0b',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'esut-companion-hub',
    title: 'ESUT CS Academic Archive & Network',
    tagline: 'Collaborative Study Repository & Departmental Hub for CS Students',
    category: 'web',
    categoryLabel: 'Campus Web Application',
    role: 'Lead Project Maintainer',
    organization: 'ESUT Agbani (Computer Science)',
    year: '2023',
    description: 'A collaborative academic archive platform created to provide ESUT Agbani Computer Science students with verified course outlines, coding lab solutions, and past questions.',
    longDescription: 'Developed to eliminate the fragmentation of study materials across unofficial WhatsApp groups. The application provides indexed search for lecture slides, past exams, coding assignments, and departmental announcements, with an active community discussion board.',
    technologies: ['React', 'Express', 'Node.js', 'Tailwind CSS', 'MongoDB', 'AWS S3'],
    metrics: [
      { label: 'Active CS Users', value: '800+' },
      { label: 'Archived Documents', value: '450+' },
      { label: 'Daily Downloads', value: '350+' }
    ],
    features: [
      'Full-text search by course code (e.g. CSC 201, CSC 311, CSC 413)',
      'Responsive PDF preview directly within the browser without external readers',
      'Peer review and ratings for uploaded study summaries and coding tutorials',
      'Mobile-optimized touch layout tailored for students accessing on low-bandwidth networks'
    ],
    architectureNotes: 'Express backend with streaming file delivery buffers and CDN-cached static documents. MongoDB text index scoring ensuring sub-50ms search query response.',
    mockupType: 'web-dashboard',
    accentColor: '#06b6d4',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'enterprise-auth-gateway',
    title: 'Robust Core Auth & Gateway Service',
    tagline: 'High-Concurrency Token Gateway & Security Middleware for Node.js',
    category: 'backend',
    categoryLabel: 'Backend Infrastructure',
    role: 'Security & Backend Engineer',
    year: '2024',
    description: 'Production-ready reusable Node.js/Express authentication microservice featuring brute-force lockout, dual-token rotation, and encrypted payloads.',
    longDescription: 'An enterprise microservice blueprint utilized across multiple Ocean Technologies client systems. Provides ironclad security layers including token blacklisting with Redis TTL, IP-based sliding window rate limiting, and audit trail telemetry.',
    technologies: ['Node.js', 'Express', 'Redis', 'PostgreSQL', 'Argon2', 'JWT', 'Helmet'],
    metrics: [
      { label: 'Auth Throughput', value: '3,000 req/s' },
      { label: 'Brute-force Block', value: '100%' },
      { label: 'Audit Log Lag', value: '0ms' }
    ],
    features: [
      'Argon2 password hashing with tuned memory and parallelism cost parameters',
      'Sliding window rate-limiting middleware preventing credential stuffing attacks',
      'Automated refresh token rotation with family invalidation on token reuse detection',
      'Comprehensive security headers (CSP, HSTS, X-Content-Type-Options) via Helmet'
    ],
    architectureNotes: 'Zero-downtime architecture tested against OWASP Top 10 vulnerabilities, designed for plug-and-play inclusion into any Express or microservice ecosystem.',
    mockupType: 'api-terminal',
    accentColor: '#ec4899',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'ocean-technologies',
    role: 'Founder & Chief Executive Officer (CEO)',
    company: 'Ocean Technologies Awgu',
    location: 'Awgu, Enugu State, Nigeria',
    period: '2023 — Present',
    current: true,
    type: 'Executive',
    description: 'Leading an innovative software engineering firm in Awgu providing high-end website development, custom mobile applications, enterprise software architectures, and technology advisory for commercial brands, startups, and institutions.',
    highlights: [
      'Directed architecture and delivery of over 15 commercial web and mobile software projects from inception to production deployment.',
      'Established engineering standards for React, Node.js, and Express codebases, ensuring clean architecture, modular testability, and database efficiency.',
      'Conducted high-stakes technical consultations with business owners, translating complex commercial requirements into scalable software roadmaps.',
      'Mentored junior engineers and interns on agile development workflows, version control, and client communication.'
    ],
    skills: ['Executive Leadership', 'System Architecture', 'React', 'Node.js', 'Express', 'React Native', 'PostgreSQL', 'Client Management']
  },
  {
    id: 'ciita-awgu',
    role: 'Software Developer & Technical Trainer',
    company: 'Catholic Institute of Information and Technology (CIITA)',
    location: 'Awgu, Enugu State, Nigeria',
    period: '2023 — 2024',
    current: false,
    type: 'Professional',
    description: 'Served as an active software developer and technical instructor at CIITA, building institutional web software, maintaining computing systems, and training student cohorts in modern programming.',
    highlights: [
      'Engineered the CIITA Academic & Training Portal, eliminating manual paper enrollments and speeding up student grading by 85%.',
      'Designed and delivered comprehensive training curricula covering Web Development fundamentals (HTML, CSS, JavaScript, React, Node.js backend concepts).',
      'Maintained institutional server uptime, database backups, and network integrity for computer science laboratory clusters.',
      'Supervised capstone student software projects, fostering best practices in modular programming and clean code.'
    ],
    skills: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Technical Instruction', 'Database Design', 'System Administration']
  },
  {
    id: 'esut-agbani',
    role: 'B.Sc Computer Science Scholar',
    company: 'Enugu State University of Science and Technology (ESUT)',
    location: 'Agbani, Enugu State, Nigeria',
    period: '2024 — Present',
    current: true,
    type: 'Academic',
    description: 'Enrolled in 2024, pursuing a Bachelor of Science degree in Computer Science with focus on software engineering, algorithm analysis, distributed database architectures, and systems design.',
    highlights: [
      'Deep academic grounding in Object-Oriented Programming, Data Structures & Algorithms, Operating Systems, Database Management Systems, and Automata Theory.',
      'Developed the ESUT CS Academic Archive & Network portal to facilitate collaborative academic resource sharing for undergraduate students.',
      'Active leader in campus tech discussions, peer study cohorts, and student software hackathons.',
      'Consistently bridging theoretical academic concepts with real-world enterprise engineering practices at Ocean Technologies.'
    ],
    skills: ['Computer Science', 'Algorithms', 'Data Structures', 'Database Systems', 'Networking', 'Software Engineering']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'Crafting responsive, high-fidelity user experiences with optimal rendering budgets and intuitive interactions.',
    skills: [
      { name: 'React', level: 'Advanced / Core', experience: 'Since 2023', icon: 'Code' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', experience: 'Since 2023', icon: 'FileCode' },
      { name: 'TypeScript', level: 'Proficient', experience: 'Core Stack', icon: 'FileText' },
      { name: 'Tailwind CSS', level: 'Advanced', experience: 'Since 2023', icon: 'Palette' },
      { name: 'HTML5 & Modern CSS3', level: 'Expert', experience: 'Since 2023', icon: 'Layout' },
      { name: 'Vite & Next.js', level: 'Proficient', experience: 'Modern Stack', icon: 'Zap' },
      { name: 'Responsive UI/UX', level: 'Advanced', experience: 'Since 2023', icon: 'Monitor' },
      { name: 'State Management (Redux/Zustand)', level: 'Proficient', experience: 'Core Stack', icon: 'Layers' }
    ]
  },
  {
    title: 'Backend & API Architecture',
    description: 'Building robust, scalable server-side systems, RESTful services, and secure communication pipelines.',
    skills: [
      { name: 'Node.js', level: 'Advanced / Core', experience: 'Since 2023', icon: 'Server' },
      { name: 'Express.js', level: 'Advanced / Core', experience: 'Since 2023', icon: 'Cpu' },
      { name: 'RESTful API Design', level: 'Advanced', experience: 'Since 2023', icon: 'Network' },
      { name: 'Authentication (JWT, Bcrypt)', level: 'Advanced', experience: 'Since 2023', icon: 'Shield' },
      { name: 'WebSockets (Socket.IO)', level: 'Proficient', experience: 'Real-Time', icon: 'Radio' },
      { name: 'API Security & Rate Limiting', level: 'Proficient', experience: 'Security Layer', icon: 'Lock' },
      { name: 'Middleware Architecture', level: 'Advanced', experience: 'Since 2023', icon: 'GitMerge' },
      { name: 'Microservices & Modular Services', level: 'Proficient', experience: 'Architecture', icon: 'Box' }
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'Delivering performant cross-platform mobile experiences for Android and iOS using native bridges.',
    skills: [
      { name: 'React Native', level: 'Advanced / Core', experience: 'Cross-Platform', icon: 'Smartphone' },
      { name: 'Expo Framework', level: 'Advanced', experience: 'Production', icon: 'Zap' },
      { name: 'Mobile Navigation (React Navigation)', level: 'Advanced', experience: 'Native UX', icon: 'Compass' },
      { name: 'Offline Storage & SQLite', level: 'Proficient', experience: 'Offline-First', icon: 'Database' },
      { name: 'Push Notifications & Background Tasks', level: 'Proficient', experience: 'Event Driven', icon: 'Bell' },
      { name: 'Native Device APIs (Camera, Biometrics)', level: 'Proficient', experience: 'Hardware', icon: 'Fingerprint' }
    ]
  },
  {
    title: 'Databases & Infrastructure',
    description: 'Designing resilient schemas, indexing strategies, and reliable persistence layers for high concurrency.',
    skills: [
      { name: 'MongoDB & Mongoose', level: 'Advanced', experience: 'Since 2023', icon: 'Database' },
      { name: 'PostgreSQL', level: 'Proficient', experience: 'Relational DB', icon: 'Table' },
      { name: 'MySQL', level: 'Proficient', experience: 'Relational DB', icon: 'Database' },
      { name: 'Redis Caching', level: 'Intermediate', experience: 'High Speed', icon: 'HardDrive' },
      { name: 'Firebase & Firestore', level: 'Proficient', experience: 'Cloud DB', icon: 'Flame' },
      { name: 'Git & GitHub Collaboration', level: 'Advanced', experience: 'Since 2023', icon: 'GitBranch' },
      { name: 'Linux Server Basics & Deployment', level: 'Proficient', experience: 'Render/Ubuntu', icon: 'Terminal' }
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Success is an exceptional software engineer. When we needed high-performance web systems and scalable backends, he delivered with outstanding speed and architectural precision. His React and Express mastery is top-tier.',
    name: 'Bob',
    role: 'Technology Partner & Client',
    organization: 'Tech Ventures & Digital Solutions'
  },
  {
    quote: 'Okechineke Success represents the highest standard of technical dedication. During his time building systems and mentoring students at CIITA Awgu, his programming depth and reliability made an indelible impact.',
    name: 'Sir Godwin',
    role: 'Academic Director & Senior Mentor',
    organization: 'Catholic Institute of Information and Technology (CIITA), Awgu'
  },
  {
    quote: 'Collaborating with Success and Ocean Technologies is effortless. He brings clean design architecture to life with fluid 60fps React Native mobile apps and robust Node.js APIs that never fail under traffic.',
    name: 'SM Creative',
    role: 'Creative Director & Brand Studio Lead',
    organization: 'SM Creative Studio'
  }
];
