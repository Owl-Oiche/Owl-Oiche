import { SET_LOCATION } from '../Actions/setLocation';

export default function(state='', action) {
  switch (action.type) {
    case SET_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
