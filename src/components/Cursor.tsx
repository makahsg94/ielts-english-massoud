import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const dot = dotRef.current;
    if (!dot) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    document.body.classList.add("has-cursor");

    let x = 0;
    let y = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const loop = () => {
      const tx = x;
      const ty = y;
      dot.style.left = `${tx}px`;
      dot.style.top = `${ty}px`;
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, [role='button'], input, textarea, .skill-card, .resource-card, .testimonial-card, .cursor-grow");
      dot.classList.toggle("is-hovering", !!target);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor");
    };
  }, [reduced]);

  return <div ref={dotRef} className="custom-cursor" aria-hidden="true" />;
}