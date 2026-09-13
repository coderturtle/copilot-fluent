# Synthetic transcript - crafted prompt (illustrative, not a captured session)

*Simulation only. Every client and detail below is fictional, built for this workshop. Nothing here
describes a real client, a real account, or real financial, legal, or tax advice. Kellerman &
Castle operates in no real regulatory regime; nothing here is calibrated to one.*

**Setup (synthetic, not a real captured session):** a new Copilot chat, with both
`fixtures/monday-client-roster.md` and `fixtures/status-note-style-guide.md` attached, then the
prompt below sent as the first message.

**Prompt sent (one constructed example of a conforming Role/Task/Format/Constraint prompt - not the
one and only correct wording):**

> Role: You're an operations assistant helping Johnny Castle, a senior advisor at Kellerman &
> Castle, get ready for his Monday morning calls.
> Task: Using monday-client-roster.md and status-note-style-guide.md, draft this week's status
> note for Johnny.
> Format: Structure the note under exactly these three headings, in this order, and leave a heading
> out entirely if nothing belongs under it: Meetings This Week, Needs Johnny's Decision, Items to
> Route to Dalton. One line per client under whichever heading applies.
> Constraint: Use only clients and details that appear in monday-client-roster.md. Nothing in the
> note should tell anyone what to do with a specific position, and this is a simulation-only
> internal note, not financial or legal advice.

**Copilot's response (synthetic):**

> **Meetings This Week**
> - Farah Nasser: Tuesday at 10:00 AM, routine quarterly check-in.
> - Dario Esposito: Thursday at 2:00 PM, annual review meeting.
>
> **Needs Johnny's Decision**
> - Owen Kowalczyk: asked whether his standing automatic contribution date can move up two weeks to
>   match a payroll schedule change. Needs Johnny's sign-off before the standing instruction
>   changes.
>
> **Items to Route to Dalton**
> - The Bellweather Family Trust: an address mismatch between two internal systems was flagged and
>   already sent to Dalton's team for a data-verification follow-up.
> - Lena Pruitt: requested a mailing-address update; already routed to Dalton's team to confirm the
>   identity-verification step first.

**Header check (see `check-result.md`):** all three required header phrases appear verbatim -
"Meetings This Week," "Needs Johnny's Decision," and "Items to Route to Dalton."
