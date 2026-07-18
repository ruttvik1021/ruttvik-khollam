export const siteConfig = {
  name: "Ruttvik Khollam",
  role: "Senior Software Engineer",
  tagline: "Full Stack Web Developer",
  summary:
    "I build fast, accessible, enterprise-grade web applications with React, Next.js, and TypeScript — from pixel-perfect front-ends to robust Node.js back-ends.",
  location: "Pune, Maharashtra, India",
  email: "rkhollam21@gmail.com",
  phone: "+919665307459",
  phoneDisplay: "+91 96653 07459",
  resumeUrl: "/Ruttvik Khollam - Senior Software Engineer.pdf",
  resumeFileName: "Ruttvik_Khollam_Resume.pdf",
  github: "https://www.github.com/ruttvik1021",
  linkedin: "https://www.linkedin.com/in/ruttvik1021",
  url: "https://ruttvik-khollam.vercel.app",
};

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "96+", label: "Lighthouse performance" },
  { value: "20+", label: "Technologies used" },
];

export const highlightedSkills = [
  { name: "Next.js", icon: "/nextjs.jpg" },
  { name: "TypeScript", icon: "/typescript.png" },
  { name: "TanStack", icon: "/tanstack.png" },
  { name: "Redux", icon: "/redux.png" },
  { name: "Git", icon: "/git.png" },
  { name: "Angular", icon: "/angular.png" },
  { name: "HTML/CSS", icon: "/html.png" },
  { name: "Tailwind CSS", icon: "/tailwind.png" },
  { name: "NestJS", icon: "/nestjs.png" },
  { name: "MongoDB", icon: "/mongo.png" },
];

export const skillCategories: { title: string; icon: string; items: string[] }[] = [
  {
    title: "Languages & Frameworks",
    icon: "code",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Express.js",
    ],
  },
  {
    title: "State & Data Management",
    icon: "layers",
    items: ["Redux", "TanStack Query", "Context API", "GraphQL", "Zustand"],
  },
  {
    title: "Performance & Dev Tools",
    icon: "zap",
    items: [
      "Lighthouse",
      "Core Web Vitals",
      "Webpack Analyzer",
      "Vite",
      "React Profiler",
      "Bundle Splitting",
    ],
  },
  {
    title: "Databases & Backend",
    icon: "database",
    items: ["MongoDB", "PostgreSQL", "Mongoose", "RESTful APIs", "Prisma", "Redis"],
  },
  {
    title: "Tools & Platforms",
    icon: "wrench",
    items: ["Git", "GitHub", "Vercel", "Docker", "Postman", "CI/CD (GitHub Actions)"],
  },
  {
    title: "AI",
    icon: "sparkles",
    items: ["Gemini GenKit AI"],
  },
  {
    title: "Security",
    icon: "shield",
    items: ["HTTPS", "JWT", "CSP", "Helmet.js", "XSS/CSRF Protection", "OWASP Top 10"],
  },
  {
    title: "Real-Time Tech",
    icon: "server",
    items: ["WebSockets", "Socket.IO", "Server-Sent Events", "Polling Mechanisms"],
  },
  {
    title: "Accessibility (A11Y)",
    icon: "eye",
    items: [
      "Semantic HTML",
      "ARIA",
      "Keyboard Navigation",
      "Screen Reader Testing",
      "axe-core",
    ],
  },
  {
    title: "Development Practices",
    icon: "rocket",
    items: [
      "Performance Optimization",
      "Modular Architecture",
      "Clean Code",
      "Code Review",
      "Testing (Jest/RTL)",
      "CI/CD",
      "Agile Development",
    ],
  },
];

export type Achievement = { highlight: string; rest: string };

export const experience: {
  period: string;
  role: string;
  company: string;
  achievements: Achievement[];
}[] = [
  {
    period: "2022 — Present",
    role: "Senior Software Engineer",
    company: "Invimatic Technologies",
    achievements: [
      {
        highlight: "Led front-end development",
        rest: " for various enterprise-grade applications using React, Next.js, and TypeScript, reducing development cycles through modular architecture and reusable components.",
      },
      {
        highlight: "Optimized application performance",
        rest: " by implementing component-level lazy loading and srcSet-based image delivery, improving page speed — Lighthouse score: 96+.",
      },
      {
        highlight: "Reduced bundle size",
        rest: " through dynamic imports and route-based code splitting, resulting in faster first-contentful paint (FCP) and improved user experience on low-end devices.",
      },
      {
        highlight: "Ensured WCAG 2.1 accessibility compliance",
        rest: " using semantic HTML5, ARIA landmarks, and keyboard navigation support — boosted Lighthouse accessibility score from 71 to 95+.",
      },
      {
        highlight: "Integrated multiple third-party APIs",
        rest: " (Stripe, EaseBuzz, analytics providers) to streamline payments, authentication, and event tracking.",
      },
      {
        highlight: "Implemented and enforced clean code practices",
        rest: " using ESLint, Prettier, and Husky for pre-commit checks, reducing merge issues and maintaining team-wide coding standards.",
      },
      {
        highlight: "Worked on secure payment flows",
        rest: " and session handling, adhering to basic security standards like HTTPS, token storage, and XSS protection.",
      },
      {
        highlight: "Explored WebSockets and SSE",
        rest: " in internal tooling and PoCs to enable real-time chat and live data syncing features.",
      },
      {
        highlight: "Built a polling mechanism",
        rest: " to monitor long-running Python-based backend tasks, ensuring seamless UX during async content generation.",
      },
      {
        highlight: "Mentored junior developers",
        rest: ", improving onboarding efficiency and team contribution.",
      },
      {
        highlight: "Collaborated with cross-functional teams",
        rest: " (design, product, backend) to implement high-ROI features.",
      },
    ],
  },
];

export const projects = [
  {
    title: "AkiraFlow: Expense Tracker",
    description:
      "A full-featured expense tracking app built with Next.js, server actions, and MongoDB. Effortlessly track your spending, set up budgets, and get insightful visualizations of your financial patterns.",
    note: "Try it out for free — at least until my free-tier database reaches its limit! 😉",
    image: "/akiraFlow.png",
    tags: ["Next.js", "Server Actions", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://expense-tracker-ashy-beta.vercel.app",
  },
];
