const PersonalProjects = [
  {
    id: "mini-jira",
    title: "Mini-Jira | Enterprise Project Management SaaS",
    description:
      "Engineered a production-grade, highly modular SaaS project management platform from scratch, focusing on scalability and high-performance team collaboration. Built with Next.js 16 (App Router) and TypeScript, following strict Atomic Design principles to ensure enterprise-level code maintainability",
    category: "Personal",
    achievements: [
      {
        title: "Architecture & Design",
        description:
          "Engineered a highly scalable SaaS platform using Next.js 16 (App Router) and Atomic Design. Architected a decoupled system that ensures rapid feature iteration and long-term code maintainability",
      },
      {
        title: "Media Processing Pipeline",
        description:
          "Built a custom in-browser media pipeline featuring FFmpeg for server-side-equivalent video compression and react-easy-crop for image optimization, significantly improving performance by offloading complex processing from the backend",
      },
      {
        title: "Real-time Collaboration & Logic",
        description:
          "Integrated Firebase Realtime DB for low-latency synchronization and Stripe for subscription management. Implemented robust Role-Based Access Control (RBAC) using Supabase RLS policies to ensure enterprise-level security",
      },
      {
        title: "Performance & UI/UX",
        description:
          "Developed a high-fidelity Kanban engine via @dnd-kit and a deeply customized Slate.js rich-text editor. Enhanced user experience with hardware-accelerated animations using Framer Motion, achieving a seamless, zero-layout-shift interface",
      },
      {
        title: "Quality Assurance & Type Safety",
        description:
          "Enforced strict TypeScript architecture with complex interface inheritance. Validated mission-critical logic via a comprehensive unit testing suite using Jest and React Testing Library, ensuring 99.9% reliability for forms and auth workflows",
      },
    ],
    myRole:
      "Owned the full-cycle development of a sophisticated SaaS application, bridging advanced client-side media processing with complex real-time collaborative state management to deliver a professional-grade project management experience",
    image: [""],
    techStack: [
      "Next.js",
      "TypeScript",
      "JavaScript(ES6)",
      "Redux Toolkit",
      "Firebase (Realtime DB/Auth)",
      "Supabase",
      "Stripe",
      "FFmpeg",
      "Slate.js",
      "react-easy-crop",
      "React Hook Form",
      "Yup",
      "Tailwind CSS",
      "Framer Motion",
      "Jest",
      "RTL",
      "Git",
    ],
    liveUrl: {
      title: "next-mini-jira.netlify.app",
      link: "https://next-mini-jira.netlify.app",
    },
    githubUrl: {
      title: "github.com/omidKianfar/next-mini-jira.git",
      link: "https://github.com/omidKianfar/next-mini-jira.git",
    },
  },
  {
    id: "google-calendar",
    title: "Google Calendar Task Manager | SaaS",
    description:
      "A high-performance SaaS scheduling interface featuring real-time event management, secure Google Calendar integration, and a modular, scalable architecture",
    category: "Personal",
    achievements: [
      {
        title: "Strategic Landing Experience",
        description:
          "Engineered a high-conversion landing page featuring a Sign-in with Google flow, leveraging OAuth 2.0 to authenticate users and securely authorize access to their Google Calendar data",
      },
      {
        title: "Dynamic Calendar Engine",
        description:
          "Engineered a high-performance scheduling interface using FullCalendar and Day.js, enabling real-time CRUD operations for calendar events with complex date manipulations",
      },
      {
        title: "Scalable & Modular UI",
        description:
          "Built a modular front-end architecture leveraging Atomic Design principles, utilizing React Hook Form with Yup for data validation, and implementing Suspense/Lazy-loading to optimize performance for heavy calendar components",
      },
      {
        title: "Quality Assurance",
        description:
          "Developed a robust testing suite using Jest and React Testing Library, ensuring high application reliability for critical user flows including event creation, editing, and form validation schemas",
      },
    ],
    myRole:
      "Spearheaded the development of a complex scheduling dashboard, bridging raw Google Calendar API data with a seamless user-facing interface, while ensuring data integrity and optimizing the application for real-time calendar synchronization",
    image: [""],
    techStack: [
      "Next.js",
      "TypeScript",
      "Javascript (ES6+)",
      "Google OAuth 2.0",
      "React Testing Library",
      "Jest",
      "React Hook Form",
      "Yup",
      "Tailwind CSS",
      "Lottie React",
      "Responsive UI",
      "REST APIs",
      "Full Calendar",
      "Notistack",
      "Git",
    ],
    liveUrl: null,
    githubUrl: {
      title: "github.com/omidKianfar/next-google-calendar-app",
      link: "https://github.com/omidKianfar/next-google-calendar-app",
    },
  },
];

const SelectCompaniesProjects = [
  {
    id: "Infuuse",
    title:
      "Infuuse | B2B Business Automation SaaS (Enterprise Communication Platform)",
    description:
      "Infuuse is a comprehensive, multi-tenant B2B SaaS platform designed to streamline communication and business automation for agencies and their clients. Acting as the lead front-end developer, I architected a complex, high-concurrency dashboard that centralizes multi-channel communications—including real-time chat, Twilio-integrated voice/video calling, and unified inbox management",
    category: "Company",
    achievements: [
      {
        title: "Architecture & Scalability",
        description:
          "Led the front-end development of a multi-tenant B2B SaaS platform using Next.js and GraphQL. Engineered a modular UI system based on Atomic Design principles to ensure high reusability across the core application, Admin Panel, and landing pages",
      },
      {
        title: "Access Control & Security",
        description:
          "Designed a robust Hierarchical Route Protection System, implementing custom AuthGuard and RoleGuard patterns to manage complex permissions across Owners, Agencies, and Members",
      },
      {
        title: "Complex Integrations & Workflow",
        description:
          "Architected seamless real-time communication modules by integrating Twilio (Voice, SMS, Video) and Google OAuth 2.0. Developed a unified message inbox synchronizing live chat, Twilio messages, and Gmail",
      },
      {
        title: "Advanced Data & Form Handling",
        description:
          "Managed high-frequency data updates using React Query and Redux Toolkit/Valtio. Developed complex forms using React Hook Form with Yup schema validation",
      },
      {
        title: "Rich Text & Media",
        description:
          "Integrated a custom Slate.js editor and media processing pipelines (WaveSurfer, Lightbox) to enhance user productivity",
      },
      {
        title: "Performance & Testing",
        description:
          "Optimized performance via Lazy Loading and Suspense. Ensured code reliability using Jest and React Testing Library",
      },
      {
        title: "Team Collaboration & Delivery",
        description:
          "Collaborated in an agile cross-functional team, bridging complex backend GraphQL requirements with intuitive UI workflows and maintaining high standards in design-to-code implementation",
      },
    ],
    myRole: "Front-end Architect & Lead Developer",
    image: null,
    techStack: [
      "Next.js",
      "TypeScript",
      "GraphQL (Codegen)",
      "React Query",
      "Redux Toolkit",
      "Valtio",
      "MUI",
      "Styled Components",
      "Tailwind CSS",
      "React Hook Form",
      "Yup",
      "Twilio SDK",
      "Slate.js",
      "Full Calendar",
      "Stripe",
      "Firebase",
      "Google APIs",
      "Lottie React",
      "Notistack",
      "Git",
    ],
    nda: "Due to strict NDA agreements, specific business logic and proprietary architectural details are intentionally omitted.",
  },
  {
    id: "octobit",
    title: "Octobit | Enterprise EdTech Scenario & Assessment SaaS",
    description:
      "An enterprise-grade EdTech SaaS platform for constructing and delivering complex, branching educational scenarios with real-time biometric assessment",
    category: "Company",
    achievements: [
      {
        title: "Architecture & Visual Engine",
        description:
          ": Led the front-end architecture for a Canadian EdTech SaaS. Built a complex, rule-based branching engine where users navigate through infinite paths (Question/Blog/Transition/Conversation) based on dynamic assessment metrics",
      },
      {
        title: "Visual Scenario Construction",
        description:
          "Engineered a high-interaction Node-Graph Editor using React Flow, allowing admins to visually configure complex non-linear scenarios. Implemented an automated integrity-check system that prevents publishing scenarios until all conversational logic and nodes are fully validated",
      },
      {
        title: "Biometric Assessment",
        description:
          "Integrated AWS Amplify (Predictions) to analyze user audio input in real-time, detecting vocal tone and stress levels as a primary metric for assessment scoring",
      },
      {
        title: "Deep State & Logic Orchestration",
        description:
          "Managed highly complex state dependencies for multi-role dashboards (Team Owner, Member, Admin) using Valtio and Redux Toolkit. Implemented a rich-text authoring system using Slate.js with custom node-views for integrated media (images/video) uploading",
      },
      {
        title: "Dynamic Ecosystem & Metrics",
        description:
          "Developed a fully dynamic landing page with a CMS-like admin panel for content and styling updates. Visualized user progress through complex data-driven charts using Chart.js and Recharts, with RHF (React Hook Form) controllers for managing multi-metric assessment configurations",
      },
      {
        title: "Enterprise SaaS Features",
        description:
          "Built a multi-tenant billing system with Stripe (monthly/yearly subscriptions and custom discounts), and real-time notification infrastructure via WebSockets. Handled complex team management including member invitations, role-based access control (RBAC), and individual progress monitoring",
      },
      {
        title: "Cross-Functional Collaboration",
        description:
          "Worked closely with product designers and backend engineers to translate complex educational scenarios into a seamless front-end experience, ensuring technical feasibility of real-time audio and node-graph requirements",
      },
    ],
    myRole: "Front-end Architect & Lead Developer",
    image: null,
    techStack: [
      "Next.js",
      "TypeScript",
      "GraphQL (Codegen)",
      "React Query",
      "Redux Toolkit",
      "Valtio",
      "React Flow",
      "AWS Amplify",
      "MUI",
      "Emotion",
      "Slate.js",
      "React Hook Form",
      "Yup",
      "Stripe",
      "Firebase",
      "Chart.js",
      "Recharts",
      "Lottie React",
      "Notistack",
    ],
    nda: "Specific project architecture, proprietary conversational logic, and client-side implementation details are protected under NDA",
  },
];

export { PersonalProjects, SelectCompaniesProjects };
