export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const impactTimeline: TimelineEntry[] = [
  {
    year: "2014",
    title: "MANGO founded",
    description:
      "Started as a single after-school Model UN club with eleven students and one advisor.",
  },
  {
    year: "2016",
    title: "First regional conference",
    description:
      "Hosted our own conference for the first time, drawing delegates from six neighboring schools.",
  },
  {
    year: "2018",
    title: "Public speaking track launches",
    description:
      "Expanded beyond committee simulation into a standalone rhetoric and public speaking curriculum.",
  },
  {
    year: "2020",
    title: "Went fully virtual",
    description:
      "Rebuilt every conference and workshop format for remote delegates without losing the floor debate.",
  },
  {
    year: "2022",
    title: "International expansion",
    description:
      "Partner chapters opened outside our home country for the first time, reaching delegates on four continents.",
  },
  {
    year: "2024",
    title: "3,000th delegate trained",
    description:
      "Crossed a milestone we didn't expect to hit for another two years.",
  },
  {
    year: "2026",
    title: "Today",
    description:
      "Ninety-six conferences, forty-two countries, one continuing argument: that young people belong in the room.",
  },
];

export interface ModelUNStage {
  index: number;
  title: string;
  description: string;
}

export const modelUNStages: ModelUNStage[] = [
  {
    index: 1,
    title: "Research",
    description:
      "Delegates are assigned a country and a committee, then build a position from primary sources, not summaries.",
  },
  {
    index: 2,
    title: "Draft",
    description:
      "Position papers are written, reviewed, and rewritten before a single word is spoken on the floor.",
  },
  {
    index: 3,
    title: "Caucus",
    description:
      "Delegates form blocs, trade language, and find the coalitions that will carry a resolution.",
  },
  {
    index: 4,
    title: "Debate",
    description:
      "Formal floor speeches, points of order, and the pressure of speaking on the record.",
  },
  {
    index: 5,
    title: "Resolve",
    description:
      "Amendments are merged or defeated, and a resolution is put to a vote in front of the full committee.",
  },
  {
    index: 6,
    title: "Lead",
    description:
      "The best delegates return as chairs and mentors — the pipeline that keeps MANGO youth-run.",
  },
];
