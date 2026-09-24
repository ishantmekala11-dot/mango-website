import { SplitHeadline } from "../components/motion/SplitHeadline";
import { Waveform } from "../components/motion/Waveform";
import { RevealOnScroll } from "../components/motion/RevealOnScroll";
import { ButtonLink } from "../components/ui/Button";

const sequence = [
  { word: "SPEAK", note: "Say the thing before you've perfected it." },
  { word: "PERSUADE", note: "Structure the argument, not just the delivery." },
  { word: "RESPOND", note: "The real test is the question you didn't prep for." },
  { word: "LEAD", note: "Teach the next speaker what just took you a year to learn." },
];

export default function PublicSpeaking() {
  return (
    <div data-theme="bright" className="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <section className="relative px-6 sm:px-10 pt-20 pb-24 max-w-[100rem] mx-auto overflow-hidden">
        <Waveform className="absolute inset-x-0 bottom-0 w-full h-48 opacity-40" />
        <div className="relative">
          <p className="font-mono-label text-[var(--color-cobalt)] mb-6">
            Public Speaking
          </p>
          <SplitHeadline as="h1" immediate className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] max-w-4xl">
            Every argument needs a voice behind it.
          </SplitHeadline>
          <p className="mt-8 max-w-lg text-[var(--color-paper-dim)] text-[var(--text-md)]">
            Rhetoric, delivery, and the nerve to hold a room — trained the
            same way we train delegates: by doing it, on the record.
          </p>
          <div className="mt-10">
            <ButtonLink to="/join" className="!bg-[var(--color-cobalt)]">
              JOIN THE FUTURE →
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Kinetic-type sequence */}
      <section className="px-6 sm:px-10 py-24 max-w-[100rem] mx-auto">
        <RevealOnScroll as="ul" className="flex flex-col gap-2" stagger={0.12}>
          {sequence.map((step) => (
            <li
              key={step.word}
              className="border-t border-[var(--color-paper-dim)]/25 py-8 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12"
            >
              <span className="font-mono text-[clamp(2.5rem,7vw,5rem)] leading-none text-[var(--color-cobalt)]">
                {step.word}
              </span>
              <p className="max-w-md text-[var(--color-paper-dim)]">{step.note}</p>
            </li>
          ))}
        </RevealOnScroll>
      </section>
    </div>
  );
}
