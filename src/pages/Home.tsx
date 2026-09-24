import { SplitHeadline } from "../components/motion/SplitHeadline";
import { NetworkCanvas } from "../components/motion/NetworkCanvas";
import { Waveform } from "../components/motion/Waveform";
import { RevealOnScroll } from "../components/motion/RevealOnScroll";
import { StatGrid } from "../components/ui/StatGrid";
import { ButtonLink } from "../components/ui/Button";
import { AchievementRow } from "../components/ui/AchievementRow";
import { heroStats } from "../content/stats";
import { achievements } from "../content/achievements";
import { galleryImages } from "../content/gallery";

const featured = achievements[0];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden px-6 sm:px-10 pb-16">
        <NetworkCanvas className="absolute inset-0 w-full h-full opacity-70" />
        <div className="relative max-w-[100rem] mx-auto w-full">
          <p className="font-mono-label text-[var(--color-cobalt-bright)] mb-6">
            Model UN · Public Speaking · Global Advocacy
          </p>
          <SplitHeadline
            as="h1"
            immediate
            className="text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] max-w-5xl"
          >
            Young people belong in the room.
          </SplitHeadline>
          <p className="mt-8 max-w-lg text-[var(--color-paper-dim)] text-[var(--text-md)]">
            MANGO trains delegates and speakers to argue for a seat at the
            table — then makes sure they get one.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink to="/join">JOIN THE FUTURE →</ButtonLink>
            <ButtonLink to="/model-un" variant="secondary">
              See how it works
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Stat preview */}
      <section className="px-6 sm:px-10 py-24 max-w-[100rem] mx-auto">
        <StatGrid stats={heroStats} />
      </section>

      {/* What we do — 3 distinctly treated panels */}
      <section className="px-6 sm:px-10 py-24 max-w-[100rem] mx-auto">
        <h2 className="text-[var(--text-2xl)] max-w-2xl leading-tight">
          Three ways in.
        </h2>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--color-paper-dim)]/15">
          <div className="bg-[var(--color-ink)] p-10 min-h-96 flex flex-col justify-between relative overflow-hidden">
            <NetworkCanvas
              className="absolute inset-0 w-full h-full opacity-40"
              nodeCount={20}
            />
            <span className="relative font-mono-label text-[var(--color-cobalt-bright)]">
              01 — Model UN
            </span>
            <div className="relative">
              <h3 className="text-[var(--text-lg)]">Committee, for real.</h3>
              <p className="mt-3 text-[var(--color-paper-dim)]">
                Research, caucus, and debate the way delegates do at the UN
                itself.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-ink)] p-10 min-h-96 flex flex-col justify-between relative overflow-hidden">
            <Waveform className="absolute inset-x-0 bottom-0 w-full h-32 opacity-50" />
            <span className="relative font-mono-label text-[var(--color-cobalt-bright)]">
              02 — Public Speaking
            </span>
            <div className="relative">
              <h3 className="text-[var(--text-lg)]">Find your floor voice.</h3>
              <p className="mt-3 text-[var(--color-paper-dim)]">
                Rhetoric, delivery, and the nerve to hold a room.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-ink)] p-10 min-h-96 flex flex-col justify-between">
            <span className="font-mono-label text-[var(--color-cobalt-bright)]">
              03 — Leadership
            </span>
            <div className="flex flex-col gap-1 font-mono text-[var(--color-paper-dim)]">
              {["2014", "2018", "2022", "2026"].map((y) => (
                <span key={y}>{y}</span>
              ))}
            </div>
            <div>
              <h3 className="text-[var(--text-lg)]">Come back as a chair.</h3>
              <p className="mt-3 text-[var(--color-paper-dim)]">
                The best delegates lead the next room, not just sit in it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured achievement */}
      <section className="px-6 sm:px-10 py-24 max-w-[100rem] mx-auto">
        <p className="font-mono-label text-[var(--color-paper-dim)] mb-6">
          Latest recognition
        </p>
        <AchievementRow achievement={featured} />
      </section>

      {/* Photo strip */}
      <section className="py-24 overflow-hidden">
        <RevealOnScroll className="flex gap-4 px-6 sm:px-10 max-w-[100rem] mx-auto overflow-x-auto">
          {galleryImages.slice(0, 5).map((img) => (
            <div
              key={img.id}
              className="shrink-0 w-72 h-96 bg-[var(--color-ink-raised)] border border-[var(--color-paper-dim)]/15 rounded-md flex items-end p-4"
            >
              <span className="font-mono-label text-[var(--color-paper-dim)]">
                {img.category}
              </span>
            </div>
          ))}
        </RevealOnScroll>
      </section>

      {/* Closing statement + CTA */}
      <section className="px-6 sm:px-10 py-32 max-w-[100rem] mx-auto text-center">
        <SplitHeadline
          as="h2"
          className="text-[clamp(2rem,5vw,4rem)] leading-tight max-w-4xl mx-auto"
        >
          The floor is yours. Take it.
        </SplitHeadline>
        <div className="mt-10 flex justify-center">
          <ButtonLink to="/join">JOIN THE FUTURE →</ButtonLink>
        </div>
      </section>
    </div>
  );
}
