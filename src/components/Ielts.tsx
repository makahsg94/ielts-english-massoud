import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { skillColors } from "../data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Ielts() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const active = t.ielts.skills[activeIdx];

  return (
    <section id="ielts" className="relative py-24 sm:py-32 lg:py-40 bg-paper-pure border-y border-line-soft" aria-label="IELTS programs">
      <div className="container-x">
        <SectionHeader
          index="№ 02"
          eyebrow={t.ielts.eyebrow}
          title={
            <span>
              {t.ielts.title1}
              <br />
              <em className="squiggle italic">{t.ielts.titleEm}</em>
            </span>
          }
          description={t.ielts.desc}
        />

        {/* Audience strip */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {t.ielts.audience.map((a) => (
              <span
                key={a}
                className="font-mono text-[0.6rem] tracking-widest uppercase px-4 py-2 border border-rust/40 text-rust bg-rust/5"
              >
                {a}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Academic / General */}
        <div className="mt-14 grid md:grid-cols-2 gap-px bg-line border border-line">
          <Reveal className="bg-paper-pure p-8 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.6rem] tracking-widest3 uppercase text-rust">{t.ielts.trackLabel01}</span>
              <span className="display-serif italic text-2xl text-ink/20">{t.ielts.track01Tag}</span>
            </div>
            <h3 className="mt-8 display-serif text-3xl sm:text-4xl text-ink">{t.ielts.track01Title}</h3>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-mute">{t.ielts.track01Desc}</p>
            <p className="mt-6 inline-block font-mono text-[0.6rem] tracking-widest uppercase text-ink-mute">
              {t.ielts.track01Meta}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="bg-paper-pure p-8 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.6rem] tracking-widest3 uppercase text-rust">{t.ielts.trackLabel02}</span>
              <span className="display-serif italic text-2xl text-ink/20">{t.ielts.track02Tag}</span>
            </div>
            <h3 className="mt-8 display-serif text-3xl sm:text-4xl text-ink">{t.ielts.track02Title}</h3>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-mute">{t.ielts.track02Desc}</p>
            <p className="mt-6 inline-block font-mono text-[0.6rem] tracking-widest uppercase text-ink-mute">
              {t.ielts.track02Meta}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Skills exploration */}
      <div className="container-x mt-20 lg:mt-28">
        <Reveal>
          <p className="eyebrow flex items-center gap-4">
            <span className="inline-block h-px w-10 bg-rust/50" aria-hidden="true" />
            {t.ielts.skillsEyebrow}
          </p>
          <h3 className="mt-5 display-serif text-3xl sm:text-4xl lg:text-5xl max-w-2xl text-ink">
            {t.ielts.skillsTitle}
          </h3>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-px bg-line border border-line">
          {/* Skills list */}
          <div className="lg:col-span-7 bg-paper-pure">
            {t.ielts.skills.map((s, i) => {
              const isActive = activeIdx === i;
              const color = colorFor(s.label);
              return (
                <Reveal key={`${s.numeral}-${s.label}`} y={24} delay={i * 0.05}>
                  <button
                    className={`skill-card w-full cursor-grow text-start flex items-center gap-5 sm:gap-8 px-6 sm:px-10 py-7 ${
                      isActive ? "!bg-[rgba(179,69,42,0.05)]" : ""
                    }`}
                    onMouseEnter={() => setActiveIdx(i)}
                    onFocus={() => setActiveIdx(i)}
                    onClick={() => setActiveIdx(i)}
                    aria-pressed={isActive}
                  >
                    <span
                      className="display-serif italic text-3xl sm:text-4xl shrink-0 transition-colors"
                      style={{ color: isActive ? color : "rgba(30,27,22,0.25)" }}
                    >
                      {s.numeral}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`display-serif text-2xl sm:text-3xl transition-colors ${
                          isActive ? "text-ink" : "text-ink-mute"
                        }`}
                      >
                        {s.label}
                      </span>
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            className="block mt-2 text-[0.85rem] leading-relaxed text-ink-mute max-w-xl"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: EASE }}
                          >
                            {s.desc}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                    {isActive && (
                      <span className="hidden sm:flex shrink-0" aria-hidden="true">
                        <span className="wave-bars">
                          <span /><span /><span /><span /><span /><span /><span /><span />
                        </span>
                      </span>
                    )}
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Active skill visual */}
          <div className="lg:col-span-5 bg-paper relative overflow-hidden flex items-center justify-center min-h-[240px] lg:min-h-0 border-t lg:border-s lg:border-t-0 border-line">
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{ background: `radial-gradient(ellipse at center, ${colorFor(active.label)}, transparent 70%)` }}
              aria-hidden="true"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.label}
                className="relative px-10 py-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <SkillShowcase id={skillIdFor(active.label)} color={colorFor(active.label)} label={active.label} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function colorFor(label: string): string {
  return skillColors[skillIdFor(label) as keyof typeof skillColors];
}

function skillIdFor(label: string): string {
  switch (label) {
    case "الاستماع":
    case "Listening":
      return "listening";
    case "القراءة":
    case "Reading":
      return "reading";
    case "الكتابة":
    case "Writing":
      return "writing";
    case "التحدث":
    case "Speaking":
      return "speaking";
    default:
      return "listening";
  }
}

function SkillShowcase({ id, color, label }: { id: string; color: string; label: string }) {
  const reduced = useReducedMotion();
  switch (id) {
    case "listening":
      return (
        <div>
          <WaveformBars color={color} reduced={reduced} />
          <p className="mt-6 display-serif italic text-2xl text-ink/90">{label}</p>
        </div>
      );
    case "reading":
      return (
        <div className="max-w-[260px] text-start" aria-hidden="true">
          <p className="font-sans text-xl font-semibold leading-relaxed" style={{ color }}>
            skimming. scanning.
          </p>
          <p className="mt-2 text-[0.95rem] text-ink-soft leading-relaxed">
            skim. scan. <span className="text-ink-mute italic">infer meaning</span> between the lines&hellip;
          </p>
          <div className="mt-4 h-px w-full bg-line">
            <motion.div
              className="h-full"
              style={{ background: color }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: EASE }}
            />
          </div>
        </div>
      );
    case "writing":
      return (
        <div className="max-w-[280px] text-start" aria-hidden="true">
          <p className="display-serif text-xl text-ink leading-relaxed">
            <span style={{ color }}>A clear thesis</span>
            <span className="block text-ink-mute">a developed argument.</span>
            <span className="inline-block text-ink">a strong conclusion</span>
            <span className="blink-caret ms-1" />
          </p>
        </div>
      );
    case "speaking":
      return (
        <div className="text-center">
          <SpeechWaves color={color} reduced={reduced} />
          <p className="mt-6 display-serif italic text-2xl text-ink/90">{label}</p>
        </div>
      );
    default:
      return null;
  }
}

function WaveformBars({ color, reduced }: { color: string; reduced: boolean }) {
  return (
    <div className="flex items-center justify-center gap-[4px] h-20" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => {
        const h = 12 + ((i * 37) % 52);
        return (
          <motion.span
            key={i}
            className="w-[3px] rounded-full"
            style={{ background: color, height: h }}
            animate={reduced ? {} : { scaleY: [1, 0.35, 1], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1 + (i % 5) * 0.25,
              repeat: Infinity,
              delay: (i % 7) * 0.08,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

function SpeechWaves({ color, reduced }: { color: string; reduced: boolean }) {
  return (
    <div className="relative flex items-center justify-center h-24" aria-hidden="true">
      {[0, 1, 2].map((ring) => (
        <motion.span
          key={ring}
          className="absolute rounded-full border"
          style={{ borderColor: color, opacity: 0.9 - ring * 0.3 }}
          initial={false}
          animate={reduced ? {} : { scale: [0.3, 1.6], opacity: [0.9 - ring * 0.25, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: ring * 0.8, ease: "easeOut" }}
        />
      ))}
      <span className="relative block w-3 h-3 rounded-full" style={{ background: color }} />
    </div>
  );
}