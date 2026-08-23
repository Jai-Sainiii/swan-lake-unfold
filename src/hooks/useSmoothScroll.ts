import { useEffect, type RefObject } from "react";
import Lenis from "lenis";
import { getGsap, prefersReducedMotion } from "@/lib/motion";

export function useSmoothScroll(containerRef?: RefObject<HTMLElement | null>, enabled = true) {
  useEffect(() => {
    if (prefersReducedMotion() || !enabled) return;
    const { gsap, ScrollTrigger } = getGsap();

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
    const container = isDesktop && containerRef?.current ? containerRef.current : null;
    const content = container ? (container.firstElementChild as HTMLElement) || container : document.documentElement;

    const lenis = new Lenis({
      wrapper: container || window,
      content: content,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [containerRef, enabled]);
}
