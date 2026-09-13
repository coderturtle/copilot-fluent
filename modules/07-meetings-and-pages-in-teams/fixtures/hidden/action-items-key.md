# Module 07 grading-only key - NOT learner-facing

*Simulation only. Every fact, name, and date below is fictional, built for this workshop. Nothing
here describes a real client, a real account, or real financial, legal, or accounting guidance.
Kellerman & Castle operates in no real regulatory regime; nothing here is calibrated to one.*

**Do not link this file from the module README, the site, or any learner-facing page.** It exists
to check a submitted recap, not to be read before attempting the exercise.

**Correction to an earlier version of this note, found and fixed during this module's own
doubt-driven-development pass (not by any prior module's precedent).** An earlier draft of this
file, and Modules 01 and 02's own `fixtures/grading-key.md` files, all claimed
`site/src/content/config.ts` "only globs `modules/*/README.md` and `docs/build-log/*.md`, so
nothing under `fixtures/` is ever rendered." **That claim is false as of this module's authoring
date.** A 2026-09-13 infrastructure change (recorded in `docs/decisions.md`'s "RISK-0003 closed"
row, landing earlier the same day as this module) added a third `fixtures` collection that globs
`*/fixtures/*.md` unconditionally and a route that statically renders every entry it finds - a
real build, run in this session, confirms `dist/modules/01-.../fixtures/grading-key/index.html`
and `dist/modules/02-.../fixtures/grading-key/index.html` both exist and both contain their
modules' real hidden facts, verbatim. That's a live gaming hole for those two modules' honor-system
reveal mechanisms, disclosed but **not fixed here** (out of this module's own scope, and touching
another module's already-shipped fixture risks colliding with other in-progress work on this
branch) - see the ADR row this same pass adds to `docs/decisions.md`.

**This file avoids that hole by placement, not by a config change.** It lives in
`fixtures/hidden/`, one directory level deeper than a module's fixtures collection actually globs
(`*/fixtures/*.md` matches `<module>/fixtures/<file>.md` only - a single `*` doesn't cross a `/`,
so it does not match `<module>/fixtures/hidden/<file>.md`). Verified directly, not assumed: a clean
`npm run build` of `site/` with this file at its current path produces no
`dist/modules/07-.../fixtures/hidden/...` output at all, while the learner-facing transcript fixture
(`fixtures/molly-jensens-q3-portfolio-review-transcript.md`, still directly under `fixtures/`) does
get built and served normally. Same repo, same commit history as the fixture it grades, just one
level deeper than anything the site's own fixtures glob reaches or the module README links to.

**Mechanism note, following `docs/coachgremlin-authoring-lessons.md` lesson 3.** This file still
exists and still matters for two reasons: it's Coachgremlin's own pre-registered record, used to
hand-check that the module README's revealed table and the recap-clarity check actually produce
the right verdict (the dry run in `runs/2026-09-13-module-07-dry-run/` does exactly that), and
it's the reference a human spot-checking a real submission would use. The module README does not
keep this table hidden with no way for a learner to ever check their own work against it - the
same 5-row table below is revealed inline in the README itself, gated behind an honor-system
instruction not to read past it until the learner's own recap is already written and saved.

## The 5 exact action-item strings

Drawn directly from `fixtures/molly-jensens-q3-portfolio-review-transcript.md`. Pre-registered
here, and also revealed to the learner directly in the module README after they've committed to
their own attempt. A submitted recap is checked for these as literal substrings, not
paraphrase-matching. Each of the 5 now includes an explicit calendar date rather than a
relative-to-the-meeting phrase ("this Friday," "early next week") - fixed during this module's own
review pass, since a relative phrase only resolves correctly for a reader who already knows the
meeting's own date, which is exactly the ambiguity a good recap is supposed to remove, not
reproduce. Item 4's string was also widened to include the actual completion deadline (when Johnny
sends the invite), not just the date the invite is about (the December review itself) - the two are
different dates in the transcript, and the module's own "who does what, by when" bar means the
"when" that counts is the deadline for the *action*, not a date mentioned in passing.

Each string below is chosen to be, or to clearly include, the actual substantive commitment (who
does what, and by when) rather than an incidental detail sitting near it (see
`docs/coachgremlin-authoring-lessons.md` lesson 11). None of the three named decoys in the
transcript (the vague "I really should update my address," said twice before the real commitment;
the open-ended "switch to the online portal at some point... no promises on when"; and the closing
"nothing about the account itself needs to change" line) produce a string that would accidentally
satisfy any row below, since none of them names both an owner and a specific date the way every
real action item here does.

| # | Owner | Exact string | Why this is the commitment, not a decoy |
|---|---|---|---|
| 1 | Johnny Castle | `get Molly the year-end account statement by Friday, September 11th` | Molly asks for a paper copy; Johnny's line is the only place a specific deliverable (the year-end statement) is tied to a specific, absolute deadline and an owner (Johnny, via "I'll"). |
| 2 | Molly Jensen | `send the signed change-of-address form to Johnny by Friday, September 18th` | The earlier "I really should do that" (twice) is a decoy - an expressed intention with no date and no firm commitment. This line is the actual commitment: a named document, a named recipient, and a specific date. |
| 3 | Baby Houseman | `confirm with operations that the address change has been processed by Monday, September 21st` | Johnny's request ("can you take this one?") isn't itself the commitment - Baby's own reply is, since it's the line that actually states the action and the date. |
| 4 | Johnny Castle | `send Molly a calendar invite for the week of December 7th by Thursday, September 17th` | "Let's pencil in the next review for the week of December 7th" (Johnny's first mention of the date) is scheduling small talk, not yet an action item - it names no deliverable and no owner of the follow-through. The very next sentence is the actual commitment, and it names two dates that both matter: what the invite is for (the week of December 7th) and when Johnny will actually send it (Thursday, September 17th). A recap that captures only the December date without the September completion deadline hasn't fully answered "by when." |
| 5 | Molly Jensen | `get Ethan's email address to Baby by Wednesday, September 16th` | Molly's request on Ethan's behalf ("my son Ethan asked about...") establishes the topic but commits no one to anything yet. This line is where Molly actually commits to a deliverable (Ethan's email address), a recipient (Baby), and a specific date. |

## Why these five and not others

Checked directly against the transcript for anything else that reads like a commitment on a first
pass: the online-portal switch ("I really should just do that at some point... No promises on when,
but noted") is deliberately left open-ended - no date, and Molly's own closing line ("no promises")
explicitly disclaims it being a commitment. The August-dip discussion and the closing "nothing about
the account itself needs to change" line are both purely informational - neither assigns an action
to anyone. A learner who recaps either of these as an action item has mislabeled informational
content as a commitment, the same category of mistake this module's gate exists to catch.
