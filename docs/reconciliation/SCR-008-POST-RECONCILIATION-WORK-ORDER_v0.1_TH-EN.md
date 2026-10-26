# SCR-008 — POST-RECONCILIATION WORK ORDER v0.1

**Status:** IMPLEMENTED / RECOMMENDED ORDER ONLY  
**Date:** 2026-10-23  
**Ticket:** #10

## Ordering rule / หลักการจัดลำดับ

ลำดับนี้พิจารณาจาก Dependency, Risk, Blocking Relationship, Baseline Necessity และ Reversibility และไม่ได้ให้สิทธิ์ดำเนินงานปลายทางโดยอัตโนมัติ

## Recommended execution order

### 1. Resolve UI/UX Candidate decision — PR #2
PR #2 เปลี่ยน Candidate taxonomy จาก 11 เป็น 12 Skills หากได้รับการยอมรับ Website ซึ่งเป็น consumer ของ catalog ต้องรอผลตัดสิน taxonomy ก่อน final verification.

**Gate:** Owner decision: Accept / Amend / Reject. No merge by this document.

### 2. Reconcile installer documentation policy
Current Skills CLI documentation uses `npx skills add owner/repo`; `npx skills@latest add owner/repo` is the same package invoked with an explicit npm `latest` tag. กำหนด canonical project guidance และตรวจ target Codex environment ก่อนอ้าง compatibility เฉพาะ environment.

### 3. Synchronize Website Candidate with accepted taxonomy
Dependency: Step 1. หาก PR #2 accepted ให้ Website candidate sync metadata/detail/icon coverage จาก 11 ไปยัง accepted catalog. หาก rejected ให้บันทึก decision และคง 11-Skill coverage.

### 4. Complete Website verification gates
Dependency: Step 3.

Required gates:
1. dependency lock
2. clean install
3. test suite
4. production build/check
5. browser regression
6. provenance/build-info verification
7. final diff review against accepted taxonomy

Passing these gates means `READY FOR OWNER REVIEW`, not automatic merge or release.

### 5. Define ULTIMATE repository + orchestration architecture
ทำก่อน runnable ULTIMATE implementation เพราะมี overlap risk กับ `reconcile-work-context`, `stress-test-and-sharpen`, และ `code-review-and-fix`.

Must decide:
- Orchestrator vs bounded-standalone relationship
- Handoff boundaries to existing Skills
- Public vs restricted source ownership
- Version/baseline model
- Shared invariant strategy without copy drift

### 6. Continue ULTIMATE-003 — Evidence Acquisition & Diagnostic Strategy
Dependency: Step 5 architecture direction. Preserve ULTIMATE-001/002 and Interaction Contract. Design how the Problem Solver chooses the highest-value evidence with minimum-risk system change.

### 7. Codex Cloud Integration implementation plan
Dependency: stable accepted public Skill baseline + installer policy.

Plan:
- Core/Global vs Workflow/Shared vs Project-specific scope
- version/ref pinning
- update gates
- project isolation
- rollback/removal behavior

### 8. ULTIMATE restricted-distribution architecture
Dependency: ULTIMATE architecture + Website/distribution boundaries. A visual lock alone must not be treated as the access boundary; define real source/distribution control first.

## Mapping to original candidate backlog

| Candidate | Reconciled order | Rationale |
|---|---:|---|
| B. UI/UX Candidate | 1 | Changes taxonomy |
| C. Installer docs | 2 | Stabilizes distribution guidance |
| A. Website verification | 3–4 | Must consume accepted taxonomy |
| D. ULTIMATE repo architecture | 5 | Prevents overlap/duplication |
| E. ULTIMATE-003 | 6 | Builds on architecture + 001/002 |
| F. Codex Cloud integration | 7 | Consumes stable public baseline |
| G. ULTIMATE restricted distribution | 8 | Depends on real distribution boundary |

## Stop conditions

Owner decision is required before merging candidates, changing `main`, releasing the Website, rolling out Codex environments, or implementing restricted ULTIMATE distribution.

## Result

**SCR-008: PASS.** Immediate next decision after reconciliation review is PR #2 taxonomy acceptance. No downstream item is self-authorizing.
