// Datos de contenido del sitio KIMSA. Copiados fielmente del sitio actual
// (kimsa.co). Las fotos de proyectos son placeholders hasta recibir las reales.

export const CONTACT = {
  email: 'info@kimsa.co',
  phone: '+57 320 867 5567',
  phoneHref: 'tel:+573208675567',
  mailto: 'mailto:info@kimsa.co?subject=Conversemos%20con%20KIMSA',
  hqs: ['Bogotá D.C., Colombia', 'San José, Costa Rica'],
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
  { src: '/assets/clients/tnc.png', alt: 'The Nature Conservancy' },
  { src: '/assets/clients/euroclima.jpg', alt: 'EUROCLIMA+' },
  { src: '/assets/clients/bancoldex.png', alt: 'Bancóldex' },
  { src: '/assets/clients/minagricultura.png', alt: 'Ministerio de Agricultura' },
  { src: '/assets/clients/miambiente.png', alt: 'MiAmbiente' },
  { src: '/assets/clients/ciat.jpg', alt: 'Alliance Bioversity-CIAT' },
  { src: '/assets/clients/icraf.png', alt: 'ICRAF' },
  { src: '/assets/clients/idrc.jpg', alt: 'IDRC' },
  { src: '/assets/clients/flacso.jpg', alt: 'FLACSO' },
  { src: '/assets/clients/climate-group.png', alt: 'Climate Group' },
  { src: '/assets/clients/transforma.png', alt: 'Transforma' },
  { src: '/assets/clients/camara-verde.png', alt: 'Cámara Verde' },
];

export const COUNTRIES: string[] = [
  'Colombia', 'Costa Rica', 'Ecuador', 'Honduras', 'El Salvador',
  'México', 'Perú', 'Guatemala', 'Panamá',
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
  },
];

// Países presentes (para el filtro), en orden.
export const PROJECT_COUNTRIES: string[] = ['Colombia', 'Ecuador', 'El Salvador', 'Honduras', 'Costa Rica'];

export const projectsByArea = (area: AreaKey) => PROJECTS.filter((p) => p.area === area);

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
