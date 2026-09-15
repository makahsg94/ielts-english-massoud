import { useLanguage } from "../i18n/LanguageContext";
import { contact } from "../data/content";

export function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line-soft bg-paper-pure/60 pt-16 pb-10" aria-label="Footer">
      <div className="container-x">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <a href="#home" className="display-serif text-2xl text-ink">
              {lang === "ar" ? "مسعود" : "Massoud"}
              <span className="text-rust">.</span>
            </a>
            <p className="mt-4 text-[0.82rem] leading-relaxed text-ink-mute max-w-xs">{t.footer.blurb}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="label-caps">{t.footer.explore}</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {t.nav.links.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-[0.82rem] text-ink-mute hover:text-rust transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label-caps">{t.footer.contactLabel}</p>
            <ul className="mt-4 space-y-2.5 text-[0.82rem]">
              <li>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-ink-mute hover:text-rust transition-colors break-all">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className="text-ink-mute hover:text-rust transition-colors break-all">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="text-ink-mute hover:text-rust transition-colors">
                  {t.contact.cards[2].label}
                </a>
              </li>
            </ul>
            <p className="mt-4 font-mono text-[0.55rem] tracking-widest3 uppercase text-ink-mute">
              {t.hero.side}
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.7rem] text-ink-mute">
            © {year} {t.footer.brand}. {t.footer.rights}
          </p>
          <p className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-mute">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}