import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Language } from '@/lib/data';

interface AppLayoutProps {
  children: ReactNode;
  lang: Language;
}

export function AppLayout({ children, lang }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang={lang} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
