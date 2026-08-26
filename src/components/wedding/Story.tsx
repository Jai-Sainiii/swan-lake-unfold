import { useEffect, useRef, useState } from "react";
import story1 from "@/assets/story-1.png";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.png";
import swanStoryFinale from "@/assets/swan-story-finale.png";
import { TornEdge } from "@/components/wedding/TornEdge";
import drapeCornerImg from "@/assets/drape-corner.png";

interface StoryCardItem {
  chapter: string;
  titleMain: string;
  titleScript: string;
  titleSub: string;
  desc: string;
  location: string;
  year: string;
  image: string;
}

const storyMilestones: StoryCardItem[] = [
  {
    chapter: "CHAPTER I",
    titleMain: "The First",
    titleScript: "& serendipity",
    titleSub: "Glance",
    desc: "A rainy evening by the Arabian sea, a serendipitous meeting, and a conversation that effortlessly turned strangers into kindred souls.",
    location: "Mumbai",
    year: "2019",
    image: story1,
  },
  {
    chapter: "CHAPTER II",
    titleMain: "Across Waters",
    titleScript: "& endless",
    titleSub: "Melodies",
    desc: "Two journeys, a thousand shared songs and late-night calls, realizing with every passing season that home was in each other's laughter.",
    location: "Across Cities",
    year: "2021",
    image: story2,
  },
  {
    chapter: "CHAPTER III",
    titleMain: "The Sunrise",
    titleScript: "& sacred",
    titleSub: "Promise",
    desc: "By a quiet mist-kissed lake at sunrise, surrounded by floating lotus petals, a sacred question asked softly and answered with tears of joy.",
    location: "Lake Pichola",
    year: "2024",
    image: story3,
  },
  {
    chapter: "CHAPTER IV",
    titleMain: "Always",
    titleScript: "& forever",
    titleSub: "Together",
    desc: "Surrounded by our beloved families, under the royal Rajasthani skies, we unite our worlds in timeless harmony.",
    location: "The Lake Palace",
    year: "2026",
    image: story4,
  },
];

/**
 * Top Header Filigree Crown Motif
 */
function FiligreeCrown() {
  return (
    <div className="relative mx-auto w-32 h-10 select-none pointer-events-none mb-1.5 opacity-90">
      <svg viewBox="0 0 160 50" fill="none" className="w-full h-full text-[#c49a38]">
        <defs>
          <linearGradient id="filigreeGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eed088" />
            <stop offset="50%" stopColor="#c49a38" />
            <stop offset="100%" stopColor="#8c6a1e" />
          </linearGradient>
        </defs>
        <path
          d="M 80 4 C 77 14, 73 20, 80 28 C 87 20, 83 14, 80 4 Z"
          fill="url(#filigreeGold)"
        />
        <path
          d="M 75 14 C 67 15, 65 24, 76 25 C 77 20, 77 17, 75 14 Z"
          fill="url(#filigreeGold)"
        />
        <path
          d="M 85 14 C 93 15, 95 24, 84 25 C 83 20, 83 17, 85 14 Z"
          fill="url(#filigreeGold)"
        />
        <rect x="74" y="27" width="12" height="2.5" rx="1" fill="url(#filigreeGold)" />
        <path
          d="M 74 28 C 55 24, 40 38, 22 28 C 15 24, 6 30, 2 34"
          stroke="url(#filigreeGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 65 30 C 50 42, 35 34, 25 36"
          stroke="url(#filigreeGold)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <circle cx="22" cy="28" r="2" fill="url(#filigreeGold)" />
        <circle cx="6" cy="30" r="1.5" fill="url(#filigreeGold)" />
        <path
          d="M 86 28 C 105 24, 120 38, 138 28 C 145 24, 154 30, 158 34"
          stroke="url(#filigreeGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 95 30 C 110 42, 125 34, 135 36"
          stroke="url(#filigreeGold)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <circle cx="138" cy="28" r="2" fill="url(#filigreeGold)" />
        <circle cx="154" cy="30" r="1.5" fill="url(#filigreeGold)" />
      </svg>
    </div>
  );
}

/**
 * EXACT VECTOR ROSES FROM USER REFERENCE SHEET
 */

/**
 * Rose 1 (Top-Left Open English Rose from Reference)
 */
function ReferenceOpenRose({ className = "w-28 sm:w-32 h-auto text-[#7a2e2e]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 150" fill="none" className={className}>
      {/* Inner Spiral Bud Core */}
      <path
        d="M 78 52 C 74 44 86 38 94 42 C 102 46 100 58 92 62 C 84 65 76 58 80 50 C 82 46 88 46 90 49"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Surrounding Petal Cups */}
      <path
        d="M 70 50 C 68 36 92 28 108 34 C 120 40 124 54 118 64 C 114 70 102 74 94 72"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 62 42 C 72 24 104 20 124 28 C 138 35 142 50 136 65"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Mid Layer Overlapping Petals */}
      <path
        d="M 54 58 C 48 42 66 32 82 32"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M 64 68 C 55 76 50 92 58 106 C 66 116 86 118 102 110"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 100 74 C 118 72 134 84 130 100 C 126 112 108 120 92 118"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Outer Curved Petal Waves */}
      <path
        d="M 52 64 C 36 74 30 92 38 108 C 45 120 62 128 78 126"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 62 122 C 72 136 98 142 116 134 C 132 126 142 110 138 94"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 128 62 C 144 60 156 72 152 90 C 148 106 136 118 122 124"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 118 36 C 136 38 152 50 148 68"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Rose 2 (Top-Right Full Open Rose with Stem and Veined Leaves from Reference)
 */
function ReferenceStemmedRose({ className = "w-32 sm:w-36 h-auto text-[#7a2e2e]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 190" fill="none" className={className}>
      {/* Top Concentric Petal Crest */}
      <path
        d="M 65 35 C 72 22 98 22 105 35 C 115 28 132 36 135 50 C 140 45 152 52 150 64 C 148 76 136 85 125 88"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 65 35 C 55 28 38 36 35 50 C 30 45 18 52 20 64 C 22 76 34 85 45 88"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center Rose Core */}
      <path
        d="M 72 50 C 70 42 82 38 90 40 C 98 44 96 52 88 56 C 80 58 74 52 78 46"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 64 52 C 60 62 72 70 85 70 C 98 70 110 62 106 52"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Mid Layer Characteristic Curved Cup Shelf */}
      <path
        d="M 42 66 C 45 80 70 86 85 86 C 100 86 125 80 128 66"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 32 80 C 35 98 65 110 85 110 C 105 110 135 98 138 80"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom Main Petal Bowl */}
      <path
        d="M 22 70 C 20 86 35 106 55 114 C 70 120 100 120 115 114 C 135 106 150 86 148 70"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Stem */}
      <path
        d="M 85 118 C 84 135 83 160 88 185"
        stroke="#556e4a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 88 120 C 86 140 85 162 90 185"
        stroke="#556e4a"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Left Leaf with Veins */}
      <g className="text-[#556e4a]">
        <path
          d="M 83 140 C 65 132 45 136 38 148 C 45 160 68 162 82 152 Z"
          fill="#fcfaf5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M 82 150 L 44 146" stroke="currentColor" strokeWidth="1" />
        <path d="M 68 149 L 64 143 M 62 148 L 56 142 M 56 147 L 50 142" stroke="currentColor" strokeWidth="0.8" />
        <path d="M 72 150 L 70 156 M 64 149 L 60 155 M 54 148 L 48 153" stroke="currentColor" strokeWidth="0.8" />
      </g>

      {/* Right Leaf with Veins */}
      <g className="text-[#556e4a]">
        <path
          d="M 87 146 C 105 138 125 142 132 154 C 125 166 102 168 88 158 Z"
          fill="#fcfaf5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M 88 156 L 126 152" stroke="currentColor" strokeWidth="1" />
        <path d="M 102 155 L 106 149 M 108 154 L 114 148 M 114 153 L 120 148" stroke="currentColor" strokeWidth="0.8" />
        <path d="M 98 156 L 100 162 M 106 155 L 110 161 M 116 154 L 122 159" stroke="currentColor" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

/**
 * Rose 3 (Center Pointed Rosebud with Sepals from Reference)
 */
function ReferenceRosebud({ className = "w-16 sm:w-20 h-auto text-[#7a2e2e]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 130" fill="none" className={className}>
      {/* Rosebud Petals Cone */}
      <path
        d="M 50 15 C 44 24 40 40 42 65 C 45 80 55 90 50 95 C 45 90 55 80 58 65 C 60 40 56 24 50 15 Z"
        fill="#fcfaf5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Inner Petal Spiral Overlap */}
      <path
        d="M 50 15 C 52 28 54 48 50 68 C 48 78 44 86 42 90"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M 47 25 C 45 32 46 45 52 55"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Sepals Enclosing the Bud */}
      <g className="text-[#556e4a]">
        {/* Left Long Pointed Sepal */}
        <path
          d="M 50 96 C 40 85 24 75 12 55 C 22 68 38 85 48 96"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right Long Pointed Sepal */}
        <path
          d="M 50 96 C 60 85 76 75 88 55 C 78 68 62 85 52 96"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Calyx Base & Stem */}
        <path
          d="M 45 96 C 45 105 46 112 46 122 C 48 124 52 124 54 122 C 54 112 55 105 55 96 Z"
          fill="#556e4a"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </g>
    </svg>
  );
}

/**
 * Rose 4 (Bottom-Right 3/4 Open Rose on Stem from Reference)
 */
function ReferenceThreeQuarterStemRose({ className = "w-32 sm:w-36 h-auto text-[#7a2e2e]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 190" fill="none" className={className}>
      {/* Top Left Profile Petals */}
      <path
        d="M 45 45 C 50 32 75 28 92 35 C 108 42 115 56 110 70"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center Core */}
      <path
        d="M 68 45 C 72 38 84 38 88 44 C 92 50 88 58 80 60 C 72 62 68 54 72 48"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Side 3/4 Layered Cup Petals */}
      <path
        d="M 35 55 C 28 68 32 85 45 98 C 60 110 90 112 110 102 C 125 94 135 78 130 62"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 45 70 C 55 85 85 92 105 85 C 120 80 132 68 130 55 C 128 42 112 36 102 38"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 108 95 C 125 90 142 75 140 58 C 138 48 128 42 120 44"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Sepals beneath receptacle */}
      <g className="text-[#556e4a]">
        <path d="M 75 106 C 55 115 32 120 18 122 C 34 116 58 110 72 106" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 95 106 C 115 115 138 120 152 122 C 136 116 112 110 98 106" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        {/* Receptacle Calyx */}
        <path d="M 78 106 C 75 115 80 124 85 126 C 90 124 95 115 92 106 Z" fill="#556e4a" stroke="currentColor" strokeWidth="1.4" />
        {/* Stem */}
        <path d="M 85 126 C 88 145 95 165 102 185" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

        {/* Stem Leaf with Veins */}
        <path
          d="M 92 148 C 80 142 64 148 58 158 C 68 168 88 168 96 158 Z"
          fill="#fcfaf5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M 94 156 L 62 152" stroke="currentColor" strokeWidth="0.9" />
        <path d="M 82 155 L 80 148 M 76 154 L 72 148 M 80 155 L 78 162 M 72 154 L 68 160" stroke="currentColor" strokeWidth="0.7" />
      </g>
    </svg>
  );
}

/**
 * ── STORY DIVIDER 1: Open English Rose (Top-Left Model) with Leaf Sprig ──
 */
function StoryDividerRose1() {
  return (
    <div className="relative w-full my-4 flex items-center justify-center z-10 pointer-events-none select-none">
      <div className="flex items-center justify-center gap-3 opacity-95">
        {/* Left Laurel Sprig */}
        <div className="text-[#556e4a] w-12 sm:w-16">
          <svg viewBox="0 0 60 30" fill="none" className="w-full h-auto">
            <path d="M 55 15 C 35 12, 15 20, 5 15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 35 13 C 28 6, 18 8, 15 15 C 22 18, 30 17, 35 13 Z" fill="#fcfaf5" stroke="currentColor" strokeWidth="1" />
            <path d="M 20 15 C 14 8, 6 10, 4 16 C 10 19, 17 18, 20 15 Z" fill="#fcfaf5" stroke="currentColor" strokeWidth="0.9" />
          </svg>
        </div>

        {/* Center Reference Open Rose */}
        <ReferenceOpenRose className="w-24 sm:w-28 h-auto text-[#7a2e2e] drop-shadow-2xs" />

        {/* Right Laurel Sprig */}
        <div className="text-[#556e4a] w-12 sm:w-16 scale-x-[-1]">
          <svg viewBox="0 0 60 30" fill="none" className="w-full h-auto">
            <path d="M 55 15 C 35 12, 15 20, 5 15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 35 13 C 28 6, 18 8, 15 15 C 22 18, 30 17, 35 13 Z" fill="#fcfaf5" stroke="currentColor" strokeWidth="1" />
            <path d="M 20 15 C 14 8, 6 10, 4 16 C 10 19, 17 18, 20 15 Z" fill="#fcfaf5" stroke="currentColor" strokeWidth="0.9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * ── STORY DIVIDER 2: Full Open Stemmed Rose (Top-Right Model) with Side Buds ──
 */
function StoryDividerRose2() {
  return (
    <div className="relative w-full my-4 flex items-center justify-center z-10 pointer-events-none select-none">
      <div className="flex items-center justify-center gap-4 opacity-95">
        <ReferenceRosebud className="w-10 sm:w-12 h-auto text-[#7a2e2e] -rotate-12 opacity-85" />
        <ReferenceStemmedRose className="w-28 sm:w-32 h-auto text-[#7a2e2e] drop-shadow-2xs" />
        <ReferenceRosebud className="w-10 sm:w-12 h-auto text-[#7a2e2e] rotate-12 opacity-85 scale-x-[-1]" />
      </div>
    </div>
  );
}

/**
 * ── STORY DIVIDER 3: 3/4 Profile Stemmed Rose (Bottom-Right Model) ──
 */
function StoryDividerRose3() {
  return (
    <div className="relative w-full my-4 flex items-center justify-center z-10 pointer-events-none select-none">
      <div className="flex items-center justify-center gap-3 opacity-95">
        <ReferenceThreeQuarterStemRose className="w-28 sm:w-32 h-auto text-[#7a2e2e] drop-shadow-2xs" />
      </div>
    </div>
  );
}

/**
 * ── STORY BACKGROUND BOTANICAL MOTIFS & WHIMSICAL DOODLES ──
 * Matching user reference: Eucalyptus vine, breeze arc with falling petals, and floating leaf doodles.
 */
function StoryBackgroundFloraDoodles() {
  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none -z-10 opacity-70">
      {/* 1. Left Eucalyptus Vine with Rounded Drooping Leaves */}
      <svg
        viewBox="0 0 120 400"
        fill="none"
        className="absolute top-16 -left-2 w-28 sm:w-36 h-auto text-[#6b8564]"
      >
        {/* Main curved vine stem */}
        <path d="M 25 0 C 45 80, 8 180, 50 300 C 65 340, 55 380, 48 400" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Rounded Eucalyptus Leaves branching out */}
        <g stroke="currentColor" strokeWidth="1.1">
          {/* Leaf 1 (Top Left) */}
          <path d="M 30 40 C 15 35, 10 50, 20 60 C 28 62, 38 52, 30 40 Z" fill="#f0f5ed" fillOpacity="0.8" />
          {/* Leaf 2 (Right) */}
          <path d="M 34 85 C 55 75, 68 90, 56 102 C 45 108, 32 98, 34 85 Z" fill="#f0f5ed" fillOpacity="0.8" />
          {/* Leaf 3 (Left droop) */}
          <path d="M 22 130 C -2 120, -5 140, 8 152 C 18 155, 26 142, 22 130 Z" fill="#f0f5ed" fillOpacity="0.8" />
          {/* Leaf 4 (Right) */}
          <path d="M 28 175 C 50 162, 60 178, 50 190 C 38 195, 25 186, 28 175 Z" fill="#f0f5ed" fillOpacity="0.8" />
          {/* Leaf 5 (Lower Left) */}
          <path d="M 32 230 C 12 215, 8 238, 22 250 C 32 252, 38 240, 32 230 Z" fill="#f0f5ed" fillOpacity="0.8" />
          {/* Leaf 6 (Lower Right) */}
          <path d="M 45 285 C 72 270, 85 292, 70 306 C 55 312, 40 300, 45 285 Z" fill="#f0f5ed" fillOpacity="0.8" />
        </g>
      </svg>

      {/* 2. Top-Right Breeze Arc with Falling Petals & Flying Bee / Butterfly Sketch */}
      <svg
        viewBox="0 0 200 120"
        fill="none"
        className="absolute top-24 -right-4 w-44 sm:w-56 h-auto text-[#6b8564]"
      >
        {/* Double Dashed & Dotted Flight Breeze Curve */}
        <path
          d="M 10 15 C 60 12, 160 20, 185 65 C 195 90, 160 115, 140 120"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />
        <path
          d="M 5 22 C 55 18, 155 28, 188 72 C 196 95, 164 118, 145 122"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="1.5 3"
          opacity="0.6"
        />

        {/* Falling Loose Petals along the arc */}
        <g fill="#f0f5ed" stroke="currentColor" strokeWidth="1">
          <path d="M 68 28 C 64 22, 74 18, 80 22 C 84 26, 75 32, 68 28 Z" />
          <path d="M 148 42 C 144 34, 156 30, 162 36 C 165 42, 155 48, 148 42 Z" />
          <path d="M 160 88 C 154 82, 166 76, 172 82 C 176 88, 168 94, 160 88 Z" />
        </g>

        {/* Little Flying Bumblebee Sketch */}
        <g transform="translate(90, 48) rotate(-15)" stroke="currentColor">
          {/* Wings */}
          <ellipse cx="6" cy="10" rx="3.5" ry="5" transform="rotate(-30 6 10)" strokeWidth="0.9" fill="#fcfaf5" />
          <ellipse cx="12" cy="10" rx="3.5" ry="5" transform="rotate(30 12 10)" strokeWidth="0.9" fill="#fcfaf5" />
          {/* Body & Antennae */}
          <ellipse cx="9" cy="15" rx="3" ry="4" strokeWidth="1" fill="#7a6230" fillOpacity="0.4" />
          <path d="M 16 11 L 22 8 M 16 13 L 22 14" strokeWidth="0.9" strokeLinecap="round" />
        </g>
      </svg>

      {/* 3. Mid-Right Swirling Single Leaf Doodle */}
      <svg
        viewBox="0 0 80 80"
        fill="none"
        className="absolute top-[48%] -right-2 w-20 sm:w-24 h-auto text-[#6b8564]"
      >
        {/* Swirl Wind Trail */}
        <path d="M 50 20 C 35 15, 15 25, 25 45 C 32 55, 50 50, 42 35" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
        {/* Floating Leaf with Center Vein */}
        <path d="M 38 28 C 48 16, 64 22, 60 38 C 50 48, 32 40, 38 28 Z" fill="#f0f5ed" stroke="currentColor" strokeWidth="1" />
        <path d="M 39 30 L 58 36" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      </svg>

      {/* 4. Lower-Left Branching Foliage Sprig */}
      <svg
        viewBox="0 0 100 250"
        fill="none"
        className="absolute bottom-28 -left-3 w-24 sm:w-32 h-auto text-[#6b8564]"
      >
        <path d="M 20 250 C 40 180, 15 110, 45 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <g stroke="currentColor" strokeWidth="1.1" fill="#f0f5ed" fillOpacity="0.8">
          <path d="M 26 50 C 46 38, 56 52, 46 64 C 35 68, 24 58, 26 50 Z" />
          <path d="M 18 105 C -2 95, -5 115, 8 126 C 18 128, 24 116, 18 105 Z" />
          <path d="M 28 160 C 50 148, 62 165, 50 176 C 38 182, 25 172, 28 160 Z" />
          <path d="M 22 210 C 2 198, 0 220, 14 230 C 24 232, 30 220, 22 210 Z" />
        </g>
      </svg>
    </div>
  );
}

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height;
      const currentProgress = Math.min(
        1,
        Math.max(0, (windowHeight * 0.7 - rect.top) / totalDist)
      );
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative w-full bg-[#faf6ee] px-3 sm:px-4 pt-14 pb-20 text-center select-none overflow-hidden"
    >
      {/* ── BACKGROUND BOTANICAL VINES, LEAF DOODLES & BREEZE ARCS ── */}
      <StoryBackgroundFloraDoodles />

      {/* ── TOP CORNER FLORAL DRAPES (True Top Corners) ── */}
      {/* Top-Right Floral Drape */}
      <img
        src={drapeCornerImg}
        alt="Top Right Floral Drape"
        className="pointer-events-none absolute top-[-35px] right-[-30px] w-32 sm:w-44 h-auto mix-blend-multiply opacity-80 z-20 select-none"
      />

      {/* Top-Left Floral Drape (Flipped 180 Degrees) */}
      <img
        src={drapeCornerImg}
        alt="Top Left Floral Drape"
        className="pointer-events-none absolute top-[-35px] left-[-30px] w-32 sm:w-44 h-auto mix-blend-multiply opacity-80 z-20 select-none -scale-x-100"
      />

      {/* ── Soft Ethereal Blue Watercolor Clouds in Background Corners ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 -left-16 w-64 h-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.18)_50%,transparent_75%)] blur-2xl" />
        <div className="absolute top-12 -right-16 w-72 h-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.15)_50%,transparent_75%)] blur-2xl" />
        <div className="absolute top-[40%] -left-20 w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.25)_0%,rgba(224,242,254,0.1)_50%,transparent_75%)] blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.18)_50%,transparent_75%)] blur-2xl" />
      </div>

      {/* ── SECTION HEADER ── */}
      <header className="relative mx-auto max-w-sm z-20 pt-2 pb-3">
        <div className="reveal">
          <FiligreeCrown />
        </div>

        <h2 className="reveal font-cinzel-dec text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#1c232f] uppercase drop-shadow-2xs">
          Our Story
        </h2>

        <div className="reveal mx-auto mt-2.5 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#c49a38]" />
          <span className="text-[#c49a38] text-[9px]">❖</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#c49a38]" />
        </div>

        <p className="reveal mt-3 font-serif-body text-[13px] sm:text-[14px] leading-relaxed text-stone-700 italic px-4">
          Every love story is beautiful,
          <br />
          but ours is my favorite.
        </p>
      </header>

      {/* ── CENTRAL S-CURVE THREAD & ALTERNATING KEEPSAKE CARDS ── */}
      <div className="relative mx-auto max-w-[380px] sm:max-w-[420px] mt-6 z-10">
        {/* Continuous S-Curve Golden Timeline Path weaving between alternating cards */}
        <div className="pointer-events-none absolute inset-0 w-full h-full -z-10">
          <svg
            viewBox="0 0 380 1600"
            preserveAspectRatio="none"
            fill="none"
            className="w-full h-full text-[#c49a38]"
          >
            {/* Background dashed path */}
            <path
              d="M 220 0 
                 C 320 120, 90 260, 120 400 
                 C 150 560, 340 700, 260 840 
                 C 180 980, 320 1120, 120 1280 
                 C 50 1420, 220 1520, 190 1600"
              stroke="#caa44b"
              strokeWidth="1.4"
              strokeDasharray="5 3.5"
              opacity="0.55"
            />
            {/* Animated gold thread */}
            <path
              d="M 220 0 
                 C 320 120, 90 260, 120 400 
                 C 150 560, 340 700, 260 840 
                 C 180 980, 320 1120, 120 1280 
                 C 50 1420, 220 1520, 190 1600"
              stroke="#d4af37"
              strokeWidth="2"
              strokeDasharray="1600"
              strokeDashoffset={1600 * (1 - scrollProgress)}
              className="transition-[stroke-dashoffset] duration-300 ease-out"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* ── ALTERNATING LEFT / RIGHT KEEPSAKE CARDS ── */}
        <div className="relative flex flex-col space-y-6 sm:space-y-8 z-10 py-4">
          {storyMilestones.map((m, idx) => {
            const isLeft = idx % 2 === 0;
            const tilts = ["-rotate-[2.5deg]", "rotate-[2.5deg]", "-rotate-[2deg]", "rotate-[3deg]"];
            const tiltClass = tilts[idx % tilts.length];
            const alignClass = isLeft ? "self-start ml-0 mr-auto" : "self-end ml-auto mr-0";

            return (
              <div key={m.chapter} className="w-full flex flex-col items-center">
                <article
                  className={`reveal relative w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
                  data-delay={`${idx * 0.1}`}
                >
                  {/* Keepsake Paper Card */}
                  <div
                    className={`relative w-[82%] sm:w-[78%] max-w-[265px] sm:max-w-[285px] rounded-[1.35rem] bg-[#fcfaf5] p-3 sm:p-3.5 border border-[#d6dfd0]/85 shadow-[0_14px_32px_-6px_rgba(90,110,80,0.16),0_3px_8px_rgba(0,0,0,0.04)] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] ${alignClass} ${tiltClass}`}
                  >
                    {/* Top Photo Frame */}
                    <div className="relative w-full aspect-[4/3] rounded-[1rem] overflow-hidden bg-stone-100 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)]">
                      <img
                        src={m.image}
                        alt={`${m.titleMain} ${m.titleSub}`}
                        className="w-full h-full object-cover contrast-[1.02] saturate-[0.96] sepia-[0.05] brightness-[1.01] transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                      {/* Matte Print Paper Grain Finish */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#faf5ea]/10 via-transparent to-[#faf5ea]/25 mix-blend-multiply" />
                    </div>

                    {/* Card Typography Content */}
                    <div className="pt-3.5 pb-2 px-2 text-center flex flex-col items-center">
                      {/* Chapter Label */}
                      <span className="font-cinzel text-[9.5px] sm:text-[10px] font-bold tracking-[0.24em] text-[#b88b2a] uppercase">
                        {m.chapter}
                      </span>

                      {/* Headline: Serif + Script Pairing */}
                      <h3 className="mt-1 flex items-center justify-center flex-wrap gap-x-1.5 font-serif-body text-lg sm:text-xl font-normal text-[#1c232f] leading-snug">
                        <span>{m.titleMain}</span>
                        <span className="font-script text-[#556e4a] text-2xl -my-1 font-normal">
                          {m.titleScript}
                        </span>
                        <span>{m.titleSub}</span>
                      </h3>

                      {/* Location & Year Footer */}
                      <div className="mt-2.5 inline-flex items-center gap-1.5 opacity-80">
                        <span className="h-px w-3 bg-[#a8b89e]" />
                        <span className="font-cinzel text-[8.5px] font-semibold tracking-[0.18em] text-[#556e4a] uppercase">
                          {m.location} · {m.year}
                        </span>
                        <span className="h-px w-3 bg-[#a8b89e]" />
                      </div>
                    </div>
                  </div>
                </article>

                {/* Hand-Drawn Reference Rose Dividers between cards */}
                {idx === 0 && <StoryDividerRose1 />}
                {idx === 1 && <StoryDividerRose2 />}
                {idx === 2 && <StoryDividerRose3 />}
              </div>
            );
          })}
        </div>

        {/* ── Bottom Finale: Watercolor Swan with White Lotus ── */}
        <div className="reveal relative mt-10 sm:mt-12 flex flex-col items-center justify-center z-20" data-delay="0.3">
          <div className="relative w-56 sm:w-64 max-w-full drop-shadow-md select-none pointer-events-none">
            <img
              src={swanStoryFinale}
              alt="Watercolor Swan and White Lotus"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Torn Deckle Paper Divider transitioning into Families Section */}
      <TornEdge position="bottom" variant={2} showGoldFoil={true} className="-bottom-3 z-30" />
    </section>
  );
}
