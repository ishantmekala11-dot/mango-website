import { PinnedSequence } from "../components/motion/PinnedSequence";
import { NetworkCanvas } from "../components/motion/NetworkCanvas";
import { SplitHeadline } from "../components/motion/SplitHeadline";
import { RevealOnScroll } from "../components/motion/RevealOnScroll";
import { Tag } from "../components/ui/Tag";
import { modelUNStages } from "../content/timeline";
import { galleryImages } from "../content/gallery";

const skills = [
  "Research",
  "Negotiation",
  "Public speaking",
  "Coalition-building",
  "Parliamentary procedure",
  "Drafting",
  "Crisis management",
  "Mediation",
];

export default function ModelUN() {
  return (
    <div>
      <section className="relative px-6 sm:px-10 pt-20 pb-24 max-w-[100rem] mx-auto overflow-hidden">
        <NetworkCanvas className="absolute inset-0 w-full h-full opacity-50" />
        <div className="relative">
          <p className="font-mono-label text-[var(--color-cobalt-bright)] mb-6">
            Model UN
          </p>
          <SplitHeadline as="h1" immediate className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] max-w-4xl">
            Six stages. One resolution.
          </SplitHeadline>
          <p className="mt-8 max-w-lg text-[var(--color-paper-dim)] text-[var(--text-md)]">
            Every delegate moves through the same process the UN itself
            runs on — from first research memo to final vote.
          </p>
        </div>
      </section>

      {/* Pinned horizontal stage sequence */}
      <section className="py-16">
        <PinnedSequence
          direction="horizontal"
          className="h-screen overflow-hidden motion-reduce:h-auto motion-reduce:overflow-visible"
        >
          {modelUNStages.map((stage) => (
            <div
              key={stage.index}
              className="w-screen shrink-0 h-full flex flex-col justify-center px-6 sm:px-16 motion-reduce:h-auto motion-reduce:py-12 motion-reduce:w-full"
            >
              <span className="font-mono text-[var(--color-cobalt-bright)] text-[var(--text-md)]">
                0{stage.index}
              </span>
              <h3 className="mt-4 text-[clamp(2rem,5vw,4rem)] leading-tight">
                {stage.title}
              </h3>
              <p className="mt-4 max-w-md text-[var(--color-paper-dim)]">
                {stage.description}
              </p>
            </div>
          ))}
        </PinnedSequence>
      </section>

      {/* Skills */}
      <section className="px-6 sm:px-10 py-24 max-w-[100rem] mx-auto">
        <h2 className="text-[var(--text-2xl)] mb-8">What you'll build</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </section>

      {/* Conference photos */}
      <section className="px-6 sm:px-10 py-24 max-w-[100rem] mx-auto">
        <h2 className="text-[var(--text-2xl)] mb-8">From the floor</h2>
        <RevealOnScroll className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages
            .filter((g) => g.category === "Conferences")
            .map((img) => (
              <div
                key={img.id}
                className="aspect-[4/5] bg-[var(--color-ink-raised)] border border-[var(--color-paper-dim)]/15 rounded-md flex items-end p-4"
              >
                <span className="font-mono-label text-[var(--color-paper-dim)] text-2xs">
                  {img.alt}
                </span>
              </div>
            ))}
        </RevealOnScroll>
      </section>
    </div>
  );
}
