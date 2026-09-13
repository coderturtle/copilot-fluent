# Modules

Copilot Fluent's arc is designed to map onto [AB-730](https://learn.microsoft.com/en-us/credentials/certifications/ai-business-professional/)'s own published skills outline (3 domains, 30 leaf bullets), inside one continuing scenario: **Kellerman & Castle**, a boutique financial-advisory firm. Work through the modules in order - Module 03 is a hard prerequisite for Modules 04 through 08, since every later exercise assumes the prompt-construction skill it teaches.

**Hands-on by design, not passive text.** No module here completes by reading it. Every module states a required gate before content exists - an artifact you produce, checked two ways. Every gate also has a stated **takeaway**: you keep something reusable, not just proof you did the exercise.

> **Content status: Modules 01 through 08 are authored and ready to try, Module 08 the newest.** Each has a real exercise and a real gate, and its checking logic has been checked before publishing (see each module's own page for exactly what that check does and doesn't prove). Module 04's exercise runs against your own Copilot conversations rather than a fixture file, since that's the part of the workshop where there's nothing to fixture - see its own page for how that works. Module 09 remains **skeleton only**: it has a decided question, arc position, gate design, and takeaway shape - see `docs/workshop-design.md` for the full design, hardened through 3 rounds of adversarial review and a 7-persona Workshop Review Panel pass - but no authored exercise, fixture, or grading prompt yet. The workshop team is writing it next.

## The gate, in plain terms

Two checks, every module:

| Tier | What it is |
|---|---|
| **Tier 1 - required-output checklist** | A short list of properties your submitted work must have: specific data present, a word count, a matching figure, a count of items found. Checkable by counting, searching, or comparing - never a subjective "is this good" call. Some items you can check yourself; a few (Modules 01, 02, 07) compare against an answer key kept out of sight until you've committed to your own attempt in writing - an honor-system reveal, not a hidden key with no way to ever check yourself - so finding the right answer first is real work, not a lookup. |
| **Tier 2 - AI-graded rubric** | You paste your work against a supplied grading prompt and get pass/fail plus feedback, inside Copilot itself. This is a new idea for this workshop and untested against a real learner yet - named honestly, not oversold. |

Full design, including exactly what each tier can and can't prove: [`docs/workshop-design.md`](../docs/workshop-design.md) §8.

## The arc

Rough time estimates below are exactly that - estimates, not commitments. They're judgment calls based on each module's planned or, for Modules 01-02, actually-authored exercises (see the status note above), expected to take roughly this long. Budget roughly 7-9 hours total across all nine modules, spread across multiple sessions - this isn't designed to be done in one sitting.

| # | Module | Hard prerequisite | The question it answers | Estimated time* |
|---|---|---|---|---|
| 01 | [Starting at Kellerman & Castle](01-starting-at-kellerman-and-castle/README.md) | none | How does Copilot's response change when it's grounded in your actual work content, and when should you reach for a chat versus an agent? | ~30-45 min |
| 02 | [Trust, But Verify](02-trust-but-verify/README.md) | 01 | Given a Copilot output riddled with planted errors, can you find every one and defend your correction? | ~45-60 min |
| 03 | [The Anatomy of a Working Prompt](03-anatomy-of-a-working-prompt/README.md) | none (hard prerequisite for 04-08) | What turns a vague ask into a prompt Copilot can act on well, and how do you make that prompt reusable? | ~45-60 min |
| 04 | [Conversations, Notebooks, and Memory](04-conversations-notebooks-and-memory/README.md) | 03 | How do you keep months of Copilot conversations findable, and teach it how you like things done? | ~30-45 min |
| 05 | [Drafting in Word and Outlook](05-drafting-in-word-and-outlook/README.md) | 03 | Starting from someone else's messy document, how fast can you produce a client-ready letter and an executive summary - without it reading as investment advice? | ~45-60 min |
| 06 | [Analysis Across Apps: Excel to PowerPoint](06-analysis-across-apps/README.md) | 03 | Given raw client portfolio numbers, can you produce a deck whose headline-numbers slide traces entirely to real cells - as pure reporting, not recommendation? | ~45-60 min |
| 07 | [Meetings and Pages in Teams](07-meetings-and-pages-in-teams/README.md) | 03 | Coming out of a client meeting, can you produce a recap that captures every real action item and a Page a colleague could pick up cold? | ~30-45 min |
| 08 | [Your First Agent](08-your-first-agent/README.md) | 03 | When is a plain chat not enough, and can you configure an agent that answers a test question using its configured knowledge? | ~45-60 min |
| 09 | [Synthesis Capstone](09-synthesis-capstone/README.md) | all of 01-08 | Assigned Molly's full quarterly review end-to-end, can you produce every required artifact plus something that couldn't be assembled from Modules 01-08's already-submitted work alone? | ~90-120 min (the capstone - clearly the longest sitting, plan a dedicated block) |

*Estimates only, not commitments - see the note above the table.

Full per-module AB-730 bullet mapping, gate design, and coverage matrix: [`docs/workshop-design.md`](../docs/workshop-design.md) §7.

## What you keep

Each module's gate produces a takeaway: a personal, reusable set of prompts for that part of your work.

| # | Module | Takeaway |
|---|---|---|
| 01 | Starting at Kellerman & Castle | Grounding & Chat-vs-Agent prompt pack - the pack's spine |
| 02 | Trust, But Verify | Verification-checklist prompt pack |
| 03 | The Anatomy of a Working Prompt | Core prompt template - the spine every later pack extends |
| 04 | Conversations, Notebooks, and Memory | Conversation-hygiene + personal-instructions pack |
| 05 | Drafting in Word and Outlook | Word/Outlook drafting pack |
| 06 | Analysis Across Apps | Excel/PowerPoint analysis pack |
| 07 | Meetings and Pages in Teams | Teams/meetings pack |
| 08 | Your First Agent | Agent-instructions template pack |
| 09 | Synthesis Capstone | The assembled full personal prompt pack, combining every prior module's pack into one |

## A note on the scenario

Kellerman & Castle is a fictional firm. Every exercise, prompt, and example output in this workshop is simulated: no real client, no real portfolio, no real financial advice, ever - see `docs/brand.md`'s liability guardrails if you're curious why that's stated this explicitly.
