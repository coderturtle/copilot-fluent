# Module 07 grading-only key - NOT learner-facing

*Simulation only. Every fact, name, and date below is fictional, built for this workshop. Nothing
here describes a real client, a real account, or real financial, legal, or accounting guidance.
Kellerman & Castle operates in no real regulatory regime; nothing here is calibrated to one.
Reusing this key's checking logic against a real client's real meeting is your own regulated
activity, not something this workshop can vouch for.*

**Do not link this file from the module README, the site, or any learner-facing page.** It exists
to check a submitted recap, not to be read before attempting the exercise.

**Correction to an earlier version of this note, found during this module's own
doubt-driven-development pass and closed the same day (not by any prior module's precedent).** An
earlier draft of this file, and Modules 01 and 02's own `fixtures/grading-key.md` files, all
claimed `site/src/content/config.ts` "only globs `modules/*/README.md` and `docs/build-log/*.md`,
so nothing under `fixtures/` is ever rendered." That claim was false as of this module's authoring
date: a 2026-09-13 infrastructure change (recorded in `docs/decisions.md`'s "RISK-0003 closed" row)
added a third `fixtures` collection that globs `*/fixtures/*.md` unconditionally and a route that
statically renders every entry it finds, which a real build confirmed was exposing Modules 01's and
02's real hidden facts verbatim on the published site - a live gaming hole for those two modules'
honor-system reveal mechanisms. **This is now closed, same day, for all three modules (01, 02, 07)**
- see `docs/risks.md`'s RISK-0005 row and `docs/decisions.md`'s "RISK-0005 closed for Modules 01 and
02" row: both modules' key files were moved to the same `fixtures/hidden/` convention this file
already used, re-verified by a fresh `rm -rf dist && npm run build` producing zero `grading-key`
output anywhere in `dist/`.

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
paraphrase-matching, **and each string now names its owner as the grammatical subject performing
the action, not as a separate unchecked column** - fixed during this module's own review pass. The
earlier version of this key listed an owner beside each string but the string itself started
mid-sentence with no subject (e.g. `get Molly the year-end account statement by...`), so a recap
that credited the wrong person with the right words - "Molly will get Molly the [...] statement by
Friday, September 11th" - would still satisfy the old check. Every string below fails that failure
mode by construction: the owner's name is the literal first word, adjacent to the action, so a
wrong-owner recap cannot produce a matching substring no matter how it's phrased around it.

Each of the 5 also includes an explicit calendar date rather than a relative-to-the-meeting phrase
("this Friday," "early next week") - fixed during an earlier review pass, since a relative phrase
only resolves correctly for a reader who already knows the meeting's own date, which is exactly the
ambiguity a good recap is supposed to remove, not reproduce. Item 4's string was also widened to
include the actual completion deadline (when Johnny sends the invite), not just the date the invite
is about (the December review itself) - the two are different dates in the transcript, and the
module's own "who does what, by when" bar means the "when" that counts is the deadline for the
*action*, not a date mentioned in passing.

**On why this stays an exact-string check rather than a looser one.** The module README now says
directly that these 5 phrases are the one place in the recap where wording is checked verbatim -
"your own words" governs everything else in the recap (the summary, the framing, the open-items
notes), not these 5 sentences. That's a deliberate choice, not an oversight: a recap someone else
has to act on shouldn't leave room for "wait, who's doing that, by when, exactly?", and the plainest
way to check that mechanically, with no live grading service, is a literal string a learner can
compare by eye. It is still true that a learner who correctly identifies all 5 commitments but
phrases one differently ("Johnny is getting Molly a hard copy of the Q3 statement by the 11th")
has not failed to read the transcript - they've just phrased it differently than the one wording
this self-check happens to look for. The README names that limit honestly rather than implying a
paraphrase failure means a paraphrase was wrong.

Each string below is chosen to be, or to clearly include, the actual substantive commitment (who
does what, and by when) rather than an incidental detail sitting near it (see
`docs/coachgremlin-authoring-lessons.md` lesson 11). None of the three named decoys in the
transcript (the vague "I really should update my address," said twice before the real commitment;
the open-ended "switch to the online portal at some point... no promises on when"; and the closing
"nothing about the account itself needs to change" line) produce a string that would accidentally
satisfy any row below, since none of them names both an owner and a specific date the way every
real action item here does.

| # | Owner | Exact string (owner is the literal first word) | Why this is the commitment, not a decoy |
|---|---|---|---|
| 1 | Johnny Castle | `Johnny will get Molly a paper copy of the Q2 account statement by Friday, September 11th` | Molly asks for a paper copy of the statement they're reviewing on this call; Johnny's line is the only place a specific deliverable is tied to a specific, absolute deadline and an owner. **Why Q2, not Q3 or "year-end":** the meeting is dated September 8 - 22 days before Q3 (Jul-Sep) actually closes on September 30 - so no Q3 statement can exist yet as a closed, finalized document, and a "year-end" statement makes even less sense 3 days later. Johnny's own opening line names this directly ("Q3 doesn't close out for a few more weeks yet") and reviews the Q2 statement instead, which closed months earlier - a paper copy of an already-finalized document is trivially mailable on 3 days' notice. An earlier fix to this module changed only the label ("year-end" to "Q3") without changing which quarter's statement was actually achievable given the meeting's own date, which a later review caught as still impossible; this version fixes the underlying date logic, not just the label. |
| 2 | Molly Jensen | `Molly will send the signed change-of-address form to Johnny by Friday, September 18th` | The earlier "I really should do that" (twice) is a decoy - an expressed intention with no date and no firm commitment. This line is the actual commitment: a named owner, a named document, a named recipient, and a specific date. |
| 3 | Baby Houseman | `Baby will confirm with operations that the address change has been processed by Monday, September 21st` | Johnny's request ("can you take this one?") isn't itself the commitment - Baby's own reply is, since it's the line that actually states the owner, the action, and the date. |
| 4 | Johnny Castle | `Johnny will send Molly a calendar invite for the week of December 7th by Thursday, September 17th` | "Let's pencil in the next review for the week of December 7th" (Johnny's first mention of the date) is scheduling small talk, not yet an action item - it names no deliverable and no owner of the follow-through. The very next sentence is the actual commitment, and it names two dates that both matter: what the invite is for (the week of December 7th) and when Johnny will actually send it (Thursday, September 17th). A recap that captures only the December date without the September completion deadline hasn't fully answered "by when." |
| 5 | Molly Jensen | `Molly will get Ethan's email address to Baby by Wednesday, September 16th` | Molly's request on Ethan's behalf ("my son Ethan asked about...") establishes the topic but commits no one to anything yet. This line is where Molly actually commits to a deliverable (Ethan's email address), a recipient (Baby), and a specific date. |

## Why these five and not others

Checked directly against the transcript for anything else that reads like a commitment on a first
pass: the online-portal switch ("I really should just do that at some point... No promises on when,
but noted") is deliberately left open-ended - no date, and Molly's own closing line ("no promises")
explicitly disclaims it being a commitment. It is **not**, however, purely a decoy to be discarded:
it's a real, if undated, discussion point, which is exactly what the Page exercise's "open
items/questions" section exists for. A recap that lists it as one of the 5 dated action items has
mislabeled an open-ended intention as a commitment (the mistake this row's check exists to catch);
a Page that notes it under open items, with no date attached, has correctly identified what kind of
thing it is. The May-dip discussion and the closing "nothing about the account itself needs to
change" line are both purely informational - neither assigns an action to anyone, and neither is a
legitimate open item either. A learner who recaps any of these three as a dated action item has
mislabeled informational or open-ended content as a commitment, the same category of mistake this
module's gate exists to catch.
