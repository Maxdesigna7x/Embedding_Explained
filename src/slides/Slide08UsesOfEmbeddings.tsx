import { motion } from "motion/react";
import { ProximityItem } from "../components/ProximityItem";
import { SlideTitle } from "../components/SlideTitle";

export function Slide08UsesOfEmbeddings() {
  const uses = ["clasificacion", "busqueda", "clustering", "recomendacion", "similares"];
  return (
    <div className="slide-content">
      <SlideTitle compact kicker="Usos" title="Un embedding habilita varias tareas" lede="La misma representacion puede explotarse de formas distintas." />
      <div style={{ position: "absolute", inset: "36% 12% 15%" }}>
        <ProximityItem radius={160} push={14} grow={1.06} style={{ position: "absolute", left: "50%", top: "50%" }}>
          <div className="glass-card" style={{ transform: "translate(-50%, -50%)", padding: "22px 30px", fontSize: 26, fontWeight: 950 }}>embedding</div>
        </ProximityItem>
        {uses.map((use, index) => {
          const angle = (Math.PI * 2 * index) / uses.length - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 34;
          const y = 50 + Math.sin(angle) * 34;
          return (
            <ProximityItem key={use} radius={150} push={18} grow={1.08} style={{ position: "absolute", left: `${x}%`, top: `${y}%` }}>
              <motion.div className="glass-card map-label" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.12 }} style={{ transform: "translate(-50%, -50%)", padding: "12px 16px", color: "var(--text-primary)", whiteSpace: "nowrap" }}>{use}</motion.div>
            </ProximityItem>
          );
        })}
      </div>
    </div>
  );
}
