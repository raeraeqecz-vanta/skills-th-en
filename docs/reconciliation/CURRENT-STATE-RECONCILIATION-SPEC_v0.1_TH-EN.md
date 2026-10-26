# SKILL.md — CURRENT STATE RECONCILIATION SPEC v0.1

**Status:** APPROVED / IMPLEMENTATION AUTHORIZED FOR SCR-001–SCR-008  
**Approved by:** Owner  
**Implementation branch:** `codex/current-state-reconciliation-v0.1`

## Objective / เป้าหมาย

สร้าง Current State Baseline เดียวสำหรับ `raeraeqecz-vanta/skills-th-en` โดยแยก Main Baseline, Candidate, Approved Design, Unverified, Conflict และ Not Implemented อย่างชัดเจน เพื่อป้องกันงานซ้ำ การใช้ข้อมูลเก่า และการยกระดับ Candidate เป็น Baseline โดยไม่มีสิทธิ์

## Authority order

1. Latest explicit Owner decision
2. Approved/Frozen governance or baseline
3. Verified current repository/runtime/test evidence
4. Approved design not yet implemented
5. Open PR / candidate branch
6. Draft proposal
7. Historical conversation / assumption

## Required workstreams

- WS-01 Public Skill System
- WS-02 Website Source Candidate
- WS-03 Design / UI-UX Skill Candidate
- WS-04 ULTIMATE Skill Design
- WS-05 Codex Cloud Skill Integration

## Required classifications

`CONFIRMED`, `APPROVED`, `FROZEN`, `CANDIDATE`, `DRAFT`, `UNVERIFIED`, `CONFLICT`, `SUPERSEDED`, `NOT IMPLEMENTED`.

## Required deliverables

- Current State Matrix
- Conflict Register
- Duplication Matrix
- Authority Map
- Dependency Map
- Recommended Work Order

## Preservation rules

- Do not silently alter ULTIMATE-001, ULTIMATE-002, or the ULTIMATE Interaction Contract.
- Keep Website PR #1 and UI/UX PR #2 as separate approval boundaries.
- Do not treat a technical mergeable state as Owner merge authorization.
- Do not mix Environment or Version evidence silently.

## Mutation boundary for this implementation

Authorized: reconciliation documentation, dedicated branch, GitHub tickets, review artifacts.

Not authorized by this Spec: merge to `main`, Website release/deployment, production change, Codex environment rollout, or ULTIMATE restricted-distribution implementation.

## Acceptance criteria

1. Current `main` baseline verified with evidence.
2. Open candidates separated from Main.
3. Approved decisions absent from repository marked as implementation gaps.
4. Conflicts recorded explicitly.
5. ULTIMATE approved principles preserved.
6. Website and UI/UX candidates keep separate approval gates.
7. Recommended work order derived from dependency/risk.
8. No out-of-scope runtime/production mutation.

## Ticket mapping

- SCR-001 → Issue #3
- SCR-002 → Issue #4
- SCR-003 → Issue #5
- SCR-004 → Issue #6
- SCR-005 → Issue #7
- SCR-006 → Issue #8
- SCR-007 → Issue #9
- SCR-008 → Issue #10

Implementation evidence is stored in the corresponding `docs/reconciliation/SCR-*` files.
