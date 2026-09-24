import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap, mm, ScrollTrigger } from "../../lib/gsap";

export function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [location.pathname]);

  useGSAP(
    () => {
      if (!ref.current) return;
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Opacity only — deliberately no `y`/transform here. GSAP leaves a
        // `transform` on the element even at rest, and a `transform` on any
        // ancestor becomes the containing block for `position: fixed`
        // descendants, which silently breaks every ScrollTrigger `pin: true`
        // section nested inside a page (confirmed: broke both the Model UN
        // horizontal pin and the Impact vertical pin sitewide).
        gsap.fromTo(
          ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      });
    },
    { scope: ref, dependencies: [location.pathname] }
  );

  return (
    <div ref={ref} key={location.pathname}>
      {children}
    </div>
  );
}
