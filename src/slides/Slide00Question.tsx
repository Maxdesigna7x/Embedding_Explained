import { motion } from "motion/react";
import { ProximityItem } from "../components/ProximityItem";
import { SlideTitle } from "../components/SlideTitle";

export function Slide00Question() {
  const examples = [
    { title: "Reconocer una cara", icons: ["📱", "🧔🏿‍♂️", "🧒🏼", "🧔🏻"], color: "var(--blue)" },
    { title: "Validar una firma", icons: ["؏", "௸", "؏"], color: "var(--gold)" },
    { title: "Identificar una voz", icons: ["🎙️", "🔊", "🗣️"], color: "var(--purple)" },
  ];

  return (
    <div className="slide-content">
      <SlideTitle
        kicker="00"
        title="Pregunta"
        lede="Si tuvieras que crear un sistema que reconozca personas individuales, como desbloqueo facial, verificacion de firmas o identificacion por voz, ¿como lo resolverias con ML?"
      />
      <div style={{ position: "absolute", inset: "50% 8% 15%", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 360px))", justifyContent: "center", gap: 22 }}>
        {examples.map((example, index) => (
          <ProximityItem key={example.title} radius={180} push={18} grow={1.08}>
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              style={{ minHeight: 168, padding: 22, borderTop: `5px solid ${example.color}` }}
            >
              <div className="map-label" style={{ marginBottom: 18, color: example.color }}>{example.title}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, minHeight: 90 }}>
                {example.icons.map((icon, iconIndex) => (
                  <span key={`${icon}-${iconIndex}`} style={{ color: "var(--text-primary)", fontSize: icon === "؏" || icon === "௸" ? 52 : 42, fontWeight: 950, lineHeight: 1 }}>
                    {icon}
                  </span>
                ))}
              </div>
            </motion.div>
          </ProximityItem>
        ))}
      </div>
    </div>
  );
}
