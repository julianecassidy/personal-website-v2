import type { Site, Project, Skill, Experience } from "./types";

export const SITE: Site = {
  website: "https://julianecassidy.com", // replace this with your deployed domain
  author: "Juliane Cassidy",
  desc: "Front end software engineer.",
  title: "Juliane Cassidy",
  ogImage: "astropaper-og.jpg",
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

const randomRhythms: Project = {
  title: "Random Rhythms",
  description: "Lorem ipsum",
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
  demoUrl: "",
  githubUrl: "https://github.com/julianecassidy/randomrhythms",
  slug: "randomrhythms",
  images: [""],
};

const jobify: Project = {
  title: "Jobify",
  description: "Lorem ipsum",
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
  slug: "jobify",
  images: [""],
};

const flitter: Project = {
  title: "Flitter",
  description: "Lorem ipsum",
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
  slug: "flitter",
  images: [""],
};

const webDesign: Project = {
  title: "Web Design",
  description: "Lorem ipsum",
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
  slug: "web-design",
  images: [""],
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
  {name: "Astro", svg: "astro.svg", fill: "#291c42"},
]

const rithm: Experience = {
  role: "Software Engineer and Teaching Assistant",
  company: "Rithm School",
  timeSpan: "June 2023 - Present",
  description: "Lorem ipsum."
}

export const EXPERIENCES: Array<Experience> = [
  rithm,
]