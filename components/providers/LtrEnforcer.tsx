"use client";

import { useEffect } from "react";

export default function LtrEnforcer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force LTR for dashboard
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }, []);

  return <>{children}</>;
}
