import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.miroslawstach.pl',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'never', // wszystkie style w plikach -> ścisłe CSP bez 'unsafe-inline'
  },
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
});
