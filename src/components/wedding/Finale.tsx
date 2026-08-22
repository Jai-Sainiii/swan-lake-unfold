import { couple } from "@/lib/wedding";

export function Finale({ onReplay }: { onReplay: () => void }) {
  return (
    <section
      id="finale"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-32 text-center"
    >
      <p className="reveal font-display text-[clamp(1.5rem,4vw,2.5rem)] font-light italic leading-relaxed text-ink">
        And so, their next chapter begins.
      </p>

      <p
        className="reveal mt-16 font-display text-[clamp(1.75rem,6vw,3.5rem)] font-light tracking-[0.14em] text-ink"
        data-delay="0.15"
      >
        {couple.bride} &amp; {couple.groom}
      </p>

      <p className="reveal mt-8 text-sm font-light tracking-[0.2em] text-muted-foreground" data-delay="0.25">
        Thank you for being part of our story.
      </p>

      <button
        onClick={onReplay}
        className="reveal label-xs mt-20 border border-pearl px-10 py-4 text-ink transition-colors duration-500 hover:bg-ivory-deep"
        data-delay="0.35"
      >
        Replay Invitation
      </button>
    </section>
  );
}
