import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, mm } from "../../lib/gsap";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

/** Infinite horizontal scroll of duplicated content. Static when reduced motion is on. */
export function Marquee({ children, className, speed = 40 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current!;
        const width = track.scrollWidth / 2;
        const tween = gsap.to(track, {
          x: -width,
          duration: width / speed,
          ease: "none",
          repeat: -1,
        });
        return () => {
          tween.kill();
        };
      });
    },
    { scope: trackRef, dependencies: [speed] }
  );

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div ref={trackRef} className="flex w-max will-change-transform">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
