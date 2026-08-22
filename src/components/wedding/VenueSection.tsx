import { venue } from "@/lib/wedding";

function PavilionSilhouette() {
  return (
    <svg viewBox="0 0 400 220" className="h-auto w-full max-w-md" fill="none" aria-hidden>
      <path d="M200 20 L340 90 H60 Z" stroke="var(--pearl)" strokeWidth="1" />
      <path d="M200 8 v14" stroke="var(--pearl)" strokeWidth="1" />
      <circle cx="200" cy="6" r="3" stroke="var(--pearl)" strokeWidth="1" />
      {[80, 120, 160, 200, 240, 280, 320].map((x) => (
        <path key={x} d={`M${x} 90 v70`} stroke="var(--pearl)" strokeWidth="1" />
      ))}
      <path d="M60 160 H340" stroke="var(--pearl)" strokeWidth="1" />
      <path d="M50 172 H350" stroke="var(--pearl)" strokeWidth="1" />
      <path d="M20 190 H380" stroke="var(--powder)" strokeWidth="1" />
      <path d="M50 178 H350" stroke="var(--powder)" strokeOpacity="0.5" strokeWidth="1" />
      <path d="M80 200 H320" stroke="var(--powder)" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  );
}

export function VenueSection() {
  return (
    <section id="venue" className="relative px-6 py-32 text-center sm:py-40">
      <p className="reveal label-xs">Venue</p>
      <h2 className="reveal mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-light tracking-[0.08em] text-ink" data-delay="0.1">
        {venue.name}
      </h2>

      <div className="reveal mx-auto mt-14 flex justify-center" data-delay="0.15">
        <PavilionSilhouette />
      </div>

      <address className="reveal mt-12 not-italic" data-delay="0.2">
        <p className="mx-auto max-w-sm text-sm font-light leading-loose text-muted-foreground">
          {venue.address}
        </p>
        <p className="mt-4 text-xs font-light tracking-[0.22em] text-ink">
          {venue.timing.toUpperCase()}
        </p>
      </address>

      <a
        href={venue.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="reveal label-xs mt-12 inline-block border border-pearl px-10 py-4 text-ink transition-colors duration-500 hover:bg-ivory-deep"
        data-delay="0.25"
      >
        View Location
      </a>
    </section>
  );
}
