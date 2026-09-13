# Check result - Module 06 dry run, 2026-09-13

*Simulation only. This dry run checks fictional checking logic against synthetic Analyst output and
decks about a fictional firm; it is not evidence about any real client, account, or real financial,
legal, or tax matter. Kellerman & Castle operates in no real regulatory regime; nothing here is
calibrated to one. Reusing this format against a real client's real data is your own regulated
activity, not something this workshop can vouch for.*

## Part 1: the exact-row-match check on the four headline figures

Fixture values, for reference (from `fixtures/sam-wheats-portfolio-data.md`):

| What | Fixture row | Exact fixture value |
|---|---|---|
| Molly's portfolio value, Q1 | R13 | $696,900 |
| Molly's portfolio value, Q4 | R16 | $738,050 |
| Best-performing fund in Q4, and its return | R4 | Kellerman Growth Fund, +5.1% |
| That fund's allocation | A1 | 92% growth-oriented, 0% income-oriented, 8% cash |

| Deck | Figure 1 (Q1 value) | Figure 2 (Q4 value) | Figure 3 (best fund + return) | Figure 4 (allocation) | Result |
|---|---|---|---|---|---|
| `good-deck.md` | $696,900 - exact match, R13 | $738,050 - exact match, R16 | Kellerman Growth Fund, +5.1% - exact match, R4 | 92% growth-oriented, 0% income-oriented, 8% cash - exact, full-row match, A1 | **Pass, 4 of 4 traceable** |
| `naive-deck.md` | "roughly $696,900" - not exact (hedge word attached to the figure) | "about $738,000" - fails, not the fixture's exact $738,050 | Kellerman Growth Fund, +5.1% - exact match, R4, but framed with an added value judgment not present in the fixture | missing entirely; replaced with a "blended annual return" figure that traces to no fixture row at all (the fixture states no blended-return row, by design) | **Fail, 1 of 4 cleanly traceable, one figure absent, one figure untraceable by construction** |

**Conclusion: the exact-row-match rule correctly separates a deck that reports the fixture's own
numbers from one that reports a rounded, editorialized, and partly self-computed impression of them.**
The naive deck's "$738,000" and "5.9%" are exactly the failure mode this module's operational
definition is written to catch - each is plausible-sounding and not far off, which is what makes an
eyeballed check insufficient and an exact-match rule necessary.

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

## Part 2: the critical-use comparison

Comparing each deck against `analyst-initial-output.md`:

| Deck | Identifiable correction, caveat, or addition versus the initial output? | Result |
|---|---|---|
| `good-deck.md` | Yes - three concrete, specific differences: (1) both rounded values corrected to the fixture's exact figures, (2) the initial output's self-computed "blended annual return of approximately 5.9%" dropped entirely rather than restated, (3) the editorial aside ("a strong result worth noting") removed and a plain factual note substituted | **Pass** |
| `naive-deck.md` | No - every figure and phrase, including the rounding and the editorial aside, is carried over unchanged | **Fail** |

**Conclusion: the comparison correctly distinguishes a deck built from Analyst's output with genuine
review from one that reproduces it untouched.** This is the reason this module requires the initial
output saved before any editing happens - without `analyst-initial-output.md` to compare against,
neither deck's own text would reveal, on its own, whether it was reviewed or just forwarded.

## Part 3: tone and recommendation-language shape, reasoned by hand

No finance-domain "bad caption" is constructed for this part, on purpose - matching the same
discipline `docs/coachgremlin-authoring-lessons.md` (lessons 2, 8, 11, 14, 15) and Module 05's own
corrected README require: a constructed illustration of recommendation-flavored framing must not
itself become a real instance of that framing, even inside a dry-run artifact meant only to test the
checking logic. Module 05's first draft got exactly this wrong once already; this dry run does not
repeat it.

Instead, this reasons through the two non-financial stand-in sentences already embedded in this
module's own grading prompt, checked against that prompt's own stated criteria - the same shape-level
verification, without ever writing the financial-domain instance out:

**Stand-in 1 (leading question):** "Doesn't a time like this make you want to sign up for something
longer?" Checked against the grading prompt's own stated bar (a caption phrased as a leading question
that presupposes the reader should reconsider something): yes, this is exactly that shape - a
question that presupposes its own answer, pointing toward a decision without ever stating one.
**Reasoned result: the shape the check is meant to catch, correctly identified as such by the
prompt's own stated criteria.** The prompt's text then states, in the abstract, that the same shape
aimed at a client's finances (a caption presupposing now is the moment to revisit a position) is what
to flag there - a generalization by structural analogy, not a constructed financial sentence to
verify separately.

**Stand-in 2 (peer-behavior endorsement):** "look how many supporters gave again this year." Checked
against the grading prompt's own stated bar (citing others' behavior as tacit encouragement to do the
same): yes, this nudges toward repeating an action without ever stating it as advice. **Reasoned
result: correctly identified as the shape to catch**, same structural-analogy generalization to the
financial domain in the prompt's own text.

**Control (should not be flagged):** the good deck's own Slide 3 line, "The portfolio's growth over
the year was not evenly split across funds... This report states what happened this year; it isn't a
comment on what to do with any of it next year." Checked against both shapes above: no leading
question, no citation of others' behavior, no suggestion of a specific action - it states a fact and
explicitly disclaims giving direction. **Reasoned result: not flagged, correctly.**

**Conclusion: the grading prompt's own stated criteria correctly separate the two flagged shapes from
a clean factual control, reasoned by hand, using only the prompt's own non-financial stand-ins.** This
confirms the rubric's logic is coherent on its own terms. It does not confirm a live AI grader, run
against these or any other text, would reach the same verdict - untested, same limit named in the run
README and in the module's own footer note.

## Part 4: product-claim re-verification

Sources fetched live in this session, 2026-09-13, not recalled:

- Microsoft Learn, "Analyze and visualize data using Microsoft Copilot" (module overview, `ms.date`
  2026-08-21, `updated_at` 2026-09-07T17:14:00Z) -
  `learn.microsoft.com/en-us/training/modules/analyze-visualize-data-copilot/`.
- Microsoft Learn, "Generate insights using the Analyst Agent" (unit 3 of the same module, `ms.date`
  2026-08-25, `updated_at` 2026-08-26T17:13:00Z) -
  `learn.microsoft.com/en-us/training/modules/analyze-visualize-data-copilot/3-generate-insights-analyst-agent`.
- Microsoft Learn, "Exercise - Analyze and visualize data with Microsoft Copilot" (unit 3a of the same
  module, `ms.date` 2026-09-03, `updated_at` 2026-09-07T17:14:00Z) -
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
**Confirmed as of 2026-09-13.**

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
