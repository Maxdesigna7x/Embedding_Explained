import { motion } from "motion/react";

type MLModelDiagramProps = {
  label?: string;
};

export function MLModelDiagram({ label = "encoder" }: MLModelDiagramProps) {
  const layers = [3, 5, 4, 3];
  const width = 250;
  const height = 190;
  const layerGap = width / (layers.length + 1);

  const nodes = layers.flatMap((count, layer) =>
    Array.from({ length: count }, (_, index) => ({
      id: `${layer}-${index}`,
      layer,
      x: layerGap * (layer + 1),
      y: (height / (count + 1)) * (index + 1),
    })),
  );

  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, delay: 0.18 }}
      style={{ width, padding: "18px 18px 16px" }}
    >
      <div className="map-label" style={{ fontSize: 13, marginBottom: 8 }}>{label}</div>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} aria-label="Modelo machine learning">
        {nodes.map((from) =>
          nodes
            .filter((to) => to.layer === from.layer + 1)
            .map((to) => (
              <motion.line
                key={`${from.id}-${to.id}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="var(--text-muted)"
                strokeWidth="1"
                opacity="0.35"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.55, delay: from.layer * 0.08 }}
              />
            )),
        )}
        {nodes.map((node, index) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="7"
            fill={node.layer === layers.length - 1 ? "var(--purple)" : "var(--surface)"}
            stroke={node.layer === layers.length - 1 ? "var(--purple)" : "var(--text-secondary)"}
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.025 }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
