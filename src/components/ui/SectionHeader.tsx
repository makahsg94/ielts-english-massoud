import type { ReactNode } from "react";
import { Reveal, MaskedLine } from "./Reveal";

interface SectionHeaderProps {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ index, eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-start";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <Reveal>
        <p className="eyebrow flex items-center gap-4">
          {index && <span className="font-mono text-rust/70">{index}</span>}
          <span className="inline-block h-px w-10 bg-rust/40" aria-hidden="true" />
          {eyebrow}
        </p>
      </Reveal>

      <h2 className="mt-6 display-serif text-4xl sm:text-5xl lg:text-6xl text-ink">
        {typeof title === "string" ? (
          <MaskedLine>
            <p>{title}</p>
          </MaskedLine>
        ) : (
          title
        )}
      </h2>

      {description && (
        <Reveal delay={0.15}>
          <p className="mt-6 text-[0.95rem] sm:text-base leading-relaxed text-ink-mute">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}