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
}
export const CLIENT_LOGOS: ClientLogo[] = [
  { src: '/assets/clients/pnud.png', alt: 'PNUD' },
  { src: '/assets/clients/giz.png', alt: 'GIZ' },
  { src: '/assets/clients/bid.jpg', alt: 'BID' },
  { src: '/assets/clients/caf.png', alt: 'CAF' },
  { src: '/assets/clients/unep.png', alt: 'ONU Medio Ambiente' },
  { src: '/assets/clients/tnc.jpg', alt: 'The Nature Conservancy' },
  { src: '/assets/clients/euroclima.jpg', alt: 'EUROCLIMA+', size: 'lg' },
  { src: '/assets/clients/bancoldex.png', alt: 'Bancóldex' },
  { src: '/assets/clients/minagricultura.webp', alt: 'Ministerio de Agricultura' },
  { src: '/assets/clients/miambiente.webp', alt: 'MiAmbiente' },
  { src: '/assets/clients/ciat.jpg', alt: 'Alliance Bioversity-CIAT' },
  { src: '/assets/clients/icraf.png', alt: 'ICRAF' },
  { src: '/assets/clients/idrc.jpg', alt: 'IDRC' },
  { src: '/assets/clients/flacso.jpg', alt: 'FLACSO' },
  { src: '/assets/clients/climate-group.png', alt: 'Climate Group', size: 'lg' },
  { src: '/assets/clients/transforma.png', alt: 'Transforma' },
  { src: '/assets/clients/camara-verde.png', alt: 'Cámara Verde' },
  { src: '/assets/clients/anla.png', alt: 'ANLA — Autoridad Nacional de Licencias Ambientales', size: 'lg' },
  { src: '/assets/clients/cormacarena.png', alt: 'Cormacarena' },
  { src: '/assets/clients/corpoguajira.png', alt: 'Corpoguajira' },
  { src: '/assets/clients/gov-narino.jpg', alt: 'Gobernación de Nariño' },
  { src: '/assets/clients/marn-el-salvador.png', alt: 'Gobierno de El Salvador — MARN' },
  { src: '/assets/clients/min-amb-ecuador.png', alt: 'Ministerio del Ambiente de Ecuador' },
  { src: '/assets/clients/serna-honduras.png', alt: 'Gobierno de Honduras — SERNA' },

  // Clientes de CarbonBox (logos aportados por el equipo, agosto 2026) —
  // ver los proyectos correspondientes en PROJECTS, área 'carbonbox'.
  { src: '/assets/clients/biomax.png', alt: 'Biomax Biocombustibles' },
  { src: '/assets/clients/agrosavia.png', alt: 'AGROSAVIA' },
  { src: '/assets/clients/zhana-solutions.svg', alt: 'Zhana Solutions Green Engineering' },
  { src: '/assets/clients/copropiedad-zf.png', alt: 'Co-propiedad Zona Franca de Bogotá' },
  { src: '/assets/clients/cafe-misiones.jpg', alt: 'Hacienda Café Misiones' },
  { src: '/assets/clients/colegio-anglo.png', alt: 'Colegio Anglo Colombiano' },
  { src: '/assets/clients/ebsa.png', alt: 'Empresa de Energía de Boyacá' },
  { src: '/assets/clients/gec-ecoenterprises.png', alt: 'GEC EcoEnterprises Management' },
  { src: '/assets/clients/cleantechhub.png', alt: 'CleanTechHub' },
  { src: '/assets/clients/paramo-presenta.png', alt: 'Páramo Presenta' },
  { src: '/assets/clients/candes.jpg', alt: 'CANDES' },
  { src: '/assets/clients/eternit.webp', alt: 'Eternit Colombia' },
  { src: '/assets/clients/comfama.webp', alt: 'Comfama' },
  { src: '/assets/clients/cataexport.webp', alt: 'CataExport' },
  { src: '/assets/clients/weia.png', alt: 'WEIA' },
  { src: '/assets/clients/colgas.webp', alt: 'Colgas' },
  { src: '/assets/clients/spec-lng.jpg', alt: 'SPEC LNG' },
  { src: '/assets/clients/asobancaria.png', alt: 'Asobancaria' },
  { src: '/assets/clients/fsfb.png', alt: 'Fundación Santa Fé de Bogotá' },
  { src: '/assets/clients/parker.webp', alt: 'Parker' },
  { src: '/assets/clients/ambielegsa.png', alt: 'AMBIELEGSA' },
  { src: '/assets/clients/jeronimo-martins.webp', alt: 'Jerónimo Martins' },
  { src: '/assets/clients/linktic.svg', alt: 'LinkTic' },
  { src: '/assets/clients/biodiversal.png', alt: 'Biodiversal' },
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
    name: 'México', code: 'MX', count: 1,
    highlights: ['Estimación de impacto en carbono de 22 emprendimientos (CarbonBox)'],
    highlights_en: ['Carbon impact estimation for 22 startups (CarbonBox)'],
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
    client: 'Ministerio de Medio Ambiente y Recursos Naturales de El Salvador · PNUD',
    country: 'El Salvador',
    year: '2024',
    summary: 'Diseño de la NDC 3.0 y una estructura de financiamiento para movilizar recursos climáticos.',
    description:
      'Evaluamos el cumplimiento de la NDC 2.0, diseñamos una estrategia metodológica integrada y desarrollamos el capítulo de implementación de la NDC 3.0. Redactamos el documento final para su presentación oficial ante la CMNUCC y construimos una estructura de financiamiento climático para movilizar recursos públicos, privados e internacionales, identificando programas nacionales de alto impacto para la nueva NDC.',
    tags: ['NDC 3.0', 'Financiamiento climático', 'CMNUCC', 'Enfoque multisectorial'],
    tint: 'forest',
    image: '/assets/projects/ndc-3-el-salvador.jpg',
    publicationUrl: 'https://unfccc.int/sites/default/files/2025-12/NDC%20EL%20SALVADOR%202025-%20VF.pdf',
    title_en: "Update of the NDC 3.0 and climate finance structure in El Salvador",
    summary_en: 'Design of the NDC 3.0 and a financing structure to mobilize climate resources.',
    description_en:
      "We assessed compliance with the NDC 2.0, designed an integrated methodological strategy, and developed the implementation chapter of the NDC 3.0. We drafted the final document for its official submission to the UNFCCC and built a climate finance structure to mobilize public, private, and international resources, identifying high-impact national programs for the new NDC.",
    tags_en: ['NDC 3.0', 'Climate finance', 'UNFCCC', 'Multisector approach'],
  },
  {
    slug: 'ndc-3-costa-rica',
    title: 'Diseño de hoja de ruta y propuesta de NDC 3.0 en Costa Rica',
    area: 'gestion',
    client: 'Fundecooperación Costa Rica · Ministerio de Ambiente y Energía (MINAE)',
    country: 'Costa Rica',
    year: '2024',
    summary: 'Hoja de ruta y propuesta de actualización de la NDC 3.0 de Costa Rica.',
    description:
      'Acompañamos el diseño de la hoja de ruta y la formulación de la propuesta de tercera Contribución Determinada a Nivel Nacional (NDC 3.0) de Costa Rica, articulando metas de mitigación y adaptación con las prioridades de desarrollo del país.',
    tags: ['NDC 3.0', 'Hoja de ruta', 'Mitigación', 'Adaptación'],
    tint: 'forest',
    image: '/assets/projects/ndc-3-costa-rica.jpg',
    publicationUrl: 'https://cambioclimatico.minae.go.cr/wp-content/uploads/2026/01/CND-2025-2035-ULT-VERs.pdf',
    title_en: 'Roadmap design and NDC 3.0 proposal in Costa Rica',
    summary_en: "Roadmap and update proposal for Costa Rica's NDC 3.0.",
    description_en:
      "We supported the design of the roadmap and the formulation of the proposal for Costa Rica's third Nationally Determined Contribution (NDC 3.0), aligning mitigation and adaptation goals with the country's development priorities.",
    tags_en: ['NDC 3.0', 'Roadmap', 'Mitigation', 'Adaptation'],
  },
  {
    slug: 'mrv-ecuador',
    title: 'Revisión y fortalecimiento del sistema MRV de adaptación y mitigación en Ecuador',
    area: 'gestion',
    client: 'Expertise France · Gobierno del Ecuador',
    country: 'Ecuador',
    year: '2024',
    summary: 'Revisión técnica del sistema MRV del sector agropecuario (AFOLU) bajo el programa EUROCLIMA.',
    description:
      'Realizamos una revisión técnica integral del sistema de Monitoreo, Reporte y Verificación (MRV) del sector agropecuario (AFOLU) bajo el programa EUROCLIMA. El trabajo incluyó el análisis crítico de componentes metodológicos, operativos e institucionales, con recomendaciones para fortalecer la alineación con el Acuerdo de París y el Marco de Transparencia Reforzado: cuantificación de GEI, gobernanza institucional, diseño de indicadores e integración con el inventario nacional.',
    tags: ['Sistema MRV', 'AFOLU', 'EUROCLIMA', 'Marco de Transparencia'],
    tint: 'sunset',
    image: '/assets/projects/mrv-ecuador.jpg',
    title_en: "Review and strengthening of Ecuador's adaptation and mitigation MRV system",
    summary_en: 'Technical review of the agricultural sector (AFOLU) MRV system under the EUROCLIMA program.',
    description_en:
      "We carried out a comprehensive technical review of the Monitoring, Reporting and Verification (MRV) system for the agricultural sector (AFOLU) under the EUROCLIMA program. The work included a critical analysis of methodological, operational, and institutional components, with recommendations to strengthen alignment with the Paris Agreement and the Enhanced Transparency Framework: GHG quantification, institutional governance, indicator design, and integration with the national inventory.",
    tags_en: ['MRV system', 'AFOLU', 'EUROCLIMA', 'Transparency Framework'],
  },
  {
    slug: 'honduras-ica-bur',
    title: 'Apoyo técnico para la revisión ICA y la actualización del Segundo BUR en Honduras',
    area: 'gestion',
    client: 'PNUD Honduras · Secretaría de Recursos Naturales y Ambiente (SERNA)',
    country: 'Honduras',
    year: '2024',
    summary: 'Revisión del Análisis Internacional (ICA) y actualización del Segundo Informe Bienal de Actualización.',
    description:
      'Brindamos apoyo técnico para la revisión del proceso de Análisis y Consulta Internacional (ICA) y la actualización del Segundo Informe Bienal de Actualización (BUR) de Honduras, fortaleciendo la transparencia climática del país ante la CMNUCC.',
    tags: ['BUR', 'ICA', 'Transparencia', 'CMNUCC'],
    tint: 'river',
    image: '/assets/projects/honduras-ica-bur.jpg',
    title_en: "Technical support for the ICA review and Honduras's Second BUR update",
    summary_en: 'Review of the International Consultation and Analysis (ICA) and update of the Second Biennial Update Report.',
    description_en:
      "We provided technical support for the review of the International Consultation and Analysis (ICA) process and the update of Honduras's Second Biennial Update Report (BUR), strengthening the country's climate transparency before the UNFCCC.",
    tags_en: ['BUR', 'ICA', 'Transparency', 'UNFCCC'],
  },
  {
    slug: 'honduras-gei-bur',
    title: 'Estimación de GEI y elaboración del Segundo BUR de Honduras',
    area: 'gestion',
    client: 'PNUD Honduras · Secretaría de Recursos Naturales y Ambiente (SERNA)',
    country: 'Honduras',
    year: '2023',
    summary: 'Inventario de emisiones y elaboración del Segundo Informe Bienal de Actualización (BUR).',
    description:
      'Realizamos la estimación de emisiones de gases de efecto invernadero y la elaboración del Segundo Informe Bienal de Actualización (BUR) de Honduras, consolidando la información climática nacional para su reporte internacional.',
    tags: ['Inventario GEI', 'BUR', 'Reportes', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/honduras-gei-bur.jpg',
    publicationUrl: 'https://unfccc.int/sites/default/files/resource/Document%20NIR%20Hn%202024.pdf',
    title_en: "GHG estimation and Honduras's Second BUR",
    summary_en: 'Emissions inventory and preparation of the Second Biennial Update Report (BUR).',
    description_en:
      "We carried out the estimation of greenhouse gas emissions and the preparation of Honduras's Second Biennial Update Report (BUR), consolidating the country's climate information for its international reporting.",
    tags_en: ['GHG inventory', 'BUR', 'Reports', 'Mitigation'],
  },
  {
    slug: 'compensaciones-ambientales',
    title: 'Compensaciones ambientales y vulnerabilidad en Colombia',
    area: 'gestion',
    client: '',
    country: 'Colombia',
    summary: 'Análisis de compensaciones ambientales y vulnerabilidad climática en el territorio.',
    description:
      'Analizamos las compensaciones ambientales y la vulnerabilidad climática en Colombia, aportando criterios técnicos para orientar decisiones de conservación, restauración y adaptación en el marco de la gestión ambiental del país.',
    tags: ['Compensaciones', 'Vulnerabilidad', 'Adaptación'],
    tint: 'earth',
    image: '/assets/projects/compensaciones-ambientales.jpg',
    title_en: 'Environmental compensation and vulnerability in Colombia',
    summary_en: 'Analysis of environmental compensation and climate vulnerability in the territory.',
    description_en:
      "We analyzed environmental compensation and climate vulnerability in Colombia, providing technical criteria to guide decisions on conservation, restoration, and adaptation within the country's environmental management framework.",
    tags_en: ['Compensation', 'Vulnerability', 'Adaptation'],
  },
  {
    slug: 'estrategias-meta',
    title: 'Estrategias climáticas municipales en el Meta',
    area: 'gestion',
    client: 'Unión Temporal Biometa · Cormacarena',
    country: 'Colombia',
    year: '2018',
    summary: 'Formulación de estrategias climáticas para municipios del departamento del Meta.',
    description:
      'Formulamos estrategias climáticas para municipios del departamento del Meta, integrando medidas de mitigación y adaptación con las capacidades y prioridades locales para una acción climática territorial.',
    tags: ['Estrategia municipal', 'Territorio', 'Adaptación', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/estrategias-meta.jpg',
    title_en: 'Municipal climate strategies in Meta',
    summary_en: 'Formulation of climate strategies for municipalities in the Meta department.',
    description_en:
      "We formulated climate strategies for municipalities in the Meta department, integrating mitigation and adaptation measures with local capacities and priorities for territorial climate action.",
    tags_en: ['Municipal strategy', 'Territory', 'Adaptation', 'Mitigation'],
  },
  {
    slug: 'licenciamiento-cc',
    title: 'Incorporación del cambio climático en los proyectos licenciados en Colombia',
    area: 'gestion',
    client: 'Banco Interamericano de Desarrollo (BID) · ANLA',
    country: 'Colombia',
    year: '2022',
    summary: 'Fortalecimiento de la variable de cambio climático en proyectos con licencia ambiental.',
    description:
      'Fortalecimos la incorporación del cambio climático en los proyectos con licencia ambiental en Colombia, desarrollando criterios y lineamientos para integrar la mitigación y la adaptación en los procesos de licenciamiento.',
    tags: ['Licenciamiento', 'Evaluación ambiental', 'Adaptación'],
    tint: 'river',
    image: '/assets/projects/licenciamiento-cc.jpg',
    title_en: 'Integrating climate change into licensed projects in Colombia',
    summary_en: 'Strengthening the climate change variable in environmentally licensed projects.',
    description_en:
      "We strengthened the integration of climate change into environmentally licensed projects in Colombia, developing criteria and guidelines to integrate mitigation and adaptation into licensing processes.",
    tags_en: ['Licensing', 'Environmental assessment', 'Adaptation'],
  },
  {
    slug: 'desarrollo-bajo-carbono',
    title: 'Fortalecimiento de políticas de desarrollo bajo en carbono en Colombia',
    area: 'gestion',
    client: '',
    country: 'Colombia',
    summary: 'Apoyo al diseño y fortalecimiento de políticas de desarrollo bajo en carbono.',
    description:
      'Apoyamos el fortalecimiento de políticas de desarrollo bajo en carbono en Colombia, aportando análisis técnico y recomendaciones para orientar la transición hacia una economía baja en emisiones.',
    tags: ['Política pública', 'Bajo en carbono', 'Descarbonización'],
    tint: 'sunset',
    image: '/assets/projects/desarrollo-bajo-carbono.jpg',
    title_en: 'Strengthening low-carbon development policies in Colombia',
    summary_en: 'Support for the design and strengthening of low-carbon development policies.',
    description_en:
      "We supported the strengthening of low-carbon development policies in Colombia, providing technical analysis and recommendations to guide the transition toward a low-emissions economy.",
    tags_en: ['Public policy', 'Low-carbon', 'Decarbonization'],
  },
  {
    slug: 'picct-narino',
    title: 'Plan Integral de Cambio Climático Territorial de Nariño',
    area: 'gestion',
    client: 'Gobernación de Nariño',
    country: 'Colombia',
    year: '2018',
    summary: 'Formulación del Plan Integral de Cambio Climático Territorial (PICCT) de Nariño.',
    description:
      'Formulamos el Plan Integral de Cambio Climático Territorial (PICCT) del departamento de Nariño, articulando el diagnóstico climático, las medidas de mitigación y adaptación y la participación de actores del territorio.',
    tags: ['PICCT', 'Territorio', 'Adaptación', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/picct-narino.jpg',
    publicationUrl: 'https://2020-2023.narino.gov.co/wp-content/uploads/Diagramacion_pigcct-Fondo-Accion-y-Gobernacion.pdf',
    title_en: 'Territorial Comprehensive Climate Change Plan of Nariño',
    summary_en: "Formulation of Nariño's Territorial Comprehensive Climate Change Plan (PICCT).",
    description_en:
      "We formulated the Territorial Comprehensive Climate Change Plan (PICCT) for the department of Nariño, articulating the climate diagnosis, mitigation and adaptation measures, and the participation of territorial stakeholders.",
    tags_en: ['PICCT', 'Territory', 'Adaptation', 'Mitigation'],
  },
  {
    slug: 'gestion-urbana-pasto',
    title: 'Plan de gestión climática urbana en San Juan de Pasto',
    area: 'gestion',
    client: 'FLACSO Ecuador · Alcaldía de San Juan de Pasto',
    country: 'Colombia',
    year: '2020',
    summary: 'Plan de gestión climática para el entorno urbano de San Juan de Pasto.',
    description:
      'Desarrollamos un plan de gestión climática urbana para San Juan de Pasto, orientado a reducir emisiones y aumentar la resiliencia de la ciudad frente a los efectos del cambio climático.',
    tags: ['Gestión urbana', 'Ciudades', 'Resiliencia', 'Mitigación'],
    tint: 'river',
    image: '/assets/projects/gestion-urbana-pasto.jpg',
    title_en: 'Urban climate management plan in San Juan de Pasto',
    summary_en: 'Climate management plan for the urban environment of San Juan de Pasto.',
    description_en:
      "We developed an urban climate management plan for San Juan de Pasto, aimed at reducing emissions and increasing the city's resilience to the effects of climate change.",
    tags_en: ['Urban management', 'Cities', 'Resilience', 'Mitigation'],
  },

  // Proyectos aportados por la Matriz consolidada de experiencia KIMSA 2026
  // (hoja de cálculo del equipo, ago-2026) que no estaban cargados.
  {
    slug: 'dnp-footprint-deval',
    title: 'Evaluación con enfoque Footprint (EvalConnect) para el DNP',
    area: 'gestion',
    client: 'DEval (Instituto Alemán de Evaluación del Desarrollo) · Departamento Nacional de Planeación (DNP)',
    country: 'Colombia',
    year: '2025',
    summary: 'Apoyo a una evaluación con enfoque de Huella Ecológica (Footprint approach) en Colombia.',
    description:
      'Apoyamos la implementación de una evaluación utilizando el enfoque de Huella Ecológica (Footprint approach) en Colombia, en el marco de la iniciativa EvalConnect del Departamento Nacional de Planeación.',
    tags: ['Evaluación de políticas públicas', 'Huella ecológica'],
    tint: 'earth',
    image: '/assets/projects/dnp-footprint-deval.png',
    title_en: 'Footprint-approach evaluation (EvalConnect) for the DNP',
    summary_en: 'Support for an Ecological Footprint-approach evaluation in Colombia.',
    description_en:
      "We supported the implementation of an evaluation using the Ecological Footprint approach in Colombia, as part of the EvalConnect initiative of the National Planning Department.",
    tags_en: ['Public policy evaluation', 'Ecological footprint'],
  },
  {
    slug: 'ndc-el-salvador-2022-cuantificacion',
    title: 'Cuantificación de la contribución de El Salvador al cambio climático',
    area: 'gestion',
    client: 'PNUD El Salvador · Ministerio de Medio Ambiente y Recursos Naturales (MARN)',
    country: 'El Salvador',
    year: '2022',
    summary: 'Actualización de la NDC de El Salvador integrando los sectores energía, AFOLU, residuos e IPPU.',
    description:
      'Elaboramos la actualización de la NDC de El Salvador integrando información de los sectores energía, AFOLU (agricultura), residuos sólidos e IPPU, identificando medidas de mitigación y metas, y definiendo medidas de adaptación para biodiversidad y ecosistemas, ciudades y recursos hídricos.',
    tags: ['NDC', 'Acuerdo de París', 'Política y gobernanza climática'],
    tint: 'sunset',
    image: '/assets/projects/ndc-el-salvador-2022-cuantificacion.png',
    title_en: "Quantifying El Salvador's contribution to climate change",
    summary_en: "Update of El Salvador's NDC integrating the energy, AFOLU, waste, and IPPU sectors.",
    description_en:
      "We prepared the update of El Salvador's NDC, integrating information from the energy, AFOLU (agriculture), solid waste, and IPPU sectors, identifying mitigation measures and targets, and defining adaptation measures for biodiversity and ecosystems, cities, and water resources.",
    tags_en: ['NDC', 'Paris Agreement', 'Climate policy and governance'],
  },
  {
    slug: 'ec-leds-alliance-ciat',
    title: 'Fortalecimiento del impacto de la investigación en desarrollo bajo en emisiones (EC-LEDS)',
    area: 'gestion',
    client: 'Alliance Bioversity-CIAT · Ministerio de Agricultura y Desarrollo Rural (MinAgricultura)',
    country: 'Colombia',
    year: '2020',
    summary: 'Mejora del impacto de la investigación EC-LEDS para la política agrícola y climática de Colombia.',
    description:
      'Trabajamos para mejorar el impacto de los resultados de la investigación "Enhancing Capacity for Low Emission Development Strategies" (EC-LEDS), apoyando al Gobierno colombiano en la implementación de sus políticas de desarrollo agrícola, su NDC y la Estrategia de Desarrollo Bajo en Carbono.',
    tags: ['Política y gobernanza climática', 'Mitigación', 'Agricultura'],
    tint: 'earth',
    image: '/assets/projects/ec-leds-alliance-ciat.jpg',
    publicationUrl: 'https://cgspace.cgiar.org/server/api/core/bitstreams/8702f492-2bd0-4057-bf08-cdcc701d567c/content',
    title_en: 'Strengthening the impact of low-emission development research (EC-LEDS)',
    summary_en: "Improving the impact of EC-LEDS research for Colombia's agricultural and climate policy.",
    description_en:
      'We worked to improve the impact of the results of the "Enhancing Capacity for Low Emission Development Strategies" (EC-LEDS) research, supporting the Colombian Government in implementing its agricultural development policies, its NDC, and the Low Carbon Development Strategy.',
    tags_en: ['Climate policy and governance', 'Mitigation', 'Agriculture'],
  },
  {
    slug: 'euroclima-dialogo-giz',
    title: 'Mecanismo de diálogo país para EUROCLIMA+',
    area: 'gestion',
    client: 'GIZ · Programa EUROCLIMA+',
    country: 'Colombia',
    year: '2018',
    summary: 'Recomendaciones para hacer operacional un mecanismo de diálogo entre países del programa EUROCLIMA+.',
    description:
      'Elaboramos una estrategia de mecanismos de diálogo nacional para los países del programa EUROCLIMA+ en relación con sus NDC, explorando oportunidades de colaboración con otros actores institucionales que apoyan a los países de América Latina y el Caribe.',
    tags: ['Política y gobernanza climática', 'EUROCLIMA+'],
    tint: 'forest',
    image: '/assets/projects/euroclima-dialogo-giz.png',
    title_en: 'Country dialogue mechanism for EUROCLIMA+',
    summary_en: 'Recommendations to operationalize a dialogue mechanism between EUROCLIMA+ program countries.',
    description_en:
      "We prepared a national dialogue mechanisms strategy for EUROCLIMA+ program countries in relation to their NDCs, exploring collaboration opportunities with other institutional actors that support Latin American and Caribbean countries.",
    tags_en: ['Climate policy and governance', 'EUROCLIMA+'],
  },
  {
    slug: 'nama-forestal-arboles-fincas',
    title: 'Los árboles en las fincas en la NAMA forestal de Colombia',
    area: 'gestion',
    client: 'World Agroforestry (ICRAF) · Ministerio de Ambiente y Desarrollo Sostenible',
    country: 'Colombia',
    year: '2018',
    summary: 'Elementos conceptuales para contabilizar los árboles en las fincas dentro de la NAMA forestal.',
    description:
      'Identificamos los elementos esenciales para la definición del marco conceptual de la NAMA forestal de Colombia, con énfasis en la contabilización de los árboles en las fincas fuera del bosque.',
    tags: ['NAMA forestal', 'Investigación', 'Mitigación'],
    tint: 'river',
    image: '/assets/projects/nama-forestal-arboles-fincas.png',
    title_en: "Trees on farms in Colombia's forestry NAMA",
    summary_en: 'Conceptual elements to account for trees on farms within the forestry NAMA.',
    description_en:
      "We identified the essential elements for defining the conceptual framework of Colombia's forestry NAMA, with an emphasis on accounting for trees on farms outside the forest.",
    tags_en: ['Forestry NAMA', 'Research', 'Mitigation'],
  },
  {
    slug: 'transforma-caf-ndc-ods',
    title: 'Metodología para vincular las operaciones de CAF con las NDC y los ODS',
    area: 'gestion',
    client: 'Transforma · EUROCLIMA',
    country: 'Colombia',
    year: '2018',
    summary: 'Metodología para definir la contribución de las operaciones de financiamiento de CAF a las NDC y los ODS.',
    description:
      'Desarrollamos una metodología para definir cómo las operaciones de financiamiento y los objetivos de desarrollo sostenible de los países miembros de EUROCLIMA se vinculan con sus NDC.',
    tags: ['Finanzas climáticas', 'NDC', 'ODS'],
    tint: 'dusk',
    image: '/assets/projects/transforma-caf-ndc-ods.png',
    title_en: "Methodology to link CAF's operations with NDCs and SDGs",
    summary_en: "Methodology to define the contribution of CAF's financing operations to NDCs and SDGs.",
    description_en:
      "We developed a methodology to define how the financing operations and sustainable development goals of EUROCLIMA member countries connect with their NDCs.",
    tags_en: ['Climate finance', 'NDC', 'SDGs'],
  },
  {
    slug: 'tnc-compensaciones-biodiversidad',
    title: 'Cambio climático y la estrategia nacional de compensaciones por pérdida de biodiversidad',
    area: 'gestion',
    client: 'The Nature Conservancy',
    country: 'Colombia',
    year: '2018',
    summary: 'Recomendaciones para articular la gestión del cambio climático con las compensaciones por biodiversidad.',
    description:
      'Generamos insumos para una propuesta de recomendaciones que articula la gestión del cambio climático con la estrategia nacional de compensaciones por pérdida de biodiversidad, analizando la vulnerabilidad y la pertinencia de incluir criterios climáticos.',
    tags: ['Compensaciones', 'Biodiversidad', 'Vulnerabilidad'],
    tint: 'earth',
    image: '/assets/clients/tnc.jpg',
    title_en: 'Climate change and the national biodiversity-loss compensation strategy',
    summary_en: 'Recommendations to align climate change management with biodiversity compensation.',
    description_en:
      "We generated inputs for a recommendations proposal that links climate change management with the national strategy for compensating biodiversity loss, analyzing vulnerability and the relevance of including climate criteria.",
    tags_en: ['Compensation', 'Biodiversity', 'Vulnerability'],
  },
  {
    slug: 'tnc-seminario-monitoreo-forestal',
    title: 'Segundo Seminario Nacional de Monitoreo de la Cobertura Forestal',
    area: 'gestion',
    client: 'The Nature Conservancy · IDEAM',
    country: 'Colombia',
    year: '2017',
    summary: 'Memorias del Segundo Seminario Nacional de Monitoreo de la Cobertura Forestal.',
    description:
      'Elaboramos las memorias del Segundo Seminario Nacional de Monitoreo de la Cobertura Forestal, junto a The Nature Conservancy y el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM).',
    tags: ['Monitoreo forestal', 'Investigación'],
    tint: 'forest',
    image: '/assets/clients/tnc.jpg',
    title_en: 'Second National Forest Cover Monitoring Seminar',
    summary_en: 'Proceedings of the Second National Forest Cover Monitoring Seminar.',
    description_en:
      "We prepared the proceedings of the Second National Forest Cover Monitoring Seminar, together with The Nature Conservancy and the Institute of Hydrology, Meteorology and Environmental Studies (IDEAM).",
    tags_en: ['Forest monitoring', 'Research'],
  },
  {
    slug: 'picc-la-guajira-hidrocaribe',
    title: 'Plan Integral de Cambio Climático (PICC) de La Guajira',
    area: 'gestion',
    client: 'Hidrocaribe Ltda · Corpoguajira',
    country: 'Colombia',
    year: '2017',
    summary: 'Componente de mitigación del Plan Integral de Cambio Climático del departamento de La Guajira.',
    description:
      'Asesoramos la estructuración de planes climáticos territoriales y desarrollamos el componente de mitigación del Plan Integral de Cambio Climático (PICC) del departamento de La Guajira.',
    tags: ['PICC', 'Territorio', 'Mitigación'],
    tint: 'sunset',
    image: '/assets/clients/corpoguajira.png',
    title_en: 'La Guajira Comprehensive Climate Change Plan (PICC)',
    summary_en: "Mitigation component of La Guajira department's Comprehensive Climate Change Plan.",
    description_en:
      "We advised on the structuring of territorial climate plans and developed the mitigation component of La Guajira department's Comprehensive Climate Change Plan (PICC).",
    tags_en: ['PICC', 'Territory', 'Mitigation'],
  },

  // ---------- Psicología Ambiental ----------
  {
    slug: 'genero-bancoldex',
    title: 'Estrategia de género e involucramiento de actores',
    area: 'psicologia',
    client: 'Bancóldex · Fondo Verde del Clima',
    country: 'Colombia',
    summary: 'Género e inclusión social para un programa de microfinanzas de adaptación basada en ecosistemas.',
    description:
      'Elaboramos un plan de acción en género e inclusión social y una estrategia de participación para un programa de microfinanzas orientado a la adaptación basada en ecosistemas, asegurando que el diseño del programa incorporara enfoques diferenciales y la voz de los actores involucrados.',
    tags: ['Género', 'Inclusión social', 'Microfinanzas', 'Adaptación basada en ecosistemas'],
    tint: 'sunset',
    image: '/assets/projects/genero-bancoldex.jpg',
    title_en: 'Gender strategy and stakeholder involvement',
    summary_en: 'Gender and social inclusion for an ecosystem-based adaptation microfinance program.',
    description_en:
      "We developed a gender and social inclusion action plan and a participation strategy for a microfinance program focused on ecosystem-based adaptation, ensuring the program's design incorporated differentiated approaches and the voice of the stakeholders involved.",
    tags_en: ['Gender', 'Social inclusion', 'Microfinance', 'Ecosystem-based adaptation'],
  },
  {
    slug: 'cluster-solnatura',
    title: 'Clúster intersectorial de Soluciones basadas en la Naturaleza en Santander',
    area: 'psicologia',
    client: 'The Nature Conservancy · #SolNatura',
    country: 'Colombia',
    summary: 'Diseño y facilitación de un clúster de innovación en SbN para la adaptación en Santander.',
    description:
      'Diseñamos y facilitamos un clúster de innovación e investigación en Soluciones basadas en la Naturaleza en Santander, conectando múltiples sectores para impulsar soluciones colaborativas de adaptación frente al cambio climático. Consultamos a más de 70 actores en su creación.',
    tags: ['Soluciones basadas en la Naturaleza', 'Clúster', 'Innovación', 'TNC'],
    tint: 'forest',
    image: '/assets/projects/cluster-solnatura.jpg',
    title_en: 'Cross-sector Nature-based Solutions cluster in Santander',
    summary_en: 'Design and facilitation of an NbS innovation cluster for adaptation in Santander.',
    description_en:
      "We designed and facilitated a Nature-based Solutions innovation and research cluster in Santander, connecting multiple sectors to drive collaborative climate adaptation solutions. We consulted more than 70 stakeholders in its creation.",
    tags_en: ['Nature-based Solutions', 'Cluster', 'Innovation', 'TNC'],
  },
  {
    slug: 'salud-mental-boyapaz',
    title: 'Salud mental y vínculo con la naturaleza en Boyapaz',
    area: 'psicologia',
    client: 'Boyapaz',
    country: 'Colombia',
    summary: 'Trabajo sobre el bienestar emocional y su relación con el cuidado de la naturaleza.',
    description:
      'Acompañamos procesos que promueven la salud mental y el vínculo con la naturaleza como base para el cuidado ambiental, integrando herramientas de la psicología ambiental con las realidades del territorio.',
    tags: ['Salud mental', 'Bienestar', 'Naturaleza'],
    tint: 'river',
    image: '/assets/projects/salud-mental-boyapaz.jpg',
    title_en: 'Mental health and connection with nature in Boyapaz',
    summary_en: 'Work on emotional wellbeing and its relationship with caring for nature.',
    description_en:
      "We accompanied processes that promote mental health and connection with nature as a basis for environmental care, integrating environmental psychology tools with the realities of the territory.",
    tags_en: ['Mental health', 'Wellbeing', 'Nature'],
  },
  {
    slug: 'inclusion-bahia-malaga',
    title: 'Inclusión social con el CCCN Chucheros en Bahía Málaga',
    area: 'psicologia',
    client: 'CCCN Chucheros',
    country: 'Colombia',
    summary: 'Diagnóstico participativo con enfoque diferencial para el turismo comunitario del Pacífico.',
    description:
      'Implementamos un diagnóstico participativo con enfoque diferencial para fortalecer la inclusión social y la equidad en procesos de turismo comunitario del Pacífico colombiano, junto al Consejo Comunitario de la comunidad negra de Chucheros en Bahía Málaga.',
    tags: ['Inclusión social', 'Enfoque diferencial', 'Pacífico', 'Turismo comunitario'],
    tint: 'earth',
    image: '/assets/projects/inclusion-bahia-malaga.jpg',
    title_en: 'Social inclusion with the CCCN Chucheros community in Bahía Málaga',
    summary_en: 'Participatory diagnosis with a differentiated approach for Pacific community-based tourism.',
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
    summary: 'Estudio con metodologías propias para sondear la salud mental de profesionales del sector ambiental.',
    description:
      'Desarrollamos un estudio con metodologías propias para sondear la salud mental de los profesionales del sector ambiental colombiano, generando evidencia sobre el bienestar de quienes trabajan por el planeta.',
    tags: ['Salud mental', 'Investigación', 'Sector ambiental'],
    tint: 'dusk',
    image: '/assets/projects/psicologia-ambiental-proyecto.jpg',
    title_en: "Mental health of Colombia's environmental sector",
    summary_en: 'Own-methodology study surveying the mental health of environmental sector professionals.',
    description_en:
      "We developed a study using our own methodologies to survey the mental health of professionals in Colombia's environmental sector, generating evidence on the wellbeing of those working for the planet.",
    tags_en: ['Mental health', 'Research', 'Environmental sector'],
  },

  // ---------- CarbonBox ----------
  {
    slug: 'sostenibilidad-dnp-colombia',
    title:
      'Evaluación de sostenibilidad, huella ecológica y circularidad de los sistemas de información públicos de Colombia',
    area: 'carbonbox',
    client: 'Departamento Nacional de Planeación (DNP) · IPSOS',
    country: 'Colombia',
    year: '2024',
    summary: 'Primera evaluación nacional de sostenibilidad ambiental en sistemas de información del sector público.',
    description:
      'Primera evaluación nacional sobre sostenibilidad ambiental en los sistemas de información del sector público. El enfoque evaluó 110 entidades en planeación ambiental, eficiencia energética, uso del agua y circularidad. Con CarbonBox calculamos la huella de carbono, la huella hídrica y métricas de circularidad para tres sistemas priorizados (PIIP, Gesproy 3.0 y Mapainversiones), marcando un hito regional en gestión ambiental digital.',
    tags: ['Huella de carbono', 'Circularidad', 'CarbonBox', 'Sector público'],
    tint: 'river',
    image: '/assets/projects/sostenibilidad-dnp-colombia.jpg',
    publicationUrl:
      'https://colaboracion.dnp.gov.co/sites/CDDNP/Sinergia/2025/DSEPP_1564_Evaluacion_Sistemas_de_Informacion_Informe_Resultados.pdf',
    title_en: "Sustainability, ecological footprint, and circularity assessment of Colombia's public information systems",
    summary_en: 'First national assessment of environmental sustainability in public-sector information systems.',
    description_en:
      "First national assessment of environmental sustainability in public-sector information systems. The approach evaluated 110 entities on environmental planning, energy efficiency, water use, and circularity. With CarbonBox we calculated the carbon footprint, water footprint, and circularity metrics for three priority systems (PIIP, Gesproy 3.0, and Mapainversiones), marking a regional milestone in digital environmental management.",
    tags_en: ['Carbon footprint', 'Circularity', 'CarbonBox', 'Public sector'],
  },

  // Proyectos de CarbonBox aportados por el equipo (listado agosto 2026).
  // Nota: el proyecto DNP/IPSOS de este listado ya estaba cargado arriba
  // como 'sostenibilidad-dnp-colombia', por lo que no se duplica aquí.
  {
    slug: 'biomax-huella-2025',
    title: 'Medición y gestión de huella de carbono corporativa 2025',
    area: 'carbonbox',
    client: 'Biomax Biocombustibles S.A.',
    country: 'Colombia',
    year: '2025',
    summary: 'Medición y gestión de la huella de carbono corporativa 2025 de Biomax mediante CarbonBox.',
    description:
      'Implementamos la medición de emisiones de gases de efecto invernadero (GEI) organizacionales y la gestión de la huella de carbono corporativa 2025 de Biomax Biocombustibles conforme al GHG Protocol y la norma ISO 14064-1, incluyendo control de calidad de datos y recomendaciones de reducción.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/biomax-huella-2025.jpg',
    title_en: '2025 corporate carbon footprint measurement and management',
    summary_en: "Measurement and management of Biomax's 2025 corporate carbon footprint through CarbonBox.",
    description_en:
      "We implemented the measurement of organizational greenhouse gas (GHG) emissions and managed Biomax Biocombustibles's 2025 corporate carbon footprint in line with the GHG Protocol and ISO 14064-1, including data quality control and reduction recommendations.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'agrosavia-huella-2025',
    title: 'Medición y gestión de huella de carbono corporativa 2025 — 25 centros de investigación',
    area: 'carbonbox',
    client: 'AGROSAVIA — Corporación Colombiana de Investigación Agropecuaria',
    country: 'Colombia',
    year: '2025',
    summary: 'Huella de carbono corporativa 2025 de los 25 centros, sedes y fincas experimentales de AGROSAVIA.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de AGROSAVIA para sus 25 centros de investigación, sedes y fincas experimentales, conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox como software as a service.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'sunset',
    image: '/assets/projects/agrosavia-huella-2025.jpg',
    title_en: '2025 corporate carbon footprint measurement and management — 25 research centers',
    summary_en: "2025 corporate carbon footprint of AGROSAVIA's 25 research centers, sites, and experimental farms.",
    description_en:
      "We implemented the measurement and management of AGROSAVIA's 2025 corporate carbon footprint for its 25 research centers, sites, and experimental farms, in line with the GHG Protocol and ISO 14064-1, through the CarbonBox platform as software as a service.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'agrosavia-huella-2024',
    title: 'Medición y gestión de huella de carbono corporativa 2024 — 25 centros de investigación',
    area: 'carbonbox',
    client: 'AGROSAVIA — Corporación Colombiana de Investigación Agropecuaria',
    country: 'Colombia',
    year: '2024',
    summary: 'Huella de carbono corporativa 2024 de los 25 centros, sedes y fincas experimentales de AGROSAVIA.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2024 de AGROSAVIA para sus 25 centros de investigación, sedes y fincas experimentales, conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox como software as a service.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'earth',
    image: '/assets/projects/agrosavia-huella-2024.jpg',
    title_en: '2024 corporate carbon footprint measurement and management — 25 research centers',
    summary_en: "2024 corporate carbon footprint of AGROSAVIA's 25 research centers, sites, and experimental farms.",
    description_en:
      "We implemented the measurement and management of AGROSAVIA's 2024 corporate carbon footprint for its 25 research centers, sites, and experimental farms, in line with the GHG Protocol and ISO 14064-1, through the CarbonBox platform as software as a service.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'gtrap-huella-matriz-ambiental',
    title: 'Huella de carbono e hídrica de los equipos G-Trap y matriz de impacto ambiental',
    area: 'carbonbox',
    client: 'Fondo Acción · Zhana Solutions Green Engineering',
    country: 'Colombia',
    year: '2024',
    summary: 'Cálculo de huella de carbono e hídrica de los equipos G-Trap y matriz de impacto ambiental integrada.',
    description:
      'Calculamos y reportamos la huella de carbono y la huella hídrica de los equipos G-Trap (en sus diversos modelos) de tratamiento de aguas residuales industriales, y compilamos una matriz de impacto ambiental que integra indicadores de toxicidad, consumo de agua, emisiones de GEI y biodiversidad.',
    tags: ['Huella de carbono de producto', 'GHG Protocol · ISO 14067/14044', 'Análisis de ciclo de vida'],
    tint: 'river',
    image: '/assets/projects/gtrap-fondo-accion-zhana.jpg',
    title_en: 'Carbon and water footprint of G-Trap equipment and environmental impact matrix',
    summary_en: 'Calculation of the carbon and water footprint of G-Trap equipment and an integrated environmental impact matrix.',
    description_en:
      "We calculated and reported the carbon footprint and water footprint of G-Trap equipment (across its various models) for industrial wastewater treatment, and compiled an environmental impact matrix integrating toxicity, water consumption, GHG emissions, and biodiversity indicators.",
    tags_en: ['Product carbon footprint', 'GHG Protocol · ISO 14067/14044', 'Life cycle assessment'],
  },
  {
    slug: 'zona-franca-bogota-huella-2023',
    title: 'Medición y gestión de huella de carbono corporativa 2023',
    area: 'carbonbox',
    client: 'Co-propiedad Zona Franca de Bogotá PH',
    country: 'Colombia',
    year: '2024',
    summary: 'Huella de carbono corporativa 2023 de la Co-propiedad Zona Franca de Bogotá.',
    description:
      'Implementamos la medición de emisiones de GEI organizacionales y la gestión de la huella de carbono corporativa 2023 de la Co-propiedad Zona Franca de Bogotá, conforme al GHG Protocol y la norma ISO 14064-1, con recomendaciones de reducción.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'dusk',
    image: '/assets/projects/zona-franca-bogota-huella-2023.jpg',
    title_en: '2023 corporate carbon footprint measurement and management',
    summary_en: "2023 corporate carbon footprint of the Bogotá Free Trade Zone Co-ownership.",
    description_en:
      "We implemented the measurement of organizational GHG emissions and managed the 2023 corporate carbon footprint of the Bogotá Free Trade Zone Co-ownership, in line with the GHG Protocol and ISO 14064-1, with reduction recommendations.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'calculadora-seaflower',
    title: 'Herramienta de cálculo de huella ambiental para el Fondo Seaflower',
    area: 'carbonbox',
    client: 'Fondo Acción · Davivienda',
    country: 'Colombia',
    year: '2024',
    summary: 'Calculadora de huella de carbono para viajeros a la Reserva de Biósfera Seaflower.',
    description:
      'Elaboramos una herramienta de cálculo de huella de carbono para los viajeros a la Reserva de la Biósfera Seaflower (San Andrés, Providencia y Santa Catalina), como parte de una estrategia de movilización de recursos con Daviplata en la que los viajeros compensan su impacto mediante donaciones proporcionales a sus emisiones.',
    tags: ['Herramienta de cálculo', 'Huella de carbono', 'Mitigación'],
    tint: 'cool',
    image: '/assets/projects/calculadora-seaflower.png',
    title_en: 'Environmental footprint calculation tool for the Seaflower Fund',
    summary_en: 'Carbon footprint calculator for travelers to the Seaflower Biosphere Reserve.',
    description_en:
      "We developed a carbon footprint calculation tool for travelers to the Seaflower Biosphere Reserve (San Andrés, Providencia, and Santa Catalina), as part of a resource-mobilization strategy with Daviplata in which travelers offset their impact through donations proportional to their emissions.",
    tags_en: ['Calculation tool', 'Carbon footprint', 'Mitigation'],
  },
  {
    slug: 'biomax-ecopetrol-sebastopol',
    title: 'Huella de carbono del servicio prestado a Ecopetrol desde Sebastopol',
    area: 'carbonbox',
    client: 'Biomax Biocombustibles S.A.',
    country: 'Colombia',
    year: '2024',
    summary: 'Estimación de la huella de carbono del servicio de Biomax a Ecopetrol desde su planta de Sebastopol.',
    description:
      'Estimamos la huella de carbono del servicio prestado desde Sebastopol por Biomax a Ecopetrol, mediante un análisis de ciclo de vida bajo estándares internacionales de reporte, usando la plataforma CarbonBox.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Análisis de ciclo de vida'],
    tint: 'blush',
    image: '/assets/clients/biomax.png',
    title_en: 'Carbon footprint of the service provided to Ecopetrol from Sebastopol',
    summary_en: "Estimation of the carbon footprint of Biomax's service to Ecopetrol from its Sebastopol plant.",
    description_en:
      "We estimated the carbon footprint of the service provided from Sebastopol by Biomax to Ecopetrol, using a life cycle assessment under international reporting standards, via the CarbonBox platform.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Life cycle assessment'],
  },
  {
    slug: 'hacienda-cafe-misiones-huella-2023',
    title: 'Medición y gestión de huella de carbono corporativa 2023',
    area: 'carbonbox',
    client: 'Hacienda Café Misiones',
    country: 'Colombia',
    year: '2024',
    summary: 'Huella de carbono corporativa 2023 de Hacienda Café Misiones, con seguimiento hasta 2026.',
    description:
      'Implementamos la medición de emisiones de GEI organizacionales y la gestión de la huella de carbono corporativa 2023 de Hacienda Café Misiones, conforme al GHG Protocol y la norma ISO 14064-1, con acompañamiento continuo y recomendaciones de reducción.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'warm',
    image: '/assets/projects/hacienda-cafe-misiones-huella-2023.jpg',
    title_en: '2023 corporate carbon footprint measurement and management',
    summary_en: "Hacienda Café Misiones's 2023 corporate carbon footprint, with follow-up through 2026.",
    description_en:
      "We implemented the measurement of organizational GHG emissions and managed Hacienda Café Misiones's 2023 corporate carbon footprint, in line with the GHG Protocol and ISO 14064-1, with ongoing support and reduction recommendations.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'colegio-anglo-colombiano-huella-2023',
    title: 'Huella de carbono organizacional del Colegio Anglo Colombiano',
    area: 'carbonbox',
    client: 'Fundación Colegio Anglo Colombiano',
    country: 'Colombia',
    year: '2024',
    summary: 'Huella de carbono corporativa 2023 de todas las operaciones del Colegio Anglo Colombiano en Bogotá.',
    description:
      'Implementamos la medición de la huella de carbono organizacional de todas las operaciones de la sede Bogotá del Colegio Anglo Colombiano, conforme al GHG Protocol y la norma ISO 14064-1.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/colegio-anglo-colombiano-huella-2024.jpg',
    title_en: 'Organizational carbon footprint of Colegio Anglo Colombiano',
    summary_en: "2023 corporate carbon footprint of all Colegio Anglo Colombiano's operations in Bogotá.",
    description_en:
      "We implemented the measurement of the organizational carbon footprint of all operations at the Bogotá campus of Colegio Anglo Colombiano, in line with the GHG Protocol and ISO 14064-1.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'colegio-anglo-colombiano-huella-2025',
    title: 'Huella de carbono organizacional 2025 del Colegio Anglo Colombiano',
    area: 'carbonbox',
    client: 'Fundación Colegio Anglo Colombiano',
    country: 'Colombia',
    year: '2026',
    summary: 'Huella de carbono corporativa 2025 de todas las operaciones del Colegio Anglo Colombiano en Bogotá, medida en 2026.',
    description:
      'Implementamos la medición de la huella de carbono organizacional 2025 de todas las operaciones de la sede Bogotá del Colegio Anglo Colombiano, ejecutada en 2026 conforme al GHG Protocol y la norma ISO 14064-1.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/colegio-anglo-colombiano-huella-2026.jpg',
    title_en: "2025 organizational carbon footprint of Colegio Anglo Colombiano",
    summary_en: "2025 corporate carbon footprint of all Colegio Anglo Colombiano's operations in Bogotá, measured in 2026.",
    description_en:
      "We implemented the measurement of the 2025 organizational carbon footprint of all operations at the Bogotá campus of Colegio Anglo Colombiano, carried out in 2026 in line with the GHG Protocol and ISO 14064-1.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'eeb-boyaca-huella-2023',
    title: 'Huella de carbono organizacional del edificio administrativo y 7 zonas en Boyacá',
    area: 'carbonbox',
    client: 'Empresa de Energía de Boyacá S.A. E.S.P.',
    country: 'Colombia',
    year: '2023',
    summary: 'Huella de carbono organizacional del edificio administrativo y 7 zonas operativas en Boyacá.',
    description:
      'Implementamos la medición de la huella de carbono organizacional del edificio administrativo y de 7 zonas de la Empresa de Energía de Boyacá, conforme al GHG Protocol y la norma ISO 14064-1.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'sunset',
    image: '/assets/projects/eeb-boyaca-huella-2023.jpg',
    title_en: 'Organizational carbon footprint of the administrative building and 7 zones in Boyacá',
    summary_en: 'Organizational carbon footprint of the administrative building and 7 operational zones in Boyacá.',
    description_en:
      "We implemented the measurement of the organizational carbon footprint of the administrative building and 7 zones of the Boyacá Energy Company, in line with the GHG Protocol and ISO 14064-1.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'gtrap-sostenibilidad-acv',
    title: 'Evaluación de sostenibilidad de la tecnología G-TRAP',
    area: 'carbonbox',
    client: 'Zhana Solutions Green Engineering',
    country: 'Colombia',
    year: '2023',
    summary: 'Análisis de ciclo de vida de la tecnología G-TRAP en Bogotá y Cartagena.',
    description:
      'Evaluamos la sostenibilidad ambiental de la tecnología G-TRAP mediante un Análisis de Ciclo de Vida (ACV): estimamos su huella de carbono e hídrica en las fases de instalación y operación, identificamos los impactos ambientales en Bogotá y Cartagena, y propusimos acciones de mejora para mitigar los efectos negativos.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Análisis de ciclo de vida'],
    tint: 'earth',
    image: '/assets/clients/zhana-solutions.svg',
    title_en: 'Sustainability assessment of G-TRAP technology',
    summary_en: 'Life cycle assessment of G-TRAP technology in Bogotá and Cartagena.',
    description_en:
      "We assessed the environmental sustainability of G-TRAP technology through a Life Cycle Assessment (LCA): we estimated its carbon and water footprint during the installation and operation phases, identified environmental impacts in Bogotá and Cartagena, and proposed improvement actions to mitigate negative effects.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Life cycle assessment'],
  },
  {
    slug: 'flp-equilibria-huella-2023',
    title: 'Huella de carbono organizacional e hídrica de FLP y Equilibria',
    area: 'carbonbox',
    client: 'GEC EcoEnterprises Management',
    country: 'Multirregional',
    year: '2023',
    summary: 'Inventarios de GEI (ISO 14064-1) y huella hídrica para FLP (Ecuador y Perú) y Equilibria (Colombia).',
    description:
      'Elaboramos 3 inventarios de GEI bajo el estándar ISO 14064-1 y 3 huellas hídricas para las empresas FLP (Ecuador y Perú) y Equilibria (Colombia) dentro de su cadena de producción de cítricos.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'river',
    image: '/assets/clients/gec-ecoenterprises.png',
    title_en: 'Organizational and water footprint of FLP and Equilibria',
    summary_en: 'GHG inventories (ISO 14064-1) and water footprint for FLP (Ecuador and Peru) and Equilibria (Colombia).',
    description_en:
      "We prepared 3 GHG inventories under the ISO 14064-1 standard and 3 water footprints for the companies FLP (Ecuador and Peru) and Equilibria (Colombia) within their citrus production chain.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'cleantechhub-emprendimientos',
    title: 'Impacto en carbono de 22 emprendimientos de innovación climática',
    area: 'carbonbox',
    client: 'CleanTechHub',
    country: 'Multirregional',
    year: '2023',
    summary: 'Módulo emprendedor de CarbonBox y capacitación para 22 emprendimientos en 5 países de LATAM.',
    description:
      'Desarrollamos el módulo emprendedor de la plataforma CarbonBox para 22 emprendimientos de Argentina, México, Colombia, Perú y Ecuador, y realizamos una capacitación sobre huella de carbono para sus mentores y aliados.',
    tags: ['Huella de carbono de producto', 'Medición de impacto en carbono', 'Análisis de ciclo de vida'],
    tint: 'dusk',
    image: '/assets/clients/cleantechhub.png',
    title_en: 'Carbon impact of 22 climate-innovation startups',
    summary_en: "CarbonBox's entrepreneur module and training for 22 startups in 5 Latin American countries.",
    description_en:
      "We developed the entrepreneur module of the CarbonBox platform for 22 startups in Argentina, Mexico, Colombia, Peru, and Ecuador, and delivered a carbon footprint training for their mentors and partners.",
    tags_en: ['Product carbon footprint', 'Carbon impact measurement', 'Life cycle assessment'],
  },
  {
    slug: 'paramo-presenta-festivales',
    title: 'Huella de carbono de festivales: Estéreo Picnic, Cordillera, Vassar, BAUM y Corona Sunset',
    area: 'carbonbox',
    client: 'Páramo Presenta',
    country: 'Colombia',
    year: '2023',
    summary: 'Huella de carbono de la producción de los principales festivales de Colombia, edición tras edición.',
    description:
      'Desarrollamos las huellas de carbono de la producción de eventos como el Festival Estéreo Picnic (2023-2026), la Feria Vassar (2023-2024), Corona Sunset (2023-2024), BAUM (2024) y el Festival Cordillera (2024-2025), conforme al GHG Protocol y la norma ISO 14064-1.',
    tags: ['Huella de carbono de eventos', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'blush',
    image: '/assets/projects/fep-2023.jpg',
    title_en: "Carbon footprint of festivals: Estéreo Picnic, Cordillera, Vassar, BAUM, and Corona Sunset",
    summary_en: "Carbon footprint of the production of Colombia's leading festivals, edition after edition.",
    description_en:
      "We developed the carbon footprints of the production of events such as Festival Estéreo Picnic (2023-2026), Feria Vassar (2023-2024), Corona Sunset (2023-2024), BAUM (2024), and Festival Cordillera (2024-2025), in line with the GHG Protocol and ISO 14064-1.",
    tags_en: ['Event carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'calculadora-idartes',
    title: 'Estructuración de la calculadora de carbono de IDARTES',
    area: 'carbonbox',
    client: 'Fondo Acción · IDARTES',
    country: 'Colombia',
    year: '2023',
    summary: 'Calculadora de huella de carbono de eventos y escenarios de Bogotá para el sitio web de IDARTES.',
    description:
      'Elaboramos la estructura base de la calculadora de carbono de eventos y escenarios de Bogotá, diseñada para instalarse en la página web del Instituto Distrital de las Artes (IDARTES).',
    tags: ['Herramienta de cálculo', 'Huella de carbono de eventos', 'Mitigación'],
    tint: 'cool',
    image: '/assets/projects/calculadora-idartes.png',
    title_en: "Building IDARTES's carbon calculator",
    summary_en: "Carbon footprint calculator for Bogotá's events and venues, for IDARTES's website.",
    description_en:
      "We built the base structure for the carbon calculator for events and venues in Bogotá, designed to be installed on the website of the Bogotá District Institute of the Arts (IDARTES).",
    tags_en: ['Calculation tool', 'Event carbon footprint', 'Mitigation'],
  },
  {
    slug: 'control-ambiental-compost-acv',
    title: 'Análisis de ciclo de vida del compostaje con aireación',
    area: 'carbonbox',
    client: 'Control Ambiental de Colombia S.A.S.',
    country: 'Colombia',
    year: '2023',
    summary: 'Comparación del compostaje con aireación frente al manejo tradicional en rellenos sanitarios.',
    description:
      'Implementamos el análisis de ciclo de vida de una tecnología de compostaje con aireación para la gestión de residuos orgánicos de Control Ambiental de Colombia, comparando este escenario solución frente al manejo tradicional en rellenos sanitarios, bajo las normas ISO 14044 e ISO 14067.',
    tags: ['Huella de carbono de producto', 'GHG Protocol · ISO 14067/14044', 'Análisis de ciclo de vida'],
    tint: 'warm',
    image: '/assets/projects/control-ambiental-compost-acv.jpg',
    title_en: 'Life cycle assessment of aerated composting',
    summary_en: 'Comparison of aerated composting against traditional landfill management.',
    description_en:
      "We implemented the life cycle assessment of an aerated composting technology for organic waste management for Control Ambiental de Colombia, comparing this solution scenario against traditional landfill management, under the ISO 14044 and ISO 14067 standards.",
    tags_en: ['Product carbon footprint', 'GHG Protocol · ISO 14067/14044', 'Life cycle assessment'],
  },
  {
    slug: 'climate-week-colombia-2020',
    title: 'Climate Week Colombia 2020',
    area: 'carbonbox',
    client: 'Cámara Verde de Comercio',
    country: 'Colombia',
    year: '2020',
    summary: 'Organización y huella de carbono de la Semana Climática de Colombia, en formato virtual.',
    description:
      'Organizamos, gestionamos y desarrollamos la Semana Climática de Colombia (Climate Week Colombia 2020) en formato virtual, junto a la Cámara Verde de Comercio, incluyendo el cálculo de su huella de carbono.',
    tags: ['Huella de carbono de eventos', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'forest',
    image: '/assets/clients/camara-verde.png',
    title_en: 'Climate Week Colombia 2020',
    summary_en: "Organization and carbon footprint of Colombia's Climate Week, in virtual format.",
    description_en:
      "We organized, managed, and developed Colombia's Climate Week (Climate Week Colombia 2020) in virtual format, together with Cámara Verde de Comercio, including the calculation of its carbon footprint.",
    tags_en: ['Event carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'maderera-rio-acre-huella-2022',
    title: 'Medición y gestión de huella de carbono corporativa 2022',
    area: 'carbonbox',
    client: 'CANDES · Maderera Río Acre S.A.C.',
    country: 'Perú',
    year: '2023',
    summary: 'Huella de carbono corporativa 2022 de Maderera Río Acre en Perú.',
    description:
      'Implementamos la medición de emisiones de GEI organizacionales y la gestión de la huella de carbono corporativa 2022 de Maderera Río Acre, conforme al GHG Protocol y la norma ISO 14064-1, incluyendo control de calidad de datos y recomendaciones de reducción.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'sunset',
    image: '/assets/clients/candes.jpg',
    title_en: '2022 corporate carbon footprint measurement and management',
    summary_en: "2022 corporate carbon footprint of Maderera Río Acre in Peru.",
    description_en:
      "We implemented the measurement of organizational GHG emissions and managed Maderera Río Acre's 2022 corporate carbon footprint, in line with the GHG Protocol and ISO 14064-1, including data quality control and reduction recommendations.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'eternit-diagnostico-gei',
    title: 'Diagnóstico de Gases de Efecto Invernadero',
    area: 'carbonbox',
    client: 'Eternit Colombia S.A',
    country: 'Colombia',
    year: '2023',
    summary: 'Diagnóstico de emisiones de gases de efecto invernadero de Eternit Colombia.',
    description:
      'Elaboramos un diagnóstico de Gases de Efecto Invernadero (GEI) para Eternit Colombia, como primer paso hacia la gestión de su huella de carbono corporativa.',
    tags: ['Huella de carbono corporativa', 'Herramienta de cálculo'],
    tint: 'earth',
    image: '/assets/clients/eternit.webp',
    title_en: 'Greenhouse Gas Diagnosis',
    summary_en: "Greenhouse gas emissions diagnosis for Eternit Colombia.",
    description_en:
      "We prepared a Greenhouse Gas (GHG) diagnosis for Eternit Colombia, as a first step toward managing its corporate carbon footprint.",
    tags_en: ['Corporate carbon footprint', 'Calculation tool'],
  },
  {
    slug: 'comfama-deeper-learning',
    title: 'Huella de carbono de los eventos Deeper Learning 2024 y 2025',
    area: 'carbonbox',
    client: 'Comfama',
    country: 'Colombia',
    summary: 'Estimación de la huella de carbono de las dos ediciones del evento Deeper Learning.',
    description:
      'Estimamos la huella de carbono de los eventos Deeper Learning 2024 y 2025 de Comfama en Medellín, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono de eventos', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'river',
    image: '/assets/projects/comfama-deeper-learning.jpg',
    title_en: 'Carbon footprint of the Deeper Learning 2024 and 2025 events',
    summary_en: "Carbon footprint estimation of the two editions of the Deeper Learning event.",
    description_en:
      "We estimated the carbon footprint of Comfama's Deeper Learning 2024 and 2025 events in Medellín, through the CarbonBox platform.",
    tags_en: ['Event carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'cataexport-huella-2025',
    title: 'Medición y gestión de huella de carbono corporativa 2025',
    area: 'carbonbox',
    client: 'CataExport',
    country: 'Colombia',
    summary: 'Huella de carbono corporativa 2025 de CataExport.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de CataExport conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'dusk',
    image: '/assets/clients/cataexport.webp',
    title_en: '2025 corporate carbon footprint measurement and management',
    summary_en: "CataExport's 2025 corporate carbon footprint.",
    description_en:
      "We implemented the measurement and management of CataExport's 2025 corporate carbon footprint in line with the GHG Protocol and ISO 14064-1, through the CarbonBox platform.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'crepes-wafles-indicadores-carbono',
    title: 'Indicadores de carbono para la cadena de suministro de carne bovina',
    area: 'carbonbox',
    client: 'WEIA · Crepes y Wafles',
    country: 'Colombia',
    summary: 'Indicadores de carbono agropecuarios para los proveedores de carne bovina de Crepes y Wafles.',
    description:
      'Analizamos las condiciones y eslabones de la cadena de producción de carne bovina dentro de la cadena de suministro de Crepes y Wafles, y desarrollamos indicadores de carbono agropecuarios para sus proveedores.',
    tags: ['Herramienta de cálculo', 'Huella de carbono de producto'],
    tint: 'blush',
    image: '/assets/clients/weia.png',
    title_en: 'Carbon indicators for the beef cattle supply chain',
    summary_en: "Agricultural carbon indicators for Crepes y Wafles's beef cattle suppliers.",
    description_en:
      "We analyzed the conditions and links in the beef cattle production chain within Crepes y Wafles's supply chain, and developed agricultural carbon indicators for its suppliers.",
    tags_en: ['Calculation tool', 'Product carbon footprint'],
  },
  {
    slug: 'colgas-biogas-la-paz',
    title: 'Metodologías para reducciones de emisiones del proyecto de biogás La Paz',
    area: 'carbonbox',
    client: 'Colgas',
    country: 'Colombia',
    summary: 'Análisis preliminar de metodologías para créditos de carbono del proyecto de biogás La Paz.',
    description:
      'Realizamos un análisis preliminar de las metodologías disponibles para calcular las reducciones de emisiones asociadas al proyecto de biogás La Paz de Colgas, como base para la formulación de créditos de carbono.',
    tags: ['Formulación de créditos de carbono', 'Mitigación'],
    tint: 'warm',
    image: '/assets/clients/colgas.webp',
    title_en: 'Methodologies for emission reductions of the La Paz biogas project',
    summary_en: 'Preliminary analysis of methodologies for carbon credits for the La Paz biogas project.',
    description_en:
      "We carried out a preliminary analysis of the methodologies available to calculate the emission reductions associated with Colgas's La Paz biogas project, as a basis for structuring carbon credits.",
    tags_en: ['Carbon credit structuring', 'Mitigation'],
  },
  {
    slug: 'spec-lng-huella-2024',
    title: 'Huella de carbono corporativa 2024',
    area: 'carbonbox',
    client: 'SPEC LNG',
    country: 'Colombia',
    summary: 'Estimación de la huella de carbono corporativa 2024 de SPEC LNG.',
    description:
      'Estimamos la huella de carbono corporativa 2024 de SPEC LNG, conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'cool',
    image: '/assets/clients/spec-lng.jpg',
    title_en: '2024 corporate carbon footprint',
    summary_en: "Estimation of SPEC LNG's 2024 corporate carbon footprint.",
    description_en:
      "We estimated SPEC LNG's 2024 corporate carbon footprint, in line with the GHG Protocol and ISO 14064-1, through the CarbonBox platform.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'asobancaria-congreso-2024',
    title: 'Huella de carbono del 8° Congreso de Finanzas para la Equidad, Sostenibilidad y Transformación',
    area: 'carbonbox',
    client: 'Asobancaria',
    country: 'Colombia',
    summary: 'Estimación de la huella de carbono del 8° Congreso de Finanzas de Asobancaria.',
    description:
      'Estimamos la huella de carbono del 8° Congreso de Finanzas para la Equidad, Sostenibilidad y Transformación 2024 de Asobancaria, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono de eventos', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'forest',
    image: '/assets/clients/asobancaria.png',
    title_en: 'Carbon footprint of the 8th Finance for Equity, Sustainability, and Transformation Congress',
    summary_en: "Estimation of the carbon footprint of Asobancaria's 8th Finance Congress.",
    description_en:
      "We estimated the carbon footprint of Asobancaria's 8th Finance for Equity, Sustainability, and Transformation Congress 2024, through the CarbonBox platform.",
    tags_en: ['Event carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'santa-fe-bogota-huella-2025',
    title: 'Medición y gestión de huella de carbono corporativa 2025',
    area: 'carbonbox',
    client: 'Fundación Santa Fé de Bogotá',
    country: 'Colombia',
    summary: 'Huella de carbono corporativa 2025 de la Fundación Santa Fé de Bogotá.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de la Fundación Santa Fé de Bogotá conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox como software as a service.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'sunset',
    image: '/assets/projects/santa-fe-bogota-huella-2025.png',
    title_en: '2025 corporate carbon footprint measurement and management',
    summary_en: "2025 corporate carbon footprint of Fundación Santa Fé de Bogotá.",
    description_en:
      "We implemented the measurement and management of Fundación Santa Fé de Bogotá's 2025 corporate carbon footprint in line with the GHG Protocol and ISO 14064-1, through the CarbonBox platform as software as a service.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'parker-huella-2025',
    title: 'Medición y gestión de huella de carbono corporativa 2025',
    area: 'carbonbox',
    client: 'Parker',
    country: 'Argentina',
    summary: 'Huella de carbono corporativa 2025 de Parker en Argentina.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de Parker en Argentina conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox como software as a service.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'earth',
    image: '/assets/clients/parker.webp',
    title_en: '2025 corporate carbon footprint measurement and management',
    summary_en: "2025 corporate carbon footprint of Parker in Argentina.",
    description_en:
      "We implemented the measurement and management of Parker's 2025 corporate carbon footprint in Argentina, in line with the GHG Protocol and ISO 14064-1, through the CarbonBox platform as software as a service.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'ambielegsa-huella-2025',
    title: 'Medición y gestión de huella de carbono corporativa 2025',
    area: 'carbonbox',
    client: 'AMBIELEGSA SA',
    country: 'Ecuador',
    summary: 'Huella de carbono corporativa 2025 de AMBIELEGSA en Quito, Ecuador.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de AMBIELEGSA conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'river',
    image: '/assets/clients/ambielegsa.png',
    title_en: '2025 corporate carbon footprint measurement and management',
    summary_en: "AMBIELEGSA's 2025 corporate carbon footprint in Quito, Ecuador.",
    description_en:
      "We implemented the measurement and management of AMBIELEGSA's 2025 corporate carbon footprint in line with the GHG Protocol and ISO 14064-1, through the CarbonBox platform.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'almacenes-ara-huella-corporativa',
    title: 'Medición y gestión de huella de carbono corporativa',
    area: 'carbonbox',
    client: 'Jerónimo Martins · Almacenes Ara',
    country: 'Colombia',
    summary: 'Huella de carbono corporativa de Almacenes Ara mediante CarbonBox.',
    description:
      'Implementamos la medición de emisiones de GEI organizacionales y la gestión de la huella de carbono corporativa de Almacenes Ara conforme al GHG Protocol y la norma ISO 14064-1.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'dusk',
    image: '/assets/clients/jeronimo-martins.webp',
    title_en: 'Corporate carbon footprint measurement and management',
    summary_en: "Almacenes Ara's corporate carbon footprint through CarbonBox.",
    description_en:
      "We implemented the measurement of organizational GHG emissions and managed Almacenes Ara's corporate carbon footprint in line with the GHG Protocol and ISO 14064-1.",
    tags_en: ['Corporate carbon footprint', 'GHG Protocol · ISO 14064', 'Mitigation'],
  },
  {
    slug: 'linktic-huella-corporativa',
    title: 'Medición y gestión de huella de carbono corporativa',
    area: 'carbonbox',
    client: 'LinkTic S.A.S',
    country: 'Colombia',
    summary: 'Huella de carbono corporativa de LinkTic mediante CarbonBox.',
    description:
      'Implementamos la medición de emisiones de GEI organizacionales y la gestión de la huella de carbono corporativa de LinkTic conforme al GHG Protocol y la norma ISO 14064-1.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'blush',
    image: '/assets/clients/linktic.svg',
    title_en: 'Corporate carbon footprint measurement and management',
    summary_en: "LinkTic's corporate carbon footprint through CarbonBox.",
    description_en:
      "We implemented the measurement of organizational GHG emissions and managed LinkTic's corporate carbon footprint in line with the GHG Protocol and ISO 14064-1.",
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
    image: '/assets/clients/biodiversal.png',
    title_en: 'Impact measurement of aerated composting',
    summary_en: 'Life cycle assessment of aerated composting for Biodiversal.',
    description_en:
      "We implemented the life cycle assessment of an aerated composting technology for organic waste management for Biodiversal, under the ISO 14044 and ISO 14067 standards.",
    tags_en: ['Product carbon footprint', 'GHG Protocol · ISO 14067/14044', 'Life cycle assessment'],
  },
  {
    slug: 'ndc-progreso-costa-rica',
    title: 'Evaluación del progreso de la Contribución Nacional Determinada de Costa Rica',
    area: 'gestion',
    client: 'Organización para Estudios Tropicales (OET) · Ministerio de Ambiente y Energía (MINAE) · Instituto Meteorológico Nacional (IMN)',
    country: 'Costa Rica',
    year: '2026',
    summary: 'Evaluación del progreso de la NDC de Costa Rica en el marco del Segundo y Tercer Informe Bienal de Transparencia (BTR) y la Quinta Comunicación Nacional ante la CMNUCC.',
    description:
      'Prestamos servicios profesionales para evaluar el progreso de la Contribución Nacional Determinada de Costa Rica y sus lineamientos, en el marco del proyecto Segundo y Tercer Informe Bienal de Transparencia (BTR) y la Quinta Comunicación Nacional ante la CMNUCC. El trabajo incluyó la compilación y análisis de información de seguimiento, la validación de indicadores por contribución, el seguimiento cualitativo y cuantitativo a las NDC 2020 y 2025, el mapeo de políticas, medidas, acciones y planes de mitigación, el resumen de emisiones y absorción de GEI, la revisión de proyecciones de emisiones y absorción, y la redacción del capítulo de seguimiento a la NDC en el BTR2 de Costa Rica.',
    tags: ['NDC', 'Acuerdo de París', 'BTR', 'Mitigación de cambio climático'],
    tint: 'forest',
    image: '/assets/projects/ndc-progreso-costa-rica.png',
    title_en: "Assessment of the progress of Costa Rica's Nationally Determined Contribution",
    summary_en: "Progress assessment of Costa Rica's NDC as part of the Second and Third Biennial Transparency Report (BTR) and the Fifth National Communication to the UNFCCC.",
    description_en:
      "We provided professional services to assess the progress of Costa Rica's Nationally Determined Contribution and its guidelines, as part of the Second and Third Biennial Transparency Report (BTR) and Fifth National Communication project to the UNFCCC. The work included compiling and analyzing tracking information, validating indicators per contribution, qualitative and quantitative tracking of the 2020 and 2025 NDCs, mapping mitigation policies, measures, actions and plans, summarizing GHG emissions and removals, reviewing emissions and removal projections, and drafting the NDC tracking chapter in Costa Rica's BTR2.",
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
  const target = normalizeClientText(logo.alt);
  if (!target) return [];
  return PROJECTS.filter((p) =>
    p.client
      .split('·')
      .map((seg) => normalizeClientText(seg))
      .filter(Boolean)
      .some((seg) => seg.includes(target) || target.includes(seg))
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
