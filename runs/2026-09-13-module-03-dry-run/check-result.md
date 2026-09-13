# Check result - Module 03 dry run, 2026-09-13

*Simulation only. This dry run checks fictional checking logic against synthetic transcripts and
constructed test prompts about a fictional firm; it is not evidence about any real client, account,
or real financial, legal, or accounting matter.*

## Part 1: header presence-versus-absence check

This module's gate depends on the naive run *not* sharing the style guide attachment with the
crafted run - otherwise a header match proves nothing about the prompt. Checked here against three
constructed transcripts, not two: the crafted run, the naive run exactly as the module's Part 2 now
specifies it (roster only), and a constructed near-miss of the naive run with the style guide
attached anyway - the exact mistake Part 2's instructions exist to prevent.

| # | Required header phrase | Crafted (both files) | Naive, roster only (as specified) | Naive, style guide attached anyway (near-miss) |
|---|---|---|---|---|
| 1 | `Meetings This Week` | **Yes** | No | **Yes** |
| 2 | `Needs Johnny's Decision` | **Yes** | No | **Yes** |
| 3 | `Items to Route to Dalton` | **Yes** | No | **Yes** |

**Crafted transcript: 3 of 3.** **Naive transcript (roster only): 0 of 3**, even though it covers the
same five clients and the same underlying facts - it organizes them as one flat list by client name
instead, which is a plausible, reasonably organized answer to a vague ask, not a strawman non-answer.
Two independent reasons support the 0-of-3 result: the naive prompt never asked for that structure,
and the style guide - the only fixture that contains those three exact phrases - was never in that
chat to draw from. **Naive-with-style-guide near-miss: 3 of 3** (`naive-with-style-guide-transcript.md`)
- constructed to show that when the naive prompt is run with the style guide attached anyway, a
plausible Copilot response reproduces all three header phrases despite the prompt itself never asking
for them, naming either file, or requesting any structure. That confirms the near-miss is real, not
hypothetical: if both runs shared the style guide (the module's original design), a learner could get
this exact result on the naive side and have no way to tell, from the header match alone, whether
their crafted prompt did anything at all.

**Conclusion: the header check is only causally valid under the module's current instructions (naive
run gets the roster and nothing else)**, and the near-miss construction confirms why - with the style
guide shared, the check cannot tell "the prompt produced this structure" apart from "the attachment
did." That's the actual reason Part 2 keeps the style guide out of the naive run, rather than asking
the learner to notice and rerun if a false positive happens to occur. This does not confirm anything
about a real learner's real Copilot output, on any of the three sides - see the run README's scope
note.

## Part 2: does the reusability check actually distinguish a reusable prompt from one that isn't?

The first version of this check used a "passing" test prompt that referred to "that week's client
roster file" and "the style guide file" generically, never naming either fixture's exact filename.
That prompt would not actually have passed this module's own checklist (which requires the crafted
prompt to name both fixture files by their exact filenames), so it couldn't prove that a real,
gate-conforming prompt is reusable - only that some other, non-conforming prompt is. Fixed here by
using, as Test prompt A, the exact prompt from `crafted-transcript.md` - a prompt already confirmed
in Part 1 to satisfy every item in the module's checklist (all 4 labels, both exact filenames, the
three style-guide headings named as structure) - rather than constructing a new one.

**Test prompt A (the crafted-transcript.md prompt, unchanged - already checklist-conforming):**

> Role: You're an operations assistant helping Johnny Castle, a senior advisor at Kellerman &
> Castle, get ready for his Monday morning calls.
> Task: Using monday-client-roster.md and status-note-style-guide.md, draft this week's status
> note for Johnny.
> Format: Structure the note under exactly these three headings, in this order, and leave a heading
> out entirely if nothing belongs under it: Meetings This Week, Needs Johnny's Decision, Items to
> Route to Dalton. One line per client under whichever heading applies.
> Constraint: Use only clients and details that appear in monday-client-roster.md. Nothing in the
> note should tell anyone what to do with a specific position, and this is a simulation-only
> internal note, not financial or legal advice.

**Test prompt B (constructed to quietly depend on this week's specific data, otherwise built the
same way - all 4 labels, both exact filenames named, so the only variable being tested is the
week-specific Format content, not a missing label or a missing filename):**

> Role: You're an operations assistant helping Johnny Castle, a senior advisor at Kellerman &
> Castle, get ready for his Monday morning calls.
> Task: Using monday-client-roster.md and status-note-style-guide.md, draft this week's status
> note for Johnny.
> Format: Under Meetings This Week, list Farah Nasser (Tuesday 10am) and Dario Esposito (Thursday
> 2pm). Under Needs Johnny's Decision, list Owen Kowalczyk's contribution-date question. Under Items
> to Route to Dalton, list the Bellweather Family Trust and Lena Pruitt.
> Constraint: Nothing in the note should tell anyone what to do with a specific position.

**Reasoned by hand against the module README's own reusability grading prompt criteria** (no live AI
grader run performed - see the run README's scope note):

- **Test prompt A** names both fixture files by their exact filenames (which stay the same every
  week - Oda Mae's team always saves this week's data as `monday-client-roster.md`, so naming the
  file doesn't hardcode anything week-specific) and refers to the three section headings by name,
  which also come from the style guide fixture, not the roster - the style guide doesn't change week
  to week the way the roster does. Nowhere does it type in this week's five client names or facts.
  Next week, against a roster with a different number of clients and different details, this
  prompt's instructions still make sense unchanged. **Reasoned result: passes**, and it does so while
  actually satisfying the module's own checklist, unlike the first version of this test.
- **Test prompt B** is identical to Test prompt A in every section except Format, isolating the one
  thing actually being tested. Its Format section does exactly the failure mode the grading prompt's
  own stated criteria name: "a client's name written directly into the Role, Format, or Constraint
  section instead of left to whatever the referenced file contains." Next week, against a roster with
  five different clients, this exact prompt would still tell Copilot to write about Farah Nasser,
  Dario Esposito, Owen Kowalczyk, the Bellweather Family Trust, and Lena Pruitt specifically,
  regardless of who's actually on the new roster - producing a wrong result rather than an adapted
  one. **Reasoned result: fails, and the grading prompt's own stated criteria name the specific
  reason.**

**Conclusion: the reusability grading prompt's stated criteria distinguish these two constructed
prompts correctly when reasoned through by hand, and this time the passing prompt is one that would
actually clear the module's own gate.** This does not confirm a real AI grader, run live against
these or any other prompt, would reach the same verdict - that's a separate, not-yet-done check, same
as every other module's Tier-2-equivalent rubric in this workshop.

## Part 3: honesty check on the three save/schedule/share confirmations

These three items are confirmed by the learner's own written statement, with no independent way for
this workshop to verify any of the three actually happened - the same limit named in
`docs/workshop-design.md` §8 for every confirmation-only item in this arc. Nothing about this dry run
changes that: a learner could write "saved, scheduled, shared" without doing any of the three, and
no check anywhere in this module would catch it. The module README's own checklist already names
this honestly rather than implying otherwise. What this run does confirm is narrower: the
save/schedule/share *mechanics* described in the module README (bookmark to save, "Schedule this
prompt" with a frequency and notification choice, copy-link or share-to-team to share) match
Microsoft's own current published documentation for Microsoft 365 Copilot, verified 2026-09-13 - not
that a real learner's confirmation of having done them is independently checkable, which it isn't and
was never claimed to be.
