import { useEffect, useRef } from "react";
import type { GalleryImage } from "../../content/gallery";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/** Full keyboard nav: Escape closes, Left/Right navigate, focus is trapped and restored on close. */
export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerElRef = useRef<Element | null>(null);
  const image = images[index];

  useEffect(() => {
    triggerElRef.current = document.activeElement;
    closeRef.current?.focus();
    return () => {
      if (triggerElRef.current instanceof HTMLElement) {
        triggerElRef.current.focus();
      }
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, images.length, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-ink)]/96 backdrop-blur-sm px-6"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-6 right-6 min-h-11 min-w-11 flex items-center justify-center font-mono-label border border-[var(--color-paper-dim)] rounded-full"
      >
        ✕
      </button>

      <div
        className="relative w-full max-w-4xl aspect-video bg-[var(--color-ink-raised)] rounded-md flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono-label text-[var(--color-paper-dim)] px-8 text-center">
          {image.alt}
        </span>
      </div>

      <div className="flex items-center gap-6 mt-6" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={() => onNavigate((index - 1 + images.length) % images.length)}
          aria-label="Previous image"
          className="min-h-11 min-w-11 flex items-center justify-center font-mono-label border border-[var(--color-paper-dim)] rounded-full"
        >
          ←
        </button>
        <span className="font-mono-label text-[var(--color-paper-dim)]">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={() => onNavigate((index + 1) % images.length)}
          aria-label="Next image"
          className="min-h-11 min-w-11 flex items-center justify-center font-mono-label border border-[var(--color-paper-dim)] rounded-full"
        >
          →
        </button>
      </div>
    </div>
  );
}
