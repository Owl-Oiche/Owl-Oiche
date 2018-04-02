export const SET_ACTIVE_TAB = 'set_active_tab';

export function setActiveTab(tabName) {
  return {
    type: SET_ACTIVE_TAB,
    payload: tabName,
  };
};
