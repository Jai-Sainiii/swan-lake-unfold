import { useState, useEffect } from "react";
import { blessingsSeed, couple } from "@/lib/wedding";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { TornEdge } from "@/components/wedding/TornEdge";
import ceremonySwanRaw from "@/assets/ceremony-swan-raw.png";
import floralCornerImg from "@/assets/floral-corner.png";

/**
 * Top Horizon Pavilions & Water SVG Scene
 */
function HorizonPavilionsBackground() {
  return (
    <div className="pointer-events-none absolute top-10 inset-x-0 w-full h-64 select-none opacity-45 mix-blend-multiply -z-10">
      <svg viewBox="0 0 600 200" preserveAspectRatio="none" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="blessingsLakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#bae6fd" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#faf6ee" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Soft Blue Water & Sky Wash */}
        <rect x="0" y="80" width="600" height="120" fill="url(#blessingsLakeGrad)" />

        {/* LEFT CHHATRI PAVILION & TREES */}
        <g transform="translate(15, 10)">
          {/* Trees behind dome */}
          <circle cx="45" cy="55" r="22" fill="#a3b899" opacity="0.65" />
          <circle cx="35" cy="65" r="18" fill="#869e7b" opacity="0.75" />
          {/* Chhatri Pavilion */}
          <path d="M 30 50 C 30 30, 60 30, 60 50 Z" fill="#e2d4bd" stroke="#94774e" strokeWidth="1" />
          <path d="M 45 20 L 45 28 M 43 20 L 47 20" stroke="#8c6a1e" strokeWidth="1.2" />
          <rect x="28" y="49" width="34" height="3" fill="#c4b296" />
          <rect x="32" y="52" width="2.5" height="30" fill="#a38b68" />
          <rect x="44" y="52" width="2.5" height="30" fill="#a38b68" />
          <rect x="56" y="52" width="2.5" height="30" fill="#a38b68" />
          <rect x="26" y="82" width="42" height="6" fill="#d6c5ad" stroke="#94774e" strokeWidth="0.7" />
          {/* White Blossoms */}
          <circle cx="15" cy="68" r="4" fill="#ffffff" stroke="#dcd0be" strokeWidth="0.6" />
          <circle cx="22" cy="74" r="3.5" fill="#ffffff" stroke="#dcd0be" strokeWidth="0.6" />
        </g>

        {/* RIGHT CHHATRI PAVILION & TREES */}
        <g transform="translate(515, 10)">
          {/* Trees behind dome */}
          <circle cx="45" cy="55" r="22" fill="#a3b899" opacity="0.65" />
          <circle cx="55" cy="65" r="18" fill="#869e7b" opacity="0.75" />
          {/* Chhatri Pavilion */}
          <path d="M 30 50 C 30 30, 60 30, 60 50 Z" fill="#e2d4bd" stroke="#94774e" strokeWidth="1" />
          <path d="M 45 20 L 45 28 M 43 20 L 47 20" stroke="#8c6a1e" strokeWidth="1.2" />
          <rect x="28" y="49" width="34" height="3" fill="#c4b296" />
          <rect x="32" y="52" width="2.5" height="30" fill="#a38b68" />
          <rect x="44" y="52" width="2.5" height="30" fill="#a38b68" />
          <rect x="56" y="52" width="2.5" height="30" fill="#a38b68" />
          <rect x="26" y="82" width="42" height="6" fill="#d6c5ad" stroke="#94774e" strokeWidth="0.7" />
          {/* White Blossoms */}
          <circle cx="70" cy="68" r="4" fill="#ffffff" stroke="#dcd0be" strokeWidth="0.6" />
          <circle cx="63" cy="74" r="3.5" fill="#ffffff" stroke="#dcd0be" strokeWidth="0.6" />
        </g>

        {/* Water Shorelines & Ripples */}
        <path d="M 0 100 Q 150 108, 300 100 T 600 102" stroke="#93c5fd" strokeWidth="1.2" opacity="0.6" />
        <path d="M 50 115 Q 200 122, 350 115 T 550 117" stroke="#7dd3fc" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
}

/**
 * Bottom-Left Water Lotuses & Lily Pads Component
 */
function BottomLeftWaterLotuses() {
  return (
    <div className="pointer-events-none absolute bottom-4 left-1 sm:left-4 w-44 sm:w-56 h-36 select-none opacity-90 -z-10">
      <svg viewBox="0 0 200 140" fill="none" className="w-full h-full">
        {/* Lily Pads */}
        <ellipse cx="40" cy="100" rx="22" ry="7" fill="#697a5f" opacity="0.8" transform="rotate(-10 40 100)" />
        <ellipse cx="80" cy="108" rx="26" ry="8" fill="#556e4a" opacity="0.85" transform="rotate(8 80 108)" />
        <ellipse cx="120" cy="95" rx="20" ry="6" fill="#869e7b" opacity="0.75" transform="rotate(-5 120 95)" />

        {/* White Lotus 1 */}
        <g transform="translate(45, 75)">
          <path d="M 15 20 C 8 12, 8 4, 15 0 C 22 4, 22 12, 15 20 Z" fill="#ffffff" stroke="#dcd0be" strokeWidth="0.8" />
          <path d="M 10 22 C 3 14, 5 8, 11 8 Z" fill="#fdfbf7" stroke="#dcd0be" strokeWidth="0.7" />
          <path d="M 20 22 C 27 14, 25 8, 19 8 Z" fill="#fdfbf7" stroke="#dcd0be" strokeWidth="0.7" />
          <circle cx="15" cy="16" r="2.2" fill="#fef08a" />
        </g>

        {/* White Lotus 2 */}
        <g transform="translate(85, 82)">
          <path d="M 15 20 C 8 12, 8 4, 15 0 C 22 4, 22 12, 15 20 Z" fill="#ffffff" stroke="#dcd0be" strokeWidth="0.8" />
          <path d="M 10 22 C 3 14, 5 8, 11 8 Z" fill="#fdfbf7" stroke="#dcd0be" strokeWidth="0.7" />
          <path d="M 20 22 C 27 14, 25 8, 19 8 Z" fill="#fdfbf7" stroke="#dcd0be" strokeWidth="0.7" />
          <circle cx="15" cy="16" r="2.2" fill="#fef08a" />
        </g>
      </svg>
    </div>
  );
}

export function Blessings() {
  const [list, setList] = useState(blessingsSeed);
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  // Automatic Carousel advance every 4 seconds
  useEffect(() => {
    if (isPaused || list.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % list.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, list.length]);

  const current = list[index % list.length] ?? list[0]!;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const authorName = name.trim() || "Esteemed Guest";
    const newBlessing = {
      message: message.trim(),
      author: authorName,
      time: "Just now",
    };
    setList((prev) => [newBlessing, ...prev]);
    setIndex(0);
    setMessage("");
    setSent(true);
  };

  const filteredList = list.filter(
    (b) =>
      b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      id="blessings"
      className="relative w-full bg-[#faf6ee] px-3 sm:px-4 pt-16 pb-24 text-center select-none overflow-hidden min-h-[100vh] flex flex-col justify-between"
    >
      {/* Top Deckle Paper Divider */}
      <TornEdge position="top" variant={2} showGoldFoil={true} className="-top-3 z-30" />

      {/* ── DYNAMIC ATMOSPHERIC SCENERY BACKGROUND ── */}
      {/* Soft Ethereal Blue & Cream Watercolor Wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#f2f7fc] via-[#e8f2fc]/60 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.32)_0%,rgba(224,242,254,0.15)_55%,transparent_85%)] blur-2xl" />
      </div>

      {/* Horizon Chhatri Pavilions & Water SVG */}
      <HorizonPavilionsBackground />

      {/* Top-Right Gliding White Swan */}
      <img
        src={ceremonySwanRaw}
        alt="White Swan on Lake"
        className="pointer-events-none absolute top-[21%] right-1 sm:right-6 w-20 sm:w-26 h-auto mix-blend-multiply opacity-90 z-0 select-none"
      />

      {/* Bottom-Right Gliding White Swan */}
      <div className="pointer-events-none absolute bottom-[14%] right-1 sm:right-4 z-0 select-none">
        <div className="relative w-28 sm:w-36 h-auto">
          <img
            src={ceremonySwanRaw}
            alt="White Swan on Water"
            className="w-full h-auto object-contain mix-blend-multiply opacity-95 -scale-x-100"
          />
        </div>
      </div>

      {/* Bottom-Left White Lotuses & Lily Pads */}
      <BottomLeftWaterLotuses />

      {/* ── SECTION HEADER ── */}
      <header className="relative mx-auto max-w-sm z-20 pt-2 pb-2">
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

        {/* Section Title */}
        <h2 className="reveal font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.28em] text-[#1c232f] uppercase drop-shadow-2xs">
          BLESSINGS
        </h2>

        {/* Subtitle */}
        <p className="reveal mt-2 font-serif-body text-xs sm:text-[13px] leading-relaxed text-stone-700 italic px-4">
          Words from those we love,
          <br />
          carried with us into forever.
        </p>

        {/* Center Golden Lotus Divider */}
        <div className="reveal mt-3 flex items-center justify-center">
          <svg viewBox="0 0 40 30" fill="none" className="w-8 h-6 text-[#d4af37]">
            <path d="M 20 2 C 16 10, 14 18, 20 22 C 26 18, 24 10, 20 2 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="1.2" />
            <path d="M 17 8 C 10 11, 7 17, 14 20 C 18 17, 18 13, 17 8 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="0.9" />
            <path d="M 23 8 C 30 11, 33 17, 26 20 C 22 17, 22 13, 23 8 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="0.9" />
            <circle cx="20" cy="21" r="1.2" fill="#b88b2a" />
          </svg>
        </div>
      </header>

      {/* ── FORM SECTION: SEND A BLESSING ── */}
      <div className="reveal relative mx-auto max-w-[320px] sm:max-w-[350px] w-full text-center z-20 my-4" data-delay="0.1">
        {/* Subheader */}
        <div className="inline-flex items-center justify-center gap-2 mb-0.5">
          <span className="text-[#c49a38] text-[9px]">⤁</span>
          <span className="font-cinzel text-xs font-bold tracking-[0.24em] text-[#997a15] uppercase">
            SEND A BLESSING
          </span>
          <span className="text-[#c49a38] text-[9px]">⤁</span>
        </div>
        <p className="font-serif-body text-[11.5px] italic text-stone-600 mb-4">
          Leave a few words for the couple.
        </p>

        <form onSubmit={handleSend} className="space-y-3.5 text-left">
          {/* DEAR GUEST GREETING & TAGLINE */}
          <div className="text-center pb-0.5">
            <h3 className="font-serif-body text-base sm:text-lg italic font-semibold text-[#1c232f]">
              Dear Guest,
            </h3>
            <p className="font-serif-body text-[11.5px] text-stone-600 italic mt-1 leading-relaxed px-2">
              Share your warmest blessings &amp; wishes for the couple as they begin their forever journey.
            </p>
          </div>

          {/* YOUR MESSAGE */}
          <div>
            <label htmlFor="blessing-msg" className="block font-cinzel text-[9.5px] font-bold tracking-[0.2em] text-[#1c232f] uppercase mb-1">
              YOUR MESSAGE
            </label>
            <div className="relative rounded-2xl bg-[#faf6ef]/95 border border-[#e2d5bd] p-3.5 shadow-sm transition-all focus-within:border-[#997a15] focus-within:ring-1 focus-within:ring-[#997a15]/30">
              <textarea
                id="blessing-msg"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write something from the heart..."
                className="w-full bg-transparent font-serif-body text-xs leading-relaxed text-[#1c232f] placeholder:text-stone-400 placeholder:italic outline-none resize-none"
              />
              {/* Hand-drawn Golden Botanical Leaf Sprig in bottom-right corner */}
              <div className="absolute right-2.5 bottom-2 pointer-events-none opacity-70">
                <svg viewBox="0 0 30 30" className="w-6 h-6 text-[#c49a38] fill-none stroke-current" strokeWidth="1">
                  <path d="M 4 26 C 10 20, 20 14, 26 4" />
                  <path d="M 14 16 Q 8 10, 14 8 Q 18 12, 14 16 Z" fill="#faf5ef" />
                  <path d="M 20 10 Q 14 4, 20 2 Q 24 6, 20 10 Z" fill="#faf5ef" />
                </svg>
              </div>
            </div>
          </div>

          {/* SEND BLESSING BUTTON */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 font-cinzel text-xs font-bold tracking-[0.24em] text-[#997a15] hover:text-[#785d0d] uppercase transition-all cursor-pointer py-1 px-4 border-b border-transparent hover:border-[#997a15]"
            >
              <span className="text-[#c49a38] transition-transform group-hover:-translate-x-1">⤁</span>
              <span>SEND BLESSING</span>
              <span className="text-[#c49a38] transition-transform group-hover:translate-x-1">⤁</span>
            </button>
          </div>

          {sent && (
            <p className="font-serif-body text-xs italic text-emerald-700 text-center animate-fade-in pt-1">
              Thank you! Your blessing has been added to our album.
            </p>
          )}
        </form>
      </div>

      {/* ── FEATURED BLESSINGS CAROUSEL (Automatic Carousel & Organic Deckle Card) ── */}
      <div
        className="reveal relative mx-auto max-w-[350px] sm:max-w-[390px] w-full my-6 flex items-center justify-center z-20"
        data-delay="0.15"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => {
            setIndex((prev) => (prev - 1 + list.length) % list.length);
            setIsPaused(true);
          }}
          aria-label="Previous blessing"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#fdfcf9]/95 border border-[#d4af37]/70 text-[#997a15] shadow-xs flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Center Organic Wavy Deckle-Edge Parchment Card (matching user sketch) */}
        <div className="relative w-[85%] max-w-[275px] sm:max-w-[295px] px-6 py-7 text-center transition-all">
          {/* Organic Wavy Scalloped Deckle Paper SVG Background */}
          <svg viewBox="0 0 300 210" preserveAspectRatio="none" className="absolute inset-0 w-full h-full -z-10 drop-shadow-[0_10px_24px_rgba(140,120,90,0.2)] pointer-events-none">
            {/* Organic Deckle Parchment Fill */}
            <path
              d="M 25 15 
                 Q 55 5, 90 16 Q 130 8, 170 14 Q 210 5, 245 16 Q 275 8, 285 24
                 Q 296 45, 284 75 Q 298 105, 286 135 Q 295 160, 278 182 Q 255 198, 225 192
                 Q 185 204, 145 195 Q 105 202, 65 192 Q 35 200, 18 180
                 Q 6 155, 16 125 Q 5 95, 18 65 Q 8 38, 25 15 Z"
              fill="#faf6ef"
              stroke="#e2d5bd"
              strokeWidth="1.8"
            />
          </svg>

          <style>{`
            @keyframes blessingCardSlide {
              0% {
                opacity: 0;
                transform: translateY(10px) scale(0.96);
              }
              50% {
                opacity: 0.85;
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            .animate-blessing-card-slide {
              animation: blessingCardSlide 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `}</style>

          {/* Animated Blessing Content Wrapper */}
          <div key={index} className="animate-blessing-card-slide">
            {/* Top Golden Quote Mark */}
            <span className="font-serif-body text-2xl text-[#d4af37] leading-none block mb-1">
              “
            </span>

            {/* Message */}
            <p className="font-serif-body text-xs sm:text-[13px] font-normal leading-relaxed text-[#1c232f] px-1">
              {current.message}
            </p>

            {/* Divider */}
            <div className="mx-auto my-2.5 h-px w-8 bg-gradient-to-r from-transparent via-[#c49a38] to-transparent" />

            {/* Author */}
            <footer className="font-serif-body text-xs italic text-[#997a15]">
              — {current.author}
            </footer>
          </div>

          {/* Bottom-Left Floral Corner Accent (Flipped Horizontally) */}
          <div className="absolute -left-1.5 -bottom-1.5 pointer-events-none opacity-90 w-16 sm:w-20 h-auto select-none z-10">
            <img
              src={floralCornerImg}
              alt="Floral Corner Accent Left"
              className="w-full h-auto object-contain mix-blend-multiply -scale-x-100"
            />
          </div>

          {/* Bottom-Right Floral Corner Accent */}
          <div className="absolute -right-1.5 -bottom-1.5 pointer-events-none opacity-90 w-16 sm:w-20 h-auto select-none z-10">
            <img
              src={floralCornerImg}
              alt="Floral Corner Accent"
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() => {
            setIndex((prev) => (prev + 1) % list.length);
            setIsPaused(true);
          }}
          aria-label="Next blessing"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#fdfcf9]/95 border border-[#d4af37]/70 text-[#997a15] shadow-xs flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* ── COUNTER INDICATOR & VIEW ALL BLESSINGS ── */}
      <div className="reveal relative z-20 flex flex-col items-center gap-3 mt-1 mb-4" data-delay="0.2">
        {/* Counter Indicator */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-1 w-1 rounded-full bg-[#c49a38]" />
          <span className="font-cinzel text-[10px] font-bold tracking-widest text-[#997a15]">
            {String((index % list.length) + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
          </span>
          <span className="h-1 w-1 rounded-full bg-[#c49a38]" />
        </div>

        {/* VIEW ALL BLESSINGS Link */}
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-1.5 font-cinzel text-[10px] sm:text-[10.5px] font-bold tracking-[0.22em] text-[#997a15] hover:text-[#785d0d] uppercase border-b border-[#c49a38]/40 pb-0.5 transition-colors cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-[#c49a38]" />
          <span>VIEW ALL BLESSINGS</span>
          <span>→</span>
        </button>
      </div>

      {/* Bottom Golden Lotus Flourish Motif */}
      <div className="reveal relative z-20 mx-auto w-8 h-6 opacity-80" data-delay="0.25">
        <svg viewBox="0 0 40 30" fill="none" className="w-full h-full text-[#d4af37]">
          <path d="M 20 2 C 16 10, 14 18, 20 22 C 26 18, 24 10, 20 2 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="1" />
          <path d="M 17 8 C 10 11, 7 17, 14 20 C 18 17, 18 13, 17 8 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="0.8" />
          <path d="M 23 8 C 30 11, 33 17, 26 20 C 22 17, 22 13, 23 8 Z" fill="#fdfbf7" stroke="#b88b2a" strokeWidth="0.8" />
          <circle cx="20" cy="21" r="1.2" fill="#b88b2a" />
        </svg>
      </div>

      {/* Bottom Deckle Paper Divider transitioning into Venue Section */}
      <TornEdge position="bottom" variant={1} showGoldFoil={true} className="-bottom-3 z-30" />

      {/* ── ALL BLESSINGS MODAL DIALOG ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in text-left select-text">
          <div className="relative w-full max-w-md max-h-[80vh] flex flex-col rounded-2xl bg-[#faf6ee] p-5 border border-[#d4af37] shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#e2d5bd]">
              <div>
                <span className="font-cinzel text-[10px] font-bold text-[#997a15] uppercase tracking-widest">
                  ALBUM OF BLESSINGS
                </span>
                <h3 className="font-cinzel text-lg font-bold text-[#1c232f]">
                  All Words of Love ({list.length})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-full bg-stone-200/60 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            <div className="my-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or keyword..."
                className="w-full rounded-xl border border-[#e2d5bd] bg-white/90 px-3.5 py-2 text-xs font-serif-body text-stone-800 placeholder-stone-400 outline-none focus:border-[#997a15]"
              />
            </div>

            {/* Scrollable Blessings List */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 custom-scrollbar">
              {filteredList.length > 0 ? (
                filteredList.map((b, i) => (
                  <div
                    key={b.author + i}
                    className="p-3.5 rounded-xl bg-white/80 border border-[#e8ded0] shadow-2xs"
                  >
                    <p className="font-serif-body text-xs italic text-[#1c232f] leading-relaxed">
                      “{b.message}”
                    </p>
                    <div className="mt-2 flex items-center justify-between font-serif-body text-[11px] text-[#997a15]">
                      <span className="font-semibold">— {b.author}</span>
                      <span className="text-stone-400 text-[10px]">{b.time}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center font-serif-body italic text-stone-500 text-xs py-8">
                  No blessings found matching "{searchQuery}".
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
