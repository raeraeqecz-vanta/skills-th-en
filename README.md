# VANTA Skills

Thai–English governed AI skills for project context, specification, task breakdown, design, implementation, quality assurance, documentation, and release workflows.

VANTA Skills is designed to make structured AI workflows easier to understand and use, while keeping governance, authority, evidence, and handoff rules explicit.

## Install / ติดตั้ง

ติดตั้งแบบโต้ตอบ / Interactive install:

```bash
npx skills add raeraeqecz-vanta/skills-th-en
```

ติดตั้งแบบ Global และข้ามคำถามยืนยัน / Global non-interactive install:

```bash
npx skills add raeraeqecz-vanta/skills-th-en -g -y
```

ติดตั้งเฉพาะ Skill / Install a specific Skill:

```bash
npx skills add raeraeqecz-vanta/skills-th-en --skill setup-skill-context
```

## Collections / หมวด Skill

- [Skill Catalog / สารบัญ Skill](skills/README.md) — browse every collection and skill.
- [Foundation / พื้นฐาน](skills/foundation/README.md) — project context, capability, reconciliation, and routing.
- [Specification / ข้อกำหนด](skills/specification/README.md) — requirements, governed specs, and task breakdown.
- [Design / การออกแบบ](skills/design/README.md) — user interface and experience design, critique, and design-system guidance.
- [Implementation / การพัฒนา](skills/implementation/README.md) — approved implementation and code review.
- [Documentation / เอกสาร](skills/documentation/README.md) — user manuals and operational documentation.
- [Release / ส่งมอบ](skills/release/README.md) — release, handoff, and delivery readiness.
- `domains/` — reserved for future domain-specific collections; create a domain collection when it has a coherent set of skills.

## Free Access & Skill Naming / ใช้งานฟรีและชื่อ Skill ที่เข้าใจได้ทันที

**ทุก Skill ใน canonical catalog ต้องใช้งานตัว Skill ได้ฟรี** ไม่มี paid tier, premium unlock, locked Skill หรือ entitlement-gated Skill ของโครงการ

Every Skill in the canonical catalog must be available as a free Skill. The project does not use paid, premium, locked, or entitlement-gated Skill tiers.

ชื่อ Skill ต้องบอกหน้าที่จริงของมันโดยตรงและเป็น standalone name ที่ผู้ใช้เข้าใจได้ทันที หลีกเลี่ยง tier/codename เช่น `ULTIMATE`, `Premium`, `Pro` หรือเลขโมดูลที่ไม่ได้อธิบายงานของ Skill

Skill names must describe the actual job they perform. User-facing Skill identity should not depend on umbrella tiers, codenames, or module numbers.

บริการภายนอกที่ผู้ใช้เลือกเชื่อมอาจมีค่าใช้จ่ายของผู้ให้บริการนั้นเอง แต่ต้องไม่ถูกใช้เป็น paywall เพื่อปลดล็อกตัว Skill และ core Skill workflow ไม่ควรถูกบังคับให้พึ่ง paid-only capability โดยไม่มี free/manual fallback.

See [Skill Naming & Free Access Policy](docs/SKILL-NAMING-AND-FREE-ACCESS-POLICY_v0.1_TH-EN.md).

## Governance / การควบคุม

ทุก Skill ต้องตรวจบริบท ความสามารถ ทรัพยากร สิทธิ์ และงานที่อาจชนกันก่อนดำเนินการ การตรวจพบ Connection ไม่เท่ากับการได้รับอนุญาตให้ใช้หรือแก้ไขระบบ

Every Skill must inspect context, capabilities, resources, permissions, and possible conflicts before execution. A detected connection is not authorization to use or mutate a system.

Repository-local authority and current-state recovery are defined by the canonical root context files when present: `AGENTS.md`, `CONTEXT.md`, `PROJECT_STATE.md`, and `DECISIONS.md`. Skill-local behavior must not override those authority boundaries silently.

เมื่อมีไฟล์บริบทหลักบน canonical branch ให้ใช้ `AGENTS.md`, `CONTEXT.md`, `PROJECT_STATE.md` และ `DECISIONS.md` เป็นฐานสำหรับ authority และ current state โดย Skill แต่ละตัวห้ามข้ามขอบเขตดังกล่าวแบบเงียบ ๆ

ดูมาตรฐานกลางได้ที่ [Skill System Guide](docs/SKILL-SYSTEM-GUIDE_v0.1_TH-EN.md).

## Repository Identity / อัตลักษณ์ Repository

- Brand / แบรนด์: `VANTA`
- Product / ผลิตภัณฑ์: `VANTA Skills`
- Repository: `raeraeqecz-vanta/skills-th-en`
- Language model / รูปแบบภาษา: Thai–English (TH–EN)

## License

MIT License
