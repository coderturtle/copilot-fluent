# Brand / Style Layer: Copilot Fluent

> The only place this workshop's personality lives. `README.md` and, once built, `site/`'s layout and `astro.config.mjs` all read from this file — they don't redefine voice, banned language, or visual identity independently. Adapted from `heartbeat/docs/brand.md`, itself descended from `borrow-native/docs/brand.md` and `terminal-velocity/docs/brand.md`.

## Site identity

**Name:** Copilot Fluent
**Tagline (proposed, not yet human-confirmed — a lightweight decision for whoever reworks the README):** "Get fluent with the Copilot your company already pays for."
**Parent brand:** Hekton
**Slug:** `copilot-fluent`

The name signals outcome, not tool: fluency, not just access. Chosen by coderturtle from candidates (Copilot Fluent, Prompt Native, Second Draft, The Assist, Copilot Certified, Inbox Native) — see `docs/decisions.md`.

**First workshop in this factory built for a non-engineering audience.** Every voice rule below assumes a reader who is competent at their job and new to AI tools specifically, not new to professional writing or new to learning generally. Never write down to that competence; do assume zero comfort with git, CLI, or developer jargon.

## Tone and voice

**Core voice:** A capable colleague showing you a better way to use a tool you already have, not a vendor selling AI, not an instructor grading homework. Plain, concrete, mildly dry. Never breathless about AI.

**Tone rules:**
- Show the produced artifact (the actual letter, the actual deck, the actual recap), not enthusiasm about the fact that AI made it.
- Any claim about what this workshop's teaching method achieves (the two-tier gate, the AI-graded rubric) must be marked as a hypothesis or stated intent unless there's real evidence behind it — `docs/workshop-design.md` §8 already does this rigorously for its own design; published content inherits the same discipline, not a softened version of it.
- Never state or imply that completing this workshop will make anyone pass AB-730. The only permitted framing is "designed to map to the exam's skills outline" — never "will prepare you to pass," never a pass rate (there is no data, and may never be).
- Never state a price or question count for AB-730, in any form, even as a hedge ("some sources say"). Neither is published by Microsoft; two earlier drafting passes in this workshop's own build got this wrong in different directions before the mistake was caught — treat any specific figure as a signal to re-check the live source, not to trust an inherited draft.
- Never claim Microsoft's own AB-730 prep material is passive, read-only, or lecture-only. It has real hands-on exercise units; this workshop's actual differentiators are narrower (gated, not just hands-on; broader domain coverage in one arc; a keepable takeaway) and each is stated with its own qualification, never oversold.
- Kellerman & Castle and its cast read completely straight through every module's gated exercise content — no winking, no "if you know you know," while a learner is still working through the workshop. The one exception, human-confirmed 2026-09-12: a single deliberate reveal of the Patrick Swayze references, placed after the capstone (exact form TBD in Phase 4) — see `docs/decisions.md`.
- Never present a Copilot output as trustworthy without naming the verification step; never imply the AI-graded rubric proves competence — name what it actually checked, not what it might mean.
- Never imply this workshop's fictional financial-services content is real financial, legal, or compliance advice, or that any character (especially Dalton) is a stand-in for a qualified professional.

## Hard rules

- **No em dash characters** in published content (README, module READMEs, build-log entries, the site). Design/planning docs under `docs/` are working documents and are exempt.
- No AI-slop openers ("In today's fast-paced world...", "It's important to note...").
- No unqualified efficacy superlatives ("game-changing," "revolutionary," "10x," "unlock your potential," "bulletproof").
- No engagement bait, fake scarcity, or "one weird trick" framing.
- **Exam-claim rule:** never a price, a question count, or a pass-rate claim for AB-730. Alignment claims are always "designed to map," never "will get you certified."
- **Financial-liability rules** (binding on every fixture, prompt, exercise instruction, and example output — `docs/workshop-design.md` §5):
  1. Every learner-produced or shipped example artifact carries a visible **simulation-only** marking.
  2. **No buy/sell/hold, suitability, tax, or investment-recommendation language**, anywhere.
  3. A stated jurisdiction assumption: the fictional firm operates in no real regulatory regime.
  4. A distribution warning: prompt packs are written against fictional data; reusing them against real client data is the learner's own regulated activity.
  5. No qualified-compliance-review implication: Dalton is a character, not a compliance function.
  6. All fixture data is plainly fictional — no realistic account numbers or identifiers.
- **Prohibition strings live only in this file, never quoted verbatim in learner-facing copy.** A module README that states a rule by quoting the exact banned phrase it's warning against (e.g. spelling out "guaranteed to pass" to say "never say this") will trip `check-brand-lint.sh`'s own literal-substring scan. Paraphrase the rule in learner-facing text; the exact banned strings live here and in the lint script's own source, nowhere else published.
- **Internal-process vocabulary never leaks into learner-facing copy** (Review Panel finding, Developer Evangelist persona): "Tier 1," "Tier 2," "self-attested," "coverage class," "directly exercised," "grading key," "DDD," "Gremlin" internals — these are this workshop's own build vocabulary, not the learner's. Module content describes what to *do* and what you get for doing it, never the scaffolding vocabulary this design doc uses to talk about itself.
- **Product-drift rule:** any specific claim about a Copilot feature or UI carries a "verified against the product as of DATE" convention rather than timeless present tense, since Microsoft ships changes on its own schedule.

## Banned phrases

Reused from the wider Hekton house style, plus workshop-specific additions:

- delve, tapestry, unlock, seamless, game-changing, revolutionize, transform your workflow, supercharge, effortlessly, cutting-edge, thought leader
- "in today's fast-paced world," "it's important to note," "at scale" (unless the content proves the scale)
- Workshop-specific: "guaranteed to pass," "ace the exam," "pass rate," "master Copilot," "unlock your potential," "10x your productivity," "become an AI power user" (vague, no concrete outcome), any buy/sell/hold/suitability/tax-recommendation phrasing (see the financial-liability rules above)

## Visual identity

Inherit the `terminal-velocity`/`borrow-native`/`heartbeat` Astro starter tokens rather than invent a new palette, once the site is built.

| Element | Direction |
|---|---|
| Overall mood | A clean, professional workshop — closer to a well-organized internal training site than a marketing landing page |
| Colour approach | Dark-on-light default; restrained palette; dark mode optional later |
| Typography | Crisp, generous whitespace, readable for a non-technical reader (no dense code blocks — this workshop has none) |
| Imagery | Artifact-led: a produced document, a checklist, a before/after comparison — never AI-glow aesthetics, never stock office photography |
| Decoration | No neon AI aesthetic, no hero banners, no gradient-mesh backgrounds |

## Gremlin and factory language rules

- Coachgremlin and the Workshop Gremlin are real, documented agents with concrete responsibilities (`~/hekton/gremlins/`) — reference them plainly in maintainer-facing docs (`docs/maintainers.md`), never in learner-facing copy, where "Gremlin" language would be actively confusing to this audience.
- A module README is a production artifact for a non-technical reader: plain, no factory jargon at all.

## Anti-goals

- Not an AI-hype funnel or a marketing page for Hekton.
- Not a certification mill — no claim that completing this workshop credentials anything on its own; AB-730 is a real, separate, proctored exam the learner still has to sit.
- Not financial, legal, or compliance advice, ever, regardless of how realistic the fictional scenario reads.
- Not overrun with internal factory/Gremlin vocabulary to the point of confusing a non-technical reader.
- Not a replacement for Microsoft's own official AB-730 prep material — it exists alongside it, not instead of it; never imply Microsoft's material is inadequate, only that this workshop adds something specific it doesn't (a gate, one continuing scenario, a keepable takeaway).

## Application map

| Artifact | Reads |
|---|---|
| `README.md` | Title + tagline, the pitch |
| `docs/maintainers.md` | Gremlin/factory language, classification boilerplate |
| `site/` (once built) | Tone, hard rules, banned phrases, visual identity |
| Module READMEs | Tone, hard rules, banned phrases, financial-liability rules, internal-vocabulary-leak rule |
| `check-brand-lint.sh` | Banned phrases list (mechanically enforced subset only — see `docs/workshop-design.md` §7 for what a phrase-list scan can't catch) |

## [TBD]: items for later

- [ ] Human confirmation of the proposed tagline (or a replacement)
- [ ] Exact form of the post-capstone Kellerman & Castle reveal (footer credit / Module 09 postscript / dedicated page)
- [ ] Exact accent colour token (once site is built)
- [ ] Favicon / wordmark treatment
- [ ] Dark mode colour tokens
