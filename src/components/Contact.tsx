import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { contact } from "../data/content";

const cardLinks = [
  { href: contact.whatsapp, external: true },
  { href: contact.emailHref, external: false },
  { href: contact.facebook, external: true },
  { href: contact.whatsapp, external: true },
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 sm:py-32 lg:py-40" aria-label="Contact">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <SectionHeader
              index="№ 08"
              eyebrow={t.contact.eyebrow}
              title={
                <span>
                  {t.contact.title1}
                  <br />
                  <em className="squiggle italic">{t.contact.titleEm}</em>
                </span>
              }
              description={t.contact.desc}
            />

            <Reveal delay={0.1}>
              <p className="mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] tracking-widest uppercase text-green bg-green-soft px-4 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" aria-hidden="true" />
                {t.contact.freePlacement}
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {t.contact.cards.map((card, i) => {
                const link = cardLinks[i];
                const Comp = link.href.startsWith("http") ? "a" : "a";
                const props =
                  link.external
                    ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
                    : { href: link.href };
                return (
                  <Reveal key={card.label} delay={i * 0.07}>
                    <Comp
                      {...props}
                      className="group block border border-line bg-paper-pure p-6 hover:border-rust/50 transition-colors duration-500 hover:shadow-[0_16px_40px_rgba(30,27,22,0.06)] cursor-grow"
                    >
                      <p className="font-mono text-[0.55rem] tracking-widest3 uppercase text-rust">{card.label}</p>
                      <p className="mt-3 text-sm text-ink/90 group-hover:text-ink break-words">{card.extra}</p>
                      <p className="mt-1 text-[0.7rem] text-ink-mute">{card.meta}</p>
                    </Comp>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-6 lg:ps-8">
            <Reveal>
              <form
                className="border border-line bg-paper-pure p-8 sm:p-10"
                name="contact"
                method="POST"
                action={contact.emailHref}
                aria-label="Contact Massoud"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="field-group">
                    <label htmlFor="name" className="label-caps block mb-3">
                      {t.contact.form.name}
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder={t.contact.form.namePh}
                      className="w-full bg-transparent border-b border-line px-0 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint focus:border-rust transition-colors outline-none"
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="contact-email" className="label-caps block mb-3">
                      {t.contact.form.email}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder={t.contact.form.emailPh}
                      className="w-full bg-transparent border-b border-line px-0 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint focus:border-rust transition-colors outline-none"
                    />
                  </div>
                </div>

                <div className="mt-6 field-group">
                  <label htmlFor="goal" className="label-caps block mb-3">
                    {t.contact.form.goal}
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    className="w-full bg-paper border border-line px-4 py-3.5 text-[0.95rem] text-ink focus:border-rust transition-colors outline-none"
                  >
                    {Object.entries(t.contact.form.goals).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6 field-group">
                  <label htmlFor="message" className="label-caps block mb-3">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t.contact.form.messagePh}
                    className="w-full bg-transparent border-b border-line px-0 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint focus:border-rust transition-colors outline-none resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary mt-8 w-full cursor-grow">
                  {t.contact.form.submit}
                </button>
                <p className="mt-4 text-[0.7rem] text-center text-ink-mute">{t.contact.form.note}</p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}