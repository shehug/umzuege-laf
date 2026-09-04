import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  build: {
    inlineStylesheets: 'always',
  },
  server: {
    host: true,
    port: 3213,
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        'next/link': path.resolve('./src/components/ui/Link.tsx'),
        'next/image': path.resolve('./src/components/ui/Image.tsx'),
        'next/navigation': path.resolve('./src/components/ui/Navigation.ts'),
      },
    },
  },
  redirects: {
    '/expressumzug': '/umzuege/expressumzug',
    '/fernumzug': '/umzuege/fernumzug',
    '/moebelmontage': '/umzuege/moebelmontage',
    '/einpackservice': '/umzuege/einpackservice',
    '/lagerung': '/umzuege/lagerung',
    '/umzuege/privatumzug': '/privatumzug-landshut',
    '/umzuege/firmenumzug': '/firmenumzug-landshut',
    '/entruempelung': '/entruempelung-landshut',
    '/umzugsunternehmen': '/umzugsunternehmen-landshut',
    '/haushaltaufloesung-landshut': '/entruempelung/haushaltsaufloesung',
    '/haushaltsaufloesung-landshut': '/entruempelung/haushaltsaufloesung',
  },
});
