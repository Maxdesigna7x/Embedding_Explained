import { motion } from "motion/react";
import { SlideTitle } from "../components/SlideTitle";

export function Slide13WhenToUseEach() {
  return (
    <div className="slide-content">
      <SlideTitle compact kicker="Decision" title="La eleccion depende del problema" lede="Problema cerrado: MLP. Clases cambiantes o pocos datos: similitud." />
      <div style={{ position: "absolute", inset: "42% 5% 16%", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 690px))", justifyContent: "center", gap: 34 }}>
        {[ ["muchos datos + clases fijas", "MLP + softmax", "var(--purple)"], ["pocos datos + clases nuevas", "similitud", "var(--blue)"] ].map(([top, bottom, color], index) => (
          <motion.div key={bottom} className="glass-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }} style={{ padding: 26, display: "grid", alignContent: "center", gap: 14, color: "var(--text-primary)", borderTop: `5px solid ${color}` }}>
            <div className="map-label" style={{ fontSize: 18 }}>si tienes</div>
            <div style={{ color: "var(--text-primary)", fontSize: 36, fontWeight: 950, letterSpacing: "-0.05em" }}>{top}</div>
            <div className="map-label" style={{ fontSize: 18 }}>usa</div>
            <div style={{ color, fontSize: 48, fontWeight: 950, letterSpacing: "-0.07em" }}>{bottom}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
