import { motion } from "motion/react";

type SlideTitleProps = {
  kicker?: string;
  title: string;
  lede?: string;
  compact?: boolean;
};

export function SlideTitle({ kicker, title, lede, compact = false }: SlideTitleProps) {
  return (
    <motion.header initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {kicker ? <p className="slide-kicker">{kicker}</p> : null}
      <h1 className={`slide-title ${compact ? "compact" : ""}`}>{title}</h1>
      {lede ? <p className="slide-lede">{lede}</p> : null}
    </motion.header>
  );
}
