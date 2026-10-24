import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
const provenance = JSON.parse(readFileSync(resolve(root, 'source-provenance.json'), 'utf8'));

function git(args) {
  try {
    return execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return null;
  }
}

const commit = git(['rev-parse', 'HEAD']);
const status = git(['status', '--porcelain']);
const sourceState = commit ? (status ? 'DIRTY_WORKTREE' : 'CLEAN_COMMIT') : 'NO_GIT_CONTEXT';

const info = {
  version: pkg.version,
  channel: 'release-candidate',
  sourceCommit: commit,
  sourceState,
  provenanceStatus: provenance.status,
  repositoryBaseCommitObserved: provenance.repositoryBaseCommitObserved,
  builtAt: new Date().toISOString(),
};

mkdirSync(resolve(root, 'public'), { recursive: true });
writeFileSync(resolve(root, 'public', 'build-info.json'), `${JSON.stringify(info, null, 2)}\n`);
console.log(JSON.stringify(info));
