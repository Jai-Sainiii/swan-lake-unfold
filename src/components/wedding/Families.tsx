export function Families() {
  return (
    <section id="families" className="relative w-full bg-[#faf6ee] px-3 sm:px-4 pt-14 pb-20 text-center select-none overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] blur-2xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(85,110,74,0.12)_0%,transparent_70%)] blur-2xl" />
      </div>

      {/* SECTION HEADER */}
      <header className="relative mx-auto max-w-sm z-10 pt-2 pb-4">
        <div className="reveal inline-block">
          {/* Royal Crest Motif */}
          <div className="mx-auto w-20 h-7 select-none pointer-events-none mb-1 opacity-90">
            <svg viewBox="0 0 120 40" fill="none" className="w-full h-full text-[#c49a38]">
              <path d="M 60 4 C 57 14, 53 18, 60 25 C 67 18, 63 14, 60 4 Z" fill="#c49a38" />
              <path d="M 50 18 C 35 15, 20 25, 5 22" stroke="#c49a38" strokeWidth="1" strokeLinecap="round" />
              <path d="M 70 18 C 85 15, 100 25, 115 22" stroke="#c49a38" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>

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
            "Where two lineages intertw like quiet waters joining the grand lake."
          </p>
        </div>
      </header>

      {/* CARDS STACKED ONE BY ONE VERTICALLY */}
      <div className="relative mx-auto mt-6 max-w-sm sm:max-w-md flex flex-col gap-6 z-10 px-2">
        {/* BRIDE'S FAMILY CARD */}
        <div className="reveal relative flex flex-col items-center rounded-3xl bg-[#fcfaf5] p-6 sm:p-7 border border-[#d6dfd0] shadow-[0_12px_30px_-6px_rgba(90,110,80,0.12)]">
          {/* Top Arc Motif */}
          <div className="w-full flex items-center justify-center mb-2 select-none pointer-events-none">
            <svg viewBox="0 0 100 16" fill="none" className="w-24 h-auto text-[#c49a38]">
              <path d="M 10 14 C 30 4, 70 4, 90 14" stroke="currentColor" strokeWidth="1.1" strokeDasharray="3 2" />
              <circle cx="50" cy="5" r="2" fill="#d4af37" />
            </svg>
          </div>

          <span className="font-cinzel text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.24em] text-[#556e4a]">
            THE BRIDE'S FAMILY
          </span>

          <p className="mt-3 font-serif-body text-lg sm:text-xl font-bold text-[#1c232f] tracking-wide">
            Mr. Rajesh &amp; Mrs. Sunita Kapoor
          </p>

          <p className="mt-2 font-serif-body text-xs sm:text-[13px] italic font-normal text-stone-600 leading-relaxed max-w-xs px-2">
            cordially invite you to celebrate the auspicious wedding of their beloved daughter
          </p>

          {/* Bride Name Highlight */}
          <div className="mt-4 my-2 text-center">
            <h3 className="font-script text-3xl sm:text-4xl text-[#556e4a] font-normal drop-shadow-2xs">
              Ananya Kapoor
            </h3>
          </div>

          <div className="mt-3 w-full pt-3 border-t border-[#caa44b]/30 flex flex-col items-center">
            <p className="font-serif-body text-[11px] sm:text-xs italic text-stone-600">
              “Daughter of grace, carrying family love into a radiant new dawn.”
            </p>
          </div>
        </div>

        {/* GROOM'S FAMILY CARD */}
        <div className="reveal relative flex flex-col items-center rounded-3xl bg-[#fcfaf5] p-6 sm:p-7 border border-[#d6dfd0] shadow-[0_12px_30px_-6px_rgba(90,110,80,0.12)]">
          {/* Top Arc Motif */}
          <div className="w-full flex items-center justify-center mb-2 select-none pointer-events-none">
            <svg viewBox="0 0 100 16" fill="none" className="w-24 h-auto text-[#c49a38]">
              <path d="M 10 14 C 30 4, 70 4, 90 14" stroke="currentColor" strokeWidth="1.1" strokeDasharray="3 2" />
              <circle cx="50" cy="5" r="2" fill="#d4af37" />
            </svg>
          </div>

          <span className="font-cinzel text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.24em] text-[#556e4a]">
            THE GROOM'S FAMILY
          </span>

          <p className="mt-3 font-serif-body text-lg sm:text-xl font-bold text-[#1c232f] tracking-wide">
            Mr. Arun &amp; Mrs. Kavita Sharma
          </p>

          <p className="mt-2 font-serif-body text-xs sm:text-[13px] italic font-normal text-stone-600 leading-relaxed max-w-xs px-2">
            with immense joy invite you to the wedding celebration of their cherished son
          </p>

          {/* Groom Name Highlight */}
          <div className="mt-4 my-2 text-center">
            <h3 className="font-script text-3xl sm:text-4xl text-[#556e4a] font-normal drop-shadow-2xs">
              Rohan Sharma
            </h3>
          </div>

          <div className="mt-3 w-full pt-3 border-t border-[#caa44b]/30 flex flex-col items-center">
            <p className="font-serif-body text-[11px] sm:text-xs italic text-stone-600">
              “Son of honor, stepping forward to weave two worlds into timeless harmony.”
            </p>
          </div>
        </div>
      </div>

      {/* FINALE TAGLINE CARD */}
      <div className="reveal relative mx-auto mt-8 sm:mt-10 max-w-sm sm:max-w-md z-10 px-2" data-delay="0.2">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#fdfcfa] to-[#f8f4ea] p-5 sm:p-7 border border-[#c49a38]/40 shadow-[0_14px_30px_-8px_rgba(196,154,56,0.16)] text-center flex flex-col items-center">
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
