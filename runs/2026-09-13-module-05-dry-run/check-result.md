# Check result - Module 05 dry run, 2026-09-13

*Simulation only. This dry run checks fictional checking logic against synthetic letters and
summaries about a fictional firm; it is not evidence about any real client, account, or real
financial, legal, or tax matter.*

## Part 1: the client-letter word floor

| File | Word count (body, disclaimer line excluded) | Floor | Result |
|---|---|---|---|
| `good-letter.md` | 214 | 200 | **Pass** |
| `naive-letter.md` | 33 | 200 | **Fail** |

**Conclusion: the floor correctly separates a letter that actually does the job Johnny asked for
(confirms the meeting, invites Molly to flag anything she wants covered, closes warmly) from a
one-line confirmation that technically answers the same brief but gives Molly nothing to actually
work with.** The naive letter isn't wrong or rude, it's just thin - which is the realistic failure
mode a floor like this is meant to catch, not a strawman non-answer.

## Part 2: the management-summary checks

| File | Word count (body) | Bound (≤300) | ≥3 exact data points? | Top-line figure (214.6%) present? |
|---|---|---|---|---|
| `good-summary.md` | 258 | Pass | **Yes - 5** (214.6%, March 2004, 71% domestic equities, 76.2%, 54.8%) | **Yes** |
| `naive-summary.md` | 159 | Pass | **No - 0** | **No** |

Exact-string search results, run against both files:

```
== 214.6% ==
good-summary.md:1
naive-summary.md:0
== March 2004 ==
good-summary.md:1
naive-summary.md:0
== 71% domestic equities ==
good-summary.md:1
naive-summary.md:0
== 76.2% ==
good-summary.md:1
naive-summary.md:0
== 54.8% ==
good-summary.md:1
naive-summary.md:0
```

**This is the interesting case, and the reason this module doesn't check the word bound alone.** Both
summaries clear the 300-word ceiling - the naive one comfortably. If the word bound were the only
check, both would pass. But the naive summary paraphrases every figure into something looser ("more
than doubled," "back in the mid-2000s," "mostly invested in domestic stocks") instead of preserving
Wade's actual numbers, and it never states the note's own top-line figure at all. **The
transplanted-data-point and top-line-figure checks catch exactly the failure mode the word bound
can't**: a summary that's the right length but has quietly drifted from the source's real data into a
vague impression of it. The good summary passes all four dimensions at once; the naive one passes
only the length check.

## Part 3: tone and recommendation-language, reasoned by hand

No full constructed document pair for this part - the module's own grading prompt already gives the
calibration examples, so this reasons through those two sentences directly against the grading
prompt's stated criteria, plus one clean control sentence for contrast (no live AI grader run
performed - see the run README's scope note).

**Control sentence (clean, should not be flagged):** "As of last quarter, the Kellerman Growth Fund's
cumulative return since inception stands at 214.6%." This states a historical fact with no framing
that nudges toward a conclusion or a course of action. Checked against the grading prompt's stated
bar (does it suggest a specific action, judge suitability, or address taxation - even through framing
rather than a flagged word): no. It reports a number and nothing else. **Reasoned result: not
flagged, correctly.**

**Leading-question sentence (subtle drift, should be flagged):** "Doesn't this history make now feel
like the right moment to take a closer look at your allocation?" This never names buy, sell, hold, a
specific fund, or a specific action - by the crude phrase-list scanner's own standard it's clean.
But checked against the grading prompt's own stated criteria for framing-based drift ("a sentence
shaped as a leading question... reads as recommendation-flavored through its framing alone, even
though it never names a specific action"), this is exactly that shape: a question that presupposes
its own answer and points the reader toward reconsidering their money without ever stating what to
reconsider it toward. **Reasoned result: flagged, correctly, on the grading prompt's own stated
framing criteria** - and this is the case that a keyword scan alone would have missed, which is the
entire reason this check exists as an AI-graded pass rather than another checklist item.

**Implied-endorsement sentence (subtle drift, should be flagged):** "It's worth noting how many
long-tenured clients have stayed invested through periods like this one." No flagged word here
either. Checked against the grading prompt's criteria for a hedge that implies a course of action
through someone else's behavior: this nudges the reader toward a conclusion (staying invested is what
others like you have done) without stating a recommendation directly. **Reasoned result: flagged,
correctly**, same framing-based reasoning as the leading-question case.

**Conclusion: the grading prompt's own stated criteria correctly separate a clean historical-fact
sentence from both subtle-drift examples, reasoned by hand.** This confirms the rubric's logic is
coherent on its own terms. It does not confirm a live AI grader, run against these or any other
sentences, would reach the same verdict - untested, same limit named in the run README.

## Part 4: product-claim re-verification

Sources fetched live in this session, 2026-09-13, not recalled:

- Microsoft Learn, "Draft and refine business content using Microsoft Copilot" (module overview,
  `ms.date: 2026-08-21`, `updated_at: 2026-09-07T17:14:00Z`) -
  `learn.microsoft.com/en-us/training/modules/draft-refine-business-content/`.
- Microsoft Learn, "Draft your content using Microsoft Copilot" (unit 2 of the same module,
  `ms.date: 2026-08-25`, `updated_at: 2026-08-26T17:13:00Z`) -
  `learn.microsoft.com/en-us/training/modules/draft-refine-business-content/2-draft-content-using-copilot`.

**Claim 1 - drafting a new document from a prompt alone, no source attached.** The unit states: "Copilot
in Word lets you generate a first draft from a prompt, then refine it through conversation." This
directly supports Part A of the module - a document Copilot builds from a description with nothing
else attached. **Confirmed as of 2026-09-13.**

**Claim 2 - drafting a document derived from an existing/referenced source.** The unit states: "To
reference a specific file, email, or meeting in your prompt, type `/` in the Copilot pane and start
typing the name - Copilot will find it and use it as a source," and separately, "To draw from your
organizational content, reference specific files using `/filename` in your prompt." This directly
supports Part B - attaching or referencing Wade's fund note so Copilot drafts from its actual
content rather than a generic impression of the topic. **Confirmed as of 2026-09-13.**

**Named limit, not overclaimed.** Both claims are confirmed against Microsoft's own current published
training content, not against a live tenant run in this session - this workshop has no live Copilot
access to test either mechanic directly, the same limit named on every other module's product claims.
