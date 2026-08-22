import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

const shots = [
  { src: g1, alt: "A swan on still water", w: 900, h: 1200, cls: "md:col-start-2 md:col-span-4" },
  { src: g2, alt: "Lilies and a feather on ivory paper", w: 1200, h: 900, cls: "md:col-start-7 md:col-span-5 md:mt-32" },
  { src: g3, alt: "A veil drifting in soft wind", w: 900, h: 1200, cls: "md:col-start-1 md:col-span-4 md:mt-24" },
  { src: g4, alt: "A slow dance in a pale hall", w: 1200, h: 900, cls: "md:col-start-6 md:col-span-6 md:mt-8" },
  { src: g5, alt: "The pavilion reflected in the lake", w: 900, h: 1100, cls: "md:col-start-3 md:col-span-4 md:mt-20" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative px-6 py-32 sm:py-40">
      <header className="mx-auto max-w-5xl text-center">
        <p className="reveal label-xs">Gallery</p>
        <h2 className="reveal mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-light tracking-[0.08em] text-ink" data-delay="0.1">
          Memories beside the lake
        </h2>
      </header>

      <div className="mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-20 md:grid-cols-12 md:gap-10">
        {shots.map((s) => (
          <figure key={s.alt} className={`reveal group mx-auto w-full max-w-sm md:max-w-none ${s.cls}`}>
            <div className="overflow-hidden transition-transform duration-700 ease-out group-hover:-translate-y-2">
              <img
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={s.h}
                loading="lazy"
                className="w-full object-cover"
                style={{ aspectRatio: `${s.w} / ${s.h}` }}
              />
            </div>
            <div
              aria-hidden
              className="h-12 w-full opacity-0 transition-opacity duration-700 group-hover:opacity-40"
              style={{
                backgroundImage: `url(${s.src})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                transform: "scaleY(-1)",
                maskImage: "linear-gradient(to top, transparent, black)",
                WebkitMaskImage: "linear-gradient(to top, transparent, black)",
              }}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
