# VANTA Skills Website — Reconciliation Baseline Candidate

สถานะ: `RECONCILIATION BASELINE CANDIDATE` — ยังไม่ใช่ Approved/Frozen Baseline

เว็บไซต์ React + Vite สำหรับ `raeraeqecz-vanta/skills-th-en` โดย candidate นี้ต่อยอดจาก reconstructed source ที่สร้างจากหลักฐานสามชั้น:

1. `VANTA-SKILLS-TH-EN-WEBSITE-PREMIUM-v0.7.2.zip` — structured React/Vite source ล่าสุดที่กู้ได้
2. `VANTA-SKILLS-TH-EN-WEBSITE-v0.7.5-dist.zip` — runtime reference สำหรับ Skill Detail, VANTA icon set และ visual rules
3. `VANTA-SKILLS-TH-EN-WEBSITE-v0.7.6-rc.1-dist.zip` — targeted fixes ที่นำกลับมา implement ใน source

Working reconciliation branch: `codex/website-source-reconciliation-v0.1`

## Reproducible commands

```bash
npm ci
npm test
npm run build
git diff --exit-code -- package-lock.json
```

Runtime/package manager ถูก pin ผ่าน `.node-version`, `packageManager` และ committed `package-lock.json` เพื่อให้ clean build สามารถทำซ้ำได้

## Source boundaries

- `src/data/skills.js` และ `src/data/skillDetails.js` เป็น presentation metadata ไม่ใช่ Source of Truth ของ Skill logic
- Canonical Skill content ยังคงอยู่ที่ repository root `skills/**/SKILL.md`
- `dist/` เป็น generated artifact และไม่ commit
- ไม่มี duplicated standalone preview implementation; preview ใช้ `npm run dev` หรือ `npm run preview`

## Release traceability

`npm run build` เรียก `scripts/generate-build-info.mjs` เพื่อสร้าง `public/build-info.json` ก่อน Vite build โดยบันทึก version, Git commit, clean/dirty state และ provenance status จาก source candidate

Production requirements และ release gates อยู่ใน `PRODUCTION-BUILD-CONTRACT.md`

## Governance

Candidate นี้ยังห้ามตีความว่าเป็นการอนุมัติ merge เข้า `main`, Cloudflare Production deployment, domain cutover หรือการลบ Legacy Pages resource จนกว่า Owner จะอนุมัติ Website Baseline และ Production action แยกต่างหาก
