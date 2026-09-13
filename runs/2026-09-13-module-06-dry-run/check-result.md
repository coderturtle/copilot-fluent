# Check result - Module 06 dry run, 2026-09-13

*Simulation only. This dry run checks fictional checking logic against synthetic Analyst output and
decks about a fictional firm; it is not evidence about any real client, account, or real financial or
legal matter. Kellerman & Castle operates in no real regulatory regime; nothing here is calibrated to
one. Reusing this format against a real client's real data is your own regulated activity, not
something this workshop can vouch for.*

## Part 1: the exact-row-match check on the four headline figures

Fixture values, for reference (from `fixtures/sam-wheats-portfolio-data.md`):

| What | Fixture row | Exact fixture value |
|---|---|---|
| Molly's portfolio value, end of Q1 (earliest closed quarter this fixture has, not a calendar-year start) | R13 | $696,900 |
| Molly's portfolio value, end of Q4 | R16 | $738,050 |
| Best-performing fund in Q4, and its return (a ranking derived by comparing all three of Molly's Q4 fund rows, not itself one fixture cell) | R4 | Kellerman Growth Fund, +5.1% |
| That fund's allocation as of last quarter's rebalancing (fund-level data - Table 2 has no client column, so this is not a "Molly Jensen row") | A1 | 92% growth-oriented, 0% income-oriented, 8% cash |

**The exact-match rule's parsing boundary, applied explicitly, not by unstated intuition:** a figure
passes only if it appears as a plain, unqualified statement of the fixture's value - the exact digits
and symbol, with no hedge or qualifying word ("roughly," "about," "approximately," "nearly," "over,"
"~") directly modifying that same figure in the same clause. "Roughly $696,900" contains the exact
substring "$696,900," but fails, because "roughly" modifies it directly in the same clause - the rule
is about how the figure is presented, not whether the digits appear as a substring somewhere in the
sentence.

| Deck | Figure 1 (Q1-end value) | Figure 2 (Q4-end value) | Figure 3 (best fund + return) | Figure 4 (allocation) | Result |
|---|---|---|---|---|---|
| `good-deck.md` | $696,900 - exact match, R13 | $738,050 - exact match, R16 | Kellerman Growth Fund, +5.1% - exact match, R4 | 92% growth-oriented, 0% income-oriented, 8% cash - exact, full-row match, A1 | **Pass, 4 of 4 traceable** |
| `naive-deck.md` | "roughly $696,900" - fails the hedge-word rule above, even though the exact digits appear | "about $738,000" - fails, not the fixture's exact $738,050 | Kellerman Growth Fund, +5.1% - exact match, R4 | missing entirely; replaced with a "blended annual return" figure that traces to no fixture row at all (the fixture states no blended-return row, by design) | **Fail, 1 of 4 cleanly traceable (figure 3 only), two figures fail on hedging/rounding, one figure absent and replaced by an untraceable figure** |

**Conclusion: the exact-row-match rule correctly separates a deck that reports the fixture's own
numbers from one that reports a rounded and partly self-computed impression of them, and the
hedge-word boundary above resolves the one case ("roughly $696,900") that would otherwise depend on
unstated intuition.** The naive deck's "$738,000" and "5.9%" are exactly the failure mode this
module's operational definition is written to catch - each is plausible-sounding and not far off,
which is what makes an eyeballed check insufficient and an exact-match rule necessary.

**A second thing this run checked: whether "the single best-performing fund in Q4" could be
answered correctly by a shortcut instead of an actual per-quarter comparison.** Molly's three funds'
quarterly returns are Kellerman Growth (+3.1%, +3.8%, -1.9%, +5.1%), Legacy Balanced (+4.5%, +3.0%,
-1.0%, +3.8%), and Castle Income (+1.2%, +1.2%, +0.7%, +1.4%) across Q1-Q4. No single fund wins every
quarter: Legacy Balanced wins Q1, Kellerman Growth wins Q2 and Q4, Castle Income wins Q3. A learner
who assumed "Kellerman Growth is generally the strongest fund" without actually comparing all three
Q4 figures would have no reliable shortcut to the right answer, since that same assumption would have
produced the wrong fund in Q1. This is a deliberate fixture property, not an incidental one - an
earlier draft of this fixture had Kellerman Growth winning three of four quarters, which would have
let that exact shortcut land on the right answer by luck rather than by comparison; Legacy Balanced's
Q1 return was set to +4.5% specifically to remove that shortcut.

## Part 2: the critical-use comparison, against the redesigned rubric

This module's grading prompt no longer requires a deck to differ from Analyst's initial output to
pass - a learner whose first response was already accurate throughout, and who says so specifically
in their notes, should pass too. What it checks instead: (a) the final deck is at least as accurate as
the initial output, checked against the fixture directly, not merely different from it, and (b) the
learner's own written notes give a specific reason for each of the four headline figures and any other
changed language - a correction, a caveat, an addition, or, just as validly, a specific "this was
already correct" statement - not a blank or generic note.

Comparing each deck (with its own constructed notes, from that file's own "Reviewer's own notes"
section) against `analyst-initial-output.md`, checked against the fixture:

| Deck | Accuracy vs. initial output, checked against the fixture | Notes: specific and complete? | Result |
|---|---|---|---|
| `good-deck.md` | At least as accurate throughout: two hedged/rounded figures corrected to exact fixture values, the initial output's unsupported self-computed "blended annual return" dropped, the initial output's omitted income-oriented allocation figure added, and the initial output's unsupported ending-value-to-performance inference replaced with a claim the Return % rows actually support | Yes - `good-deck.md`'s own reviewer notes give a specific, fixture-grounded reason for every figure, including one (the best-performing-fund figure) explicitly confirmed unchanged because it was already exact | **Pass** |
| `naive-deck.md` | Less accurate, not merely unchanged: keeps two hedged/rounded figures and a self-computed figure the fixture never states, and drops the required allocation figure entirely - a missing required figure is strictly worse than anything in the initial output | None - the deck's own file states plainly the initial output was pasted with no changes and no notes were written | **Fail** |

**Conclusion: the redesigned rubric still correctly separates a genuinely reviewed deck from an
unreviewed one, and it additionally lets a hypothetically already-accurate figure pass without forcing
a learner to invent a change** - `good-deck.md`'s own kept note on the best-performing-fund figure
("already exact, checked directly, left unchanged") demonstrates that path working as intended, not
just asserted in the abstract. This remains the reason this module requires the initial output saved
before any editing happens - without `analyst-initial-output.md` to compare against, neither deck's
own text, nor its notes, would be checkable against anything.

## Part 3: tone and recommendation-language shape, reasoned by hand

No finance-domain "bad caption" is constructed for this part, on purpose - matching the same
discipline `docs/coachgremlin-authoring-lessons.md` (lessons 2, 8, 11, 14, 15) and Module 05's own
corrected README require: a constructed illustration of recommendation-flavored framing must not
itself become a real instance of that framing, even inside a dry-run artifact meant only to test the
checking logic. Module 05's first draft got exactly this wrong once already; this dry run does not
repeat it.

Instead, this constructs two non-financial stand-in sentences illustrating the same two shapes the
module's own grading prompt describes only in the abstract, and checks them against that prompt's own
stated criteria - the same shape-level verification, without ever writing the financial-domain
instance out:

**Stand-in 1 (leading question):** "Doesn't a time like this make you want to sign up for something
longer?" Checked against the grading prompt's own stated bar (a caption phrased as a leading question
about a specific figure or holding that presupposes the reader should reconsider or act on it): yes,
this is exactly that shape - a question that presupposes its own answer, pointing toward a decision
without ever stating one. **Reasoned result: the shape the check is meant to catch, correctly
identified as such by the prompt's own stated criteria.** The prompt's own text states this structural
rule generically ("flag any caption with this structure regardless of the specific words used")
rather than writing out a financial-domain instance of it - this dry run does not construct one either,
for the same reason.

**Stand-in 2 (peer-behavior endorsement):** "look how many supporters gave again this year." Checked
against the grading prompt's own stated bar (a caption citing others' behavior as tacit reassurance to
do the same, without stating it as advice): yes, this nudges toward repeating an action without ever
stating it as advice. **Reasoned result: correctly identified as the shape to catch**, again via the
prompt's own generic structural rule rather than a written-out financial example.

**Control (should not be flagged):** the good deck's own Slide 3 text, "The three funds' own quarterly
returns varied across the year: the Kellerman Growth Fund posted the strongest Q4 return of the three
(+5.1%)... Ending-value changes reflect these returns plus any contributions or withdrawals Molly made
during the year, which this data doesn't separate out. This report states what happened this year; it
isn't a comment on what to do with any of it next year." Checked against both shapes above: no leading
question, no citation of other clients' behavior, no suggestion of a specific action, and no causal
claim beyond what the Return % rows support - it states facts, names a real limit on what the data
shows, and explicitly disclaims giving direction. **Reasoned result: not flagged, correctly.**

**Conclusion: the grading prompt's own stated criteria correctly separate the two flagged shapes from
a clean factual control, reasoned by hand, using only the prompt's own non-financial stand-ins.** This
confirms the rubric's logic is coherent on its own terms. It does not confirm a live AI grader, run
against these or any other text, would reach the same verdict - untested, same limit named in the run
README and in the module's own footer note.

## Part 4: product-claim re-verification

Sources fetched live in this session, checked 2026-09-13, not recalled. **This dry run's evidence is
limited to the sources' own textual content, quoted directly below - it does not capture a
screenshot or excerpt of each page's own revision metadata (an `ms.date` or "last updated" stamp), so
this record doesn't independently prove a specific revision date for any of them.** Per lesson 14,
the module README states these as "checked on 2026-09-13" rather than asserting a specific `ms.date`/
`updated_at` pair this repo can't back up with captured evidence:

- Microsoft Learn, "Analyze and visualize data using Microsoft Copilot" (module overview) -
  `learn.microsoft.com/en-us/training/modules/analyze-visualize-data-copilot/`.
- Microsoft Learn, "Generate insights using the Analyst Agent" (unit 3 of the same module) -
  `learn.microsoft.com/en-us/training/modules/analyze-visualize-data-copilot/3-generate-insights-analyst-agent`.
- Microsoft Learn, "Exercise - Analyze and visualize data with Microsoft Copilot" (unit 3a of the same
  module) -
  `learn.microsoft.com/en-us/training/modules/analyze-visualize-data-copilot/3a-exercise-analyze-visualize-data`.
- The exercise's own hosted lab instructions (linked from unit 3a) - confirms the official lab's
  dataset (a `quarterly-sales-data.csv` of region/product/quarter/units/revenue/feedback), its
  Excel-and-Analyst-only prompts, and confirms directly that "the exercise does not move findings into
  PowerPoint or other applications" - the basis for this module's own README statement that the
  Excel-to-PowerPoint step is this workshop's addition, not a repeat of Microsoft's material.
- Microsoft Support, "Create a new presentation with Copilot in PowerPoint" and "Prepare your
  presentation with Microsoft Copilot" - checked directly on 2026-09-13; neither page displays a
  visible last-updated date, so this module's README says "checked... on 2026-09-13" rather than
  citing a revision date the source doesn't show, per lesson 13.

**Claim 1 - the Analyst agent's own description.** The unit states it's "an AI-powered data analysis
assistant built into Microsoft Copilot," reachable "from the left navigation pane or from the Agents
list in Copilot Chat," built to "analyze data from files like Excel spreadsheets, CSVs, JSON files,
PDFs, and Word documents," apply "chain-of-thought reasoning," and "generate structured, shareable
reports with charts, tables, and cited findings." This directly supports the module's own framing of
Analyst as the right tool for this exercise's task. **Confirmed as of 2026-09-13.**

**Claim 2 - the three-tool distinction (Copilot in Excel / Analyst / Copilot Chat).** The same unit's
own comparison table states Copilot in Excel is best for "explore, chart, or transform data within an
existing Excel spreadsheet," Analyst for "deep analysis across multiple files with citations and a
polished report," and Copilot Chat for "general AI chat, web research, or quick summaries and drafts."
Microsoft's own distinction is specifically about *multiple files*, not one spreadsheet with multiple
sheets - this module's instructions were checked against that distinction directly and now have the
learner split the fixture's two tables into two separate files (two workbooks or two CSVs) rather than
two sheets of one workbook, so the exercise genuinely lands in Analyst's own stated multi-file case
rather than reusing this claim to justify a single-file task. **Confirmed as of 2026-09-13.**

**Claim 3 - Copilot in PowerPoint's create-from-file and create-from-prompt mechanics.** The classic
ribbon entry point's "Create presentation from file" flow is confirmed by Microsoft Support's own
stated steps; the newer Agent Mode chat pane's own support page states directly that "support for
referencing files is coming soon to Agent Mode," confirming the module's own honest statement that the
two entry points currently differ on this point rather than assuming they behave identically.
**Confirmed as of 2026-09-13, both checked directly rather than assumed consistent with each other.**

**Named limit, not overclaimed.** All three claims are confirmed against Microsoft's own current
published documentation, not against a live tenant run in this session - this workshop has no live
Copilot access to test any of these mechanics directly, the same limit named on every other module's
product claims.
