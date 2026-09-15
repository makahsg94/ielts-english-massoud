import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { useLanguage } from "../i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Method() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const stage = t.method.stages[active];

  return (
    <section id="method" className="relative py-24 sm:py-32 lg:py-40 bg-paper-lift/60 border-y border-line-soft" aria-label="Teaching method">
      <div className="container-x">
        <SectionHeader
          index="№ 03"
          eyebrow={t.method.eyebrow}
          title={
            <span>
              {t.method.title1}
              <br />
              <em className="squiggle italic">{t.method.titleEm}</em>
            </span>
          }
          description={t.method.desc}
        />

        <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-12 gap-12">
          {/* Stage rail */}
          <div className="lg:col-span-5 relative">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0" role="tablist" aria-label="Method stages">
              {t.method.stages.map((s, i) => (
                <button
                  key={s.index}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`method-panel-${i}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`method-stage cursor-grow group flex items-center gap-5 px-4 sm:px-6 py-6 text-start border border-line whitespace-nowrap lg:whitespace-normal transition-colors ${
                    active === i ? "bg-paper-pure border-rust/50 shadow-[0_10px_40px_rgba(30,27,22,0.06)]" : "bg-transparent hover:bg-paper-pure/60"
                  }`}
                >
                  <span
                    className={`stage-number font-mono text-sm tracking-widest ${
                      active === i ? "text-rust" : "text-ink-mute"
                    }`}
                  >
                    {s.index}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span
                      className={`display-serif text-xl sm:text-2xl block ${
                        active === i ? "text-ink" : "text-ink-mute"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className="stage-rule block h-0.5 w-full bg-rust mt-2" aria-hidden="true" />
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Stage detail */}
          <div className="lg:col-span-7 mt-10 lg:mt-0">
            <div
              className="relative border border-line bg-paper-pure p-8 sm:p-12 lg:p-16 min-h-[320px] flex flex-col justify-center overflow-hidden"
              id={`method-panel-${active}`}
              role="tabpanel"
            >
              <div
                className="absolute -end-10 -top-14 font-display text-[15rem] leading-none text-ink/[0.04] select-none pointer-events-none"
                aria-hidden="true"
              >
                {stage.index}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduced ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <p className="font-mono text-[0.6rem] tracking-widest3 uppercase text-rust">
                    {t.method.panelOf.replace("{n}", stage.index)}
                  </p>
                  <h3 className="mt-4 display-serif text-4xl sm:text-5xl text-ink">{stage.title}</h3>
                  <div className="mt-6 h-0.5 w-24 bg-rust/50" aria-hidden="true" />
                  <p className="mt-6 max-w-xl text-[0.95rem] sm:text-base leading-relaxed text-ink-mute">
                    {stage.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}