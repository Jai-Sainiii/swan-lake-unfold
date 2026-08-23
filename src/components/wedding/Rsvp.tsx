import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { ceremonies } from "@/lib/wedding";

type Mode = "ask" | "yes" | "no" | "sent";

export function Rsvp() {
  const [mode, setMode] = useState<Mode>("ask");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2");
  const [diet, setDiet] = useState("Vegetarian");
  const [selectedEvents, setSelectedEvents] = useState<string[]>(
    ceremonies.map((c) => c.id)
  );
  const [note, setNote] = useState("");

  const toggleEvent = (id: string) => {
    setSelectedEvents((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  return (
    <section id="rsvp" className="relative px-2 py-16 text-center overflow-hidden">
      <div className="reveal paper paper-gold-rim relative mx-auto max-w-sm rounded-2xl p-5 text-center shadow-lg z-10">
        {mode === "sent" ? (
          <div className="animate-fade-in py-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 border border-amber-300 text-[#997a15]">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <p className="mt-4 font-cinzel text-[10px] font-bold uppercase tracking-[0.24em] text-[#997a15]">
              Response Recorded
            </p>
            <h3 className="mt-2 font-cinzel-dec text-xl font-bold text-[#1c232f]">
              Thank You, {name || "Dearest Guest"}!
            </h3>
            <p className="mt-2 font-serif-body text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
              Your RSVP has been gratefully received. We eagerly look forward to welcoming you beside the waters of Udaipur!
            </p>
            <button
              onClick={() => {
                setMode("ask");
                setName("");
                setNote("");
              }}
              className="mt-6 font-cinzel text-[11px] font-semibold text-[#997a15] border-b border-[#997a15] pb-0.5 hover:text-amber-800 cursor-pointer"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <span className="font-cinzel text-xs font-bold tracking-[0.28em] text-[#997a15] uppercase">
              Respond with Pleasure
            </span>
            <h2 className="mt-2 font-cinzel-dec text-xl font-bold text-[#1c232f]">
              Will You Grace Our Celebrations?
            </h2>
            <p className="mt-1 font-serif-body text-[11px] italic text-stone-500">
              Please kindly respond before 20 November 2026
            </p>

            {/* Step 1: Attending Decision */}
            {mode === "ask" && (
              <div className="mt-8 flex flex-col items-center gap-3">
                <button
                  onClick={() => setMode("yes")}
                  className="w-full rounded-xl bg-gradient-to-r from-[#997a15] via-[#b8951d] to-[#997a15] py-3 px-4 font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  <span>Joyfully Accept &amp; Attend</span>
                </button>

                <button
                  onClick={() => setMode("no")}
                  className="w-full rounded-xl border border-amber-300 bg-white/90 py-3 px-4 font-cinzel text-xs font-semibold uppercase tracking-[0.16em] text-stone-700 hover:bg-stone-50 active:scale-95 transition-all cursor-pointer"
                >
                  Regretfully Decline with Love
                </button>
              </div>
            )}

            {/* Step 2: Form */}
            {(mode === "yes" || mode === "no") && (
              <form
                className="mt-6 flex flex-col gap-4 text-left animate-fade-in"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!name.trim()) return;
                  setMode("sent");
                }}
              >
                <div>
                  <label className="block font-cinzel text-[10px] font-bold uppercase tracking-wider text-[#997a15]">
                    Full Name *
                  </label>
                  <input
                    required
                    placeholder="e.g. Advait &amp; Tanya Verma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-amber-200 bg-white/90 px-3 py-2 font-sans text-xs text-[#1c232f] outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block font-cinzel text-[10px] font-bold uppercase tracking-wider text-[#997a15]">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-amber-200 bg-white/90 px-3 py-2 font-sans text-xs text-[#1c232f] outline-none focus:border-[#d4af37]"
                  />
                </div>

                {mode === "yes" && (
                  <>
                    <div className="flex flex-col gap-3.5">
                      <div>
                        <label className="block font-cinzel text-[10px] font-bold uppercase tracking-wider text-[#997a15]">
                          Number of Guests
                        </label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="mt-1 w-full rounded-lg border border-amber-200 bg-white/90 px-3 py-2 font-sans text-xs text-[#1c232f] outline-none focus:border-[#d4af37]"
                        >
                          <option value="1">1 Guest (Solo)</option>
                          <option value="2">2 Guests (Couple)</option>
                          <option value="3">3 Guests (Family)</option>
                          <option value="4">4 Guests (Family)</option>
                          <option value="5+">5+ Guests</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-cinzel text-[10px] font-bold uppercase tracking-wider text-[#997a15]">
                          Dietary Preferences
                        </label>
                        <select
                          value={diet}
                          onChange={(e) => setDiet(e.target.value)}
                          className="mt-1 w-full rounded-lg border border-amber-200 bg-white/90 px-3 py-2 font-sans text-xs text-[#1c232f] outline-none focus:border-[#d4af37]"
                        >
                          <option value="Vegetarian">Pure Vegetarian / Jain</option>
                          <option value="Standard">Traditional Royal Rajasthani</option>
                          <option value="Vegan">Vegan / Gluten Free</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-cinzel text-[10px] font-bold uppercase tracking-wider text-[#997a15] mb-1.5">
                        Events Attending
                      </label>
                      <div className="flex flex-col gap-1.5">
                        {ceremonies.map((c) => {
                          const isChecked = selectedEvents.includes(c.id);
                          return (
                            <label
                              key={c.id}
                              className={`flex items-center gap-2 rounded-lg border p-2 text-xs transition-colors cursor-pointer ${
                                isChecked
                                  ? "border-amber-400 bg-amber-50/80 font-medium text-amber-950"
                                  : "border-amber-200/50 bg-white/60 text-stone-600"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleEvent(c.id)}
                                className="accent-[#997a15]"
                              />
                              <span>{c.name} ({c.date})</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block font-cinzel text-[10px] font-bold uppercase tracking-wider text-[#997a15]">
                    Personal Note to the Couple
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Warm wishes, arrival times or song requests..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-amber-200 bg-white/90 px-3 py-2 font-sans text-xs text-[#1c232f] outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#997a15] to-[#80640f] py-3 px-4 font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer text-center"
                  >
                    Confirm RSVP
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("ask")}
                    className="rounded-xl border border-amber-200 bg-white px-3 py-3 font-cinzel text-xs text-stone-600 hover:bg-stone-50 cursor-pointer"
                  >
                    Back
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </section>
  );
}
