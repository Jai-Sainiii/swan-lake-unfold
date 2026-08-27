import { useId } from "react";
import floralCorner from "@/assets/floral-corner.webp";
import destinationVillaImg from "@/assets/destination-villa.webp";

/**
 * Hand-painted Watercolor Floral Corner Decoration (White roses, ribbons, sage leaves)
 */
export function FloralCornerDecor({
  className = "",
  position = "top-right",
}: {
  className?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}) {
  const transformClass = {
    "top-right": "",
    "top-left": "-scale-x-100",
    "bottom-right": "-scale-y-100",
    "bottom-left": "-scale-x-100 -scale-y-100",
  }[position];

  return (
    <img
      src={floralCorner}
      alt="Decorative floral bouquet"
      className={`pointer-events-none select-none absolute w-24 sm:w-28 h-auto opacity-85 z-20 ${transformClass} ${className}`}
      loading="lazy"
    />
  );
}

/**
 * ScriptWatermark is disabled (returns null) per user request.
 */
export function ScriptWatermark(_props: {
  text: string;
  className?: string;
  rotate?: string;
  opacity?: string;
}) {
  return null;
}

/**
 * Hand-painted Watercolor Rooftop Venue with Swimming Pool & Terrace Trees
 * (Exactly matching the user's reference: classical facade, curved terrace,
 * turquoise rooftop pool, topiary garden trees, and delicate ink line details)
 */
export function RooftopVenueIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <img
        src={destinationVillaImg}
        alt="Hand-painted Watercolor Rooftop Villa & Pool"
        className="w-full h-auto object-contain mix-blend-multiply drop-shadow-md filter contrast-[1.02] brightness-[1.01]"
        loading="lazy"
      />
    </div>
  );
}

/**
 * Hand-painted Watercolor Hotel & Lakeside Swimming Pool Spot Illustration
 * (Reference style 1: Modern hotel tower, azure blue water, trees, soft blue wash)
 */
export function HotelCourtyardIllustration({
  className = "",
}: {
  className?: string;
}) {
  const id = useId();

  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 340 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
      >
        <defs>
          <linearGradient id={`hotelSky-${id}`} x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#faf8f5" stopOpacity="0" />
          </linearGradient>

          <linearGradient id={`hotelTower-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#1d4ed8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id={`hotelPool-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="70%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>

        {/* Sky watercolor splash on left & top */}
        <path
          d="M 20 50 Q 80 10, 160 25 T 320 40 Q 330 120, 280 160 T 120 180 Q 20 160, 20 100 Z"
          fill={`url(#hotelSky-${id})`}
        />

        {/* Distant Sea/Lake Horizon Line */}
        <path d="M 30 110 Q 100 108, 170 110" stroke="#7dd3fc" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
        <path d="M 40 120 Q 110 118, 170 120" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" opacity="0.5" />

        {/* Main Hotel Tower Building */}
        <polygon
          points="155,75 155,200 285,185 285,85"
          fill={`url(#hotelTower-${id})`}
          stroke="#1e3a8a"
          strokeWidth="1"
        />

        {/* Hotel Window Grid Pattern */}
        <g stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.85">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
            <g key={row}>
              <line x1="170" y1={95 + row * 11} x2="275" y2={95 + row * 11} strokeDasharray="5 3" />
            </g>
          ))}
        </g>

        {/* Hotel Podium / Entrance Canopy */}
        <polygon points="120,200 295,185 305,225 110,235" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
        <polygon points="125,205 290,192 295,215 120,222" fill="#0284c7" fillOpacity="0.3" />

        {/* Resort Swimming Pool in Foreground */}
        <polygon
          points="140,220 220,210 240,248 150,255"
          fill={`url(#hotelPool-${id})`}
          stroke="#0284c7"
          strokeWidth="0.8"
        />
        <path d="M 155 228 Q 185 223, 215 225" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
        <path d="M 160 238 Q 190 233, 220 235" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />

        {/* Lush Green Trees Surrounding Resort */}
        <circle cx="115" cy="225" r="22" fill="#15803d" fillOpacity="0.8" />
        <circle cx="120" cy="218" r="16" fill="#22c55e" fillOpacity="0.9" />
        <circle cx="105" cy="230" r="14" fill="#16a34a" />

        <circle cx="265" cy="215" r="24" fill="#15803d" fillOpacity="0.8" />
        <circle cx="260" cy="208" r="17" fill="#22c55e" fillOpacity="0.9" />
        <circle cx="280" cy="225" r="15" fill="#16a34a" />
      </svg>
    </div>
  );
}

/**
 * Hand-painted Watercolor Floating Mandap & Lotus Spot Illustration
 */
export function MandapSpotIllustration({
  className = "",
}: {
  className?: string;
}) {
  const id = useId();

  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        <defs>
          <linearGradient id={`mandapGold-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#fde047" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id={`lotusPink-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbcfe8" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#f472b6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#db2777" stopOpacity="0.5" />
          </radialGradient>
        </defs>

        {/* Lake water ripple base */}
        <ellipse cx="100" cy="135" rx="80" ry="16" fill="#e0f2fe" fillOpacity="0.4" />
        <path d="M 50 135 Q 100 142, 150 135" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M 70 144 Q 100 148, 130 144" stroke="#0284c7" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

        {/* Mandap Marble Platform */}
        <polygon points="35,130 165,130 155,120 45,120" fill="#fef9c3" stroke="#b45309" strokeWidth="0.7" strokeOpacity="0.4" />

        {/* Mandap Pillars with Floral Garlands */}
        <rect x="48" y="55" width="6" height="65" rx="1.5" fill="#fffbeb" stroke="#d97706" strokeWidth="0.8" />
        <rect x="78" y="55" width="5" height="65" rx="1" fill="#fffbeb" stroke="#d97706" strokeWidth="0.7" />
        <rect x="117" y="55" width="5" height="65" rx="1" fill="#fffbeb" stroke="#d97706" strokeWidth="0.7" />
        <rect x="146" y="55" width="6" height="65" rx="1.5" fill="#fffbeb" stroke="#d97706" strokeWidth="0.8" />

        {/* Marigold Garland Swags between pillars */}
        <path d="M 48 65 Q 63 76, 78 65" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="1 3" strokeLinecap="round" />
        <path d="M 78 65 Q 98 78, 117 65" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="1 3" strokeLinecap="round" />
        <path d="M 117 65 Q 132 76, 146 65" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="1 3" strokeLinecap="round" />

        {/* Mandap Royal Canopy Roof / Dome */}
        <path
          d="M 35 55 Q 100 20, 165 55 Q 100 45, 35 55 Z"
          fill={`url(#mandapGold-${id})`}
          stroke="#92400e"
          strokeWidth="0.8"
        />
        {/* Top central finial */}
        <line x1="100" y1="26" x2="100" y2="15" stroke="#d97706" strokeWidth="1.2" />
        <circle cx="100" cy="14" r="2.5" fill="#f59e0b" />

        {/* Floating Lotus Flowers in Foreground */}
        <path d="M 38 138 C 30 130, 25 125, 38 120 C 50 125, 45 130, 38 138 Z" fill={`url(#lotusPink-${id})`} />
        <path d="M 30 135 C 22 132, 24 125, 32 125" fill="#fbcfe8" />
        <path d="M 46 135 C 54 132, 52 125, 44 125" fill="#fbcfe8" />

        <path d="M 160 140 C 152 132, 148 127, 160 122 C 172 127, 168 132, 160 140 Z" fill={`url(#lotusPink-${id})`} />
        <path d="M 152 137 C 144 134, 146 127, 154 127" fill="#fbcfe8" />
        <path d="M 168 137 C 176 134, 174 127, 166 127" fill="#fbcfe8" />
      </svg>
    </div>
  );
}

/**
 * Royal Rajasthani Shikara Boat Spot Illustration
 */
export function ShikaraBoatIllustration({
  className = "",
}: {
  className?: string;
}) {
  const id = useId();

  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 220 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xs"
      >
        <defs>
          <linearGradient id={`woodGrad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#78350f" />
            <stop offset="50%" stopColor="#92400e" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>
        </defs>

        {/* Water ripples below boat */}
        <path d="M 10 82 Q 70 88, 130 82 T 210 84" stroke="#38bdf8" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />
        <path d="M 30 90 Q 90 95, 150 90 T 190 92" stroke="#0284c7" strokeWidth="0.9" opacity="0.45" strokeLinecap="round" />

        {/* Boat Wooden Hull */}
        <path
          d="M 15 65 Q 40 82, 110 82 Q 180 82, 205 60 Q 150 72, 110 72 Q 70 72, 15 65 Z"
          fill={`url(#woodGrad-${id})`}
          stroke="#451a03"
          strokeWidth="0.8"
        />

        {/* Royal Embroidered Canopy */}
        <path
          d="M 60 55 Q 110 38, 160 55 L 155 45 Q 110 30, 65 45 Z"
          fill="#f59e0b"
          stroke="#92400e"
          strokeWidth="0.6"
        />
        {/* Canopy support poles */}
        <line x1="68" y1="45" x2="68" y2="70" stroke="#d97706" strokeWidth="1" />
        <line x1="152" y1="45" x2="152" y2="70" stroke="#d97706" strokeWidth="1" />

        {/* Velvet Seating Cushions */}
        <rect x="78" y="58" width="64" height="12" rx="3" fill="#f43f5e" stroke="#be123c" strokeWidth="0.5" />
        <circle cx="86" cy="62" r="3" fill="#fbbf24" />
        <circle cx="134" cy="62" r="3" fill="#fbbf24" />

        {/* Prow Floral Ornament */}
        <circle cx="18" cy="64" r="2.5" fill="#f59e0b" />
      </svg>
    </div>
  );
}

/**
 * Delicate Botanical & Lotus Corner Motif
 */
export function BotanicalCorner({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute w-10 h-10 opacity-40 ${
        flip ? "-scale-x-100" : ""
      } ${className}`}
    >
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 2 38 Q 4 14, 28 4 Q 38 2, 38 2"
          stroke="#d4af37"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path d="M 12 24 C 8 20, 10 14, 16 16 C 18 20, 16 24, 12 24 Z" fill="#86efac" fillOpacity="0.5" stroke="#16a34a" strokeWidth="0.5" />
        <path d="M 22 14 C 18 10, 20 4, 26 6 C 28 10, 26 14, 22 14 Z" fill="#86efac" fillOpacity="0.5" stroke="#16a34a" strokeWidth="0.5" />
        <circle cx="36" cy="4" r="2" fill="#f59e0b" />
      </svg>
    </div>
  );
}
