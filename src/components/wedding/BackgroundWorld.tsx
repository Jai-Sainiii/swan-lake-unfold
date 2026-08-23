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

export function BackgroundWorld({ scroller }: { scroller?: HTMLElement | null } = {}) {
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
      gsap.set(layers.powder, { opacity: 0.35 + ramp(p, 0, 0.25, 0.62) * 0.45 });
      gsap.set(layers.water, { opacity: ramp(p, 0.08, 0.3, 0.62) * 0.85 });
      gsap.set(layers.botanical, { opacity: ramp(p, 0.42, 0.62, 0.86) * 0.7 });
      gsap.set(layers.paper, { opacity: ramp(p, 0.5, 0.72, 0.95) * 0.9 });
      gsap.set(layers.lake, { opacity: rise(p, 0.8, 0.98) });
    };

    const targetScroller = scroller || window;

    const st = ScrollTrigger.create({
      trigger: targetScroller === window ? document.documentElement : (scroller as HTMLElement).firstElementChild || (scroller as HTMLElement),
      scroller: targetScroller,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => apply(self.progress),
    });
    apply(0);

    return () => st.kill();
  }, [scroller]);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#faf8f5]"
    >
      {/* Powder blue & soft gold atmospheric aura */}
      <div
        data-layer="powder"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 100%, rgba(217, 230, 242, 0.7) 0%, rgba(245, 230, 163, 0.15) 40%, transparent 70%), radial-gradient(80% 60% at 15% 15%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Falling 3D Petals & Swan Feathers Shower */}
      <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden opacity-75">
        {/* Rose Petal 1 */}
        <div
          className="absolute top-0"
          style={{
            left: "6%",
            animation: "petalShowerFall1 9.5s linear infinite",
            animationDelay: "0s",
          }}
        >
          <div style={{ animation: "petalTumble3D1 3.2s ease-in-out infinite" }}>
            <svg viewBox="0 0 40 48" className="w-[18px] h-[22px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
              <defs>
                <linearGradient id="rose-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e82f4c" />
                  <stop offset="50%" stopColor="#ba142f" />
                  <stop offset="100%" stopColor="#6b0514" />
                </linearGradient>
              </defs>
              <path d="M20 3 C30 3 38 12 38 24 C38 36 28 45 20 47 C12 45 2 36 2 24 C2 12 10 3 20 3 Z" fill="url(#rose-grad-1)" />
            </svg>
          </div>
        </div>

        {/* Marigold Petal 2 */}
        <div
          className="absolute top-0"
          style={{
            left: "22%",
            animation: "petalShowerFall2 11s linear infinite",
            animationDelay: "-2.5s",
          }}
        >
          <div style={{ animation: "petalTumble3D2 2.8s ease-in-out infinite" }}>
            <svg viewBox="0 0 32 52" className="w-[14px] h-[22px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.18)]">
              <defs>
                <linearGradient id="marigold-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffdd59" />
                  <stop offset="40%" stopColor="#ff9f1a" />
                  <stop offset="100%" stopColor="#e65100" />
                </linearGradient>
              </defs>
              <path d="M16 2 C22 10 28 20 28 34 C28 44 22 50 16 51 C10 50 4 44 4 34 C4 20 10 10 16 2 Z" fill="url(#marigold-grad-1)" />
            </svg>
          </div>
        </div>

        {/* Blush Rose Petal 3 */}
        <div
          className="absolute top-0"
          style={{
            left: "38%",
            animation: "petalShowerFall3 9s linear infinite",
            animationDelay: "-4.8s",
          }}
        >
          <div style={{ animation: "petalTumble3D3 3.4s ease-in-out infinite" }}>
            <svg viewBox="0 0 36 44" className="w-[16px] h-[20px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
              <defs>
                <linearGradient id="blush-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffe6ed" />
                  <stop offset="60%" stopColor="#f48fb1" />
                  <stop offset="100%" stopColor="#ad1457" />
                </linearGradient>
              </defs>
              <path d="M18 2 C27 2 34 11 34 22 C34 33 25 41 18 43 C11 41 2 33 2 22 C2 11 9 2 18 2 Z" fill="url(#blush-grad-1)" />
            </svg>
          </div>
        </div>

        {/* Golden Leaf Flake 4 */}
        <div
          className="absolute top-0"
          style={{
            left: "54%",
            animation: "petalShowerFall4 11.5s linear infinite",
            animationDelay: "-1.2s",
          }}
        >
          <div style={{ animation: "petalTumble3D1 2.5s ease-in-out infinite" }}>
            <svg viewBox="0 0 28 36" className="w-[12px] h-[15px] drop-shadow-[0_3px_6px_rgba(212,175,55,0.45)]">
              <defs>
                <linearGradient id="gold-leaf-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff9c4" />
                  <stop offset="50%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#b47b00" />
                </linearGradient>
              </defs>
              <path d="M14 2 C20 8 25 16 25 24 C25 31 19 35 14 35 C9 35 3 31 3 24 C3 16 8 8 14 2 Z" fill="url(#gold-leaf-grad-1)" />
            </svg>
          </div>
        </div>

        {/* White Swan Down Feather 5 */}
        <div
          className="absolute top-0"
          style={{
            left: "70%",
            animation: "featherFloat 13s linear infinite",
            animationDelay: "-6.5s",
          }}
        >
          <div style={{ animation: "petalTumble3D2 3.6s ease-in-out infinite" }}>
            <svg viewBox="0 0 40 60" className="w-[16px] h-[24px] opacity-80 drop-shadow-[0_2px_6px_rgba(150,180,210,0.3)]">
              <path
                d="M20 2 C24 12, 32 25, 28 45 C25 54, 20 58, 20 58 C20 58, 15 54, 12 45 C8 25, 16 12, 20 2 Z"
                fill="#ffffff"
                stroke="#d9e6f2"
                strokeWidth="0.8"
              />
              <path d="M20 4 V56" stroke="#c0d4e8" strokeWidth="0.6" />
            </svg>
          </div>
        </div>

        {/* Rose Petal 6 */}
        <div
          className="absolute top-0"
          style={{
            left: "86%",
            animation: "petalShowerFall1 10.2s linear infinite",
            animationDelay: "-3.7s",
          }}
        >
          <div style={{ animation: "petalTumble3D3 3.0s ease-in-out infinite" }}>
            <svg viewBox="0 0 40 48" className="w-[18px] h-[22px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
              <path d="M20 3 C30 3 38 12 38 24 C38 36 28 45 20 47 C12 45 2 36 2 24 C2 12 10 3 20 3 Z" fill="url(#rose-grad-1)" />
            </svg>
          </div>
        </div>

        {/* Marigold Petal 7 */}
        <div
          className="absolute top-0"
          style={{
            left: "14%",
            animation: "petalShowerFall3 12s linear infinite",
            animationDelay: "-8.2s",
          }}
        >
          <div style={{ animation: "petalTumble3D1 3.5s ease-in-out infinite" }}>
            <svg viewBox="0 0 32 52" className="w-[13px] h-[21px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.18)]">
              <path d="M16 2 C22 10 28 20 28 34 C28 44 22 50 16 51 C10 50 4 44 4 34 C4 20 10 10 16 2 Z" fill="url(#marigold-grad-1)" />
            </svg>
          </div>
        </div>

        {/* Golden Leaf Flake 8 */}
        <div
          className="absolute top-0"
          style={{
            left: "48%",
            animation: "petalShowerFall4 8.8s linear infinite",
            animationDelay: "-5.0s",
          }}
        >
          <div style={{ animation: "petalTumble3D2 2.6s ease-in-out infinite" }}>
            <svg viewBox="0 0 28 36" className="w-[11px] h-[14px] drop-shadow-[0_3px_6px_rgba(212,175,55,0.45)]">
              <path d="M14 2 C20 8 25 16 25 24 C25 31 19 35 14 35 C9 35 3 31 3 24 C3 16 8 8 14 2 Z" fill="url(#gold-leaf-grad-1)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Fluttering 3D Butterflies */}
      <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden">
        {/* Emerald Swallowtail Butterfly */}
        <div
          className="absolute"
          style={{
            left: "10%",
            top: "28%",
            animation: "butterflyGlide1 16s ease-in-out infinite",
          }}
        >
          <div
            className="opacity-70"
            style={{
              width: "36px",
              height: "30px",
              filter: "drop-shadow(0 3px 6px rgba(0, 180, 100, 0.4))",
            }}
          >
            <svg viewBox="0 0 100 86" fill="none" className="w-full h-full">
              <defs>
                <radialGradient id="emerald-grad" cx="48%" cy="42%" r="58%">
                  <stop offset="0%" stopColor="#bbf7d0" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#064e3b" />
                </radialGradient>
              </defs>
              <g style={{ transformOrigin: "49px 43px", animation: "wingFlapLeft 0.18s ease-in-out infinite alternate" }}>
                <path d="M48 38 C42 20 25 3 6 5 C-2 6 -2 22 5 35 C10 44 26 50 48 46 Z" fill="url(#emerald-grad)" stroke="#064e3b" strokeWidth="1" />
                <path d="M48 44 C34 50 14 56 12 70 C10 80 26 84 34 76 C40 70 46 56 48 46 Z" fill="url(#emerald-grad)" stroke="#064e3b" strokeWidth="1" />
              </g>
              <g style={{ transformOrigin: "51px 43px", animation: "wingFlapRight 0.18s ease-in-out infinite alternate" }}>
                <path d="M52 38 C58 20 75 3 94 5 C102 6 102 22 95 35 C90 44 74 50 52 46 Z" fill="url(#emerald-grad)" stroke="#064e3b" strokeWidth="1" />
                <path d="M52 44 C66 50 86 56 88 70 C90 80 74 84 66 76 C60 70 54 56 52 46 Z" fill="url(#emerald-grad)" stroke="#064e3b" strokeWidth="1" />
              </g>
              <ellipse cx="50" cy="42" rx="2.5" ry="12" fill="#0f172a" />
            </svg>
          </div>
        </div>

        {/* Blue Morpho Butterfly */}
        <div
          className="absolute"
          style={{
            right: "8%",
            top: "42%",
            animation: "butterflyGlide2 18s ease-in-out infinite",
          }}
        >
          <div
            className="opacity-70"
            style={{
              width: "34px",
              height: "28px",
              filter: "drop-shadow(0 3px 6px rgba(0, 120, 255, 0.4))",
            }}
          >
            <svg viewBox="0 0 100 86" fill="none" className="w-full h-full">
              <defs>
                <radialGradient id="blue-grad" cx="48%" cy="42%" r="58%">
                  <stop offset="0%" stopColor="#bae6fd" />
                  <stop offset="50%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#082f49" />
                </radialGradient>
              </defs>
              <g style={{ transformOrigin: "49px 43px", animation: "wingFlapLeft 0.19s ease-in-out infinite alternate" }}>
                <path d="M48 38 C42 20 25 3 6 5 C-2 6 -2 22 5 35 C10 44 26 50 48 46 Z" fill="url(#blue-grad)" stroke="#082f49" strokeWidth="1" />
                <path d="M48 44 C34 50 14 56 12 70 C10 80 26 84 34 76 C40 70 46 56 48 46 Z" fill="url(#blue-grad)" stroke="#082f49" strokeWidth="1" />
              </g>
              <g style={{ transformOrigin: "51px 43px", animation: "wingFlapRight 0.19s ease-in-out infinite alternate" }}>
                <path d="M52 38 C58 20 75 3 94 5 C102 6 102 22 95 35 C90 44 74 50 52 46 Z" fill="url(#blue-grad)" stroke="#082f49" strokeWidth="1" />
                <path d="M52 44 C66 50 86 56 88 70 C90 80 74 84 66 76 C60 70 54 56 52 46 Z" fill="url(#blue-grad)" stroke="#082f49" strokeWidth="1" />
              </g>
              <ellipse cx="50" cy="42" rx="2.5" ry="12" fill="#0f172a" />
            </svg>
          </div>
        </div>
      </div>

      {/* Water reflection ripples */}
      <div data-layer="water" className="absolute inset-x-0 bottom-0 h-[58vh]">
        <svg viewBox="0 0 1200 600" preserveAspectRatio="none" className="h-full w-full">
          <defs>
            <linearGradient id="waterFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d9e6f2" stopOpacity="0" />
              <stop offset="100%" stopColor="#d9e6f2" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#waterFade)" />
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M0 ${200 + i * 75} C 300 ${180 + i * 75}, 500 ${
                230 + i * 75
              }, 800 ${200 + i * 75} S 1100 ${170 + i * 75}, 1200 ${205 + i * 75}`}
              fill="none"
              stroke="#c5cfdc"
              strokeOpacity={0.35 - i * 0.05}
              strokeWidth="1"
              style={{
                animation: `swanDrift ${24 + i * 4}s ease-in-out ${i * 1.5}s infinite alternate`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Botanical branches & lotus whispers */}
      <div data-layer="botanical" className="absolute inset-0 opacity-0" style={{ opacity: 0 }}>
        <svg viewBox="0 0 400 800" className="absolute -left-8 top-[10%] h-[65vh] w-auto opacity-35" fill="none">
          <path d="M200 780 C 200 500, 190 320, 160 40" stroke="#93a89d" strokeWidth="1" />
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d={`M${196 - i * 4} ${700 - i * 75} C ${150 - i * 4} ${
                670 - i * 75
              }, ${130 - i * 4} ${700 - i * 75}, ${110 - i * 4} ${730 - i * 75}`}
              stroke="#93a89d"
              strokeOpacity="0.4"
              strokeWidth="1"
            />
          ))}
        </svg>
        <svg viewBox="0 0 400 800" className="absolute -right-8 bottom-[8%] h-[50vh] w-auto -scale-x-100 opacity-30" fill="none">
          <path d="M200 780 C 210 520, 220 300, 250 60" stroke="#93a89d" strokeWidth="1" />
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={i}
              d={`M${204 + i * 6} ${690 - i * 90} C ${250 + i * 6} ${
                660 - i * 90
              }, ${272 + i * 6} ${690 - i * 90}, ${292 + i * 6} ${718 - i * 90}`}
              stroke="#93a89d"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* Ivory paper grain & vignette */}
      <div
        data-layer="paper"
        className="absolute inset-0 opacity-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(243, 237, 226, 0.8) 0%, transparent 25%, transparent 75%, rgba(243, 237, 226, 0.85) 100%)",
        }}
      />

      {/* Swans Gliding across the Serene Lake */}
      <div data-layer="lake" className="absolute inset-0 opacity-0">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice" className="absolute inset-x-0 bottom-0 h-[40vh] w-full">
          <g style={{ animation: "swanCross 44s linear infinite" }}>
            <SwanGlyph x={120} y={260} scale={1} />
          </g>
          <g style={{ animation: "swanCross 58s linear infinite", animationDelay: "-14s" }}>
            <SwanGlyph x={40} y={310} scale={0.75} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SwanGlyph({ x, y, scale }: { x: number; y: number; scale: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* Body with graceful curves */}
      <path
        d="M0 24 C 4 34, 16 44, 34 46 C 52 48, 68 44, 78 38 C 70 36, 62 36, 56 38 C 44 30, 28 26, 14 30 C 11 26, 6 24, 0 24 Z"
        fill="#ffffff"
        stroke="#d4af37"
        strokeWidth="0.8"
      />
      {/* Neck */}
      <path
        d="M74 39 C 62 30, 60 2, 74 -14 C 84 -25, 98 -22, 100 -10"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M74 39 C 62 30, 60 2, 74 -14 C 84 -25, 98 -22, 100 -10"
        fill="none"
        stroke="#d4af37"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="100" cy="-9" r="2.8" fill="#ffffff" stroke="#d4af37" strokeWidth="0.6" />
      <path d="M102 -9 L 109 -7 L 102 -5 Z" fill="#d4af37" />
      {/* Water reflection */}
      <ellipse cx="44" cy="52" rx="40" ry="3.5" fill="#d9e6f2" opacity="0.45" />
    </g>
  );
}
