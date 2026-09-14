# Mock Learner Gremlin dogfood run - Module 01 (re-run, manual orchestration), 2026-09-14

*Simulation only. Both attempts below are agent-produced role-play, not a real human learner's
work, and neither persona had actual Microsoft 365 Copilot access to drive - both disclosed this
explicitly, on instruction this time (see below). This run tests whether Module 01's gate
mechanism holds up against a genuinely blind attempt, including a deliberately flawed one; it does
not, and cannot, prove anything about a real human's experience with this module. See
`~/hekton/gremlins/coaching/mock-learner-gremlin.md` (v0.1) for the Gremlin this run dogfoods.*

## Why this is a re-run, and what's different

Module 01 already had one Mock Learner Gremlin run, 2026-09-14, as part of a six-module batch
executed via the Workflow tool (`docs/mock-learner-runs/2026-09-14-module-01.md`, the original,
left in place unmodified - this file supersedes it as the more trustworthy record, per the
decision to re-run that whole batch manually). That original run found a real, useful result (a
tier disagreement over whether a self-simulated AI-graded-pass transcript satisfies the module's
procedural requirement) but was produced by a workflow pipeline later found to have two
cross-cutting reliability defects (a design-stage content-completeness gap, a synthesis-stage
confabulation risk - see `mock-learner-gremlin.md`'s Risks). This re-run uses the same manual,
one-orchestrator-at-a-time approach as Runs 1-3 (Modules 02, 06, 09): every prompt is written and
every result read directly, with no intermediate synthesis step that could drop or invent content.

Two things were also done differently on purpose, both improvements over the original run:

1. **Both personas were explicitly instructed to disclose their lack of live Copilot access**,
   rather than leaving disclosure to individual judgment. The original run found an asymmetry (the
   diligent persona disclosed, the scripted-flaw persona didn't) and treated it as a finding about
   the Gremlin's own limits. This run tests whether that asymmetry was really about the personas'
   inherent honesty, or just about whether they were told to disclose - see the results below.
2. **The independent-verification ground truth for the AI-graded-pass item was rewritten to match
   the module's own literal wording** (a self-simulated grading transcript explicitly does not
   count), directly applying the original run's own recommendation #1, to test whether that fix
   actually closes the tier-disagreement gap it was written to close.

## Results

| | Priya (diligent) | Marcus (scripted flaw) |
|---|---|---|
| Part 1 - grounded transcript (need >=3/5 facts) | 5/5 | 5/5 |
| Part 1 - ungrounded transcript (need 0/5 facts) | 0/5 | 0/5 |
| Part 2 - four scenarios vs. key | 4/4 correct | **3/4** - scenario 3 mislabeled "agent" (scripted) |
| App-comparison notes, content quality | Two specific, real differences | Two specific, real differences |
| AI-graded-pass requirement, as literally worded | Not performed (disclosed) | Not performed (disclosed) |
| Self-check verdict | FAIL (correctly, on the AI-graded-pass gap alone) | FAIL (correctly, on scenario 3 and the AI-graded-pass gap) |
| Independent verification verdict | FAIL (matches self-check exactly) | FAIL (matches self-check exactly) |

## The finding: both fixes from the original run held

**The scripted flaw worked exactly as designed and was caught cleanly.** Marcus was briefed with
one concrete, realistic mistake: mislabeling scenario 3 (a single, immediately-visible, fully
supervised Word paragraph rewrite) as "agent" rather than "chat," reasoning that "Word now has its
own agent mode... so this is the agent feature doing the rewrite" - missing the scenario's own
explicit clarification that Word's separate agent-mode feature is not what's happening in that
scenario. This is a real, named trap: the module's own text anticipates exactly this confusion
("Word also now has its own separate agent mode... that's a different feature from what's
happening in this scenario"). Both Marcus's self-check and independent verification caught it
immediately and for the same reason - a simple value-vs-key comparison, since the checklist item
here is "does your answer match the published key," which leaves little room for the kind of
checklist-wording ambiguity found in some other modules.

**Instructing both personas to disclose their lack of live Copilot access eliminated the
disclosure asymmetry the original run found.** Both Priya and Marcus stated plainly, unprompted
beyond the persona brief's own instruction, that they had no live Copilot session and had not
actually run their app-comparison notes through the module's grading prompt - Marcus's own words:
"I'm flagging honestly here that the 'graded pass' part of the requirement has not actually
happened... I didn't want to fake a grading result I don't actually have." **This means the
original run's asymmetric-disclosure finding was not really evidence about scripted-flaw personas
being structurally less honest** - it was evidence about what happens when disclosure is left
implicit versus made an explicit instruction. That's a real, useful correction to the earlier
finding's own framing, not just a replication.

**Aligning the independent-verification ground truth with the module's own literal wording closed
the tier disagreement.** The original run found self-check and independent verification splitting
(FAIL vs PASS) on the diligent persona's honestly-disclosed self-simulated grading pass, because
the two graders were checking different things (a procedural requirement vs. a content-quality
ground truth). This run's independent-verification ground truth was rewritten to explicitly state
that a self-assessment, however honest, does not satisfy the literal "must be pasted into Copilot
and actually graded" requirement - and with that fix applied, self-check and independent
verification now agree exactly, on both personas, for the same stated reason. The original run's
own recommendation #1 was correct and sufficient on its own; no further wording change was needed.

## What this run does and doesn't prove

- **Proves:** the scripted scenario-3 flaw is caught cleanly by both tiers, on a value-vs-key
  comparison the checklist's own wording makes close to unambiguous.
- **Proves:** the original run's disclosure asymmetry was a property of how the run was set up
  (implicit vs. explicit disclosure instruction), not an inherent difference between a diligent and
  a scripted-flaw persona's honesty - correcting rather than just confirming the earlier finding.
- **Proves:** the original run's own recommended fix (align independent-verification ground truth
  with the module's literal procedural wording) actually works when applied - the tier
  disagreement it targeted does not recur under the fix.
- **Does not prove:** anything about how a real learner with genuine live Copilot access would
  perform - every "AI-graded pass" in this run, on both personas, was disclosed as not actually
  performed, the same real-tool-access gap the original run also had.
- **Does not prove:** that this specific disclosure-asymmetry fix generalizes to other modules'
  scripted-flaw persona briefs - this run only tested Module 01's shape (a procedural
  self-grading-substitute gap), not other modules' own versions of a similar ambiguity.

## Friction log

Neither persona reported confusion about the exercise itself. Both independently, and without
being told to, distinguished between "the notes are probably fine" and "the required grading step
didn't happen" - treating those as two separate questions rather than assuming good content
implies a passed gate. That distinction, made unprompted by both personas, is itself a small
positive signal about how legibly this module's Required Gate section separates a content bar
from a procedural one, even though the outcome (an unmet procedural requirement) is a fail either
way.

## Methodological note

This report was written directly from the four raw agent outputs (two attempts, two self-checks,
two independent verifications), with no synthesis-agent intermediary step - the exact discipline
Design Principle 8 exists to require when a synthesis step *is* used. No claim above needed to be
traced back through a transcript to confirm it actually happened, since every claim here is a
direct quote or paraphrase of something this orchestrator read firsthand.
