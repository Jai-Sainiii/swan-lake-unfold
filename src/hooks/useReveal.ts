import { useEffect } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/motion";

/**
 * Reveals every `.reveal` element inside `root` as it enters the viewport.
 * Soft: opacity + small upward movement + blur-to-sharp.
 */
export function useReveal(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const { gsap, ScrollTrigger } = getGsap();

    if (prefersReducedMotion()) {
      gsap.set(".reveal", { opacity: 1, y: 0, filter: "none" });
      return;
    }

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".reveal");
      items.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power3.out",
          delay: Number(el.dataset.delay ?? 0),
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [enabled]);
}
