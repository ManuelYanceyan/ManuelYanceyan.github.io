import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// Configuración del sitio
export default defineConfig({
site: 'https://ManuelYanceyan.github.io',
integrations: [
    tailwind({
      // Puedes activar el modo 'applyBaseStyles' si usas tipografía personalizada
    applyBaseStyles: true,
    }),
    mdx(),
    // Eliminar la integración de sitemap si no la necesitas
    // sitemap(),
],
});
