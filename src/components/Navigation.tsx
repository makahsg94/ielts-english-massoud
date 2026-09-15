import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { Magnetic } from "./ui/Magnetic";

export function Navigation() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = t.nav.links.map((n) => n.href.slice(1));
      let current = "#home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = `#${id}`;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [t.nav.links]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line-soft" : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between py-5">
          <a href="#home" className="flex items-center gap-3 group" aria-label="IELTS and English with Massoud — home">
            <span className="display-serif text-2xl text-ink group-hover:text-rust transition-colors">
              {lang === "ar" ? "مسعود" : "Massoud"}
              <span className="text-rust">.</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-[0.55rem] tracking-widest3 text-ink-mute uppercase leading-none mt-0.5 rtl:hidden ltr:inline-block">
              IELTS · English
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {t.nav.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active === item.href ? "is-active text-rust" : "text-ink-mute hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="font-mono text-[0.65rem] tracking-widest uppercase px-3.5 py-2 border border-line text-ink-soft hover:border-rust hover:text-rust transition-colors cursor-grow"
              aria-label={t.nav.switchTo}
            >
              {t.nav.switchTo}
            </button>
            <Magnetic>
              <a href="#contact" className="btn-primary !py-3 !px-6 text-[0.7rem]">
                {t.nav.cta}
              </a>
            </Magnetic>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="font-mono text-[0.6rem] tracking-widest uppercase px-3 py-2 border border-line text-ink-soft cursor-grow"
              aria-label={t.nav.switchTo}
            >
              {t.nav.switchTo}
            </button>
            <button
              className="relative z-[120] flex flex-col gap-[6px] p-2 cursor-grow"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-[1.5px] w-7 bg-ink transition-all duration-300 ${
                  open ? "translate-y-[7.5px] rotate-45 bg-rust" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-7 bg-ink transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[1.5px] w-7 bg-ink transition-all duration-300 ${
                  open ? "-translate-y-[7.5px] -rotate-45 bg-rust" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[110] bg-paper flex flex-col justify-between lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-x pt-24 pb-10 flex flex-col h-full">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {t.nav.links.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3 border-b border-line-soft"
                    initial={{ opacity: 0, x: lang === "ar" ? 24 : -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="font-mono text-[0.6rem] text-rust/60">0{i + 1}</span>
                    <span className="display-serif text-3xl sm:text-4xl text-ink group-hover:text-rust transition-colors">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="mt-auto pt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  {t.nav.cta}
                </a>
                <p className="mt-6 text-[0.7rem] text-ink-mute tracking-widest uppercase text-center">
                  {t.footer.brand}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}