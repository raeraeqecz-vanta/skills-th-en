# Skill Catalog / สารบัญ Skill

Browse the collection by the work it supports. Each collection page links to its skills and explains its boundary.

เลือกหมวดตามประเภทงานที่ต้องการ แต่ละหน้าหมวดอธิบายขอบเขตและลิงก์ไปยัง Skill ที่เกี่ยวข้อง

| Collection | Use it for | Skills |
|---|---|---|
| [Foundation](foundation/README.md) / พื้นฐาน | Establish project context, resolve conflicts, and route work. / ตั้งบริบท แก้ความขัดแย้ง และเลือกขั้นตอนงาน | [setup-skill-context](foundation/setup-skill-context/SKILL.md), [reconcile-work-context](foundation/reconcile-work-context/SKILL.md), [choose-next-skill](foundation/choose-next-skill/SKILL.md), [stress-test-and-sharpen](foundation/stress-test-and-sharpen/SKILL.md) |
| [Specification](specification/README.md) / ข้อกำหนด | Turn intent into governed specifications and actionable tasks. / แปลงเจตนาเป็นข้อกำหนดและงานที่ลงมือทำได้ | [to-spec](specification/to-spec/SKILL.md), [write-governed-spec](specification/write-governed-spec/SKILL.md), [blueprint-to-tasks](specification/blueprint-to-tasks/SKILL.md) |
| [Design](design/README.md) / การออกแบบ | Design and review interface and experience systems. / ออกแบบและตรวจทานระบบ UI/UX | [ui-ux-master-craft](design/ui-ux-master-craft/SKILL.md) |
| [Implementation](implementation/README.md) / การพัฒนา | Implement approved scope and review code changes. / พัฒนาตามขอบเขตที่อนุมัติและตรวจโค้ด | [implement-approved-task](implementation/implement-approved-task/SKILL.md), [code-review-and-fix](implementation/code-review-and-fix/SKILL.md) |
| [Documentation](documentation/README.md) / เอกสาร | Create practical user and operational manuals. / จัดทำคู่มือผู้ใช้และปฏิบัติการ | [write-user-manual](documentation/write-user-manual/SKILL.md) |
| [Release](release/README.md) / ส่งมอบ | Assess readiness and prepare controlled handoffs. / ตรวจความพร้อมและเตรียมส่งมอบอย่างมีการควบคุม | [release-and-handoff](release/release-and-handoff/SKILL.md) |

## Choosing a path / เลือกลำดับงาน

Start with Foundation when project identity, source of truth, or current state is uncertain. Use Specification before implementation when requirements or acceptance criteria are not settled. Design work may lead to implementation, but a design decision does not by itself authorize code changes, external publication, or deployment.

เริ่มที่ Foundation เมื่อยังไม่ชัดว่าเป็นโปรเจกต์ใด ใช้แหล่งข้อมูลใด หรือสถานะปัจจุบันเป็นอย่างไร ใช้ Specification ก่อนพัฒนาเมื่อข้อกำหนดหรือเกณฑ์รับงานยังไม่ลงตัว งาน Design อาจส่งต่อไป Implementation ได้ แต่การตัดสินใจด้าน Design ไม่ได้อนุญาตให้แก้โค้ด เผยแพร่ภายนอก หรือ Deploy โดยอัตโนมัติ

## Category rule / กติกาการจัดหมวด

Place a skill in the collection that describes its primary job. Use `domains/` only when a coherent domain-specific collection exists; do not create a new top-level category for a single loosely related topic. Keep this catalog and each collection README in sync with the skill folders.

จัด Skill ตามหน้าที่หลัก ใช้ `domains/` เมื่อมีชุด Skill เฉพาะโดเมนที่มีเนื้อหาร่วมกันชัดเจน ไม่สร้างหมวดระดับบนใหม่เพียงเพราะมีหัวข้อเดียวที่ยังไม่สัมพันธ์กับชุดอื่น ต้องอัปเดตสารบัญนี้และ README ของหมวดให้ตรงกับโฟลเดอร์ Skill เสมอ
