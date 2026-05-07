import { DecisionBoundary } from "../components/DecisionBoundary";
import { EmbeddingPoint } from "../components/EmbeddingPoint";
import { SlideTitle } from "../components/SlideTitle";
import { SoftmaxOutput } from "../components/SoftmaxOutput";

export function Slide09MLPSoftmax() {
  return (
    <div className="slide-content">
      <SlideTitle compact kicker="Uso 1" title="MLP aprende fronteras" lede="Funciona bien con clases fijas y suficientes datos." />
      <div style={{ position: "absolute", inset: "32% 3% 8%", display: "grid", gridTemplateColumns: "minmax(0, 984px) 336px", justifyContent: "center", gap: 31 }}>
        <div className="glass-card" style={{ position: "relative", overflow: "hidden" }}>
          <DecisionBoundary />
          <EmbeddingPoint x={24} y={46} color="var(--blue)" label="animal" icon="🐶" size={21} />
          <EmbeddingPoint x={31} y={55} color="var(--blue)" label="animal" icon="🐱" size={21} />
          <EmbeddingPoint x={25} y={62} color="var(--blue)" label="animal" icon="🐄" size={21} />
          <EmbeddingPoint x={66} y={34} color="var(--green)" label="fruta" icon="🍎" size={21} />
          <EmbeddingPoint x={74} y={42} color="var(--green)" label="fruta" icon="🍇" size={21} />
          <EmbeddingPoint x={69} y={50} color="var(--green)" label="fruta" icon="🍋" size={21} />
          <EmbeddingPoint x={52} y={70} color="var(--red)" label="vehiculo" icon="🚗" size={21} />
          <EmbeddingPoint x={61} y={76} color="var(--red)" label="vehiculo" icon="🚚" size={21} />
          <EmbeddingPoint x={56} y={64} color="var(--purple)" label="nuevo" active icon="🚙" size={23} />
        </div>
        <SoftmaxOutput />
      </div>
    </div>
  );
}
