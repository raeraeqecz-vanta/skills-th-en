import test from 'node:test';
import assert from 'node:assert/strict';
import { groups } from '../src/data/skills.js';
import { skillDetails } from '../src/data/skillDetails.js';
const skills=groups.flatMap(group=>group.skills);
test('catalog keeps the confirmed eleven skill slugs',()=>{assert.equal(skills.length,11);assert.equal(new Set(skills.map(skill=>skill.slug)).size,11)});
test('every catalog skill has complete detail metadata and no orphan detail records exist',()=>{const slugs=skills.map(skill=>skill.slug).sort();const detailSlugs=Object.keys(skillDetails).sort();assert.deepEqual(detailSlugs,slugs);for(const slug of slugs){const detail=skillDetails[slug];assert.ok(detail.when);assert.ok(detail.input);assert.equal(detail.steps.length,3);assert.ok(detail.result);assert.ok(detail.next)}});
