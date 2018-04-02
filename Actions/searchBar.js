export const SET_SEARCH_VALUE = 'set_search_value';

export function setSearchValue(searchTerm) {
  return {
    payload: searchTerm,
    type: SET_SEARCH_VALUE,
  };
};
