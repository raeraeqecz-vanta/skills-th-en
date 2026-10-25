# VANTA Skills Website — Production Build Contract v0.1

สถานะ: `CANDIDATE` — ใช้สำหรับ reconciliation และ verification เท่านั้น ยังไม่ใช่ Approved/Frozen Production Baseline

## Runtime and package manager

- Node.js: `22.23.3` (`.node-version`)
- npm: `10.9.9` (`packageManager` in `package.json`)
- Dependency installation: `npm ci` เท่านั้นสำหรับ CI/Production build
- `package-lock.json` ต้องถูก commit และห้ามเปลี่ยนจากขั้นตอน build โดยไม่ได้ตั้งใจ

## Verification sequence

```bash
npm ci
npm test
npm run build
git diff --exit-code -- package-lock.json
```

ทุกคำสั่งต้อง exit code `0` ก่อน candidate จะถูกพิจารณาสำหรับ release

## Build output

- Source root: `website/`
- Build tool: Vite
- Build command: `npm run build`
- Generated output: `website/dist/`
- `dist/` เป็น generated artifact และไม่ใช่ Source of Truth
- `scripts/generate-build-info.mjs` ต้องสร้าง `dist/build-info.json` ผ่าน Vite public assets pipeline เพื่อบันทึก source/build provenance

## Source of Truth boundaries

- Skill logic/content: repository root `skills/**/SKILL.md` บน approved repository baseline
- Website presentation source: `website/src/**`
- Website metadata ใน `website/src/data/**` ห้ามถูกตีความเป็น canonical skill logic
- Deployment resource หรือ compiled `dist/` ห้ามถูกใช้แทน Git source เป็น Source of Truth

## Release gates

ก่อนสร้างหรือเปลี่ยน Production resource ต้องมีหลักฐานครบอย่างน้อย:

1. Clean install จาก committed lockfile ผ่าน
2. Test suite ผ่าน
3. Production build ผ่าน
4. Lockfile ไม่ drift ระหว่าง build
5. Build artifact มี commit/provenance metadata
6. Runtime/visual verification ผ่านใน preview หรือ isolated production candidate
7. Owner อนุมัติ Website Baseline และ Production cutover แยกกัน

## Deployment boundary

Target architecture ที่กำลังประเมินคือ GitHub → Cloudflare Workers Builds → Workers Static Assets แต่เอกสารนี้ **ไม่อนุมัติ deployment, production resource creation, domain cutover หรือ merge เข้า `main`** โดยอัตโนมัติ
