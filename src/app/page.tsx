"use client";
import Navbar from "@/components/layout/Navbar";
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
    <main className="relative overflow-hidden bg-white">
      <Navbar />
      <div className="h-dvh">
        
      </div>
    </main>
  );
}
