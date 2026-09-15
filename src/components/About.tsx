import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { useLanguage } from "../i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import massoudImg from "../assets/images/massoud.jpg";

export function About() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : -30, reduced ? 0 : 30]);

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32 lg:py-40" aria-label="About Massoud">
      <div className="container-x">
        <SectionHeader
          index="№ 01"
          eyebrow={t.about.eyebrow}
          title={
            <span>
              {t.about.title1}
              <br />
              <em className="squiggle italic">{t.about.title2}</em>
            </span>
          }
        />

        <div className="mt-16 lg:mt-24 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Photo column */}
          <div className="lg:col-span-5 relative">
            <Reveal className="relative">
              <div className="relative">
                {/* Editorial frame */}
                <div
                  className="absolute -inset-3 border border-line translate-x-4 translate-y-4 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute -top-4 -start-4 w-14 h-14 border-t-2 border-s-2 border-rust pointer-events-none" aria-hidden="true" />
                <motion.div style={{ y: imgY }} className="relative">
                  <div className="overflow-hidden lg:aspect-[4/5] aspect-[4/5] bg-paper-lift">
                    <img
                      src={massoudImg}
                      alt={t.about.eyebrow}
                      className="h-full w-full object-cover img-reveal-inner"
                      loading="lazy"
                      width="800"
                      height="1000"
                    />
                  </div>
                </motion.div>
                <div className="absolute bottom-5 start-5 end-5 flex items-center justify-between bg-paper-pure/90 border border-line-soft px-5 py-4 backdrop-blur-sm">
                  <div>
                    <p className="font-mono text-[0.55rem] tracking-widest3 uppercase text-ink-mute">
                      {t.about.photoRole}
                    </p>
                    <p className="display-serif text-2xl mt-1 text-ink">{lang === "ar" ? "مسعود" : "Massoud"}</p>
                  </div>
                  <span className="font-mono text-[0.55rem] text-rust tracking-widest uppercase">{t.about.photoTag}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Story column */}
          <div className="lg:col-span-7 lg:ps-8">
            <Reveal>
              <p className="display-serif text-2xl sm:text-3xl leading-snug text-ink/90">
                &ldquo;{t.about.quote}{" "}
                <em className="text-rust">{t.about.quoteEm}</em>&rdquo;
              </p>
            </Reveal>

            <div className="mt-8 space-y-5 text-[0.95rem] sm:text-base leading-relaxed text-ink-mute max-w-2xl">
              <Reveal delay={0.1}>
                <p>{t.about.p1}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>{t.about.p2}</p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>{t.about.p3}</p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-px bg-line border border-line">
              {t.about.facts.map((f, i) => (
                <Reveal key={f.label} delay={0.05 * i} className="bg-paper-pure p-5 sm:p-6">
                  <p className="font-mono text-[0.55rem] tracking-widest3 uppercase text-ink-mute">{f.label}</p>
                  <p className="mt-2 display-serif text-xl sm:text-2xl text-ink">{f.value}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <a href="#contact" className="btn-ghost mt-10 cursor-grow">
                {t.about.cta}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}