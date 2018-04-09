import { UPDATE_BUSINESS } from '../Actions/updateBusiness';

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_BUSINESS:
      return state.concat({ id: action.id, hours: action.hours });
    default:
      return state;
  }
}
