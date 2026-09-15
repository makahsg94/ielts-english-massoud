import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({ children, delay = 0, y = 36, className, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface MaskedLineProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function MaskedLine({ children, delay = 0, className }: MaskedLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={reduced ? false : { y: "110%" }}
        animate={inView ? { y: "0%" } : { y: "110%" }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}