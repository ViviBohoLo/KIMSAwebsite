---
name: KIMSA — Trama Andina
description: Consultora climática latinoamericana; degradados difuminados de la paleta corporativa, hover de letras en el nav, contadores tipo odómetro.
colors:
  bone: "#fbf8f1"
  cream: "#f4ede0"
  cream-deep: "#ebe1cc"
  ink: "#2b2a26"
  ink-soft: "#6a685f"
  forest: "#1f4d3a"
  forest-deep: "#143524"
  sage: "#6f8d6b"
  terracotta: "#d96c3c"
  coral: "#e85d4a"
  peach: "#f5b083"
  blush: "#f6d0c2"
  gold: "#e8a23a"
  plum: "#a44d6e"
typography:
  display:
    fontFamily: "Quicksand, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 5.25rem)"
    fontWeight: 300
    lineHeight: 1.03
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Quicksand, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace"
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: "0.16em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "28px"
  3xl: "36px"
  pill: "999px"
spacing:
  section-x: "64px"
  section-y: "130px"
  grid-gap: "20px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.bone}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta}"
---

# Design System: KIMSA — Trama Andina

## Overview

**Creative North Star: "Trama Andina" (Andean Weave)**

KIMSA is a Latin American climate consultancy whose primary audience is
governments and multilateral cooperation agencies (PNUD, GIZ, BID, CAF)
evaluating technical credibility, alongside corporate clients for CarbonBox.
"Trama Andina" translates the compositional logic of Andean weaving — bold
flat color fields, one motif repeated with variation — into the site's
structure, without literal textile texture or ethnic iconography. The system
reuses KIMSA's existing "Cordillera" palette (forest green, terracotta,
crema) exactly as-is; nothing was invented.

The build went through two revisions after user review. The first pass used
flat, hard-cut color blocks between sections (a literal reading of "banded
color fields"); the user found the cut disharmonious and asked for the
diffused, gradient-driven feel of the original design back. The system now
commits to **one continuous gradient per colored surface** — never two flat
colors meeting at a hard edge — with soft blurred `.glow` accents standing
in for the "difuminado" quality the brand voice calls for. This is the
system's single most important invariant.

Two borrowed techniques carry through every page: a **letter-roll hover**
on primary nav links (derived from toroto.com — text splits into
per-character spans with a `text-shadow` duplicate hidden by
`overflow:hidden`; hover translates the real character up, revealing its
duplicate) and an **odometer-style rolling digit counter** for every stat on
the site (derived from anewclimate.com — each digit is a vertical 0–9 strip
that translates to its target value on scroll-into-view).

**Key Characteristics:**
- Every colored section is a gradient, never a flat single-color fill next
  to another flat single-color fill.
- No eyebrow/kicker sits above a heading anywhere on the site — replaced by
  a horizontal `.side-tag` chip beside the heading on desktop, hidden
  entirely below 900px (long labels don't survive being squeezed against a
  stacked-column layout at that width).
- Decorative sequential numbering (Servicio 01/02/03 on parallel, non-
  ordered offerings) was removed site-wide; numbering survives only where
  it represents a real process order (CarbonBox's 3-step "Cómo funciona",
  the psychology course's 4 modules).
- Every stat on the site — hero, StatBand, Impact — uses the same odometer
  mechanic; the same visual promise appears wherever a number appears.

## Colors

Warm terracotta/coral/peach carries the site's "action" register; forest
green carries the institutional/credibility register; crema/bone is the
resting neutral. Plum is reserved for CarbonBox as its own sub-brand.

### Primary
- **Terracotta** (`#d96c3c`): primary action color — CTA buttons, links,
  the warm half of every hero/stat gradient.
- **Forest** (`#1f4d3a`) / **Forest Deep** (`#143524`): institutional
  register — nav-on-dark, dark section grounds, the cool half of every
  hero gradient, and the label-chip background used to guarantee contrast
  wherever a stat number sits on a saturated warm background.

### Secondary
- **Coral** (`#e85d4a`): gradient partner to terracotta; darker/safer than
  peach for any surface carrying legible text.
- **Plum** (`#a44d6e`): CarbonBox's identifying color — its StatBand,
  service card, and area-of-work accents only.

### Tertiary
- **Peach** (`#f5b083`) / **Gold** (`#e8a23a`): decorative accents, glow
  blobs, small emphasis words inside headings (`.em-peach`). Never the base
  of a text-bearing surface — see the Named Rule below.

### Neutral
- **Bone** (`#fbf8f1`): default page background, primary light text on
  dark/saturated surfaces.
- **Cream** (`#f4ede0`) / **Cream Deep** (`#ebe1cc`): alternating light
  section backgrounds for rhythm.
- **Ink** (`#2b2a26`) / **Ink Soft** (`#6a685f`): body text and secondary
  text on light surfaces.

### Named Rules
**The No-Hard-Cut Rule.** Two saturated colors never meet at a straight or
geometric edge. Where a surface changes color, it changes through a
gradient (`linear-gradient`) or a blurred `.glow` accent — never a flat
block abutting another flat block. This was a direct correction from the
first build pass; treat it as load-bearing.

**The Legible-Peach Rule.** `--kimsa-peach` (`#f5b083`) fails 4.5:1 contrast
against bone/crema-toned text at any practical size — it is a light,
warm accent, not a text-bearing background. When a gradient must include
peach, confine it to a `.glow` blur behind other content, never the flat
plane a number or label sits directly on.

## Typography

**Display Font:** Quicksand (with system-ui fallback)
**Body Font:** Quicksand
**Label/Mono Font:** JetBrains Mono

**Character:** Quicksand's soft, rounded geometry carries the brand's
warmth at every weight; JetBrains Mono is reserved narrowly for anything
that is actually data — stat digits, small tracked labels, the
side-tags — so its appearance always signals "this is a measurement," never
"this is technical decoration."

### Hierarchy
- **Display** (300, clamp(2.5rem, 5vw, 5.25rem), 1.03): Page/hero H1s.
  84–96px on desktop service heroes, scales to ~40px on mobile.
- **Headline** (300, 56–64px, 1.1–1.15): Section H2s (`.h2`, `.h2-lg`).
- **Body** (400, 17–20px, 1.55–1.6): Lead paragraphs and body copy, 65–75ch
  measure.
- **Label** (500, 13px, uppercase, 0.16em tracking): `.side-tag`
  horizontal section labels and stat captions — JetBrains Mono only.

### Named Rules
**The No-Kicker Rule.** No small tracked label sits directly above a
heading anywhere on the site. Where a section category is worth keeping,
it moves to a horizontal `.side-tag` beside the heading (desktop only —
see Layout) or is dropped when the heading and breadcrumb already say it.

## Layout

Content is contained to `--kimsa-content-max: 1180px` via `.container`,
with `--kimsa-section-x: 64px` horizontal padding (24px below 900px) and
`--kimsa-section-y: 130px` vertical rhythm (72px below 900px). Most
sections pair a heading column with a content column in a 2-column grid
that collapses to one column below 900px.

The `.side-tag` device (a small horizontal-tb label, JetBrains Mono,
terracotta by default, 13px/0.16em tracking) sits beside — never above — a
heading wherever a category label earns its place. It is `display: none`
below 900px: several labels are full sentences (e.g. "¿Por qué trabajar en
la dimensión psicosocial?") that don't fit on one line beside a heading in
a stacked single-column layout without wrapping awkwardly or overflowing.
This was found and fixed during the mobile pass of this build; do not
remove the media query.

## Elevation & Depth

Flat-by-default with soft ambient shadows for cards standing on a light
ground (`--kimsa-shadow-chip`, `--kimsa-shadow-card`, `--kimsa-shadow-lift`
— all offset + blurred, never a hard/zero-offset shadow). Depth on
saturated color surfaces (hero, StatBand, CourseCTA) comes from the
gradient itself plus blurred `.glow` radial accents, not from shadows.

### Named Rules
**The Ambient-Only Rule.** Shadows are a soft, blurred, offset glow used to
lift a light card off a light ground. They never appear on a saturated
gradient surface — that surface's own depth comes from color, not shadow.

## Shapes

Buttons and pills use `--kimsa-radius-pill` (999px) — unchanged from the
original system; a "sharper/more geometric" direction was considered for
Trama Andina and deliberately rejected, since the confirmed direction
(diffused, harmonious) favors the existing soft pill language over a more
angular one. Cards use `--kimsa-radius-lg` through `--kimsa-radius-3xl`
(20–36px) depending on scale. Small accent dots (`.dot`, replacing the old
numbered-disc pattern on ServiceCard/NumberedCard) are simple 8–9px filled
circles.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 999px`).
- **Primary:** terracotta background, bone text, 14–18px padding scaling
  with `size`.
- **Hover:** `filter: brightness(0.94)` — unchanged from the incumbent
  system; no new hover language was introduced for buttons specifically,
  to keep the letter-roll nav hover as the site's one signature interaction
  rather than diluting it across every clickable element.

### Nav (signature component)
Sits absolute-then-fixed with a translucent blurred background past a
scroll threshold. Every top-level link's text is wrapped at runtime into
per-character `<span>`s (`.letter-roll` / `.letter-roll__char`, defined in
`global.css` because the wrapping happens in JS and must work outside
Astro's component-scoped CSS). Hover slides each character up by `1.2em`
with an 18ms-per-character stagger, revealing a `text-shadow` duplicate
underneath — the toroto.com mechanic, ported to vanilla CSS/JS with no
dependency.

### Odometer stat (signature component)
`OdometerStat.astro` — every digit renders as a `.odometer__digit >
.odometer__strip` containing spans `0`–`9`; an `IntersectionObserver`
translates the strip to the target digit once, respecting
`prefers-reduced-motion` (CSS transition simply becomes instant). Non-digit
characters (`+`, `,`, `.`) render as static spans, so it accepts both
Spanish thousands-separator styles (`13.000+`) and leading-symbol styles
(`+150`) without configuration. Used in the Home hero, `StatBand` (service
pages), reusing the exact same mechanic everywhere a number appears.
On a saturated background, pass `labelChip` — a small forest-deep pill
behind the caption — to guarantee contrast; see the Legible-Peach Rule.

### Side tag
`.side-tag` global utility — horizontal, 13px/0.16em-tracked JetBrains
Mono label, terracotta by default, `currentColor`-overridable via inline
`style`. Sits in a `display:flex; align-items:center; gap:20px` row
beside its heading. Hidden below 900px (see Layout).

### Cards
- **Corner style:** 20–28px radius depending on card type.
- **Background:** flat brand color (ServiceCard) or pastel tint
  (ValueCard/NumberedCard/StatCard).
- **Signature title mark:** a small filled `.dot` (8–9px) precedes the
  title on ServiceCard and NumberedCard, replacing the old "Servicio 01" /
  numbered-disc pattern — see the No-Decorative-Numbering rule below.

### Navigation
See Nav above. Mobile: hamburger toggles a full-width dropdown; anchor
links inside it close the menu on click (needed once the nav's CTA became
an in-page anchor on the homepage).

## Do's and Don'ts

### Do:
- **Do** keep every colored-surface transition a gradient or blurred glow —
  never two flat colors on a hard edge (The No-Hard-Cut Rule).
- **Do** reuse the odometer mechanic for any new stat/number the site
  gains; it is the site's proof-strip vocabulary now, not a one-off hero
  effect.
- **Do** keep numbering only where it represents a real sequence (steps in
  a process, modules in a course); drop it for parallel, non-ordered lists.
- **Do** hide `.side-tag` below 900px; never re-enable it without also
  giving it room clear of whatever sits above it.

### Don't:
- **Don't** put a kicker/eyebrow directly above a heading, in any form —
  confirmed banned across every page in this build.
- **Don't** use `--kimsa-peach` as a text-bearing flat background; it fails
  contrast (The Legible-Peach Rule).
- **Don't** change the pill button shape or the Quicksand/JetBrains Mono
  pairing — both were deliberately kept from the incumbent system.
- **Don't** scatter the letter-roll hover onto buttons or other UI beyond
  primary nav links; it is one authored signature moment, not a global
  hover treatment.
