import { useState, useRef, useEffect } from "react";
import { ceremonies, venue, couple, type CeremonyItem } from "@/lib/wedding";
import { Calendar, ChevronDown, Clock, MapPin, Sparkles, Shirt } from "lucide-react";
import { getGsap, prefersReducedMotion } from "@/lib/motion";

export function Ceremonies() {
  const [openId, setOpenId] = useState<string | null>(ceremonies[0]?.id ?? null);
  const roadTrackRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  // Synchronize the car position along the road with user scrolling
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const { gsap, ScrollTrigger } = getGsap();

    const roadEl = roadTrackRef.current;
    const carEl = carRef.current;
    if (!roadEl || !carEl) return;

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
    const scroller = isDesktop
      ? (document.querySelector(".custom-scrollbar") as HTMLElement) || window
      : window;

    const ctx = gsap.context(() => {
      // Animate the car from top to bottom of the road
      gsap.fromTo(
        carEl,
        { y: 0 },
        {
          y: () => {
            const trackHeight = roadEl.offsetHeight;
            const carHeight = carEl.offsetHeight;
            return Math.max(0, trackHeight - carHeight - 20);
          },
          ease: "none",
          scrollTrigger: {
            trigger: roadEl,
            scroller,
            start: "top 75%",
            end: "bottom 70%",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const createGoogleCalendarUrl = (c: CeremonyItem) => {
    const title = encodeURIComponent(`${c.name} — ${couple.bride} & ${couple.groom}'s Wedding`);
    const details = encodeURIComponent(`${c.subtitle}\n\nVenue: ${c.place}\nDress Code: ${c.dressCode}\n\n${c.detail}`);
    const location = encodeURIComponent(`${c.place}, ${venue.name}, ${venue.address}`);
    
    let startIso = "20261210T100000Z";
    let endIso = "20261210T140000Z";
    if (c.id === "sangeet") {
      startIso = "20261211T133000Z";
      endIso = "20261211T183000Z";
    } else if (c.id === "wedding") {
      startIso = "20261212T103000Z";
      endIso = "20261212T150000Z";
    } else if (c.id === "reception") {
      startIso = "20261212T143000Z";
      endIso = "20261212T190000Z";
    }

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  };

  return (
    <section id="ceremonies" className="relative px-2 py-16 text-center overflow-hidden">
      {/* Header */}
      <header className="relative mx-auto max-w-sm z-10">
        <div className="reveal inline-block">
          <span className="font-cinzel text-xs font-bold tracking-[0.28em] text-[#997a15] uppercase">
            Wedding Itinerary
          </span>
          <h2 className="mt-2 font-cinzel-dec text-2xl font-bold tracking-wide text-[#1c232f]">
            The Royal Procession
          </h2>
          <div className="mx-auto mt-2.5 h-0.5 w-14 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-2 font-serif-body text-xs text-stone-600">
            Journey through our celebration milestones
          </p>
        </div>
      </header>

      {/* ── ROAD TRACK CONTAINER WITH FLORAL EDGES & SCROLL CAR ── */}
      <div
        ref={roadTrackRef}
        className="relative mx-auto mt-10 max-w-sm flex flex-col z-10"
      >
        {/* ── Central Paved Road Strip ── */}
        <div className="pointer-events-none absolute left-6 top-0 bottom-0 w-10 sm:w-12 bg-gradient-to-b from-[#e8decb] via-[#dfd3bc] to-[#d8c8ab] rounded-full border-x-2 border-amber-300/80 shadow-[inset_0_0_10px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Dashed Center Lane Marking */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] border-r-2 border-dashed border-white/70" />
          {/* Subtle stone texture lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#92400e_0.75px,transparent_0.75px)] [background-size:8px_8px] opacity-15" />
        </div>

        {/* ── Left Floral Border along the Road ── */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-between py-2 overflow-hidden z-20">
          {[...Array(12)].map((_, i) => (
            <div key={`fl-l-${i}`} className="text-[14px] leading-none transform -rotate-12 select-none opacity-90 drop-shadow-2xs">
              {i % 3 === 0 ? "🌸" : i % 3 === 1 ? "🌼" : "🌿"}
            </div>
          ))}
        </div>

        {/* ── Right Floral Border along the Road ── */}
        <div className="pointer-events-none absolute left-15 sm:left-17 top-0 bottom-0 w-6 flex flex-col justify-between py-2 overflow-hidden z-20">
          {[...Array(12)].map((_, i) => (
            <div key={`fl-r-${i}`} className="text-[14px] leading-none transform rotate-12 select-none opacity-90 drop-shadow-2xs">
              {i % 3 === 0 ? "🌼" : i % 3 === 1 ? "🌸" : "🌿"}
            </div>
          ))}
        </div>

        {/* ── Scroll-Driven Vintage Wedding Car ── */}
        <div
          ref={carRef}
          className="pointer-events-none absolute left-6 top-2 z-30 w-10 sm:w-12 flex flex-col items-center select-none"
        >
          {/* Glowing Headlights Beam */}
          <div className="w-8 h-10 bg-gradient-to-b from-amber-200/50 via-amber-100/20 to-transparent blur-xs rounded-full transform -mt-4 opacity-75" />

          {/* Handcrafted Royal Vintage Roadster Car (SVG) */}
          <svg
            viewBox="0 0 50 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-auto drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
          >
            {/* Wheels / Tires */}
            <rect x="2" y="14" width="6" height="15" rx="2" fill="#1c1917" />
            <rect x="42" y="14" width="6" height="15" rx="2" fill="#1c1917" />
            <rect x="2" y="58" width="6" height="15" rx="2" fill="#1c1917" />
            <rect x="42" y="58" width="6" height="15" rx="2" fill="#1c1917" />

            {/* Vintage Chassis & Fenders */}
            <path
              d="M 8 20 C 8 8, 42 8, 42 20 L 44 65 C 44 78, 6 78, 6 65 Z"
              fill="#faf6ee"
              stroke="#b45309"
              strokeWidth="1.2"
            />

            {/* Chrome Bumpers */}
            <rect x="10" y="8" width="30" height="3" rx="1.5" fill="#fef08a" stroke="#b45309" strokeWidth="0.6" />
            <rect x="8" y="74" width="34" height="3.5" rx="1.5" fill="#fef08a" stroke="#b45309" strokeWidth="0.6" />

            {/* Hood & Windshield */}
            <path d="M 12 18 L 38 18 L 36 32 L 14 32 Z" fill="#fef9c3" stroke="#d97706" strokeWidth="0.7" />
            {/* Glass Windshield */}
            <path d="M 14 32 L 36 32 L 34 38 L 16 38 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="0.6" fillOpacity="0.85" />

            {/* Passenger Cabin (Open Convertible) */}
            <rect x="15" y="39" width="20" height="18" rx="3" fill="#78350f" />
            {/* Couple in Car */}
            <circle cx="21" cy="46" r="3.2" fill="#fed7aa" />
            <circle cx="29" cy="46" r="3.2" fill="#fed7aa" />
            {/* Bride Veil / Golden Trim */}
            <path d="M 18 45 Q 21 41, 24 45" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M 26 44 Q 29 41, 32 44" stroke="#d97706" strokeWidth="1.2" />

            {/* Rear Floral Garland & Just Married Ribbons */}
            <ellipse cx="25" cy="62" rx="10" ry="3.5" fill="#f43f5e" fillOpacity="0.85" />
            <circle cx="20" cy="62" r="1.5" fill="#fbbf24" />
            <circle cx="25" cy="62" r="1.5" fill="#ffffff" />
            <circle cx="30" cy="62" r="1.5" fill="#fbbf24" />

            {/* Fluttering Golden Silk Streamers */}
            <path d="M 21 66 Q 18 76, 14 82" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 29 66 Q 32 76, 36 82" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" />
          </svg>

          {/* Trailing golden sparkles */}
          <div className="flex items-center gap-1 mt-0.5 text-[9px] text-amber-400 animate-pulse">
            ✨
          </div>
        </div>

        {/* ── Ceremony Function Milestones (Positioned alongside road) ── */}
        <div className="space-y-6 pl-22 sm:pl-24 text-left">
          {ceremonies.map((c, i) => {
            const isOpen = openId === c.id;
            return (
              <div
                key={c.id}
                className={`reveal paper rounded-2xl border transition-all duration-300 overflow-hidden relative ${
                  isOpen
                    ? "border-[#d4af37] shadow-[0_8px_25px_rgba(212,175,55,0.22)] ring-1 ring-[#d4af37]/40"
                    : "border-amber-200/60 hover:border-amber-300 shadow-xs"
                }`}
                data-delay={`${i * 0.1}`}
              >
                {/* Milestone Connector Line to Road */}
                <div className="pointer-events-none absolute -left-6 top-6 w-6 h-[2px] bg-gradient-to-r from-amber-300 to-[#d4af37]" />
                <div className="pointer-events-none absolute -left-7 top-[21px] w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_6px_rgba(212,175,55,0.8)]" />

                {/* Milestone Header Button */}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : c.id)}
                  className="flex w-full items-center justify-between p-3.5 text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 pr-1">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-300 text-base shadow-2xs">
                      {c.icon}
                    </span>
                    <div>
                      <span className="font-cinzel text-[9.5px] font-bold uppercase tracking-wider text-[#997a15]">
                        Act {c.numeral} · {c.date.split(",")[0]}
                      </span>
                      <h3 className="font-cinzel text-xs font-bold text-[#1c232f] mt-0.5 leading-snug">
                        {c.name}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#997a15] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Details */}
                {isOpen && (
                  <div className="px-3.5 pb-4 pt-1 border-t border-amber-200/40 text-xs text-stone-700 animate-fade-in">
                    <p className="font-serif-body italic text-stone-600 text-xs mt-1">
                      {c.subtitle}
                    </p>

                    <div className="mt-3 space-y-1.5 text-[11px] font-sans">
                      <div className="flex items-center gap-2 text-stone-600">
                        <Clock className="h-3.5 w-3.5 text-[#997a15] shrink-0" />
                        <span>{c.date} · {c.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-600">
                        <MapPin className="h-3.5 w-3.5 text-[#997a15] shrink-0" />
                        <span>{c.place}</span>
                      </div>
                      <div className="flex items-start gap-2 text-stone-600">
                        <Shirt className="h-3.5 w-3.5 text-[#997a15] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-stone-800">Dress Code:</span> {c.dressCode}
                          {c.dressCodeDetail && (
                            <p className="font-serif-body italic text-stone-500 text-[10px] mt-0.5">
                              {c.dressCodeDetail}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Color Swatches */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="font-cinzel text-[9px] font-bold uppercase tracking-wider text-stone-500">
                        Palette:
                      </span>
                      <div className="flex items-center gap-1.5">
                        {c.dressCodeColors.map((col) => (
                          <span
                            key={col.name}
                            title={col.name}
                            className="h-3.5 w-3.5 rounded-full border border-stone-300 shadow-2xs"
                            style={{ backgroundColor: col.hex }}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="mt-3 font-serif-body text-[11px] leading-relaxed text-stone-600 bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/40">
                      {c.detail}
                    </p>

                    <div className="mt-3 pt-1">
                      <a
                        href={createGoogleCalendarUrl(c)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-white/90 px-3 py-1 font-cinzel text-[9px] font-bold uppercase tracking-wider text-[#997a15] shadow-2xs hover:bg-amber-50 active:scale-95 transition-all"
                      >
                        <Calendar className="h-3 w-3" />
                        <span>Add to Calendar</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
