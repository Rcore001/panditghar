import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Languages } from 'lucide-react';
import { OmIcon } from '@/components/ui/decorative';
import { Language, useTranslation, WHATSAPP_NUMBER } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export function Navbar({ lang }: { lang: Language }) {
  const t = useTranslation(lang).nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/services`, label: t.services },
    { href: `/${lang}/about`, label: t.about },
    { href: `/${lang}/shubh-muhurat-2026`, label: t.shubhMuhurat },
    { href: `/${lang}/blog`, label: t.blog },
    { href: `/${lang}/contact`, label: t.contact },
  ];

  const toggleLang = lang === 'hi' ? 'en' : 'hi';
  const restSegment = location.replace(/^\/(hi|en)/, '');
  const switchUrl = `/${toggleLang}${restSegment}`;

  const isActive = (href: string) => {
    if (href === `/${lang}`) return location === href || location === `/${lang}/`;
    return location.startsWith(href);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/96 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.08)] py-2.5'
          : 'bg-background/98 py-4'
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary origin-left z-10"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <OmIcon className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-[17px] font-display font-bold text-secondary tracking-tight ${lang === 'hi' ? 'font-hindi' : ''}`}>
                PanditGhar<span className="text-primary">.in</span>
              </span>
              <span className={`text-[10px] text-muted-foreground font-medium tracking-wider uppercase ${lang === 'hi' ? 'font-hindi' : ''}`}>
                {lang === 'hi' ? 'बेंगलुरु' : 'Bangalore'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors group ${
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-foreground/75 hover:text-secondary hover:bg-muted/60'
                  } ${lang === 'hi' ? 'font-hindi' : ''}`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center gap-3"
          >
            <Link
              href={switchUrl}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm font-medium hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all"
            >
              <Languages className="w-3.5 h-3.5" />
              {lang === 'hi' ? 'English' : 'हिंदी'}
            </Link>

            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors text-sm font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">+91 93295 66101</span>
            </a>

            <Link href={`/${lang}/book`}>
              <Button className="bg-gradient-saffron hover:shadow-glow-saffron text-white rounded-full px-5 py-2 text-sm font-semibold border-none transition-all h-auto">
                {t.bookNow}
              </Button>
            </Link>
          </motion.div>

          {/* Mobile/Tablet actions */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href={switchUrl}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-border text-xs font-medium hover:bg-muted transition-colors"
            >
              <Languages className="w-3 h-3" />
              {lang === 'hi' ? 'EN' : 'हि'}
            </Link>
            <button
              className="p-2 text-secondary rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-background border-t border-border shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive(link.href)
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-foreground hover:bg-muted hover:text-secondary'
                  } ${lang === 'hi' ? 'font-hindi' : ''}`}
                >
                  {isActive(link.href) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  )}
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 mt-1 border-t border-border space-y-2">
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-secondary font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +91 93295 66101
                </a>
                <Link href={`/${lang}/book`} onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-saffron text-white rounded-xl py-5 text-base font-semibold border-none">
                    {t.bookNow}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
