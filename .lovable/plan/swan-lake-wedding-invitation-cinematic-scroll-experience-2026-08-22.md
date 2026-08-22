# Swan Lake Wedding Invitation — Cinematic Scroll Experience

A minimal, editorial, scroll-driven digital wedding invitation. It opens as a physical invitation, then that same paper expands into one continuous canvas the guest scrolls through.

Placeholder couple: **Anaïs & Rohan**, 12 December 2026, The Lake Pavilion.
RSVP and Blessings are front-end only (elegant confirmation, nothing stored). Gallery and story photos are AI-generated in the Swan Lake palette.

## Visual identity

- Palette (all as semantic tokens in `src/styles.css`, oklch): warm ivory base, powder blue, pearl silver, muted sage, a whisper of lavender.
- Type: high-contrast display serif (Cormorant Garamond) for names/headings; quiet sans (Jost) for dates, labels, buttons. Loaded via `<link>` in the root route.
- Motion: 0.6–1.5s for UI, 2–4s for cinematic beats; power2/power3 easing; movement 10–80px; opacity and micro-blur do most of the work. No bounce, no 3D, no WebGL.

## Structure

One long page at `/`, composed of section components, with a fixed background canvas layer behind everything that morphs as you scroll (ivory → powder-blue wash → water reflection → botanical → paper → lake). Sections never carry their own hard backgrounds.

```text
00 Opening      envelope settles, ribbon, seal, card emerges, names revealed,
                card expands to fill viewport → becomes the Welcome background
01 Welcome      couple names, invitation line, secondary countdown (days/hours/min)
02 Our Story    four acts (Beginning, Journey, Promise, Forever) with year + photo
03 Gallery      offset editorial layout, hover lift + soft reflection; mobile = single column
04 Families     two stationery cards entering from opposite sides + connecting ornament
05 Ceremonies   ceremony chapters: title, date, time, venue, expandable detail, VIEW LOCATION
06 RSVP         floating ivory card; YES ripples open an inline form; graceful decline path
07 Blessings    write a blessing; existing blessings shown one at a time as paper notes
08 Venue        illustrated pavilion silhouette, address, timing, VIEW LOCATION link
09 Finalé       ivory drifts to pale blue lake, two swans glide, closing line, REPLAY INVITATION
```

## Section transitions

Each boundary inherits from the one before it — the background layer cross-fades element opacities as scroll progresses, rather than swapping backgrounds. Content also fades/blurs in on entry, so the seams sit between sections, not at them.

## Technical notes

- TanStack Start (existing stack), TypeScript, Tailwind v4 tokens. Lenis for smooth scroll, GSAP + ScrollTrigger for scroll-linked timelines, all disabled/simplified under `prefers-reduced-motion`.
- Background world built from layered SVG/CSS (gradients, soft water ripple, feather, lilies, swan silhouettes) — no particle systems.
- Opening animation runs on a lightweight CSS/GSAP timeline with no image dependency so it never blocks first paint; a skip affordance appears after a moment and replays via the Finalé button.
- Photos generated as WebP/JPG into `src/assets`, lazy-loaded below the fold with explicit aspect ratios to avoid layout shift.
- Mobile is composed separately: single column, one focal element, shorter motion distances, larger touch targets.
- SEO: unique `head()` title/description/og/twitter on the index route.

## Not included

- No database, no stored RSVPs or blessings, no admin view. If you later want real submissions, that is a Lovable Cloud addition on top of the same UI.
