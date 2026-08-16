# Pipeline

## Goal

Use the [stardust.style](https://stardust.style) plugin to redesign the homepage of [https://wasp.sh](https://wasp.sh). Explore three distinct directions, iterate on the chosen one, then push it to a new GitHub repo named **Shooting Star** and hand off to Vercel for hosting/testing.

Direction is driven by stardust from the extracted brand — corrected against wasp.sh's own stated design values (see step 2) — not by hand-picked art direction.

## Scope

- Target: [https://wasp.sh](https://wasp.sh), homepage only
- Full guided stardust pipeline (`stardust:stardust` commands run individually) — **not**
  `stardust:uplift`'s one-shot shortcut
- Out of scope: multi-page migrate/rollout, actual Vercel deployment (I'll hand off, you deploy)

## Rules and Steps

1. **Setup** — install stardust's dependencies (impeccable, playwright if needed). Confirm setup
   is clean before proceeding.
2. **Extract** — `/stardust:extract https://wasp.sh`
   Capture brand/tone into `stardust/current/` (`PRODUCT.md`, `DESIGN.md`, `DESIGN.json`).
   Then **benchmark**: read
   [wasp.sh's design blog post](https://wasp.sh/blog/2026/07/13/why-design-matters-for-a-web-framework)
   and compare its stated claims/values against what extraction captured. Where they diverge,
   hand-adjust colors/fonts in `DESIGN.md`/`DESIGN.json` to match the blog post's intent before
   moving on — this becomes the corrected brand baseline for `direct`.

- Checkpoint: log what was adjusted and why (blog post says X, extraction captured Y).

3. **Direct** — `/stardust:direct`, run to produce **three distinct redesign directions** from
   the corrected brand baseline alone (no manual art direction). Capture each direction's
   reasoning trace (`stardust/direction.md` or equivalent per-direction).
4. **Prototype** — `/stardust:prototype`, one full prototype per direction (3 total). For each:

- Run through the impeccable craft loop.
- Screenshot the finished prototype and save as `.jpeg` into a new `Screenshots/` folder
  (named per direction, e.g. `Screenshots/direction-1.jpeg`).

5. **Select & iterate** — pick one of the three prototypes and iterate on it further (polish
   pass) until it's the version worth shipping.
6. **Handoff to deploy** — push the final prototype to the GitHub repo **Shooting Star** (you'll
   create the repo and give me the remote). Vercel deployment/test-environment hosting is handled
   by you after that.

## Success criteria

This experiment is judging **stardust's output quality**, not just producing a shippable page.
Score against:

- **Brand fidelity** — does each direction still read as wasp.sh, and does it honor the
  corrected (blog-post-aligned) brand baseline from step 2?
- **Direction diversity/quality** — are the three directions meaningfully distinct and each
  individually well-reasoned, or do they collapse into variations of the same idea?
- **Visual craft** — typography, spacing, hierarchy, illustrations, color usage on the selected/iterated prototype.
- **Technical correctness** — valid, responsive HTML/CSS; no broken layout at common breakpoints.
- **Effort/friction** — how much manual correction (like the step 2 benchmark adjustment) was needed to get a usable result end-to-end.

Log notable findings, adjustments, and deviations in `../changelog.md` as they happen.

## Open questions

- GitHub remote for **Shooting Star** — pending, you'll provide it before step 6.
- Vercel deploy/test-environment details — handled by you after handoff, no action needed here.
