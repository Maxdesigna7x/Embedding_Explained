import { motion } from "motion/react";
import { EmbeddingPoint } from "./EmbeddingPoint";

type SimilarityItem = {
  x: number;
  y: number;
  color: string;
  label: string;
  icon: string;
  active?: boolean;
  vectorX: number;
  vectorY: number;
  vector?: [string, string];
};

type DualSimilarityViewProps = {
  items: SimilarityItem[];
  query: SimilarityItem;
  rightTitle: string;
};

export function DualSimilarityView({ items, query, rightTitle }: DualSimilarityViewProps) {
  const neighbors = items.filter((item) => item.active);
  const vectorRows = [query, ...items];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 28, width: "100%", height: "100%" }}>
      <div className="glass-card" style={{ position: "relative", overflow: "hidden", minHeight: 360, padding: "64px 28px 28px" }}>
        <div className="map-label" style={{ position: "absolute", left: 22, top: 18 }}>Representacion embedding</div>
        <div style={{ display: "grid", gap: 14, transform: "scale(var(--inner-scale, 1))", transformOrigin: "top left" }}>
          {vectorRows.map((item, index) => (
            <motion.div
              key={`${item.icon}-${item.label}-${index}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              style={{
                display: "grid",
                gridTemplateColumns: "54px 1fr",
                alignItems: "center",
                gap: 14,
                color: "var(--text-primary)",
                fontSize: 26,
                fontWeight: 900,
                letterSpacing: "-0.04em",
              }}
            >
              <span style={{ fontSize: 38, lineHeight: 1 }}>{item.icon}</span>
              <span>
                : [{item.vector?.[0] ?? (item.vectorX / 40).toFixed(1)}, {item.vector?.[1] ?? ((100 - item.vectorY) / 40).toFixed(1)}]
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass-card" style={{ position: "relative", overflow: "hidden", minHeight: 360 }}>
        <div className="map-label" style={{ position: "absolute", left: 22, top: 18 }}>{rightTitle}</div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          {neighbors.map((item, index) => (
            <motion.line
              key={`space-${index}`}
              x1={query.x}
              y1={query.y}
              x2={item.x}
              y2={item.y}
              stroke="var(--blue)"
              strokeWidth="0.45"
              opacity="0.55"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            />
          ))}
        </svg>
        {items.map((item) => (
          <EmbeddingPoint key={`right-${item.icon}-${item.x}`} x={item.x} y={item.y} color={item.color} label={item.label} icon={item.icon} size={21} active={item.active} />
        ))}
        <EmbeddingPoint x={query.x} y={query.y} color={query.color} label={query.label} icon={query.icon} size={23} active />
      </div>
    </div>
  );
}
