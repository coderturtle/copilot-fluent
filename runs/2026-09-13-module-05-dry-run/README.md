# Module 05 dry run - 2026-09-13

*Simulation only. Everything in this dry run - the fictional firm, the fund note, the constructed
letters and summaries - is fictional and built for this workshop. Nothing here describes a real
client, a real account, or real financial, legal, or tax advice.*

## What this run is, and what it isn't

No learner has attempted this module yet, and this session has no live Microsoft 365 Copilot tenant
access to run the exercise for real. This run's job is narrower: confirm that the module's
mechanically-checkable items (the two word-count rules, the transplanted-data-point check, and the
top-line-figure check) actually distinguish a real pass from a real near-miss, and confirm by hand
that the tone/recommendation-language grading prompt's own stated criteria catch the subtle framing
problem the module names, not just an explicit banned word.

This run:

- Constructs one "good" client letter and one "naive" client letter, and checks both against the
  200-word floor (`check-result.md`, Part 1).
- Constructs one "good" management summary and one "naive" management summary, and checks both
  against the 300-word bound, the ≥3-transplanted-data-point rule, and the top-line-figure rule
  (`check-result.md`, Part 2).
- Reasons by hand through two short constructed sentence pairs - one clean, one carrying the subtle
  leading-question/implied-endorsement framing problem named in the module's own grading prompt - to
  confirm that grading prompt's stated criteria would catch the subtle case and not just an explicit
  banned word (`check-result.md`, Part 3).
- Re-verifies the module's two product claims (drafting from a prompt alone; referencing a file with
  `/filename` to draft from its content) against Microsoft's own current published documentation,
  fetched live in this session (`check-result.md`, Part 4).

**On the transplanted-data-point check not being a hidden key.** Unlike Modules 01, 02, and 07's
exact-string checks (which grade against fixture facts a learner is never shown, revealed only after
they commit to an attempt), Module 05's ≥3-data-point rule and top-line-figure rule check a learner's
own summary against a source document the learner has full, open access to the entire time - it's
their own document to draft from, not a withheld answer key. So this run doesn't construct or protect
a hidden key; the fixture's actual figures are quoted openly below, exactly as a real learner would
see them in the fixture itself.

## What this run does NOT prove

- It does not prove a real learner, with real Copilot access, actually produces a letter or summary
  this clean or this sloppy - the two constructed pairs below are deliberately clear-cut (a strong
  pass and a realistic near-miss), not a simulation of every way a real attempt could land in between.
- It does not prove a live AI grader run, against these or any other documents, would reach the same
  verdict the hand-reasoning in Part 3 reaches - that's untested, same honesty this workshop applies
  to every module's rubric.
- It does not prove Copilot's actual drafting behavior in a live tenant matches Microsoft's published
  documentation beyond what that documentation itself states - both remain verified-against-
  documentation only.

## Files

- `good-letter.md` / `naive-letter.md` - constructed client-letter pair for the word-floor check.
- `good-summary.md` / `naive-summary.md` - constructed management-summary pair for the word-bound,
  data-point, and top-line-figure checks.
- `check-result.md` - the hand-verification of all four mechanical checks plus the tone/
  recommendation-language reasoning pass and the product-claim re-verification.
