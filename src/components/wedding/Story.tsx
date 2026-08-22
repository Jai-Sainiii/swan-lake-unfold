import { acts } from "@/lib/wedding";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";

const images = [story1, story2, story3, story4];

export function Story() {
  return (
    <section id="story" className="relative px-6 py-32 sm:py-40">
      <header className="mx-auto max-w-5xl text-center">
        <p className="reveal label-xs">Our Story</p>
        <h2 className="reveal mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-light tracking-[0.08em] text-ink" data-delay="0.1">
          A ballet in four acts
        </h2>
      </header>

      <div className="mx-auto mt-24 max-w-5xl space-y-32 sm:space-y-44">
        {acts.map((a, i) => (
          <article
            key={a.act}
            className={`flex flex-col items-center gap-10 sm:gap-16 md:flex-row ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="reveal w-full max-w-[280px] shrink-0 md:max-w-[320px]">
              <img
                src={images[i]}
                alt={`${a.act} — ${a.title}`}
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full object-cover"
                style={{ aspectRatio: "4 / 5" }}
              />
            </div>
            <div className="reveal flex-1 text-center md:text-left" data-delay="0.12">
              <p className="label-xs">{a.act}</p>
              <h3 className="mt-4 font-display text-3xl font-light tracking-[0.06em] text-ink sm:text-4xl">
                {a.title}
              </h3>
              <p className="mt-3 font-display text-lg italic text-muted-foreground">
                {a.year}
              </p>
              <p className="mx-auto mt-6 max-w-sm text-sm font-light leading-loose text-muted-foreground md:mx-0">
                {a.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
