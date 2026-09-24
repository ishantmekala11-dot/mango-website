import { SplitHeadline } from "../components/motion/SplitHeadline";
import { RevealOnScroll } from "../components/motion/RevealOnScroll";
import { PersonCard } from "../components/ui/PersonCard";
import { people, type PersonCategory } from "../content/people";

const categories: PersonCategory[] = ["Leadership", "Chairs", "Advisors", "Alumni"];

export default function People() {
  return (
    <div>
      <section className="px-6 sm:px-10 pt-20 pb-16 max-w-[100rem] mx-auto">
        <p className="font-mono-label text-[var(--color-cobalt-bright)] mb-6">People</p>
        <SplitHeadline as="h1" immediate className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] max-w-4xl">
          Run by the people who did the work first.
        </SplitHeadline>
      </section>

      {categories.map((category) => {
        const group = people.filter((p) => p.category === category);
        if (group.length === 0) return null;
        return (
          <section key={category} className="px-6 sm:px-10 py-16 max-w-[100rem] mx-auto">
            <h2 className="font-mono-label text-[var(--color-paper-dim)] mb-6">
              {category}
            </h2>
            <RevealOnScroll className="flex flex-col">
              {group.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </RevealOnScroll>
          </section>
        );
      })}
    </div>
  );
}
