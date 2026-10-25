import test from 'node:test';
import assert from 'node:assert/strict';
import { verifyRuntime } from '../scripts/runtime-smoke.mjs';

const HOME = '<!doctype html><title>VANTA Skills</title><div id="root"></div><link rel="stylesheet" href="./assets/app.css"><script type="module" src="./assets/app.js"></script>';
const INFO = {
  sourceCommit: 'b2e68f367fb4fca540249557e7183e0befb44808',
  sourceState: 'CLEAN_COMMIT',
  provenanceStatus: 'RECONCILIATION_BASELINE_CANDIDATE',
};

function fakeFetch(overrides = {}) {
  return async (input) => {
    const url = new URL(String(input));
    const key = `${url.pathname}${url.search}`;
    if (overrides[key]) return overrides[key];
    if (url.pathname === '/' || url.pathname === '/runtime-smoke/deep-link') {
      return new Response(HOME, { status: 200, headers: { 'content-type': 'text/html' } });
    }
    if (url.pathname === '/build-info.json') {
      return Response.json(INFO);
    }
    if (url.pathname.startsWith('/assets/')) {
      return new Response('asset', { status: 200 });
    }
    return new Response('not found', { status: 404 });
  };
}

test('runtime smoke validates home, static assets, build provenance, and SPA fallback', async () => {
  const result = await verifyRuntime('https://candidate.example', fakeFetch());
  assert.equal(result.runtimeSmoke, 'PASS');
  assert.equal(result.home, 200);
  assert.equal(result.assets, 2);
  assert.equal(result.buildInfo, 200);
  assert.equal(result.deep, 200);
  assert.equal(result.sourceCommit, INFO.sourceCommit);
});

test('runtime smoke fails when a referenced static asset is unavailable', async () => {
  await assert.rejects(
    verifyRuntime('https://candidate.example', fakeFetch({ '/assets/app.css': new Response('missing', { status: 404 }) })),
    /asset 404/,
  );
});
