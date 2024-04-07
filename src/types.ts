export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
};

export type SocialObject = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
};

export type SocialMedia =
  | "LinkedIn"
  | "GitHub"
  | "Medium";

export type Project = {
  title: string;
  description: string;
  languages: Array<string>;
  demoUrl: string;
  githubUrl: string;
  slug: string;
  images: Array<string>;
}

export type Skill = {
  name: string;
  svg: string;
  fill: string;
}

export type Experience = {
  role: string;
  company: string;
  timeSpan: string;
  description: string;
}

export type Post = {
  id: number;
  title: string;
  permalink: string;
  content: string;
  date: string;
  canonical: string;
  tags: Array<Tag>
}

export type Tag = {
  id: number;
  name: string;
}