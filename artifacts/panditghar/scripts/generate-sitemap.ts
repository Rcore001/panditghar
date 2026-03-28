import { writeFileSync } from 'fs';
import { resolve } from 'path';

const SITE_URL = 'https://panditghar.in';
const TODAY = new Date().toISOString().slice(0, 10);

const serviceSlugData: { slug: string; priority: string; lastmod: string }[] = [
  { slug: 'griha-pravesh-pooja-bangalore', priority: '0.95', lastmod: '2026-01-15' },
  { slug: 'satyanarayan-katha-bangalore', priority: '0.95', lastmod: '2026-01-15' },
  { slug: 'vivah-pandit-bangalore', priority: '0.95', lastmod: '2026-01-15' },
  { slug: 'rudrabhishek-pooja-bangalore', priority: '0.9', lastmod: '2026-01-15' },
  { slug: 'namkaran-pooja-bangalore', priority: '0.9', lastmod: '2026-01-15' },
  { slug: 'mundan-pooja-bangalore', priority: '0.9', lastmod: '2026-01-15' },
  { slug: 'ganesh-puja-bangalore', priority: '0.85', lastmod: '2026-01-15' },
  { slug: 'lakshmi-puja-bangalore', priority: '0.85', lastmod: '2026-01-15' },
  { slug: 'navgrah-puja-bangalore', priority: '0.85', lastmod: '2026-01-15' },
  { slug: 'vastu-shanti-pooja-bangalore', priority: '0.85', lastmod: '2026-01-15' },
  { slug: 'mangal-dosh-puja-bangalore', priority: '0.85', lastmod: '2026-01-15' },
  { slug: 'kaal-sarp-dosh-puja-bangalore', priority: '0.85', lastmod: '2026-01-15' },
  { slug: 'hanuman-puja-bangalore', priority: '0.85', lastmod: '2026-01-15' },
  { slug: 'durga-puja-bangalore', priority: '0.85', lastmod: '2026-01-15' },
  { slug: 'saraswati-puja-bangalore', priority: '0.8', lastmod: '2026-01-15' },
  { slug: 'kanya-puja-bangalore', priority: '0.8', lastmod: '2026-01-15' },
  { slug: 'annaprashan-pooja-bangalore', priority: '0.8', lastmod: '2026-01-15' },
  { slug: 'yagyopaveet-sanskar-bangalore', priority: '0.8', lastmod: '2026-01-15' },
  { slug: 'sagai-engagement-bangalore', priority: '0.8', lastmod: '2026-01-15' },
  { slug: 'navratri-puja-bangalore', priority: '0.8', lastmod: '2026-01-15' },
  { slug: 'diwali-puja-bangalore', priority: '0.8', lastmod: '2026-01-15' },
  { slug: 'janmashtami-puja-bangalore', priority: '0.8', lastmod: '2026-01-15' },
  { slug: 'maha-shivaratri-puja-bangalore', priority: '0.8', lastmod: '2026-01-15' },
  { slug: 'pitru-paksha-shradh-bangalore', priority: '0.8', lastmod: '2026-01-15' },
  { slug: 'antim-sanskar-bangalore', priority: '0.8', lastmod: '2026-01-15' },
  { slug: 'bhagvat-mahapuran-katha-bangalore', priority: '0.75', lastmod: '2026-01-15' },
  { slug: 'sundarkand-path-bangalore', priority: '0.75', lastmod: '2026-01-15' },
  { slug: 'ram-katha-bangalore', priority: '0.75', lastmod: '2026-01-15' },
  { slug: 'shiv-mahapuran-katha-bangalore', priority: '0.75', lastmod: '2026-01-15' },
  { slug: 'devi-bhagvat-katha-bangalore', priority: '0.75', lastmod: '2026-01-15' },
  { slug: 'akhand-ramayan-path-bangalore', priority: '0.75', lastmod: '2026-01-15' },
];

const locationIds: string[] = [
  'whitefield', 'hsr-layout', 'marathahalli', 'electronic-city', 'jp-nagar',
  'koramangala', 'indiranagar', 'jayanagar', 'yelahanka', 'hebbal',
  'sarjapur-road', 'btm-layout', 'bannerghatta-road', 'rajajinagar',
  'malleshwaram', 'kr-puram', 'hennur', 'banashankari', 'vijayanagar', 'ulsoor',
];

const blogSlugs: { slug: string; lastmod: string }[] = [
  { slug: 'griha-pravesh-vidhi', lastmod: '2026-01-15' },
  { slug: 'satyanarayan-katha-benefits', lastmod: '2026-01-22' },
  { slug: 'vivah-muhurat-2026', lastmod: '2026-02-01' },
  { slug: 'satyanarayan-katha-vidhi', lastmod: '2026-02-10' },
  { slug: 'mundan-sanskar-mahatva', lastmod: '2026-02-20' },
  { slug: 'pooja-samagri-complete-list', lastmod: '2026-03-05' },
  { slug: 'navgrah-puja-significance', lastmod: '2026-03-15' },
];

const corePages: { path: string; priority: string; changefreq: string; lastmod: string }[] = [
  { path: '', priority: '1.0', changefreq: 'weekly', lastmod: TODAY },
  { path: '/about', priority: '0.8', changefreq: 'monthly', lastmod: TODAY },
  { path: '/services', priority: '0.9', changefreq: 'weekly', lastmod: TODAY },
  { path: '/contact', priority: '0.8', changefreq: 'monthly', lastmod: TODAY },
  { path: '/shubh-muhurat-2026', priority: '0.9', changefreq: 'monthly', lastmod: TODAY },
  { path: '/book', priority: '0.9', changefreq: 'weekly', lastmod: TODAY },
  { path: '/blog', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },
];

function hreflangPair(hiUrl: string, enUrl: string): string {
  return `\n    <xhtml:link rel="alternate" hreflang="hi" href="${hiUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>`;
}

function urlEntry(loc: string, hreflang: string, lastmod: string, changefreq: string, priority: string): string {
  return `  <url>
    <loc>${loc}</loc>${hreflang}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const entries: string[] = [];

for (const page of corePages) {
  const hiUrl = `${SITE_URL}/hi${page.path}`;
  const enUrl = `${SITE_URL}/en${page.path}`;
  entries.push(urlEntry(hiUrl, hreflangPair(hiUrl, enUrl), page.lastmod, page.changefreq, page.priority));
  entries.push(urlEntry(enUrl, hreflangPair(hiUrl, enUrl), page.lastmod, page.changefreq, page.priority));
}

for (const svc of serviceSlugData) {
  const hiUrl = `${SITE_URL}/hi/services/${svc.slug}`;
  const enUrl = `${SITE_URL}/en/services/${svc.slug}`;
  entries.push(urlEntry(hiUrl, hreflangPair(hiUrl, enUrl), svc.lastmod, 'monthly', svc.priority));
  entries.push(urlEntry(enUrl, hreflangPair(hiUrl, enUrl), svc.lastmod, 'monthly', svc.priority));
}

for (const id of locationIds) {
  const hiUrl = `${SITE_URL}/hi/bangalore/${id}/pandit-for-pooja`;
  const enUrl = `${SITE_URL}/en/bangalore/${id}/pandit-for-pooja`;
  const priority = ['whitefield','hsr-layout','marathahalli','electronic-city','jp-nagar','koramangala','indiranagar','jayanagar','yelahanka','hebbal','sarjapur-road','btm-layout'].includes(id) ? '0.9' : '0.85';
  entries.push(urlEntry(hiUrl, hreflangPair(hiUrl, enUrl), TODAY, 'monthly', priority));
  entries.push(urlEntry(enUrl, hreflangPair(hiUrl, enUrl), TODAY, 'monthly', priority));
}

for (const post of blogSlugs) {
  const hiUrl = `${SITE_URL}/hi/blog/${post.slug}`;
  const enUrl = `${SITE_URL}/en/blog/${post.slug}`;
  entries.push(urlEntry(hiUrl, hreflangPair(hiUrl, enUrl), post.lastmod, 'monthly', '0.85'));
  entries.push(urlEntry(enUrl, hreflangPair(hiUrl, enUrl), post.lastmod, 'monthly', '0.85'));
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${entries.join('\n\n')}

</urlset>
`;

const outPath = resolve(import.meta.dirname, '..', 'public', 'sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');
console.log(`[sitemap] Generated ${entries.length} URL entries → ${outPath}`);

// Generate 404.html with the correct base path derived from GHPAGES_BASE (or / for Vercel).
// This keeps the SPA redirect trick aligned with the actual build base path.
const ghpagesBase = (process.env.GHPAGES_BASE ?? process.env.BASE_PATH ?? '/panditghar/').replace(/\/$/, '');
const html404 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>PanditGhar.in</title>
  <script>
    var l = window.location;
    var basePath = '${ghpagesBase}';
    var isPathBased = basePath !== '';
    sessionStorage.setItem('spa-redirect', l.pathname + l.search);
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      (isPathBased ? basePath : '') + '/?p=1'
    );
  </script>
</head>
<body>
  <noscript>Redirecting to PanditGhar.in&hellip;</noscript>
</body>
</html>
`;
const out404Path = resolve(import.meta.dirname, '..', 'public', '404.html');
writeFileSync(out404Path, html404, 'utf-8');
console.log(`[sitemap] Generated 404.html with basePath="${ghpagesBase}" → ${out404Path}`);
