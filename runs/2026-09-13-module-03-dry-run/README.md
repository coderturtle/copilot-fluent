# Module 03 dry run - 2026-09-13

*Simulation only. Everything in this dry run - the fixtures, the fictional firm, the synthetic
transcripts and prompts - is fictional and built for this workshop. Nothing here describes a real
client, a real account, or real financial, legal, or accounting advice.*

## What this run is, and what it isn't

No learner has attempted this module yet, and this session has no live Microsoft 365 Copilot tenant
access to run the exercise for real. So this isn't a dry run of "does a real learner pass this
exercise" - it's a dry run of the **checking logic itself**: given the two fixtures in
`../../modules/03-anatomy-of-a-working-prompt/fixtures/`, does the header-presence-versus-absence
comparison actually separate a structured response from an unstructured one, and does the
reusability grading prompt in the module README actually distinguish a prompt that would still work
next week from one that quietly depends on this week's specific data.

Unlike Modules 01, 02, and 07, this module has no hidden answer key - its gate checks a
structural property of the learner's own two transcripts against each other, and a structural
property of the learner's own prompt, not a match against withheld facts. So there's nothing in this
run that needs to stay unlinked from the learner-facing README the way the hidden answer key file does in
Modules 01 and 02 - the module README already names this dry run directly.

This run:

- Writes one synthetic **crafted-prompt** transcript (`crafted-transcript.md`) - a plausible Copilot
  response to a genuine Role/Task/Format/Constraint prompt built from both fixtures, structured under
  the three exact headers the style-guide fixture specifies.
- Writes one synthetic **naive-prompt** transcript (`naive-transcript.md`), run exactly as the
  module's Part 2 instructions specify: the roster fixture attached, the style guide deliberately
  left out - a plausible Copilot response organized in a reasonable but different way that doesn't
  happen to produce the same three header phrases (a flat bullet list organized by client name is the
  harder, more realistic case to check than an answer that declines to organize the information at
  all).
- Writes one synthetic **near-miss** transcript (`naive-with-style-guide-transcript.md`) - the same
  naive prompt, but with the style guide attached anyway, the exact mistake Part 2's instructions
  exist to prevent. This is the realistic near-miss case: it tests whether an unstructured prompt can
  still produce a false-positive header match when it shares an attachment with the crafted run,
  which earlier versions of this module's gate did not actually construct and check, only assumed.
- Checks all three, by hand, for the three exact header phrases (`check-result.md`, Part 1) - the
  near-miss does produce a false-positive 3-of-3 match, which is why the module's naive run doesn't
  share the style guide attachment in the first place.
- Constructs two short test prompts, one written to stay reusable against different data and one
  written to quietly hardcode this week's specifics, and reasons through whether the module's
  reusability grading prompt's own stated criteria would actually separate them (`check-result.md`,
  Part 2) - since a reusability check that can't tell these two apart wouldn't be checking anything.
  The passing prompt used here is the same one in `crafted-transcript.md`, already confirmed to
  satisfy the module's own checklist, so this also proves a gate-conforming prompt is reusable, not
  just that some reusable-sounding prompt is.

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

- `crafted-transcript.md` - synthetic Copilot response to the crafted prompt (both fixtures
  attached), containing all three required header phrases.
- `naive-transcript.md` - synthetic Copilot response to the supplied naive prompt, run exactly as
  Part 2 specifies (roster only, no style guide attached), containing none of the three header
  phrases.
- `naive-with-style-guide-transcript.md` - the constructed near-miss: the same naive prompt, but with
  the style guide attached anyway, producing all three header phrases despite the vague prompt. Not
  something the module asks a learner to produce - it exists to test why Part 2's instructions keep
  the style guide out of the naive run.
- `check-result.md` - the hand-check of all three transcripts, plus the reusability-check
  distinguishing test.
