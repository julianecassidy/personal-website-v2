import type { Site, Project, Skill, Experience, SocialObject } from "./types";

export const SITE: Site = {
  website: "https://julianecassidy.com", // replace this with your deployed domain
  author: "Juliane Cassidy",
  desc: "Software engineer experienced in React, TypeScript, Python, and web design.",
  title: "Juliane Cassidy | Software Engineer",
  ogImage: "https://julianecassidy.com/headshot.jpg",
  lightAndDarkMode: true,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 141,
  height: 78,
};

export const LINKEDIN: SocialObject = {
  name: "LinkedIn",
  href: "https://www.linkedin.com/in/julianemcassidy/",
  linkTitle: `Juliane on LinkedIn`,
  active: true,
};

export const GITHUB: SocialObject = {
  name: "GitHub",
  href: "https://github.com/julianecassidy",
  linkTitle: `Juliane on GitHub`,
  active: true,
};

export const MEDIUM: SocialObject = {
  name: "Medium",
  href: "https://medium.com/@julianecassidy",
  linkTitle: `Juliane on Medium`,
  active: false,
};

const inco: Project = {
  title: "Interconnected Collective Website",
  description: `Built and maintained the React website for InCo, the volunteer organization behind the 
  Lesbians Who Tech Conference Bingo Game.`,
  languages: ["React", "JavaScript", "Bootstrap"],
  demoUrl: "https://incocollective.com",
  githubUrl: "https://github.com/LWTGames/InCo_Website",
  slug: "",
  images: ["inco.png"],
};

const randomRhythms: Project = {
  title: "Random Rhythms",
  description: `Explore local concerts in new genres. This full stack app relies
    on several APIs to collect concert data and provides random concert suggestions
    based on distance and price.`,
  languages: [
    "TypeScript",
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "PostgreSQL",
  ],
  demoUrl: "https://randomrhythms.netlify.app/",
  githubUrl: "https://github.com/julianecassidy/randomrhythms",
  slug: "",
  images: ["randomrhythms.png"],
};

const jobify: Project = {
  title: "Jobify",
  description: `A full stack, job finding website that lets users create
  accounts to view companies and available jobs. | Demo username: guest | Demo
  password: password`,
  languages: [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Bcrypt",
  ],
  demoUrl: "https://jobify.julianecassidy.com/",
  githubUrl: "https://github.com/julianecassidy/react-jobify",
  slug: "",
  images: ["jobify.png"],
};

const flitter: Project = {
  title: "Flitter",
  description: `A fully backend Twitter clone. Users can create a profile, post
    messages, like others messages, and follow other users.`,
  languages: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Jinja", "Bcrypt"],
  demoUrl: "https://flitter.julianecassidy.com/",
  githubUrl: "https://github.com/julianecassidy/flitter",
  slug: "",
  images: ["flitter.png"],
};

const webDesign: Project = {
  title: "Web Design",
  description: `Experienced in web development and SEO, I build websites for small
    businesses and individual portfolios. I can design, build, and write content
    for a fast and modern site.`,
  languages: [
    "TypeScript",
    "JavaScript",
    "React",
    "Astro",
    "WordPress",
    "CSS",
    "HTML",
    "Tailwind CSS",
    "Bootstrap",
    "Figma",
    "Sanity",
    "Strapi",
  ],
  demoUrl: "",
  githubUrl: "",
  slug: "",
  images: ["teach-fcs.png"],
};

export const PROJECTS: Array<Project> = [
  randomRhythms,
  inco,
  jobify,
  webDesign,
];

export const SKILLS: Array<Skill> = [
  { name: "TypeScript", svg: "typescript.svg", fill: "#283953" },
  { name: "JavaScript", svg: "javascript.svg", fill: "#d7bb2f" },
  { name: "React", svg: "react.svg", fill: "#222222" },
  { name: "React Native", svg: "react.svg", fill: "#cdeded" },
  { name: "Node.js", svg: "node.svg", fill: "#c1eab5" },
  { name: "Python", svg: "python.svg", fill: "#1d405d" },
  { name: "tRPC", svg: "trpc.svg", fill: "#222222" },
  { name: "TailwindCSS", svg: "tailwind.svg", fill: "#0f172a" },
  { name: "PostgreSQL", svg: "postgres.svg", fill: "#336791" },
  { name: "MongoDB", svg: "mongo.svg", fill: "#205d1d" },
  { name: "AWS", svg: "aws.svg", fill: "#f3f5f7" },
  { name: "Astro", svg: "astro.svg", fill: "#39286f" },
];

const clever: Experience = {
  role: "Software Engineer",
  company: "Clever Benefits",
  timeSpan: "October 2024 - present",
  description: `As part of the Scale Team, rearchitect prototype web and mobile apps and 
  serve as product owner of new features for a suite of healthcare services. Build in TypeScript, 
  React, MongoDB, and React Native to make apps for admins, brokers, plan owners, and individual users.`,
  highlights: [
    "Owned the automated invoicing product from initial design to scaling it for 400 groups covering more than 12,000 members",
    "Built a mobile feature in React Native that lets users track their health data, combining data from Apple HealthKit, Android Health Connect, and third-party health APIs",
    "Got buy in and rearchitected the daily file ingestion process for 50K+ members/day of data to improve data integrity and reduce error noise through tailored CloudWatch setup",
  ],
};

const rithm: Experience = {
  role: "Software Engineer and Teaching Assistant",
  company: "Rithm School",
  timeSpan: "Jun 2023 - July 2024",
  description: `Contributed to a white-label student and curriculum management system in Django and taught 
  a fast-paced full stack development curriculum, providing daily lecture and code review.`,
  highlights: ["Wrote over 3,000 lines of tests to achieve 99% coverage"],
};

const greatLeap: Experience = {
  role: "Web Developer",
  company: "Great Leap Studios",
  timeSpan: "Aug 2020 - Feb 2023",
  description: `Built and maintained over 50 websites in WordPress with JavaScript, HTML, and CSS 
  and managed Linux servers hosting 30 websites and services.`,
  highlights: [
    "Refactored base website template to increase Google PageInsights by 30 points for improved SEO",
    "Maintained 99.5% uptime across all sites",
  ],
};

const betterment: Experience = {
  role: "Banking Services Associate",
  company: "Betterment",
  timeSpan: "Jan 2020 - Aug 2020",
  description: `Provided phone and email support to customers to assist with
    technical and product questions.`,
  highlights: ["Earned a 97% customer satisfaction rating"],
};

const tco: Experience = {
  role: "Development Database Coordinator",
  company: "The Cleveland Orchestra",
  timeSpan: "Jan 2019 - Feb 2020",
  description: `Managed the Tessitura CRM for a multi-million dollar fundraising
    department and provided custom SQL reporting.`,
  highlights: [
    "Led data sanitization project that reduced average custom reporting time by 25%",
  ],
};

const bws: Experience = {
  role: "Annual Giving Coordinator",
  company: "Broadway Sacramento",
  timeSpan: "Jan 2016 - Dec 2018",
  description: `Lead the conversion of the Development team onto Tessitura and
    managed all department reporting and annual giving campaigns.`,
  highlights: [
    "Automated the gift entry process, reducing time by 90% and eliminating errors",
  ],
};

export const EXPERIENCES: Array<Experience> = [
  clever,
  rithm,
  greatLeap,
  tco,
];
