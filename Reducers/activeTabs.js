import { SET_ACTIVE_TAB } from '../Actions/activeTabs';

export default function(state = 1, action) {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return action.payload;
    default:
      return state;
  };
};
