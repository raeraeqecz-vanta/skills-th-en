# PROJECT_STATE.md — SKILL Current Execution State

**Project:** SKILL / VANTA Skills  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**State Type:** Mutable execution snapshot  
**Last Verified:** 2026-10-26 (Asia/Bangkok)  
**Status:** CANDIDATE — Project Execution Context Foundation v0.1

> This file is a recovery snapshot, not a permanent truth. Re-verify dynamic facts before execution-critical decisions.

## 1. Canonical Repository State / สถานะ Canonical

- Repository: `raeraeqecz-vanta/skills-th-en`
- Default branch: `main`
- Verified `main` HEAD at foundation start: `d5f3cf5054e6a104b7050757d2dddc421618d74c`
- `main` remains the canonical branch for accepted repository state
- This context foundation has **not** been merged into `main`

## 2. Current Work / งานปัจจุบัน

**Workstream:** `SKILL PROJECT EXECUTION CONTEXT FOUNDATION v0.1`

**Objective:** สร้าง persistent repository-local execution context เพื่อให้ AI/Agent สามารถ recover project state ข้าม session จากหลักฐานใน repo ได้ โดยไม่พึ่ง memory หรือ conversation history เป็น execution-state authority หลัก

**Execution branch:** `codex/project-execution-context-foundation-v0.1`

**Branch base:** `main@d5f3cf5054e6a104b7050757d2dddc421618d74c`

**Authorized scope for this work:**
- create/review `AGENTS.md`
- create/review `CONTEXT.md`
- create/review `PROJECT_STATE.md`
- create/review `DECISIONS.md`
- inspect repository/PR evidence required to validate the context foundation

**Not authorized by this work:**
- merge to `main`
- deploy/release/publish
- production mutation
- auth/permission/secret/billing changes
- database/storage migration
- promotion of unrelated candidate PRs

## 3. Context Foundation Files / ไฟล์บริบท

| File | Role | Current state |
|---|---|---|
| `AGENTS.md` | Startup, authority, mutation, handoff contract | Candidate created on execution branch |
| `CONTEXT.md` | Stable project identity and architecture context | Candidate created on execution branch |
| `PROJECT_STATE.md` | Mutable current execution snapshot | Candidate created on execution branch |
| `DECISIONS.md` | Durable decision ledger | Candidate created on execution branch |

## 4. Other Active Candidate Workstreams / งาน Candidate อื่น

Dynamic PR state was re-verified on 2026-10-26:

### PR #1 — Website Source Candidate
- State: `OPEN / DRAFT / NOT MERGED`
- Head: `feat/website-source-baseline-v0.7.6-rc2`
- Head SHA: `be5e5d7838f328db5230ad1e3ef03c49b3079c85`
- Recorded blocker: dependency lock + clean install/build/browser regression remain incomplete/unverified
- Authority: **DO NOT MERGE / DO NOT DEPLOY** without separate approval

### PR #2 — UI/UX Skill + Catalog Candidate
- State: `OPEN / DRAFT / NOT MERGED`
- Head: `codex/ui-ux-skill-catalog`
- Head SHA: `8425d62ccb1e0882498722c01ceef40601e18a0b`
- Scope: proposed `design/` collection + `ui-ux-master-craft`, expanding candidate catalog to 12 Skills
- Authority: candidate only; separate Owner acceptance/promotion decision required

### PR #11 — Current State Reconciliation
- State: `OPEN / DRAFT / NOT MERGED`
- Head: `codex/current-state-reconciliation-v0.1`
- Head SHA: `1c5d8ae9b51c040b6b28b3985b0ad99fad06f679`
- Contains: SCR-001 through SCR-008 reconciliation artifacts
- Important freshness note: PR #11 started from `main@5da20874...`, while current `main` verified for this foundation is `d5f3cf505...`
- Authority: evidence/reference candidate; not canonical `main`

## 5. Confirmed / ยืนยันแล้ว

- Canonical repository identity and default branch are verified
- Current `main` HEAD at foundation start is verified
- PR #1, #2 and #11 are open Draft PRs and not merged
- Project already contains `setup-skill-context` and `reconcile-work-context` foundation Skills
- Project already contains `docs/SKILL-SYSTEM-GUIDE_v0.1_TH-EN.md`
- Prior reconciliation artifacts exist in PR #11 and can be used as evidence/reference
- The Owner approved creation of Project Execution Context Foundation v0.1 on an isolated branch for review

## 6. Stale / Conflict / Unknown / สถานะผิดปกติ

### STALE
- Reconciliation snapshot in PR #11 records an older `main` baseline (`5da20874...`) and must not be used as current HEAD evidence without refresh

### CONFLICT
- No blocking conflict identified for creating the four context files on the isolated branch

### UNCONFIRMED / PENDING
- Whether this four-file context foundation will be promoted into `main`
- Whether PR #11 should later be refreshed, superseded, partially absorbed, or retained as historical reconciliation evidence
- Final Owner decision for PR #2 taxonomy
- Final Website candidate promotion path
- ULTIMATE runnable architecture and distribution boundaries

## 7. Dependency & Impact / Dependency และผลกระทบ

The context foundation is intentionally upstream of future execution work:

```text
AGENTS / CONTEXT / PROJECT_STATE / DECISIONS
              |
              +--> Cross-session recovery
              +--> Current-work verification
              +--> Baseline/approval protection
              +--> Safer implementation handoff
              +--> Safer Website / Skill / ULTIMATE / Codex work
```

It does not change Skill runtime behavior, Website runtime, production, deployment or external integrations by itself.

## 8. Evidence Freshness Rules / กฎตรวจความสด

Before any execution-critical next step:

1. verify current `main` HEAD
2. verify execution branch HEAD
3. compare execution branch against current `main`
4. verify relevant PR state
5. verify test/build/runtime evidence when applicable
6. mark any mismatch as `STALE` or `CONFLICT`

Do not silently update Approved/Frozen decisions because runtime evidence changed; record the difference and evaluate impact first.

## 9. Approval Boundary / ขอบเขตอนุมัติ

**Currently allowed:** candidate context design, repository evidence inspection, branch-local documentation refinement and review.

**Owner approval still required before:** merge into `main`, release/deploy, production changes, external resource mutation outside the approved candidate work, or changing an Approved/Frozen baseline.

## 10. Next Action / ขั้นถัดไป

Perform an independent Context Foundation Review of the four files against current `main`, the Skill System Guide, existing foundation Skills and relevant reconciliation evidence.

Expected review result:
- PASS → present the candidate structure and diff for Owner promotion decision
- AMEND → fix only identified context/governance defects on this branch, then recheck
- BLOCKED → report exact conflict/evidence gap; do not merge

**No merge is authorized by this Next Action.**
