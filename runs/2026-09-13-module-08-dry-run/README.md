# Module 08 dry run - 2026-09-13

*Simulation only. Everything in this dry run - the fictional firm, the playbook fixture, the
constructed synthetic transcripts - is fictional and built for this workshop. Nothing here describes
a real client, a real account, or real financial, legal, or accounting advice. Kellerman & Castle
operates in no real regulatory regime; nothing here is calibrated to one. Reusing this format against
a real client's real internal knowledge is your own regulated activity, not something this workshop
can vouch for.* <!-- brand-lint-ignore: disclaimer naming what this fixture is not, per docs/brand.md's escape hatch for stating a rule by naming the phrase it excludes -->

## What this run is, and what it isn't

No learner has attempted this module yet, and this session has no live Microsoft 365 Copilot tenant
access to actually build, configure, or share a real agent. This run's job is narrower: confirm that
the module's mechanically-checkable item (the presence/absence transcript pair) actually distinguishes
a grounded answer from an ungrounded one, confirm the Part C self-check against recommendation-flavored
language works when run against this module's own worked instructions and suggested prompts (the
module's own highest-named risk), reason honestly about this module's honor-system parts, and
re-verify this module's product claims against Microsoft's own current documentation.

This run:

- Constructs one agent-side transcript (`agent-transcript.md`) that answers a test question using the
  playbook fixture's exact wording.
- Constructs one control-run transcript (`control-transcript.md`) - the same question, asked in a
  plain chat with nothing attached - that neither reproduces that wording nor guesses it, and instead
  says plainly it doesn't have the information.
- Hand-checks both against the fixture (`check-result.md`, Part 1).
- Runs this module's own worked instructions and all 4 suggested prompts through Part C's
  recommendation-language self-check by hand, to confirm the check actually catches what it's supposed
  to (`check-result.md`, Part 2).
- Re-verifies this module's product claims - Agent Builder's build flow, the My Company Policy
  template, Agent Store, agent sharing and its admin-governance note, tenant admin controls over agent
  creation, and Researcher's actual product placement - against Microsoft's own current published
  documentation, fetched live in this session (`check-result.md`, Part 3).

## On why this dry run quotes the fixture's real wording directly

Unlike Modules 01, 02, and 07's dry runs, this module has no withheld grading key to protect - the
playbook fixture is open to the learner from the start, the same shape as Module 06's spreadsheet
fixture. `docs/coachgremlin-authoring-lessons.md` lesson 4 (never publish a hidden key's real secret
values in dry-run evidence) doesn't apply here, since there's no hidden key in the first place; both
transcripts in this run quote the fixture's real wording because a real learner could already read
that same wording directly in the fixture at any time.

## What this run does NOT prove

See `check-result.md`'s closing section for the full list - in short: it does not prove a real learner
would build as clean an agent or self-check as thoroughly as this run's worked examples, it does not
prove a live AI grader would reach the same verdict this run's hand-check reaches, and it does not
prove Copilot's actual live behavior beyond what Microsoft's own documentation states.

## Files

- `agent-transcript.md` / `control-transcript.md` - the constructed presence/absence transcript pair.
- `check-result.md` - the hand-check of both transcripts, the Part C self-check worked example, the
  honest reasoning on this module's honor-system parts, and the product-claim re-verification.
