"use client";

export async function openAppKit() {
  // Minimal safe open:
  try {
    const mod = await import("@reown/appkit/react");
    // Some builds expose global controller; if not, no crash.
    const anyMod: any = mod;
    if (anyMod?.appKit?.open) return anyMod.appKit.open();
  } catch {
    // ignore
  }
}