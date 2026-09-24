import { PinnedSequence } from "../components/motion/PinnedSequence";
import { RevealOnScroll } from "../components/motion/RevealOnScroll";
import { SplitHeadline } from "../components/motion/SplitHeadline";
import { StatGrid } from "../components/ui/StatGrid";
import { TimelineRow } from "../components/ui/Timeline";
import { AchievementRow } from "../components/ui/AchievementRow";
import { StoryRow } from "../components/ui/StoryRow";
import { impactStats } from "../content/stats";
import { impactTimeline } from "../content/timeline";
import { achievements } from "../content/achievements";
import { testimonials } from "../content/testimonials";

export default function Impact() {
  return (
    <div>
      <section className="px-6 sm:px-10 pt-20 pb-16 max-w-[100rem] mx-auto">
        <p className="font-mono-label text-[var(--color-cobalt-bright)] mb-6">
          Impact
        </p>
        <SplitHeadline as="h1" immediate className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] max-w-4xl">
          Twelve years, measured in rooms held.
        </SplitHeadline>
      </section>

      <section className="px-6 sm:px-10 py-16 max-w-[100rem] mx-auto">
        <StatGrid stats={impactStats} columns={3} />
      </section>

      {/* Pinned, scrubbed vertical timeline */}
      <section className="py-16">
        <p className="px-6 sm:px-10 max-w-[100rem] mx-auto font-mono-label text-[var(--color-paper-dim)] mb-8">
          The timeline
        </p>
        <PinnedSequence
          direction="vertical"
          className="h-screen overflow-hidden motion-reduce:h-auto motion-reduce:overflow-visible"
        >
          {impactTimeline.map((entry) => (
            <div key={entry.year} className="h-screen shrink-0 motion-reduce:h-auto motion-reduce:py-12">
              <TimelineRow entry={entry} />
            </div>
          ))}
        </PinnedSequence>
      </section>

      {/* Achievement wall */}
      <section className="px-6 sm:px-10 py-24 max-w-[100rem] mx-auto">
        <h2 className="text-[var(--text-2xl)] mb-8">Achievement wall</h2>
        <RevealOnScroll className="flex flex-col">
          {achievements.map((a) => (
            <AchievementRow key={a.id} achievement={a} />
          ))}
        </RevealOnScroll>
      </section>

      {/* Scroll-driven story rows */}
      <section className="px-6 sm:px-10 py-24 max-w-[100rem] mx-auto">
        <h2 className="text-[var(--text-2xl)] mb-16">In their words</h2>
        <RevealOnScroll className="flex flex-col gap-20">
          {testimonials.map((t) => (
            <StoryRow key={t.id} testimonial={t} />
          ))}
        </RevealOnScroll>
      </section>
    </div>
  );
}
