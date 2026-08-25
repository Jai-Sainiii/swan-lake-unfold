import swanFountainImg from "@/assets/swan-fountain-frame.png";
import { Sparkles } from "lucide-react";

interface CountdownParts {
  d: number;
  h: number;
  m: number;
  s: number;
}

export function SwanFountainCountdown({ parts }: { parts: CountdownParts | null }) {
  const items = [
    { v: parts?.d, l: "Days" },
    { v: parts?.h, l: "Hours" },
    { v: parts?.m, l: "Mins" },
    { v: parts?.s, l: "Secs" },
  ];

  return (
    <div className="relative w-full mx-auto select-none mt-4 sm:mt-6 mb-0">
      {/* ── Royal Baroque Marble Fountain Frame (Top Fleur-de-lis Cropped Out) ── */}
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full -mt-[23%]">
          <img
            src={swanFountainImg}
            alt="Royal Swan Marble Fountain Frame"
            className="w-full h-auto block select-none pointer-events-none mix-blend-multiply origin-bottom"
            loading="lazy"
          />

          {/* ── Countdown Embedded Directly in the Marble Plaque (Refined Elegant Scale) ── */}
          <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76%] flex flex-col items-center justify-center text-center z-10 pointer-events-none">
            {/* Header Title inside Cartouche */}
            <div className="inline-flex items-center gap-1.5 mb-1.5">
              <span className="h-px w-2.5 bg-[#c49a38]/50" />
              <Sparkles className="h-1.5 w-1.5 text-[#997a15]" />
              <span className="font-cinzel text-[7px] sm:text-[7.5px] font-bold tracking-[0.22em] text-[#8b6914] uppercase">
                The Auspicious Countdown
              </span>
              <Sparkles className="h-1.5 w-1.5 text-[#997a15]" />
              <span className="h-px w-2.5 bg-[#c49a38]/50" />
            </div>

            {/* 4 Inscribed Countdown Columns (Smaller, Refined Typography) */}
            <div className="grid grid-cols-4 divide-x divide-[#c49a38]/30 w-full">
              {items.map((item) => (
                <div
                  key={item.l}
                  className="flex flex-col items-center justify-center px-0.5 py-0.5"
                >
                  {/* Engraved Number */}
                  <span className="font-cinzel text-[17px] sm:text-[19px] font-bold tabular-nums text-[#1e2532] leading-none tracking-normal">
                    {item.v !== undefined ? String(item.v).padStart(2, "0") : "—"}
                  </span>
                  {/* Label */}
                  <span className="font-cinzel text-[6.5px] sm:text-[7.5px] font-bold uppercase tracking-[0.18em] text-[#997a15] mt-1 leading-none">
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
