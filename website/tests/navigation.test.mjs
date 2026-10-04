import test from 'node:test';
import assert from 'node:assert/strict';
import { canReturnWithHistory, catalogEntryState, makeSectionUrl, makeSkillUrl } from '../src/lib/navigation.js';

test('skill URL preserves deployment pathname and encodes the slug', () => {
  assert.equal(makeSkillUrl('/vanta-skills/', 'to-spec'), '/vanta-skills/?skill=to-spec');
});

test('section URL preserves deployment pathname for subpath hosting', () => {
  assert.equal(makeSectionUrl('/vanta-skills/', 'skills'), '/vanta-skills/#skills');
});

test('catalog-origin state is eligible for a true browser history back', () => {
  assert.equal(canReturnWithHistory(catalogEntryState), true);
});

test('direct-link state falls back instead of assuming a safe history back', () => {
  assert.equal(canReturnWithHistory(null), false);
  assert.equal(canReturnWithHistory({}), false);
});
