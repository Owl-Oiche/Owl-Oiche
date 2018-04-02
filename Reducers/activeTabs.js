import { SET_ACTIVE_TAB } from '../Actions/activeTabs';

export default function(state = '', action) {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTabs: action.payload };
    default:
      return state;
  };
};
