import drapeCornerImg from "@/assets/drape-corner.webp";
import thankyouPavilionImg from "@/assets/thankyou-pavilion.webp";

export function Families() {
  return (
    <section id="families" className="relative w-full bg-[#faf6ee] px-3 sm:px-4 pt-16 pb-24 text-center select-none overflow-hidden">
      {/* ── BACKGROUND ETHEREAL ARTWORK & AMBIENT GLOWS ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] blur-2xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(85,110,74,0.12)_0%,transparent_70%)] blur-2xl" />

        {/* Central Royal Udaipur Palace Pavilion Silhouette Watermark */}
        <img
          src={thankyouPavilionImg}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 max-w-none opacity-[0.14] mix-blend-multiply blur-[0.3px]"
        />

        {/* Side Botanical Foliage Watermarks (Left & Right) */}
        <img
          src={drapeCornerImg}
          alt=""
          className="absolute top-28 -left-12 w-40 sm:w-48 opacity-[0.22] mix-blend-multiply -rotate-45"
        />
        <img
          src={drapeCornerImg}
          alt=""
          className="absolute bottom-28 -right-12 w-40 sm:w-48 opacity-[0.22] mix-blend-multiply rotate-135 -scale-x-100"
        />
      </div>

      {/* SECTION HEADER */}
      <header className="relative mx-auto max-w-sm z-10 pt-2 pb-6">
        <div className="reveal inline-block">
          <span className="font-cinzel text-[9.5px] sm:text-[10px] font-bold tracking-[0.28em] text-[#b88b2a] uppercase">
            With Blessings &amp; Honour
          </span>
          <h2 className="mt-1 font-cinzel-dec text-3xl sm:text-4xl font-bold tracking-[0.06em] text-[#1c232f] uppercase drop-shadow-2xs">
            Family Union
          </h2>
          <div className="mx-auto mt-2 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#c49a38]" />
            <span className="text-[#c49a38] text-[8px]">❖</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#c49a38]" />
          </div>
          <p className="mt-2.5 font-serif-body text-[13px] sm:text-[14px] leading-relaxed text-stone-600 italic px-3">
            "Where two lineages intertwine like quiet waters joining the grand lake."
          </p>
        </div>
      </header>

      {/* FAMILIES PRESENTATION - CLEAN SPACIOUS TYPOGRAPHIC FLOW */}
      <div className="relative mx-auto mt-6 sm:mt-8 max-w-sm sm:max-w-md flex flex-col gap-16 sm:gap-20 z-10 px-2">
        {/* ── BRIDE'S FAMILY ── */}
        <div className="reveal relative flex flex-col items-center text-center py-2">
          {/* Header Line with Flanking Dividers */}
          <div className="w-full flex items-center justify-center gap-3.5 mb-4">
            <div className="h-px flex-1 max-w-[70px] sm:max-w-[110px] bg-gradient-to-r from-transparent via-[#caa44b]/60 to-[#c49a38]" />
            <span className="font-cinzel text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.26em] text-[#556e4a] whitespace-nowrap drop-shadow-2xs">
              Bride's Family
            </span>
            <div className="h-px flex-1 max-w-[70px] sm:max-w-[110px] bg-gradient-to-l from-transparent via-[#caa44b]/60 to-[#c49a38]" />
          </div>

          <p className="mt-1 font-serif-body text-xl sm:text-2xl font-bold text-[#1c232f] tracking-wide">
            Mr. Rajesh &amp; Mrs. Sunita Kapoor
          </p>

          <p className="mt-2.5 font-serif-body text-xs sm:text-[13.5px] italic font-normal text-stone-600 leading-relaxed max-w-xs px-2">
            cordially invite you to celebrate the auspicious wedding of their beloved daughter
          </p>

          {/* Bride Name Highlight */}
          <div className="mt-4 mb-2 text-center">
            <h3 className="font-script text-3.5xl sm:text-4xl text-[#556e4a] font-normal drop-shadow-2xs">
              Ananya Kapoor
            </h3>
          </div>

          <div className="mt-3 w-full max-w-xs pt-3 border-t border-[#caa44b]/25 flex flex-col items-center">
            <p className="font-serif-body text-[11px] sm:text-xs italic text-stone-600">
              “Daughter of grace, carrying family love into a radiant new dawn.”
            </p>
          </div>
        </div>

        {/* ── GROOM'S FAMILY ── */}
        <div className="reveal relative flex flex-col items-center text-center py-2">
          {/* Header Line with Flanking Dividers */}
          <div className="w-full flex items-center justify-center gap-3.5 mb-4">
            <div className="h-px flex-1 max-w-[70px] sm:max-w-[110px] bg-gradient-to-r from-transparent via-[#caa44b]/60 to-[#c49a38]" />
            <span className="font-cinzel text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.26em] text-[#556e4a] whitespace-nowrap drop-shadow-2xs">
              Groom's Family
            </span>
            <div className="h-px flex-1 max-w-[70px] sm:max-w-[110px] bg-gradient-to-l from-transparent via-[#caa44b]/60 to-[#c49a38]" />
          </div>

          <p className="mt-1 font-serif-body text-xl sm:text-2xl font-bold text-[#1c232f] tracking-wide">
            Mr. Arun &amp; Mrs. Kavita Sharma
          </p>

          <p className="mt-2.5 font-serif-body text-xs sm:text-[13.5px] italic font-normal text-stone-600 leading-relaxed max-w-xs px-2">
            with immense joy invite you to the wedding celebration of their cherished son
          </p>

          {/* Groom Name Highlight */}
          <div className="mt-4 mb-2 text-center">
            <h3 className="font-script text-3.5xl sm:text-4xl text-[#556e4a] font-normal drop-shadow-2xs">
              Rohan Sharma
            </h3>
          </div>

          <div className="mt-3 w-full max-w-xs pt-3 border-t border-[#caa44b]/25 flex flex-col items-center">
            <p className="font-serif-body text-[11px] sm:text-xs italic text-stone-600">
              “Son of honor, stepping forward to weave two worlds into timeless harmony.”
            </p>
          </div>
        </div>
      </div>

      {/* FINALE TAGLINE CARD */}
      <div className="reveal relative mx-auto mt-12 sm:mt-16 max-w-sm sm:max-w-md z-10 px-2" data-delay="0.2">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#fdfcfa]/90 to-[#f8f4ea]/90 p-5 sm:p-7 border border-[#c49a38]/35 shadow-[0_10px_24px_-8px_rgba(196,154,56,0.14)] text-center flex flex-col items-center">
          {/* Gold Filigree Divider */}
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c49a38]" />
            <span className="text-[#c49a38] text-[9px]">🪷</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#c49a38]" />
          </div>

          {/* Special Line */}
          <p className="font-cinzel text-[10px] sm:text-[11.5px] font-bold tracking-[0.18em] text-[#b88b2a] uppercase">
            Two Families · One Journey
          </p>

          {/* Soulful Tagline */}
          <blockquote className="mt-2 font-serif-body text-[13.5px] sm:text-base italic text-[#1c232f] leading-relaxed max-w-md">
            “May our families grow as one, bound by unconditional love, mutual respect, and eternal happiness.”
          </blockquote>

          {/* Tagline Signature */}
          <p className="mt-2.5 font-script text-2xl sm:text-3xl text-[#556e4a] font-normal">
            Kapoor &amp; Sharma Families
          </p>
        </div>
      </div>
    </section>
  );
}
