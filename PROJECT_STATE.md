# PROJECT_STATE.md — SKILL Current Execution State

**Project:** SKILL / VANTA Skills  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**State Type:** Mutable execution snapshot  
**Last Verified:** 2026-10-30 (Asia/Bangkok)  
**Status:** CANONICAL CONTEXT + 12-SKILL CATALOG + WEBSITE SOURCE ACTIVE / POST-MERGE RECONCILED

> This file is a recovery snapshot, not a permanent truth. Re-verify dynamic facts before execution-critical decisions.

## 1. Canonical Repository State / สถานะ Canonical

- Repository: `raeraeqecz-vanta/skills-th-en`
- Default branch: `main`
- Project Execution Context Foundation v0.1 canonical merge anchor: `41e804533610282dc0a3e1bd3b47c8c5b135ca0e`
- UI/UX Skill Catalog canonical merge anchor: `ef5e014bf098a2c53f5b967cca028c1d3847d311`
- Website Source `v0.7.6-rc.3` canonical merge anchor: `7919801d4e05e35b568cb1827b619de741f7f22f`
- PR #13, PR #2, and PR #1 are merged into `main`
- `AGENTS.md`, `CONTEXT.md`, `PROJECT_STATE.md`, and `DECISIONS.md` are canonical on `main`
- Canonical Skill catalog indexes 12 Skills, including `ui-ux-master-craft`
- Canonical current Website source is under `website/` and is synchronized to the 12-Skill catalog
- Current `main` HEAD is dynamic and must be re-verified before execution-critical actions

## 2. Current Work / งานปัจจุบัน

**Workstream:** `POST-PR1 STATE RECONCILIATION / PR11 DISPOSITION TRIAGE`

**Objective:** รักษา canonical execution state หลัง promote Website source ผ่าน PR #1 และตัดสินลำดับ review ของ reconciliation candidate PR #11 โดยไม่ตีความ historical reconciliation เป็น current truth

**Context Foundation state:** `PROMOTED TO MAIN / ACTIVE`

**UI/UX Catalog state:** `PROMOTED TO MAIN / ACTIVE`

**Website Source state:** `PROMOTED TO MAIN / CANONICAL CURRENT SOURCE`

**Important baseline distinction:**
- PR #1 promotion makes the reconstructed Website source the canonical current source on `main`
- `website/README.md` and `website/source-provenance.json` still identify it as `RECONSTRUCTED SOURCE BASELINE CANDIDATE`
- therefore canonical source placement does **not** equal an `APPROVED` or `FROZEN` Website baseline
- changing that baseline status requires a separate Owner decision

**Current execution posture:**
- canonical context foundation is established
- UI/UX Skill and 12-Skill catalog are canonical
- Website source is canonical and source-level/build/browser verified before promotion
- no Website deployment, publish, release, or production mutation is authorized or implied
- PR #11 remains a stale historical reconciliation candidate against the older repository lineage

## 3. Canonical Context Files / ไฟล์บริบทหลัก

| File | Role | Current state |
|---|---|---|
| `AGENTS.md` | Startup, authority, mutation, handoff contract | Canonical on `main` |
| `CONTEXT.md` | Stable project identity and architecture context | Canonical on `main` |
| `PROJECT_STATE.md` | Mutable current execution snapshot | Canonical / post-PR1 reconciled |
| `DECISIONS.md` | Durable decision ledger | Canonical; includes `SKILL-DEC-009` for Website source promotion |

Important: presence on `main` does not auto-promote decision records whose status remains `CANDIDATE`.

## 4. Promoted / Candidate / Historical Workstreams

Dynamic state below was refreshed on 2026-10-30 and must still be re-verified immediately before any execution-critical action.

### PR #1 — Website Source
- State: `MERGED`
- Former head: `feat/website-source-baseline-v0.7.6-rc2`
- Final candidate head before merge: `c01577fb19552c3220f79a8165193d68db5ccf57`
- Canonical squash merge commit: `7919801d4e05e35b568cb1827b619de741f7f22f`
- Version: `v0.7.6-rc.3`
- Scope: 45 changed files, all under `website/`
- Catalog: synchronized to canonical 12 Skills including `ui-ux-master-craft`
- Verification: RED run `40851389053`; GREEN/full run `40851733957`; final tracked-lockfile run `40852160592`
- Final verification covered: `npm ci`, full source tests, production build, Chromium browser regression smoke
- Result: `PROMOTED TO MAIN / CANONICAL CURRENT SOURCE`
- Durable decision: `SKILL-DEC-009`
- Baseline note: reconstructed provenance remains; not declared `APPROVED` or `FROZEN` Website baseline
- Runtime note: **NOT DEPLOYED by this promotion**

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
- Current branch relation vs `main`: `DIVERGED — ahead 10 / behind 8`
- Scope: 10 documentation files under `docs/reconciliation/`, SCR-001 through SCR-008
- Authority: evidence/reference candidate; not canonical execution state
- Freshness status: `STALE / HISTORICAL RECONCILIATION EVIDENCE`
- Important stale claims: PR #11 still describes `main` as the 11-Skill baseline and PR #1 / PR #2 as Draft candidates; those claims are no longer current truth

### PR #13 — Project Execution Context Foundation
- State: `MERGED`
- Canonical merge commit: `41e804533610282dc0a3e1bd3b47c8c5b135ca0e`
- Scope: four root Markdown context files only
- Result: `PROMOTED TO MAIN / ACTIVE`
- Durable decision: `SKILL-DEC-007`

## 5. Confirmed / ยืนยันแล้ว

- Canonical repository identity and default branch are verified
- Project Execution Context Foundation v0.1 is canonical through PR #13
- UI/UX Skill + 12-Skill catalog is canonical through PR #2
- Website source `v0.7.6-rc.3` is canonical current source through PR #1
- PR #1 was freshness-reviewed, amended onto current `main`, synchronized to 12 Skills, verified through TDD + clean install + test + production build + Chromium browser smoke, explicitly approved for merge, and squash-merged
- `SKILL-DEC-007`, `SKILL-DEC-008`, and `SKILL-DEC-009` record the three promotion decisions
- `SKILL-DEC-002`, `003`, `005`, `006` remain `CANDIDATE`; none of the promotion decisions change their status
- Website reconstruction provenance remains visible and has not been silently converted into an Approved/Frozen Website baseline
- No Website deploy, publish, production, auth, secret, storage/database, or billing mutation occurred as part of PR #1 promotion or this reconciliation

## 6. Stale / Conflict / Unknown / สถานะผิดปกติ

### STALE
- PR #11 remains based on historical `main@5da20874...`, predating the context foundation, UI/UX catalog promotion, and Website source promotion
- PR #11 statements that PR #1 / PR #2 remain Draft candidates or that `main` remains an 11-Skill baseline are historical evidence only
- Any recorded PR mergeability, SHA relation, build result, deployment status, or test status must be refreshed before action

### CONFLICT
- No blocking conflict identified in canonical context, Skill catalog, or canonical Website source
- No current 11-vs-12 Skill catalog conflict remains in canonical Website source
- PR #11 has semantic staleness against current canonical state; GitHub reporting `mergeable=true` does not make its historical claims current

### UNCONFIRMED / PENDING
- Whether candidate decisions `SKILL-DEC-002`, `003`, `005`, `006` should be promoted to `APPROVED`
- Whether reconstructed Website source should later become an `APPROVED` or `FROZEN` Website baseline
- Whether PR #11 should be refreshed, superseded, partially absorbed, closed, or retained as historical reconciliation evidence
- ULTIMATE runnable architecture and distribution boundaries
- Codex Cloud rollout / distribution architecture
- restricted distribution / entitlement implementation

## 7. Dependency & Impact / Dependency และผลกระทบ

```text
AGENTS / CONTEXT / PROJECT_STATE / DECISIONS
              |
              +--> Canonical Skill source + 12-Skill catalog
                              |
                              +--> Canonical Website source (presentation consumer)
                              +--> Distribution / installer docs
                              +--> ULTIMATE overlap analysis
                              +--> Codex / ChatGPT adapters
```

The Website layer is a consumer/presentation layer and must follow the accepted canonical Skill catalog rather than define a separate taxonomy.

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

**Currently allowed:** repository evidence inspection, candidate freshness/disposition review, design/review proposals, and repository-local state reconciliation explicitly approved by the Owner.

**Separate Owner approval required before:** merging or closing/superseding PR #11 when that action changes repository workflow state, declaring Website source `APPROVED`/`FROZEN`, release/deploy/publish, production mutation, auth/permission/secret/billing changes, database/storage migration, irreversible action, or changing another Approved/Frozen baseline.

## 10. Post-PR1 Reconciliation Result / ผลหลัง Merge PR #1

**Result:** `PASS — CANONICAL WEBSITE SOURCE ACTIVE / RUNTIME UNCHANGED`

Reconciliation confirms:

- PR #1 is merged and canonical via `7919801d4e05e35b568cb1827b619de741f7f22f`
- `SKILL-DEC-009` durably records the Website source promotion decision
- canonical Website catalog is synchronized to 12 Skills
- source verification gates passed before merge, including tracked-lockfile clean install, tests, production build, and Chromium browser smoke
- reconstructed provenance remains explicit and no Approved/Frozen Website baseline is implied
- no deploy or production mutation occurred
- PR #11 remains Draft, diverged `ahead 10 / behind 8`, and historically stale where its claims conflict with current canonical evidence

## 11. Next Action / ขั้นถัดไป

**Recommended Next Action:** `PR #11 — RECONCILIATION CANDIDATE DISPOSITION + FRESHNESS REVIEW`

Reason:
- PR #1 and PR #2 are now canonical, resolving the two candidate workstreams that PR #11 originally analyzed
- PR #11 is the remaining old-baseline reconciliation PR and is now 8 commits behind current `main`
- several of its central state claims are knowingly historical
- deciding its disposition prevents stale reconciliation material from being mistaken for a future promotion candidate

Required next-step scope:
1. re-verify `main` and PR #11 immediately before review
2. inspect SCR-001 through SCR-008 against current canonical context, 12-Skill catalog, and Website source
3. classify each reconciliation artifact as `STILL VALID / STALE / SUPERSEDED / PARTIALLY REUSABLE`
4. recommend one disposition: `REFRESH`, `PARTIAL ABSORB`, `RETAIN HISTORICAL + CLOSE`, or `HOLD`
5. present the Owner decision gate

**No PR #11 merge, close, rewrite, or other repository mutation is authorized by this Next Action without separate Owner approval.**
