import { type ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type ProximityItemProps = {
  children: ReactNode;
  radius?: number;
  push?: number;
  grow?: number;
  style?: React.CSSProperties;
};

export function ProximityItem({ children, radius = 180, push = 20, grow = 1.08, style }: ProximityItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [motionState, setMotionState] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    function handleMove(event: MouseEvent) {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - event.clientX;
      const dy = cy - event.clientY;
      const distance = Math.hypot(dx, dy);

      if (distance > radius) {
        setMotionState({ x: 0, y: 0, scale: 1 });
        return;
      }

      const strength = 1 - distance / radius;
      const safeDistance = distance || 1;
      setMotionState({
        x: (dx / safeDistance) * push * strength,
        y: (dy / safeDistance) * push * strength,
        scale: 1 + (grow - 1) * strength,
      });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [grow, push, radius]);

  return (
    <motion.div ref={ref} animate={motionState} transition={{ type: "spring", stiffness: 140, damping: 20 }} style={style}>
      {children}
    </motion.div>
  );
}
