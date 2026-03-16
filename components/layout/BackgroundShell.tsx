"use client";

import { PropsWithChildren, useMemo } from "react";
import { usePathname } from "next/navigation";

export default function BackgroundShell({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const isHome = useMemo(() => {
    if (!pathname) return false;
    return pathname === "/";
  }, [pathname]);

  return (
    <div className={isHome ? "production-bg" : "pages-bg"}>
      {/* طبقة ذهبية للصفحة الرئيسية فقط */}
      {isHome ? <div className="sky-overlay-layer" /> : null}

      {/* محتوى الموقع فوق الخلفية */}
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
}