import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, mm, SplitText } from "../../lib/gsap";

interface SplitHeadlineProps {
  children: string;
  className?: string;
  /** Split by word (default, safer for wrapping) or char (short headlines only, <8 words). */
  by?: "word" | "char";
  as?: "h1" | "h2" | "h3" | "p";
  /** Trigger immediately (hero) instead of waiting for scroll into view. */
  immediate?: boolean;
}

export function SplitHeadline({
  children,
  className,
  by = "word",
  as = "h2",
  immediate = false,
}: SplitHeadlineProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(ref.current, {
          type: by === "char" ? "chars,words" : "words",
          mask: by === "char" ? "chars" : "words",
        });
        const targets = by === "char" ? split.chars : split.words;

        gsap.set(targets, { yPercent: 110 });
        gsap.to(targets, {
          yPercent: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.025,
          ...(immediate
            ? { delay: 0.1 }
            : {
                scrollTrigger: {
                  trigger: ref.current,
                  start: "top 85%",
                  // One-time reveal: see RevealOnScroll for why this isn't "reverse".
                  toggleActions: "play none none none",
                  once: true,
                },
              }),
        });

        return () => split.revert();
      });
    },
    { scope: ref, dependencies: [children] }
  );

  const Component = as;
  return (
    <Component ref={ref as never} className={className}>
      {children}
    </Component>
  );
}
