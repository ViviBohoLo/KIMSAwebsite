# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primarios: gobiernos, ministerios y organismos multilaterales/de cooperación en
América Latina (PNUD, GIZ, BID, CAF, ONU Medio Ambiente, EUROCLIMA+, IDRC, etc.)
que necesitan diseñar o fortalecer política climática (NDC, MRV, BUR/ICA,
financiamiento climático). Secundarios: empresas y organizaciones que necesitan
medir/gestionar su huella de carbono (CarbonBox) o procesos de cambio de
comportamiento y participación comunitaria (Psicología Ambiental). El sitio
prioriza el tono y la credibilidad que esperan gobiernos y multilaterales
(confirmado por el usuario), sin dejar de servir a clientes corporativos.

## Product Purpose

KIMSA es una consultora climática latinoamericana (fundada en Bogotá, 2017,
con sucursal en San José de Costa Rica) que diseña e implementa soluciones de
gestión climática, psicología/cambio de comportamiento ambiental y tecnología
para medir huellas de carbono (CarbonBox). El sitio existe para comunicar esa
capacidad técnica a quienes deciden contratar consultoría climática y para
convertir esa visita en un contacto calificado (formulario) o en tráfico
orgánico (SEO).

## Positioning

Consultora climática latinoamericana (no global genérica) que combina rigor
técnico (NDC, MRV, GHG Protocol, ISO 14064) con un enfoque humano/social
explícito (psicología ambiental, género e inclusión, participación
comunitaria) y tecnología propia (CarbonBox). Lema editorial recurrente:
"menos es más" — resultados breves, entendibles y útiles, sin "hacer
enciclopedias". Un 1% de utilidades financia conservación (Reserva Ceiba
Bruja). Equipo mayormente femenino (80%), HUB distribuido en 9 países.

## Operating Context

Sitio estático de marketing/institucional (Astro), sin backend propio. El
formulario de contacto (componente `ContactForm`, sección `#contacto` en Home
y página dedicada `/contacto`) envía por `fetch` a un webhook de n8n que
reenvía el mensaje por correo al equipo. Páginas: Home, 3 páginas de servicio
(Gestión Climática, Psicología Ambiental, CarbonBox), Proyectos (explorador
filtrable), Nosotros, Curso de Psicología Ambiental (gratuito, grabado),
Contacto. Selector de idioma ES·EN visible pero solo ES tiene contenido hoy
(EN queda para más adelante). CarbonBox es también un producto propio con
sitio externo (carbonbox.app) al que el CTA de esa página debe enlazar.

## Capabilities and Constraints

- Este es un **rediseño visual** (no funcional): el usuario pidió
  explícitamente que las secciones existentes y su información no se toquen.
  Excepción: copy/markup puede ajustarse cuando mejora SEO (headings
  semánticos, metadatos, alt text, datos estructurados), nunca los hechos.
- Paleta de color es corporativa y **no se reemplaza**: vive en
  `src/styles/tokens.css` (verde bosque `--kimsa-forest`, terracota
  `--kimsa-terracotta`/coral/durazno, crema/hueso, ciruela `--kimsa-plum` para
  CarbonBox, dorado). El rediseño debe escanear y reutilizar esos tokens, no
  inventar una paleta nueva.
- Identidad de marca **intocable** (confirmado por el usuario): isotipo de
  montaña (`MountainMark`, imagen a color en `/assets/kimsa-isotipo-t.png`) y
  tipografía Quicksand se mantienen exactamente igual. El "aire fresco" debe
  venir de layout, composición, animación/microinteracción y uso del color —
  no de cambiar logo o fuente.
- Dos referencias visuales explícitas del usuario a adaptar (no clonar
  literalmente, respetando la marca KIMSA):
  - toroto.com: animación hover del navbar.
  - anewclimate.com: composición del hero (grid `hero2_grid`), posiblemente
    reutilizando el contenido hoy en `.impact__grid.container` de la Home.
- Proyecto sin dependencias de UI (solo `astro` + CSS vanilla con scoped
  styles por componente). Cualquier librería nueva debe justificarse.
- Fotografías reales de proyectos son en su mayoría placeholders con
  gradiente (`PhotoPlaceholder`); no inventar fotos reales.
- Contenido en inglés no existe todavía; no se crea como parte de este
  rediseño salvo que se pida explícitamente.

## Brand Commitments

- Nombre: KIMSA. Isotipo: montaña (Andes/Cordillera), a color, no monocromo.
- Tipografía: Quicksand (títulos y cuerpo); JetBrains Mono reservado para
  micro-etiquetas/datos.
- Sistema de diseño actual documentado como "Cordillera": verde bosque +
  terracota + crema, motivo de montaña (▲) como firma recurrente.
- Redes: LinkedIn, Instagram, Facebook, YouTube (URLs en Footer, marcadas
  como "de referencia" en el README original — confirmar antes de publicar
  cambios ahí).

## Evidence on Hand

- Datos de clientes/proyectos reales en `src/data/site.ts` (29 organizaciones
  en 9 países; +150 clientes; +12 gobiernos acompañados en el Acuerdo de
  París; +8,000 actores consultados; +1,200 colaboradores capacitados;
  reconocimiento "Empresa del Año 2024" de la Cámara de Comercio de Bogotá).
  Todo esto es verídico según el usuario y no se inventa ni se edita en
  contenido, solo en presentación.
- Logos de clientes reales en `public/assets/clients/` (PNUD, GIZ, BID, CAF,
  ONU Medio Ambiente, TNC, EUROCLIMA+, Bancóldex, Ministerio de Agricultura,
  MiAmbiente, Alliance Bioversity-CIAT, ICRAF, IDRC, FLACSO, Climate Group,
  Transforma, Cámara Verde).
- Fotos reales del equipo (`team-natalia.png`, `team-viviana.png`) y del
  sello de la Cámara de Comercio; mapa LATAM (`kimsa-map.png`).
- Ausencia declarada: casi todas las fotos de campo/proyecto son placeholder
  (gradiente), no fotografía real — no fabricar imágenes que aparenten serlo.

## Product Principles

1. La info y los hechos no se tocan — el rediseño es de superficie (layout,
   tipografía aplicada, color, motion, jerarquía), nunca de contenido, salvo
   ganancia de SEO explícita y verificable.
2. La paleta y la marca (isotipo, Quicksand) son corporativas y fijas; la
   frescura se gana con composición y uso del color existente, no con una
   paleta nueva.
3. Diseñar primero para quien decide una licitación o un convenio de
   cooperación (gobiernos/multilaterales): credibilidad técnica y prueba
   social (logos, cifras, casos) antes que estética puramente comercial.
4. Cada cambio debe poder justificarse en términos de SEO/posicionamiento
   orgánico o de percepción de marca/autoridad — son los dos objetivos que
   el usuario fijó para este rediseño.
5. Inspiración externa (toroto.com, anewclimate.com) se adapta al lenguaje
   visual de KIMSA (Cordillera), no se copia literalmente ni introduce una
   identidad ajena.

## Accessibility & Inclusion

Sin requisito específico declarado más allá de las buenas prácticas
estándar (contraste, `prefers-reduced-motion` ya respetado en las
animaciones de scroll existentes, navegación por teclado en nav y formulario).
