import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { useLanguage } from "../i18n/LanguageContext";
import { media } from "../data/content";

export function Testimonials() {
  const { t } = useLanguage();

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

        <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-6 sm:gap-8">
          <Reveal>
            <div className="relative h-full border border-line bg-paper-pure p-8 sm:p-10 overflow-hidden">
              <span className="absolute top-6 end-8 font-display text-8xl leading-none text-rust/15 select-none" aria-hidden="true">
                &ldquo;
              </span>
              <p className="font-mono text-[0.6rem] tracking-widest3 uppercase text-rust">{t.testimonials.realReviewsTitle}</p>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink-mute">{t.testimonials.realReviewsBody}</p>
              <a
                href={media.studentReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-8 !text-[0.7rem] cursor-grow"
              >
                {t.testimonials.realReviewsCta}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={media.introLecture}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col justify-end border border-rust/40 bg-rust/5 p-8 sm:p-10 overflow-hidden cursor-zoom-in"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-rust/50 text-rust transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
                ▶
              </span>
              <span className="block mt-8 font-mono text-[0.6rem] tracking-widest uppercase text-rust">{t.testimonials.introLectureCta}</span>
              <span className="block mt-2 display-serif text-2xl sm:text-3xl text-ink group-hover:text-rust transition-colors">
                {t.testimonials.introLectureTitle}
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}