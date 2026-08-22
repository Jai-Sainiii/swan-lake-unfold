import { useState } from "react";
import { ceremonies, venue } from "@/lib/wedding";

export function Ceremonies() {
  const [open, setOpen] = useState<string | null>(ceremonies[1]?.name ?? null);

  return (
    <section id="ceremonies" className="relative px-6 py-32 sm:py-40">
      <header className="mx-auto max-w-5xl text-center">
        <p className="reveal label-xs">Ceremonies</p>
        <h2 className="reveal mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-light tracking-[0.08em] text-ink" data-delay="0.1">
          The celebrations
        </h2>
      </header>

      <div className="mx-auto mt-20 max-w-3xl">
        {ceremonies.map((c) => {
          const isOpen = open === c.name;
          return (
            <div key={c.name} className="reveal border-t border-pearl/60 last:border-b">
              <button
                onClick={() => setOpen(isOpen ? null : c.name)}
                aria-expanded={isOpen}
                className="flex w-full items-baseline gap-6 py-10 text-left transition-opacity hover:opacity-70"
              >
                <span className="font-display text-sm italic text-muted-foreground">
                  {c.numeral}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-2xl font-light tracking-[0.08em] text-ink sm:text-3xl">
                    {c.name}
                  </span>
                  <span className="mt-3 block text-xs font-light tracking-[0.2em] text-muted-foreground">
                    {c.date.toUpperCase()} · {c.time} · {c.place.toUpperCase()}
                  </span>
                </span>
              </button>
              <div
                className="grid transition-all duration-700 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="pb-10 pl-12 pr-2">
                    <p className="max-w-md text-sm font-light leading-loose text-muted-foreground">
                      {c.detail}
                    </p>
                    <a
                      href={venue.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="label-xs mt-6 inline-block border-b border-pearl pb-1 text-ink transition-opacity hover:opacity-60"
                    >
                      View Location
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
