import { EmbeddingPoint } from "../components/EmbeddingPoint";
import { SlideTitle } from "../components/SlideTitle";

const groups = [
  { label: "Muchos", color: "var(--blue)", icon: "🐶", x: 30, y: 54, count: 18, columns: 6, gapX: 3.2, gapY: 5.4 },
  { label: "Pocos", color: "var(--gold)", icon: "🐱", x: 52, y: 50, count: 4, columns: 4, gapX: 3.8, gapY: 5.4 },
  { label: "Uno", color: "var(--red)", icon: "🐦", x: 69, y: 56, count: 1, columns: 1, gapX: 0, gapY: 0 },
];

export function Slide03FewExamplesProblem() {
  return (
    <div className="slide-content">
      <SlideTitle compact kicker="Datos" title="No todas las clases tienen suficientes ejemplos" lede="El entrenamiento se debilita cuando una clase tiene una o pocas muestras." />
      <div className="open-stage" style={{ inset: "35% 7% 9%" }}>
        {groups.map((group) => (
          <div key={group.label}>
            {Array.from({ length: group.count }).map((_, index) => (
              <EmbeddingPoint
                key={index}
                x={group.x + (index % group.columns) * group.gapX - ((Math.min(group.count, group.columns) - 1) * group.gapX) / 2}
                y={group.y + Math.floor(index / group.columns) * group.gapY}
                color={group.color}
                label={group.label}
                active={group.count === 1}
                icon={group.icon}
                size={13}
              />
            ))}
            <div className="map-label" style={{ position: "absolute", left: `${group.x}%`, top: `${group.y + 18}%`, color: group.color, transform: "translateX(-50%)", textAlign: "center" }}>{group.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
