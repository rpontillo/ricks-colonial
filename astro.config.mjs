import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.rickscolonialpainting.com',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
  vite: { plugins: [tailwindcss()] },
});
