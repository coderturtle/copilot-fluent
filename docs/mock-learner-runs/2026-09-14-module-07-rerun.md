# Mock Learner Gremlin dogfood run - Module 07 (re-run, manual orchestration), 2026-09-14

*Simulation only. Both attempts below are agent-produced role-play, not a real human learner's
work, and neither persona had actual Microsoft 365 Copilot access to drive - both disclosed this
explicitly. This run tests whether Module 07's gate mechanism holds up against a genuinely blind
attempt, including a deliberately flawed one; it does not, and cannot, prove anything about a real
human's experience with this module. See `~/hekton/gremlins/coaching/mock-learner-gremlin.md`
(v0.1) for the Gremlin this run dogfoods.*

## Why this is a re-run, and what it was specifically designed to test

Module 07's original run (`docs/mock-learner-runs/2026-09-14-module-07.md`, part of the six-module
Workflow-tool batch) found the scripted Q2/Q3 quarter-substitution flaw caught cleanly by
self-check, plus an unscripted finding: the diligent persona's fully-correct submission, written as
bolded-name-plus-quoted-commitment bullets rather than flat "Owner will..." sentences, failed its
own strict self-check on literal-string grounds while passing independent verification's more
lenient reading of the same format. This re-run reused the scripted flaw and deliberately
instructed the diligent persona to write in the exact flat "Owner will [action] by [date]" format
this time, specifically to remove the format ambiguity and see whether a genuinely correct,
correctly-formatted submission would pass cleanly once that variable was controlled.

**It did not, for a different and more severe reason.**

## Results

| | Priya (diligent) | Marcus (scripted flaw) |
|---|---|---|
| Content (owners, actions, dates) | All 5 correct | 4/5 correct, item 1 scripted wrong (Q3 instead of Q2) |
| Structural format | Flat "Owner will..." sentences, as instructed | Flat "Owner will..." sentences |
| Decoy avoidance (3 near-misses) | All 3 correctly excluded | All 3 correctly excluded |
| Exact-match against the revealed phrase table | **0 of 5** - every item paraphrased | 4 of 5 exact; item 1 wrong on content, not wording |
| Self-check verdict | **FAIL** - correctly identified 0/5 exact matches | FAIL - correctly caught the Q2/Q3 error |
| Independent verification verdict | **FAIL**, matches self-check exactly, item by item | FAIL, matches self-check exactly |

## The finding: a fully correct, correctly-formatted recap still fails 0 of 5 exact-match checks

This is the most severe finding across every module run to date, scripted or not. Priya's recap had
zero content errors: all five commitments correctly identified, correct owner, correct action,
correct date, all three decoys correctly excluded, written in the exact flat structural format the
module's own answer table models. And it still matched **none** of the five required phrases as a
literal substring, because of three small, entirely natural wording choices a careful real learner
would very plausibly make: using full names ("Johnny Castle," "Molly Jensen," "Baby Houseman")
instead of first names only; using natural synonym verbs ("provide" for "get," "send" for "get" in
one case); and spelling dates out with the full year ("September 11, 2026") instead of stopping at
the ordinal ("September 11th"). None of these are content errors, paraphrasing looseness, or
sloppiness - they are exactly the kind of small stylistic choices a genuinely diligent person
writing a professional recap would make without a second thought, several of them arguably *more*
correct or complete than the terse required phrasing (a full name is more identifying than a first
name alone; a full date is less ambiguous than a bare day-and-month).

Independent verification, working from the same literal substring rule, reached the identical
verdict on every single item, for the identical reasons, with no daylight between self-check and
independent verification this time - both graders applying the rule correctly is exactly what
makes this a checklist-design finding rather than a grading-inconsistency one. The check is working
precisely as specified; what it's specified to require is the problem.

**This reframes the original run's finding.** That run treated the bolded-quote-format failure as
evidence the *format choice* was the variable driving the self-check failure. This run controlled
for format (both personas wrote flat "Owner will..." sentences) and the failure not only persisted,
it was total (0/5, not a partial mismatch on a few items). The real variable was never format - it
was that the exact-match bar itself has essentially no tolerance for any natural wording variation
at all, and format was just one of several ways that variation can show up.

## Recommendation (report-only - not applied in this PR)

This is not a "tighten the checklist" recommendation like most prior findings - it's closer to the
opposite. The exact-match mechanism as currently specified appears likely to fail most genuinely
correct, careful attempts, not just careless ones, which undermines its value as a self-check a
learner can trust. Concrete options, in order of how much they preserve the check's original intent:

1. **Loosen the match to tolerate specific, named variation classes**: first-name-only vs. full-name,
   a small set of synonym verb pairs for each item ("get"/"provide"/"bring," "send"/"deliver" where
   contextually equivalent), and date format (ordinal-only vs. ordinal-plus-year). This keeps the
   spirit of "did you capture the real commitment precisely" while not penalizing normal writing
   variation.
2. **Grade on the AI-graded pass's own re-derivation criteria instead of literal substring matching**
   for the self-check tier too, since that pass already asks "does it name every real action item
   with a clear owner and deadline, specific enough to act on" - a content/clarity bar, not a string
   bar - and this run's diligent submission would likely pass that version cleanly.
3. **At minimum, tell the learner explicitly, before they write, that the check is a literal
   substring match and that even semantically-identical wording (full names, synonyms, expanded
   dates) will fail it** - so a learner who wants to pass the self-check on the first try knows to
   mirror the transcript's own phrasing exactly, rather than writing the recap they'd actually send
   to a colleague and discovering afterward that it doesn't count.

## What this run does and doesn't prove

- **Proves:** the scripted Q2/Q3 flaw is caught cleanly and consistently by both tiers - the fourth
  consecutive module (after 03, 04, 05) where the standardized self-check template catches a planted
  content error.
- **Proves:** a fully correct, correctly-formatted, real-world-plausible recap fails Module 07's
  exact-match self-check entirely, for reasons unrelated to accuracy or care - a checklist-design
  finding, not a learner-behavior or grading-inconsistency one, confirmed identically by two
  independent graders.
- **Does not prove:** that every possible correctly-formatted recap would fail - this run tested one
  specific set of natural wording choices (full names, two verb synonyms, expanded dates), not an
  exhaustive survey of how differently a learner might phrase the same five facts.
- **Does not prove:** which of the three recommended fixes above is right - that's a module-design
  decision for a human to make, not something this run resolves.

## Friction log

Priya's own self-check closes with a direct, useful diagnosis in her own words: "I optimized for a
recap a colleague could act on, not for matching a fixed string, and those turned out to be
different bars here." That's the finding, stated plainly by the persona that hit it, before any
orchestrator framing was added.

## Methodological note

Written directly from six raw agent outputs (two attempts, two self-checks, two independent
verifications) with no synthesis-agent intermediary, per Design Principle 8.
