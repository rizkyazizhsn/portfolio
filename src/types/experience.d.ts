type tool =
  | "VueJs"
  | "NuxtJs"
  | "ReactJs"
  | "NextJs"
  | "JavaScript"
  | "TypeScript"
  | "Agile"
  | "Git"
  | "Figma"
  | "TailwindCSS"
  | "Bootstrap"
  | "Laravel";

export type Experience = {
  title: string;
  company: string;
  location: string;
  date: string;
  tools: tool[];
};
