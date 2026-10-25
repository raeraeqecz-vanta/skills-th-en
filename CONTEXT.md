# CONTEXT.md — SKILL Stable Project Context

**Project:** SKILL / VANTA Skills  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**Status:** CANDIDATE — Project Execution Context Foundation v0.1  
**Purpose:** Stable project identity, architecture boundaries, and source-of-truth model

## 1. Project Identity / ตัวตนโครงการ

VANTA Skills คือชุด governed AI Skills ภาษาไทย–อังกฤษ สำหรับงานด้าน project context, specification, implementation, quality assurance, documentation และ release workflows.

Repository นี้เป็น canonical public repository สำหรับ Skill source และเอกสาร governance ที่ได้รับการยอมรับแล้วของ project นี้ เว้นแต่ Owner จะกำหนด authority source ใหม่อย่างชัดเจน

## 2. Primary Mission / เป้าหมายหลัก

ทำให้ผู้ใช้ โดยเฉพาะผู้ใช้ภาษาไทย สามารถติดตั้ง เข้าใจ และใช้ AI Skills ที่มี governance, context awareness, evidence discipline, approval gates และ handoff ที่ชัดเจนได้ง่าย โดยไม่ผูกตรรกะหลักกับ agent platform เดียว

## 3. Stable Architecture Boundaries / ขอบเขตสถาปัตยกรรม

### Skill Behavior Layer
`skills/` เป็นพื้นที่สำหรับ Skill behavior, `SKILL.md`, metadata, references, assets และ agent adapters ที่เกี่ยวข้อง

### Governance & Documentation Layer
`docs/` และ root governance/context files ใช้เก็บมาตรฐานกลาง บริบท การตัดสินใจ specification และเอกสารที่ไม่ควรถูกฝังซ้ำใน Skill ทุกตัว

### Website Layer
Website เป็น consumer/presentation layer ของ accepted Skill catalog ไม่ควรกลายเป็น source of truth แยกที่นิยาม Skill behavior หรือ taxonomy เอง

### Distribution / Execution Layer
วิธีติดตั้งหรือเรียกใช้บน ChatGPT, Codex หรือ agent environment อื่นเป็น adapter/distribution concern และต้องตรวจ compatibility ของ environment จริงก่อนสรุปความสามารถ

### Restricted / Future Capability Layer
ระบบ restricted distribution, entitlement หรือ ULTIMATE-specific access control ต้องมี architecture และ authority แยกต่างหาก ไม่ควรจำลอง security boundary ด้วย UI lock เพียงอย่างเดียว

## 4. Source-of-Truth Model / โมเดลแหล่งความจริง

ใช้ไฟล์ตามบทบาทดังนี้:

- `AGENTS.md` = startup / authority / mutation contract
- `CONTEXT.md` = stable project identity and architecture context
- `PROJECT_STATE.md` = mutable execution-state snapshot
- `DECISIONS.md` = durable Owner decision ledger
- `docs/` = specifications, standards, reviews, reconciliation evidence, historical artifacts
- `skills/` = runnable Skill source and Skill-local contracts

ห้ามให้ `PROJECT_STATE.md` แทน approved decision และห้ามให้ `DECISIONS.md` แทน dynamic repository/runtime verification

## 5. Authority Principles / หลักอำนาจ

- Latest explicit Owner decision มีลำดับสูงสุดสำหรับการตัดสินใจของ project
- Approved/Frozen baseline ห้ามเปลี่ยนแบบเงียบ ๆ
- Current repository/runtime/test evidence เป็น authority สำหรับข้อเท็จจริงที่เปลี่ยนได้
- Candidate branch, Draft PR, proposal และ historical conversation เป็น evidence แต่ไม่ใช่ canonical implementation state โดยอัตโนมัติ

รายละเอียด startup และ mutation rules ให้ยึด `AGENTS.md`

## 6. Project Isolation / การแยกโครงการ

Repository นี้ต้องไม่รับ rule, state, approval, secret, baseline หรือ implementation fact จาก project อื่นโดยไม่มี explicit shared-governance evidence

Cross-project reference ใช้ได้เพื่อ research หรือ pattern comparison แต่ห้ามถือเป็น permission หรือ canonical state ของ SKILL project

## 7. Context Lifecycle / วงจรบริบท

### Stable Context
ควรเปลี่ยน `CONTEXT.md` เมื่อ:
- project mission เปลี่ยน
- repository ownership/canonical source เปลี่ยน
- architecture boundary เปลี่ยน
- source-of-truth model เปลี่ยน

### Mutable State
ข้อมูลเช่น branch, SHA, PR, blocker, current work, test status และ next action ให้อยู่ใน `PROJECT_STATE.md`

### Durable Decisions
Owner decisions ที่มีผลข้าม session หรือกำหนด baseline ให้อยู่ใน `DECISIONS.md`

### Historical Evidence
Reconciliation reports, reviews, superseded plans และ investigation artifacts ให้อยู่ใน `docs/` โดยไม่ copy เนื้อหาทั้งหมดเข้า context files

## 8. Context Freshness Rule / กฎความสด

ก่อนใช้ข้อมูล dynamic เพื่อสั่ง implement, merge, release หรือ deploy ต้องตรวจ current system evidence อีกครั้งเมื่อเข้าถึงได้

หากเอกสาร context ขัดกับหลักฐานสด:

- mark เอกสาร/field นั้น `STALE`
- ใช้ current evidence สำหรับ execution truth
- ห้ามแก้ Approved/Frozen decision โดยอัตโนมัติ
- บันทึก conflict หากมีผลต่อ next action

## 9. Language & Documentation Direction

ภาษาไทยเป็นภาษาหลักสำหรับความเข้าใจของผู้ใช้ และเก็บคำอังกฤษสำหรับชื่อระบบ คำเทคนิค command, file, API, identifier และคำที่ช่วยลดความกำกวม

เอกสารระบบหลักควรใช้ Thai–English เมื่อมีประโยชน์ต่อการใช้งานข้าม agent/platform โดยไม่จำเป็นต้องแปลทุกบรรทัดซ้ำหากทำให้เอกสารอ่านยาก

## 10. Current Foundation Boundary

ไฟล์นี้เป็น Candidate Foundation สำหรับ review บน `codex/project-execution-context-foundation-v0.1`.

การมีไฟล์นี้บน candidate branch ไม่ถือเป็นการ promote ไปยัง `main`, release, deployment หรือ production change.
