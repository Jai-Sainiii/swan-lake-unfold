import { couple } from "@/lib/wedding";
import { RotateCcw, Share2, Calendar, Heart } from "lucide-react";

export function Finale({ onReplay }: { onReplay: () => void }) {
  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `💍 You are cordially invited to celebrate the wedding of ${couple.bride} & ${couple.groom} on ${couple.dateLabel} at ${couple.venue}, ${couple.city}!\n\nView the interactive wedding invitation here: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

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
      className="relative flex min-h-[80svh] flex-col items-center justify-center px-2 py-16 text-center select-none"
    >
      {/* Decorative Swan Monogram */}
      <div className="reveal mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/70 bg-gradient-to-b from-[#faf5ef] to-[#f3ede2] shadow-md">
        <span className="font-cinzel text-xs font-bold text-[#997a15]">
          {couple.monogram}
        </span>
      </div>

      <p className="reveal font-script text-2xl text-[#d4af37]">
        And so, their next chapter begins...
      </p>

      <h2
        className="reveal mt-4 font-cinzel-dec text-2xl font-bold tracking-[0.06em] text-[#1c232f]"
        data-delay="0.1"
      >
        {couple.bride} &amp; {couple.groom}
      </h2>

      <p
        className="reveal mt-2 font-cinzel text-[11px] font-semibold tracking-[0.22em] text-[#997a15] uppercase"
        data-delay="0.15"
      >
        {couple.dateLabel} · {couple.city}
      </p>

      <p
        className="reveal mt-4 max-w-xs font-serif-body text-xs text-stone-600 leading-relaxed"
        data-delay="0.2"
      >
        Thank you for showering our lives with your heartfelt love and blessings.
      </p>

      <p className="reveal mt-1.5 font-cinzel text-[11px] font-bold text-[#997a15] tracking-widest" data-delay="0.22">
        {couple.hashtag}
      </p>

      {/* Action Buttons */}
      <div className="reveal mt-8 flex flex-col gap-2.5 w-full max-w-xs mx-auto" data-delay="0.25">
        <button
          onClick={handleSaveDate}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#997a15] to-[#80640f] py-2.5 px-4 font-cinzel text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-xs hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="h-3.5 w-3.5" />
          <span>Save The Date</span>
        </button>

        <button
          onClick={handleShareWhatsApp}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-600 bg-white py-2.5 px-4 font-cinzel text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 shadow-xs hover:bg-emerald-50 active:scale-95 transition-all cursor-pointer"
        >
          <Share2 className="h-3.5 w-3.5" />
          <span>Share on WhatsApp</span>
        </button>

        <button
          onClick={onReplay}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-300 bg-white/90 py-2.5 px-4 font-cinzel text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-700 shadow-xs hover:bg-stone-50 active:scale-95 transition-all cursor-pointer"
        >
          <RotateCcw className="h-3.5 w-3.5 text-[#997a15]" />
          <span>Replay Invitation</span>
        </button>
      </div>

      <div className="reveal mt-12 flex items-center gap-1.5 text-stone-400 text-[11px] font-serif-body" data-delay="0.3">
        <span>Made with</span>
        <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
        <span>for {couple.bride} &amp; {couple.groom}</span>
      </div>
    </section>
  );
}
