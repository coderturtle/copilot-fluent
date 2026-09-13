# Module 09 grading-only key - NOT learner-facing

*Simulation only. Every fact and figure below is fictional, built for this workshop. Nothing here
describes a real client, a real account, or real financial, legal, or accounting guidance.
Kellerman & Castle operates in no real regulatory regime; nothing here is calibrated to one. Reusing
this key's format against a real client's real data is your own regulated activity, not something
this workshop can vouch for.*

**Do not link this file from the module README, the site, or any learner-facing page.** It exists
to check a submitted verification memo, not to be read before attempting the exercise. Same
convention as `modules/02-trust-but-verify/fixtures/hidden/grading-key.md`: same repo, same commit
history as the fixture it grades, sitting beside it rather than the module README, which never links
to it by name or path. Confirmed again for this module: `site/src/content/config.ts`'s `fixtures`
collection globs only `*/fixtures/*.md` under `modules/`, one directory level deep - a nested
`fixtures/hidden/*.md` file never matches that pattern and is never rendered to the published site.

## The 1 exact string

Drawn directly from `fixtures/copilot-draft-q3-2027-review-memo.md`, checked against
`fixtures/johnnys-q3-2027-account-notes.md`. Pre-registered here, and revealed to the learner
directly in the module README after they've committed to their own attempt - the same
reveal-after-commitment shape Modules 01, 02, and 07 already use, per
`docs/coachgremlin-authoring-lessons.md` lesson 3. A submitted memo is checked for this as a literal
substring, not paraphrase-matching, and the paired verification-method label is checked as an exact
match against the label below.

| # | Error type | Exact string | Correct verification-method label | One-line correction |
|---|---|---|---|---|
| 1 | Wrong figure | `$720,150` | citation check | The account note states Molly's total assets under management as of mid-Q3 2027 are $794,300, not $720,150. |

Per `docs/coachgremlin-authoring-lessons.md` lesson 11, the key string is the wrong figure itself,
not an incidental true token sitting near it - `$720,150` is not a real value anywhere in the source
note; matching it, by itself, requires having spotted the actual discrepancy, not just recognizing a
familiar name or date that also happens to appear in the same sentence.

Citation check is the correct label because a document settles this claim directly:
`fixtures/johnnys-q3-2027-account-notes.md`'s own Summary table states the figure ($794,300) the
draft gets wrong. Unlike Module 02's row 5 (a fabricated instruction requiring human review because
no document *could* settle it), this error is a plain wrong figure a document *does* settle - there
is no ambiguity between the two labels for this single error, per lesson 12's mutual-exclusivity
requirement.

## Why this figure and not another

The draft's cumulative-return figure (18.4%) and the account holdings, advisor name, and meeting
date are all left correct on purpose - this module's own required word-bound summary (a separate
task, drawn from Module 05's mechanism) needs the 18.4% figure to actually be the source note's real
top-line figure, unmodified, so planting a second error on that same figure would have made two
different fixture-bound tasks depend on the same broken sentence in a way neither task's own checking
logic accounts for. The one planted error lives entirely in the AUM figure, a value neither the
summary task nor the deck-tracing task depends on.

## Uniqueness check against every other module's fixtures

Checked directly before writing this key: `$720,150` and `$794,300` do not appear in any other
module's fixture (01-08), including Module 06's `sam-wheats-portfolio-data.md`, whose closest figure
is Molly's fiscal-year-2026 Q4 portfolio total ($738,050) - a different figure, a different fiscal
year, a different quarter. Reusing the same client's name across modules (Molly Jensen, matching
`docs/workshop-design.md` §7's own Module 09 row) does not create a shortcut: the exact-string check
runs against this module's own new Q3 2027 figures, not anything already public about Molly
elsewhere in this repo.

## Mechanism note

This key exists for two reasons, same as Module 02's: it is Coachgremlin's own pre-registered record
used to hand-check that the README's revealed row and its self-check actually produce the right
verdict (see `runs/2026-09-13-module-09-dry-run/`), and it is the reference a human spot-checking a
real submission would use for the part that stays AI-graded rather than self-checkable (whether the
correction is itself factually right).
