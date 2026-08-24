import { useEffect, useRef, useState } from "react";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import swanStoryFinale from "@/assets/swan-story-finale.png";
import { TornEdge } from "@/components/wedding/TornEdge";

interface StoryCardItem {
  chapter: string;
  titleMain: string;
  titleScript: string;
  titleSub: string;
  desc: string;
  location: string;
  year: string;
  image: string;
}

const storyMilestones: StoryCardItem[] = [
  {
    chapter: "CHAPTER I",
    titleMain: "The First",
    titleScript: "& serendipity",
    titleSub: "Glance",
    desc: "A rainy evening by the Arabian sea, a serendipitous meeting, and a conversation that effortlessly turned strangers into kindred souls.",
    location: "Mumbai",
    year: "2019",
    image: story1,
  },
  {
    chapter: "CHAPTER II",
    titleMain: "Across Waters",
    titleScript: "& endless",
    titleSub: "Melodies",
    desc: "Two journeys, a thousand shared songs and late-night calls, realizing with every passing season that home was in each other's laughter.",
    location: "Across Cities",
    year: "2021",
    image: story2,
  },
  {
    chapter: "CHAPTER III",
    titleMain: "The Sunrise",
    titleScript: "& sacred",
    titleSub: "Promise",
    desc: "By a quiet mist-kissed lake at sunrise, surrounded by floating lotus petals, a sacred question asked softly and answered with tears of joy.",
    location: "Lake Pichola",
    year: "2024",
    image: story3,
  },
  {
    chapter: "CHAPTER IV",
    titleMain: "Always",
    titleScript: "& forever",
    titleSub: "Together",
    desc: "Surrounded by our beloved families, under the royal Rajasthani skies, we unite our worlds in timeless harmony.",
    location: "The Lake Palace",
    year: "2026",
    image: story4,
  },
];

/**
 * Top Header Filigree Crown Motif
 */
function FiligreeCrown() {
  return (
    <div className="relative mx-auto w-32 h-10 select-none pointer-events-none mb-1.5 opacity-90">
      <svg viewBox="0 0 160 50" fill="none" className="w-full h-full text-[#c49a38]">
        <defs>
          <linearGradient id="filigreeGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eed088" />
            <stop offset="50%" stopColor="#c49a38" />
            <stop offset="100%" stopColor="#8c6a1e" />
          </linearGradient>
        </defs>
        <path
          d="M 80 4 C 77 14, 73 20, 80 28 C 87 20, 83 14, 80 4 Z"
          fill="url(#filigreeGold)"
        />
        <path
          d="M 75 14 C 67 15, 65 24, 76 25 C 77 20, 77 17, 75 14 Z"
          fill="url(#filigreeGold)"
        />
        <path
          d="M 85 14 C 93 15, 95 24, 84 25 C 83 20, 83 17, 85 14 Z"
          fill="url(#filigreeGold)"
        />
        <rect x="74" y="27" width="12" height="2.5" rx="1" fill="url(#filigreeGold)" />
        <path
          d="M 74 28 C 55 24, 40 38, 22 28 C 15 24, 6 30, 2 34"
          stroke="url(#filigreeGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 65 30 C 50 42, 35 34, 25 36"
          stroke="url(#filigreeGold)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <circle cx="22" cy="28" r="2" fill="url(#filigreeGold)" />
        <circle cx="6" cy="30" r="1.5" fill="url(#filigreeGold)" />
        <path
          d="M 86 28 C 105 24, 120 38, 138 28 C 145 24, 154 30, 158 34"
          stroke="url(#filigreeGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 95 30 C 110 42, 125 34, 135 36"
          stroke="url(#filigreeGold)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <circle cx="138" cy="28" r="2" fill="url(#filigreeGold)" />
        <circle cx="154" cy="30" r="1.5" fill="url(#filigreeGold)" />
      </svg>
    </div>
  );
}





export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height;
      const currentProgress = Math.min(
        1,
        Math.max(0, (windowHeight * 0.7 - rect.top) / totalDist)
      );
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative w-full bg-[#faf6ee] px-3 sm:px-4 pt-14 pb-20 text-center select-none overflow-hidden"
    >
      {/* Top Torn Deckle Paper Divider with Gilded Gold Foil Accent */}
      <TornEdge position="top" variant={1} showGoldFoil={true} className="-top-3 z-30" />

      {/* ── Soft Ethereal Blue Watercolor Clouds in Background Corners ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 -left-16 w-64 h-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.18)_50%,transparent_75%)] blur-2xl" />
        <div className="absolute top-12 -right-16 w-72 h-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.15)_50%,transparent_75%)] blur-2xl" />
        <div className="absolute top-[40%] -left-20 w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.25)_0%,rgba(224,242,254,0.1)_50%,transparent_75%)] blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.18)_50%,transparent_75%)] blur-2xl" />
      </div>

      {/* ── SECTION HEADER ── */}
      <header className="relative mx-auto max-w-sm z-20 pt-2 pb-3">
        <div className="reveal">
          <FiligreeCrown />
        </div>

        <h2 className="reveal font-cinzel-dec text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#1c232f] uppercase drop-shadow-2xs">
          Our Story
        </h2>

        <div className="reveal mx-auto mt-2.5 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#c49a38]" />
          <span className="text-[#c49a38] text-[9px]">❖</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#c49a38]" />
        </div>

        <p className="reveal mt-3 font-serif-body text-[13px] sm:text-[14px] leading-relaxed text-stone-700 italic px-4">
          Every love story is beautiful,
          <br />
          but ours is my favorite.
        </p>
      </header>

      {/* ── CENTRAL S-CURVE THREAD & ALTERNATING KEEPSAKE CARDS ── */}
      <div className="relative mx-auto max-w-[380px] sm:max-w-[420px] mt-6 z-10">
        {/* Continuous S-Curve Golden Timeline Path weaving between alternating cards */}
        <div className="pointer-events-none absolute inset-0 w-full h-full -z-10">
          <svg
            viewBox="0 0 380 1600"
            preserveAspectRatio="none"
            fill="none"
            className="w-full h-full text-[#c49a38]"
          >
            {/* Background dashed path */}
            <path
              d="M 220 0 
                 C 320 120, 90 260, 120 400 
                 C 150 560, 340 700, 260 840 
                 C 180 980, 320 1120, 120 1280 
                 C 50 1420, 220 1520, 190 1600"
              stroke="#caa44b"
              strokeWidth="1.4"
              strokeDasharray="5 3.5"
              opacity="0.55"
            />
            {/* Animated gold thread */}
            <path
              d="M 220 0 
                 C 320 120, 90 260, 120 400 
                 C 150 560, 340 700, 260 840 
                 C 180 980, 320 1120, 120 1280 
                 C 50 1420, 220 1520, 190 1600"
              stroke="#d4af37"
              strokeWidth="2"
              strokeDasharray="1600"
              strokeDashoffset={1600 * (1 - scrollProgress)}
              className="transition-[stroke-dashoffset] duration-300 ease-out"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* ── ALTERNATING LEFT / RIGHT KEEPSAKE CARDS ── */}
        <div className="relative flex flex-col space-y-12 sm:space-y-16 z-10 py-4">
          {storyMilestones.map((m, idx) => {
            const isLeft = idx % 2 === 0;

            // Gentle aesthetic tilt angles matching the hand-drawn scrapbook look
            const tilts = ["-rotate-[2.5deg]", "rotate-[2.5deg]", "-rotate-[2deg]", "rotate-[3deg]"];
            const tiltClass = tilts[idx % tilts.length];
            const alignClass = isLeft ? "self-start ml-0 mr-auto" : "self-end ml-auto mr-0";

            return (
              <article
                key={m.chapter}
                className={`reveal relative w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
                data-delay={`${idx * 0.1}`}
              >
                {/* Keepsake Paper Card */}
                <div
                  className={`relative w-[82%] sm:w-[78%] max-w-[265px] sm:max-w-[285px] rounded-[1.35rem] bg-[#fcfaf5] p-3 sm:p-3.5 border border-[#d6dfd0]/85 shadow-[0_14px_32px_-6px_rgba(90,110,80,0.16),0_3px_8px_rgba(0,0,0,0.04)] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] ${alignClass} ${tiltClass}`}
                >
                  {/* Top Photo Frame */}
                  <div className="relative w-full aspect-[4/3] rounded-[1rem] overflow-hidden bg-stone-100 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)]">
                    <img
                      src={m.image}
                      alt={`${m.titleMain} ${m.titleSub}`}
                      className="w-full h-full object-cover contrast-[1.02] saturate-[0.96] sepia-[0.05] brightness-[1.01] transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    {/* Matte Print Paper Grain Finish */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#faf5ea]/10 via-transparent to-[#faf5ea]/25 mix-blend-multiply" />
                  </div>

                  {/* Card Typography Content */}
                  <div className="pt-3.5 pb-2 px-2 text-center flex flex-col items-center">
                    {/* Chapter Label */}
                    <span className="font-cinzel text-[9.5px] sm:text-[10px] font-bold tracking-[0.24em] text-[#b88b2a] uppercase">
                      {m.chapter}
                    </span>

                    {/* Headline: Serif + Script Pairing */}
                    <h3 className="mt-1 flex items-center justify-center flex-wrap gap-x-1.5 font-serif-body text-lg sm:text-xl font-normal text-[#1c232f] leading-snug">
                      <span>{m.titleMain}</span>
                      <span className="font-script text-[#556e4a] text-2xl -my-1 font-normal">
                        {m.titleScript}
                      </span>
                      <span>{m.titleSub}</span>
                    </h3>

                    {/* Narrative Description */}
                    <p className="mt-2 font-serif-body text-[11.5px] sm:text-[12px] font-normal leading-relaxed text-stone-600 px-1">
                      {m.desc}
                    </p>

                    {/* Location & Year Footer */}
                    <div className="mt-2.5 inline-flex items-center gap-1.5 opacity-80">
                      <span className="h-px w-3 bg-[#a8b89e]" />
                      <span className="font-cinzel text-[8.5px] font-semibold tracking-[0.18em] text-[#556e4a] uppercase">
                        {m.location} · {m.year}
                      </span>
                      <span className="h-px w-3 bg-[#a8b89e]" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Bottom Finale: Watercolor Swan with White Lotus ── */}
        <div className="reveal relative mt-10 sm:mt-12 flex flex-col items-center justify-center z-20" data-delay="0.3">
          <div className="relative w-56 sm:w-64 max-w-full drop-shadow-md select-none pointer-events-none">
            <img
              src={swanStoryFinale}
              alt="Watercolor Swan and White Lotus"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Torn Deckle Paper Divider transitioning into Families Section */}
      <TornEdge position="bottom" variant={2} showGoldFoil={true} className="-bottom-3 z-30" />
    </section>
  );
}
