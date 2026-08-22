import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
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
import { useReveal } from "@/hooks/useReveal";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const title = "Anaïs & Rohan — 12 December 2026 | The Lake Pavilion";
const description =
  "A Swan Lake inspired wedding invitation. Join Anaïs and Rohan on 12 December 2026 at The Lake Pavilion — ceremonies, RSVP and blessings.";

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

  useSmoothScroll();
  useReveal(!opening);

  const finishOpening = useCallback(() => setOpening(false), []);

  const replay = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setRunKey((k) => k + 1);
    setOpening(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = opening ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opening]);

  return (
    <>
      <BackgroundWorld />

      {opening && (
        <Opening key={runKey} runKey={runKey} onDone={finishOpening} />
      )}

      <main className="relative">
        <Welcome />
        <Story />
        <Gallery />
        <Families />
        <Ceremonies />
        <Rsvp />
        <Blessings />
        <VenueSection />
        <Finale onReplay={replay} />
      </main>
    </>
  );
}
