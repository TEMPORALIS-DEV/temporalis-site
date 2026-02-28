// components/ui/Metric.tsx
export default function Metric({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <div className="text-xs uppercase tracking-[0.18em] opacity-60">
        {label}
      </div>
      <div className="mt-2 text-2xl font-medium tracking-tight">{value}</div>
      {note ? <div className="mt-2 text-sm opacity-60">{note}</div> : null}
    </div>
  );
}