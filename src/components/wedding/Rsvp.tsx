import { useState } from "react";
import { couple } from "@/lib/wedding";
import { TornEdge } from "@/components/wedding/TornEdge";
import ceremonySwanRaw from "@/assets/ceremony-swan-raw.png";

interface HeartParticle {
  id: number;
  leftPercent: number;
  sizePx: number;
  durationSec: number;
  delaySec: number;
  opacity: number;
  colorClass: string;
}

/**
 * Continuous Floating Red Hearts Animation
 * Triggered infinitely from true bottom to true top after invitation is accepted.
 */
function FloatingHeartsAnimation() {
  // Generate 24 floating red hearts of varying sizes, speeds, and positions
  const hearts: HeartParticle[] = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    leftPercent: (i * 4.1 + 2) % 95, // Distributed horizontally across 2% to 96%
    sizePx: 14 + (i % 5) * 7, // Varying sizes from 14px to 42px
    durationSec: 4.5 + (i % 4) * 1.4, // Float duration 4.5s to 8.7s
    delaySec: (i * 0.35) % 4.2, // Staggered start delays
    opacity: 0.7 + (i % 4) * 0.08,
    colorClass:
      i % 3 === 0
        ? "fill-rose-600 text-rose-600"
        : i % 3 === 1
        ? "fill-red-500 text-red-500"
        : "fill-rose-500 text-rose-500",
  }));

  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full z-10 overflow-hidden select-none">
      <style>{`
        @keyframes floatUpHeart {
          0% {
            transform: translateY(40px) scale(0.6);
            opacity: 0;
          }
          12% {
            opacity: 0.95;
          }
          85% {
            opacity: 0.85;
          }
          100% {
            transform: translateY(-115vh) scale(1.15);
            opacity: 0;
          }
        }
      `}</style>
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute bottom-0 opacity-0"
          style={{
            left: `${h.leftPercent}%`,
            width: `${h.sizePx}px`,
            height: `${h.sizePx}px`,
            animationName: "floatUpHeart",
            animationDuration: `${h.durationSec}s`,
            animationDelay: `${h.delaySec}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className={`w-full h-full ${h.colorClass} filter drop-shadow-[0_2px_8px_rgba(225,29,72,0.4)]`}
            style={{ opacity: h.opacity }}
          >
            <path d="M 12 21.35 L 10.55 20.03 C 5.4 15.36 2 12.28 2 8.5 C 2 5.42 4.42 3 7.5 3 C 9.24 3 10.91 3.81 12 5.09 C 13.09 3.81 14.76 3 16.5 3 C 19.58 3 22 5.42 22 8.5 C 22 12.28 18.6 15.36 13.45 20.04 Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export function Rsvp() {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <section
      id="rsvp"
      className="relative w-full bg-[#faf6ee] px-3 sm:px-4 pt-16 pb-24 text-center select-none overflow-hidden min-h-[90vh] flex flex-col justify-between"
    >
      {/* Top Deckle Paper Divider */}
      <TornEdge position="top" variant={1} showGoldFoil={true} className="-top-3 z-30" />

      {/* ── SOFT PALE BLUE WATERCOLOR LAKE ENVIRONMENT ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft Watercolor Lake Splash */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[85%] bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.38)_0%,rgba(224,242,254,0.18)_55%,transparent_85%)] blur-2xl" />

        {/* Floating Lotus Petals on Lake Surface */}
        <svg viewBox="0 0 400 300" fill="none" className="absolute inset-0 w-full h-full opacity-40">
          <ellipse cx="60" cy="180" rx="14" ry="4" fill="#fbcfe8" opacity="0.6" transform="rotate(-15 60 180)" />
          <ellipse cx="340" cy="220" rx="16" ry="5" fill="#fbcfe8" opacity="0.6" transform="rotate(20 340 220)" />
        </svg>
      </div>

      {/* ── CONTINUOUS FLOATING RED HEARTS (Fires infinitely after Invitation Accepted) ── */}
      {isAccepted && <FloatingHeartsAnimation />}

      {/* ── SECTION HEADER ── */}
      <header className="relative mx-auto max-w-md z-20 pt-4 pb-2">
        <span className="reveal font-cinzel text-[10.5px] sm:text-[11px] font-bold tracking-[0.3em] text-[#b88b2a] uppercase block">
          R S V P
        </span>
        <h2 className="reveal mt-1 font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.12em] text-[#1c232f] uppercase">
          Celebrate With Us
        </h2>
        <p className="reveal mt-2 font-serif-body text-[13px] sm:text-[14px] leading-relaxed text-stone-700 italic px-2">
          "We would love to celebrate this beautiful beginning with you."
        </p>

        {/* Small Champagne Lotus Divider */}
        <div className="reveal mx-auto mt-2.5 flex items-center justify-center gap-2">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#c49a38]" />
          <span className="text-[#c49a38] text-[8px]">❖</span>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#c49a38]" />
        </div>
      </header>

      {/* ── TWO SWANS LAKE COMPOSITION (Glides Closer to Center upon Acceptance) ── */}
      <div className="relative w-full max-w-2xl sm:max-w-3xl mx-auto h-36 sm:h-44 flex items-center justify-center z-20 my-2">
        {/* LEFT SWAN */}
        <div
          className={`absolute top-2 sm:top-4 transition-all duration-1000 ease-out pointer-events-none select-none z-20 ${
            isAccepted
              ? "left-1/2 -translate-x-[82%] scale-105 sm:scale-115"
              : "left-0 sm:left-4 scale-90 sm:scale-100"
          }`}
        >
          <div className="relative w-28 sm:w-36 h-auto">
            <img
              src={ceremonySwanRaw}
              alt="Left Swan"
              className="w-full h-auto object-contain mix-blend-multiply opacity-95 -scale-x-100"
            />
          </div>
        </div>

        {/* RIGHT SWAN */}
        <div
          className={`absolute top-2 sm:top-4 transition-all duration-1000 ease-out pointer-events-none select-none z-20 ${
            isAccepted
              ? "right-1/2 translate-x-[82%] scale-105 sm:scale-115"
              : "right-0 sm:right-4 scale-90 sm:scale-100"
          }`}
        >
          <div className="relative w-28 sm:w-36 h-auto">
            <img
              src={ceremonySwanRaw}
              alt="Right Swan"
              className="w-full h-auto object-contain mix-blend-multiply opacity-95"
            />
          </div>
        </div>
      </div>

      {/* ── ACTION SECTION: ACCEPT INVITATION BUTTON OR CONFIRMATION ── */}
      <div className="relative w-full max-w-3xl mx-auto z-20">
        {isAccepted ? (
          <div className="relative z-30 flex flex-col items-center justify-center py-6 text-center animate-fade-in max-w-sm mx-auto px-4">
            <span className="font-cinzel text-[10px] sm:text-[10.5px] font-bold tracking-[0.28em] text-[#b88b2a] uppercase">
              INVITATION ACCEPTED
            </span>
            <h3 className="mt-2 font-serif-body text-xl sm:text-2xl font-normal text-[#1c232f] italic">
              "We can't wait to celebrate with you."
            </h3>

            <div className="mt-3 flex flex-col items-center gap-0.5">
              <span className="font-serif-body text-xs sm:text-sm text-stone-600 italic">With love,</span>
              <span className="font-cinzel text-base font-bold text-[#1c232f]">
                {couple.bride} &amp; {couple.groom}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsAccepted(false)}
              className="mt-5 font-cinzel text-[9.5px] font-bold uppercase tracking-wider text-[#b88b2a] border-b border-[#b88b2a]/60 pb-0.5 hover:text-[#997a15] transition-colors cursor-pointer"
            >
              Celebrate Again
            </button>
          </div>
        ) : (
          /* ── SINGLE ELEGANT ACCEPT INVITATION BUTTON ── */
          <div className="relative z-30 w-full max-w-xs sm:max-w-sm mx-auto px-4 flex flex-col items-center pt-2 pb-6">
            <button
              type="button"
              onClick={() => setIsAccepted(true)}
              className="group inline-flex items-center justify-center gap-3.5 rounded-full border border-[#d4af37]/80 bg-gradient-to-r from-[#d4af37] via-[#c49a38] to-[#b8860b] px-8 py-3.5 font-cinzel text-xs sm:text-[13px] font-bold uppercase tracking-[0.24em] text-white shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <span className="text-amber-200 transition-transform group-hover:-translate-x-1">⤁</span>
              <span>ACCEPT INVITATION</span>
              <span className="text-amber-200 transition-transform group-hover:translate-x-1">⤁</span>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Deckle Paper Divider */}
      <TornEdge position="bottom" variant={2} showGoldFoil={true} className="-bottom-3 z-30" />
    </section>
  );
}
