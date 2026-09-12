# Module 01 grading-only key — NOT learner-facing

**Do not link this file from the module README, the site, or any learner-facing page.** It exists
to check a submitted attempt, not to be read before attempting the exercise. This mirrors the
established convention in this factory's other real (non-skeleton) workshops for hidden-vs-shown
material: `borrow-native` keeps its checked answer (the test file, `fixtures/relay/tests/*.rs`)
in a path the module README never asks the learner to open, rather than inline in the module page
or held back in a separate private repository; `closed-book` keeps its answer key in the same
public file as the exercise, but that only works there because its checkpoint is a closed-book
quiz the learner has already committed answers to before scrolling past a stated warning — reading
the key first can't retroactively un-take the quiz. Neither precedent puts grading material in a
private sibling repo, and neither should this: `copilot-fluent-private` is this workshop's
maintainer-mirror/session-log sibling (session logs, mind-palace mirror, agent run logs), not a
place any prior workshop uses to store fixture answer keys, and this repo's own site build
(`site/src/content/config.ts`) only globs `modules/*/README.md` and `docs/build-log/*.md` - a file
anywhere under `fixtures/` is never rendered to the published site regardless of name. So: **same
repo, same commit history as the fixture it grades, just outside the one path (`modules/*/README.md`)
the learner is ever told to read.**

Applied here: this file sits beside the learner-facing fixture
(`fixtures/firm-overview.md`) rather than the module README, and the README never links to it by
name or path.

## The 5 exact strings

These are drawn directly from `fixtures/firm-overview.md`. A grading pass (human or AI) checks a
submitted transcript for these as literal substrings, not paraphrase-matching.

| # | Fact type | Exact string | Acceptable minor variants |
|---|---|---|---|
| 1 | Client name | `Priya Anand` | none needed - this exact two-word string is what to search for |
| 2 | Client name | `Marcus Delacroix` | none needed |
| 3 | Founding year | `1994` | none - it's a bare 4-digit year |
| 4 | AUM figure | `$2.3 billion` | `2.3 billion` (no dollar sign), `$2,300,000,000` (fully expanded) - treat any of these as a match, everything else as a miss |
| 5 | Office address | `1420 Marner Street` | the fuller form `1420 Marner Street, Suite 900, Averton Harbor, CT 06880` also counts; a match on the street name and number alone (`1420 Marner Street`) is sufficient - don't require the suite/city/zip to all be reproduced verbatim |

## How to grade the two submitted transcripts

1. Take the transcript the learner ran **with** `fixtures/firm-overview.md` pasted in first (the
   "grounded" run). Count how many of the 5 rows above appear as a literal substring anywhere in
   Copilot's response. **Pass condition: at least 3 of 5.**
2. Take the transcript the learner ran with **nothing** pasted in first (the "ungrounded" run, a
   brand-new chat, same prompt). Count the same 5 rows. **Pass condition: 0 of 5** - if any of these
   5 exact strings shows up in the ungrounded transcript, either Copilot coincidentally guessed
   correctly (extremely unlikely for the address and AUM rows specifically, since those aren't
   derivable from public information about a fictional firm) or the "ungrounded" run wasn't
   actually run without the fixture. Either way, it's a fail on this row, not a partial credit
   situation.
3. Both conditions must hold for the Tier 1 (required-output checklist) grounding item to pass.

## Why these 5 and not, say, the client names alone

The obvious default would have been to reuse two names from Kellerman & Castle's already-published
recurring cast (Molly Jensen, Bodhi - see `docs/workshop-design.md` §5's cast table, which is
public and referenced from other modules' own READMEs, e.g. Module 02's). That default was
considered and rejected during this module's doubt-driven-development pass (2026-09-12 -
see `docs/decisions.md`): a learner who has read the workshop's own public design doc or a later
module's README already knows those two names are recurring clients of this firm, so a fabricated
"grounded" transcript could drop either name in without the learner ever having pasted the fixture
into Copilot at all - the exact gaming failure mode this hidden-key mechanism exists to prevent.
`Priya Anand` and `Marcus Delacroix` exist only in this module's own fixture file and nowhere else
in this repository's learner-facing or design content, so producing them in a transcript is not
derivable from anything else public in this workshop.

## The founding-year and AUM rows are the weaker two, named honestly

`1994` is a 4-digit year; a learner fabricating a transcript could plausibly guess a year within a
few decades of "sounds like a boutique firm that's been around a while" and land close, though an
exact match to `1994` specifically by chance is still low-probability (roughly 1-in-30 to 1-in-40
if guessing uniformly across a plausible 30-40 year founding window). `$2.3 billion` is a much
harder blind guess (any specific figure to the first decimal, out of a wide plausible range for a
boutique firm, is a low-probability coincidence). Both are still real evidence, just not as strong
on their own as the address or the two client names, which are effectively unguessable. This is why
the pass condition is "at least 3 of 5," not "any 1 of 5" - it needs enough of the harder-to-guess
rows (the address, the two names) to make coincidence implausible, without requiring a perfect 5-of-5
that a genuinely grounded but slightly abbreviated Copilot answer might reasonably miss (e.g. an
answer that mentions the office city but not the exact suite number).
