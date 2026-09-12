# Module 02: Trust, But Verify

## The question this module answers

Given a Copilot output riddled with planted errors, can you find every one and defend your correction?

## Where it sits in the arc

Second module. Prerequisite: [Module 01](../01-starting-at-kellerman-and-castle/README.md) - grounding comes before verification, since you can't tell what's wrong with an output until you understand what it was supposed to be grounded in. Next: [Module 03, The Anatomy of a Working Prompt](../03-anatomy-of-a-working-prompt/README.md). See [`modules/README.md`](../README.md) for the full arc.

## Learning objectives (placeholder - finalized when content is authored)

- Identify fabrications, prompt-injection attempts, and over-reliance risk in a Copilot output.
- Select an appropriate verification method (citation check vs. human review) for a given claim.
- State, specifically, what sensitive data shouldn't be pasted into Copilot in a real version of this scenario.

## Exercise material to draw from (not a spec - the workshop team authors the real exercise later)

AB-730 outline bullets 1.2.1-1.2.4, plus `docs/workshop-design.md` §12's data-protection honesty section. `fixtures/` (a flawed Copilot output about Molly Jensen's portfolio, with a grading-only key of exact planted-error strings) does not exist yet.

**Named risk for content-authoring:** this module deliberately teaches prompt injection as subject matter, making its own artifact the highest-risk grading input in the workshop. Before this module ships: confirm the grading prompt survives a stated set of known injection patterns (`docs/workshop-design.md` §8), and quote rather than reproduce live any planted-injection strings discussed in the authored content itself.

## Required gate (placeholder - real checklist and grading prompt written later)

- **Tier 1 (required-output checklist):** a verification memo naming all N planted errors, each as an exact quoted substring matching a grading-only key (an answer list the workshop keeps hidden from you, used only to check your work - never shown to the learner); each error paired with the correct verification-method label from that same key; a stated one-line correction per error (presence-checked only - correctness is Tier 2); a non-empty answer to "what sensitive data appeared here, and what would you not paste into Copilot in a real version of this scenario."
- **Tier 2 (AI-graded rubric):** are the stated corrections actually right, and does the sensitive-data answer land §12's actual teaching point - "enterprise licence is not synonymous with safe to paste" - specifically, not as a generic platitude.

Full design: [`docs/workshop-design.md`](../../docs/workshop-design.md) §7, Module 02 row.

## Takeaway

A verification-checklist prompt pack - a reusable pre-flight checklist for what to check before trusting or sharing a Copilot output. Prepared for you once the exercise is built and you complete the gate.

## Stop condition (placeholder)

The learner's verification memo satisfies Tier 1's checklist, and Tier 2's rubric confirms the corrections and sensitive-data answer, per the gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape, and takeaway shape. It has no authored exercise, fixture, or grading prompt yet - the workshop team will build that later. See [`modules/README.md`](../README.md) for workshop-wide status.
