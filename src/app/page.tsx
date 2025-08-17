"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "@/modules/hero/Hero";
import About from "@/modules/about/About";
import Navbar from "@/components/layout/Navbar";
import Experience from "@/modules/experience/Experience";
import Work from "@/modules/work/Work";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Work />
    </main>
  );
}
