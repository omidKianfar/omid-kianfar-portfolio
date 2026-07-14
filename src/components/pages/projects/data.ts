const PersonalProjects = [
  {
    id: "mini-jira",
    title: "Mini-Jira | Enterprise Project Management SaaS",
    description:
      "Engineered a production-grade, highly modular SaaS project management platform from scratch, focusing on scalability and high-performance team collaboration. Built with Next.js 16 (App Router) and TypeScript, following strict Atomic Design principles to ensure enterprise-level code maintainability.",
    category: "Personal",
    achievements: [
      {
        title: "Architecture",
        description:
          "Engineered a scalable SaaS using Next.js 16 (App Router) and Atomic Design for modular, maintainable code.",
      },
      {
        title: "State Management",
        description:
          "Managed complex global state (tasks, chats, users, filters) with Redux Toolkit, synced in real-time with Firebase Firestore listeners.",
      },
      {
        title: "Media Pipeline",
        description:
          "Built a custom in-browser video compression (FFmpeg WASM) and image cropping/optimization pipeline (react-easy-crop), offloading heavy processing from the backend.",
      },
      {
        title: "Support & Communication Hub",
        description:
          "Built a real-time support chat (Firestore) with a custom Slate.js editor, voice recording (RecordRTC), and audio waveform visualization (wavesurfer.js).",
      },
      {
        title: "SaaS Billing",
        description:
          "Implemented end-to-end Stripe subscription logic (monthly/yearly plans, trial mode) with API-driven success/failure flows.",
      },
      {
        title: "Access Control & Quality",
        description:
          "Built Role-Based Access Control via custom Auth/Role guards, and covered core components (forms, modals) with Jest and React Testing Library.",
      },
    ],
    myRole:
      "Owned the full-cycle development of a sophisticated SaaS application, bridging advanced client-side media processing with complex real-time collaborative state management to deliver a professional-grade project management experience.",
    images: [
      "/images/next-mini-jira/user-dashboard.png",
      "/images/next-mini-jira/Kanban.png",
      "/images/next-mini-jira/payment.png",
      "/images/next-mini-jira/admin-edit-support-message.png",
      "/images/next-mini-jira/upload-file.png",
      "/images/next-mini-jira/upload-voice.png",
      "/images/next-mini-jira/admin-dashboard.png",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "System Design",
      "Atomic Design",
      "Web Performance Optimization",
      "Clean Code",
      "Redux Toolkit (RTK)",
      "Firebase",
      "Firestore",
      "Supabase",
      "Ffmpeg",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Yup",
      "React Testing Library",
      "Jest",
      "Stripe",
      "Slate.js",
      "DND Kit",
      "Emoji Mart",
      "Wave Surfer",
      "Day.js",
      "Notistack",
      "Git",
    ],
    liveUrl: "https://next-mini-jira.netlify.app",
    githubUrl: "https://github.com/omidKianfar/next-mini-jira.git",
    nda: null,
  },
  {
    id: "google-calendar",
    title: "Google Calendar Task Manager | SaaS",
    description:
      "A high-performance SaaS scheduling interface featuring real-time event management, secure Google Calendar integration, and a modular, scalable architecture.",
    category: "Personal",
    achievements: [
      {
        title: "Authentication",
        description:
          "Engineered a secure Google OAuth 2.0 (Implicit Flow) integration with in-memory token storage to avoid cross-tab sync issues and client-side storage risks.",
      },
      {
        title: "Business Logic",
        description:
          "Centralized all calendar CRUD operations and state (loading/error) into a single custom hook (useGoogleCalendar), isolating logic from the UI.",
      },
      {
        title: "Scheduling Engine",
        description:
          "Built a FullCalendar-based interface for viewing, creating, editing, and deleting events, with modal-driven confirmation flows.",
      },
      {
        title: "Forms & Validation",
        description:
          ": Implemented React Hook Form with Yup, including cross-field validation (end time must follow start time).",
      },
      {
        title: "Quality Assurance",
        description:
          "Covered core logic and components (schema, modals, inputs) with Jest and React Testing Library unit tests.",
      },
      {
        title: "Performance",
        description:
          "Optimized load times via React Suspense and lazy-loading for modals and heavy components.",
      },
    ],
    myRole:
      "Spearheaded the development of a complex scheduling dashboard, bridging raw Google Calendar API data with a seamless user-facing interface, while ensuring data integrity and optimizing the application for real-time calendar synchronization.",
    images: [
      "/images/next-google-calendar/image.png",
      "/images/next-google-calendar/image-4.png",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "System Design",
      "Atomic Design",
      "Web Performance Optimization",
      "Clean Code",
      "Google OAuth",
      "Tailwind CSS",
      "React Testing Library",
      "Jest",
      "React Hook Form",
      "Yup",
      "FullCalendar",
      "REST APIs",
      "Day.js",
      "Momemt.js",
      "Lottie react",
      "Notistack",
      "Git",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/omidKianfar/next-google-calendar-app",
    nda: null,
  },
];

const SelectCompaniesProjects = [
  {
    id: "Infuuse",
    title:
      "Infuuse | B2B Business Automation SaaS (Enterprise Communication Platform)",
    description:
      "Infuuse is a comprehensive, multi-tenant B2B SaaS platform designed to streamline communication and business automation for agencies and their clients. Acting as the lead front-end developer, I architected a complex, high-concurrency dashboard that centralizes multi-channel communications—including real-time chat, Twilio-integrated voice/video calling, and unified inbox management.",
    category: "Company",
    achievements: [
      {
        title: "Scalability",
        description:
          "Sole front-end developer for a multi-tenant B2B platform (Next.js, GraphQL); owned all architecture and technical decisions end-to-end beyond the initial boilerplate. Built a modular UI system (Atomic Design).",
      },
      {
        title: "Unified Inbox",
        description:
          "Built a real-time unified inbox (WebSocket) merging live chat, Twilio SMS/calls/video, and Gmail messages into a single conversation view.",
      },
      {
        title: "Security & Integration",
        description:
          "Built hierarchical route protection and real-time communication modules (Twilio, Google OAuth).",
      },
      {
        title: "Billing & Reporting",
        description:
          "Implemented Stripe subscription billing (monthly/yearly/custom, with discount logic) and analytics dashboards (Chart.js) for tickets and calls across custom time ranges.",
      },
      {
        title: "Data Handling",
        description:
          "Managed high-frequency data updates (React Query, Valtio), drag-and-drop ticket management (react-beautiful-dnd), and complex form validation (RHF, Yup).",
      },
      {
        title: "Productivity",
        description:
          "Integrated a custom Slate.js editor and media pipelines to streamline user workflows.",
      },
    ],
    myRole: "Front-end Architect & Lead Developer",
    images: null,
    techStack: [
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "System Design",
      "Atomic Design",
      "Web Performance Optimization",
      "Clean Code",
      "GraphQL",
      "REST APIs",
      "React Query",
      "GraphQL Codegen",
      "Redux Toolkit (RTK)",
      "Valtio",
      "Google OAuth",
      "Firebase",
      "WebSocket",
      "React Hook Form",
      "Yup",
      "MUI (Material UI)",
      "Styled Component",
      "Stripe",
      "Twilio",
      "Slate.js",
      "Chart.js",
      "FullCalendar",
      "Emoji Mart",
      "Wave Surfer",
      "Day.js",
      "Momemt.js",
      "Notistack",
      "Axios",
      "Git",
      "Agile Methodologies",
      "Scrum",
      "Microsoft Azure",
      "Amazon Web Services (AWS)",
    ],
    liveUrl: null,
    githubUrl: null,
    nda: "Due to strict NDA agreements, specific business logic and proprietary architectural details are intentionally omitted.",
  },
  {
    id: "octobit",
    title: "Octobit | Enterprise EdTech Scenario & Assessment SaaS",
    description:
      "An enterprise-grade EdTech SaaS platform for constructing and delivering complex, branching educational scenarios with real-time biometric assessment.",
    category: "Company",
    achievements: [
      {
        title: "Dynamic Engine",
        description:
          "Owned front-end architecture for a rule-based branching engine, enabling unlimited user paths based on dynamic assessment metrics.",
      },
      {
        title: "Visual Editor",
        description:
          "Built an interactive Node-Graph Editor (React Flow) for visual scenario configuration with automated integrity checks.",
      },
      {
        title: "Admin & Access Control",
        description:
          "Built an admin panel for scenario/category creation with pre-publish validation and safe publish/unpublish handling, plus team management (member invites via email, role assignment, admin activation).",
      },
      {
        title: "Progress Visualization",
        description:
          "Engineered SVG-based, color-coded progress indicators tied to dynamic scoring, alongside Recharts dashboards for usage and payment tracking.",
      },
      {
        title: "Biometric & State",
        description:
          "Integrated AWS Amplify for real-time audio stress analysis; managed complex state across multi-role dashboards (Valtio, Redux Toolkit).",
      },
      {
        title: "Enterprise Features",
        description:
          "Built a multi-tenant billing system (Stripe), real-time notifications (WebSockets), and automated certificate generation on scenario completion.",
      },
    ],
    myRole: "Front-end Architect & Lead Developer",
    images: null,
    techStack: [
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "System Design",
      "Atomic Design",
      "Web Performance Optimization",
      "Clean Code",
      "GraphQL",
      "React Query",
      "GraphQL Codegen",
      "Valtio",
      "Firebase",
      "WebSocket",
      "React Hook Form",
      "Yup",
      "MUI (Material UI)",
      "Styled Component",
      "Stripe",
      "Slate.js",
      "AWS Amplify",
      "React Flow",
      "Chart.js",
      "Recharts.js",
      "Emoji Mart",
      "Lottie react",
      "Day.js",
      "Notistack",
      "Git",
      "Agile Methodologies",
      "Scrum",
      "Microsoft Azure",
      "Amazon Web Services (AWS)",
    ],
    liveUrl: null,
    githubUrl: null,
    nda: "Specific project architecture, proprietary conversational logic, and client-side implementation details are protected under NDA.",
  },
];

export { PersonalProjects, SelectCompaniesProjects };
