# AI/ML Practitioner — Review of `docs/workshop-design.md`

**Overall: technically solid — the exam-fact and product claims hold up under live re-verification.**

**AB-730 exam mechanics (§6) — verified accurate, word-for-word.** Re-fetched both cited Microsoft Learn pages (ai-business-professional/ and the AB-730 study guide) live. Passing score 700/1000, 45 minutes, Beginner level, Pearson VUE proctoring language, "not published" treatment of question count and price, skills version "as of July 22, 2026," and both page-updated dates (2026-08-07 and 2026-06-22) all match exactly what's in the doc. The full 3-domain/7-heading/30-bullet outline in §6 is a verbatim match against the live study guide text — including weight percentages. No drift found; the doc's caution about not inventing a price/question-count is well-founded.

**§9 differentiation claims check out.** Both the "Transform business workflows with generative AI" learning path and the standalone "Get more done with Copilot Cowork" module exist as described, and the Cowork module's live learning objectives (differentiate Chat/agent/Cowork, effective requests, "recognize the security model... and known limitations") match the doc's characterization. Nothing overclaims or underclaims here.

**Product terminology (Researcher, Analyst, Agent Store, Notebooks, Copilot Pages, Memory) — all current and correctly named**, no conflation with deprecated names.

**One finding worth a wording pass: the "Work IQ" note in §4.** The claim that it doesn't appear in AB-730's outline is correct. But calling it "a dated product-marketing aside" undersells where the term has landed — Work IQ has its own Learn documentation, a CLI, an MCP server, and public APIs (GA'd June 2026) as a named three-layer (Data/Memory/Inference) platform underpinning Researcher/Analyst/Cowork, not just a marketing gloss on "grounding." The scoping decision (don't teach it) is still right for this audience; the characterization of *why* is slightly stale. Separately, `decisions.md`'s original ADR row still lists "Work IQ" as a taught subject — inconsistent with §4's later, correct scope-out; worth a superseding row.
