import type { Testimonial } from "../../content/testimonials";

export function StoryRow({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="max-w-2xl">
      <blockquote className="font-display-italic text-[var(--text-lg)] leading-snug">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-4 font-mono-label text-[var(--color-paper-dim)]">
        {testimonial.name} — {testimonial.context}
      </figcaption>
    </figure>
  );
}
