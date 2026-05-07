type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 30, height: 5, background: "color-mix(in srgb, var(--text-muted) 20%, transparent)" }}>
      <div style={{ width: `${progress}%`, height: "100%", background: "var(--text-primary)", transition: "width 0.45s ease" }} />
    </div>
  );
}
