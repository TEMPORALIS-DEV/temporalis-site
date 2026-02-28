"use client";

export default function Toast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-8 right-8 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] px-6 py-4 text-sm text-[var(--text-primary)] rounded-md">
      {message}
    </div>
  );
}