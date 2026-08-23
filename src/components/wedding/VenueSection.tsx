import { venue } from "@/lib/wedding";
import { MapPin, Navigation, Plane, Ship, Sun } from "lucide-react";
import {
  RooftopVenueIllustration,
  BotanicalCorner,
} from "@/components/wedding/Decorations";

export function VenueSection() {
  return (
    <section id="venue" className="relative px-2 py-16 text-center overflow-hidden">
      {/* Header */}
      <header className="relative mx-auto max-w-sm z-10">
        <div className="reveal inline-block">
          <span className="font-cinzel text-xs font-bold tracking-[0.28em] text-[#997a15] uppercase">
            Destination &amp; Sanctuary
          </span>
          <h2 className="mt-2 font-cinzel-dec text-2xl font-bold tracking-wide text-[#1c232f]">
            {venue.name}
          </h2>
          <div className="mx-auto mt-2.5 h-0.5 w-14 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-1.5 font-serif-body text-xs italic text-stone-500">
            {venue.subname}
          </p>
        </div>
      </header>

      {/* Hand-painted Watercolor Rooftop Venue Spot Illustration (matching user reference) */}
      <div className="reveal relative mx-auto mt-6 max-w-[290px] z-10" data-delay="0.15">
        <RooftopVenueIllustration className="w-full" />
      </div>

      {/* Address Card */}
      <div
        className="reveal paper paper-gold-rim relative mx-auto max-w-sm rounded-2xl p-5 text-center shadow-md z-10 mt-6"
        data-delay="0.2"
      >
        <BotanicalCorner className="top-2 left-2" />
        <BotanicalCorner className="top-2 right-2" flip />

        <div className="flex items-center justify-center gap-1.5 text-[#997a15]">
          <MapPin className="h-4 w-4" />
          <span className="font-cinzel text-xs font-bold uppercase tracking-wider">
            Lake Pichola, Udaipur
          </span>
        </div>

        <p className="mt-2.5 font-sans text-xs text-stone-700 leading-relaxed max-w-xs mx-auto">
          {venue.address}
        </p>

        <p className="mt-1.5 font-cinzel text-[11px] font-semibold text-[#997a15]">
          {venue.timing}
        </p>

        <a
          href={venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-amber-300/80 bg-white/90 px-4 py-1.5 font-cinzel text-[10px] font-bold uppercase tracking-wider text-[#997a15] shadow-xs hover:bg-amber-50 active:scale-95 transition-all"
        >
          <Navigation className="h-3 w-3" />
          <span>Open in Google Maps</span>
        </a>
      </div>

      {/* Travel Tips */}
      <div className="reveal mx-auto mt-6 grid max-w-sm grid-cols-1 gap-3 z-10" data-delay="0.25">
        {venue.travelTips.map((tip, idx) => (
          <div
            key={tip.title}
            className="paper flex items-start gap-3 rounded-xl p-3.5 text-left shadow-xs border border-amber-200/40"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-50 text-[#997a15] border border-amber-200">
              {idx === 0 && <Plane className="h-4 w-4" />}
              {idx === 1 && <Ship className="h-4 w-4" />}
              {idx === 2 && <Sun className="h-4 w-4" />}
            </div>
            <div>
              <h4 className="font-cinzel text-xs font-bold text-[#1c232f]">
                {tip.title}
              </h4>
              <p className="font-serif-body text-[11px] text-stone-600 mt-0.5 leading-snug">
                {tip.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
