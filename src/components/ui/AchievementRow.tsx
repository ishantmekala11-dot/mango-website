import type { Achievement } from "../../content/achievements";

export function AchievementRow({ achievement }: { achievement: Achievement }) {
  return (
    <article className="group grid grid-cols-[5rem_1fr] sm:grid-cols-[7rem_1fr_10rem] gap-6 py-8 border-t border-[var(--color-paper-dim)]/20">
      <span className="font-mono text-[var(--color-paper-dim)]">
        {achievement.year}
      </span>
      <div>
        <h3 className="text-[var(--text-md)] leading-snug group-hover:text-[var(--color-cobalt-bright)] transition-colors duration-200">
          {achievement.title}
        </h3>
        <p className="mt-2 text-[var(--color-paper-dim)] max-w-2xl">
          {achievement.description}
        </p>
      </div>
      <span className="font-mono-label text-[var(--color-paper-dim)] sm:text-right">
        {achievement.category}
      </span>
    </article>
  );
}
