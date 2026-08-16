# Direction

## Phrase

No freeform phrase supplied — Toni's instruction for this experiment was explicit delegation:
*"stardust drives it solely using brand/extraction"* (see `plans/Pipeline.md`). Treated as an
ambiguous-refresh ask with no user-supplied art direction, which per the mode-detection
precedence resolves to Mode A (brand-faithful) by default rather than rebrand.

## Restatement

Redesign the wasp.sh homepage, staying faithful to Wasp's own declared brand system (corrected
against their design blog post in the extract/benchmark step), producing three genuinely
differentiated directions rather than one.

## Signal classification

**signal-strong.** `_brand-extraction.json#palette` has 7 distinct colors after clustering
(5 declared + 2 captured-but-undeclared), and both `type.headingFamily.name` and
`type.bodyFamily.name` are populated. Mode A (brand-faithful) is active by default; no rebrand
trigger fired (no "rebrand"/"clean slate"/"from scratch" language anywhere in the brief, and
signal is not `signal-absent`).

## Movements

- **density**: unmoved by any phrase → defaulted to `balanced` (register = brand, and the
  captured inventory has ~10 sections across 2 audience tracks, which also trips the
  multi-audience hard floor — `balanced` and the floor agree, so no conflict to surface).
- **ia-fidelity**: unmoved → defaulted to `reimagined` (variants may reshape section
  structure/emphasis, not just re-skin colors — needed for the 3-variant differentiation
  contract below to produce real distinction rather than 3 palette swaps).
- **audience**: resolved from the captured surface itself — dual-track (developers +
  AI coding agents), evidenced by the dedicated "Perfect for AI, by design" section.
- **register**: brand (inherited from `current/PRODUCT.md`).

No clarifying questions asked — both axes have single, well-reasoned defaults per the skill's
own fallback rules, and Toni's instruction was explicit hands-off delegation for this phase.

## IA-priority preservation audit

| signal | evidence | preserveAs | mutability |
|---|---|---|---|
| primary-conversion-cta | "Get Started" in both nav and hero (`pages/index.json#ctas`) | first-viewport | movable |
| dual-audience-routing | dedicated "Perfect for AI, by design" section | dedicated-section | movable |

## Mode resolution

**Mode A (brand-faithful)**, per § Mode-detection precedence step 1 — signal-strong, no rebrand
trigger. Palette and type pinned to the corrected brand surface (from the benchmark step);
Toni asked for **3 variants**, so the Phase 2.6 multi-variant fork applies under the
`ia-fidelity: reimagined` branch: role-differentiated **A + B + C**, not surface-only forks.

**Ground-family override**: Mode C fires for all three variants — the brand's own Blueprint
Paper ground (`#f7f5f0`) wins over any seed roll, reason `brand-faithful`.

## Improvements list (Mode A floor)

Written to `stardust/prototypes/index-improvements.md` — 4 specific weaknesses meeting the
specificity bar (theme-generated color drift, declared-vs-shipped identity system gap, cliché
card-grid rhythm, ad-hoc type scale). Variant A applies all 4 directly; Variants B/C honor them
as a floor while amplifying their own trait.

## Variant roles

| Variant | North Star | Amplifies | Palette | Font |
|---|---|---|---|---|
| **A** | The Ratified Spec | Nothing new — closes the declared-vs-shipped gap, applies all 4 improvements | Declared 5-token only (drops undeclared violet/dark-surface) | JetBrains Mono (shipped, not just fallback) |
| **B** | The Circuit Diagram | `hero-with-code` / schematic illustration trait (design blog's own "circuit diagram" language) | Declared 5 + dark surface, reframed as a deliberate "diagram canvas" | Same deck |
| **C** | The RFC | `numbered-eyebrow-sections` trait, pushed into a continuous running §-numbered margin | Declared 5 + violet, bounded to "margin annotation" use only | Same deck, mono pushed into structural micro-labels too |

**Differentiation check** (≥2 substantive changes per pair, per `multi-variant.md`):
- A↔B: differ in (1) palette (5-token vs 6-token with dark canvas), (2) structural device (TOC
  rail vs page-wide schematic bracket/connector system), (3) motion register
  (`kinetic-grid` vs `live-systems`).
- A↔C: differ in (1) palette (5-token vs 6-token with violet), (2) structural device (TOC rail vs
  continuous running margin numbering), (3) typography scope (mono headings only vs mono pushed
  into structural micro-labels), (4) motion register (`kinetic-grid` vs `editorial`).
- B↔C: differ in (1) which undeclared color is rehabilitated (dark surface vs violet) and how
  (page-wide canvas vs bounded margin-annotation), (2) structural device (corner-brackets/
  connectors vs running §-margin), (3) motion register (`live-systems` vs `editorial`).

No two variants share a north star, a structural signature component, or a motion register —
passes the anti-toolbox "Anonymous middle variant" / "Variant homogeneity" checks.

## Anti-toolbox self-audit

- No glassmorphism, no gradient text, no pure-black/pure-white-only palette (all three use the
  declared `#111`/`#f7f5f0`, not pure `#000`/`#fff`), no generic-2026-SaaS silhouette (each
  variant's signature component — numbered rail / corner-bracket / running margin — is specific
  to Wasp's own captured motifs, not a stock hero-plus-3-card template).
- `≥1.25` type ratio held on Variant A's explicit modular scale; B/C inherit the same scale.

## Command sequence

`$stardust extract` (done) → `$stardust direct` (this) → `$stardust prototype` × 3 (next) →
select one → iterate → push to GitHub.

## Confirmation

No interactive confirmation gate — Toni's pipeline instruction was explicit brand-driven
delegation for this phase; proceeding directly to Phase 3+ per the hands-off spirit of that
instruction (state.json does not set `handsOff: true` formally, but the same reasoning applies:
every question this phase would ask already has a stamped, defensible default).

## Outputs written

- `PRODUCT.md` (shared across variants)
- `DESIGN-A.md` / `DESIGN-A.json`
- `DESIGN-B.md` / `DESIGN-B.json`
- `DESIGN-C.md` / `DESIGN-C.json`
- `stardust/prototypes/index-improvements.md`
- `stardust/direction.md` (this file)

Next: `$stardust prototype` — one full homepage render per variant.
