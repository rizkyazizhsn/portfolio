"use client";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/modules/hero/Hero";
import Lenis from "lenis";
import { useEffect } from "react";

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
      <div className="h-dvh" />
    </main>
  );
}
