import { EmbeddingPoint } from "../components/EmbeddingPoint";
import { SlideTitle } from "../components/SlideTitle";

export function Slide11OneShotFewShot() {
  return (
    <div className="slide-content">
      <SlideTitle compact kicker="Pocas muestras" title="One-shot y few-shot" lede="Si el embedding es bueno, una o pocas referencias ya aportan senal util." />
      <div className="open-stage" style={{ inset: "35% 8% 10%" }}>
        <EmbeddingPoint x={22} y={56} color="var(--red)" label="one-shot" active icon="🐦" size={15} />
        <EmbeddingPoint x={46} y={47} color="var(--gold)" label="few-shot" icon="🐱" size={15} />
        <EmbeddingPoint x={53} y={53} color="var(--gold)" label="few-shot" icon="🐈" size={15} />
        <EmbeddingPoint x={43} y={59} color="var(--gold)" label="few-shot" icon="😺" size={15} />
        {Array.from({ length: 13 }).map((_, i) => <EmbeddingPoint key={i} x={70 + (i % 5) * 4} y={42 + Math.floor(i / 5) * 6.2} color="var(--blue)" label="muchos" icon="🐶" size={14} />)}
        <EmbeddingPoint x={26} y={61} color="var(--purple)" label="nuevo" active icon="🐤" size={16} />
        <div className="map-label" style={{ position: "absolute", left: "24%", top: "70%", color: "var(--red)", transform: "translateX(-50%)", textAlign: "center" }}>1 ejemplo</div>
        <div className="map-label" style={{ position: "absolute", left: "48%", top: "70%", color: "var(--gold)", transform: "translateX(-50%)", textAlign: "center" }}>3 ejemplos</div>
        <div className="map-label" style={{ position: "absolute", left: "78%", top: "70%", color: "var(--blue)", transform: "translateX(-50%)", textAlign: "center" }}>muchos</div>
      </div>
    </div>
  );
}
