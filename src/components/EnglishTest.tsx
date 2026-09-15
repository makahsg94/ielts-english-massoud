import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./ui/Reveal";
import { useReducedMotion } from "../hooks/useReducedMotion";

const EASE = [0.16, 1, 0.3, 1] as const;

type Match = "foundation" | "general" | "ielts" | "speaking";

export function EnglishTest() {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [, setAnswers] = useState<Match[]>([]);
  const [done, setDone] = useState(false);
  const [result, setResult] = useState<Match>("general");
  const reduced = useReducedMotion();

  const questions = t.test.questions;
  const q = questions[step];
  const progress = (step / questions.length) * 100;

  const choose = (match: Match) => {
    const counts: Record<Match, number> = { foundation: 0, general: 0, ielts: 0, speaking: 0 };
    counts[match] += 1;
    const nextStep = step + 1;
    if (nextStep >= questions.length) {
      const winner = (Object.keys(counts) as Match[]).reduce((a, b) => (counts[a] >= counts[b] ? a : b));
      setResult(winner);
      setDone(true);
    } else {
      setStep(nextStep);
    }
    setAnswers((prev) => [...prev, match]);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  const profile = t.test.profiles[result];

  return (
    <section id="test" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" aria-label="Test your English">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(179,69,42,0.06), transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow justify-center">{t.test.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 display-serif text-4xl sm:text-5xl lg:text-6xl text-ink">
              {t.test.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-[0.95rem] sm:text-base leading-relaxed text-ink-mute max-w-xl mx-auto">
              {t.test.desc}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={`${step}-${q.question}`}
                initial={reduced ? false : { opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                {/* Progress */}
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[0.6rem] tracking-widest uppercase text-rust">
                    {`0${step + 1} / 0${questions.length}`}
                  </span>
                  <div className="flex-1 h-[2px] bg-line relative overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 start-0 bg-rust"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  </div>
                </div>

                <h3 className="mt-8 display-serif text-2xl sm:text-3xl text-ink text-start">{q.question}</h3>

                <div className="mt-8 space-y-3" role="group" aria-label={q.question}>
                  {q.options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => choose(opt.result as Match)}
                      className="w-full cursor-grow text-start border border-line px-6 py-4 bg-paper-pure hover:border-rust/50 hover:bg-rust/5 transition-all duration-300 group"
                    >
                      <span className="flex items-center gap-4 text-[0.9rem] text-ink-mute group-hover:text-ink transition-colors">
                        <span className="h-1.5 w-1.5 rotate-45 border border-rust/60 shrink-0 group-hover:bg-rust transition-colors" aria-hidden="true" />
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="relative border border-rust/30 bg-paper-pure p-8 sm:p-12 text-center overflow-hidden"
              >
                <div
                  className="absolute -top-10 -start-10 w-40 h-40 border-t-2 border-s-2 border-rust/30 pointer-events-none"
                  aria-hidden="true"
                />
                <p className="relative font-mono text-[0.6rem] tracking-widest3 uppercase text-rust">
                  {t.test.resultLabel}
                </p>
                <h3 className="relative mt-4 display-serif text-3xl sm:text-4xl text-ink">{profile.title}</h3>
                <p className="relative mt-6 text-[0.95rem] leading-relaxed text-ink-mute max-w-md mx-auto">
                  {profile.body}
                </p>
                <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="#contact" className="btn-primary cursor-grow">
                    {profile.cta}
                  </a>
                  <button onClick={reset} className="btn-ghost cursor-grow">
                    {t.test.retake}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}