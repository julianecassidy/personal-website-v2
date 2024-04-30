import { defineConfig } from 'astro/config';
import { SITE } from "./src/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind(), sitemap(), react()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  redirects: {
    '/home': '/',
    '/blog': '/posts/',
    '/about': '/#about',
    "/blog/[...id]/[...slug]": "/posts/[...id]-[...slug]",
    '/blog/tags/[...id]/[...tag]': '/tags/[...id]-[...tag]',
  },
  scopedStyleStrategy: "where"
});