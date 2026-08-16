---
name: Wasp — Variant A
description: The corrected spec — brand-faithful, ships the declared system literally.
colors:
  blueprint-paper: "#f7f5f0"
  ink-black: "#111111"
  wasp-yellow: "#f5c842"
  gray: "#777777"
  tint: "#fff3cc"
typography:
  heading:
    fontFamily: "\"JetBrains Mono\", \"IBM Plex Mono\", monospace"
    fontWeight: 600
    letterSpacing: "-0.01em"
  body:
    fontFamily: "\"IBM Plex Sans\", sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "\"JetBrains Mono\", SFMono-Regular, Menlo, monospace"
rounded:
  sharp: "0px"
spacing:
  sm: "16px"
  md: "32px"
  section-desktop: "64px"
  section-mobile: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.blueprint-paper}"
    rounded: "{rounded.sharp}"
    padding: "10px 28px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.sharp}"
    padding: "10px 28px"
---

# Design System: Wasp — Variant A (The Corrected Spec)

## Overview

**Creative North Star: "The Ratified Spec"**

Variant A is the strict Mode A read: every color, every font, every corner traces back to
Wasp's own declared design law — nothing the team hasn't already signed off on. Where the
current implementation quietly drifted from its own stated system (a theme-generated link color,
a missing primary font, a 1px border standing in for a declared 2px, an ad-hoc type scale), this
variant closes the gap. Nothing here is invented; it's the current brand, ratified.

The one structural move: the numbered-eyebrow "spec document" idea is taken literally rather than
decoratively. A slim numbered table-of-contents rail runs down the page, replacing some of the
repeated 3-up card grids with more varied per-chapter layouts — so "this page is a specification"
governs structure, not just a badge.

**Key Characteristics:**
- Exactly five tokens: Wasp Yellow, Ink Black, Blueprint Paper, Gray, Tint — no undeclared colors.
- JetBrains Mono actually ships for headings (not just its fallback).
- One real modular scale, sized off the actual hero, not the theme default.
- A running numbered rail replaces repeating the same card-grid shape for every section.

## Colors

The declared three-plus-two system, applied with zero exceptions.

### Primary
- **Wasp Yellow** (`#f5c842`): numbered badges, CTA band, underline accents, active states.

### Neutral
- **Blueprint Paper** (`#f7f5f0`): page ground.
- **Ink Black** (`#111111`): all text and primary-button fill — the literal declared value, not
  the `#1c1e21` theme approximation.
- **Gray** (`#777777`): secondary text, hairline borders, disabled states — replaces the
  Docusaurus `#dadde1` border token everywhere.
- **Tint** (`#fff3cc`): subtle highlight backgrounds (code annotations, active TOC entry).

### Named Rules
**The Ratified-Token Rule.** No color, font, or corner value may exist in the implementation that
isn't traceable to the design blog's declared system. The redesign's entire job is closing that
gap, not adding new ones.

## Typography

**Heading Font:** JetBrains Mono (shipped, with IBM Plex Mono fallback for load failure only)
**Body Font:** IBM Plex Sans

### Hierarchy
- **Display / Hero** (weight 600, 4.5rem desktop / clamp down to 2.5rem mobile): one per page.
- **Section heading** (weight 600, 2.25rem): major section titles.
- **Sub-heading** (weight 600, 1.375rem): card/feature titles.
- **Body** (weight 400, 1rem, line-height 1.6).
- **Label / eyebrow** (weight 600, 0.75rem, letter-spacing 0.08em, uppercase): numbered chapter
  markers.

Ratio ≈1.25 (major third) between Display → Section → Sub-heading → Body, chosen explicitly
rather than inherited from the ad-hoc theme scale (see improvements list item 4).

## Layout

Container `1140px`, section padding `64px` desktop / `32px` mobile (balanced density — the page
has ~10 sections across two audience tracks, past the multi-audience density floor). A `240px`
sticky numbered TOC rail runs down the left on desktop (collapses to a horizontal chapter strip
on mobile), replacing some card-grid sections with two-column chapter layouts instead.

## Elevation & Depth

Flat by declared law. `card-light` (`0 3px 5px rgba(0,0,0,.1)`) is the only shadow in active use;
no gradients anywhere.

## Shapes

Zero corner radius everywhere, including buttons and chips — the "90° angles ... no rounded-blob
softness anywhere" law applied without the current implementation's 3px button exception. Border
width `2px` per the declared stroke standard (not the shipped 1px).

## Components

### Buttons
- **Shape:** `0px` radius, `2px` ink border on secondary.
- **Primary:** ink fill, paper text, bold.
- **Secondary:** transparent, `2px` ink border.

### Numbered Rail (signature component)
A persistent left-edge rail listing every section as a numbered spec chapter (`01 Why Wasp`,
`02 How It Works`, ...), replacing the isolated numbered badges. Active chapter highlighted in
Tint background.

### Cards
`0px` radius, white fill on Blueprint Paper ground, `1px` Gray hairline border (not the shipped
shadow-only treatment) — a spec-table read rather than a soft SaaS-card read.

## Do's and Don'ts

### Do:
- **Do** ship JetBrains Mono, not just its fallback.
- **Do** use the literal `#111111` / `#f5c842` / `#f7f5f0` / `#777777` / `#fff3cc` values —
  never a theme-generated approximation.
- **Do** let the numbered-spec concept restructure the page (the rail), not just badge it.

### Don't:
- **Don't** introduce the violet accent or dark surface panel — Variant A carries zero undeclared
  colors (Variants B/C may explore them).
- **Don't** round any corner, including buttons.
