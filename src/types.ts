export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
};

export type Project = {
  title: string;
  description: string;
  languages: Array<string>;
  demoUrl: string;
  githubUrl: string;
  slug: string;
  images: Array<string>;
}