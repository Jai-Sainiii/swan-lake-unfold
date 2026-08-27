import swanFountainImg from "@/assets/swan-fountain-frame.webp";

interface CountdownParts {
  d: number;
  h: number;
  m: number;
  s: number;
}

export function SwanFountainCountdown({ parts }: { parts: CountdownParts | null }) {
  const items = [
    { v: parts?.d, l: "DAYS" },
    { v: parts?.h, l: "HOURS" },
    { v: parts?.m, l: "MINUTES" },
    { v: parts?.s, l: "SECONDS" },
  ];

  return (
    <div className="relative w-full mx-auto select-none mt-4 sm:mt-6 mb-0">
      {/* ── Royal Baroque Marble Fountain Frame ── */}
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full -mt-[23%]">
          <img
            src={swanFountainImg}
            alt="Royal Swan Marble Fountain Frame"
            className="w-full h-auto block select-none pointer-events-none mix-blend-multiply origin-bottom"
            loading="lazy"
          />

          {/* ── Countdown Embedded Directly in the Marble Plaque ── */}
          <div className="absolute top-[55%] sm:top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84%] sm:w-[78%] flex flex-col items-center justify-center text-center z-10 pointer-events-none">
            {/* Top Subtitle */}
            <span className="font-cinzel text-[7.5px] sm:text-[9.5px] font-semibold tracking-[0.3em] text-[#7a6845] uppercase opacity-90 leading-none">
              COUNTDOWN TO
            </span>

            {/* Main Script Title */}
            <h3 className="font-script text-2xl sm:text-3.5xl text-[#8e743e] font-normal leading-tight my-0 drop-shadow-2xs">
              Our Forever
            </h3>

            {/* Central Lotus Motif Divider */}
            <div className="flex items-center justify-center gap-1.5 w-[72%] sm:w-[62%] mx-auto my-0.5 opacity-85">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b39556]/70 to-[#b39556] flex items-center justify-end">
                <div className="w-1 h-1 rotate-45 border-t border-r border-[#b39556]" />
              </div>
              <svg viewBox="0 0 32 24" fill="none" className="w-4.5 h-3.5 text-[#967d45] shrink-0">
                {/* Central Lotus Flower */}
                <path
                  d="M16 2C16 2 13 7 13 12C13 15 14.5 17 16 18C17.5 17 19 15 19 12C19 7 16 2 16 2Z"
                  fill="#b39556"
                  fillOpacity="0.3"
                  stroke="#8a703b"
                  strokeWidth="0.9"
                />
                <path
                  d="M16 18C13.5 16 9.5 14 6 16C4 17 3 19 3 19C3 19 6 19.5 9 18.5C12 17.5 14.5 16.8 16 18Z"
                  fill="#b39556"
                  fillOpacity="0.2"
                  stroke="#8a703b"
                  strokeWidth="0.8"
                />
                <path
                  d="M16 18C18.5 16 22.5 14 26 16C28 17 29 19 29 19C29 19 26 19.5 23 18.5C20 17.5 17.5 16.8 16 18Z"
                  fill="#b39556"
                  fillOpacity="0.2"
                  stroke="#8a703b"
                  strokeWidth="0.8"
                />
                <path
                  d="M16 18C14.5 19.5 11 22 7.5 22.5C5.5 22.8 4 23 4 23C4 23 7.5 23.8 11 23C13.5 22.2 15 19.5 16 18Z"
                  fill="#b39556"
                  fillOpacity="0.15"
                  stroke="#8a703b"
                  strokeWidth="0.7"
                />
                <path
                  d="M16 18C17.5 19.5 21 22 24.5 22.5C26.5 22.8 28 23 28 23C28 23 24.5 23.8 21 23C18.5 22.2 17 19.5 16 18Z"
                  fill="#b39556"
                  fillOpacity="0.15"
                  stroke="#8a703b"
                  strokeWidth="0.7"
                />
              </svg>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b39556]/70 to-[#b39556] flex items-center justify-start">
                <div className="w-1 h-1 rotate-45 border-b border-l border-[#b39556]" />
              </div>
            </div>

            {/* 4 Inscribed Countdown Columns (Compact Horizontal Gap) */}
            <div className="grid grid-cols-4 divide-x divide-[#b39556]/40 w-[84%] sm:w-[75%] mx-auto mt-1">
              {items.map((item) => (
                <div
                  key={item.l}
                  className="flex flex-col items-center justify-center px-0.5 py-0"
                >
                  {/* Engraved Number */}
                  <span className="font-cinzel text-lg sm:text-2xl font-normal tabular-nums text-[#2c2419] leading-none tracking-tight">
                    {item.v !== undefined ? String(item.v).padStart(2, "0") : "00"}
                  </span>
                  {/* Label */}
                  <span className="font-cinzel text-[5.5px] sm:text-[7px] font-semibold uppercase tracking-[0.2em] text-[#7a6845] mt-1 leading-none">
                    {item.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

