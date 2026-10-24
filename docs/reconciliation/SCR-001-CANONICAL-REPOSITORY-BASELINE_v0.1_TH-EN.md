# SCR-001 — CANONICAL REPOSITORY BASELINE v0.1

**Status:** IMPLEMENTED / VERIFIED FOR RECONCILIATION  
**Date:** 2026-10-23  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**Ticket:** #3  
**Scope:** Repository state evidence only; no merge/deploy/production mutation

## 1. Canonical identity / อัตลักษณ์หลัก

- Canonical repository: `raeraeqecz-vanta/skills-th-en`
- Visibility: Public
- Default branch: `main`
- Verified `main` HEAD at reconciliation start: `5da20874d1d46f952bdcc4d37f88e546b0bdf1cf`
- Reconciliation implementation branch: `codex/current-state-reconciliation-v0.1`

`main` remains the repository baseline. Open PR branches are candidates and do not become baseline until separately approved and merged.

## 2. Current Main collections / หมวด Skill บน Main

`main` currently contains five active Skill collections:

1. `foundation/`
2. `specification/`
3. `implementation/`
4. `documentation/`
5. `release/`

The following are **not** part of the current `main` baseline:

- `design/` — exists only as PR #2 candidate
- `website/` — exists only as PR #1 candidate
- `ULTIMATE/` — no repository implementation exists

## 3. Verified Main Skill inventory / รายการ Skill บน Main

### Foundation — 4
- `choose-next-skill`
- `reconcile-work-context`
- `setup-skill-context`
- `stress-test-and-sharpen`

### Specification — 3
- `blueprint-to-tasks`
- `to-spec`
- `write-governed-spec`

### Implementation — 2
- `code-review-and-fix`
- `implement-approved-task`

### Documentation — 1
- `write-user-manual`

### Release — 1
- `release-and-handoff`

**Total verified skills on `main`: 11.**

## 4. Candidate separation / การแยก Candidate

| Candidate | Branch | Status at check | Main baseline? |
|---|---|---|---|
| Website Source v0.7.6-rc.2 | `feat/website-source-baseline-v0.7.6-rc2` | PR #1 OPEN / DRAFT / NOT MERGED | No |
| UI/UX catalog + design Skill | `codex/ui-ux-skill-catalog` | PR #2 OPEN / DRAFT / NOT MERGED | No |
| Current-state reconciliation | `codex/current-state-reconciliation-v0.1` | Documentation implementation branch | No |

## 5. Authority note / หมายเหตุด้าน Authority

Repository presence is evidence of implementation state, not proof of Owner approval for merge, deploy, production, access-control, or distribution changes. Candidate branches remain isolated from `main` until their own approval gates pass.

## 6. Result

**SCR-001: PASS.** Canonical repository, `main` baseline, active collections, and 11-skill inventory are now explicitly established for the reconciliation workstream.
