# Synthetic transcript - naive prompt, style guide attached anyway (the near-miss case)

*Simulation only. Every client and detail below is fictional, built for this workshop. Nothing here
describes a real client, a real account, or real financial, legal, or accounting advice. Kellerman &
Castle operates in no real regulatory regime; nothing here is calibrated to one.*

**What this file is for:** this is not a transcript the module asks a learner to produce. It exists
only to test a failure mode the module's Part 2 instructions are designed to prevent: what happens if
the naive prompt is run in a chat where the style guide is attached anyway, alongside the roster,
instead of being left out as Part 2 now specifies. If this near-miss can plausibly produce a
false-positive header match, that's the reason the module tells the learner not to attach the style
guide to the naive run - not an assumption, a constructed test of it. See `check-result.md`, Part 1.

**Setup (synthetic, not a real captured session):** a chat with *both* fixture files attached -
`fixtures/monday-client-roster.md` and `fixtures/status-note-style-guide.md` - then the module's
supplied naive prompt sent as the first message, word for word, exactly as in `naive-transcript.md`.
The only difference from `naive-transcript.md` is this one extra attachment.

**Prompt sent (the module's own supplied naive prompt, word for word, unchanged):**

> Hey, can you help me put my Monday update together? Just let me know what's going on with my
> clients this week.

**Copilot's response (synthetic - constructed to show a plausible, not guaranteed, way this near-miss
could go wrong):**

> Sure - I pulled this together from your roster, organized the way your team's status note
> template usually does it:
>
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
>
> Let me know if you'd like this in a different format.

**Header check (see `check-result.md`):** all three required header phrases, "Meetings This Week,"
"Needs Johnny's Decision," and "Items to Route to Dalton," appear in this response - even though the
prompt that produced it never asked for a specific structure, named either file, or requested those
section names. The only reason they showed up is that the style guide was sitting in the same chat
for Copilot to draw its own organization from. A learner who ran this exact near-miss and then
compared it against a crafted-prompt transcript would see the same header match on both sides and
have no way to tell, from that match alone, whether their crafted prompt did anything at all.
