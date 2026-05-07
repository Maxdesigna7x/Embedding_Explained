import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Tooltip } from "./Tooltip";

type EmbeddingPointProps = {
  x: number;
  y: number;
  color: string;
  label?: string;
  size?: number;
  active?: boolean;
  icon?: string;
};

export function EmbeddingPoint({ x, y, color, label, size = 10, active = false, icon }: EmbeddingPointProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pushState, setPushState] = useState({ x: 0, y: 0, scale: 1 });
  const selected = hovered || active;
  const showIcon = Boolean(icon);
  const visualSize = showIcon ? size + 18 : size;

  useEffect(() => {
    if (!showIcon) return;

    function handleMove(event: MouseEvent) {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = centerX - event.clientX;
      const dy = centerY - event.clientY;
      const distance = Math.hypot(dx, dy);
      const radius = 95;

      if (distance > radius) {
        setPushState({ x: 0, y: 0, scale: 1 });
        return;
      }

      const strength = 1 - distance / radius;
      const safeDistance = distance || 1;
      setPushState({
        x: (dx / safeDistance) * 16 * strength,
        y: (dy / safeDistance) * 16 * strength,
        scale: 1 + 0.16 * strength,
      });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [showIcon]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: active ? 1 : 0.82, x: pushState.x, y: pushState.y, scale: (selected ? 1.55 : 1) * pushState.scale }}
      transition={{ type: "spring", stiffness: 180, damping: 17 }}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: visualSize,
        height: visualSize,
        display: "grid",
        placeItems: "center",
        borderRadius: "50%",
        background: showIcon ? "transparent" : color,
        color: "var(--text-primary)",
        border: "none",
        boxShadow: showIcon ? "none" : selected ? `0 0 0 7px color-mix(in srgb, ${color} 18%, transparent), var(--shadow-point)` : "none",
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
      }}
    >
      {showIcon ? <span style={{ fontSize: size + 22, lineHeight: 1, filter: "drop-shadow(0 8px 10px rgba(17,17,17,0.16))" }}>{icon}</span> : null}
      {hovered && label ? <Tooltip text={label} /> : null}
    </motion.div>
  );
}
