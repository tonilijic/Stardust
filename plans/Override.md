# Override Plan

Polish pass on the selected, iterated prototype — `stardust/prototypes/index-A-proposed.html`
(Variant A, "The Ratified Spec"). Applies in place; re-screenshot when done.

## Status

**Phase 1 and Phase 2 are done and visually verified** (Playwright, desktop 1440px + mobile
390px), including the FAQ easing animation (installed `@animationsdev`'s `css-animations` skill
per `toni.md`, animated via `::details-content` + `interpolate-size` — genuinely eases both open
and close, confirmed via measured layout height, not just a CSS snap). **Phase 3/4 not started.**
One item inside Phase 2 remains intentionally skipped:
- **Hero** full-stack line-wrap change — pause point, needs approval before implementing.

Also note: paragraph font sizes across every section were normalized to a flat `16px` (were
previously ranging `.82rem`–`1.15rem` across different card/lede contexts) — headings, badges,
buttons, and the pull-quote are unchanged.

Assumptions made while executing (flag if wrong):
- CTA text applied to **both** the header and hero "Get Started" buttons (plan said "main CTA"
  singular; both were changed for label consistency) — now literally `>_ Get Started`.
- GitHub star count shipped as a static `18k+` snapshot, not live-fetched.
- Footer "Company" link uses the href captured during extraction
  (`stardust/current/pages/index.json`) — that URL points to a Notion page titled
  "Framework-Engineer-at-Wasp" (looks like a stale/specific job posting, not a general company
  page). Used as the most faithful source available, but worth checking against the live site.
- "Perfect for AI" first-two-words-white: applied to the first two whitespace-separated words of
  each list item as written in the HTML (exact tokens documented in the diff).

## Pause points (stop and ask before proceeding)

- **Hero** — full-stack line-wrap change: confirm before implementing (see below).
- **How it works** — explainer visual rehaul will take iterations; check in as it develops.
- **Batteries: Included / terminal component** — confirm build approach for the reusable
  terminal-HTML skill before wiring it into the section.

## Open questions (need an answer before those items can be finished)

- `Colors:` category has no overrides listed — confirm intentional (Variant A's palette in
  `DESIGN-A.md` is already the ratified baseline) or add the missing notes.
- No changes were listed for **Properties**, **Community**, **Testimonials**, or **Roadmap** —
  confirm these stay as-is.
- GitHub star count in the header nav (line under Header nav): static snapshot (simpler, will
  drift over time) or fetched live? Plan currently assumes static "18k+" unless told otherwise.
- Primary CTA target text is ambiguous as written ("Get Started" → `>_ Get Started`) — confirm
  whether `>_` is literal rendered text or an icon/prompt glyph.
- "Perfect for AI, by design": confirm exactly which words in each terminal line should be
  colored white (first two words of every line, or only specific lines).

## Phase 1 — Global mechanical fixes

No new skills or content decisions required; safe to do first.

**Styles**
- Header nav bottom black outline is too thick — match the thickness used on the side nav.
- Remove `§` from section tags/counts — number alone is enough. Add a yellow highlight to the
  tag, set its text color to primary-text (black shade).

**Fonts**
- Ensure mono is the only font variant, used in both headings and paragraphs.
- Keep to three font size variants, as currently.

**Colors**
- (see Open Questions — no overrides specified yet)

**Content**
- Remove emojis throughout — they don't fit the brand (covers the 📬 in *Stay up to date* and
  🚧 in *Roadmap*).

**Links**
- Add a gap between link text and the diagonal-arrow icon.

**Buttons**
- Main CTA: "Get Started" → `>_ Get Started` (see Open Questions on the exact glyph/text).

## Phase 2 — Self-contained section fixes

No new skills required; can be done independently of Phase 3/4.

**Header nav**
- Replace the raw GitHub link with GitHub icon + star count
  ([wasp-lang/wasp](https://github.com/wasp-lang/wasp), currently 18k+ — see Open Questions on
  static vs. live).

**Hero**
- Display "full-stack" on one line in the title; increase max wrap/body width if needed.
- ⚠️ Pause point — confirm before implementing.

**Perfect for AI, by design**
- In the existing terminal-like visual, use primary-color (yellow) `>` as the `li::marker`
  instead of bullet points.
- First two words of each line should be white (see Open Questions on exact scope).
- The word "ask" after `$` should be white; the question itself stays yellow as-is.

**Built on Wasp**
- Whole cards should be clickable; links positioned at bottom-left for consistency; card content
  should fill the available height.

**Stay up to date**
- Remove emoji and section number (covered by Phase 1 Content/Styles, called out here since this
  section currently has both).
- Add a white background to the email input field.

**Footer and Side nav**
- Footer "Company" nav-group is missing a "Company" link itself (Blog, Careers, Resources are
  present; Company is not).
- Desktop: the side-nav rail's height should end exactly where the footer starts, even though
  it's visually positioned above it — no rail outline should overlap/strike over the footer.
- Footer content should be aligned relative to main content — currently looks off-center.
- Mobile: make the horizontal nav bar sticky on scroll-up so users can navigate between sections
  easily.

**FAQ**
- Verify answers are properly scraped from the live wasp.sh site, not generated — this is a
  content-fidelity check against a real source, not a styling change.
- Add a gentle easing animation for expand/collapse states — leverage the animations skill
  described in `toni.md` (⚠️ not yet documented there — write it up before this item can ship).

## Phase 3 — Build reusable skills

Two sections below depend on skills that don't exist yet. Build these first, as their own
mini-projects, before Phase 4.

- **Terminal component skill** — small skill that builds a terminal-style HTML component,
  injectable into a section. Needed by *Batteries: Included* (Phase 4). Confirm build approach
  (pause point above) before starting; document it similarly to `illustration.md`.
- **Illustration skill** — documented in `illustration.md` (currently a placeholder). Needed by
  *How it works*, *Example Apps*, and *The Way of the Wasp* (Phase 4).

## Phase 4 — Sections that depend on Phase 3 skills

**Batteries: Included**
- Rename section to "Features".
- Replace the card grid with a terminal-like component (built in Phase 3).

**How it works**
- Rehaul the explainer visual — check the current live site for inspiration, but ensure the new
  visual follows the updated style.
- Built with the illustration skill; will take iterations — pause point above.

**Example Apps**
- Fill with new illustrations built via the illustration skill.
- Expected illustrations: todo app, cover-letter GPT, kanban board.

**The Way of the Wasp**
- Use `display: flex; flex-wrap: wrap`; turn each item into a card with an icon/illustration
  generated via the illustration skill.
- On card hover, subtly animate the illustration.
