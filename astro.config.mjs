import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://nicklewis.blog',
  integrations: [mdx(), sitemap(), tailwind()],
  vite: {
    plugins: [],
    resolve: {
        alias: {
          '$': path.resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        allowNodeBuiltins: true
    }
  }
});