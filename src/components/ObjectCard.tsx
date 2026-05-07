import { motion } from "motion/react";

type ObjectCardProps = {
  icon: string;
  label: string;
  accent?: string;
  delay?: number;
};

export function ObjectCard({ icon, label, accent = "var(--blue)", delay = 0 }: ObjectCardProps) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 16, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.42, delay }}
      style={{
        display: "grid",
        minWidth: 112,
        placeItems: "center",
        gap: 8,
        padding: "18px 20px",
        color: "var(--text-primary)",
        borderTop: `4px solid ${accent}`,
      }}
    >
      <span style={{ color: "var(--text-primary)", fontSize: 38 }}>{icon}</span>
      <span style={{ color: "var(--text-primary)", fontSize: 14, fontWeight: 850 }}>{label}</span>
    </motion.div>
  );
}
