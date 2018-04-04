import { SET_ON_DETAIL_PAGE } from '../Actions/onDetailPage';

export default function(state = false, action) {
  switch (action.type) {
    case SET_ON_DETAIL_PAGE:
      return action.payload;
    default:
      return state;
  };
};
