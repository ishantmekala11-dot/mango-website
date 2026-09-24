import { useMemo, useState } from "react";
import { SplitHeadline } from "../components/motion/SplitHeadline";
import { RevealOnScroll } from "../components/motion/RevealOnScroll";
import { FilterBar } from "../components/ui/FilterBar";
import { Lightbox } from "../components/ui/Lightbox";
import { galleryImages, type GalleryCategory } from "../content/gallery";

const categories: GalleryCategory[] = [
  "Conferences",
  "Workshops",
  "Delegates",
  "Behind the Scenes",
];

const aspectClass: Record<string, string> = {
  wide: "aspect-[16/9] sm:col-span-2",
  tall: "aspect-[3/4] row-span-2",
  square: "aspect-square",
};

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((g) => g.category === filter),
    [filter]
  );

  return (
    <div>
      <section className="px-6 sm:px-10 pt-20 pb-16 max-w-[100rem] mx-auto">
        <p className="font-mono-label text-[var(--color-cobalt-bright)] mb-6">Gallery</p>
        <SplitHeadline as="h1" immediate className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] max-w-4xl">
          What the floor actually looks like.
        </SplitHeadline>
      </section>

      <section className="px-6 sm:px-10 py-8 max-w-[100rem] mx-auto">
        <FilterBar
          label="Filter gallery by category"
          options={categories}
          active={filter}
          onChange={setFilter}
        />
      </section>

      <section className="px-6 sm:px-10 py-16 max-w-[100rem] mx-auto">
        <RevealOnScroll
          key={filter}
          className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[10rem] gap-4"
        >
          {filtered.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setOpenIndex(i)}
              className={`relative bg-[var(--color-ink-raised)] border border-[var(--color-paper-dim)]/15 rounded-md overflow-hidden flex items-end p-4 text-left hover:brightness-125 transition-[filter] duration-200 ${aspectClass[img.aspect]}`}
            >
              <span className="font-mono-label text-2xs text-[var(--color-paper-dim)]">
                {img.category}
              </span>
            </button>
          ))}
        </RevealOnScroll>
      </section>

      {openIndex !== null && (
        <Lightbox
          images={filtered}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </div>
  );
}
