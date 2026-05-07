import { motion } from "motion/react";

type VectorCardProps = {
  values?: string[];
  label?: string;
};

export function VectorCard({ values = ["0.21", "-0.84", "0.12", "0.67"], label = "vector" }: VectorCardProps) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.48, delay: 0.28 }}
      style={{ width: 340, justifySelf: "start", padding: 24, color: "var(--text-primary)" }}
    >
      <div className="map-label" style={{ fontSize: 14, marginBottom: 12 }}>{label}</div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", color: "var(--text-primary)", fontSize: 22, fontWeight: 850 }}>
        <span>[</span>
        {values.map((value, index) => (
          <span key={value + index} style={{ color: index % 2 ? "var(--text-secondary)" : "var(--text-primary)" }}>
            {value}{index < values.length - 1 ? "," : ""}
          </span>
        ))}
        <span>]</span>
      </div>
    </motion.div>
  );
}
