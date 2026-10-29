# DECISIONS.md — SKILL Decision Ledger

**Project:** SKILL / VANTA Skills  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**Ledger Version:** v0.1  
**Purpose:** Durable record of Owner/governance decisions, separated from mutable execution state

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

> `CANDIDATE` หมายถึงแนวทางที่ถูกออกแบบ/เสนอไว้ แต่ยังห้ามตีความว่าเป็น Owner-approved governance จนกว่าจะมี explicit approval ที่ครอบคลุม decision นั้นจริง

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
**STATUS:** CANDIDATE  
**DECISION:** Project context แยก authority เป็น 4 หน้าที่หลัก: `AGENTS.md` สำหรับ startup/authority contract, `CONTEXT.md` สำหรับ stable context, `PROJECT_STATE.md` สำหรับ mutable execution state และ `DECISIONS.md` สำหรับ durable decisions.  
**AUTHORITY:** Proposed by Project Execution Context Foundation v0.1; implementation/review authorized, governance promotion not yet approved  
**SCOPE:** Context architecture  
**SUPERSEDES:** Ad-hoc session-only context recovery as the primary mechanism, if promoted  
**IMPACT:** หากได้รับอนุมัติ Dynamic state จะไม่ถูกเก็บเป็น permanent decision และ approved decisions จะไม่พึ่ง memory/session history เพียงอย่างเดียว

## SKILL-DEC-003 — Evidence-First Startup

**DATE:** 2026-10-26  
**STATUS:** CANDIDATE  
**DECISION:** งาน repository/project ควรเริ่มจาก repository-local context และตรวจ dynamic evidence สดสำหรับ facts ที่เปลี่ยนได้ ก่อนใช้ historical conversation หรือ memory เป็น execution-state evidence.  
**AUTHORITY:** Proposed by Project Execution Context Foundation v0.1; aligned with existing project governance direction  
**SCOPE:** AI/Agent startup and recovery  
**SUPERSEDES:** None recorded  
**IMPACT:** หากได้รับอนุมัติ Branch HEAD, PR state, diff, test/build/deployment state ต้อง re-verify เมื่อมีผลต่อการตัดสินใจ

## SKILL-DEC-004 — Candidate-First Context Foundation

**DATE:** 2026-10-26  
**STATUS:** APPROVED  
**DECISION:** `SKILL PROJECT EXECUTION CONTEXT FOUNDATION v0.1` ให้จัดทำบน isolated branch เพื่อ review ก่อน และยังไม่แก้ canonical `main` จนกว่าจะมี Owner approval สำหรับ promotion/merge แยกต่างหาก.  
**AUTHORITY:** Explicit Owner approval in current work  
**SCOPE:** `AGENTS.md`, `CONTEXT.md`, `PROJECT_STATE.md`, `DECISIONS.md`  
**SUPERSEDES:** None  
**IMPACT:** การสร้าง/แก้ candidate files และเปิด Draft PR ได้รับอนุมัติ แต่ merge/release/deploy ไม่ได้รับอนุมัติจาก decision นี้

## SKILL-DEC-005 — Mutation Approval Boundary

**DATE:** 2026-10-26  
**STATUS:** CANDIDATE  
**DECISION:** Default authority สำหรับ Skill/project workflows ควรเป็น `DISCOVER + PROPOSE` เว้นแต่ Owner หรือ canonical governance จะให้อำนาจเพิ่มเติม; merge, deploy, production, auth, permission, secret, storage/database migration, billing และ irreversible actions ต้องมี explicit Owner approval.  
**AUTHORITY:** Proposed by Project Execution Context Foundation v0.1 and informed by current Skill System Guide / project governance  
**SCOPE:** Repository and external-system mutation  
**SUPERSEDES:** Any assumption that tool access equals authorization, if promoted  
**IMPACT:** หากได้รับอนุมัติ capability signal, mergeability, connected tools หรือ existing credentials จะไม่ถือเป็น permission อัตโนมัติ

## SKILL-DEC-006 — Candidate Documents Are Not Canonical State

**DATE:** 2026-10-26  
**STATUS:** CANDIDATE  
**DECISION:** Open PR, candidate branch, reconciliation report หรือ draft specification ควรเป็น evidence/reference แต่ไม่ถือเป็น canonical implementation state จนกว่าจะได้รับการ promote ตาม Owner-approved governance.  
**AUTHORITY:** Proposed by Project Execution Context Foundation v0.1; consistent with current review workflow  
**SCOPE:** PRs, branches, reconciliation artifacts, future proposals  
**SUPERSEDES:** None recorded  
**IMPACT:** หากได้รับอนุมัติ เอกสารจาก PR #11 ใช้เป็น evidence input ได้ แต่ไม่สามารถ override `main` หรือ current system evidence โดยตัวมันเอง

## SKILL-DEC-007 — Context Foundation Promotion to Main

**DATE:** 2026-10-26  
**STATUS:** APPROVED  
**DECISION:** Promote the reviewed `SKILL PROJECT EXECUTION CONTEXT FOUNDATION v0.1` into canonical `main` via PR #13 after final pre-merge freshness verification.  
**AUTHORITY:** Explicit Owner merge approval + verified GitHub merge evidence  
**SCOPE:** `AGENTS.md`, `CONTEXT.md`, `PROJECT_STATE.md`, `DECISIONS.md`  
**SUPERSEDES:** None; completes the promotion gate defined by `SKILL-DEC-004`  
**IMPACT:** The four context files are now present on canonical `main`. This does **not** promote `SKILL-DEC-002`, `003`, `005`, or `006`; those records remain `CANDIDATE` until separately approved.  
**EVIDENCE / NOTES:** PR #13 merged successfully; canonical merge commit `41e804533610282dc0a3e1bd3b47c8c5b135ca0e`.

## SKILL-DEC-008 — UI/UX Skill Catalog Promotion to Main

**DATE:** 2026-10-27  
**STATUS:** APPROVED  
**DECISION:** Promote the refreshed UI/UX Skill + repository catalog candidate into canonical `main` via PR #2 after amendment, final content/Skill validation, and final pre-merge freshness verification.  
**AUTHORITY:** Explicit Owner merge approval + verified GitHub merge evidence  
**SCOPE:** `design/` collection, `ui-ux-master-craft`, repository Skill catalog/collection indexes, root `README.md`, and Skill System Guide taxonomy updates; 14 changed files total  
**SUPERSEDES:** The pre-promotion candidate status of PR #2  
**IMPACT:** Canonical Skill inventory now includes the UI/UX design collection and `ui-ux-master-craft`, bringing the indexed catalog to 12 Skills. Downstream presentation consumers such as the Website candidate must be reconciled against this catalog before promotion. This decision grants no deployment, production, auth, secret, database/storage, billing, or external publication authority.  
**EVIDENCE / NOTES:** PR #2 merged successfully; canonical squash merge commit `ef5e014bf098a2c53f5b967cca028c1d3847d311`. Final pre-merge relation was `ahead 1 / behind 0`, with the intended 14-file boundary.

## SKILL-DEC-009 — Website Source Promotion to Main

**DATE:** 2026-10-30  
**STATUS:** APPROVED  
**DECISION:** Promote the refreshed reconstructed Website source `v0.7.6-rc.3` into canonical `main` via PR #1 after synchronizing the Website presentation layer to the canonical 12-Skill catalog and completing fresh install, test, production-build, and browser-regression verification.  
**AUTHORITY:** Explicit Owner merge approval + verified GitHub merge evidence  
**SCOPE:** `website/` only; 45 changed files including React/Vite source, 12-Skill presentation metadata, UI/UX Skill icon/detail integration, tests, provenance metadata, and tracked `package-lock.json`  
**SUPERSEDES:** The pre-promotion repository status of PR #1 as an unmerged Website source candidate  
**IMPACT:** The reconstructed Website source is now the canonical current Website source on `main`. This promotion does **not** declare the reconstructed source an `APPROVED` or `FROZEN` Website baseline, does not erase its reconstruction provenance, and grants no deploy, publish, production, auth, secret, database/storage, billing, or other external mutation authority.  
**EVIDENCE / NOTES:** PR #1 squash-merged successfully; canonical merge commit `7919801d4e05e35b568cb1827b619de741f7f22f`. Final pre-merge relation was `ahead 1 / behind 0`, `mergeable=true`, and all 45 changed files were under `website/`. Verification evidence includes RED run `40851389053`, GREEN/full run `40851733957`, and final tracked-lockfile verification run `40852160592` covering `npm ci`, full source tests, production build, and Chromium browser regression smoke. `website/README.md` and `website/source-provenance.json` intentionally retain reconstructed-candidate provenance language; a future Approved/Frozen Website baseline requires a separate Owner decision.

---

## Pending / Unresolved Decisions

รายการต่อไปนี้ยังไม่ถือว่าได้รับอนุมัติจาก ledger นี้และต้องมี Owner authority แยกต่างหาก:

- การ promote `SKILL-DEC-002`, `SKILL-DEC-003`, `SKILL-DEC-005`, `SKILL-DEC-006` จาก `CANDIDATE` เป็น `APPROVED`
- การตัดสินว่า reconstructed Website source ควรถูกยกระดับเป็น `APPROVED` หรือ `FROZEN` Website baseline หรือไม่
- สถานะระยะยาวของ reconciliation candidate / PR #11
- ULTIMATE runnable repository/orchestration architecture
- Codex Cloud rollout / distribution architecture
- restricted distribution / entitlement implementation

## Supersession Rule / กฎการแทนที่ Decision

หาก decision ใหม่ขัดกับ decision เดิม:

1. ห้ามแก้ decision เก่าให้ดูเหมือนไม่เคยมี
2. เพิ่ม decision ใหม่พร้อม `SUPERSEDES: <DECISION_ID>`
3. เปลี่ยน status ของ decision เก่าเป็น `SUPERSEDED` เมื่อได้รับอนุมัติ
4. ระบุผลกระทบต่อ baseline, state, docs, code และ downstream workstreams

## Governance Boundary

การมี record อยู่ในไฟล์นี้ไม่ได้ทำให้ record นั้นเป็น `APPROVED` โดยอัตโนมัติ ต้องอ่าน `STATUS` และ `AUTHORITY` ของแต่ละ decision เสมอ

Merge หรือ promotion ของตัวไฟล์เองก็ไม่ควรถูกตีความว่าเป็น approval ของ decision ที่ยังมีสถานะ `CANDIDATE` เว้นแต่ Owner ระบุชัดว่าการอนุมัตินั้นครอบคลุม decision เหล่านั้นด้วย
