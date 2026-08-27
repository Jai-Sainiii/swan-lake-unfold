import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState, useRef } from "react";
import { BackgroundWorld } from "@/components/wedding/BackgroundWorld";
import { Opening } from "@/components/wedding/Opening";
import { Welcome } from "@/components/wedding/Welcome";
import { Story } from "@/components/wedding/Story";
import { Gallery } from "@/components/wedding/Gallery";
import { Families } from "@/components/wedding/Families";
import { Ceremonies } from "@/components/wedding/Ceremonies";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Blessings } from "@/components/wedding/Blessings";
import { VenueSection } from "@/components/wedding/VenueSection";
import { Finale } from "@/components/wedding/Finale";
import { AudioPlayer } from "@/components/wedding/AudioPlayer";
import { useReveal } from "@/hooks/useReveal";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { couple } from "@/lib/wedding";
import pcBackground from "@/assets/pc-background.webp";

const title = `${couple.bride} & ${couple.groom} — ${couple.dateLabel} | ${couple.venue}`;
const description = `A Swan Lake Royal Wedding Invitation. Join ${couple.bride} and ${couple.groom} on ${couple.dateLabel} at ${couple.venue}, ${couple.city} — ceremonies, itinerary, RSVP and blessings.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const [opening, setOpening] = useState(true);
  const [runKey, setRunKey] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollerElement, setScrollerElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const updateScroller = () => {
      if (window.innerWidth >= 640 && scrollContainerRef.current) {
        setScrollerElement(scrollContainerRef.current);
      } else {
        setScrollerElement(null);
      }
    };
    updateScroller();
    window.addEventListener("resize", updateScroller);
    return () => window.removeEventListener("resize", updateScroller);
  }, []);

  useSmoothScroll(scrollContainerRef, !opening);
  useReveal(!opening, scrollerElement);

  const finishOpening = useCallback(() => setOpening(false), []);

  const replay = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setRunKey((k) => k + 1);
    setOpening(true);
  }, []);

  // Reset scroll to top on load and prevent browser scroll restoration
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const forceScrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    };

    forceScrollToTop();
    const frameId = requestAnimationFrame(forceScrollToTop);
    const timer = setTimeout(forceScrollToTop, 50);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
    };
  }, [runKey]);

  useEffect(() => {
    if (opening) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [opening]);

  return (
    <>
      {/* Desktop Atmospheric Backdrop (Visible on All Screens Above Mobile Viewport) */}
      <div
        className="hidden sm:fixed sm:inset-0 sm:block -z-20 select-none overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${pcBackground})`,
        }}
      />

      {/* Main Responsive Wrapper: Smartphone Frame on PC/Tablet, Fluid Edge-to-Edge on Mobile */}
      <div className="sm:fixed sm:inset-0 sm:flex sm:items-center sm:justify-center">
        {/* Smartphone Chassis on PC Screens */}
        <div className="w-full sm:relative sm:h-[92vh] sm:max-h-[920px] sm:min-h-[640px] sm:w-[380px] sm:rounded-[3.2rem] sm:bg-gradient-to-br sm:from-[#4a4f58] sm:via-[#23252a] sm:to-[#0f1013] sm:p-[7px] sm:shadow-[0_35px_90px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(212,175,55,0.3),inset_0_1px_2px_rgba(255,255,255,0.4)]">
          
          {/* Hardware buttons on chassis */}
          <div className="hidden sm:block absolute -left-[3.5px] top-[130px] w-[3.5px] h-9 rounded-l-[2px] bg-gradient-to-b from-[#5c616b] to-[#25272c]" />
          <div className="hidden sm:block absolute -left-[3.5px] top-[180px] w-[3.5px] h-9 rounded-l-[2px] bg-gradient-to-b from-[#5c616b] to-[#25272c]" />
          <div className="hidden sm:block absolute -right-[3.5px] top-[160px] w-[3.5px] h-14 rounded-r-[2px] bg-gradient-to-b from-[#5c616b] to-[#25272c]" />

          {/* Smartphone Screen Bezel */}
          <div className="relative h-full w-full sm:rounded-[2.8rem] sm:border sm:border-amber-400/25 sm:bg-[#faf8f5] sm:overflow-hidden">
            
            {/* Dynamic Island Notch on Desktop */}
            <div className="hidden sm:flex pointer-events-none absolute top-2.5 left-1/2 -translate-x-1/2 z-50 h-5 w-26 items-center justify-between rounded-full bg-black px-3 shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]">
              <div className="h-2 w-2 rounded-full bg-[#0c141f] ring-1 ring-white/10" />
              <div className="flex items-center space-x-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#0a121a]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#060c14] ring-1 ring-white/10" />
              </div>
            </div>

            {/* Scrollable Screen Content Container */}
            <div
              ref={scrollContainerRef}
              className={`relative w-full overflow-x-hidden bg-[#faf8f5] text-[#1c232f] ${
                opening
                  ? "h-screen overflow-y-hidden select-none"
                  : "sm:h-full sm:overflow-y-auto sm:rounded-[2.7rem] custom-scrollbar"
              }`}
            >
              {/* Contained Background Atmosphere */}
              <BackgroundWorld scroller={scrollerElement} />
              
              {/* Soundtrack Audio Player */}
              <AudioPlayer />

              {/* Opening Scene Video Transition */}
              {opening && (
                <Opening key={runKey} runKey={runKey} onDone={finishOpening} />
              )}

              {/* Wedding Invitation Main Sections */}
              <main className="relative z-10 w-full pb-0">
                <Welcome />
                <Story scroller={scrollerElement} />
                <Families />
                <Ceremonies scroller={scrollerElement} />
                <Gallery />
                <Rsvp />
                <Blessings />
                <VenueSection />
                <Finale onReplay={replay} />
              </main>
            </div>

            {/* iOS Home Indicator Bar on Desktop */}
            <div className="hidden sm:block pointer-events-none absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-32 rounded-full bg-black/40 z-50" />
          </div>
        </div>
      </div>
    </>
  );
}
