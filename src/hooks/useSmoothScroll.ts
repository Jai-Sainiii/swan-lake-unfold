import { useEffect, type RefObject } from "react";
import Lenis from "lenis";
import { getGsap, prefersReducedMotion } from "@/lib/motion";

export function useSmoothScroll(containerRef?: RefObject<HTMLElement | null>, enabled = true) {
  useEffect(() => {
    if (prefersReducedMotion() || !enabled) return;
    const { gsap, ScrollTrigger } = getGsap();

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
    const container = isDesktop && containerRef?.current ? containerRef.current : null;
    const mainContent = container
      ? (container.querySelector("main") as HTMLElement) || container
      : document.documentElement;

    const lenis = new Lenis({
      wrapper: container || window,
      content: mainContent,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Automatically recalculate scroll limit whenever main content height expands
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    if (mainContent) {
      resizeObserver.observe(mainContent);
    }

    // Additional delayed refreshes for dynamic asset loading
    const t1 = setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 500);

    const t2 = setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      resizeObserver.disconnect();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [containerRef, enabled]);
}
