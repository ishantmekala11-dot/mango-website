import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

/** Custom cursor dot with trailing ring. Skipped entirely on touch devices and reduced motion. */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || reducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const ringPos = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      gsap.to(ringPos, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power2.out",
        onUpdate: () => gsap.set(ring, { x: ringPos.x, y: ringPos.y }),
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (
    typeof window !== "undefined" &&
    (window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  ) {
    return null;
  }

  return (
    <div className="hidden lg:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[var(--color-cobalt-bright)] pointer-events-none z-50"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-[var(--color-cobalt-bright)]/50 pointer-events-none z-50"
      />
    </div>
  );
}
