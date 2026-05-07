import { motion } from "motion/react";

type SoftmaxOutputProps = {
  rows?: { label: string; value: number; color: string }[];
};

export function SoftmaxOutput({
  rows = [
    { label: "animal", value: 18, color: "var(--blue)" },
    { label: "fruta", value: 73, color: "var(--green)" },
    { label: "vehiculo", value: 9, color: "var(--red)" },
  ],
}: SoftmaxOutputProps) {
  return (
    <div className="glass-card" style={{ padding: 24, width: 312 }}>
      <div className="map-label" style={{ fontSize: 16, marginBottom: 16 }}>softmax</div>
      {rows.map((row, index) => (
        <div key={row.label} style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-primary)", fontWeight: 850, fontSize: 16 }}>
            <span>{row.label}</span>
            <span>{row.value}%</span>
          </div>
          <div style={{ height: 9, marginTop: 6, borderRadius: 999, background: "color-mix(in srgb, var(--text-muted) 18%, transparent)", overflow: "hidden" }}>
            <motion.div initial={{ width: 0 }} animate={{ width: `${row.value}%` }} transition={{ duration: 0.65, delay: index * 0.12 }} style={{ height: "100%", borderRadius: 999, background: row.color }} />
          </div>
        </div>
      ))}
    </div>
  );
}
