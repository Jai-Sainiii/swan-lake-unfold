import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/motion";

/** Triangular ramp: 0 outside [a,c], 1 at b. */
function ramp(p: number, a: number, b: number, c: number) {
  if (p <= a || p >= c) return 0;
  if (p < b) return (p - a) / (b - a);
  return 1 - (p - b) / (c - b);
}

/** Smooth step up from a to b, stays 1 after. */
function rise(p: number, a: number, b: number) {
  if (p <= a) return 0;
  if (p >= b) return 1;
  return (p - a) / (b - a);
}

export function BackgroundWorld() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = getGsap();
    const root = rootRef.current;
    if (!root) return;

    const pick = (name: string) =>
      root.querySelector<HTMLElement>(`[data-layer="${name}"]`);

    const layers = {
      powder: pick("powder"),
      water: pick("water"),
      botanical: pick("botanical"),
      paper: pick("paper"),
      lake: pick("lake"),
    };

    const apply = (p: number) => {
      gsap.set(layers.powder, { opacity: 0.25 + ramp(p, 0, 0.25, 0.62) * 0.55 });
      gsap.set(layers.water, { opacity: ramp(p, 0.08, 0.3, 0.62) * 0.85 });
      gsap.set(layers.botanical, { opacity: ramp(p, 0.42, 0.62, 0.86) * 0.7 });
      gsap.set(layers.paper, { opacity: ramp(p, 0.5, 0.72, 0.95) * 0.9 });
      gsap.set(layers.lake, { opacity: rise(p, 0.8, 0.98) });
    };

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => apply(self.progress),
    });
    apply(0);

    return () => st.kill();
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ivory"
    >
      {/* powder-blue atmospheric wash */}
      <div
        data-layer="powder"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 100%, color-mix(in oklab, var(--powder) 55%, transparent) 0%, transparent 62%)",
        }}
      />

      {/* water reflection */}
      <div data-layer="water" className="absolute inset-x-0 bottom-0 h-[62vh]">
        <svg
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="waterFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--powder)" stopOpacity="0" />
              <stop offset="100%" stopColor="var(--powder)" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#waterFade)" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M0 ${180 + i * 70} C 300 ${160 + i * 70}, 500 ${
                210 + i * 70
              }, 800 ${180 + i * 70} S 1100 ${150 + i * 70}, 1200 ${185 + i * 70}`}
              fill="none"
              stroke="var(--pearl)"
              strokeOpacity={0.42 - i * 0.05}
              strokeWidth="1"
              style={{
                animation: `swanDrift ${26 + i * 5}s ease-in-out ${i * 1.4}s infinite alternate`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* botanical whisper */}
      <div
        data-layer="botanical"
        className="absolute inset-0 opacity-0"
        style={{ opacity: 0 }}
      >
        <svg
          viewBox="0 0 400 800"
          className="absolute -left-10 top-[8%] h-[70vh] w-auto"
          fill="none"
        >
          <path
            d="M200 780 C 200 500, 190 320, 160 40"
            stroke="var(--sage)"
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          {Array.from({ length: 9 }).map((_, i) => (
            <path
              key={i}
              d={`M${196 - i * 4} ${700 - i * 72} C ${150 - i * 4} ${
                670 - i * 72
              }, ${130 - i * 4} ${700 - i * 72}, ${110 - i * 4} ${730 - i * 72}`}
              stroke="var(--sage)"
              strokeOpacity="0.38"
              strokeWidth="1"
            />
          ))}
        </svg>
        <svg
          viewBox="0 0 400 800"
          className="absolute -right-10 bottom-[6%] h-[55vh] w-auto -scale-x-100"
          fill="none"
        >
          <path
            d="M200 780 C 210 520, 220 300, 250 60"
            stroke="var(--sage)"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          {Array.from({ length: 7 }).map((_, i) => (
            <path
              key={i}
              d={`M${204 + i * 6} ${690 - i * 88} C ${250 + i * 6} ${
                660 - i * 88
              }, ${272 + i * 6} ${690 - i * 88}, ${292 + i * 6} ${718 - i * 88}`}
              stroke="var(--sage)"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* ivory paper grain + edges */}
      <div
        data-layer="paper"
        className="absolute inset-0 opacity-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--ivory-deep) 85%, transparent) 0%, transparent 30%, transparent 70%, color-mix(in oklab, var(--ivory-deep) 90%, transparent) 100%)",
        }}
      />

      {/* finale lake with swans */}
      <div data-layer="lake" className="absolute inset-0 opacity-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--powder-soft) 70%, transparent) 0%, color-mix(in oklab, var(--powder) 70%, transparent) 100%)",
          }}
        />
        <svg
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-x-0 bottom-0 h-[45vh] w-full"
        >
          <g style={{ animation: "swanCross 46s linear infinite" }}>
            <SwanGlyph x={120} y={250} scale={1} />
          </g>
          <g style={{ animation: "swanCross 62s linear infinite", animationDelay: "-12s" }}>
            <SwanGlyph x={40} y={300} scale={0.72} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SwanGlyph({ x, y, scale }: { x: number; y: number; scale: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* body with lifted tail */}
      <path
        d="M0 18 C 4 30, 16 40, 34 42 C 54 44, 72 40, 84 32 C 76 30, 66 30, 58 32 C 46 24, 30 20, 16 24 C 12 20, 6 18, 0 18 Z"
        fill="var(--ivory)"
        stroke="var(--pearl)"
        strokeWidth="0.8"
      />
      {/* neck */}
      <path
        d="M80 33 C 68 26, 66 8, 76 0 C 84 -6, 94 -3, 96 5"
        fill="none"
        stroke="var(--ivory)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M80 33 C 68 26, 66 8, 76 0 C 84 -6, 94 -3, 96 5"
        fill="none"
        stroke="var(--pearl)"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="96" cy="6" r="3.6" fill="var(--ivory)" stroke="var(--pearl)" strokeWidth="0.8" />
      <path d="M99 6 L 106 8 L 99 10 Z" fill="var(--pearl)" />
      {/* reflection */}
      <ellipse cx="48" cy="48" rx="42" ry="4" fill="var(--ivory)" opacity="0.35" />
    </g>
  );

}

