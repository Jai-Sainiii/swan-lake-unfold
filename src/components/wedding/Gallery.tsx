import { useState, useRef, useEffect, useCallback } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import { X, ChevronLeft, ChevronRight, Sparkles, Maximize2 } from "lucide-react";

interface MemoryItem {
  src: string;
  title: string;
  subtitle: string;
  year: string;
  location: string;
  alt: string;
  quote: string;
}

const memories: MemoryItem[] = [
  {
    src: g1,
    title: "Lake Pichola Reflections",
    subtitle: "Dawn by the marble palace steps",
    year: "Memory 01",
    location: "Jagmandir Island",
    alt: "Swans resting on serene waters of Lake Pichola at dawn",
    quote: "Where the gentle morning mist embraced our very first vows.",
  },
  {
    src: g2,
    title: "Lakeside Lotus & Gold",
    subtitle: "Sacred offerings by the water",
    year: "Memory 02",
    location: "Gangaur Ghat",
    alt: "Golden ornaments and lotus petals beside calm waters",
    quote: "A shower of fragrant petals echoing eternal devotion.",
  },
  {
    src: g3,
    title: "The Royal Dupatta",
    subtitle: "Hand-embroidered silk & zari in gentle breeze",
    year: "Memory 03",
    location: "Palace Courtyard",
    alt: "Bridal silk and golden embroidery fluttering softly",
    quote: "Woven in golden threads of grace, heritage, and pure love.",
  },
  {
    src: g4,
    title: "Lakeside Waltz",
    subtitle: "Under the warm crystal chandeliers",
    year: "Memory 04",
    location: "The Grand Darbar Hall",
    alt: "Romantic dance in the palace hall illuminated with chandeliers",
    quote: "A twilight dance as time stood still beneath crystal lights.",
  },
  {
    src: g5,
    title: "The Floating Pavilion",
    subtitle: "Where our sacred vows will echo forever",
    year: "Memory 05",
    location: "Taj Lake Palace",
    alt: "The illuminated island palace glowing across Lake Pichola",
    quote: "Gleaming across tranquil waters into our forever tomorrow.",
  },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Touch and Drag handling for fluid swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + memories.length) % memories.length);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % memories.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "Escape") setLightboxIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    touchStartX.current = clientX;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    touchEndX.current = clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const current = memories[activeIndex];

  return (
    <section
      id="gallery"
      className="relative px-2 pt-14 pb-20 overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Soft Ambient Golden Sunlight Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#fcf8f0]/80 to-[#f6f0e4]/50" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,224,150,0.22)_0%,transparent_70%)] blur-2xl -z-10" />

      {/* Lake Ripple Header Transition */}
      <div className="reveal mx-auto mb-6 flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center h-7 w-28">
          <div className="absolute h-5 w-16 rounded-full border border-sky-400/30 animate-ping opacity-30" />
          <div className="absolute h-3.5 w-12 rounded-full border border-amber-300/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
        </div>
        <span className="font-cinzel text-[9px] uppercase tracking-[0.32em] text-[#997a15]/80 mt-1">
          Lake Pichola Waters · Golden Reflections
        </span>
      </div>

      {/* Editorial Title */}
      <header className="reveal text-center max-w-xs mx-auto mb-8">
        <h2 className="font-cinzel text-2xl font-bold tracking-[0.22em] text-[#1c232f] uppercase leading-tight">
          Golden
          <br />
          <span className="text-[#997a15] font-light">Memories</span>
        </h2>
        <div className="mx-auto my-2.5 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        <p className="font-serif-body text-[13px] italic text-stone-600 leading-relaxed">
          A collection of moments we hold forever.
        </p>
      </header>

      {/* ── 3D DEPTH CAROUSEL STAGE ── */}
      <div
        className="reveal relative mx-auto max-w-[340px] h-[340px] flex items-center justify-center perspective-[1000px] cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
      >
        {memories.map((mem, idx) => {
          // Calculate offset relative to activeIndex (-2, -1, 0, 1, 2)
          let offset = idx - activeIndex;
          if (offset > 2) offset -= memories.length;
          if (offset < -2) offset += memories.length;

          const isActive = offset === 0;
          const isPrev = offset === -1;
          const isNext = offset === 1;
          const isVisible = Math.abs(offset) <= 1;

          if (!isVisible) return null;

          let transformStyle = "";
          let zIndex = 10;
          let opacity = 1;
          let filter = "none";

          if (isActive) {
            transformStyle = "translateX(0px) scale(1) rotateY(0deg)";
            zIndex = 30;
            opacity = 1;
          } else if (isPrev) {
            transformStyle = "translateX(-85px) scale(0.82) rotateY(18deg)";
            zIndex = 20;
            opacity = 0.55;
            filter = "blur(1.5px)";
          } else if (isNext) {
            transformStyle = "translateX(85px) scale(0.82) rotateY(-18deg)";
            zIndex = 20;
            opacity = 0.55;
            filter = "blur(1.5px)";
          }

          return (
            <div
              key={mem.title}
              onClick={() => {
                if (isActive) {
                  setLightboxIndex(idx);
                } else {
                  setActiveIndex(idx);
                }
              }}
              style={{
                transform: transformStyle,
                zIndex,
                opacity,
                filter,
              }}
              className={`absolute w-[240px] transition-all duration-500 ease-out cursor-pointer select-none`}
            >
              {/* Champagne Light Aura for Active Slide */}
              {isActive && (
                <div className="absolute -inset-3 bg-[radial-gradient(ellipse_at_center,rgba(245,215,130,0.4)_0%,transparent_70%)] rounded-3xl blur-md" />
              )}

              <div
                className={`relative overflow-hidden rounded-2xl bg-[#fcfaf7] p-2 shadow-[0_14px_35px_-8px_rgba(0,0,0,0.12)] border transition-all duration-300 ${
                  isActive
                    ? "border-amber-300/90 shadow-[0_16px_40px_-10px_rgba(212,175,55,0.3)]"
                    : "border-amber-200/40"
                }`}
              >
                {/* Photo Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-stone-100">
                  <img
                    src={mem.src}
                    alt={mem.alt}
                    width={600}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gradient shading */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-amber-200/10 opacity-70" />

                  {/* Memory Badge */}
                  <div className="absolute top-2.5 left-2.5 rounded-full bg-black/40 backdrop-blur-xs px-2 py-0.5 text-[8.5px] font-cinzel tracking-wider text-amber-100 border border-white/10">
                    {mem.year}
                  </div>

                  {/* Expand Lightbox Button on Active Card */}
                  {isActive && (
                    <div className="absolute bottom-2.5 right-2.5 rounded-full bg-black/40 backdrop-blur-xs p-1.5 text-white/90 hover:bg-black/60 transition-colors">
                      <Maximize2 className="h-3.5 w-3.5 text-amber-200" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── ACTIVE CARD CAPTION & STORY VIGNETTE ── */}
      <div className="reveal relative mx-auto max-w-xs text-center mt-3 min-h-[95px] flex flex-col items-center justify-center">
        <span className="font-cinzel text-[10px] uppercase tracking-[0.25em] text-[#997a15] font-semibold">
          {current.location}
        </span>
        <h3 className="font-cinzel text-sm font-bold text-[#1c232f] mt-1 transition-all duration-300">
          {current.title}
        </h3>
        <p className="font-serif-body text-xs italic text-stone-600 mt-1 max-w-[270px] leading-relaxed transition-all duration-300">
          “{current.quote}”
        </p>
      </div>

      {/* ── CAROUSEL CONTROLS & TIMELINE DIAL ── */}
      <div className="reveal mx-auto mt-4 max-w-xs flex items-center justify-between px-3">
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous memory"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-300/70 bg-white/90 text-[#997a15] shadow-xs hover:bg-amber-50 active:scale-90 transition-all cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Floating Interactive Pill Dial */}
        <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs border border-amber-200/70 rounded-full px-3 py-1.5 shadow-2xs">
          {memories.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to memory ${i + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "w-6 h-2 rounded-full bg-gradient-to-r from-amber-400 to-[#d4af37] shadow-[0_0_6px_rgba(212,175,55,0.6)]"
                  : "w-2 h-2 rounded-full bg-amber-200/80 hover:bg-amber-300"
              }`}
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          aria-label="Next memory"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-300/70 bg-white/90 text-[#997a15] shadow-xs hover:bg-amber-50 active:scale-90 transition-all cursor-pointer"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* ── THUMBNAIL FILMSTRIP PREVIEW ── */}
      <div className="reveal mx-auto mt-6 max-w-sm flex items-center justify-center gap-2 px-2">
        {memories.map((m, idx) => (
          <div
            key={m.title}
            onClick={() => setActiveIndex(idx)}
            className={`group relative h-12 w-12 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
              idx === activeIndex
                ? "ring-2 ring-[#d4af37] scale-110 shadow-md"
                : "opacity-60 hover:opacity-100 hover:scale-105"
            }`}
          >
            <img
              src={m.src}
              alt={m.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {idx === activeIndex && (
              <div className="absolute inset-0 bg-amber-300/15 border border-amber-300/60" />
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in select-none"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-50 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-xl border border-amber-300/40 bg-black/50 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={memories[lightboxIndex]?.src}
              alt={memories[lightboxIndex]?.alt}
              className="max-h-[68vh] w-auto rounded-lg object-contain mx-auto"
            />
            <div className="mt-2.5 text-center text-white px-2 pb-1">
              <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-amber-300 font-semibold">
                {memories[lightboxIndex]?.year} · {memories[lightboxIndex]?.location}
              </span>
              <h4 className="font-cinzel text-sm font-bold text-amber-100 mt-0.5">
                {memories[lightboxIndex]?.title}
              </h4>
              <p className="font-serif-body text-xs italic text-stone-300 mt-0.5">
                “{memories[lightboxIndex]?.quote}”
              </p>
            </div>

            <button
              onClick={prevSlide}
              aria-label="Previous memory"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next memory"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition-colors cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
