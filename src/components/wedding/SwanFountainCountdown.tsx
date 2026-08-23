import { useId } from "react";
import { Sparkles } from "lucide-react";

interface CountdownParts {
  d: number;
  h: number;
  m: number;
  s: number;
}

export function SwanFountainCountdown({ parts }: { parts: CountdownParts | null }) {
  const id = useId();

  const items = [
    { v: parts?.d, l: "Days" },
    { v: parts?.h, l: "Hours" },
    { v: parts?.m, l: "Mins" },
    { v: parts?.s, l: "Secs" },
  ];

  return (
    <div className="relative w-full max-w-[300px] mx-auto select-none my-2">
      {/* ── Top Sculptural Swans & Glistening Fountain Streams ── */}
      <div className="relative w-full h-[88px]">
        <svg
          viewBox="0 0 340 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            {/* Swan Feather Shimmer Gradient */}
            <linearGradient id={`swanBody-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#fdfaf3" />
              <stop offset="100%" stopColor="#f7ecd7" />
            </linearGradient>

            {/* Wing Shadow Shimmer */}
            <linearGradient id={`swanWing-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#ebd6b5" />
            </linearGradient>

            {/* Crystal Water Stream Gradient */}
            <linearGradient id={`waterArc-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.95" />
            </linearGradient>

            {/* Fountain Marble Base Gradient */}
            <linearGradient id={`fountainMarble-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fffbeb" />
              <stop offset="50%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>
          </defs>

          {/* ── LEFT MAJESTIC SWAN ── */}
          <g className="transition-transform duration-700 hover:scale-[1.02] origin-bottom-left">
            <ellipse cx="60" cy="92" rx="36" ry="6" fill="#e0f2fe" fillOpacity="0.5" />
            <path d="M 28 92 Q 60 97, 92 92" stroke="#38bdf8" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

            <path
              d="M 16 88 C 14 74, 28 62, 50 60 C 72 58, 88 70, 94 92 C 86 96, 32 98, 16 88 Z"
              fill={`url(#swanBody-${id})`}
              stroke="#b45309"
              strokeWidth="0.7"
            />

            <path
              d="M 26 82 C 32 64, 52 54, 70 58 C 76 66, 78 76, 80 88 C 64 92, 40 92, 26 82 Z"
              fill={`url(#swanWing-${id})`}
              stroke="#d97706"
              strokeWidth="0.6"
            />

            <path
              d="M 80 86 C 84 68, 78 46, 66 34 C 58 24, 62 14, 74 10 C 84 6, 94 12, 92 20 C 90 28, 78 38, 82 56 C 86 70, 92 82, 94 88"
              fill={`url(#swanBody-${id})`}
              stroke="#b45309"
              strokeWidth="0.7"
            />

            <path d="M 86 14 C 91 12, 94 16, 98 18 L 91 21 Z" fill="#1e293b" />
            <circle cx="88" cy="16" r="1" fill="#ffffff" />
            <circle cx="88.2" cy="16" r="0.5" fill="#000000" />
            <path d="M 94 17 L 105 21 L 93 23 Z" fill="#f59e0b" stroke="#92400e" strokeWidth="0.5" />
            <ellipse cx="94" cy="16.5" rx="1.4" ry="1" fill="#0f172a" />
          </g>

          {/* ── RIGHT MAJESTIC SWAN ── */}
          <g className="transition-transform duration-700 hover:scale-[1.02] origin-bottom-right">
            <ellipse cx="280" cy="92" rx="36" ry="6" fill="#e0f2fe" fillOpacity="0.5" />
            <path d="M 248 92 Q 280 97, 312 92" stroke="#38bdf8" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

            <path
              d="M 324 88 C 326 74, 312 62, 290 60 C 268 58, 252 70, 246 92 C 254 96, 308 98, 324 88 Z"
              fill={`url(#swanBody-${id})`}
              stroke="#b45309"
              strokeWidth="0.7"
            />

            <path
              d="M 314 82 C 308 64, 288 54, 270 58 C 264 66, 262 76, 260 88 C 276 92, 300 92, 314 82 Z"
              fill={`url(#swanWing-${id})`}
              stroke="#d97706"
              strokeWidth="0.6"
            />

            <path
              d="M 260 86 C 256 68, 262 46, 274 34 C 282 24, 278 14, 266 10 C 256 6, 246 12, 248 20 C 250 28, 262 38, 258 56 C 254 70, 248 82, 246 88"
              fill={`url(#swanBody-${id})`}
              stroke="#b45309"
              strokeWidth="0.7"
            />

            <path d="M 254 14 C 249 12, 246 16, 242 18 L 249 21 Z" fill="#1e293b" />
            <circle cx="252" cy="16" r="1" fill="#ffffff" />
            <circle cx="251.8" cy="16" r="0.5" fill="#000000" />
            <path d="M 246 17 L 235 21 L 247 23 Z" fill="#f59e0b" stroke="#92400e" strokeWidth="0.5" />
            <ellipse cx="246" cy="16.5" rx="1.4" ry="1" fill="#0f172a" />
          </g>

          {/* ── FLOWING CRYSTAL WATER ARCS ── */}
          <path
            d="M 105 21 Q 135 27, 155 96"
            stroke={`url(#waterArc-${id})`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="4 2"
            className="animate-pulse"
          />
          <path
            d="M 105 21 Q 135 27, 155 96"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="124" cy="30" r="1.5" fill="#38bdf8" className="animate-ping opacity-60" />
          <circle cx="148" cy="65" r="1.5" fill="#0ea5e9" />

          <path
            d="M 235 21 Q 205 27, 185 96"
            stroke={`url(#waterArc-${id})`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="4 2"
            className="animate-pulse"
          />
          <path
            d="M 235 21 Q 205 27, 185 96"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="216" cy="30" r="1.5" fill="#38bdf8" className="animate-ping opacity-60" />
          <circle cx="192" cy="65" r="1.5" fill="#0ea5e9" />

          {/* Center Fountain Tier Finial */}
          <path
            d="M 154 98 Q 170 82, 186 98 Z"
            fill={`url(#fountainMarble-${id})`}
            stroke="#b45309"
            strokeWidth="0.8"
          />
          <circle cx="170" cy="86" r="2.5" fill="#f59e0b" stroke="#78350f" strokeWidth="0.5" />
        </svg>
      </div>

      {/* ── Royal Marble Fountain Basin (Holding Countdown Pedestals) ── */}
      <div className="relative -mt-2 rounded-2xl border border-amber-300/80 bg-gradient-to-b from-[#fbf8f2]/95 via-[#faf4eb]/95 to-[#f3ebd9]/95 p-2.5 shadow-[0_8px_24px_-6px_rgba(212,175,55,0.22),0_0_0_1px_rgba(212,175,55,0.15)] overflow-hidden">
        
        {/* Shimmering Fountain Basin Water Background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-sky-200/35 via-sky-100/15 to-transparent" />

        {/* Header Ribbon inside Basin */}
        <div className="relative z-10 text-center mb-2">
          <div className="inline-flex items-center gap-1 rounded-full border border-amber-300/60 bg-white/95 px-2.5 py-0.5 shadow-2xs">
            <Sparkles className="h-2 w-2 text-amber-500" />
            <span className="font-cinzel text-[8px] font-bold tracking-[0.24em] text-[#997a15] uppercase">
              The Auspicious Countdown
            </span>
            <Sparkles className="h-2 w-2 text-amber-500" />
          </div>
        </div>

        {/* ── 4 Pedestal Crystal Boxes in Fountain Basin ── */}
        <div className="relative z-10 grid grid-cols-4 gap-1.5">
          {items.map((item) => (
            <div
              key={item.l}
              className="group relative flex flex-col items-center justify-center rounded-lg border border-amber-300/70 bg-gradient-to-b from-white/95 to-amber-50/80 py-1.5 px-0.5 shadow-2xs transition-all duration-300 hover:scale-105"
            >
              {/* Pedestal Water Droplet Accent */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-sky-400" />

              {/* Number Value */}
              <span className="font-cinzel text-base sm:text-lg font-bold tabular-nums text-[#1c232f] leading-none">
                {item.v !== undefined ? String(item.v).padStart(2, "0") : "—"}
              </span>

              {/* Label */}
              <span className="font-sans text-[8px] font-semibold uppercase tracking-wider text-[#997a15] mt-0.5">
                {item.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
