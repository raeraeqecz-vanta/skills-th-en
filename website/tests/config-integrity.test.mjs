import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const viteConfig = readFileSync(new URL('../vite.config.js', import.meta.url), 'utf8');
const wranglerConfig = readFileSync(new URL('../wrangler.jsonc', import.meta.url), 'utf8');
const detail = readFileSync(new URL('../src/components/SkillDetail.jsx', import.meta.url), 'utf8');
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');

test('Vite uses a relative base so dist works from root or a subpath', () => {
  assert.match(viteConfig, /base:\s*['"]\.\/['"]/);
});

test('Cloudflare candidate is an isolated assets-only SPA Worker', () => {
  assert.match(wranglerConfig, /"name"\s*:\s*"vanta-skills-th-en-candidate"/);
  assert.match(wranglerConfig, /"compatibility_date"\s*:\s*"2026-10-25"/);
  assert.match(wranglerConfig, /"workers_dev"\s*:\s*true/);
  assert.match(wranglerConfig, /"preview_urls"\s*:\s*true/);
  assert.match(wranglerConfig, /"directory"\s*:\s*"\.\/dist"/);
  assert.match(wranglerConfig, /"not_found_handling"\s*:\s*"single-page-application"/);
  assert.doesNotMatch(wranglerConfig, /"main"\s*:/);
  assert.doesNotMatch(wranglerConfig, /"route(?:s)?"\s*:/);
});

test('detail copy reports both success and failure through a status region', () => {
  assert.match(detail, /copyStatus === 'copied'/);
  assert.match(detail, /setCopyStatus\('error'\)/);
  assert.match(detail, /คัดลอกไม่สำเร็จ/);
  assert.match(detail, /role="status"/);
});

test('back routing uses history.back for catalog entries and replaceState for direct-link fallback', () => {
  assert.match(app, /window\.history\.back\(\)/);
  assert.match(app, /replace:\s*true/);
});
