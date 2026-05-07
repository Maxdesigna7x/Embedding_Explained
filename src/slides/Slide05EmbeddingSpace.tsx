import { SlideTitle } from "../components/SlideTitle";
import { toyClusters } from "../data/toyClusters";
import { InteractiveCluster } from "../components/InteractiveCluster";

const embeddingClusterLayout = [
  { x: 18, y: 30 },
  { x: 48, y: 28 },
  { x: 72, y: 54 },
  { x: 38, y: 60 },
];

export function Slide05EmbeddingSpace() {
  return (
    <div className="slide-content">
      <SlideTitle compact kicker="Espacio" title="Cada elemento es un punto" lede="Los parecidos se agrupan cerca; los distintos quedan lejos." />
      <div className="open-stage" style={{ inset: "31% 4% 8%" }}>
        {toyClusters.map((cluster, index) => (
          <InteractiveCluster key={cluster.id} cluster={{ ...cluster, ...embeddingClusterLayout[index] }} />
        ))}
      </div>
    </div>
  );
}
