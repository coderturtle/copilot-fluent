# Usability/Digestibility/Value Panel — Copilot Fluent (2026-09-12)

Reviewed: `README.md`, `docs/workshop-design.md`, `modules/README.md`, and all nine `modules/*/README.md` — the full set of learner-facing docs. Three personas, fanned out independently: **Target Learner**, **Instructional Designer**, **Skeptical Practitioner**. This is a distinct, second panel from the same day's [7-persona Workshop Review Panel](2026-09-12-initial-design.md), which reviewed the naming and design docs before this content existed in skeleton form; this panel reviewed what a learner actually encounters when they land on the modules themselves.

No persona returned an empty or purely complimentary pass.

## Cross-persona convergences (higher-confidence signal)

**A. Internal factory vocabulary leaks into learner-facing module pages, not just the top-level docs.** The first Workshop Review Panel (2026-09-12, initial design) already flagged that "Tier 1/Tier 2," "self-attested," and "coverage class" must never leak into learner-facing copy, and `modules/README.md`'s index page was written with a plain-language translation table for exactly this reason. All three personas here independently found that translation never made it into the individual module pages: a learner who lands directly on a module (the site's primary learner surface, not the repo index) hits "Coachgremlin," "self-attested," "grading-only key," and "closed-set exercise" used as raw, unexplained terms. **Target Learner** framed this as "who is Coachgremlin and why does a stranger get to author my exercise"; **Instructional Designer** framed it as an inconsistency between the index's own stated voice and the module pages' actual voice; **Skeptical Practitioner** framed it as the workshop failing its own stated audience contract ("no coding background assumed") on its own module pages.

**B. A stated onboarding promise is contradicted by a stated support path.** `README.md` promises "no git, no command line" as a hard audience qualifier, then routes "Something wrong?" (and the skeleton-status callout) straight to GitHub Issues — unusable by a learner with no GitHub account. **Target Learner** caught this directly as a "how would I even do this" dead end; **Skeptical Practitioner** independently flagged it as the kind of self-contradiction that undermines trust in every other claim on the same page.

**C. A maintainer-only document is presented to learners as optional reading.** `README.md`'s "Key docs" section linked `docs/workshop-design.md` directly to learners. That document opens with internal process narrative (three-agent review chain, Fable/Codex/Opus cycles, doubt-driven development, Phase 3/4 staging, ADR-style rows) that assumes an audience of workshop builders, not workshop takers. **Instructional Designer** flagged the document as fundamentally the wrong reading level and register for the stated audience; **Target Learner** reported opening the link and bouncing off within the first paragraph.

## Single-persona findings (each real, not averaged away)

- **Target Learner:** no page anywhere states how long a module takes. For "a busy professional with a real job alongside this," this is a real triage gap — there's no way to decide "do this at lunch" versus "block an afternoon" before starting.
- **Instructional Designer:** the Kellerman & Castle scenario, while well-designed as a gating mechanism, is engaged with fairly shallowly at the level of individual module prose — a real finding, but a scenario-writing depth question, not a structural defect fixable by editing existing text.
- **Instructional Designer:** Module 04 ("Conversations, Notebooks, and Memory") bundles three fairly distinct skills (conversation hygiene, notebooks, and a cross-domain memory/instructions bullet) into one module in a way that may be doing too much per gate; worth a design-level look, not a same-pass text fix.
- **Skeptical Practitioner:** Modules 04 through 08's titles are functional but generic enough that a learner skimming the arc table can't easily tell what's distinctive about each one relative to its neighbors — a retitling pass is a real option, but changes module identity and is out of scope for a defect-fix pass.
- **Skeptical Practitioner:** the workshop's own Tier-2 design has the same product (Copilot) both producing and grading the learner's work — already named honestly in `docs/workshop-design.md` §8 as an untested hypothesis, but the panel flags it as a standing confidence risk worth watching once real learners hit it, not something a wording fix resolves.

## Prioritized action list

1. **(Convergence A)** Carry `modules/README.md`'s plain-language Tier 1/2 table voice into every module page: replace "Coachgremlin" wherever it addresses the learner, and add one-line glosses next to "self-attested," "grading-only key," and "closed-set exercise" in each module's Required Gate section.
2. **(Convergence B)** Replace the GitHub Issues links in `README.md` with a plain-language contact method that doesn't require a GitHub account.
3. **(Convergence C)** Stop linking `docs/workshop-design.md` to learners from `README.md`'s Key docs section; route through `docs/maintainers.md` instead, which already self-identifies as the internal/agent-facing doc.
4. **(Target Learner)** Add a rough, explicitly-hedged time estimate per module to `modules/README.md`'s arc table, plus a total-arc estimate to `docs/workshop-design.md` §3.
5. **(Deferred — scenario-writing depth, not a mechanical fix)** Deepen Kellerman & Castle's engagement at the individual-module-prose level once real content is authored.
6. **(Deferred — design-level, not a text fix)** Reassess whether Module 04 bundles too many distinct skills into one gate.
7. **(Deferred — changes module identity, out of scope for this pass)** Consider retitling Modules 04-08 for more distinctive, scannable names.
8. **(Deferred — a standing risk to monitor, not resolved by wording)** The AI-grades-itself circularity in Tier 2 remains a real, named, unaddressed confidence risk once real learners are grading real work against a rubric the same product both wrote the exercise for and grades against.

Items 1-4 applied in this same pass — see `docs/decisions.md` for the ADR row and the exact files changed. Items 5-8 recorded in `docs/next-actions.md`, not silently dropped.

## A note on process, stated honestly

Unlike the earlier Phase 3/4/5 work recorded in `docs/decisions.md` (which adopted a standing rule that every phase gets a cross-model, Codex review before being called done), this fix pass did **not** get a second-model review. This is a deliberate, smaller-scope exception — items 1-4 are mechanical, low-ambiguity text edits (terminology substitution, a broken link, a misplaced link, an added column) rather than a design decision — not a silent departure from the repo's own standing discipline. Flagged here so it isn't mistaken for having received the same scrutiny as the earlier design and site-build work.
