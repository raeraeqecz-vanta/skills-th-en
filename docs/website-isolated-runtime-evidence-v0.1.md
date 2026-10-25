# Website Isolated Runtime Evidence v0.1

Status: `RUNTIME_VERIFIED / VISUAL_PARITY_PENDING`

This record documents the isolated Cloudflare Workers Static Assets candidate used to verify the reconstructed website source. It does not approve or freeze a production baseline and does not authorize a production cutover.

## Source

- Repository: `raeraeqecz-vanta/skills-th-en`
- Branch: `codex/website-source-reconciliation-v0.1`
- Verified source commit: `546cac10a796c7f0df9cd23a50d75166e58a86f4`
- GitHub Actions verification run: `40171419484`
- GitHub verification result: `PASS`

## Isolated Cloudflare candidate

- Worker: `vanta-skills-th-en-candidate`
- Worker URL: `https://vanta-skills-th-en-candidate.raeraeqecz.workers.dev`
- Worker version: `1f2556d9-b0da-4d69-b38c-d99399de522a` (version 4)
- Workers Builds trigger: `d751c2fa-e4b4-4a0c-b98c-755042e68ecd`
- Runtime verification build: `fec86883-2aee-4fb1-85a4-d49be0605ac4`
- Build result: `success`
- Build command: `npm test && npm run build`
- Deploy command: `npx wrangler@4.152.0 deploy && node scripts/runtime-smoke.mjs`
- Build root: `website`

## Runtime verification

The deploy-time runtime smoke test executed from the Cloudflare Builds environment against the deployed Worker and returned:

```json
{"runtimeSmoke":"PASS","home":200,"assets":2,"buildInfo":200,"deep":200,"sourceCommit":"546cac10a796c7f0df9cd23a50d75166e58a86f4"}
```

The runtime gate therefore confirms:

- home document responds successfully;
- referenced CSS and JavaScript assets respond successfully;
- `build-info.json` is available and reports a clean reconciliation candidate commit;
- SPA fallback responds successfully on a non-file deep path;
- the deployed runtime traces back to the exact verified Git commit.

## Guardrail discovered and fixed

An intermediate RED test commit was able to reach the isolated Worker because the first Workers Builds trigger used only `npm run build`. The isolated trigger was then hardened to `npm test && npm run build`, so failing tests block future deployments at the Cloudflare build layer as well as in GitHub Actions.

This incident affected only the isolated candidate Worker. The legacy Cloudflare Pages production project and its domain were not changed.

## Remaining gate

`Visual / Interaction Parity` is still pending. Cloudflare Browser Rendering is currently rate-limited, and URL Scanner verification was unavailable because its credential was rejected. Runtime success must not be interpreted as visual parity with the legacy Direct Upload production site.

Production merge, production resource replacement, domain cutover, baseline approval, and baseline freeze remain separate Owner approval gates.
