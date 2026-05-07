import { motion } from "motion/react";

type FlowArrowProps = {
  delay?: number;
};

export function FlowArrow({ delay = 0 }: FlowArrowProps) {
  return (
    <svg viewBox="0 0 96 28" width="96" height="28" aria-hidden="true" style={{ overflow: "visible" }}>
      <motion.path
        d="M4 14 H78"
        fill="none"
        stroke="var(--text-muted)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 0.55, delay }}
      />
      <motion.path
        d="M76 5 L90 14 L76 23"
        fill="none"
        stroke="var(--text-muted)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 0.35, delay: delay + 0.35 }}
      />
    </svg>
  );
}
