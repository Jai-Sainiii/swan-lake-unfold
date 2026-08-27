import { useEffect, type RefObject } from "react";
import { getGsap } from "@/lib/motion";

export function useTimelinePath({
  containerRef,
  pathRef,
  scroller,
}: {
  containerRef: RefObject<HTMLElement | null>;
  pathRef: RefObject<SVGPathElement | null>;
  scroller?: HTMLElement | null;
}) {
  useEffect(() => {
    const { gsap, ScrollTrigger } = getGsap();
    const container = containerRef.current;
    const path = pathRef.current;
    if (!container || !path) return;

    let pathLength = path.getTotalLength() || 1700;
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    const targetScroller =
      scroller ||
      (window.innerWidth >= 640 ? (document.querySelector(".custom-scrollbar") as HTMLElement) : null) ||
      window;

    const render = (progress: number) => {
      const p = Math.max(0, Math.min(1, progress));
      path.style.strokeDashoffset = `${pathLength * (1 - p)}`;
    };

    const st = ScrollTrigger.create({
      trigger: container,
      scroller: targetScroller,
      start: "top 65%",
      end: "bottom 35%",
      onUpdate: (self) => {
        render(self.progress);
      },
      onRefresh: () => {
        pathLength = path.getTotalLength() || pathLength;
        path.style.strokeDasharray = `${pathLength}`;
      },
    });

    ScrollTrigger.refresh();
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 800);
    const t3 = setTimeout(() => ScrollTrigger.refresh(), 1800);

    const tickerUpdate = () => {
      if (st) {
        render(st.progress);
      }
    };
    gsap.ticker.add(tickerUpdate);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      gsap.ticker.remove(tickerUpdate);
      st.kill();
    };
  }, [scroller, containerRef, pathRef]);
}
