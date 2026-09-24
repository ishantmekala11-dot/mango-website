import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, mm } from "../../lib/gsap";

interface PinnedSequenceProps {
  /** One child per stage/step; horizontal mode translates them in sequence. */
  children: ReactNode[];
  className?: string;
  direction?: "horizontal" | "vertical";
  /** Extra scroll distance per step, in viewport heights. */
  scrubPerStep?: number;
}

/**
 * Pins the section and scrubs through its children as the user scrolls.
 * Reserved for 1–2 sections per page (Model UN stages, Impact timeline) —
 * not a general-purpose layout tool.
 */
export function PinnedSequence({
  children,
  className,
  direction = "horizontal",
  scrubPerStep = 1,
}: PinnedSequenceProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const count = children.length;

  useGSAP(
    () => {
      if (!wrapperRef.current || !trackRef.current) return;

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current!;
        const distance =
          direction === "horizontal"
            ? track.scrollWidth - window.innerWidth
            : track.scrollHeight - window.innerHeight;

        gsap.to(track, {
          [direction === "horizontal" ? "x" : "y"]: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: () => `+=${distance || count * scrubPerStep * 800}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: wrapperRef, dependencies: [direction, count] }
  );

  return (
    <div ref={wrapperRef} className={className}>
      <div
        ref={trackRef}
        className={
          direction === "horizontal"
            ? "flex h-full will-change-transform motion-reduce:flex-col motion-reduce:h-auto"
            : "flex flex-col will-change-transform"
        }
      >
        {children}
      </div>
    </div>
  );
}
