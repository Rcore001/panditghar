import { useState, useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { OmIcon } from '@/components/ui/decorative';
import { Language, useTranslation, WHATSAPP_NUMBER } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export function Navbar({ lang }: { lang: Language }) {
  const t = useTranslation(lang).nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  const [match, params] = useRoute("/:lang/*rest");
  const restPath = match && params.rest ? `/${params.rest}` : '';
  const switchUrl = `/${toggleLang}${restPath}`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-3' : 'bg-background py-5'}`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-primary origin-left z-10"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2 group">
            <OmIcon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
            <span className={`text-lg sm:text-2xl font-display font-bold text-secondary ${lang === 'hi' ? 'font-hindi' : ''}`}>
              PanditGhar<span className="text-primary">.in</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link 
                  href={link.href}
                  className={`text-foreground/80 hover:text-primary font-medium transition-colors ${lang === 'hi' ? 'font-hindi' : ''}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex items-center gap-4"
          >
            <Link href={switchUrl} className="px-3 py-1 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors">
              {lang === 'hi' ? 'English' : 'हिंदी'}
            </Link>
            
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+91 93295 66101</span>
            </a>

            <Link href={`/${lang}/book`}>
              <Button className="bg-gradient-saffron hover:shadow-glow-saffron text-white rounded-full px-6 font-semibold border-none transition-all">
                {t.bookNow}
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg font-medium text-foreground hover:text-primary ${lang === 'hi' ? 'font-hindi' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border flex flex-col gap-4">
                <Link href={switchUrl} onClick={() => setMobileMenuOpen(false)} className="inline-flex justify-center w-fit px-4 py-2 rounded-full border border-border font-medium">
                  Switch to {lang === 'hi' ? 'English' : 'हिंदी'}
                </Link>
                <Link href={`/${lang}/book`} onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-xl py-6 text-lg">
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
