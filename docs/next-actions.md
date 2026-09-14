# Next Actions: Copilot Fluent

## Content review residuals (2026-09-13, second-pass cross-model reviews)

After all 9 modules were authored and their first cross-model review's findings fixed, a follow-up
round independently re-reviewed 6 of those fixes (Modules 01, 02, 04, 06, 08, 09) rather than
trusting the fix passes' own claims. Each found real residuals - either issues the fix missed, or
new issues the fix itself introduced. The most severe (gate-breaking, false-claim, or fixture-
contradiction findings) were fixed directly; see `docs/decisions.md`'s 2026-09-13 rows for exactly
what changed. Everything below is what was found but **not** fixed in that pass - real, logged, not
silently dropped. Modules 03, 05, and 07 were not re-reviewed after their own fixes (time did not
allow); treat their "fixed" status as less independently confirmed than the six below.

**Module 01:**
- [ ] The revealed grounding-fact table doesn't carry the grading key's own stated tolerance for
  reasonable variants (e.g. "$2.3 billion" vs. "$2,300,000,000," or the address's full vs. street-only
  form) - an honestly-grounded transcript using a variant form could self-grade as a miss.
- [ ] "Tier 1" and "grading key" still appear inside `fixtures/hidden/grading-key.md` itself (not
  learner-facing, but the brand lint's `SCOPE_FILES` doesn't cover this path either way).
- [ ] The 0-of-5-required, no-partial-credit rule on the ungrounded transcript check has no stated
  remedy for a coincidental false-positive match (a hallucinated founding year happening to be right).

**Module 02:**
- [ ] Molly Jensen's AUM figure here ($3.18M) has no stated reconciliation with her AUM in Module 06
  ($738,050, FY2026 Q4) or Module 09 ($794,300, Q3 2027) - three different figures for one client
  across the arc with no in-universe explanation (market movement, net flows, or otherwise).
- [ ] The README's own framing pre-hints which of the 5 rows is the human-review one, before the
  learner has attempted the memo, softening the discrimination the exercise is meant to test.
- [ ] The product-drift citation date for the two Purview/DLP facts lives only in the hidden key, not
  in the learner-facing text that now states those facts (added 2026-09-13).
- [ ] Row 4's "no such holding" label is arguably ambiguous if a careful learner reads the client
  file's own scoping ("as of the June 3 review") literally against the draft's "added earlier this
  year" framing.

**Module 04:**
- [ ] An off-by-one in the dry run's own citation count (says "the other five," names six sources).
- [ ] Two Notebooks-requirement sources cited with no URL, unlike every other citation in the file.
- [ ] The dry run's "should pass" specificity example reuses the same illustrations the rubric prompt
  itself supplies, so it isn't an independent test of the rubric.
- [ ] The "four conversations left in total" assertion rests on an unverified assumption about
  whether a chat moved into a notebook still appears in the main Chats list.
- [ ] No checklist item requires the simulation-only marking the module instructs learners to add to
  their five new conversations.
- [ ] `modules/README.md`'s description of this module ("no fixture file... rather than a hidden
  key") is stale relative to the fix that removed the real-conversations substitution path.

**Module 06:**
- [ ] **(Mock Learner Gremlin, 2026-09-14, `docs/mock-learner-runs/2026-09-14-module-06.md`)** The
  self-check checklist's row-tracing item ("traces to an exact row... confirms an exact
  character-for-character match") checks textual exactness but not question-relevance: a blind
  attempt that misreads Q3's return as Q4's for the "best-performing fund" figure cites a real,
  exact-matching row (Castle Income Fund's Q3 return) and passes its own self-check falsely,
  since nothing in the checklist's literal wording asks the learner to confirm the row is the
  *correct* row for the question asked (the Q4 comparison specifically), not merely *a* row that
  matches. The real, unmodified Tier-2 AI-graded pass caught this independently and correctly when
  run for real against the same attempt - the two-tier design held as backstop - but Tier 1 should
  be tightened anyway, since it's the cheaper check a learner runs first. Suggested fix: add
  "confirm this is the specific row the question requires (the right quarter, the actual
  comparison winner) - not just any row whose text happens to match" to that checklist item.
- [ ] The critical-use rubric's "at least as accurate as the initial response" wording has a
  loophole: a deck that copies every inaccuracy in the initial output unchanged introduces nothing
  new and technically clears that limb; the dry run needed a supplementary argument to fail the naive
  deck on this basis.
- [ ] Two lesson-number citation mix-ups in the dry run's own commentary (cites lesson 14 where 13
  applies; cites lessons 2/8/11/14/15 where only 2/15 are actually relevant).
- [ ] The two Support-page citations for the PowerPoint ribbon-vs-Agent-Mode claim have no URL,
  unlike the three Learn-page citations in the same module.
- [ ] Two undisclosed wording drifts from `docs/workshop-design.md`'s own Module 06 row (the Question
  line's exact phrasing; the Tier-2 question's "caught/corrected something" framing vs. the shipped
  "at least as accurate" framing) - real, defensible choices, just not recorded as intentional drift
  the way Modules 03/08's precedent would do.

**Module 08:** see the 2026-09-13 fix-pass ADR row for which 7 of its review's 23 findings were fixed
directly. The other 16 (citation-format gaps, a stale prerequisite list that assumes Modules 05/06
are already done despite only listing Module 03, "fallback tier" vocabulary bordering on internal
jargon, an unverified 30-character Name-field limit claim, several presence/absence-evidence
weaknesses given the fixture isn't in `fixtures/hidden/`) are deliberately deferred, not fixed.

**Module 09** (the capstone, most heavily reviewed - 27 findings, 3 fixed): still open -
- [ ] **(Mock Learner Gremlin, 2026-09-14, `docs/mock-learner-runs/2026-09-14-module-09.md`)**
  Three checklist items could be tightened the same way Module 06's was: Part 5's "contains at
  least 3 exact transplanted data points including the note's own top-line figure" doesn't guard
  against a summary that includes the right figure while also mislabeling a *different* figure as
  the important one - a presence check, not a content-accuracy check. Part 6's "traces to an exact
  row" doesn't catch a citation that names a real row ID but reports figures that row doesn't
  actually contain (worse than a wrong-quarter citation, since the row ID itself is right and only
  the attached data is wrong). Part 7's decoy-exclusion wording is already correct in the real
  module text - that one held up in this run, unlike the other two.
- [ ] Part 6 drops two of Module 06's four traceability clauses (the "a self-computed figure is not
  traceable" rule and the "line item" disambiguation), even though the dry run's own naive-deck check
  relies on the missing self-computed-figure rule to fail correctly.
- [ ] Parts 6 and 7 have no named fallback for a blocked Analyst agent or blocked Page-sharing,
  despite `docs/workshop-design.md` stating the capstone "inherits every prior fallback."
- [ ] Part 7's exact-string key moves the owner into an unchecked column (reintroducing the exact
  weakness Module 07's own fix removed) and both required phrases are unresolved sentence fragments
  ("build it off Johnny's account notes..." with no stated subject) that fail the module's own
  "actionable without a follow-up question" bar.
- [ ] Three of nine dry-run artifacts (`good-memo.md`, `naive-memo.md`, `naive-summary.md`) are
  missing the distribution-warning clause the other six carry.
- [ ] Part 1 teaches the chat-vs-agent heuristic (duration + presence) that Module 01's own fixed
  version explicitly disclaims as insufficient, and introduces an unverified claim about Analyst
  continuing unattended that doesn't trace to any of the 8 prior modules' own verified product claims.
- [ ] Part 2's dry-run evidence names enough about the other four (correct) fields that the one wrong
  AUM figure is identifiable by elimination without doing the actual comparison.
- [ ] Part 3 drops Module 03's load-bearing caveat that naming a filename isn't what makes Copilot use
  it (attaching/selecting the file is) - reintroducing the exact misconception Module 03 exists to fix.
- [ ] Part 4 instructs adding `Internal:`-tagged conversations to the `Client Conversations` notebook,
  which Module 04's own checklist defines as exactly-three-`Client:`-only.
- [ ] Part 8 keeps only the untested half of Module 08's presence/absence mechanism (no control-chat
  requirement, no exact-wording check) - a real check exists in Module 08 that this part doesn't reuse.
- [ ] Learning objective 1 ("each reusing a real checking mechanism") overclaims for the 5
  non-fixture-bound items, which the module's own honesty paragraph says can't be mechanically
  checked at all.
- [ ] Bodhi is set up with a stated role (`README.md`'s opening) but never actually used for anything
  beyond appearing as distractor data.

## Immediate

- [ ] **Blocking content-time dependency:** re-verify §12's DLP/Purview claims against Microsoft's live compliance documentation before any of it reaches learner-facing module content — flagged by both the design doc itself and the Security-Conscious Reviewer persona as not yet independently checked
- [ ] Design the actual reveal mechanism for the Kellerman & Castle Easter egg (human-confirmed 2026-09-12: reveal once, post-capstone) — footer credit, Module 09 postscript, or a dedicated page
- [x] **RISK-0005, closed 2026-09-13 same day:** moved Module 01's and Module 02's `fixtures/grading-key.md` into `fixtures/hidden/`, the convention Module 07 established — re-verified with a fresh `rm -rf dist && npm run build`, zero `grading-key` output anywhere in `dist/`. See `docs/risks.md` and `docs/decisions.md`.

## This Week

- [x] Write "Fifth Run" section back into `~/hekton/gremlins/workshop/workshop-gremlin.md`, including a new "Variant: Non-Engineering Audience Workshops" section (Phase 5, non-blocking) — done 2026-09-12, on branch `agent/claude/copilot-fluent-fifth-run-writeback` in `~/hekton`, hardened through a cross-model review pass before commit.
- [ ] When authoring real module content, split `docs/workshop-design.md` §7's dense per-module prose (the Professional Technical Writer persona found Module 09's cell alone runs ~450 words) into the module's own README rather than carrying that density forward

## Later

- [ ] Deepen Kellerman & Castle's scenario engagement at the individual-module-prose level once real content is authored — flagged by the Instructional Designer lens in the 2026-09-12 usability/digestibility/value panel (`docs/review-panel/2026-09-12-usability-digestibility-value-panel.md`); the scenario works as a gating mechanism but is engaged with fairly shallowly in current module text.
- [ ] Reassess whether Module 04 ("Conversations, Notebooks, and Memory") bundles too many distinct skills (conversation hygiene, notebooks, cross-domain memory/instructions) into one gate — same panel, Instructional Designer finding; a design-level question, not a text fix.
- [ ] Consider retitling Modules 04-08 for more distinctive, scannable names — same panel, Skeptical Practitioner finding; current titles are functional but generic enough that the arc table doesn't clearly differentiate neighboring modules. Changes module identity, so out of scope for a mechanical fix pass.
- [ ] Monitor the AI-grades-itself Tier-2 circularity (the same product both produces and grades learner work, already named as an untested hypothesis in `docs/workshop-design.md` §8) as a standing confidence risk once real learners hit it — same panel, Skeptical Practitioner finding.

- [x] **Fixed 2026-09-13, RISK-0003 closed:** module READMEs' relative links (`../02-trust-but-verify/README.md` style) and module-to-fixture links (`fixtures/firm-overview.md` style, a live problem now that Modules 01-03 have real fixtures) both 404'd on the published site. Fixed with a new `fixtures` content collection + route (`site/src/content/config.ts`, `site/src/pages/modules/[...slug]/fixtures/[fixture].astro`) and a new remark plugin (`site/src/plugins/remark-relative-md-links.mjs`, wired via `astro.config.mjs`'s `markdown.remarkPlugins`) that rewrites relative `.md` links to the site's actual directory-index route shape at render time. Verified by rebuilding, `astro check` (clean), grepping built HTML for the rewritten hrefs, confirming matching files exist under `dist/`, and serving `dist/` locally with `curl` against several rewritten links (all `200`). Full detail: `docs/decisions.md`, 2026-09-13 row.
- [x] Fixture distribution decision (`site/public/fixtures/` mirrors vs. GitHub-only links) - resolved 2026-09-13, once real fixtures existed to force the decision: neither. A `fixtures` Astro content collection reads `modules/*/fixtures/*.md` in place (same convention as the `modules` collection) and a dedicated route renders each one as a real learner-facing page, so fixtures need no `public/` duplication and module READMEs can keep linking to them with a plain relative path. See `docs/decisions.md`, 2026-09-13 row.
- [ ] Add the simulation-only marking, jurisdiction assumption, and distribution-warning requirements (`docs/brand.md`'s liability rules) as explicit Tier-1 checklist items in Modules 05 and 09 when real content is authored (Module 05 shipped without this item; Module 09 isn't authored yet) - the design doc states these rules but the module skeletons don't yet require evidence of them, found by cross-model review. Modules 06 and 08 already require a mark on the artifact itself (the built deck / the agent's own Description field, not just the module page), resolved 2026-09-13 for Module 08.
- [ ] Carry §11's per-module tenant/admin-policy fallbacks (Module 03's scheduling fallback, Module 04's notebook substitute, Module 06's Analyst substitute) into those modules' own README content when authored - currently only stated in `docs/workshop-design.md` §11, not repeated in the module skeletons themselves.

**GitHub Pages setup — done 2026-09-12, verified directly, not trusted from any tool's own success claim:**
- [x] Enable GitHub Pages in repo Settings with source = GitHub Actions — done (`build_type: workflow` confirmed via `gh api repos/coderturtle/copilot-fluent/pages`)
- [x] Set the custom domain (`copilot-fluent.coderturtle.io`) — done, `cname` field confirmed set, `protected_domain_state: verified` (not inferred from `pending_domain_unverified_at` alone — checked the actual field)
- [x] Confirm DNS for `copilot-fluent.coderturtle.io` resolves — done via `agentic-infra-lab`'s `github-pages-dns` pattern (PR #14, terraform applied 2026-09-12); `dig +short CNAME`/`dig +short TXT` both confirmed against real public resolvers. HTTPS certificate state is `approved` (expires 2026-12-11); `https_enforced` is still `false` — not yet confirmed whether GitHub flips this automatically or needs a manual toggle.
- [x] Get a human to trigger the first real `workflow_dispatch` deploy — done 2026-09-12. `coderturtle/copilot-fluent#2` merged via squash to `main` (775a907), then `workflow_dispatch` triggered (run `34716207437`, `build` and `deploy` jobs both succeeded). Verified independently, not trusted from the workflow's own green check: `curl` returns HTTP 200 with the real page title. Site is live at `https://copilot-fluent.coderturtle.io/` — skeleton content only, since Coachgremlin hasn't authored real modules yet.

- [ ] Cross-workshop: fix `scripts/verify-project.sh` / `scaffold-project.sh` so newly-scaffolded repos don't fail their own `--dry-run` on `docs/local-assumptions.md` — confirmed the same failure exists in `heartbeat`, not unique to this repo
- [ ] Tenant/licence/admin-policy preflight: confirm coderturtle's own enterprise M365 Copilot access (SKU, admin policies, budget) before committing to per-module dogfooding claims
- [ ] Sit AB-730 personally once module content exists (dogfooding evidence, same role Ardan's cert played for `borrow-native`)
- [x] **Resolved 2026-09-13, during Module 08 content authoring:** the solo/blocked-learner fallback for Module 08 is no longer "TBD." Two tenant-policy blocks are handled separately, both cited against Microsoft's own current documentation: if agent creation works but sharing is admin-restricted, the module names Microsoft's own documented behavior ("an admin must approve and deploy the agent before it's available to other users") and falls back to this workshop's existing second-personal-chat/test-account solo adaptation, named as partial. If agent creation is blocked entirely (the tenant's **User access** agent setting is "No users," or excludes the learner), the module has a genuine substitute: write the same instructions-plus-knowledge-plus-prompts block into a plain Copilot chat's first message, re-pasted at the start of every session, producing the same kind of checkable transcript the module's gate needs - named honestly as a degraded, non-persistent, non-shareable substitute, not equivalent to a real agent, the same honesty Module 06's Analyst-agent fallback already applies. See `modules/08-your-first-agent/README.md`'s "If your tenant blocks part of this" section and the 2026-09-13 ADR row in `docs/decisions.md`.
- [ ] **Flagged during Module 01/02 content authoring, 2026-09-12/13:** `modules/README.md`'s own "gate, in plain terms" reference table still uses "Tier 1"/"Tier 2" as literal column/row headers, which `docs/brand.md`'s internal-vocabulary rule bans from learner-facing copy with no exception — the mechanical brand lint doesn't currently catch this (it isn't in the script's checked phrase list), so it's a real, undetected gap between the written rule and automated enforcement. Needs a redesign of that table's structure, not a quick text edit — deferred rather than done under overnight time pressure. See `docs/coachgremlin-authoring-lessons.md` for the fuller context.
