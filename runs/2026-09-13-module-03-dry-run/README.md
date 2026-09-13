# Module 03 dry run - 2026-09-13

*Simulation only. Everything in this dry run - the fixtures, the fictional firm, the synthetic
transcripts and prompts - is fictional and built for this workshop. Nothing here describes a real
client, a real account, or real financial, legal, or tax advice.*

## What this run is, and what it isn't

No learner has attempted this module yet, and this session has no live Microsoft 365 Copilot tenant
access to run the exercise for real. So this isn't a dry run of "does a real learner pass this
exercise" - it's a dry run of the **checking logic itself**: given the two fixtures in
`../../modules/03-anatomy-of-a-working-prompt/fixtures/`, does the header-presence-versus-absence
comparison actually separate a structured response from an unstructured one, and does the
reusability grading prompt in the module README actually distinguish a prompt that would still work
next week from one that quietly depends on this week's specific data.

Unlike Modules 01, 02, and 07, this module has no hidden grading-only key - its gate checks a
structural property of the learner's own two transcripts against each other, and a structural
property of the learner's own prompt, not a match against withheld facts. So there's nothing in this
run that needs to stay unlinked from the learner-facing README the way `grading-key.md` does in
Modules 01 and 02 - the module README already names this dry run directly.

This run:

- Writes one synthetic **crafted-prompt** transcript (`crafted-transcript.md`) - a plausible Copilot
  response to a genuine Role/Task/Format/Constraint prompt built from both fixtures, structured under
  the three exact headers the style-guide fixture specifies.
- Writes one synthetic **naive-prompt** transcript (`naive-transcript.md`) - a plausible Copilot
  response to the module's supplied naive prompt, run against the same two fixtures, organized in a
  reasonable but different way that doesn't happen to produce the same three header phrases (a flat
  bullet list organized by client name is the harder, more realistic case to check than an answer
  that declines to organize the information at all).
- Checks both, by hand, for the three exact header phrases (`check-result.md`, Part 1).
- Constructs two short test prompts, one written to stay reusable against different data and one
  written to quietly hardcode this week's specifics, and reasons through whether the module's
  reusability grading prompt's own stated criteria would actually separate them (`check-result.md`,
  Part 2) - since a reusability check that can't tell these two apart wouldn't be checking anything.

## What this run does NOT prove

- It does not prove a real learner, with real Copilot access, will produce transcripts anything like
  these synthetic ones, or write a prompt anything like either test prompt below.
- It does not prove Copilot's actual current behavior for either prompt - these transcripts are
  authored to be *plausible*, not captured from a live session.
- It does not validate the reusability grading prompt against a real AI grader run - that's a
  separate, not-yet-done check, tracked the same way `docs/workshop-design.md` §8 already names that
  tier as an untested hypothesis for every module.
- It does not confirm that Copilot's save, schedule, and share mechanics behave in a live tenant
  exactly as the module README describes them - that description is verified against Microsoft's own
  published documentation as of 2026-09-13, not against a live run in this session.

## Files

- `crafted-transcript.md` - synthetic Copilot response to the crafted prompt, containing all three
  required header phrases.
- `naive-transcript.md` - synthetic Copilot response to the supplied naive prompt, containing none of
  the three header phrases.
- `check-result.md` - the hand-check of both transcripts, plus the reusability-check distinguishing
  test.
