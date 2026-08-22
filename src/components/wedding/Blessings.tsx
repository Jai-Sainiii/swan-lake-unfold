import { useState } from "react";
import { blessingsSeed } from "@/lib/wedding";

export function Blessings() {
  const [list, setList] = useState(blessingsSeed);
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const current = list[index % list.length];

  return (
    <section id="blessings" className="relative px-6 py-32 sm:py-40">
      <header className="mx-auto max-w-5xl text-center">
        <p className="reveal label-xs">Blessings</p>
        <h2 className="reveal mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-light tracking-[0.08em] text-ink" data-delay="0.1">
          Words from the heart
        </h2>
      </header>

      <div className="reveal mx-auto mt-20 max-w-lg text-center" data-delay="0.15">
        <blockquote key={current.message} className="animate-fade-in">
          <p className="font-display text-2xl font-light italic leading-relaxed text-ink">
            “{current.message}”
          </p>
          <footer className="label-xs mt-6">— {current.author}</footer>
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          {list.map((b, i) => (
            <button
              key={b.message}
              aria-label={`Blessing ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 w-6 transition-colors duration-500 ${
                i === index % list.length ? "bg-ink/60" : "bg-pearl"
              }`}
            />
          ))}
        </div>
      </div>

      <form
        className="reveal paper mx-auto mt-20 flex max-w-lg flex-col gap-6 px-8 py-12 sm:px-12"
        data-delay="0.2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim() || !message.trim()) return;
          setList((prev) => [{ message: message.trim(), author: name.trim() }, ...prev]);
          setIndex(0);
          setName("");
          setMessage("");
          setSent(true);
        }}
      >
        <label className="block">
          <span className="label-xs">Your name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full border-b border-pearl bg-transparent py-2 font-display text-lg text-ink outline-none focus:border-ink"
          />
        </label>
        <label className="block">
          <span className="label-xs">Your message</span>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 w-full resize-none border-b border-pearl bg-transparent py-2 font-display text-lg leading-relaxed text-ink outline-none focus:border-ink"
          />
        </label>
        <button
          type="submit"
          className="label-xs mt-2 border border-pearl bg-powder-soft/50 py-4 text-ink transition-colors duration-500 hover:bg-powder-soft"
        >
          Send blessing
        </button>
        {sent && (
          <p className="animate-fade-in text-center text-xs font-light tracking-[0.18em] text-muted-foreground">
            THANK YOU FOR YOUR WORDS
          </p>
        )}
      </form>
    </section>
  );
}
