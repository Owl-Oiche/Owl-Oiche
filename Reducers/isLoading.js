import { IS_LOADING } from '../Actions/isLoading';

export default function(state = false, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.payload;
    default:
      return state;
  };
};
