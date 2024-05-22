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
}

export const GITHUB: SocialObject = {
    name: "GitHub",
    href: "https://github.com/julianecassidy",
    linkTitle: `Juliane on GitHub`,
    active: true,
}

export const MEDIUM: SocialObject = {
    name: "Medium",
    href: "https://medium.com/@julianecassidy",
    linkTitle: `Juliane on Medium`,
    active: false,
}

const randomRhythms: Project = {
  title: "Random Rhythms",
  description: `Explore local concerts in new genres. This full stack app relies
    on several APIs to collect concert data and provides random concert suggestions
    based on distance and price. | Demo email: guest@guest.com | Demo
    password: password`,
  languages: [
    "TypeScript",
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "PostgreSQL"
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
  languages: [
    "Python",
    "Flask",
    "SQLAlchemy",
    "PostgreSQL",
    "Jinja",
    "Bcrypt",
  ],
  demoUrl: "https://flitter.julianecassidy.com/",
  githubUrl: "https://github.com/julianecassidy/flitter",
  slug: "",
  images: ["flitter.png"],
};

const webDesign: Project = {
  title: "Web Design",
  description: `Experienced in web development and SEO, I build websites for small
    businesses and individual portfolios. I can design, build, and write content
    for a fast and beautiful site.`,
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
  ],
  demoUrl: "",
  githubUrl: "",
  slug: "",
  images: ["website.png"],
};

export const PROJECTS: Array<Project> = [
  randomRhythms,
  jobify,
  flitter,
  webDesign,
];

export const SKILLS: Array<Skill> = [
  {name: "TypeScript", svg: "typescript.svg", fill: "#283953"},
  {name: "JavaScript", svg: "javascript.svg", fill: "#d7bb2f"},
  {name: "React", svg: "react.svg", fill: "#222222"},
  {name: "Express", svg: "express.svg", fill: "#259dff;"},
  {name: "Python", svg: "python.svg", fill: "#1d405d"},
  {name: "Django", svg: "django.svg", fill: "#0c4b33"},
  {name: "Flask", svg: "flask.svg", fill: "#77c6d1"},
  {name: "PostgreSQL", svg: "postgres.svg", fill: "#336791"},
  {name: "TailwindCSS", svg: "tailwind.svg", fill: "#0f172a"},
  {name: "AWS", svg: "aws.svg", fill: "#f3f5f7"},
  {name: "Vite", svg: "vite.svg", fill: "#646cff"},
  {name: "Astro", svg: "astro.svg", fill: "#39286f"},
]

const rithm: Experience = {
  role: "Software Engineer and Teaching Assistant",
  company: "Rithm School",
  timeSpan: "Jun 2023 - Present",
  description: `Teaching a fast-paced full stack development curriculum over
    16 weeks. Also working on a Django student management system and maintaining
    a constantly-changing curriculum.`
}

const greatLeap: Experience = {
  role: "Digital Marketing Specialist",
  company: "Great Leap Studios",
  timeSpan: "Aug 2020 - Feb 2023",
  description: `Built and maintained over 50 websites in WordPress and wrote more
    than 5,000 words per day of digital, SEO content.`
}

const betterment: Experience = {
  role: "Banking Services Associate",
  company: "Betterment",
  timeSpan: "Jan 2020 - Aug 2020",
  description: `Provided phone and email support to customers to assist with
    technical and product questions.`
}

const tco: Experience = {
  role: "Development Database Coordinator",
  company: "The Cleveland Orchestra",
  timeSpan: "Jan 2019 - Feb 2020",
  description: `Managed the Tessitura CRM for a multi-million dollar fundraising
    department and provided custom SQL reporting.`
}

const bws: Experience = {
  role: "Annual Giving Coordinator",
  company: "Broadway Sacramento",
  timeSpan: "Jan 2016 - Dec 2018",
  description: `Lead the conversion of the Development team onto Tessitura and
    managed all department reporting and annual giving campaigns.`
}

export const EXPERIENCES: Array<Experience> = [
  rithm, greatLeap, betterment, tco, bws,
]