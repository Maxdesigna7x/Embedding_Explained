import { type CSSProperties, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { GridBackground } from "../components/GridBackground";
import { ProgressBar } from "./ProgressBar";
import { useKeyboardNavigation } from "./KeyboardNavigation";
import type { SlideDefinition } from "./slides";

type PresentationShellProps = {
  slides: SlideDefinition[];
};

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;

function getViewportScale() {
  if (typeof window === "undefined") return 1;

  return Math.min(window.innerWidth / DESIGN_WIDTH, window.innerHeight / DESIGN_HEIGHT);
}

export function PresentationShell({ slides }: PresentationShellProps) {
  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [viewportScale, setViewportScale] = useState(getViewportScale);
  const current = slides[index];
  const Slide = current.Component;

  const goNext = useCallback(() => setIndex((value) => Math.min(value + 1, slides.length - 1)), [slides.length]);
  const goPrev = useCallback(() => setIndex((value) => Math.max(value - 1, 0)), []);

  useKeyboardNavigation({ onNext: goNext, onPrev: goPrev });

  useEffect(() => {
    function handleResize() {
      setViewportScale(getViewportScale());
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stageLeft = Math.max(0, (window.innerWidth - DESIGN_WIDTH * viewportScale) / 2);
  const stageTop = Math.max(0, (window.innerHeight - DESIGN_HEIGHT * viewportScale) / 2);

  return (
    <main
      className="app-shell"
      data-theme={theme}
      style={{
        "--content-scale": current.scale ?? 1,
        "--inner-scale": current.innerScale ?? 1,
        "--viewport-scale": viewportScale,
        "--stage-left": `${stageLeft}px`,
        "--stage-top": `${stageTop}px`,
      } as CSSProperties}
    >
      <div className="design-stage">
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
      </div>

      <div className="rotate-device">Gira tu dispositivo para ver mejor la presentacion.</div>
    </main>
  );
}
