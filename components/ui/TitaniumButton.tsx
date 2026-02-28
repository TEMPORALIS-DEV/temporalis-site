"use client";

export default function TitaniumButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="
        border
        border-[var(--border-strong)]
        text-[var(--titanium)]
        px-8
        py-3
        rounded-md
        text-sm
        tracking-[0.15em]
        transition
        hover:border-[var(--sovereign-gold)]
        hover:text-white
      "
    >
      {children}
    </button>
  );
}