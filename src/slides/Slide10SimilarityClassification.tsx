import { SimilaritySearchDiagram } from "../components/SimilaritySearchDiagram";
import { SlideTitle } from "../components/SlideTitle";

export function Slide10SimilarityClassification() {
  return (
    <div className="slide-content">
      <SlideTitle compact kicker="Uso 2" title="Clasificar comparando vecinos" lede="No se aprende una frontera explicita: se busca el embedding mas parecido." />
      <div style={{ position: "absolute", inset: "34% 7% 9%" }}>
        <SimilaritySearchDiagram />
      </div>
    </div>
  );
}
