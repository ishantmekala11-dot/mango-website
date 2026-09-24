export interface RouteDef {
  path: string;
  label: string;
}

export const routes: RouteDef[] = [
  { path: "/", label: "Home" },
  { path: "/impact", label: "Impact" },
  { path: "/model-un", label: "Model UN" },
  { path: "/public-speaking", label: "Public Speaking" },
  { path: "/about", label: "About" },
  { path: "/people", label: "People" },
  { path: "/achievements", label: "Achievements" },
  { path: "/gallery", label: "Gallery" },
  { path: "/join", label: "Join" },
];
