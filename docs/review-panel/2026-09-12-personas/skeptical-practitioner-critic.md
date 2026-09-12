# Skeptical Practitioner / Critic — Review of `docs/workshop-design.md`

Reviewed the full document (235 lines). This is one of the most disciplined design docs in the factory — most classic overclaim patterns (price, question count, "official prep is passive-only") are already caught and hard-blocked with explicit "do not state" rules. But a few residual soft spots remain:

**1. Tier-2 backstop overclaim (§7).** The doc says the recommendation-flavored-language gap is "added explicitly to the Tier-2 rubric... as a named backstop, **not left uncovered by either tier**." That phrasing implies the gap is actually closed. But §8 confesses Tier-2 is "an **untested hypothesis**... a real, unaddressed circularity: the same probabilistic product both produces and grades the work, with no pinned model version, no repeatability guarantee." A backstop built on an admittedly unproven grader isn't "not left uncovered" — it's covered by something whose own reliability is unestablished. This is the closest thing to a "claims solved when elsewhere admits unresolved" pattern.

**2. "Flagship."** Module 09's takeaway is called "the workshop's flagship takeaway." Mild unsupported superlative — no evidence anywhere in the doc that this artifact is more valuable than the per-module packs it's assembled from; it reads as marketing color in an otherwise clinical table.

**3. Unsupported comparative to `borrow-native` (§10).** "Copilot Fluent has a **richer, more directly-applicable** public outline than `borrow-native` started with" — asserted, not shown. No side-by-side evidence in this document; it's used to justify doing something `borrow-native` explicitly deferred (a preliminary mapping), which is exactly the kind of comparative claim that should be earned, not asserted.

**4. §6's success-criterion framing is stated flatly** ("this workshop's explicit success criterion is preparing the learner to sit and pass AB-730") without the hedge §10 later insists on ("no alignment claim graduates past 'designed to map'"). Not wrong, but it's the one place the document states its own ambition unhedged before immediately walking every other claim back — worth a consistency pass.

No instances of undisclosed price/question-count/exam-mechanics overclaiming remain — those are now airtight.
