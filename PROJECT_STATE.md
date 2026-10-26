# PROJECT_STATE.md — SKILL Current Execution State

**Project:** SKILL / VANTA Skills  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**State Type:** Mutable execution snapshot  
**Last Verified:** 2026-10-26 (Asia/Bangkok)  
**Status:** CANONICAL CONTEXT FOUNDATION ACTIVE / POST-MERGE RECONCILED

> This file is a recovery snapshot, not a permanent truth. Re-verify dynamic facts before execution-critical decisions.

## 1. Canonical Repository State / สถานะ Canonical

- Repository: `raeraeqecz-vanta/skills-th-en`
- Default branch: `main`
- Canonical merge anchor for Project Execution Context Foundation v0.1: `41e804533610282dc0a3e1bd3b47c8c5b135ca0e`
- PR #13 is merged into `main`
- `AGENTS.md`, `CONTEXT.md`, `PROJECT_STATE.md`, and `DECISIONS.md` are now present on canonical `main`
- Current `main` HEAD is dynamic and must be re-verified before execution-critical actions

## 2. Current Work / งานปัจจุบัน

**Workstream:** `POST-MERGE STATE RECONCILIATION / CANDIDATE WORKSTREAM TRIAGE`

**Objective:** รักษา canonical execution context ให้ตรงกับ repository จริงหลัง merge PR #13 และใช้ context foundation ใหม่นี้เป็นฐานในการตัดสิน workstream ถัดไปโดยไม่ดึง state เก่ามาเป็น current truth อัตโนมัติ

**Context Foundation state:** `PROMOTED TO MAIN / ACTIVE`

**Current execution posture:**
- canonical context foundation is established
- no active merge/deploy/release authorization is implied by this state
- remaining candidate workstreams must be re-verified against current `main` before promotion decisions

## 3. Canonical Context Files / ไฟล์บริบทหลัก

| File | Role | Current state |
|---|---|---|
| `AGENTS.md` | Startup, authority, mutation, handoff contract | Canonical on `main` |
| `CONTEXT.md` | Stable project identity and architecture context | Canonical on `main` |
| `PROJECT_STATE.md` | Mutable current execution snapshot | Canonical / post-merge reconciled |
| `DECISIONS.md` | Durable decision ledger | Canonical; mixed `APPROVED` / `CANDIDATE` records by explicit status |

Important: presence on `main` does not auto-promote decision records whose status remains `CANDIDATE`.

## 4. Candidate Workstreams / งาน Candidate ที่ยังเปิด

Dynamic state below was re-verified on 2026-10-26 and must still be refreshed immediately before any execution-critical action.

### PR #1 — Website Source Candidate
- State: `OPEN / DRAFT / NOT MERGED`
- Head: `feat/website-source-baseline-v0.7.6-rc2`
- Head SHA: `be5e5d7838f328db5230ad1e3ef03c49b3079c85`
- Base SHA recorded by PR: `5da20874d1d46f952bdcc4d37f88e546b0bdf1cf`
- Current mergeability observation: `false`
- Recorded blocker: dependency lock + clean install/build/browser regression remain incomplete/unverified
- Authority: **DO NOT MERGE / DO NOT DEPLOY** without separate approval
- Freshness status: `STALE AGAINST CURRENT MAIN` until reconciled

### PR #2 — UI/UX Skill + Catalog Candidate
- State: `OPEN / DRAFT / NOT MERGED`
- Head: `codex/ui-ux-skill-catalog`
- Head SHA: `8425d62ccb1e0882498722c01ceef40601e18a0b`
- Base SHA recorded by PR: `5da20874d1d46f952bdcc4d37f88e546b0bdf1cf`
- Current mergeability observation: `false`
- Scope: proposed `design/` collection + `ui-ux-master-craft`, expanding candidate catalog to 12 Skills
- Authority: candidate only; separate Owner acceptance/promotion decision required
- Freshness status: `STALE AGAINST CURRENT MAIN` until reconciled

### PR #11 — Current State Reconciliation
- State: `OPEN / DRAFT / NOT MERGED`
- Head: `codex/current-state-reconciliation-v0.1`
- Head SHA: `1c5d8ae9b51c040b6b28b3985b0ad99fad06f679`
- Base SHA recorded by PR: `5da20874d1d46f952bdcc4d37f88e546b0bdf1cf`
- Current mergeability observation: `false`
- Contains: SCR-001 through SCR-008 reconciliation artifacts
- Authority: evidence/reference candidate; not canonical `main`
- Freshness status: `STALE AGAINST CURRENT MAIN` and should not be used as current execution truth without refresh

### PR #13 — Project Execution Context Foundation
- State: `MERGED`
- Canonical merge commit: `41e804533610282dc0a3e1bd3b47c8c5b135ca0e`
- Scope: four root Markdown context files only
- Result: `PROMOTED TO MAIN`

## 5. Confirmed / ยืนยันแล้ว

- Canonical repository identity and default branch are verified
- Project Execution Context Foundation v0.1 was reviewed, amended, final-rechecked, explicitly approved for merge, and merged through PR #13
- Canonical context files are active on `main`
- `SKILL-DEC-007` records the explicit promotion decision
- `SKILL-DEC-002`, `003`, `005`, `006` remain `CANDIDATE`; merge of the ledger did not promote them
- PR #1, #2, and #11 remain open Draft candidates and are based on an older `main` baseline
- No Skill runtime, Website runtime, deployment, production, auth, secret, storage/database, or billing mutation occurred as part of the context-foundation promotion

## 6. Stale / Conflict / Unknown / สถานะผิดปกติ

### STALE
- PR #1, PR #2, and PR #11 all record base `main@5da20874...`, which predates the current canonical context foundation
- Historical reconciliation statements that describe `main` as the 11-Skill baseline at `5da20874...` are historical evidence, not current HEAD evidence
- Any recorded PR mergeability, SHA relation, build result, deployment status, or test status must be refreshed before action

### CONFLICT
- No blocking conflict identified in the post-merge context foundation itself
- `mergeable=false` on PR #1/#2/#11 is an observation requiring reconciliation; do not assume the exact cause without inspecting each diff/branch relation

### UNCONFIRMED / PENDING
- Whether candidate decisions `SKILL-DEC-002`, `003`, `005`, `006` should be promoted to `APPROVED`
- Final Owner decision for PR #2 taxonomy after freshness review
- Final Website candidate promotion path for PR #1
- Whether PR #11 should be refreshed, superseded, partially absorbed, or retained as historical reconciliation evidence
- ULTIMATE runnable architecture and distribution boundaries
- Codex Cloud rollout / distribution architecture
- restricted distribution / entitlement implementation

## 7. Dependency & Impact / Dependency และผลกระทบ

Canonical execution context is now upstream of future work:

```text
AGENTS / CONTEXT / PROJECT_STATE / DECISIONS
              |
              +--> Cross-session recovery
              +--> Current-work verification
              +--> Baseline/approval protection
              +--> Candidate freshness checks
              +--> Safer implementation handoff
              +--> Safer Website / Skill / ULTIMATE / Codex work
```

The context foundation itself does not change Skill runtime behavior, Website runtime, deployment, production, or external integrations.

## 8. Evidence Freshness Rules / กฎตรวจความสด

Before any execution-critical next step:

1. verify current `main` HEAD
2. verify target branch / PR head
3. compare target branch against current `main`
4. verify PR state and mergeability
5. inspect relevant diff and overlap with canonical context/governance
6. verify test/build/runtime/deployment evidence when applicable
7. mark mismatch as `STALE`, `CONFLICT`, `UNCONFIRMED`, or `NOT APPLICABLE`

Do not silently update Approved/Frozen decisions because runtime evidence changed; record the difference and evaluate impact first.

## 9. Approval Boundary / ขอบเขตอนุมัติ

**Currently allowed:** repository evidence inspection, candidate freshness review, design/review proposals, and repository-local state reconciliation explicitly approved by the Owner.

**Separate Owner approval required before:** merging another candidate into `main`, release/deploy/publish, production mutation, auth/permission/secret/billing changes, database/storage migration, irreversible action, or changing an Approved/Frozen baseline.

## 10. Post-Merge Reconciliation Result / ผลหลัง Merge

**Result:** `PASS — CANONICAL CONTEXT FOUNDATION ACTIVE`

Reconciliation confirms:

- PR #13 is merged
- the four context files are canonical on `main`
- stale candidate wording from the pre-merge snapshot is removed from current state
- promotion is recorded durably in `DECISIONS.md`
- proposed governance decisions remain candidate unless separately approved
- remaining open candidate PRs are explicitly marked stale against the newer canonical baseline

## 11. Next Action / ขั้นถัดไป

**Recommended Next Action:** `PR #2 — UI/UX TAXONOMY FRESHNESS & OWNER DECISION REVIEW`

Reason:
- PR #2 is the next unresolved candidate in the prior work order
- it changes repository taxonomy / Skill catalog, so it should be reconciled against the new canonical context before any promotion decision
- its recorded base predates both the current `main` and the context foundation

Required next-step scope:
1. re-verify current `main` and PR #2 head
2. compare PR #2 against current `main`
3. identify conflicts/overlap with current `README`, Skill System Guide, taxonomy, and context files
4. classify `PASS / AMEND / HOLD / REJECT`
5. present Owner decision gate

**No merge of PR #2 is authorized by this Next Action.**
