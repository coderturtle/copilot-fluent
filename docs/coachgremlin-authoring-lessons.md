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

## 10. Fixtures need a real site route — this was a structural gap, not an authoring mistake

Module 02's review found that `site/src/content/config.ts` only ever defined `buildlog` and
`modules` collections — nothing serves `modules/*/fixtures/*.md` on the published site, so every
module's fixture links 404 for a real learner (the same underlying issue as the already-known
relative-link problem between modules). This is being fixed once, at the infrastructure level
(a new `fixtures` collection, a matching route, and a remark plugin rewriting relative `.md` links
at render time) rather than per-module. Don't re-flag this per module once it's fixed — check
`docs/decisions.md` for the fix's own ADR row and confirm it's live before assuming it's still
broken.

## 11. An exact-string match must target the actual erroneous claim, not an incidental true token

A planted error's grading-key string should be something that is *itself wrong* — a false figure,
a false date, a fabricated fact. Don't key on a bystander token that happens to appear near the
error (e.g. a *correct* name that shows up in a sentence making a false claim) — a learner (or a
lenient grader) can match the token without ever identifying what was actually wrong. Check each
planted error's key string in isolation: does matching this exact string, by itself, prove the
learner caught the actual mistake, or could it match while missing the point entirely?

## 12. A verification-method taxonomy must be mutually exclusive and internally consistent

If a module's gate asks the learner to label each finding with "how would you verify this," the
labels need real, distinct criteria — not two labels that could both apply to the same finding
(e.g. "citation check" vs. "human review" when the flawed claim has no citation to check either
way). Check that no single planted error's own correct label is ambiguous between two of your
categories, and check that the *correction* text doesn't contradict the label it's paired with
(e.g. don't have a "no record exists" label paired with a correction that asserts a specific
record's contents).

## 13. Re-verify a citation's own metadata (dates, "last updated" stamps), not just its content

`docs/brand.md`'s product-drift rule requires a "verified against the product as of DATE"
convention. That date must be checked against the source's *actual* last-updated stamp, not
estimated — Module 02's grading key cited a real Microsoft Purview page but got its "last updated"
date wrong, which makes the verification claim itself unreproducible even though the underlying
fact was still current. If you fetch a live source, copy its real revision date, don't approximate
it.

## 14. "Fictional format" identifiers can still read as realistic — the ban is about appearance, not truth

`docs/brand.md` prohibits "realistic account numbers or identifiers," full stop — an invented but
structurally realistic ID (e.g. `KC-TIN-77841`, a plausible-looking tax/account reference) violates
this even though it isn't a real number. Use identifiers that are obviously placeholder-shaped
(e.g. "Client Ref: [internal]" or a clearly non-numeric label) rather than anything formatted like
a real financial identifier.

## 15. A planted error can itself smuggle in a banned implication — check the error's content, not just whether it's flagged as wrong

Marking a claim as "this is the error to catch" doesn't exempt its literal text from brand rules
that apply "anywhere." If a planted error states that compliance already reviewed something, or
implies Dalton (a fictional character with no real compliance authority) performed a compliance
function, that's a rule violation in the fixture's own content regardless of the fact that the
exercise wants the learner to identify it as false. Write planted errors that are wrong in the
*specific fact* they assert (a date, a figure, a name) without also asserting something that
independently violates a brand/liability rule.

## 16. Don't design a "quick check" that rewards the opposite of the module's own stated skill

If a module teaches verification-by-comparing-to-source, an ungraded self-check at the end
shouldn't frame *not* needing to reread the source as the goal — that teaches confidence-from-
memory, which is the failure mode the module exists to correct. Any reflective/self-check section
needs to reinforce the same habit the graded gate checks for, not a different or opposite one.

---

Apply all sixteen lessons to every module going forward, and to any module's own fix pass. Update
this file with any new generalizable lesson a later module's cross-model review surfaces — this is
a living authoring guide, not a one-time postmortem.
