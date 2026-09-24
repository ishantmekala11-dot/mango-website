import { useMemo, useState } from "react";
import { SplitHeadline } from "../components/motion/SplitHeadline";
import { RevealOnScroll } from "../components/motion/RevealOnScroll";
import { FilterBar } from "../components/ui/FilterBar";
import { AchievementRow } from "../components/ui/AchievementRow";
import { achievements, type AchievementCategory } from "../content/achievements";

const categories: AchievementCategory[] = [
  "Conference",
  "Recognition",
  "Partnership",
  "Publication",
];

export default function Achievements() {
  const [filter, setFilter] = useState<AchievementCategory | "All">("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? achievements
        : achievements.filter((a) => a.category === filter),
    [filter]
  );

  return (
    <div>
      <section className="px-6 sm:px-10 pt-20 pb-16 max-w-[100rem] mx-auto">
        <p className="font-mono-label text-[var(--color-cobalt-bright)] mb-6">Achievements</p>
        <SplitHeadline as="h1" immediate className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] max-w-4xl">
          Twelve years of proof.
        </SplitHeadline>
      </section>

      <section className="px-6 sm:px-10 py-8 max-w-[100rem] mx-auto">
        <FilterBar
          label="Filter achievements by category"
          options={categories}
          active={filter}
          onChange={setFilter}
        />
      </section>

      <section className="px-6 sm:px-10 py-16 max-w-[100rem] mx-auto">
        <RevealOnScroll className="flex flex-col" key={filter}>
          {filtered.map((a) => (
            <AchievementRow key={a.id} achievement={a} />
          ))}
        </RevealOnScroll>
      </section>
    </div>
  );
}
