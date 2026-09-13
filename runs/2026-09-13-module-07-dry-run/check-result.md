# Hand-check of both synthetic recaps against the action-items key

*Simulation only. This dry run checks fictional grading logic against synthetic recaps about a
fictional client and a fictional firm; it is not evidence about any real client, account, or real
financial, legal, or accounting matter. Kellerman & Castle operates in no real regulatory regime;
nothing here is calibrated to one. Reusing this format against a real client's real meeting is your
own regulated activity, not something this workshop can vouch for.*

**Fixed during this module's own cross-model review pass, two ways.** First, `good-recap.md` and
`naive-recap.md` now contain real (though still fictional) text instead of `[PLACEHOLDER-*]`
tokens, so the match/fail results below are actually demonstrated by running the check, not
asserted on the check's behalf (see both files' own notes). Second, this file itself now describes
outcomes abstractly - by count and pattern, not by naming which real owner, deliverable, or decoy
produced which result, and without giving this module's internal reference key's own file path in a
form a learner could navigate to. The two recap files sit in this same directory and do contain the
real text they're checked against (that's what makes the check real); this file is written so that
reading it alone, without opening either recap file, doesn't hand over who committed to what.

Checked against this module's own internal, pre-registered reference key (not linked from any
learner-facing page) and the learner-facing transcript fixture.

## Part 1: the exact-string check on the 5 real action items

Of the 5 required exact-string action items:

- **`good-recap.md`: 5 of 5 exact matches.** Every required phrase appears verbatim, owner named as
  the phrase's own subject.
- **`naive-recap.md`: 3 of 5 exact matches.** One further item is present but paraphrased instead of
  matching the required wording (it names an owner and an action but not the specific date the key
  requires, so it fails the exact-string check even though a human reader would recognize the same
  underlying commitment). The remaining item is dropped entirely - not mentioned anywhere in the
  recap, under any wording.

## Part 2: the 3 decoys

Of the 3 named decoy non-commitments in the transcript:

- **`good-recap.md` excludes all 3 correctly.** One of the three - an open-ended intention with no
  date attached - is explicitly carried into a "not an action item, but worth noting on the Page's
  open-items section" line instead of the dated action-item list, which is the correct handling per
  this module's own published carve-out for undated open items (see the module README's "Worth
  checking specifically" section, which states this rule directly to the learner).
- **`naive-recap.md` excludes 2 of 3, but promotes the third - the same open-ended, undated one - to
  a fabricated action item with an invented deadline that appears nowhere in the source
  transcript.** That's a distinct failure mode from simply missing something: inventing a
  commitment that was never made, with false specificity attached, rather than correctly noting it
  as open with no date.

## Conclusion

**The exact-string-plus-decoy check correctly separates a recap that read the transcript closely
from one that got most of it right but cut three distinct kinds of corners: a vague deadline where
an exact one was available, a fully dropped item, and a fabricated deadline attached to something
that was never actually committed to.** That the naive recap still gets a majority of the 5 items
exactly right and correctly excludes most of the 3 decoys is itself useful: this isn't a check that
only catches a recap that tried nothing, and it confirms the fabricated-deadline failure mode is
distinguishable from the missing-item failure mode rather than both collapsing into an
undifferentiated "fail."

## Part 3: the honor-system Page-sharing step, reasoned honestly

Unlike the recap, this module's Page-building-and-sharing step has no fixture-backed mechanical
check behind it - the module README says so directly, and this dry run doesn't pretend otherwise.
There is nothing to hand-verify here beyond confirming the instruction itself is followable: "at
least 3 named sections, then share the Page link" is a concrete, checkable-by-the-learner-themselves
instruction (a learner can count their own sections, name them concretely, and confirm they clicked
Share), even though nothing in this workshop can verify from the outside that either step actually
happened. This matches `docs/coachgremlin-authoring-lessons.md` lesson 8's standard: the module
README states this limit plainly rather than implying the learner's own say-so proves more than
their own honesty.

## Part 4: product-claim re-verification

Sources fetched live in this session, 2026-09-13, not recalled:

- Microsoft Learn, "[Streamline meeting preparation and follow ups with Copilot](https://learn.microsoft.com/en-us/training/modules/manage-meetings-collaboration/2-streamline-meeting-prep)"
  (unit 2 of "Manage meetings and collaboration using Microsoft Copilot," `ms.date` 2026-08-21,
  `updated_at` 2026-08-26T17:13:00Z) - confirms **Intelligent recap** (the Recap tab's AI summary)
  produces AI-generated notes and tasks "built from the transcript... not paraphrased from memory,"
  available "for scheduled, instant, and ad-hoc meetings when a transcript exists," and confirms a
  real prompt pattern for listing action items from a meeting transcript.
- Microsoft Learn, "[Data, privacy, and security for intelligent recap in Teams Premium](https://learn.microsoft.com/en-us/microsoftteams/privacy/intelligent-recap)"
  (`updated_at` 2026-08-05T15:16:00Z) - its own content-sourcing table confirms AI-generated notes
  and tasks are created specifically from the meeting transcript, while other parts of the same
  recap (auto-generated chapters/topics, some timeline markers) are created from the transcript plus
  the meeting's attendance report and PowerPoint Live content, not the transcript alone. An earlier
  version of this file misattributed this specific fact to the admin prerequisites page below,
  which does not itself contain either term - corrected here to cite the page that actually states it.
- Microsoft Learn, "[Intelligent recap for Teams calls, meetings, and events](https://learn.microsoft.com/en-us/microsoftteams/intelligent-recap-calls-meetings)"
  (admin documentation, `ms.date` 2026-05-07, `updated_at` 2026-08-18T22:08:00Z) - confirms licensing
  ("a Teams Premium license or a Microsoft Copilot license," the source's own exact wording) and
  policy (transcription, and recording for the full experience) prerequisites, that webinar/town hall
  attendees don't get intelligent recap at all (organizers/presenters only), and that multilingual
  recap translation is a public-preview feature covering a specific, smaller set of languages.
- Microsoft Learn, "[Enhance collaboration with Copilot Chat, Pages, and Notebooks](https://learn.microsoft.com/en-us/training/modules/manage-meetings-collaboration/3-enhance-collaboration-chat-pages-notebooks)"
  (unit 3 of the same training module, `ms.date` 2026-08-21, `updated_at` 2026-08-26T17:13:00Z) -
  confirms Copilot Pages is created via "Edit in Pages" under any Copilot response, described as "a
  shared, editable canvas," expandable into named sections (the unit's own example names objectives,
  milestones, stakeholder roles, and open questions), and confirms Pages persist and are reachable
  from a dedicated **Pages** tab.
- Microsoft Support, "[Share a Microsoft Copilot Page](https://support.microsoft.com/en-us/microsoft-365-copilot/share-a-microsoft-365-copilot-page)" -
  checked directly on 2026-09-13; this is the page's own current title (an earlier version of this
  file cited it as "Share a Microsoft 365 Copilot Page," which no longer matches the page's own
  heading). No visible last-updated date on the page, so this module's README says "checked on
  2026-09-13" per `docs/coachgremlin-authoring-lessons.md` lesson 13, not an invented revision date.
  Confirms sharing works via **Share -> Page link**, which a recipient can open independently.

**Claim 1 - Intelligent recap's AI-generated notes and tasks are transcript-grounded, but the
feature as a whole draws on more than the transcript, and is gated by licensing and policy.**
Confirmed and re-scoped as of 2026-09-13: the module README no longer implies intelligent recap as a
whole is transcript-only, or that it's available with no configuration - it names the licensing,
policy, and meeting/event-type restrictions directly, while noting this exercise's own supplied
transcript fixture doesn't depend on any of that configuration.

**Claim 2 - Copilot Pages is created from a response and expanded into named sections.** Confirmed
as of 2026-09-13; the module's own "at least 3 named sections" instruction is a stricter, but
directly compatible, version of the same mechanic Microsoft's own unit demonstrates.

**Claim 3 - Pages are shared via Share, then Page link.** Confirmed as of 2026-09-13 against
Microsoft's own current support documentation, not recalled from memory, and the citation now uses
that page's actual current title rather than a stale one.

**Named limit, not overclaimed.** All claims above are confirmed against Microsoft's own current
published documentation, not against a live tenant run in this session - this workshop has no live
Copilot access to test any of these mechanics directly, the same limit named on every other
module's product claims.
