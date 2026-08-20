// Datos de contenido del sitio KIMSA. Copiados fielmente del sitio actual
// (kimsa.co). Las fotos de proyectos son placeholders hasta recibir las reales.

export const CONTACT = {
  email: 'info@kimsa.co',
  phone: '+57 320 867 5567',
  phoneHref: 'tel:+573208675567',
  mailto: 'mailto:info@kimsa.co?subject=Conversemos%20con%20KIMSA',
  // Webhook del flujo n8n "Formulario Astro a Correo" — recibe el POST del
  // formulario de contacto y lo reenvía por correo (hoy a una dirección de
  // prueba; cambiar en n8n cuando se confirme el correo corporativo).
  formWebhook: 'https://kim-carbonbox.app.n8n.cloud/webhook/astro-formulario',
  // Sede principal primero, luego la sucursal.
  hqs: [
    { city: 'Bogotá D.C.', country: 'Colombia', color: 'var(--kimsa-forest)' },
    { city: 'San José', country: 'Costa Rica', color: 'var(--kimsa-terracotta)' },
  ],
};

// Logos reales de clientes/aliados (carpeta public/assets/clients).
export interface ClientLogo {
  src: string;
  alt: string;
}
export const CLIENT_LOGOS: ClientLogo[] = [
  { src: '/assets/clients/pnud.png', alt: 'PNUD' },
  { src: '/assets/clients/giz.png', alt: 'GIZ' },
  { src: '/assets/clients/bid.jpg', alt: 'BID' },
  { src: '/assets/clients/caf.png', alt: 'CAF' },
  { src: '/assets/clients/unep.png', alt: 'ONU Medio Ambiente' },
  { src: '/assets/clients/tnc.jpg', alt: 'The Nature Conservancy' },
  { src: '/assets/clients/euroclima.jpg', alt: 'EUROCLIMA+' },
  { src: '/assets/clients/bancoldex.png', alt: 'Bancóldex' },
  { src: '/assets/clients/minagricultura.webp', alt: 'Ministerio de Agricultura' },
  { src: '/assets/clients/miambiente.webp', alt: 'MiAmbiente' },
  { src: '/assets/clients/ciat.jpg', alt: 'Alliance Bioversity-CIAT' },
  { src: '/assets/clients/icraf.png', alt: 'ICRAF' },
  { src: '/assets/clients/idrc.jpg', alt: 'IDRC' },
  { src: '/assets/clients/flacso.jpg', alt: 'FLACSO' },
  { src: '/assets/clients/climate-group.png', alt: 'Climate Group' },
  { src: '/assets/clients/transforma.png', alt: 'Transforma' },
  { src: '/assets/clients/camara-verde.png', alt: 'Cámara Verde' },
  { src: '/assets/clients/anla.png', alt: 'ANLA — Autoridad Nacional de Licencias Ambientales' },
  { src: '/assets/clients/cormacarena.png', alt: 'Cormacarena' },
  { src: '/assets/clients/corpoguajira.png', alt: 'Corpoguajira' },
  { src: '/assets/clients/gov-narino.jpg', alt: 'Gobernación de Nariño' },
  { src: '/assets/clients/marn-el-salvador.png', alt: 'Gobierno de El Salvador — MARN' },
  { src: '/assets/clients/min-amb-ecuador.png', alt: 'Ministerio del Ambiente de Ecuador' },
  { src: '/assets/clients/serna-honduras.png', alt: 'Gobierno de Honduras — SERNA' },
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
}
export const COUNTRY_STATS: CountryStat[] = [
  {
    name: 'Colombia', code: 'CO', count: 44,
    highlights: [
      'Huella de carbono corporativa con CarbonBox (Biomax, Agrosavia, Ecopetrol y más)',
      'Plan Integral de Cambio Climático Territorial de Nariño',
      'Evaluación ambiental de sistemas de información del Gobierno (DNP)',
    ],
  },
  {
    name: 'Costa Rica', code: 'CR', count: 1,
    highlights: ['Hoja de ruta para la NDC Mejorada 2025-2030 de Costa Rica'],
  },
  {
    name: 'Ecuador', code: 'EC', count: 4,
    highlights: [
      'Revisión del sistema MRV agrícola (Ecuador / EUROCLIMA)',
      'Huella de carbono e hídrica organizacional con CarbonBox',
    ],
  },
  {
    name: 'Honduras', code: 'HN', count: 2,
    highlights: [
      'Segundo Informe Bienal de Actualización (BUR) e inventario GEI',
      'Consulta y Análisis Internacional (ICA) del 2BUR',
    ],
  },
  {
    name: 'El Salvador', code: 'SV', count: 2,
    highlights: [
      'Actualización de la NDC 3.0 de El Salvador',
      'Cuantificación de la contribución de El Salvador al cambio climático',
    ],
  },
  {
    name: 'México', code: 'MX', count: 1,
    highlights: ['Estimación de impacto en carbono de 22 emprendimientos (CarbonBox)'],
  },
  {
    name: 'Perú', code: 'PE', count: 3,
    highlights: [
      'Huella de carbono organizacional con CarbonBox',
      'Estimación de impacto en carbono de 22 emprendimientos',
    ],
  },
  {
    name: 'Argentina', code: 'AR', count: 2,
    highlights: [
      'Huella de carbono corporativa 2025 con CarbonBox (Parker)',
      'Estimación de impacto en carbono de 22 emprendimientos (CleanTechHub)',
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
export const AREA_COLOR: Record<AreaKey, string> = {
  gestion: 'var(--kimsa-forest)',
  psicologia: 'var(--kimsa-terracotta)',
  carbonbox: 'var(--kimsa-plum)',
};

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
  },
  {
    slug: 'ndc-3-costa-rica',
    title: 'Diseño de hoja de ruta y propuesta de NDC 3.0 en Costa Rica',
    area: 'gestion',
    client: '',
    country: 'Costa Rica',
    summary: 'Hoja de ruta y propuesta de actualización de la NDC 3.0 de Costa Rica.',
    description:
      'Acompañamos el diseño de la hoja de ruta y la formulación de la propuesta de tercera Contribución Determinada a Nivel Nacional (NDC 3.0) de Costa Rica, articulando metas de mitigación y adaptación con las prioridades de desarrollo del país.',
    tags: ['NDC 3.0', 'Hoja de ruta', 'Mitigación', 'Adaptación'],
    tint: 'forest',
    image: '/assets/projects/ndc-3-costa-rica.jpg',
    publicationUrl: 'https://cambioclimatico.minae.go.cr/wp-content/uploads/2026/01/CND-2025-2035-ULT-VERs.pdf',
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
  },
  {
    slug: 'honduras-ica-bur',
    title: 'Apoyo técnico para la revisión ICA y la actualización del Segundo BUR en Honduras',
    area: 'gestion',
    client: '',
    country: 'Honduras',
    summary: 'Revisión del Análisis Internacional (ICA) y actualización del Segundo Informe Bienal de Actualización.',
    description:
      'Brindamos apoyo técnico para la revisión del proceso de Análisis y Consulta Internacional (ICA) y la actualización del Segundo Informe Bienal de Actualización (BUR) de Honduras, fortaleciendo la transparencia climática del país ante la CMNUCC.',
    tags: ['BUR', 'ICA', 'Transparencia', 'CMNUCC'],
    tint: 'river',
    image: '/assets/projects/honduras-ica-bur.jpg',
  },
  {
    slug: 'honduras-gei-bur',
    title: 'Estimación de GEI y elaboración del Segundo BUR de Honduras',
    area: 'gestion',
    client: '',
    country: 'Honduras',
    summary: 'Inventario de emisiones y elaboración del Segundo Informe Bienal de Actualización (BUR).',
    description:
      'Realizamos la estimación de emisiones de gases de efecto invernadero y la elaboración del Segundo Informe Bienal de Actualización (BUR) de Honduras, consolidando la información climática nacional para su reporte internacional.',
    tags: ['Inventario GEI', 'BUR', 'Reportes', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/honduras-gei-bur.jpg',
    publicationUrl: 'https://unfccc.int/sites/default/files/resource/Document%20NIR%20Hn%202024.pdf',
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
  },
  {
    slug: 'estrategias-meta',
    title: 'Estrategias climáticas municipales en el Meta',
    area: 'gestion',
    client: '',
    country: 'Colombia',
    summary: 'Formulación de estrategias climáticas para municipios del departamento del Meta.',
    description:
      'Formulamos estrategias climáticas para municipios del departamento del Meta, integrando medidas de mitigación y adaptación con las capacidades y prioridades locales para una acción climática territorial.',
    tags: ['Estrategia municipal', 'Territorio', 'Adaptación', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/estrategias-meta.jpg',
  },
  {
    slug: 'licenciamiento-cc',
    title: 'Incorporación del cambio climático en los proyectos licenciados en Colombia',
    area: 'gestion',
    client: '',
    country: 'Colombia',
    summary: 'Fortalecimiento de la variable de cambio climático en proyectos con licencia ambiental.',
    description:
      'Fortalecimos la incorporación del cambio climático en los proyectos con licencia ambiental en Colombia, desarrollando criterios y lineamientos para integrar la mitigación y la adaptación en los procesos de licenciamiento.',
    tags: ['Licenciamiento', 'Evaluación ambiental', 'Adaptación'],
    tint: 'river',
    image: '/assets/projects/licenciamiento-cc.jpg',
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
  },
  {
    slug: 'picct-narino',
    title: 'Plan Integral de Cambio Climático Territorial de Nariño',
    area: 'gestion',
    client: '',
    country: 'Colombia',
    summary: 'Formulación del Plan Integral de Cambio Climático Territorial (PICCT) de Nariño.',
    description:
      'Formulamos el Plan Integral de Cambio Climático Territorial (PICCT) del departamento de Nariño, articulando el diagnóstico climático, las medidas de mitigación y adaptación y la participación de actores del territorio.',
    tags: ['PICCT', 'Territorio', 'Adaptación', 'Mitigación'],
    tint: 'forest',
    image: '/assets/projects/picct-narino.jpg',
    publicationUrl: 'https://2020-2023.narino.gov.co/wp-content/uploads/Diagramacion_pigcct-Fondo-Accion-y-Gobernacion.pdf',
  },
  {
    slug: 'gestion-urbana-pasto',
    title: 'Plan de gestión climática urbana en San Juan de Pasto',
    area: 'gestion',
    client: '',
    country: 'Colombia',
    summary: 'Plan de gestión climática para el entorno urbano de San Juan de Pasto.',
    description:
      'Desarrollamos un plan de gestión climática urbana para San Juan de Pasto, orientado a reducir emisiones y aumentar la resiliencia de la ciudad frente a los efectos del cambio climático.',
    tags: ['Gestión urbana', 'Ciudades', 'Resiliencia', 'Mitigación'],
    tint: 'river',
    image: '/assets/projects/gestion-urbana-pasto.jpg',
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
  },
  {
    slug: 'gtrap-huella-matriz-ambiental',
    title: 'Huella de carbono e hídrica de los equipos G-Trap y matriz de impacto ambiental',
    area: 'carbonbox',
    client: 'Fondo Acción · Zhana Solutions Green Engineering',
    country: 'Colombia',
    year: '2025',
    summary: 'Cálculo de huella de carbono e hídrica de los equipos G-Trap y matriz de impacto ambiental integrada.',
    description:
      'Calculamos y reportamos la huella de carbono y la huella hídrica de los equipos G-Trap (en sus diversos modelos) de tratamiento de aguas residuales industriales, y compilamos una matriz de impacto ambiental que integra indicadores de toxicidad, consumo de agua, emisiones de GEI y biodiversidad.',
    tags: ['Huella de carbono de producto', 'GHG Protocol · ISO 14067/14044', 'Análisis de ciclo de vida'],
    tint: 'river',
  },
  {
    slug: 'zona-franca-bogota-huella-2023',
    title: 'Medición y gestión de huella de carbono corporativa 2023',
    area: 'carbonbox',
    client: 'Co-propiedad Zona Franca de Bogotá PH',
    country: 'Colombia',
    year: '2023',
    summary: 'Huella de carbono corporativa 2023 de la Co-propiedad Zona Franca de Bogotá.',
    description:
      'Implementamos la medición de emisiones de GEI organizacionales y la gestión de la huella de carbono corporativa 2023 de la Co-propiedad Zona Franca de Bogotá, conforme al GHG Protocol y la norma ISO 14064-1, con recomendaciones de reducción.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'dusk',
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
  },
  {
    slug: 'hacienda-cafe-misiones-huella-2023',
    title: 'Medición y gestión de huella de carbono corporativa 2023',
    area: 'carbonbox',
    client: 'Hacienda Café Misiones',
    country: 'Colombia',
    year: '2023',
    summary: 'Huella de carbono corporativa 2023 de Hacienda Café Misiones, con seguimiento hasta 2026.',
    description:
      'Implementamos la medición de emisiones de GEI organizacionales y la gestión de la huella de carbono corporativa 2023 de Hacienda Café Misiones, conforme al GHG Protocol y la norma ISO 14064-1, con acompañamiento continuo y recomendaciones de reducción.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'warm',
  },
  {
    slug: 'colegio-anglo-colombiano-huella-2023',
    title: 'Huella de carbono organizacional del Colegio Anglo Colombiano',
    area: 'carbonbox',
    client: 'Fundación Colegio Anglo Colombiano',
    country: 'Colombia',
    year: '2023',
    summary: 'Huella de carbono corporativa 2023 de todas las operaciones del Colegio Anglo Colombiano en Bogotá.',
    description:
      'Implementamos la medición de la huella de carbono organizacional de todas las operaciones de la sede Bogotá del Colegio Anglo Colombiano, conforme al GHG Protocol y la norma ISO 14064-1.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'forest',
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
  },
  {
    slug: 'paramo-presenta-festivales',
    title: 'Huella de carbono de festivales: Estéreo Picnic, Cordillera, Vassar, BAUM y Corona Sunset',
    area: 'carbonbox',
    client: 'Páramo Presenta',
    country: 'Colombia',
    year: '2023–2025',
    summary: 'Huella de carbono de la producción de los principales festivales de Colombia, edición tras edición.',
    description:
      'Desarrollamos las huellas de carbono de la producción de eventos como el Festival Estéreo Picnic (2023-2026), la Feria Vassar (2023-2024), Corona Sunset (2023-2024), BAUM (2024) y el Festival Cordillera (2024-2025), conforme al GHG Protocol y la norma ISO 14064-1.',
    tags: ['Huella de carbono de eventos', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'blush',
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
  },
  {
    slug: 'maderera-rio-acre-huella-2022',
    title: 'Medición y gestión de huella de carbono corporativa 2022',
    area: 'carbonbox',
    client: 'CANDES · Maderera Río Acre S.A.C.',
    country: 'Perú',
    year: '2022',
    summary: 'Huella de carbono corporativa 2022 de Maderera Río Acre en Perú.',
    description:
      'Implementamos la medición de emisiones de GEI organizacionales y la gestión de la huella de carbono corporativa 2022 de Maderera Río Acre, conforme al GHG Protocol y la norma ISO 14064-1, incluyendo control de calidad de datos y recomendaciones de reducción.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'sunset',
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
  },
  {
    slug: 'comfama-deeper-learning',
    title: 'Huella de carbono de los eventos Deeper Learning 2024 y 2025',
    area: 'carbonbox',
    client: 'Comfama',
    country: 'Colombia',
    year: '2024–2025',
    summary: 'Estimación de la huella de carbono de las dos ediciones del evento Deeper Learning.',
    description:
      'Estimamos la huella de carbono de los eventos Deeper Learning 2024 y 2025 de Comfama en Medellín, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono de eventos', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'river',
  },
  {
    slug: 'cataexport-huella-2025',
    title: 'Medición y gestión de huella de carbono corporativa 2025',
    area: 'carbonbox',
    client: 'CataExport',
    country: 'Colombia',
    year: '2025',
    summary: 'Huella de carbono corporativa 2025 de CataExport.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de CataExport conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'dusk',
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
  },
  {
    slug: 'spec-lng-huella-2024',
    title: 'Huella de carbono corporativa 2024',
    area: 'carbonbox',
    client: 'SPEC LNG',
    country: 'Colombia',
    year: '2024',
    summary: 'Estimación de la huella de carbono corporativa 2024 de SPEC LNG.',
    description:
      'Estimamos la huella de carbono corporativa 2024 de SPEC LNG, conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'cool',
  },
  {
    slug: 'asobancaria-congreso-2024',
    title: 'Huella de carbono del 8° Congreso de Finanzas para la Equidad, Sostenibilidad y Transformación',
    area: 'carbonbox',
    client: 'Asobancaria',
    country: 'Colombia',
    year: '2024',
    summary: 'Estimación de la huella de carbono del 8° Congreso de Finanzas de Asobancaria.',
    description:
      'Estimamos la huella de carbono del 8° Congreso de Finanzas para la Equidad, Sostenibilidad y Transformación 2024 de Asobancaria, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono de eventos', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'forest',
  },
  {
    slug: 'santa-fe-bogota-huella-2025',
    title: 'Medición y gestión de huella de carbono corporativa 2025',
    area: 'carbonbox',
    client: 'Fundación Santa Fé de Bogotá',
    country: 'Colombia',
    year: '2025',
    summary: 'Huella de carbono corporativa 2025 de la Fundación Santa Fé de Bogotá.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de la Fundación Santa Fé de Bogotá conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox como software as a service.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'sunset',
  },
  {
    slug: 'parker-huella-2025',
    title: 'Medición y gestión de huella de carbono corporativa 2025',
    area: 'carbonbox',
    client: 'Parker',
    country: 'Argentina',
    year: '2025',
    summary: 'Huella de carbono corporativa 2025 de Parker en Argentina.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de Parker en Argentina conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox como software as a service.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'earth',
  },
  {
    slug: 'ambielegsa-huella-2025',
    title: 'Medición y gestión de huella de carbono corporativa 2025',
    area: 'carbonbox',
    client: 'AMBIELEGSA SA',
    country: 'Ecuador',
    year: '2025',
    summary: 'Huella de carbono corporativa 2025 de AMBIELEGSA en Quito, Ecuador.',
    description:
      'Implementamos la medición y gestión de la huella de carbono corporativa 2025 de AMBIELEGSA conforme al GHG Protocol y la norma ISO 14064-1, mediante la plataforma CarbonBox.',
    tags: ['Huella de carbono corporativa', 'GHG Protocol · ISO 14064', 'Mitigación'],
    tint: 'river',
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
  },
];

export const documentsByArea = (area: AreaKey) => DOCUMENTS.filter((d) => d.area === area);

export interface Member {
  name: string;
  role: string;
  bio: string;
  img?: string;
  color: string;
}

// Equipo — solo Natalia y Viviana (Carolina Quiñones ya no aparece).
export const TEAM: Member[] = [
  {
    name: 'Natalia Gutiérrez Beltrán',
    role: 'Líder de Gestión Climática',
    bio: 'Especialista en el diseño e implementación de políticas de adaptación y mitigación al cambio climático en América Latina, liderando proyectos con enfoque territorial y multisectorial.',
    img: '/assets/team-natalia.png',
    color: 'var(--kimsa-terracotta)',
  },
  {
    name: 'Viviana Bohórquez L.',
    role: 'Líder de Tecnología para la Naturaleza',
    bio: 'Creadora de CarbonBox. Experta en conectar tecnología, datos y acción climática para medir huellas de carbono y apoyar la toma de decisiones sostenibles.',
    img: '/assets/team-viviana.png',
    color: 'var(--kimsa-forest)',
  },
];
