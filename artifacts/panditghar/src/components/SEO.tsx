import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME } from '@/lib/config';

interface SEOProps {
  title: string;
  description: string;
  lang: 'hi' | 'en';
  path: string;
  schema?: any | any[];
}

export function SEO({ title, description, lang, path, schema }: SEOProps) {
  const baseUrl = SITE_URL;
  const url = `${baseUrl}${path}`;
  const alternateLang = lang === 'hi' ? 'en' : 'hi';
  const alternateUrl = `${baseUrl}/${alternateLang}${path.substring(3)}`;

  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang={lang} href={url} />
      <link rel="alternate" hrefLang={alternateLang} href={alternateUrl} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === 'hi' ? 'hi_IN' : 'en_IN'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={`${SITE_URL}/opengraph.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/opengraph.jpg`} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
