// Datos de contenido del sitio KIMSA. Copiados fielmente del sitio actual
// (kimsa.co). Las fotos de proyectos son placeholders hasta recibir las reales.

export const CONTACT = {
  email: 'info@kimsa.co',
  // Número de la sede principal (Colombia) — se mantiene por compatibilidad
  // con el texto suelto que solo muestra "un" teléfono (ej. CTA de Nosotros).
  // Para no confundir a quien va a llamar, en Footer/ContactForm cada sede
  // muestra su propio número (ver `hqs` abajo).
  phone: '+57 320 867 5567',
  phoneHref: 'tel:+573208675567',
  mailto: 'mailto:info@kimsa.co?subject=Conversemos%20con%20KIMSA',
  // Webhook del flujo n8n "Formulario Astro a Correo" — recibe el POST del
  // formulario de contacto y lo reenvía por correo (hoy a una dirección de
  // prueba; cambiar en n8n cuando se confirme el correo corporativo).
  formWebhook: 'https://kim-carbonbox.app.n8n.cloud/webhook/astro-formulario',
  // Sede principal primero, luego la sucursal. Cada sede lleva su propio
  // teléfono/WhatsApp (número real de esa oficina, no el mismo repetido)
  // para que quien llame o escriba sepa a qué país está marcando.
  hqs: [
    {
      city: 'Bogotá D.C.', country: 'Colombia', color: 'var(--kimsa-forest)',
      phone: '+57 320 867 5567', phoneHref: 'tel:+573208675567',
      whatsapp: 'https://wa.me/573208675567',
    },
    {
      city: 'San José', country: 'Costa Rica', color: 'var(--kimsa-terracotta)',
      phone: '+506 8314 1891', phoneHref: 'tel:+50683141891',
      whatsapp: 'https://wa.me/50683141891',
    },
  ],
};

// Logos reales de clientes/aliados (carpeta public/assets/clients).
export interface ClientLogo {
  src: string;
  alt: string;
  // Logos que se ven pequeños/vacíos con el tamaño estándar de la caja
  // (ej. wordmarks muy horizontales) — se les da más espacio, sin tocar el
  // tamaño de la caja del resto.
  size?: 'lg';
  // Otros nombres con los que la organización aparece en el campo `client`
  // de los proyectos (p.ej. el logo dice "MiAmbiente" y el proyecto
  // "Ministerio de Ambiente y Desarrollo Sostenible").
  aliases?: string[];
}
export const CLIENT_LOGOS: ClientLogo[] = [
  { src: '/assets/clients/pnud-v2.png', alt: 'PNUD' },
  { src: '/assets/clients/giz.png', alt: 'GIZ' },
  { src: '/assets/clients/bid-v2.jpg', alt: 'BID' },
  { src: '/assets/clients/caf.png', alt: 'CAF' },
  { src: '/assets/clients/tnc-v2.jpg', alt: 'The Nature Conservancy' },
  { src: '/assets/clients/euroclima.jpg', alt: 'EUROCLIMA+', size: 'lg' },
  { src: '/assets/clients/bancoldex-v2.png', alt: 'Bancóldex' },
  { src: '/assets/clients/minagricultura.webp', alt: 'Ministerio de Agricultura y Desarrollo Rural' },
  { src: '/assets/clients/miambiente.webp', alt: 'MiAmbiente', aliases: ['Ministerio de Ambiente y Desarrollo Sostenible'] },
  { src: '/assets/clients/ciat-v2.jpg', alt: 'Alliance Bioversity-CIAT' },
  { src: '/assets/clients/icraf-v2.png', alt: 'ICRAF' },
  { src: '/assets/clients/idrc.jpg', alt: 'IDRC', aliases: ['IDRC Canadá'] },
  { src: '/assets/clients/flacso.jpg', alt: 'FLACSO' },
  { src: '/assets/clients/climate-group-v2.png', alt: 'Climate Group', size: 'lg' },
  { src: '/assets/clients/transforma-v2.png', alt: 'Transforma' },
  { src: '/assets/clients/camara-verde-v2.png', alt: 'Cámara Verde' },
  { src: '/assets/clients/anla-v2.png', alt: 'ANLA — Autoridad Nacional de Licencias Ambientales', size: 'lg', aliases: ['Autoridad Nacional de Licencias Ambientales (ANLA)'] },
  { src: '/assets/clients/cormacarena-v2.png', alt: 'Cormacarena' },
  { src: '/assets/clients/corpoguajira-v2.png', alt: 'Corpoguajira' },
  { src: '/assets/clients/gov-narino-v2.jpg', alt: 'Gobernación de Nariño' },
  { src: '/assets/clients/marn-el-salvador.png', alt: 'Gobierno de El Salvador — MARN', aliases: ['Ministerio de Medio Ambiente y Recursos Naturales', 'Gobierno de El Salvador'] },
  { src: '/assets/clients/min-amb-ecuador-v2.png', alt: 'Ministerio del Ambiente de Ecuador', aliases: ['Ministerio del Ambiente, Agua y Transición Ecológica'] },
  { src: '/assets/clients/serna-honduras.png', alt: 'Gobierno de Honduras — SERNA', aliases: ['Secretaría de Recursos Naturales y Ambiente (SERNA)', 'Gobierno de Honduras'] },

  // Clientes de CarbonBox (logos aportados por el equipo, agosto 2026) —
  // ver los proyectos correspondientes en PROJECTS, área 'carbonbox'.
  { src: '/assets/clients/biomax.png', alt: 'Biomax Biocombustibles' },
  { src: '/assets/clients/agrosavia-v2.png', alt: 'AGROSAVIA' },
  { src: '/assets/clients/zhana-solutions.svg', alt: 'Zhana Solutions Green Engineering' },
  { src: '/assets/clients/copropiedad-zf-v2.png', alt: 'Co-propiedad Zona Franca de Bogotá' },
  { src: '/assets/clients/cafe-misiones.jpg', alt: 'Hacienda Café Misiones' },
  { src: '/assets/clients/colegio-anglo.png', alt: 'Colegio Anglo Colombiano' },
  { src: '/assets/clients/ebsa.png', alt: 'Empresa de Energía de Boyacá' },
  { src: '/assets/clients/gec-ecoenterprises-v2.png', alt: 'GEC EcoEnterprises Management' },
  { src: '/assets/clients/cleantechhub-v2.png', alt: 'CleanTechHub' },
  { src: '/assets/clients/paramo-presenta-v2.png', alt: 'Páramo Presenta' },
  { src: '/assets/clients/candes-v2.jpg', alt: 'CANDES' },
  { src: '/assets/clients/eternit.webp', alt: 'Eternit Colombia' },
  { src: '/assets/clients/comfama-v2.webp', alt: 'Comfama' },
  { src: '/assets/clients/cataexport-v2.webp', alt: 'CataExport' },
  { src: '/assets/clients/weia.png', alt: 'WEIA' },
  { src: '/assets/clients/colgas.webp', alt: 'Colgas' },
  { src: '/assets/clients/spec-lng-v2.jpg', alt: 'SPEC LNG' },
  { src: '/assets/clients/asobancaria-v2.png', alt: 'Asobancaria' },
  { src: '/assets/clients/fsfb-v2.png', alt: 'Fundación Santa Fé de Bogotá' },
  { src: '/assets/clients/parker.webp', alt: 'Parker' },
  { src: '/assets/clients/ambielegsa.png', alt: 'AMBIELEGSA' },
  { src: '/assets/clients/jeronimo-martins-v2.webp', alt: 'Jerónimo Martins' },
  { src: '/assets/clients/linktic.svg', alt: 'LinkTic' },
  { src: '/assets/clients/biodiversal-v2.png', alt: 'Biodiversal' },
  { src: '/assets/clients/control-ambiental-colombia.jpg', alt: 'Control Ambiental de Colombia' },
  { src: '/assets/clients/ipsos.webp', alt: 'IPSOS' },
];

// Estadísticas de presencia por país para el mapa interactivo (id
// map__grid). `count` sale de la matriz de experiencia KIMSA 2026
// (hoja de cálculo aportada por el equipo, ago-2026): se contaron los
// proyectos por país de implementación, incluyendo proyectos regionales
// que listan varios países (se suman a cada uno). `code` es el ISO
// 3166-1 alfa-2 usado por jsvectormap para pintar la región en el mapa.
// Guatemala y Panamá se retiraron de la lista: la matriz no registra
// ningún proyecto en esos países (decisión confirmada, ago-2026).
export interface CountryStat {
  name: string;
  code: string;
  count: number;
  highlights: string[];
  highlights_en?: string[];
}
export function localizeCountryStat(c: CountryStat, lang: 'es' | 'en') {
  return {
    ...c,
    name: localizeCountryName(c.name, lang),
    // Nombre sin localizar: coincide con `Project.country` (ver PROJECT_COUNTRIES),
    // que nunca se traduce — se usa para armar el enlace a /proyectos?country=...
    rawName: c.name,
    highlights: lang === 'en' ? c.highlights_en ?? c.highlights : c.highlights,
  };
}
export const COUNTRY_STATS: CountryStat[] = [
  {
    name: 'Colombia', code: 'CO', count: 45,
    highlights: [
      'Huella de carbono corporativa con CarbonBox (Biomax, Agrosavia, Ecopetrol y más)',
      'Plan Integral de Cambio Climático Territorial de Nariño',
      'Evaluación ambiental de sistemas de información del Gobierno (DNP)',
    ],
    highlights_en: [
      'Corporate carbon footprint with CarbonBox (Biomax, Agrosavia, Ecopetrol, and more)',
      "Nariño's Territorial Comprehensive Climate Change Plan",
      "Environmental assessment of the Government's information systems (DNP)",
    ],
  },
  {
    name: 'Costa Rica', code: 'CR', count: 3,
    highlights: ['Hoja de ruta para la NDC Mejorada 2025-2030 de Costa Rica'],
    highlights_en: ["Roadmap for Costa Rica's Improved NDC 2025-2030"],
  },
  {
    name: 'Ecuador', code: 'EC', count: 4,
    highlights: [
      'Revisión del sistema MRV agrícola (Ecuador / EUROCLIMA)',
      'Huella de carbono e hídrica organizacional con CarbonBox',
    ],
    highlights_en: [
      'Review of the agricultural MRV system (Ecuador / EUROCLIMA)',
      'Organizational carbon and water footprint with CarbonBox',
    ],
  },
  {
    name: 'Honduras', code: 'HN', count: 2,
    highlights: [
      'Segundo Informe Bienal de Actualización (BUR) e inventario GEI',
      'Consulta y Análisis Internacional (ICA) del 2BUR',
    ],
    highlights_en: [
      'Second Biennial Update Report (BUR) and GHG inventory',
      'International Consultation and Analysis (ICA) of the 2BUR',
    ],
  },
  {
    name: 'El Salvador', code: 'SV', count: 2,
    highlights: [
      'Actualización de la NDC 3.0 de El Salvador',
      'Cuantificación de la contribución de El Salvador al cambio climático',
    ],
    highlights_en: [
      "Update of El Salvador's NDC 3.0",
      "Quantifying El Salvador's contribution to climate change",
    ],
  },
  {
    name: 'México', code: 'MX', count: 2,
    highlights: [
      'Huella de carbono corporativa 2025 con CarbonBox (Business Travel Consulting)',
      'Estimación de impacto en carbono de 22 emprendimientos (CarbonBox)',
    ],
    highlights_en: [
      '2025 corporate carbon footprint with CarbonBox (Business Travel Consulting)',
      'Carbon impact estimation for 22 startups (CarbonBox)',
    ],
  },
  {
    name: 'Perú', code: 'PE', count: 3,
    highlights: [
      'Huella de carbono organizacional con CarbonBox',
      'Estimación de impacto en carbono de 22 emprendimientos',
    ],
    highlights_en: [
      'Organizational carbon footprint with CarbonBox',
      'Carbon impact estimation for 22 startups',
    ],
  },
  {
    name: 'Argentina', code: 'AR', count: 2,
    highlights: [
      'Huella de carbono corporativa 2025 con CarbonBox (Parker)',
      'Estimación de impacto en carbono de 22 emprendimientos (CleanTechHub)',
    ],
    highlights_en: [
      '2025 corporate carbon footprint with CarbonBox (Parker)',
      'Carbon impact estimation for 22 startups (CleanTechHub)',
    ],
  },
];

export type AreaKey = 'gestion' | 'psicologia' | 'carbonbox';

export interface Area {
  key: AreaKey;
  label: string;
  color: string;
  href: string;
}
export const AREAS: Area[] = [
  { key: 'gestion', label: 'Gestión Climática', color: 'var(--kimsa-forest)', href: '/servicios/gestion-climatica' },
  { key: 'psicologia', label: 'Psicología Ambiental', color: 'var(--kimsa-terracotta)', href: '/servicios/psicologia-ambiental' },
  { key: 'carbonbox', label: 'CarbonBox', color: 'var(--kimsa-plum)', href: '/servicios/carbonbox' },
];
export const AREA_LABEL: Record<AreaKey, string> = {
  gestion: 'Gestión Climática',
  psicologia: 'Psicología Ambiental',
  carbonbox: 'CarbonBox',
};
export const AREA_LABEL_EN: Record<AreaKey, string> = {
  gestion: 'Climate Management',
  psicologia: 'Environmental Psychology',
  carbonbox: 'CarbonBox',
};
export function areaLabel(area: AreaKey, lang: 'es' | 'en') {
  return lang === 'en' ? AREA_LABEL_EN[area] : AREA_LABEL[area];
}
export const AREA_COLOR: Record<AreaKey, string> = {
  gestion: 'var(--kimsa-forest)',
  psicologia: 'var(--kimsa-terracotta)',
  carbonbox: 'var(--kimsa-plum)',
};

// Nombres de país en inglés — solo para mostrar en /en; el valor canónico
// (usado para filtrar y para el campo `country` de cada proyecto) sigue
// siendo el español, así que no hace falta duplicar datos por país.
const COUNTRY_NAME_EN: Record<string, string> = {
  Colombia: 'Colombia',
  Ecuador: 'Ecuador',
  'El Salvador': 'El Salvador',
  Honduras: 'Honduras',
  'Costa Rica': 'Costa Rica',
  Perú: 'Peru',
  Argentina: 'Argentina',
  México: 'Mexico',
  Multirregional: 'Multi-regional',
  'América Latina': 'Latin America',
  'América Latina y el Caribe': 'Latin America and the Caribbean',
};
export function localizeCountryName(country: string, lang: 'es' | 'en'): string {
  return lang === 'en' ? (COUNTRY_NAME_EN[country] ?? country) : country;
}

export interface Project {
  slug: string;
  title: string;
  area: AreaKey;
  client: string;
  country: string;
  year?: string;
  summary: string;
  description: string;
  tags: string[];
  tint: string; // tono del placeholder de foto
  image?: string; // ruta de la foto real cuando esté disponible
  publicationUrl?: string; // enlace a la publicación de este proyecto en DOCUMENTS (si existe)
  // Campos en inglés para /en — client, country, tint, image y
  // publicationUrl no se traducen (nombres propios / no dependen del idioma).
  title_en?: string;
  summary_en?: string;
  description_en?: string;
  tags_en?: string[];
}

// Proyectos sin foto real todavía usan el logo del cliente (carpeta
// /assets/clients) como imagen provisional de la tarjeta — ver
// src/data/site.ts PROJECTS, ago-2026. A diferencia de una foto, un logo no
// debe recortarse con object-fit:cover (se ve gigante/cortado): las tarjetas
// que lo detectan lo muestran en su tamaño real, centrado y con más aire.
// Dos proyectos usan un logo compuesto guardado en /assets/projects (no
// /assets/clients) porque combina varios logos en una sola imagen — se
// listan aparte para que también reciban el mismo tratamiento.
const LOGO_STYLE_IMAGES = new Set([
  '/assets/projects/euroclima-dialogo-giz.png',
  '/assets/projects/calculadora-seaflower.png',
  '/assets/projects/dnp-footprint-deval.png',
  '/assets/projects/nama-forestal-arboles-fincas.png',
  '/assets/projects/transforma-caf-ndc-ods.png',
  '/assets/projects/calculadora-idartes.png',
  '/assets/projects/ndc-progreso-costa-rica.png',
  '/assets/projects/ec-leds-alliance-ciat.jpg',
  '/assets/projects/ndc-el-salvador-2022-cuantificacion.png',
  '/assets/projects/gtrap-huella-matriz-ambiental.png',
]);
export function isClientLogoImage(image?: string): boolean {
  if (!image) return false;
  return image.startsWith('/assets/clients/') || LOGO_STYLE_IMAGES.has(image);
}

// Devuelve el campo del proyecto en el idioma dado, con fallback a español
// si aún no se cargó la traducción de ese campo.
export function localizeProject(p: Project, lang: 'es' | 'en') {
  if (lang === 'es') return p;
  return {
    ...p,
    title: p.title_en ?? p.title,
    summary: p.summary_en ?? p.summary,
    description: p.description_en ?? p.description,
    tags: p.tags_en ?? p.tags,
  };
}

// Proyectos con la información real del sitio actual (kimsa.co) + los proyectos
// aportados por el equipo con sus fotografías. Nota: para varios proyectos nuevos
// el cliente/aliado está pendiente de confirmar (client: '').
export const PROJECTS: Project[] = [
  // ---------- Gestión Climática ----------
  {
    slug: 'ndc-3-el-salvador',
    title: 'Actualización de la NDC 3.0 y estructura de financiamiento climático en El Salvador',
    area: 'gestion',
    client: 'PNUD El Salvador · Ministerio de Medio Ambiente y Recursos Naturales (MARN)',
    country: 'El Salvador',
    year: '2025–2026',
    summary:
      'Evaluamos la NDC 2.0, redactamos la NDC 3.0 presentada ante la CMNUCC y diseñamos su estructura de financiamiento climático.',
    description:
      'El Salvador necesitaba una NDC 3.0 más ambiciosa y, sobre todo, financiable. Evaluamos el progreso, las barreras y las lecciones de la NDC 2.0 (2021) y analizamos la eficiencia del financiamiento que recibió. Con esa base desarrollamos los medios de implementación de la nueva NDC (financiamiento, tecnología y capacidades), identificamos Programas Nacionales de Alto Impacto Climático (PNAIC) y redactamos y consolidamos el documento final presentado oficialmente ante la CMNUCC. Cerramos con una estructura de financiamiento climático para movilizar recursos públicos, privados e internacionales hacia su implementación.',
    tags: ['NDC 3.0', 'Financiamiento climático', 'CMNUCC', 'Enfoque multisectorial'],
    tint: 'forest',
    image: '/assets/projects/ndc-3-el-salvador.jpg',
    publicationUrl: 'https://unfccc.int/sites/default/files/2025-12/NDC%20EL%20SALVADOR%202025-%20VF.pdf',
    title_en: "Update of El Salvador's NDC 3.0 and climate finance structure",
    summary_en:
      'We assessed the NDC 2.0, drafted the NDC 3.0 submitted to the UNFCCC, and designed its climate finance structure.',
    description_en:
      "El Salvador needed a more ambitious NDC 3.0 and, above all, one that could be financed. We assessed the progress, barriers, and lessons of the NDC 2.0 (2021) and analyzed the efficiency of the finance it received. On that basis we developed the new NDC's means of implementation (finance, technology, and capacity), identified High-Impact National Climate Programs (PNAIC), and drafted and consolidated the final document officially submitted to the UNFCCC. We closed with a climate finance structure to mobilize public, private, and international resources for its implementation.",
    tags_en: ['NDC 3.0', 'Climate finance', 'UNFCCC', 'Multisector approach'],
  },
  {
    slug: 'ndc-3-costa-rica',
    title: 'Diseño de hoja de ruta y propuesta metodológica para la NDC 3.0 de Costa Rica',
    area: 'gestion',
    client: 'Fundecooperación · Ministerio de Ambiente y Energía (MINAE)',
    country: 'Costa Rica',
    year: '2024',
    summary:
      'Diseñamos la hoja de ruta, la gobernanza y la metodología participativa con la que Costa Rica construyó su NDC 2025–2035.',
    description:
      'Antes de escribir una NDC hay que acordar cómo se va a construir. Mapeamos a los actores de gobierno, sector privado, sociedad civil y academia, y diseñamos la propuesta metodológica y el cronograma para la NDC 3.0, coherente con el Plan Nacional de Desarrollo, el Plan Nacional de Descarbonización, el Plan Nacional de Adaptación y el primer Informe Bienal de Transparencia (BTR). Validamos objetivos, metodologías y gobernanza en consultas virtuales y presenciales con expertos, validadas con Fundecooperación, el PNUMA y la Dirección de Cambio Climático. Sistematizamos el avance de la NDC 2020 y produjimos una nota técnica para explicar el proceso a públicos no especializados.',
    tags: ['NDC 3.0', 'Hoja de ruta', 'Mitigación', 'Adaptación'],
    tint: 'forest',
    image: '/assets/projects/ndc-3-costa-rica.jpg',
    publicationUrl: 'https://cambioclimatico.minae.go.cr/wp-content/uploads/2026/01/CND-2025-2035-ULT-VERs.pdf',
    title_en: "Roadmap and methodological proposal for Costa Rica's NDC 3.0",
    summary_en:
      'We designed the roadmap, governance, and participatory methodology Costa Rica used to build its 2025–2035 NDC.',
    description_en:
      'Before writing an NDC, you have to agree on how it will be built. We mapped stakeholders from government, the private sector, civil society, and academia, and designed the methodological proposal and timeline for the NDC 3.0, consistent with the National Development Plan, the National Decarbonization Plan, the National Adaptation Plan, and the first Biennial Transparency Report (BTR). We validated objectives, methodologies, and governance in virtual and in-person expert consultations, with Fundecooperación, UNEP, and the Climate Change Directorate. We systematized the progress of the 2020 NDC and produced a technical note explaining the process to non-specialist audiences.',
    tags_en: ['NDC 3.0', 'Roadmap', 'Mitigation', 'Adaptation'],
  },
  {
    slug: 'mrv-ecuador',
    title: 'Revisión y fortalecimiento del sistema MRV agrícola de la NDC de Ecuador',
    area: 'gestion',
    client: 'Expertise France (EUROCLIMA) · Ministerio del Ambiente, Agua y Transición Ecológica · Ministerio de Agricultura y Ganadería',
    country: 'Ecuador',
    year: '2024',
    summary:
      'Revisamos a fondo el sistema MRV agrícola de la NDC de Ecuador y entregamos recomendaciones para alinearlo con el Marco de Transparencia Reforzado.',
    description:
      'Ecuador había diseñado el módulo agrícola de su sistema de Monitoreo, Reporte y Verificación (MRV) y necesitaba una mirada experta independiente antes de operarlo. Revisamos y retroalimentamos cuatro frentes: la metodología de recolección y procesamiento de datos, el diseño operativo del sistema, los arreglos institucionales y normativos para su funcionamiento, y la herramienta de almacenamiento y análisis de información. Entregamos un informe de apreciaciones y otro de recomendaciones, puntos de mejora y alertas para ambos ministerios, orientados a la coherencia con el Acuerdo de París y la integración con el inventario nacional de GEI.',
    tags: ['Sistema MRV', 'AFOLU', 'EUROCLIMA', 'Marco de Transparencia'],
    tint: 'sunset',
    image: '/assets/projects/mrv-ecuador.jpg',
    title_en: "Review and strengthening of the agricultural MRV system of Ecuador's NDC",
    summary_en:
      "We thoroughly reviewed the agricultural MRV system of Ecuador's NDC and delivered recommendations to align it with the Enhanced Transparency Framework.",
    description_en:
      'Ecuador had designed the agricultural module of its Monitoring, Reporting, and Verification (MRV) system and needed an independent expert review before operating it. We reviewed and gave feedback on four fronts: the data collection and processing methodology, the operational design of the system, the institutional and regulatory arrangements for its operation, and the information storage and analysis tool. We delivered an assessment report and a report of recommendations, areas for improvement, and warnings for both ministries, focused on consistency with the Paris Agreement and integration with the national GHG inventory.',
    tags_en: ['MRV system', 'AFOLU', 'EUROCLIMA', 'Transparency Framework'],
  },
  {
    slug: 'honduras-ica-bur',
    title: 'Respuesta a la revisión internacional (ICA) del Segundo BUR de Honduras',
    area: 'gestion',
    client: 'PNUD Honduras · Secretaría de Recursos Naturales y Ambiente (SERNA)',
    country: 'Honduras',
    year: '2024',
    summary:
      'Acompañamos a Honduras a responder y defender ante expertos de la CMNUCC la revisión internacional de su Segundo BUR.',
    description:
      'Tras elaborar el BUR2 de Honduras, el PNUD volvió a contratarnos para el paso siguiente: la Consulta y Análisis Internacional (ICA). Revisamos el análisis técnico del equipo de expertos de la CMNUCC, coordinamos a los profesionales sectoriales que habían participado en el reporte y gestionamos la respuesta a más de 60 preguntas y observaciones. Apoyamos técnicamente su defensa ante los expertos y entregamos un informe final con todas las respuestas y recomendaciones para fortalecer las capacidades nacionales en inventarios, seguimiento de la mitigación y MRV.',
    tags: ['BUR', 'ICA', 'Transparencia', 'CMNUCC'],
    tint: 'river',
    image: '/assets/projects/honduras-ica-bur.jpg',
    title_en: "Response to the international review (ICA) of Honduras's Second BUR",
    summary_en:
      'We supported Honduras in answering and defending the international review of its Second BUR before UNFCCC experts.',
    description_en:
      "After we prepared Honduras's BUR2, UNDP hired us again for the next step: the International Consultation and Analysis (ICA). We reviewed the technical analysis by the UNFCCC team of experts, coordinated the sector professionals who had worked on the report, and managed the response to more than 60 questions and comments. We provided technical support for its defense before the experts and delivered a final report with all the answers and recommendations to strengthen national capacities in inventories, mitigation tracking, and MRV.",
    tags_en: ['BUR', 'ICA', 'Transparency', 'UNFCCC'],
  },
  {
    slug: 'honduras-gei-bur',
    title: 'Inventario Nacional de GEI 2016–2020 y Segundo BUR de Honduras',
    area: 'gestion',
    client: 'PNUD Honduras · Secretaría de Recursos Naturales y Ambiente (SERNA)',
    country: 'Honduras',
    year: '2023–2024',
    summary:
      'Coordinamos el Inventario Nacional de GEI 2016–2020 de Honduras y redactamos su Segundo Informe Bienal de Actualización ante la CMNUCC.',
    description:
      'Coordinamos técnicamente la estimación de emisiones y remociones de GEI de todos los sectores del país, siguiendo las Directrices del IPCC de 2006: AFOLU (con énfasis en el sector forestal), Energía, Procesos Industriales y Uso de Productos (IPPU) y Residuos. Entregamos el Informe del Inventario Nacional (NIR) para el periodo 2016–2020, el documento completo del BUR2 listo para diagramación y un plan de capacitación para la Dirección Nacional de Cambio Climático. El trabajo permitió a Honduras reportar oficialmente ante la CMNUCC con un inventario transparente, completo y comparable.',
    tags: ['Inventario GEI', 'BUR', 'Reportes', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/honduras-gei-bur.jpg',
    publicationUrl: 'https://unfccc.int/sites/default/files/resource/Document%20NIR%20Hn%202024.pdf',
    title_en: 'National GHG Inventory 2016–2020 and Second BUR of Honduras',
    summary_en:
      "We coordinated Honduras's 2016–2020 National GHG Inventory and drafted its Second Biennial Update Report to the UNFCCC.",
    description_en:
      "We provided technical coordination for estimating GHG emissions and removals across all of the country's sectors, following the 2006 IPCC Guidelines: AFOLU (with emphasis on forestry), Energy, Industrial Processes and Product Use (IPPU), and Waste. We delivered the National Inventory Report (NIR) for 2016–2020, the complete BUR2 document ready for layout, and a training plan for the National Climate Change Directorate. This work allowed Honduras to report officially to the UNFCCC with a transparent, complete, and comparable inventory.",
    tags_en: ['GHG inventory', 'BUR', 'Reports', 'Mitigation'],
  },
  {
    slug: 'estrategias-meta',
    title: 'Estrategias de cambio climático para 9 municipios del Meta',
    area: 'gestion',
    client: 'Unión Temporal Biometa · Cormacarena',
    country: 'Colombia',
    year: '2018–2019',
    summary:
      'Construimos estrategias de mitigación, adaptación y educación climática para nueve municipios del Meta.',
    description:
      'Coordinamos el equipo y lideramos el componente de mitigación de las estrategias climáticas municipales de Villavicencio, Puerto López, Puerto Lleras, El Castillo, Lejanías, Cabuyaro, San Martín, San Juanito y El Calvario. Cada municipio quedó con una estrategia propia de mitigación, adaptación y educación al cambio climático, construida en territorio con las administraciones locales y en el marco de la gestión de Cormacarena.',
    tags: ['Estrategia municipal', 'Territorio', 'Adaptación', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/estrategias-meta.jpg',
    title_en: 'Climate change strategies for 9 municipalities in Meta',
    summary_en:
      'We built climate mitigation, adaptation, and education strategies for nine municipalities in Meta.',
    description_en:
      "We coordinated the team and led the mitigation component of the municipal climate strategies for Villavicencio, Puerto López, Puerto Lleras, El Castillo, Lejanías, Cabuyaro, San Martín, San Juanito, and El Calvario. Each municipality now has its own climate change mitigation, adaptation, and education strategy, built on the ground with local governments and within Cormacarena's management framework.",
    tags_en: ['Municipal strategy', 'Territory', 'Adaptation', 'Mitigation'],
  },
  {
    slug: 'licenciamiento-cc',
    title: 'Incorporación del cambio climático en los proyectos licenciados por la ANLA',
    area: 'gestion',
    client: 'Banco Interamericano de Desarrollo (BID) · Autoridad Nacional de Licencias Ambientales (ANLA)',
    country: 'Colombia',
    year: '2022–2023',
    summary:
      'Fortalecimos a la ANLA para exigir y hacer seguimiento a la mitigación y adaptación en los proyectos que licencia.',
    description:
      'La ANLA impone obligaciones de adaptación y mitigación a cientos de proyectos, pero esa información no se conectaba con los sistemas nacionales. Desarrollamos jornadas de fortalecimiento de capacidades en cambio climático para sus profesionales. Diseñamos una propuesta conceptual para articular la información climática de la ANLA con el SIAC y el SNICC del Ministerio de Ambiente y el IDEAM. También propusimos cómo conectar las compensaciones del medio biótico con el mercado de carbono, con criterios de adicionalidad y adaptación.',
    tags: ['Licenciamiento', 'Evaluación ambiental', 'Adaptación'],
    tint: 'river',
    image: '/assets/projects/licenciamiento-cc.jpg',
    title_en: 'Integrating climate change into projects licensed by ANLA',
    summary_en:
      'We strengthened ANLA to require and track mitigation and adaptation in the projects it licenses.',
    description_en:
      "ANLA imposes adaptation and mitigation obligations on hundreds of projects, but that information was not connected to national systems. We delivered climate change capacity-building sessions for its staff. We designed a conceptual proposal to link ANLA's climate information with the SIAC and SNICC of the Ministry of Environment and IDEAM. We also proposed how to connect biotic offsets with the carbon market, using additionality and adaptation criteria.",
    tags_en: ['Licensing', 'Environmental assessment', 'Adaptation'],
  },
  {
    slug: 'picct-narino',
    title: 'Plan Integral de Gestión del Cambio Climático Territorial de Nariño 2019–2035',
    area: 'gestion',
    client: 'Gobernación de Nariño',
    country: 'Colombia',
    year: '2018–2019',
    summary:
      'Formulamos con la Gobernación el plan "Nariño actúa por el clima 2019–2035", con su línea base de emisiones, financiamiento y MRV.',
    description:
      'Durante dos años acompañamos a la Secretaría de Ambiente y Desarrollo Sostenible en la formulación del plan climático del departamento. Analizamos las emisiones de GEI de Nariño a partir del Inventario Nacional del IDEAM, junto con datos socioeconómicos y geoespaciales de sus actividades productivas. Mapeamos el financiamiento climático disponible y redactamos los capítulos de ejes estratégicos, financiamiento y MRV. También estructuramos el diplomado "Nariño actúa por el clima" para formar a los actores que implementarán el plan.',
    tags: ['PICCT', 'Territorio', 'Adaptación', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/picct-narino.jpg',
    publicationUrl: 'https://2020-2023.narino.gov.co/wp-content/uploads/Diagramacion_pigcct-Fondo-Accion-y-Gobernacion.pdf',
    title_en: "Nariño's Territorial Comprehensive Climate Change Management Plan 2019–2035",
    summary_en:
      'Together with the departmental government, we formulated the plan "Nariño acts for the climate 2019–2035", with its emissions baseline, finance, and MRV.',
    description_en:
      "For two years we supported the Secretariat of Environment and Sustainable Development in formulating the department's climate plan. We analyzed Nariño's GHG emissions based on IDEAM's National Inventory, together with socioeconomic and geospatial data on its productive activities. We mapped the available climate finance and drafted the chapters on strategic pillars, finance, and MRV. We also structured the \"Nariño acts for the climate\" diploma course to train the stakeholders who will implement the plan.",
    tags_en: ['PICCT', 'Territory', 'Adaptation', 'Mitigation'],
  },
  {
    slug: 'gestion-urbana-pasto',
    title: 'Modelo y portafolio de gestión climática para San Juan de Pasto',
    area: 'gestion',
    client: 'FLACSO Ecuador · IDRC Canadá · Alcaldía de San Juan de Pasto',
    country: 'Colombia',
    year: '2020',
    summary:
      'Diseñamos el modelo de gestión climática de Pasto, con su perfil de adaptación, portafolio de acciones y hoja de ruta de corto, mediano y largo plazo.',
    description:
      'En el marco del programa regional "Construyendo liderazgo climático en América Latina", ayudamos a Pasto a pasar de diagnósticos sueltos a un modelo de decisión. Construimos el perfil climático de la ciudad con los indicadores de adaptación de la Tercera Comunicación Nacional y del plan departamental. Elaboramos un portafolio de acciones de mitigación y adaptación aplicables al municipio. Diseñamos el modelo de gestión climática con visión, objetivos, metas y una hoja de ruta de corto, mediano y largo plazo.',
    tags: ['Gestión urbana', 'Ciudades', 'Resiliencia', 'Mitigación'],
    tint: 'river',
    image: '/assets/projects/gestion-urbana-pasto.jpg',
    title_en: 'Climate management model and portfolio for San Juan de Pasto',
    summary_en:
      "We designed Pasto's climate management model, with its adaptation profile, portfolio of actions, and a short-, medium-, and long-term roadmap.",
    description_en:
      "Under the regional program \"Building climate leadership in Latin America\", we helped Pasto move from scattered diagnoses to a decision-making model. We built the city's climate profile using the adaptation indicators of the Third National Communication and the departmental plan. We prepared a portfolio of mitigation and adaptation actions applicable to the municipality. We designed the climate management model with a vision, objectives, targets, and a short-, medium-, and long-term roadmap.",
    tags_en: ['Urban management', 'Cities', 'Resilience', 'Mitigation'],
  },

  // Proyectos aportados por la Matriz consolidada de experiencia KIMSA 2026
  // (hoja de cálculo del equipo, ago-2026) que no estaban cargados.
  {
    slug: 'dnp-footprint-deval',
    title: 'Evaluación de sostenibilidad ambiental con enfoque Footprint (EvalConnect)',
    area: 'gestion',
    client: 'DEval – Instituto Alemán de Evaluación del Desarrollo · Departamento Nacional de Planeación (DNP)',
    country: 'Colombia',
    year: '2025–2026',
    summary:
      'Incorporamos la sostenibilidad ambiental en una evaluación de política pública del DNP con el enfoque de Huella Ecológica de DEval.',
    description:
      'En el marco de EvalConnect, iniciativa que fortalece los sistemas nacionales de evaluación mediante alianzas Sur-Sur-Norte, integramos el componente ambiental en el diseño de una evaluación del DNP. Formulamos las hipótesis de evaluación y definimos escalas para agua, suelo y equidad. Diseñamos y validamos la matriz de evaluación y los instrumentos cualitativos, y dejamos insumos técnicos para los términos de referencia del operador de campo. El proyecto cierra con el informe final de la evaluación.',
    tags: ['Evaluación de políticas públicas', 'Huella ecológica'],
    tint: 'earth',
    image: '/assets/projects/sostenibilidad-dnp-colombia.jpg',
    title_en: 'Environmental sustainability evaluation with a Footprint approach (EvalConnect)',
    summary_en:
      "We integrated environmental sustainability into a DNP public policy evaluation using DEval's Ecological Footprint approach.",
    description_en:
      "Under EvalConnect, an initiative that strengthens national evaluation systems through South-South-North partnerships, we integrated the environmental component into the design of a DNP evaluation. We formulated the evaluation hypotheses and defined scales for water, soil, and equity. We designed and validated the evaluation matrix and the qualitative instruments, and provided technical inputs for the field operator's terms of reference. The project closes with the final evaluation report.",
    tags_en: ['Public policy evaluation', 'Ecological footprint'],
  },
  {
    slug: 'ndc-el-salvador-2022-cuantificacion',
    title: 'Actualización de la NDC 2021 de El Salvador con enfoque multisectorial',
    area: 'gestion',
    client: 'PNUD El Salvador · Ministerio de Medio Ambiente y Recursos Naturales (MARN)',
    country: 'El Salvador',
    year: '2022',
    summary:
      'Calculamos la meta nacional de mitigación de El Salvador y definimos medidas de adaptación para su NDC actualizada.',
    description:
      'Calculamos la meta global de mitigación del país integrando Energía, AFOLU, Residuos Sólidos e IPPU, y definimos y cuantificamos medidas de mitigación sectoriales con escenarios de referencia. Identificamos medidas de adaptación para Biodiversidad y Ecosistemas, Ciudades y Recursos Hídricos, validadas en mesas de trabajo con entidades nacionales. Capacitamos a los equipos técnicos para el seguimiento de las metas y entregamos metodologías, memorias de cálculo y bases de datos. Los resultados quedaron integrados en el documento oficial "NDC Actualizada El Salvador 2021".',
    tags: ['NDC', 'Acuerdo de París', 'Política y gobernanza climática'],
    tint: 'sunset',
    image: '/assets/projects/ndc-el-salvador-2022-cuantificacion.png',
    title_en: "Multisectoral update of El Salvador's 2021 NDC",
    summary_en:
      "We calculated El Salvador's national mitigation target and defined adaptation measures for its updated NDC.",
    description_en:
      "We calculated the country's overall mitigation target by integrating Energy, AFOLU, Solid Waste, and IPPU, and defined and quantified sectoral mitigation measures with reference scenarios. We identified adaptation measures for Biodiversity and Ecosystems, Cities, and Water Resources, validated in working groups with national entities. We trained technical teams to track the targets and delivered methodologies, calculation reports, and databases. The results were integrated into the official document \"Updated NDC El Salvador 2021\".",
    tags_en: ['NDC', 'Paris Agreement', 'Climate policy and governance'],
  },
  {
    slug: 'ec-leds-alliance-ciat',
    title: 'Fortalecimiento de políticas de desarrollo bajo en carbono en el sector agropecuario (EC-LEDS)',
    area: 'gestion',
    client: 'Alliance Bioversity-CIAT · Ministerio de Agricultura y Desarrollo Rural',
    country: 'Colombia',
    year: '2020',
    summary:
      'Llevamos los resultados de la investigación EC-LEDS a la política agropecuaria y creamos el módulo de mitigación del portal climático de MinAgricultura.',
    description:
      'La investigación EC-LEDS había generado evidencia valiosa sobre mitigación agropecuaria que debía llegar a quienes deciden. Facilitamos el diálogo entre los líderes del proyecto y los formuladores de política, y co-construimos con ellos un plan de acción para escalar sus resultados. Produjimos un policy brief, infografías, blogs y reportes, y coorganizamos el evento de cierre con la Embajada de Estados Unidos. Además, desarrollamos el menú "Sector Agropecuario Bajo en Carbono" en el portal de cambio climático del Ministerio y migramos el portal a sus servidores.',
    tags: ['Política y gobernanza climática', 'Mitigación', 'Agricultura'],
    tint: 'earth',
    image: '/assets/projects/ec-leds-alliance-ciat.jpg',
    publicationUrl: 'https://cgspace.cgiar.org/server/api/core/bitstreams/8702f492-2bd0-4057-bf08-cdcc701d567c/content',
    title_en: 'Strengthening low-carbon development policies in the agricultural sector (EC-LEDS)',
    summary_en:
      "We brought the EC-LEDS research results into agricultural policy and built the mitigation module of the Ministry of Agriculture's climate portal.",
    description_en:
      "The EC-LEDS research had produced valuable evidence on agricultural mitigation that needed to reach decision-makers. We facilitated dialogue between the project leaders and policymakers and co-built an action plan with them to scale up its results. We produced a policy brief, infographics, blogs, and reports, and co-organized the closing event with the U.S. Embassy. We also developed the \"Low-Carbon Agricultural Sector\" menu on the Ministry's climate change portal and migrated the portal to its servers.",
    tags_en: ['Climate policy and governance', 'Mitigation', 'Agriculture'],
  },
  {
    slug: 'euroclima-dialogo-giz',
    title: 'Mecanismo de diálogo país para EUROCLIMA+',
    area: 'gestion',
    client: 'GIZ · Programa EUROCLIMA+',
    country: 'América Latina y el Caribe',
    year: '2018',
    summary:
      'Diseñamos la hoja de ruta del mecanismo de diálogo país de EUROCLIMA+, en articulación con el NDC Partnership.',
    description:
      'Entrevistamos a instancias de coordinación política y técnica y a agencias implementadoras, y analizamos fortalezas y oportunidades frente a iniciativas como SPIPA y NDC Assist. Con eso diseñamos un mecanismo de diálogo fortalecido para el componente de Gobernanza Climática, con responsabilidades, criterios para países piloto, calendario y recursos. Agrupamos a los países en cuatro grupos según su avance en la implementación de las NDC. También recomendamos cómo involucrar a las delegaciones de la Unión Europea y colaborar con la Unidad de Apoyo del NDC Partnership.',
    tags: ['Política y gobernanza climática', 'EUROCLIMA+'],
    tint: 'forest',
    image: '/assets/projects/euroclima-dialogo-giz.png',
    title_en: 'Country dialogue mechanism for EUROCLIMA+',
    summary_en:
      "We designed the roadmap for EUROCLIMA+'s country dialogue mechanism, in coordination with the NDC Partnership.",
    description_en:
      'We interviewed political and technical coordination bodies and implementing agencies, and analyzed strengths and opportunities compared with initiatives such as SPIPA and NDC Assist. On that basis we designed a strengthened dialogue mechanism for the Climate Governance component, with responsibilities, criteria for pilot countries, a timeline, and resources. We grouped countries into four groups according to their progress in implementing their NDCs. We also recommended how to involve European Union delegations and collaborate with the NDC Partnership Support Unit.',
    tags_en: ['Climate policy and governance', 'EUROCLIMA+'],
  },
  {
    slug: 'nama-forestal-arboles-fincas',
    title: 'Los árboles en las fincas en la NAMA forestal de Colombia',
    area: 'gestion',
    client: 'World Agroforestry (ICRAF) · Ministerio de Ambiente y Desarrollo Sostenible',
    country: 'Colombia',
    year: '2018',
    summary:
      'Definimos cómo contar los árboles fuera del bosque en la NAMA forestal de Colombia y en su sistema MRV.',
    description:
      'Los árboles en fincas y sistemas agroforestales capturan carbono, pero quedaban invisibles en el diseño de la NAMA forestal. Con un enfoque de paisaje, caracterizamos los Árboles Fuera del Bosque (TBS), el MRV AFOLU y la NAMA, y analizamos el límite entre las definiciones de bosque y TBS. Identificamos las barreras para incluirlos y propusimos elementos para armonizar las definiciones de cobertura entre el MRV de la NAMA y los inventarios nacionales e internacionales.',
    tags: ['NAMA forestal', 'Investigación', 'Mitigación'],
    tint: 'river',
    image: '/assets/projects/nama-forestal-arboles-fincas.png',
    title_en: "Trees on farms in Colombia's forestry NAMA",
    summary_en:
      "We defined how to account for trees outside forests in Colombia's forestry NAMA and its MRV system.",
    description_en:
      "Trees on farms and in agroforestry systems capture carbon, but they were invisible in the design of the forestry NAMA. With a landscape approach, we characterized Trees Outside Forests (TOF), the AFOLU MRV, and the NAMA, and analyzed the boundary between the definitions of forest and TOF. We identified the barriers to including them and proposed elements to harmonize land cover definitions between the NAMA's MRV and national and international inventories.",
    tags_en: ['Forestry NAMA', 'Research', 'Mitigation'],
  },
  {
    slug: 'transforma-caf-ndc-ods',
    title: 'Metodología para vincular las operaciones de CAF con las NDC y los ODS',
    area: 'gestion',
    client: 'Transforma · EUROCLIMA',
    country: 'América Latina',
    year: '2018',
    summary:
      'Desarrollamos la metodología para medir cuánto aportan las operaciones de financiamiento de CAF a las NDC y los ODS.',
    description:
      'Aseguramos la calidad técnica de la metodología con la que CAF puede valorar la contribución de sus operaciones de financiamiento a las NDC y a los Objetivos de Desarrollo Sostenible de los países de EUROCLIMA. Aportamos los conceptos técnicos que definieron el enfoque y los entregables, y desarrollamos los indicadores de seguimiento a los ODS.',
    tags: ['Finanzas climáticas', 'NDC', 'ODS'],
    tint: 'dusk',
    image: '/assets/projects/transforma-caf-ndc-ods.png',
    title_en: "Methodology to link CAF's operations with NDCs and SDGs",
    summary_en:
      "We developed the methodology to measure how much CAF's financing operations contribute to the NDCs and the SDGs.",
    description_en:
      'We ensured the technical quality of the methodology CAF can use to value the contribution of its financing operations to the NDCs and Sustainable Development Goals of EUROCLIMA countries. We provided the technical concepts that defined the approach and deliverables, and developed the SDG tracking indicators.',
    tags_en: ['Climate finance', 'NDC', 'SDGs'],
  },
  {
    slug: 'tnc-compensaciones-biodiversidad',
    title: 'Articulación del cambio climático con las compensaciones por pérdida de biodiversidad en Colombia',
    area: 'gestion',
    client: 'The Nature Conservancy (TNC)',
    country: 'Colombia',
    year: '2018',
    summary:
      'Analizamos cómo incluir criterios de cambio climático y vulnerabilidad en la estrategia nacional de compensaciones por pérdida de biodiversidad.',
    description:
      'Las compensaciones ambientales de Colombia se diseñaron sin mirar el clima futuro. Revisamos el marco normativo nacional y regional de la estrategia de compensaciones frente a la Política Nacional de Cambio Climático, analizamos la vulnerabilidad en territorios seleccionados y estudiamos un caso real de implementación. Con eso evaluamos la viabilidad de incorporar criterios climáticos en la evaluación de impactos sobre la biodiversidad de los proyectos licenciados y en la selección de áreas a compensar, y aportamos el marco conceptual y metodológico para las recomendaciones de TNC.',
    tags: ['Compensaciones', 'Biodiversidad', 'Vulnerabilidad'],
    tint: 'earth',
    image: '/assets/clients/tnc-v2.jpg',
    title_en: 'Linking climate change with biodiversity loss offsets in Colombia',
    summary_en:
      "We analyzed how to include climate change and vulnerability criteria in Colombia's national strategy for biodiversity loss offsets.",
    description_en:
      "Colombia's environmental offsets were designed without looking at the future climate. We reviewed the national and regional regulatory framework of the offsets strategy against the National Climate Change Policy, analyzed vulnerability in selected territories, and studied a real implementation case. With that, we assessed the feasibility of incorporating climate criteria into the assessment of biodiversity impacts of licensed projects and into the selection of areas to offset, and provided the conceptual and methodological framework for TNC's recommendations.",
    tags_en: ['Compensation', 'Biodiversity', 'Vulnerability'],
  },
  {
    slug: 'tnc-seminario-monitoreo-forestal',
    title: 'Segundo Seminario Nacional de Monitoreo de la Cobertura Forestal',
    area: 'gestion',
    client: 'The Nature Conservancy · IDEAM',
    country: 'Colombia',
    year: '2017',
    summary:
      'Sistematizamos las memorias, análisis y recomendaciones del Segundo Seminario Nacional de Monitoreo de la Cobertura Forestal.',
    description:
      'Documentamos las discusiones del seminario que reunió a los actores del monitoreo de bosques en Colombia. Entregamos las memorias con análisis y recomendaciones para fortalecer el sistema nacional de monitoreo de la cobertura forestal que lidera el IDEAM.',
    tags: ['Monitoreo forestal', 'Investigación'],
    tint: 'forest',
    image: '/assets/clients/tnc-v2.jpg',
    title_en: 'Second National Forest Cover Monitoring Seminar',
    summary_en:
      'We systematized the proceedings, analysis, and recommendations of the Second National Forest Cover Monitoring Seminar.',
    description_en:
      "We documented the discussions of the seminar that brought together Colombia's forest monitoring stakeholders. We delivered the proceedings with analysis and recommendations to strengthen the national forest cover monitoring system led by IDEAM.",
    tags_en: ['Forest monitoring', 'Research'],
  },
  {
    slug: 'picc-la-guajira-hidrocaribe',
    title: 'Componente de mitigación del Plan Integral de Cambio Climático de La Guajira',
    area: 'gestion',
    client: 'Hidrocaribe Ltda · Corpoguajira',
    country: 'Colombia',
    year: '2017–2018',
    summary:
      'Construimos la línea base de emisiones y el portafolio de medidas de mitigación del PICC de La Guajira.',
    description:
      'Asesoramos la estructuración del plan climático del departamento y lideramos su componente de mitigación. Elaboramos la línea base de emisiones de GEI de La Guajira y un portafolio de medidas alineado con los compromisos nacionales. Diseñamos también la matriz de seguimiento a los programas de mitigación, para que Corpoguajira pueda medir su avance.',
    tags: ['PICC', 'Territorio', 'Mitigación'],
    tint: 'sunset',
    image: '/assets/clients/corpoguajira-v2.png',
    publicationUrl: 'https://wp.corpoguajira.gov.co/wp-content/uploads/2015/03/Plan-integral-de-cambio-climaticoPICC-La-Guajira.pdf',
    title_en: "Mitigation component of La Guajira's Comprehensive Climate Change Plan",
    summary_en:
      "We built the emissions baseline and the portfolio of mitigation measures for La Guajira's PICC.",
    description_en:
      "We advised on structuring the department's climate plan and led its mitigation component. We prepared La Guajira's GHG emissions baseline and a portfolio of measures aligned with national commitments. We also designed the tracking matrix for the mitigation programs, so Corpoguajira can measure its progress.",
    tags_en: ['PICC', 'Territory', 'Mitigation'],
  },
  {
    slug: 'innature-ceiba-bruja-financiamiento',
    title: 'Estrategia de financiamiento para la restauración de la Reserva Natural Ceiba Bruja',
    area: 'gestion',
    client: 'Fundación InnNature',
    country: 'Colombia',
    year: '2021',
    summary: 'Diseñamos la estrategia de financiamiento para la restauración activa y pasiva del bosque seco tropical de la Reserva Ceiba Bruja.',
    description:
      'Diseñamos e implementamos una estrategia para financiar medidas de adaptación basadas en la naturaleza (conservación y restauración) en la reserva, y apoyamos los análisis técnicos de restauración activa y pasiva. Es el inicio de la alianza con la Fundación InnNature, a la que hoy KIMSA destina el 1 % de sus utilidades.',
    tags: ['Financiamiento climático', 'Restauración', 'Adaptación basada en ecosistemas'],
    tint: 'forest',
    image: '/assets/projects/ceiba.jpg',
    title_en: 'Financing strategy for the restoration of the Ceiba Bruja Nature Reserve',
    summary_en: 'We designed the financing strategy for the active and passive restoration of the tropical dry forest in the Ceiba Bruja Reserve.',
    description_en:
      "We designed and implemented a strategy to finance nature-based adaptation measures (conservation and restoration) in the reserve, and supported the technical analyses for active and passive restoration. It marked the start of the alliance with the InnNature Foundation, to which KIMSA now allocates 1% of its profits.",
    tags_en: ['Climate finance', 'Restoration', 'Ecosystem-based adaptation'],
  },

  // ---------- Psicología Ambiental ----------
  {
    slug: 'genero-bancoldex',
    title: 'Estudios técnicos para una propuesta al Fondo Verde del Clima: microfinanzas para la adaptación basada en ecosistemas',
    area: 'psicologia',
    client: 'Bancóldex · Fondo Verde del Clima (FVC)',
    country: 'Colombia',
    year: '2021',
    summary:
      'Elaboramos los cinco estudios técnicos, incluida la evaluación de género, que sustentan la propuesta de Bancóldex ante el Fondo Verde del Clima.',
    description:
      'Bancóldex buscaba financiamiento del FVC para el proyecto "Construyendo resiliencia climática para productores rurales y ecosistemas en Colombia a través de mecanismos financieros innovadores". Entregamos cinco estudios: línea base de vulnerabilidad y riesgo climático de pequeños productores con análisis costo-beneficio de la adaptación; análisis de mercado para que las instituciones microfinancieras ofrezcan créditos de adaptación; necesidades de extensionismo rural; plan de involucramiento de actores; y evaluación de género con su plan de acción. Realizamos talleres con productores y expertos, diseñamos un modelo de extensionismo rural e integramos indicadores sensibles al género en el marco lógico. Ajustamos todo a los anexos obligatorios del FVC.',
    tags: ['Género', 'Inclusión social', 'Microfinanzas', 'Adaptación basada en ecosistemas'],
    tint: 'sunset',
    image: '/assets/projects/genero-bancoldex.jpg',
    title_en: 'Technical studies for a Green Climate Fund proposal: microfinance for ecosystem-based adaptation',
    summary_en:
      "We prepared the five technical studies, including the gender assessment, that support Bancóldex's proposal to the Green Climate Fund.",
    description_en:
      "Bancóldex was seeking GCF funding for the project \"Building climate resilience for rural producers and ecosystems in Colombia through innovative financial mechanisms\". We delivered five studies: a climate vulnerability and risk baseline for smallholders with a cost-benefit analysis of adaptation; a market analysis so microfinance institutions can offer adaptation loans; rural extension needs; a stakeholder engagement plan; and a gender assessment with its action plan. We ran workshops with producers and experts, designed a rural extension model, and integrated gender-sensitive indicators into the logical framework. We aligned everything with the GCF's mandatory annexes.",
    tags_en: ['Gender', 'Social inclusion', 'Microfinance', 'Ecosystem-based adaptation'],
  },
  {
    slug: 'cluster-solnatura',
    title: 'Clúster intersectorial de Soluciones basadas en la Naturaleza en Santander (SolNatura)',
    area: 'psicologia',
    client: 'The Nature Conservancy · Proyecto IKI SolNatura (Fondo Acción, TNC y GIZ)',
    country: 'Colombia',
    year: '2023–2024',
    summary:
      'Co-creamos con actores de Santander un clúster de innovación e investigación para diseñar y escalar Soluciones basadas en la Naturaleza.',
    description:
      'Durante un año trabajamos con el consorcio SolNatura para conectar a academia, gobierno, empresas y organizaciones de Santander alrededor de las SbN para la adaptación, la mitigación y la conservación de la biodiversidad. Mapeamos a los actores del ecosistema de investigación e innovación del departamento y diagnosticamos sus capacidades. También evaluamos las plataformas de participación existentes en el territorio, con sus lecciones y limitaciones. Con esa base diseñamos y facilitamos actividades de fortalecimiento de capacidades y la co-creación del clúster.',
    tags: ['Soluciones basadas en la Naturaleza', 'Clúster', 'Innovación', 'TNC'],
    tint: 'forest',
    image: '/assets/projects/cluster-solnatura.jpg',
    title_en: 'Cross-sector Nature-based Solutions cluster in Santander (SolNatura)',
    summary_en:
      'Together with stakeholders in Santander, we co-created an innovation and research cluster to design and scale up Nature-based Solutions.',
    description_en:
      "For a year we worked with the SolNatura consortium to connect academia, government, businesses, and organizations in Santander around NbS for adaptation, mitigation, and biodiversity conservation. We mapped the stakeholders in the department's research and innovation ecosystem and assessed their capacities. We also evaluated the existing participation platforms in the territory, with their lessons and limitations. On that basis we designed and facilitated capacity-building activities and the co-creation of the cluster.",
    tags_en: ['Nature-based Solutions', 'Cluster', 'Innovation', 'TNC'],
  },
  {
    slug: 'salud-mental-boyapaz',
    title: 'Salud mental y vínculo con la naturaleza en Boyapaz',
    area: 'psicologia',
    client: 'Boyapaz',
    country: 'Colombia',
    summary:
      'Diseñamos con Boyapaz un proceso que conecta el bienestar emocional de las personas con el cuidado de la naturaleza.',
    description:
      'Acompañamos procesos que promueven la salud mental y el vínculo con la naturaleza como base para el cuidado ambiental, integrando herramientas de la psicología ambiental con las realidades del territorio.',
    tags: ['Salud mental', 'Bienestar', 'Naturaleza'],
    tint: 'river',
    image: '/assets/projects/salud-mental-boyapaz.jpg',
    title_en: 'Mental health and connection with nature in Boyapaz',
    summary_en:
      "Together with Boyapaz, we designed a process that connects people's emotional wellbeing with caring for nature.",
    description_en:
      "We accompanied processes that promote mental health and connection with nature as a basis for environmental care, integrating environmental psychology tools with the realities of the territory.",
    tags_en: ['Mental health', 'Wellbeing', 'Nature'],
  },
  {
    slug: 'inclusion-bahia-malaga',
    title: 'Inclusión social con el CCCN Chucheros en Bahía Málaga',
    area: 'psicologia',
    client: 'Consejo Comunitario de Comunidades Negras (CCCN) Chucheros',
    country: 'Colombia',
    summary:
      'Realizamos con el Consejo Comunitario Chucheros un diagnóstico participativo con enfoque diferencial para fortalecer su turismo comunitario en el Pacífico.',
    description:
      'Implementamos un diagnóstico participativo con enfoque diferencial para fortalecer la inclusión social y la equidad en procesos de turismo comunitario del Pacífico colombiano, junto al Consejo Comunitario de la comunidad negra de Chucheros en Bahía Málaga.',
    tags: ['Inclusión social', 'Enfoque diferencial', 'Pacífico', 'Turismo comunitario'],
    tint: 'earth',
    image: '/assets/projects/inclusion-bahia-malaga.jpg',
    publicationUrl: 'https://drive.google.com/file/d/1QFfyYNz27yjBWaP29Am9W0IFcRYAvjOO/view',
    title_en: 'Social inclusion with the CCCN Chucheros community in Bahía Málaga',
    summary_en:
      'Together with the Chucheros Community Council, we carried out a participatory diagnosis with a differentiated approach to strengthen its community-based tourism on the Pacific coast.',
    description_en:
      "We implemented a participatory diagnosis with a differentiated approach to strengthen social inclusion and equity in community-based tourism processes on the Colombian Pacific coast, together with the Community Council of the Black community of Chucheros in Bahía Málaga.",
    tags_en: ['Social inclusion', 'Differentiated approach', 'Pacific', 'Community-based tourism'],
  },
  {
    slug: 'salud-mental-sector-ambiental',
    title: 'Salud mental del sector ambiental colombiano',
    area: 'psicologia',
    client: 'Estudio propio KIMSA',
    country: 'Colombia',
    summary:
      'Investigamos con metodologías propias cómo está la salud mental de quienes trabajan en el sector ambiental colombiano.',
    description:
      'Desarrollamos un estudio con metodologías propias para sondear la salud mental de los profesionales del sector ambiental colombiano, generando evidencia sobre el bienestar de quienes trabajan por el planeta.',
    tags: ['Salud mental', 'Investigación', 'Sector ambiental'],
    tint: 'dusk',
    image: '/assets/projects/psicologia-ambiental-proyecto.jpg',
    title_en: "Mental health of Colombia's environmental sector",
    summary_en:
      "Using our own methodologies, we researched the mental health of people working in Colombia's environmental sector.",
    description_en:
      "We developed a study using our own methodologies to survey the mental health of professionals in Colombia's environmental sector, generating evidence on the wellbeing of those working for the planet.",
    tags_en: ['Mental health', 'Research', 'Environmental sector'],
  },

  // ---------- CarbonBox ----------
  {
    slug: 'sostenibilidad-dnp-colombia',
    title: 'Evaluación de sostenibilidad, huella ecológica y circularidad de los sistemas de información públicos de Colombia',
    area: 'carbonbox',
    client: 'IPSOS · Departamento Nacional de Planeación (DNP)',
    country: 'Colombia',
    year: '2024–2025',
    summary:
      'Hicimos la primera evaluación nacional del impacto ambiental de los sistemas de información del Estado: 110 entidades y 3 sistemas del DNP.',
    description:
      'Los servidores y el software públicos también emiten carbono y consumen agua. Con la metodología de Huella Ecológica de DEval evaluamos las prácticas de 110 entidades del Estado colombiano en energía, cambio climático, agua y residuos sólidos. Para tres sistemas priorizados del DNP (PIIP, Gesproy 3.0 y Mapainversiones) hicimos análisis de ciclo de vida del hardware y el software, desde su fabricación hasta su disposición final. Ese análisis incluyó vida útil, consumo y fuente de energía, agua de refrigeración, mantenimiento y residuos tecnológicos. Entregamos sus inventarios de GEI, huella hídrica, indicadores de circularidad y recomendaciones para reducir su impacto.',
    tags: ['Huella de carbono', 'Circularidad', 'CarbonBox', 'Sector público'],
    tint: 'river',
    image: '/assets/projects/sostenibilidad-dnp-colombia.jpg',
    publicationUrl:
      'https://colaboracion.dnp.gov.co/sites/CDDNP/Sinergia/2025/DSEPP_1564_Evaluacion_Sistemas_de_Informacion_Informe_Resultados.pdf',
    title_en: "Sustainability, ecological footprint, and circularity assessment of Colombia's public information systems",
    summary_en:
      "We carried out the first national assessment of the environmental impact of the State's information systems: 110 entities and 3 DNP systems.",
    description_en:
      "Public servers and software also emit carbon and consume water. Using DEval's Ecological Footprint methodology, we assessed the practices of 110 Colombian State entities in energy, climate change, water, and solid waste. For three priority DNP systems (PIIP, Gesproy 3.0, and Mapainversiones) we carried out a life cycle assessment of the hardware and software, from manufacturing to final disposal. That analysis covered useful life, energy consumption and source, cooling water, maintenance, and e-waste. We delivered their GHG inventories, water footprint, circularity indicators, and recommendations to reduce their impact.",
    tags_en: ['Carbon footprint', 'Circularity', 'CarbonBox', 'Public sector'],
  },

  // Proyectos de CarbonBox aportados por el equipo (listado agosto 2026).
  // Nota: el proyecto DNP/IPSOS de este listado ya estaba cargado arriba
  // como 'sostenibilidad-dnp-colombia', por lo que no se duplica aquí.
  {
    slug: 'biomax-huella-2025',
    title: 'Biomax: sistema de gestión de huella de carbono corporativa 2025',
    area: 'carbonbox',
    client: 'Biomax Biocombustibles S.A.',
    country: 'Colombia',
    year: '2025–2026',
    summary:
      'Implementamos en CarbonBox el sistema de medición y gestión de la huella de carbono 2025 de Biomax, con capacitación a su equipo.',
    description:
      'Configuramos la organización en CarbonBox, definimos sus límites organizacionales y operacionales y consolidamos el inventario anual de alcances 1, 2 y 3 bajo GHG Protocol e ISO 14064-1. Dictamos un taller práctico sobre huella de carbono, carbono neutralidad, descarbonización y mercados de carbono. Acompañamos la recolección de datos con control de calidad y cerramos con el análisis de resultados y las oportunidades de reducción. Es el segundo proyecto con Biomax, tras la huella de su servicio a Ecopetrol.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/biomax-huella-2025.jpg',
    title_en: 'Biomax: 2025 corporate carbon footprint management system',
    summary_en:
      "We implemented Biomax's 2025 carbon footprint measurement and management system in CarbonBox, with training for its team.",
    description_en:
      'We set up the organization in CarbonBox, defined its organizational and operational boundaries, and consolidated the annual scope 1, 2, and 3 inventory under the GHG Protocol and ISO 14064-1. We delivered a hands-on workshop on carbon footprint, carbon neutrality, decarbonization, and carbon markets. We supported data collection with quality control and closed with the analysis of results and reduction opportunities. It is our second project with Biomax, after the footprint of its service to Ecopetrol.',
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'agrosavia-huella-2025',
    title: 'AGROSAVIA: huella de carbono de 25 centros de investigación (2024 y 2025)',
    area: 'carbonbox',
    client: 'AGROSAVIA — Corporación Colombiana de Investigación Agropecuaria',
    country: 'Colombia',
    year: '2024–2026',
    summary:
      'Medimos dos años seguidos la huella de carbono de los 25 centros, sedes y fincas experimentales de AGROSAVIA, incluidas sus capturas de carbono.',
    description:
      'La corporación pública de investigación agropecuaria de Colombia emite y también captura carbono en sus fincas experimentales. Evaluamos la calidad e incertidumbre de los datos, identificamos fuentes de emisión y captura y desarrollamos la metodología de medición bajo GHG Protocol e ISO 14064-1. Medimos alcances 1, 2 y 3 en CarbonBox e integramos el acceso a la plataforma en los aplicativos corporativos de la entidad. Cada informe incluye inventario de GEI, factores y fórmulas, oportunidades de reducción y compensación, y alternativas de sumideros. AGROSAVIA renovó el servicio para la medición 2025.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'sunset',
    image: '/assets/projects/agrosavia-huella-2025.jpg',
    title_en: 'AGROSAVIA: carbon footprint of 25 research centers (2024 and 2025)',
    summary_en:
      "For two consecutive years we measured the carbon footprint of AGROSAVIA's 25 centers, sites, and experimental farms, including their carbon removals.",
    description_en:
      "Colombia's public agricultural research corporation both emits and captures carbon on its experimental farms. We assessed data quality and uncertainty, identified emission and removal sources, and developed the measurement methodology under the GHG Protocol and ISO 14064-1. We measured scopes 1, 2, and 3 in CarbonBox and integrated platform access into the organization's corporate applications. Each report includes the GHG inventory, factors and formulas, reduction and offset opportunities, and carbon sink alternatives. AGROSAVIA renewed the service for the 2025 measurement.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'gtrap-huella-matriz-ambiental',
    title: 'Huella de carbono e hídrica de los equipos G-Trap y matriz de impacto ambiental',
    area: 'carbonbox',
    client: 'Fondo Acción · Zhana Solutions Green Engineering',
    country: 'Colombia',
    year: '2024–2025',
    summary:
      'Calculamos la huella de carbono e hídrica de todos los modelos G-Trap y aportamos insumos para la política pública de grasas del sector HORECA.',
    description:
      'Con un enfoque de análisis de ciclo de vida calculamos la huella de carbono y la huella hídrica de los equipos G-Trap de tratamiento de aguas residuales industriales, en todos sus modelos. Capacitamos al equipo de Zhana Solutions, levantamos la información y la cargamos en CarbonBox. Compilamos una matriz de impacto ambiental que integra toxicidad, consumo de agua, emisiones de GEI y biodiversidad. Los resultados alimentan la formulación de la política pública de gestión de grasas en hoteles, restaurantes y cafeterías de Colombia.',
    tags: ['Huella de carbono de producto', 'GHG Protocol · ISO 14067/14044', 'Análisis de ciclo de vida'],
    tint: 'river',
    image: '/assets/projects/gtrap-fondo-accion-zhana.jpg',
    title_en: 'Carbon and water footprint of G-Trap equipment and environmental impact matrix',
    summary_en:
      'We calculated the carbon and water footprint of every G-Trap model and provided inputs for the public policy on grease in the HORECA sector.',
    description_en:
      "Using a life cycle assessment approach, we calculated the carbon footprint and water footprint of G-Trap industrial wastewater treatment units, across all their models. We trained the Zhana Solutions team, collected the information, and uploaded it to CarbonBox. We compiled an environmental impact matrix that integrates toxicity, water use, GHG emissions, and biodiversity. The results feed into the formulation of public policy on grease management in Colombia's hotels, restaurants, and cafés.",
    tags_en: ['Product carbon footprint', 'GHG Protocol · ISO 14067/14044', 'Life cycle assessment'],
  },
  {
    slug: 'zona-franca-bogota-huella-2023',
    title: 'Zona Franca de Bogotá: huella de carbono corporativa 2023',
    area: 'carbonbox',
    client: 'Co-propiedad Zona Franca de Bogotá PH',
    country: 'Colombia',
    year: '2024–2025',
    summary:
      'Medimos la huella de carbono 2023 de la Zona Franca de Bogotá y formamos a su equipo para gestionarla.',
    description:
      'Configuramos la Co-propiedad en CarbonBox, definimos sus límites y calculamos las emisiones de alcances 1, 2 y 3 bajo GHG Protocol e ISO 14064-1. Capacitamos a su equipo en huella de carbono, carbono neutralidad y mercados de carbono. Validamos la calidad de los datos de actividad y entregamos el inventario con oportunidades de reducción.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'dusk',
    image: '/assets/projects/zona-franca-bogota-huella-2023.jpg',
    title_en: 'Bogotá Free Trade Zone: 2023 corporate carbon footprint',
    summary_en:
      "We measured the Bogotá Free Trade Zone's 2023 carbon footprint and trained its team to manage it.",
    description_en:
      'We set up the Co-ownership in CarbonBox, defined its boundaries, and calculated scope 1, 2, and 3 emissions under the GHG Protocol and ISO 14064-1. We trained its team on carbon footprint, carbon neutrality, and carbon markets. We validated the quality of the activity data and delivered the inventory with reduction opportunities.',
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'calculadora-seaflower',
    title: 'Calculadora de huella de carbono para viajeros del Fondo Seaflower',
    area: 'carbonbox',
    client: 'Fondo Acción · Davivienda (Daviplata)',
    country: 'Colombia',
    year: '2024',
    summary:
      'Validamos y corregimos la calculadora con la que los viajeros a San Andrés y Providencia compensan su huella desde Daviplata.',
    description:
      'El Fondo Seaflower, lanzado en la COP16, invita a quienes visitan la Reserva de Biósfera a donar en proporción a sus emisiones. Revisamos la calculadora original y validamos sus factores de emisión frente a datos oficiales de Colombia como los de la UPME. Detectamos errores de conversión y falta de trazabilidad en alimentos y textiles. Incorporamos CH4 y N2O en la quema de combustibles y la calculadora de la OACI para vuelos. Entregamos el documento metodológico, la base de datos corregida y un compendio de factores de emisión.',
    tags: ['Herramienta de cálculo', 'Huella de carbono', 'Mitigación'],
    tint: 'cool',
    image: '/assets/projects/calculadora-seaflower.png',
    title_en: 'Carbon footprint calculator for Seaflower Fund travelers',
    summary_en:
      'We validated and corrected the calculator that travelers to San Andrés and Providencia use to offset their footprint through Daviplata.',
    description_en:
      "The Seaflower Fund, launched at COP16, invites visitors to the Biosphere Reserve to donate in proportion to their emissions. We reviewed the original calculator and validated its emission factors against official Colombian data such as UPME's. We found conversion errors and a lack of traceability for food and textiles. We added CH4 and N2O for fuel combustion and the ICAO calculator for flights. We delivered the methodology document, the corrected database, and a compendium of emission factors.",
    tags_en: ['Calculation tool', 'Carbon footprint', 'Mitigation'],
  },
  {
    slug: 'biomax-ecopetrol-sebastopol',
    title: 'Huella de carbono del servicio de transporte de nafta para Ecopetrol',
    area: 'carbonbox',
    client: 'Biomax Biocombustibles S.A.',
    country: 'Colombia',
    year: '2024',
    summary:
      'Estimamos la huella de carbono del servicio de transporte de nafta que Biomax presta a Ecopetrol entre Sebastopol y Vasconia.',
    description:
      'Sistematizamos la información del piloto de transporte de nafta de la planta Sebastopol a la planta Vasconia y estimamos su huella de carbono en CarbonBox bajo el GHG Protocol. El resultado le permite a Biomax reportarle a Ecopetrol, su cliente, las emisiones asociadas al servicio que presta.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Análisis de ciclo de vida'],
    tint: 'blush',
    image: '/assets/clients/biomax.png',
    title_en: 'Carbon footprint of the naphtha transport service for Ecopetrol',
    summary_en:
      'We estimated the carbon footprint of the naphtha transport service Biomax provides to Ecopetrol between Sebastopol and Vasconia.',
    description_en:
      'We systematized the information from the naphtha transport pilot from the Sebastopol plant to the Vasconia plant and estimated its carbon footprint in CarbonBox under the GHG Protocol. The result allows Biomax to report to Ecopetrol, its client, the emissions associated with the service it provides.',
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Life cycle assessment'],
  },
  {
    slug: 'hacienda-cafe-misiones-huella-2023',
    title: 'Hacienda Café Misiones: huella de carbono de la finca y sus proveedores',
    area: 'carbonbox',
    client: 'Hacienda Café Misiones',
    country: 'Colombia',
    year: '2024–2026',
    summary:
      'Medimos la huella de carbono de una hacienda cafetera y de sus proveedores, con acompañamiento hasta 2026.',
    description:
      'Visitamos la hacienda y dictamos una MasterClass de huella de carbono corporativa al equipo. Acompañamos el levantamiento de información de las actividades de la finca y de sus proveedores, y entregamos el inventario de GEI bajo GHG Protocol. El acompañamiento se mantiene hasta 2026 para hacer seguimiento a su desempeño.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'warm',
    image: '/assets/projects/hacienda-cafe-misiones-huella-2023.jpg',
    title_en: 'Hacienda Café Misiones: carbon footprint of the farm and its suppliers',
    summary_en:
      'We measured the carbon footprint of a coffee estate and its suppliers, with ongoing support through 2026.',
    description_en:
      "We visited the estate and delivered a corporate carbon footprint MasterClass to the team. We supported the collection of information on the farm's activities and its suppliers, and delivered the GHG inventory under the GHG Protocol. Our support continues through 2026 to track its performance.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'colegio-anglo-colombiano-huella-2023',
    title: 'Colegio Anglo Colombiano: huella de carbono 2023 y 2025',
    area: 'carbonbox',
    client: 'Fundación Colegio Anglo Colombiano',
    country: 'Colombia',
    year: '2024 y 2026',
    summary:
      'Medimos la huella de carbono de todas las operaciones del Colegio Anglo Colombiano: estudiantes, docentes, servicios y visitantes.',
    description:
      'Un colegio es una pequeña ciudad: transporte escolar, alimentación, energía, residuos y visitantes. Sistematizamos la información de todas las áreas del colegio, su planta docente, sus servicios y sus visitantes, y calculamos la huella organizacional en CarbonBox bajo GHG Protocol. El colegio repitió la medición para el año 2025, lo que le permite comparar su desempeño.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/colegio-anglo-colombiano-huella-2024-v2.jpg',
    publicationUrl: 'https://www.youtube.com/watch?v=PIgFjxux6TI',
    title_en: 'Colegio Anglo Colombiano: 2023 and 2025 carbon footprint',
    summary_en:
      "We measured the carbon footprint of all of Colegio Anglo Colombiano's operations: students, teachers, services, and visitors.",
    description_en:
      'A school is a small city: school transport, food, energy, waste, and visitors. We systematized information from every area of the school, its teaching staff, its services, and its visitors, and calculated the organizational footprint in CarbonBox under the GHG Protocol. The school repeated the measurement for 2025, which lets it compare its performance.',
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'eeb-boyaca-huella-2023',
    title: 'Empresa de Energía de Boyacá: edificio administrativo y 7 zonas operativas',
    area: 'carbonbox',
    client: 'Empresa de Energía de Boyacá S.A. E.S.P. (EBSA)',
    country: 'Colombia',
    year: '2023–2025',
    summary:
      'Medimos bajo ISO 14064-1 la huella de carbono de la sede administrativa y siete zonas operativas de la Empresa de Energía de Boyacá.',
    description:
      'Sistematizamos la información de las áreas de trabajo del edificio administrativo y de siete zonas operativas en el departamento, y elaboramos en CarbonBox la huella organizacional bajo ISO 14064-1. El trabajo se desarrolló durante 17 meses, en dos órdenes de compra.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'sunset',
    image: '/assets/projects/eeb-boyaca-huella-2023-v2.jpg',
    title_en: 'Boyacá Energy Company: administrative building and 7 operating zones',
    summary_en:
      "Under ISO 14064-1, we measured the carbon footprint of the Boyacá Energy Company's headquarters and seven operating zones.",
    description_en:
      'We systematized information from the work areas of the administrative building and seven operating zones in the department, and prepared the organizational footprint in CarbonBox under ISO 14064-1. The work ran for 17 months, across two purchase orders.',
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'gtrap-sostenibilidad-acv',
    title: 'Evaluación de sostenibilidad de la tecnología G-TRAP en Bogotá y Cartagena',
    area: 'carbonbox',
    client: 'Zhana Solutions Green Engineering',
    country: 'Colombia',
    year: '2023',
    summary:
      'Medimos con análisis de ciclo de vida la huella de carbono e hídrica de la tecnología G-TRAP, desde su transporte desde China hasta su operación en Colombia.',
    description:
      'Definimos como unidad funcional un metro cúbico de agua tratada y fijamos los límites del sistema desde el transporte de los equipos desde China hasta su operación en Bogotá y Cartagena. Levantamos datos de emisiones y parámetros fisicoquímicos como la DQO, y evaluamos transporte, instalación y uso bajo ISO 14044 e ISO 14067. Con CarbonBox estimamos las huellas y construimos una matriz de impacto con acciones de mejora. Este primer estudio abrió la puerta al proyecto ampliado con Fondo Acción.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Análisis de ciclo de vida'],
    tint: 'earth',
    image: '/assets/projects/gtrap-sostenibilidad-acv.jpg',
    title_en: 'Sustainability assessment of G-TRAP technology in Bogotá and Cartagena',
    summary_en:
      'Using life cycle assessment, we measured the carbon and water footprint of G-TRAP technology, from shipping from China to operation in Colombia.',
    description_en:
      'We defined one cubic meter of treated water as the functional unit and set the system boundaries from shipping the units from China to their operation in Bogotá and Cartagena. We collected emissions data and physicochemical parameters such as COD, and assessed transport, installation, and use under ISO 14044 and ISO 14067. With CarbonBox we estimated the footprints and built an impact matrix with improvement actions. This first study opened the door to the expanded project with Fondo Acción.',
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Life cycle assessment'],
  },
  {
    slug: 'flp-equilibria-huella-2023',
    title: 'FLP y Equilibria: huella de carbono e hídrica de cítricos en tres países',
    area: 'carbonbox',
    client: 'GEC EcoEnterprises Management',
    country: 'Multirregional',
    year: '2023',
    summary:
      'Elaboramos tres inventarios de GEI (ISO 14064-1) y tres huellas hídricas para empresas citrícolas en Ecuador, Perú y Colombia.',
    description:
      'Para el fondo de inversión GEC EcoEnterprises calculamos la huella de carbono y la huella hídrica de las operaciones de FLP en Ecuador y Perú y de Equilibria en Colombia, a lo largo de su cadena de producción de cítricos. Capacitamos a sus equipos y los acompañamos en la recolección de datos. Entregamos recomendaciones para mejorar la gestión de información y para reducir ambas huellas.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'river',
    image: '/assets/clients/gec-ecoenterprises-v2.png',
    title_en: 'FLP and Equilibria: carbon and water footprint of citrus in three countries',
    summary_en:
      'We prepared three GHG inventories (ISO 14064-1) and three water footprints for citrus companies in Ecuador, Peru, and Colombia.',
    description_en:
      "For the investment fund GEC EcoEnterprises, we calculated the carbon and water footprint of FLP's operations in Ecuador and Peru and Equilibria's in Colombia, across their citrus production chain. We trained their teams and supported them in data collection. We delivered recommendations to improve information management and to reduce both footprints.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'cleantechhub-emprendimientos',
    title: 'Impacto en carbono de 22 emprendimientos de innovación climática',
    area: 'carbonbox',
    client: 'CleanTechHub',
    country: 'Multirregional',
    year: '2023',
    summary:
      'Creamos el módulo emprendedor de CarbonBox y medimos el impacto en carbono de 22 startups climáticas en 5 países.',
    description:
      'Los emprendimientos climáticos necesitan demostrar con números cuántas emisiones evitan. Desarrollamos un módulo de CarbonBox diseñado para startups y lo usamos para medir el impacto de 22 emprendimientos de la aceleradora en cinco países de América Latina. Capacitamos a mentores y aliados de CleanTechHub en huella de carbono para emprendimientos, para que el programa pueda seguir midiendo por su cuenta.',
    tags: ['Huella de carbono de producto', 'Medición de impacto en carbono', 'Análisis de ciclo de vida'],
    tint: 'dusk',
    image: '/assets/clients/cleantechhub-v2.png',
    title_en: 'Carbon impact of 22 climate-innovation startups',
    summary_en:
      "We built CarbonBox's startup module and measured the carbon impact of 22 climate startups in 5 countries.",
    description_en:
      "Climate startups need to show in numbers how many emissions they avoid. We developed a CarbonBox module designed for startups and used it to measure the impact of 22 of the accelerator's startups in five Latin American countries. We trained CleanTechHub mentors and partners on carbon footprint for startups, so the program can keep measuring on its own.",
    tags_en: ['Product carbon footprint', 'Carbon impact measurement', 'Life cycle assessment'],
  },
  {
    slug: 'paramo-presenta-festivales',
    title: 'Huella de carbono de festivales: Estéreo Picnic, Cordillera, Vassar, BAUM y Corona Sunset',
    area: 'carbonbox',
    client: 'Páramo Presenta',
    country: 'Colombia',
    year: '2023–2026',
    summary:
      'Medimos y llevamos a verificación la huella de carbono de los principales festivales de Colombia, edición tras edición, y diseñamos la política de carbono neutralidad de Páramo Presenta.',
    description:
      'Desde 2023 medimos en CarbonBox la huella de carbono de la producción de Festival Estéreo Picnic (2023–2026), Feria Vassar (dos ediciones por año), Corona Sunset, BAUM y Festival Cordillera, bajo GHG Protocol. Recolectamos información de proveedores y agentes en toda la cadena de valor de cada evento. Preparamos y acompañamos las auditorías de verificación de los inventarios, diseñamos el plan de gestión de GEI de los eventos y la política de carbono neutralidad de la empresa.',
    tags: ['Huella de carbono de eventos', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'blush',
    image: '/assets/projects/fep-2023.jpg',
    title_en: "Carbon footprint of festivals: Estéreo Picnic, Cordillera, Vassar, BAUM, and Corona Sunset",
    summary_en:
      "Edition after edition, we measured and took to verification the carbon footprint of Colombia's main festivals, and designed Páramo Presenta's carbon neutrality policy.",
    description_en:
      "Since 2023 we have measured in CarbonBox the carbon footprint of the production of Festival Estéreo Picnic (2023–2026), Feria Vassar (two editions a year), Corona Sunset, BAUM, and Festival Cordillera, under the GHG Protocol. We collected information from suppliers and agents across each event's value chain. We prepared and supported the verification audits of the inventories, and designed the events' GHG management plan and the company's carbon neutrality policy.",
    tags_en: ['Event carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'calculadora-idartes',
    title: 'Estructuración de la calculadora de carbono de IDARTES',
    area: 'carbonbox',
    client: 'Fondo Acción · Instituto Distrital de las Artes (IDARTES)',
    country: 'Colombia',
    year: '2023',
    summary:
      'Diseñamos la calculadora con la que eventos y escenarios culturales de Bogotá pueden medir su huella de carbono en la web de IDARTES.',
    description:
      'Definimos qué datos de actividad deben reportar los eventos y escenarios de la ciudad, seleccionamos los factores de emisión según los métodos del IPCC y desarrollamos la estructura metodológica y operativa de la calculadora. El resultado es una herramienta pública para que el sector cultural de Bogotá mida y gestione el impacto climático de sus eventos.',
    tags: ['Herramienta de cálculo', 'Huella de carbono de eventos', 'Mitigación'],
    tint: 'cool',
    image: '/assets/projects/calculadora-idartes.png',
    title_en: "Building IDARTES's carbon calculator",
    summary_en:
      "We designed the calculator that Bogotá's cultural events and venues can use to measure their carbon footprint on the IDARTES website.",
    description_en:
      "We defined which activity data the city's events and venues must report, selected emission factors following IPCC methods, and developed the calculator's methodological and operational structure. The result is a public tool for Bogotá's cultural sector to measure and manage the climate impact of its events.",
    tags_en: ['Calculation tool', 'Event carbon footprint', 'Mitigation'],
  },
  {
    slug: 'control-ambiental-compost-acv',
    title: 'Análisis de ciclo de vida del compostaje con aireación',
    area: 'carbonbox',
    client: 'Control Ambiental de Colombia S.A.S.',
    country: 'Colombia',
    year: '2023',
    summary:
      'Comparamos con ACV el compostaje con aireación frente al relleno sanitario para cuantificar las emisiones que evita.',
    description:
      'Bajo ISO 14044 e ISO 14067 comparamos dos escenarios para los residuos orgánicos: compostaje con aireación frente a disposición en relleno sanitario. Hicimos un taller para identificar fuentes de emisión, recolectamos datos y estimamos las emisiones de cada escenario. Entregamos el reporte de resultados con medidas de reducción y compensación, y un kit de comunicación para que la empresa divulgue su impacto.',
    tags: ['Huella de carbono de producto', 'GHG Protocol · ISO 14067/14044', 'Análisis de ciclo de vida'],
    tint: 'warm',
    image: '/assets/projects/control-ambiental-compost-acv.jpg',
    title_en: 'Life cycle assessment of aerated composting',
    summary_en:
      'Using LCA, we compared aerated composting with landfilling to quantify the emissions it avoids.',
    description_en:
      'Under ISO 14044 and ISO 14067, we compared two scenarios for organic waste: aerated composting versus landfill disposal. We held a workshop to identify emission sources, collected data, and estimated the emissions of each scenario. We delivered the results report with reduction and offset measures, and a communication kit so the company can share its impact.',
    tags_en: ['Product carbon footprint', 'GHG Protocol · ISO 14067/14044', 'Life cycle assessment'],
  },
  {
    slug: 'climate-week-colombia-2020',
    title: 'Climate Week Colombia 2020',
    area: 'carbonbox',
    client: 'Cámara Verde de Comercio',
    country: 'Colombia',
    year: '2020',
    summary:
      'Organizamos la primera Semana Climática de Colombia, evento oficial de Climate Week NYC, en formato virtual.',
    description:
      'En plena pandemia coordinamos la edición colombiana de Climate Week NYC. Identificamos y convocamos a oradores de emprendimientos, entidades públicas, instituciones financieras, organizaciones sociales y comunidades indígenas que contribuyen a la mitigación del cambio climático, y construimos una agenda para visibilizar sus acciones.',
    tags: ['Huella de carbono de eventos', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'forest',
    image: '/assets/clients/camara-verde-v2.png',
    title_en: 'Climate Week Colombia 2020',
    summary_en:
      "We organized Colombia's first Climate Week, an official Climate Week NYC event, in a virtual format.",
    description_en:
      'In the middle of the pandemic, we coordinated the Colombian edition of Climate Week NYC. We identified and invited speakers from startups, public entities, financial institutions, social organizations, and Indigenous communities that contribute to climate change mitigation, and built an agenda to showcase their actions.',
    tags_en: ['Event carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'business-travel-consulting-huella-2025',
    title: 'Business Travel Consulting: huella de carbono corporativa 2025',
    area: 'carbonbox',
    client: 'Business Travel Consulting, S.A.',
    country: 'México',
    year: '2026',
    summary: 'Medimos bajo GHG Protocol e ISO 14064-1 la huella de carbono 2025 de Business Travel Consulting, nuestro primer cliente en México.',
    description:
      'Definimos el año base, los límites organizacionales y operativos y las fuentes de emisión de alcances 1, 2 y 3. Diseñamos los formularios de recolección y capacitamos al equipo de BTC en huella de carbono. Validamos la calidad y trazabilidad de los datos, calculamos el inventario en CarbonBox y realizamos una pre-auditoría interna antes de presentar los resultados a la dirección.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064-1', 'México'],
    tint: 'dusk',
    title_en: 'Business Travel Consulting: 2025 corporate carbon footprint',
    summary_en: 'Under the GHG Protocol and ISO 14064-1, we measured the 2025 carbon footprint of Business Travel Consulting, our first client in Mexico.',
    description_en:
      "We defined the base year, the organizational and operational boundaries, and the scope 1, 2, and 3 emission sources. We designed the data collection forms and trained the BTC team on carbon footprint. We validated data quality and traceability, calculated the inventory in CarbonBox, and carried out an internal pre-audit before presenting the results to management.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064-1', 'Mexico'],
  },
  {
    slug: 'maderera-rio-acre-huella-2022',
    title: 'Maderera Río Acre: huella de carbono de la cadena forestal 2022',
    area: 'carbonbox',
    client: 'CANDES · Maderera Río Acre S.A.C.',
    country: 'Perú',
    year: '2023',
    summary:
      'Medimos la huella de carbono de una maderera peruana desde la extracción en el bosque hasta la distribución final.',
    description:
      'Estimamos las emisiones de todas las etapas de la cadena de suministro, identificamos las fuentes críticas y propusimos acciones de reducción mediante optimización de procesos y tecnologías más limpias. Diseñamos un sistema de monitoreo anual y un plan de mitigación para las emisiones que no pueden reducirse.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'sunset',
    image: '/assets/clients/candes-v2.jpg',
    title_en: 'Maderera Río Acre: 2022 carbon footprint of the timber chain',
    summary_en:
      'We measured the carbon footprint of a Peruvian timber company from harvesting in the forest to final distribution.',
    description_en:
      'We estimated emissions at every stage of the supply chain, identified the critical sources, and proposed reduction actions through process optimization and cleaner technologies. We designed an annual monitoring system and a mitigation plan for the emissions that cannot be reduced.',
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'eternit-diagnostico-gei',
    title: 'Diagnóstico de GEI y ruta de automatización de datos',
    area: 'carbonbox',
    client: 'Eternit Colombia S.A.',
    country: 'Colombia',
    year: '2023',
    summary:
      'Validamos la huella de carbono de Eternit y trazamos su ruta para automatizar los datos de emisiones.',
    description:
      'Revisamos la medición de huella de carbono que Eternit había hecho para 2021 y la llevamos a la matriz de recolección de CarbonBox, señalando datos faltantes, sobrantes o por ajustar. Evaluamos, con una metodología de semáforo, qué tan viable es automatizar la captura de datos de cada fuente de emisión, en plazos corto, mediano y largo. Entregamos las medidas necesarias para automatizar por completo su inventario.',
    tags: ['Huella de carbono corporativa', 'Herramienta de cálculo'],
    tint: 'earth',
    image: '/assets/clients/eternit.webp',
    title_en: 'GHG assessment and data automation roadmap',
    summary_en:
      "We validated Eternit's carbon footprint and mapped out its path to automate emissions data.",
    description_en:
      "We reviewed the carbon footprint measurement Eternit had done for 2021 and moved it into CarbonBox's data collection matrix, flagging missing, redundant, or inconsistent data. Using a traffic-light methodology, we assessed how feasible it is to automate data capture for each emission source in the short, medium, and long term. We delivered the measures needed to fully automate its inventory.",
    tags_en: ['Corporate carbon footprint', 'Calculation tool'],
  },
  {
    slug: 'comfama-deeper-learning',
    title: 'Comfama: huella de carbono del evento Deeper Learning 2024 y 2025',
    area: 'carbonbox',
    client: 'Comfama',
    country: 'Colombia',
    year: '2024–2025',
    summary:
      'Medimos la huella de carbono de dos ediciones de Deeper Learning y diseñamos mensajes para reducirla con los asistentes.',
    description:
      'Diseñamos las preguntas de movilidad de las encuestas a asistentes (origen de vuelos, transporte urbano y zona de procedencia) y calculamos la huella del evento en CarbonBox bajo GHG Protocol. También propusimos los mensajes de sensibilización: un correo previo con recomendaciones de transporte sostenible y menos plásticos de un solo uso, textos para pantallas y un carrusel para redes sobre las acciones de sostenibilidad del evento.',
    tags: ['Huella de carbono de eventos', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'river',
    image: '/assets/projects/comfama-deeper-learning.jpg',
    title_en: 'Comfama: carbon footprint of the Deeper Learning event, 2024 and 2025',
    summary_en:
      'We measured the carbon footprint of two editions of Deeper Learning and designed messages to reduce it with attendees.',
    description_en:
      "We designed the mobility questions in the attendee surveys (flight origin, urban transport, and area of origin) and calculated the event's footprint in CarbonBox under the GHG Protocol. We also proposed the awareness messages: a pre-event email with recommendations on sustainable transport and fewer single-use plastics, on-screen copy, and a social media carousel on the event's sustainability actions.",
    tags_en: ['Event carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'cataexport-huella-2025',
    title: 'CataExport: huella de carbono corporativa 2024',
    area: 'carbonbox',
    client: 'CataExport',
    country: 'Colombia',
    year: '2024',
    summary:
      'Capacitamos al equipo de esta exportadora de café y medimos su huella de alcances 1, 2 y 3, con un año de acceso a CarbonBox y recomendaciones para escalar sus reducciones.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de CataExport conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'dusk',
    image: '/assets/clients/cataexport-v2.webp',
    title_en: 'CataExport: 2024 corporate carbon footprint',
    summary_en:
      'We trained the team of this coffee exporter and measured its scope 1, 2, and 3 footprint, with one year of CarbonBox access and recommendations to scale up its reductions.',
    description_en:
      "We implemented the measurement and management of CataExport's 2025 corporate carbon footprint in line with the GHG Protocol and ISO 14064-1, through the CarbonBox platform.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'crepes-wafles-indicadores-carbono',
    title: 'Indicadores de carbono para la cadena de carne bovina de Crepes & Waffles',
    area: 'carbonbox',
    client: 'WEIA · Crepes & Waffles',
    country: 'Colombia',
    year: '2023',
    summary:
      'Diseñamos indicadores de carbono para los proveedores de carne de Crepes & Waffles, con trazabilidad QR y blockchain.',
    description:
      'Analizamos los eslabones de la cadena de producción de carne bovina de los proveedores de Crepes & Waffles y desarrollamos indicadores de carbono agropecuarios. Lo hicimos de la mano de WEIA, que financia a productores con el modelo "siembre ahora, pague después". Integramos CarbonBox a su trazabilidad productiva con QR y blockchain, definimos los parámetros para escalar la solución y llevamos la calculadora de impacto a las cadenas priorizadas.',
    tags: ['Herramienta de cálculo', 'Huella de carbono de producto'],
    tint: 'blush',
    image: '/assets/clients/weia.png',
    title_en: "Carbon indicators for Crepes & Waffles' beef supply chain",
    summary_en:
      "We designed carbon indicators for Crepes & Waffles' beef suppliers, with QR and blockchain traceability.",
    description_en:
      "We analyzed the links in the beef production chain of Crepes & Waffles' suppliers and developed agricultural carbon indicators. We did it together with WEIA, which finances producers with a \"plant now, pay later\" model. We integrated CarbonBox into their QR and blockchain production traceability, defined the parameters to scale the solution, and brought the impact calculator to the priority supply chains.",
    tags_en: ['Calculation tool', 'Product carbon footprint'],
  },
  {
    slug: 'colgas-biogas-la-paz',
    title: 'Metodologías de créditos de carbono para el proyecto de biogás La Paz',
    area: 'carbonbox',
    client: 'Colgas',
    country: 'Colombia',
    year: '2023',
    summary:
      'Analizamos las metodologías disponibles para certificar como créditos de carbono las reducciones del proyecto de biogás La Paz.',
    description:
      'Realizamos un análisis preliminar de las metodologías disponibles para calcular las reducciones de emisiones asociadas al proyecto de biogás La Paz de Colgas, como base para la formulación de créditos de carbono.',
    tags: ['Formulación de créditos de carbono', 'Mitigación'],
    tint: 'warm',
    image: '/assets/clients/colgas.webp',
    title_en: 'Carbon credit methodologies for the La Paz biogas project',
    summary_en:
      'We analyzed the available methodologies to certify the La Paz biogas project’s emission reductions as carbon credits.',
    description_en:
      "We carried out a preliminary analysis of the methodologies available to calculate the emission reductions associated with Colgas's La Paz biogas project, as a basis for structuring carbon credits.",
    tags_en: ['Carbon credit structuring', 'Mitigation'],
  },
  {
    slug: 'spec-lng-huella-2024',
    title: 'SPEC LNG: huella de carbono corporativa 2024',
    area: 'carbonbox',
    client: 'SPEC LNG',
    country: 'Colombia',
    year: '2024–2025',
    summary:
      'Estimamos la huella de carbono corporativa 2024 de la terminal de regasificación de gas natural licuado en Cartagena.',
    description:
      'Estimamos la huella de carbono corporativa 2024 de SPEC LNG, conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'cool',
    image: '/assets/clients/spec-lng-v2.jpg',
    title_en: 'SPEC LNG: 2024 corporate carbon footprint',
    summary_en:
      'We estimated the 2024 corporate carbon footprint of the liquefied natural gas regasification terminal in Cartagena.',
    description_en:
      "We estimated SPEC LNG's 2024 corporate carbon footprint, in line with the GHG Protocol and ISO 14064-1, through the CarbonBox platform.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'asobancaria-congreso-2024',
    title: 'Asobancaria: huella de carbono del 8° Congreso de Finanzas Sostenibles',
    area: 'carbonbox',
    client: 'Asobancaria',
    country: 'Colombia',
    year: '2024',
    summary:
      'Estimamos la huella de carbono del 8° Congreso de Finanzas para la Equidad, Sostenibilidad y Transformación de Asobancaria.',
    description:
      'Estimamos la huella de carbono del 8° Congreso de Finanzas para la Equidad, Sostenibilidad y Transformación 2024 de Asobancaria, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono de eventos', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/asobancaria-congreso-2024.jpg',
    title_en: 'Asobancaria: carbon footprint of the 8th Sustainable Finance Congress',
    summary_en:
      "We estimated the carbon footprint of Asobancaria's 8th Congress on Finance for Equity, Sustainability, and Transformation.",
    description_en:
      "We estimated the carbon footprint of Asobancaria's 8th Finance for Equity, Sustainability, and Transformation Congress 2024, through the CarbonBox platform.",
    tags_en: ['Event carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'santa-fe-bogota-huella-2025',
    title: 'Fundación Santa Fe de Bogotá: huella de carbono del Instituto de Cáncer',
    area: 'carbonbox',
    client: 'Fundación Santa Fé de Bogotá',
    country: 'Colombia',
    year: '2025–2026',
    summary:
      'Medimos la huella de carbono 2025 del Edificio Ambulatorio del Instituto de Cáncer Carlos Ardila Lülle (ICCAL).',
    description:
      'Un edificio hospitalario combina operación continua, alto consumo energético y una cadena de suministro compleja. Definimos los límites de la sede, identificamos sus fuentes de emisión de alcances 1, 2 y 3 y acompañamos la recolección de datos con la matriz de CarbonBox. Validamos la información, consolidamos el inventario bajo GHG Protocol e ISO 14064-1 y entregamos recomendaciones de reducción, recibidas a satisfacción por la Fundación.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'sunset',
    image: '/assets/projects/santa-fe-bogota-huella-2025.jpg',
    title_en: 'Fundación Santa Fe de Bogotá: carbon footprint of the Cancer Institute',
    summary_en:
      'We measured the 2025 carbon footprint of the Outpatient Building of the Carlos Ardila Lülle Cancer Institute (ICCAL).',
    description_en:
      "A hospital building combines continuous operation, high energy use, and a complex supply chain. We defined the site's boundaries, identified its scope 1, 2, and 3 emission sources, and supported data collection with the CarbonBox matrix. We validated the information, consolidated the inventory under the GHG Protocol and ISO 14064-1, and delivered reduction recommendations, which the Foundation accepted as satisfactory.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'parker-huella-2025',
    title: 'Parker: huella de carbono corporativa en Argentina',
    area: 'carbonbox',
    client: 'Parker',
    country: 'Argentina',
    year: '2025–2027',
    summary:
      'Medimos de forma remota y por dos periodos consecutivos la huella de carbono corporativa de Parker en Argentina.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de Parker en Argentina conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox como software as a service.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'earth',
    image: '/assets/projects/parker-huella-2025.jpg',
    title_en: 'Parker: corporate carbon footprint in Argentina',
    summary_en:
      "We remotely measured Parker's corporate carbon footprint in Argentina for two consecutive periods.",
    description_en:
      "We implemented the measurement and management of Parker's 2025 corporate carbon footprint in Argentina, in line with the GHG Protocol and ISO 14064-1, through the CarbonBox platform as software as a service.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'ambielegsa-huella-2025',
    title: 'AMBIELEGSA: huella de carbono corporativa 2024 de Enap Sipetrol',
    area: 'carbonbox',
    client: 'AMBIELEGSA SA',
    country: 'Ecuador',
    year: '2024',
    summary:
      'Junto con AMBIELEGSA estimamos la huella de carbono corporativa 2024 de Enap Sipetrol en Ecuador.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de AMBIELEGSA conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'river',
    image: '/assets/clients/ambielegsa.png',
    title_en: "AMBIELEGSA: Enap Sipetrol's 2024 corporate carbon footprint",
    summary_en:
      "Together with AMBIELEGSA, we estimated Enap Sipetrol's 2024 corporate carbon footprint in Ecuador.",
    description_en:
      "We implemented the measurement and management of AMBIELEGSA's 2025 corporate carbon footprint in line with the GHG Protocol and ISO 14064-1, through the CarbonBox platform.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'almacenes-ara-huella-corporativa',
    title: 'Almacenes Ara: huella de carbono corporativa',
    area: 'carbonbox',
    client: 'Jerónimo Martins · Almacenes Ara',
    country: 'Colombia',
    summary: 'Medimos con CarbonBox la huella de carbono corporativa de Almacenes Ara.',
    description:
      'Implementamos la medición de emisiones de GEI organizacionales y la gestión de la huella de carbono corporativa de Almacenes Ara conforme al GHG Protocol y la norma ISO 14064-1.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'dusk',
    image: '/assets/clients/jeronimo-martins-v2.webp',
    title_en: 'Almacenes Ara: corporate carbon footprint',
    summary_en: "We measured Almacenes Ara's corporate carbon footprint with CarbonBox.",
    description_en:
      "We implemented the measurement of organizational GHG emissions and managed Almacenes Ara's corporate carbon footprint in line with the GHG Protocol and ISO 14064-1.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'linktic-huella-corporativa',
    title: 'LinkTic: pre-auditoría del inventario de GEI',
    area: 'carbonbox',
    client: 'LinkTic S.A.S',
    country: 'Colombia',
    year: '2026',
    summary:
      'Preparamos a LinkTic, empresa de tecnología con cerca de 1.000 colaboradores, para la verificación externa de su inventario de GEI.',
    description:
      'Con el Plan Pro de CarbonBox validamos los datos de actividad y los soportes del inventario de GEI organizacional de LinkTic. Realizamos una pre-auditoría con su equipo y la acompañamos en la preparación para la verificación de terceros bajo ISO 14064.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'blush',
    image: '/assets/clients/linktic.svg',
    title_en: 'LinkTic: GHG inventory pre-audit',
    summary_en:
      'We prepared LinkTic, a technology company with about 1,000 employees, for the external verification of its GHG inventory.',
    description_en:
      "With the CarbonBox Pro Plan, we validated the activity data and supporting evidence for LinkTic's organizational GHG inventory. We carried out a pre-audit with its team and supported it in preparing for third-party verification under ISO 14064.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'biodiversal-compost-acv',
    title: 'Medición de impacto del compostaje con aireación',
    area: 'carbonbox',
    client: 'Biodiversal',
    country: 'Colombia',
    summary: 'Análisis de ciclo de vida del compostaje con aireación para Biodiversal.',
    description:
      'Implementamos el análisis de ciclo de vida de una tecnología de compostaje con aireación para la gestión de residuos orgánicos de Biodiversal, bajo las normas ISO 14044 e ISO 14067.',
    tags: ['Huella de carbono de producto', 'GHG Protocol · ISO 14067/14044', 'Análisis de ciclo de vida'],
    tint: 'warm',
    image: '/assets/clients/biodiversal-v2.png',
    title_en: 'Impact measurement of aerated composting',
    summary_en: 'Life cycle assessment of aerated composting for Biodiversal.',
    description_en:
      "We implemented the life cycle assessment of an aerated composting technology for organic waste management for Biodiversal, under the ISO 14044 and ISO 14067 standards.",
    tags_en: ['Product carbon footprint', 'GHG Protocol · ISO 14067/14044', 'Life cycle assessment'],
  },
  {
    slug: 'ndc-progreso-costa-rica',
    title: 'Evaluación del progreso de la NDC de Costa Rica (BTR2)',
    area: 'gestion',
    client: 'Organización para Estudios Tropicales (OET) · MINAE · Instituto Meteorológico Nacional (IMN)',
    country: 'Costa Rica',
    year: '2026',
    summary:
      'Medimos el avance de las NDC 2020 y 2025 de Costa Rica y redactamos el capítulo de seguimiento de su Segundo Informe Bienal de Transparencia.',
    description:
      'Costa Rica debe demostrar ante la CMNUCC cuánto ha avanzado en sus compromisos climáticos. Compilamos y analizamos la información disponible, validamos los indicadores de cada contribución y dimos seguimiento cualitativo y cuantitativo a la implementación de las NDC 2020 y 2025. Mapeamos las políticas, medidas, acciones y planes de mitigación del país, resumimos sus emisiones y absorciones de GEI y revisamos sus proyecciones. El resultado es el capítulo completo de seguimiento a la NDC del BTR2, en el marco del Segundo y Tercer BTR y la Quinta Comunicación Nacional.',
    tags: ['NDC', 'Acuerdo de París', 'BTR', 'Mitigación de cambio climático'],
    tint: 'forest',
    image: '/assets/projects/ndc-progreso-costa-rica.png',
    title_en: "Progress assessment of Costa Rica's NDC (BTR2)",
    summary_en:
      "We measured the progress of Costa Rica's 2020 and 2025 NDCs and drafted the tracking chapter of its Second Biennial Transparency Report.",
    description_en:
      "Costa Rica has to show the UNFCCC how far it has progressed on its climate commitments. We compiled and analyzed the available information, validated the indicators for each contribution, and tracked the implementation of the 2020 and 2025 NDCs qualitatively and quantitatively. We mapped the country's mitigation policies, measures, actions, and plans, summarized its GHG emissions and removals, and reviewed its projections. The result is the complete NDC tracking chapter of the BTR2, under the Second and Third BTR and the Fifth National Communication.",
    tags_en: ['NDC', 'Paris Agreement', 'BTR', 'Climate change mitigation'],
  },
];

// Países presentes (para el filtro), en orden.
export const PROJECT_COUNTRIES: string[] = [
  'Colombia',
  'Ecuador',
  'El Salvador',
  'Honduras',
  'Costa Rica',
  'Perú',
  'Argentina',
  'México',
];

export const projectsByArea = (area: AreaKey) => PROJECTS.filter((p) => p.area === area);

// Empareja cada logo de CLIENT_LOGOS con sus proyectos en PROJECTS, para la
// página /clientes. No hay un campo explícito que los relacione (los
// proyectos solo tienen `client` en texto libre, a veces con más de una
// organización separada por "·"), así que se hace por coincidencia de texto:
// normalizamos (minúsculas, sin tildes) y consideramos match si el nombre
// del logo está contenido en alguno de los segmentos de `client`, o
// viceversa. Clientes sin proyecto asociado en los datos actuales (p. ej.
// aliados institucionales como GIZ o el BID) simplemente no traen ninguno.
function normalizeClientText(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // marcas diacriticas combinadas (tildes, diaresis...)
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
export const projectsForClientLogo = (logo: ClientLogo): Project[] => {
  const targets = [logo.alt, ...(logo.aliases ?? [])].map(normalizeClientText).filter(Boolean);
  if (!targets.length) return [];
  return PROJECTS.filter((p) =>
    p.client
      .split('·')
      .map((seg) => normalizeClientText(seg))
      .filter(Boolean)
      .some((seg) => targets.some((t) => seg.includes(t) || t.includes(seg)))
  );
};

export interface KimsaDocument {
  slug: string;
  title: string;
  area: AreaKey;
  client: string;
  year?: string;
  contribution: string; // cómo aportó KIMSA en la elaboración del documento
  tags: string[];
  url: string; // enlace directo al documento (PDF u otro)
  tint: string;
  title_en?: string;
  contribution_en?: string;
  tags_en?: string[];
}

export function localizeDocument(d: KimsaDocument, lang: 'es' | 'en') {
  if (lang === 'es') return d;
  return {
    ...d,
    title: d.title_en ?? d.title,
    contribution: d.contribution_en ?? d.contribution,
    tags: d.tags_en ?? d.tags,
  };
}

// Listado real de documentos/publicaciones de KIMSA, en orden alfabético por
// título. Añadir aquí a medida que el equipo comparta más documentos con su
// enlace público (mantener el orden alfabético al insertar nuevos).
export const DOCUMENTS: KimsaDocument[] = [
  {
    slug: 'ndc-costa-rica-2025-2035',
    title: 'Contribución Nacionalmente Determinada de Costa Rica 2025-2035',
    area: 'gestion',
    client: 'Gobierno de Costa Rica',
    year: '2025',
    contribution:
      'KIMSA acompañó el diseño de la hoja de ruta y la formulación de la propuesta de esta NDC 2025-2035 de Costa Rica, articulando metas de mitigación y adaptación con las prioridades de desarrollo del país.',
    tags: ['NDC', 'Hoja de ruta', 'Mitigación', 'Adaptación'],
    url: 'https://cambioclimatico.minae.go.cr/wp-content/uploads/2026/01/CND-2025-2035-ULT-VERs.pdf',
    tint: 'forest',
    title_en: "Costa Rica's Nationally Determined Contribution 2025-2035",
    contribution_en:
      "KIMSA supported the design of the roadmap and the formulation of the proposal for this NDC 2025-2035 of Costa Rica, aligning mitigation and adaptation goals with the country's development priorities.",
    tags_en: ['NDC', 'Roadmap', 'Mitigation', 'Adaptation'],
  },
  {
    slug: 'bienestar-conexion-naturaleza-metodologias-2025',
    title:
      'Documento de resultados a metodologías sobre dinámicas de bienestar ligadas a la conexión con la naturaleza',
    area: 'psicologia',
    client: 'KIMSA — Psicología Ambiental',
    year: '2025',
    contribution:
      'Camilo Posada, bajo la supervisión de Carolina Quiñones, sistematizó los resultados de las metodologías aplicadas para explorar las dinámicas de bienestar asociadas a la conexión con la naturaleza.',
    tags: ['Psicología ambiental', 'Bienestar', 'Conexión con la naturaleza'],
    url: 'https://drive.google.com/file/d/1zJQoVOX0WbCghc580B0IR7jJCzVdZdB3/view',
    tint: 'earth',
    title_en: 'Results report on methodologies for wellbeing dynamics linked to connection with nature',
    contribution_en:
      "Camilo Posada, under the supervision of Carolina Quiñones, systematized the results of the methodologies applied to explore wellbeing dynamics associated with connection with nature.",
    tags_en: ['Environmental psychology', 'Wellbeing', 'Connection with nature'],
  },
  {
    slug: 'sostenibilidad-dnp-colombia-documento',
    title:
      'Evaluación de operaciones de los sistemas de información administrados por las entidades del Gobierno Nacional, con enfoque en los del Departamento Nacional de Planeación',
    area: 'carbonbox',
    client: 'Departamento Nacional de Planeación (DNP) · IPSOS',
    year: '2025',
    contribution:
      'Con CarbonBox, KIMSA calculó la huella de carbono, la huella hídrica y las métricas de circularidad de los sistemas de información priorizados que evaluó este informe del DNP.',
    tags: ['Huella de carbono', 'Circularidad', 'CarbonBox', 'Sector público'],
    url: 'https://colaboracion.dnp.gov.co/sites/CDDNP/Sinergia/2025/DSEPP_1564_Evaluacion_Sistemas_de_Informacion_Informe_Resultados.pdf',
    tint: 'river',
    title_en: 'Assessment of the operations of information systems managed by National Government entities, with a focus on those of the National Planning Department',
    contribution_en:
      "With CarbonBox, KIMSA calculated the carbon footprint, water footprint, and circularity metrics of the priority information systems assessed in this DNP report.",
    tags_en: ['Carbon footprint', 'Circularity', 'CarbonBox', 'Public sector'],
  },
  {
    slug: 'honduras-ingei-2016-2020',
    title: 'Inventario Nacional de Gases de Efecto Invernadero (INGEI) de Honduras 2016-2020',
    area: 'gestion',
    client: 'Gobierno de Honduras',
    year: '2024',
    contribution:
      'KIMSA apoyó la estimación de emisiones de gases de efecto invernadero y la elaboración de este Inventario Nacional de GEI (2016-2020), como parte del Segundo Informe Bienal de Actualización (BUR) del país.',
    tags: ['Inventario GEI', 'BUR', 'CMNUCC'],
    url: 'https://unfccc.int/sites/default/files/resource/Document%20NIR%20Hn%202024.pdf',
    tint: 'river',
    title_en: "Honduras's National Greenhouse Gas Inventory (NGHGI) 2016-2020",
    contribution_en:
      "KIMSA supported the estimation of greenhouse gas emissions and the preparation of this National GHG Inventory (2016-2020), as part of the country's Second Biennial Update Report (BUR).",
    tags_en: ['GHG inventory', 'BUR', 'UNFCCC'],
  },
  {
    slug: 'arboles-fuera-del-bosque-nama-forestal-colombia',
    title: 'Los árboles fuera del bosque en la NAMA forestal de Colombia',
    area: 'gestion',
    client: 'World Agroforestry (ICRAF)',
    year: '2019',
    contribution:
      'Viviana Bohórquez, líder de Tecnología para la Naturaleza en KIMSA, coautoró este artículo sobre los elementos conceptuales para contabilizar los árboles fuera del bosque en la NAMA forestal de Colombia.',
    tags: ['NAMA forestal', 'Investigación', 'ICRAF'],
    url: 'https://www.researchgate.net/publication/331683384_Los_arboles_fuera_del_bosque_en_la_NAMA_forestal_de_Colombia_Elementos_conceptuales_para_su_contabilizacion',
    tint: 'earth',
    title_en: "Trees outside the forest in Colombia's forestry NAMA",
    contribution_en:
      "Viviana Bohórquez, KIMSA's Technology for Nature lead, co-authored this article on the conceptual elements for accounting for trees outside the forest in Colombia's forestry NAMA.",
    tags_en: ['Forestry NAMA', 'Research', 'ICRAF'],
  },
  {
    slug: 'ndc-3-el-salvador-documento',
    title: 'NDC 3.0 de El Salvador — documento oficial',
    area: 'gestion',
    client: 'Ministerio de Medio Ambiente y Recursos Naturales de El Salvador · PNUD',
    year: '2025',
    contribution:
      'KIMSA redactó el capítulo de implementación y el documento final presentado ante la CMNUCC, integrando la estrategia metodológica y la estructura de financiamiento climático.',
    tags: ['NDC 3.0', 'CMNUCC', 'Financiamiento climático'],
    url: 'https://unfccc.int/sites/default/files/2025-12/NDC%20EL%20SALVADOR%202025-%20VF.pdf',
    tint: 'forest',
    title_en: "El Salvador's NDC 3.0 — official document",
    contribution_en:
      "KIMSA drafted the implementation chapter and the final document submitted to the UNFCCC, integrating the methodological strategy and the climate finance structure.",
    tags_en: ['NDC 3.0', 'UNFCCC', 'Climate finance'],
  },
  {
    slug: 'ndc-el-salvador-2021',
    title: 'NDC de El Salvador — versión actualizada 2021',
    area: 'gestion',
    client: 'Ministerio de Medio Ambiente y Recursos Naturales de El Salvador',
    year: '2021',
    contribution:
      'Como base del proceso de actualización a la NDC 3.0, KIMSA evaluó el cumplimiento de esta NDC actualizada (NDC 2.0) de El Salvador.',
    tags: ['NDC', 'CMNUCC'],
    url: 'https://unfccc.int/sites/default/files/NDC/2022-06/El%20Salvador%20NDC-%20Updated%20Dic.2021.pdf',
    tint: 'sunset',
    title_en: "El Salvador's NDC — updated 2021 version",
    contribution_en:
      "As a basis for the update process to the NDC 3.0, KIMSA assessed compliance with this updated NDC (NDC 2.0) of El Salvador.",
    tags_en: ['NDC', 'UNFCCC'],
  },
  {
    slug: 'picct-narino-documento',
    title: 'Plan Integral de Gestión de Cambio Climático Territorial de Nariño',
    area: 'gestion',
    client: 'Gobernación de Nariño',
    contribution:
      'KIMSA formuló el diagnóstico climático y articuló las medidas de mitigación y adaptación con los actores del territorio para la versión final del plan.',
    tags: ['PIGCCT', 'Territorio', 'Adaptación'],
    url: 'https://2020-2023.narino.gov.co/wp-content/uploads/Diagramacion_pigcct-Fondo-Accion-y-Gobernacion.pdf',
    tint: 'sunset',
    title_en: "Territorial Integrated Climate Change Management Plan of Nariño",
    contribution_en:
      "KIMSA formulated the climate diagnosis and aligned the mitigation and adaptation measures with territorial stakeholders for the final version of the plan.",
    tags_en: ['PIGCCT', 'Territory', 'Adaptation'],
  },
  {
    slug: 'scaling-up-led-research-colombia',
    title:
      "Scaling up the use of low-emissions development (LED) research outputs in Colombia",
    area: 'gestion',
    client: 'CGIAR · CCAFS',
    year: '2020',
    contribution:
      'KIMSA contribuyó a este estudio sobre cómo escalar el uso de resultados de investigación en desarrollo bajo en emisiones (LED) para conectar ciencia y política agrícola en Colombia.',
    tags: ['LED', 'Agricultura', 'CCAFS'],
    url: "https://www.researchgate.net/publication/348211821_Scaling_up_the_use_of_low-emissions_development_LED_research_outputs_in_Colombia_Linking_science_to_policy_for_supporting_country's_LED_agriculture",
    tint: 'river',
    title_en: 'Scaling up the use of low-emissions development (LED) research outputs in Colombia',
    contribution_en:
      "KIMSA contributed to this study on how to scale up the use of low-emissions development (LED) research outputs to link science and agricultural policy in Colombia.",
    tags_en: ['LED', 'Agriculture', 'CCAFS'],
  },
  {
    slug: 'science-informs-policy-low-emission-agriculture-colombia',
    title: 'Science effectively informs policy processes in Colombia toward low-emission agriculture',
    area: 'gestion',
    client: 'CGIAR · CCAFS · USDA — EC-LEDS',
    year: '2020',
    contribution:
      'Viviana Bohórquez, coordinadora de proyectos de Mitigación Climática en KIMSA, coautoró esta nota informativa y KIMSA elaboró el Plan de Acción 2020 para escalar el uso de los resultados de investigación de EC-LEDS junto con los actores clave del sector agrícola colombiano.',
    tags: ['EC-LEDS', 'NDC', 'Agricultura', 'Mitigación'],
    url: 'https://cgspace.cgiar.org/server/api/core/bitstreams/8702f492-2bd0-4057-bf08-cdcc701d567c/content',
    tint: 'river',
    title_en: 'Science effectively informs policy processes in Colombia toward low-emission agriculture',
    contribution_en:
      "Viviana Bohórquez, KIMSA's Climate Mitigation projects coordinator, co-authored this info note, and KIMSA developed the 2020 Action Plan to scale the use of EC-LEDS research outputs together with key stakeholders in Colombia's agricultural sector.",
    tags_en: ['EC-LEDS', 'NDC', 'Agriculture', 'Mitigation'],
  },
  {
    slug: 'sondeo-percepcion-emocional-crisis-climatica-colombia-2022',
    title: 'Sondeo: percepción emocional sobre la crisis climática en Colombia',
    area: 'psicologia',
    client: 'KIMSA — Psicología Ambiental',
    year: '2022',
    contribution:
      'Estudio propio de KIMSA elaborado por Carolina Quiñones Hoyos, Viviana Bohórquez y Juliana Romero, que indaga cómo perciben y sienten emocionalmente la crisis climática distintos grupos poblacionales en Colombia.',
    tags: ['Psicología ambiental', 'Percepción emocional', 'Crisis climática', 'Colombia'],
    url: 'https://drive.google.com/file/d/1B5jXDsXY53647owftdhY9Vj81EY4eQH_/view',
    tint: 'sunset',
    title_en: 'Survey: emotional perception of the climate crisis in Colombia',
    contribution_en:
      "KIMSA's own study prepared by Carolina Quiñones Hoyos, Viviana Bohórquez, and Juliana Romero, exploring how different population groups in Colombia perceive and emotionally experience the climate crisis.",
    tags_en: ['Environmental psychology', 'Emotional perception', 'Climate crisis', 'Colombia'],
  },
  {
    slug: 'picc-la-guajira-documento',
    title: 'Plan Integral de Cambio Climático (PICC) de La Guajira',
    area: 'gestion',
    client: 'Corpoguajira · Hidrocaribe Ltda',
    year: '2017',
    contribution:
      'KIMSA desarrolló el componente de mitigación de este Plan Integral de Cambio Climático del departamento de La Guajira.',
    tags: ['PICC', 'Territorio', 'Mitigación'],
    url: 'https://wp.corpoguajira.gov.co/wp-content/uploads/2015/03/Plan-integral-de-cambio-climaticoPICC-La-Guajira.pdf',
    tint: 'sunset',
    title_en: 'La Guajira Comprehensive Climate Change Plan (PICC)',
    contribution_en:
      "KIMSA developed the mitigation component of this Comprehensive Climate Change Plan for the department of La Guajira.",
    tags_en: ['PICC', 'Territory', 'Mitigation'],
  },
  {
    slug: 'inclusion-chucheros-bahia-malaga-documento',
    title: 'Inclusión social con el CCCN Chucheros en Bahía Málaga',
    area: 'psicologia',
    client: 'CCCN Chucheros',
    contribution:
      'KIMSA documentó el diagnóstico participativo con enfoque diferencial que realizó junto al Consejo Comunitario de Chucheros para fortalecer la inclusión social en el turismo comunitario de Bahía Málaga.',
    tags: ['Inclusión social', 'Enfoque diferencial', 'Turismo comunitario'],
    url: 'https://drive.google.com/file/d/1QFfyYNz27yjBWaP29Am9W0IFcRYAvjOO/view',
    tint: 'earth',
    title_en: 'Social inclusion with the CCCN Chucheros community in Bahía Málaga',
    contribution_en:
      "KIMSA documented the participatory diagnosis with a differentiated approach carried out with the Chucheros Community Council to strengthen social inclusion in community-based tourism in Bahía Málaga.",
    tags_en: ['Social inclusion', 'Differentiated approach', 'Community-based tourism'],
  },
  {
    slug: 'colegio-anglo-colombiano-webinar',
    title: 'Huella de carbono organizacional del Colegio Anglo Colombiano — webinar',
    area: 'carbonbox',
    client: 'Fundación Colegio Anglo Colombiano',
    contribution:
      'Webinar sobre la medición con CarbonBox de la huella de carbono organizacional del Colegio Anglo Colombiano.',
    tags: ['Huella de carbono', 'CarbonBox', 'Educación', 'Webinar'],
    url: 'https://www.youtube.com/watch?v=PIgFjxux6TI',
    tint: 'forest',
    title_en: 'Organizational carbon footprint of Colegio Anglo Colombiano — webinar',
    contribution_en:
      "Webinar on measuring the organizational carbon footprint of Colegio Anglo Colombiano with CarbonBox.",
    tags_en: ['Carbon footprint', 'CarbonBox', 'Education', 'Webinar'],
  },
];

export const documentsByArea = (area: AreaKey) => DOCUMENTS.filter((d) => d.area === area);

export interface Member {
  name: string;
  role: string;
  bio: string;
  img?: string;
  color: string;
  role_en?: string;
  bio_en?: string;
}

export function localizeMember(m: Member, lang: 'es' | 'en') {
  if (lang === 'es') return m;
  return { ...m, role: m.role_en ?? m.role, bio: m.bio_en ?? m.bio };
}

// Equipo — solo Natalia y Viviana (Carolina Quiñones ya no aparece).
export const TEAM: Member[] = [
  {
    name: 'Natalia Gutiérrez Beltrán',
    role: 'Líder de Gestión Climática',
    bio: 'Especialista en el diseño e implementación de políticas de adaptación y mitigación al cambio climático en América Latina, liderando proyectos con enfoque territorial y multisectorial.',
    img: '/assets/team-natalia.png',
    color: 'var(--kimsa-terracotta)',
    role_en: 'Climate Management Lead',
    bio_en:
      'Specialist in the design and implementation of climate change adaptation and mitigation policies in Latin America, leading projects with a territorial and multisector approach.',
  },
  {
    name: 'Viviana Bohórquez L.',
    role: 'Líder de Tecnología para la Naturaleza',
    bio: 'Creadora de CarbonBox. Experta en conectar tecnología, datos y acción climática para medir huellas de carbono y apoyar la toma de decisiones sostenibles.',
    img: '/assets/team-viviana.png',
    color: 'var(--kimsa-forest)',
    role_en: 'Technology for Nature Lead',
    bio_en:
      'Creator of CarbonBox. Expert in connecting technology, data, and climate action to measure carbon footprints and support sustainable decision-making.',
  },
];
