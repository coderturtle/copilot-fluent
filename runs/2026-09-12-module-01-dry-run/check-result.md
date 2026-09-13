# Check result - Module 01 dry run, 2026-09-12

*Simulation only. This dry run checks fictional grading logic against synthetic transcripts about a
fictional firm; it is not evidence about any real client, account, or real financial, legal, or tax
matter.*

## Part 1: hidden-fact check against `fixtures/grading-key.md`

This dry run does not reproduce the real 5-fact checklist's literal values here, on purpose - see
`docs/coachgremlin-authoring-lessons.md` lesson 4 (a dry run's job is to prove the checking logic
works, not to publish the answer in the same commit as the "hidden" key, or anywhere a learner would
navigate through on the way to the exercise). `grounded-transcript.md` uses placeholder stand-ins for
the same 5 categories; the counts below describe how many of those categories matched, not which
exact strings did.

| # | Fact category | In grounded transcript (placeholder-substituted)? | In ungrounded transcript? |
|---|---|---|---|
| 1 | Client name #1 | **Yes** | No |
| 2 | Client name #2 | No - not mentioned | No |
| 3 | Founding year | **Yes** | No |
| 4 | AUM figure | **Yes** | No |
| 5 | Office address | **Yes** | No |

**Grounded transcript: matched 4 of 5 categories.** Pass condition is at least 3 of 5 - this
transcript passes, and by a realistic margin rather than a maximal one, which is the more useful case
to have checked (a checker that only gets exercised by a perfect 5-for-5 answer hasn't really been
tested).

**Ungrounded transcript: matched 0 of 5 categories.** Pass condition is 0 of 5 - this transcript
passes. Notably, the ungrounded response *tries* to sound plausible (hedged ranges, generic reasoning
about "firms like this") rather than flatly declining, which is exactly the harder case named in the
module README and the run's own README as worth constructing rather than a trivial "I don't know."
Despite that, it never lands on any of the 5 specific hidden categories, because none of them are
derivable from the prompt alone.

**Conclusion: the checklist correctly separates the two synthetic transcripts.** This confirms the
mechanical soundness of the 5-category / "at least 3 of 5 vs. exactly 0 of 5" design for these two
constructed examples. It does not confirm anything about a real learner's real Copilot output - see
the run README's scope note.

## Part 2: chat-vs-agent defensibility check (2 of 4 scenarios)

**Revision note (2026-09-12):** this section originally checked a different pair of scenarios
against an earlier draft of scenario 4, which described a digest that ran "on its own schedule."
A fresh-context adversarial review caught a real problem with that draft: `docs/workshop-design.md`
§6 lists "2.1.4 Schedule a prompt" as its own, separate AB-730 outline bullet under prompt
management (2.1), distinct from the agent-configuration bullets (2.3). A scheduled, repeating
single-turn prompt is Microsoft's own named "scheduled prompt" feature, not agent behavior by
itself - so the original scenario 4 risked teaching a label that Microsoft's own outline would
arguably contradict. The module README's scenario 4 was rewritten to remove the scheduling framing
entirely (a custom agent consulting multiple configured knowledge files and deciding its own lookup
order, with no schedule involved anywhere). This check-result was redone against the corrected
scenario text below, not the original.

**Second revision note (2026-09-12, this fix pass):** scenario 2's wording claimed the learner could
"close the window entirely and come back forty minutes later" to a finished Researcher draft. A
cross-model review found this specific claim isn't supported by Microsoft's own current Researcher
documentation, which states typical response times (under 5 minutes for simple queries, 10 to 45
minutes for complex ones) but does not confirm that closing the window/app entirely still lets the
task complete. The module README's scenario 2 now says "step away to do something else" instead,
which is defensible without asserting a specific mechanism Microsoft hasn't documented.

Chosen as the two closest calls in the corrected set - the ones most likely to be mislabeled by
someone applying "which app is this" or "does this sound impressive" instead of the actual property
(present and driving every step, versus handed a goal/knowledge and left to decide its own steps):

**Scenario 2** ("You open the Researcher agent and hand it a multi-step goal - 'pull last quarter's
portfolio activity for three named clients from these three files and draft a summary' - then step
away to do something else... you come back to a finished, cited draft without having walked it
through the steps yourself.") - **published label: agent.** A plausible objection: Copilot Chat's own
extended-reasoning mode can also take a while to answer inside one continuous chat turn, so "it took
a while" alone wouldn't be enough to call this agent rather than chat. Checked against the actual
property: this scenario names a dedicated agent surface (Researcher) and a multi-file task with more
than one step (pull data from three files, cross-reference, draft) that the learner does not
personally drive turn by turn. Label holds.

**Scenario 4** ("A colleague asks a question in Teams to a custom 'Client Prep' agent your team set
up with its own configured knowledge files. It checks two of those files, cross-references them,
and answers - all from one question, with nobody telling it which file to check first or in what
order.") - **published label: agent.** A plausible objection: it responds to one question and
answers right away, which sounds chat-shaped on the surface. Checked against the actual property:
the response involves more than one step decided by the agent itself (which of two files to check,
in what order, whether to cross-reference before answering) rather than the user driving each step
by hand or Copilot answering from what it already has in the conversation - that internal,
self-directed multi-step lookup is exactly the "handed knowledge and left to decide its own path"
property the answer key rests on, not how long the reply took to arrive. Label holds, and no longer
overlaps with the separate "scheduled prompt" feature the original draft accidentally matched.

**Conclusion: both checked labels are defensible against the actual stated property (present and
driving every step, versus handed a goal/knowledge and left to decide its own steps), not arbitrary
assignments, and the corrected scenario 4 no longer collides with a different, already-named AB-730
outline bullet.** The two scenarios not re-checked here (1 and 3) are the less ambiguous pair by
construction (an instant meeting-sidebar answer and an instant inline rewrite, both one turn, both
fully supervised), so checking the two agent-labeled scenarios is the more useful use of this dry
run's scope.
