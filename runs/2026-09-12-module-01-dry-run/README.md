# Module 01 dry run - 2026-09-12

*Simulation only. Everything in this dry run - the fixture, the fictional firm, the synthetic
transcripts - is fictional and built for this workshop. Nothing here describes a real client, a real
account, or real financial, legal, or tax advice.*

## What this run is, and what it isn't

No learner has attempted this module yet, and this session has no live Microsoft 365 Copilot
tenant access to run the exercise for real. So this isn't a dry run of "does a real learner pass
this exercise" - it's a dry run of the **grading logic itself**: given the hidden fact key in
`../../modules/01-starting-at-kellerman-and-castle/fixtures/hidden/grading-key.md`, can a human or AI
grader actually tell a plausibly-grounded Copilot answer apart from a plausibly-ungrounded one, and
do the four chat-versus-agent scenario labels hold up under a "why, specifically" challenge rather
than reading as arbitrary calls.

This run:

- Writes one synthetic **grounded** transcript (`grounded-transcript.md`) - a plausible Copilot
  response to this module's exact prompt, written as if Copilot had the firm-overview document in
  context, containing some but not all of the 5 hidden facts (a perfect 5-for-5 answer would be an
  easy case; a realistic abbreviated one is the harder, more useful case to check).
- Writes one synthetic **ungrounded** transcript (`ungrounded-transcript.md`) - a plausible Copilot
  response to the same prompt with no document in context, fabricating generic, non-matching
  details rather than declining outright, since that's the harder case for a checker to catch (a
  flat "I don't have that information" would be trivially distinguishable either way).
- Checks both, by hand, against the grading-only key (`check-result.md`), and confirms the checklist
  correctly separates them.
- Re-checks 2 of the 4 chat-versus-agent scenarios from the module README against the property the
  answer key is supposed to rest on ("were you present and watching the whole time" versus "did it
  work multiple steps with some independence"), rather than accepting the published labels on
  authorial say-so alone.

## What this run does NOT prove

- It does not prove a real learner, with real Copilot access, will produce transcripts anything
  like these synthetic ones.
- It does not prove Copilot's actual current behavior when grounded or ungrounded - these
  transcripts are authored to be *plausible*, not captured from a live session.
- It does not validate the AI-graded rubric's grading prompt against a real AI grader run - that's a
  separate, not-yet-done check, tracked the same way `docs/workshop-design.md` §8 already names that
  tier as an untested hypothesis for every module.
- The grading prompt itself deliberately no longer pre-supplies example Word/Excel differences (a
  fix pass on 2026-09-12 found the earlier draft handed the learner more ready-made answers than the
  checklist required, letting a learner pass by rephrasing them instead of doing a real comparison).
  This dry run does not validate that a real AI grader correctly judges a learner's own, un-prompted
  notes against the revised, example-free prompt - a live grading pass against real submitted notes
  is still a separate, not-yet-done check.

## Files

- `grounded-transcript.md` - synthetic Copilot response, grounded, 4 of 5 hidden facts present.
- `ungrounded-transcript.md` - synthetic Copilot response, ungrounded, 0 of 5 hidden facts present.
- `check-result.md` - the hand-check of both transcripts against the hidden key, plus the
  chat-vs-agent defensibility check.
