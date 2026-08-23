import { useEffect, useRef, useState, useCallback } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/motion";
import openingVideo from "@/assets/opening-scene.mp4";
import { Sparkles, Play } from "lucide-react";

export function Opening({
  runKey,
  onDone,
}: {
  runKey: number;
  onDone: () => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const whiteScreenRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [showPlayFallback, setShowPlayFallback] = useState(false);
  const isTransitioningRef = useRef(false);

  // Transition sequence: White screen appears, then slowly dissolves to reveal website
  const triggerTransition = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const { gsap } = getGsap();

    if (prefersReducedMotion()) {
      onDone();
      return;
    }

    const whiteScreen = whiteScreenRef.current;
    const root = rootRef.current;
    const video = videoRef.current;

    if (!whiteScreen || !root) {
      onDone();
      return;
    }

    const tl = gsap.timeline();

    // Step 1: White screen appears smoothly over video inside mobile frame
    tl.to(whiteScreen, {
      opacity: 1,
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        if (video) {
          video.pause();
        }
        // Tell parent that opening has finished so main page is active
        onDone();
      },
    })
      // Step 2: White screen slowly fades out, revealing the website softly
      .to(whiteScreen, {
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
      })
      .set(root, {
        display: "none",
      });
  }, [onDone]);

  // Handle video end
  const handleVideoEnded = () => {
    triggerTransition();
  };

  // Skip button handler
  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerTransition();
  };

  // Video progress tracking
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  // Start playback fallback if needed
  const handleManualPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setShowPlayFallback(false);
      }).catch(() => {});
    }
  };

  // Auto-play muted video on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setShowPlayFallback(false);
        })
        .catch(() => {
          setShowPlayFallback(true);
        });
    }
  }, [runKey]);

  return (
    <div
      ref={rootRef}
      onWheel={(e) => {
        e.stopPropagation();
      }}
      onTouchMove={(e) => {
        e.stopPropagation();
      }}
      className="fixed lg:absolute inset-0 z-50 flex items-center justify-center bg-black overflow-hidden select-none touch-none overscroll-none"
    >
      {/* Opening Scene Video (Always Muted) */}
      <video
        ref={videoRef}
        src={openingVideo}
        playsInline
        autoPlay
        muted
        preload="auto"
        onEnded={handleVideoEnded}
        onTimeUpdate={handleTimeUpdate}
        className="h-full w-full object-cover pointer-events-none"
      />

      {/* Subtle Cinematic Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

      {/* Top Left Branding Overlay */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2 opacity-85">
        <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
        <span className="font-cinzel text-[10px] uppercase tracking-[0.25em] text-amber-100 drop-shadow-md font-semibold">
          Swan Lake
        </span>
      </div>

      {/* Top Right Skip Control */}
      <div className="absolute top-4 right-4 z-20 flex items-center">
        <button
          type="button"
          onClick={handleSkip}
          className="group flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md border border-amber-400/40 px-3 py-1.5 text-[10px] font-cinzel tracking-[0.18em] uppercase text-amber-100 shadow-md hover:bg-black/70 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span>Skip</span>
          <Sparkles className="h-3 w-3 text-amber-300 transition-transform group-hover:rotate-12" />
        </button>
      </div>

      {/* Play Fallback for Autoplay-Restricted Browsers */}
      {showPlayFallback && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/70 backdrop-blur-xs px-4">
          <button
            type="button"
            onClick={handleManualPlay}
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#8B4513] text-white shadow-[0_0_30px_rgba(212,175,55,0.6)] group-hover:scale-110 active:scale-95 transition-all duration-300">
              <Play className="h-7 w-7 fill-current ml-0.5" />
            </div>
            <div className="text-center">
              <p className="font-cinzel text-xs font-bold uppercase tracking-[0.24em] text-amber-200">
                Begin Wedding Story
              </p>
              <p className="mt-1 font-serif-body text-[11px] italic text-stone-300">
                Tap to experience the celebration
              </p>
            </div>
          </button>
        </div>
      )}

      {/* Bottom Progress Line */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-white/15 z-20">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Pure White Transition Curtain: Appears at video end, then slowly dissolves to reveal website */}
      <div
        ref={whiteScreenRef}
        aria-hidden
        className="fixed lg:absolute inset-0 z-[60] bg-white opacity-0 pointer-events-none"
      />
    </div>
  );
}
