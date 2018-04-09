import { SET_ON_DETAIL_PAGE } from '../Actions/onDetailPage';

export default function(state = { onDetailPage: false, id: -1 }, action) {
  switch (action.type) {
    case SET_ON_DETAIL_PAGE:
      return { onDetailPage: !state.onDetailPage, id: action.payload };
    default:
      return { ...state };
  };
};
