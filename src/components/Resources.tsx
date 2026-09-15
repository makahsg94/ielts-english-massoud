import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function Resources() {
  const { t } = useLanguage();

  return (
    <section id="resources" className="relative py-24 sm:py-32 lg:py-40 bg-paper-lift/60 border-b border-line-soft" aria-label="Resources">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
            index="№ 07"
            eyebrow={t.resources.eyebrow}
            title={
              <span>
                {t.resources.title1}
                <br />
                <em className="squiggle italic">{t.resources.titleEm}</em>
              </span>
            }
          />
          <Reveal delay={0.1}>
            <p className="font-mono text-[0.6rem] tracking-widest uppercase text-ink-mute">{t.resources.sub}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {t.resources.items.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08}>
              <article className="resource-card group bg-paper-pure p-8 sm:p-10 h-full flex flex-col cursor-grow hover:bg-paper transitions-colors duration-500 border-b border-line-soft">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[0.55rem] tracking-widest3 uppercase text-rust">{r.category}</span>
                  <span className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-mute">{r.readTime}</span>
                </div>
                <h3 className="mt-6 display-serif text-xl sm:text-2xl leading-snug text-ink group-hover:text-rust transition-colors">
                  {r.title}
                </h3>
                <p className="mt-4 text-[0.88rem] leading-relaxed text-ink-mute">{r.excerpt}</p>
                <div className="mt-auto pt-8 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-rust">
                  {t.resources.readCta}
                  <span className="h-px w-8 bg-rust/40 transition-all duration-500 group-hover:w-14" aria-hidden="true" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center font-mono text-[0.6rem] tracking-widest uppercase text-ink-mute">
            {t.resources.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}