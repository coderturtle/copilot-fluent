# Sam Wheat's Q3 2027 data pull

*Simulation only. Kellerman & Castle is a fictional firm built for this workshop, operating in no
real regulatory regime; nothing here is calibrated to one. Every client name, fund name, value, and
return figure below is invented for this workshop. Nothing in this document describes a real
client, a real account, or real financial or legal advice.*

*This is a workshop exercise fixture, written against fictional data for this exercise only.
Reusing this format, or the analysis prompts built around it, against a real client's real data is
your own regulated activity, not something this workshop can vouch for.* <!-- brand-lint-ignore: disclaimer naming what this fixture is not, per docs/brand.md's escape hatch for stating a rule by naming the phrase it excludes -->

---

Pulled by Sam Wheat from the firm's internal performance ledger mid-way through the current quarter,
fiscal year 2027's third quarter (figures current as of this pull, not a final quarter-end close).
This is a plain historical record for this one quarter only, not
the full-year pull Sam ran for Molly's fiscal year 2026 review - ending values and the funds' own
quarterly returns, plus each fund's most recent allocation split. Nothing below says what anyone
should do about any of it; that's on purpose. Client references below are internal working labels
only, not account numbers.

Two tables, the same shape as every prior quarterly pull. Copy each into its own separate file - two
workbooks, or two CSVs - not two sheets in one workbook, before you attach them anywhere, the same
separation this workshop's earlier Excel-to-PowerPoint exercise used and for the same reason: it's
what makes this genuinely two distinct files for the Analyst agent to reason across.

## Table 1: Q3 2027 ending values and quarterly returns, by client and fund

A quarterly return is the fund's own investment return for that quarter, the same figure for every
client holding that fund - a pooled fund's return doesn't vary by investor. Ending Value is that
client's own position in that fund at quarter's end, which reflects both the fund's return and any
net contribution or withdrawal that client made that quarter - the two columns are related but
Ending Value is never a pure recalculation of Return %, so don't expect one to derive the other
exactly. The "All funds (portfolio total)" row is a client's own combined ending value across every
fund they hold that quarter, exactly as recorded in the ledger - not a sum you need to (or should)
recompute yourself.

| Row ID | Client | Fund | Quarter | Ending Value (USD) | Quarterly Return (%) |
|---|---|---|---|---|---|
| Q27-1 | Molly Jensen | Kellerman Growth Fund | Q3 2027 | $483,920 | +2.7% |
| Q27-2 | Molly Jensen | Castle Income Fund | Q3 2027 | $214,600 | +1.1% |
| Q27-3 | Molly Jensen | Legacy Balanced Fund | Q3 2027 | $95,780 | +2.2% |
| Q27-4 | Molly Jensen | All funds (portfolio total) | Q3 2027 | $794,300 | - |
| Q27-5 | Bodhi | Castle Income Fund | Q3 2027 | $146,900 | +1.1% |
| Q27-6 | Bodhi | Legacy Balanced Fund | Q3 2027 | $52,340 | +2.2% |
| Q27-7 | Bodhi | All funds (portfolio total) | Q3 2027 | $199,240 | - |

There is no "portfolio total return %" row for anyone, in any quarter. Blending more than one fund's
returns into one combined percentage takes a weighted calculation the ledger doesn't do for you - if
you want that number, you'd have to compute it yourself, and a number you computed yourself is not
the same as a number this fixture states.

Bodhi's rows are on the same page as Molly's for the same reason Farah Nasser's and Dario Esposito's
were on an earlier quarterly pull: a real client-facing analysis has more than one account in the
file, and pulling the right client's own rows without mixing in someone else's is part of the actual
job, not incidental clutter.

## Table 2: fund allocation, Q3 2027's rebalancing

Allocation is a property of the fund itself, not of any one client - every client holding a given
fund has the same split. These figures reflect Q3 2027's rebalancing, which is not the same
rebalancing an earlier quarterly pull's allocation table recorded - allocations drift a little
between rebalancings, the same way a fund's holdings do in the real world.

| Row ID | Fund | Growth-oriented allocation (%) | Income-oriented allocation (%) | Cash allocation (%) | As of |
|---|---|---|---|---|---|
| Q27-A1 | Kellerman Growth Fund | 89% | 3% | 8% | Q3 2027's rebalancing |
| Q27-A2 | Castle Income Fund | 0% | 91% | 9% | Q3 2027's rebalancing |
| Q27-A3 | Legacy Balanced Fund | 54% | 41% | 5% | Q3 2027's rebalancing |

Sam
