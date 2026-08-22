import { useEffect, useRef, useState } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/motion";
import { couple } from "@/lib/wedding";

export function Opening({
  runKey,
  onDone,
}: {
  runKey: number;
  onDone: () => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const { gsap } = getGsap();
    if (prefersReducedMotion()) {
      onDone();
      return;
    }

    const skipTimer = window.setTimeout(() => setShowSkip(true), 1600);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: onDone });
      tl.from(".op-envelope", {
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 1.6,
        ease: "power3.out",
      })
        .from(".op-ribbon", { scaleX: 0, duration: 1.1, ease: "power2.inOut" }, "-=0.8")
        .from(".op-seal", { scale: 0.6, opacity: 0, duration: 0.9, ease: "power2.out" }, "-=0.5")
        .to(".op-seal", { opacity: 0, scale: 1.15, duration: 0.8, ease: "power2.inOut" }, "+=0.4")
        .to(".op-ribbon", { opacity: 0, duration: 0.6 }, "<")
        .to(".op-flap", { rotateX: -168, duration: 1.5, ease: "power3.inOut" }, "-=0.3")
        .to(".op-card", { y: -128, duration: 1.6, ease: "power3.out" }, "-=0.9")
        .from(".op-line", { opacity: 0, y: 14, filter: "blur(6px)", duration: 1.1, stagger: 0.18, ease: "power2.out" }, "-=0.9")
        .to(".op-body", { y: -40, duration: 1.2, ease: "power2.inOut" }, "+=0.6")
        .to(".op-card", { scale: 14, duration: 2.2, ease: "power3.inOut" }, "-=0.4")
        .to(".op-text", { opacity: 0, duration: 0.7, ease: "power2.out" }, "-=2")
        .to(".op-envelope-body", { opacity: 0, duration: 0.8 }, "-=1.8")
        .to(root.current, { opacity: 0, duration: 0.9, ease: "power2.inOut" }, "-=0.7");
    }, root);

    return () => {
      window.clearTimeout(skipTimer);
      ctx.revert();
    };
  }, [runKey, onDone]);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ivory"
    >
      <div className="op-body relative" style={{ perspective: "1400px" }}>
        <div className="op-envelope relative h-[300px] w-[440px] max-w-[86vw] sm:h-[340px]">
          {/* card */}
          <div className="op-card paper absolute inset-x-6 bottom-8 top-10 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="op-text flex flex-col items-center gap-3">
              <span className="op-line label-xs">Together with their families</span>
              <span className="op-line font-display text-3xl font-light tracking-[0.18em] text-ink sm:text-4xl">
                {couple.bride}
              </span>
              <span className="op-line font-display text-lg italic text-muted-foreground">
                &
              </span>
              <span className="op-line font-display text-3xl font-light tracking-[0.18em] text-ink sm:text-4xl">
                {couple.groom}
              </span>
            </div>
          </div>

          {/* envelope body */}
          <div className="op-envelope-body pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 bottom-0 top-[38%] border border-pearl/70 bg-ivory-deep" />
            <div
              className="op-flap absolute inset-x-0 top-0 h-[46%] origin-top border border-pearl/70 bg-ivory"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                transformStyle: "preserve-3d",
              }}
            />
            <div className="op-ribbon absolute inset-x-0 top-[62%] h-px origin-center bg-pearl" />
            <div className="op-seal absolute left-1/2 top-[62%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pearl bg-powder-soft" />
          </div>
        </div>
      </div>

      {showSkip && (
        <button
          onClick={onDone}
          className="label-xs absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity hover:opacity-60"
        >
          Skip
        </button>
      )}
    </div>
  );
}
