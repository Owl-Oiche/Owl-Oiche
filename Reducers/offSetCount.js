import { OFF_SET_COUNT } from '../Actions/offSetCount';

export default function(state = 0, action) {
  switch (action.type) {
    case OFF_SET_COUNT:
      return state + 20;
    default:
      return state;
  };
};
