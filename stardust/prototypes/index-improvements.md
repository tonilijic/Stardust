<!--
_provenance:
  writtenBy: stardust:direct
  writtenAt: 2026-08-16T06:00:00Z
  readArtifacts:
    - stardust/current/brand-review.html
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/index.json
    - https://wasp.sh/blog/2026/07/13/why-design-matters-for-a-web-framework
-->

# Improvements list — wasp.sh homepage (index)

Mode A (brand-faithful) is active. This is the brief Variant A renders against: not new visual
targets, but the gap between the existing execution and a competent 2026 execution of Wasp's own
stated design language. Variants B/C honor this list as a floor.

1. **Dated pattern — generic theme primitives on a custom marketing surface.**
   `--ifm-color-primary` computes to `#bf9900`, a desaturated color the Docusaurus theme-color
   algorithm auto-generated — not the brand's own Wasp Yellow (`#f5c842`, confirmed by both the
   design blog and the favicon asset). A flagship marketing homepage is still leaking generic
   docs-site theme tokens instead of the literal 3-color system.
   *Fix: replace every themed accent/link computation with the literal declared tokens
   (`#f5c842` / `#111` / `#f7f5f0`), not a theme-generated derivative.*

2. **Missed opportunity — the declared identity system isn't what's shipping.**
   The design blog declares JetBrains Mono headings backed by IBM Plex Mono, and "90° angles,
   2px strokes, no rounded-blob softness anywhere." The live page renders only the IBM Plex Mono
   fallback (JetBrains Mono isn't loading), the global border-width token is `1px` not `2px`, and
   even the logo/favicon has a real corner radius (`rx=300` of a 1520 viewBox) rather than a
   sharp 90° corner.
   *Fix: ship the declared JetBrains Mono + 2px stroke system literally; either sharpen the
   logo's corner to match the 90° law or record it as a knowing, named exception.*

3. **Cliché convention — the section rhythm reads as generic dev-tool template.**
   All ~10 homepage sections resolve to the same numbered-eyebrow-plus-3-up-card-grid shape
   (01/02/03 badges, three-column cards, repeated for features/examples/AI-reasons). That exact
   rhythm is now common across Vercel/Linear/Stripe-adjacent dev-tool marketing sites, which
   works against Wasp's own stated "specification document" concept — the concept is distinct,
   the execution isn't.
   *Fix: let the "numbered spec document" idea diverge harder from the generic card-grid —
   vary section shape per numbered chapter (a table-of-contents rail, inline annotations)
   instead of repeating the same 3-up block everywhere.*

4. **Type-system inconsistency — the scale is ad-hoc and doesn't match the real page.**
   Theme heading tokens tie `h1` and `h2` at the same `2rem` size with no consistent ratio
   downstream (`scaleAudit.kind: "ad-hoc"`), and don't reflect the actual rendered hero H1, which
   is visibly ~4x larger via page-specific CSS the token layer never captured. The declared type
   system and the visual reality have drifted apart.
   *Fix: establish one explicit modular scale sized off the real rendered hierarchy (not the
   Docusaurus fallback), so the token layer and the page agree.*
