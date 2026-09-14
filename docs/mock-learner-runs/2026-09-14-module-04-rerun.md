# Mock Learner Gremlin dogfood run - Module 04 (re-run, manual orchestration), 2026-09-14

*Simulation only. Both attempts below are agent-produced role-play, not a real human learner's
work, and neither persona had actual Microsoft 365 Copilot access to drive - both disclosed this
explicitly. This run tests whether Module 04's gate mechanism holds up against a genuinely blind
attempt, including a deliberately flawed one; it does not, and cannot, prove anything about a real
human's experience with this module. See `~/hekton/gremlins/coaching/mock-learner-gremlin.md`
(v0.1) for the Gremlin this run dogfoods.*

## Why this is a re-run, and what's different

Module 04's original run (`docs/mock-learner-runs/2026-09-14-module-04.md`, part of the six-module
Workflow-tool batch) had a real pipeline defect: the design stage's assembled content silently
excluded Part 6 ("write your own personal instructions") from what either persona was given, and
the raw run then misreported "both personas skipped Part 6" as a suspicious learner-behavior
finding - later corrected in that same file once found. **This re-run includes the genuine, full
six-part exercise**, with Part 6 tested for real for the first time, plus the original Part 5
scripted flaw reused (to check it replicates under trustworthy orchestration) and a new, second
scripted flaw specifically targeting Part 6 (untested until now).

## Results

| | Priya (diligent) | Marcus (scripted flaws) |
|---|---|---|
| Parts 1-4 (conversations, renaming, notebook, deletion) | Correct, except one hedge - see finding below | Correct |
| Part 5, statement 4 | TRUE (correct) | **FALSE (scripted error)** - conflates the 7-day chat-history-clearing rule with the independent saved-memories lifecycle |
| Part 5, statements 1-3 | Correct | Correct |
| Part 6, specificity (>=3 of N bullets concrete) | 5/5 bullets concrete | **3/4** - one bullet (scripted) describes the learner's own verification process, not a checkable Copilot-output trait |
| Self-check verdict | **PASS** (self-check treated a hedge as a flagged-but-passing issue) | FAIL (correctly, on both scripted flaws) |
| Independent verification verdict | **FAIL** (the same hedge ruled a hard gate failure) | FAIL (matches self-check exactly) |

## The findings: two scripted flaws replicate cleanly, plus one real, unscripted tier disagreement

**Both scripted flaws worked as designed and were caught by both tiers, for Marcus.** Statement 4's
conflation (a real, correctly-recalled fact about chat-history clearing, misapplied to the separate
saved-memories mechanism) was caught identically by self-check and independent verification, both
naming the same root cause. The new Part 6 flaw (a bullet reading as concrete on the surface -
"always double-check figures against the source data" - but actually describing the learner's own
verification habit rather than a trait Copilot's own output would visibly show) was also caught
identically by both tiers, both quoting the same distinguishing language from the grading
criteria. This is the second consecutive re-run (after Module 03) where the standardized self-check
template caught a real planted flaw with no checklist wording changed.

**The more interesting result is unscripted, on Priya's submission.** Her Part 3 answer stated a
clean, correct outcome (a real notebook was created, with exactly the right three conversations)
and then added a hedge: "since I'm simulating, I can't be fully certain which case applies in a
real session, so I'm noting both paths here for honesty." Her own self-check caught this hedge on
re-reading, but classified it gently - "a soft pass with a flag" - and her overall self-reported
verdict was PASS. Independent verification, grading the identical text, ruled it a hard FAIL: the
gate's own wording requires one committed outcome, "not both possibilities hedged together," and a
hedge is a hedge regardless of how the surrounding content reads. Since the Required Gate is
all-or-nothing, that single item's failure sinks the whole verdict under independent verification,
while self-check's own overall judgment let the same fact pattern through.

This is a **different kind of tier gap than any prior run has found**. It isn't about checklist
wording (Module 06, Module 09) or about self-check under-verifying (the original Module 03 run).
Both graders here read the exact same text, under the exact same standardized instruction to
"actually re-verify... don't just restate," and diverged anyway - because "does a disclosed hedge
count as satisfying a bar that explicitly forbids hedging" is a severity judgment call, not a
fact-lookup, and the two graders made that judgment differently even with identical information in
front of them. The standardized self-check template closes gaps caused by under-verification; it
does not close gaps caused by two honest readers weighing the same fact differently.

## What this run does and doesn't prove

- **Proves:** the standardized self-check template continues to catch planted flaws reliably, now
  confirmed across two different modules (03, 04) and three distinct flaw shapes (a
  misclassification, a fact-conflation, a process-vs-output-rule confusion).
- **Proves:** even under that same standardized template, self-check and independent verification
  can still diverge on a genuine, unscripted submission - not because one grader missed something
  the other caught, but because they weighed an identical, fully-disclosed fact differently. This is
  real evidence that "the self-check template fixes the gap" (Module 03's finding) is not a
  complete fix - it closes one failure mode (under-verification) without closing another
  (leniency-vs-strictness on a borderline judgment call).
- **Does not prove:** which of the two verdicts (self-check's soft pass, independent verification's
  hard fail) is the "right" one to design toward - that's a real open design question about how
  strictly a hedge should be penalized, not something this run resolves.
- **Does not prove:** that Part 6, now tested for the first time, has no other undiscovered issues
  beyond the one scripted flaw - only that this specific flaw shape was caught correctly.

## Friction log

Priya's own self-check is worth quoting directly, since it shows the persona catching a real issue
and still under-weighting its severity: "By describing both and then admitting uncertainty about
which is real, I muddied a checklist item that's supposed to have one clean, checkable state... I'll
call this a soft pass with a flag." That's an accurate diagnosis paired with a lenient verdict - a
useful, concrete example of the gap this report's headline finding describes, in the persona's own
words rather than summarized after the fact.

## Methodological note

Written directly from six raw agent outputs (two attempts, two self-checks, two independent
verifications) with no synthesis-agent intermediary, per Design Principle 8.
