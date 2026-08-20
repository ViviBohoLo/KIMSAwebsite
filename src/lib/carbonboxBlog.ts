/**
 * carbonboxBlog — trae en tiempo de build los últimos artículos publicados
 * en carbonbox.app/blog para mostrarlos en la subpágina de CarbonBox
 * (src/pages/servicios/carbonbox.astro), sin tener que copiarlos a mano.
 *
 * CarbonBox no expone un feed RSS ni una API pública, así que se hace un
 * fetch + parseo liviano del HTML de su página de blog (que es estática,
 * generada con Astro igual que este sitio). Si su HTML cambia de forma
 * significativa o el fetch falla (por ejemplo, sin red en el build), la
 * función devuelve un arreglo vacío y la sección simplemente no se
 * renderiza — nunca debe romper el build del sitio de KIMSA.
 *
 * Para que esta sección se actualice sola (sin esperar al próximo
 * `git push`), hace falta un rebuild periódico del sitio. Ver
 * `.github/workflows/carbonbox-blog-sync.yml`.
 */

export const CARBONBOX_BLOG_URL = 'https://www.carbonbox.app/blog';
export const CARBONBOX_ACADEMY_URL = 'https://www.carbonbox.app/academy';

export interface CarbonBoxPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  cover: string;
  url: string;
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

export async function getCarbonBoxPosts(limit = 3): Promise<CarbonBoxPost[]> {
  try {
    const res = await fetch(CARBONBOX_BLOG_URL, {
      headers: { 'user-agent': 'kimsa-web-build (+https://www.kimsa.co)' },
    });
    if (!res.ok) return [];
    const html = await res.text();

    // Cada tarjeta de post es un <a href="/post/slug" class="cb-post ..."> con
    // portada, categoría(s), fecha, título y resumen dentro. Se recorren en el
    // mismo orden en que aparecen en la página (más reciente primero).
    const cardRe = /<a href="\/post\/([^"?#]+)" class="cb-post[^"]*"[^>]*>([\s\S]*?)<\/a>/g;
    const posts: CarbonBoxPost[] = [];
    const seen = new Set<string>();
    let match: RegExpExecArray | null;

    while ((match = cardRe.exec(html)) && posts.length < limit) {
      const [, slug, block] = match;
      if (seen.has(slug)) continue;
      seen.add(slug);

      const title = block.match(/<h3[^>]*>([^<]+)<\/h3>/)?.[1];
      if (!title) continue; // tarjeta con forma inesperada — se descarta, no rompe el build

      const cover = block.match(/url\('([^']+)'\)/)?.[1] ?? '';
      const categories = Array.from(
        block.matchAll(/color:var\(--accent-deep\);background:var\(--accent-soft\)[^>]*>([^<]+)<\/span>/g)
      ).map((m) => decodeEntities(m[1]));
      const date = block.match(/font-family:var\(--font-mono\);"[^>]*>([^<]+)<\/span>/)?.[1];
      const excerpt = block.match(/<p[^>]*>([^<]+)<\/p>/)?.[1];

      posts.push({
        slug,
        title: decodeEntities(title),
        excerpt: excerpt ? decodeEntities(excerpt) : '',
        category: categories.join(' · '),
        date: date ? decodeEntities(date) : '',
        cover: cover ? new URL(cover, CARBONBOX_BLOG_URL).toString() : '',
        url: `https://www.carbonbox.app/post/${slug}`,
      });
    }
    return posts;
  } catch {
    // Sin red durante el build, cambio de estructura del HTML, etc.
    // Preferimos una sección vacía a un build roto.
    return [];
  }
}
