# Check result - Module 03 dry run, 2026-09-13

*Simulation only. This dry run checks fictional checking logic against synthetic transcripts and
constructed test prompts about a fictional firm; it is not evidence about any real client, account,
or real financial, legal, or tax matter.*

## Part 1: header presence-versus-absence check

| # | Required header phrase | In crafted transcript? | In naive transcript? |
|---|---|---|---|
| 1 | `Meetings This Week` | **Yes** | No |
| 2 | `Needs Johnny's Decision` | **Yes** | No |
| 3 | `Items to Route to Dalton` | **Yes** | No |

**Crafted transcript: all 3 of 3 required header phrases present.** **Naive transcript: 0 of 3
present**, even though it covers the same five clients and the same underlying facts - it organizes
them as one flat list by client name instead, which is a plausible, reasonably organized answer to a
vague ask, not a strawman non-answer. That's the harder and more useful case to have checked: the
naive prompt's response isn't bad or unhelpful, it just never produces the three specific header
phrases the crafted prompt's Format section asked for, because nothing in the naive prompt asked for
them.

**Conclusion: the header check correctly separates the two synthetic transcripts**, and it does so
against a naive response that's realistic rather than deliberately weak. This confirms the mechanical
soundness of the exact-phrase-presence design for these two constructed examples. It does not confirm
anything about a real learner's real Copilot output, on either side of the comparison - see the run
README's scope note.

## Part 2: does the reusability check actually distinguish a reusable prompt from one that isn't?

Two short test prompts, both otherwise following the module's own Role/Task/Format/Constraint shape:

**Test prompt A (constructed to be genuinely reusable):**

> Role: You're an operations assistant helping a senior advisor prepare a weekly status note.
> Task: Using that week's client roster file and the status-note style guide file, draft this
> week's note.
> Format: Structure the note under the three headings the style guide specifies, in the order it
> gives them, one line per client, omitting any heading with nothing under it that week.
> Constraint: Use only clients and details present in that week's roster file; never invent one.
> Nothing in the note should tell anyone what to do with a specific position.

**Test prompt B (constructed to quietly depend on this week's specific data):**

> Role: You're an operations assistant helping a senior advisor prepare a weekly status note.
> Task: Using this week's client roster file and the style guide file, draft this week's note.
> Format: Under Meetings This Week, list Farah Nasser (Tuesday 10am) and Dario Esposito (Thursday
> 2pm). Under Needs Johnny's Decision, list Owen Kowalczyk's contribution-date question. Under Items
> to Route to Dalton, list the Bellweather Family Trust and Lena Pruitt.
> Constraint: Nothing in the note should tell anyone what to do with a specific position.

**Reasoned by hand against the module README's own reusability grading prompt criteria** (no live AI
grader run performed - see the run README's scope note):

- **Test prompt A** references the roster and style-guide files generically ("that week's client
  roster file," "the three headings the style guide specifies") rather than typing this week's five
  client names or the three header phrases' underlying content into the prompt itself. Next week,
  against a roster with a different number of clients and different details, this prompt's
  instructions still make sense unchanged - it would still say "pull whoever's on the new roster and
  sort them into whichever of the three headings applies." **Reasoned result: passes.** (Note: the
  three header phrases themselves - "Meetings This Week," "Needs Johnny's Decision," "Items to Route
  to Dalton" - come from the style-guide fixture, which doesn't change week to week the way the
  roster does, so naming them directly doesn't make a prompt non-reusable; naming this week's
  *client* names or facts would.)
- **Test prompt B**'s Format section does exactly the failure mode the grading prompt's own stated
  criteria name: "a client's name written directly into the Role, Format, or Constraint section
  instead of left to whatever the referenced file contains." Next week, against a roster with five
  different clients, this exact prompt would still tell Copilot to write about Farah Nasser, Dario
  Esposito, Owen Kowalczyk, the Bellweather Family Trust, and Lena Pruitt specifically, regardless of
  who's actually on the new roster - producing a wrong result rather than an adapted one. **Reasoned
  result: fails, and the grading prompt's own stated criteria name the specific reason.**

**Conclusion: the reusability grading prompt's stated criteria distinguish these two constructed
prompts correctly when reasoned through by hand.** This does not confirm a real AI grader, run live
against these or any other prompt, would reach the same verdict - that's a separate, not-yet-done
check, same as every other module's Tier-2-equivalent rubric in this workshop.

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
