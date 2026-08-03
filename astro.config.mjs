// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático KIMSA — dirección "Cordillera".
// i18n con andamiaje ES/EN: ES es el idioma principal (sin prefijo),
// EN queda configurado para cuando llegue el contenido traducido.
export default defineConfig({
  site: 'https://www.kimsa.co',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
