---
name: ui-ux-master-craft
description: >
  TH: ออกแบบ พัฒนา หรือตรวจทานเว็บอินเทอร์เฟซและ Design System โดยยึดงานจริง
  ความชัดเจน การเข้าถึง การแสดงผลหลายขนาด และหลักฐาน ใช้กับเว็บแอป Dashboard,
  Portal, Form และผลิตภัณฑ์ที่มี Workflow; ไม่ใช้กับงาน Backend ล้วนหรือการสำรวจ
  แบรนด์การตลาดโดยไม่มีอินเทอร์เฟซเป้าหมาย
  EN: Design, implement, or critique web interfaces and design systems grounded
  in real tasks, clarity, accessibility, responsive behavior, and evidence. Use
  for web apps, dashboards, portals, forms, and workflow products; skip pure
  backend work or marketing-only brand exploration without a target interface.
---

# UI/UX Master Craft / ออกแบบ UI/UX อย่างมีหลัก

Create interfaces that help people complete real work, communicate state and consequence, and express a product-specific visual character. Do not start from a component catalog or a generic dashboard template.

สร้างอินเทอร์เฟซที่ช่วยให้ผู้ใช้ทำงานจริงได้ สื่อสารสถานะและผลกระทบชัดเจน และมีบุคลิกทางภาพที่เป็นของผลิตภัณฑ์นั้น อย่าเริ่มจากการหยิบ Catalog ของ Component หรือแม่แบบ Dashboard ทั่วไปมาใช้ทันที

## Operating boundary / ขอบเขตการทำงาน

- Inspect the active project, existing interface, design assets, constraints, related skills, and prior decisions before proposing changes. Preserve unrelated work.
- Separate `VERIFIED`, `INFERENCE`, `UNKNOWN`, and `PROPOSED` information. Do not fill product or workflow gaps with invented behavior.
- Review and design are read-only by default. Implement only when the user has authorized implementation in the current task; deployment, publishing, merging, production, data, authentication, and permission changes require their own authority.
- Treat connected tools and design files as capabilities, not permission. Use only resources relevant to the stated project and task.
- ตรวจโปรเจกต์ อินเทอร์เฟซเดิม Design Assets ข้อจำกัด Skill ที่เกี่ยวข้อง และการตัดสินใจก่อนหน้า ก่อนเสนอการเปลี่ยนแปลง พร้อมรักษางานที่ไม่เกี่ยวข้อง
- แยกข้อมูลเป็น `VERIFIED`, `INFERENCE`, `UNKNOWN`, `PROPOSED` ห้ามแต่งพฤติกรรมผลิตภัณฑ์หรือ Workflow เพื่ออุดช่องว่างเอง
- การ Review และ Design เป็นแบบอ่านอย่างเดียวโดยปริยาย ให้ Implement เมื่อผู้ใช้อนุมัติขอบเขตนั้นแล้วเท่านั้น ส่วน Deploy, Publish, Merge, Production, ข้อมูล, Authentication และ Permission ต้องมีสิทธิ์ของงานนั้นโดยเฉพาะ
- เครื่องมือและไฟล์ Design ที่เชื่อมต่อเป็นเพียงความสามารถ ไม่ใช่การอนุญาต ใช้เฉพาะทรัพยากรที่เกี่ยวข้องกับโปรเจกต์และงานนี้

## Workflow / ขั้นตอน

1. **Inspect / สำรวจ** — identify the active product, user roles, target routes or screens, source of truth, viewport conditions, existing design system, and any current user changes. If reviewing a rendered interface, inspect the actual interface and interactions available; do not infer behavior from a screenshot alone.
2. **Frame the job / ระบุงานหลัก** — record who is acting, what outcome they need, which state changes their decision, what evidence they need, and what consequence or recovery follows the action. Mark unknowns.
3. **State the visual thesis / สรุปแนวภาพ** — write one sentence linking audience, job, and visual language. Choose a dominant work object such as a queue, record, editor, canvas, comparison, form, or active process. Explain one structural decision that makes the interface fit this product.
4. **Build the system / วางระบบ** — define typography roles, semantic color tokens, spacing, surface levels, component behavior, breakpoints, and interaction states. Use the reference guide for defaults and distinguish recommendations from standards.
5. **Cover real conditions / ครอบคลุมสภาพใช้งานจริง** — account for compact, medium, and expanded layouts; keyboard; zoom; real and long Thai copy; loading, empty, validation, error, blocked, and partial/stale data; touch and reduced motion when relevant.
6. **Verify / ตรวจสอบ** — review rendered screens and applicable states. Check actual foreground/background pairs, focus, target spacing, reflow, Thai line breaking, and task completion. A mockup or screenshot alone cannot prove interactive accessibility.
7. **Handoff / ส่งต่องาน** — summarize the thesis and workflow, changes or findings, evidence, unresolved decisions, and next action. Clearly label what is verified versus recommended.

## Design rules / หลักการออกแบบ

- Give each screen or route one dominant task. Keep navigation and summary metrics subordinate unless they directly change the user's decision.
- Build a distinct product silhouette and information hierarchy. Avoid decorative card grids, equal-weight KPI blocks, gratuitous pills, generic gradients, glass surfaces, and identical rounded boxes unless evidence supports them.
- Choose type for language coverage, legibility, weight range, numerals, and loading conditions. For Thai, use a Thai-capable family, real Thai copy, sufficient line height, and no negative tracking on Thai runs.
- Define role-based color tokens before component styling. Check every color pairing that appears in the rendered theme and state; never use color alone to communicate status.
- Use a bounded spacing scale as a starting point, then adapt to the task. Recompose narrow layouts rather than shrinking desktop. Give dense work surfaces the width they need and move secondary details to a clear detail view on compact screens.
- Prefer semantic HTML and native controls. Custom composite widgets must follow the relevant WAI-ARIA Authoring Practices keyboard model.
- Design component states as part of the flow: idle, loading, success, empty, validation, error, blocked/permission, and partial or stale data where relevant.
- Use motion to explain state change or feedback. Respect `prefers-reduced-motion`; remove non-essential movement for users who request reduced motion.
- ใช้หนึ่งงานหลักต่อหน้าหรือ Route ให้ Navigation และตัวเลขสรุปเป็นองค์ประกอบรอง เว้นแต่ตัวเลขเหล่านั้นเปลี่ยนการตัดสินใจโดยตรง
- ออกแบบ Silhouette และลำดับข้อมูลให้สะท้อนผลิตภัณฑ์ หลีกเลี่ยง Grid การ์ดตกแต่ง KPI น้ำหนักเท่ากัน Pill ที่เกินจำเป็น Gradient ทั่วไป พื้นผิวกระจก และกล่องมุมมนเหมือนกันทั้งหมด เว้นแต่มีเหตุผลจากงาน
- เลือกฟอนต์จากความครอบคลุมภาษา ความอ่านง่าย น้ำหนัก ตัวเลข และเงื่อนไขโหลด สำหรับภาษาไทยให้ใช้ฟอนต์ที่รองรับไทย ข้อความไทยจริง ระยะบรรทัดพอเหมาะ และไม่ลด Letter Spacing ของข้อความไทย
- กำหนด Color Token ตามบทบาทก่อนตกแต่ง Component ตรวจคู่สีที่ปรากฏจริงใน Theme และ State และห้ามใช้สีเพียงอย่างเดียวเพื่อสื่อสถานะ
- ใช้มาตราส่วน Spacing ที่มีขอบเขตเป็นจุดเริ่มต้น แล้วปรับตามงาน จัด Layout ใหม่เมื่อจอแคบแทนการบีบแบบ Desktop ให้พื้นที่กับ Work Surface ที่มีข้อมูลหนาแน่น และย้ายรายละเอียดรองไปยังหน้ารายละเอียดที่ชัดเจน
- ให้ความสำคัญกับ Semantic HTML และ Native Control; Composite Widget แบบกำหนดเองต้องทำตาม Keyboard Model ของ WAI-ARIA Authoring Practices ที่เกี่ยวข้อง
- ออกแบบ State ของ Component ให้เป็นส่วนหนึ่งของ Flow ได้แก่ idle, loading, success, empty, validation, error, blocked/permission และ partial/stale ตามความเกี่ยวข้อง
- ใช้ Motion เพื่ออธิบายการเปลี่ยนสถานะหรือ Feedback และเคารพ `prefers-reduced-motion` โดยปิดการเคลื่อนไหวที่ไม่จำเป็นเมื่อผู้ใช้ร้องขอ

## References / เอกสารอ้างอิง

- Read [Evidence Base](references/evidence-base.md) when choosing type, color, spacing, responsive behavior, controls, data tables, states, or motion. It labels standards, recommended defaults, and context decisions separately.
- Use [Review Checklist](references/review-checklist.md) for critique or before claiming an implemented interface is polished. Mark each applicable item and attach evidence; do not treat the checklist as an automatic compliance certificate.
- อ่าน [Evidence Base](references/evidence-base.md) เมื่อเลือก Typography, Color, Spacing, Responsive, Control, Data Table, State หรือ Motion โดยเอกสารแยกมาตรฐาน ค่าแนะนำ และการตัดสินใจตามบริบท
- ใช้ [Review Checklist](references/review-checklist.md) เมื่อตรวจทานหรือก่อนสรุปว่างาน Implement ขัดเกลาแล้ว ทำเครื่องหมายรายการที่เกี่ยวข้องพร้อมหลักฐาน Checklist ไม่ใช่ใบรับรอง Compliance โดยอัตโนมัติ

## Review output / รูปแบบผล Review

For each material finding, report:

| Field | Content |
|---|---|
| Finding | The observed issue or opportunity; one per finding. |
| Evidence | Screen, route, state, viewport, interaction, or source inspected. |
| User impact | Who is affected and how task completion, comprehension, or safety changes. |
| Priority | `P0` blocks a critical task or creates material harm; `P1` significantly impairs a primary workflow or access; `P2` is a meaningful usability issue with a workaround; `P3` is a refinement. Explain context. |
| Recommendation | A bounded change tied to the evidence, not a speculative redesign. |
| Verification | `VERIFIED`, `NOT TESTED`, or `BLOCKED`, with method or reason. |

Do not call an interface polished when high-impact task, accessibility, responsive, or consequential-action failures remain. State what could not be checked.

แต่ละ Finding ที่มีผลต่อการใช้งานต้องรายงานสิ่งที่พบ หลักฐาน ผลต่อผู้ใช้ Priority ข้อเสนอที่จำกัดขอบเขต และสถานะการตรวจสอบ ห้ามเรียกอินเทอร์เฟซว่าขัดเกลาแล้วหากยังมีปัญหาผลกระทบสูงด้านงานหลัก การเข้าถึง Responsive หรือการกระทำที่มีผลสำคัญ ต้องระบุสิ่งที่ตรวจไม่ได้ด้วย

## Handoff / การส่งต่องาน

Provide the visual thesis, primary workflow, relevant responsive and accessibility behavior, verified findings or changes, unresolved decisions, and exactly one next action. Keep design recommendations separate from implementation, and implementation separate from release or deployment.

ส่งต่อ Visual Thesis, Workflow หลัก, พฤติกรรม Responsive และ Accessibility ที่เกี่ยวข้อง, ข้อค้นพบหรือการเปลี่ยนแปลงที่ตรวจแล้ว, การตัดสินใจที่ยังค้าง และ Next Action หนึ่งข้อ แยกข้อเสนอ Design ออกจาก Implementation และแยก Implementation ออกจาก Release หรือ Deployment
