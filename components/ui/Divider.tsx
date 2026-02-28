// components/ui/Divider.tsx
export default function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-white/10 ${className}`} />;
}