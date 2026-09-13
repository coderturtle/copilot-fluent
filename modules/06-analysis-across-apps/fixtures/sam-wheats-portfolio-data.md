# Sam Wheat's quarterly portfolio data pull

*Simulation only. Kellerman & Castle is a fictional firm built for this workshop, operating in no
real regulatory regime; nothing here is calibrated to one. Every client name, fund name, value, and
return figure below is invented for this workshop. Nothing in this document describes a real client,
a real account, or real financial, legal, or tax advice.* <!-- brand-lint-ignore: disclaimer naming what this fixture is not, per docs/brand.md's escape hatch for stating a rule by naming the phrase it excludes -->

*This is a workshop exercise fixture, written against fictional data for this exercise only. Reusing
this format, or the analysis prompts built around it, against a real client's real data is your own
regulated activity, not something this workshop can vouch for.* <!-- brand-lint-ignore: disclaimer naming what this fixture is not, per docs/brand.md's escape hatch for stating a rule by naming the phrase it excludes -->

---

Pulled by Sam Wheat from the firm's internal performance ledger, last fiscal year, all four quarters
closed. This is a plain historical record - ending values and the funds' own quarterly returns, plus
each fund's most recent allocation split. Nothing below says what anyone should do about any of it;
that's on purpose. Client references below are internal working labels only, not account numbers.

Two tables. Copy each into its own sheet in a new spreadsheet (or import as two CSVs) before you
attach it anywhere - that's what makes this genuinely Excel-shaped rather than a document to read.

## Table 1: ending values and quarterly returns, by client and fund

A quarterly return is the fund's own investment return for that quarter, the same figure for every
client holding that fund - a pooled fund's return doesn't vary by investor. Ending Value is that
client's own position in that fund at quarter's end, which reflects both the fund's return and any
net contribution or withdrawal that client made that quarter - the two columns are related but Ending
Value is never a pure recalculation of Return %, so don't expect one to derive the other exactly.
"All funds (portfolio total)" rows are a client's own combined ending value across every fund they
hold that quarter, exactly as recorded in the ledger - not a sum you need to (or should) recompute
yourself.

| Row ID | Client | Fund | Quarter | Ending Value (USD) | Quarterly Return (%) |
|---|---|---|---|---|---|
| R1 | Molly Jensen | Kellerman Growth Fund | Q1 | $412,300 | +3.1% |
| R2 | Molly Jensen | Kellerman Growth Fund | Q2 | $427,850 | +3.8% |
| R3 | Molly Jensen | Kellerman Growth Fund | Q3 | $419,900 | -1.9% |
| R4 | Molly Jensen | Kellerman Growth Fund | Q4 | $441,675 | +5.1% |
| R5 | Molly Jensen | Castle Income Fund | Q1 | $198,400 | +1.2% |
| R6 | Molly Jensen | Castle Income Fund | Q2 | $200,850 | +1.2% |
| R7 | Molly Jensen | Castle Income Fund | Q3 | $202,300 | +0.7% |
| R8 | Molly Jensen | Castle Income Fund | Q4 | $205,150 | +1.4% |
| R9 | Molly Jensen | Legacy Balanced Fund | Q1 | $86,200 | +4.5% |
| R10 | Molly Jensen | Legacy Balanced Fund | Q2 | $88,750 | +3.0% |
| R11 | Molly Jensen | Legacy Balanced Fund | Q3 | $87,900 | -1.0% |
| R12 | Molly Jensen | Legacy Balanced Fund | Q4 | $91,225 | +3.8% |
| R13 | Molly Jensen | All funds (portfolio total) | Q1 | $696,900 | - |
| R14 | Molly Jensen | All funds (portfolio total) | Q2 | $717,450 | - |
| R15 | Molly Jensen | All funds (portfolio total) | Q3 | $710,100 | - |
| R16 | Molly Jensen | All funds (portfolio total) | Q4 | $738,050 | - |
| R17 | Farah Nasser | Kellerman Growth Fund | Q1 | $155,000 | +3.1% |
| R18 | Farah Nasser | Kellerman Growth Fund | Q2 | $160,890 | +3.8% |
| R19 | Farah Nasser | Kellerman Growth Fund | Q3 | $157,833 | -1.9% |
| R20 | Farah Nasser | Kellerman Growth Fund | Q4 | $165,882 | +5.1% |
| R21 | Dario Esposito | Castle Income Fund | Q1 | $220,000 | +1.2% |
| R22 | Dario Esposito | Castle Income Fund | Q2 | $222,640 | +1.2% |
| R23 | Dario Esposito | Castle Income Fund | Q3 | $224,198 | +0.7% |
| R24 | Dario Esposito | Castle Income Fund | Q4 | $227,337 | +1.4% |

There is no "portfolio total return %" row for anyone, in any quarter. Blending three funds' returns
into one combined percentage takes a weighted calculation the ledger doesn't do for you - if you want
that number, you'd have to compute it yourself, and a number you computed yourself is not the same
as a number this fixture states.

## Table 2: fund allocation, most recent rebalancing

Allocation is a property of the fund itself, not of any one client - every client holding a given
fund has the same split. These three figures match Wade Garrett's own internal fund note (a
different module's fixture, same three fund vehicles), since it's the same underlying funds.

| Row ID | Fund | Growth-oriented allocation (%) | Income-oriented allocation (%) | Cash allocation (%) | As of |
|---|---|---|---|---|---|
| A1 | Kellerman Growth Fund | 92% | 0% | 8% | Last quarter's rebalancing (Q4) |
| A2 | Castle Income Fund | 0% | 92% | 8% | Last quarter's rebalancing (Q4) |
| A3 | Legacy Balanced Fund | 55% | 40% | 5% | Last quarter's rebalancing (Q4) |

Sam
