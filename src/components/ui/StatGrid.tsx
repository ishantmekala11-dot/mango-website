import type { Stat } from "../../content/stats";
import { Counter } from "../motion/Counter";
import { RevealOnScroll } from "../motion/RevealOnScroll";

interface StatGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
}

export function StatGrid({ stats, columns = 4 }: StatGridProps) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <RevealOnScroll
      as="ul"
      className={`grid grid-cols-1 ${cols} gap-8`}
    >
      {stats.map((stat) => (
        <li key={stat.label}>
          <div className="font-mono text-[var(--text-2xl)] text-[var(--color-cobalt-bright)] leading-none">
            <Counter value={stat.value} suffix={stat.suffix} />
          </div>
          <p className="mt-3 font-mono-label text-[var(--color-paper-dim)]">
            {stat.label}
          </p>
        </li>
      ))}
    </RevealOnScroll>
  );
}
