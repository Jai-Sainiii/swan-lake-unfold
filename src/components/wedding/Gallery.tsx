import { useState, useRef, useEffect, useCallback } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.png";
import g4 from "@/assets/gallery-4.png";
import g5 from "@/assets/gallery-5.png";
import { X, ChevronLeft, ChevronRight, Heart, Maximize2, MapPin } from "lucide-react";

interface MemoryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  location: string;
  quote: string;
  season: string;
  alt: string;
}

const memories: MemoryItem[] = [
  {
    id: "mem-1",
    src: g1,
    title: "Chasing Sunsets",
    subtitle: "Running through wild mountain slopes",
    location: "Emerald Valley Hills",
    season: "Autumn Reverie",
    quote: "Every step beside you feels like an answered prayer.",
    alt: "Couple running down grassy hillside holding flowers",
  },
  {
    id: "mem-2",
    src: g2,
    title: "Whispering Pines",
    subtitle: "Wrapped in the quiet aroma of cedar and pine",
    location: "Highland Pine Forest",
    season: "Winter Solitude",
    quote: "In the quiet stillness of nature, my home was always in your smile.",
    alt: "Couple walking arm in arm through tall pine trees",
  },
  {
    id: "mem-3",
    src: g3,
    title: "Golden Meadow",
    subtitle: "Sun-drenched laughter in a field of blooms",
    location: "Wildflower Plateau",
    season: "Spring Splendor",
    quote: "Your warmth outshines the brightest sunrise across Lake Pichola.",
    alt: "Couple sitting together happily in a wildflower field",
  },
  {
    id: "mem-4",
    src: g4,
    title: "Twirling in Light",
    subtitle: "Carefree dance beneath dappled summer canopies",
    location: "Royal Garden Glade",
    season: "Summer Romance",
    quote: "Lost in the timeless rhythm of our own sacred symphony.",
    alt: "Girl dancing in white dress while partner chases with joy",
  },
  {
    id: "mem-5",
    src: g5,
    title: "Ocean Breeze",
    subtitle: "Capturing forever against the boundless blue",
    location: "Sunset Pier Boardwalk",
    season: "Tides & Forever",
    quote: "Framing fleeting moments into an eternity of love and grace.",
    alt: "Couple taking photos of each other on the beach pier",
  },
];

interface FloatingSpark {
  id: number;
  x: number;
  y: number;
  scale: number;
}

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [sparks, setSparks] = useState<FloatingSpark[]>([]);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

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
    const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : (e as React.MouseEvent).clientX;
    touchStartX.current = clientX;
    touchCurrentX.current = clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging || touchStartX.current === null) return;
    const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : (e as React.MouseEvent).clientX;
    touchCurrentX.current = clientX;
    setDragOffset(clientX - touchStartX.current);
  };

  const handleTouchEnd = () => {
    if (!isDragging || touchStartX.current === null || touchCurrentX.current === null) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }
    const distance = touchStartX.current - touchCurrentX.current;
    const minSwipeDistance = 35;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setIsDragging(false);
    setDragOffset(0);
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  // Heart Reaction Burst
  const triggerLikeBurst = () => {
    const newSparks: FloatingSpark[] = Array.from({ length: 6 }).map((_, idx) => ({
      id: Date.now() + idx,
      x: (Math.random() - 0.5) * 140,
      y: -Math.random() * 90 - 30,
      scale: 0.8 + Math.random() * 0.4,
    }));

    setSparks((prev) => [...prev, ...newSparks]);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.some((ns) => ns.id === s.id)));
    }, 1100);
  };

  const current = memories[activeIndex] ?? memories[0]!;

  return (
    <section id="gallery" className="relative w-full bg-[#faf6ee] px-2 sm:px-4 pt-14 pb-20 select-none overflow-hidden text-center">
      {/* Background Soft Ambient Light */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] blur-2xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(85,110,74,0.12)_0%,transparent_70%)] blur-2xl" />
      </div>

      {/* SECTION HEADER */}
      <header className="reveal relative mx-auto max-w-sm z-10 pt-2 pb-4">
        <div className="inline-block">
          {/* Royal Crest Filigree */}
          <div className="mx-auto w-20 h-7 select-none pointer-events-none mb-1 opacity-90">
            <svg viewBox="0 0 120 40" fill="none" className="w-full h-full text-[#c49a38]">
              <path d="M 60 4 C 57 14, 53 18, 60 25 C 67 18, 63 14, 60 4 Z" fill="#c49a38" />
              <path d="M 50 18 C 35 15, 20 25, 5 22" stroke="#c49a38" strokeWidth="1" strokeLinecap="round" />
              <path d="M 70 18 C 85 15, 100 25, 115 22" stroke="#c49a38" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>

          <span className="font-cinzel text-[9.5px] sm:text-[10px] font-bold tracking-[0.28em] text-[#b88b2a] uppercase">
            Visual Symphony
          </span>
          <h2 className="mt-1 font-cinzel-dec text-3xl sm:text-4xl font-bold tracking-[0.06em] text-[#1c232f] uppercase drop-shadow-2xs">
            Golden Memories
          </h2>
          <div className="mx-auto mt-2 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#c49a38]" />
            <span className="text-[#c49a38] text-[8px]">❖</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#c49a38]" />
          </div>
          <p className="mt-2.5 font-serif-body text-[13px] sm:text-[14px] leading-relaxed text-stone-600 italic px-3">
            “Treasured snapshots of the path that led our hearts together.”
          </p>
        </div>
      </header>

      {/* ── 3D COVERFLOW ROTATING CAROUSEL WITH NOVEL GEOMETRY ── */}
      <div
        className="reveal relative mx-auto mt-4 max-w-[340px] sm:max-w-[360px] h-[370px] sm:h-[390px] flex items-center justify-center perspective-[1200px] cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
      >
        {memories.map((mem, idx) => {
          let offset = idx - activeIndex;
          if (offset > 2) offset -= memories.length;
          if (offset < -2) offset += memories.length;

          const isActive = offset === 0;
          const isPrev = offset === -1;
          const isNext = offset === 1;
          const isVisible = Math.abs(offset) <= 1;

          if (!isVisible) return null;

          let translateX = 0;
          let translateY = 0;
          let rotateY = 0;
          let scale = 1;
          let zIndex = 10;
          let opacity = 1;
          let filter = "none";

          if (isActive) {
            translateX = dragOffset * 0.65;
            rotateY = dragOffset * -0.06;
            scale = 1;
            zIndex = 30;
            opacity = 1;
          } else if (isPrev) {
            translateX = -85 + dragOffset * 0.25;
            translateY = 6;
            rotateY = 22 + dragOffset * -0.03;
            scale = 0.84;
            zIndex = 20;
            opacity = 0.55;
            filter = "blur(1px)";
          } else if (isNext) {
            translateX = 85 + dragOffset * 0.25;
            translateY = 6;
            rotateY = -22 + dragOffset * -0.03;
            scale = 0.84;
            zIndex = 20;
            opacity = 0.55;
            filter = "blur(1px)";
          }

          return (
            <div
              key={mem.id}
              onClick={() => {
                if (isActive) {
                  setLightboxIndex(idx);
                } else {
                  setActiveIndex(idx);
                }
              }}
              style={{
                transform: `translate3d(${translateX}px, ${translateY}px, 0px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
                filter,
                transition: isDragging ? "none" : "transform 0.55s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.4s ease",
              }}
              className="absolute w-[245px] sm:w-[265px] cursor-pointer select-none"
            >
              {/* Soft Handmade Watercolor-Paper Keepsake Card */}
              <div
                style={{
                  borderRadius: "28px 34px 26px 32px / 32px 26px 34px 28px",
                }}
                className={`relative bg-[#fdfbf7] p-3 transition-all duration-300 ${
                  isActive
                    ? "border border-[#d8c38c]/50 shadow-[0_16px_40px_-8px_rgba(180,150,90,0.24)] ring-1 ring-[#ebdcb9]/35 ring-offset-2 ring-offset-[#fdfbf7]"
                    : "border border-[#e5dcce]/45 shadow-[0_10px_28px_-6px_rgba(160,140,110,0.12)] opacity-85"
                }`}
              >
                {/* Organic Handmade Paper Edge Micro-Texture Overlay */}
                <div 
                  style={{ borderRadius: "26px 32px 24px 30px / 30px 24px 32px 26px" }}
                  className="pointer-events-none absolute inset-0 border border-amber-900/[0.04]" 
                />

                {/* Subtle Watercolor Paper Header Callout */}
                <div className="w-full flex items-center justify-center gap-2 py-0.5 mb-1.5 select-none pointer-events-none">
                  <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#cbb27a]/40" />
                  <span className="font-cinzel text-[8.5px] uppercase tracking-[0.22em] text-[#a88a42] font-medium">
                    Keepsake
                  </span>
                  <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#cbb27a]/40" />
                </div>

                {/* Photo Window with Soft Organic Deckle Curves */}
                <div 
                  style={{ borderRadius: "20px 24px 18px 22px / 22px 18px 24px 20px" }}
                  className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 border border-[#d8c38c]/30 shadow-inner"
                >
                  <img
                    src={mem.src}
                    alt={mem.alt}
                    width={600}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Soft Watercolor Sunlight Bleed Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-amber-50/20 opacity-60" />

                  {/* Expand Fullscreen Button */}
                  {isActive && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(idx);
                      }}
                      className="absolute bottom-2.5 right-2.5 rounded-full bg-black/35 backdrop-blur-xs p-1.5 text-amber-100 hover:bg-black/55 transition-colors shadow-xs"
                      aria-label="Expand image"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                {/* Bottom Card Title & Subtitle */}
                <div className="pt-2 pb-0.5 text-center">
                  <p className="font-cinzel text-[10.5px] font-bold text-[#1c232f] uppercase tracking-wider">
                    {mem.title}
                  </p>
                  <p className="font-serif-body text-[9.5px] italic text-[#8a7650] leading-tight mt-0.5">
                    {mem.season}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Floating Heart Reaction Sparks */}
        {sparks.map((spark) => (
          <div
            key={spark.id}
            style={{
              transform: `translate(${spark.x}px, ${spark.y}px) scale(${spark.scale})`,
              transition: "transform 1.1s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 1.1s ease",
            }}
            className="pointer-events-none absolute z-50 animate-fade-out"
          >
            <Heart className="h-4 w-4 text-rose-500 fill-rose-500 drop-shadow-sm" />
          </div>
        ))}
      </div>

      {/* ── ACTIVE MEMORY LOCATION VIGNETTE ── */}
      <div className="reveal relative mx-auto max-w-xs text-center mt-7 sm:mt-8 mb-1 flex items-center justify-center px-3">
        <div className="flex items-center gap-1.5 text-[#556e4a] text-[10.5px] font-cinzel font-bold tracking-[0.2em] uppercase">
          <MapPin className="h-3 w-3 text-[#c49a38]" />
          <span>{current.location}</span>
        </div>
      </div>

      {/* ── INTERACTIVE CONTROLS (Arrows & Heart Button) ── */}
      <div className="reveal mx-auto mt-3 max-w-[270px] flex items-center justify-between px-2">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous memory"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#caa44b]/60 bg-white/90 text-[#b88b2a] shadow-xs hover:bg-[#faf6ee] active:scale-90 transition-all cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Heart Burst Reaction Button */}
        <button
          type="button"
          onClick={triggerLikeBurst}
          className="flex items-center gap-1.5 rounded-full border border-rose-300/80 bg-gradient-to-r from-rose-50 to-amber-50 px-3.5 py-1.5 text-rose-600 shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Bless with Love"
        >
          <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500 animate-pulse" />
          <span className="font-cinzel text-[10px] font-bold tracking-wider">
            Bless with Love
          </span>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next memory"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#caa44b]/60 bg-white/90 text-[#b88b2a] shadow-xs hover:bg-[#faf6ee] active:scale-90 transition-all cursor-pointer"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* ── THUMBNAIL FILMSTRIP PREVIEW ── */}
      <div className="reveal mx-auto mt-5 max-w-sm flex items-center justify-center gap-2 px-2">
        {memories.map((m, idx) => (
          <div
            key={m.id}
            onClick={() => setActiveIndex(idx)}
            className={`group relative h-11 w-11 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
              idx === activeIndex
                ? "ring-2 ring-[#c49a38] scale-110 shadow-md"
                : "opacity-60 hover:opacity-100 hover:scale-105"
            }`}
          >
            <img src={m.src} alt={m.alt} className="h-full w-full object-cover" loading="lazy" />
            {idx === activeIndex && <div className="absolute inset-0 bg-[#c49a38]/20 border border-[#c49a38]/60" />}
          </div>
        ))}
      </div>

      {/* ── FULLSCREEN LIGHTBOX MODAL ── */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in select-none"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-50 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl border border-[#c49a38]/50 bg-black/60 p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={memories[lightboxIndex]?.src}
              alt={memories[lightboxIndex]?.alt}
              className="max-h-[66vh] w-auto rounded-xl object-contain mx-auto"
            />
            <div className="mt-3 text-center text-white px-2 pb-1">
              <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-amber-300 font-semibold">
                {memories[lightboxIndex]?.location} · {memories[lightboxIndex]?.season}
              </span>
              <h4 className="font-cinzel text-sm font-bold text-amber-100 mt-0.5">
                {memories[lightboxIndex]?.title}
              </h4>
              <p className="font-serif-body text-xs italic text-stone-300 mt-0.5">
                “{memories[lightboxIndex]?.quote}”
              </p>
            </div>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous memory"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
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
