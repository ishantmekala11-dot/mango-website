export type AchievementCategory =
  | "Conference"
  | "Recognition"
  | "Partnership"
  | "Publication";

export interface Achievement {
  id: string;
  year: string;
  category: AchievementCategory;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: "ach-01",
    year: "2025",
    category: "Recognition",
    title: "Global Youth Diplomacy Award — Finalist",
    description:
      "Recognized among the top five youth-led diplomacy programs worldwide for our caucus mediation curriculum.",
  },
  {
    id: "ach-02",
    year: "2024",
    category: "Conference",
    title: "MANGOCON hits 600 delegates",
    description:
      "Our flagship annual conference outgrew its original venue for the third consecutive year.",
  },
  {
    id: "ach-03",
    year: "2024",
    category: "Partnership",
    title: "Partnership with the Regional Youth Assembly",
    description:
      "A standing agreement to co-train delegates ahead of the assembly's annual session.",
  },
  {
    id: "ach-04",
    year: "2023",
    category: "Publication",
    title: "\"The Floor Is Yours\" curriculum released",
    description:
      "Our public speaking framework was published as an open curriculum, now used by 40+ partner schools.",
  },
  {
    id: "ach-05",
    year: "2023",
    category: "Conference",
    title: "First conference outside our home country",
    description:
      "A partner chapter ran a fully independent conference using MANGO's format and training materials.",
  },
  {
    id: "ach-06",
    year: "2022",
    category: "Recognition",
    title: "Featured in National Education Review",
    description:
      "Profiled as a model for student-run civic education outside the traditional classroom.",
  },
  {
    id: "ach-07",
    year: "2021",
    category: "Partnership",
    title: "University pipeline agreement",
    description:
      "Three partner universities began offering credit recognition for MANGO's advanced delegate track.",
  },
  {
    id: "ach-08",
    year: "2020",
    category: "Conference",
    title: "First fully virtual conference",
    description:
      "Ran a five-committee virtual conference in six weeks after in-person venues shut down.",
  },
];
