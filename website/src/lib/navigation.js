export const catalogEntryState = Object.freeze({ vantaSkillsFromCatalog: true });

export function makeSkillUrl(pathname, slug) {
  return `${pathname}?skill=${encodeURIComponent(slug)}`;
}

export function makeSectionUrl(pathname, anchor = 'skills') {
  return `${pathname}#${encodeURIComponent(anchor)}`;
}

export function canReturnWithHistory(state) {
  return state?.vantaSkillsFromCatalog === true;
}
