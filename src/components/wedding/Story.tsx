import { acts } from "@/lib/wedding";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import swanLakeVignette from "@/assets/swan-lake-vignette.png";

const images = [story1, story2, story3, story4];

export function Story() {
  return (
    <section id="story" className="relative px-2 py-16 text-center overflow-hidden">
      {/* Section Header */}
      <header className="relative mx-auto max-w-sm z-10">
        <div className="reveal inline-block">
          <span className="font-cinzel text-xs font-bold tracking-[0.28em] text-[#997a15] uppercase">
            Chapter of Love
          </span>
          <h2 className="mt-2 font-cinzel-dec text-2xl font-bold tracking-wide text-[#1c232f]">
            A Ballet in Four Acts
          </h2>
          <div className="mx-auto mt-2.5 h-0.5 w-14 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
      </header>

      {/* Hand-painted Watercolor Swan & Lotus Centerpiece */}
      <div className="reveal relative mx-auto my-6 max-w-[200px] z-10" data-delay="0.12">
        <img
          src={swanLakeVignette}
          alt="Graceful watercolor swan on water with blooming lotus and lilies"
          className="w-full h-auto drop-shadow-sm select-none pointer-events-none transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Story Timeline */}
      <div className="relative mx-auto mt-6 max-w-sm space-y-12 z-10">
        {acts.map((a, i) => (
          <article
            key={a.act}
            className="flex flex-col items-center gap-5"
          >
            {/* Polaroid Frame with Gold Pin */}
            <div className="reveal relative w-full max-w-[260px] shrink-0">
              {/* Gold Pin */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full bg-gradient-to-b from-[#fde68a] to-[#d4af37] border border-amber-600 shadow-md flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-900" />
              </div>

              {/* Photo Box */}
              <div className="paper paper-gold-rim relative rounded-xl p-3 shadow-md">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-stone-100">
                  <img
                    src={images[i]}
                    alt={a.title}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="pt-3 text-center">
                  <span className="font-cinzel text-[10px] font-bold uppercase tracking-[0.24em] text-[#997a15]">
                    {a.act} · {a.year}
                  </span>
                  <h3 className="mt-1 font-serif-body text-base font-bold text-[#1c232f]">
                    {a.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Narration Text */}
            <div className="reveal max-w-xs text-center px-4" data-delay="0.15">
              <p className="font-serif-body text-xs leading-relaxed text-stone-600 italic">
                “{a.desc}”
              </p>
              {i < acts.length - 1 && (
                <div className="mx-auto mt-8 flex flex-col items-center gap-1.5 opacity-60">
                  <div className="h-2 w-2 rotate-45 border border-[#d4af37] bg-[#fdfcf9]" />
                  <div className="h-6 w-0.5 bg-gradient-to-b from-[#d4af37] to-transparent" />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
