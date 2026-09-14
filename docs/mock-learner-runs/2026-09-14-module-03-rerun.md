# Mock Learner Gremlin dogfood run - Module 03 (re-run, manual orchestration), 2026-09-14

*Simulation only. Both attempts below are agent-produced role-play, not a real human learner's
work, and neither persona had actual Microsoft 365 Copilot access to drive - both disclosed this
explicitly. This run tests whether Module 03's gate mechanism holds up against a genuinely blind
attempt, including a deliberately flawed one; it does not, and cannot, prove anything about a real
human's experience with this module. See `~/hekton/gremlins/coaching/mock-learner-gremlin.md`
(v0.1) for the Gremlin this run dogfoods.*

## Why this is a re-run, and what it was specifically designed to test

Module 03 already had one Mock Learner Gremlin run, 2026-09-14, as part of a six-module batch
executed via the Workflow tool (`docs/mock-learner-runs/2026-09-14-module-03.md`, left in place
unmodified - this file supersedes it as the more trustworthy record). That original run's headline
finding was the most striking result across all nine modules run to date: the scripted-flaw
persona's self-check **did not catch** a real, planted error (Owen Kowalczyk filed under "Items to
Route to Dalton" instead of "Needs Johnny's Decision") - the self-check instead rationalized the
resulting empty section as "the omit-empty-section rule working correctly." Only independent
verification caught it.

This re-run deliberately reused the exact same scripted flaw, unchanged, specifically to test
whether that finding was a real property of Module 03's checklist, or an artifact of the workflow
pipeline's own self-check step (which by the time of the original run had no standardized prompt -
Design Principle 7, written *after* that finding, mandates one now). Same flaw, same fixtures, same
personas - the only deliberate variable changed is that this run's self-check used the
now-standardized reveal template ("actually re-verify against source, don't just restate").

## Results

| | Priya (diligent) | Marcus (scripted flaw) |
|---|---|---|
| Crafted prompt (4 labels, both filenames, reusability) | Correct, fully reusable | Correct, fully reusable |
| Owen Kowalczyk's section | Correct - "Needs Johnny's Decision" | **Wrong (scripted)** - filed under "Items to Route to Dalton"; "Needs Johnny's Decision" wrongly omitted |
| Other 4 clients' sections | All correct | All correct |
| Naive-run transcript | No headers, some editorializing (as expected) | Same shape; interestingly, its own prose about Owen ("you'll probably want to loop in Johnny") independently got the classification right in plain language |
| Self-check verdict | PASS | **FAIL - caught the Owen misfiling directly, unprompted beyond the standardized template** |
| Independent verification verdict | PASS (matches self-check exactly) | FAIL (matches self-check exactly) |

## The finding: the standardized self-check template closed the exact gap the original run found

**This is the headline result, and it reverses the original run's own conclusion.** Marcus's
self-check this time re-read Owen's actual roster entry against the style guide's actual section
definitions ("I need to trace why, not just note it's missing... I went back to the roster fixture
and re-read Owen Kowalczyk's entry fresh... That's a direct match to 'Needs Johnny's Decision,' not
'Items to Route to Dalton.' I filed Owen under the wrong section.") - naming the exact same error
the original run's self-check missed entirely, using the exact same underlying material. Independent
verification agreed with the self-check's verdict precisely, on both personas.

**The likely cause is Design Principle 7's own standardized instruction** ("go back and actually
re-read your own submission against the source material, not just against what you remember
writing"), which explicitly tells the self-check to re-derive the sorting from the fixture rather
than re-read its own prior reasoning. The original run's self-check step predated that standard -
whatever prompt it used is not preserved in this record, which is itself part of why Design
Principle 7 exists (an unstandardized self-check prompt makes two runs' results incomparable).
This run is the first direct test of whether the standardized template alone - with no change to
Module 03's checklist wording at all - closes a gap previously attributed to the checklist.

**It does, at least for this one flaw, this one run.** This reframes the original run's own
Recommendation #1 (add a content-accuracy check to the Required-gate checklist, since presence/
header checks alone let the error through) as a weaker priority than it looked: the checklist
itself was never changed for this run, and the flaw was still caught, because the self-check step
that operates *inside* that checklist was made to actually re-verify rather than restate. A
checklist-wording fix might still be worth doing as a second line of defense, but the evidence for
"the checklist itself has to change" is now considerably weaker than the original run implied -
the more load-bearing fix turned out to be how the self-check is elicited, not what it's checking
against.

**One naturally-occurring detail worth noting, not scripted:** Marcus's own simulated naive-run
transcript (no style guide attached) independently got Owen's classification right in plain prose
("you'll probably want to loop in Johnny before doing anything with it"), the same inversion the
module's own pre-shipping dry run and the original Mock Learner Gremlin run both separately found -
a naive, unstructured response landing on the right answer while a structured, "better" one gets it
wrong. This is now the third independent occurrence of that specific inversion (the module's dry
run, the original workflow run, and this re-run), which is real, if informal, evidence it's a
stable property of this fixture pair rather than a one-off coincidence.

## What this run does and doesn't prove

- **Proves:** the standardized self-check reveal template (Design Principle 7) catches this
  specific planted error, with no checklist wording change, directly contradicting the original
  run's implicit assumption that the checklist itself was the gap.
- **Proves:** this is not evidence the original run's finding was *wrong* about what happened in
  that run - only that whatever produced that run's miss is not a stable, checklist-level property
  of Module 03, since the same flaw against the same checklist, self-checked differently, is now
  caught.
- **Does not prove:** that the standardized template will catch every planted flaw in every module
  - this run tests one flaw shape (a plausible pattern-matching misclassification) that happens to
  be a fairly direct fixture-vs-output comparison once a learner is told to actually make it. A
  flaw requiring a harder inferential leap might still evade even a well-prompted self-check.
- **Does not prove:** whether Recommendation #1 from the original run (tightening the checklist
  itself) is now unnecessary - it may still be worth doing as defense-in-depth against a *future*
  self-check that's run less carefully than this one was, even if it isn't strictly required to
  catch this specific flaw under the current standardized template. Downgraded from "needed," not
  removed from consideration.

## Friction log

Neither persona reported confusion about the exercise. Priya's self-check independently re-verified
the reusability check by walking through each of the four prompt sections a second time looking
specifically for hardcoded week-specific content, rather than assuming her own careful first draft
was necessarily reusable - a good instance of the standardized template's "don't just restate"
instruction doing real work even on an already-correct submission.

## Methodological note

Written directly from six raw agent outputs (two attempts, two self-checks, two independent
verifications) with no synthesis-agent intermediary, per Design Principle 8. One operator error
occurred mid-run (a placeholder message accidentally sent to Module 01's already-completed Priya
agent instead of Module 03's) - caught immediately, had no effect on either module's results, and
is noted here for the same reason this whole re-run exists: say what actually happened, including
the orchestrator's own mistakes, rather than only what went according to plan.
