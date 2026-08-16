---
name: Wasp
description: Develop full-stack web apps without boilerplate.
colors:
  blueprint-paper: "#f7f5f0"
  ink-black: "#111111"
  wasp-yellow: "#f5c842"
  gray: "#777777"
  tint: "#fff3cc"
  accent-purple-undeclared: "#7b42f5"
  surface-dark-undeclared: "#292435"
typography:
  heading:
    fontFamily: "\"JetBrains Mono\", \"IBM Plex Mono\", monospace"
    fontWeight: 600
  body:
    fontFamily: "\"IBM Plex Sans\", sans-serif"
    fontWeight: 400
    lineHeight: 1.65
  mono:
    fontFamily: "SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
rounded:
  sharp: "0px"
  sm: "3px"
  md: "6px"
spacing:
  unit: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.blueprint-paper}"
    rounded: "{rounded.sm}"
    padding: "6px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.sm}"
    padding: "6px 24px"
---

# Design System: Wasp (current state)

<!-- Benchmarked 2026-08-16 against Wasp's own design blog post:
https://wasp.sh/blog/2026/07/13/why-design-matters-for-a-web-framework
Adjustments made where the live homepage capture diverged from the team's stated design
language are called out inline as "Blog vs. live" notes. -->

## Overview

Wasp's homepage reads as a **developer-tool spec sheet**, not a conventional SaaS marketing page: a cream/parchment ground, blocky sharp-edged panels, a monospace heading face, and literal code blocks used as proof rather than illustration. The dominant motif is the "numbered eyebrow" (`01`, `02`, `03`) applied to sections like a table of contents, reinforcing that this is a *specification* product being described in specification-like prose.

The team's own design post states the intended palette explicitly: **"Three colors, and that's it. Wasp Yellow (#F5C842), Ink Black (#111), and a warm paper tone we call Blueprint Paper (#F7F5F0)."** The live homepage mostly honors this — but also deploys a violet accent and a dark near-black surface that aren't part of the declared three-color system (see Colors → Blog vs. live).

**Key Characteristics:**
- Cream/parchment ground, not white — the team's own "Blueprint Paper," warmer and more "paper" than a typical SaaS landing page.
- Monospace headings — canonically JetBrains Mono per the design post ("backed by IBM Plex Mono" as fallback); the live page currently renders only the IBM Plex Mono fallback.
- Sharp corners as an explicit design law, not just an observed default: **"90° angles, 2px strokes, no rounded-blob softness anywhere."**
- Flat color throughout — no gradients detected anywhere on the page.

## Colors

The team's declared system is deliberately narrow — three colors, full stop — plus a gray and a light tint for supporting UI. The live homepage also carries two colors outside that declared system.

### Primary
- **Wasp Yellow** (`#f5c842`): the one declared brand accent, confirmed identically by both the design blog post and the favicon/logo asset's own fill color. Used for numbered-badge outlines, headline underline/highlight strokes, and the "Stay up to date" CTA band.

### Neutral
- **Blueprint Paper** (`#f7f5f0`): page background, declared by name in the design post — the site's "warm paper tone."
- **Ink Black** (`#111111`): the declared brand text color. **Blog vs. live:** the theme actually renders body/heading text at `#1c1e21` (a Docusaurus default), not the declared `#111` — close but not identical; a redesign target should reconcile to the one true value.
- **Gray** (`#777777`): declared supporting neutral. **Blog vs. live:** the homepage's visible hairline borders instead compute from a Docusaurus token (`#dadde1`), not this declared gray.
- **Tint** (`#fff3cc`): declared light-yellow supporting tint (captured on-page as `--wasp-yl`), used for subtle highlight backgrounds.

### Undeclared (observed on-page, outside the "three colors" system)
- **Violet accent** (`#7b42f5`): used sparingly — the "GET THE BUZZ · AI meets Wasp" nav pill is the clearest instance. Reads as an "AI feature" marker, not a brand color the design post acknowledges.
- **Dark surface** (`#292435`): full-bleed dark panels (testimonials, "Perfect for AI" section) — not pure black, and not mentioned anywhere in the declared palette.

### Named Rules
**The Three-Colors Rule.** Per the team's own words: *"Three colors, and that's it."* Wasp Yellow, Ink Black, and Blueprint Paper are the entire declared system. The violet accent and dark surface panel are real, shipped exceptions to this rule — `direct` should decide whether they're a deliberate "AI feature" carve-out worth keeping or scope creep worth cutting.

## Typography

**Heading Font (declared):** JetBrains Mono, "backed by" IBM Plex Mono as fallback.
**Heading Font (observed live):** only IBM Plex Mono renders — JetBrains Mono was not found loading anywhere in the captured page (no matching `@font-face` or font-family reference in computed styles). Either the live homepage never shipped the declared primary face, or it silently fell back.
**Body Font:** IBM Plex Sans (with sans-serif fallback) — matches the design post exactly, used for docs/blog body copy.
**Code Font:** system monospace stack (SFMono-Regular / Menlo / Monaco) — distinct from the heading mono.

**Character:** A monospace heading face on top of a humanist sans body is the site's central typographic move — it borrows "terminal/spec-file" credibility for headings while keeping paragraph text easy to read at length.

### Hierarchy
- **Heading** (weight 600, JetBrains Mono declared / IBM Plex Mono observed): section titles, numbered eyebrows.
- **Body** (weight 400, IBM Plex Sans, line-height 1.65): paragraph copy, feature descriptions.
- **Code** (weight 400, system mono): literal `.wasp.ts` code samples shown as proof-of-concept.

Exact rendered hero-headline size was not captured (see brand-review.html coverage note) — the theme-default heading scale (`h1`/`h2` at 2rem) is visibly overridden by much larger page-specific hero CSS not exposed as a custom property, so no scale ratio is asserted here.

## Layout

Container max-width `1140px` (theme default, `--ifm-container-width`). Section rhythm is built from a single `1rem` spacing unit (`--ifm-global-spacing`) rather than a wider spacing scale. Full-bleed background bands (gold CTA band, dark testimonial/AI panels) break out of the container to signal section boundaries, alternating with contained cream sections.

## Elevation & Depth

Mostly flat — most surfaces (cards, sections) carry no shadow at rest. A light shadow (`0 3px 5px rgba(0,0,0,.1)`) is available for card elevation, and a slightly stronger "pop" shadow (`0 4px 12px rgba(0,0,0,.06)`) reads as a hover/interactive state rather than a resting one. Heavier shadows (`0 12px 28px …`, `0 5px 40px …`) exist as theme tokens for dropdowns/modals but weren't observed in the captured hero viewport.

### Shadow Vocabulary
- **card-light** (`box-shadow: 0 3px 5px 0px rgba(0,0,0,.1)`): light resting elevation on card-like surfaces.
- **hover-pop** (`box-shadow: 0 4px 12px rgba(0,0,0,.06)`): interactive/hover state.
- **overlay** (`box-shadow: 0 12px 28px 0 rgba(0,0,0,.2), 0 2px 4px 0 rgba(0,0,0,.1)`): dropdowns/tooltips (theme token, not directly observed on-page).

## Shapes

Sharp by explicit design law, not just an observed default. The design post states it directly: **"Sharp corners, visible structure. 90° angles, 2px strokes, no rounded-blob softness anywhere."** The homepage mostly honors this (global radius token `0px`, cards compute to `0px`), though buttons/chips get a slight `3px` softening the "no rounded-blob softness" language doesn't quite license. **Blog vs. live:** the declared stroke width is `2px`; the theme's actual global border-width token is `1px`. The favicon/logo asset itself has a rounded-square corner (`rx=300` on a 1520 viewBox) — a real corner radius on the identity mark, which sits in tension with the "90° angles ... anywhere" claim.

## Components

### Buttons
- **Shape:** sharp, `3px` radius (declared law calls for 0°/90° with no softness — see Shapes tension).
- **Primary:** ink background (declared `#111111` / observed `#1c1e21`) on parchment text, bold weight (700), e.g. "Get Started".
- **Secondary:** transparent fill, hairline border, ink text — outline/ghost style, e.g. "See Documentation".

### Cards
- **Corner Style:** `0px` (square) — matches the sharp-corner law cleanly.
- **Background:** white (`#ffffff`) — slightly brighter than Blueprint Paper, giving cards subtle contrast without a border.
- **Shadow Strategy:** light shadow at rest (see Elevation & Depth), no border observed.

### Navigation
Sticky top bar on the parchment/theme background; wordmark + logo at left, text links (Docs/Blog/Examples/Schedule) center-right, a violet "GET THE BUZZ" AI-feature pill (undeclared color), and a dark primary CTA button ("Get Started") anchoring the right edge.

### Numbered Eyebrow (signature component)
Small bordered numeral badges (`01`, `02`, `03`) prefixing section headings — the page's most distinctive recurring device, turning the whole homepage into a numbered spec document rather than a conventional scroll of marketing sections. Consistent with the design post's framing of illustrations/diagrams as "schematics ... the architecture of your app drawn like a circuit diagram."

## Do's and Don'ts

### Do:
- **Do** treat `#f5c842` (Wasp Yellow, confirmed by both the design post and the favicon/logo) as the one true brand gold.
- **Do** keep headings in a monospace face — it's load-bearing for the "spec/terminal" positioning, not decoration. Prefer shipping the declared JetBrains Mono rather than silently shipping only its IBM Plex Mono fallback.
- **Do** keep surfaces sharp-edged per the team's own "90° angles ... no rounded-blob softness" law.
- **Do** keep the theme light-first — the design post is explicit that this is deliberate ("light, on purpose"), not an oversight, chosen to stay "warm and approachable" rather than default to a dark-mode-industry look.

### Don't:
- **Don't** treat the violet accent or the dark surface panel as core brand colors — neither appears in the team's declared "three colors, and that's it" system; if `direct` keeps them, do so as a named, deliberate exception.
- **Don't** introduce gradients — none exist anywhere in the current implementation; flat color is the entire vocabulary.
- **Don't** assume the shipped `1px` border-width or the logo's rounded corner are the intended standard — the design post declares `2px` strokes and zero corner softness; both are current-implementation drift from stated intent, not confirmed brand facts.
