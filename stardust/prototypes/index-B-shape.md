<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-08-16T06:30:00Z
  page:             index
  pageUrl:          https://wasp.sh/
  againstDirection: stardust/direction.md (Active 2026-08-16T06:15:00Z)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/index.json
    - DESIGN-B.md
    - DESIGN-B.json
    - stardust/direction.md
    - stardust/prototypes/index-improvements.md
  stardustVersion:  0.18.1
-->
---
slug: index-B
url: https://wasp.sh/
register: brand
surprise: medium
dominantDimension: craft/schematic-diagram
---

# Page shape: index — Variant B (The Circuit Diagram)

## Sections (in render order)

Same 15 sections and same captured content as Variant A (header, hero, properties, features, AI,
how-it-works, examples, built-on-wasp, community, testimonials, way-of-wasp, newsletter, roadmap,
FAQ, footer) — see `index-A-shape.md` for the full per-section captured-source lineage, which is
identical here (content doesn't change between variants, only composition/framing).

Composition differences from Variant A:

1. **header** — keeps the properties/features cards as regular sections (not folded into a rail);
   Variant B has no rail.
2. **Every section** gets a drawn corner-bracket frame (Ink or Yellow, `2px`) at its top corners,
   replacing plain dividers — the page-wide schematic device.
3. **hero, features, how-it-works** render on the Schematic Canvas (`#292435`) ground instead of
   Blueprint Paper — these three sections are reframed as "the diagram pages" of the site; all
   other sections stay on Blueprint Paper. This is the substrate-transition budget (2 exceptions:
   paper→canvas at hero/features, canvas→paper at AI section).
4. **properties, examples, built-on-wasp** — each card gains a monospace annotation caption with
   a leader line pointing to the relevant part of the card (e.g. a caption "① typed config"
   pointing at the code sample), consistent with the design blog's own "boxes, connectors,
   annotations" language.
5. **how-it-works diagram** — the existing IR architecture diagram is the section this variant
   was built around; every other section now echoes its visual grammar instead of it being the
   one exception.

## Layout strategy

- Density: balanced (64px / 32px), same as A.
- No rail. Full-width single column, container 1140px.
- Corner-brackets sit inset 16px from each section's edges.

## Key states

- Default only.

## Interaction model

- Same real CTAs/links as Variant A, no composition change.
- FAQ: CSS-only `<details>`.

## Data attributes

Same section list as Variant A with `[data-layout]` values updated: `hero`, `features`, and
`how-it-works` carry `[data-substrate="schematic-canvas"]`; all others carry
`[data-substrate="paper"]`. Every section additionally carries `[data-motif="corner-bracket"]`.

## Unsourced content (placeholder list)

(none) — same captured content as Variant A; only framing/composition differs. Annotation
captions are `direction-authorized chrome` describing existing content, not new claims.

## Open questions for craft

- Should connector lines between hero and features be literal SVG paths or a simpler
  `border-image` dashed rule? Prefer literal SVG for two-point connections; dashed border for
  single-section framing.

<!-- disciplines -->
_provenance:
  capturedSourceLineage: "identical to index-A-shape.md — same 15 sections, same captured sources; only composition/framing differs per variant."
  antiTemplatePass:
    - { pattern: "isolated numbered badges (01/02/03)", defaultReflex: "keep as small corner badges, decorative only", alternatives: ["keep as-is (rejected — this is A's move)", "fold into rail (rejected — that's A's move)", "recast every section as a labeled diagram panel (picked)"], picked: "recast every section as a labeled diagram panel", rationale: "amplifies design blog's own 'schematics: boxes, connectors, annotations' quote — a real, captured brand principle underused on the current page (only 1 of 15 sections honors it)" }
    - { pattern: "flat section dividers", defaultReflex: "plain horizontal rule or whitespace gap between sections", alternatives: ["plain rule (rejected)", "corner-bracket frame per section (picked)"], picked: "corner-bracket frame per section", rationale: "makes the schematic language structural rather than confined to one diagram graphic" }
  substrateTransitions:
    default: "Blueprint Paper"
    exceptions:
      - { section: "hero → features → how-it-works", to: "Schematic Canvas (#292435)", purpose: "frames the three most technically-dense sections as 'diagram pages', citing the captured dark-surface color and the design blog's schematic language" }
      - { section: "how-it-works → examples", to: "Blueprint Paper", purpose: "returns to paper ground for the social-proof/example sections, keeping the canvas exclusive to genuinely technical content" }
  voiceClassification: "identical to index-A-shape.md — all 15 sections captured-verbatim; annotation captions are direction-authorized chrome (friction #3), not new claims."
  signatureElements:
    - { kind: "hero-with-code motif, amplified", capturedSource: "motifs.patterns[hero-with-code]", mechanism: "static code panel + new corner-bracket frame + annotation captions, no motion", fallback: "n/a — static element" }
    - { kind: "how-it-works IR diagram, amplified as the page's visual template", capturedSource: "pages/index.json how-it-works section", mechanism: "static reproduction; its visual grammar (boxes/connectors) is extended to other sections", fallback: "n/a" }
  compositionDelta_vs_A:
    - "structural device: page-wide corner-brackets/connectors (B) vs numbered TOC rail (A)"
    - "palette: +dark-surface schematic canvas (B) vs 5-token declared only (A)"
    - "section shape: properties/features/how-it-works reframed as diagram panels on dark canvas (B) vs folded into rail on paper (A)"
  compositionDelta_vs_C:
    - "structural device: corner-brackets on every section (B) vs continuous running §-margin (C)"
    - "amplified trait: schematic/circuit-diagram illustration (B) vs numbered-eyebrow/RFC structure (C)"
    - "undeclared color rehabilitated: dark surface as diagram canvas (B) vs violet as margin annotation (C)"
