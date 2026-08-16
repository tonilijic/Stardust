---
name: Wasp — Variant B
description: The schematic — the blueprint/circuit-diagram trait pushed as the page's structure.
colors:
  blueprint-paper: "#f7f5f0"
  ink-black: "#111111"
  wasp-yellow: "#f5c842"
  gray: "#777777"
  tint: "#fff3cc"
  surface-dark: "#292435"
typography:
  heading:
    fontFamily: "\"JetBrains Mono\", \"IBM Plex Mono\", monospace"
    fontWeight: 600
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
---

# Design System: Wasp — Variant B (The Schematic)

## Overview

**Creative North Star: "The Circuit Diagram"**

The design blog names the intended illustration language directly: *"schematics: boxes,
connectors, annotations, the architecture of your app drawn like a circuit diagram."* The current
homepage honors this in exactly one section (the "How It Works" IR diagram). Variant B amplifies
this single captured trait into the page's dominant structural device — every section gets
connector lines, corner-bracket annotations, and dotted measurement guides, as if the whole
homepage were one continuous schematic of the product.

Still Mode A: every color is from the captured palette (this variant is the one that keeps the
observed dark surface as the schematic's "canvas" background, rather than treating it as an
inconsistency to remove), every font is the declared deck. What changes from Variant A is
structural amplification of one real, captured trait — not new tokens.

**Key Characteristics:**
- Every section boundary is a drawn corner-bracket, not a plain divider.
- Section transitions carry thin connector lines (like PCB traces) linking related concepts.
- The dark surface (`#292435`) is reframed as the schematic's "canvas," not an inconsistency —
  used for any section acting as a technical diagram, on top of the paper ground elsewhere.
- Annotation labels (small monospace captions with leader lines) appear on hero and feature art.

## Colors

Same declared core as Variant A, plus the captured (previously undeclared) dark surface —
repositioned here as a deliberate "blueprint canvas," not accidental drift.

### Primary
- **Wasp Yellow** (`#f5c842`): connector-line highlights, active annotation markers.

### Neutral
- **Blueprint Paper** (`#f7f5f0`): default page ground.
- **Ink Black** (`#111111`): text, line-work.
- **Gray** (`#777777`): secondary annotation text, dimension lines.
- **Tint** (`#fff3cc`): highlight fill inside diagram boxes.
- **Schematic Canvas** (`#292435`): background for any section framed as a technical diagram
  (hero code panel, "How It Works," architecture sections) — reused deliberately, not incidentally.

### Named Rules
**The One-Diagram-Language Rule.** Every illustration on the page — hero, features, roadmap —
uses the same schematic vocabulary (boxes, connectors, corner brackets, monospace annotations).
No section gets a different illustration style; the schematic *is* the page's visual system.

## Typography

Same deck as Variant A (JetBrains Mono heading / IBM Plex Sans body), with one addition:
annotation captions use `0.7rem` JetBrains Mono, uppercase, with a leader-line rule connecting
the caption to its referent — a literal "labeled diagram" convention.

## Layout

Same container/spacing as Variant A. Sections framed as diagrams (dark canvas) alternate with
plain paper sections, giving the page a "spec page / diagram page" rhythm rather than one flat
scroll.

## Elevation & Depth

Flat, plus one new device: dotted 1px guide lines (not shadows) marking alignment/measurement,
consistent with a schematic rather than a soft UI.

## Shapes

`0px` radius throughout, `2px` strokes for every connector and corner-bracket — the sharp-corner
law is the schematic's whole visual grammar, not just a button rule.

## Components

### Corner Bracket (signature component)
A drawn `⌐...⌐` bracket at each section's top corners in Ink or Yellow, replacing plain section
dividers — literalizes "the architecture of your app drawn like a circuit diagram" as a page-wide
framing device.

### Connector Line
A `1-2px` ink line with a small circular node, linking a claim to its evidence (e.g. a feature
label to its code sample) — used in place of plain proximity/whitespace grouping.

### Buttons / Cards
Same as Variant A (ink-fill primary, `0px` radius), styled with a thin yellow corner-bracket on
hover to stay inside the schematic language.

## Do's and Don'ts

### Do:
- **Do** apply the schematic vocabulary (brackets, connectors, annotations) to every section, not
  just "How It Works."
- **Do** treat the dark surface as the intentional "diagram canvas," named and consistent.

### Don't:
- **Don't** introduce any color or font outside the captured surface — the amplification is
  structural/illustrative, not a new token.
- **Don't** let the schematic device become decorative noise — every bracket/connector must
  annotate something real (a feature, a claim, a code sample).
