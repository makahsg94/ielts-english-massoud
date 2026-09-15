import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Magnetic } from "./ui/Magnetic";
import { contact } from "../data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CTA() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 90, reduced ? 0 : -90]);

  return (
    <section
      ref={ref}
      id="cta"
      className="relative py-32 sm:py-44 overflow-hidden border-b border-line-soft"
      aria-label="Call to action"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(179,69,42,0.10), transparent 65%), radial-gradient(ellipse 50% 40% at 85% 0%, rgba(31,90,74,0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(179,69,42,0.5), transparent)" }}
        aria-hidden="true"
      />

      <motion.div style={{ y: yText }} className="container-x relative text-center">
        <p className="eyebrow justify-center">{t.cta.eyebrow}</p>

        <h2 className="mx-auto mt-8 display-serif text-[clamp(2.4rem,7vw,6rem)] leading-[1.06] text-ink">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={reduced ? false : { y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: EASE }}
            >
              {t.cta.line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block italic text-ink-soft"
              initial={reduced ? false : { y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            >
              {t.cta.line2}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={reduced ? false : { y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            >
              <em className="squiggle italic">{t.cta.lineEm}</em>
              {t.cta.line3 ?? ""}
            </motion.span>
          </span>
        </h2>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
          className="mt-8 text-[0.95rem] sm:text-lg text-ink-mute"
        >
          {t.cta.sub}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Magnetic>
            <a href="#contact" className="btn-primary cursor-grow">
              {t.cta.cta1}
            </a>
          </Magnetic>
          <a href={contact.emailHref} className="btn-ghost cursor-grow">
            {t.cta.cta2}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}