# Module 04 dry run: check results

*Simulation only. This dry run checks fictional checking logic against a fictional firm's conversation
topics and constructed instruction examples; it is not evidence about any real client, account, or
real financial or legal matter. Kellerman & Castle operates in no real regulatory regime; nothing
here is calibrated to one. Reusing this dry run's conversation topics or constructed examples against
real client conversations is a learner's own regulated activity, not something this workshop can
vouch for. See `README.md` in this directory for what this run does and doesn't prove.*

## Part 1: memory-versus-instructions key, re-verified

Sources fetched live in this session, 2026-09-13 (re-fetched a second time during this module's
fix pass, same date, to independently confirm the citation below rather than carry the original
authoring pass's claim forward unchecked - per lesson 13):

- Microsoft Learn, "Manage Copilot personalization and memory" (`ms.date: 2026-09-02T00:00:00.0000000Z`,
  `updated_at: 2026-09-03T17:37:00.0000000Z`) - `learn.microsoft.com/en-us/microsoft-365/copilot/copilot-personalization-memory`.
  **Re-verified live during this fix pass:** both stamps are confirmed still the page's actual current
  revision metadata as of 2026-09-13, not carried over from an earlier, unchecked fetch. The page also
  states custom instructions are applied "in future Copilot conversations," not "every future
  response," and names both a user-level toggle (Settings > Personalization) and an admin-level
  Enhanced personalization control that can stop instructions being applied tenant-wide - the module
  README's statement-2 explanation is worded to match this, not a broader claim.
- Microsoft Support, "Manage Copilot Memory in Microsoft 365 Copilot" -
  `support.microsoft.com/en-us/topic/manage-copilot-memory-in-microsoft-365-copilot-b3231eae-9e60-4b3c-ac58-81fddbe56279`
  (no revision date shown on the page itself).
- Microsoft Support, "Get started with personalizing what Microsoft Copilot remembers" -
  `support.microsoft.com/en-us/topic/get-started-with-personalizing-what-microsoft-copilot-remembers-cba7b79a-c46f-4ca7-b46e-2fa22c563f90`
  (no revision date shown on the page itself).
- Microsoft Support, "Customize how Microsoft Copilot responds to you" -
  `support.microsoft.com/en-us/topic/customize-how-microsoft-copilot-responds-to-you-8b826c0d-eb78-493e-a30d-4490ec1c4b9e`
  (no revision date shown on the page itself; confirms instructions are set via Settings >
  Personalization > Custom instructions > Edit instructions, typed in by the user, not inferred).
- Microsoft Support, "Revisit your Microsoft 365 Copilot Chat history" -
  `support.microsoft.com/en-us/topic/revisit-your-microsoft-365-copilot-chat-history-6ea899e3-3bb1-450a-a2ae-220341ac193a`
  (no revision date shown on the page itself; confirms rename, delete, and "Move to notebook" all
  live under "... More" next to a chat's title - "Move to notebook" is the page's own current wording
  for the notebook option, replacing this dry run's earlier "add to notebook" phrasing).
- Microsoft Support, "Frequently asked questions about Microsoft 365 Copilot Notebooks" and "How
  Microsoft 365 Copilot Notebooks works" (no revision date shown on either page) - confirm a Notebook
  is an AI-powered workspace that grounds Copilot's answers only in the references added to it (not
  the user's whole account), and that a Microsoft 365 Copilot or Copilot Chat license plus a
  SharePoint/OneDrive service plan are both required to create one - unavailability can therefore come
  from licensing/plan gaps or rollout status, not only an admin toggle, which is why the module
  README's fallback section no longer names a single admin-toggle cause.

**Named limit on the dating convention:** only the Learn admin page carries a machine-readable
revision date; the other five Support end-user pages do not display one in the fetched content. Per
lesson 13, the module README's own wording was checked against this gap and adjusted to say the key
was "checked ... on 2026-09-13" rather than claiming the underlying pages themselves are all dated
"current" as of that day - that stronger claim would only be earned for the one page with a visible
revision stamp, not the other five.

Statement-by-statement:

1. **"Memory can include details Copilot inferred from your past conversations, even if you never
   explicitly asked it to remember them."** TRUE. The Learn page states memories "include saved
   memories, details inferred from chat history and custom instructions." The "Get started"
   support page separately names "Chat History Inferences" as Copilot making "inferences about what
   matters to you using previous conversations" - distinct from a memory you explicitly asked it to
   save. Unambiguous.

2. **"Custom instructions are generated automatically from your chat history, the same way memory
   is."** FALSE. This is a direct textual contrast, not just an absence of an automatic-generation
   claim: the "Get started" support page's own verb choice for each mechanism differs by design -
   memory is something Copilot "automatically saves" and "infers," while custom instructions are
   something a user is told to "create" ("create custom instructions that tell Copilot important
   information"). The "Customize how Microsoft Copilot responds to you" page confirms the same active,
   user-driven framing: instructions are set by going to Settings > Personalization > Custom
   instructions > Edit instructions and typing them in yourself. "Create" and "type in yourself" are
   the opposite of "automatically," so this is a clean false rather than a near-miss: it takes the
   automatic half of the memory definition and misapplies it to the explicit half.

3. **"Turning off saved memories in your personalization settings immediately deletes every memory
   Copilot already saved about you."** FALSE. Both the Learn page ("Saved memories are retained until
   the end-user explicitly deletes the saved memory in Settings > Personalization") and the "Manage
   Copilot Memory" support page ("Turning off Copilot Memory doesn't automatically delete already
   saved memories") state the opposite directly. Unambiguous.

4. **"Deleting a specific chat conversation does not delete the saved memories Copilot already
   generated from that conversation."** TRUE, specifically for *saved memories*. The Learn page states
   this exact mechanic: "Deleting a chat doesn't delete saved memories that were generated from that
   chat." The module README's own wording was corrected during this fix pass to say "saved memories"
   rather than "the memories" - Microsoft's real distinction here is between saved memories (survive a
   deleted chat) and Chat History details, a separate, dynamic mechanism the same Learn page describes
   next: "If a user deletes all chats where a piece of information was originally shared or
   referenced, then all traces of that information are deleted from the Chat History details within
   seven days." Stating statement 4 without the word "saved" would make it read as a blanket claim
   about all memory, which is false for chat-history-derived details under that condition - the fix
   makes the true/false boundary land exactly where Microsoft's own documentation draws it. Distinct in
   substance from statement 3 (this is about deleting a *chat*, not toggling the memory *setting*) so
   the two true/false pairs don't collapse into restatements of each other.

**Split confirmed: 1 and 4 true, 2 and 3 false.** No statement is ambiguous or defensible either way,
and no two statements are paraphrases of the same underlying fact (1 is about memory's automatic
source; 4 is about saved memory's independent lifecycle from chat deletion, now precisely scoped to
"saved" so it doesn't overreach into the separate Chat History mechanism; 2 and 3 are each a direct
inversion of a distinct true mechanism, not the same false claim twice).

## Part 2: personal-instructions specificity, hand-checked

The specificity check itself was redesigned during this module's fix pass: the original wording
accepted "a format, a length, a tone, a structure, a source to prefer or avoid, a specific recurring
task" as passing dimensions, but naming one of those *categories* (tone, a task) without any attached
concrete detail could pass a genuinely generic instruction by accident - "use a professional tone for
emails" names "tone," and "handle my expense reports" names a "specific recurring task," without
either one specifying anything Copilot would visibly do differently. The redesigned check now requires
a concrete, checkable detail (an exact length, a named structural element, a named thing to always or
never include, or a task paired with its own specific handling rule), not just a category label. Three
constructed examples, none drawn from a real learner and none reused from the module README's own Part
6 illustration (email length), test the redesigned check on its own terms:

**Specific (should pass):** "When you summarize a meeting for me, list action items as a bulleted
list with the owner's name next to each one, instead of folding them into paragraph text."

Checked against the redesigned bar: this names a structural change (a bulleted list, not paragraphs)
and a specific field to include (an owner's name per item) - both are things a check could point at in
an actual meeting summary and say "this exact section is why that's there." Passes.

**Generic (should fail):** "Understand my work better so you can be more helpful."

Checked against the same bar: this names no length, structure, always/never item, or task-plus-rule.
There is no future Copilot output where a check could point to a specific line and say "this bullet
caused that" - "understand my work better" isn't a behavior Copilot performs differently, it's an
outcome with no stated mechanism. Fails.

**Borderline (should fail, and is the case the redesign specifically targets):** "Use a professional
tone when drafting emails to clients."

This is the case the original rubric wording could have passed by accident: it names a category
("tone") and a recognizable recurring task ("drafting emails to clients"), which the original
"a tone... a specific recurring task" wording listed as passing dimensions on their own. Checked
against the redesigned bar instead: there is no exact word or phrase to point to, no structural
element, and no specific always/never rule attached to the task - "professional" is left completely
undefined, so two different Copilot outputs could both plausibly satisfy or fail this instruction with
no way to tell which. Fails under the redesigned criteria, correctly closing the gap the original
wording left open. The check's per-bullet instruction ("name it and say what's missing, not what a
correct instruction would say instead") means all three flagged or passed bullets are evaluated on
their own terms, not against a template to copy (lesson 7).

**Result:** the redesigned specificity check's stated criteria correctly separate one clearly specific
instruction, one clearly generic one, and - the case that matters most here - one instruction that
would have passed the *original* wording's category-based dimensions without naming any real
specificity. This confirms the redesigned check's own logic closes the gap the cross-model review
found; it does not confirm how a live AI grader run would actually score any of these examples, or a
real learner's own list, which remains untested.
