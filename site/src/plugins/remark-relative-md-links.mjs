// Fixes RISK-0003 (see docs/risks.md and docs/next-actions.md): module
// READMEs are authored as plain, GitHub-readable markdown and link to each
// other, and to their own fixtures, with relative paths that end in
// ".md" - e.g. "../02-trust-but-verify/README.md" or
// "fixtures/firm-overview.md". Those links are correct on GitHub, but this
// site (the primary surface for a no-git learner audience) never serves a
// literal ".md" file: Astro's static build (see astro.config.mjs - default
// output: "static", no build.format override, which defaults to
// "directory") turns "modules/02-trust-but-verify/README.md" into the route
// "/modules/02-trust-but-verify/" (an index.html inside that directory) and
// "modules/01-.../fixtures/firm-overview.md" into
// "/modules/01-.../fixtures/firm-overview/". Left alone, every one of these
// links 404s on the live site.
//
// This remark plugin rewrites them at render time, in the markdown AST,
// rather than requiring every author to hand-write the site's URL shape (or
// GitHub's) into the same authored copy that starts every module's own
// build (see workshop-design.md's authoring convention). It runs on
// whatever markdown Astro renders through the configured `markdown.
// remarkPlugins` (astro.config.mjs) - in this repo, that's every entry in
// the buildlog, modules, and fixtures content collections.
//
// Deliberately narrow, matching exactly what's asked of it:
//   - Only touches links whose path ends in ".md" (optionally with a
//     "#fragment"). Non-".md" links (mailto:, anchors, GitHub URLs, the
//     workshop-design.md-style docs/ links that have no site route at all)
//     pass through untouched - rewriting a link into a path shape that
//     still has nowhere to land would be worse than leaving it as a known,
//     already-tracked dead link.
//   - Only touches relative links. A URL with a scheme (http:, https:,
//     mailto:, etc.) is left alone.
//   - "/README.md" (case-insensitive) becomes a trailing "/" - matching a
//     module's own directory-index route exactly (see
//     src/pages/modules/[...slug].astro's generateId, which strips the same
//     suffix). This also happens to make "../README.md" (a module linking
//     up to modules/README.md, the arc index) resolve to "/modules/" - the
//     modules index page - which is the closest real route to "the full
//     arc," even though that page is a hand-built listing rather than a
//     render of modules/README.md's own body.
//   - Any other ".md" path becomes the same path with the extension
//     stripped and a trailing "/" added, matching the fixtures collection's
//     own id shape (see src/content/config.ts) and its route file's URL.
export default function remarkRelativeMdLinks() {
  return (tree) => {
    walkLinks(tree, (node) => {
      node.url = rewriteUrl(node.url);
    });
  };
}

function walkLinks(node, visit) {
  if (node && node.type === "link" && typeof node.url === "string") {
    visit(node);
  }
  if (node && Array.isArray(node.children)) {
    for (const child of node.children) {
      walkLinks(child, visit);
    }
  }
}

const HAS_SCHEME = /^[a-zA-Z][a-zA-Z0-9+.-]*:/; // http:, https:, mailto:, tel:, etc.
const ENDS_README_MD = /\/README\.md$/i;
const IS_BARE_README_MD = /^README\.md$/i;
const ENDS_MD = /\.md$/i;

function rewriteUrl(url) {
  if (!url || HAS_SCHEME.test(url)) return url;

  const hashIndex = url.indexOf("#");
  const path = hashIndex === -1 ? url : url.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : url.slice(hashIndex);

  if (!ENDS_MD.test(path)) return url;

  let newPath;
  if (IS_BARE_README_MD.test(path)) {
    newPath = "./";
  } else if (ENDS_README_MD.test(path)) {
    newPath = path.replace(ENDS_README_MD, "/");
  } else {
    newPath = path.replace(ENDS_MD, "/");
  }

  return `${newPath}${hash}`;
}
