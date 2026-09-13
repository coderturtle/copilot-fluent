# Module 02 dry run - 2026-09-12

*Simulation only. Everything in this dry run - the fixtures, the fictional firm, the synthetic
memos - is fictional and built for this workshop. Nothing here describes a real client, a real
account, or real financial, legal, or accounting advice. Kellerman & Castle operates in no real
regulatory regime; nothing here is calibrated to one.*

## What this run is, and what it isn't

No learner has attempted this module yet, and this session has no live Microsoft 365 Copilot
tenant access to run the exercise for real. So this isn't a dry run of "does a real learner pass
this exercise" - it's a dry run of the **grading logic itself**: given the pre-registered key in
`../../modules/02-trust-but-verify/fixtures/grading-key.md` (also now revealed to the learner
directly in the module README, gated behind an honor-system honesty instruction), can a human or
AI grader actually tell a memo that did the comparison work apart from one that did most of it but
cut a corner, and does the citation-check/human-review split hold up as a real distinction rather
than a coin flip.

This run:

- Writes one synthetic **good** memo (`good-memo.md`) - a plausible verification memo that finds
  and correctly labels all 5 planted errors, with corrections that actually match the client file.
- Writes one synthetic **naive** memo (`naive-memo.md`) - a plausible memo that finds 4 of the 5
  errors, mislabels the one row where the label isn't inferable by pattern-matching the other four,
  and states corrections that are present but not all actually right (the harder, more useful case
  to check than a memo that named nothing).
- Checks both, by hand, against the grading key (`check-result.md`), and confirms the checklist
  correctly separates them on both tiers, not just the tier with the pre-registered key - and
  confirms the 5-row table now revealed in the module README matches that key exactly.

## What this run does NOT prove

- It does not prove a real learner, with real Copilot access, will produce a memo anything like
  either of these synthetic ones.
- It does not prove Copilot's actual current behavior when asked to draft a summary from a pasted
  document, or that the flawed draft fixture is representative of a real Copilot fabrication -
  these fixtures are authored to be *plausible*, not captured from a live session.
- It does not validate the Copilot-run check against a real AI grader run inside an actual Copilot
  session - that check (does the prompt actually resist the embedded fabricated-instruction line
  the way it's designed to, when run for real) is still open, tracked the same way
  `docs/workshop-design.md` §8 already names this tier as an untested hypothesis for every module,
  and names Module 02's own check specifically as needing this confirmation before it ships. What
  this run does instead is a hand-walkthrough of the prompt's own logic against the one concrete
  case that matters most: a memo that correctly quotes the fabricated already-verified instruction
  in order to flag it does not, by the prompt's own stated BEGIN/END delimiter rule, get read as
  that instruction applying to the grader. That's a reasoned check of the prompt's design, not a
  run against a live model.
- It is not evidence that the client file's holdings, dates, or figures are realistic examples of
  what a real Kellerman & Castle account would look like - only that they're internally consistent
  and don't reuse anything already public elsewhere in this repository (checked directly, see the
  grading key's own overlap section).

## Files

- `good-memo.md` - synthetic verification memo, all 5 errors found and correctly labeled
  (placeholder stand-ins, not the real exact strings).
- `naive-memo.md` - synthetic verification memo, 4 of 5 errors found, 1 mislabeled, 2 corrections
  wrong and 1 imprecise (placeholder stand-ins, not the real exact strings).
- `check-result.md` - the hand-check of both memos against the pre-registered key, row by row.
