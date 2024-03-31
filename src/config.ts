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
  width: 400,
  height: 46,
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
  {name: "TypeScript", svg: "", fill: ""},
  {name: "JavaScript", svg: "", fill: ""},
  {name: "React", svg: "", fill: ""},
  {name: "Express", svg: "", fill: ""},
  {name: "Python", svg: "", fill: ""},
  {name: "Django", svg: "", fill: ""},
  {name: "Flask", svg: "", fill: ""},
  {name: "SQL", svg: "", fill: ""},
  {name: "PostgreSQL", svg: "", fill: ""},
  {name: "Tailwind CSS", svg: "", fill: ""},
  {name: "AWS", svg: "", fill: ""},
  {name: "Astro", svg: "", fill: ""},
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