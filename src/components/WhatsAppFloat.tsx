import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { contact } from "../data/content";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.04 3C8.925 3 3.12 8.806 3.12 15.92c0 2.28.6 4.5 1.74 6.45L3.12 29l6.81-1.78a12.9 12.9 0 0 0 6.11 1.56h.01c7.11 0 12.92-5.8 12.92-12.92 0-3.45-1.34-6.7-3.78-9.13A12.84 12.84 0 0 0 16.04 3Zm0 23.62h-.01a10.7 10.7 0 0 1-5.46-1.5l-.39-.23-4.03 1.06 1.08-3.93-.26-.4a10.7 10.7 0 0 1-1.64-5.7c0-5.92 4.82-10.74 10.75-10.74 2.87 0 5.57 1.12 7.6 3.15a10.7 10.7 0 0 1 3.15 7.6c0 5.93-4.82 10.7-10.76 10.7Zm5.89-8.03c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.51-.16-.72.16-.22.32-.84 1.05-1.03 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.72 9.72 0 0 1-1.79-2.23c-.19-.32-.02-.49.14-.65.14-.15.32-.38.48-.58.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67 0 1.58 1.14 3.1 1.31 3.32.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.26-.75.26-1.4.19-1.53-.08-.16-.29-.26-.61-.43Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(true);
      return;
    }
    const onScroll = () => setShow(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.waFloat.aria}
      title={t.waFloat.label}
      initial={false}
      animate={reduced ? { opacity: show ? 1 : 0, scale: 1 } : { opacity: show ? 1 : 0, y: show ? 0 : 20, scale: show ? 1 : 0.7 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: show ? "auto" : "none" }}
      className="fixed bottom-5 end-5 z-[120] flex items-center gap-2.5 rounded-full bg-[#25D366] py-3.5 ps-4 pe-4 shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_40px_rgba(37,211,102,0.6)] transition-shadow cursor-grow"
    >
      <WhatsAppIcon className="h-6 w-6 text-white" />
      <span className="text-[0.8rem] font-medium text-white">{t.waFloat.label}</span>
    </motion.a>
  );
}