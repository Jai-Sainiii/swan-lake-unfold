import { useEffect, useState } from "react";
import { couple } from "@/lib/wedding";

function useCountdown(target: string) {
  const [parts, setParts] = useState<{ d: number; h: number; m: number } | null>(
    null,
  );
  useEffect(() => {
    const tick = () => {
      const diff = new Date(target).getTime() - Date.now();
      const s = Math.max(0, Math.floor(diff / 1000));
      setParts({
        d: Math.floor(s / 86400),
        h: Math.floor((s % 86400) / 3600),
        m: Math.floor((s % 3600) / 60),
      });
    };
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, [target]);
  return parts;
}

export function Welcome() {
  const c = useCountdown(couple.dateISO);

  return (
    <section
      id="welcome"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-28 text-center"
    >
      <p className="reveal label-xs">Together with their families</p>

      <h1 className="reveal mt-10 flex flex-col items-center gap-2" data-delay="0.1">
        <span className="font-display text-[clamp(2.75rem,11vw,7rem)] font-light leading-[0.95] tracking-[0.1em] text-ink">
          {couple.bride}
        </span>
        <span className="font-display text-2xl font-light italic text-muted-foreground sm:text-3xl">
          &
        </span>
        <span className="font-display text-[clamp(2.75rem,11vw,7rem)] font-light leading-[0.95] tracking-[0.1em] text-ink">
          {couple.groom}
        </span>
      </h1>

      <p
        className="reveal mt-10 max-w-sm text-sm font-light leading-relaxed text-muted-foreground"
        data-delay="0.2"
      >
        invite you to celebrate their wedding
        <br />
        <span className="mt-3 inline-block tracking-[0.28em] text-ink">
          {couple.dateLabel.toUpperCase()}
        </span>
      </p>

      <div className="reveal mt-20 w-full max-w-md" data-delay="0.3">
        <p className="label-xs">The Countdown</p>
        <div className="mt-6 flex items-start justify-center gap-10 sm:gap-16">
          {[
            { v: c?.d, l: "Days" },
            { v: c?.h, l: "Hours" },
            { v: c?.m, l: "Minutes" },
          ].map((item) => (
            <div key={item.l} className="flex flex-col items-center gap-2">
              <span className="font-display text-3xl font-light tabular-nums text-ink sm:text-4xl">
                {item.v ?? "—"}
              </span>
              <span className="label-xs text-[0.625rem]">{item.l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal mt-24 h-16 w-px bg-pearl" data-delay="0.4" />
    </section>
  );
}
