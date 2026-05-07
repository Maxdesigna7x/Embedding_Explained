import { ComparisonTable } from "../components/ComparisonTable";
import { SlideTitle } from "../components/SlideTitle";

export function Slide12MLPvsSimilarity() {
  return (
    <div className="slide-content">
      <SlideTitle compact kicker="Comparacion" title="Dos formas de usar la misma representacion" lede="No son enemigos: dependen del escenario." />
      <div style={{ position: "absolute", inset: "38% 6% 10%", display: "grid", placeItems: "center" }}>
        <ComparisonTable />
      </div>
    </div>
  );
}
