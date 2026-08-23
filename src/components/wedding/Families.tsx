import { couple, families } from "@/lib/wedding";

export function Families() {
  return (
    <section id="families" className="relative px-2 py-16 text-center overflow-hidden">
      <header className="relative mx-auto max-w-sm z-10">
        <div className="reveal inline-block">
          <span className="font-cinzel text-xs font-bold tracking-[0.28em] text-[#997a15] uppercase">
            With Blessings &amp; Honour
          </span>
          <h2 className="mt-2 font-cinzel-dec text-2xl font-bold tracking-wide text-[#1c232f]">
            Two Royal Lineages
          </h2>
          <div className="mx-auto mt-2.5 h-0.5 w-14 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
      </header>

      {/* Families Cards */}
      <div className="relative mx-auto mt-10 flex flex-col gap-6 max-w-sm z-10">
        {families.map((f, i) => (
          <div
            key={f.side}
            className="reveal paper paper-gold-rim relative flex flex-col items-center rounded-2xl px-5 py-8 text-center shadow-md"
            data-delay={i === 0 ? "0" : "0.15"}
          >
            {/* Header Badge */}
            <span className="font-cinzel text-[10px] font-bold uppercase tracking-[0.22em] text-[#997a15]">
              {f.side}
            </span>

            {/* Sprig Arch */}
            <svg viewBox="0 0 100 20" className="h-3.5 w-20 text-[#d4af37] my-2.5" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M10 10 H90" />
              <circle cx="50" cy="10" r="2.5" fill="#d4af37" />
              <path d="M30 6 Q40 10 30 14 M70 6 Q60 10 70 14" strokeWidth="0.8" />
            </svg>

            <p className="mt-1 font-serif-body text-lg font-bold text-[#1c232f]">
              {f.parents}
            </p>

            <p className="mt-2 font-sans text-[11px] font-light tracking-wide text-stone-500 max-w-xs">
              {f.line}
            </p>

            <h3 className="mt-2 font-cinzel-dec text-xl font-bold text-[#997a15]">
              {f.name}
            </h3>

            <p className="mt-3 font-sans text-[10px] font-light italic text-stone-500 leading-relaxed max-w-xs border-t border-amber-200/60 pt-3">
              {f.grandparents}
            </p>

            <blockquote className="mt-3 font-serif-body text-[11px] italic text-stone-600">
              {f.blessing}
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
