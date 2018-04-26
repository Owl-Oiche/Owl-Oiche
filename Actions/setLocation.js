export const SET_LOCATION = 'set_location';

export function setLocation(location) {
  return {
    payload: location,
    type: SET_LOCATION,
  };
};
