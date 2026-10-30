# PROJECT_STATE.md — SKILL Current Execution State

**Project:** SKILL / VANTA Skills  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**State Type:** Mutable execution snapshot  
**Last Verified:** 2026-10-30 (Asia/Bangkok)  
**Status:** CANONICAL CONTEXT + 12-SKILL CATALOG + WEBSITE SOURCE ACTIVE / NAMING + FREE-ACCESS GOVERNANCE CANDIDATE

> This file is a recovery snapshot, not a permanent truth. Re-verify dynamic facts before execution-critical decisions.

## 1. Canonical Repository State / สถานะ Canonical

- Repository: `raeraeqecz-vanta/skills-th-en`
- Default branch: `main`
- Current verified `main` HEAD at this review: `2efa634df1c6758f46a57fdc42ade45a637c44c1`
- Project Execution Context Foundation v0.1 canonical merge anchor: `41e804533610282dc0a3e1bd3b47c8c5b135ca0e`
- UI/UX Skill Catalog canonical merge anchor: `ef5e014bf098a2c53f5b967cca028c1d3847d311`
- Website Source `v0.7.6-rc.3` canonical merge anchor: `7919801d4e05e35b568cb1827b619de741f7f22f`
- PR #13, PR #2, and PR #1 are merged into `main`
- Canonical Skill catalog indexes 12 Skills, including `ui-ux-master-craft`
- Canonical current Website source is under `website/` and synchronized to the 12-Skill catalog

## 2. Current Work / งานปัจจุบัน

**Workstream:** `DESCRIPTIVE SKILL NAMING + FREE ACCESS GOVERNANCE`

**Working branch:** `codex/free-skills-naming-governance-v0.1`

**Objective:** นำ Owner decision วันที่ 2026-10-30 มาจัดทำเป็น candidate governance โดย:

1. ยกเลิกการใช้ umbrella/tier/codename ที่ไม่บอกหน้าที่จริงของ Skill
2. ใช้ descriptive standalone Skill names ที่ผู้ใช้เข้าใจได้ทันที
3. กำหนด Free Access Invariant ว่า Skill ทุกตัวใน canonical catalog ต้องใช้งานตัว Skill ได้ฟรี
4. ยกเลิกแนวคิด paid/premium/locked/restricted/entitlement-gated Skill access
5. รักษา historical evidence โดยไม่ rewrite PR/เอกสารเก่า

**Current candidate naming:**
- `verify-before-claim` — preserved Epistemic Integrity & Verification design; runnable implementation not yet approved
- `define-the-real-problem` — preserved Problem Framing & Failure Definition design; runnable implementation not yet approved
- `gather-diagnostic-evidence` — candidate future Skill identity; implementation scope not yet approved
- `Internal Orchestration + Visible Checkpoints` remains shared interaction behavior, not a standalone Skill

**Free Access Invariant:**
- no paid/premium/locked/restricted Skill tier
- no project entitlement/paywall to unlock a Skill
- paid third-party integration may be optional, but core Skill workflow must retain a free/manual path
- access control for production, secrets, repository administration, private accounts or user/project data remains separate and is not removed by this policy

## 3. Candidate Governance Changes / การเปลี่ยนแปลงบน Working Branch

Candidate scope currently includes:

- `docs/SKILL-NAMING-AND-FREE-ACCESS-POLICY_v0.1_TH-EN.md`
- `README.md`
- `skills/README.md`
- `CONTEXT.md`
- `DECISIONS.md`
- `PROJECT_STATE.md`

New durable Owner decisions recorded in the candidate ledger:

- `SKILL-DEC-010 — Descriptive Standalone Skill Naming`
- `SKILL-DEC-011 — All Skills Must Be Free to Use`

These Owner decisions are explicit in the current work, but the repository files containing them are not canonical until separately promoted to `main`.

## 4. Existing Promoted Workstreams

### PR #1 — Website Source
- State: `MERGED`
- Canonical squash merge commit: `7919801d4e05e35b568cb1827b619de741f7f22f`
- Version: `v0.7.6-rc.3`
- Scope: Website source under `website/`
- Catalog: synchronized to 12 Skills
- Final verification before merge covered `npm ci`, source tests, production build, and Chromium browser regression smoke
- Result: `PROMOTED TO MAIN / CANONICAL CURRENT SOURCE`
- Durable decision: `SKILL-DEC-009`
- Baseline note: reconstructed provenance remains; not declared `APPROVED` or `FROZEN` Website baseline

### PR #2 — UI/UX Skill + Catalog
- State: `MERGED`
- Canonical squash merge commit: `ef5e014bf098a2c53f5b967cca028c1d3847d311`
- Result: `PROMOTED TO MAIN / CANONICAL`
- Durable decision: `SKILL-DEC-008`

### PR #13 — Project Execution Context Foundation
- State: `MERGED`
- Canonical merge commit: `41e804533610282dc0a3e1bd3b47c8c5b135ca0e`
- Result: `PROMOTED TO MAIN / ACTIVE`
- Durable decision: `SKILL-DEC-007`

## 5. PR #11 — Historical Reconciliation Candidate

- State at latest review: `OPEN / DRAFT / NOT MERGED`
- Head: `codex/current-state-reconciliation-v0.1`
- Head SHA: `1c5d8ae9b51c040b6b28b3985b0ad99fad06f679`
- Historical merge base: `5da20874d1d46f952bdcc4d37f88e546b0bdf1cf`
- Latest observed relation against `main@2efa634d...`: `DIVERGED — ahead 10 / behind 10`
- Scope: 10 documentation files under `docs/reconciliation/`
- Current classification: `STALE / HISTORICAL RECONCILIATION EVIDENCE`
- Do not rewrite historical terminology merely to make the old PR look current
- Any old naming, restricted-distribution, entitlement or locked-access direction in PR #11 is superseded by the explicit Owner decisions represented by `SKILL-DEC-010` and `SKILL-DEC-011`

### Latest SCR disposition review
- SCR-001: `SUPERSEDED`
- SCR-002: `SUPERSEDED`
- SCR-003: `PARTIALLY REUSABLE`
- SCR-004: design content reusable after renaming into descriptive Skill identities
- SCR-005: `PARTIALLY REUSABLE`
- SCR-006: `PARTIALLY REUSABLE`; avoid duplicating authority rules already canonical in root context
- SCR-007: `SUPERSEDED`
- SCR-008: `PARTIALLY REUSABLE`

Recommended PR #11 disposition remains `PARTIAL ABSORB`, then `RETAIN HISTORICAL + CLOSE` only after useful design knowledge is safely represented under the new naming/free-access policy and after separate Owner approval to close the PR.

## 6. Confirmed Decisions / ยืนยันแล้ว

- Canonical repository identity is unchanged
- Existing 12-Skill public catalog remains canonical
- Website current source remains canonical through PR #1
- `SKILL-DEC-002`, `003`, `005`, `006` remain `CANDIDATE`; this work does not silently promote them
- Owner explicitly removed the previous umbrella/tier naming direction on 2026-10-30
- Owner explicitly decided that all Skills must be free to use on 2026-10-30
- Historical documents remain historical evidence and do not override newer Owner decisions

## 7. Pending / Unresolved

- Promotion of this naming/free-access governance candidate to canonical `main`
- Runnable implementation scope for `verify-before-claim`
- Runnable implementation scope for `define-the-real-problem`
- Scope/design decision for `gather-diagnostic-evidence`
- Re-plan of PR #11 partial absorption using only descriptive Skill identities
- Long-term disposition/closure of PR #11 after absorption
- Whether reconstructed Website source should later become an `APPROVED` or `FROZEN` Website baseline
- Codex Cloud rollout/distribution architecture under the Free Access Invariant
- Whether candidate decisions `SKILL-DEC-002`, `003`, `005`, `006` should become `APPROVED`

## 8. Dependency & Impact / Dependency และผลกระทบ

```text
AGENTS / CONTEXT / PROJECT_STATE / DECISIONS
              |
              +--> Naming + Free Access Policy
              |        |
              |        +--> Current + future Skill identities
              |        +--> Catalog / Website presentation
              |        +--> Distribution design
              |
              +--> Canonical Skill source + 12-Skill catalog
                              |
                              +--> Canonical Website source
                              +--> Codex / ChatGPT adapters
                              +--> Future diagnostic Skills
```

The Website and distribution layers consume the accepted Skill catalog and must not introduce a paid/restricted Skill tier or redefine Skill identity independently.

## 9. Evidence Freshness Rules / กฎตรวจความสด

Before any execution-critical next step:

1. verify current `main` HEAD
2. verify target branch / PR head
3. compare target branch against current `main`
4. verify PR state and mergeability when relevant
5. inspect affected governance/catalog/Website overlap
6. verify test/build/runtime/deployment evidence when applicable
7. mark mismatch as `STALE`, `CONFLICT`, `UNCONFIRMED`, or `NOT APPLICABLE`

## 10. Approval Boundary / ขอบเขตอนุมัติ

**Currently allowed by this work:** prepare/review the isolated naming + free-access governance candidate and inspect historical PR #11 evidence.

**Separate Owner approval required before:** merge/promotion of this branch to `main`, closing or rewriting PR #11, implementing new runnable Skills, release/deploy/publish, production mutation, auth/permission/secret/billing changes, database/storage migration, or irreversible actions.

## 11. Recommended Next Action / ขั้นถัดไป

**`NAMING + FREE ACCESS GOVERNANCE — FINAL REVIEW`**

Required review:
1. verify candidate branch is based on current `main`
2. inspect changed files only
3. ensure current governance does not retain restricted/paid Skill access as an active direction
4. ensure descriptive names are clearly separated from implementation approval
5. ensure historical PR #11 remains untouched
6. classify candidate `PASS / AMEND / HOLD`
7. present Owner promotion/merge decision gate

**No merge, deploy, production change, PR #11 closure, or runnable Skill implementation is authorized by this Next Action.**
