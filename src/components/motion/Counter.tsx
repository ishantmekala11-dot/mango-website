import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, mm } from "../../lib/gsap";

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function Counter({
  value,
  suffix = "",
  className,
  duration = 1.4,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useGSAP(
    () => {
      if (!ref.current) return;

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const counter = { n: 0 };
        gsap.to(counter, {
          n: value,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
          onUpdate: () => setDisplay(Math.round(counter.n)),
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        setDisplay(value);
      });
    },
    { scope: ref, dependencies: [value] }
  );

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
