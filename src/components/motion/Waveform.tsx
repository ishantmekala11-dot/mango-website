import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../lib/useReducedMotion";

interface WaveformProps {
  className?: string;
  color?: string;
  bars?: number;
}

/**
 * A speech waveform: idle → animated bars responding to a simulated
 * amplitude curve. Used on the Public Speaking page as the ambient visual
 * motif (in place of the network lines used elsewhere).
 */
export function Waveform({
  className,
  color = "#3552FF",
  bars = 48,
}: WaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const gap = width / bars;
      const barWidth = gap * 0.5;

      for (let i = 0; i < bars; i++) {
        const phase = reducedMotion ? i * 0.4 : t * 0.06 + i * 0.4;
        const amp =
          (Math.sin(phase) * 0.5 + 0.5) * 0.7 +
          (Math.sin(phase * 2.3) * 0.5 + 0.5) * 0.3;
        const barHeight = Math.max(4, amp * height * 0.85);
        const x = i * gap + gap / 2 - barWidth / 2;
        const y = (height - barHeight) / 2;

        ctx.fillStyle = color;
        ctx.globalAlpha = 0.35 + amp * 0.65;
        ctx.fillRect(x, y, barWidth, barHeight);
      }
      ctx.globalAlpha = 1;

      if (!reducedMotion) {
        t += 1;
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    const onResize = () => {
      resize();
      draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [color, bars, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Animated speech waveform"
    />
  );
}
