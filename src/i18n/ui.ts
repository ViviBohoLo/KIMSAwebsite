// Diccionario de textos de interfaz compartidos (nav, botones, formularios,
// estados vacíos, aria-labels…). El contenido propio de cada página (copy,
// arrays de datos) vive en cada .astro — este archivo es solo para el texto
// repetido en componentes de src/components/, que se usan tanto en /es
// (sin prefijo) como en /en/*.
export const languages = {
  es: 'ES',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    // Nav
    'nav.services': 'Servicios',
    'nav.work': 'Nuestro trabajo',
    'nav.about': 'Nosotros',
    'nav.projects': 'Proyectos',
    'nav.publications': 'Publicaciones',
    'nav.clients': 'Clientes',
    'nav.course': 'Curso de Psicología Ambiental',
    'nav.gestion': 'Gestión Climática',
    'nav.psicologia': 'Psicología Ambiental',
    'nav.carbonbox': 'CarbonBox',
    'nav.cta': 'Conversemos →',
    'nav.openMenu': 'Abrir menú',
    'nav.home': 'Inicio KIMSA',
    'nav.lang': 'Idioma',

    // Footer
    'footer.explore': 'Explorar',
    'footer.resources': 'Recursos',
    'footer.contact': 'Contacto',
    'footer.ceiba': 'Reserva Ceiba Bruja',
    'footer.tagline': 'Clima · Conservación · Desarrollo. Una consultora climática latinoamericana nacida en Bogotá en 2017.',
    'footer.rights': 'KIMSA S.A.S.',
    'footer.madeWith': 'Hecho con cuidado por gente de Latinoamérica',

    // Proyectos (grilla + filtros)
    'projects.searchPlaceholder': 'Buscar proyectos por título, cliente o palabra clave…',
    'projects.searchLabel': 'Buscar proyectos',
    'projects.filterArea': 'Área',
    'projects.filterAreaLabel': 'Filtrar por área',
    'projects.filterCountry': 'País',
    'projects.filterCountryLabel': 'Filtrar por país',
    'projects.all': 'Todos',
    'projects.empty': 'No hay proyectos con estos filtros.',
    'projects.viewMore': 'Ver proyecto →',
    'projects.viewPublication': 'Ver publicación →',
    'projects.showingFor': 'Mostrando proyectos relacionados con',
    'projects.viewAll': 'Ver todos los proyectos',

    // Modal de proyecto
    'modal.close': 'Cerrar',

    // Documentos / publicaciones
    'doc.view': 'Ver documento →',
    'doc.download': 'Descargar',

    // Clientes
    'clients.ariaRegion': 'Organizaciones que confían en KIMSA',
    'clients.ally': 'Aliado de KIMSA',

    // Contacto
    'contact.name': 'Nombre',
    'contact.namePlaceholder': '¿Cómo te llamas?',
    'contact.email': 'Correo',
    'contact.emailPlaceholder': 'tucorreo@ejemplo.com',
    'contact.phone': 'Teléfono / WhatsApp',
    'contact.phonePlaceholder': '+57 300 000 0000',
    'contact.subject': 'Asunto',
    'contact.subjectPlaceholder': 'Ej. propuesta, alianza, prensa…',
    'contact.message': 'Mensaje',
    'contact.messageHint': 'mínimo 10 palabras',
    'contact.messagePlaceholder': 'Cuéntanos un poco sobre tu proyecto o reto climático…',
    'contact.honeypot': 'No completar este campo',
    'contact.submit': 'Enviar mensaje →',

    // Curso
    'course.eyebrow': 'Curso · Psicología Ambiental',
    'course.cta': 'Ver el curso →',

    // Dónde estamos
    'presence.title': 'Dónde estamos',
    'presence.aria': 'Mapa interactivo de la presencia de KIMSA en América Latina',

    // Hero de servicio
    'hero.home': 'Inicio',
    'hero.route': 'Ruta',
    'hero.viewCases': 'Ver casos ↓',

    // Carrusel
    'carousel.prev': 'Anterior',
    'carousel.next': 'Siguiente',
  },
  en: {
    // Nav
    'nav.services': 'Services',
    'nav.work': 'Our work',
    'nav.about': 'About us',
    'nav.projects': 'Projects',
    'nav.publications': 'Publications',
    'nav.clients': 'Clients',
    'nav.course': 'Environmental Psychology Course',
    'nav.gestion': 'Climate Management',
    'nav.psicologia': 'Environmental Psychology',
    'nav.carbonbox': 'CarbonBox',
    'nav.cta': "Let's talk →",
    'nav.openMenu': 'Open menu',
    'nav.home': 'KIMSA home',
    'nav.lang': 'Language',

    // Footer
    'footer.explore': 'Explore',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.ceiba': 'Ceiba Bruja Reserve',
    'footer.tagline': 'Climate · Conservation · Development. A Latin American climate consultancy born in Bogotá in 2017.',
    'footer.rights': 'KIMSA S.A.S.',
    'footer.madeWith': 'Made with care by people from Latin America',

    // Proyectos (grilla + filtros)
    'projects.searchPlaceholder': 'Search projects by title, client, or keyword…',
    'projects.searchLabel': 'Search projects',
    'projects.filterArea': 'Area',
    'projects.filterAreaLabel': 'Filter by area',
    'projects.filterCountry': 'Country',
    'projects.filterCountryLabel': 'Filter by country',
    'projects.all': 'All',
    'projects.empty': 'No projects match these filters.',
    'projects.viewMore': 'View project →',
    'projects.viewPublication': 'View publication →',
    'projects.showingFor': 'Showing projects related to',
    'projects.viewAll': 'View all projects',

    // Modal de proyecto
    'modal.close': 'Close',

    // Documentos / publicaciones
    'doc.view': 'View document →',
    'doc.download': 'Download',

    // Clientes
    'clients.ariaRegion': 'Organizations that trust KIMSA',
    'clients.ally': 'KIMSA ally',

    // Contacto
    'contact.name': 'Name',
    'contact.namePlaceholder': "What's your name?",
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'youremail@example.com',
    'contact.phone': 'Phone / WhatsApp',
    'contact.phonePlaceholder': '+1 300 000 0000',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'E.g. proposal, partnership, press…',
    'contact.message': 'Message',
    'contact.messageHint': 'minimum 10 words',
    'contact.messagePlaceholder': 'Tell us a bit about your project or climate challenge…',
    'contact.honeypot': 'Leave this field empty',
    'contact.submit': 'Send message →',

    // Curso
    'course.eyebrow': 'Course · Environmental Psychology',
    'course.cta': 'See the course →',

    // Dónde estamos
    'presence.title': 'Where we are',
    'presence.aria': "Interactive map of KIMSA's presence in Latin America",

    // Hero de servicio
    'hero.home': 'Home',
    'hero.route': 'Path',
    'hero.viewCases': 'See cases ↓',

    // Carrusel
    'carousel.prev': 'Previous',
    'carousel.next': 'Next',
  },
} as const;
