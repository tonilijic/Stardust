---
name: Wasp — Variant C
description: The spec document — the numbered-eyebrow trait pushed into a running RFC structure.
colors:
  blueprint-paper: "#f7f5f0"
  ink-black: "#111111"
  wasp-yellow: "#f5c842"
  gray: "#777777"
  tint: "#fff3cc"
  accent-purple: "#7b42f5"
typography:
  heading:
    fontFamily: "\"JetBrains Mono\", \"IBM Plex Mono\", monospace"
    fontWeight: 600
  body:
    fontFamily: "\"JetBrains Mono\", \"IBM Plex Mono\", monospace"
    fontWeight: 400
    lineHeight: 1.55
  prose:
    fontFamily: "\"IBM Plex Sans\", sans-serif"
    fontWeight: 400
    lineHeight: 1.6
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
---

# Design System: Wasp — Variant C (The Spec Document)

## Overview

**Creative North Star: "The RFC"**

The current homepage already numbers its sections like a table of contents (`01`, `02`, `03`) —
this variant takes that literally and runs with it: the whole page reads as a numbered
specification document (in the spirit of an RFC or the `.wasp.ts` spec files themselves), not a
scrolling marketing page that happens to have numbered badges. Section numbers become a
persistent running margin (`§1.2`, `§2.0`), and short structural labels borrow monospace even in
places body copy is normally sans.

Mode A holds: the captured 5-token system stays, plus the captured (previously undeclared) violet
— repurposed here as a deliberate "annotation" color (like a reviewer's margin comment), distinct
from Variant B's use of the dark surface. Nothing new is introduced; two different already-shipped
elements are treated as deliberate rather than accidental.

**Key Characteristics:**
- Persistent running section numbering in the left margin (`§1`, `§2`, ... ) instead of isolated
  numbered badges per section.
- Violet is repurposed as a consistent "reviewer annotation" accent — margin notes, inline asides
  — never a primary UI color, keeping it clearly secondary and deliberate rather than incidental.
- Structural micro-labels (section kickers, field-style captions) set in monospace even where the
  rest of the copy is sans — a spec-document typographic tell.
- Section dividers are literal horizontal rules with a `§` marker, like a numbered legal/RFC
  document.

## Colors

Same declared core, plus the captured violet repositioned as a named "annotation" accent.

### Primary
- **Wasp Yellow** (`#f5c842`): primary CTA, active section marker.

### Neutral
- **Blueprint Paper** (`#f7f5f0`) / **Ink Black** (`#111111`) / **Gray** (`#777777`) / **Tint**
  (`#fff3cc`): unchanged roles from Variant A.

### Secondary
- **Annotation Violet** (`#7b42f5`): reserved exclusively for margin-note style asides (the "AI"
  callouts, reviewer-comment-style captions) — never body text, never a button fill. Named and
  bounded, unlike the current implementation's unexplained use.

### Named Rules
**The Margin-Note Rule.** Violet appears only as a small, clearly-secondary annotation mark —
never as a primary surface color. If a design needs violet to carry a whole section, that's a
Variant B move, not this one.

## Typography

**Heading / structural label font:** JetBrains Mono throughout, including micro-labels and field
captions that would normally be sans in Variant A.
**Prose font:** IBM Plex Sans, reserved for actual paragraph-length copy only.

### Hierarchy
- **§ Marker** (JetBrains Mono, 0.75rem, weight 600): the running section numbering in the
  margin.
- **Section heading** (JetBrains Mono, weight 600, 2.25rem).
- **Field caption** (JetBrains Mono, 0.75rem, uppercase): labels normally set in sans elsewhere
  (e.g. "STATUS", "SINCE") — a deliberate spec-document typographic tell.
- **Body prose** (IBM Plex Sans, 1rem): the only text set in the humanist face.

## Layout

Same container as Variant A. A persistent `64px` left margin carries the running `§` numbering
down the entire page (not just section tops), like line/clause numbers in a legal or RFC
document. Sections are visually delimited by a horizontal rule + `§` marker rather than by
background-color banding.

## Elevation & Depth

Flat, no shadows — a printed-document read has no elevation system at all; cards are delimited by
rule lines, not shadow.

## Shapes

`0px` radius everywhere, `2px` rule weight for every horizontal divider and the margin's vertical
guide line.

## Components

### Running § Margin (signature component)
A persistent left-margin column printing the current section's clause number (`§1`, `§1.2`,
`§2`), updating as the reader scrolls — replaces the current implementation's isolated per-section
numbered badge.

### Margin Annotation
A small violet-accented aside anchored to the right margin at relevant points (AI-specific
callouts, asides) — bounded use of the previously-undeclared violet, made deliberate.

### Buttons
Same ink-fill primary as Variant A; no rounding.

## Do's and Don'ts

### Do:
- **Do** run the section numbering continuously down the page, not as isolated per-section badges.
- **Do** confine violet strictly to margin-annotation use — bounded, named, deliberate.

### Don't:
- **Don't** let JetBrains Mono creep into actual paragraph prose — it's for structure and labels
  only; body copy stays in IBM Plex Sans for readability.
- **Don't** use violet as a section background or button color — that reads as Variant B, not C.
