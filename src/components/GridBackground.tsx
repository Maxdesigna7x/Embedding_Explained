type GridBackgroundProps = {
  spacing?: number;
  lineColor?: string;
  dotColor?: string;
  opacity?: number;
  darkMode?: boolean;
};

export function GridBackground({
  spacing = 48,
  lineColor = "var(--grid-line)",
  dotColor = "var(--grid-dot)",
  opacity = 0.72,
}: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1.55px, transparent 1.8px), linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
        backgroundSize: `${spacing}px ${spacing}px, ${spacing}px ${spacing}px, ${spacing}px ${spacing}px`,
        backgroundPosition: "0 0, 0 0, 0 0",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.96), rgba(0,0,0,0.58))",
      }}
    />
  );
}
