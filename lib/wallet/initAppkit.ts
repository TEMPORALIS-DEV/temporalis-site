"use client";

/*
Reown AppKit temporarily disabled.
This stub prevents build errors if the Reown packages are not installed.
*/

export function initAppKit() {
  if (typeof window !== "undefined") {
    console.log("Reown AppKit disabled (packages not installed).");
  }
}