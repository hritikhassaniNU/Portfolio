"use client";

import { useEffect } from "react";
import { initHome } from "@/lib/homeScript";
import Preloader from "@/components/Preloader";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";
import AIAssistant from "@/components/AIAssistant";

export default function Home() {
  useEffect(() => {
    // Guard against React StrictMode double-invocation in dev.
    if ((window as any).__homeInit) return;
    (window as any).__homeInit = true;
    initHome();
  }, []);

  return (
    <>
      <Preloader />
      <div className="glow" id="glow" />
      <div className="progress" id="progress" />

      <div className="shell">
        <Intro />
        <main className="content">
          <About />
          <Experience />
          <Projects />
          <Stack />
          <Education />
          <Contact />
          <SiteFooter />
        </main>
      </div>

      <AIAssistant />
    </>
  );
}
