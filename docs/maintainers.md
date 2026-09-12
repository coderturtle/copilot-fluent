# Maintainers

This is the internal/agent-facing doc. Learners should read the top-level `README.md` instead; this file is for anyone working on the workshop itself.

**Classification:** factory-output
**Lifecycle:** active
**Owner:** coderturtle
**Promotion target:** `none`

This repo has two goals:

1. **Ship a workshop** teaching enterprise Microsoft 365 Copilot to non-technical knowledge workers, positioned against the real AB-730 ("Microsoft Certified: AI Business Professional") exam, via a two-tier gate (a required-output checklist plus an AI-graded rubric) run through a recurring fictional scenario, Kellerman & Castle.
2. **Feed evidence back into the reusable machinery**: this is the Workshop Gremlin's fifth real run (`terminal-velocity`, `borrow-native`, `half-life`, `heartbeat` before it) and its first for a non-engineering audience — every prior run assumed an agent-literate practitioner driving a coding harness, with a gate shape (compiler/linter, a designed empirical experiment, a designed network-fault simulator) this subject has no equivalent of. Any generalizable finding here should be written back into `~/hekton/gremlins/workshop/workshop-gremlin.md`, including a new "Variant: Non-Engineering Audience Workshops" section (tracked in `docs/next-actions.md`).

## The public/private split, and why it matters here specifically

This repo is public-capable and was scaffolded without the factory's internal ledgers and mind-palace mirror — those live in the private sibling, `copilot-fluent-private`. Concretely: `docs/session-log.md`, `docs/human-understanding-check.md`, and `docs/depth-decision.md` exist only in `copilot-fluent-private/docs/`, not here. The raw scaffold `README.md` originally linked to these as if they were local; that boilerplate is gone now that this rework has happened. If a future edit re-adds a "Key Docs" style list, check whether each target is public or private-sibling-only before linking it.

## Implementation Status

- 2026-09-12 — Scaffolded as factory-output (as `copilot-productivity-workshop`). Naming pass complete: **Copilot Fluent**, renamed same day. Scenario named: **Kellerman & Castle**. `docs/workshop-design.md` complete (audience, AB-730 curriculum-anchor research, two-tier gate design, 9-module arc mapped to all 30 AB-730 leaf bullets), hardened through 3 cycles of doubt-driven development (single-model + Codex cross-model each cycle — see `docs/decisions.md` for what each cycle caught). First [Workshop Review Panel](review-panel/2026-09-12-initial-design.md) pass complete against the naming + design docs — all seven personas returned distinct findings, six of nine action-list items applied same-pass (most substantive: Module 03, the hard prerequisite for the whole back half of the arc, was gated by nothing but self-attestation — now requires real Copilot-run evidence).
- Module skeleton (`modules/`), brand layer (`docs/brand.md`), this maintainers split, and the build-log/Pages site (`site/`, `.github/workflows/deploy-pages.yml`) are all done, meeting the Workshop Gremlin's own Completion Condition. GitHub Pages enablement, custom-domain DNS, and the first real `workflow_dispatch` deploy are the remaining human-confirmed steps — see [Next Actions](next-actions.md).

## Documentation Contract

Agents working here must inspect `.hekton/project.yaml` before structural changes, keep `copilot-fluent-private/docs/session-log.md` current (not a local file — see the public/private split above), record meaningful design decisions in `docs/decisions.md`, and update `docs/next-actions.md` when the work queue changes.

**Superseding-ADR rule** (`docs/decisions.md`'s own documentation convention): when a later decision changes or invalidates an earlier row, add a new dated row rather than editing the old one, and name the superseded row explicitly. `heartbeat`'s own decisions log still describes a site config its actual code no longer uses, because this rule didn't exist yet when that drift happened — it exists here specifically so this repo doesn't repeat it.

Vault mutation policy: see `vault_mutation_allowed` in `.hekton/project.yaml` (authoritative; defaults to false at scaffold time). The repo-local `mind-palace/` folder (in `copilot-fluent-private/`) is only a mirror draft; do not write to the live vault unless `.hekton/project.yaml` says mutation is allowed and it is explicitly authorised in-session.

## Voice and style for published content

Anything a learner reads (README, module content, build-log entries, the site once built) follows `docs/brand.md` — voice, hard rules (no em dashes, no exam price/question-count claims, no financial-recommendation language, no internal-vocabulary leakage), banned phrases. Internal docs under `docs/` are working documents and are exempt, **except** that prohibited-language strings must never be quoted verbatim even in internal module content once it's learner-facing — see `docs/brand.md`'s note on why.

## Gremlin and factory language

Coachgremlin and the Workshop Gremlin are real, documented agents with concrete responsibilities (`~/hekton/gremlins/`). Reference them plainly here and in other maintainer-facing docs. Never in learner-facing copy — this audience has no reason to know what a "Gremlin" is, and the term would read as confusing internal jargon, not an explanation.

## Product-drift watch

This workshop teaches a live, frequently-updated SaaS product. `docs/brand.md`'s product-drift rule ("verified as of DATE" on any specific feature claim) needs an owner and a re-check cadence once real content exists — not yet assigned, tracked in `docs/next-actions.md`.

## Key Docs

- [Workshop Design](workshop-design.md) — audience, AB-730 curriculum research, two-tier gate design, full module arc, coverage matrix
- [Reconciled Implementation Plan](../../copilot-fluent-private/docs/reconciled-implementation-plan-2026-09-12.md) — the three-agent (Fable/Codex/Opus) review chain's output that this build follows phase by phase
- [Brand / Style Layer](brand.md) — voice, hard rules, financial-liability rules, visual identity
- [Workshop Review Panel Report](review-panel/2026-09-12-initial-design.md) — 7-persona critique of the naming + design docs, first run
- [Modules index](../modules/README.md) — the full arc, gate tiers, and per-module skeleton status
- [Decisions](decisions.md)
- [Risks](risks.md)
- [Next Actions](next-actions.md)
- [Operating Model](operating-model.md)
- [Project Walkthrough](project-walkthrough.md)
