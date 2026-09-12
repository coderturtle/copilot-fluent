# Module 03: The Anatomy of a Working Prompt

## The question this module answers

What turns a vague ask into a prompt Copilot can act on well, and how do you make that prompt reusable?

## Where it sits in the arc

Third module, no hard prerequisite (Modules 01-02 are recommended context, not required). **Hard prerequisite for Modules 04 through 08** - every later module's exercise assumes the prompt-construction skill taught here. Next: [Module 04, Conversations, Notebooks, and Memory](../04-conversations-notebooks-and-memory/README.md). See [`modules/README.md`](../README.md) for the full arc and why this module is the arc's foundation.

## Learning objectives (placeholder - finalized when content is authored)

- Construct a prompt with explicit role, task, format, and constraint elements.
- Reference specific named resources in a prompt rather than relying on Copilot's default context.
- Save, schedule, and share a prompt for reuse.

## Exercise material to draw from (not a spec - the workshop team authors the real exercise later)

AB-730 outline bullets 2.1.1-2.1.5. `fixtures/` (Johnny Castle's recurring Monday status-prompt scenario) does not exist yet.

## Required gate (placeholder - real checklist and grading prompt written later)

- **Tier 1 (required-output checklist):** prompt text contains ≥3 of 4 literal labeled markers (`Role:`, `Task:`, `Format:`, `Constraint:`); references ≥2 named resources by exact filename; 3 separate [self-attested - meaning you confirm this yourself, not independently verified] confirmations that the prompt was saved, scheduled, and shared; **real, run-dependent evidence:** two actual Copilot output transcripts - one from the crafted prompt, one from a supplied naive prompt, both run against the same data - where the crafted-prompt transcript contains a named structural element absent from the naive one's real output. **Named limit, not overclaimed:** this is harder to satisfy by hand-writing conforming text than the confirmation-only items above, but per §8's own disclosure, no transcript is fully provenance-proof - a determined learner could still fabricate both.
- **Tier 2 (AI-graded rubric):** would this prompt still work next week against different underlying data (a reusability judgment).

Full design: [`docs/workshop-design.md`](../../docs/workshop-design.md) §7, Module 03 row.

## Takeaway

The core prompt template - the spine every later module's prompt pack extends. Prepared for you once the exercise is built and you complete the gate.

## Stop condition (placeholder)

The learner's submitted prompt, resource references, confirmations, and the two real transcripts satisfy Tier 1's checklist, and Tier 2's rubric confirms reusability, per the gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape, and takeaway shape. It has no authored exercise, fixture, or grading prompt yet - the workshop team will build that later. See [`modules/README.md`](../README.md) for workshop-wide status.
