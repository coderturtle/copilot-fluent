# Agent Context: Copilot Fluent

Teach non-technical knowledge workers to get real productivity value from enterprise Microsoft 365 Copilot (Work IQ, Copilot in Word/Excel/PowerPoint/Outlook/Teams, Researcher/Analyst agents) via hands-on exercises through a recurring fictional company scenario, gated by a required-output checklist plus an AI-graded rubric, with the module arc mapped to the AB-730 (Microsoft Certified: AI Business Professional) exam.

## Working in this repo

- Work on a short-lived branch; never commit directly to `main`.
- Run the verification entry point before opening a PR:
  ```bash
  bash scripts/check-prereqs.sh && bash scripts/verify-project.sh
  ```
- Keep changes scoped to what was asked; note assumptions in the PR description.

## Conventions

- Document decisions in `docs/decisions.md`.
- Update `docs/next-actions.md` when you finish or discover work.
- Tests and docs ship with the change, not after it.

<!-- This repo is public. It is developed inside a private factory whose internal
     contracts, ledgers and vault mirror live outside this tree; nothing here depends
     on them, and this file is deliberately self-contained. -->
