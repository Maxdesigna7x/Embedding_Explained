import { SlideTitle } from "../components/SlideTitle";
import { InteractiveCluster } from "../components/InteractiveCluster";
import { toyClusters } from "../data/toyClusters";

const titleClusterLayout = [
  { x: 18, y: 30 },
  { x: 48, y: 28 },
  { x: 72, y: 54 },
  { x: 38, y: 60 },
];

export function Slide01Title() {
  return (
    <div className="slide-content">
      <SlideTitle kicker="Embedding space" title="Clasificacion por similitud" lede="Una alternativa flexible a predecir solo clases fijas." />
      <div className="open-stage" style={{ inset: "31% 4% 8%" }}>
        {toyClusters.map((cluster, index) => (
          <InteractiveCluster key={cluster.id} cluster={{ ...cluster, ...titleClusterLayout[index] }} />
        ))}
      </div>
    </div>
  );
}
