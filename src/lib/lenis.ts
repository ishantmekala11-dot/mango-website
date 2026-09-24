import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

let lenis: Lenis | null = null;

/**
 * Starts one Lenis instance for the whole app and wires it into GSAP's
 * ticker + ScrollTrigger, so scroll-driven timelines stay in sync with the
 * inertia scroll instead of drifting from the native scroll position.
 * Returns a teardown function.
 */
export function initSmoothScroll(): () => void {
  if (lenis) return () => {};

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reduceMotion) return () => {};

  lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const tick = (time: number) => {
    lenis?.raf(time * 1000);
  };
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis?.destroy();
    lenis = null;
  };
}

export function getLenis() {
  return lenis;
}
