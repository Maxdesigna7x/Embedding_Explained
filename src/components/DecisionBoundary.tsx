type DecisionBoundaryProps = {
  variant?: "mlp" | "simple";
};

export function DecisionBoundary({ variant = "mlp" }: DecisionBoundaryProps) {
  return (
    <svg viewBox="0 0 600 360" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
      <path d="M170 20 C260 94 230 164 310 220 C376 266 420 294 450 350" fill="none" stroke="var(--text-muted)" strokeWidth="3" strokeDasharray={variant === "mlp" ? "0" : "10 10"} opacity="0.7" />
      <path d="M20 226 C140 168 228 206 314 128 C394 54 494 78 584 28" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeDasharray="9 10" opacity="0.45" />
    </svg>
  );
}
