import { motion } from "motion/react";

export function ComparisonTable() {
  const rows = [
    ["clases fijas", "clases flexibles"],
    ["requiere entrenamiento", "compara embeddings"],
    ["muchos ejemplos", "pocos ejemplos"],
    ["probabilidades", "vecinos cercanos"],
  ];

  return (
    <div className="glass-card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "min(900px, 100%)", overflow: "hidden" }}>
      {["MLP + softmax", "Similitud"].map((title, col) => (
        <div key={title} style={{ padding: 28, borderLeft: col ? "1px solid var(--card-border)" : "none" }}>
          <div style={{ color: col ? "var(--blue)" : "var(--purple)", fontSize: 26, fontWeight: 950, letterSpacing: "-0.05em", marginBottom: 20 }}>{title}</div>
          {rows.map((row, index) => (
            <motion.div
              key={row[col]}
              initial={{ opacity: 0, x: col ? 16 : -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.12 }}
              style={{ padding: "14px 0", borderTop: "1px solid var(--card-border)", color: "var(--text-primary)", fontSize: 20, fontWeight: index === 2 ? 900 : 750 }}
            >
              {row[col]}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
