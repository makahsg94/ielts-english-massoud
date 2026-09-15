import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import resultsImg1 from "../assets/images/results-1.jpg";
import resultsImg2 from "../assets/images/results-2.jpg";
import resultsImg5 from "../assets/images/results-5.jpg";
import resultsImg7 from "../assets/images/results-7.jpg";

const resultImages = [resultsImg1, resultsImg2, resultsImg5, resultsImg7];

function CountUp({ value, duration = 1.6 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduced) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduced]);

  return <span ref={ref}>{display}</span>;
}

function BandDisplay({ band }: { band: string }) {
  const [whole, decimal] = band.split(".");
  return (
    <p className="mt-2">
      <span className="display-serif text-5xl sm:text-6xl lg:text-5xl text-rust">
        <CountUp value={parseInt(whole, 10)} />
      </span>
      <span className="text-rust font-display text-xl align-top">.{decimal}</span>
    </p>
  );
}

export function Results() {
  const { t } = useLanguage();

  return (
    <section id="results" className="relative py-24 sm:py-32 lg:py-40 bg-paper-lift/60 border-y border-line-soft" aria-label="Student results">
      <div className="container-x">
        <SectionHeader
          index="№ 05"
          eyebrow={t.results.eyebrow}
          title={
            <span>
              {t.results.title1}
              <br />
              <em className="squiggle italic">{t.results.titleEm}</em>
            </span>
          }
          description={t.results.desc}
        />

        {/* Score band large numbers */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {t.results.items.map((r) => (
            <div key={r.skill} className="bg-paper-pure p-8 sm:p-10 text-center relative overflow-hidden">
              <ScoreRing score={parseFloat(r.band)} active />
              <BandDisplay band={r.band} />
              <p className="mt-3 font-mono text-[0.6rem] tracking-widest3 uppercase text-ink-mute">{r.skill}</p>
              <p className="mt-4 text-[0.7rem] leading-relaxed text-ink-mute italic">{r.note}</p>
              <span className="sr-only">{`${r.skill}: band ${r.band}`}</span>
            </div>
          ))}
        </div>

        {/* Screenshot strip */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <p className="label-caps">{t.results.galleryLabel}</p>
              <p className="font-mono text-[0.6rem] tracking-widest uppercase text-ink-mute">{t.results.gallerySub}</p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {resultImages.map((src, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="img-reveal overflow-hidden relative group border border-line-soft">
                  <div className="aspect-[3/4] overflow-hidden bg-paper-lift">
                    <img
                      src={src}
                      alt={`${t.results.gallerySub} ${i + 1}`}
                      className="h-full w-full object-cover img-reveal-inner"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-ink/70 to-transparent text-start">
                    <span className="font-mono text-[0.55rem] tracking-widest uppercase text-paper/90">
                      {t.results.reportCaption.replace("{n}", String(i + 1).padStart(2, "0"))}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreRing({ score, active }: { score: number; active?: boolean }) {
  const { t } = useLanguage();
  const circ = 2 * Math.PI * 40;
  const pct = Math.min(score / 9, 1);

  return (
    <div className="relative mx-auto h-[96px] w-[96px]" aria-hidden="true">
      <svg viewBox="0 0 96 96" className="score-ring h-full w-full">
        <circle className="track" cx="48" cy="48" r="40" />
        <circle className="fill" cx="48" cy="48" r="40" strokeDashoffset={active ? circ * (1 - pct) : circ} />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-mono text-[0.55rem] tracking-widest uppercase text-ink-mute">
        {t.results.over9}
      </span>
    </div>
  );
}