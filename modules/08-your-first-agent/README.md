# Module 08: Your First Agent

## The question this module answers

When is a plain chat not enough, and can you configure an agent that answers a test question using its configured knowledge?

## Where it sits in the arc

Eighth module. Prerequisite: [Module 03](../03-anatomy-of-a-working-prompt/README.md). Next: [Module 09, Synthesis Capstone](../09-synthesis-capstone/README.md), which draws on every prior module including this one. See [`modules/README.md`](../README.md) for the full arc.

**Solo adaptation, named as partial:** sharing the agent with a team member can use a second test account where the tenant allows one - but this doesn't resolve an admin-approval block on adding agents to the Agent Store (see `docs/workshop-design.md` §11). A genuinely blocked learner's fallback is still an open content-time decision, tracked in `docs/next-actions.md`.

## Learning objectives (placeholder - finalized when content is authored)

- Decide when a template-based agent is the right tool versus a plain chat, with a stated reason.
- Configure an agent's knowledge, instructions, capabilities, and suggested prompts.
- Gather suggestive evidence (a control-run comparison) that an agent's answer draws on its configured knowledge, while understanding that this doesn't prove exclusivity - a named limit of this module's gate, not something to overstate.

## Exercise material to draw from (not a spec - the workshop team authors the real exercise later)

AB-730 outline bullets 2.3.1-2.3.5, 1.1.4. `fixtures/` (a "Client Prep" agent for Johnny's team, the Agent Store's Researcher agent as a worked comparison) does not exist yet.

**Liability note for content-authoring:** this agent is scoped to internal prep notes only, never client-facing recommendation drafting (`docs/workshop-design.md` §5) - its configured instructions and suggested prompts must be checked against `docs/brand.md`'s prohibited-language list too, since an internal-only agent is one client-facing suggested prompt away from drafting recommendation-flavored content.

## Required gate (placeholder - real checklist and grading prompt written later)

- **Tier 1 (required-output checklist):** selection between 2 options (Agent Store / new agent) plus a one-sentence reason (presence-checked, correctness deferred to Tier 2); agent created from a named template; ≥1 named knowledge source configured; non-empty instructions, exactly ≥3 suggested prompts, ≥1 stated capability; the instructions text and suggested prompts checked against `docs/brand.md`'s prohibited-language list [not yet executable, see Module 05's note]; confirmed shared with ≥1 named team member (self-attested - you confirm this yourself); a transcript containing an exact fact-string from the agent's configured knowledge, plus a control-run transcript (same question, plain chat) confirmed to not contain that string. This presence/absence pair is suggestive evidence, not proof of exclusivity - a named limit, not overclaimed.
- **Tier 2 (AI-graded rubric):** is the agent's scope well-bounded - would a colleague actually find it useful.

Full design: [`docs/workshop-design.md`](../../docs/workshop-design.md) §7, Module 08 row.

## Takeaway

An agent-instructions template pack. Prepared for you once the exercise is built and you complete the gate.

## Stop condition (placeholder)

The learner's agent configuration, transcripts, and confirmations satisfy Tier 1's checklist, and Tier 2's rubric confirms the agent's scope is well-bounded, per the gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape, and takeaway shape. It has no authored exercise, fixture, or grading prompt yet - the workshop team will build that later. See [`modules/README.md`](../README.md) for workshop-wide status.
