import type { TimelineEntry } from "../../content/timeline";

interface TimelineProps {
  entries: TimelineEntry[];
}

/** A single timeline row — full-bleed rendering is handled by the pinned wrapper. */
export function TimelineRow({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="flex flex-col justify-center h-full px-8 sm:px-16 border-l border-[var(--color-paper-dim)]/30">
      <span className="font-mono text-[var(--color-cobalt-bright)] text-[var(--text-md)]">
        {entry.year}
      </span>
      <h3 className="mt-4 text-[var(--text-lg)] leading-tight">{entry.title}</h3>
      <p className="mt-4 max-w-sm text-[var(--color-paper-dim)]">
        {entry.description}
      </p>
    </div>
  );
}

/** Non-pinned fallback list, e.g. for reduced-motion or narrow layouts. */
export function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="flex flex-col gap-12">
      {entries.map((entry) => (
        <li key={entry.year} className="flex gap-6">
          <span className="font-mono text-[var(--color-cobalt-bright)] w-16 shrink-0">
            {entry.year}
          </span>
          <div>
            <h3 className="text-[var(--text-md)]">{entry.title}</h3>
            <p className="mt-2 text-[var(--color-paper-dim)]">{entry.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
