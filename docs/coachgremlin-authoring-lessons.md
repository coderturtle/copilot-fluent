# Content-authoring lessons (Coachgremlin), started 2026-09-12

Standing lessons for every module's content-authoring pass in this workshop, extracted from a
16-finding cross-model (Codex) adversarial review of Module 01's first authored draft — read
this before authoring or reviewing any module, not just Module 01.

## 1. `docs/brand.md`'s banned-vocabulary list has no "with a gloss" exception

Read `docs/brand.md`'s "Hard rules" section directly, verbatim, before writing a module page —
do not paraphrase it from memory or assume a workaround. It explicitly bans "Tier 1," "Tier 2,"
"self-attested," "grading key," and several other terms from learner-facing copy, full stop.
Module 01's first draft used all three with an inline plain-language gloss and its own ADR
reasoned that the gloss made it compliant — that reasoning invented an exception the actual rule
doesn't contain. Use plain functional language instead ("a short checklist," "an answer key kept
hidden until you check yourself," "you're trusting yourself to run this honestly") with zero
occurrences of the literal banned terms, gloss or not.

## 2. The financial-liability rules are binding on every fixture and output, literally, not just "in scope"

`docs/brand.md`'s six liability rules (simulation-only marking, no buy/sell/hold/tax/suitability
language anywhere, jurisdiction assumption, distribution warning, no compliance-review
implication, no realistic account numbers) apply to **every fixture, prompt, instruction, and
example output** — including a module's own shipped example/dry-run transcripts. Check each
fixture and each dry-run artifact against this list explicitly before committing; don't assume a
fixture is compliant just because it avoids the most obvious violation. Module 01's fixture
mentioned a client's "tax situation" (a direct violation) and shipped an example Copilot
transcript with no simulation-only marking anywhere in it.

## 3. A "hidden" Tier 1 key needs an actual, describable reveal mechanism — this workshop has no live grading backend

There is no live Coachgremlin service, API, or human grader a real published learner can submit
to. If a Tier 1 checklist's key is kept genuinely hidden with no described way for a learner to
ever check their own work against it, the gate is unusable in production, not just imperfect —
this is a **design bug**, not a minor gap. Follow `closed-book`'s own precedent instead: the key
is revealed to the learner only *after* they've committed to their own attempt in writing (an
honor-system self-check, not a service call). Structure every module's Tier 1 section so the
learner: (1) writes/saves their attempt, (2) then reveals a collapsed/appended answer section to
self-grade. Never design a check where the described gate literally cannot be evaluated by the
person doing the exercise.

## 4. Never commit the literal secret values in dry-run evidence

A dry run's job is to prove the *checking logic* works, not to publish the answer. Module 01's
dry-run `check-result.md` printed all 5 hidden facts verbatim, and its example "grounded"
transcript contained 4 of them — in the same commit as the "hidden" key, defeating the whole
point. Describe a dry run's pass/fail result abstractly ("the grounded transcript matched 4 of 5
key facts; the ungrounded one matched 0" — a count, not a quote) rather than quoting the actual
secret strings anywhere outside the one key file itself, and don't link that key file's directory
from anywhere a learner would navigate through.

## 5. Verify every real-product claim against a live, current Microsoft source — don't recall it

Any claim about how a specific Copilot surface actually behaves (what Researcher can do
unattended, what distinguishes chat from an agent, what Excel Copilot's modes are) must be
fetched from Microsoft's current published docs at authoring time and cited, per
`docs/brand.md`'s own product-drift rule ("verified against the product as of DATE"). Module 01
asserted specifics about Researcher continuing to run after the window is closed, and an
Excel-vs-Word distinction, that don't hold up against Microsoft's own current documentation.
Training-data recollection about a live SaaS product is exactly the failure mode this whole
factory has learned, repeatedly, to distrust — this applies to product-behavior claims as much as
to any other fact.

## 6. Never link a learner-facing module README to `docs/workshop-design.md` or any other internal doc

This mistake already happened once at the root `README.md` level (fixed by the 2026-09-12
usability panel) and recurred at the module level in Module 01's "Full design" link — which also
has no corresponding published route on the site (the site only globs `modules/*/README.md` and
`docs/build-log/*.md`, confirmed in `site/src/content/config.ts`) and would have exposed the
Kellerman & Castle reveal mechanism ahead of the capstone. If a module needs a design-doc pointer
for a maintainer, put it in a comment or in `docs/decisions.md`, never as a clickable learner-facing
link.

## 7. Don't let an answer-supplying rubric grade the wrong thing

If a Tier 2 grading prompt lists example correct answers to make its own instructions clearer,
check whether a learner could pass by just rephrasing the examples instead of doing their own
comparison. Prefer categories/dimensions to check for over ready-made example answers, or make
clear the examples are illustrative of *kind*, not content, and grade for specificity relative to
the learner's *own* named apps/scenario, not a match to the illustration.

## 8. State self-attestation's real limits honestly — don't oversell what an unproctored check proves

"Matching hidden facts means Copilot actually used the document" is not a true statement for a
take-home, self-reported exercise — a learner could fabricate matching text by hand. Say instead
that this is a good-faith self-check for building the habit, not proof against a determined
attempt to fake it, matching the same honesty discipline `docs/workshop-design.md` already applies
to the Tier 2 AI-grades-itself circularity. Don't claim a check "proves" something an unproctored,
self-attested mechanism cannot actually prove.

## 9. Match the design doc's own scenario/cast assignment for that module

Check `docs/workshop-design.md`'s own row/notes for which named cast member assigns or frames each
module's task before authoring — don't substitute a generic framing device even if it's easier to
write. Module 01's design intended Johnny to onboard the learner and Oda Mae to assign the
comparison task; the authored version dropped Johnny and reduced Oda Mae to a document byline.

---

Apply all nine lessons to every module going forward, and to Module 01's own fix pass. Update this
file with any new generalizable lesson a later module's cross-model review surfaces — this is a
living authoring guide, not a one-time postmortem.
