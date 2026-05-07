import { type CSSProperties, useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { GridBackground } from "../components/GridBackground";
import { ProgressBar } from "./ProgressBar";
import { useKeyboardNavigation } from "./KeyboardNavigation";
import type { SlideDefinition } from "./slides";

type PresentationShellProps = {
  slides: SlideDefinition[];
};

export function PresentationShell({ slides }: PresentationShellProps) {
  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const current = slides[index];
  const Slide = current.Component;

  const goNext = useCallback(() => setIndex((value) => Math.min(value + 1, slides.length - 1)), [slides.length]);
  const goPrev = useCallback(() => setIndex((value) => Math.max(value - 1, 0)), []);

  useKeyboardNavigation({ onNext: goNext, onPrev: goPrev });

  return (
    <main
      className="app-shell"
      data-theme={theme}
      style={{ "--content-scale": current.scale ?? 1, "--inner-scale": current.innerScale ?? 1 } as CSSProperties}
    >
      <GridBackground />
      <AnimatePresence mode="wait">
        <motion.section
          key={current.id}
          className="slide"
          initial={{ opacity: 0, scale: 0.985, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.01, y: -10 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Slide />
        </motion.section>
      </AnimatePresence>

      <div className="floating-controls">
        <button className="nav-button" onClick={goPrev} disabled={index === 0} type="button">Anterior</button>
        <span className="slide-count">{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        <button className="nav-button" onClick={goNext} disabled={index === slides.length - 1} type="button">Siguiente</button>
        <button className="nav-button" onClick={() => setTheme((value) => (value === "light" ? "dark" : "light"))} type="button">{theme === "light" ? "Dark" : "Light"}</button>
      </div>

      <ProgressBar current={index} total={slides.length} />
    </main>
  );
}
