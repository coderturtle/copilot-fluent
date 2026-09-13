# Check result - Module 09 dry run, 2026-09-13

*Simulation only. This dry run checks fictional checking logic against synthetic artifacts about a
fictional firm; it is not evidence about any real client, account, or real financial or legal
matter. Kellerman & Castle operates in no real regulatory regime; nothing here is calibrated to
one. Reusing this format against a real client's real data is your own regulated activity, not
something this workshop can vouch for.*

## Part 1: the deck's exact-row-match check (Module 06's mechanism)

Fixture values, for reference (from `fixtures/sam-wheats-q3-2027-data-pull.md` - fully open to the
learner, not hidden, so quoted directly here the same way Module 06's own dry run does):

| What | Fixture row | Exact fixture value |
|---|---|---|
| Molly's portfolio value, as of mid-Q3 2027 | Q27-4 | $794,300 |
| Best-performing fund in Q3 2027, and its return (a ranking derived by comparing all three of Molly's Q3 2027 fund rows) | Q27-1 | Kellerman Growth Fund, +2.7% |
| That fund's allocation as of Q3 2027's rebalancing | Q27-A1 | 89% growth-oriented, 3% income-oriented, 8% cash |

| Deck | Figure 1 (portfolio value) | Figure 2 (best fund + return) | Figure 3 (allocation) | Result |
|---|---|---|---|---|
| `good-deck.md` | $794,300 - exact match, Q27-4 | Kellerman Growth Fund, +2.7% - exact match, Q27-1 | 89%/3%/8% - exact, full-row match, Q27-A1 | **Pass, 3 of 3 traceable** |
| `naive-deck.md` | "roughly $794,000" - fails the hedge-word rule (same rule Module 06's own README states: a hedge word directly modifying the figure in the same clause fails, even though the digits are close) | Kellerman Growth Fund, +2.7% - exact match, Q27-1 | missing entirely; replaced with a "blended quarterly return" figure (2.1%) that traces to no fixture row at all | **Fail, 1 of 3 cleanly traceable** |

**Conclusion: the exact-row-match rule correctly separates a deck that reports the fixture's own
numbers from one that reports a rounded, partly self-computed impression of them**, the same
separation Module 06's own dry run found for its four-figure version of this same check. A learner
comparing Molly's three Q3 2027 fund returns (+2.7%, +2.2%, +1.1%) has no shortcut to "best fund"
other than the actual comparison - no single fund's general reputation across other quarters would
tell them this quarter's answer, since this fixture packet only ever gives one quarter's data.

## Part 2: the memo's exact-planted-error check (Module 02's mechanism)

Per `docs/coachgremlin-authoring-lessons.md` lesson 4, this section describes match outcomes by
category, not by quoting the real planted figure - see `good-memo.md` and `naive-memo.md` for the
placeholder convention used.

| Memo | Error found? | Method label | Correction |
|---|---|---|---|
| `good-memo.md` | **Yes** - names the wrong AUM figure as an exact phrase | Citation check - matches the key | States the account note's real figure, matches the key |
| `naive-memo.md` | **No** - the memo states every field "looks accurate throughout," missing the one wrong figure entirely | - | - |

**Conclusion: the check correctly separates a memo that actually compared the draft against the
account notes from one that asserted accuracy without finding the one real discrepancy.** This is
the same failure mode Module 02's own dry run names for its naive memo: a plausible-sounding "looks
good" verdict that skips the one comparison that would have caught the actual error. Cross-checked
directly against `fixtures/hidden/grading-key.md`: the key's single row matches what `good-memo.md`
finds and `naive-memo.md` misses.

## Part 3: the summary's word-bound-plus-top-line-figure check (Module 05's mechanism)

`fixtures/johnnys-q3-2027-account-notes.md` is fully open to the learner (like Module 05's own Wade
Garrett note), so its real top-line figure (18.4%) and its other facts are quoted directly here.

| Summary | Word count | Contains the 18.4% top-line figure? | Exact transplanted data points |
|---|---|---|---|
| `good-summary.md` | 80 (within the 150-word bound) | **Yes**, exact | 4: "Theo Reyes," "February 2024," "18.4%," "$794,300" |
| `naive-summary.md` | 45 (within the bound, but bound alone doesn't pass this check) | **No** - paraphrased as "performed well... grown steadily" | 0 - every figure is paraphrased away, including the one the note flags as worth leading with |

**Conclusion: the word-bound alone is the weakest part of this check, exactly as Module 05's own
closing note names for its equivalent** - both summaries clear the word-count bound, but only
`good-summary.md` preserves the note's actual facts, and only it contains the specific top-line
figure the note itself opens with. A summary that stays under the word limit by paraphrasing away
every real number, as `naive-summary.md` does, is the precise failure mode this check exists to
catch.

## Part 4: product-claim reuse, not re-verification

This module introduces no new specific Microsoft product claim beyond what each drawn item's home
module already verified and dated: the Analyst agent's own description and the Excel-to-PowerPoint
mechanics (Module 06, checked 2026-09-13), Copilot Pages and Intelligent Recap (Module 07, checked
2026-09-13), Agent Builder and the My Company Policy template (Module 08, checked 2026-09-13),
prompt saving/scheduling/sharing (Module 03, checked 2026-09-13), notebooks and memory-versus-
instructions (Module 04, checked 2026-09-13), and the chat-versus-agent distinction (Module 01).
Per `docs/coachgremlin-authoring-lessons.md` lesson 5, a claim only needs re-verification when it's
newly introduced or restated with new specifics; this module restates each home module's
already-dated claim by reference rather than asserting anything new about how the underlying
product behaves, so no new fetch was performed for this dry run. **Named limit, not overclaimed:**
if any of those eight products' behavior has changed since each cited date, this module inherits
that drift the same way it inherits the citation - this dry run does not independently re-confirm
any of them.

## What this run does NOT prove

- It does not prove a real learner, with real Copilot access, actually produces a deck, memo, or
  summary this clean or this sloppy - the constructed pairs are deliberately clear-cut, not a
  simulation of every way a real attempt could land in between.
- It does not prove a live AI grader run against a real submitted package would reach the same
  verdict as the hand-reasoning above - untested, the same honesty this workshop names for every
  module's rubric.
- It does not settle this module's own named, unsolved limit: whether the five non-fixture-bound
  items (Parts 1, 3, 4, 7, and 8 of the module) represent genuine re-engagement or a disguised
  resubmission. This dry run only checks the three fixture-bound items' mechanical logic, which is
  the part that can actually be checked by hand.
