import { DualSimilarityView } from "../components/DualSimilarityView";
import { SlideTitle } from "../components/SlideTitle";

export function Slide06DistanceAndClusters() {
  const query = { x: 30, y: 53, vectorX: 28, vectorY: 66, vector: ["0.7", "0.9"] as [string, string], color: "var(--purple)", label: "referencia", icon: "🐩", active: true };
  const items = [
    { x: 42, y: 49, vectorX: 42, vectorY: 60, vector: ["0.8", "0.8"] as [string, string], color: "var(--blue)", label: "animal cercano", icon: "🐶", active: true },
    { x: 46, y: 39, vectorX: 48, vectorY: 51, vector: ["0.8", "0.9"] as [string, string], color: "var(--blue)", label: "animal cercano", icon: "🐕", active: true },
    { x: 76, y: 60, vectorX: 74, vectorY: 28, vector: ["1.7", "0.7"] as [string, string], color: "var(--red)", label: "vehiculo lejano", icon: "🚗", active: false },
    { x: 82, y: 50, vectorX: 80, vectorY: 22, vector: ["1.8", "0.8"] as [string, string], color: "var(--red)", label: "vehiculo lejano", icon: "🚚", active: false },
  ];

  return (
    <div className="slide-content">
      <SlideTitle compact kicker="Distancia" title="Cerca significa mas parecido" lede="La similitud se lee como distancia entre embeddings." />
      <div className="open-stage" style={{ inset: "34% 6% 9%" }}>
        <DualSimilarityView items={items} query={query} rightTitle="Representacion espacial" />
      </div>
    </div>
  );
}
