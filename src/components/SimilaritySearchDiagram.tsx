import { DualSimilarityView } from "./DualSimilarityView";

export function SimilaritySearchDiagram() {
  const items = [
    { x: 49, y: 51, vectorX: 49, vectorY: 60, vector: ["0.9", "0.8"] as [string, string], color: "var(--blue)", label: "vecino 2", active: true, icon: "🐕" },
    { x: 35, y: 58, vectorX: 39, vectorY: 67, vector: ["0.7", "0.7"] as [string, string], color: "var(--blue)", label: "vecino 3", active: true, icon: "🦮" },
    { x: 68, y: 34, vectorX: 73, vectorY: 24, vector: ["1.6", "1.9"] as [string, string], color: "var(--green)", label: "lejano", active: false, icon: "🍎" },
    { x: 72, y: 67, vectorX: 78, vectorY: 78, vector: ["1.8", "0.4"] as [string, string], color: "var(--red)", label: "lejano", active: false, icon: "🚗" },
  ];
  const query = { x: 52, y: 49, vectorX: 52, vectorY: 61, vector: ["0.9", "0.8"] as [string, string], color: "var(--purple)", label: "nuevo", icon: "🐩", active: true };

  return <DualSimilarityView items={items} query={query} rightTitle="Representacion espacial" />;
}
