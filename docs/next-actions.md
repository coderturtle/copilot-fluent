# Next Actions: Copilot Fluent

## Immediate

- [ ] Deliverables & branding: module skeleton, brand layer, README/maintainers split (Phase 3)
- [ ] **Blocking content-time dependency:** re-verify §12's DLP/Purview claims against Microsoft's live compliance documentation before any of it reaches learner-facing module content — flagged by both the design doc itself and the Security-Conscious Reviewer persona as not yet independently checked
- [ ] Design the actual reveal mechanism for the Kellerman & Castle Easter egg (human-confirmed 2026-09-12: reveal once, post-capstone) — footer credit, Module 09 postscript, or a dedicated page; decide during Phase 3/4

## This Week

- [ ] Build-log / Pages publisher: Astro site, deploy workflow (Phase 4)
- [ ] Write "Fifth Run" section back into `~/hekton/gremlins/workshop/workshop-gremlin.md`, including a new "Variant: Non-Engineering Audience Workshops" section (Phase 5, non-blocking)
- [ ] When authoring Phase 3's per-module READMEs, split `docs/workshop-design.md` §7's dense per-module prose (the Professional Technical Writer persona found Module 09's cell alone runs ~450 words) into the module's own README rather than carrying that density forward

## Later

- [ ] Cross-workshop: fix `scripts/verify-project.sh` / `scaffold-project.sh` so newly-scaffolded repos don't fail their own `--dry-run` on `docs/local-assumptions.md` — confirmed the same failure exists in `heartbeat`, not unique to this repo
- [ ] Tenant/licence/admin-policy preflight: confirm coderturtle's own enterprise M365 Copilot access (SKU, admin policies, budget) before committing to per-module dogfooding claims
- [ ] Sit AB-730 personally once module content exists (dogfooding evidence, same role Ardan's cert played for `borrow-native`)
- [ ] Get a human to enable GitHub Pages and trigger the first real deploy (same open item as all four prior workshops)
- [ ] Design a real solo/blocked-learner fallback for Module 08 if Agent Store approval is unavailable — currently "TBD at content time," which the re-aimed End-User persona flagged as a dead end for a genuinely blocked non-technical learner today
