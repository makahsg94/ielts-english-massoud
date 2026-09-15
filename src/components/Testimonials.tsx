import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { useLanguage } from "../i18n/LanguageContext";
import { media } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const items = t.testimonials.items;
  const item = items[active];

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 border-y border-line-soft" aria-label="Student testimonials">
      <div className="container-x">
        <SectionHeader
          index="№ 06"
          eyebrow={t.testimonials.eyebrow}
          title={
            <span>
              {t.testimonials.title1}
              <br />
              <em className="squiggle italic">{t.testimonials.titleEm}</em>
            </span>
          }
        />

        <div className="mt-16 lg:mt-24 grid lg:grid-cols-12 gap-10 items-start">
          {/* Quotes */}
          <div className="lg:col-span-8">
            <div className="border-s-2 border-rust/60 ps-6 sm:ps-10">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <span className="display-serif text-6xl text-rust/40 leading-none block" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className="display-serif text-2xl sm:text-3xl lg:text-4xl leading-snug text-ink -mt-4">
                    {item.quote}
                  </p>
                  <footer className="mt-8 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <cite className="not-italic font-sans text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-ink-mute">
                      — {item.name}
                    </cite>
                    <span className="hidden sm:block h-px w-10 bg-line" aria-hidden="true" />
                    <span className="font-mono text-[0.65rem] tracking-widest uppercase text-rust">
                      IELTS {item.score}
                    </span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center gap-4" role="tablist" aria-label="Testimonials">
              {items.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`cursor-grow w-3 h-3 rotate-45 border transition-all duration-400 ${
                    active === i ? "bg-rust border-rust" : "border-ink-mute hover:border-rust"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Real reviews + note */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-line bg-paper-pure p-8">
              <p className="font-mono text-[0.6rem] tracking-widest3 uppercase text-rust">
                {t.testimonials.realReviewsTitle}
              </p>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-ink-mute">{t.testimonials.realReviewsBody}</p>
              <a
                href={media.studentReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-6 w-full !text-[0.7rem] cursor-grow"
              >
                {t.testimonials.realReviewsCta}
              </a>
            </div>

            <div className="border border-line bg-paper-pure p-8">
              <p className="font-mono text-[0.6rem] tracking-widest3 uppercase text-rust">
                {t.testimonials.noteTitle}
              </p>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-ink-mute italic">{t.testimonials.noteBody}</p>
            </div>

            <a
              href={media.introLecture}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 border border-rust/40 bg-rust/5 p-6 cursor-zoom-in"
            >
              <span className="text-start">
                <span className="block font-mono text-[0.6rem] tracking-widest uppercase text-rust">
                  {t.testimonials.introLectureCta}
                </span>
                <span className="block mt-1.5 display-serif text-lg text-ink group-hover:text-rust transition-colors">
                  {t.testimonials.introLectureTitle}
                </span>
              </span>
              <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-rust/50 text-rust">
                ▶
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}