# SCR-005 — CONFLICT & DUPLICATION REGISTER v0.1

**Status:** IMPLEMENTED  
**Date:** 2026-10-23  
**Ticket:** #7

## 1. Conflict Register / ทะเบียน Conflict

| ID | Class | Finding | Status | Severity | Resolution path | Required authority |
|---|---|---|---|---|---|---|
| C-001 | Version/Content Drift | Website PR #1 catalogs 11 Skills while UI/UX PR #2 proposes a 12th Skill | CONFIRMED | HIGH before website promotion | Decide PR #2, then synchronize website candidate before final verification | Owner approval for taxonomy; implementation authority for website update |
| C-002 | Documentation Drift | `npx skills add` vs `npx skills@latest add` were previously treated as competing commands | RESOLVED AS SEMANTIC NON-CONFLICT | LOW | Official Skills CLI documents `npx skills add`; npm permits `skills@latest` to explicitly select the package tag. Decide documentation policy separately | Owner/docs approval if README changes |
| C-003 | Environment Compatibility | Historical user observation: `-g -y` install form did not work in one Codex Desktop context although current CLI docs expose `--global` and `--yes` | UNVERIFIED CURRENTLY | MEDIUM | Reproduce on current target environment before changing instructions | Runtime test authority; docs approval |
| C-004 | Authority Drift | PR #1 and PR #2 are mergeable technically but still Draft / not Owner-approved for merge | CONFIRMED | HIGH | Keep candidate state explicit; separate approval gates | Owner merge approval |
| C-005 | Implementation Gap | ULTIMATE-001/002 and Interaction Contract are approved in design but absent as runnable repository Skills | CONFIRMED | MEDIUM | Define ULTIMATE repository/orchestration architecture before implementation | Owner architecture + implementation approval |
| C-006 | Implementation Gap | Codex Cloud integration is approved at design/governance level but no installation rollout is established in this repo | CONFIRMED | MEDIUM | Stabilize public Skill baseline, then define pinned project/global distribution | Owner implementation/environment approval |
| C-007 | Evidence Freshness | PR #1 records a historical npm registry resolution blocker; that historical environment condition is not current proof | CONFIRMED | MEDIUM | Treat missing lock/build/browser gates as current blocker; re-test environment later | No mutation required for diagnosis; implementation approval for candidate changes |
| C-008 | Governance Duplication | Evidence/authority rules are repeated across multiple Skills | CONFIRMED | LOW now / MEDIUM long-term | Define shared system invariants and domain-specific extensions without silently rewriting Skills | Owner governance approval |
| C-009 | Future Capability Overlap | ULTIMATE Problem Solver can overlap `reconcile-work-context`, `stress-test-and-sharpen`, and `code-review-and-fix` if implemented as a monolith | CONFIRMED DESIGN RISK | HIGH | Make ULTIMATE an orchestration/problem-solving layer with explicit specialist boundaries or invocation rules | Owner architecture approval |

## 2. Installer evidence clarification

Current official Skills CLI documentation uses:

```bash
npx skills add owner/repo
```

and documents `-g/--global`, `-y/--yes`, agent targeting, and specific Skill selection.

`npx skills@latest add owner/repo` is also syntactically valid npm/npx behavior: `@latest` selects the package distribution tag explicitly. Therefore the repository README command is **not proven wrong**. The unresolved question is policy and environment compatibility, not base CLI syntax.

## 3. Duplication Matrix / ตารางความซ้ำซ้อน

| Candidate / Future capability | Existing capability | Shared area | Distinct responsibility | Risk |
|---|---|---|---|---|
| `ui-ux-master-craft` | `reconcile-work-context` | evidence/status/authority | UI/UX product design vs context reconstruction | LOW |
| `ui-ux-master-craft` | `stress-test-and-sharpen` | review, gaps, risks | UI/UX implementation/design system vs generic hardening blueprint | LOW–MEDIUM |
| `ui-ux-master-craft` | `code-review-and-fix` | review/verification | interface/design quality vs code diff and verified bug fix | MEDIUM but controllable |
| ULTIMATE Problem Solver | `reconcile-work-context` | evidence reconstruction | universal diagnosis should consume/reuse context reconciliation rather than replace its source-led role | MEDIUM–HIGH |
| ULTIMATE Problem Solver | `stress-test-and-sharpen` | hypothesis/risk/challenge | problem diagnosis vs pre-implementation hardening | MEDIUM–HIGH |
| ULTIMATE Problem Solver | `code-review-and-fix` | root cause, evidence, regression | cross-system diagnosis vs scoped code review/fix | MEDIUM–HIGH |

## 4. Design requirement derived from duplication analysis

ULTIMATE must not become a catch-all Skill that silently supersedes existing public Skills. Before repository implementation, define one of these relationships explicitly:

1. **Orchestrator model:** ULTIMATE frames/diagnoses and delegates specialized phases to existing Skills; or
2. **Bounded standalone model:** ULTIMATE may operate independently but has clear stop/handoff boundaries where specialized Skills own the next phase.

No model is selected by this document; selection requires Owner approval.

## 5. Result

**SCR-005: PASS.** Material conflicts, implementation gaps, and duplication risks are recorded with impact and resolution authority. No conflict was resolved by silently editing a candidate or baseline.
