# SCR-002 — WEBSITE CANDIDATE RECONCILIATION v0.1

**Status:** IMPLEMENTED / CANDIDATE REVIEWED  
**Date:** 2026-10-23  
**Ticket:** #4  
**Target:** PR #1 — `feat(website): add reconstructed source baseline candidate v0.7.6-rc.2`

## 1. Candidate identity

- Branch: `feat/website-source-baseline-v0.7.6-rc2`
- Base: `main` at `5da20874d1d46f952bdcc4d37f88e546b0bdf1cf`
- Observed head: `be5e5d7838f328db5230ad1e3ef03c49b3079c85`
- PR state at reconciliation: **OPEN / DRAFT / NOT MERGED / MERGEABLE**
- Change size: 43 files, +623 / -0
- Change boundary observed: new `website/` tree; existing `skills/` is not modified by PR #1

## 2. Confirmed candidate contents / สิ่งที่ยืนยันจาก Source

`website/package.json` identifies the website as `vanta-skills-th-en-site` version `0.7.6-rc.2` with React 19.1.1, Vite 7.1.0 and Node test/build scripts.

The PR contains:

- React/Vite website source
- 11-skill catalog metadata and skill icons
- Search/catalog/detail components
- Install panel
- Navigation helpers
- build-info generator
- `source-provenance.json`
- Source tests for config/data/navigation

The candidate therefore represents a **real reconstructed source tree**, not merely a dist bundle.

## 3. Reported validation vs independently re-verified evidence

### Reported in PR evidence
The PR body reports:

- Source tests: 9/9 PASS
- 11/11 skill slugs preserved
- 11/11 skill/detail metadata mapping
- Relative imports PASS
- JSX syntax checks PASS

These results are accepted as **PR-recorded evidence**, but this reconciliation did not independently rerun them.

### Directly re-verified in this reconciliation
- PR remains draft and unmerged
- Candidate still contains no `package-lock.json`
- `package.json` exposes `test`, `build`, and `check` scripts
- Current website catalog is built around the 11-skill `main` baseline

## 4. Unverified / Blocked

The following remain **UNVERIFIED** for a final website baseline:

1. Dependency lock generation and review
2. Clean `npm ci`
3. Fresh `npm test`
4. Fresh `npm run build` / `npm run check`
5. Browser regression on built output
6. Synchronization with any accepted Skill taxonomy changes after the PR was created

The historical PR blocker was inability to resolve `registry.npmjs.org` in its execution environment. That historical cause must not be assumed to still exist today; the missing verification gates are what remain authoritative.

## 5. New dependency discovered during reconciliation

PR #1 encodes **11 Skills**, while PR #2 proposes a 12th Skill (`ui-ux-master-craft`) and a new `design/` collection.

Therefore, if PR #2 is accepted, PR #1 cannot be considered catalog-complete without a follow-up synchronization of website metadata/icons/detail content. This is a **candidate-to-candidate dependency**, not permission to merge either PR.

## 6. Readiness

| Gate | Status |
|---|---|
| Source candidate exists | CONFIRMED |
| Source provenance present | CONFIRMED |
| PR-recorded source tests | REPORTED PASS |
| Dependency lock | MISSING / UNVERIFIED |
| Clean install | UNVERIFIED |
| Fresh production build | UNVERIFIED |
| Browser regression | UNVERIFIED |
| Catalog synchronized with PR #2 if accepted | PENDING DECISION |
| Merge authorization | NOT AUTHORIZED |
| Deploy/Production authorization | NOT AUTHORIZED |

## 7. Result

**SCR-002: PASS as reconciliation.**  
**Website Candidate status remains: DRAFT / DO NOT MERGE / DO NOT DEPLOY.**

Required future gate: resolve Skill catalog dependency first, then run dependency-lock + clean install + test + build + browser regression before any promotion decision.
