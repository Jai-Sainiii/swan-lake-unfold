import { venue, couple } from "@/lib/wedding";
import { MapPin, Navigation, Calendar } from "lucide-react";
import {
  RooftopVenueIllustration,
  BotanicalCorner,
} from "@/components/wedding/Decorations";
import { TornEdge } from "@/components/wedding/TornEdge";

export function VenueSection() {
  const handleSaveDate = () => {
    const title = encodeURIComponent(`${couple.bride} & ${couple.groom}'s Royal Wedding`);
    const details = encodeURIComponent(`Wedding celebrations of ${couple.brideFull} & ${couple.groomFull} in Udaipur, Rajasthan.`);
    const location = encodeURIComponent(`${couple.venue}, ${couple.city}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261210T100000Z/20261213T040000Z&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="venue"
      className="relative w-full bg-[#faf6ee] px-3 sm:px-4 pt-16 pb-24 text-center select-none overflow-hidden"
    >
      {/* Soft Ethereal Background Wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(253,248,238,0.85)_0%,rgba(250,246,238,0.4)_60%,transparent_100%)]" />

      {/* Header */}
      <header className="relative mx-auto max-w-sm z-20 pt-2">
        {/* Golden Lotus Crown Motif */}
        <div className="reveal flex items-center justify-center gap-2 mb-1.5">
          <svg viewBox="0 0 120 30" fill="none" className="w-28 h-7 text-[#d4af37]">
            <path d="M 60 4 C 55 12, 53 22, 60 26 C 67 22, 65 12, 60 4 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="1.2" />
            <path d="M 57 10 C 49 13, 46 21, 54 24 C 58 21, 58 16, 57 10 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="1" />
            <path d="M 63 10 C 71 13, 74 21, 66 24 C 62 21, 62 16, 63 10 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="1" />
            <circle cx="60" cy="25" r="1.5" fill="#b88b2a" />
            <path d="M 45 20 C 35 15, 20 25, 5 18" stroke="#caa44b" strokeWidth="1" strokeLinecap="round" />
            <path d="M 75 20 C 85 15, 100 25, 115 18" stroke="#caa44b" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>

        <div className="reveal">
          <span className="font-cinzel text-xs font-bold tracking-[0.28em] text-[#997a15] uppercase">
            DESTINATION &amp; SANCTUARY
          </span>
          <h2 className="mt-2 font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.14em] text-[#1c232f] uppercase drop-shadow-2xs">
            {venue.name}
          </h2>
          <div className="mx-auto mt-2.5 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-2 font-serif-body text-xs sm:text-[13px] italic text-stone-600">
            {venue.subname}
          </p>
        </div>
      </header>

      {/* Hand-painted Watercolor Rooftop Venue Spot Illustration */}
      <div className="reveal relative mx-auto mt-6 max-w-[310px] sm:max-w-[340px] z-20" data-delay="0.15">
        <RooftopVenueIllustration className="w-full" />
      </div>

      {/* Address Block */}
      <div
        className="reveal relative mx-auto max-w-sm text-center z-20 mt-6"
        data-delay="0.2"
      >
        <div className="flex items-center justify-center gap-1.5 text-[#997a15]">
          <MapPin className="h-4 w-4" />
          <span className="font-cinzel text-xs sm:text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#997a15]">
            Lake Pichola, Udaipur
          </span>
        </div>

        <p className="mt-2 font-serif-body text-xs sm:text-[13px] text-stone-700 leading-relaxed max-w-xs mx-auto">
          {venue.address}
        </p>

        {/* Action Buttons (Stacked Vertically One by One) */}
        <div className="mt-6 flex flex-col items-center justify-center gap-2.5 w-full max-w-xs mx-auto">
          <a
            href={venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af37]/70 bg-gradient-to-r from-[#fdfcf9] to-[#faf5ef] py-2.5 px-5 font-cinzel text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#997a15] shadow-xs hover:border-[#997a15] active:scale-95 transition-all"
          >
            <Navigation className="h-3.5 w-3.5" />
            <span>Open in Google Maps</span>
          </a>

          <button
            type="button"
            onClick={handleSaveDate}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] py-2.5 px-5 font-cinzel text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Add to Calendar</span>
          </button>
        </div>
      </div>

      {/* Bottom Deckle Paper Divider */}
      <TornEdge position="bottom" variant={1} showGoldFoil={true} className="-bottom-3 z-30" />
    </section>
  );
}
