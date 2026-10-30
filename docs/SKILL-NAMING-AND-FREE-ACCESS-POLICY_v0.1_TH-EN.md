# Skill Naming & Free Access Policy v0.1 / นโยบายการตั้งชื่อและการใช้งาน Skill ฟรี

**Project:** SKILL / VANTA Skills  
**Repository:** `raeraeqecz-vanta/skills-th-en`  
**Status:** OWNER-APPROVED DIRECTION / CANDIDATE FOR CANONICAL PROMOTION  
**Date:** 2026-10-30  

## 1. Purpose / วัตถุประสงค์

กำหนดหลักถาวรสองเรื่องสำหรับ Skill ในโครงการนี้:

1. Skill ต้องใช้ชื่อที่บอกหน้าที่จริงและผู้ใช้เข้าใจได้ทันที ไม่ใช้ชื่อ tier, umbrella หรือ codename มาบดบังหน้าที่ของ Skill
2. Skill ทุกตัวต้องเข้าถึงและใช้งานได้ฟรี โดยไม่มี paid tier, premium unlock, restricted entitlement หรือ paywall สำหรับตัว Skill

## 2. Descriptive Skill Naming / ชื่อ Skill ต้องบอกหน้าที่จริง

ชื่อ Skill ต้อง:

- เป็นชื่อ standalone ที่อธิบายงานหลักของ Skill ได้โดยตรง
- ใช้ verb/action หรือ outcome ที่ผู้ใช้เข้าใจได้โดยไม่ต้องรู้ชื่อภายในของโครงการ
- หลีกเลี่ยง tier/codename เช่น `ULTIMATE`, `Premium`, `Pro`, `Elite` หรือคำอื่นที่สื่อระดับการเข้าถึงแทนหน้าที่จริง
- ไม่ใช้เลขโมดูลเป็นชื่อที่ผู้ใช้ต้องเห็น เช่น `001`, `002`, `003`
- แยกชื่อ Skill ออกจาก shared behavior หรือ governance rule ที่ไม่ใช่ Skill

### Renamed preserved design concepts / ชื่อใหม่ของแนวคิดที่เก็บรักษาไว้

| Previous working label | Descriptive Skill identity | Status |
|---|---|---|
| `ULTIMATE-001 — Epistemic Integrity & Verification` | `verify-before-claim` | Approved design preserved; runnable Skill not yet implemented |
| `ULTIMATE-002 — Problem Framing & Failure Definition` | `define-the-real-problem` | Approved design preserved; runnable Skill not yet implemented |
| `ULTIMATE-003 — Evidence Acquisition & Diagnostic Strategy` | `gather-diagnostic-evidence` | Candidate future Skill name; scope/design not yet approved for implementation |

`Internal Orchestration + Visible Checkpoints` ไม่ใช่ Skill แยกต่างหาก แต่เป็น shared interaction behavior: วิเคราะห์ภายในได้ลึก แต่รายงานต่อผู้ใช้เฉพาะ checkpoint ที่มีผลต่อการตัดสินใจ และห้ามทำงานเงียบโดยไม่มีสถานะเมื่อมีความคืบหน้าสำคัญ

## 3. Free Access Invariant / กฎว่าทุก Skill ต้องใช้ฟรี

**Invariant:** ทุก Skill ที่อยู่ใน canonical catalog ต้องสามารถเข้าถึงและใช้งานตัว Skill ได้โดยไม่ต้องจ่ายเงินเพื่อปลดล็อก Skill นั้น

ดังนั้น:

- ห้ามสร้าง paid Skill, premium Skill, locked Skill หรือ entitlement-gated Skill tier
- ห้ามเก็บ Skill source ที่จำเป็นต่อการใช้งานไว้หลัง paywall ของโครงการ
- ห้ามกำหนด subscription/payment ของ VANTA เป็นเงื่อนไขเพื่อเปิดใช้ Skill
- repository catalog และ Website ต้องไม่แสดง Skill แบบ locked/premium/restricted access
- หาก Skill เชื่อมกับบริการภายนอกที่มีค่าใช้จ่าย การเชื่อมต่อนั้นต้องเป็น optional enhancement ไม่ใช่เงื่อนไขบังคับของ core Skill workflow
- core Skill workflow ต้องมีเส้นทางที่ไม่ต้องซื้อ entitlement ของโครงการ และไม่ควรถูกออกแบบให้พึ่ง paid-only third-party capability โดยไม่มี free/manual fallback

ค่าใช้จ่ายของแพลตฟอร์มภายนอกที่ผู้ใช้เลือกเอง เช่น subscription ของ AI host, cloud provider หรือ third-party service ไม่ถือเป็นราคาของ Skill แต่ Skill ต้องระบุ dependency ดังกล่าวอย่างโปร่งใสและไม่ใช้เป็น paywall ของโครงการ

## 4. Distribution Direction / แนวทางการแจกจ่าย

- Public repository remains the preferred distribution source for canonical Skills.
- Distribution tooling may support installation, version pinning, adapters, mirrors or package formats, but must not turn Skill access into a paid/restricted tier.
- Access-control architecture may still exist for repository administration, secrets, production systems or private project data; this policy only prohibits restricting the Skill itself as a paid product.

## 5. Historical Record Rule / กฎสำหรับเอกสารเก่า

เอกสารหรือ PR เก่าที่มีคำ `ULTIMATE`, `restricted distribution`, `entitlement`, `locked access` หรือแนวคิด premium/private Skill ให้เก็บเป็น historical evidence ได้และไม่ต้อง rewrite history แต่ข้อความเหล่านั้น **ห้ามใช้เป็น current direction** เมื่อขัดกับ Owner decision วันที่ 2026-10-30 นี้

เมื่อดูเอกสารเก่า ให้ตีความชื่อเดิมตาม mapping ในเอกสารนี้ และใช้ descriptive Skill identity เป็นชื่อปัจจุบัน

## 6. Implementation Boundary / ขอบเขตการดำเนินการ

นโยบายนี้อนุมัติทิศทาง Naming + Free Access เท่านั้น ไม่ได้อนุมัติให้ implement Skill ใหม่โดยอัตโนมัติ

การสร้าง `verify-before-claim`, `define-the-real-problem` หรือ `gather-diagnostic-evidence` เป็น runnable Skill ยังต้องผ่าน scope/design/implementation review และ approval ตาม governance ปัจจุบัน
