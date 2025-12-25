import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Configuración del sitio
export default defineConfig({
    site: 'https://ManuelYanceyan.github.io',
    integrations: [
        tailwind({
        // Puedes activar el modo 'applyBaseStyles' si usas tipografía personalizada
        applyBaseStyles: true,
        }),
        mdx(),
        // Integración React (para componentes client)
        react(),
        sitemap(),
        // Elimina o comenta la línea de RSS si la tienes
        // rss()
    ],
});
