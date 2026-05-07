type TooltipProps = {
  text: string;
};

export function Tooltip({ text }: TooltipProps) {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: -38,
        transform: "translateX(-50%)",
        whiteSpace: "nowrap",
        border: "1px solid var(--card-border)",
        borderRadius: 999,
        padding: "7px 10px",
        background: "var(--surface)",
        color: "var(--text-primary)",
        fontSize: 12,
        fontWeight: 800,
        boxShadow: "var(--shadow-soft)",
        pointerEvents: "none",
      }}
    >
      {text}
    </div>
  );
}
