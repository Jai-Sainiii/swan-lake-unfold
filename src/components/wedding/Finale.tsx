import { couple } from "@/lib/wedding";
import { RotateCcw, Calendar, Heart } from "lucide-react";
import { TornEdge } from "@/components/wedding/TornEdge";
import thankyouPavilionImg from "@/assets/thankyou-pavilion.png";

export function Finale({ onReplay }: { onReplay: () => void }) {
  const handleSaveDate = () => {
    const title = encodeURIComponent(`${couple.bride} & ${couple.groom}'s Royal Wedding`);
    const details = encodeURIComponent(`Wedding celebrations of ${couple.brideFull} & ${couple.groomFull} in Udaipur, Rajasthan.`);
    const location = encodeURIComponent(`${couple.venue}, ${couple.city}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261210T100000Z/20261213T040000Z&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="finale"
      className="relative flex min-h-[85svh] flex-col items-center justify-center bg-[#faf6ee] px-3 sm:px-4 pt-16 pb-20 text-center select-none overflow-hidden"
    >
      {/* Top Deckle Paper Divider */}
      <TornEdge position="top" variant={1} showGoldFoil={true} className="-top-3 z-30" />

      {/* Soft Ethereal Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(253,248,238,0.9)_0%,rgba(250,246,238,0.4)_60%,transparent_100%)]" />

      {/* Golden Lotus Crown Motif */}
      <div className="reveal flex items-center justify-center gap-2 mb-2 z-10">
        <svg viewBox="0 0 120 30" fill="none" className="w-28 h-7 text-[#d4af37]">
          <path d="M 60 4 C 55 12, 53 22, 60 26 C 67 22, 65 12, 60 4 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="1.2" />
          <path d="M 57 10 C 49 13, 46 21, 54 24 C 58 21, 58 16, 57 10 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="1" />
          <path d="M 63 10 C 71 13, 74 21, 66 24 C 62 21, 62 16, 63 10 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="1" />
          <circle cx="60" cy="25" r="1.5" fill="#b88b2a" />
          <path d="M 45 20 C 35 15, 20 25, 5 18" stroke="#caa44b" strokeWidth="1" strokeLinecap="round" />
          <path d="M 75 20 C 85 15, 100 25, 115 18" stroke="#caa44b" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>

      {/* Decorative Royal Swan Monogram Seal */}
      <div className="reveal mx-auto mb-3 flex items-center justify-center z-10">
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-[#d4af37]/80 bg-gradient-to-b from-[#faf5ef] to-[#f3ede2] shadow-[0_4px_16px_rgba(212,175,55,0.25)]">
          <svg viewBox="0 0 60 60" className="absolute inset-1 w-12 h-12 text-[#d4af37]/70 fill-none stroke-current" strokeWidth="0.8">
            <circle cx="30" cy="30" r="26" strokeDasharray="3 2.5" />
            <circle cx="30" cy="30" r="22" strokeWidth="0.5" />
          </svg>
          <span className="font-cinzel text-xs tracking-wider text-[#997a15] font-bold">
            {couple.monogram}
          </span>
        </div>
      </div>

      <p className="reveal font-script text-2xl sm:text-3xl text-[#d4af37] drop-shadow-2xs z-10">
        And so, their next chapter begins...
      </p>

      <h2
        className="reveal mt-3 font-cinzel text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#1c232f] uppercase drop-shadow-2xs z-10"
        data-delay="0.1"
      >
        {couple.bride} &amp; {couple.groom}
      </h2>

      <p
        className="reveal mt-2 font-cinzel text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.22em] text-[#997a15] uppercase z-10"
        data-delay="0.15"
      >
        {couple.dateLabel} · {couple.city}
      </p>

      <p
        className="reveal mt-3 max-w-xs font-serif-body text-xs sm:text-[13px] text-stone-700 italic leading-relaxed z-10"
        data-delay="0.2"
      >
        Thank you for showering our lives with your heartfelt love and blessings.
      </p>

      <p className="reveal mt-2 font-cinzel text-[11px] font-bold text-[#b88b2a] tracking-[0.2em] z-10" data-delay="0.22">
        {couple.hashtag}
      </p>

      {/* Hand-painted Watercolor Mandap Chhatri Pavilion Illustration */}
      <div className="reveal relative mt-6 mb-2 flex flex-col items-center justify-center z-10" data-delay="0.24">
        <div className="relative w-56 sm:w-68 max-w-full drop-shadow-md select-none pointer-events-none">
          <img
            src={thankyouPavilionImg}
            alt="Royal Mandap Chhatri Pavilion"
            className="w-full h-auto object-contain mix-blend-multiply opacity-95"
          />
        </div>
      </div>

      {/* Action Buttons (Save The Date & Replay Invitation) */}
      <div className="reveal mt-6 flex flex-col gap-2.5 w-full max-w-xs mx-auto z-10" data-delay="0.28">
        <button
          type="button"
          onClick={handleSaveDate}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] py-2.5 px-5 font-cinzel text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="h-3.5 w-3.5" />
          <span>Save The Date</span>
        </button>

        <button
          type="button"
          onClick={onReplay}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d4af37]/70 bg-white/95 py-2.5 px-5 font-cinzel text-[11px] font-bold uppercase tracking-[0.18em] text-[#997a15] shadow-xs hover:bg-[#fcf8f0] active:scale-95 transition-all cursor-pointer"
        >
          <RotateCcw className="h-3.5 w-3.5 text-[#997a15]" />
          <span>Replay Invitation</span>
        </button>
      </div>

      {/* Footer Signature */}
      <div className="reveal mt-10 flex flex-col items-center gap-1.5 text-stone-500 text-[11px] font-serif-body z-10" data-delay="0.32">
        <div className="flex items-center gap-1.5">
          <span>Made with</span>
          <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
          <span>for {couple.bride} &amp; {couple.groom}</span>
        </div>
        {/* Bottom Golden Lotus Flourish */}
        <div className="mt-1 opacity-70">
          <svg viewBox="0 0 40 30" fill="none" className="w-7 h-5 text-[#d4af37]">
            <path d="M 20 2 C 16 10, 14 18, 20 22 C 26 18, 24 10, 20 2 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="1" />
            <path d="M 17 8 C 10 11, 7 17, 14 20 C 18 17, 18 13, 17 8 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="0.8" />
            <path d="M 23 8 C 30 11, 33 17, 26 20 C 22 17, 22 13, 23 8 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="0.8" />
            <circle cx="20" cy="21" r="1.2" fill="#b88b2a" />
          </svg>
        </div>
      </div>
    </section>
  );
}
