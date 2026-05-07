import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import type { ClusterDatum } from "../data/toyClusters";

type InteractiveClusterProps = {
  cluster: ClusterDatum;
  dimmed?: boolean;
  onActive?: (id: string | null) => void;
  showLabel?: boolean;
};

const offsets = [
  [-18, -10],
  [15, -13],
  [-9, 15],
  [18, 12],
  [0, 0],
  [-24, 5],
  [24, -1],
  [-4, -23],
];

export function InteractiveCluster({ cluster, dimmed = false, onActive, showLabel = true }: InteractiveClusterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [proximity, setProximity] = useState(0);
  const points = useMemo(() => Array.from({ length: 8 }, (_, index) => offsets[index]), []);
  const expansion = Math.max(proximity, hovered ? 1 : 0);

  useEffect(() => {
    function handleMove(event: MouseEvent) {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);
      const radius = 190;
      setProximity(Math.max(0, 1 - distance / radius));
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => {
        setHovered(true);
        onActive?.(cluster.id);
      }}
      onMouseLeave={() => {
        setHovered(false);
        onActive?.(null);
      }}
      animate={{ opacity: dimmed ? 0.28 : 1, scale: 1 + expansion * 0.06 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      style={{
        position: "absolute",
        left: `${cluster.x}%`,
        top: `${cluster.y}%`,
        width: 250,
        height: 210,
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
      }}
    >
      <motion.div
        animate={{ scale: 0.54 + expansion * 0.5, opacity: 0.06 + expansion * 0.07 }}
        style={{
          position: "absolute",
          inset: 46,
          borderRadius: "50%",
          background: cluster.color,
          filter: "blur(2px)",
        }}
      />
      {points.map(([dx, dy], index) => (
        <motion.div
          key={index}
          animate={{
            x: dx * (0.72 + expansion * 1.45),
            y: dy * (0.72 + expansion * 1.3),
            scale: 1 + expansion * 0.12,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          style={{
            position: "absolute",
            left: 109,
            top: 91,
            display: "grid",
            placeItems: "center",
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: "none",
            background: expansion > 0.42 ? "transparent" : cluster.color,
            color: "var(--text-primary)",
            boxShadow: "none",
          }}
        >
          <ClusterIconPoint visible={expansion > 0.42}>{cluster.items[index % cluster.items.length]}</ClusterIconPoint>
        </motion.div>
      ))}
      {showLabel ? (
        <motion.div
          className="map-label"
          animate={{ y: -expansion * 10, color: expansion > 0.35 ? cluster.color : "var(--text-muted)" }}
          style={{ position: "absolute", left: 52, top: 8 }}
        >
          {cluster.label}
        </motion.div>
      ) : null}
    </motion.div>
  );
}

type ClusterIconPointProps = {
  children: string;
  visible: boolean;
};

function ClusterIconPoint({ children, visible }: ClusterIconPointProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pushState, setPushState] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    if (!visible) {
      setPushState({ x: 0, y: 0, scale: 1 });
      return;
    }

    function handleMove(event: MouseEvent) {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = centerX - event.clientX;
      const dy = centerY - event.clientY;
      const distance = Math.hypot(dx, dy);
      const radius = 90;

      if (distance > radius) {
        setPushState({ x: 0, y: 0, scale: 1 });
        return;
      }

      const strength = 1 - distance / radius;
      const safeDistance = distance || 1;
      setPushState({
        x: (dx / safeDistance) * 14 * strength,
        y: (dy / safeDistance) * 14 * strength,
        scale: 1 + 0.16 * strength,
      });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [visible]);

  return (
    <motion.span
      ref={ref}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? pushState.scale : 0.35, x: pushState.x, y: pushState.y }}
      style={{ fontSize: 30, lineHeight: 1, filter: "drop-shadow(0 8px 10px rgba(17,17,17,0.14))" }}
    >
      {children}
    </motion.span>
  );
}
