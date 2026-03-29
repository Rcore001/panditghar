import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Language } from '@/lib/data';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919329566101';

interface AppLayoutProps {
  children: ReactNode;
  lang: Language;
}

export function AppLayout({ children, lang }: AppLayoutProps) {
  const isHi = lang === 'hi';
  const waText = isHi
    ? 'नमस्ते! मुझे पूजा बुकिंग के लिए जानकारी चाहिए।'
    : 'Namaste! I would like to book a pandit for puja in Bangalore.';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang={lang} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer lang={lang} />

      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-5 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-xl py-3 px-3 sm:px-4 font-semibold text-sm hover:bg-[#20bb5a] transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-5 h-5 fill-white stroke-none" />
        <span className={`hidden sm:inline ${isHi ? 'font-hindi' : ''}`}>
          {isHi ? 'अभी बुक करें' : 'Book Now'}
        </span>
      </motion.a>
    </div>
  );
}
