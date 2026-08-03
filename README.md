# KIMSA — sitio web (rediseño "Cordillera")

Rediseño del sitio de **KIMSA** (kimsa.co), construido con **Astro** como sitio
estático. Toma como base el contenido del sitio actual (Wix) y aplica el nuevo
sistema de diseño "Cordillera" (Quicksand · verde bosque + terracota + crema).

## Cómo correrlo

```bash
npm install       # instalar dependencias (una sola vez)
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # genera el sitio estático en dist/
npm run preview   # previsualiza el build de dist/
```

Para publicarlo en un servidor: ejecutar `npm run build` y subir el contenido de
la carpeta **`dist/`**. Sirve en cualquier hosting estático (Vercel, Netlify,
Cloudflare Pages, o un servidor tradicional por FTP/cPanel).

## Estructura

```
src/
  data/site.ts               Contenido central (proyectos, equipo, países, contacto)
  layouts/Base.astro         HTML base, SEO, fuentes, animación de scroll
  styles/tokens.css          Tokens del sistema de diseño (colores, tipografía…)
  styles/global.css          Estilos base + responsive
  components/
    brand/                   MountainMark, KimsaWordmark (SVG de marca)
    core/                    Button, Eyebrow, Pill, Tag
    surfaces/                Card, LogoChip, ServiceCard, StatCard, ValueCard,
                             NumberedCard, PhotoPlaceholder, ProjectCard
    layout/                  Nav (con dropdown, ES·EN, menú móvil), Footer
    sections/                ServiceHero, StatBand, CourseCTA (secciones reutilizables)
  pages/
    index.astro                        Inicio (12 secciones)
    servicios/gestion-climatica.astro
    servicios/psicologia-ambiental.astro
    servicios/carbonbox.astro
    curso-psicologia-ambiental.astro
    proyectos.astro
    nosotros.astro
public/assets/               Logos, retratos del equipo, sello Cámara, mapa LATAM
```

## Pendientes / por reemplazar (primer borrador)

Este es un **primer borrador**. Lo siguiente está como placeholder o pendiente:

- **Fotografías**: todas las imágenes de naturaleza/campo/proyectos son
  `PhotoPlaceholder` (bloques con gradiente etiquetados). Reemplazar por fotos
  reales de KIMSA cuando estén disponibles.
- **Logos de clientes**: se muestran 12 como texto (de 29). Faltan los archivos
  de logo reales; agregar en `public/assets/clients/` y usar `src` en `LogoChip`.
- **Contenido en inglés (EN)**: el selector ES·EN está listo (andamiaje i18n en
  `astro.config.mjs`), pero el contenido EN aún no se ha creado. ES es el idioma
  principal.
- **URL del curso**: el botón "Quiero ver el curso" apunta al canal de YouTube
  de KIMSA (`COURSE_URL` en `src/pages/curso-psicologia-ambiental.astro`).
  Reemplazar por el enlace real del video.
- **Redes sociales**: los enlaces del footer (`Footer.astro`) son de referencia;
  confirmar/ajustar las URLs reales.
- **Más proyectos**: hay 3 proyectos con su información real; se pueden agregar
  más editando `PROJECTS` en `src/data/site.ts`.

## Decisiones de contenido

- **Carolina Quiñones** no aparece en el sitio (equipo ni curso), según lo pedido.
  El servicio de Psicología Ambiental y el curso se mantienen completos.
- El tercer servicio se llama **CarbonBox** (antes "Tecnología para la naturaleza").
- El botón "Conversemos" abre correo a `info@kimsa.co` (mailto).
- Todo el texto se copió del sitio actual; solo cambia la presentación visual.
