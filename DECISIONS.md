# DECISIONS.md — SKILL Decision Ledger

**Project:** SKILL / VANTA Skills  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**Status:** CANDIDATE — Project Execution Context Foundation v0.1

## Purpose / วัตถุประสงค์

เก็บ Owner decisions และ governance decisions ที่ต้องอยู่ข้าม session โดยแยกออกจาก dynamic execution state เพื่อป้องกันการลืม เปลี่ยน baseline แบบเงียบ ๆ หรือใช้ historical assumption แทน decision ที่ได้รับอนุมัติจริง

## Decision Record Format

แต่ละ decision ควรมี:

- `DECISION_ID`
- `DATE`
- `STATUS`
- `DECISION`
- `AUTHORITY`
- `SCOPE`
- `SUPERSEDES`
- `IMPACT`
- `EVIDENCE / NOTES`

สถานะที่ใช้:

- `APPROVED`
- `FROZEN`
- `SUPERSEDED`
- `DEFERRED`
- `REJECTED`
- `CANDIDATE`

---

## SKILL-DEC-001 — Canonical Repository

**DATE:** 2026-10-26  
**STATUS:** APPROVED  
**DECISION:** Canonical repository ของ project คือ `raeraeqecz-vanta/skills-th-en` และ default canonical branch ปัจจุบันคือ `main`.  
**AUTHORITY:** Verified repository evidence + established project identity  
**SCOPE:** Repository identity / execution recovery  
**SUPERSEDES:** None recorded  
**IMPACT:** AI/Agent ต้องยืนยันว่ากำลังทำงานใน repository นี้ก่อนใช้ project-specific state หรือ approval.  
**EVIDENCE / NOTES:** Dynamic `main` HEAD ต้องตรวจสด ไม่ควรถูก freeze ใน decision นี้

## SKILL-DEC-002 — Context Authority Separation

**DATE:** 2026-10-26  
**STATUS:** APPROVED  
**DECISION:** Project context แยก authority เป็น 4 หน้าที่หลัก: `AGENTS.md` สำหรับ startup/authority contract, `CONTEXT.md` สำหรับ stable context, `PROJECT_STATE.md` สำหรับ mutable execution state และ `DECISIONS.md` สำหรับ durable decisions.  
**AUTHORITY:** Owner approval of Project Execution Context Foundation v0.1 next action  
**SCOPE:** Context architecture  
**SUPERSEDES:** Ad-hoc session-only context recovery as the primary mechanism  
**IMPACT:** Dynamic state ห้ามถูกเก็บเป็น permanent decision และ approved decisions ห้ามพึ่ง memory/session history เพียงอย่างเดียว

## SKILL-DEC-003 — Evidence-First Startup

**DATE:** 2026-10-26  
**STATUS:** APPROVED  
**DECISION:** งาน repository/project ต้องเริ่มจาก repository-local context และตรวจ dynamic evidence สดสำหรับ facts ที่เปลี่ยนได้ ก่อนใช้ historical conversation หรือ memory เป็น execution-state evidence.  
**AUTHORITY:** Project governance direction + Owner-approved context foundation  
**SCOPE:** AI/Agent startup and recovery  
**SUPERSEDES:** None recorded  
**IMPACT:** Branch HEAD, PR state, diff, test/build/deployment state ต้อง re-verify เมื่อมีผลต่อการตัดสินใจ

## SKILL-DEC-004 — Candidate-First Context Foundation

**DATE:** 2026-10-26  
**STATUS:** APPROVED  
**DECISION:** `SKILL PROJECT EXECUTION CONTEXT FOUNDATION v0.1` ให้จัดทำบน isolated branch เพื่อ review ก่อน และยังไม่แก้ canonical `main` จนกว่าจะมี Owner approval สำหรับ promotion/merge แยกต่างหาก.  
**AUTHORITY:** Latest explicit Owner approval in current work  
**SCOPE:** `AGENTS.md`, `CONTEXT.md`, `PROJECT_STATE.md`, `DECISIONS.md`  
**SUPERSEDES:** None  
**IMPACT:** การสร้างไฟล์บน candidate branch ได้รับอนุมัติ แต่ merge/release/deploy ไม่ได้รับอนุมัติจาก decision นี้

## SKILL-DEC-005 — Mutation Approval Boundary

**DATE:** 2026-10-26  
**STATUS:** APPROVED  
**DECISION:** Default authority สำหรับ Skill/project workflows คือ `DISCOVER + PROPOSE`; `CREATE` และ `PUBLISH` ต้องอยู่ภายใต้ approval boundary ที่เหมาะสม โดย merge, deploy, production, auth, permission, secret, storage/database migration, billing และ irreversible actions ต้องมี explicit Owner approval.  
**AUTHORITY:** Current Skill System Guide / project governance  
**SCOPE:** Repository and external-system mutation  
**SUPERSEDES:** Any assumption that tool access equals authorization  
**IMPACT:** Capability signal, mergeability, connected tools หรือ existing credentials ไม่ถือเป็น permission อัตโนมัติ

## SKILL-DEC-006 — Candidate Documents Are Not Canonical State

**DATE:** 2026-10-26  
**STATUS:** APPROVED  
**DECISION:** Open PR, candidate branch, reconciliation report หรือ draft specification เป็น evidence/reference แต่ไม่ถือเป็น canonical implementation state จนกว่าจะได้รับการ promote ตาม Owner-approved governance.  
**AUTHORITY:** Project context governance  
**SCOPE:** PRs, branches, reconciliation artifacts, future proposals  
**SUPERSEDES:** None recorded  
**IMPACT:** เอกสารจาก PR #11 ใช้เป็น evidence input ได้ แต่ไม่สามารถ override `main` หรือ current system evidence โดยตัวมันเอง

---

## Pending / Unresolved Decisions

รายการต่อไปนี้ยังไม่ถูกตัดสินโดยไฟล์นี้และต้องตรวจ current evidence + Owner authority แยกต่างหาก:

- การ promote Project Execution Context Foundation v0.1 เข้า `main`
- สถานะสุดท้ายของ UI/UX candidate taxonomy
- การ promote Website source candidate
- ULTIMATE runnable repository/orchestration architecture
- Codex Cloud rollout / distribution architecture
- restricted distribution / entitlement implementation

## Supersession Rule / กฎการแทนที่ Decision

หาก decision ใหม่ขัดกับ decision เดิม:

1. ห้ามแก้ decision เก่าให้ดูเหมือนไม่เคยมี
2. เพิ่ม decision ใหม่พร้อม `SUPERSEDES: <DECISION_ID>`
3. เปลี่ยน status ของ decision เก่าเป็น `SUPERSEDED` เมื่อได้รับอนุมัติ
4. ระบุผลกระทบต่อ baseline, state, docs, code และ downstream workstreams

## Current Boundary

Decision ledger นี้เป็น candidate บน isolated branch เท่านั้น การสร้างไฟล์นี้ไม่ใช่ approval สำหรับ merge, release หรือ deployment.
