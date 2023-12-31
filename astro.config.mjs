import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: 'https://example.com',
  site: 'https://clad000.github.io',
  integrations: [mdx(), sitemap(), react(), tailwind()]
});