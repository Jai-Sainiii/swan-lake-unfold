import React from "react";

interface TornEdgeProps {
  position?: "top" | "bottom";
  variant?: 1 | 2 | 3;
  showGoldFoil?: boolean;
  className?: string;
  fillColor?: string;
}

export function TornEdge({
  position = "top",
  variant = 1,
  showGoldFoil = true,
  className = "",
  fillColor = "#faf6ee",
}: TornEdgeProps) {
  const isTop = position === "top";

  // Organic torn paper paths with deckle edge fibers
  const paths = {
    1: "M 0 25 Q 40 12, 85 22 T 180 14 T 275 26 T 360 16 L 360 40 L 0 40 Z",
    2: "M 0 20 Q 45 30, 95 18 T 190 28 T 280 15 T 360 22 L 360 40 L 0 40 Z",
    3: "M 0 16 Q 50 8, 100 24 T 195 12 T 285 25 T 360 18 L 360 40 L 0 40 Z",
    4: "M 0 24 Q 42 14, 85 22 T 190 16 T 280 22 Q 325 18, 360 26 L 360 40 L 0 40 Z",
  };

  const pathD = paths[variant];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 right-0 w-full overflow-hidden select-none ${
        isTop ? "-top-[1px] rotate-180" : "-bottom-[1px]"
      } ${className}`}
    >
      <svg
        viewBox="0 0 360 40"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-7 sm:h-9 block drop-shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
      >
        <defs>
          <linearGradient id={`goldFoil-${variant}-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#d4af37" stopOpacity="1" />
            <stop offset="50%" stopColor="#fef9c3" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#b45309" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Shadow Underlay */}
        <path
          d={pathD}
          fill="#1c232f"
          fillOpacity="0.08"
          transform="translate(0, 1.5)"
        />

        {/* Gold Foil Deckle Leafing along the tear */}
        {showGoldFoil && (
          <path
            d={pathD}
            fill="none"
            stroke={`url(#goldFoil-${variant}-${position})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />
        )}

        {/* Main Torn Paper Surface Body */}
        {fillColor !== "none" && fillColor !== "transparent" && (
          <path
            d={pathD}
            fill={fillColor}
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.6"
          />
        )}
      </svg>
    </div>
  );
}
