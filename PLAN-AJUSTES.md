# Plan de ajustes — Sitio KIMSA

> Lista de pendientes para ejecutar (responsable: **David**). Generado a partir de la revisión de Viviana. Mantiene la numeración original (1–18) para que sea fácil ir marcando. Cada ítem indica **qué**, **dónde** (archivos) y **qué se necesita** si depende de información/assets externos.
>
> Contexto: Astro estático. Docs de referencia: `DESIGN.md` (sistema "Trama Andina") y `PRODUCT.md`. Deploy: automático en Vercel al hacer `push` a `main` (proyecto `kimsa-web` → `kimsa-web-livid.vercel.app`). Datos de proyectos/clientes: `src/data/site.ts`. Assets: `public/assets/`.

---

## ⚠️ Info y assets que necesitamos (bloqueadores transversales)

- [x] **Matriz/hoja maestra de experiencia de KIMSA** (incluyendo CarbonBox) — para validar número de proyectos, países, reportes, mecanismos de financiamiento, años y clientes. → afecta **2, 8, 10, 12, 14, 15**. _(recibida 2026-08-20: "Matriz consolidada experiencia KIMSA 2026.xlsx", 55 proyectos. Se usó para completar el `client` de 7 proyectos de Gestión Climática que estaban vacíos y para agregar 9 proyectos nuevos que faltaban — ver ítem 15. Con esto se resolvió también el "aliado sin proyecto" de ANLA, Corpoguajira, Cormacarena, GIZ, Transforma, CIAT y FLACSO en `/clientes`. Sigue pendiente cruzarla contra los ítems 8 (números del mapa) y 10 (indicadores de Gestión Climática) — no se tocaron todavía.)_
- [ ] **Proyecto actual de Costa Rica** (pedir a Natalia o compartir la info a la IA) — no está cargado. → **5b**.
- [x] **Proyectos de CarbonBox uno a uno** + el proyecto de **Argentina**. → **8, 14, 15**. _(resuelto 2026-08-20: 31 proyectos cargados desde el JSON del equipo, incluyendo el de Parker en Argentina — ver detalle en el ítem 14/15)_
- [ ] **Fotos**: taller/trabajo de campo (Gestión Climática), comunidad/campo (Psicología Ambiental), dashboard o equipo (CarbonBox), y foto del proyecto de salud mental. → **3, 15**.
- [x] **Logos de clientes** en buena calidad: Climate Group, The Nature Conservancy, Cámara Verde (actualizado), Gobiernos de **Honduras** y **El Salvador** (y el que falte). → **2**. _(resuelto 2026-08-20: lista validada por David + 26 logos nuevos de clientes de CarbonBox)_
- [ ] **URLs reales de redes sociales** de KIMSA. → **9**.
- [x] **Publicaciones de Psicología Ambiental** (listado + enlaces). → **16**. _(resuelto 2026-08-20: 2 documentos cargados con enlace de Google Drive)_
- [ ] **Video del hero** + página de referencia. → **6**.
- [ ] **Enlaces de publicaciones por proyecto** (para el botón del modal). → **13**.

---

## 🟢 Ganancias rápidas (no dependen de terceros)

### 4. Sello Cámara de Comercio con fondo transparente y más grande
- **Qué:** el logo de la Cámara está sobre fondo blanco; dejarlo **transparente** y **un poco más grande**.
- **Dónde:** `public/assets/kimsa-camara.png` (quitar fondo blanco, como se hizo con el isotipo) y `.impact__badge img` en `src/pages/index.astro`.

### 5a. Alianza con InNature (Ceiba Bruja) ✅
- **Qué:** quitar las tarjetas de indicadores (se repiten con lo de arriba). Del aporte, **quitar el valor de la donación ($16.5M)**. Donde se menciona **"Reserva Ceiba Bruja"**, enlazar a https://www.innnature.org/.
- **Dónde:** sección Ceiba en `src/pages/index.astro` (array `ceiba` + markup) y `#ceiba` en `src/pages/nosotros.astro`.
- **Hecho (2026-08-20):** en ambas páginas se quitaron las 3 tarjetas de indicadores (con el valor `$16.5M` incluido) y el array `ceiba` que las alimentaba; "Reserva Ceiba Bruja" ahora es un link a innnature.org (nueva pestaña).

### 7. "Nuestra historia" (home) — corregir años ✅
- **Qué:** cambiar el hito de Ceiba Bruja; poner **"2020 — Expansión y apoyos a proyectos en varios países de LATAM"**. **Validar el año** con la info real.
- **Dónde:** array `story` en `src/pages/index.astro` (revisar también `src/pages/nosotros.astro`).
- **Hecho (2026-08-20):** el hito 2020 en ambos archivos ahora dice "Expansión LATAM — Expansión y apoyo a proyectos en varios países de América Latina". El año 2020 en sí no se cambió (no hay info nueva que lo contradiga); si el equipo confirma otro año, es un cambio de una línea.

### 12. Carrusel de proyectos — año inconsistente
- **Qué:** algunas tarjetas muestran año y otras no. Unificar (recomendado: cargar el año de todos y mostrarlo siempre).
- **Dónde:** `src/components/sections/ProjectsCarousel.astro` + campo `year` en `src/data/site.ts`.
- **Parcial (2026-08-20):** en los 31 proyectos de CarbonBox el `year` ahora sale siempre del año de `fecha_inicio` del JSON del equipo (nunca del título ni de `fecha_fin`, para no mezclar criterios). Los proyectos donde el JSON no traía `fecha_inicio` (Comfama, CataExport, SPEC LNG, Asobancaria, Fundación Santa Fé, Parker, AMBIELEGSA, WEIA, Colgas, Almacenes Ara, LinkTic, Biodiversal) se dejan sin año en vez de inventarlo. Sigue pendiente decidir si se completa el año de los proyectos más antiguos (no-CarbonBox) que tampoco lo tienen.

### 9. Iconos de redes — enlaces reales
- **Qué:** los links no son los de las redes reales de la empresa. Corregir.
- **Dónde:** array `socials` en `src/components/layout/Footer.astro`. **Necesita** URLs reales.

---

## 🎨 Consistencia visual (tarjetas de color)

### 17. Tarjetas de color se ven planas en varias partes ✅
- **Qué:** el degradado tenue (ya en `ValueCard`, `NumberedCard`, `ServiceCard`) no quedó en todo el sitio. En **Nosotros** falta. En **"Nuestra historia"**, **"Donaciones/Ceiba"** y **"Dónde estamos"** dejar igual a las correcciones del Home.
- **Dónde:** `src/pages/nosotros.astro`, `src/pages/index.astro`, componentes en `src/components/surfaces/`.
- **Hecho (2026-08-20):** "Nuestra historia" (Home y Nosotros) — los ítems ya no son solo una línea divisoria: cada uno tiene su propio degradado sutil, como una tarjeta. "Dónde estamos" (`PresenceMap.astro`, compartido por Home y Nosotros) — la lista de países pasó de bone/blush **planos** alternados a degradado sutil alternado (forest/blush). "Donaciones/Ceiba" quedó resuelta con el ítem 5a (se quitaron las tarjetas planas, no hace falta degradado porque ya no existen). `ValueCard`/`NumberedCard`/`ServiceCard` ya tenían el degradado — no se tocaron.

---

## 🏔️ Home

### 3. Tarjetas de servicio — fotos y etiquetas ✅
- **Qué:** Gestión Climática → foto de **taller/trabajo de campo**; Psicología Ambiental → **comunidad/campo**; CarbonBox → **equipo o dashboard**. En CarbonBox agregar etiquetas **"Gestión de reducciones"** y **"Carbono neutralidad"**.
- **Dónde:** array `services` en `src/pages/index.astro`. **Necesita** las 3 fotos.
- **Hecho (2026-08-20):** las 3 fotos — Gestión Climática usa `taller-gestion-climatica-home.jpg` (taller NDC), Psicología Ambiental usa `psicologia-ambiental-home.jpg` (encuentro comunitario), CarbonBox usa `carbonbox-platform.jpg` (foto del equipo, ya usada en `/servicios/carbonbox`). Archivos en `public/assets/projects/` (renombrados a kebab-case, sin espacios). Bullets de CarbonBox ahora: Huella de carbono, ISO 14064, ISO 14067, GHG Protocol, **Gestión de reducciones**, **Carbono neutralidad**.

### 6. Video en el hero
- **Qué:** implementar el **video** del hero, parecido al de la página de referencia.
- **Dónde:** sección Hero en `src/pages/index.astro`. **Necesita** video + link de referencia.

### 5b. Proyecto de Costa Rica + proyectos recientes en el Home
- **Qué:** cargar el **proyecto actual de Costa Rica** (hoy no está). Debe ser el **destacado** en proyectos del Home y agregarse a la subpágina de Proyectos. En el Home solo se ven proyectos de **2024**: sumar **más nuevos**.
- **Dónde:** `src/data/site.ts` + `featured`/`secondary` en `src/pages/index.astro`. **Necesita** info de Costa Rica (Natalia).

### 8. Mapa / países
- **Qué:** Guatemala y Panamá **no tienen proyectos** — decidir si se dejan o se reemplazan. Podemos agregar **Argentina** (proyecto de CarbonBox). **Validar números** contra la matriz (incluyendo CarbonBox).
- **Dónde:** `COUNTRIES` en `src/data/site.ts`, `src/components/sections/PresenceMap.astro`, mapa en `index.astro`/`nosotros.astro`. **Necesita** matriz + proyecto Argentina.

---

## 🌿 Subpágina Gestión Climática

### 10. Indicadores — validar
- **Qué:** revisar el conteo: **"3 reportes" podría ser 4** con el de El Salvador. Validar también **mecanismo(s) de financiamiento**.
- **Dónde:** array `stats` en `src/pages/servicios/gestion-climatica.astro`. **Necesita** matriz.

### 11. "Qué hacemos" / "Capacidades" — se ven planas ✅
- **Qué:** fondo de "Qué hacemos" debería ser **oscuro** (las tarjetas se ven muy planas). En "Capacidades" proponer una **figura/animación/algo más dinámico**.
- **Dónde:** `src/pages/servicios/gestion-climatica.astro` + estilos de `NumberedCard` y la lista de capacidades.
- **Hecho (2026-08-20):** "Qué hacemos" ahora tiene fondo oscuro en degradado (bosque → bosque profundo, con resplandor `.glow`), igual que StatBand/Ceiba — las 5 `NumberedCard` (claras) resaltan en vez de verse planas sobre crema. "Capacidades" pasó de un simple ▲ estático a numeración 01-05 con color propio por ítem, resplandor de fondo y una micro-interacción al pasar el mouse (se desliza y se tiñe con su color de acento).

---

## 📦 Subpágina CarbonBox

### 14. Carrusel vacío + blog/guías + CarbonBox Academy
- **Qué:** el carrusel se ve muy solo → cargar **todos los proyectos de CarbonBox**. Añadir sección de **blog/guías** y **promocionar CarbonBox Academy**.
- **Dónde:** `src/pages/servicios/carbonbox.astro` + proyectos en `src/data/site.ts`. **Necesita** listado de proyectos CarbonBox + material.
- **Parcial (2026-08-20):** ✅ carrusel resuelto — se cargaron 31 proyectos nuevos de CarbonBox (32 en total con el de DNP/IPSOS que ya existía), tomados del JSON de proyectos que compartió el equipo. ✅ blog/guías y CarbonBox Academy resuelto — nueva sección en `/servicios/carbonbox` (`#blog`) que trae en cada build los 3 últimos artículos reales de `carbonbox.app/blog` (portada, categoría, título, resumen y link) más un banner a CarbonBox Academy. Ver `src/lib/carbonboxBlog.ts`.
  - Como CarbonBox no tiene RSS/API pública, el fetch parsea su HTML de blog (que es Astro estático); si su estructura cambia y el parseo falla, la sección simplemente no se muestra — nunca rompe el build.
  - **Pendiente (paso manual en Vercel, no se puede hacer por código):** para que esta sección se actualice sola sin esperar un `git push`, crear un Deploy Hook en Vercel (proyecto `kimsa-web` → Settings → Git → Deploy Hooks, rama `main`) y guardarlo como secret `VERCEL_DEPLOY_HOOK_URL` en GitHub (repo → Settings → Secrets and variables → Actions). El workflow que dispara el rebuild diario ya está listo en `.github/workflows/carbonbox-blog-sync.yml` — solo falta ese secret.

### 18. Experimento: estilo de la web original de CarbonBox
- **Qué:** **prueba** de la subpágina tomando algo del estilo de carbonbox.app, solo para ver cómo queda. **Hacerlo en una rama aparte** (p. ej. `experimento/carbonbox-estilo`).
- **Dónde:** `src/pages/servicios/carbonbox.astro` (en rama de prueba).

---

## 🗂️ Subpágina Proyectos

### 15. Tarjetas de proyecto — completar info + volumen
- **Qué:** faltan **año**, **cliente(s)** y **productos/publicaciones**. **Salud mental** no tiene foto. Incluir **todos los proyectos de CarbonBox uno a uno** (queremos **volumen**).
- **Dónde:** `src/components/sections/ProjectsExplorer.astro` + `src/data/site.ts`. **Necesita** matriz, foto de salud mental, listado CarbonBox.
- **Parcial (2026-08-20):** ✅ volumen de CarbonBox resuelto — 31 proyectos nuevos agregados a `PROJECTS` (`src/data/site.ts`), visibles en `/proyectos` y en el carrusel de `/servicios/carbonbox`. Se agregaron **Perú** y **Argentina** a `PROJECT_COUNTRIES` para el filtro; los proyectos multi-país (CleanTechHub, GEC EcoEnterprises) quedaron con `country: 'Multirregional'` (solo visibles bajo el filtro "Todos").
  - ✅ Con la matriz recibida: se completó el `client` de 7 proyectos de Gestión Climática que estaban vacíos (`ndc-3-costa-rica`, `honduras-ica-bur`, `honduras-gei-bur`, `estrategias-meta`, `licenciamiento-cc`, `picct-narino`, `gestion-urbana-pasto`) y se agregaron **9 proyectos nuevos** de Gestión Climática que la matriz trae y no estaban cargados: evaluación Footprint con DEval/DNP, NDC 2022 de El Salvador, EC-LEDS con Alliance Bioversity-CIAT, diálogo EUROCLIMA+ con GIZ, NAMA forestal con World Agroforestry, metodología CAF/NDC/ODS con Transforma, dos proyectos con TNC (compensaciones y seminario forestal) y el PICC de La Guajira con Corpoguajira.
  - Pendiente: foto de salud mental y validar el resto de productos/publicaciones por proyecto contra la matriz.

### 13. Modal de proyecto — botón a la publicación ✅
- **Qué:** si el proyecto tiene **publicación**, mostrar un **botón/enlace** para ir a ella.
- **Dónde:** campo (p. ej. `publicationUrl`) en `src/data/site.ts` + `src/components/sections/ProjectModal.astro`. **Necesita** enlaces.
- **Hecho (2026-08-20):** se agregó `publicationUrl?: string` a `Project` (`src/data/site.ts`) y el botón "Ver publicación →" en `ProjectModal.astro` (solo se muestra cuando el proyecto lo tiene). Se conectó para los 5 proyectos que ya tenían una publicación equivalente cargada en `DOCUMENTS`: `ndc-3-el-salvador`, `ndc-3-costa-rica`, `honduras-gei-bur`, `picct-narino` y `sostenibilidad-dnp-colombia`.
  - **Pendiente:** el resto de proyectos no tiene publicación asociada todavía. Si el equipo comparte más enlaces (o confirma qué documento de `DOCUMENTS` corresponde a qué proyecto de `PROJECTS`), se agregan de la misma forma.

---

## 🏷️ Clientes / Logos

### 2. Carrusel de logos ✅ (validado por David)
- **Qué:** Climate Group **muy pequeño**; The Nature Conservancy **muy pequeño**; Cámara Verde **desactualizado** (reemplazar); faltan **Gobierno de Honduras**, **Gobierno de El Salvador** y otro. David: **revisar la lista de clientes** completa (cruzar con la matriz).
- **Dónde:** `CLIENT_LOGOS` en `src/data/site.ts`, archivos en `public/assets/clients/`, tamaños en `src/components/sections/ClientsMarquee.astro`. **Necesita** logos faltantes/actualizados.
- **Hecho (2026-08-20):** David validó la lista de clientes. Se agregaron 26 logos nuevos de clientes de CarbonBox (Biomax, AGROSAVIA, Zhana Solutions, Copropiedad ZF, Hacienda Café Misiones, Colegio Anglo Colombiano, EBSA, GEC EcoEnterprises, CleanTechHub, Páramo Presenta, CANDES, Eternit, Comfama, CataExport, WEIA, Colgas, SPEC LNG, Asobancaria, Fundación Santa Fé de Bogotá, Parker, AMBIELEGSA, Jerónimo Martins, LinkTic, Biodiversal, Control Ambiental de Colombia, IPSOS) además de los gobiernos de Honduras, El Salvador y Ecuador, ANLA, Cormacarena, Corpoguajira y Gobernación de Nariño agregados antes. Todos los archivos renombrados a kebab-case en `public/assets/clients/`. El tamaño de todos los logos en el carrusel ya es uniforme (`ClientsMarquee.astro` usa una caja fija 180×96 con `object-fit: contain`).
- **Extra (2026-08-20):** velocidad del carrusel reducida (48s → 130s desktop, 36s → 95s mobile); ANLA, Climate Group y EUROCLIMA+ marcados con `size: 'lg'` para que se vean más grandes dentro de la misma caja; el contador "X organizaciones" en el Home ahora es dinámico (`CLIENT_LOGOS.length`, hoy 50) en vez de un número fijo. Se agregó un botón bajo el carrusel ("Conoce todas las organizaciones que confían en KIMSA →") que lleva a la nueva página **`/clientes`**: grilla uniforme con las 50 organizaciones (logo + nombre + conteo de proyectos). Cada tarjeta con proyectos enlaza a `/proyectos?slugs=...&client=...` — reutiliza la grilla y los filtros de Proyectos ya prefiltrada por los proyectos exactos de esa organización (por slug, vía `projectsForClientLogo` en `site.ts`), con un aviso "Mostrando proyectos relacionados con X · Ver todos" arriba de la grilla. Se prefirió esto (decisión del usuario) a duplicar la info del proyecto en un modal aparte. Enlazada también desde el Footer.

---

## 📰 Publicaciones

### 16. Faltan las publicaciones de Psicología Ambiental ✅
- **Qué:** agregar las publicaciones del área de Psicología Ambiental.
- **Dónde:** `src/pages/publicaciones.astro` (+ datos si aplica). **Necesita** listado + enlaces.
- **Hecho (2026-08-20):** se agregaron 2 documentos en `DOCUMENTS` (`src/data/site.ts`) con `area: 'psicologia'`:
  - *Sondeo: percepción emocional sobre la crisis climática en Colombia* (2022) — Carolina Quiñones Hoyos, Viviana Bohórquez y Juliana Romero.
  - *Documento de resultados a metodologías sobre dinámicas de bienestar ligadas a la conexión con la naturaleza* (2025) — Camilo Posada, supervisado por Carolina Quiñones.
  - Los enlaces apuntan a los archivos en Google Drive compartidos por el equipo (`/view`); si se quiere forzar descarga directa habría que subir los PDF a `public/assets/` o a otro hosting.

---

## 🌐 Internacionalización

### 1. Traducción a inglés de todo el sitio ✅
- **Qué:** el sitio hoy está solo en español; falta **toda la versión en inglés**.
- **Dónde:** `astro.config.mjs` ya tiene i18n (`es` por defecto, `en` disponible). Definir estrategia (rutas `/en/…` o diccionario). Traducir todo + nav/footer y activar el selector ES·EN.
- **Nota:** es el ítem más grande; dejarlo para un bloque dedicado.
- **Hecho (2026-08-20):**
  - **Infraestructura:** `src/i18n/ui.ts` (diccionario de textos de interfaz compartidos) + `src/i18n/utils.ts` (`getLangFromUrl`, `useTranslations`, `getLocalizedPath`). `Base.astro` pone `<html lang="es"|"en">` según la URL.
  - **~15 componentes compartidos** (`Nav`, `Footer`, `ProjectsExplorer`, `ProjectsCarousel`, `ProjectModal`, `DocumentCard`, `ContactForm`, `CourseCTA`, `PresenceMap`, `ServiceHero`, `ClientsMarquee`, `HomeSectionNav`, `ServiceCard`…) ahora leen el idioma de la URL y muestran su texto (botones, labels, placeholders, mensajes de validación del formulario) en el idioma correcto — sin prop-drilling, vía `Astro.url`.
  - **Datos** (`src/data/site.ts`): los 57 proyectos y los 10 documentos tienen campos `title_en`/`summary_en`/`description_en`/`tags_en` (o `contribution_en`) junto a los originales en español; `TEAM` tiene `role_en`/`bio_en`. Helpers `localizeProject`, `localizeDocument`, `localizeMember`, `localizeCountryName`, `areaLabel` resuelven el idioma correcto. Los nombres de cliente/organización (`client`) **no se tradujeron** — son nombres propios de instituciones, sin equivalente oficial en inglés.
  - **10 páginas en inglés** bajo `src/pages/en/` (mismo contenido y componentes que su par en español, con copy traducido): home, nosotros, proyectos, publicaciones, clientes, contacto, curso-psicologia-ambiental, y los 3 `servicios/*`.
  - **Selector ES·EN** en el nav: ya no está deshabilitado — cambia de idioma manteniendo la misma página (usa `getLocalizedPath`).
  - **Build de producción verificado:** `npm run build` genera las 20 páginas (10 ES + 10 EN) sin errores.
  - **Límite conocido:** los artículos del blog de CarbonBox (sección `#blog` en `/en/servicios/carbonbox`) se traen de `carbonbox.app/blog`, que solo existe en español — se muestran tal cual, con una nota aclaratoria en el copy de esa sección.

---

## Orden sugerido

1. **Rápidas sin dependencias:** 4, 5a, 7, 12, 17, 11, 13 (infra del botón).
2. **Con la matriz/info a la mano:** 10, 8, 2, 15, 5b, 14, 16, 3 (fotos), 9 (links).
3. **Grandes:** 6 (video), 1 (inglés), 18 (experimento CarbonBox).

> Al terminar cada bloque: `git push` a `main` → Vercel despliega solo. Verificar en `kimsa-web-livid.vercel.app` (Ctrl+F5).
