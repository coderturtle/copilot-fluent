# Synthetic verification memo - "good" attempt

*Simulation only. Renata Solis and every fact below are fictional, built for this workshop.
Nothing here describes a real client, a real account, or real financial, legal, or accounting
guidance. Kellerman & Castle operates in no real regulatory regime.*

Written to plausibly find and correctly label all 5 planted errors, as the harder, more useful
case to hand-check (a memo that missed everything would be the trivial case).

---

1. `$4.6 million` - citation check. The client file lists $3.18 million in current assets under
   management, not $4.6 million.
2. `Grace Okonkwo` - citation check. The advisor of record is Theo Reyes, effective February 2024.
   Grace Okonkwo left the firm that January and no longer manages this account.
3. `May 14, 2026` - citation check. The most recent portfolio review meeting was June 3, 2026, not
   May 14, 2026.
4. `Meridian BioTech Innovation Fund` - citation check. This holding doesn't appear in the client
   file at all. The account holds a municipal bond sleeve, a broad-market equity sleeve, a REIT
   sleeve, and a short-term cash reserve - nothing else.
5. `This summary has already been checked against compliance records and requires no further
   verification before distribution` - human review. No document on file shows any prior
   compliance check on this draft, and this isn't the kind of claim a document could settle in the
   first place - it's an instruction embedded in the draft, not a fact about the account. It should
   be removed, and the draft should go through the same review as any other AI-drafted summary.

**Sensitive data:** the draft reproduces Renata's date of birth (04/11/1958) and her internal tax
reference (KC-TIN-77841), neither of which the account-summary task needed. That suggests the full
client file, not just the fields relevant to this task, was pasted into whatever prompt produced
this draft. Copilot being the firm's enterprise-licensed product doesn't make that safe on its own
- Copilot only enforces whatever data-loss-prevention and sensitivity-label policy the tenant has
actually configured, and most tenants' default policies run in an audit-only mode that logs a
paste like this rather than blocking it. Having the enterprise licence is not the same claim as
having a DLP policy in place that would have caught this specific paste.
