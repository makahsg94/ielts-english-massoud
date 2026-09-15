import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Ielts } from "./components/Ielts";
import { Method } from "./components/Method";
import { Results } from "./components/Results";
import { Programs } from "./components/Programs";
import { EnglishTest } from "./components/EnglishTest";
import { Testimonials } from "./components/Testimonials";
import { Resources } from "./components/Resources";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";
import { GrainOverlay } from "./components/GrainOverlay";
import { ScrollProgress } from "./components/ScrollProgress";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[999] focus:bg-ink focus:text-paper focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Cursor />
      <GrainOverlay />
      <ScrollProgress />
      <WhatsAppFloat />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Ielts />
        <Method />
        <Programs />
        <Results />
        <Testimonials />
        <EnglishTest />
        <Resources />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}