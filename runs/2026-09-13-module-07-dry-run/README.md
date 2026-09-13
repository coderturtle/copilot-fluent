# Module 07 dry run - 2026-09-13

*Simulation only. Everything in this dry run - the fictional firm, the transcript, the constructed
synthetic recaps - is fictional and built for this workshop. Nothing here describes a real client,
a real account, or real financial, legal, or accounting advice. Kellerman & Castle operates in no
real regulatory regime; nothing here is calibrated to one. Reusing this format against a real
client's real meeting is your own regulated activity, not something this workshop can vouch for.*

## What this run is, and what it isn't

No learner has attempted this module yet, and this session has no live Microsoft 365 Copilot
tenant access to build or share a real Copilot Page. This run's job is narrower: confirm that the
module's mechanically-checkable item (the exact-string-plus-decoy check on the recap's 5 action
items) actually distinguishes a real pass from a real near-miss, confirm the honor-system
Page-sharing step (the learner confirms it themselves; nothing checks it from outside) is honestly
named as a limit rather than oversold, and re-verify this module's product claims against
Microsoft's own current documentation.

This run:

- Constructs one "good" recap (`good-recap.md`) that finds and correctly captures all 5 real action
  items and excludes all 3 decoys, using real (though still fictional) text, not placeholder tokens.
- Constructs one "naive" recap (`naive-recap.md`) that gets most items right, loses precision on
  another (a vague deadline where the transcript gives an exact one), drops one entirely, and
  promotes one decoy to a fabricated action item with an invented deadline - also real text, so the
  match/fail result is actually demonstrated, not asserted.
- Runs the exact-string-plus-decoy check against both (`check-result.md`, Parts 1-2), reporting
  the result by count and pattern rather than by naming which owner, deliverable, or decoy produced
  which outcome.
- Reasons through the Page-building-and-sharing step's own honor-system nature honestly, rather
  than treating it as more checkable than it is (`check-result.md`, Part 3).
- Re-verifies this module's product claims (Intelligent recap's actual scope and restrictions,
  Copilot Pages' section structure, and how Page sharing works) against Microsoft's own current
  published documentation, fetched live in this session (`check-result.md`, Part 4).

## On why the real key still isn't reproduced by name here

Unlike Module 06's fixture (fully open to the learner from the start, no hidden key), this module's
5 exact action-item strings are withheld until the learner commits to their own recap - the same
shape as Modules 01 and 02. An earlier version of this dry run followed those two modules'
placeholder-token discipline literally (`docs/coachgremlin-authoring-lessons.md` lesson 4) - but a
placeholder can't actually be checked against anything, so that version's "5/5 exact match" claim
was asserted, not demonstrated, which a cross-model review caught. This version keeps lesson 4's
underlying goal (don't make this directory a second, easier place to find the answer before
committing to an attempt) by a different means: `good-recap.md` and `naive-recap.md` now contain
real text and are genuinely checked against the real key, but `check-result.md` - the file most
likely to be skimmed as a summary - reports the outcome abstractly, by count and pattern, without
naming which real owner or decoy is behind any given result, and without giving this module's
internal reference key's own file path in a form a learner could navigate to.

## What this run does NOT prove

- It does not prove a real learner actually reads the transcript this closely, writes a recap this
  clean or this sloppy, or that a real learner's mistakes would resemble either constructed recap
  here - the pair is deliberately clear-cut, not a simulation of every way a real attempt could
  land in between.
- It does not prove a live AI grader, run against these or any other recaps, would reach the same
  verdict the hand-check in `check-result.md` reaches - untested, the same honesty this workshop
  applies to every module's AI-graded pass.
- It does not prove a real learner actually builds and shares a real Copilot Page - that step has
  no mechanical check at all, confirmed only by the learner's own honesty by design, named as a
  real limit rather than treated as proven.
- It does not prove Copilot's actual behavior in a live tenant matches Microsoft's published
  documentation beyond what that documentation itself states.

## Files

- `good-recap.md` / `naive-recap.md` - the constructed recap pair for the exact-string-plus-decoy
  check, using real (though still fictional) text checked against the real key.
- `check-result.md` - the hand-check of both recaps against the pre-registered key, reported
  abstractly (by count and pattern, not by owner or decoy identity), the honest reasoning on the
  honor-system Page step, and the product-claim re-verification.
