/**
 * Single source of truth for all public site content.
 * Every claim here is traceable to public evidence:
 * - github.com/ajfero (repositories, READMEs, commit history)
 * - linkedin.com/in/ajfero
 * All unverified claims (exact degree titles, employment dates,
 * client outcomes, metrics) are intentionally omitted.
 */

export const person = {
  name: "Anthony J. Fernandez G.",
  shortName: "Anthony Fernandez",
  brand: "AJFero",
  role: "Electronic Engineer · AI Software Engineer · IT Consultant",
  location: "Gold Coast, Queensland, Australia",
  email: "ing.ajfernandez@gmail.com",
  languages: ["English", "Spanish"],
  avatar: "/images/anthony-fernandez.png",
  website: "https://ajfero.com",
};

export const social = [
  { name: "GitHub", href: "https://github.com/ajfero" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ajfero" },
  { name: "Email", href: `mailto:${person.email}` },
];

export const services = [
  {
    title: "AI Integration & Workflow Automation",
    description:
      "Embedding AI into company workflows — LLM-powered features, AI chatbots and assistants, and automation of repetitive business processes using modern AI APIs and agent tooling.",
    tags: ["LLM APIs", "AI agents", "Chatbots", "Workflow automation"],
  },
  {
    title: "Custom Web Applications",
    description:
      "Full-stack web applications built with React, Angular, Next.js and Node.js — from dashboards to complete platforms.",
    tags: ["React", "Angular", "Next.js", "Node.js"],
  },
  {
    title: "Backend & REST APIs",
    description:
      "Well-structured REST APIs with Express, Hono or Laravel, including authentication, authorization and clean data layers.",
    tags: ["Express", "Hono", "Laravel", "JWT"],
  },
  {
    title: "Database-Backed Solutions",
    description:
      "Schema design, migrations and integrations across PostgreSQL, MySQL, SQLite and Supabase, with ORMs such as Sequelize.",
    tags: ["PostgreSQL", "MySQL", "Supabase", "Sequelize"],
  },
  {
    title: "Systems Integration & Automation",
    description:
      "Connecting existing tools and services, containerising with Docker and automating repetitive workflows.",
    tags: ["Docker", "Linux", "Git", "CI"],
  },
  {
    title: "Technical Consulting",
    description:
      "Practical advice on architecture, technology selection and code quality — in English or Spanish.",
    tags: ["Architecture", "Code review", "Bilingual"],
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, dependency upgrades, bug fixing and support for existing software products.",
    tags: ["Upgrades", "Debugging", "Support"],
  },
];

export type Project = {
  slug: string;
  title: string;
  kind: "Professional project" | "Academic team project" | "Personal project";
  summary: string;
  problem: string;
  built: string[];
  stack: string[];
  repo: string;
  repoSecondary?: { label: string; href: string };
  credit?: string;
};

export const projects: Project[] = [
  {
    slug: "bigshoessy",
    title: "BigShoesSy",
    kind: "Professional project",
    summary:
      "A full e-commerce platform for a footwear store: Angular 14 storefront backed by a Node.js/Express REST API.",
    problem:
      "An online store needed a complete customer experience — product catalogue, carts, user profiles and messaging — backed by a secure, structured API.",
    built: [
      "Angular 14 frontend with product catalogue, carousels, offers, user profiles, carts and contact views",
      "Node.js/Express REST API structured around Clean Architecture principles",
      "JWT authentication and session handling",
      "MySQL data layer managed through Sequelize migrations and seeders",
      "Docker images for reproducible builds and deployment",
    ],
    stack: ["Angular 14", "Node.js", "Express", "Sequelize", "MySQL", "JWT", "Docker"],
    repo: "https://github.com/ajfero/bigshoessy",
    repoSecondary: {
      label: "Backend repository",
      href: "https://github.com/ajfero/bigshoessy-backend",
    },
  },
  {
    slug: "chatbox-bookings",
    title: "Chatbox Bookings",
    kind: "Academic team project",
    summary:
      "An appointment-booking chatbot dashboard built as a team project at Kaplan Business School (TECH1200).",
    problem:
      "Small businesses need a lightweight way to let customers schedule, reschedule and manage bookings without a heavyweight booking system.",
    built: [
      "Responsive booking dashboard with an embedded Jotform AI agent",
      "Live booking counter persisted with localStorage",
      "Cross-tab count synchronisation via the storage event",
      "Counter auto-increment on trusted Jotform postMessage booking events",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Jotform AI"],
    repo: "https://github.com/ajfero/kbs-tech1220-a2",
    credit:
      "Team project — Anthony Fernandez (Software Engineer / Builder), with Mimi Zuo (Product Manager), Danilo Caetano (AI Engineer) and Kristian Mota (Speaker/Presenter).",
  },
  {
    slug: "ajfero-laravel",
    title: "AJFero on Laravel",
    kind: "Personal project",
    summary:
      "An earlier iteration of the AJFero personal site, built with PHP and Laravel and deployed on Vercel.",
    problem:
      "A hands-on exploration of the Laravel ecosystem, used as the personal-brand site before this portfolio.",
    built: [
      "Laravel application structure with Blade templating",
      "Deployment of a PHP application to Vercel",
    ],
    stack: ["PHP", "Laravel", "Vercel"],
    repo: "https://github.com/ajfero/ajfero-laravel",
  },
];

export const experience = [
  {
    role: "Independent IT Consultant & AI Software Engineer",
    org: "AJFero — freelance",
    detail:
      "AI integrations into company workflows, custom web applications, REST APIs, database-backed solutions, systems integration and technical consulting for clients, operating under an Australian ABN.",
  },
  {
    role: "Software Development Projects",
    org: "Selected engagements",
    detail:
      "Full-stack e-commerce delivery (BigShoesSy: Angular, Express, MySQL, Docker) and collaborative product work across frontend, backend and deployment.",
  },
  {
    role: "Electronic Engineering Work",
    org: "Academic & community projects",
    detail:
      "Academic prototype for automating traffic-curb painting, a solar-powered street-lighting community project, and a hardware internship building a remote-controlled vehicle with an Android application.",
  },
];

export const education = [
  {
    name: "Kaplan Business School, Australia",
    detail:
      "Postgraduate studies — coursework includes TECH1200 Fundamentals of Programming and current AI/ML subjects.",
  },
  {
    name: "Instituto Universitario Politécnico Santiago Mariño",
    detail: "Electronic Engineering, 2010–2017.",
  },
];

export const skills = [
  {
    group: "AI & Automation",
    items: ["LLM APIs", "AI agents", "AI chatbots", "Prompt engineering", "Workflow automation"],
  },
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "SQL", "MATLAB"],
  },
  {
    group: "Frontend",
    items: ["React", "Angular", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "Express", "Hono", "Laravel", "REST APIs", "JWT auth"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "SQLite", "Supabase", "Sequelize"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "Linux", "Git", "Vercel"],
  },
  {
    group: "Hardware & Engineering",
    items: ["Arduino", "Electronics prototyping", "Android integration"],
  },
];
