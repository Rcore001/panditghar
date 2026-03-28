import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';
import { Language } from '@/lib/data';
import { SITE_URL } from '@/lib/config';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  lang: Language;
  className?: string;
}

export function Breadcrumb({ items, lang, className = '' }: BreadcrumbProps) {
  const isHi = lang === 'hi';
  const homeLabel = isHi ? 'होम' : 'Home';

  const allItems: BreadcrumbItem[] = [
    { label: homeLabel, href: `/${lang}` },
    ...items,
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="breadcrumb"
        className={`flex items-center flex-wrap gap-1 text-sm text-muted-foreground ${isHi ? 'font-hindi' : ''} ${className}`}
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <span key={index} className="flex items-center gap-1">
              {index === 0 && <Home className="w-3.5 h-3.5 inline shrink-0" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-foreground font-medium' : ''}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="w-3.5 h-3.5 shrink-0 text-muted-foreground/50" />}
            </span>
          );
        })}
      </nav>
    </>
  );
}
