export const SEARCH = 'SEARCH';

export function search(searchValue) {
  return {type: SEARCH, searchValue};
}
