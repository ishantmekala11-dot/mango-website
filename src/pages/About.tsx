import { useState } from "react";
import { SplitHeadline } from "../components/motion/SplitHeadline";
import { RevealOnScroll } from "../components/motion/RevealOnScroll";

interface AcronymLetter {
  letter: string;
  word: string;
  description: string;
}

const acronym: AcronymLetter[] = [
  { letter: "M", word: "Modern", description: "Preparing students to engage with the issues shaping today's world." },
  { letter: "A", word: "Advocates", description: "Developing the confidence to communicate ideas and stand behind them." },
  { letter: "N", word: "New", description: "Encouraging curiosity, innovation, and perspectives beyond conventional thinking." },
  { letter: "G", word: "Global", description: "Understanding issues through international perspectives." },
  { letter: "O", word: "Opinions", description: "Building informed perspectives and learning how to communicate them effectively." },
];

const values = [
  { title: "Mission", body: "To give students the research skills, rhetorical confidence, and diplomatic judgment to turn opinions into informed, persuasive advocacy." },
  { title: "Vision", body: "A generation of young people who engage with global issues critically, communicate them clearly, and lead conversations that matter." },
  { title: "Values", body: "Curiosity, rigor, respect for perspectives unlike our own, and the discipline to back opinions with research." },
  { title: "Philosophy", body: "You don't learn to speak by being told how. You learn by being handed the floor and told to use it." },
];

export default function About() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div>
      <section className="px-6 sm:px-10 pt-20 pb-16 max-w-[100rem] mx-auto">
        <p className="font-mono-label text-[var(--color-cobalt-bright)] mb-6">About</p>
        <SplitHeadline as="h1" immediate className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] max-w-4xl">
          What MANGO actually stands for.
        </SplitHeadline>
      </section>

      {/* Interactive acronym */}
      <section className="px-6 sm:px-10 py-16 max-w-[100rem] mx-auto">
        <div className="flex flex-wrap gap-x-2 gap-y-6">
          {acronym.map((item) => {
            const isActive = active === item.letter;
            return (
              <button
                key={item.letter}
                type="button"
                onMouseEnter={() => setActive(item.letter)}
                onFocus={() => setActive(item.letter)}
                onClick={() => setActive(isActive ? null : item.letter)}
                aria-expanded={isActive}
                className="group relative text-left"
              >
                <span
                  className={`font-mono text-[clamp(3rem,10vw,7rem)] leading-none transition-colors duration-200 ${
                    isActive ? "text-[var(--color-cobalt-bright)]" : "text-[var(--color-paper)]"
                  }`}
                >
                  {item.letter}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-8 min-h-24">
          {acronym.map((item) => (
            <div
              key={item.letter}
              className={`transition-opacity duration-300 ${
                active === item.letter ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
              }`}
            >
              <p className="font-mono-label text-[var(--color-cobalt-bright)]">{item.word}</p>
              <p className="mt-2 max-w-lg text-[var(--color-paper-dim)] text-[var(--text-md)]">
                {item.description}
              </p>
            </div>
          ))}
          {active === null && (
            <p className="text-[var(--color-paper-dim)]">
              Hover or tap a letter to see what it stands for.
            </p>
          )}
        </div>
      </section>

      {/* Mission / vision / values / philosophy */}
      <section className="px-6 sm:px-10 py-24 max-w-[100rem] mx-auto">
        <RevealOnScroll className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {values.map((v) => (
            <div key={v.title} className="border-t border-[var(--color-paper-dim)]/20 pt-6">
              <h2 className="font-mono-label text-[var(--color-cobalt-bright)] mb-3">
                {v.title}
              </h2>
              <p className="text-[var(--text-md)] max-w-md leading-snug">{v.body}</p>
            </div>
          ))}
        </RevealOnScroll>
      </section>
    </div>
  );
}
