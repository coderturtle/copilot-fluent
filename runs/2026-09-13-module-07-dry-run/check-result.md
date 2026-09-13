# Hand-check of both synthetic recaps against the action-items key

*Simulation only. This dry run checks fictional grading logic against synthetic recaps about a
fictional client and a fictional firm; it is not evidence about any real client, account, or real
financial, legal, or accounting matter. Kellerman & Castle operates in no real regulatory regime;
nothing here is calibrated to one. Reusing this format against a real client's real meeting is your
own regulated activity, not something this workshop can vouch for.*

This dry run does not reproduce the real 5-item checklist's literal wording here, on purpose - see
`docs/coachgremlin-authoring-lessons.md` lesson 4 (a dry run's job is to prove the checking logic
works, not to publish the answer, and this stays true even though the module README's own gate
later reveals the same table to a learner who has already committed to their own attempt - a dry
run file sits outside that gate and shouldn't become a second, easier place to find the same
content). `good-recap.md` and `naive-recap.md` use placeholder stand-ins for each item's specific
deliverable and date; the table below describes which of the 5 real categories matched, exactly or
loosely, and which of the 3 decoys were correctly excluded or wrongly promoted - not which exact
strings did or didn't appear.

Checked against `modules/07-meetings-and-pages-in-teams/fixtures/hidden/action-items-key.md` and
`fixtures/molly-jensens-q3-portfolio-review-transcript.md`.

## Part 1: the exact-string check on the 5 real action items

| # | Owner | Category | `good-recap.md` | `naive-recap.md` |
|---|---|---|---|---|
| 1 | Johnny Castle | Year-end statement, dated deadline | **Exact match** | **Exact match** |
| 2 | Molly Jensen | Signed change-of-address form, dated deadline | **Exact match** | **Exact match** |
| 3 | Baby Houseman | Operations confirmation of the address change, dated deadline | **Exact match** | **Fails** - paraphrased ("sometime soon") instead of the specific date the key requires |
| 4 | Johnny Castle | Calendar invite for the next review, dated deadline | **Exact match** | **Exact match** |
| 5 | Molly Jensen | Ethan's contact information, dated deadline | **Exact match** | **Missing entirely** - not mentioned anywhere in the recap |

**`good-recap.md`: 5 of 5 exact matches. `naive-recap.md`: 3 of 5 exact matches, 1 vague paraphrase
that fails the exact-string requirement, 1 item dropped entirely.**

## Part 2: the 3 decoys

| Decoy | What it is | `good-recap.md` | `naive-recap.md` |
|---|---|---|---|
| Early, uncommitted mention of the address update | An open-ended intention stated twice before the real commitment | **Correctly excluded** | **Correctly excluded** (not separately re-added) |
| Switching to online statement delivery | An explicitly open-ended "someday," no date given by the speaker | **Correctly excluded** | **Wrongly promoted to an action item**, with a deadline the transcript never states |
| "Nothing about the account itself needs to change" | A closing statement of fact, not a task | **Correctly excluded** | **Correctly excluded** |

**`good-recap.md` excludes all 3 decoys correctly. `naive-recap.md` excludes 2 of 3, but promotes
the online-statement-delivery decoy to a fabricated action item complete with an invented deadline
that appears nowhere in the source transcript** - a realistic failure mode distinct from simply
missing something: inventing a commitment that was never made, with false specificity attached.

## Conclusion

**The exact-string-plus-decoy check correctly separates a recap that read the transcript closely
from one that got most of it right but cut three distinct kinds of corners: a vague deadline where
an exact one was available, a fully dropped item, and a fabricated deadline attached to something
that was never actually committed to.** That `naive-recap.md` still gets 3 of 5 items exactly
right and correctly excludes 2 of 3 decoys is itself useful: this isn't a check that only catches a
recap that tried nothing, and it confirms the fabricated-deadline failure mode is distinguishable
from the missing-item failure mode rather than both collapsing into an undifferentiated "fail."

## Part 3: the honor-system Page-sharing step, reasoned honestly

Unlike the recap, this module's Page-building-and-sharing step has no fixture-backed mechanical
check behind it - the module README says so directly, and this dry run doesn't pretend otherwise.
There is nothing to hand-verify here beyond confirming the instruction itself is followable: "at
least 3 named sections, then share the Page link" is a concrete, checkable-by-the-learner-themselves
instruction (a learner can count their own sections and confirm they clicked Share), even though
nothing in this workshop can verify from the outside that either step actually happened. This
matches `docs/coachgremlin-authoring-lessons.md` lesson 8's standard: the module README states this
limit plainly rather than implying the learner's own say-so proves more than their own honesty.

## Part 4: product-claim re-verification

Sources fetched live in this session, 2026-09-13, not recalled:

- Microsoft Learn, "Manage meetings and collaboration using Microsoft Copilot" (module overview,
  `ms.date` 2026-08-21, `updated_at` 2026-09-07T17:14:00Z) -
  `learn.microsoft.com/en-us/training/modules/manage-meetings-collaboration/`.
- Microsoft Learn, "Streamline meeting preparation and follow ups with Copilot" (unit 2 of the same
  module, `ms.date` 2026-08-21, `updated_at` 2026-08-26T17:13:00Z) - confirms **Intelligent recap**
  (the Recap tab's AI summary) is "available for scheduled, instant, and ad-hoc meetings when a
  transcript exists," built from the transcript rather than paraphrased from memory, and confirms
  a real prompt pattern for listing action items from a meeting transcript.
- Microsoft Learn, "Enhance collaboration with Copilot Chat, Pages, and Notebooks" (unit 3 of the
  same module, `ms.date` 2026-08-21, `updated_at` 2026-08-26T17:13:00Z) - confirms Copilot Pages is
  created via "Edit in Pages" under any Copilot response, described as "a shared, editable canvas,"
  expandable into named sections (the unit's own example names objectives, milestones, stakeholder
  roles, and open questions), and confirms Pages persist and are reachable from a dedicated **Pages**
  tab.
- Microsoft Support, "Share a Microsoft 365 Copilot Page" - checked directly on 2026-09-13; no
  visible last-updated date on the page, so this module's README says "checked on 2026-09-13" per
  `docs/coachgremlin-authoring-lessons.md` lesson 13, not an invented revision date. Confirms
  sharing works via **Share -> Page link**, which a recipient can open independently.

**Claim 1 - Intelligent recap exists and is transcript-grounded.** Confirmed as of 2026-09-13,
directly supporting this module's framing of the supplied transcript fixture as a stand-in for what
a real Recap tab would need as its own input.

**Claim 2 - Copilot Pages is created from a response and expanded into named sections.** Confirmed
as of 2026-09-13; the module's own "at least 3 named sections" instruction is a stricter, but
directly compatible, version of the same mechanic Microsoft's own unit demonstrates.

**Claim 3 - Pages are shared via Share, then Page link.** Confirmed as of 2026-09-13 against
Microsoft's own current support documentation, not recalled from memory.

**Named limit, not overclaimed.** All three claims are confirmed against Microsoft's own current
published documentation, not against a live tenant run in this session - this workshop has no live
Copilot access to test any of these mechanics directly, the same limit named on every other
module's product claims.
