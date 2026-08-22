# Swan Lake Invitation

PRD — Minimal Swan Lake Wedding Invitation

1. Overall Product Concept

Product

A minimal, cinematic, scroll-based digital wedding invitation inspired by Swan Lake and ballet.

The experience should feel like a beautifully designed physical wedding invitation coming to life, rather than a conventional wedding website.

Core visual idea

The website begins with an invitation-opening animation.

The invitation then doesn't disappear.

Instead, the visual elements from the opening expand and blend into the first section's background.

From there, the user continuously scrolls through one connected visual experience.

OPENING ANIMATION

       ↓

Invitation opens

       ↓

Background expands

       ↓

SECTION 1

Welcome + Countdown

       ↓

smooth blend

       ↓

SECTION 2

Our Story

       ↓

smooth blend

       ↓

SECTION 3

Gallery

       ↓

smooth blend

       ↓

SECTION 4

Families

       ↓

smooth blend

       ↓

SECTION 5

Ceremonies

       ↓

smooth blend

       ↓

SECTION 6

RSVP

       ↓

smooth blend

       ↓

SECTION 7

Blessings

       ↓

smooth blend

       ↓

FINAL SECTION

Thank You / Closing

2. Design Philosophy

The website must follow five principles.

1. Minimal

No unnecessary decorative elements.

Every visual element must have a purpose.

2. Editorial

The website should feel like a luxury wedding invitation / fashion editorial, not a traditional website.

3. Continuous

Sections should feel like parts of the same canvas.

Avoid:

Section → hard background change → section

Prefer:

water → mist → paper → water → paper

with overlapping visual elements.

4. Soft motion

Animations should feel:

graceful

slow

natural

elegant

lightweight

5. 2D only

No:

3D models

3D environments

realistic 3D textures

excessive particle systems

heavy WebGL scenes

Use:

SVG

PNG/WebP

CSS

GSAP

subtle canvas effects where necessary

3. Visual Identity

Color Palette

Primary

Ivory / Warm White

Main background.

Secondary

Powder Blue

Water and atmospheric elements.

Supporting

Pearl Silver

Borders and tiny accents.

Accent

Muted Sage

Botanical elements.

Optional

Very Soft Lavender

Used extremely sparingly.

4. Typography

Use two complementary typefaces.

Display Typeface

Elegant high-contrast serif.

Used for:

Couple names

Section headings

Important statements

Quotes

Supporting Typeface

Minimal modern sans-serif.

Used for:

Dates

Locations

Descriptions

Buttons

Navigation

Typography should provide much of the visual sophistication because the overall design is intentionally minimal.

5. Global Background System

There should be one continuous visual world, not independent backgrounds.

The base canvas remains:

warm ivory

Different sections introduce extremely subtle visual layers.

Example:

IVORY

 ↓

powder-blue wash

 ↓

water reflection

 ↓

botanical detail

 ↓

ivory paper

 ↓

soft blue atmosphere

The transitions should happen gradually while scrolling.

Background elements

Possible recurring elements:

soft water

subtle reflections

faint mist

delicate feathers

thin botanical illustrations

lilies

paper edges

soft shadows

Never allow these elements to overpower the content.

6. Section Structure

SECTION 00 — Opening Animation

Purpose

Create the first emotional impression.

Experience

The user initially sees a closed wedding invitation.

Blank ivory environment

        ↓

Invitation enters

        ↓

Envelope settles

        ↓

Subtle ribbon movement

        ↓

Seal / closure animation

        ↓

Envelope opens

        ↓

Invitation card emerges

        ↓

Names are revealed

The opening should feel like:

opening a luxury physical invitation.

Critical transition

The invitation card then expands beyond its original boundaries.

The paper/background becomes the Welcome section.

For example:

Invitation card

       ↓

card expands

       ↓

ivory fills viewport

       ↓

powder-blue lake atmosphere appears

       ↓

WELCOME

There should be no obvious "page load → website" moment.

The animation itself becomes the website.

SECTION 01 — Welcome + Countdown

This is the first actual scroll section.

Hero content

Together with their families

[BRIDE NAME]

        &

[GROOM NAME]

invite you to celebrate

their wedding

Background

The opening invitation has transformed into:

a soft lake / paper environment.

A very subtle swan or feather can move through the background.

Countdown

Countdown should be integrated into the Welcome section instead of getting its own full section.

Example:

THE COUNTDOWN

  128          04          32

 DAYS        HOURS       MINUTES

Keep it visually secondary to the couple names.

Scroll transition

As the user scrolls:

countdown fades

water/ripple becomes more visible

story content emerges

SECTION 02 — Our Story

Concept

The story as a ballet in four acts.

ACT I

The Beginning

ACT II

The Journey

ACT III

The Promise

ACT IV

Forever

Each act contains:

date/year

short text

optional photograph

Animation

As the user scrolls:

ACT I

    ↓

fade + slight upward movement

    ↓

water ripple

    ↓

ACT II

No dramatic transitions.

The background continues from Section 01.

SECTION 03 — Gallery

Concept

Memories floating beside the lake.

Photographs should not simply appear as a grid.

Use a controlled editorial layout.

Example:

          IMAGE

IMAGE                    IMAGE

          IMAGE

with large amounts of whitespace.

Interaction

Desktop:

subtle hover movement

image rises slightly

reflection appears

surrounding images subtly shift

Mobile:

vertical sequence

one dominant image at a time

swipe/scroll interaction

Transition

Images gradually fade into the next section's background.

SECTION 04 — Our Families

Concept

Two families, one beginning.

Minimal composition:

BRIDE'S FAMILY              GROOM'S FAMILY

      CARD                        CARD

             BRIDE × GROOM

Cards should feel like editorial stationery, not UI cards.

Visual treatment

ivory

thin silver border

tiny botanical ornament

subtle powder-blue shadow

Animation

Cards gently enter from opposite sides.

The connecting ornament appears afterward.

SECTION 05 — Ceremonies

Concept

Instead of an event dashboard, present the celebrations as ballet performances / chapters.

Example:

THE CEREMONY

12 DECEMBER

4:00 PM

THE GARDEN PAVILION

Then:

THE RECEPTION

12 DECEMBER

7:00 PM

THE GRAND HALL

Interaction

The user can:

scroll through ceremonies

tap a ceremony

view details

open venue directions

Background

The lake atmosphere gradually transitions into a soft garden/venue environment.

But keep the same:

ivory + powder blue + muted greenery

palette.

SECTION 06 — RSVP

Concept

A formal invitation within the invitation.

The section introduces a floating ivory RSVP card.

WE WOULD LOVE

TO HAVE YOU WITH US

Will you join us?

[ YES, I'LL BE THERE ]

[ REGRETFULLY, NO ]

Animation

The card gently rises into view.

On YES:

button

 ↓

soft ripple

 ↓

card expands

 ↓

RSVP form appears

No fireworks or excessive celebration.

Keep it elegant.

SECTION 07 — Blessings

Concept

Words From The Heart

An ivory paper/card appears within the soft lake environment.

Form

YOUR NAME

YOUR MESSAGE

[ SEND BLESSING ]

Existing blessings

Display one message at a time.

"May your journey together

be filled with love."

— Emily

Messages can appear as subtle paper notes or lily-petal-inspired cards.

Animation

New blessing:

soft fade

+

slight upward movement

+

paper settling

SECTION 08 — Venue / Location

If venue information is important enough to separate from Ceremonies, this can become the final practical section.

Concept

The Lake Pavilion

Show:

venue name

date

address

timing

map

directions

Visual

Minimal illustrated venue silhouette.

Avoid embedding a large generic map as the main visual.

Use:

VIEW LOCATION

as the primary action.

SECTION 09 — Finalé

The website should not simply end with a footer.

It should conclude the story.

Visual

The ivory background gradually gains a pale blue tint.

A calm lake appears.

Two white swans slowly move across it.

Minimal typography:

And so, their next chapter begins.

Then:

[BRIDE NAME] & [GROOM NAME]

Thank you for being part of our story.

Final action

REPLAY INVITATION

This allows the guest to experience the opening animation again.

7. Global Scroll Experience

The website should behave like one long cinematic canvas.

┌──────────────────────┐

│                      │

│     OPENING          │

│                      │

└──────────┬───────────┘

           ↓

┌──────────────────────┐

│      WELCOME         │

│      COUNTDOWN       │

└──────────┬───────────┘

           ↓

┌──────────────────────┐

│      OUR STORY       │

└──────────┬───────────┘

           ↓

┌──────────────────────┐

│       GALLERY        │

└──────────┬───────────┘

           ↓

┌──────────────────────┐

│       FAMILIES       │

└──────────┬───────────┘

           ↓

┌──────────────────────┐

│     CEREMONIES       │

└──────────┬───────────┘

           ↓

┌──────────────────────┐

│        RSVP          │

└──────────┬───────────┘

           ↓

┌──────────────────────┐

│      BLESSINGS       │

└──────────┬───────────┘

           ↓

┌──────────────────────┐

│       VENUE          │

└──────────┬───────────┘

           ↓

┌──────────────────────┐

│       FINALE         │

└──────────────────────┘

8. Section Transition System

This is one of the most important parts of the PRD.

Every section must visually inherit something from the previous section.

Example

Opening

Ivory invitation paper.

↓

Welcome

Paper becomes ivory background.

↓

Countdown

Powder-blue reflection appears.

↓

Story

Reflection becomes flowing water.

↓

Gallery

Water becomes image reflections.

↓

Families

Water fades into ivory paper.

↓

Ceremonies

Paper gains subtle botanical elements.

↓

RSVP

Botanical elements fade into stationery.

↓

Blessings

Stationery becomes handwritten paper.

↓

Finale

Paper fades back into lake atmosphere.

This creates the feeling that the entire website is one continuously transforming invitation.

9. Animation Rules

Timing

Prefer:

0.6–1.5 seconds

for UI transitions.

Longer:

2–4 seconds

for major cinematic transitions.

Easing

Use primarily:

power2.out

power3.out

power2.inOut

custom cubic-bezier easing

Avoid elastic/bounce easing.

Movement

Keep most movement within:

10–80px

rather than huge screen-wide movements.

Opacity

Use opacity transitions heavily.

Blur

Use extremely subtle blur-to-sharp reveals.

Scroll

Use Lenis for smooth scrolling.

Use GSAP ScrollTrigger for scroll-linked animation.

10. Responsive Design

Desktop and mobile should share the same art direction, not necessarily the same composition.

Desktop

Can use:

wider compositions

multiple photographs

larger whitespace

horizontal storytelling

subtle side elements

Mobile

Use:

single-column composition

one focal element

reduced decoration

simplified animations

larger touch targets

shorter animation distances

Do not scale the desktop composition down.

The mobile version should be deliberately composed for the viewport.

11. Technical Direction

Frontend

React / Next.js

TypeScript

GSAP

ScrollTrigger

Lenis

CSS/SVG

Responsive image loading

Animation

Prefer:

CSS + SVG + GSAP

over WebGL.

Assets

Use optimized:

WebP

AVIF where appropriate

SVG for decorative elements

compressed transparent PNG only when necessary

Performance

The visual richness must not come at the expense of:

LCP

CLS

INP

mobile FPS

initial JavaScript payload

The opening animation should be especially optimized because it is the first interaction and must not delay the actual invitation.

12. Final Experience Goal

The user should feel:

“I didn't open a website. I opened an invitation.”

And as they scroll:

“The invitation is transforming into the story of the wedding.”

That should be the central design principle for the entire project.

references:-
1. https://union-loom-web.lovable.app

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://swan-lake-unfold.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3fcef933-00d4-4959-bd99-b05be93fae9d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
