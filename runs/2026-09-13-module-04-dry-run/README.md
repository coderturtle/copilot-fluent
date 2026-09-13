# Module 04 dry run - 2026-09-13

*Simulation only. Everything in this dry run - the fictional firm, the five conversation topics, the
constructed instruction examples - is fictional and built for this workshop. Nothing here describes
a real client or a real account.*

## What this run is, and what it isn't

No learner has attempted this module yet, and this session has no live Microsoft 365 Copilot tenant
access to run the exercise for real. Module 04 is also structurally different from every prior
module's dry run: its gate operates on the learner's own Copilot account state (their own
conversations, their own notebook, their own job-specific instructions) rather than on a fixture file
with a fact a learner could look up. There is nothing to hide here - no hidden answer key like
Modules 01 and 02's, because there is no fixture-derived secret this module could withhold. So this
run's job is narrower than a prior module's dry run: verify that the two mechanically-checkable
pieces this module *does* supply - the published memory-versus-instructions answer key, and the
personal-instructions specificity check - actually hold up.

This run:

- Re-verifies each of the four memory-versus-instructions statements in the module README against
  Microsoft's own support and Learn documentation, fetched live in this session (not
  recalled), and confirms the 2-true/2-false split is defensible and each statement is unambiguous
  (`check-result.md`, Part 1).
- Constructs one specific personal instruction and one generic one, and hand-checks both against the
  personal-instructions specificity check's own stated criteria, to confirm the check's specificity
  bar actually tells them apart (`check-result.md`, Part 2).
- Does **not** attempt to simulate the five-conversations-rename-notebook-delete sequence itself,
  since that check is entirely self-administered by the learner against their own account state (the
  module README already names this explicitly) - there is no synthetic "transcript" for that part to
  construct or check by hand.

## What this run does NOT prove

- It does not prove a real learner, with real Copilot access, can actually find, rename, delete, and
  notebook five conversations the way the module describes - that mechanic is verified against
  Microsoft's own published documentation (quoted in `check-result.md`, Part 1's sourcing), not
  against a live run in this session.
- It does not prove the AI-graded specificity pass behaves the same way against a real learner's own
  bulleted list as it does against this run's two constructed examples - a live grading run has never
  happened for this module.
- It does not prove notebooks, or the named bracketed-title substitute for a tenant that blocks them,
  behave in a live tenant exactly as described - both remain verified-against-documentation only.

## Files

- `check-result.md` - Part 1: the memory-versus-instructions key, re-verified statement by statement
  against live-fetched Microsoft documentation. Part 2: the specific-vs-generic instruction hand-check
  against the specificity check's own stated criteria.
