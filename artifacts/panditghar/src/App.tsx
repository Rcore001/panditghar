import { Switch, Route, Router as WouterRouter, Redirect, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "@/pages/not-found";

import { AppLayout } from "@/components/layout/AppLayout";
import { Language } from "@/lib/data";
import { SEO } from "@/components/SEO";
import { SITE_URL } from "@/lib/config";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import LocationPage from "@/pages/LocationPage";
import ShubhMuhurat from "@/pages/ShubhMuhurat";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog, { BlogPost } from "@/pages/Blog";
import { BookingForm } from "@/components/BookingForm";


function BookingPage({ lang }: { lang: Language }) {
  const isHi = lang === 'hi';
  const title = isHi ? "पूजा बुक करें | PanditGhar.in" : "Book a Pooja | PanditGhar.in";
  const desc = isHi
    ? "बेंगलुरु में पूजा बुक करें — PanditGhar.in पर अपना नाम, सेवा, और तारीख भरें। हम आपसे तुरंत संपर्क करेंगे।"
    : "Book a pooja in Bangalore — fill in your name, service, and preferred date on PanditGhar.in. We will contact you immediately.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": desc,
    "url": `${SITE_URL}/${lang}/book`,
    "potentialAction": {
      "@type": "ReserveAction",
      "target": `${SITE_URL}/${lang}/book`,
      "name": isHi ? "पूजा बुक करें" : "Book a Pooja"
    }
  };

  return (
    <div className="pt-32 pb-16 bg-background min-h-screen flex items-center justify-center">
      <SEO
        title={title}
        description={desc}
        lang={lang}
        path={`/${lang}/book`}
        schema={schema}
      />
      <div className="w-full max-w-2xl px-4">
        <BookingForm lang={lang} />
      </div>
    </div>
  );
}

function BlogPostPage({ lang, params }: { lang: Language; params: { slug: string } }) {
  return <BlogPost lang={lang} slug={params.slug} />;
}

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const pageTransition = { duration: 0.28, ease: [0.22, 1, 0.36, 1] };

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

function LangRoute({ lang, Component, params }: { lang: Language; Component: any; params?: any }) {
  return (
    <AppLayout lang={lang}>
      <Component lang={lang} params={params} />
    </AppLayout>
  );
}

function Router() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <AnimatedPage key={location}>
    <Switch>
      <Route path="/">
        <Redirect to="/hi" />
      </Route>

      {/* Hindi Routes */}
      <Route path="/hi"><LangRoute lang="hi" Component={Home} /></Route>
      <Route path="/hi/services"><LangRoute lang="hi" Component={Services} /></Route>
      <Route path="/hi/about"><LangRoute lang="hi" Component={About} /></Route>
      <Route path="/hi/contact"><LangRoute lang="hi" Component={Contact} /></Route>
      <Route path="/hi/blog"><LangRoute lang="hi" Component={Blog} /></Route>
      <Route path="/hi/blog/:slug">
        {(params) => <LangRoute lang="hi" Component={BlogPostPage} params={params} />}
      </Route>
      <Route path="/hi/shubh-muhurat-2026"><LangRoute lang="hi" Component={ShubhMuhurat} /></Route>
      <Route path="/hi/book"><LangRoute lang="hi" Component={BookingPage} /></Route>
      <Route path="/hi/bangalore/:area/:service">
        {(params) => <LangRoute lang="hi" Component={LocationPage} params={params} />}
      </Route>
      <Route path="/hi/services/:slug">
        {(params) => <LangRoute lang="hi" Component={ServiceDetail} params={params} />}
      </Route>
      <Route path="/hi/:slug">
        <Redirect to="/hi/services" />
      </Route>

      {/* English Routes */}
      <Route path="/en"><LangRoute lang="en" Component={Home} /></Route>
      <Route path="/en/services"><LangRoute lang="en" Component={Services} /></Route>
      <Route path="/en/about"><LangRoute lang="en" Component={About} /></Route>
      <Route path="/en/contact"><LangRoute lang="en" Component={Contact} /></Route>
      <Route path="/en/blog"><LangRoute lang="en" Component={Blog} /></Route>
      <Route path="/en/blog/:slug">
        {(params) => <LangRoute lang="en" Component={BlogPostPage} params={params} />}
      </Route>
      <Route path="/en/shubh-muhurat-2026"><LangRoute lang="en" Component={ShubhMuhurat} /></Route>
      <Route path="/en/book"><LangRoute lang="en" Component={BookingPage} /></Route>
      <Route path="/en/bangalore/:area/:service">
        {(params) => <LangRoute lang="en" Component={LocationPage} params={params} />}
      </Route>
      <Route path="/en/services/:slug">
        {(params) => <LangRoute lang="en" Component={ServiceDetail} params={params} />}
      </Route>
      <Route path="/en/:slug">
        <Redirect to="/en/services" />
      </Route>

      <Route component={NotFound} />
    </Switch>
      </AnimatedPage>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </HelmetProvider>
  );
}

export default App;
