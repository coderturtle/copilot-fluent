// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import remarkRelativeMdLinks from "./src/plugins/remark-relative-md-links.mjs";

// https://astro.build/config
export default defineConfig({
  // Custom domain (copilot-fluent.coderturtle.io) via GitHub Pages + Route53
  // CNAME, per agentic-infra-lab's patterns/github-pages-dns - the current
  // factory-wide convention (all four prior workshop sites use base: "/" on a
  // <slug>.coderturtle.io domain, not GitHub Pages' project-path default).
  // DNS is not yet live as of this scaffold - see docs/next-actions.md.
  // Every internal link MUST still be base-aware (import.meta.env.BASE_URL),
  // not a bare "/path", so the site stays portable if that ever changes.
  site: "https://copilot-fluent.coderturtle.io",
  base: "/",
  integrations: [mdx(), tailwind()],
  output: "static",
  // RISK-0003 fix (see docs/decisions.md, docs/next-actions.md,
  // docs/risks.md): module READMEs and fixtures are authored as plain
  // GitHub-readable markdown and link to each other with relative ".md"
  // paths (e.g. "../02-trust-but-verify/README.md",
  // "fixtures/firm-overview.md") that are correct on GitHub but have no
  // matching route on this static site. remarkRelativeMdLinks rewrites
  // those links, in the markdown AST, to the site's own directory-index URL
  // shape at render time - see src/plugins/remark-relative-md-links.mjs for
  // exactly what it does and doesn't touch. `markdown.remarkPlugins` runs
  // for every markdown file Astro renders, including every content
  // collection entry (buildlog, modules, fixtures - see
  // src/content/config.ts), not just .md pages under src/pages/.
  markdown: {
    remarkPlugins: [remarkRelativeMdLinks],
  },
});
