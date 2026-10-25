# PROJECT_STATE.md — SKILL Current Execution State

**Project:** SKILL / VANTA Skills  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**State Type:** Mutable execution snapshot  
**Last Verified:** 2026-10-26 (Asia/Bangkok)  
**Status:** CANDIDATE — Project Execution Context Foundation v0.1 / AMENDMENTS APPLIED / FINAL RECHECK PENDING

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

**Draft PR:** `#13 — docs(context): add project execution context foundation v0.1`

**Authorized scope for this work:**
- create/review/refine `AGENTS.md`
- create/review/refine `CONTEXT.md`
- create/review/refine `PROJECT_STATE.md`
- create/review/refine `DECISIONS.md`
- inspect repository/PR evidence required to validate the context foundation
- amend authority semantics identified during review

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
| `AGENTS.md` | Startup, authority, mutation, handoff contract | Candidate / promotion-safe wording applied |
| `CONTEXT.md` | Stable project identity and architecture context | Candidate / promotion-safe wording applied |
| `PROJECT_STATE.md` | Mutable current execution snapshot | Candidate / current amendment state |
| `DECISIONS.md` | Durable decision ledger | Candidate / authority semantics corrected |

## 4. Other Active Candidate Workstreams / งาน Candidate อื่น

Dynamic PR state was previously re-verified on 2026-10-26 and must be refreshed before any action that depends on it:

### PR #1 — Website Source Candidate
- Last verified state: `OPEN / DRAFT / NOT MERGED`
- Head: `feat/website-source-baseline-v0.7.6-rc2`
- Last verified head SHA: `be5e5d7838f328db5230ad1e3ef03c49b3079c85`
- Recorded blocker: dependency lock + clean install/build/browser regression remain incomplete/unverified
- Authority: **DO NOT MERGE / DO NOT DEPLOY** without separate approval

### PR #2 — UI/UX Skill + Catalog Candidate
- Last verified state: `OPEN / DRAFT / NOT MERGED`
- Head: `codex/ui-ux-skill-catalog`
- Last verified head SHA: `8425d62ccb1e0882498722c01ceef40601e18a0b`
- Scope: proposed `design/` collection + `ui-ux-master-craft`, expanding candidate catalog to 12 Skills
- Authority: candidate only; separate Owner acceptance/promotion decision required

### PR #11 — Current State Reconciliation
- Last verified state: `OPEN / DRAFT / NOT MERGED`
- Head: `codex/current-state-reconciliation-v0.1`
- Last verified head SHA: `1c5d8ae9b51c040b6b28b3985b0ad99fad06f679`
- Contains: SCR-001 through SCR-008 reconciliation artifacts
- Important freshness note: PR #11 started from `main@5da20874...`, while current foundation started from `main@d5f3cf505...`
- Authority: evidence/reference candidate; not canonical `main`

### PR #13 — Project Execution Context Foundation
- Current work PR
- Draft / not merged
- Contains only the four root context Markdown files
- Authority: review candidate only; merge requires separate explicit Owner approval

## 5. Confirmed / ยืนยันแล้ว

- Canonical repository identity and default branch are verified
- Foundation branch was created from verified `main@d5f3cf5054e6a104b7050757d2dddc421618d74c`
- Project already contains `setup-skill-context` and `reconcile-work-context` foundation Skills
- Project already contains `docs/SKILL-SYSTEM-GUIDE_v0.1_TH-EN.md`
- Prior reconciliation artifacts exist in PR #11 and can be used as evidence/reference
- The Owner approved creation, review, Draft PR preparation, and the current amendment pass for Project Execution Context Foundation v0.1
- Candidate diff is context-only; no Skill source, Website source, runtime, deployment or production files are intentionally changed
- Review identified authority-semantics issues; approved amendments have now been applied on the candidate branch

## 6. Stale / Conflict / Unknown / สถานะผิดปกติ

### STALE
- Reconciliation snapshot in PR #11 records an older `main` baseline (`5da20874...`) and must not be used as current HEAD evidence without refresh
- Any PR state or SHA recorded in this snapshot must be refreshed before execution-critical use

### CONFLICT
- No blocking conflict has been identified so far for the four-file context foundation

### UNCONFIRMED / PENDING
- Final Governance Recheck result after the authority-semantics amendments
- Whether this four-file context foundation will be promoted into `main`
- Whether candidate decisions `SKILL-DEC-002`, `003`, `005`, `006` will later receive explicit Owner approval
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

**Currently allowed:** candidate context design, repository evidence inspection, branch-local documentation refinement, governance review, and Final Governance Recheck.

**Owner approval still required before:** merge into `main`, release/deploy, production changes, external resource mutation outside the approved candidate work, or changing an Approved/Frozen baseline.

## 10. Amendment Record / ผลการแก้จาก Review

Review result before amendment: `AMEND`

Applied fixes:

- removed branch-only/candidate-only wording from stable files that would become stale after merge
- replaced with durable version/activation semantics in `AGENTS.md` and `CONTEXT.md`
- changed `SKILL-DEC-002`, `003`, `005`, `006` from `APPROVED` to `CANDIDATE`
- clarified that file presence or merge does not automatically approve candidate decisions
- retained only decisions with direct current evidence/explicit approval as `APPROVED`

## 11. Next Action / ขั้นถัดไป

Perform **Final Governance Recheck** of PR #13 after amendments:

- verify current `main` and PR #13 head
- compare PR #13 against current `main`
- confirm changed-file boundary
- review authority semantics and promotion safety
- return `PASS`, `AMEND`, or `BLOCKED`

**No merge is authorized by the current state.**
