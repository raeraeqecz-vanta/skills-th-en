import { pathToFileURL } from 'node:url';

const DEFAULT_RUNTIME_URL = 'https://vanta-skills-th-en-candidate.raeraeqecz.workers.dev';

function requireOk(response, label) {
  if (!response.ok) {
    throw new Error(`${label} ${response.status}`);
  }
}

function requireShell(html, label) {
  if (!html.includes('VANTA Skills') || !html.includes('id="root"')) {
    throw new Error(`${label} content mismatch`);
  }
}

export async function verifyRuntime(baseUrl, fetchImpl = fetch) {
  const base = new URL(baseUrl);
  const root = new URL('/', base);

  const homeResponse = await fetchImpl(root);
  requireOk(homeResponse, 'home');
  const homeHtml = await homeResponse.text();
  requireShell(homeHtml, 'home');

  const assetRefs = [...homeHtml.matchAll(/(?:src|href)="([^"]*assets\/[^"]+)"/g)].map((match) => match[1]);
  if (assetRefs.length < 2) {
    throw new Error(`asset refs missing: ${assetRefs.length}`);
  }

  for (const ref of assetRefs) {
    const assetResponse = await fetchImpl(new URL(ref, root));
    requireOk(assetResponse, 'asset');
  }

  const buildInfoResponse = await fetchImpl(new URL('/build-info.json', base));
  requireOk(buildInfoResponse, 'build-info');
  const buildInfo = await buildInfoResponse.json();
  if (
    buildInfo.sourceState !== 'CLEAN_COMMIT' ||
    buildInfo.provenanceStatus !== 'RECONCILIATION_BASELINE_CANDIDATE' ||
    !/^[0-9a-f]{40}$/.test(buildInfo.sourceCommit ?? '')
  ) {
    throw new Error(`build-info mismatch ${JSON.stringify(buildInfo)}`);
  }

  const deepResponse = await fetchImpl(new URL('/runtime-smoke/deep-link', base));
  requireOk(deepResponse, 'deep');
  const deepHtml = await deepResponse.text();
  requireShell(deepHtml, 'spa fallback');

  return {
    runtimeSmoke: 'PASS',
    home: homeResponse.status,
    assets: assetRefs.length,
    buildInfo: buildInfoResponse.status,
    deep: deepResponse.status,
    sourceCommit: buildInfo.sourceCommit,
  };
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMain) {
  verifyRuntime(process.env.RUNTIME_SMOKE_URL || DEFAULT_RUNTIME_URL)
    .then((result) => console.log(JSON.stringify(result)))
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
}
