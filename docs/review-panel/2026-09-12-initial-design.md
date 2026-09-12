# Workshop Review Panel — Copilot Fluent, Initial Design (2026-09-12)

Reviewed: `docs/workshop-design.md` (post-Phase-1, post-3-cycle-DDD), `docs/decisions.md`, `README.md`. Seven personas, fanned out independently per `~/hekton/gremlins/workshop/workshop-review-panel.md`. Raw critiques: `docs/review-panel/2026-09-12-personas/`.

No persona returned empty or purely complimentary. The **End-User / Target Learner** persona was deliberately re-aimed from its canonical "advanced agent-literate practitioner" framing to this workshop's real audience (a non-technical knowledge worker) — the first time this factory's review panel has run against a non-engineering audience.

## Cross-persona convergences (higher-confidence signal)

**A. The document's own honesty notes aren't consistently wired into a blocking mechanism.** Three personas independently found the same underlying gap from different angles: the **Skeptical Critic** caught §7 overclaiming a liability gap as "not left uncovered by either tier" when Tier-2's own reliability is admittedly unproven; the **Security-Conscious Reviewer** found §12's DLP/Purview honesty flag has no equivalent blocking tag to `docs/brand.md`'s `[not yet executable]` convention, risking a future pass treating it as advisory; the **AI/ML Practitioner** found `decisions.md`'s original ADR still lists "Work IQ" as a taught subject, contradicting §4's later, correct scope-out. Pattern: naming a limit honestly in prose is not the same as tracking it as an enforceable dependency — three separate instances of the same structural gap.

**B. Internal drafting/process vocabulary risks leaking into learner-facing surfaces.** The **End-User** persona caught README's stale "Work IQ" mention contradicting the design doc's own terminology ban; the **Developer Evangelist** independently flagged that internal vocabulary ("Tier 1/Tier 2," "self-attested," "coverage class") must never leak into marketing copy. Two personas, two different instances, same underlying risk.

**C. The Kellerman & Castle cast is decorative to the actual gating mechanism, from two different angles.** The **Instructional Designer** found no Tier-1/Tier-2 check ever references a character by name (every mechanical check keys on data) — the cast could be renamed without breaking anything. The **Developer Evangelist** independently argued the cast's real value (as an Easter egg) is being wasted by never surfacing it to learners. Both point at the same object — the cast is currently pure flavor, not a lever either the pedagogy or the marketing actually pulls.

## Single-persona findings (each real, not averaged away)

- **AI/ML Practitioner:** "Work IQ" characterization as "dated marketing aside" undersells its current real status as a named platform (GA'd June 2026, own docs/CLI/MCP/APIs) — the scope-out decision is still right, the reasoning given is stale.
- **Developer Evangelist:** the enterprise-seat-only prerequisite is real distribution friction no copy can fix.
- **End-User / Target Learner:** §11's tenant/admin preflight is written in IT vocabulary a non-technical learner can't act on, and the document's own "TBD fallback" for Module 08 means a genuinely blocked learner today has nothing to do but quit.
- **Professional Technical Writer:** `[self-attested]` (a §7 table tag) and "self-administered"/"mechanically graded" (§8 prose terms) are near-synonyms that are never reconciled into consistent table markup; an orphaned "(N8)" label with no key; §7's table is functionally embedded essays (Module 09's row ~450 words), undermining scannability.
- **Skeptical Practitioner / Critic:** an unsupported "flagship" superlative on Module 09's takeaway; an unearned comparative claim about this workshop's outline being "richer" than `borrow-native`'s starting point; §6 states the success criterion unhedged before §10 insists on hedging everywhere else.
- **Instructional Designer (most severe single finding):** Module 03 — the hard prerequisite for Modules 04-08 — is gated almost entirely by presence-only and self-attested checks; nothing proves the prompt was ever actually run against Copilot. The weakest gate in the arc sits at its structural base.
- **Security-Conscious Reviewer:** Module 02's prompt-injection mitigation is a stated design intent with no validation step; the workshop's Tier-2 self-grading is itself an instance of the over-reliance Module 02 teaches against, with no callout turning that into a teaching moment; Module 02's "what wouldn't you paste" answer isn't bound to actually test §12's core lesson.

## Prioritized action list

1. **(Severity: high, Instructional Designer)** Strengthen Module 03's gate so at least one item proves the prompt was actually executed against Copilot, not merely self-attested — every downstream module inherits this weakness otherwise.
2. **(Cross-cutting, convergence A)** Wire §12's DLP/Purview re-verification and the `decisions.md` Work-IQ inconsistency into `docs/next-actions.md` as named blockers, matching the `[not yet executable]` convention already used for `docs/brand.md`.
3. **(Skeptical Critic)** Fix the four overclaiming/inconsistency instances: soften §7's "not left uncovered by either tier," cut "flagship," soften the unearned `borrow-native` comparative, add §6's hedge.
4. **(Technical Writer)** Resolve the `[self-attested]`/"self-administered"/"mechanically graded" near-collision; remove the orphaned "(N8)" label.
5. **(Security-Conscious Reviewer)** Add an explicit content-time validation step for Module 02's injection-mitigation design, and bind its "what wouldn't you paste" Tier-1 item to §12's actual teaching point.
6. **(Instructional Designer)** Soften §9's "one continuing story" framing — the capstone deliberately introduces disconnected new facts per module by design (anti-gaming), so the story doesn't accumulate the way the phrase implies.
7. **(Deferred — human/brand call, not a doc-text fix)** Developer Evangelist's proposal to reveal the Kellerman & Castle Easter egg post-capstone is a genuine, appealing idea but is a brand/tone decision for Phase 3, not something to decide unilaterally here.
8. **(Deferred — out of this design doc's scope, already tracked)** End-User's site/fixture-upload mechanics gap is Phase 4's job per §13; already tracked. The "TBD fallback" dead-ends for blocked learners are a real, unresolved risk for content-time closure — noted, not solved here.
9. **(Deferred — structural, Phase 3 concern)** Technical Writer's "table is embedded essays" finding is real but a full restructure (splitting per-module prose into footnotes/appendices) is Phase 3's module-README-authoring job, not a rewrite of this design doc's central table right now.

Items 1-6 applied in this same pass (see `docs/decisions.md` for the ADR). Items 7-9 recorded in `docs/next-actions.md`, not silently dropped.
