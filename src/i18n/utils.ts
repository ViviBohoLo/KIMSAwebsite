import { ui, defaultLang, type Lang } from './ui';

/** Idioma de la página actual a partir de la URL. '/en/...' → 'en'; todo lo
 * demás (sin prefijo) → 'es', que es el locale por defecto del sitio. */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang === 'en') return 'en';
  return defaultLang;
}

/** t(key) resuelto para el idioma dado, con fallback a español si falta la
 * clave en inglés (nunca debe pasar, pero evita una página rota). */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['es']): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Misma ruta en el otro idioma: agrega o quita el prefijo /en. Útil para el
 * selector ES·EN (cambia de idioma sin perder la página en la que se está). */
export function getLocalizedPath(pathname: string, lang: Lang): string {
  const stripped = pathname.replace(/^\/en(\/|$)/, '/');
  if (lang === 'es') return stripped;
  return stripped === '/' ? '/en' : `/en${stripped}`;
}
