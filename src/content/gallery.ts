export type GalleryCategory =
  | "Conferences"
  | "Workshops"
  | "Delegates"
  | "Behind the Scenes";

export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  alt: string;
  aspect: "wide" | "tall" | "square";
}

export const galleryImages: GalleryImage[] = [
  { id: "g-01", category: "Conferences", alt: "General Assembly floor debate at MANGOCON 2025, delegates raising placards to speak", aspect: "wide" },
  { id: "g-02", category: "Delegates", alt: "A delegate delivering a floor speech at the lectern", aspect: "tall" },
  { id: "g-03", category: "Workshops", alt: "Public speaking workshop participants practicing paired delivery drills", aspect: "square" },
  { id: "g-04", category: "Behind the Scenes", alt: "Conference staff finalizing the committee schedule the night before", aspect: "wide" },
  { id: "g-05", category: "Conferences", alt: "Crisis committee delegates huddled in an unmoderated caucus", aspect: "square" },
  { id: "g-06", category: "Delegates", alt: "Two delegates from opposing blocs negotiating amendment language", aspect: "tall" },
  { id: "g-07", category: "Workshops", alt: "A chair training session on gavel procedure and points of order", aspect: "wide" },
  { id: "g-08", category: "Conferences", alt: "Closing ceremony award ceremony with the full delegate body", aspect: "wide" },
  { id: "g-09", category: "Behind the Scenes", alt: "Volunteers assembling delegate badges and country placards", aspect: "square" },
  { id: "g-10", category: "Delegates", alt: "A first-year delegate reviewing notes moments before their first speech", aspect: "tall" },
  { id: "g-11", category: "Workshops", alt: "Rhetoric workshop breakout group mapping an argument structure on a whiteboard", aspect: "square" },
  { id: "g-12", category: "Conferences", alt: "Overhead shot of the full conference hall mid-session", aspect: "wide" },
];
