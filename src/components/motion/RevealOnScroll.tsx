import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, mm } from "../../lib/gsap";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay between direct children, in seconds. Cap effective count at ~8. */
  stagger?: number;
  y?: number;
  as?: "div" | "section" | "ul" | "ol";
}

/**
 * Fades + rises direct children into view on scroll. Used for grids, lists,
 * and card rows across every page so entrance motion feels identical
 * everywhere it appears.
 */
export function RevealOnScroll({
  children,
  className,
  stagger = 0.08,
  y = 28,
  as = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = Array.from(ref.current.children).slice(0, 8);
      if (targets.length === 0) return;

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(targets, { opacity: 0, y });
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            // One-time entrance reveal — no "reverse" leaveBack action. A
            // ScrollTrigger.refresh() after fonts/layout settle recalculates
            // trigger bounds, and if that shifts the geometry enough, a
            // "reverse" action here would re-hide content that already
            // correctly played in.
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(targets, { opacity: 1, y: 0 });
      });
    },
    { scope: ref }
  );

  const Component = as;
  return (
    <Component ref={ref as never} className={className}>
      {children}
    </Component>
  );
}
