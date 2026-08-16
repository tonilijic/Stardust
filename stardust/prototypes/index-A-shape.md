<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-08-16T06:30:00Z
  page:             index
  pageUrl:          https://wasp.sh/
  againstDirection: stardust/direction.md (Active 2026-08-16T06:15:00Z)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/index.json
    - DESIGN-A.md
    - DESIGN-A.json
    - stardust/direction.md
    - stardust/prototypes/index-improvements.md
  stardustVersion:  0.18.1
-->
---
slug: index-A
url: https://wasp.sh/
register: brand
surprise: low
dominantDimension: fidelity/ratified-spec
---

# Page shape: index — Variant A (The Ratified Spec)

## Sections (in render order)

1. **header** (system-component role: `header`) — sticky top, Blueprint Paper ground, Ink
   wordmark + logo left, Docs/Blog/Examples/Schedule links, ink "Get Started" CTA right. Drop the
   violet "GET THE BUZZ" pill (not in Variant A's declared palette).
2. **hero** — headline (`voice.heroHeadline`) + subcopy (`voice.heroSubcopy`) left, real
   `.wasp.ts` code sample right (from `pages/index.json#codeBlocks[0]`). Dual CTA: "Get Started"
   (primary, ink), "See Documentation" (secondary, outline).
3. **numbered rail intro** — the three "properties" cards (High-Level Spec / Batteries Included /
   Fully Yours) become the first three entries in the persistent numbered rail's content area,
   not an isolated 3-up card row.
4. **features** — "Batteries: Included" feature list (Full-Stack Auth, Data Models, Type-Safe
   RPC, Background Jobs, Email Sending, WebSockets, Static Rendering, Simple Deployment,
   Type-Safe Links, Custom HTTP API, Wasp CLI) with the real `.wasp.ts` code sample, rendered as
   §4 of the rail.
5. **AI section** — "Perfect for AI, by design" — the three `$ ask` prompt cards, verbatim copy,
   §5 of the rail.
6. **how-it-works** — the `.wasp.ts → IR → generated code` architecture diagram, verbatim, §6.
7. **examples** (system-component role: `cta-band`-adjacent) — 3-up example apps (Todo App,
   CoverLetterGPT, Waspello), real links from `pages/index.json#ctas`, §7.
8. **built-on-wasp** — 3-up production apps (Scribeist, Microinfluencer Club, Searchcraft), real
   links + images from `pages/index.json#media`, §8.
9. **community** — Discord callout, real link, §9.
10. **testimonials** — 4 real testimonial cards with named attribution, §10.
11. **the-way-of-the-wasp** — 5 principle cards (Onion architecture, Truly full-stack, spec
    layer, Greatest > latest, Managed > DIY), §11.
12. **newsletter** (system-component role: `cta-band`) — "Stay up to date" email capture, §12.
13. **roadmap** — Ideas/Planned kanban board, verbatim, §13.
14. **faq** — 4 real FAQ questions (accordion), §14.
15. **footer** (system-component role: `footer`) — Docs/Community/Company link columns + email
    capture, verbatim.

## Layout strategy

- Density: balanced (64px desktop / 32px mobile section padding per DESIGN-A.md).
- 240px sticky numbered rail on desktop (left), collapses to a horizontal chapter strip <1024px.
- Container 1140px, single-column content area right of the rail.

## Key states

- Default only — static marketing page, no loading/error states.

## Interaction model

- Rail entries scroll-link to their section; active entry highlighted in Tint.
- FAQ uses CSS-only `<details>` accordion.
- All CTAs/links point to their real captured `href` targets.

## Data attributes

- `header[data-section="header"][data-intent="navigate"][data-layout="sticky-top"]`
- `nav[data-section="rail"][data-intent="navigate"][data-layout="sticky-left"][data-items="14"]`
- `section[data-section="hero"][data-intent="primary-action"][data-layout="split-code"][data-items="2"]`
- `section[data-section="features"][data-intent="inform"][data-layout="list-with-code"][data-items="11"]`
- `section[data-section="ai"][data-intent="inform"][data-layout="grid-3"][data-items="3"]`
- `section[data-section="how-it-works"][data-intent="inform"][data-layout="diagram"][data-items="3"]`
- `section[data-section="examples"][data-intent="explore"][data-layout="grid-3"][data-items="3"]`
- `section[data-section="built-on-wasp"][data-intent="social-proof"][data-layout="grid-3"][data-items="3"]`
- `section[data-section="community"][data-intent="navigate"][data-layout="band"][data-items="1"]`
- `section[data-section="testimonials"][data-intent="social-proof"][data-layout="grid-4"][data-items="4"]`
- `section[data-section="way-of-wasp"][data-intent="inform"][data-layout="grid-5"][data-items="5"]`
- `section[data-section="newsletter"][data-intent="capture"][data-layout="band"][data-items="1"]`
- `section[data-section="roadmap"][data-intent="inform"][data-layout="kanban"][data-items="2"]`
- `section[data-section="faq"][data-intent="inform"][data-layout="accordion"][data-items="4"]`
- `footer[data-section="footer"][data-intent="navigate"][data-layout="mega"]`

## Unsourced content (placeholder list)

(none) — every literal value (headline, subcopy, code samples, CTAs, testimonials, FAQ,
roadmap items) is `captured-verbatim` from `pages/index.json`.

## Open questions for craft

- Rail active-state: highlight by scroll-spy (IntersectionObserver) or by anchor `:target`? Use
  scroll-spy for a smoother read; degrade to no-highlight without JS (rail links still work).

<!-- disciplines -->
_provenance:
  capturedSourceLineage:
    - { section: header, source: "pages/index.json#customProps + assets/media/wasp-logo.svg (site-wide system-component, carried from _brand-extraction.json#systemComponents — none detected at homepage-only scope, so authored from the single captured header DOM directly)" }
    - { section: hero, source: "pages/index.json#headings[0] + body[0] + codeBlocks[0]" }
    - { section: numbered-rail-intro, source: "pages/index.json#headings[1..3] ('01High Level' etc) — direction-authorized restructure per DESIGN-A.md numbered-rail signature component" }
    - { section: features, source: "pages/index.json#headings[4..14] + codeBlocks[1] + body[5..17]" }
    - { section: ai, source: "pages/index.json#body[18..24]" }
    - { section: how-it-works, source: "pages/index.json#headings[16] region + body[27..29]" }
    - { section: examples, source: "pages/index.json#ctas (Todo App / CoverLetterGPT / Waspello links)" }
    - { section: built-on-wasp, source: "pages/index.json#media.imgs (scribeist/microinfluencers/searchcraft) + ctas" }
    - { section: community, source: "pages/index.json#ctas (Discord link)" }
    - { section: testimonials, source: "pages/index.json#ctas (quote labels with named attribution)" }
    - { section: the-way-of-the-wasp, source: "pages/index.json#headings[24..28]" }
    - { section: newsletter, source: "pages/index.json#headings 'Stay up to date'" }
    - { section: roadmap, source: "pages/index.json#headings 'Roadmap'" }
    - { section: faq, source: "pages/index.json#headings 'Frequently asked questions'" }
    - { section: footer, source: "site-wide system-component (single-page capture; authored from captured footer DOM directly)" }
  antiTemplatePass:
    - { pattern: "3-up card grid (properties/examples/built-on-wasp)", defaultReflex: "keep as isolated repeating card grids", alternatives: ["keep as-is", "fold properties into rail (picked)", "convert to horizontal scroller"], picked: "fold properties into rail", rationale: "improvements list item 3 — the numbered-eyebrow concept becomes structural via the rail rather than staying a decorative badge on yet another card grid" }
    - { pattern: "centered-stack hero with two-button CTA pair", defaultReflex: "centered hero, buttons stacked below headline", alternatives: ["centered stack (default reflex, rejected)", "split hero: copy left / code right (picked)"], picked: "split hero: copy left / code right", rationale: "captured source already uses a code-adjacent hero (motifs.patterns[hero-with-code]) — preserving that captured pattern rather than reflexing to a generic centered hero" }
  substrateTransitions: { default: "Blueprint Paper", exceptions: [] }
  voiceClassification:
    - { section: header, classification: captured-verbatim }
    - { section: hero, classification: captured-verbatim }
    - { section: numbered-rail-intro, classification: captured-verbatim }
    - { section: features, classification: captured-verbatim }
    - { section: ai, classification: captured-verbatim }
    - { section: how-it-works, classification: captured-verbatim }
    - { section: examples, classification: captured-verbatim }
    - { section: built-on-wasp, classification: captured-verbatim }
    - { section: community, classification: captured-verbatim }
    - { section: testimonials, classification: captured-verbatim }
    - { section: the-way-of-the-wasp, classification: captured-verbatim }
    - { section: newsletter, classification: captured-verbatim }
    - { section: roadmap, classification: captured-verbatim }
    - { section: faq, classification: captured-verbatim }
    - { section: footer, classification: captured-verbatim }
  signatureElements:
    - { kind: "hero-with-code motif", capturedSource: "motifs.patterns[hero-with-code]", mechanism: "static code panel reproduced verbatim, no motion", fallback: "n/a — static element" }
  compositionDelta_vs_B:
    - "structural device: numbered TOC rail (A) vs page-wide schematic corner-brackets/connectors (B)"
    - "palette: 5-token declared only (A) vs +dark-surface schematic canvas (B)"
    - "section shape: properties folded into rail (A) vs properties kept as 3-up but framed as a labeled diagram (B)"
  compositionDelta_vs_C:
    - "structural device: numbered TOC rail confined to nav (A) vs continuous running §-margin down the full page (C)"
    - "palette: 5-token declared only (A) vs +violet margin-annotation accent (C)"
    - "typography scope: mono in headings only (A) vs mono pushed into structural micro-labels throughout (C)"
