import test from 'node:test';
import assert from 'node:assert/strict';
import { groups } from '../src/data/skills.js';
import { skillDetails } from '../src/data/skillDetails.js';

const skills = groups.flatMap(group => group.skills);
const slugs = skills.map(skill => skill.slug);

test('catalog keeps the canonical twelve skill slugs including ui-ux-master-craft', () => {
  assert.equal(skills.length, 12);
  assert.equal(new Set(slugs).size, 12);
  assert.ok(slugs.includes('ui-ux-master-craft'));
});

test('every catalog skill has complete detail metadata and no orphan detail records exist', () => {
  const sortedSlugs = [...slugs].sort();
  const detailSlugs = Object.keys(skillDetails).sort();
  assert.deepEqual(detailSlugs, sortedSlugs);
  for (const slug of sortedSlugs) {
    const detail = skillDetails[slug];
    assert.ok(detail.when);
    assert.ok(detail.input);
    assert.equal(detail.steps.length, 3);
    assert.ok(detail.result);
    assert.ok(detail.next);
  }
});
