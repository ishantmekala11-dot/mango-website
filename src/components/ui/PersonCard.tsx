import { useState } from "react";
import type { Person } from "../../content/people";

/** Editorial hover/focus-reveal treatment — not a card grid, per brief. */
export function PersonCard({ person }: { person: Person }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-t border-[var(--color-paper-dim)]/20 py-6 cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[var(--text-md)]">{person.name}</h3>
        <span className="font-mono-label text-[var(--color-paper-dim)] text-right">
          {person.role}
        </span>
      </div>
      <div
        className={`grid transition-all duration-300 ease-[var(--ease-out)] ${
          open ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-[var(--color-paper-dim)] max-w-xl">
          {person.bio}
        </p>
      </div>
    </div>
  );
}
