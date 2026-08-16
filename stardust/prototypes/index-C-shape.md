<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-08-16T06:30:00Z
  page:             index
  pageUrl:          https://wasp.sh/
  againstDirection: stardust/direction.md (Active 2026-08-16T06:15:00Z)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/index.json
    - DESIGN-C.md
    - DESIGN-C.json
    - stardust/direction.md
    - stardust/prototypes/index-improvements.md
  stardustVersion:  0.18.1
-->
---
slug: index-C
url: https://wasp.sh/
register: brand
surprise: high
dominantDimension: composition/running-spec-margin
---

# Page shape: index — Variant C (The RFC)

## Sections (in render order)

Same 15 sections and same captured content as Variant A — see `index-A-shape.md` for the full
per-section captured-source lineage (identical here; only composition/framing differs).

Composition differences from Variant A:

1. **Every section** is assigned a continuous clause number (`§1`, `§1.1`, `§2`, ... `§9`) printed
   in a persistent left margin that runs the full page height (not a nav rail — a numbering
   column, always visible, updates via scroll-spy).
2. **header** — nav links get their own `§0.x` numbering in the margin logic, reinforcing the
   whole page (including chrome) as one numbered document.
3. **AI section** callouts ("$ ask why AI loves Wasp", etc.) are recast as right-margin
   "reviewer annotations" in the bounded Annotation Violet accent — the AI-audience content is
   now visually distinguished from the primary developer narrative via the margin device, rather
   than being one more full-width section.
4. **features list** — the 11 feature items (Full-Stack Auth, Data Models, etc.) render as a
   definition-list-style spec table (`term: description`) rather than a card grid — literalizes
   the "specification document" framing further than Variant A's rail does.
5. **way-of-the-wasp** — the 5 principle cards become 5 numbered clauses (§8.1–§8.5) with no card
   chrome at all — just rule-delimited text blocks, reinforcing the printed-document read.

## Layout strategy

- Density: balanced (64px / 32px).
- 64px left margin (running § numbers) + 48px right margin reserved for annotations on desktop;
  both collapse to inline markers on mobile (`<768px`).
- Container effectively narrows to ~980px between the two margins on desktop.

## Key states

- Default only.

## Interaction model

- Margin § numbers are scroll-spied, non-interactive (informational, like a real spec doc).
- Right-margin annotations are visually distinct but not interactive.
- FAQ: CSS-only `<details>`, numbered as clauses too (§9.1–§9.4).

## Data attributes

Same section list as Variant A with clause numbers added: every `<section>` carries
`[data-clause="§N"]`. AI-section callouts carry `[data-annotation="margin-violet"]`. The features
section carries `[data-layout="definition-list"]` instead of `grid-3`.

## Unsourced content (placeholder list)

(none) — same captured content as Variant A; only structure/typographic treatment differs.

## Open questions for craft

- Clause numbering granularity: one number per major section only, or nested sub-numbers for
  each feature/card within a section (as drafted above, §8.1–§8.5)? Nested reads more literally
  "spec document" but risks clutter on a long page — craft should judge legibility at 1440px and
  simplify to section-level-only numbering if nesting reads noisy.

<!-- disciplines -->
_provenance:
  capturedSourceLineage: "identical to index-A-shape.md — same 15 sections, same captured sources; only structure/typographic treatment differs per variant."
  antiTemplatePass:
    - { pattern: "3-up feature card grid", defaultReflex: "keep as icon+label+description cards", alternatives: ["keep as cards (rejected)", "fold into rail like Variant A (rejected — that's A's move)", "recast as a numbered definition-list spec table (picked)"], picked: "recast as a numbered definition-list spec table", rationale: "amplifies motifs.patterns[numbered-eyebrow-sections] harder than A's rail — the whole page becomes a literal spec document, matching Wasp's own '.wasp.ts spec file' product concept" }
    - { pattern: "isolated numbered eyebrow badges", defaultReflex: "small per-section badge, decorative", alternatives: ["keep as badges (rejected)", "fold into nav rail (rejected — A's move)", "continuous running margin numbering across the entire page, including chrome (picked)"], picked: "continuous running margin numbering", rationale: "the highest-surprise legitimate reading of the same captured motif — direction.md assigns Variant C surprise: high" }
  substrateTransitions: { default: "Blueprint Paper", exceptions: [] }
  voiceClassification: "identical to index-A-shape.md — all 15 sections captured-verbatim; margin annotations reposition existing AI-section copy verbatim, no new claims."
  signatureElements:
    - { kind: "hero-with-code motif", capturedSource: "motifs.patterns[hero-with-code]", mechanism: "static code panel reproduced verbatim inside the margin-numbered layout, no motion", fallback: "n/a — static element" }
  compositionDelta_vs_A:
    - "structural device: continuous running §-margin down the full page (C) vs numbered TOC rail confined to nav (A)"
    - "features section: definition-list spec table (C) vs card list folded into rail (A)"
    - "typography scope: mono pushed into structural micro-labels throughout (C) vs mono in headings only (A)"
  compositionDelta_vs_B:
    - "structural device: running §-margin (C) vs page-wide corner-brackets/connectors (B)"
    - "amplified trait: numbered-eyebrow/RFC structure (C) vs schematic/circuit-diagram illustration (B)"
    - "undeclared color rehabilitated: violet as bounded margin annotation (C) vs dark surface as full diagram canvas (B)"
