# SCR-006 — SKILL SYSTEM AUTHORITY & DEPENDENCY MAP v0.1

**Status:** IMPLEMENTED  
**Date:** 2026-10-23  
**Ticket:** #8

## 1. Authority precedence / ลำดับอำนาจ

For this project, use the following order when evidence conflicts:

1. Latest explicit Owner decision / approval
2. Approved/Frozen governance, contract or baseline
3. Verified current repository/runtime/test evidence
4. Approved design not yet implemented
5. Open PR / candidate branch
6. Draft proposal
7. Historical conversation / assumption

Runtime facts such as branch head, PR state and deployed behavior must still be verified from the current system rather than inferred from older approvals.

## 2. Component authority map

| Component | Current role | Source of truth today | Mutation authority now |
|---|---|---|---|
| Public Skills on `main` | Canonical public Skill baseline | `main` HEAD and Skill files | No silent change; changes require approved branch/PR path |
| Website Source PR #1 | Presentation/catalog candidate | PR #1 branch | Candidate work only; no merge/deploy authority |
| UI/UX Skill PR #2 | Design Skill + taxonomy candidate | PR #2 branch | Candidate work only; no merge/release authority |
| ULTIMATE Design | Approved design principles | Owner-approved design decisions + SCR-004 record | Design preservation only; no runnable Skill implementation authority implied |
| Codex Cloud Integration | Distribution/execution design | Approved design/governance decisions | No rollout/environment mutation implied by this reconciliation |
| Skills installer | External distribution mechanism | Current Skills CLI documentation/runtime | Repository docs may describe it; external behavior must be verified before environment-specific claims |
| ULTIMATE entitlement | Future access-control layer | No implemented source of truth yet | NOT AUTHORIZED / NOT IMPLEMENTED |

## 3. Dependency map

```text
Public Skill Baseline (`main`)
        |
        +--> Repository taxonomy / catalog
        |        |
        |        +--> Website catalog metadata
        |        +--> Installation/documentation examples
        |
        +--> Codex project/global Skill distribution

UI/UX Candidate (PR #2)
        |
        +--> if accepted, public Skill count becomes 12
                 |
                 +--> Website Candidate must synchronize from 11 -> accepted catalog

ULTIMATE Approved Design
        |
        +--> ULTIMATE repository/orchestration architecture
                 |
                 +--> ULTIMATE-003 and later modules
                 +--> private distribution / entitlement architecture
                 +--> Website locked-access presentation
```

## 4. Separation of capability and permission

A connected tool, accessible repository, mergeable PR, or successful installer is a **capability signal**, not authorization to:

- merge
- deploy/publish
- alter production
- change auth/permission/secrets
- change billing
- create or expose private ULTIMATE access

Each of those actions requires its own current authority.

## 5. Failure-isolation boundaries

The project now has distinct ownership domains:

### Skill behavior layer
Owns `SKILL.md`, references, metadata and Skill-specific contracts.

### Repository governance layer
Owns taxonomy, version/baseline state, contribution/authority rules and candidate promotion gates.

### Website layer
Owns presentation, catalog rendering, navigation and install UX; it must not redefine Skill behavior as a separate source of truth.

### Distribution/execution layer
Owns how Skills are installed into Codex/other agents, project/global scope, version pinning and update gates.

### ULTIMATE access layer
Future owner of restricted distribution and entitlement. It is currently unimplemented and must not be simulated with UI-only locking.

## 6. Critical architecture rule

The website is a **consumer of the accepted Skill catalog**, not the authority that defines which Skills exist. Likewise, Codex installation is a consumer of a repository/version, not permission to change that repository.

## 7. Result

**SCR-006: PASS.** Authority, ownership boundaries and dependency direction are explicit enough to prevent candidate/main mixing and to expose the Website↔taxonomy and ULTIMATE↔existing-Skill dependencies before future implementation.
