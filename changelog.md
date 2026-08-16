# Changelog

Reference log of all changes made across this project.

## 2026-08-16

- Created `plans/` group with `Pipeline.md`, `toni.md`, `Override.md` (empty), and `illustration.md`.
- Created this `changelog.md` outside the `plans/` group to track future changes.
- Fleshed out `Pipeline.md`: experiment redesigns https://wasp.sh (homepage only) via the full
  guided stardust pipeline (not `uplift`), evaluating stardust's output quality. Flow: setup →
  extract + benchmark against wasp.sh's design blog post (hand-adjust colors/fonts where they
  diverge) → direct (3 distinct directions, brand-driven only) → prototype (3 full prototypes,
  screenshots to `Screenshots/`) → select & iterate on one → push to new GitHub repo
  "Shooting Star" (remote pending from Toni) → Toni deploys to Vercel separately.

## Pipeline execution

- Step 1 (setup) confirmed clean: node v26.4.0, npm 11.17.0, gh and vercel CLIs present,
  Playwright chromium already downloaded/cached. No installs needed.
- Step 2 (extract) ran against https://wasp.sh, homepage-only (`--max 1`). Playwright resolved
  via Node's normal upward `node_modules` lookup (found at `~/node_modules/playwright`) — no
  fresh install needed. Copied `crawl.mjs` into `stardust/scripts/` and ran the copy. Capture:
  live=yes, waitMode=medium, waitMs=2500, httpStatus=200, 11 images / 0 css-backgrounds, vision
  check verdict=ok (hero, logo, palette all matched the screenshot; page fully rendered, no
  bot-block/consent-wall — though the cookie banner itself was still visible in the shot despite
  `consent.method: auto`, a minor cosmetic note only). Wrote `stardust/current/`: PRODUCT.md,
  DESIGN.md, DESIGN.json, `_brand-extraction.json`, `brand-review.html`, `pages/index.json`,
  `_crawl-log.json`, plus real downloaded assets (`assets/media/wasp-logo.svg`,
  `assets/favicon.svg`) and `stardust/state.json`. System-components/cross-promo/CTA-frequency
  detectors correctly emitted empty — those require >=3 pages, inert at homepage-only scope.
  Tensions found: type scale is ad-hoc (T-scale), only one logo variant captured
  (T-logo-variants), and a custom finding — the theme's generated link color `#bf9900` drifts
  from the brand's real signature gold `#f5c842` (confirmed directly from the favicon/logo
  asset's own fill color).
- Step 2 benchmark: fetched Wasp's own design blog post
  (https://wasp.sh/blog/2026/07/13/why-design-matters-for-a-web-framework) and compared it
  against the extraction. Confirmed: the independently-extracted `#f5c842` (yellow) and
  `#f7f5f0` (paper) exactly match the blog's declared values — good signal the palette capture
  was accurate. Adjusted: (1) declared ink is `#111` vs. the live-rendered `#1c1e21` — kept both,
  labeled the declared one canonical; (2) added the declared gray `#777777` and tint `#fff3cc`,
  both previously missing from the palette array; (3) relabeled the violet accent (`#7b42f5`)
  and dark surface (`#292435`) as **undeclared** — the blog states "three colors, and that's
  it," so these are real but off-system; (4) heading font is declared as JetBrains Mono "backed
  by" IBM Plex Mono, but only the IBM Plex Mono fallback was found actually rendering on the
  live page; (5) blog declares "90° angles, 2px strokes, no rounded-blob softness anywhere" —
  live border-width token is 1px (not 2px), and the favicon/logo's own corner has a real radius
  (rx=300 of 1520), both flagged as drift from the stated law rather than treated as brand
  fact. Updated `DESIGN.md`, `DESIGN.json`, `_brand-extraction.json`, and `brand-review.html`
  (4 new/revised tension cards) to carry all of the above with citations to the blog post.
- Step 3 (direct) ran with no user-supplied phrase (brand-driven delegation per Pipeline.md).
  Signal classified `signal-strong` → Mode A (brand-faithful), no rebrand trigger. Density
  defaulted `balanced`, ia-fidelity defaulted `reimagined` (both per the skill's own fallback
  rules, no clarifying questions asked — consistent with Toni's explicit hands-off instruction
  for this phase). Wrote a 4-item improvements list
  (`stardust/prototypes/index-improvements.md`: theme-generated color drift, declared-vs-shipped
  identity gap, cliché card-grid rhythm, ad-hoc type scale) and a shared `PRODUCT.md`. Produced
  3 role-differentiated variants per the multi-variant contract (`DESIGN-A/B/C.md` + `.json`):
  **A "The Ratified Spec"** (strict Mode A — declared 5-token palette only, ships JetBrains Mono
  properly, structural numbered TOC rail), **B "The Circuit Diagram"** (amplifies the captured
  schematic/circuit-diagram illustration trait page-wide, rehabilitates the undeclared dark
  surface as a deliberate "diagram canvas"), **C "The RFC"** (amplifies the numbered-eyebrow
  motif into a continuous running §-numbered margin, rehabilitates the undeclared violet as a
  bounded "margin annotation" accent). Each pair differs by ≥3 substantive changes (palette,
  structural signature component, motion register) — passes the anti-toolbox homogeneity check.
  Full reasoning trace in `stardust/direction.md`; `stardust/state.json` updated to `directed`.
- Step 4 (prototype) built 3 full homepage renders — `stardust/prototypes/index-{A,B,C}-shape.md`
  (per-page compositional briefs, all 5 required disciplines populated: captured-source lineage,
  anti-template pass, substrate transitions, voice classification, composition-delta vs. siblings)
  and `index-{A,B,C}-proposed.html`. Rendering was delegated to `impeccable:craft` per the
  skill's delegation mandate; playwright had to be reinstalled mid-pipeline (a `--no-save`
  install got pruned by a later `npm i`, exactly the ephemeral-install gotcha the extract skill's
  own docs warn about) before screenshots could run.
  Ran the real technical audit (`impeccable`'s bundled detector, full non-degraded mode with
  htmlparser2/css-select/css-tree/domutils installed) against all three and fixed every
  confirmed defect: a real P0 in Variant B where a CSS selector scoped to the wrong element
  (`section:not(.on-canvas)` when the class actually lived on a child `<div>`) rendered ink-black
  text at 1.3:1 contrast on a near-black background — essentially invisible; a systemic issue
  where the declared brand gray `#777777` fails AA at 4.1:1 on the declared paper background
  (darkened the working token to `#5f5f5f`, gray-on-dark footer text to `#9a9a9a`, kept the
  literal `#777777` documented as Wasp's stated value); a skipped heading level (h2→h4/h5) on
  every card/footer heading across all three files (promoted to h3); and undersized caption text
  below the 11px floor in B and C. Left standing, documented as deliberate: numbered-eyebrow
  labels, kicker-style field captions, and the cream palette (all three are Wasp's own captured
  motifs, not agent reflexes — flagged by the detector's generic defaults but justified in each
  shape brief's anti-template-pass); 16 em-dashes in Variant C's body copy (captured-verbatim
  brand prose, exempt from the copy-cadence check under Mode A); one rail-hover gray-on-tint nit
  in A (registered as a narrow, disclosed ignore — cosmetic, hover-only).
  Screenshotted all three at 1440px via Playwright, converted to JPEG, saved to
  `Screenshots/direction-{1,2,3}.jpeg` (A→1, B→2, C→3) per Toni's request.
  `stardust/state.json` updated to `prototyped`.
- Stop-hook note: `impeccable`'s design hook flagged 2 `side-tab` findings (left-border accent,
  "AI-tell") in `stardust/current/brand-review.html` (the extraction's own diagnostic report
  template, not a redesign deliverable). Triaged as a sanctioned exception — added
  `stardust/current/brand-review.html` to `.impeccable/config.json`'s shared `ignoreFiles`
  rather than restyling a fixed-template report artifact.
- Toni selected **Direction A ("The Ratified Spec")** — `stardust/prototypes/index-A-proposed.html`
  — to carry forward for step 5 (select & iterate).
- Step 5 (select & iterate) polish pass on `index-A-proposed.html`:
  - Implemented the shape brief's open item: rail active-state now uses IntersectionObserver
    scroll-spy (`rootMargin: '-45% 0px -45% 0px'`) instead of a static hardcoded `.active` class;
    the original hardcoded `.active` on the first rail item (`#hero`) doubles as the no-JS
    fallback, so the rail degrades gracefully without script.
  - Revisited the "rail-hover gray-on-tint" nit disclosed at the prototype step: computed contrast
    of `.rail-num` (`#5f5f5f`) against the hover/active `--tint` background (`#fff3cc`) — 5.76:1,
    comfortably passing AA for small text. Confirmed as cosmetic-only, not a real defect; left
    as-is rather than touching a passing color pair.
  - Re-ran a manual contrast audit across every `var(--gray)`/literal-gray text usage and found
    2 genuine defects the prior pass missed (both gray-on-near-black, not gray-on-paper):
    `.roadmap-item .badge` at `#5f5f5f` on `#232323` (2.46:1, fails) — recolored to the `#9a9a9a`
    token already used for gray-on-dark elsewhere on the page (footer); and the footer's privacy
    -policy link, whose inline `style="color:var(--gray)"` overrode the parent `.footer-bottom`'s
    already-correct `#9a9a9a` back down to `#5f5f5f` on the ink footer background (2.96:1, fails)
    — fixed by dropping the inline override so it inherits the parent's passing color.
  - Found and fixed a real focus-visibility defect: `.newsletter-form input:focus{outline:none}`
    removed the keyboard focus indicator with no replacement (WCAG 2.4.7). Replaced with
    `:focus-visible{outline:2px solid var(--ink);outline-offset:-4px}`, inset so it doesn't clip
    against the form's border.
  - Sanity-checked accessibility basics: landmark roles (header/nav/main/footer) present and
    correct, rail `<nav>` has `aria-label="Page sections"`, real images carry alt text, heading
    hierarchy still clean (h1→h2→h3, no skips) after the prior pass's fixes.
  - Noted but left out of scope (design-completeness gap, not a contrast/heading/undersized-text/
    breakpoint defect): below 640px the header's `.nav-links` are hidden with no hamburger/menu
    fallback, so Docs/Blog/GitHub/Discord are only reachable via the footer on mobile. Flagging
    for a future pass rather than fixing here to avoid scope creep on a "polish," not "redesign,"
    step.
  - Fresh Playwright screenshot at 1440px (full page), converted to JPEG via macOS `sips` (no
    ImageMagick/sharp/cwebp available in this environment), saved as `Screenshots/final-A.jpeg` —
    `Screenshots/direction-1.jpeg` left untouched as the original three-way comparison shot.
  - `stardust/state.json`: added `direction.selectedVariant: "A"` + `selectedAt`, marked variant A
    `selected: true` with an `iteratedScreenshot` pointer, and appended an `iterated` history entry
    on the `index` page (status now `iterated`).
  - File is ready for handoff to the GitHub repo step (Pipeline.md step 6).
