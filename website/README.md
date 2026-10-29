# VANTA Skills Website — Reconstructed Source Baseline Candidate

สถานะ: `RECONSTRUCTED SOURCE BASELINE CANDIDATE` — ยังไม่ใช่ Approved/Frozen Baseline

Current amendment: `v0.7.6-rc.3` — reconstructed on the current canonical `main` baseline and synchronized to the 12-Skill repository catalog, including `ui-ux-master-craft`.

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
- Website catalog ต้องตาม canonical Skill catalog และห้ามนิยาม taxonomy แยกเอง
- `dist/` เป็น generated artifact และไม่ commit
- ไม่มี duplicated standalone preview implementation เพื่อลด behavior drift; preview ให้ใช้ `npm run dev` หรือ `npm run preview`

## Release traceability

`npm run build` เรียก `scripts/generate-build-info.mjs` เพื่อสร้าง `public/build-info.json` ก่อน build โดยบันทึก version, Git commit (ถ้ามี), clean/dirty state และ provenance status

การมี source candidate, lockfile, test หรือ build ที่ผ่าน ไม่ได้อนุญาต merge, deploy หรือ production change โดยอัตโนมัติ
