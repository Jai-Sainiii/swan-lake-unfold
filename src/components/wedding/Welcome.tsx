import { useEffect, useState } from "react";
import { couple } from "@/lib/wedding";
import { ChevronDown, Sparkles } from "lucide-react";
import { SwanFountainCountdown } from "@/components/wedding/SwanFountainCountdown";
import welcomeBg from "@/assets/welcome-bg.jpg";

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
      className="relative flex min-h-[100svh] flex-col items-center justify-between px-3 pt-16 pb-10 text-center select-none overflow-hidden"
    >
      {/* ── Royal Swan Lake Ornate Frame Background (Fitted Cleanly) ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <img
          src={welcomeBg}
          alt="Royal Swan Lake Arch Frame"
          className="h-full w-full object-cover object-top opacity-95"
        />
        {/* Soft subtle radial wash to highlight centered typography */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.45)_50%,transparent_85%)]" />
      </div>

      {/* ── CENTERED INVITATION CONTENT (Inside the Gilded Arch) ── */}
      <div className="my-auto flex flex-col items-center w-full max-w-[320px] mx-auto z-10 py-2">
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

        {/* ── Compact Royal Fountain Countdown (Fitted inside the frame) ── */}
        <div className="reveal mt-3 w-full" data-delay="0.16">
          <SwanFountainCountdown parts={c} />
        </div>
      </div>

      {/* ── Bottom Scroll Indicator ── */}
      <div className="reveal flex flex-col items-center gap-1 text-stone-500 z-10 pb-2" data-delay="0.2">
        <span className="font-cinzel text-[8.5px] uppercase tracking-[0.28em] text-[#997a15]/90 font-semibold">
          Explore Our Story
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-[#d4af37] animate-bounce" />
      </div>
    </section>
  );
}
