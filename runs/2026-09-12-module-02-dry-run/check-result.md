# Hand-check of both synthetic memos against the grading key

Checked against `modules/02-trust-but-verify/fixtures/grading-key.md` and
`modules/02-trust-but-verify/fixtures/renata-solis-client-file.md`.

## good-memo.md

| # | Error named (exact string)? | Method label matches key? | Correction matches key (Tier 2)? |
|---|---|---|---|
| 1 | Yes - `$4.6 million` | Yes - citation check | Yes - states $3.18 million, matches client file |
| 2 | Yes - `Grace Okonkwo` | Yes - citation check | Yes - names Theo Reyes, Feb 2024, matches client file |
| 3 | Yes - `May 14, 2026` | Yes - citation check | Yes - states June 3, 2026, matches client file |
| 4 | Yes - `Meridian BioTech Innovation Fund` | Yes - citation check | Yes - names the real 4 holdings, matches client file |
| 5 | Yes - injection string, verbatim | Yes - human review | Yes - names no prior check exists and the note should be removed |

Sensitive-data answer: names both the date of birth and the tax reference specifically (Tier 1's
non-empty check and Tier 2's specificity check both satisfied), and states the licence-versus-
configuration distinction (DLP/sensitivity labels must be actively configured, default policies
commonly audit-only) rather than a generic privacy statement.

**Result: Tier 1 pass (all 5 named, all 5 labels correct, all 5 corrections present, sensitive-data
answer non-empty). Tier 2 pass (all 5 corrections factually match the client file, sensitive-data
answer names the specific reason).**

## naive-memo.md

| # | Error named (exact string)? | Method label matches key? | Correction matches key (Tier 2)? |
|---|---|---|---|
| 1 | Yes - `$4.6 million` | Yes - citation check | No - defers to "confirm with account services" instead of stating $3.18 million |
| 2 | Yes - `Grace Okonkwo` | Yes - citation check | No - guesses "probably Johnny Castle," actual answer is Theo Reyes |
| 3 | Yes - `May 14, 2026` | Yes - citation check | Partial - "sometime in June" is directionally right but doesn't state June 3, 2026 |
| 4 | **No** - `Meridian BioTech Innovation Fund` never mentioned | - | - |
| 5 | Yes - injection string, verbatim | **No** - labeled citation check, key requires human review | Present but the label mismatch alone fails this item regardless |

Sensitive-data answer: present (satisfies Tier 1's non-empty check) but names no specifics - no
mention of the date of birth or tax reference, and no mention of the licence-versus-configuration
distinction. Reads as the generic privacy statement the grading key names explicitly as
insufficient.

**Result: Tier 1 fails (only 4 of 5 errors named - the fabricated-fund error is missed entirely -
and the injection error's method label doesn't match the key). Tier 2 would also fail even setting
Tier 1 aside: 2 of the 5 corrections don't match the client file's actual values, one is imprecise,
and the sensitive-data answer doesn't land the specific point.**

## What this confirms and doesn't

The checklist and the label match correctly separate a memo that did the comparison work from one
that did most of it but cut a corner in three distinct ways (an error missed outright, a label
guessed wrong on the one row where the label isn't inferable by pattern-matching the other four,
and corrections stated without actually being right). That the naive memo still gets 4 of 5 errors
and 4 of 5 labels right, and still fails on both tiers, is itself useful: this isn't a checklist
that only catches a memo that tried nothing.

This does not confirm how a real learner's memo would look, or that the Tier 2 grading prompt
produces this same read when actually run inside a live Copilot session rather than hand-checked
here. See `README.md` in this same folder for what this run does and doesn't prove.
