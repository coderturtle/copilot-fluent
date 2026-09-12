---
title: "Scaffold, design, and a review chain that earned its cost twice over"
description: "Copilot Fluent exists now: named, designed, review-panelled, and still zero exercises. The interesting part is how many times this session's own drafts got caught being wrong."
pubDate: 2026-09-12
tags: ["scaffold", "design", "copilot", "ab-730", "review-panel", "ddd"]
---

This workshop is the fifth one this factory has built, and the first for an audience that isn't already comfortable driving a coding agent. `terminal-velocity`, `borrow-native`, `half-life`, and `heartbeat` all assumed a practitioner who lives in git and a terminal. This one assumes someone who lives in Word, Excel, Outlook, and Teams, and has never touched either. That single change broke more of the existing pipeline's assumptions than I expected going in.

## The subject and the anchor

The subject is enterprise Microsoft 365 Copilot: Word, Excel, PowerPoint, Outlook, Teams, plus the Researcher and Analyst agents and in-app no-code agent creation. The curriculum anchor is [AB-730, "Microsoft Certified: AI Business Professional,"](https://learn.microsoft.com/en-us/credentials/certifications/ai-business-professional/) a real, current, no-code Microsoft certification. Same pattern `borrow-native` used with Ardan Labs' Rust certification: anchor to something real and proctored, and commit to personally sitting it once content exists, as dogfooding evidence rather than a marketing claim.

## The gate problem this subject actually has

Every prior workshop had some kind of objective checker: a compiler and linter for Rust, a designed empirical experiment for the LLM-degradation subject, a designed network-fault simulator for distributed systems. A closed SaaS product has none of that. What we ended up with is a two-tier design: a required-output checklist (counts, exact-string matches, closed-set answers - checkable by counting or comparing, never by judgment) plus an AI-graded rubric, where the same product that produces the work also grades it. That second part is a real, named, unaddressed circularity, not something I'm pretending is solved. It's in the design doc as an explicit hypothesis, not a settled fact.

## A three-agent review chain, and what each stage actually caught

Before any of the phased build started, a plan for it went through Fable (a draft), Codex (an adversarial critique with live repo access), and a reconciliation pass that independently re-verified the disputed claims. Every single stage found something real the previous one got wrong. Codex caught that Fable's exam-mechanics claims (a specific price and question count) were fabricated - neither holds up against Microsoft's actual page. Codex's own correction then invented a different, equally wrong price figure of its own, caught only when the reconciliation pass actually re-fetched the live page and found no price published at all. That's the general shape of this whole session: a confident claim survives exactly until someone with tool access bothers to check it. (This paragraph deliberately doesn't repeat any of those specific figures - see `docs/brand.md`'s exam-claim rule for why.)

## Three rounds of doubt-driven development on the design doc itself

Once the design doc existed, it went through three adversarial review cycles (a fresh-context single model plus Codex cross-model, every cycle). Cycle 1 found the biggest structural problem: liability guardrails for the financial-services scenario were stated in one section and never actually wired into the modules most likely to violate them. Cycle 2 found that my own fix for cycle 1 introduced a real arithmetic bug (a coverage count that no longer summed to the right total). Cycle 3 found a Markdown table row I'd broken with an inserted blank line, which would have silently truncated the capstone's own gate description on the published site.

## The Review Panel's most useful finding

Seven independent personas, one of them deliberately re-aimed from its usual "agent-literate practitioner" framing to this workshop's actual audience. The single most severe finding: Module 03, the hard prerequisite for the entire back half of the arc, was gated almost entirely by the learner's own unverified say-so that they'd saved and shared a prompt. Nothing proved the prompt was ever actually run against Copilot. Fixed with a real technique borrowed from Module 01: two actual transcripts, crafted prompt versus a naive one, diffed for a structural element the naive prompt's real output doesn't have.

## The one part that was genuinely fun to build

The recurring scenario is **Kellerman & Castle**, a fictional financial-advisory firm whose entire cast is named after Patrick Swayze film characters, played completely straight through every exercise. It started as an internal joke and almost stayed permanently hidden - the workshop's own Developer Evangelist review persona pointed out that was a wasted hook, since nothing about the actual grading mechanics depends on which names are attached to which role. coderturtle confirmed a one-time reveal after the capstone as the direction; the actual reveal mechanism (a footer credit, a Module 09 postscript, or a dedicated page) isn't built yet.

## What's still open

Module content, fixtures, and grading prompts don't exist yet - that's Coachgremlin's job, run later, one module at a time. The site you're reading this on exists locally but isn't deployed; GitHub Pages enablement and the first real `workflow_dispatch` are explicitly human-confirmed steps, not automatic ones. And there's a real, unresolved maintainer question sitting in `docs/next-actions.md`: nothing yet confirms the person building this workshop actually has the enterprise Copilot tenant access the whole thing assumes.
