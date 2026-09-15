import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function Programs() {
  const { t } = useLanguage();

  return (
    <section id="programs" className="relative py-24 sm:py-32 lg:py-40" aria-label="Programs">
      <div className="container-x">
        <SectionHeader
          index="№ 04"
          eyebrow={t.programs.eyebrow}
          title={
            <span>
              {t.programs.title1}
              <br />
              <em className="squiggle italic">{t.programs.titleEm}</em>
            </span>
          }
          description={t.programs.desc}
        />

        <div className="mt-16 lg:mt-24 grid md:grid-cols-2 gap-6">
          {t.programs.items.map((p, i) => (
            <Reveal key={p.index} delay={(i % 2) * 0.1}>
              <article className="group relative border border-line bg-paper-pure p-8 sm:p-10 h-full flex flex-col hover:border-rust/40 transition-colors duration-500 hover:shadow-[0_24px_60px_rgba(30,27,22,0.07)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[0.6rem] tracking-widest3 uppercase text-rust">{p.index}</span>
                  <span className="flex gap-2 flex-wrap justify-end">
                    {p.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[0.55rem] tracking-widest uppercase px-3 py-1 border border-line text-ink-mute">
                        {tag}
                      </span>
                    ))}
                  </span>
                </div>

                <h3 className="mt-8 display-serif text-3xl sm:text-4xl text-ink group-hover:text-rust transition-colors">
                  {p.name}
                </h3>

                <p className="mt-4 text-[0.9rem] leading-relaxed text-ink-mute">
                  <span className="text-ink font-semibold">{t.programs.forLabel}: </span>
                  {p.for}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {p.learn.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.9rem] text-ink-mute">
                      <span className="mt-[9px] h-px w-4 bg-rust/50 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-line-soft grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-mono text-[0.55rem] tracking-widest3 uppercase text-ink-mute">{t.programs.durationLabel}</p>
                    <p className="mt-1.5 text-sm text-ink/90">{p.duration}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.55rem] tracking-widest3 uppercase text-ink-mute">{t.programs.formatLabel}</p>
                    <p className="mt-1.5 text-sm text-ink/90">{p.delivery}</p>
                  </div>
                </div>

                <p className="mt-5 text-[0.85rem] italic text-ink-mute">
                  <span className="text-rust not-italic font-semibold text-[0.7rem] tracking-widest uppercase">{t.programs.outcomeLabel} · </span>
                  {p.outcome}
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-rust group/cta"
                >
                  {t.programs.cta}
                  <span className="h-px w-10 bg-rust/40 transition-all duration-500 group-hover/cta:w-16" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center font-mono text-[0.62rem] tracking-widest uppercase text-ink-mute max-w-xl mx-auto leading-relaxed">
            {t.programs.noteOffer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}