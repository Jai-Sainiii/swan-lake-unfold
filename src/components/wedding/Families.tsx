import { couple, families } from "@/lib/wedding";

function Sprig() {
  return (
    <svg viewBox="0 0 60 20" className="h-4 w-16" fill="none" aria-hidden>
      <path d="M2 10 H58" stroke="var(--pearl)" strokeWidth="1" />
      <path d="M30 10 c -4 -6, -10 -6, -14 -2" stroke="var(--sage)" strokeWidth="1" />
      <path d="M30 10 c 4 -6, 10 -6, 14 -2" stroke="var(--sage)" strokeWidth="1" />
    </svg>
  );
}

export function Families() {
  return (
    <section id="families" className="relative px-6 py-32 sm:py-40">
      <header className="mx-auto max-w-5xl text-center">
        <p className="reveal label-xs">Our Families</p>
        <h2 className="reveal mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-light tracking-[0.08em] text-ink" data-delay="0.1">
          Two families, one beginning
        </h2>
      </header>

      <div className="mx-auto mt-20 grid max-w-4xl gap-10 md:grid-cols-2 md:gap-16">
        {families.map((f, i) => (
          <div
            key={f.side}
            className="reveal paper flex flex-col items-center px-8 py-14 text-center"
            data-delay={i === 0 ? "0" : "0.15"}
          >
            <p className="label-xs">{f.side}</p>
            <Sprig />
            <p className="mt-4 font-display text-xl font-light leading-relaxed tracking-[0.05em] text-ink">
              {f.parents}
            </p>
            <p className="mt-4 text-xs font-light tracking-[0.2em] text-muted-foreground">
              {f.line.toUpperCase()}
            </p>
            <p className="mt-3 font-display text-2xl font-light italic text-ink">
              {f.name}
            </p>
          </div>
        ))}
      </div>

      <div className="reveal mt-16 flex flex-col items-center gap-4" data-delay="0.3">
        <Sprig />
        <p className="font-display text-lg font-light tracking-[0.22em] text-muted-foreground">
          {couple.bride.toUpperCase()} × {couple.groom.toUpperCase()}
        </p>
      </div>
    </section>
  );
}
