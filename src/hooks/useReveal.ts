import { useEffect } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/motion";

/**
 * Reveals every `.reveal` element inside `root` as it enters the viewport.
 * Soft: opacity + small upward movement + blur-to-sharp.
 * Includes IntersectionObserver fallback for guaranteed 100% reliability.
 */
export function useReveal(enabled = true, scroller?: HTMLElement | null) {
  useEffect(() => {
    if (!enabled) return;
    const { gsap, ScrollTrigger } = getGsap();

    if (prefersReducedMotion()) {
      gsap.set(".reveal", { opacity: 1, y: 0, filter: "none" });
      return;
    }

    const targetScroller = scroller || window;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".reveal");
      items.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power2.out",
          delay: Number(el.dataset["delay"] ?? 0),
          scrollTrigger: {
            trigger: el,
            scroller: targetScroller,
            start: "top 99%",
            once: true,
          },
        });
      });

      // Immediate refresh + delayed refreshes to account for asset loads & container setup
      ScrollTrigger.refresh();
      const t1 = setTimeout(() => ScrollTrigger.refresh(), 100);
      const t2 = setTimeout(() => ScrollTrigger.refresh(), 400);
      const t3 = setTimeout(() => ScrollTrigger.refresh(), 1000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    });

    // Native IntersectionObserver fallback to guarantee no element ever stays hidden
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            gsap.to(el, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "power2.out",
              overwrite: "auto",
            });
            observer.unobserve(el);
          }
        });
      },
      {
        root: scroller || null,
        rootMargin: "200px 0px 200px 0px",
        threshold: 0.01,
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      ctx.revert();
      observer.disconnect();
    };
  }, [enabled, scroller]);
}
