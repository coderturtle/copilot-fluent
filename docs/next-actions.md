# Next Actions: Copilot Fluent

## Immediate

- [ ] **Blocking content-time dependency:** re-verify §12's DLP/Purview claims against Microsoft's live compliance documentation before any of it reaches learner-facing module content — flagged by both the design doc itself and the Security-Conscious Reviewer persona as not yet independently checked
- [ ] Design the actual reveal mechanism for the Kellerman & Castle Easter egg (human-confirmed 2026-09-12: reveal once, post-capstone) — footer credit, Module 09 postscript, or a dedicated page

## This Week

- [x] Write "Fifth Run" section back into `~/hekton/gremlins/workshop/workshop-gremlin.md`, including a new "Variant: Non-Engineering Audience Workshops" section (Phase 5, non-blocking) — done 2026-09-12, on branch `agent/claude/copilot-fluent-fifth-run-writeback` in `~/hekton`, hardened through a cross-model review pass before commit.
- [ ] When authoring real module content, split `docs/workshop-design.md` §7's dense per-module prose (the Professional Technical Writer persona found Module 09's cell alone runs ~450 words) into the module's own README rather than carrying that density forward

## Later

- [ ] Deepen Kellerman & Castle's scenario engagement at the individual-module-prose level once real content is authored — flagged by the Instructional Designer lens in the 2026-09-12 usability/digestibility/value panel (`docs/review-panel/2026-09-12-usability-digestibility-value-panel.md`); the scenario works as a gating mechanism but is engaged with fairly shallowly in current module text.
- [ ] Reassess whether Module 04 ("Conversations, Notebooks, and Memory") bundles too many distinct skills (conversation hygiene, notebooks, cross-domain memory/instructions) into one gate — same panel, Instructional Designer finding; a design-level question, not a text fix.
- [ ] Consider retitling Modules 04-08 for more distinctive, scannable names — same panel, Skeptical Practitioner finding; current titles are functional but generic enough that the arc table doesn't clearly differentiate neighboring modules. Changes module identity, so out of scope for a mechanical fix pass.
- [ ] Monitor the AI-grades-itself Tier-2 circularity (the same product both produces and grades learner work, already named as an untested hypothesis in `docs/workshop-design.md` §8) as a standing confidence risk once real learners hit it — same panel, Skeptical Practitioner finding.

- [ ] **Known limitation, now dormant rather than fixed:** module READMEs' relative links (`../02-trust-but-verify/README.md` style) render correctly on GitHub but would 404 on the published site. A cross-model review found the site was about to ship this live; fixed for now by not rendering raw skeleton content on the site at all (see `site/src/pages/modules/[...slug].astro`), but this will matter again once real module content replaces the skeletons. Needs a remark plugin that rewrites relative `.md` links at render time, or an authoring convention (absolute GitHub URLs for anything the site can't route), before content ships.
- [ ] Fixture distribution decision (`site/public/fixtures/` mirrors vs. GitHub-only links) - deferred until real fixtures exist at content time; no fixtures exist yet to distribute.
- [ ] Add the simulation-only marking, jurisdiction assumption, and distribution-warning requirements (`docs/brand.md`'s liability rules) as explicit Tier-1 checklist items in Modules 05, 06, 08, and 09 when real content is authored - the design doc states these rules but the module skeletons don't yet require evidence of them, found by cross-model review.
- [ ] Carry §11's per-module tenant/admin-policy fallbacks (Module 03's scheduling fallback, Module 04's notebook substitute, Module 06's Analyst substitute) into those modules' own README content when authored - currently only stated in `docs/workshop-design.md` §11, not repeated in the module skeletons themselves.

**GitHub Pages setup — done 2026-09-12, verified directly, not trusted from any tool's own success claim:**
- [x] Enable GitHub Pages in repo Settings with source = GitHub Actions — done (`build_type: workflow` confirmed via `gh api repos/coderturtle/copilot-fluent/pages`)
- [x] Set the custom domain (`copilot-fluent.coderturtle.io`) — done, `cname` field confirmed set, `protected_domain_state: verified` (not inferred from `pending_domain_unverified_at` alone — checked the actual field)
- [x] Confirm DNS for `copilot-fluent.coderturtle.io` resolves — done via `agentic-infra-lab`'s `github-pages-dns` pattern (PR #14, terraform applied 2026-09-12); `dig +short CNAME`/`dig +short TXT` both confirmed against real public resolvers. HTTPS certificate state is `approved` (expires 2026-12-11); `https_enforced` is still `false` — not yet confirmed whether GitHub flips this automatically or needs a manual toggle.
- [ ] **Get a human to trigger the first real `workflow_dispatch` deploy — now the only remaining step, but blocked on merging `coderturtle/copilot-fluent#2` first.** The deploy workflow and site content currently exist only on that still-open PR's branch; `main` has neither, so `gh workflow list` returns nothing and the live site 404s (`curl` confirmed) despite DNS/Pages/domain being fully live. Merge the PR, then trigger the deploy.

- [ ] Cross-workshop: fix `scripts/verify-project.sh` / `scaffold-project.sh` so newly-scaffolded repos don't fail their own `--dry-run` on `docs/local-assumptions.md` — confirmed the same failure exists in `heartbeat`, not unique to this repo
- [ ] Tenant/licence/admin-policy preflight: confirm coderturtle's own enterprise M365 Copilot access (SKU, admin policies, budget) before committing to per-module dogfooding claims
- [ ] Sit AB-730 personally once module content exists (dogfooding evidence, same role Ardan's cert played for `borrow-native`)
- [ ] Design a real solo/blocked-learner fallback for Module 08 if Agent Store approval is unavailable — currently "TBD at content time," which the re-aimed End-User persona flagged as a dead end for a genuinely blocked non-technical learner today
