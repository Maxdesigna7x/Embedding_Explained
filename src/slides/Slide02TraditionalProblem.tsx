import { motion } from "motion/react";
import { ObjectCard } from "../components/ObjectCard";
import { SlideTitle } from "../components/SlideTitle";
import { ProximityItem } from "../components/ProximityItem";

export function Slide02TraditionalProblem() {
  return (
    <div className="slide-content">
      <SlideTitle compact kicker="Problema" title="Softmax solo elige clases vistas" lede="Si aparece algo nuevo, debe forzarlo dentro de una caja conocida." />
      <div style={{ position: "absolute", inset: "36% 8% 13%", display: "grid", gridTemplateColumns: "repeat(4, minmax(140px, 210px))", justifyContent: "center", gap: 24, alignItems: "center" }}>
        {[ ["🐶", "perros", "var(--blue)"], ["🐱", "gatos", "var(--green)"], ["🐄", "vacas", "var(--gold)"] ].map(([icon, label, color], index) => (
          <ProximityItem key={label} radius={160} push={16} grow={1.07}>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.18 }}>
              <ObjectCard icon={icon} label={label} accent={color} delay={index * 0.08} />
            </motion.div>
          </ProximityItem>
        ))}
        <motion.div initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.45 }} style={{ display: "grid", justifyItems: "center", gap: 14 }}>
          <ProximityItem radius={160} push={16} grow={1.08}>
            <ObjectCard icon="🚗" label="clase nueva" accent="var(--purple)" />
          </ProximityItem>
          <div className="map-label" style={{ color: "var(--purple)" }}>no cabe</div>
        </motion.div>
      </div>
    </div>
  );
}
