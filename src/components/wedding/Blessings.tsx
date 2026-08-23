import { useState } from "react";
import { blessingsSeed, couple } from "@/lib/wedding";
import { Heart, MessageCircle } from "lucide-react";
import { ScriptWatermark, BotanicalCorner } from "@/components/wedding/Decorations";

export function Blessings() {
  const [list, setList] = useState(blessingsSeed);
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const current = list[index % list.length] ?? list[0]!;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const newBlessing = {
      message: message.trim(),
      author: name.trim(),
      time: "Just now",
    };
    setList((prev) => [newBlessing, ...prev]);
    setIndex(0);
    setName("");
    setMessage("");
    setSent(true);
  };

  return (
    <section id="blessings" className="relative px-2 py-16 text-center overflow-hidden">
      {/* Romantic Script Background Watermark */}
      <ScriptWatermark text="Warm Blessings" className="top-4 right-2" rotate="6deg" opacity="0.06" />
      <ScriptWatermark text="Love & Prayers" className="bottom-6 left-2" rotate="-5deg" opacity="0.06" />

      <header className="relative mx-auto max-w-sm z-10">
        <div className="reveal inline-block">
          <span className="font-cinzel text-xs font-bold tracking-[0.28em] text-[#997a15] uppercase">
            Shower of Blessings
          </span>
          <h2 className="mt-2 font-cinzel-dec text-2xl font-bold tracking-wide text-[#1c232f]">
            Words from Loved Ones
          </h2>
          <div className="mx-auto mt-2.5 h-0.5 w-14 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-2 font-serif-body text-xs text-stone-600">
            Leave your warm wishes and prayers for {couple.bride} &amp; {couple.groom}
          </p>
        </div>
      </header>

      {/* Featured Blessing Carousel */}
      <div className="reveal relative mx-auto mt-10 max-w-sm text-center z-10" data-delay="0.15">
        <div className="paper paper-gold-rim relative rounded-2xl p-5 shadow-md">
          <BotanicalCorner className="top-2 left-2" />
          <BotanicalCorner className="top-2 right-2" flip />

          <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-rose-600 border border-rose-200">
            <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
          </div>

          <blockquote key={current.message} className="animate-fade-in">
            <p className="font-serif-body text-base font-normal italic leading-relaxed text-[#1c232f]">
              “{current.message}”
            </p>
            <footer className="mt-4 flex items-center justify-center gap-2">
              <span className="font-cinzel text-[11px] font-bold text-[#997a15]">
                — {current.author}
              </span>
              <span className="text-[9px] font-sans text-stone-400">
                · {current.time}
              </span>
            </footer>
          </blockquote>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {list.map((b, i) => (
              <button
                key={b.author + i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View blessing ${i + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === index % list.length
                    ? "w-5 bg-[#997a15]"
                    : "w-1.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Write a Blessing Form */}
      <div className="reveal relative mx-auto mt-6 max-w-sm text-left z-10" data-delay="0.2">
        <div className="paper rounded-2xl p-5 shadow-xs border border-amber-200/50">
          <h3 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#1c232f] text-center">
            Leave a Sacred Blessing
          </h3>

          <form onSubmit={handleSend} className="mt-4 space-y-3">
            <div>
              <label htmlFor="blessing-name" className="font-cinzel text-[10px] font-semibold uppercase text-stone-600">
                Your Name
              </label>
              <input
                id="blessing-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Anand & Priya Mehta"
                className="mt-1 w-full rounded-xl border border-amber-300/60 bg-white/90 px-3 py-2 text-xs text-stone-800 placeholder-stone-400 shadow-2xs focus:border-[#997a15] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="blessing-msg" className="font-cinzel text-[10px] font-semibold uppercase text-stone-600">
                Your Words of Love
              </label>
              <textarea
                id="blessing-msg"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your wishes for the couple..."
                className="mt-1 w-full rounded-xl border border-amber-300/60 bg-white/90 px-3 py-2 text-xs text-stone-800 placeholder-stone-400 shadow-2xs focus:border-[#997a15] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] py-2.5 px-4 font-cinzel text-xs font-bold uppercase tracking-widest text-white shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Send Blessing</span>
            </button>

            {sent && (
              <p className="font-serif-body text-xs italic text-emerald-700 text-center animate-fade-in">
                Thank you! Your blessing has been added to our memory album.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
