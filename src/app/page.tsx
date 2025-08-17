"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "@/modules/hero/Hero";
import Work from "@/modules/work/Work";
import About from "@/modules/about/About";
import Blog from "@/modules/hero/blog/Blog";
import Client from "@/modules/client/Client";
import Navbar from "@/components/layout/Navbar";
import Experience from "@/modules/experience/Experience";

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
      <Client />
      <Blog />
    </main>
  );
}
