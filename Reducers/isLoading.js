import { IS_LOADING } from '../Actions/isLoading';

export default function(state = false, action) {
  switch (action.type) {
    case IS_LOADING:
      return !state;
    default:
      return state;
  };
};
