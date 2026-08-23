import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  // Synthesize a graceful, ambient romantic lakeside harp & flute melody using Web Audio API
  const startRomanticHarmony = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      isPlayingRef.current = true;

      // Pentatonic / romantic Swan Lake motif frequencies (D minor / F major peaceful lake scale)
      // D4, F4, G4, A4, C5, D5, E5, F5, A5
      const notes = [
        293.66, 349.23, 392.00, 440.00, 523.25, 587.33, 659.25, 698.46, 880.00,
        587.33, 523.25, 440.00, 392.00, 349.23, 293.66, 220.00
      ];
      let step = 0;

      const playPluck = () => {
        if (!isPlayingRef.current || !audioCtxRef.current) return;
        const now = audioCtxRef.current.currentTime;
        const freq = notes[step % notes.length];
        step++;

        // Oscillator 1 (Warm Sine/Triangle Harp tone)
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        // Gentle envelope
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

        // Lowpass filter for soft warm acoustics
        const filter = audioCtxRef.current.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1400, now);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start(now);
        osc.stop(now + 2.3);

        // Background gentle sub-drone / string pad
        if (step % 4 === 0) {
          const droneOsc = audioCtxRef.current.createOscillator();
          const droneGain = audioCtxRef.current.createGain();
          droneOsc.type = "triangle";
          droneOsc.frequency.setValueAtTime(146.83, now); // D3 root
          droneGain.gain.setValueAtTime(0.001, now);
          droneGain.gain.exponentialRampToValueAtTime(0.03, now + 0.4);
          droneGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

          droneOsc.connect(droneGain);
          droneGain.connect(audioCtxRef.current.destination);
          droneOsc.start(now);
          droneOsc.stop(now + 4.0);
        }

        // Schedule next note with slight organic timing variation (approx 650ms - 850ms)
        const nextDelay = 700 + (Math.random() * 200 - 100);
        timerRef.current = window.setTimeout(playPluck, nextDelay);
      };

      playPluck();
    } catch (e) {
      console.warn("Audio playback not supported or blocked", e);
    }
  };

  const stopMusic = () => {
    isPlayingRef.current = false;
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "running") {
      audioCtxRef.current.suspend();
    }
  };

  const toggle = () => {
    if (isPlaying) {
      stopMusic();
      setIsPlaying(false);
    } else {
      startRomanticHarmony();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, []);

  return (
    <div className="fixed lg:absolute top-4 right-4 z-40 flex items-center gap-2">
      <button
        onClick={toggle}
        aria-label={isPlaying ? "Mute ambient lakeside music" : "Play ambient lakeside music"}
        className={`group relative flex items-center gap-2 rounded-full px-3 py-1.5 text-xs backdrop-blur-md transition-all duration-300 shadow-md ${
          isPlaying
            ? "bg-[#2a1b12]/80 text-[#f5e6a3] border border-[#d4af37]/60 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            : "bg-white/80 text-[#4a5568] border border-amber-200/60 hover:bg-white"
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="h-3.5 w-3.5 text-[#d4af37] animate-pulse" />
            <div className="flex items-end gap-[2px] h-3">
              <span className="w-[2px] bg-[#d4af37] animate-[musicRipple_0.8s_ease-in-out_infinite] h-full" />
              <span className="w-[2px] bg-[#d4af37] animate-[musicRipple_1.1s_ease-in-out_infinite_0.2s] h-2/3" />
              <span className="w-[2px] bg-[#d4af37] animate-[musicRipple_0.9s_ease-in-out_infinite_0.4s] h-4/5" />
            </div>
            <span className="font-cinzel text-[10px] tracking-wider uppercase">Lakeside Melody</span>
          </>
        ) : (
          <>
            <Music className="h-3.5 w-3.5 text-amber-700/70" />
            <span className="font-cinzel text-[10px] tracking-wider uppercase text-stone-700">Play Music</span>
          </>
        )}
      </button>
    </div>
  );
}
