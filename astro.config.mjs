// @ts-check
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://lazylabz.github.io',
    base: '/gomander',
    trailingSlash: 'ignore',
    integrations: [
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
            customPages: ['https://lazylabz.github.io/gomander/'],
        })
    ],
    vite: {
        plugins: [tailwindcss()]
    }
});