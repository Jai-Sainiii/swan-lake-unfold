import { useState, useEffect, useRef } from "react";
import { couple } from "@/lib/wedding";
import { TornEdge } from "@/components/wedding/TornEdge";
import ceremonySwanRaw from "@/assets/ceremony-swan-raw.png";

type Attendance = "YES" | "MAYBE" | "NO" | null;

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
  friction: number;
  sparkle: boolean;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  exploded: boolean;
}

/**
 * Ethereal Slow-Motion Background Firecrackers Pyrotechnics System
 * Triggered ONLY after RSVP Acceptance (isSubmitted === true)
 */
function BackgroundFirecrackersAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resizeCanvas();

    const sparks: Spark[] = [];
    const rockets: Rocket[] = [];
    const colors = ["#ffd700", "#ffaa00", "#ff6b81", "#fef08a", "#e2e8f0", "#7dd3fc", "#ffffff"];

    // Launch Fountain Sparks (Slow Motion Anar Pyrotechnics)
    const launchFountainSparks = (originX: number, originY: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.8;
        const speed = 2 + Math.random() * 4; // Slow, graceful speed
        sparks.push({
          x: originX + (Math.random() - 0.5) * 16,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 2.2 + Math.random() * 2.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.65, // Soft background opacity
          decay: 0.006 + Math.random() * 0.009, // Slow fade out
          gravity: 0.08, // Slow drifting gravity
          friction: 0.985,
          sparkle: Math.random() > 0.3,
        });
      }
    };

    // Launch Slow Skyward Rocket
    const launchRocket = (originX: number, targetY: number) => {
      rockets.push({
        x: originX,
        y: canvas.height * 0.85,
        targetY: targetY,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -4.5 - Math.random() * 2.5, // Gentle upward rise
        color: colors[Math.floor(Math.random() * colors.length)],
        exploded: false,
      });
    };

    // Explode Rocket into Slow Ethereal Starburst
    const explodeRocket = (rx: number, ry: number, color: string) => {
      const particleCount = 45;
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
        const speed = 1.2 + Math.random() * 3.5;
        sparks.push({
          x: rx,
          y: ry,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 2.5 + Math.random() * 2.5,
          color: Math.random() > 0.3 ? color : "#ffffff",
          alpha: 0.7,
          decay: 0.005 + Math.random() * 0.008,
          gravity: 0.05,
          friction: 0.985,
          sparkle: true,
        });
      }
    };

    // Initial launch
    const w = canvas.width;
    const h = canvas.height;
    launchRocket(w * 0.15, h * 0.22);
    launchRocket(w * 0.85, h * 0.22);

    // Continuous Fountain + Rockets Interval (Slow Pace)
    const interval = setInterval(() => {
      if (!canvas) return;
      const cw = canvas.width;
      const ch = canvas.height;

      // Anar fountain spray from both sides
      launchFountainSparks(cw * 0.12, ch * 0.82, 10);
      launchFountainSparks(cw * 0.88, ch * 0.82, 10);

      // Gentle rocket launches
      if (Math.random() > 0.45) {
        launchRocket(cw * 0.15 + (Math.random() - 0.5) * 50, ch * (0.2 + Math.random() * 0.25));
        launchRocket(cw * 0.85 + (Math.random() - 0.5) * 50, ch * (0.2 + Math.random() * 0.25));
      }
    }, 450);

    // Main Canvas Render Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & Draw Rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.x += r.vx;
        r.y += r.vy;

        // Draw Soft Rocket Tail Sparks
        sparks.push({
          x: r.x,
          y: r.y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: 0.8 + Math.random() * 1.2,
          size: 1.8,
          color: "#ffc107",
          alpha: 0.5,
          decay: 0.04,
          gravity: 0.03,
          friction: 0.96,
          sparkle: false,
        });

        // Detonation check
        if (r.y <= r.targetY || r.vy >= 0) {
          explodeRocket(r.x, r.y, r.color);
          rockets.splice(i, 1);
        }
      }

      // Update & Draw Firecracker Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.vx *= s.friction;
        s.vy *= s.friction;
        s.vy += s.gravity;
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = s.sparkle && Math.random() > 0.5 ? s.alpha * 0.5 : s.alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full z-0 opacity-50"
    />
  );
}

export function Rsvp() {
  const [attendance, setAttendance] = useState<Attendance>(null);
  const [guestCount, setGuestCount] = useState(2);
  const [note, setNote] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Trigger slow background firecrackers ONLY after RSVP is accepted
  const showFirecrackers = isSubmitted;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendance) return;
    setIsSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="relative w-full bg-[#faf6ee] px-3 sm:px-4 pt-16 pb-24 text-center select-none overflow-hidden min-h-[90vh] flex flex-col justify-between"
    >
      {/* Top Deckle Paper Divider */}
      <TornEdge position="top" variant={1} showGoldFoil={true} className="-top-3 z-30" />

      {/* ── SOFT PALE BLUE WATERCOLOR LAKE ENVIRONMENT ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft Watercolor Lake Splash */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[85%] bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.38)_0%,rgba(224,242,254,0.18)_55%,transparent_85%)] blur-2xl" />

        {/* Floating Lotus Petals on Lake Surface */}
        <svg viewBox="0 0 400 300" fill="none" className="absolute inset-0 w-full h-full opacity-40">
          <ellipse cx="60" cy="180" rx="14" ry="4" fill="#fbcfe8" opacity="0.6" transform="rotate(-15 60 180)" />
          <ellipse cx="340" cy="220" rx="16" ry="5" fill="#fbcfe8" opacity="0.6" transform="rotate(20 340 220)" />
        </svg>

        {/* Interactive Watercolor Ripple Ring on Input Focus */}
        {focusedField && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-[#93c5fd]/50 animate-ping pointer-events-none opacity-40" />
        )}

        {/* Expanding Center Water Ripple on Submission */}
        {isSubmitted && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-[#7dd3fc]/60 animate-ping pointer-events-none duration-1000" />
        )}
      </div>

      {/* ── BACKGROUND FIRECRACKERS (Fired in background after RSVP Accepted) ── */}
      {showFirecrackers && <BackgroundFirecrackersAnimation />}

      {/* ── SECTION HEADER ── */}
      <header className="relative mx-auto max-w-md z-20 pt-4 pb-2">
        <span className="reveal font-cinzel text-[10.5px] sm:text-[11px] font-bold tracking-[0.3em] text-[#b88b2a] uppercase block">
          R S V P
        </span>
        <h2 className="reveal mt-1 font-cinzel-dec text-2xl sm:text-3xl font-bold tracking-[0.1em] text-[#1c232f] uppercase">
          Celebrate With Us
        </h2>
        <p className="reveal mt-2 font-serif-body text-[13px] sm:text-[14px] leading-relaxed text-stone-700 italic px-2">
          "We would love to celebrate this beautiful beginning with you."
        </p>

        {/* Small Champagne Lotus Divider */}
        <div className="reveal mx-auto mt-2.5 flex items-center justify-center gap-2">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#c49a38]" />
          <span className="text-[#c49a38] text-[8px]">❖</span>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#c49a38]" />
        </div>
      </header>

      {/* ── TWO SWANS LAKE COMPOSITION (Glides Closer to Center upon Acceptance) ── */}
      <div className="relative w-full max-w-2xl sm:max-w-3xl mx-auto h-36 sm:h-44 flex items-center justify-center z-20 my-2">
        {/* LEFT SWAN */}
        <div
          className={`absolute top-2 sm:top-4 transition-all duration-1000 ease-out pointer-events-none select-none z-20 ${
            isSubmitted
              ? "left-1/2 -translate-x-[82%] scale-105 sm:scale-115"
              : "left-0 sm:left-4 scale-90 sm:scale-100"
          }`}
        >
          <div className="relative w-28 sm:w-36 h-auto">
            <img
              src={ceremonySwanRaw}
              alt="Left Swan"
              className="w-full h-auto object-contain mix-blend-multiply opacity-95 -scale-x-100"
            />
          </div>
        </div>

        {/* RIGHT SWAN */}
        <div
          className={`absolute top-2 sm:top-4 transition-all duration-1000 ease-out pointer-events-none select-none z-20 ${
            isSubmitted
              ? "right-1/2 translate-x-[82%] scale-105 sm:scale-115"
              : "right-0 sm:right-4 scale-90 sm:scale-100"
          }`}
        >
          <div className="relative w-28 sm:w-36 h-auto">
            <img
              src={ceremonySwanRaw}
              alt="Right Swan"
              className="w-full h-auto object-contain mix-blend-multiply opacity-95"
            />
          </div>
        </div>
      </div>

      {/* ── SUCCESS MESSAGE OR INVISIBLE FORM (Positioned Below the Swans) ── */}
      <div className="relative w-full max-w-3xl mx-auto z-10">
        {isSubmitted ? (
          <div className="relative z-30 flex flex-col items-center justify-center py-8 text-center animate-fade-in max-w-sm mx-auto px-4">
            <p className="font-cinzel text-[10px] sm:text-[10.5px] font-bold tracking-[0.28em] text-[#b88b2a] uppercase">
              RSVP CONFIRMED
            </p>
            <h3 className="mt-2 font-serif-body text-xl sm:text-2xl font-normal text-[#1c232f] italic">
              "We can't wait to celebrate with you."
            </h3>

            <div className="mt-4 flex flex-col items-center gap-1">
              <span className="font-serif-body text-xs sm:text-sm text-stone-600 italic">With love,</span>
              <span className="font-cinzel-dec text-base font-bold text-[#1c232f]">
                {couple.bride} &amp; {couple.groom}
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setAttendance(null);
              }}
              className="mt-6 font-cinzel text-[9.5px] font-semibold text-[#b88b2a] border-b border-[#b88b2a]/60 pb-0.5 hover:text-[#997a15] transition-colors cursor-pointer"
            >
              Update Response
            </button>
          </div>
        ) : (
          /* ── INVISIBLE WATERCOLOR FORM (Positioned Below the Swans) ── */
          <form
            onSubmit={handleFormSubmit}
            className="relative z-30 w-full max-w-xs sm:max-w-sm mx-auto px-4 flex flex-col items-center gap-6 pt-2 pb-6 transition-opacity duration-500"
          >
            {/* WILL YOU BE JOINING US? */}
            <div className="w-full text-center pt-1">
              <label className="block font-cinzel text-[9.5px] sm:text-[10px] font-bold tracking-[0.24em] text-[#997a15] uppercase mb-2.5">
                WILL YOU BE JOINING US?
              </label>
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                {(["YES", "MAYBE", "NO"] as Attendance[]).map((val) => {
                  const isSelected = attendance === val;
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAttendance(val)}
                      className={`font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] transition-all cursor-pointer py-1 px-3 rounded-full ${
                        isSelected
                          ? "text-[#1c232f] border border-[#d4af37] bg-[#fdfcf9]/85 shadow-2xs scale-105"
                          : "text-stone-500 hover:text-[#997a15]"
                      }`}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* NUMBER OF GUESTS */}
            {attendance === "YES" && (
              <div className="w-full text-center animate-fade-in">
                <label className="block font-cinzel text-[9.5px] sm:text-[10px] font-bold tracking-[0.24em] text-[#997a15] uppercase mb-2">
                  NUMBER OF GUESTS
                </label>
                <div className="inline-flex items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    className="w-7 h-7 rounded-full border border-[#caa44b]/60 flex items-center justify-center font-serif text-lg text-[#997a15] hover:bg-[#fbf7ee] active:scale-95 transition-all cursor-pointer"
                  >
                    −
                  </button>
                  <span className="font-cinzel text-base font-bold text-[#1c232f]">
                    {guestCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
                    className="w-7 h-7 rounded-full border border-[#caa44b]/60 flex items-center justify-center font-serif text-lg text-[#997a15] hover:bg-[#fbf7ee] active:scale-95 transition-all cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* OPTIONAL NOTE */}
            <div className="w-full text-center">
              <input
                type="text"
                placeholder="A warm wish or note (optional)"
                value={note}
                onFocus={() => setFocusedField("note")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-transparent border-b border-[#caa44b]/30 focus:border-[#d4af37] py-1 px-2 text-center font-serif-body text-xs text-[#1c232f] placeholder:text-stone-400 placeholder:italic outline-none transition-colors"
              />
            </div>

            {/* SEND RSVP BUTTON */}
            <div className="pt-3">
              <button
                type="submit"
                className="border border-[#caa44b]/80 bg-[#fdfcf9]/85 backdrop-blur-[1px] hover:bg-[#fbf7ee] px-8 py-2.5 rounded-full font-cinzel text-xs tracking-[0.22em] text-[#997a15] font-bold shadow-2xs hover:shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                SEND RSVP
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Bottom Deckle Paper Divider transitioning into Finale / Footer */}
      <TornEdge position="bottom" variant={2} showGoldFoil={true} className="-bottom-3 z-30" />
    </section>
  );
}
