import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// The build-log lives in docs/build-log/ at the repo root, not under src/. This is
// the maintainer's deliberate, dated journal - entries are written, not machine-
// generated from session logs (see docs/workshop-design.md and the Workshop
// Gremlin's Risks note). The glob loader reads it in place; nothing is
// duplicated into src/.
const buildlog = defineCollection({
  loader: glob({ pattern: "*.md", base: new URL("../../../docs/build-log", import.meta.url) }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// The nine module READMEs, read in place from modules/ - the repo's own
// GitHub-facing directory structure, not duplicated into src/content/.
//
// Deliberate extension over the reference pattern (heartbeat/borrow-native's
// sites only ever exposed a buildlog collection): this is the first workshop
// site where learners read modules on the published site itself (a no-git
// audience), not just a maintainer build journal. See docs/next-actions.md.
//
// Route-ID fix, load-bearing: Astro 5's glob loader's default ID generator
// only strips a trailing "/index" segment, not "/README" - left alone, every
// module's route would render at a URL like ".../01-.../readme" instead of a
// clean ".../01-.../". generateId strips the "/README.md" suffix explicitly
// so the id is just the module's own directory name.
//
// No frontmatter schema is imposed on these files - they're authored first as
// plain GitHub-readable markdown (see modules/*/README.md), and adding a YAML
// frontmatter block would make them uglier to read directly on GitHub, the
// primary place a maintainer edits them. The page route below extracts the
// title from the file's own first heading via render()'s returned headings,
// not from frontmatter.
const modules = defineCollection({
  loader: glob({
    pattern: "*/README.md",
    base: new URL("../../../modules", import.meta.url),
    generateId: ({ entry }) => entry.replace(/\/README\.md$/i, ""),
  }),
  schema: z.object({}),
});

// Fixture files a module's own README links to for its hands-on exercise
// (e.g. modules/01-.../fixtures/firm-overview.md). Modules 01-03 are the
// first with real authored fixtures; their READMEs already link to these
// with relative paths like "fixtures/firm-overview.md", but until this
// collection existed there was no site route under modules/*/fixtures/* to
// serve them - every fixture link 404'd on the published site, the primary
// surface for this workshop's no-git learner audience. Same base/pattern
// convention as `modules` above: read in place from modules/, not
// duplicated into src/.
//
// generateId mirrors the module collection's own custom generateId (see
// above) rather than relying on the glob loader's default: explicit here so
// the id shape - "<module-dir>/fixtures/<filename-without-.md>", e.g.
// "01-starting-at-kellerman-and-castle/fixtures/firm-overview" - is a
// documented contract the route file (see
// src/pages/modules/[...slug]/fixtures/[fixture].astro) can rely on, not an
// implicit default that could shift with a future Astro version.
const fixtures = defineCollection({
  loader: glob({
    pattern: "*/fixtures/*.md",
    base: new URL("../../../modules", import.meta.url),
    generateId: ({ entry }) => entry.replace(/\.md$/i, ""),
  }),
  schema: z.object({}),
});

export const collections = { buildlog, modules, fixtures };
