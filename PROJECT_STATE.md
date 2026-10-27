# PROJECT_STATE.md — SKILL Current Execution State

**Project:** SKILL / VANTA Skills  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**State Type:** Mutable execution snapshot  
**Last Verified:** 2026-10-27 (Asia/Bangkok)  
**Status:** CANONICAL CONTEXT + UI/UX CATALOG ACTIVE / POST-MERGE RECONCILED

> This file is a recovery snapshot, not a permanent truth. Re-verify dynamic facts before execution-critical decisions.

## 1. Canonical Repository State / สถานะ Canonical

- Repository: `raeraeqecz-vanta/skills-th-en`
- Default branch: `main`
- Project Execution Context Foundation v0.1 canonical merge anchor: `41e804533610282dc0a3e1bd3b47c8c5b135ca0e`
- UI/UX Skill Catalog canonical merge anchor: `ef5e014bf098a2c53f5b967cca028c1d3847d311`
- PR #13 is merged into `main`
- PR #2 is merged into `main`
- `AGENTS.md`, `CONTEXT.md`, `PROJECT_STATE.md`, and `DECISIONS.md` are canonical on `main`
- Canonical Skill catalog now indexes 12 Skills, including `ui-ux-master-craft`
- Current `main` HEAD is dynamic and must be re-verified before execution-critical actions

## 2. Current Work / งานปัจจุบัน

**Workstream:** `POST-PR2 STATE RECONCILIATION / WEBSITE CANDIDATE TRIAGE`

**Objective:** รักษา canonical execution state หลัง promote PR #2 และตรวจ downstream Website candidate ให้สอดคล้องกับ canonical 12-Skill catalog ก่อนพิจารณา promotion ใด ๆ

**Context Foundation state:** `PROMOTED TO MAIN / ACTIVE`

**UI/UX Catalog state:** `PROMOTED TO MAIN / ACTIVE`

**Current execution posture:**
- canonical context foundation is established
- UI/UX Skill and 12-Skill catalog are canonical
- no active deploy/release/production authorization is implied by this state
- Website PR #1 and reconciliation PR #11 remain candidates and must be treated against current `main`, not their historical base

## 3. Canonical Context Files / ไฟล์บริบทหลัก

| File | Role | Current state |
|---|---|---|
| `AGENTS.md` | Startup, authority, mutation, handoff contract | Canonical on `main` |
| `CONTEXT.md` | Stable project identity and architecture context | Canonical on `main` |
| `PROJECT_STATE.md` | Mutable current execution snapshot | Canonical / post-PR2 reconciled |
| `DECISIONS.md` | Durable decision ledger | Canonical; includes `SKILL-DEC-008` for PR #2 promotion |

Important: presence on `main` does not auto-promote decision records whose status remains `CANDIDATE`.

## 4. Candidate / Historical Workstreams

Dynamic state below was re-verified on 2026-10-27 and must still be refreshed immediately before any execution-critical action.

### PR #1 — Website Source Candidate
- State: `OPEN / DRAFT / NOT MERGED`
- Head: `feat/website-source-baseline-v0.7.6-rc2`
- Head SHA: `be5e5d7838f328db5230ad1e3ef03c49b3079c85`
- Historical merge base: `5da20874d1d46f952bdcc4d37f88e546b0bdf1cf`
- Current GitHub mergeability observation: `true`
- Current branch relation vs `main`: `DIVERGED — ahead 1 / behind 5`
- Scope: reconstructed React/Vite website source under `website/`
- Existing source evidence: source tests previously reported `9/9 PASS`, but clean dependency install, lockfile, production build, and browser regression remain unverified in the PR record
- Canonical dependency impact: Website candidate contains an 11-Skill catalog while current canonical repository catalog is now 12 Skills after PR #2
- Authority: **DO NOT MERGE / DO NOT DEPLOY** without separate Owner approval
- Freshness status: `STALE / REQUIRES 12-SKILL SYNCHRONIZATION + BUILD/BROWSER GATE REVIEW`

### PR #2 — UI/UX Skill + Catalog
- State: `MERGED`
- Former head: `codex/ui-ux-skill-catalog`
- Final candidate head before merge: `d78c57ece98a54d7257194d7a987bbc7e5a2ac94`
- Canonical squash merge commit: `ef5e014bf098a2c53f5b967cca028c1d3847d311`
- Scope: `design/` collection, `ui-ux-master-craft`, repository catalog/collection indexes, root README and Skill System Guide taxonomy updates
- Result: `PROMOTED TO MAIN / CANONICAL`
- Durable decision: `SKILL-DEC-008`

### PR #11 — Current State Reconciliation
- State: `OPEN / DRAFT / NOT MERGED`
- Head: `codex/current-state-reconciliation-v0.1`
- Head SHA: `1c5d8ae9b51c040b6b28b3985b0ad99fad06f679`
- Historical merge base: `5da20874d1d46f952bdcc4d37f88e546b0bdf1cf`
- Current GitHub mergeability observation: `true`
- Current branch relation vs `main`: `DIVERGED — ahead 10 / behind 5`
- Contains: SCR-001 through SCR-008 reconciliation artifacts
- Authority: evidence/reference candidate; not canonical execution state
- Freshness status: `STALE / HISTORICAL RECONCILIATION EVIDENCE`
- Important stale claim: PR #11 still describes PR #2 as a separate Draft candidate and `main` as the earlier 11-Skill baseline; those claims are no longer current truth

### PR #13 — Project Execution Context Foundation
- State: `MERGED`
- Canonical merge commit: `41e804533610282dc0a3e1bd3b47c8c5b135ca0e`
- Scope: four root Markdown context files only
- Result: `PROMOTED TO MAIN / ACTIVE`

## 5. Confirmed / ยืนยันแล้ว

- Canonical repository identity and default branch are verified
- Project Execution Context Foundation v0.1 was reviewed, amended, final-rechecked, explicitly approved for merge, and merged through PR #13
- PR #2 was freshness-reviewed, amended onto current canonical context baseline, final content/Skill validated, explicitly approved for merge, and squash-merged into `main`
- Canonical Skill catalog now includes 12 Skills and `ui-ux-master-craft`
- `SKILL-DEC-007` records context-foundation promotion
- `SKILL-DEC-008` records UI/UX Skill Catalog promotion
- `SKILL-DEC-002`, `003`, `005`, `006` remain `CANDIDATE`; neither PR #13 nor PR #2 promotion changes their status
- PR #1 and PR #11 remain open Draft candidates based on the older `main@5da20874...` lineage
- No Website runtime, deployment, production, auth, secret, storage/database, or billing mutation occurred as part of PR #2 promotion or this reconciliation

## 6. Stale / Conflict / Unknown / สถานะผิดปกติ

### STALE
- PR #1 and PR #11 share historical merge base `main@5da20874...`, predating the context foundation and PR #2 promotion
- PR #1 Website data represents an 11-Skill catalog and is now stale against the canonical 12-Skill repository catalog
- PR #11 statements that PR #2 remains a Draft candidate or that `main` remains the 11-Skill baseline are historical evidence, not current execution truth
- Any recorded PR mergeability, SHA relation, build result, deployment status, or test status must be refreshed before action

### CONFLICT
- No blocking conflict identified in the canonical context foundation or merged UI/UX catalog
- Website PR #1 has a catalog synchronization conflict with canonical `main`: 11 Skills in the Website candidate versus 12 Skills canonically
- This is a content/dependency conflict, not merge authorization; GitHub reporting `mergeable=true` does not make PR #1 promotion-ready

### UNCONFIRMED / PENDING
- Whether candidate decisions `SKILL-DEC-002`, `003`, `005`, `006` should be promoted to `APPROVED`
- Final Website candidate promotion path for PR #1 after catalog synchronization and fresh build/browser evidence
- Whether PR #11 should be refreshed, superseded, partially absorbed, closed, or retained as historical reconciliation evidence
- ULTIMATE runnable architecture and distribution boundaries
- Codex Cloud rollout / distribution architecture
- restricted distribution / entitlement implementation

## 7. Dependency & Impact / Dependency และผลกระทบ

Canonical execution context and Skill catalog are upstream of presentation/distribution work:

```text
AGENTS / CONTEXT / PROJECT_STATE / DECISIONS
              |
              +--> Canonical Skill source + 12-Skill catalog
                              |
                              +--> Website presentation consumer
                              +--> Distribution / installer docs
                              +--> ULTIMATE overlap analysis
                              +--> Codex / ChatGPT adapters
```

The Website layer is a consumer/presentation layer and should reflect the accepted canonical Skill catalog rather than define a separate taxonomy.

## 8. Evidence Freshness Rules / กฎตรวจความสด

Before any execution-critical next step:

1. verify current `main` HEAD
2. verify target branch / PR head
3. compare target branch against current `main`
4. verify PR state and mergeability
5. inspect relevant diff and overlap with canonical context/governance/catalog
6. verify test/build/runtime/deployment evidence when applicable
7. mark mismatch as `STALE`, `CONFLICT`, `UNCONFIRMED`, or `NOT APPLICABLE`

Do not silently update Approved/Frozen decisions because runtime evidence changed; record the difference and evaluate impact first.

## 9. Approval Boundary / ขอบเขตอนุมัติ

**Currently allowed:** repository evidence inspection, candidate freshness review, design/review proposals, and repository-local state reconciliation explicitly approved by the Owner.

**Separate Owner approval required before:** merging PR #1 or PR #11 into `main`, release/deploy/publish, production mutation, auth/permission/secret/billing changes, database/storage migration, irreversible action, or changing an Approved/Frozen baseline.

## 10. Post-PR2 Reconciliation Result / ผลหลัง Merge PR #2

**Result:** `PASS — CANONICAL UI/UX CATALOG ACTIVE / WEBSITE CANDIDATE NOW DOWNSTREAM-STALE`

Reconciliation confirms:

- PR #2 is merged and canonical via `ef5e014bf098a2c53f5b967cca028c1d3847d311`
- `SKILL-DEC-008` durably records the promotion decision
- canonical indexed catalog is now 12 Skills
- PR #1 remains Draft and diverged from current `main`; its embedded 11-Skill catalog requires synchronization
- PR #11 remains Draft and diverged; its reconciliation claims are historical where they conflict with current evidence
- GitHub mergeability alone does not authorize or prove readiness for either remaining PR

## 11. Next Action / ขั้นถัดไป

**Recommended Next Action:** `PR #1 — WEBSITE CANDIDATE FRESHNESS + 12-SKILL SYNCHRONIZATION REVIEW`

Reason:
- Website is defined as a consumer/presentation layer of the accepted Skill catalog
- PR #2 has changed the canonical catalog from 11 to 12 Skills
- PR #1 is now directly stale on that dependency and remains blocked by unverified clean install/build/browser gates recorded in its own PR
- reconciling PR #1 now removes the highest-impact downstream mismatch before considering Website promotion

Required next-step scope:
1. re-verify current `main` and PR #1 head
2. inspect Website catalog/detail data against canonical 12-Skill catalog
3. identify exact changes needed to add `ui-ux-master-craft` without overwriting unrelated Website work
4. re-evaluate dependency lock / clean install / production build / browser regression gates
5. classify `PASS / AMEND / HOLD / REJECT`
6. present Owner decision gate

**No merge or deployment of PR #1 is authorized by this Next Action.**
