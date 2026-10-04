# VANTA Skills Website — Reconstructed Source Baseline Candidate

สถานะ: `RECONSTRUCTED SOURCE BASELINE CANDIDATE` — ยังไม่ใช่ Approved/Frozen Baseline

เว็บไซต์ React + Vite สำหรับ `raeraeqecz-vanta/skills-th-en` โดย source candidate นี้สร้างจากหลักฐานสามชั้น:

1. `VANTA-SKILLS-TH-EN-WEBSITE-PREMIUM-v0.7.2.zip` — structured React/Vite source ล่าสุดที่กู้ได้
2. `VANTA-SKILLS-TH-EN-WEBSITE-v0.7.5-dist.zip` — runtime reference สำหรับ Skill Detail, VANTA icon set และ visual rules
3. `VANTA-SKILLS-TH-EN-WEBSITE-v0.7.6-rc.1-dist.zip` — targeted fixes ที่นำกลับมา implement ใน source

## Commands

```bash
npm ci
npm test
npm run build
npm run dev
```

## Source boundaries

- `src/data/skills.js` เป็น metadata เพื่อการแสดงผล ไม่ใช่ Source of Truth ของ Skill logic
- Canonical Skill content ยังคงอยู่ที่ repository root `skills/**/SKILL.md`
- `dist/` เป็น generated artifact และไม่ commit
- ไม่มี duplicated standalone preview implementation เพื่อลด behavior drift; preview ให้ใช้ `npm run dev` หรือ `npm run preview`

## Release traceability

`npm run build` เรียก `scripts/generate-build-info.mjs` เพื่อสร้าง `public/build-info.json` ก่อน build โดยบันทึก version, Git commit (ถ้ามี), clean/dirty state และ provenance status
