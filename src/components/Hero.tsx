import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { t, isRTL } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden rule-grid"
      aria-label="Introduction"
    >
      {/* Background washes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-24 end-[-10%] h-[480px] w-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(179,69,42,0.10), transparent 65%)" }}
        />
        <div
          className="absolute bottom-[-12%] start-[-8%] h-[520px] w-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(31,90,74,0.09), transparent 65%)" }}
        />
        {/* watermark */}
        <span className="absolute -bottom-[14%] end-[2%] font-display text-[38vw] leading-none text-ink/[0.035] select-none">
          M
        </span>
      </div>

      {/* vertical side label */}
      <div className="hidden lg:block absolute start-8 top-1/2 -translate-y-1/2 z-10" aria-hidden="true">
        <span className="vertical-label font-mono text-[0.55rem] tracking-widest3 text-ink-mute uppercase">
          {t.hero.side}
        </span>
      </div>

      {/* scroll cue */}
      <div className="hidden md:flex absolute end-10 bottom-8 z-10 items-center gap-3" aria-hidden="true">
        <span className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-mute">{t.hero.scroll}</span>
        <span className="block h-px w-16 bg-line relative overflow-hidden">
          <motion.span
            className="absolute inset-y-0 start-0 w-1/2 bg-rust"
            animate={reduced ? {} : isRTL ? { x: ["100%", "-150%"] } : { x: ["-100%", "150%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: yHeadline, opacity }}
        className="relative z-10 flex-1 container-x flex flex-col justify-center pt-32 pb-20 md:pt-40"
      >
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="eyebrow flex items-center gap-4"
        >
          <span className="inline-block h-px w-10 bg-rust/50" aria-hidden="true" />
          {t.hero.eyebrow}
        </motion.p>

        <h1 className="mt-8 display-serif text-[clamp(2.5rem,8vw,7rem)]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={reduced ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
            >
              {t.hero.line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block italic text-ink-soft"
              initial={reduced ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
            >
              {t.hero.line2}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={reduced ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.6 }}
            >
              {t.hero.line3a} <em className="squiggle not-italic">{t.hero.line3em}</em>
              {t.hero.line3b}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          className="mt-8 max-w-xl text-[0.95rem] sm:text-lg leading-relaxed text-ink-mute"
        >
          {t.hero.support}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="btn-primary cursor-grow">
            {t.hero.cta1}
          </a>
          <a href="#ielts" className="btn-ghost cursor-grow">
            {t.hero.cta2}
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="relative z-10 border-y border-line bg-paper-pure/60 py-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="marquee-track py-4">
          {[0, 1, 2].map((dup) => (
            <div key={dup} className="flex items-center gap-8 ps-8 shrink-0">
              {t.hero.marquee.map((item) => (
                <span key={`${dup}-${item}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="display-serif italic text-lg text-ink/60">{item}</span>
                  <span className="text-rust/60 text-[0.7rem]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}