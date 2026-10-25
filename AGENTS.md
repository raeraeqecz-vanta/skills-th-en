# AGENTS.md — SKILL Project Execution Contract

**Project:** SKILL / VANTA Skills  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**Status:** CANDIDATE — Project Execution Context Foundation v0.1  
**Scope:** Repository-local AI startup, evidence, authority, mutation, and handoff rules

## 1. Purpose / วัตถุประสงค์

ไฟล์นี้เป็น Startup Contract สำหรับ AI/Agent ทุกตัวที่ทำงานกับ repository นี้ เพื่อให้ทุก session เริ่มจากหลักฐานล่าสุดของ project เดียวกัน ลด context drift และป้องกันการเปลี่ยน baseline หรือ production โดยไม่ได้รับอนุมัติ

This file is the startup contract for every AI/agent working in this repository. Its purpose is to recover current project state from repository evidence, prevent cross-session drift, and stop unauthorized baseline or production changes.

## 2. Mandatory Startup Protocol / ลำดับอ่านบังคับ

ก่อนวิเคราะห์ ออกแบบ implement review หรือเสนอ mutation ที่เกี่ยวกับ repository นี้ ให้ทำตามลำดับ:

1. ยืนยัน repository, target branch/ref และ task scope ปัจจุบัน
2. อ่าน `AGENTS.md`
3. อ่าน `CONTEXT.md`
4. อ่าน `PROJECT_STATE.md`
5. อ่าน `DECISIONS.md` เฉพาะ decision ที่เกี่ยวข้อง
6. อ่าน spec / docs / Skill source ที่เกี่ยวข้องกับงานนั้น
7. ตรวจ dynamic evidence สดเมื่อมีผลต่อคำตอบ เช่น:
   - default branch
   - current `main` HEAD
   - working branch HEAD
   - PR state / draft / merge state
   - diff ระหว่าง working branch กับ `main`
   - test/build/deployment evidence ที่เกี่ยวข้อง
8. แยกผลเป็น `CONFIRMED`, `UNCONFIRMED`, `STALE`, `CONFLICT` หรือ `NOT APPLICABLE`
9. ระบุ Current Work, Allowed Actions, Prohibited Actions และ Next Action ก่อน mutation ที่มีความเสี่ยง

ห้ามใช้ความจำ บทสนทนาเก่า หรือ candidate document แทน current repository/runtime evidence เมื่อข้อเท็จจริงนั้นสามารถเปลี่ยนแปลงได้

## 3. Source-of-Truth Precedence / ลำดับอำนาจ

เมื่อหลักฐานขัดแย้งกัน ให้ใช้ลำดับต่อไปนี้:

1. Latest explicit Owner decision / approval
2. Approved or Frozen governance / baseline / contract
3. Verified current repository, runtime, test, or deployment evidence
4. Approved design not yet implemented
5. Open PR or candidate branch
6. Draft proposal
7. Historical conversation, memory, or inference

Dynamic facts must still be re-verified even when an older approved document mentions them.

## 4. Project Isolation / การแยกโครงการ

- ข้อมูล กฎ baseline หรือ approval ของ project อื่นห้ามถูกนำมาใช้กับ `skills-th-en` โดยไม่มีหลักฐานว่าถูกประกาศให้ใช้ร่วมกัน
- Treat all non-explicitly shared rules as `PROJECT-ONLY`.
- หาก repository หรือ project identity ไม่ชัดเจนและมีความเสี่ยงต่อ cross-project contamination ให้หยุด mutation และรายงาน conflict ก่อน

## 5. Mutation Boundary / ขอบเขตการแก้ไข

Default authority คือ `DISCOVER + PROPOSE`.

ต้องมี Owner approval ที่ชัดเจนก่อน:

- merge หรือ push ไปยัง protected/canonical baseline ที่มีผลจริง
- deploy / release / publish
- production mutation
- auth / permission / secret / credential changes
- storage / database migration
- billing changes
- irreversible or difficult-to-reverse actions

การอนุมัติให้ออกแบบ สร้าง candidate branch หรือจัดทำเอกสาร ไม่เท่ากับการอนุมัติ merge/deploy โดยอัตโนมัติ

## 6. Baseline Protection / การป้องกัน Baseline

- ห้ามเปลี่ยนสิ่งที่ระบุ `APPROVED`, `FROZEN`, หรือ canonical baseline แบบเงียบ ๆ
- หากจำเป็นต้องเปลี่ยน ต้องระบุ:
  - conflict
  - reason
  - affected files/workstreams
  - migration or rollback impact
  - Owner decision required
- Candidate branch และ Draft PR ไม่ถือเป็น canonical truth จนกว่าจะได้รับการ promote ตาม governance ที่อนุมัติ

## 7. Context Maintenance Contract / กติกาอัปเดตบริบท

เมื่อการทำงานเปลี่ยน state ของ project อย่างมีนัยสำคัญ:

- อัปเดต `PROJECT_STATE.md` ให้สะท้อน current work / blockers / next action
- บันทึก Owner decision ที่มีผลระยะยาวใน `DECISIONS.md`
- แก้ `CONTEXT.md` เฉพาะเมื่อ stable project identity, architecture boundary หรือ source-of-truth model เปลี่ยน
- แก้ `AGENTS.md` เฉพาะเมื่อ startup protocol, authority, mutation, or handoff contract เปลี่ยน

ไม่ควร duplicate รายละเอียดเดียวกันหลายไฟล์ หากข้อมูลนั้นมี authority file ที่ชัดเจนอยู่แล้ว

## 8. Execution-State Freshness / ความสดของสถานะ

`PROJECT_STATE.md` เป็น mutable snapshot ไม่ใช่หลักฐานสดถาวร

ก่อนใช้ field ที่เปลี่ยนได้ เช่น SHA, PR state, deployment status หรือ test status เพื่ออนุมัติการกระทำ ให้ตรวจระบบจริงอีกครั้งเมื่อเครื่องมือเข้าถึงได้

หาก snapshot ไม่ตรงกับ current evidence ให้ mark `STALE` และใช้ current evidence เป็น execution truth โดยไม่เขียนทับ Approved/Frozen decisions.

## 9. Review and Handoff / การรีวิวและส่งต่องาน

เมื่อจบรอบงานที่มีผลต่อ project ให้ส่งต่ออย่างน้อย:

- Current Work
- Confirmed Decisions
- Changed Files / Outputs
- Evidence / refs / SHAs ที่สำคัญ
- Open Conflicts / Unknowns
- Approval Boundary
- Recommended Next Action

สำหรับงาน implementation หรือ change ที่สำคัญ ต้องตรวจ diff / test evidence / impact ก่อนสรุปว่าเสร็จ

## 10. Stop Conditions / เงื่อนไขหยุด

หยุด mutation และรายงาน Owner เมื่อ:

- project/repository identity ไม่ชัดเจน
- พบ conflict กับ Approved/Frozen baseline
- ต้องใช้สิทธิ์ที่ยังไม่ได้รับอนุมัติ
- execution-critical evidence ขาดหรือ stale จนตัดสินใจอย่างปลอดภัยไม่ได้
- task ต้องแตะ production, auth, secret, permission, billing, migration หรือ irreversible action โดยไม่มี explicit approval

## 11. Current Foundation Boundary

Project Execution Context Foundation v0.1 นี้จัดทำเพื่อ review บน isolated branch เท่านั้น

**It does not authorize merge to `main`, deployment, release, or production changes.**
