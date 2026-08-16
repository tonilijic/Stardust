# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers building full-stack TypeScript web apps (React + Node.js + Prisma), including AI-assisted / "vibe coding" workflows. Copy speaks directly to engineers ("Ship in a day and own every line") and explicitly courts AI coding agents as a secondary consumer of the product (dedicated "Perfect for AI, by design" section, `llms.txt`, AI-oriented rule files/skills/plugins).

## Product Purpose

Wasp is a full-stack specification framework: developers describe app behavior (routes, auth, jobs, queries) in a high-level `*.wasp.ts` spec layer, and Wasp compiles it into a working React + Node.js + Prisma app, wiring together auth, background jobs, email, WebSockets, and deployment that would otherwise be hand-assembled boilerplate.

## Positioning

"Batteries included, but you own every line" — positioned against both raw full-stack DIY (Next.js/Nuxt/Gatsby-style, everything hand-wired) and fully managed/hosted platforms. The specific mechanism a neighbor couldn't truthfully copy: a first-class, typed, full-stack specification layer (the `.wasp.ts` config) that generates ordinary, readable React/Node/Prisma code rather than a black-box runtime or a proprietary hosted backend.

## Operating Context

Local development via the Wasp CLI (`npm i -g @wasp.sh/wasp-cli`); apps are authored as `*.wasp.ts` spec files alongside standard React/Node/Prisma source; "one command, any platform" deployment; open source with no mandatory third-party cloud dependency ("Host anywhere").

## Capabilities and Constraints

Confirmed built-in capabilities per the homepage: full-stack auth (username/email/social), typed data models, type-safe client↔server RPC, background jobs (cron/one-off/retry), provider-agnostic email sending, typed WebSockets, static rendering/SSG, typed routes & links, custom REST/webhook HTTP API. Currently React + Node.js only per the FAQ ("Do you support only React & Node.js currently?").

## Brand Commitments

Name "Wasp" (Web App SPecification) is load-bearing wordplay — do not treat as arbitrary. Logo/favicon: a black wasp glyph on a rounded gold-square field (`#f5c842` bg / `#111` mark) — this exact gold is the brand's real signature color, distinct from the desaturated mustard the current site theme uses for links (`#bf9900`; see DESIGN.md tension). Register: brand/marketing landing page (hero, social proof, FAQ, signup CTA above the fold, no auth required) — not a product/app UI.

## Evidence on Hand

Real testimonials with named attribution (Marcel Coetzee/Hireveld, Kenny Rogers, Hrvoje Pavlinovic/Memoato, Robbie Artress/PeakMastering), a YC badge, three linked example apps (Todo, CoverLetterGPT, Waspello) and three "built on Wasp" production apps (Scribeist, Microinfluencer Club, Searchcraft) with live links. No pricing page evidence captured (open source, no pricing section on homepage).

## Product Principles

- "Greatest > latest" — curate proven web-dev patterns rather than chase bleeding edge.
- Full-stack is the starting design point, not an afterthought bolted onto a frontend framework.
- Managed/opinionated experience over DIY by default; peel back to manual control only where needed ("you build it down, not up").
- Designed for humans first; AI-friendliness is a consequence of that (less boilerplate, clearer structure), not a separate optimization target.
