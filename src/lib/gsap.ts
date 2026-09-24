import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// One shared matchMedia instance: every GSAP animation in the app is scoped
// through this so `(prefers-reduced-motion: reduce)` disables motion globally
// without every component re-implementing the check.
export const mm = gsap.matchMedia();

export { gsap, ScrollTrigger, SplitText };
