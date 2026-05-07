import { ObjectCard } from "../components/ObjectCard";
import { FlowArrow } from "../components/FlowArrow";
import { MLModelDiagram } from "../components/MLModelDiagram";
import { ProximityItem } from "../components/ProximityItem";
import { SlideTitle } from "../components/SlideTitle";
import { VectorCard } from "../components/VectorCard";

export function Slide04WhatIsEmbedding() {
  const inputs = [
    ["🐶", "perro", "var(--blue)"],
    ["🖼️", "imagen", "var(--green)"],
    ["🎧", "audio", "var(--purple)"],
    ["📄", "documento", "var(--gold)"],
  ];

  return (
    <div className="slide-content">
      <SlideTitle compact kicker="Representacion" title="Modelos convierten objetos en embeddings" lede="El embedding no clasifica: transforma entradas en vectores que conservan similitud." />
      <div style={{ position: "absolute", inset: "38% 5% 13%", display: "grid", gridTemplateColumns: "minmax(300px, 1fr) 96px 250px 96px minmax(300px, 1fr)", gap: 18, alignItems: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(120px, 150px))", justifyContent: "end", gap: 16 }}>
          {inputs.map(([icon, label, color], index) => (
            <ProximityItem key={label} radius={150} push={14} grow={1.07}>
              <ObjectCard icon={icon} label={label} accent={color} delay={index * 0.08} />
            </ProximityItem>
          ))}
        </div>
        <FlowArrow delay={0.15} />
        <MLModelDiagram label="modelo encoder" />
        <FlowArrow delay={0.35} />
        <VectorCard label="embedding" />
      </div>
    </div>
  );
}
