# Hand-check of both synthetic memos against the grading key

*Simulation only. This dry run checks fictional grading logic against synthetic memos about a
fictional client and a fictional firm; it is not evidence about any real client, account, or real
financial, legal, or accounting matter. Kellerman & Castle operates in no real regulatory regime;
nothing here is calibrated to one.*

This dry run does not reproduce the real 5-error checklist's literal values here, on purpose - see
`docs/coachgremlin-authoring-lessons.md` lesson 4 (a dry run's job is to prove the checking logic
works, not to publish the answer). `good-memo.md` and `naive-memo.md` use placeholder stand-ins for
the same 5 categories; the table below describes which categories matched and whether the label was
correct, not which exact strings did.

Checked against `modules/02-trust-but-verify/fixtures/grading-key.md` and
`modules/02-trust-but-verify/fixtures/molly-jensen-client-file.md`.

## good-memo.md

| # | Error category | Named (placeholder-substituted)? | Method label matches key? | Correction matches key (Tier 2)? |
|---|---|---|---|---|
| 1 | Wrong AUM figure | **Yes** | Yes - citation check | Yes - states the correct figure, matches client file |
| 2 | Stale advisor reference | **Yes** | Yes - citation check | Yes - names the correct current advisor and effective date, matches client file |
| 3 | Misattributed meeting date | **Yes** | Yes - citation check | Yes - states the correct date, matches client file |
| 4 | Fabricated holding | **Yes** | Yes - citation check | Yes - names the real, complete holdings list, matches client file |
| 5 | Fabricated "already verified" instruction | **Yes** | Yes - human review | Yes - names no verification actually occurred and the note should be removed |

Sensitive-data answer: names both personal/internal fields specifically (Tier 1's non-empty check
and Tier 2's specificity check both satisfied), and correctly applies both bound facts - the
default DLP policy's simulation-mode-by-default limitation and the uploaded-file scanning gap -
rather than a generic privacy statement.

**Result: Tier 1 pass (5 of 5 categories named, all 5 labels correct, all 5 corrections present).
Tier 2 pass (all 5 corrections factually match the client file, sensitive-data answer names both
specific, currently-verified mechanisms).**

## naive-memo.md

| # | Error category | Named (placeholder-substituted)? | Method label matches key? | Correction matches key (Tier 2)? |
|---|---|---|---|---|
| 1 | Wrong AUM figure | **Yes** | Yes - citation check | No - defers to "confirm with account services" instead of stating the correct figure |
| 2 | Stale advisor reference | **Yes** | Yes - citation check | No - guesses at a replacement name instead of the actual current advisor |
| 3 | Misattributed meeting date | **Yes** | Yes - citation check | Partial - names the right month but not the exact date the client file states |
| 4 | Fabricated holding | **No** - never mentioned | - | - |
| 5 | Fabricated "already verified" instruction | **Yes** | **No** - labeled citation check, key requires human review | Present but the label mismatch alone fails this item regardless |

Sensitive-data answer: present (satisfies Tier 1's non-empty check) but names no specifics - no
mention of either personal/internal field, and no mention of either bound DLP fact. Reads as the
generic privacy statement the grading key names explicitly as insufficient.

**Result: Tier 1 fails (only 4 of 5 categories named - the fabricated-holding error is missed
entirely - and the fabricated-instruction category's method label doesn't match the key). Tier 2
would also fail even setting Tier 1 aside: 2 of the 5 corrections don't match the client file's
actual values, one is imprecise, and the sensitive-data answer doesn't land the specific point.**

## What this confirms and doesn't

The checklist and the label match correctly separate a memo that did the comparison work from one
that did most of it but cut a corner in three distinct ways (an error missed outright, a label
guessed wrong on the one row where the label isn't inferable by pattern-matching the other four,
and corrections stated without actually being right). That the naive memo still gets 4 of 5
categories and 4 of 5 labels right, and still fails on both tiers, is itself useful: this isn't a
checklist that only catches a memo that tried nothing. It also confirms the 5-row table now
revealed directly in the module README (post-commitment) matches this fixture's own pre-registered
record exactly, row for row.

This does not confirm how a real learner's memo would look, or that the Copilot-run check produces
this same read when actually run inside a live Copilot session rather than hand-checked here. See
`README.md` in this same folder for what this run does and doesn't prove.
