import { motion } from "motion/react";
import { ProximityItem } from "../components/ProximityItem";
import { SlideTitle } from "../components/SlideTitle";

export function Slide05TrainingEmbeddings() {
  const dataTypes = ["📄", "🖼️", "🎧", "💬", "📚", "🎞️", "🧾", "🌐"];
  const tasks = [
    {
      title: "Enmascarado",
      color: "var(--blue)",
      visual: ["⬆️", "↗️", "🚫", "↘️", "⬇️", "🚫", "⬅️", "↖️"],
      note: "ocultar una parte y reconstruirla",
    },
    {
      title: "Contrastivo",
      color: "var(--green)",
      visual: ["🐶", "↔", "🐕", "   ", "🐶", "⇥", "🚗"],
      note: "acercar pares similares y alejar distintos",
    },
    {
      title: "Siguiente paso",
      color: "var(--purple)",
      visual: ["A", "B", "C", "→", "?"],
      note: "predecir continuidad, clase o contexto",
    },
  ];

  return (
    <div className="slide-content">
      <SlideTitle
        compact
        kicker="Preentrenamiento"
        title="Como aprende un modelo a generar embeddings"
        lede="Primero ve muchos datos; luego aprende tareas que obligan a organizar similitudes."
      />

      <div style={{ position: "absolute", inset: "38% 6% 9%", display: "grid", gridTemplateColumns: "500px 660px", justifyContent: "center", gap: 30 }}>
        <motion.section
          className="glass-card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ padding: 30, overflow: "hidden" }}
        >
          <div className="map-label" style={{ marginBottom: 18, color: "var(--blue)" }}>muchos datos</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 24 }}>
            {dataTypes.map((item, index) => (
              <ProximityItem key={`${item}-${index}`} radius={130} push={12} grow={1.08}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.04 }}
                  style={{ display: "grid", placeItems: "center", height: 58, fontSize: 40 }}
                >
                  {item}
                </motion.div>
              </ProximityItem>
            ))}
          </div>
          <div style={{ color: "var(--text-primary)", fontSize: 30, fontWeight: 950, letterSpacing: "-0.06em", lineHeight: 1 }}>
            preentrenar con escala
          </div>
          <p style={{ margin: "14px 0 0", color: "var(--text-secondary)", fontSize: 20, fontWeight: 750, lineHeight: 1.2 }}>
            Textos, imagenes, audio, documentos o secuencias crean una base general de representacion.
          </p>
        </motion.section>

        <section style={{ display: "grid", gap: 16 }}>
          {tasks.map((task, index) => (
            <motion.div
              key={task.title}
              className="glass-card"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.12 }}
              style={{ display: "grid", gridTemplateColumns: "165px 1fr", gap: 30, alignItems: "center", padding: 18, borderLeft: `5px solid ${task.color}` }}
            >
              <div>
                <div className="map-label" style={{ color: task.color }}>{task.title}</div>
                <div style={{ marginTop: 8, color: "var(--text-secondary)", fontSize: 15, fontWeight: 750, lineHeight: 1.15 }}>{task.note}</div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", color: "var(--text-primary)", fontSize: 30, fontWeight: 950 }}>
                {task.visual.map((token, tokenIndex) => (
                  <span
                    key={`${token}-${tokenIndex}`}
                    style={{
                      minWidth: token.trim() ? 34 : 14,
                      minHeight: 34,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: token === "▣" || token === "?" ? 10 : 0,
                      background: token === "▣" || token === "?" ? "color-mix(in srgb, var(--text-muted) 20%, transparent)" : "transparent",
                    }}
                  >
                    {token}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}
