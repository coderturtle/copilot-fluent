# Synthetic transcript - naive prompt (illustrative, not a captured session)

*Simulation only. Every client and detail below is fictional, built for this workshop. Nothing here
describes a real client, a real account, or real financial, legal, or tax advice. Kellerman &
Castle operates in no real regulatory regime; nothing here is calibrated to one.*

**Setup (synthetic, not a real captured session):** a second, separate new Copilot chat, with the
same two fixture files, `fixtures/monday-client-roster.md` and `fixtures/status-note-style-guide.md`,
attached, then the module's supplied naive prompt sent as the first message.

**Prompt sent (the module's own supplied naive prompt, word for word):**

> Hey, can you help me put my Monday update together? Just let me know what's going on with my
> clients this week.

**Copilot's response (synthetic - a reasonable, organized answer that still doesn't happen to use
any of the three required header phrases, which is the harder and more realistic case to check than
a flatly unhelpful one):**

> Sure, here's a quick rundown for this week:
>
> - Farah Nasser has her regular quarterly check-in Tuesday at 10am, nothing else needed.
> - Owen Kowalczyk emailed about moving his automatic contribution date up two weeks for a payroll
>   change; probably worth a quick decision from Johnny since it changes a standing instruction.
> - The Bellweather Family Trust had an address mismatch between two systems that's already been
>   sent over to Dalton's team.
> - Dario Esposito's annual review meeting is Thursday at 2pm.
> - Lena Pruitt asked to update her mailing address, which is also already with Dalton's team
>   pending identity verification.
>
> Let me know if you'd like me to draft anything for these.

**Header check (see `check-result.md`):** none of the three required header phrases, "Meetings This
Week," "Needs Johnny's Decision," or "Items to Route to Dalton," appear anywhere in this response -
the same five facts are present, organized as one flat list by client rather than grouped under the
style guide's three named sections, since the naive prompt never asked for that structure.
