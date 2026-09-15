import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import resultsImg1 from "../assets/images/results-1.jpg";
import resultsImg2 from "../assets/images/results-2.jpg";
import resultsImg5 from "../assets/images/results-5.jpg";
import resultsImg7 from "../assets/images/results-7.jpg";

const resultImages = [resultsImg1, resultsImg2, resultsImg5, resultsImg7];

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

        {/* Screenshot strip — real student reports */}
        <div className="mt-16 lg:mt-24">
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