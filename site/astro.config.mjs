// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

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
});
