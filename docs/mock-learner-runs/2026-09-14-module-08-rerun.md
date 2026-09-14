# Mock Learner Gremlin dogfood run - Module 08 (re-run, manual orchestration), 2026-09-14

*Simulation only. Both attempts below are agent-produced role-play, not a real human learner's
work, and neither persona had actual Microsoft 365 Copilot or Agent Builder access - both disclosed
this explicitly and specifically this run. This run tests whether Module 08's gate mechanism holds
up against a genuinely blind attempt, including a deliberately flawed one; it does not, and cannot,
prove anything about a real human's experience with this module. See
`~/hekton/gremlins/coaching/mock-learner-gremlin.md` (v0.1) for the Gremlin this run dogfoods.*

## Why this is a re-run, and what it was specifically designed to test

Module 08's original run (`docs/mock-learner-runs/2026-09-14-module-08.md`, part of the six-module
Workflow-tool batch) found the "flag any of the client's accounts that might need extra attention"
scripted flaw caught only by a standard-wording re-check, not a keyword scan - and separately found
a disclosure asymmetry (the diligent persona disclosed its lack of live tool access; the
scripted-flaw persona didn't), exposing a real limit on what this Gremlin can verify for a
live-SaaS-tool module. This re-run reused the scripted flaw and explicitly instructed both personas
to disclose their lack of live access, testing whether that asymmetry - like Module 01's - was an
artifact of implicit versus explicit instruction.

## Results

| | Priya (diligent) | Marcus (scripted flaw) |
|---|---|---|
| Part A reasoning | Correct | Correct |
| Instructions core content | Correct, internal-only | Correct, internal-only, **plus scripted clause** |
| Suggested prompts | All 4 clean | All 4 clean |
| Disclosure of no live access | Explicit throughout, itemized by part | Explicit throughout, itemized by part |
| Self-check verdict | PASS (with one honest procedural caveat) | **PASS** - self-check did NOT catch the flaw this time |
| Independent verification verdict | PASS (matches self-check) | **FAIL** - correctly caught the flaw, explicitly disagreeing with the self-check |

## The findings

**The disclosure asymmetry from the original run did not recur.** Both personas disclosed their
lack of live Copilot/Agent Builder access clearly, specifically, and per-part, once explicitly
instructed to. This matches Module 01's re-run result: the original asymmetry was a property of how
the run was set up (implicit vs. explicit disclosure instruction), not an inherent difference
between how honestly a diligent persona versus a scripted-flaw persona behaves. Two modules now
confirm this correction to the original finding's framing.

**The scripted flaw survived self-check this time - the first break in a four-module streak.**
Modules 03, 04, 05, and 07 all showed the standardized self-check template catching a planted flaw
cleanly. This run's scripted flaw did not get caught: Marcus's self-check, even after being
explicitly instructed to check the clause "against the standard's actual meaning... not just
whether it contains a banned word," reasoned that "flag any of the client's accounts that might
need extra attention before the meeting" was "closer to the Open Follow-Ups spirit... not a
suitability call on the client's money," and passed it.

**Independent verification caught it, explicitly disagreeing with the self-check.** Grading the
identical clause against the identical standard, independent verification called this "not a close
call" - flagging accounts that "might need extra attention" requires the agent to evaluate a
specific client's account situation and render a judgment about whether it warrants concern, which
is a suitability-flavored judgment by definition, independent of vocabulary. It also noted the
clause isn't a documented Playbook step at all (unlike the three real routing triggers, which all
passed cleanly in both submissions) - it asks the agent to originate a new risk assessment, which
independently conflicts with the instruction's own "answer only using the attached Playbook
document" constraint. This is the clearest tier disagreement of any re-run module: not a
formatting question, not a ground-truth-wording gap, but two graders reasoning about the identical
sentence against the identical standard and reaching opposite verdicts.

**Why this flaw resisted the standardized template when four prior flaws didn't.** The four flaws
Modules 03-07 caught were all, at core, fact-lookup errors: does this client belong in section X or
section Y, does this figure describe event A or event B, does this phrase match the required
string. Re-reading the source material resolves a fact-lookup error almost mechanically once a
learner is told to actually look. This module's flaw is a value judgment: does this clause cross
into suitability-flavored territory. Re-reading the source doesn't mechanically resolve a value
judgment the way it resolves a fact - it still requires the self-checker to weigh a genuinely
debatable framing question, and a learner (or persona) that already believes their own writing is
reasonable has a real, human (or model) tendency to rationalize a borderline call in their own
favor, "actually re-verify" instruction or not. **This is a meaningfully different, and probably
more fundamental, limit on what a standardized self-check prompt can guarantee than anything found
in the prior four modules.**

## What this run does and doesn't prove

- **Proves:** the disclosure-asymmetry finding from the original Module 08 run does not replicate
  under explicit disclosure instructions - a second confirmation of the same correction Module 01's
  re-run made.
- **Proves:** the standardized self-check template (Design Principle 7) is not a universal fix - it
  reliably catches fact-lookup-shaped flaws (four for four across Modules 03-07) but did not catch a
  value-judgment-shaped flaw here, even with an explicit instruction to check against the standard's
  actual meaning rather than a keyword scan.
- **Proves:** the two-tier design's independent-verification backstop remains essential specifically
  *because* self-check has this limit - this run is real, direct evidence for exactly the scenario
  the two-tier model exists to cover, not a hypothetical.
- **Does not prove:** that value-judgment flaws are always missed by self-check - this is one
  instance, not a general law. It does suggest a real, distinct risk category worth testing again in
  a future run: does a *harder* fact-lookup flaw (more ambiguous, more steps of reasoning) behave
  more like this module's value-judgment flaw than like Modules 03-07's flaws.
- **Does not prove:** anything about a real human's actual experience with this same clause - an
  agent persona's tendency to rationalize its own prior output may or may not match a real learner's.

## Recommendation (report-only - not applied in this PR)

No checklist-wording change is recommended - the module's own Part C standard already states the
correct criterion ("nothing that judges whether something suits a particular person's situation"),
and this run's independent verification applied that exact wording successfully. The gap is in the
self-check step's reliability against a value-judgment flaw, not the standard's wording. If this
module's self-check is meant to be trustworthy on its own (not just as a first pass before the
AI-graded backstop), consider adding one explicit worked example directly to Part C - the "flag any
accounts that might need extra attention" phrasing itself, named as a specific example of what
passes a keyword scan but fails the actual standard - since this run's own finding is that
abstract instruction to "check the actual meaning" was not sufficient on its own for this flaw
shape, but a concrete worked example might do more work.

## Friction log

Priya's own Part C process is worth noting as a positive, unscripted data point in the opposite
direction from Marcus's miss: she caught and fixed a real issue in her own first draft (an
instruction naming "tax" and "specific holding" directly, even while prohibiting them, which she
correctly judged might read as taxation *content* present regardless of framing) and separately
flagged, then correctly resolved on a stricter re-read, a hedge about whether "holdings" in a
suggested prompt was safe wording. A genuinely careful self-check *can* catch subtle,
non-fact-lookup issues - it isn't that value judgments are uncatchable by self-check in general,
only that this run's scripted instance of one wasn't caught by this particular persona's pass.

## Methodological note

Written directly from six raw agent outputs (two attempts, two self-checks, two independent
verifications) with no synthesis-agent intermediary, per Design Principle 8.
