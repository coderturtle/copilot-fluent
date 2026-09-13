# Module 04 dry run: check results

*Simulation only. See `README.md` in this directory for what this run does and doesn't prove.*

## Part 1: memory-versus-instructions key, re-verified

Sources fetched live in this session, 2026-09-13:

- Microsoft Learn, "Manage Copilot personalization and memory" (`ms.date: 2026-09-02`, `updated_at:
  2026-09-03T17:37:00Z`) - `learn.microsoft.com/en-us/microsoft-365/copilot/copilot-personalization-memory`.
- Microsoft Support, "Manage Copilot Memory in Microsoft 365 Copilot" -
  `support.microsoft.com/en-us/topic/manage-copilot-memory-in-microsoft-365-copilot-b3231eae-9e60-4b3c-ac58-81fddbe56279`
  (no revision date shown on the page itself).
- Microsoft Support, "Get started with personalizing what Microsoft Copilot remembers" -
  `support.microsoft.com/en-us/topic/get-started-with-personalizing-what-microsoft-copilot-remembers-cba7b79a-c46f-4ca7-b46e-2fa22c563f90`
  (no revision date shown on the page itself).
- Microsoft Support, "Customize how Microsoft Copilot responds to you" -
  `support.microsoft.com/en-us/topic/customize-how-microsoft-copilot-responds-to-you-8b826c0d-eb78-493e-a30d-4490ec1c4b9e`
  (no revision date shown on the page itself).
- Microsoft Support, "Revisit your Microsoft 365 Copilot Chat history" -
  `support.microsoft.com/en-us/topic/revisit-your-microsoft-365-copilot-chat-history-6ea899e3-3bb1-450a-a2ae-220341ac193a`
  (no revision date shown on the page itself; confirms rename/delete/add-to-notebook all live under
  "... More" next to a chat's title).

**Named limit on the dating convention:** only the Learn admin page carries a machine-readable
revision date; the four Support end-user pages do not display one in the fetched content. Per lesson
13, the module README's own wording was checked against this gap and adjusted to say the key was
"checked ... on 2026-09-13" rather than claiming the underlying pages themselves are all dated
"current" as of that day - that stronger claim would only be earned for the one page with a visible
revision stamp, not the other four.

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

4. **"Deleting a specific chat conversation does not delete the memories Copilot already generated
   from that conversation."** TRUE. The Learn page states this exact mechanic: "Deleting a chat
   doesn't delete saved memories that were generated from that chat." Unambiguous, and distinct in
   substance from statement 3 (this is about deleting a *chat*, not toggling the memory *setting*) so
   the two true/false pairs don't collapse into restatements of each other.

**Split confirmed: 1 and 4 true, 2 and 3 false.** No statement is ambiguous or defensible either way,
and no two statements are paraphrases of the same underlying fact (1 is about memory's automatic
source; 4 is about memory's independent lifecycle from chat deletion; 2 and 3 are each a direct
inversion of a distinct true mechanism, not the same false claim twice).

## Part 2: personal-instructions specificity, hand-checked

Two constructed examples, neither drawn from a real learner, and deliberately different from the
module README's own Part 6 illustration (email length) so this check tests the specificity check's
criteria on their own terms rather than re-confirming the one example the module already publishes:

**Specific (should pass):** "When you summarize a meeting for me, list action items as a bulleted
list with the owner's name next to each one, instead of folding them into paragraph text."

Checked against the specificity check's stated bar ("names a concrete behavior Copilot would visibly
do differently on a future response - a format, a length, a tone, a structure"): this names a
structural change (a bulleted list, not paragraphs) and a specific field to include (an owner's name
per item) - both are things a check could point at in an actual meeting summary and say "this bullet
is why that's there." Passes.

**Generic (should fail):** "Understand my work better so you can be more helpful."

Checked against the same bar: this names no format, length, tone, structure, source, or recurring
task. There is no future Copilot output where a check could point to a specific line and say "this
bullet caused that" - "understand my work better" isn't a behavior Copilot performs differently, it's
an outcome with no stated mechanism. Fails, correctly, under the specificity check's own stated
criteria - and the check's per-bullet instruction ("name it and say what's missing, not what a
correct instruction would say instead") means a flagged bullet doesn't get handed a ready-made
replacement, keeping the check about the learner's own job rather than a template to copy (lesson 7).

**Result:** the specificity check's stated criteria correctly separate this run's one constructed
specific instruction from its one constructed generic one, using examples independent of the one the
module README itself already illustrates. This confirms the check's own logic is coherent - it does
not confirm how a live AI grader run would actually score either example, or a real learner's own
list, which remains untested.
