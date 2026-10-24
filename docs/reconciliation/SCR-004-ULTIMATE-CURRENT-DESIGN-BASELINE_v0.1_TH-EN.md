# SCR-004 — ULTIMATE CURRENT DESIGN BASELINE v0.1

**Status:** IMPLEMENTED AS RECONCILIATION RECORD / APPROVED DESIGN PRESERVED  
**Date:** 2026-10-23  
**Ticket:** #6  
**Repository implementation status:** NOT IMPLEMENTED

## 1. Purpose / เป้าหมาย

This document records the Owner-approved ULTIMATE design principles so later implementation cannot silently rewrite them. It does **not** create an ULTIMATE Skill package, private repository, entitlement system, or installer access control.

## 2. Approved design modules

### ULTIMATE-001 — EPISTEMIC INTEGRITY & VERIFICATION

Core principle:

> **Confidence is not Confirmation.**

Required claim states:

- `CONFIRMED`
- `STRONG INFERENCE`
- `HYPOTHESIS`
- `UNKNOWN`
- `CONFLICT`

Required behavior:

- Evidence outranks model confidence.
- Unknown remains Unknown until evidence changes it.
- Inference must not silently become Fact.
- Contradicting evidence must be surfaced.
- New evidence may invalidate a previous AI answer.
- Higher decision risk requires stronger evidence.
- High-risk/irreversible action cannot rely on inference alone.

### ULTIMATE Interaction Contract — Internal Orchestration + Visible Checkpoints

Core principle:

> **Think deeply. Report selectively. Never disappear silently.**

The Skill may perform detailed internal orchestration without exposing chain-of-thought. User-visible updates should surface only decision-relevant state changes such as:

- confirmed finding
- unresolved conflict
- material risk
- important assumption dependency
- direction change
- blocker
- next critical action

No fake progress and no verbose dump of internal scratch reasoning.

### ULTIMATE-002 — PROBLEM FRAMING & FAILURE DEFINITION

Required separation:

`Symptom → Observed Failure → Impact → Scope → Failure Boundary → Hypothesis → Root Cause Analysis`

Preserved laws:

- Symptom ≠ Problem ≠ Root Cause.
- Recent Change ≠ automatically Root Cause.
- Expected vs Actual must be defined before permanent fix.
- Find where the system stops working, not only where the user notices it.
- Environment and Version must not be silently mixed.
- Recovery ≠ Fix.
- Service recovery does not prove permanent resolution.
- Downstream symptoms must not replace upstream failure analysis.

## 3. Approved interaction philosophy

ULTIMATE is intended to be deeper internally but simpler externally:

- internal analysis can be multi-step
- user-facing checkpoints stay concise
- certainty language must match evidence
- the Skill should prefer a correct `cannot confirm yet` over confident fabrication

## 4. Current implementation state

| Item | Design status | Repository status |
|---|---|---|
| ULTIMATE-001 | APPROVED DESIGN | NOT IMPLEMENTED |
| Interaction Contract | APPROVED DESIGN | NOT IMPLEMENTED AS SHARED CONTRACT |
| ULTIMATE-002 | APPROVED DESIGN | NOT IMPLEMENTED |
| ULTIMATE-003 — Evidence Acquisition & Diagnostic Strategy | PLANNED | NOT STARTED |
| Private distribution architecture | CONCEPT | NOT IMPLEMENTED |
| Website locked-card behavior | CONCEPT | NOT IMPLEMENTED |
| Entitlement/access control | CONCEPT | NOT IMPLEMENTED |

## 5. Preservation rule

Future work MUST NOT silently change ULTIMATE-001, ULTIMATE-002, or the Interaction Contract. If implementation constraints conflict with these principles, record:

1. existing approved principle
2. new requirement/evidence
3. conflict
4. impact
5. proposed amendment
6. Owner approval requirement

## 6. Result

**SCR-004: PASS.** The approved ULTIMATE design baseline is now represented in the repository reconciliation branch while remaining explicitly separate from implementation authority.
