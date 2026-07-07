"use client";

import { useEffect } from "react";
import { homeMarkup } from "@/lib/homeMarkup";
import { initHome } from "@/lib/homeScript";

export default function Home() {
  useEffect(() => {
    // Guard against React StrictMode double-invocation in dev.
    if ((window as any).__homeInit) return;
    (window as any).__homeInit = true;
    initHome();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: homeMarkup }} />;
}
