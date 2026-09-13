# Module 06 dry run - 2026-09-13

*Simulation only. Everything in this dry run - the fictional firm, the portfolio data, the
constructed Analyst output and decks - is fictional and built for this workshop. Nothing here
describes a real client, a real account, or real financial or legal advice. Kellerman & Castle
operates in no real regulatory regime; nothing here is calibrated to one. Reusing this format against
a real client's real data is your own regulated activity, not something this workshop can vouch for.*

## What this run is, and what it isn't

No learner has attempted this module yet, and this session has no live Microsoft 365 Copilot tenant
access to run the Analyst agent for real. This run's job is narrower: check by hand that the module's
mechanically-checkable items (the exact-row-match rule on the four headline line items, and the
critical-use comparison against Analyst's saved initial output) actually distinguish a real pass from
a real near-miss, and check by hand that the tone/recommendation-language grading prompt's own
stated criteria would catch the subtle framing problem the module names, without ever constructing a
real finance-domain instance of that problem to do it.

This run:

- Constructs one "Analyst initial output" (`analyst-initial-output.md`) with a realistic mix of
  correct figures, rounded figures, an omitted allocation figure, and a self-computed figure the
  fixture never states directly - the kind of first response a learner would actually need to review,
  not an obviously-broken strawman.
- Constructs one "good" deck (`good-deck.md`) that corrects the rounding, drops the self-computed
  figure, adds the omitted allocation figure, and reframes the initial output's unsupported
  ending-value-to-performance inference using the fixture's own Return % rows instead - with the
  reviewer's own notes on exactly what changed (and what didn't, and why) kept separate from the deck
  itself.
- Constructs one "naive" deck (`naive-deck.md`) that pastes the initial output's rounded and
  self-computed figures through unchanged, drops one of the four required figures entirely, and has no
  reviewer notes at all.
- Runs the exact-row-match check and the critical-use comparison against both decks, and checks that
  the fixture's own per-quarter fund returns don't let "which fund performed best in Q4" be answered by
  a generally-strongest-fund shortcut instead of an actual comparison (`check-result.md`, Parts 1-2).
- Reasons by hand through the module's own two non-financial stand-in sentences against the
  tone/recommendation-language grading prompt's stated criteria, deliberately not constructing a
  finance-domain instance of the problem to test it - the same discipline Module 05's corrected
  README applies, after Module 05's first draft shipped an actual recommendation-flavored sentence as
  a "bad example" (`check-result.md`, Part 3).
- Re-verifies the module's product claims (the Analyst agent's own description, the three-tool
  distinction, and Copilot in PowerPoint's create-from-file versus create-from-prompt mechanics)
  against Microsoft's own current published documentation, fetched live in this session
  (`check-result.md`, Part 4).

## On why there's no hidden key in this dry run

Unlike Modules 01, 02, and 07's exact-string checks (which grade against fixture facts a learner is
never shown, revealed only after they commit to an attempt), this module's fixture is fully open to
the learner from the start - the headline figures are meant to be found in it, not guessed. So this
run doesn't construct or protect a hidden key; every fixture value used above is quoted openly, the
same way a real learner would see it in `fixtures/sam-wheats-portfolio-data.md` itself.

## What this run does NOT prove

- It does not prove a real learner, with real Copilot access, actually produces a deck this clean or
  this sloppy, or that the Analyst agent's real first response to this exact prompt would resemble the
  constructed one here - the constructed pair is deliberately clear-cut (a realistic near-miss and a
  reviewed correction of it), not a simulation of every way a real attempt could land in between.
- It does not prove a live AI grader run, against these or any other artifacts, would reach the same
  verdict the hand-reasoning in Part 3 reaches - that's untested, same honesty this workshop applies
  to every module's rubric.
- It does not prove Copilot's actual behavior in a live tenant matches Microsoft's published
  documentation beyond what that documentation itself states - both remain verified-against-
  documentation only.

## Files

- `analyst-initial-output.md` - the constructed "before" artifact both decks are compared against.
- `good-deck.md` / `naive-deck.md` - the constructed deck pair for the exact-row-match and
  critical-use checks.
- `check-result.md` - the hand-verification of both mechanical checks plus the tone/
  recommendation-language reasoning pass and the product-claim re-verification.
