import { useState } from "react";

type Mode = "ask" | "yes" | "no" | "sent";

export function Rsvp() {
  const [mode, setMode] = useState<Mode>("ask");
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [note, setNote] = useState("");

  return (
    <section id="rsvp" className="relative px-6 py-32 sm:py-40">
      <div className="reveal paper mx-auto max-w-xl px-8 py-16 text-center sm:px-14">
        {mode === "sent" ? (
          <div className="animate-fade-in">
            <p className="label-xs">Thank you</p>
            <p className="mt-6 font-display text-2xl font-light leading-relaxed text-ink">
              Your response has been noted.
            </p>
            <p className="mt-4 text-sm font-light text-muted-foreground">
              We cannot wait to share the day with you.
            </p>
          </div>
        ) : (
          <>
            <p className="label-xs">RSVP</p>
            <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-light leading-tight tracking-[0.06em] text-ink">
              We would love
              <br />
              to have you with us
            </h2>
            <p className="mt-6 font-display text-lg italic text-muted-foreground">
              Will you join us?
            </p>

            {mode === "ask" && (
              <div className="mt-12 flex flex-col items-center gap-4">
                <button
                  onClick={() => setMode("yes")}
                  className="label-xs w-full max-w-xs border border-pearl bg-powder-soft/50 py-4 text-ink transition-colors duration-500 hover:bg-powder-soft"
                >
                  Yes, I'll be there
                </button>
                <button
                  onClick={() => setMode("no")}
                  className="label-xs w-full max-w-xs border border-pearl/60 py-4 transition-colors duration-500 hover:bg-ivory-deep"
                >
                  Regretfully, no
                </button>
              </div>
            )}

            {(mode === "yes" || mode === "no") && (
              <form
                className="mt-12 flex flex-col gap-6 text-left animate-fade-in"
                onSubmit={(e) => {
                  e.preventDefault();
                  setMode("sent");
                }}
              >
                <Field label="Your name">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-b border-pearl bg-transparent py-2 font-display text-lg text-ink outline-none focus:border-ink"
                  />
                </Field>

                {mode === "yes" && (
                  <Field label="Guests">
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full border-b border-pearl bg-transparent py-2 font-display text-lg text-ink outline-none focus:border-ink"
                    >
                      {["1", "2", "3", "4"].map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </Field>
                )}

                <Field label={mode === "yes" ? "A note (optional)" : "A message (optional)"}>
                  <textarea
                    rows={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full resize-none border-b border-pearl bg-transparent py-2 font-display text-lg text-ink outline-none focus:border-ink"
                  />
                </Field>

                <button
                  type="submit"
                  className="label-xs mt-4 border border-pearl bg-powder-soft/50 py-4 text-ink transition-colors duration-500 hover:bg-powder-soft"
                >
                  Send response
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-xs">{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
