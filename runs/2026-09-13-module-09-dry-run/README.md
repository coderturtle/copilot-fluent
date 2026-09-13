# Module 09 dry run - 2026-09-13

*Simulation only. Everything in this dry run - the fictional firm, the Q3 2027 portfolio data, the
constructed memos, decks, and summaries - is fictional and built for this workshop. Nothing here
describes a real client, a real account, or real financial or legal advice. Kellerman & Castle
operates in no real regulatory regime; nothing here is calibrated to one. Reusing this format
against a real client's real data is your own regulated activity, not something this workshop can
vouch for.*

## What this run is, and what it isn't

No learner has attempted this module yet, and this session has no live Microsoft 365 Copilot tenant
access to run the Analyst agent or any of the other eight underlying tools for real. This run's job
is narrower: hand-check that the three fixture-bound items' mechanical checks (the deck's
exact-row-match rule, the memo's exact-planted-error match, and the summary's word-bound-plus-
top-line-figure rule) actually separate a real pass from a real near-miss, using the module's own
new Q3 2027 fixture packet - the same rigor Modules 02, 05, and 06's own dry runs applied to their
originals.

This run:

- Constructs one "Analyst initial output" (`analyst-initial-output.md`) with a realistic mix of a
  rounded figure, an already-correct figure, an unsupported self-computed figure, and a vague,
  non-exact allocation description - the kind of first response a learner would actually need to
  review, not an obviously-broken strawman.
- Constructs a "good" and "naive" deck pair, checked against the exact-row-match rule
  (`check-result.md`, Part 1).
- Constructs a "good" and "naive" verification-memo pair, checked against the one planted error -
  using placeholder stand-ins rather than the real figure, per lesson 4 (`check-result.md`, Part 2).
- Constructs a "good" and "naive" summary pair, checked against the word bound and the top-line
  figure (`check-result.md`, Part 3).
- Confirms this module introduces no new Microsoft product claim requiring fresh verification,
  since it only reuses claims each drawn item's home module already dated (`check-result.md`, Part
  4).

## On the placeholder convention for the memo

Unlike the deck and summary fixtures (both fully open to the learner from the start, like Modules
06's and 05's own fixtures), the memo's one planted error is revealed to the learner only after they
commit their own attempt in writing - the same reveal-after-commitment shape Modules 01, 02, and 07
use. Per `docs/coachgremlin-authoring-lessons.md` lesson 4, this dry run's own files
(`good-memo.md`, `naive-memo.md`, and this file) never quote the real planted dollar figure, even
though the module README itself reveals it after the commitment gate - a dry run file sits outside
that gate and shouldn't become a second, easier place to find the same content. The real figure
lives only in `fixtures/copilot-draft-q3-2027-review-memo.md` (the flawed draft itself),
`fixtures/johnnys-q3-2027-account-notes.md` (the source it's checked against), the hidden grading
key, and the module README's own gated reveal.

## What this run does NOT prove

- It does not prove a real learner, with real Copilot and Analyst-agent access, actually produces
  artifacts this clean or this sloppy for real.
- It does not prove a live AI grader run against a real submitted package would reach the same
  verdict as this run's hand-reasoning - untested, same honesty this workshop applies to every
  module's rubric.
- It does not resolve this module's own named, unsolved limit on the five non-fixture-bound items
  (genuine re-engagement versus disguised resubmission) - see `check-result.md`'s closing note.

## Files

- `analyst-initial-output.md` - the constructed "before" artifact the deck pair is compared against.
- `good-deck.md` / `naive-deck.md` - the constructed deck pair for the exact-row-match check.
- `good-memo.md` / `naive-memo.md` - the constructed memo pair for the planted-error check, using
  placeholder stand-ins for the real figure.
- `good-summary.md` / `naive-summary.md` - the constructed summary pair for the word-bound-plus-
  top-line-figure check.
- `check-result.md` - the hand-verification of all three fixture-bound checks, plus the
  product-claim-reuse note.
