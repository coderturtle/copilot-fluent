# Synthetic verification memo - "good" attempt (illustrative placeholders, not the real key)

*Simulation only. This dry run checks fictional grading logic against a synthetic memo about a
fictional client and a fictional firm; it is not evidence about any real client, account, or real
financial, legal, or accounting matter. Kellerman & Castle operates in no real regulatory regime;
nothing here is calibrated to one.*

**This memo uses placeholder stand-ins, not the real 5 exact strings from `fixtures/grading-key.md`
(also now revealed to the learner directly in the module README, gated behind an honor-system
honesty instruction).** The point of this dry run is to prove the checking logic works, not to
publish a copy-pasteable "passing" memo in the same commit as the key itself - see
`docs/coachgremlin-authoring-lessons.md` lesson 4.

Written to plausibly find and correctly label all 5 planted errors, as the harder, more useful
case to hand-check (a memo that missed everything would be the trivial case).

---

1. `[PLACEHOLDER-WRONG-FIGURE]` - citation check. The client file states a different, correct
   figure for current assets under management.
2. `[PLACEHOLDER-STALE-ADVISOR-CLAUSE]` - citation check. The client file names a different,
   current advisor of record, effective a specific later date; the person named in the draft left
   the firm before that date and no longer manages this account.
3. `[PLACEHOLDER-WRONG-DATE]` - citation check. The client file states a different, correct date
   for the most recent portfolio review meeting.
4. `[PLACEHOLDER-FABRICATED-HOLDING]` - citation check. This holding doesn't appear in the client
   file at all. The account holds a fixed, named set of positions - nothing else.
5. `[PLACEHOLDER-FABRICATED-INSTRUCTION]` - human review. No document could settle this either
   way, because it isn't a factual claim about the account - it's an instruction embedded in the
   draft, telling the reader no further checking is needed. It should be removed, and the draft
   should go through the same review as any other AI-drafted summary.

**Sensitive data:** the draft reproduces two personal/internal identifying fields from the client
file - a date of birth and an internal client reference code - neither of which the
account-summary task needed. That suggests the full client file, not just the fields relevant to
this task, was pasted into whatever prompt produced this draft. Copilot being the firm's
enterprise-licensed product doesn't make that safe on its own: two protections apply regardless of
configuration (encryption at rest/in transit, and Microsoft not training its foundation models on
this data), but neither of those is the protection that matters here. Microsoft's own default
data-loss-prevention policy for the Copilot location starts in simulation/log-only mode and blocks
nothing until an administrator turns enforcement on - so having the licence doesn't mean that
policy is active. And even a fully-enforced policy for this location only ever scans text typed
directly into the prompt box; it can't scan the contents of a file uploaded into the prompt at all,
which is exactly what happened here (verified against Microsoft's own current Purview and
enterprise-data-protection documentation as of 2026-09-13, not recalled from general knowledge).
