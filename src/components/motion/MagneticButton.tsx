import { useRef, type ReactNode, type ComponentPropsWithoutRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, mm } from "../../lib/gsap";

interface MagneticButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  strength?: number;
}

/** Wraps a button with a subtle cursor-follow "magnetic" pull on hover. */
export function MagneticButton({
  children,
  strength = 0.3,
  className,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      let active = true;
      mm.add("(prefers-reduced-motion: reduce)", () => {
        active = false;
      });
      const el = ref.current;

      const onMove = (e: MouseEvent) => {
        if (!active) return;
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        gsap.to(el, {
          x: relX * strength,
          y: relY * strength,
          duration: 0.3,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: ref, dependencies: [strength] }
  );

  return (
    <button ref={ref} className={className} {...rest}>
      {children}
    </button>
  );
}
