import { useEffect, useState } from "react";
import { couple } from "@/lib/wedding";
import { ChevronDown, Sparkles } from "lucide-react";
import { SwanFountainCountdown } from "@/components/wedding/SwanFountainCountdown";
import welcomeBg from "@/assets/welcome-bg.jpg";
import topFloralCanopy from "@/assets/top-floral-canopy.png";

function useCountdown(target: string) {
  const [parts, setParts] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const tick = () => {
      const diff = new Date(target).getTime() - Date.now();
      const s = Math.max(0, Math.floor(diff / 1000));
      setParts({
        d: Math.floor(s / 86400),
        h: Math.floor((s % 86400) / 3600),
        m: Math.floor((s % 3600) / 60),
        s: Math.floor(s % 60),
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return parts;
}

export function Welcome() {
  const c = useCountdown(couple.dateISO);

  return (
    <section
      id="welcome"
      className="relative flex min-h-[114svh] sm:min-h-[118svh] w-full flex-col items-center justify-between px-0 pt-28 sm:pt-32 pb-0 text-center select-none overflow-hidden"
    >
      {/* ── TOP FLORAL CANOPY OVERLAY (At the very top) ── */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 w-full z-20 flex justify-center select-none overflow-hidden">
        <img
          src={topFloralCanopy}
          alt="Top Floral Canopy"
          className="w-full max-h-36 sm:max-h-44 object-cover object-top drop-shadow-sm opacity-95"
        />
      </div>
      {/* ── Royal Swan Lake Ornate Frame Background (Zoomed out) ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#faf8f5]">
        <img
          src={welcomeBg}
          alt="Royal Swan Lake Arch Frame"
          className="h-full w-full object-cover object-top scale-100 origin-top opacity-95 transition-transform duration-1000"
        />
        {/* Soft subtle radial wash to highlight centered typography */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.2)_50%,transparent_85%)]" />
      </div>

      {/* ── TOP & CENTER INVITATION CONTENT (Positioned below the top arch) ── */}
      <div className="flex flex-col items-center w-full max-w-[340px] px-4 mx-auto z-10 pt-4 sm:pt-6">
        {/* Decorative Top Monogram Seal Badge */}
        <div className="reveal relative mb-2 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-13 h-13 rounded-full border border-[#d4af37]/75 bg-gradient-to-b from-[#faf5ef] to-[#f3ede2] shadow-[0_3px_12px_rgba(212,175,55,0.25)]">
            <svg viewBox="0 0 60 60" className="absolute inset-1 w-11 h-11 text-[#d4af37]/70 fill-none stroke-current" strokeWidth="0.8">
              <circle cx="30" cy="30" r="26" strokeDasharray="3 2.5" />
              <circle cx="30" cy="30" r="22" strokeWidth="0.5" />
            </svg>
            <span className="font-cinzel text-[11px] tracking-wider text-[#997a15] font-bold">
              {couple.monogram}
            </span>
          </div>
        </div>

        <p className="reveal font-cinzel text-[10px] uppercase tracking-[0.28em] text-[#997a15] font-semibold">
          Together with their families
        </p>

        {/* Couple Names */}
        <h1 className="reveal mt-2 flex flex-col items-center gap-0.5" data-delay="0.08">
          <span className="font-cinzel-dec text-3xl font-bold leading-tight tracking-[0.06em] text-[#1c232f] drop-shadow-2xs">
            {couple.bride}
          </span>
          <span className="font-script text-2xl text-[#d4af37] -my-1">
            &amp;
          </span>
          <span className="font-cinzel-dec text-3xl font-bold leading-tight tracking-[0.06em] text-[#1c232f] drop-shadow-2xs">
            {couple.groom}
          </span>
        </h1>

        {/* Date & Destination Tagline */}
        <div className="reveal mt-2.5 max-w-xs px-2" data-delay="0.12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/50 bg-[#fdfcf9]/95 px-3 py-1 shadow-2xs">
            <Sparkles className="h-3 w-3 text-[#d4af37]" />
            <span className="font-cinzel text-[10.5px] font-semibold tracking-[0.18em] text-[#997a15] uppercase">
              {couple.dateLabel}
            </span>
          </div>
          <p className="mt-2 font-serif-body text-[11.5px] font-normal leading-relaxed text-stone-700">
            {couple.tagline}
          </p>
          <p className="mt-1 font-cinzel text-[9.5px] tracking-[0.16em] text-stone-600 uppercase font-medium">
            {couple.venue} · {couple.city}
          </p>
        </div>
      </div>

      {/* ── BOTTOM FOUNTAIN COUNTDOWN & SCROLL INDICATOR (Full Width Edge-to-Edge) ── */}
      <div className="relative w-full z-10 mt-auto flex flex-col items-center">
        {/* Fountain Component (100% width) */}
        <div className="reveal w-full" data-delay="0.16">
          <SwanFountainCountdown parts={c} />
        </div>

        {/* Bottom Scroll Indicator Overlaid at the Base */}
        <div className="reveal absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-stone-600 z-20" data-delay="0.2">
          <span className="font-cinzel text-[8.5px] uppercase tracking-[0.28em] text-[#8a6616] font-bold drop-shadow-xs">
            Explore Our Story
          </span>
          <ChevronDown className="h-3.5 w-3.5 text-[#997a15] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
