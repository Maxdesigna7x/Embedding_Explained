export type ClusterDatum = {
  id: string;
  label: string;
  color: string;
  x: number;
  y: number;
  items: string[];
  description: string;
};

export const toyClusters: ClusterDatum[] = [
  {
    id: "animals",
    label: "Animales",
    color: "var(--blue)",
    x: 31,
    y: 45,
    items: ["🐶", "🐱", "🐦", "🦊"],
    description: "Objetos parecidos quedan cerca.",
  },
  {
    id: "fruits",
    label: "Frutas",
    color: "var(--green)",
    x: 62,
    y: 35,
    items: ["🍎", "🍐", "🍋", "🍇"],
    description: "El cluster comparte rasgos visuales.",
  },
  {
    id: "vehicles",
    label: "Vehiculos",
    color: "var(--red)",
    x: 70,
    y: 68,
    items: ["🚗", "🚲", "🚚", "🚌"],
    description: "Lejos de frutas y animales.",
  },
  {
    id: "tools",
    label: "Herramientas",
    color: "var(--gold)",
    x: 39,
    y: 70,
    items: ["🔧", "🔨", "🧰", "⚙️"],
    description: "Otra region del espacio.",
  },
];

export const sparseExamples = [
  { label: "Muchos", color: "var(--blue)", points: 18, x: 25, y: 54 },
  { label: "Pocos", color: "var(--gold)", points: 4, x: 53, y: 48 },
  { label: "Uno", color: "var(--red)", points: 1, x: 75, y: 58 },
];
