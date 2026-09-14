# Mock Learner Gremlin dogfood run - Module 05 (re-run, manual orchestration), 2026-09-14

*Simulation only. Both attempts below are agent-produced role-play, not a real human learner's
work, and neither persona had actual Microsoft 365 Copilot access to drive - both disclosed this
explicitly. This run tests whether Module 05's gate mechanism holds up against a genuinely blind
attempt, including a deliberately flawed one; it does not, and cannot, prove anything about a real
human's experience with this module. See `~/hekton/gremlins/coaching/mock-learner-gremlin.md`
(v0.1) for the Gremlin this run dogfoods.*

## Why this is a re-run, and what it was specifically designed to test

Module 05's original run (`docs/mock-learner-runs/2026-09-14-module-05.md`, part of the six-module
Workflow-tool batch) found the same 2016-conflation scripted flaw this re-run reuses, plus a real,
unresolved open question: independent verification gave *opposite verdicts* (clean vs. flagged) on
two near-identical "citing what other clients did" sentences, one per persona, with no way to tell
whether that reflected genuine content differences or the grader's own foreknowledge of which
submission was "the flawed one" (anchoring bias). That run's own recommendation #2 was to re-run
independent verification blind to persona identity. This re-run does exactly that.

## Results

| | Priya (diligent) | Marcus (scripted flaw) |
|---|---|---|
| Client letter | Correct, 235 words, prompt-only | Correct, 224 words, prompt-only |
| Summary word count / required figures | Correct, ~270 words, 214.6% present | Correct, ~270 words, 214.6% present |
| 2016 expense-ratio/international-allocation claim | **Correct** - the two 2016 events kept separate, drift described accurately | **Wrong (scripted)** - conflated into one false "held steady since 2016" claim |
| Part-B prompt: genuine attachment vs. narrative description | **Only described the note narratively** - never says "attached" or "pasted" | States "the attached note" explicitly |
| "Other clients" sentence | **Added an editorializing clause** not in the source ("so any decisions here touch a meaningful slice of long-standing relationships") | Stayed close to the source's own neutral framing, including its disclaiming clause |
| Self-check verdict | **FAIL** (self-caught both unscripted issues above) | FAIL (caught the scripted conflation) |
| Blind independent verification (persona identity withheld) | **FAIL**, same two reasons Priya's own self-check found | **FAIL**, same reason Marcus's own self-check found |

## The findings

**The scripted flaw replicated cleanly a third time.** Marcus's self-check caught the 2016
conflation directly, re-deriving the two separate events from the source rather than trusting his
own drafted sentence - the same pattern now confirmed across Modules 03, 04, and 05 under the
standardized self-check template.

**The more interesting result is what Priya's own self-check found, unscripted, in her own
"correct" submission.** Re-reading her own Part-B prompt against the gate's actual wording, she
noticed she had only *described* Wade's note narratively rather than stating it was attached or
pasted in - a genuine procedural gap her own first-pass submission never flagged. Separately,
re-reading her own "other clients" sentence against the grading criteria's "citing what other
clients did" pattern, she noticed she had added a clause the source doesn't contain ("so any
decisions here touch a meaningful slice of long-standing relationships") that ties the fact to
future decision-making - exactly the pattern the module exists to catch, in a document she wrote
believing it was clean. Neither of these was scripted; both are the standardized self-check
template doing exactly what it's for, on a submission with no planted error to find.

**The original run's "possible grader anchoring" question is now resolved, with real evidence
instead of a hypothesis.** This run's independent verification was given both submissions
anonymized (Submission A / Submission B, no persona labels, explicit instruction not to assume
either was "the flawed one") and graded them separately. The blind verdicts matched each persona's
own self-check exactly, item for item, with specific textual justification quoted for each: Marcus's
submission failed on the conflation but passed the "other clients" check (his sentence stayed close
to the source's own disclaiming language); Priya's submission passed on figure accuracy but failed
on both the attachment-procedure question and the "other clients" check (her sentence added
decision-relevance framing the source didn't have). **The verifier reached the right answer on both
submissions without knowing which one was "supposed to" fail** - real evidence that the original
run's differing verdicts reflected genuine, findable content differences between the two
submissions, not anchoring bias from knowing which persona was which. This is a materially stronger
result than the original run could produce, since that run's verifier always knew which submission
belonged to which persona.

## What this run does and doesn't prove

- **Proves:** the standardized self-check template continues to catch planted flaws, now confirmed
  three modules running (03, 04, 05), across three distinct flaw shapes.
- **Proves:** a careful, source-re-reading self-check can surface real, unscripted problems in an
  otherwise-correct submission - Priya's own re-check found two genuine issues neither the original
  draft nor a less careful self-check would have caught.
- **Proves:** blind (persona-anonymized) independent verification reaches the same conclusions as
  each submission's own honest self-check, with specific, content-grounded justification for the
  difference between two submissions rather than a verdict that depends on knowing which one is
  "the flawed one." This directly answers the original run's open anchoring-bias question.
- **Does not prove:** that grader anchoring never happens in any run - only that it wasn't the
  explanation for this specific prior finding, once tested directly rather than assumed.
- **Does not prove:** whether the module's own checklist wording should be tightened on the
  attachment-procedure question (currently implicit in "generated with Wade's note attached or
  pasted in") - this run surfaced a real ambiguity (does *describing* a source count as using it)
  worth a module-maintainer decision, not resolved here.

## Recommendation (report-only - not applied in this PR)

Consider tightening Module 05's Part B instructions to state explicitly that the source note must
be genuinely pasted or attached into the prompt, not merely described or characterized narratively
- Priya's own honest self-check is exactly the failure mode this closes: a careful learner can
still produce an accurate-sounding summary by describing a source from memory rather than actually
grounding the request in it, and the current instructions don't make clear that this distinction is
checked.

## Friction log

Both personas independently and correctly identified the recommendation-flavored "other clients"
pattern in their own text once explicitly directed to check for it - Marcus's self-check called his
own version "the closest call" even though it ultimately passed; Priya's failed hers outright. Real
signal that this pattern is genuinely subtle enough to require the explicit standardized
re-verification instruction, not something either persona would have caught on a passive restate.

## Methodological note

Written directly from five raw agent outputs (two attempts, two self-checks, one blind dual-grading
verification) with no synthesis-agent intermediary, per Design Principle 8. The blind
dual-verification technique used here (one grader, two anonymized submissions, no persona labels)
is a new, stronger technique for this exact confound and is recommended for any future run where a
prior finding's tier disagreement is suspected of being anchoring rather than content-driven.
