#!/usr/bin/env bash
# check-brand-lint.sh: Detect brand/style violations (em dashes, banned phrases)
# in published workshop content. Read-only. Adapted directly from
# heartbeat's scripts/check-brand-lint.sh.
#
# Scope: published content only, per docs/brand.md's own boundary. Design/
# planning docs under docs/ are working documents and are explicitly exempt.
#
# Allowlist: a line containing the literal marker `brand-lint-ignore` is
# skipped by the banned-phrase AND em-dash scans, for that whole line. This
# exists because docs/brand.md's own hard rules state a rule by naming the
# phrase it prohibits ("never say 'guaranteed to pass'") - without an escape
# hatch, published content that ever needs to explain a rule by naming the
# exact phrase would trip this same lint. Use sparingly, only for that exact
# situation.
#
# Named limit, not a security boundary: this is a whole-line bypass with no
# scoping beyond "the line contains this marker" - a line using the marker to
# excuse an unrelated violation elsewhere on the same line would also pass.
# This tool trusts whoever adds the marker to use it honestly; it does not
# and cannot verify that.
#
# Usage:
#   scripts/check-brand-lint.sh           # human report
#   scripts/check-brand-lint.sh --check   # hook mode: exit 1 if violations found
#
# Network: none. Pure local file inspection.
set -uo pipefail

CHECK_MODE=false
[[ "${1:-}" == "--check" ]] && CHECK_MODE=true

ROOT=""
dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
while [[ "$dir" != "/" ]]; do
  if [[ -f "$dir/.hekton/project.yaml" ]]; then ROOT="$dir"; break; fi
  dir="$(dirname "$dir")"
done
if [[ -z "$ROOT" ]]; then
  echo "check-brand-lint: no .hekton/project.yaml found above this script." >&2
  exit 0
fi
cd "$ROOT"

VIOLATIONS=0
warn() { printf '  FAIL: %s\n' "$*"; VIOLATIONS=$((VIOLATIONS + 1)); }
ok() { printf '  OK: %s\n' "$*"; }

# Published-content scope: README, module content, build-log entries, and the
# site's own source once built. Add new content dirs here as the workshop
# grows past its current skeleton.
SCOPE_FILES=()
[[ -f README.md ]] && SCOPE_FILES+=("README.md")
while IFS= read -r -d '' f; do SCOPE_FILES+=("$f"); done < <(find modules -name '*.md' -print0 2>/dev/null)
while IFS= read -r -d '' f; do SCOPE_FILES+=("$f"); done < <(find docs/build-log -name '*.md' -print0 2>/dev/null)
while IFS= read -r -d '' f; do SCOPE_FILES+=("$f"); done < <(find site/src -type f \( -name '*.astro' -o -name '*.mdx' \) -print0 2>/dev/null)

echo "-- Brand lint (published content only) ----------------------------------"
echo "  files checked: ${#SCOPE_FILES[@]}"
echo ""

# Strip any line containing the allowlist marker, then join lines WITHIN a
# paragraph (a lone newline, not part of a blank-line break) into spaces
# before matching - preserving actual paragraph breaks as hard boundaries.
# The join exists because source wrapping (a multi-word phrase split across
# two lines, e.g. in wrapped Astro/Markdown prose) would otherwise evade a
# strictly per-line grep even though a browser renders the wrapped text as
# one continuous phrase - found by cross-model review catching a real
# instance of exactly this in site/src/pages/index.astro. A first version of
# this fix joined every line unconditionally, which a second review pass
# caught creating a new false-positive class (two unrelated sentences either
# side of a paragraph break concatenating into an accidental match, e.g.
# "...ace." / "" / "The exam..." reading as "ace the exam"). Fixed by only
# joining lone newlines, per, not blank-line-separated ones.
#
# Named residual, not further engineered: removing an allowlisted line can
# still bridge two paragraph fragments that were not adjacent before removal.
# Narrow enough (needs the marker used mid-paragraph, right where a real
# violation would also coincidentally form) that this is accepted rather than
# built out further - the allowlist is already documented as trust-based, not
# a security boundary.
scan_files_excluding_allowlisted_lines() {
  local pattern="$1"; shift
  for f in "$@"; do
    grep -v 'brand-lint-ignore' "$f" 2>/dev/null | perl -0777 -pe 's/(?<!\n)\n(?!\n)/ /g' | tr -s ' ' | grep -qiF "$pattern" && echo "$f"
  done
}

if [[ "${#SCOPE_FILES[@]}" -eq 0 ]]; then
  ok "no published-content files found yet"
else
  # Hard rule: no em dash characters (docs/brand.md).
  EM_HITS=""
  for f in "${SCOPE_FILES[@]}"; do
    grep -v 'brand-lint-ignore' "$f" 2>/dev/null | grep -qF '—' && EM_HITS="$EM_HITS $f"
  done
  if [[ -n "$EM_HITS" ]]; then
    warn "em dash found in:$EM_HITS"
  else
    ok "no em dashes in published content"
  fi

  # Banned phrases (docs/brand.md's list, kept in sync by hand -- update both
  # when one changes). A prior version of this array silently dropped several
  # of brand.md's own listed phrases (notably "bulletproof" and "revolutionary"
  # -- "revolutioniz" alone doesn't match the latter) and claimed a separate
  # financial-fragment check existed when it didn't; both gaps found by
  # cross-model review before real content shipped, fixed here. "at scale" is
  # still deliberately excluded from this array -- see the note below, not an
  # oversight.
  BANNED=(
    "delve" "tapestry" "unlock" "seamless" "game-changing" "revolutioniz"
    "revolutionary" "bulletproof" "transform your workflow" "supercharge"
    "effortlessly" "cutting-edge" "thought leader" "in today's fast-paced world"
    "it's important to note" "guaranteed to pass" "ace the exam" "pass rate"
    "master copilot" "unlock your potential" "10x your productivity"
    "become an ai power user"
  )
  for phrase in "${BANNED[@]}"; do
    HITS=$(scan_files_excluding_allowlisted_lines "$phrase" "${SCOPE_FILES[@]}")
    if [[ -n "$HITS" ]]; then
      warn "banned phrase \"$phrase\" found in: $(echo "$HITS" | tr '\n' ' ')"
    fi
  done

  # Financial-recommendation fragments (docs/brand.md guardrail 2). Best-effort
  # only, and named as such: this can catch crude, literal cases but cannot
  # catch recommendation-flavored prose that avoids every listed fragment
  # (docs/workshop-design.md §7 already names this as a real, unclosed gap
  # for the Tier-2 rubric to cover instead). Checking something crude is still
  # better than the false "checked separately" claim this replaced.
  FINANCIAL=(
    "you should buy" "you should sell" "recommend buying" "recommend selling"
    "recommend holding" "suitable for you" "suitable for your" "tax advice"
    "guaranteed return"
  )
  for phrase in "${FINANCIAL[@]}"; do
    HITS=$(scan_files_excluding_allowlisted_lines "$phrase" "${SCOPE_FILES[@]}")
    if [[ -n "$HITS" ]]; then
      warn "financial-recommendation fragment \"$phrase\" found in: $(echo "$HITS" | tr '\n' ' ')"
    fi
  done

  # Note: docs/brand.md's "at scale" rule (banned unless the content proves
  # the scale) and the AB-730 no-price/no-question-count rule are both
  # deliberately NOT mechanically scanned here -- both need contextual
  # judgment a phrase match can't supply (a false positive on the real,
  # allowed "45 minutes" duration fact, or on a genuinely scale-justified
  # claim, would be worse than no check at all). Both stay enforced by
  # human/Review-Panel reading, not this script -- named here explicitly so
  # "not implemented" isn't confused with "forgotten."

  [[ "$VIOLATIONS" -eq 0 ]] && ok "no banned phrases in published content"
fi

# Status-callout drift: README.md and modules/README.md both should agree
# about which module is the highest-numbered one with real content.
echo ""
echo "-- Status-callout drift -------------------------------------------------"
if [[ -d modules ]]; then
  HIGHEST_REAL=0
  for d in modules/*/; do
    [[ -f "$d/README.md" ]] || continue
    num="$(basename "$d" | grep -oE '^[0-9]+' || true)"
    [[ -z "$num" ]] && continue
    if ! grep -q "Skeleton only" "$d/README.md"; then
      num_int=$((10#$num))
      [[ "$num_int" -gt "$HIGHEST_REAL" ]] && HIGHEST_REAL=$num_int
    fi
  done
  if [[ "$HIGHEST_REAL" -eq 0 ]]; then
    ok "all modules are skeleton only, no drift possible yet"
  else
    EXPECTED="Module $(printf '%02d' "$HIGHEST_REAL")"
    DRIFT=0
    for f in README.md modules/README.md; do
      [[ -f "$f" ]] || continue
      if ! grep -qEi "module[[:space:],\`\[]*0*$HIGHEST_REAL([^0-9]|\$)" "$f"; then
        warn "$f doesn't mention $EXPECTED as the highest real module - update its status callout"
        DRIFT=1
      fi
    done
    [[ "$DRIFT" -eq 0 ]] && ok "status callouts agree: $EXPECTED is the highest real module"
  fi
else
  ok "no modules/ directory yet"
fi

echo ""
if [[ "$VIOLATIONS" -eq 0 ]]; then
  echo "Brand lint clean."
else
  echo "Brand lint found $VIOLATIONS issue(s). Fix per docs/brand.md's hard rules."
fi

if [[ "$CHECK_MODE" == true ]]; then
  [[ "$VIOLATIONS" -gt 0 ]] && exit 1
fi
exit 0
