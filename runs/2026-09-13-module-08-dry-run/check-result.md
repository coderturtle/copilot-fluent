# Hand-check of the presence/absence transcript pair, and product-claim re-verification

*Simulation only. This dry run checks fictional grading logic against a synthetic transcript pair
about a fictional firm's internal playbook; it is not evidence about any real client, account, or
real financial, legal, or accounting matter. Kellerman & Castle operates in no real regulatory regime;
nothing here is calibrated to one.* <!-- brand-lint-ignore: disclaimer naming what this fixture is not, per docs/brand.md's escape hatch for stating a rule by naming the phrase it excludes -->

Unlike Modules 01, 02, and 07, this module's knowledge source is not a withheld grading key - the
playbook fixture is open to the learner from the start, the same shape as Module 06's spreadsheet
fixture, so there's no secret being protected here and this file quotes the real wording directly
(`docs/coachgremlin-authoring-lessons.md` lesson 4 doesn't apply to a fixture that was never hidden in
the first place).

## Part 1: does the presence/absence pair actually separate a grounded answer from an ungrounded one?

| Check | `agent-transcript.md` | `control-transcript.md` |
|---|---|---|
| Contains the exact three section names, in order (Household Snapshot, Open Follow-Ups, Meeting Agenda Draft) | **Present, verbatim** | **Absent** - Copilot names generic categories ("a summary," "outstanding action items," "an agenda") that don't match the fixture's own three names |
| Contains the "at least 2 business days before the meeting" timing rule | **Present, verbatim** | **Absent** - no timing rule stated at all |
| States or implies it doesn't have this specific information | No (answers directly, citing the Playbook) | **Yes** - explicitly says it doesn't have access to the team's own convention and asks for a source |

**Conclusion: the pair does what it needs to.** The grounded transcript reproduces the Playbook's own
exact wording for both the section order and the timing rule; the ungrounded transcript not only fails
to reproduce that wording, it says plainly that it doesn't know it - the most legible possible failure
mode for a learner to check by eye. A learner running this for real should see the same shape: an
agent that quotes its knowledge source, and a plain chat that either guesses generically or admits it
doesn't know.

## Part 2: the honor-system parts of this module, reasoned honestly

This module has three places where nothing checks the learner from outside: the Part A
Agent-Store-or-new-agent reason (presence-checked only, not correctness), the Part D share confirmation
(or its named fallback), and Part C's self-check of the instructions and suggested prompts against
recommendation-flavored language. None of these are grader-checked the way Modules 01, 02, and 07's
hidden-key items are - this module states that plainly rather than implying otherwise. The Part C
self-check specifically is this module's highest-risk honor-system item, since it's the one place
`docs/workshop-design.md` itself names as "not yet executable" by any tooling - resolved here the same
way Modules 05 and 06 resolved theirs: a check the learner runs on their own text, not a script.

**A worked example of Part C, run against this dry run's own worked instructions and suggested
prompts**, to confirm the self-check catches what it's supposed to and doesn't wrongly flag safe
internal-process language:

| Text checked | Reads as internal-only? | Any recommendation-flavored or hype/marketing language? |
|---|---|---|
| Instructions block (Part B) | Yes - explicitly declines client-facing drafting and any "what should a client do" question | None found |
| Suggested prompt 1 ("What's our standard order of sections...") | Yes - asks about the team's own process | None found |
| Suggested prompt 2 ("According to the Playbook, who should I check with if a client's older holdings...") | Yes - asks about the team's own internal routing | None found |
| Suggested prompt 3 ("Who on the team handles a Copilot Page...") | Yes - internal routing question | None found |
| Suggested prompt 4 ("Summarize the Playbook's checklist...") | Yes - asks the agent to summarize its own knowledge source | None found |

All five pass on both checks. None of the four suggested prompts, read individually, could be
answered in a way that drafts something a client would see, and none uses breathless or
promise-the-outcome phrasing - each one's subject is the team's own internal process, not a client's
account or situation. This is what "checked each against the list" should look like in practice, not
just a claim that it happened.

## Part 3: product-claim re-verification

Sources fetched live in this session, 2026-09-13, not recalled:

- Microsoft Learn, "[Build Agents with Agent
  Builder](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-build-agents)"
  (`ms.date` 2026-08-19, `updated_at` 2026-08-19T20:57Z) - confirms the New agent -> template ->
  Configure tab flow, the Name/Instructions/Knowledge/Capabilities/Starter Prompts field set, the
  8,000-character instructions limit, and the 20-knowledge-source limit.
- Microsoft Learn, "[Use the My Company Policy
  template](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-template-my-company-policy)"
  (`ms.date` 2026-05-06, `updated_at` 2026-05-16) - confirms the template's real description and its
  own worked use cases (all HR-policy-flavored, not this module's internal-prep-notes use case - named
  honestly in the module README as a close match, not an exact one).
- Microsoft Learn, "[Agent Store in Microsoft
  Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-agent-store)" (`ms.date`
  2026-04-17, `updated_at` 2026-08-18) - confirms Agent Store's own description and that even a
  prebuilt agent's availability there depends on a prior admin deployment step, not a plain browse-and
  -install action available to any user unconditionally.
- Microsoft Learn, "[Share and manage
  agents](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-share-manage-agents)"
  (`ms.date` 2026-07-21, `updated_at` 2026-08-07) - confirms the Share dialog, its Can-edit/Can-chat
  roles, and, critically for this module's fallback design, the explicit admin-governance note: "If
  sharing options are restricted in your organization, an admin must approve and deploy the agent
  before it's available to other users in the organization."
- Microsoft Learn, "[Manage agents in the Microsoft 365 admin
  center](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps)"
  (`ms.date` 2026-05-18, `updated_at` 2026-08-18) - confirms Researcher is a built-in Copilot Chat tool
  under **Tools** that "will not fall under any agent-related settings" - the basis for this module's
  own correction of an earlier draft's Researcher-as-Agent-Store-example framing.
- Microsoft Learn, "[Agent
  settings](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-settings)" (`ms.date`
  2026-09-03, `updated_at` 2026-09-03T22:39Z) - confirms the specific, named **User access** control
  ("All users" / "Specific users/groups" / "No users," where "no users in the organization can access
  agents") that this module's blocked-tenant fallback is actually built around. An earlier draft of
  this module cited a more general admin-management page's "enabled by default" framing for this
  claim, which was a real citation but didn't name the actual mechanism precisely enough - fixed
  during this module's own DDD pass to cite the specific setting instead.
- Microsoft Learn, "[Build agents in Copilot
  Chat](https://learn.microsoft.com/en-us/training/modules/agents-copilot-chat/)" (`ms.date`
  2026-09-01, `updated_at` 2026-09-03) - Microsoft's own official hands-on material for this same
  outline area; confirmed it targets an instructor-led "Agent in a Day" event and a customer-service
  scenario, neither of which this module repeats.

**Named limit, not overclaimed.** All seven claims are confirmed against Microsoft's own current
published documentation, not against a live tenant run in this session - this workshop has no live
Copilot access to test any of these mechanics directly, the same limit named on every other module's
product claims.

## What this run does NOT prove

- It does not prove a real learner actually builds a real agent, writes instructions and prompts this
  clean, or that a real learner's self-check of their own configuration would be this thorough - the
  worked example above is deliberately clean, not a simulation of every way a real attempt could go
  wrong.
- It does not prove a live AI grader, run against a real agent configuration, would reach the same
  verdict the hand-check in Part 2 reaches - untested, the same honesty this workshop applies to every
  module's AI-graded pass.
- It does not prove Copilot's actual behavior in a live tenant matches Microsoft's published
  documentation beyond what that documentation itself states, or that a real agent built from the My
  Company Policy template against this exact fixture would answer exactly as `agent-transcript.md`
  shows.
- It does not prove the blocked-tenant fallback (pasting instructions and knowledge into a plain chat
  every session) produces answers indistinguishable from a real agent's - only that it produces the
  same kind of checkable transcript this module's gate needs.
