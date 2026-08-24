import { useState, useRef, useEffect } from "react";
import { ceremonies, venue, couple, type CeremonyItem } from "@/lib/wedding";
import { Calendar, Clock, MapPin, Sparkles, Shirt, X } from "lucide-react";
import { TornEdge } from "@/components/wedding/TornEdge";
import ceremonySwanRaw from "@/assets/ceremony-swan-raw.png";

/**
 * Top Header Filigree Flourish (Golden Baroque Crown)
 */
function TopFiligreeFlourish() {
  return (
    <div className="relative mx-auto w-32 h-10 select-none pointer-events-none mb-1 opacity-90">
      <svg viewBox="0 0 160 50" fill="none" className="w-full h-full text-[#c49a38]">
        <defs>
          <linearGradient id="headerGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e2ab" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#997a15" />
          </linearGradient>
        </defs>
        <path d="M 80 4 C 77 14, 73 20, 80 28 C 87 20, 83 14, 80 4 Z" fill="url(#headerGold)" />
        <path d="M 75 14 C 67 15, 65 24, 76 25 C 77 20, 77 17, 75 14 Z" fill="url(#headerGold)" />
        <path d="M 85 14 C 93 15, 95 24, 84 25 C 83 20, 83 17, 85 14 Z" fill="url(#headerGold)" />
        <rect x="74" y="27" width="12" height="2.5" rx="1" fill="url(#headerGold)" />
        <path d="M 74 28 C 55 24, 40 38, 22 28 C 15 24, 6 30, 2 34" stroke="url(#headerGold)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 86 28 C 105 24, 120 38, 138 28 C 145 24, 154 30, 158 34" stroke="url(#headerGold)" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="22" cy="28" r="2" fill="url(#headerGold)" />
        <circle cx="138" cy="28" r="2" fill="url(#headerGold)" />
      </svg>
    </div>
  );
}

/**
 * Golden Lotus Blossom Divider Motif
 */
function GoldenLotusDivider() {
  return (
    <div className="relative mx-auto w-10 h-7 select-none pointer-events-none my-1">
      <svg viewBox="0 0 50 35" fill="none" className="w-full h-full text-[#c49a38]">
        <path d="M 25 2 C 20 12, 18 24, 25 30 C 32 24, 30 12, 25 2 Z" fill="#fbf5e6" stroke="#b88b2a" strokeWidth="1.2" />
        <path d="M 22 10 C 12 14, 8 24, 18 28 C 22 24, 22 18, 22 10 Z" fill="#fbf5e6" stroke="#b88b2a" strokeWidth="1" />
        <path d="M 28 10 C 38 14, 42 24, 32 28 C 28 24, 28 18, 28 10 Z" fill="#fbf5e6" stroke="#b88b2a" strokeWidth="1" />
        <path d="M 16 18 C 6 22, 4 28, 14 30 C 18 28, 18 24, 16 18 Z" fill="#fbf5e6" stroke="#b88b2a" strokeWidth="0.8" />
        <path d="M 34 18 C 44 22, 46 28, 36 30 C 32 28, 32 24, 34 18 Z" fill="#fbf5e6" stroke="#b88b2a" strokeWidth="0.8" />
        <circle cx="25" cy="30" r="1.5" fill="#b88b2a" />
      </svg>
    </div>
  );
}

/**
 * Top-Right Watercolor Palace Pavilion (Chhatri) on Lake Pichola
 */
function PalaceChhatriBackground() {
  return (
    <div className="pointer-events-none absolute top-4 right-0 w-64 sm:w-80 h-72 select-none opacity-40 mix-blend-multiply -z-10">
      <svg viewBox="0 0 300 280" fill="none" className="w-full h-full">
        {/* Soft Blue Water & Sky Gradient */}
        <ellipse cx="200" cy="180" rx="140" ry="40" fill="#e0f2fe" fillOpacity="0.5" />

        {/* Chhatri Pavilion Structure */}
        <g transform="translate(140, 20)">
          {/* Dome / Cupola */}
          <path d="M 60 40 C 60 15, 100 15, 100 40 Z" fill="#e2d4bd" stroke="#a38b68" strokeWidth="1" />
          <path d="M 80 8 L 80 16 M 78 8 L 82 8" stroke="#94774e" strokeWidth="1.2" />
          <rect x="58" y="39" width="44" height="4" fill="#c4b296" />

          {/* Pillars */}
          <rect x="62" y="43" width="3" height="35" fill="#a38b68" />
          <rect x="74" y="43" width="3" height="35" fill="#a38b68" />
          <rect x="85" y="43" width="3" height="35" fill="#a38b68" />
          <rect x="96" y="43" width="3" height="35" fill="#a38b68" />

          {/* Plinth Base */}
          <rect x="54" y="78" width="52" height="8" fill="#d6c5ad" stroke="#94774e" strokeWidth="0.8" />
        </g>

        {/* Water Reflections */}
        <path d="M 170 120 Q 220 125, 270 120" stroke="#93c5fd" strokeWidth="1.2" strokeOpacity="0.6" />
        <path d="M 150 135 Q 210 140, 280 135" stroke="#7dd3fc" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M 180 150 Q 230 154, 260 150" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.4" />
      </svg>
    </div>
  );
}

/**
 * Top-Left Botanical Branch Overlay
 */
function TopLeftBotanicalBranch() {
  return (
    <div className="pointer-events-none absolute top-0 left-0 w-44 sm:w-56 h-44 select-none opacity-80 z-0">
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
        {/* Sage & Olive Leaf Branches */}
        <path d="M 0 0 C 40 20, 80 50, 110 100" stroke="#697a5f" strokeWidth="1.2" fill="none" />
        <path d="M 20 10 Q 50 15, 65 35 Q 40 40, 20 10 Z" fill="#a3b899" opacity="0.85" />
        <path d="M 45 25 Q 75 30, 90 55 Q 65 60, 45 25 Z" fill="#869e7b" opacity="0.8" />
        <path d="M 70 50 Q 95 65, 110 90 Q 85 95, 70 50 Z" fill="#697a5f" opacity="0.75" />
        {/* Small White Buds */}
        <circle cx="60" cy="18" r="3" fill="#ffffff" stroke="#dcd0be" strokeWidth="0.6" />
        <circle cx="85" cy="42" r="3.5" fill="#ffffff" stroke="#dcd0be" strokeWidth="0.6" />
        <circle cx="105" cy="78" r="2.8" fill="#ffffff" stroke="#dcd0be" strokeWidth="0.6" />
      </svg>
    </div>
  );
}

/**
 * Bottom Corner Botanical Clusters
 */
function BottomBotanicalClusters() {
  return (
    <>
      {/* Bottom-Left Cluster */}
      <div className="pointer-events-none absolute bottom-2 left-0 w-48 sm:w-60 h-48 select-none opacity-85 z-0">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M 0 200 C 40 160, 90 140, 150 120" stroke="#697a5f" strokeWidth="1.2" fill="none" />
          <path d="M 30 180 Q 70 150, 90 170 Q 50 195, 30 180 Z" fill="#869e7b" opacity="0.85" />
          <path d="M 60 160 Q 110 125, 130 150 Q 80 180, 60 160 Z" fill="#a3b899" opacity="0.8" />
          {/* White Lotus Blossom */}
          <circle cx="75" cy="140" r="16" fill="#ffffff" stroke="#e0d5c1" strokeWidth="0.8" />
          <circle cx="75" cy="140" r="6" fill="#fef08a" opacity="0.8" />
        </svg>
      </div>

      {/* Bottom-Right Cluster */}
      <div className="pointer-events-none absolute bottom-2 right-0 w-48 sm:w-60 h-48 select-none opacity-85 z-0 -scale-x-100">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M 0 200 C 40 160, 90 140, 150 120" stroke="#697a5f" strokeWidth="1.2" fill="none" />
          <path d="M 30 180 Q 70 150, 90 170 Q 50 195, 30 180 Z" fill="#869e7b" opacity="0.85" />
          <path d="M 60 160 Q 110 125, 130 150 Q 80 180, 60 160 Z" fill="#a3b899" opacity="0.8" />
          <circle cx="75" cy="140" r="16" fill="#ffffff" stroke="#e0d5c1" strokeWidth="0.8" />
          <circle cx="75" cy="140" r="6" fill="#fef08a" opacity="0.8" />
        </svg>
      </div>
    </>
  );
}

/**
 * Concentric Water Ripple Waves for Milestone Arch Nodes
 */
function WaterRippleRings() {
  return (
    <div className="absolute inset-0 -m-6 pointer-events-none select-none z-0">
      <svg viewBox="0 0 160 100" fill="none" className="w-full h-full">
        <ellipse cx="80" cy="50" rx="72" ry="24" stroke="#bfdbfe" strokeWidth="0.8" strokeDasharray="5 3" strokeOpacity="0.6" />
        <ellipse cx="80" cy="50" rx="54" ry="17" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.75" />
        <ellipse cx="80" cy="50" rx="36" ry="11" stroke="#60a5fa" strokeWidth="0.9" strokeOpacity="0.85" />
      </svg>
    </div>
  );
}

/**
 * Single White Swan Floating Serenely on Lake Pichola
 */
function SingleSwanOnWater({ position = "left" }: { position?: "left" | "right" }) {
  const isRight = position === "right";
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 ${
        isRight ? "right-1 sm:right-3 translate-x-full" : "left-1 sm:left-3 -translate-x-full"
      } w-24 sm:w-28 h-auto pointer-events-none select-none z-20 ${isRight ? "-scale-x-100" : ""}`}
    >
      <img
        src={ceremonySwanRaw}
        alt="Watercolor Swan on Water"
        className="w-full h-auto object-contain mix-blend-multiply opacity-95"
      />
    </div>
  );
}

/**
 * Two White Swans Facing Each Other (Forming Heart Silhouette)
 */
function SwansPairHeartOnWater() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-2 translate-x-full w-32 sm:w-36 flex items-center justify-center pointer-events-none select-none z-20">
      <img
        src={ceremonySwanRaw}
        alt="Left Swan"
        className="w-20 sm:w-22 h-auto object-contain -mr-4 mix-blend-multiply opacity-95"
      />
      <img
        src={ceremonySwanRaw}
        alt="Right Swan"
        className="w-20 sm:w-22 h-auto object-contain -scale-x-100 -ml-4 mix-blend-multiply opacity-95"
      />
    </div>
  );
}

interface CelebrationEvent {
  numeral: string;
  name: string;
  date: string;
  time: string;
  venueName: string;
  cityState: string;
  subtitleQuote: string;
  motifType: "marigold" | "mehendi" | "music" | "lotus";
  side: "left" | "right"; // Details side
  hasLeftSwan?: boolean;
  hasRightSwan?: boolean;
  hasSwansPair?: boolean;
  fullData: CeremonyItem;
}

export function Ceremonies() {
  const [selectedEvent, setSelectedEvent] = useState<CeremonyItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Map 4 celebration events to match reference image layout
  const celebrationList: CelebrationEvent[] = [
    {
      numeral: "01",
      name: "HALDI",
      date: "21 DECEMBER 2026",
      time: "10:00 AM",
      venueName: "THE GARDEN PAVILION",
      cityState: "Jaipur, Rajasthan",
      subtitleQuote: "The first bloom of our story.",
      motifType: "marigold",
      side: "right", // Details on Right
      hasLeftSwan: true,
      fullData: ceremonies[0],
    },
    {
      numeral: "02",
      name: "MEHENDI",
      date: "21 DECEMBER 2026",
      time: "04:00 PM",
      venueName: "THE GARDEN PAVILION",
      cityState: "Jaipur, Rajasthan",
      subtitleQuote: "A little colour, a little laughter.",
      motifType: "mehendi",
      side: "left", // Details on Left
      hasRightSwan: true,
      fullData: ceremonies[0],
    },
    {
      numeral: "03",
      name: "SANGEET",
      date: "21 DECEMBER 2026",
      time: "07:00 PM",
      venueName: "THE LAKE PAVILION",
      cityState: "Jaipur, Rajasthan",
      subtitleQuote: "Where our story finds rhythm.",
      motifType: "music",
      side: "right", // Details on Right
      fullData: ceremonies[1],
    },
    {
      numeral: "04",
      name: "THE WEDDING",
      date: "22 DECEMBER 2026",
      time: "07:00 PM",
      venueName: "THE LAKE PAVILION",
      cityState: "Jaipur, Rajasthan",
      subtitleQuote: "And finally, forever begins.",
      motifType: "lotus",
      side: "left", // Details on Left
      hasSwansPair: true,
      fullData: ceremonies[2],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height;
      const currentProgress = Math.min(
        1,
        Math.max(0, (windowHeight * 0.7 - rect.top) / totalDist)
      );
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const createGoogleCalendarUrl = (c: CeremonyItem) => {
    const title = encodeURIComponent(`${c.name} — ${couple.bride} & ${couple.groom}'s Wedding`);
    const details = encodeURIComponent(`${c.subtitle}\n\nVenue: ${c.place}\nDress Code: ${c.dressCode}`);
    const location = encodeURIComponent(`${c.place}, ${venue.name}, ${venue.address}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section
      ref={sectionRef}
      id="ceremonies"
      className="relative w-full bg-[#faf6ee] px-3 sm:px-4 pt-14 pb-20 text-center select-none overflow-hidden"
    >
      {/* Top Deckle Paper Divider */}
      <TornEdge position="top" variant={2} showGoldFoil={true} className="-top-3 z-30" />

      {/* ── BACKGROUND ATMOSPHERE & DECORATIONS ── */}
      <PalaceChhatriBackground />
      <TopLeftBotanicalBranch />
      <BottomBotanicalClusters />

      {/* ── SECTION HEADER ── */}
      <header className="relative mx-auto max-w-sm z-20 pt-2 pb-4">
        <div className="reveal">
          <TopFiligreeFlourish />
        </div>

        <span className="reveal font-cinzel text-[11px] font-bold tracking-[0.3em] text-[#b88b2a] uppercase block">
          THE
        </span>

        <h2 className="reveal mt-1 font-cinzel-dec text-2xl sm:text-3xl font-bold tracking-[0.07em] sm:tracking-[0.09em] text-[#1c232f] uppercase text-center w-full max-w-full px-1 drop-shadow-2xs">
          CELEBRATIONS
        </h2>

        <p className="reveal mt-2.5 font-serif-body text-[13px] sm:text-[14px] leading-relaxed text-stone-700 italic">
          A beautiful journey begins here.
        </p>

        <div className="reveal mt-2">
          <GoldenLotusDivider />
        </div>
      </header>

      {/* ── TIMELINE CONTAINER WITH CENTRAL S-CURVE THREAD ── */}
      <div className="relative mx-auto max-w-[360px] sm:max-w-[420px] mt-4 z-10">
        {/* Continuous Sinusoidal Golden Thread SVG */}
        <div className="pointer-events-none absolute inset-0 left-1/2 -translate-x-1/2 w-full h-full z-0">
          <svg
            viewBox="0 0 360 1400"
            preserveAspectRatio="none"
            fill="none"
            className="w-full h-full text-[#c49a38]"
          >
            <path
              d="M 180 0 
                 C 180 80, 220 150, 180 280 
                 C 140 410, 230 520, 180 650 
                 C 130 780, 220 890, 180 1020 
                 C 140 1150, 200 1280, 180 1400"
              stroke="#caa44b"
              strokeWidth="1.2"
              strokeDasharray="4 2.5"
              opacity="0.55"
            />
            {/* Scroll-Revealed Gold River Line */}
            <path
              d="M 180 0 
                 C 180 80, 220 150, 180 280 
                 C 140 410, 230 520, 180 650 
                 C 130 780, 220 890, 180 1020 
                 C 140 1150, 200 1280, 180 1400"
              stroke="#d4af37"
              strokeWidth="1.8"
              strokeDasharray="1400"
              strokeDashoffset={1400 * (1 - scrollProgress)}
              className="transition-[stroke-dashoffset] duration-300 ease-out"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* ── 4 CELEBRATION MILESTONES ── */}
        <div className="relative flex flex-col space-y-16 sm:space-y-20 z-10 pt-2">
          {celebrationList.map((item, idx) => {
            const isDetailsRight = item.side === "right";

            return (
              <article key={item.numeral} className="reveal relative w-full" data-delay={`${idx * 0.1}`}>
                {/* ── Central Golden Arch Node with Water Ripples & Icon ── */}
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="relative flex flex-col items-center justify-center">
                    {/* Water Ripples Base */}
                    <WaterRippleRings />

                    {/* Single Swan / Swans Pair Overlays */}
                    {item.hasLeftSwan && <SingleSwanOnWater position="left" />}
                    {item.hasRightSwan && <SingleSwanOnWater position="right" />}
                    {item.hasSwansPair && <SwansPairHeartOnWater />}

                    {/* Floating Numeral Tag & Motif Icon (No Arch Lines / No Background) */}
                    <div className="relative flex flex-col items-center justify-between py-1 pointer-events-none select-none">
                      {/* Numeral Tag */}
                      <span className="font-cinzel text-[9px] sm:text-[9.5px] font-bold text-[#b88b2a] tracking-wider z-10">
                        — {item.numeral} —
                      </span>

                      {/* Motif Icon Illustration floating inside Arch */}
                      <div className="relative w-full flex items-center justify-center my-1 z-10">
                        {item.motifType === "marigold" && (
                          /* 01: Yellow Marigold Flower Bloom */
                          <div className="relative flex flex-col items-center select-none pointer-events-none">
                            <svg viewBox="0 0 40 45" className="w-8 h-9 drop-shadow-2xs">
                              {/* Stem & Leaves */}
                              <path d="M 20 42 C 20 32, 22 24, 20 18" stroke="#4d6343" strokeWidth="1.2" fill="none" />
                              <path d="M 20 30 Q 12 26, 10 32 Q 18 34, 20 30 Z" fill="#869e7b" />
                              <path d="M 20 24 Q 28 20, 30 26 Q 22 28, 20 24 Z" fill="#869e7b" />
                              {/* Marigold Petals Cluster */}
                              <circle cx="20" cy="14" r="10" fill="#f59e0b" />
                              <circle cx="20" cy="14" r="7" fill="#fbbf24" />
                              <circle cx="20" cy="14" r="4" fill="#fef08a" />
                            </svg>
                          </div>
                        )}

                        {item.motifType === "mehendi" && (
                          /* 02: Green Mehendi Leaf Sprig */
                          <div className="relative flex flex-col items-center select-none pointer-events-none">
                            <svg viewBox="0 0 40 45" className="w-7 h-9 drop-shadow-2xs">
                              <path d="M 20 42 C 20 30, 18 20, 20 10" stroke="#3e5235" strokeWidth="1.2" fill="none" />
                              <path d="M 20 34 Q 10 28, 8 34 Q 16 36, 20 34 Z" fill="#697a5f" />
                              <path d="M 20 26 Q 30 20, 32 26 Q 24 28, 20 26 Z" fill="#869e7b" />
                              <path d="M 20 18 Q 10 12, 8 18 Q 16 20, 20 18 Z" fill="#a3b899" />
                              <path d="M 20 12 Q 20 5, 20 10" stroke="#3e5235" strokeWidth="1.2" />
                            </svg>
                          </div>
                        )}

                        {item.motifType === "music" && (
                          /* 03: Golden Musical Note & Stars */
                          <div className="relative flex flex-col items-center select-none pointer-events-none">
                            <svg viewBox="0 0 40 45" className="w-8 h-9 text-[#d4af37] drop-shadow-2xs">
                              <path
                                d="M 24 10 L 24 28 C 24 32, 18 34, 16 30 C 14 26, 18 24, 24 26 Z"
                                fill="url(#headerGold)"
                                stroke="#b88b2a"
                                strokeWidth="0.8"
                              />
                              <path d="M 24 10 L 32 8 L 32 14 L 24 16 Z" fill="url(#headerGold)" />
                              {/* Sparkling Stars */}
                              <circle cx="10" cy="12" r="1.5" fill="#fef08a" />
                              <circle cx="32" cy="24" r="1.2" fill="#fef08a" />
                              <circle cx="12" cy="34" r="1" fill="#fef08a" />
                            </svg>
                          </div>
                        )}

                        {item.motifType === "lotus" && (
                          /* 04: Pristine White Lotus Blossom */
                          <div className="relative flex flex-col items-center select-none pointer-events-none">
                            <svg viewBox="0 0 44 40" className="w-9 h-9 drop-shadow-2xs">
                              <path d="M 22 4 C 17 14, 15 26, 22 32 C 29 26, 27 14, 22 4 Z" fill="#ffffff" stroke="#dcd0be" strokeWidth="0.8" />
                              <path d="M 19 12 C 9 16, 5 26, 15 30 C 19 26, 19 20, 19 12 Z" fill="#fdfbf7" stroke="#dcd0be" strokeWidth="0.7" />
                              <path d="M 25 12 C 35 16, 39 26, 29 30 C 25 26, 25 20, 25 12 Z" fill="#fdfbf7" stroke="#dcd0be" strokeWidth="0.7" />
                              <circle cx="22" cy="28" r="2.5" fill="#fef08a" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 2-Column Grid Layout (Details vs Empty Space) ── */}
                <div className="grid grid-cols-2 gap-3 sm:gap-5 items-center w-full">
                  {/* LEFT COLUMN */}
                  {isDetailsRight ? (
                    /* Empty Spacer on Left (Arch Node sits in center) */
                    <div className="w-full h-1" />
                  ) : (
                    /* Event Details on Left */
                    <div className="flex flex-col items-center text-center px-1 sm:px-2 z-10">
                      <h3 className="font-cinzel text-base sm:text-lg font-bold uppercase tracking-[0.14em] text-[#1c232f]">
                        {item.name}
                      </h3>

                      <div className="mt-2 space-y-1 font-serif-body text-[11.5px] sm:text-[12.5px] text-stone-700">
                        <div className="flex items-center justify-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#b88b2a] shrink-0" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#b88b2a] shrink-0" />
                          <span>{item.time}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 pt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-[#b88b2a] shrink-0" />
                          <div className="flex flex-col leading-tight">
                            <span className="font-cinzel font-bold text-[10px] sm:text-[10.5px] uppercase tracking-wider text-stone-800">
                              {item.venueName}
                            </span>
                            <span className="italic text-[11px] text-stone-600">
                              {item.cityState}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* View Location Link */}
                      <button
                        type="button"
                        onClick={() => setSelectedEvent(item.fullData)}
                        className="mt-2.5 inline-flex items-center gap-1 font-cinzel text-[10px] sm:text-[10.5px] font-bold text-[#b88b2a] hover:text-[#997a15] tracking-wider transition-colors cursor-pointer"
                      >
                        <span>View Location</span>
                        <span>→</span>
                      </button>
                    </div>
                  )}

                  {/* RIGHT COLUMN */}
                  {isDetailsRight ? (
                    /* Event Details on Right */
                    <div className="flex flex-col items-center text-center px-1 sm:px-2 z-10">
                      <h3 className="font-cinzel text-base sm:text-lg font-bold uppercase tracking-[0.14em] text-[#1c232f]">
                        {item.name}
                      </h3>

                      <div className="mt-2 space-y-1 font-serif-body text-[11.5px] sm:text-[12.5px] text-stone-700">
                        <div className="flex items-center justify-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#b88b2a] shrink-0" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#b88b2a] shrink-0" />
                          <span>{item.time}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 pt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-[#b88b2a] shrink-0" />
                          <div className="flex flex-col leading-tight">
                            <span className="font-cinzel font-bold text-[10px] sm:text-[10.5px] uppercase tracking-wider text-stone-800">
                              {item.venueName}
                            </span>
                            <span className="italic text-[11px] text-stone-600">
                              {item.cityState}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* View Location Link */}
                      <button
                        type="button"
                        onClick={() => setSelectedEvent(item.fullData)}
                        className="mt-2.5 inline-flex items-center gap-1 font-cinzel text-[10px] sm:text-[10.5px] font-bold text-[#b88b2a] hover:text-[#997a15] tracking-wider transition-colors cursor-pointer"
                      >
                        <span>View Location</span>
                        <span>→</span>
                      </button>
                    </div>
                  ) : (
                    /* Empty Spacer on Right (Arch Node sits in center) */
                    <div className="w-full h-1" />
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Lotus Motif Divider */}
        <div className="reveal mt-14 mb-2">
          <GoldenLotusDivider />
        </div>
      </div>

      {/* ── CEREMONY DETAILS MODAL DIALOG ── */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="relative w-full max-w-sm rounded-2xl bg-[#faf6ee] p-5 border border-[#d4af37] shadow-2xl text-left select-text">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-200/60 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="font-cinzel text-[10px] font-bold text-[#b88b2a] tracking-widest uppercase">
              Act {selectedEvent.numeral} · {selectedEvent.name}
            </span>
            <h3 className="font-cinzel text-lg font-bold text-[#1c232f] mt-1">
              {selectedEvent.name}
            </h3>
            <p className="font-serif-body italic text-stone-600 text-xs mt-1">
              {selectedEvent.subtitle}
            </p>

            <div className="mt-4 space-y-2 text-xs font-serif-body text-stone-700">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#b88b2a] shrink-0" />
                <span>{selectedEvent.date} · {selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#b88b2a] shrink-0" />
                <span>{selectedEvent.place}</span>
              </div>
              <div className="flex items-start gap-2">
                <Shirt className="w-4 h-4 text-[#b88b2a] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900">Dress Code:</span> {selectedEvent.dressCode}
                  {selectedEvent.dressCodeDetail && (
                    <p className="font-serif-body italic text-stone-500 text-[11px] mt-0.5">
                      {selectedEvent.dressCodeDetail}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <p className="mt-3 font-serif-body text-xs leading-relaxed text-stone-600 bg-[#f4ecd9]/60 p-3 rounded-xl border border-[#e5d8b8]">
              {selectedEvent.detail}
            </p>

            <div className="mt-4 flex items-center gap-2 pt-2 border-t border-[#e2d6b9]">
              <a
                href={createGoogleCalendarUrl(selectedEvent)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37] bg-white/95 px-3.5 py-1.5 font-cinzel text-[10px] font-bold uppercase tracking-wider text-[#997a15] shadow-xs hover:bg-[#fcf7ec] transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Add to Calendar</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Deckle Paper Divider transitioning into Gallery Section */}
      <TornEdge position="bottom" variant={1} showGoldFoil={true} className="-bottom-3 z-30" />
    </section>
  );
}
