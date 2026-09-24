export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const heroStats: Stat[] = [
  { value: 42, suffix: "+", label: "Countries represented" },
  { value: 3800, suffix: "+", label: "Delegates trained" },
  { value: 96, suffix: "", label: "Model UN conferences run" },
  { value: 12, suffix: "", label: "Years active" },
];

export const impactStats: Stat[] = [
  { value: 3800, suffix: "+", label: "Delegates trained since founding" },
  { value: 210, suffix: "+", label: "Partner schools & universities" },
  { value: 96, suffix: "", label: "Conferences hosted or co-hosted" },
  { value: 1400, suffix: "+", label: "Resolutions drafted in committee" },
  { value: 58, suffix: "", label: "Public speaking workshops delivered" },
  { value: 42, suffix: "+", label: "Countries with active alumni" },
];
